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

export interface ReservationsDailySummarySearchType {
  /**
   * The Hotel Code for which the reservation search will be performed.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The start date and time span for the search to be performed. */
  timeSpan?: TimeSpanType;
  /** Start and End Modified Dates of Reservations after which the results are to be fetched */
  lastModifiedDate?: LastModifiedDateType;
}

/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, whild Duration provides a measure of time to add to the StartDate to yield end date. */
export interface TimeSpanType {
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  duration?: string;
}

/** Start and End Modified Dates of Reservations after which the results are to be fetched */
export interface LastModifiedDateType {
  /** @format date-time */
  startLastModifiedDate?: string;
  /** @format date-time */
  endLastModifiedDate?: string;
}

/** Daily summary information related to a reservation. */
export interface ReservationDailySummaryType {
  /** Collection of reservation identifiers like Reservation Name ID, Confirmation Number, etc. */
  reservationIdList?: ReservationIdList;
  /** Indicates the status of the reservation. */
  resvStatus?: PMSResStatusType;
  /** Indicates whether the reservation has any sharers. Y indicates true and N indicates false. */
  sharedYn?: string;
  /**
   * The unique identifier reservationId of the shared reservation.
   * @minLength 0
   * @maxLength 80
   */
  sharersList?: string;
  /** @format date-time */
  arrival?: string;
  /** @format date-time */
  departure?: string;
  /**
   * The date the reservation was checked out.
   * @format date-time
   */
  checkedOutDate?: string;
  /**
   * The date the reservation was canceled.
   * @format date-time
   */
  cancellationDate?: string;
  /** @format date-time */
  bookingDate?: string;
  /**
   * Affiliation or ethnicity to a particular country.
   * @minLength 0
   * @maxLength 20
   */
  nationality?: string;
  /**
   * Type of the reservation.
   * @minLength 0
   * @maxLength 20
   */
  resvType?: string;
  /** Number of rooms of the reservation. */
  noOfRooms?: number;
  /**
   * Block code of the reservation.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * Country code for guest's primary address.
   * @minLength 0
   * @maxLength 20
   */
  guestCountry?: string;
  /** ID of the travel agent for the reservation. */
  travelAgentId?: UniqueIDType;
  /**
   * Name of the travel agent for the reservation.
   * @minLength 0
   * @maxLength 200
   */
  travelAgentName?: string;
  /**
   * IATA Code.
   * @minLength 0
   * @maxLength 20
   */
  iataCode?: string;
  /** ID of the company for the reservation. */
  companyId?: UniqueIDType;
  /**
   * Name of the company for the reservation.
   * @minLength 0
   * @maxLength 200
   */
  companyName?: string;
  /** ID of the group for the reservation. */
  groupId?: UniqueIDType;
  /**
   * Name of the group for the reservation.
   * @minLength 0
   * @maxLength 200
   */
  groupName?: string;
  /** ID of the source for the reservation. */
  sourceId?: UniqueIDType;
  /**
   * Name of the source for the reservation.
   * @minLength 0
   * @maxLength 200
   */
  sourceName?: string;
  /** ID of the contact for the reservation. */
  resvContactId?: UniqueIDType;
  /**
   * Name of the contact for the reservation.
   * @minLength 0
   * @maxLength 200
   */
  resvContactName?: string;
  /**
   * Business Date when the reservation was created.
   * @format date-time
   */
  createDateTime?: string;
  /**
   * Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned.
   * @format date-time
   */
  lastModifiedDateTime?: string;
  /**
   * Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned.
   * @format date-time
   */
  lastModifiedDate?: string;
  /** Card Number of the membership.Either membershipId or membershipNumber will be returned. */
  membershipId?: string;
  /** Card Number of the membership.Either membershipId or membershipNumber will be returned. */
  membershipNumber?: string;
  /** Type of membership. */
  membershipType?: string;
  /** Indicates the membership level. */
  membershipLevel?: string;
  /** Number of children classified under the first Age Qualifying Group. */
  children1?: number;
  /** Number of children classified under the second Age Qualifying Group. */
  children2?: number;
  /** Number of children classified under the third Age Qualifying Group. */
  children3?: number;
  cancellationReasonCode?: string;
  /**
   * Classifies the medium(Channel field on reservation screen) through which the reservation is made. Either bookingMedium or origin_of_booking will be present in the response.
   * @minLength 0
   * @maxLength 20
   */
  bookingMedium?: string;
  /**
   * Classifies the medium(Channel field on reservation screen) through which the reservation is made.Either bookingMedium or origin_of_booking will be present in the response.
   * @minLength 0
   * @maxLength 20
   */
  origin_of_booking?: string;
  /**
   * Collection of daily summary for the reservation.
   * @maxItems 4000
   */
  dailySummary?: DailySummaryType[];
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface UniqueIDType {
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ReservationIdList = UniqueIDType[];

/** Statistic information related to a specific reservation stay date. */
export interface DailySummaryType {
  /**
   * The rate plan code of the reservation.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /** A monetary amount. */
  rateAmount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  rateAmountCurrency?: string;
  /**
   * Holds the code that relates to the market being sold (e.g., the corporate market, packages).
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * Room type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Booked room type.
   * @minLength 0
   * @maxLength 20
   */
  bookedRoomType?: string;
  /**
   * Room number.
   * @minLength 0
   * @maxLength 20
   */
  room?: string;
  /** Net Amount generated by the reservation. */
  netRateAmount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  netRateAmountCurrency?: string;
  /** Room Revenue generated by the reservation. */
  roomRevenue?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  roomRevenueCurrency?: string;
  /** Food and Beverage Revenue generated by the reservation. */
  fbRevenue?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  fbRevenueCurrency?: string;
  /** Other Revenue generated by the reservation. */
  otherRevenue?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  otherRevenueCurrency?: string;
  /** Total Revenue generated by the reservation. */
  totalRevenue?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  totalRevenueCurrency?: string;
  /** Package Revenue generated by the reservation. */
  packageRevenue?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  packageRevenueCurrency?: string;
  /** Tax Revenue generated by the reservation. */
  tax?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  taxCurrency?: string;
  /**
   * Room type charged for the reservation.
   * @minLength 0
   * @maxLength 20
   */
  roomTypeCharged?: string;
  /**
   * Reservation stay date for which the daily statistics are projected.
   * @format date-time
   */
  trxDate?: string;
  /**
   * The entity/channel who made the reservation.
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
  /**
   * Classifies the Channel field on reservation screen through which the reservation is made.
   * @minLength 0
   * @maxLength 20
   */
  channel?: string;
  /** Number of adults of the reservation. */
  adults?: number;
  /** Number of children of the reservation. */
  children?: number;
}

/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
export enum PMSResStatusType {
  Reserved = 'Reserved',
  Requested = 'Requested',
  NoShow = 'NoShow',
  Cancelled = 'Cancelled',
  InHouse = 'InHouse',
  CheckedIn = 'CheckedIn',
  CheckedOut = 'CheckedOut',
  Waitlisted = 'Waitlisted',
  DueIn = 'DueIn',
  DueOut = 'DueOut',
  Walkin = 'Walkin',
  PendingCheckout = 'PendingCheckout',
}

/** Request object for fetching future reservations asynchronously. */
export interface Criteria {
  criteria?: ReservationsDailySummarySearchType;
}

/** Reservation Daily Summary Details. */
export interface ReservationsDailySummaryDetails {
  /** @maxItems 4000 */
  reservations?: ReservationDailySummaryType[];
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
  public prerequest: Promise<any> = Promise.resolve();
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/rsv/async/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Reservation Asynchronous API
 * @version 22.4.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rsv/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 22.4.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  externalSystems = {
    /**
     * @description Use this API to get a reservation daily summary for a property within a given date range. Maximum limit of date range is 94 days, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getReservationsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time reservation updates.  <p><strong>OperationId:</strong>startReservationsDailySummaryProcess</p>
     *
     * @tags ReservationAsync
     * @name StartReservationsDailySummaryProcess
     * @summary Fetch past, present and future Reservations Daily Summary
     * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary
     */
    startReservationsDailySummaryProcess: (
      extSystemCode: string,
      hotelId: string,
      criteria: Criteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<void, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/reservations/dailySummary`,
        method: 'POST',
        body: criteria,
        type: ContentType.Json,
        ...newParams,
      });
    },

    /**
     * @description Use this to check whether the process to generate reservations daily summaries is complete. You can get value of summaryId from the Location header returned by the startReservationsDailySummaryProcess operation. <p><strong>OperationId:</strong>getReservationsProcessStatus</p>
     *
     * @tags ReservationAsync
     * @name GetReservationsProcessStatus
     * @summary Check status of Reservation Daily Summary process
     * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}
     */
    getReservationsProcessStatus: (
      summaryId: string,
      extSystemCode: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<void, void>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/reservations/dailySummary/${summaryId}`,
        method: 'HEAD',
        type: ContentType.Json,
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve a property&apos;s reservation daily summary within the dates given in the startReservationsDailySummaryProcess API request. You can get the value of the summaryId from the Location header returned by the getReservationsProcessStatus operation after the process is completed.  <p><strong>OperationId:</strong>getReservationsDailySummary</p>
     *
     * @tags ReservationAsync
     * @name GetReservationsDailySummary
     * @summary Get results of Reservations Daily Summary
     * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}
     */
    getReservationsDailySummary: (
      summaryId: string,
      extSystemCode: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ReservationsDailySummaryDetails, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/reservations/dailySummary/${summaryId}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
