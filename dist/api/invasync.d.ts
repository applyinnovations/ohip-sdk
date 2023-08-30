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
/** Fetch criteria type for fetching revenue inventory statistics. */
export interface RevenueInventoryStatisticsSearchType {
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
    /**
     * The optional room types by which revenue and inventory statistics will be grouped.
     * @maxItems 4000
     */
    roomTypes?: string[];
    /**
     * The market codes for which revenue and inventory statistics will be gathered.
     * @maxItems 4000
     */
    marketCodes?: string[];
    /**
     * The reservation guarantee codes for which revenue and inventory statistics will be gathered.
     * @maxItems 4000
     */
    guaranteeCodes?: string[];
    /**
     * Group by instructions for revenue inventory statistics that can be used in request operation. Response data will be grouped according to the values provided in this array. MarketCode and RoomType grouping is used for past and future revenue and inventory statistics while GuaranteeType is used only for future revenue and inventory statistics.
     * @uniqueItems true
     */
    groupBy?: ('MarketCode' | 'RoomType' | 'GuaranteeType')[];
}
/** Revenue Inventory Statistics for the current occupancy date which might include data grouped by room type, market and reservation guarantee code. */
export interface RevenueInventoryStatisticsDetails {
    /** @maxItems 4000 */
    revInvStats?: RevenueInventoryStatisticsType[];
}
/** Revenue and statistics for an occupancy date and hotel code. */
export interface RevenueInventoryStatisticsType {
    /**
     * The property for which revenue inventory statistics are fetched
     * @minLength 0
     * @maxLength 20
     */
    property?: string;
    /**
     * The occupancy date for which the revenue inventory statistics are fetched.
     * @format date
     */
    occupancyDate?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    resType?: string;
    /**
     * The market code for which the revenue inventory statistics are fetched.
     * @minLength 0
     * @maxLength 20
     */
    marketCode?: string;
    /**
     * The room type for which the revenue inventory statistics are fetched.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** The statistical figure for physical rooms. */
    physicalRooms?: number;
    /** The statistical figure for out of order rooms. */
    ooRooms?: number;
    /** The statistical figure for out of service rooms. */
    osRooms?: number;
    /** The statistical figure for rooms sold. */
    roomsSold?: number;
    /** The statistical figure for room revenue. */
    roomRevenue?: number;
    /** The statistical figure for arrival rooms. */
    roomArrivals?: number;
    /** The statistical figure of departure rooms. */
    roomDepartures?: number;
    /** The statistical figure for food revenue. */
    foodRevenue?: number;
    /** The statistical figure for total revenue. */
    totalRevenue?: number;
    /** The statistical figure for canceled rooms. */
    cancelledRooms?: number;
    /** The statistical figure of no show rooms. */
    noShowRooms?: number;
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
    /** Language identification. */
    language?: string;
    /**
     * Reference Place Holder used as an index for this warning.
     * @minLength 1
     * @maxLength 8
     */
    rph?: string;
}
/** Response for sell limits status  */
export interface SellLimitByDateStatus {
    /** List of warnings that occurred. */
    warnings?: WarningsType;
    links?: Links;
}
/**
 * Request for setting sell limits for house, room type, room class.
 * @maxItems 4000
 */
export type SellLimitsByDate = SellLimitByDateType[];
/** This type is used by sell limit request. */
export interface SellLimitByDateType {
    /**
     * Collection of House level sell limit by the date.
     * @maxItems 4000
     */
    houseSellLimits?: HouseSellLimitType[];
    /**
     * Collection of Room type level sell limit by the date.
     * @maxItems 4000
     */
    roomTypeSellLimits?: RoomTypeSellLimitType[];
    /**
     * Collection of Room Class level sell limit by the date.
     * @maxItems 4000
     */
    roomClassSellLimits?: RoomClassSellLimitType[];
}
export interface HouseSellLimitType {
    /** @format date */
    date?: string;
    amount?: number;
    /** Indicates if sell limit is flat or percentage. */
    flatOrPercentage?: 'Flat' | 'Percentage';
}
export interface RoomClassSellLimitType {
    /** @format date */
    date?: string;
    amount?: number;
    /** Indicates if sell limit is flat or percentage. */
    flatOrPercentage?: 'Flat' | 'Percentage';
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomClass?: string;
}
export interface RoomTypeSellLimitType {
    /** @format date */
    date?: string;
    amount?: number;
    /** Indicates if sell limit is flat or percentage. */
    flatOrPercentage?: 'Flat' | 'Percentage';
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
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
 * @title Opera Cloud Inventory Asynchronous API
 * @version 22.4.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /inv/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 22.4.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    externalSystems: {
        /**
         * @description Use this API to start the process to get a hotel inventory&apos;s revenue statistics for a given date range. Maximum limit of the date range is 94 days with a single request, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getRevenueInventoryStatisticsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time inventory updates.<p><strong>OperationId:</strong>startRevenueInventoryStatisticsProcess</p>
         *
         * @tags InventoryAsync
         * @name StartRevenueInventoryStatisticsProcess
         * @summary Start process to get hotel inventory revenue statistics
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics
         */
        startRevenueInventoryStatisticsProcess: (extSystemCode: string, hotelId: string, criteria: RevenueInventoryStatisticsSearchType, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to check whether the process to collate inventory revenue statistics is complete. You can get value of summaryId from the Location header returned by the startRevenueInventoryStatisticsProcess operation.<p><strong>OperationId:</strong>getRevenueInventoryStatisticsProcessStatus</p>
         *
         * @tags InventoryAsync
         * @name GetRevenueInventoryStatisticsProcessStatus
         * @summary Check status of Inventory Revenue Statistic process
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId}
         */
        getRevenueInventoryStatisticsProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description This API returns inventory revenue&apos;s statistics for a hotel within dates given in the startRevenueInventoryStatisticsProcess API request. You can get the value of the summaryId from the Location header returned by the getRevenueInventoryStatisticsProcessStatus operation after the process is completed.<p><strong>OperationId:</strong>getRevenueInventoryStatistics</p>
         *
         * @tags InventoryAsync
         * @name GetRevenueInventoryStatistics
         * @summary Get results of a revenue inventory statistics process
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId}
         */
        getRevenueInventoryStatistics: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<RevenueInventoryStatisticsDetails, any>>;
        /**
         * @description You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>postSellLimitsProcess</p>
         *
         * @tags InventoryAsync
         * @name PostSellLimitsProcess
         * @summary Create sell limit by date.
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits
         */
        postSellLimitsProcess: (hotelId: string, extSystemCode: string, sellLimitsByDate: SellLimitsByDate, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to check whether the sell limit data creation is completed yet. You can get the value of the summaryId with the postSellLimitsProcess API response (under header location). <p><strong>OperationId:</strong>getSellLimitsProcessStatus</p>
         *
         * @tags InventoryAsync
         * @name GetSellLimitsProcessStatus
         * @summary Get the status for sell limits asynchronous process
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId}
         */
        getSellLimitsProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description This API returns the status log if any of sell limit data creation is failed. You can get the value of summaryId with the getSellLimitsProcessStatus API response (under header location). <p><strong>OperationId:</strong>getSellLimits</p>
         *
         * @tags InventoryAsync
         * @name GetSellLimits
         * @summary Get status for sell limits for a property.
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId}
         */
        getSellLimits: (requestId: string, hotelId: string, extSystemCode: string, params?: RequestParams) => Promise<AxiosResponse<SellLimitByDateStatus, any>>;
    };
}
