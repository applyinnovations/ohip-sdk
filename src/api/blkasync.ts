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

/**
 * Error Detail
 * Complex type that contains error details for a REST call.
 */
export interface ExceptionDetailType {
  /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
  type?: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title?: string;
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
  type?: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title?: string;
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

/** Metadata describing link description objects that MAY appear in the JSON instance representation. */
export interface InstanceLink {
  /** URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true. */
  href?: string;
  /** Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile. */
  rel?: string;
  /**
   * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
   * @default false
   */
  templated?: boolean;
  /** HTTP method for requesting the target of the link. */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
  /** Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource.. */
  targetSchema?: string;
  /** The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply. */
  operationId?: string;
  /** Exact copy of the "summary" field on the linked operation. */
  title?: string;
}

export type Links = InstanceLink[];

export interface BlockAllocationSummaryType {
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  blockId?: string;
  /**
   * Defined block code for the block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * Name of the block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  masterBlockId?: string;
  /**
   * Booking Status of the block.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Market Code of the block.
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format date-time */
  cutOffDate?: string;
  cutOffDays?: number;
  /**
   * Cancellation Date.
   * @format date-time
   */
  cancellationDate?: string;
  /**
   * Code that idenfies the reason for cancellation.
   * @minLength 0
   * @maxLength 20
   */
  cancellationCode?: string;
  /**
   * Description that explains the reason for cancellation.
   * @minLength 0
   * @maxLength 2000
   */
  cancellationDescription?: string;
  /** Catering Owner */
  cateringOwner?: number;
  /**
   * Primary Catering Owner Code
   * @minLength 0
   * @maxLength 10
   */
  cateringOwnerCode?: string;
  /**
   * Property of Catering Owner
   * @minLength 0
   * @maxLength 20
   */
  cateringOwnerResort?: string;
  /** Owner ID */
  owner?: number;
  /**
   * Block Owner Code
   * @minLength 0
   * @maxLength 10
   */
  ownerCode?: string;
  /**
   * Property of Business Block Owner
   * @minLength 0
   * @maxLength 20
   */
  ownerResort?: string;
  /** Rooms Owner */
  roomsOwner?: number;
  /**
   * Primary Rooms Owner Code
   * @minLength 0
   * @maxLength 10
   */
  roomsOwnerCode?: string;
  /**
   * Property of Rooms Owner
   * @minLength 0
   * @maxLength 20
   */
  roomsOwnerResort?: string;
  /**
   * The business date the block was created.
   * @format date-time
   */
  createDateTime?: string;
  /**
   * Indicates the internal type of the block like G, etc.
   * @minLength 0
   * @maxLength 1
   */
  blockType?: string;
  /**
   * Booking Method.
   * @minLength 0
   * @maxLength 20
   */
  reservationMethod?: string;
  /**
   * Rate code associated with Block.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Date Time when the block was modified last.
   * @format date-time
   */
  lastModifiedDate?: string;
  /**
   * Source of the Block.
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
  /** @maxItems 4000 */
  allocationDates?: RoomAllocationDateType[];
}

export interface RoomAllocationDateType {
  /**
   * The block date for which the allocation details are listed.
   * @format date-time
   */
  allocationDate?: string;
  /** @maxItems 4000 */
  allocations?: RoomAllocationDetailsType[];
}

export interface RoomAllocationDetailsType {
  /** The total original( forecasted ) rooms for the block. */
  originalRooms?: number;
  /**
   * The room type for which the allocation details are listed.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** The total current( projected + pickup ) rooms for the block. */
  currentRooms?: number;
  /** The total pickup rooms for the block. */
  pickupRooms?: number;
  /** The break up of projected rooms by occupancy. */
  inventory?: BlockGridInvType;
  /** The break up of occupancy rates. */
  rates?: BlockGridRatesType;
  /** The break up of actual revenue for room type. Applicable for past dates, business date or future dates. */
  actualRevenue?: BlockActualRevenueType;
  /** The break up of potential revenue for room type. Applicable for business date or future dates. */
  potentialRevenue?: BlockPotenitalRevenueType;
}

/** Indicates the inventory values ( occupancy or availability ) per person occupancy. */
export interface BlockGridInvType {
  /** Indicates the one person inventory value ( occupancy or availability ). */
  onePerson?: number;
  /** Indicates the two person inventory value ( occupancy or availability ). */
  twoPerson?: number;
  /** Indicates the three person inventory value ( occupancy or availability ). */
  threePerson?: number;
  /** Indicates the four person inventory value ( occupancy or availability ). */
  fourPerson?: number;
  /** Indicates the sell limit */
  sellLimit?: number;
}

/** Indicates the sum of revenue breakup per room type per block per allocation date for the reservations. Applicable for past dates, business date or future dates. */
export interface BlockActualRevenueType {
  /** Indicates room revenue amount. */
  roomRevenue?: number;
  /** Indicates food revenue amount. */
  foodRevenue?: number;
  /** Indicates other revenue amount. */
  otherRevenue?: number;
  /** Indicates non revenue amount. */
  nonRevenue?: number;
  /** Indicates total revenue amount. */
  totalRevenue?: number;
  /** Indicates room revenue tax amount. */
  roomRevenueTax?: number;
  /** Indicates food revenue tax amount. */
  foodRevenueTax?: number;
  /** Indicates other revenue tax amount. */
  otherRevenueTax?: number;
  /** Indicates non revenue tax amount. */
  nonRevenueTax?: number;
  /** Indicates total revenue tax amount. */
  totalRevenueTax?: number;
  /** Currency code to reflect the currency in which an amount may be expressed. */
  currency?: string;
}

/** Indicates the sum of revenue breakup per room type per block per allocation date for the reservations. Applicable for business date or future dates. */
export interface BlockPotenitalRevenueType {
  /** Indicates room revenue amount. */
  roomRevenue?: number;
  /** Indicates food revenue amount. */
  foodRevenue?: number;
  /** Indicates other revenue amount. */
  otherRevenue?: number;
  /** Indicates non revenue amount. */
  nonRevenue?: number;
  /** Indicates total revenue amount. */
  totalRevenue?: number;
  /** Indicates room revenue tax amount. */
  roomRevenueTax?: number;
  /** Indicates food revenue tax amount. */
  foodRevenueTax?: number;
  /** Indicates other revenue tax amount. */
  otherRevenueTax?: number;
  /** Indicates non revenue tax amount. */
  nonRevenueTax?: number;
  /** Indicates total revenue tax amount. */
  totalRevenueTax?: number;
  /** Currency code to reflect the currency in which an amount may be expressed. */
  currency?: string;
}

/** Indicates the rate amount values per person occupancy. */
export interface BlockGridRatesType {
  /** Indicates the one person occupancy rate amount. */
  onePerson?: number;
  /** Indicates the two person occupancy rate amount. */
  twoPerson?: number;
  /** Indicates the three person occupancy rate amount. */
  threePerson?: number;
  /** Indicates the four person occupancy rate amount. */
  fourPerson?: number;
  /** Indicates the extra person occupancy rate amount. */
  extraPerson?: number;
}

/** Request object for fetching block allocation summary asynchronously. */
export interface Criteria {
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  /** @format date */
  occupancyDate?: string;
  /** @format date-time */
  startLastModifiedDate?: string;
  /** @format date-time */
  endLastModifiedDate?: string;
}

/**
 * Response object for fetched block allocation summary.
 * @maxItems 4000
 */
export type BlockAllocationSummary = BlockAllocationSummaryType[];

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
  public prerequest: Promise<any> = Promise.resolve();
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/blk/async/v1', axiosConfig.baseURL).toString() });
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
    // Wait for the prerequest to resolve before proceeding with the actual request. Useful for waiting for fetching auth tokens
    await this.prerequest;

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
 * @title OPERA Cloud Block Reservation Asynchronous API
 * @version 22.4.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /blk/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 22.4.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  externalSystems = {
    /**
     * @description This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>startBlockAllocationSummaryProcess</p>
     *
     * @tags BlockAsync
     * @name StartBlockAllocationSummaryProcess
     * @summary This API facilitates fetching block allocation summary for a Hotel.
     * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary
     */
    startBlockAllocationSummaryProcess: (
      hotelId: string,
      extSystemCode: string,
      criteria: Criteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<void, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/blocks/allocationSummary`,
        method: 'POST',
        body: criteria,
        type: ContentType.Json,
        ...newParams,
      });
    },

    /**
     * @description Use this to check whether the summary of block allocation is ready yet. You can get value of summaryId from the header parameter Location, returned by the startBlockAllocationSummaryProcess operation. Once the process is completed, HEAD response returns status = COMPLETED and a header parameter Location with a summary ID for getBlockAllocationSummary API. <p><strong>OperationId:</strong>getBlockAllocationSummaryProcessStatus</p>
     *
     * @tags BlockAsync
     * @name GetBlockAllocationSummaryProcessStatus
     * @summary Check status of Block Allocation Summary process
     * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}
     */
    getBlockAllocationSummaryProcessStatus: (
      requestId: string,
      extSystemCode: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<void, void>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/blocks/allocationSummary/${requestId}`,
        method: 'HEAD',
        type: ContentType.Json,
        ...newParams,
      });
    },

    /**
     * @description This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>getBlockAllocationSummary</p>
     *
     * @tags BlockAsync
     * @name GetBlockAllocationSummary
     * @summary This API returns a hotel's block allocation summary for a scheduled process.
     * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}
     */
    getBlockAllocationSummary: (
      requestId: string,
      hotelId: string,
      extSystemCode: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockAllocationSummary, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/blocks/allocationSummary/${requestId}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
