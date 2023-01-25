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

/** Provides business event message dequeued from BE queue as response */
export interface BusinessEvents {
  /** List of BusinessEvents dequeued for given external system */
  businessEventData?: BusinessEventDataType[];
  links?: InstanceLink[];
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface BusinessEventDataType {
  /** Business event type. */
  businessEvent?: BusinessEventType;
  /** Unique identifier of the Business Event ID */
  businessEventId?: BusinessEventIDType;
}

export interface BusinessEventType {
  /** Business event header type. */
  header?: BusinessEventHeaderType;
  /** Business event details collection. */
  details?: BusinessEventDetailsType;
}

export interface BusinessEventHeaderType {
  /** Business event module name. */
  moduleName?: BusinessEventModuleType;
  /** Business event action type, such as new reservation, update profile, etc. */
  actionType?: string;
  /** Unique action instance id of the business event, uniqueness is guaranteed intra-module only. */
  actionId?: number;
  /** Primary key value of the business event, such as resv name id, allotment header id, name id etc. */
  primaryKey?: string;
  /** Action instance id of the parent business event, if the action triggered this event was a side effect of another action. */
  parentActionId?: number;
  /** Internal id of the application or system user that triggered this event. */
  publisherId?: number;
  /**
   * Timestamp of the business event.
   * @format date-time
   */
  createdDateTime?: string;
  /**
   * The property this business event is associated with.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

export enum BusinessEventModuleType {
  Activity = 'Activity',
  Availability = 'Availability',
  Block = 'Block',
  BlockOffsets = 'BlockOffsets',
  Cashiering = 'Cashiering',
  Catering = 'Catering',
  CateringNotes = 'CateringNotes',
  Configuration = 'Configuration',
  ECertificate = 'ECertificate',
  Enrollment = 'Enrollment',
  Housekeeping = 'Housekeeping',
  MrEnrollment = 'MrEnrollment',
  NightAudit = 'NightAudit',
  OwnerContract = 'OwnerContract',
  Profile = 'Profile',
  Rate = 'Rate',
  Reservation = 'Reservation',
  StayRecords = 'StayRecords',
}

/** @maxItems 4000 */
export type BusinessEventDetailsType = BusinessEventDetailType[];

export interface BusinessEventDetailType {
  /** Name of the data element, such as arrival date, departure date, etc. */
  dataElement?: string;
  /** Value of the element when this action took place. In case of date values, format used is YYYY-MM-DD. */
  oldValue?: string;
  /** Value of the element after this action took place. In case of date values, format used is YYYY-MM-DD. */
  newValue?: string;
  /**
   * Begin date from when this value is applicable, such as daily element date, block grid date etc.
   * @format date
   * @maxLength 8
   */
  scopeFrom?: string;
  /**
   * End date till when this value is applicable, such as daily element date, block grid date etc.
   * @format date
   * @maxLength 8
   */
  scopeTo?: string;
  /** Sequence number used to correlate fields of each record, when a collection of records is represented. */
  elementSequence?: number;
  /** Element type used to correlate fields of each record, when a collection of records is represented, such as phone type for phones. */
  elementType?: string;
  /** Element role used to correlate fields of each record, when a collection of records is represented, such as phone role for phones. */
  elementRole?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BusinessEventIDType {
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
}

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

export type Links = InstanceLink[];

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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/int/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Integration Processor API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /int/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  externalSystem = {
    /**
     * @description Business Event messages will be placed in a queue. Use this API to fetch the Business Event messages based on External System. <p><strong>OperationId:</strong>getBusinessEventsByExternalSystem</p>
     *
     * @tags IntegrationProcessor
     * @name GetBusinessEventsByExternalSystem
     * @summary Get Business Events by External System
     * @request GET:/externalSystem/{extSystemCode}/businessEvents
     */
    getBusinessEventsByExternalSystem: (
      hotelId: string,
      extSystemCode: string,
      query?: {
        /**
         * Number of messages web service should dequeue from the BE queue.
         * @default 1
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BusinessEvents, ExceptionDetailType>({
        path: `/externalSystem/${extSystemCode}/businessEvents`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Business Event messages will be placed in a queue. Use this API to fetch the Business Event messages based on External System and Hotel ID. In order to get property specific business event messages, you need to create a unique consumer code (Toolbox > External Database) for the External System and the Property. <p><strong>OperationId:</strong>getBusinessEvents</p>
     *
     * @tags IntegrationProcessor
     * @name GetBusinessEvents
     * @summary Get Business Events by External System and Hotel ID
     * @request GET:/externalSystem/{extSystemCode}/hotels/{hotelId}/businessEvents
     */
    getBusinessEvents: (
      hotelId: string,
      extSystemCode: string,
      query?: {
        /**
         * Number of messages web service should dequeue from the BE queue.
         * @default 1
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BusinessEvents, ExceptionDetailType>({
        path: `/externalSystem/${extSystemCode}/hotels/${hotelId}/businessEvents`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
