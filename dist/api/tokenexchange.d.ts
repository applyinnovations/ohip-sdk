/** JSON object containing the card information */
export interface CardInfo {
    /**
     * Expiration Date, YYMM format
     * @pattern ^[0-9]{2}(0[1-9]|1[0-2])$
     * @example "2312"
     */
    expiryDate: string;
    /**
     * Primary Account Number (PAN)
     * @pattern ^[0-9]{8,19}$
     * @example "1111222233334444"
     */
    pan: string;
    /**
     * Record number, the value must be unique within the collection
     * @format int32
     * @min 1
     * @example 1
     */
    recordNumber: number;
}
/** Problem Details for HTTP APIs */
export interface ProblemDetail {
    /**
     * Unique identifier value that is attached to the request that allows reference to a particular transaction
     * @example "MzdhODNkZmMtNzk5YS00OTYxLTg3YTMtM2ZkYTE4YjJlMzc0"
     */
    correlationId?: string;
    /**
     * Detailed error message
     * @example "There are validation errors for the object"
     */
    detail?: string;
    /**
     * Application specific error code
     * @example "OPICS-BAD_REQUEST"
     */
    'o:errorCode'?: string;
    /** Drill down to the details */
    'o:errorDetails'?: ProblemDetail[];
    /**
     * JSON path to indicate where the error occurs
     * @example "cards[1]"
     */
    'o:errorPath'?: string;
    /**
     * HTTP status code
     * @format int32
     * @example 400
     */
    status?: number;
    /**
     * Summary error message
     * @example "Bad Request"
     */
    title: string;
    /**
     * HTTP error code page
     * @example "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1"
     */
    type: string;
}
/** TokenInfo object */
export interface TokenInfo {
    /**
     * OPERA Card Type
     * @example "VA"
     */
    cardType: string;
    /**
     * Expiration Date, YYMM format
     * @example "2312"
     */
    expiryDate: string;
    /**
     * Masked Primary Account Number (PAN)
     * @example "XXXXXXXXXXXX4444"
     */
    pan: string;
    /**
     * Record number
     * @format int32
     * @example 1
     */
    recordNumber: number;
    /**
     * Card Token
     * @example "483204890324827"
     */
    token: string;
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
 * @title OPI Token Exchange Service API
 * @version 1.0.1
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /tokenExchange/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description Converts Primary Account Number (PAN) into Token issued by Payment Service Providers
         *
         * @tags Hotels
         * @name OpenPaymentTokenExchange
         * @summary Card Tokenization
         * @request POST:/hotels/{hotelCode}/tokens
         * @secure
         */
        openPaymentTokenExchange: (hotelCode: string, body: {
            /**
             * Expiration Date, YYMM format
             * @pattern ^[0-9]{2}(0[1-9]|1[0-2])$
             * @example "2312"
             */
            expiryDate: string;
            /**
             * Primary Account Number (PAN)
             * @pattern ^[0-9]{8,19}$
             * @example "1111222233334444"
             */
            pan: string;
        }, params?: RequestParams) => Promise<AxiosResponse<{
            /**
             * OPERA Card Type
             * @example "VA"
             */
            cardType: string;
            /**
             * Expiration Date, YYMM format
             * @example "2312"
             */
            expiryDate: string;
            /**
             * Masked Primary Account Number (PAN)
             * @example "XXXXXXXXXXXX4444"
             */
            pan: string;
            /**
             * Card Token
             * @example "483204890324827"
             */
            token: string;
        }, any>>;
    };
}
