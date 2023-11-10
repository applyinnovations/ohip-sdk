"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.COLLECTION_FORMATS = exports.RequiredError = exports.FetchError = exports.ResponseError = exports.BaseAPI = exports.DefaultConfig = exports.Configuration = exports.BASE_PATH = void 0;
const index_1 = require("../oauth/index");
exports.BASE_PATH = "/crm/v1".replace(/\/+$/, "");
class Configuration {
    constructor(configuration = {}) {
        this.configuration = configuration;
    }
    set config(configuration) {
        this.configuration = configuration;
    }
    get host() {
        return this.configuration.host;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : exports.BASE_PATH;
    }
    get hotelId() {
        return this.configuration.hotelId;
    }
    get ohipCredentials() {
        return this.configuration.ohipCredentials;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || querystring;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : () => __awaiter(this, void 0, void 0, function* () { return accessToken; });
        }
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
    get appKey() {
        return this.configuration.appKey;
    }
}
exports.Configuration = Configuration;
exports.DefaultConfig = new Configuration();
/**
 * This is the base class for all generated API classes.
 */
class BaseAPI {
    constructor(configuration = exports.DefaultConfig) {
        this.configuration = configuration;
        this.backoffTimeout = 0;
        this.authTries = 0;
        this.maxBackOffTimeoutToWait = 1000;
        this.baseBackOffTimeout = 1;
        this.maxBackOffTimeout = 60 * 60 * 1000;
        this.fetchApi = (url, init) => __awaiter(this, void 0, void 0, function* () {
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams = (yield middleware.pre(Object.assign({ fetch: this.fetchApi }, fetchParams))) || fetchParams;
                }
            }
            let response = undefined;
            try {
                response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            }
            catch (e) {
                for (const middleware of this.middleware) {
                    if (middleware.onError) {
                        response = (yield middleware.onError({
                            fetch: this.fetchApi,
                            url: fetchParams.url,
                            init: fetchParams.init,
                            error: e,
                            response: response ? response.clone() : undefined,
                        })) || response;
                    }
                }
                if (response === undefined) {
                    if (e instanceof Error) {
                        throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
                    }
                    else {
                        throw e;
                    }
                }
            }
            for (const middleware of this.middleware) {
                if (middleware.post) {
                    response = (yield middleware.post({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        response: response.clone(),
                    })) || response;
                }
            }
            return response;
        });
        this.getAuthApi = () => {
            const authConfig = new index_1.Configuration({
                basePath: this.configuration.host + index_1.BASE_PATH,
            });
            return new index_1.AuthenticationApi(authConfig);
        };
        this.handleClientRequest = (context) => __awaiter(this, void 0, void 0, function* () {
            if (!this.token) {
                yield this.requestNewAuthToken();
            }
            else if (this.isAuthTokenExpired()) {
                yield this.renewAuthToken();
            }
            if (!this.token)
                throw new Error('Failed to get authentication token');
            context.init.headers['authorization'] = `Bearer ${this.token}`;
            context.init.headers['x-app-key'] = this.configuration.appKey;
            context.init.headers['x-hotel-id'] = this.configuration.hotelId;
            return context;
        });
        this.handleClientRequestError = (error) => __awaiter(this, void 0, void 0, function* () {
            if (error && ![401, 403].includes(error === null || error === void 0 ? void 0 : error.response.status))
                return Promise.reject(error);
            yield this.requestNewAuthToken();
            if (!this.token)
                return Promise.reject(error);
            error.init.headers['authorization'] = `Bearer ${this.token}`;
            return error.fetch(error.url, error.init);
        });
        let authenticationMiddleware = [];
        authenticationMiddleware = [
            {
                pre: this.handleClientRequest,
                onError: this.handleClientRequestError,
                post: (context) => __awaiter(this, void 0, void 0, function* () {
                    return context.response;
                }),
            },
        ];
        this.middleware = [...authenticationMiddleware, ...configuration.middleware];
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware(...middlewares);
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        if (!mime) {
            return false;
        }
        return BaseAPI.jsonRegex.test(mime);
    }
    request(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, init } = yield this.createFetchParams(context, initOverrides);
            const response = yield this.fetchApi(url, init);
            if (response && (response.status >= 200 && response.status < 300)) {
                return response;
            }
            throw new ResponseError(response, 'Response returned an error code');
        });
    }
    createFetchParams(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.configuration.host + exports.BASE_PATH + context.path;
            if (context.query !== undefined && Object.keys(context.query).length !== 0) {
                // only add the querystring to the URL if there are query parameters.
                // this is done to avoid urls ending with a "?" character which buggy webservers
                // do not handle correctly sometimes.
                url += '?' + this.configuration.queryParamsStringify(context.query);
            }
            const headers = Object.assign({}, this.configuration.headers, context.headers);
            Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});
            const initOverrideFn = typeof initOverrides === "function"
                ? initOverrides
                : () => __awaiter(this, void 0, void 0, function* () { return initOverrides; });
            const initParams = {
                method: context.method,
                headers,
                body: context.body,
                credentials: this.configuration.credentials,
            };
            const overriddenInit = Object.assign(Object.assign({}, initParams), (yield initOverrideFn({
                init: initParams,
                context,
            })));
            const init = Object.assign(Object.assign({}, overriddenInit), { body: isFormData(overriddenInit.body) ||
                    overriddenInit.body instanceof URLSearchParams ||
                    isBlob(overriddenInit.body)
                    ? overriddenInit.body
                    : JSON.stringify(overriddenInit.body) });
            return { url, init };
        });
    }
    requestNewAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            // a request for a new token is already in progress
            // just wait for it to finish instead of trying to request a new one
            if (this.requestingNewAuthToken) {
                yield this.requestingNewAuthToken;
                return;
            }
            if (this.shouldBackOff()) {
                const backOffMsRemaining = this.backoffTimeout - new Date().getTime();
                if (backOffMsRemaining > this.maxBackOffTimeoutToWait) {
                    console.log(`Max backoff timeout to wait reached`);
                }
                else {
                    console.log(`Backing off for ${backOffMsRemaining} ms`);
                    yield delay(backOffMsRemaining);
                    yield this.requestNewAuthToken();
                }
                return;
            }
            this.requestingNewAuthToken = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                this.authTries++;
                this.incrementActiveCrendentialIndex();
                this.clearTokens();
                try {
                    console.log(`Requesting authentication token using credentials[${this.activeCredentialIndex}]`);
                    const authApi = this.getAuthApi();
                    const data = yield authApi.getToken({
                        xAppKey: this.configuration.appKey,
                        grantType: 'password',
                        username: this.configuration.ohipCredentials[this.activeCredentialIndex]
                            .username,
                        password: this.configuration.ohipCredentials[this.activeCredentialIndex]
                            .password,
                    });
                    this.setTokenHeaders(data);
                    this.authTries = 0;
                }
                catch (error) {
                    console.error('Failed to get authentication token');
                    console.error(error);
                    this.setBackoffTimeout();
                }
                resolve();
                this.requestingNewAuthToken = undefined;
            }));
            return this.requestingNewAuthToken;
        });
    }
    renewAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authApi = this.getAuthApi();
                const data = yield authApi.getToken({
                    grantType: 'password',
                    xAppKey: this.configuration.appKey,
                    username: this.configuration.ohipCredentials[this.activeCredentialIndex]
                        .username,
                    password: this.configuration.ohipCredentials[this.activeCredentialIndex]
                        .password,
                });
                this.setTokenHeaders(data);
            }
            catch (error) {
                console.error(`Failed to renew authentication token`);
                console.error(error);
                yield this.requestNewAuthToken();
            }
        });
    }
    setTokenHeaders(response) {
        var _a;
        this.token = response.accessToken;
        // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
        this.tokenExpiration = Date.now() + ((_a = response.expiresIn) !== null && _a !== void 0 ? _a : 0) * 900;
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
        if (this.activeCredentialIndex !==
            this.configuration.ohipCredentials.length - 1)
            return;
        const delay = Math.min(this.baseBackOffTimeout *
            Math.pow(10, Math.floor(this.authTries / this.configuration.ohipCredentials.length)), this.maxBackOffTimeout);
        if (delay === this.maxBackOffTimeout) {
            // if this happens we probably have the wrong password set in the config
            console.error(`Max backoff timeout reached`);
        }
        this.backoffTimeout = new Date().getTime() + delay;
    }
    incrementActiveCrendentialIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.activeCredentialIndex === undefined ||
                this.activeCredentialIndex + 1 >=
                    this.configuration.ohipCredentials.length) {
                this.activeCredentialIndex = 0;
            }
            else {
                this.activeCredentialIndex += 1;
            }
        });
    }
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
exports.BaseAPI = BaseAPI;
BaseAPI.jsonRegex = new RegExp('^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
;
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
function isFormData(value) {
    return typeof FormData !== "undefined" && value instanceof FormData;
}
class ResponseError extends Error {
    constructor(response, msg) {
        super(msg);
        this.response = response;
        this.name = "ResponseError";
    }
}
exports.ResponseError = ResponseError;
class FetchError extends Error {
    constructor(cause, msg) {
        super(msg);
        this.cause = cause;
        this.name = "FetchError";
    }
}
exports.FetchError = FetchError;
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
function exists(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
exports.exists = exists;
function querystring(params, prefix = '') {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}
exports.querystring = querystring;
function querystringSingleKey(key, value, keyPrefix = '') {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: fn(data[key]) })), {});
}
exports.mapValues = mapValues;
function canConsumeForm(consumes) {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}
exports.canConsumeForm = canConsumeForm;
class JSONApiResponse {
    constructor(raw, transformer = (jsonValue) => jsonValue) {
        this.raw = raw;
        this.transformer = transformer;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transformer(yield this.raw.json());
        });
    }
}
exports.JSONApiResponse = JSONApiResponse;
class VoidApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.VoidApiResponse = VoidApiResponse;
class BlobApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.blob();
        });
    }
    ;
}
exports.BlobApiResponse = BlobApiResponse;
class TextApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.text();
        });
    }
    ;
}
exports.TextApiResponse = TextApiResponse;
function delay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(resolve, ms));
    });
}
