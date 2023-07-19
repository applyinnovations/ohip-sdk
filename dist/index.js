"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const api_1 = require("./api");
function isAxiosError(error) {
    return !!error.response && !!error.config;
}
class Api {
    constructor(options) {
        this.options = options;
        this.backoffTimeout = 0;
        this.authTries = 0;
        this.handleClientRequest = async (config) => {
            if (!this.token) {
                await this.requestNewAuthToken();
            }
            else if (this.isAuthTokenExpired()) {
                await this.renewAuthToken();
            }
            if (!this.token)
                throw new Error('Failed getting OHIP authentication token.');
            config.headers['Authorization'] = `Bearer ${this.token}`;
            return config;
        };
        this.handleClientRequestError = async (error) => {
            if (!isAxiosError(error) || ![401, 403].includes(error.response.status))
                return Promise.reject(error);
            await this.requestNewAuthToken();
            if (!this.token)
                return Promise.reject(error);
            error.config.headers['Authorization'] = `Bearer ${this.token}`;
            return axios_1.default.request(error.config);
        };
        this.options = Object.assign({ maxBackOffTimeoutToWait: 1000, backOffBaseTimeout: 1, maxBackOffTimeout: 60 * 60 * 1000 }, options);
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
        // a request for a new token is already in progress
        // just wait for it to finish instead of trying to request a new one
        if (this.requestingNewAuthToken) {
            await this.requestingNewAuthToken;
            return;
        }
        if (this.shouldBackOff()) {
            const backOffMsRemaining = this.backoffTimeout - new Date().getTime();
            if (backOffMsRemaining > this.options.maxBackOffTimeoutToWait) {
                console.log(`Backing off for ${backOffMsRemaining}ms: Max backoff timeout to wait reached...`);
            }
            else {
                console.log(`Backing off for ${backOffMsRemaining}ms: Waiting for new token...`);
                await delay(backOffMsRemaining);
                await this.requestNewAuthToken();
            }
            return;
        }
        this.requestingNewAuthToken = new Promise(async (resolve) => {
            this.authTries++;
            this.incrementActiveCrendentialIndex();
            this.clearTokens();
            try {
                console.log(`Requesting new OHIP session token using credentials[${this.activeCredentialIndex}]`);
                const { data } = await this.clientDict.oauth.tokens.getToken({
                    grant_type: 'password',
                    username: this.options.credentials[this.activeCredentialIndex].username,
                    password: this.options.credentials[this.activeCredentialIndex].password,
                }, {
                    type: api_1.ContentType.UrlEncoded,
                    headers: {
                        Authorization: `Basic ${this.basicAuthToken}`,
                    },
                });
                this.setTokenHeaders(data);
                this.authTries = 0;
            }
            catch (error) {
                console.error('Requesting new OHIP session token failed', error);
                this.setBackoffTimeout();
            }
            resolve();
            this.requestingNewAuthToken = undefined;
        });
        return this.requestingNewAuthToken;
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
    }
    clearTokens() {
        this.refreshToken = undefined;
        this.token = undefined;
        this.tokenExpiration = undefined;
    }
    isAuthTokenExpired() {
        return Date.now() > this.tokenExpiration;
    }
    shouldBackOff() {
        if (this.authTries === 0)
            return false;
        return new Date().getTime() < this.backoffTimeout;
    }
    setBackoffTimeout() {
        if (this.activeCredentialIndex !== this.options.credentials.length - 1)
            return;
        const delay = Math.min(this.options.backOffBaseTimeout *
            Math.pow(10, Math.floor(this.authTries / this.options.credentials.length)), this.options.maxBackOffTimeout);
        if (delay === this.options.maxBackOffTimeout) {
            // if this happens we probably have the wrong password set in the config
            console.error('Max backoff timeout reached. Check OHIP credentials.');
        }
        this.backoffTimeout = new Date().getTime() + delay;
    }
    async incrementActiveCrendentialIndex() {
        if (this.activeCredentialIndex === undefined ||
            this.activeCredentialIndex + 1 >= this.options.credentials.length) {
            this.activeCredentialIndex = 0;
        }
        else {
            this.activeCredentialIndex += 1;
        }
    }
}
exports.Api = Api;
async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
