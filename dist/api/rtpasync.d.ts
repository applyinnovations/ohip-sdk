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
/** Daily rate plan schedule details. */
export interface DailyRatePlanScheduleType {
    /** Daily rate amounts to be applied. */
    rateAmounts?: ScheduleRateAmountsType;
    /**
     * The rate date for which the daily rate amounts will be applied.
     * @format date
     */
    rateDate?: string;
    /**
     * The rate code for which the daily rate amounts will be applied.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /**
     * The room type label for which the daily rate amounts will be applied.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
}
export interface ScheduleRateAmountsType {
    /** Rate amount for one person. */
    onePersonRate?: number;
    /** Rate amount for two persons. */
    twoPersonRate?: number;
    /** Rate amount for three persons. */
    threePersonRate?: number;
    /** Rate amount for four persons. */
    fourPersonRate?: number;
    /** Rate amount for five persons. */
    fivePersonRate?: number;
    /** Rate amount for each extra person. */
    extraPersonRate?: number;
    /** Rate amount for each extra Child. */
    extraChildRate?: number;
    /** Rate amount for one Child. */
    oneChildRate?: number;
    /** Rate amount for two Children. */
    twoChildrenRate?: number;
    /** Rate amount for three Children. */
    threeChildrenRate?: number;
    /** Rate amount for four Children. */
    fourChildrenRate?: number;
    /** Collection of rate amount by age bracket. */
    rateByAgeBuckets?: RateByAgeBucketsType;
    /** Minimum number of children needed to get free stay. */
    minimumChildrenForFreeStay?: number;
    /** The number of award points required for applying this rate plan schedule. */
    pointsRequired?: number;
    /** true if floor amount needs to be override */
    overrideFloorAmount?: boolean;
}
/**
 * Rate amount by age bucket.
 * @maxItems 3
 */
