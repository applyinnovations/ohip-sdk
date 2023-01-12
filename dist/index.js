"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const qs_1 = __importDefault(require("qs"));
const api_1 = require("./api");
class Api {
    constructor(options) {
        this.options = options;
        this.handleClientRequest = (config) => {
            config.headers['Authorization'] = `Bearer ${this.token}`;
            return config;
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
        });
        this.initializeSession();
    }
    get client() {
        return this.clientDict;
    }
    close() {
        clearTimeout(this.refreshTimeout);
    }
    initializeSession() {
        const request = this.clientDict.oauth.tokens
            .getToken({
            grant_type: 'password',
            username: this.options.username,
            password: this.options.password,
        }, {
            type: api_1.ContentType.UrlEncoded,
            headers: {
                Authorization: `Basic ${this.basicAuthToken}`,
            },
        })
            .then(({ data }) => {
            this.setTokenHeaders(data);
            this.refreshSessionJustBeforeExpiry();
        });
        this.updatePrerequest(request);
    }
    refreshSessionJustBeforeExpiry() {
        if (!this.tokenExpiration)
            return;
        this.refreshTimeout = setTimeout(() => {
            if (!this.refreshToken) {
                this.initializeSession();
                return;
            }
            const request = this.clientDict.oauth.tokens
                .getToken({
                // @ts-ignore
                grant_type: 'refresh_token',
                refresh_token: this.refreshToken,
            }, {
                type: api_1.ContentType.UrlEncoded,
                headers: {
                    Authorization: `Basic ${this.basicAuthToken}`,
                },
            })
                .then(({ data }) => {
                this.setTokenHeaders(data);
                this.refreshSessionJustBeforeExpiry();
            });
            this.updatePrerequest(request);
        }, this.tokenExpiration * 900);
    }
    setTokenHeaders(response) {
        // @ts-ignore
        this.refreshToken = response.refresh_token;
        this.token = response.access_token;
        this.tokenExpiration = response.expires_in;
    }
    updatePrerequest(request) {
        Object.entries(this.clientDict)
            .filter(([id]) => id !== 'oauth')
            .forEach(([_, client]) => {
            // Every request waits for the prerequest to finish before starting the actual request
            // This ensures that auth tokens are already available before the actual request is sent
            client.prerequest = request;
        });
    }
}
exports.Api = Api;
