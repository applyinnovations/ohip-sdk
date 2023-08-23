export interface ConvertedHotelCode {
    /**
     * ExternalSystem for which the conversion is needed.
     * @maxLength 2000
     */
    externalSystem?: string;
    /** Converted hotel information. */
    hotelInfo?: ConversionHotelInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Generic information of the resort , external resort and external system. */
export interface ConversionHotelInfoType {
    /**
     * Opera Resort for which conversion is needed.
     * @minLength 0
     * @maxLength 20
     */
    operaHotelCode?: string;
    /**
     * External value of resort for which conversion is needed.
     * @minLength 0
     * @maxLength 20
     */
    externalHotelCode?: string;
}
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
export interface ConvertedValues {
    /**
     * ExternalSystem for which the conversion is needed.
     * @maxLength 2000
     */
    externalSystem?: string;
    /** Converted hotel information. */
    hotelInfo?: ConversionHotelInfoType;
    /** List all the converted values fetched for an interface, resort. */
    convertedValues?: ConvertedValuesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * A collection of converted values.
 * @maxItems 4000
 */
export type ConvertedValuesType = ConvertedValueType[];
/** Details of the converted value. */
export interface ConvertedValueType {
    /** Opera Value */
    operaValue?: string;
    /** Value used by the external vendors. */
    externalValue?: string;
    /** Enumeration of conversion codes. */
    conversionCode?: DataValueMappingCodeType;
    /** Opera Master Value */
    masterValue?: string;
    /** The flag will be true for all the conversions that are pms defaults. In case there are more than one conversions available in opera. */
    pmsDefaultConversion?: boolean;
}
/** Enumeration of the different conversion codes needed for data value mapping. */
export declare enum DataValueMappingCodeType {
    AccountType = "AccountType",
    ActionCode = "ActionCode",
    ActionType = "ActionType",
    ActivityLocation = "ActivityLocation",
    ActivityStatus = "ActivityStatus",
    ActivityType = "ActivityType",
    ActivityTypeSc = "ActivityTypeSc",
    AddressTypes = "AddressTypes",
    ArrangementCode = "ArrangementCode",
    BlockCancellationCodes = "BlockCancellationCodes",
    BlockCodes = "BlockCodes",
    BlockConversion = "BlockConversion",
    BlockRanking = "BlockRanking",
    BlockRateOverrideReason = "BlockRateOverrideReason",
    BookingStatus = "BookingStatus",
    BookingType = "BookingType",
    BusiinessSegment = "BusiinessSegment",
    CalendarEvent = "CalendarEvent",
    CancellationCodes = "CancellationCodes",
    CategoryCode = "CategoryCode",
    CatItemrate = "CatItemrate",
    CatRate = "CatRate",
    CatServing = "CatServing",
    CatSetup = "CatSetup",
    ChannelCodes = "ChannelCodes",
    ComboRoom = "ComboRoom",
    CommentType = "CommentType",
    CompetitionCode = "CompetitionCode",
    CountryCode = "CountryCode",
    CurrencyCode = "CurrencyCode",
    DayType = "DayType",
    DepartmentId = "DepartmentId",
    DeptNoteCode = "DeptNoteCode",
    DiscountReason = "DiscountReason",
    DocumentType = "DocumentType",
    EventType = "EventType",
    FitContractType = "FitContractType",
    Frequency = "Frequency",
    FunctionSpaceLocation = "FunctionSpaceLocation",
    FunctionSpaceRateType = "FunctionSpaceRateType",
    GenderMf = "GenderMf",
    GtdReq = "GtdReq",
    GuestPreferenceCode = "GuestPreferenceCode",
    GuestPreferenceType = "GuestPreferenceType",
    IndustryCode = "IndustryCode",
    InfluenceCode = "InfluenceCode",
    LanguageCodes = "LanguageCodes",
    MarketingCity = "MarketingCity",
    MarketingRegion = "MarketingRegion",
    MarketCode = "MarketCode",
    MeetingRoomtype = "MeetingRoomtype",
    MembershipLevel = "MembershipLevel",
    MembershipType = "MembershipType",
    MembershipTypeAirline = "MembershipTypeAirline",
    Nationality = "Nationality",
    OcrmBounceType = "OcrmBounceType",
    OcrmEventType = "OcrmEventType",
    OtaGuestPreferenceCode = "OtaGuestPreferenceCode",
    PaymentMethod = "PaymentMethod",
    PhoneType = "PhoneType",
    PosFamilyGroup = "PosFamilyGroup",
    PosMajorGroup = "PosMajorGroup",
    PosMenuDef = "PosMenuDef",
    PosRevenueCenter = "PosRevenueCenter",
    PriceCode = "PriceCode",
    ProductCode = "ProductCode",
    ProfilePriority = "ProfilePriority",
    ProfileSource = "ProfileSource",
    ProfileType = "ProfileType",
    RateCategory = "RateCategory",
    RateCode = "RateCode",
    RateProgram = "RateProgram",
    RateToRateBlock = "RateToRateBlock",
    RateType = "RateType",
    ReasonCode = "ReasonCode",
    Relationship = "Relationship",
    ReservationStatus = "ReservationStatus",
    ReservationType = "ReservationType",
    ResvBookingMethod = "ResvBookingMethod",
    RevenueGroups = "RevenueGroups",
    RevenueType = "RevenueType",
    Room = "Room",
    RoomsPotential = "RoomsPotential",
    RoomCategoryLabel = "RoomCategoryLabel",
    RoomClass = "RoomClass",
    RoomPool = "RoomPool",
    RoomRepairsReasonCode = "RoomRepairsReasonCode",
    RoomStatusReasons = "RoomStatusReasons",
    RoutingCode = "RoutingCode",
    Scope = "Scope",
    ScopeCity = "ScopeCity",
    ScAccPriority = "ScAccPriority",
    ScAccRoomsPot = "ScAccRoomsPot",
    ScAccSource = "ScAccSource",
    ScDestination = "ScDestination",
    ScFunctionSpace = "ScFunctionSpace",
    ScFunctionSpaceRateCode = "ScFunctionSpaceRateCode",
    ScFunctionSpaceSetup = "ScFunctionSpaceSetup",
    ScRevenueTypes = "ScRevenueTypes",
    ScSetupCode = "ScSetupCode",
    ScTaskCode = "ScTaskCode",
    ScTerritory = "ScTerritory",
    ServiceRequestType = "ServiceRequestType",
    SgiLanguage = "SgiLanguage",
    SgiRequestCodes = "SgiRequestCodes",
    SgiTitle = "SgiTitle",
    SourceCode = "SourceCode",
    State = "State",
    Title = "Title",
    TraceCode = "TraceCode",
    TraceDepartment = "TraceDepartment",
    TransportTypes = "TransportTypes",
    TravelAgentCommissionCodes = "TravelAgentCommissionCodes",
    TravelAgentCurrencyCodes = "TravelAgentCurrencyCodes",
    Trxgenerates = "Trxgenerates",
    TrxCode = "TrxCode",
    VipLevel = "VipLevel",
    WaitlistCodes = "WaitlistCodes",
    WebuserSecurityQuestion = "WebuserSecurityQuestion"
}
export interface DefaultValues {
    /** List all the Opera and External default values fetched for an interface, resort. */
    defaultValues?: DefaultValuesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * A collection of default values.
 * @maxItems 4000
 */
export type DefaultValuesType = DefaultValueType[];
/** Details of the default value fetched for an interface and resort. */
export interface DefaultValueType {
    /** Opera Value */
    operaDefault?: string;
    /** Value used by the external vendors. */
    externalDefault?: string;
    /** This element states the type of Default value. For example if the operaDefault and external default is Market code's default then the value will be MarketCode. */
    defaultValueType?: DefaultValueCodeType;
}
/** Enumeration of the different default codes. */
export declare enum DefaultValueCodeType {
    AddressTypes = "AddressTypes",
    AvailabilityType = "AvailabilityType",
    BlockCancellationCodes = "BlockCancellationCodes",
    BlockChannelCode = "BlockChannelCode",
    BlockMarketCode = "BlockMarketCode",
    BlockOwner = "BlockOwner",
    BlockRateCode = "BlockRateCode",
    BlockReservationType = "BlockReservationType",
    BlockSourceCode = "BlockSourceCode",
    BlockStatus = "BlockStatus",
    BlockType = "BlockType",
    CancellationCodes = "CancellationCodes",
    CashierId = "CashierId",
    CountryCode = "CountryCode",
    ChannelCodes = "ChannelCodes",
    ConfLetterId = "ConfLetterId",
    ConfLetterName = "ConfLetterName",
    CrsCurrencyCode = "CrsCurrencyCode",
    CrsCurrencyFmtDisplay = "CrsCurrencyFmtDisplay",
    CrsCurrencyFormat = "CrsCurrencyFormat",
    CrsCurrencyMultiplier = "CrsCurrencyMultiplier",
    CurrencyCode = "CurrencyCode",
    Custom1 = "Custom1",
    Custom2 = "Custom2",
    DeleteCharInd = "DeleteCharInd",
    DeleteDateInd = "DeleteDateInd",
    DeleteNumberInd = "DeleteNumberInd",
    DepositPaymentMethod = "DepositPaymentMethod",
    DeptCodes = "DeptCodes",
    DiscountReason = "DiscountReason",
    GuestPreferences = "GuestPreferences",
    HighPrioMemTypes = "HighPrioMemTypes",
    KeepingCharInd = "KeepingCharInd",
    KeepingDateInd = "KeepingDateInd",
    KeepingNumberInd = "KeepingNumberInd",
    LanguageCodes = "LanguageCodes",
    MarketCode = "MarketCode",
    MaxAvailInAdvance = "MaxAvailInAdvance",
    PaymentMethod = "PaymentMethod",
    PhoneType = "PhoneType",
    RateCategory = "RateCategory",
    RateClass = "RateClass",
    RateCode = "RateCode",
    RateDisplaySet = "RateDisplaySet",
    ReservationType = "ReservationType",
    RoomCategoryLabel = "RoomCategoryLabel",
    ScDestination = "ScDestination",
    SourceCode = "SourceCode",
    StartDayOfWeek = "StartDayOfWeek",
    TaCompanyOwner = "TaCompanyOwner",
    Trace1 = "Trace1",
    Trace2 = "Trace2",
    TraceArrivalDept1 = "TraceArrivalDept1",
    TraceArrivalDept2 = "TraceArrivalDept2",
    TraceOverrideDept1 = "TraceOverrideDept1",
    TraceOverrideDept2 = "TraceOverrideDept2",
    TraceOverrideWarning = "TraceOverrideWarning",
    TraceWarning = "TraceWarning",
    TravelAgentCommissionCodes = "TravelAgentCommissionCodes",
    TravelAgentCurrencyCodes = "TravelAgentCurrencyCodes",
    TravelAgentCurrencyCodesCentral = "TravelAgentCurrencyCodesCentral",
    VipLevel = "VipLevel",
    WaitlistCodes = "WaitlistCodes",
    ProfileNoteType = "ProfileNoteType",
    BlockNoteType = "BlockNoteType"
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Response for Ping operation. */
export interface OperaVersion {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
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
 * @title OPERA Cloud DataValueMapping Service API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /dvm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    externalSystems: {
        /**
         * @description This API allows you to get the converted hotel code <p><strong>OperationId:</strong>getOperaHotelCode</p>
         *
         * @tags DataValueMapping
         * @name GetOperaHotelCode
         * @summary Fetch Converted Hotel Code
         * @request GET:/externalSystems/{extSystemCode}/hotels/{externalHotelId}/conversions
         */
        getOperaHotelCode: (hotelId: string, externalHotelId: string, extSystemCode: string, query?: {
            /** Opera Resort for which conversion is needed. */
            operaHotelCode?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ConvertedHotelCode, any>>;
        /**
         * @description This API allows you to get the converted values <p><strong>OperationId:</strong>getConvertedValues</p>
         *
         * @tags DataValueMapping
         * @name GetConvertedValues
         * @summary Fetch Converted Values
         * @request GET:/externalSystems/{extSystemCode}/hotels/{operaHotelId}/convertedValues
         */
        getConvertedValues: (hotelId: string, operaHotelId: string, extSystemCode: string, query?: {
            /** External value of resort for which conversion is needed. */
            externalHotelId?: string;
            /**
             * Enumeration of the different conversion codes needed for data value mapping.
             * @uniqueItems true
             */
            conversionCode?: ('AccountType' | 'ActionCode' | 'ActionType' | 'ActivityLocation' | 'ActivityStatus' | 'ActivityType' | 'ActivityTypeSc' | 'AddressTypes' | 'ArrangementCode' | 'BlockCancellationCodes' | 'BlockCodes' | 'BlockConversion' | 'BlockRanking' | 'BlockRateOverrideReason' | 'BookingStatus' | 'BookingType' | 'BusiinessSegment' | 'CalendarEvent' | 'CancellationCodes' | 'CategoryCode' | 'CatItemrate' | 'CatRate' | 'CatServing' | 'CatSetup' | 'ChannelCodes' | 'ComboRoom' | 'CommentType' | 'CompetitionCode' | 'CountryCode' | 'CurrencyCode' | 'DayType' | 'DepartmentId' | 'DeptNoteCode' | 'DiscountReason' | 'DocumentType' | 'EventType' | 'FitContractType' | 'Frequency' | 'FunctionSpaceLocation' | 'FunctionSpaceRateType' | 'GenderMf' | 'GtdReq' | 'GuestPreferenceCode' | 'GuestPreferenceType' | 'IndustryCode' | 'InfluenceCode' | 'LanguageCodes' | 'MarketingCity' | 'MarketingRegion' | 'MarketCode' | 'MeetingRoomtype' | 'MembershipLevel' | 'MembershipType' | 'MembershipTypeAirline' | 'Nationality' | 'OcrmBounceType' | 'OcrmEventType' | 'OtaGuestPreferenceCode' | 'PaymentMethod' | 'PhoneType' | 'PosFamilyGroup' | 'PosMajorGroup' | 'PosMenuDef' | 'PosRevenueCenter' | 'PriceCode' | 'ProductCode' | 'ProfilePriority' | 'ProfileSource' | 'ProfileType' | 'RateCategory' | 'RateCode' | 'RateProgram' | 'RateToRateBlock' | 'RateType' | 'ReasonCode' | 'Relationship' | 'ReservationStatus' | 'ReservationType' | 'ResvBookingMethod' | 'RevenueGroups' | 'RevenueType' | 'Room' | 'RoomsPotential' | 'RoomCategoryLabel' | 'RoomClass' | 'RoomPool' | 'RoomRepairsReasonCode' | 'RoomStatusReasons' | 'RoutingCode' | 'Scope' | 'ScopeCity' | 'ScAccPriority' | 'ScAccRoomsPot' | 'ScAccSource' | 'ScDestination' | 'ScFunctionSpace' | 'ScFunctionSpaceRateCode' | 'ScFunctionSpaceSetup' | 'ScRevenueTypes' | 'ScSetupCode' | 'ScTaskCode' | 'ScTerritory' | 'ServiceRequestType' | 'SgiLanguage' | 'SgiRequestCodes' | 'SgiTitle' | 'SourceCode' | 'State' | 'Title' | 'TraceCode' | 'TraceDepartment' | 'TransportTypes' | 'TravelAgentCommissionCodes' | 'TravelAgentCurrencyCodes' | 'Trxgenerates' | 'TrxCode' | 'VipLevel' | 'WaitlistCodes' | 'WebuserSecurityQuestion')[];
            /** Value to be converted. It can be opera or external value. */
            valueToBeConverted?: string[];
            /** Master value is supposed to be Opera value. */
            masterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ConvertedValues, any>>;
        /**
         * @description This API allows you to get default values <p><strong>OperationId:</strong>getDefaultValues</p>
         *
         * @tags DataValueMapping
         * @name GetDefaultValues
         * @summary Fetch Default values
         * @request GET:/externalSystems/{extSystemCode}/hotels/{operaHotelId}/defaultValues
         */
        getDefaultValues: (hotelId: string, operaHotelId: string, extSystemCode: string, params?: RequestParams) => Promise<AxiosResponse<DefaultValues, any>>;
    };
    services: {
        /**
         * @description This API allows you to delete the DVM cache <p><strong>OperationId:</strong>clearDVMCache</p>
         *
         * @tags DataValueMapping
         * @name ClearDvmCache
         * @summary Clear DVM Cache
         * @request DELETE:/services/datavaluemapping/cache
         */
        clearDvmCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API allows you to delete the default values cache <p><strong>OperationId:</strong>clearDefaultValueCache</p>
         *
         * @tags DataValueMapping
         * @name ClearDefaultValueCache
         * @summary Clear Default Value Cache
         * @request DELETE:/services/datavaluemapping/defaultValueCache
         */
        clearDefaultValueCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description ping Data Value Mapping Service <p><strong>OperationId:</strong>pingDataValueMappingService</p>
         *
         * @tags DataValueMapping
         * @name PingDataValueMappingService
         * @summary ping Data Value Mapping Service
         * @request GET:/services/datavaluemapping/status
         */
        pingDataValueMappingService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
}
