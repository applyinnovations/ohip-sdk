"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OHIP_HOTEL_ID = exports.OHIP_PASSWORD_2 = exports.OHIP_USERNAME_2 = exports.OHIP_PASSWORD_1 = exports.OHIP_USERNAME_1 = exports.OHIP_CLIENT_SECRET = exports.OHIP_CLIENT_ID = exports.OHIP_APP_KEY = exports.OHIP_HOSTNAME = exports.Api = exports.ContentType = void 0;
const oauth_1 = require("./apis/fetch/oauth");
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const GENERATED_OUTPUT_DIRECTORY = 'src/apis/fetch';
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
function isAxiosError(error) {
    return !!error.response && !!error.config;
}
const getFileNames = (path) => new Promise((res, rej) => {
    fs_1.default.readdir(path, function (err, files) {
        if (err) {
            rej(err);
        }
        res(files);
    });
});
const getAllClients = async () => {
    const clientNames = await getFileNames(GENERATED_OUTPUT_DIRECTORY);
    const clientNameWithAPis = await Promise.all(clientNames.map(async (clientName) => {
        const clientAPIs = await getFileNames(`${GENERATED_OUTPUT_DIRECTORY}/${clientName}/apis`);
        return {
            clientName,
            clientAPIs,
        };
    }));
    const allClients = clientNameWithAPis === null || clientNameWithAPis === void 0 ? void 0 : clientNameWithAPis.map(({ clientAPIs, clientName }) => {
        const filteredClientAPIs = clientAPIs.filter((item) => typeof item === 'string' &&
            item !== 'index.ts' &&
            item.split('.').pop() === 'ts');
        const client = filteredClientAPIs.map((clientApiFileName) => {
            const apiName = clientApiFileName.split('.')[0];
            return {
                apiName,
                api: require(`./apis/fetch/${clientName}/apis/${clientApiFileName}`)[apiName],
            };
        });
        return {
            name: clientName,
            apis: client,
        };
    });
    return allClients;
};
class Api {
    constructor(options) {
        this.options = options;
        this.backoffTimeout = 0;
        this.authTries = 0;
        this.getAuthApi = () => {
            const authConfig = new oauth_1.Configuration({
                apiKey: this.options.appKey,
                basePath: `${this.options.hostName}${oauth_1.BASE_PATH}`,
            });
            const authApi = new oauth_1.AuthenticationApi(authConfig);
            return authApi;
        };
        this.createClients = async () => {
            const clients = await getAllClients();
            const configuredClients = clients === null || clients === void 0 ? void 0 : clients.reduce((allClients, currentClient) => {
                var _a;
                return Object.assign(Object.assign({}, allClients), { [currentClient.name]: (_a = currentClient.apis) === null || _a === void 0 ? void 0 : _a.map((currentApi) => {
                        var _a;
                        const ApiRuntimeConfig = require(`./apis/fetch/${currentClient.name}/runtime`);
                        const baseConfiguration = new ApiRuntimeConfig.Configuration({
                            apiKey: this.options.appKey,
                            basePath: `${this.options.hostName}${ApiRuntimeConfig.BASE_PATH}`,
                        });
                        const apiCLass = new currentApi.api(baseConfiguration);
                        return {
                            name: currentApi.apiName,
                            apis: (_a = Object.getOwnPropertyNames(Object.getPrototypeOf(apiCLass))) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== 'constructor').map((apiMethodClassName) => {
                                return {
                                    name: apiMethodClassName,
                                    method: async (params) => {
                                        try {
                                            await this.handleClientRequest();
                                            return apiCLass[apiMethodClassName](Object.assign({ hotelIds: [exports.OHIP_HOTEL_ID], authorization: `Bearer ${this.token}`, xAppKey: this.options.appKey, xHotelid: exports.OHIP_HOTEL_ID }, params));
                                        }
                                        catch (e) {
                                            this.handleClientRequestError(e);
                                        }
                                    },
                                };
                            }).reduce((accum, curr) => (Object.assign(Object.assign({}, accum), { [curr.name]: curr.method }))),
                        };
                    }, {}).reduce((accum, curr) => {
                        return Object.assign(Object.assign({}, accum), { [curr.name]: curr.apis });
                    }) });
            }, {});
            return configuredClients;
        };
        this.handleClientRequest = async () => {
            if (!this.token) {
                await this.requestNewAuthToken();
            }
            else if (this.isAuthTokenExpired()) {
                await this.renewAuthToken();
            }
            // if (!this.token)
            //   throw new Error('Failed getting OHIP authentication token.');
        };
        this.handleClientRequestError = async (error) => {
            console.log('this is the error response', JSON.stringify(error, null, 2));
            if (!isAxiosError(error) || ![401, 403].includes(error.response.status))
                return Promise.reject(error);
            await this.requestNewAuthToken();
            if (!this.token)
                return Promise.reject(error);
            error.config.headers['Authorization'] = `Bearer ${this.token}`;
            return axios_1.default.request(error.config);
        };
        this.options = Object.assign({ maxBackOffTimeoutToWait: 1000, baseBackOffTimeout: 1, maxBackOffTimeout: 60 * 60 * 1000 }, options);
        this.initializeClient();
        this.basicAuthToken = Buffer.from(`${this.options.clientId}:${this.options.clientSecret}`).toString('base64');
    }
    getClients() {
        return this.createClients();
    }
    async initializeClient() {
        this.clientDict = await this.createClients();
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
                const authApi = this.getAuthApi();
                const data = await authApi.getToken({
                    xAppKey: this.options.appKey,
                    grantType: 'password',
                    username: this.options.credentials[this.activeCredentialIndex].username,
                    password: this.options.credentials[this.activeCredentialIndex].password,
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
    isAuthTokenExpired() {
        return Date.now() > this.tokenExpiration;
    }
    setTokenHeaders(response) {
        var _a;
        // @ts-ignoregit st
        this.refreshToken = response.refresh_token;
        this.token = response.accessToken;
        // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
        this.tokenExpiration = Date.now() + ((_a = response.expiresIn) !== null && _a !== void 0 ? _a : 0) * 900;
    }
    clearTokens() {
        this.refreshToken = undefined;
        this.token = undefined;
        this.tokenExpiration = undefined;
    }
    shouldBackOff() {
        if (this.authTries === 0)
            return false;
        return new Date().getTime() < this.backoffTimeout;
    }
    setBackoffTimeout() {
        if (this.activeCredentialIndex !== this.options.credentials.length - 1)
            return;
        const delay = Math.min(this.options.baseBackOffTimeout *
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
    async renewAuthToken() {
        try {
            const authApi = this.getAuthApi();
            const data = await authApi.getToken({
                // @ts-ignore
                grant_type: 'refresh_token',
                refresh_token: this.refreshToken,
                xAppKey: this.options.appKey,
            }, {
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
}
exports.Api = Api;
async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
_a = process.env, exports.OHIP_HOSTNAME = _a.OHIP_HOSTNAME, exports.OHIP_APP_KEY = _a.OHIP_APP_KEY, exports.OHIP_CLIENT_ID = _a.OHIP_CLIENT_ID, exports.OHIP_CLIENT_SECRET = _a.OHIP_CLIENT_SECRET, exports.OHIP_USERNAME_1 = _a.OHIP_USERNAME_1, exports.OHIP_PASSWORD_1 = _a.OHIP_PASSWORD_1, exports.OHIP_USERNAME_2 = _a.OHIP_USERNAME_2, exports.OHIP_PASSWORD_2 = _a.OHIP_PASSWORD_2, exports.OHIP_HOTEL_ID = _a.OHIP_HOTEL_ID;
async function main() {
    const api = new Api({
        hostName: exports.OHIP_HOSTNAME,
        hotelId: exports.OHIP_HOTEL_ID,
        appKey: exports.OHIP_APP_KEY,
        clientId: exports.OHIP_CLIENT_ID,
        clientSecret: exports.OHIP_CLIENT_SECRET,
        credentials: [
            {
                username: exports.OHIP_USERNAME_1,
                password: exports.OHIP_PASSWORD_1,
            },
            {
                username: exports.OHIP_USERNAME_2,
                password: exports.OHIP_PASSWORD_2,
            },
        ],
    });
    console.log('initiating clients');
    const clients = await api.getClients();
    console.log('getting reservation');
    const getReservation = async () => {
        try {
            // @ts-ignore
            const resp = await clients.rsv.ReservationApi.getReservations({});
            console.log('respnse', JSON.stringify(resp.reservations));
        }
        catch (e) {
            console.log('retrying', e);
        }
    };
    await getReservation();
}
main();
