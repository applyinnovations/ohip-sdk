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

/** Response for fetch Guarantee Codes. */
export interface GuaranteeCodesDetails {
  /** Collection of Guarantee Codes. */
  guaranteeCodes?: GuaranteeCodesType[];
  /** Evaluated total page count based on the requested max fetch count. */
  totalPages?: number;
  /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
  offset?: number;
  /** Indicates maximum number of records a Web Service should return. */
  limit?: number;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The Collection of Guarantee Codes Type. */
export interface GuaranteeCodesType {
  /**
   * Guarantee Code details.
   * @maxItems 4000
   */
  guaranteeCode?: GuaranteeConfigType[];
  /**
   * Hotel code for fetched template Guarantee Codes.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Specifies Guarantee Code attributes. */
export interface GuaranteeConfigType {
  /**
   * Description of the Guarantee Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Specifies various requirements for the guarantee code. */
  requirements?: GuaranteeRequirementsType;
  /** Brief description of the Guarantee Code. */
  shortDescription?: TranslationTextType80;
  /** Specifies various payment types for the guarantee code. */
  paymentTypes?: PaymentTypesType;
  /**
   * Code assigned to the Guarantee.
   * @minLength 0
   * @maxLength 20
   */
  guaranteeCode?: string;
  /** If true indicates this Guarantee Code is used only to hold the inventory during reservation process. */
  onHold?: boolean;
  /** If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. */
  reserveInventory?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
  /**
   * Represents the late arrival time.
   * @maxLength 2000
   */
  lateArrival?: string;
  /** Defines the Auto mass cancellation criteria (i.e. number of days pending before auto cancellation). */
  massCancellation?: {
    /** If true indicates, the reservations having this Guarantee Code will be auto canceled for which the credit card info is missing for number of days specified in pending days. */
    autoCancel?: boolean;
    /** Number of days, with in which the credit card info should be received for the reservation, using this guarnatee code, to avoid auto cancellation. */
    pendingDays?: number;
  };
  /** Indicates the reservation type is inactive or not. */
  inactive?: boolean;
}

/** Specifies various requirement for the guarantee code. */
export interface GuaranteeRequirementsType {
  /**
   * Requirement Code.
   * @maxLength 2000
   */
  requirementCode?: string;
  /** When true indicates cancellation on the reservation is required for this guarantee code. */
  cancellation?: boolean;
  /** When true indicates phone number on the reservation is required for this guarantee code. */
  phoneNumber?: boolean;
  /** When true indicates address on the reservation is required for this guarantee code. */
  address?: boolean;
  /** When true indicates Credit Card on the reservation is required for this guarantee code. */
  creditCard?: boolean;
  /** When true indicates arrival Time on the reservation is required for this guarantee code. */
  arrivalTime?: boolean;
  /** When true indicates deposit is required for this guarantee code. */
  deposit?: boolean;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType80 {
  /**
   * Default text with Character length from 0 to 80.
   * @minLength 0
   * @maxLength 80
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translatedTexts?: TranslationsTextType;
}

/**
 * Language code for the translation.
 * @maxItems 4000
 */
export type TranslationsTextType = {
  /**
   * Used for Character Strings, length 0 to 2000.
   * @minLength 0
   * @maxLength 2000
   */
  value?: string;
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
}[];

/**
 * Payment card code like AX,VI etc.
 * @maxItems 4000
 */
export type PaymentTypesType = string[];

export type Links = InstanceLink[];

/** Metadata describing link description objects that MAY appear in the JSON instance representation. */
export interface InstanceLink {
  /** URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true. */
  href: string;
  /** Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile. */
  rel: string;
  /**
   * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
   * @default false
   */
  templated?: boolean;
  /** HTTP method for requesting the target of the link. */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
  /** Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource.. */
  targetSchema?: string;
  /** The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply. */
  operationId: string;
  /** Exact copy of the "summary" field on the linked operation. */
  title?: string;
}

/**
 * Used in conjunction with the Success element to define a business error.
 * @maxItems 4000
 */
export type WarningsType = WarningType[];

/** Used when a message has been successfully processed to report any warnings or business errors that occurred. */
export interface WarningType {
  /** Property Value */
  value?: string;
  /**
   * An abbreviated version of the error in textual format.
   * @maxLength 2000
   */
  shortText?: string;
  /**
   * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * If present, this URL refers to an online description of the error that occurred.
   * @maxLength 2000
   */
  docURL?: string;
  /**
   * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
   * @maxLength 2000
   */
  status?: string;
  /**
   * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
   * @maxLength 2000
   */
  tag?: string;
  /**
   * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
   * @maxLength 2000
   */
  recordId?: string;
  /**
   * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
  /**
   * Reference Place Holder used as an index for this warning.
   * @minLength 1
   * @maxLength 8
   */
  rph?: string;
}

/**
 * Error Detail
 * Complex type that contains error details for a REST call.
 */
export interface ExceptionDetailType {
  /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
  type: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title: string;
  /** HTTP status code for this occurrence of the problem, set by the origin server. */
  status?: number;
  /** Human-readable description specific to this occurrence of the problem. */
  detail?: string;
  /** Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. */
  instance?: string;
  /** Application error code, which is different from HTTP error code. */
  'o:errorCode'?: string;
  /** Path to the problem at the resource or property level. */
  'o:errorPath'?: string;
  /** Details of the error message, consisting of a hierarchical tree structure. */
  'o:errorDetails'?: ErrorInstance[];
  links?: Links;
}

/**
 * Error Instance Details
 * Complex type that contains error instance details for a REST call.
 */
export interface ErrorInstance {
  /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
  type: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title: string;
  /** HTTP status code for this occurrence of the problem, set by the origin server. */
  status?: number;
  /** Human-readable description specific to this occurrence of the problem. */
  detail?: string;
  /** Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. */
  instance?: string;
  /** Application error code, which is different from HTTP error code. */
  'o:errorCode'?: string;
  /** Path to the problem at the resource or property level. */
  'o:errorPath'?: string;
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
      baseURL: new URL('/rsv/config/v1', axiosConfig.baseURL).toString(),
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
 * @title OPERA Cloud Reservation Master Data Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rsv/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  guaranteeCodes = {
    /**
     * @description Use this API to get Guarantee Codes for a hotel. Guarantee codes are required to identify if the reservation is deducted (definite), not deducted (tentative) from availability, or is guaranteed.<p><strong>OperationId:</strong>getGuaranteeCodes</p>
     *
     * @tags HotelConfig
     * @name GetGuaranteeCodes
     * @summary Get guarantee codes
     * @request GET:/guaranteeCodes
     */
    getGuaranteeCodes: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
        pageNumber?: number;
        hotelIds?: string[];
        guaranteeCodes?: string[];
        /** Is Guarantee Code Inactive? */
        inactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<GuaranteeCodesDetails, ExceptionDetailType>({
        path: `/guaranteeCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