export type RateByAgeBucketsType = RateByAgeBucketType[];
/** Rate amount by age bucket. */
export interface RateByAgeBucketType {
    /** Rate amount by age bucket. */
    rateAmount?: number;
    /** Minimum age for age bucket. */
    minimumAge?: number;
    /** Maximum age for age bucket. */
    maximumAge?: number;
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
/** Daily rate plan schedules. */
export interface DailyRatePlanSchedules {
    /**
     * Collection of daily rate plan schedules.
     * @maxItems 4000
     */
    dailyRatePlanSchedule?: DailyRatePlanScheduleType[];
}
/** Response for configured best available rate plans status. */
export interface DailyRatePlanSchedulesStatus {
    /** List of warnings that occurred. */
    warnings?: WarningsType;
    links?: Links;
}
/**
 * Collection of best available rate plans.
 * @maxItems 1000
 * @minItems 1
 */
export type BestAvailableRatePlansType = BestAvailableRatePlanType[];
/** Defines best available rate plans. */
export interface BestAvailableRatePlanType {
    /** Collection of best available rate plan codes. */
    ratePlanCodes?: BestAvailableRateCodesType;
    /**
     * Validity of best available rate plan.
     * @format date
     */
    rateDate?: string;
    /** Indicates Length of Stay 1 configuration. */
    los1?: boolean;
    /** Indicates Length of Stay 2 configuration. */
    los2?: boolean;
    /** Indicates Length of Stay 3 configuration. */
    los3?: boolean;
    /** Indicates Length of Stay 4 configuration. */
    los4?: boolean;
    /** Indicates Length of Stay 5 configuration. */
    los5?: boolean;
    /** Indicates Length of Stay 6 configuration. */
    los6?: boolean;
    /** Indicates Length of Stay 7 configuration. */
    los7?: boolean;
    /** Indicates Length of Stay 8 configuration. */
    los8?: boolean;
}
/**
 * Collection of best available rate codes.
 * @maxItems 25
 */
export type BestAvailableRateCodesType = string[];
/** Request for configuring best available rate plans. */
export interface BestAvailableRatePlans {
    /** Best available rate plans to be configured. */
    bestAvailableRatePlans?: BestAvailableRatePlansType;
}
/** Response for configured best available rate plans status. */
export interface BestAvailableRatePlansStatus {
    /** List of warnings that occurred. */
    warnings?: WarningsType;
    links?: Links;
}
/**
 * Hurdle rates to be configured.
 * @maxItems 4000
 */
export type HurdleRates = HurdleRateType[];
/** Unique identifier for hurdle rate. */
export interface HurdleRateType {
    /**
     * Hurdle date for which the hurdle rate is scheduled.
     * @format date
     */
    hurdleDate?: string;
    /**
     * Room type for which the hurdle rate applies to.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /**
     * Internal room category of the room type for which the hurdle rate applies to.
     * @minLength 0
     * @maxLength 20
     */
    roomCategory?: string;
    /**
     * Yield category for which the hurdle rate applies to.
     * @minLength 0
     * @maxLength 20
     */
    yieldCategory?: string;
    /** Length of stay for which the hurdle rate applies to. */
    lengthOfStay?: number;
    /**
     * Yield market code for which the hurdle rate applies to.
     * @minLength 0
     * @maxLength 20
     */
    yieldMarketCode?: string;
    /** Defines the amount to be reached before rate code or room type is made available. */
    hurdle?: number;
    /** Defines the amount to be added to hurdle rate for each additional rooms sold up to the ceiling. */
    delta?: number;
    /** Maximum number of rooms to sell for which the delta is applicable to be aded to hurdle rate. */
    ceiling?: number;
    /** Maximum number of rooms to sell. */
    maximumSolds?: number;
    /** Defines the actual number of rooms sold. */
    roomsSold?: number;
    /** Specifies whether to override hurdle rate or not. */
    override?: boolean;
}
/** Response for configured hurdle rates. */
export interface HurdleRatesStatus {
    /** List of warnings that occurred. */
    warnings?: WarningsType;
    links?: Links;
}
/** Request object to create rate plan. */
export interface RatePlans {
    /** Rate plan code details to be created. */
    ratePlans?: RatePlanType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The Rate plan code Details. */
export interface RatePlanType {
    /**
     * Rate plan Code
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** This is a placeholder element for future use. Functionality may not be available for the current implementation. */
    mobileCheckinAllowed?: boolean;
    /** This is a placeholder element for future use. Functionality may not be available for the current implementation. */
    mobileCheckoutAllowed?: boolean;
    /** Is rate amount suppressed for the rate plan? */
    supressRate?: boolean;
    /** Is Rate amount printed on the reports for the rate plan? */
    printRate?: boolean;
    /** Is rate plan code discounted? */
    discountAllowed?: boolean;
    /** Is redemption allowed on the rate code? */
    redemption?: boolean;
    /** Is rate plan code of BAR Rate type? */
    barRate?: boolean;
    /** Is rate plan code a daily rate? */
    daily?: boolean;
    /** Is rate plan code a tiered rate? */
    tiered?: boolean;
    /** Is rate plan code for day use? */
    dayUse?: boolean;
    /** Indicates if rate Calendar factors such as adder/multiplier should be used for price calculation. */
    dayType?: boolean;
    /** Is rate plan code complimentary? */
    complimentary?: boolean;
    /** Is rate plan code for house use? */
    houseUse?: boolean;
    /** Is rate plan code only available as a negotiated rate that must be associated with a guest, company, or travel agent profile ? */
    negotiated?: boolean;
    /** Is rate plan code flagged as an owner rate plan? Owner rate plans have special functionality for no-shows depending on the Rolling Noshow Preference application setting. */
    ownerRate?: boolean;
    /** Is rate plan code flagged as eligible for memberships? This flag controls whether the guest stay, which this rate plan is attached to, qualifies for point calculations for Frequent Flyer or Frequent Guest programs. If the rate plan associated to the reservation has not been flagged for Membership then the guest will not earn any points/miles for their stay. */
    membershipEligible?: boolean;
    /** Flag to identify if Rate Code is Advanced Daily Base Rate Code */
    advancedDailyBase?: boolean;
    /** Flag to identify if Rate Code is Advanced Daily Rate */
    advancedDailyRate?: boolean;
    /** Distribution setup for the rate code. */
    distribution?: RatePlanDistributionType;
}
export interface RatePlanPrimaryDetailsType {
    /** Description of the rate plan. */
    description?: TranslationTextType2000;
    /**
     * Start sell date of the rate plan.
     * @format date
     * @maxLength 8
     */
    startSellDate?: string;
    /**
     * End sell date of the rate plan.
     * @format date
     * @maxLength 8
     */
    endSellDate?: string;
    /** The particular rate code is marked as privileged making it restrictive on who can update information. */
    privilegedRate?: boolean;
    /** The restrictions marked on the rate code are marked as privileged making it restrictive on who can update information. */
    privilegedRateRestriction?: boolean;
    /** Specifies the lock status of the rate code. Rates can be Unlocked, Externally locked, locked at Property level, or locked at Central level. */
    lockStatus?: RateCodeLockStatusType;
}
export interface RatePlanClassificationsType {
    /**
     * Rate Category for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    rateCategory?: string;
    /**
     * Market code for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    marketCode?: string;
    /**
     * Source code for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    sourceCode?: string;
}
export interface RatePlanControlsType {
    /** Sell controls for the rate code i.e. min. Length of stay, max Length of Stay etc. */
    sell?: RatePlanSellControlsType;
    /** Yield controls for the rate code i.e. Is rate yieldable? Rate bucket it belongs to? Yield Market it belongs to? etc . */
    yield?: RatePlanYieldControlsType;
}
export interface RatePlanDistributionType {
    /** Restriction updates for the rate plan to be sent to channels? */
    restrictionUpdate?: boolean;
    /** Rate updates for the rate plan to be sent to channels? */
    rateUpdate?: boolean;
    /** Rate plan to be uploaded to MyFidleio and published. */
    myFidelioUploadAllowed?: boolean;
    /** Rate plan Code is available for channels. */
    channelAllowed?: boolean;
}
/**
 * Details of each room type
 * @maxItems 4000
 */
export type RateRoomTypeListType = RateRoomTypeDetailType[];
/** Details of single room type */
export interface RateRoomTypeDetailType {
    /**
     * Room type code
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType2000 {
    /**
     * Default text with Character length from 0 to 2000.
     * @minLength 0
     * @maxLength 2000
     */
    defaultText?: string;
}
/** Simple type for base type, flat or differential. */
export declare enum BaseType {
    Flat = "Flat",
    Differential = "Differential"
}
/** Indicates that the rate code is locked by the central system and cannot be edited at the property level. */
export declare enum RateCodeLockStatusType {
    Unlocked = "Unlocked",
    External = "External",
    Property = "Property",
    Central = "Central"
}
/** Indicates that the Rate Plan is approved for selling. */
export declare enum RatePlanApprovalStatusType {
    NewUnapproved = "NewUnapproved",
    ChangedUnapproved = "ChangedUnapproved",
    Rejected = "Rejected",
    Approved = "Approved"
}
export interface RatePlanSellControlsType {
    /** Minimum number of nights the guest has to stay through to consume this rate plan code. */
    minimumStayThrough?: number;
    /** Minimum number of nights the guest has to stay to consume this rate plan code. */
    minimumLengthOfStay?: number;
}
export interface RatePlanYieldControlsType {
    /** Is rate plan code Yieldable / non-yieldable / stay-pattern? */
    yieldable?: RatePlanYieldableType;
}
/** Simple type for valid values for Yieldable element for the Rate plan code. */
export declare enum RatePlanYieldableType {
    Yieldable = "Yieldable",
    NonYieldable = "NonYieldable",
    StayPattern = "StayPattern"
}
/**
 * Yield Market Code for the rate plan code.
 * @maxItems 4000
 */
export type YieldMarketCodeListType = string[];
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
 * @title Opera Cloud Rate Plan Asynchronous Service API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rtp/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    externalSystems: {
        /**
         * @description Use this API to start the process to add and update daily rate plans&apos; pricing schedule. Returns a header parameter Location that can be used in the getDailyRatePlanSchedulesProcessStatus operation. <p><strong>OperationId:</strong>startSetDailyRatePlanSchedulesProcess</p>
         *
         * @tags RatePlanAsync
         * @name StartSetDailyRatePlanSchedulesProcess
         * @summary API to initiate rate plans&apos; price update process
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules
         */
        startSetDailyRatePlanSchedulesProcess: (hotelId: string, extSystemCode: string, dailyRatePlanSchedules: DailyRatePlanSchedules, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to check whether the rate plan pricing schedule process is completed. You can get value of summaryId from the Location header returned by the startSetDailyRatePlanSchedulesProcess operation.<p><strong>OperationId:</strong>getDailyRatePlanSchedulesProcessStatus</p>
         *
         * @tags RatePlanAsync
         * @name GetDailyRatePlanSchedulesProcessStatus
         * @summary Check status of setting daily rate plan schedule process
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId}
         */
        getDailyRatePlanSchedulesProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to get the result of the daily rate plans schedule process, which will include details of any data that has failed to process. You can get the value of the summaryId from the Location header returned by the getDailyRatePlanSchedulesProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getDailyRatePlanSchedules</p>
         *
         * @tags RatePlanAsync
         * @name GetDailyRatePlanSchedules
         * @summary Get results of a daily rate plan schedule process
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId}
         */
        getDailyRatePlanSchedules: (requestId: string, hotelId: string, extSystemCode: string, params?: RequestParams) => Promise<AxiosResponse<DailyRatePlanSchedulesStatus, any>>;
        /**
         * @description Use this API to start the process of adding and updating best available rate plans by day or by length of stay. Returns a header parameter Location that can be used in the getBestAvailableRatePlansProcessStatus operation. <p><strong>OperationId:</strong>startSetBestAvailableRatePlansProcess</p>
         *
         * @tags RatePlanAsync
         * @name StartSetBestAvailableRatePlansProcess
         * @summary API to initiate setting best available rate plans process.
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS
         */
        startSetBestAvailableRatePlansProcess: (hotelId: string, extSystemCode: string, bestAvailableRatePlans: BestAvailableRatePlans, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to check whether the setting of best available rate plans process is completed. You can get value of summaryId from the Location header returned by the startSetBestAvailableRatePlansProcess operation.<p><strong>OperationId:</strong>getBestAvailableRatePlansProcessStatus</p>
         *
         * @tags RatePlanAsync
         * @name GetBestAvailableRatePlansProcessStatus
         * @summary Check status of setting best available rate plans process
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId}
         */
        getBestAvailableRatePlansProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Use this API to get the result of the process to set best available rate plans, which will include details of any data that has been failed to process. You can get the value of the summaryId from the Location header returned by the getBestAvailableRatePlansProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getBestAvailableRatePlans</p>
         *
         * @tags RatePlanAsync
         * @name GetBestAvailableRatePlans
         * @summary Get results of a daily rate plan schedule process
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId}
         */
        getBestAvailableRatePlans: (requestId: string, hotelId: string, extSystemCode: string, params?: RequestParams) => Promise<AxiosResponse<BestAvailableRatePlansStatus, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>startHurdleRatesProcess</p>
         *
         * @tags RatePlanAsync
         * @name StartHurdleRatesProcess
         * @summary Operation to configure hurdle rates.
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles
         */
        startHurdleRatesProcess: (hotelId: string, extSystemCode: string, hurdleRates: HurdleRates, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHurdleRatesProcessStatus</p>
         *
         * @tags RatePlanAsync
         * @name GetHurdleRatesProcessStatus
         * @summary This API returns the status of asynchronous process scheduled for given id.
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId}
         */
        getHurdleRatesProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHurdleRates</p>
         *
         * @tags RatePlanAsync
         * @name GetHurdleRates
         * @summary This API facilitates fetching of status for configured hurdle rates.
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId}
         */
        getHurdleRates: (hotelId: string, extSystemCode: string, requestId: string, params?: RequestParams) => Promise<AxiosResponse<HurdleRatesStatus, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>startSetRatePlansHeadersProcess</p>
         *
         * @tags RatePlanAsync
         * @name StartSetRatePlansHeadersProcess
         * @summary Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.
         * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers
         */
        startSetRatePlansHeadersProcess: (hotelId: string, extSystemCode: string, ratePlan: RatePlans, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRatePlansHeadersProcessStatus</p>
         *
         * @tags RatePlanAsync
         * @name GetRatePlansHeadersProcessStatus
         * @summary This API returns the status of asynchronous process scheduled for given id.
         * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId}
         */
        getRatePlansHeadersProcessStatus: (requestId: string, extSystemCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRatePlansHeaders</p>
         *
         * @tags RatePlanAsync
         * @name GetRatePlansHeaders
         * @summary This API facilitates fetching of status for configured rate plans.
         * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId}
         */
        getRatePlansHeaders: (hotelId: string, extSystemCode: string, requestId: string, params?: RequestParams) => Promise<AxiosResponse<HurdleRatesStatus, any>>;
    };
}
