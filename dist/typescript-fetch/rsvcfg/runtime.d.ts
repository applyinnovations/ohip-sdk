/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export declare const BASE_PATH: string;
interface OhipCredential {
    username: string;
    password: string;
}
export interface ConfigurationParameters {
    host?: string;
    basePath?: string;
    fetchApi?: FetchAPI;
    middleware?: Middleware[];
    queryParamsStringify?: (params: HTTPQuery) => string;
    username?: string;
    password?: string;
    apiKey?: string | ((name: string) => string);
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>);
    headers?: HTTPHeaders;
    credentials?: RequestCredentials;
    hotelId?: string;
    appKey?: string;
    ohipCredentials?: OhipCredential[];
}
export declare class Configuration {
    private configuration;
    constructor(configuration?: ConfigurationParameters);
    set config(configuration: Configuration);
    get host(): string;
    get basePath(): string;
    get hotelId(): string;
    get ohipCredentials(): OhipCredential[];
    get fetchApi(): FetchAPI | undefined;
    get middleware(): Middleware[];
    get queryParamsStringify(): (params: HTTPQuery) => string;
    get username(): string | undefined;
    get password(): string | undefined;
    get apiKey(): ((name: string) => string) | undefined;
    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined;
    get headers(): HTTPHeaders | undefined;
    get credentials(): RequestCredentials | undefined;
    get appKey(): string;
}
export declare const DefaultConfig: Configuration;
/**
 * This is the base class for all generated API classes.
 */
export declare class BaseAPI {
    protected configuration: Configuration;
    private static readonly jsonRegex;
    private middleware;
    private token;
    private refreshToken;
    private tokenExpiration;
    private activeCredentialIndex;
    private requestingNewAuthToken;
    private backoffTimeout;
    private authTries;
    private maxBackOffTimeoutToWait;
    private baseBackOffTimeout;
    private maxBackOffTimeout;
    constructor(configuration?: Configuration);
    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]): T;
    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>): T;
    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>): T;
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
    protected isJsonMime(mime: string | null | undefined): boolean;
    protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>;
    private createFetchParams;
    private fetchApi;
    private getAuthApi;
    private handleClientRequest;
    private handleClientRequestError;
    private requestNewAuthToken;
    private renewAuthToken;
    private setTokenHeaders;
    private clearTokens;
    private isAuthTokenExpired;
    private shouldBackOff;
    private setBackoffTimeout;
    private incrementActiveCrendentialIndex;
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone;
}
export declare class ResponseError extends Error {
    response: Response;
    name: "ResponseError";
    constructor(response: Response, msg?: string);
}
export declare class FetchError extends Error {
    cause: Error;
    name: "FetchError";
    constructor(cause: Error, msg?: string);
}
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];
export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = {
    [key: string]: string;
};
export type HTTPQuery = {
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = {
    headers?: HTTPHeaders;
    method: HTTPMethod;
    credentials?: RequestCredentials;
    body?: HTTPBody;
};
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';
export type InitOverrideFunction = (requestContext: {
    init: HTTPRequestInit;
    context: RequestOpts;
}) => Promise<RequestInit>;
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
export declare function exists(json: any, key: string): boolean;
export declare function querystring(params: HTTPQuery, prefix?: string): string;
export declare function mapValues(data: any, fn: (item: any) => any): {};
export declare function canConsumeForm(consumes: Consume[]): boolean;
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
export declare class JSONApiResponse<T> {
    raw: Response;
    private transformer;
    constructor(raw: Response, transformer?: ResponseTransformer<T>);
    value(): Promise<T>;
}
export declare class VoidApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<void>;
}
export declare class BlobApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<Blob>;
}
export declare class TextApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<string>;
}
export {};
