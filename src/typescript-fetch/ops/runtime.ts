/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Provisioning Service API
 * APIs to cater to provisioning and deprovisioning of new properties and chains in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  AuthenticationApi,
  BASE_PATH as AUTH_BASE_PATH,
  Configuration as AuthConfiguration,
  OAuth2TokenResponse,
} from '../oauth/index';

export const BASE_PATH = "/ops/v1".replace(/\/+$/, "");

interface OhipCredential {
  username: string;
  password: string;
}

export interface ConfigurationParameters {
    host?: string; // override host
    basePath?: string; // override base path
    fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | ((name: string) => string); // parameter for apiKey security
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    headers?: HTTPHeaders; //header params we want to use on every request
    credentials?: RequestCredentials; //value for the credentials param we want to use on each request
    hotelId?: string;
    appKey?: string;
    ohipCredentials?: OhipCredential[];
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters = {}) {}

    set config(configuration: Configuration) {
        this.configuration = configuration;
    }

    get host(): string {
        return this.configuration.host;
    }

    get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get hotelId(): string {
        return this.configuration.hotelId;
    }

    get ohipCredentials(): OhipCredential[] {
        return this.configuration.ohipCredentials;
    }

    get fetchApi(): FetchAPI | undefined {
        return this.configuration.fetchApi;
    }

    get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get apiKey(): ((name: string) => string) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }

    get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
      
    get appKey(): string {
        return this.configuration.appKey;
    }
}

