/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: new URL('/tokenExchange/v1', axiosConfig.baseURL).toString(),
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
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
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  hotels = {
    /**
     * @description Converts Primary Account Number (PAN) into Token issued by Payment Service Providers
     *
     * @tags Hotels
     * @name OpenPaymentTokenExchange
     * @summary Card Tokenization
     * @request POST:/hotels/{hotelCode}/tokens
     * @secure
     */
    openPaymentTokenExchange: (
      hotelCode: string,
      body: {
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
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<
        {
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
        },
        {
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
        } | void
      >({
        path: `/hotels/${hotelCode}/tokens`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
