/** OAuth2 token object sent as a response to the token request */
export interface OAuth2TokenResponse {
    /** The access token.  Include this in the header for every subsequent request. */
    access_token: string;
    /**
     * Time in seconds for the access token to expire (typically, 3600 i.e. 60 minutes)
     * @format int64
     */
    expires_in?: number;
    /** The type of access token issued (Bearer). */
    token_type?: string;
    /** Always user_assertion. */
    oracle_tk_context?: string;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    prerequest: Promise<any>;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T, any>>;
}
/**
 * @title Property oAuth API for OHIP
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /oauth/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * REST API to obtain an OAuth token from the Oracle Hospitality Integration Platform.  <p>For authenticating to Distribution APIs please use the Early Release OPERA Cloud Distribution Authentication API.</p><br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    tokens: {
        /**
         * @description <p>This is required to access Oracle Hospitality OPERA Cloud REST APIs.  </p><h3>Obtaining a token</h3><p>To obtain a token include the following headers:</p> <ul><li>A Basic authentication header using the base64 hash of your Client ID and Client Secret in the format <code>ClientID:ClientSecret</code> - base64 encoded to the Basic Access Authorization standard</li> <li>Your application key in the <code>x-app-key</code> header</li></ul> <p>And the following body parameters:</p> <h4>Body parameters for obtaining your initial access token</h4> <ul><li><strong>grant_type</strong>.  Required to be "password"</strong></li><li><strong>username</strong>.  set this to your  OPERA Cloud integration username.</strong></li><li><strong>password</strong>.  Set this to your OPERA Cloud integration user's password.</li> <li><strong>scope</strong>. Optional.  Reserved for future use.</li> </strong></li></ul> <h3>JSON Web Token (JWT)</h3><p> An open standard (<a href="https://tools.ietf.org/html/rfc7519" title="Definition of RFC7519, the standard for JWT tokens">RFC 7519</a>) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p><p><strong>OperationId:</strong>getToken</p>
         *
         * @tags Authentication
         * @name GetToken
         * @summary Authenticate with the identity server
         * @request POST:/tokens
         * @secure
         */
        getToken: (data: {
            /** The grant type.  This value will depend on the API you are passing the OAuth token to. */
            grant_type: 'password';
            /** Your OPERA Cloud integration user name. Required value when requesting a token using the password grant. */
            username?: string;
            /** Your OPERA Cloud integration user password. Required value when requesting a token using the password grant. */
            password?: string;
            /** Your desired scope to be included in the token.  This is an optional parameter and is reserved for future use. */
            scope?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<OAuth2TokenResponse, any>>;
    };
}