export const DefaultConfig = new Configuration();

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

	private static readonly jsonRegex = new RegExp('^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
    private middleware: Middleware[];
    private token: string;
    private refreshToken: string;
    private tokenExpiration: number;
    private activeCredentialIndex: number;
    private requestingNewAuthToken: Promise<void>;
    private backoffTimeout = 0;
    private authTries = 0;
    private maxBackOffTimeoutToWait = 1000;
    private baseBackOffTimeout = 1;
    private maxBackOffTimeout = 60 * 60 * 1000;

    constructor(protected configuration = DefaultConfig) {
        let authenticationMiddleware: Middleware[] = [];
        authenticationMiddleware = [
            {
                pre: this.handleClientRequest,
                onError: this.handleClientRequestError,
                post: async (context) => {
                    return context.response;
                },
            },
        ];
        this.middleware = [...authenticationMiddleware, ...configuration.middleware];
    }
    
    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
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
    protected isJsonMime(mime: string | null | undefined): boolean {
        if (!mime) {
            return false;
        }
        return BaseAPI.jsonRegex.test(mime);
    }

    protected async request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response> {
        const { url, init } = await this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response && (response.status >= 200 && response.status < 300)) {
            return response;
        }
        throw new ResponseError(response, 'Response returned an error code');
    }

    private async createFetchParams(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction) {
        let url = this.configuration.host + BASE_PATH + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }

        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});

        const initOverrideFn =
            typeof initOverrides === "function"
                ? initOverrides
                : async () => initOverrides;

        const initParams = {
            method: context.method,
            headers,
            body: context.body,
            credentials: this.configuration.credentials,
        };

        const overriddenInit: RequestInit = {
            ...initParams,
            ...(await initOverrideFn({
                init: initParams,
                context,
            }))
        };

        const init: RequestInit = {
            ...overriddenInit,
            body:
                isFormData(overriddenInit.body) ||
                overriddenInit.body instanceof URLSearchParams ||
                isBlob(overriddenInit.body)
                    ? overriddenInit.body
                    : JSON.stringify(overriddenInit.body),
        };

        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        let response: Response | undefined = undefined;
        try {
            response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
        } catch (e) {
            for (const middleware of this.middleware) {
                if (middleware.onError) {
                    response = await middleware.onError({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        error: e,
                        response: response ? response.clone() : undefined,
                    }) || response;
                }
            }
            if (response === undefined) {
              if (e instanceof Error) {
                throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
              } else {
                throw e;
              }
            }
        }
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    private getAuthApi = () => {
        const authConfig = new AuthConfiguration({
            basePath: this.configuration.host + AUTH_BASE_PATH,
        });
        return new AuthenticationApi(authConfig);
    };

    private handleClientRequest = async (context: RequestContext) => {
        if (!this.token) {
            await this.requestNewAuthToken();
        } else if (this.isAuthTokenExpired()) {
            await this.renewAuthToken();
        }
        if (!this.token)
            throw new Error('Failed to get authentication token');
        context.init.headers['authorization'] = `Bearer ${this.token}`;
        context.init.headers['x-app-key'] = this.configuration.appKey;
        context.init.headers['x-hotel-id'] = this.configuration.hotelId;
        return context;
    };

    private handleClientRequestError = async (error: ErrorContext) => {
        if (error && ![401, 403].includes(error?.response.status))
            return Promise.reject(error);
        await this.requestNewAuthToken();
        if (!this.token) return Promise.reject(error);
        error.init.headers['authorization'] = `Bearer ${this.token}`;
        return error.fetch(error.url, error.init);
    };

    private async requestNewAuthToken() {
        // a request for a new token is already in progress
        // just wait for it to finish instead of trying to request a new one
        if (this.requestingNewAuthToken) {
        await this.requestingNewAuthToken;
            return;
        }
        if (this.shouldBackOff()) {
            const backOffMsRemaining = this.backoffTimeout - new Date().getTime();
            if (backOffMsRemaining > this.maxBackOffTimeoutToWait) {
                console.log(`Max backoff timeout to wait reached`);
            } else {
                console.log(`Backing off for ${backOffMsRemaining} ms`);
                await delay(backOffMsRemaining);
                await this.requestNewAuthToken();
            }
            return;
        }
        this.requestingNewAuthToken = new Promise<void>(async (resolve) => {
            this.authTries++;
            this.incrementActiveCrendentialIndex();
            this.clearTokens();
            try {
                console.log(
                    `Requesting authentication token using credentials[${this.activeCredentialIndex}]`,
                );
                const authApi = this.getAuthApi();
                const data = await authApi.getToken({
                    xAppKey: this.configuration.appKey,
                    grantType: 'password',
                    username:
                        this.configuration.ohipCredentials[this.activeCredentialIndex]
                        .username,
                    password:
                        this.configuration.ohipCredentials[this.activeCredentialIndex]
                        .password,
                });
                this.setTokenHeaders(data);
                this.authTries = 0;
            } catch (error) {
                console.error('Failed to get authentication token');
                console.error(error);
                this.setBackoffTimeout();
            }
            resolve();
            this.requestingNewAuthToken = undefined;
        });
        return this.requestingNewAuthToken;
    }

    private async renewAuthToken() {
        try {
            const authApi = this.getAuthApi();
            const data = await authApi.getToken({
                grantType: 'password',
                xAppKey: this.configuration.appKey,
                username:
                    this.configuration.ohipCredentials[this.activeCredentialIndex]
                    .username,
                password:
                    this.configuration.ohipCredentials[this.activeCredentialIndex]
                    .password,
            });
            this.setTokenHeaders(data);
        } catch (error) {
            console.error(`Failed to renew authentication token`);
            console.error(error);
            await this.requestNewAuthToken();
        }
    }

    private setTokenHeaders(response: OAuth2TokenResponse) {
        this.token = response.accessToken;
        // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
        this.tokenExpiration = Date.now() + (response.expiresIn ?? 0) * 900;
    }

    private clearTokens() {
        this.refreshToken = undefined;
        this.token = undefined;
        this.tokenExpiration = undefined;
    }

    private isAuthTokenExpired() {
        return Date.now() > this.tokenExpiration;
    }

    private shouldBackOff() {
        if (this.authTries === 0) return false;
        return new Date().getTime() < this.backoffTimeout;
    }

    private setBackoffTimeout() {
        if (
            this.activeCredentialIndex !==
            this.configuration.ohipCredentials.length - 1
        )
        return;
        const delay = Math.min(
            this.baseBackOffTimeout *
                Math.pow(
                    10,
                    Math.floor(
                        this.authTries / this.configuration.ohipCredentials.length,
                    ),
                ),
            this.maxBackOffTimeout,
        );
        if (delay === this.maxBackOffTimeout) {
            // if this happens we probably have the wrong password set in the config
            console.error(`Max backoff timeout reached`);
        }
        this.backoffTimeout = new Date().getTime() + delay;
    }

    private async incrementActiveCrendentialIndex() {
        if (
            this.activeCredentialIndex === undefined ||
            this.activeCredentialIndex + 1 >=
                this.configuration.ohipCredentials.length
        ) {
            this.activeCredentialIndex = 0;
        } else {
            this.activeCredentialIndex += 1;
        }
    }


    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

function isBlob(value: any): value is Blob {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isFormData(value: any): value is FormData {
    return typeof FormData !== "undefined" && value instanceof FormData;
}

export class ResponseError extends Error {
    override name: "ResponseError" = "ResponseError";
    constructor(public response: Response, msg?: string) {
        super(msg);
    }
}

export class FetchError extends Error {
    override name: "FetchError" = "FetchError";
    constructor(public cause: Error, msg?: string) {
        super(msg);
    }
}

export class RequiredError extends Error {
    override name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = { headers?: HTTPHeaders; method: HTTPMethod; credentials?: RequestCredentials; body?: HTTPBody };
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export type InitOverrideFunction = (requestContext: { init: HTTPRequestInit, context: RequestOpts }) => Promise<RequestInit>

export interface FetchParams {
    url: string;
    init: RequestInit;
}

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}

function querystringSingleKey(key: string, value: string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery, keyPrefix: string = ''): string {
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
        return querystring(value as HTTPQuery, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

export interface Consume {
    contentType: string;
}

export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}

export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}

export interface ErrorContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    error: unknown;
    response?: Response;
}

export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
    onError?(context: ErrorContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<void> {
        return undefined;
    }
}

export class BlobApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<Blob> {
        return await this.raw.blob();
    };
}

export class TextApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<string> {
        return await this.raw.text();
    };
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
