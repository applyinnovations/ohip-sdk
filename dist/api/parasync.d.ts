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
/**
 * Collection of restrictions to be configured.
 * @maxItems 1000
 */
export type RestrictionsType = CreateRestrictionType[];
export interface CreateRestrictionType {
    /** Indicates the type of the restriction. */
    restrictionStatus?: RestrictionStatusType;
    /**
     * The rate code for which the restriction will be applied.
     * @maxItems 4000
     */
    ratePlanCodes?: string[];
    /**
     * The rate class for which the restriction will be applied.
     * @maxItems 4000
     */
    rateClasses?: string[];
    /**
     * The room class for which the restriction will be applied.
     * @maxItems 4000
     */
    roomClasses?: string[];
    /**
     * Booking channel.
     * @maxItems 4000
     */
    bookingChannels?: string[];
    /**
     * The room type for which the restriction will be applied.
     * @maxItems 4000
     */
    roomTypes?: string[];
    /**
     * The rate category for which the restriction will be applied.
     * @maxItems 4000
     */
    ratePlanCategories?: string[];
    /**
     * The season code during which the restrictions are valid.
     * @minLength 0
     * @maxLength 20
     */
    seasonCode?: string;
    /** Unique block identifier of the block for which restriction will be applied. */
    blockId?: BlockId;
    /**
     * Booking channel on request.
     * @minLength 0
     * @maxLength 1
     */
    bookingChannelOnRequest?: string;
    /**
     * The starting value of the date range.
     * @format date
     */
    dateRangeStart?: string;
    /**
     * The ending value of the date range.
     * @format date
     */
    dateRangeEnd?: string;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    /** Yield status condition. */
    yieldStatus?: RoomTypeYieldableType;
}
/** Simple type for Yieldable or Non Yieldable */
export declare enum RoomTypeYieldableType {
    Yieldable = "Yieldable",
    NonYieldable = "NonYieldable"
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockId {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
}
/** The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group. */
export interface RestrictionStatusType {
    /** Identifies the type of restriction. I.E. Closed, ClosedForArrival, etc. */
    code?: RestrictionStatusesType;
    /** Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. */
    unit?: number;
    /** Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay1?: boolean;
    /** Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay2?: boolean;
    /** Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay3?: boolean;
    /** Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay4?: boolean;
    /** Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay5?: boolean;
    /** Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay6?: boolean;
    /** Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LengthOfStayNotAvailable. */
    lengthOfStay7?: boolean;
}
export declare enum RestrictionStatusesType {
    Closed = "Closed",
    ClosedForArrival = "ClosedForArrival",
    ClosedForDeparture = "ClosedForDeparture",
    MinimumStayThrough = "MinimumStayThrough",
    MaximumStayThrough = "MaximumStayThrough",
    MinimumLengthOfStay = "MinimumLengthOfStay",
    MaximumLengthOfStay = "MaximumLengthOfStay",
    LengthOfStayNotAvailable = "LengthOfStayNotAvailable",
    MinimumAdvanceBooking = "MinimumAdvanceBooking",
    MaximumAdvanceBooking = "MaximumAdvanceBooking",
    Open = "Open",
    OpenForArrival = "OpenForArrival",
    OpenForDeparture = "OpenForDeparture"
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
/** Request for configuring restrictions. */
export interface Restrictions {
    /** Restrictions to be configured. */
    restrictions?: RestrictionsType;
    links?: Links;
}
/** Response for created restrictions status. */
export interface RestrictionsStatus {
    /** List of warnings that occurred. */
    warnings?: WarningsType;
    links?: Links;
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
 * @title OPERA Cloud Price Availability Rate Async API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /par/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    externalSystems: {
        /**
         * @description A user can send various restrictions to OPERA by specifying restriction details in the request. <p><strong>OperationId:</strong>postRestrictionsProcess</p>
         *
         * @tags AvailabilityAsync
         * @name PostRestrictionsProcess
         * @summary Create restrictions in OPERA Cloud.
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions
         */
        postRestrictionsProcess: (hotelId: string, extSystemCode: string, restrictions: Restrictions, params?: RequestParams) => Promise<AxiosResponse<Links, any>>;
        /**
         * @description Use this to check whether the restrictions sent have been processed. <p><strong>OperationId:</strong>getRestrictionsProcessStatus</p>
         *
         * @tags AvailabilityAsync
         * @name GetRestrictionsProcessStatus
         * @summary Check status of Restrictions
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions/{requestId}
         */
        getRestrictionsProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this to check whether the restrictions sent have been processed. <p><strong>OperationId:</strong>getRestrictions</p>
         *
         * @tags AvailabilityAsync
         * @name GetRestrictions
         * @summary Get status for created restrictions.
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/restrictions/{requestId}
         */
        getRestrictions: (hotelId: string, extSystemCode: string, requestId: string, params?: RequestParams) => Promise<AxiosResponse<RestrictionsStatus, any>>;
    };
}
