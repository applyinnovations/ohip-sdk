"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const api_1 = require("./api");
const REQUEST_RETRY_LIMIT = 1;
function isAxiosError(error) {
    return !!error.response && !!error.config;
}
class Api {
    constructor(options) {
        this.options = options;
        this.retryLimit = 0;
        this.handleClientRequest = async (config) => {
            if (!this.token) {
                await this.requestNewAuthToken();
            }
            else if (this.isAuthTokenExpired()) {
                await this.renewAuthToken();
            }
            config.headers['Authorization'] = `Bearer ${this.token}`;
            return config;
        };
        this.handleClientRequestError = async (error) => {
            if (!isAxiosError(error) ||
                ![401, 403].includes(error.response.status) ||
                this.retryLimit >= REQUEST_RETRY_LIMIT)
                return Promise.reject(error);
            // Retry get request
            console.warn(`OHIP responded with error code ${error.response.status}, renewing access token and resending request.`);
            this.retryLimit += 1;
            await this.requestNewAuthToken();
            error.config.headers['Authorization'] = `Bearer ${this.token}`;
            return axios_1.default.request(error.config);
        };
        // Basic authentication usint Client ID and secret
        this.basicAuthToken = Buffer.from(`${this.options.clientId}:${this.options.clientSecret}`).toString('base64');
        this.clientDict = (0, api_1.createClients)({
            baseURL: this.options.hostName,
            headers: { 'x-app-key': this.options.appKey },
            paramsSerializer: {
                serialize(params) {
                    return qs_1.default.stringify(params, { arrayFormat: 'repeat' });
                },
            },
        });
        Object.entries(this.clientDict)
            .filter(([id]) => id !== 'oauth')
            .forEach(([_, client]) => {
            client.instance.interceptors.request.use(this.handleClientRequest);
            client.instance.interceptors.response.use(undefined, this.handleClientRequestError);
        });
    }
    get client() {
        return this.clientDict;
    }
    close() {
        clearTimeout(this.refreshTimeout);
    }
    async requestNewAuthToken() {
        this.clearTokens();
        try {
            const { data } = await this.clientDict.oauth.tokens.getToken({
                grant_type: 'password',
                username: this.options.username,
                password: this.options.password,
            }, {
                type: api_1.ContentType.UrlEncoded,
                headers: {
                    Authorization: `Basic ${this.basicAuthToken}`,
                },
            });
            this.setTokenHeaders(data);
        }
        catch (error) {
            console.error('Requesting new OHIP session token failed', error);
            this.clearTokens();
            throw error;
        }
    }
    async renewAuthToken() {
        try {
            const { data } = await this.clientDict.oauth.tokens.getToken({
                // @ts-ignore
                grant_type: 'refresh_token',
                refresh_token: this.refreshToken,
            }, {
                type: api_1.ContentType.UrlEncoded,
                headers: {
                    Authorization: `Basic ${this.basicAuthToken}`,
                },
            });
            this.setTokenHeaders(data);
        }
        catch (error) {
            console.error('Refreshing OHIP session token failed', error);
            await this.requestNewAuthToken();
        }
    }
    setTokenHeaders(response) {
        var _a;
        // @ts-ignore
        this.refreshToken = response.refresh_token;
        this.token = response.access_token;
        // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
        this.tokenExpiration = Date.now() + ((_a = response.expires_in) !== null && _a !== void 0 ? _a : 0) * 900;
        this.retryLimit = 0;
    }
    clearTokens() {
        this.refreshToken = undefined;
        this.token = undefined;
        this.tokenExpiration = undefined;
    }
    isAuthTokenExpired() {
        return Date.now() > this.tokenExpiration;
    }
}
exports.Api = Api;
