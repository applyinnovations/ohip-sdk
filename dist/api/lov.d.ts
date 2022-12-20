export interface ListOfValueNames {
    /** Collection of List of Value names along with the input parameters it supports. */
    lOVNames?: LOVNamesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of List of Value names along with all parameters applicable for the LOV.
 * @maxItems 4000
 */
export type LOVNamesType = LOVNameType[];
export interface LOVNameType {
    /**
     * Unique name for the LOV.
     * @minLength 0
     * @maxLength 200
     */
    name?: string;
    /**
     * List of parameter names applicable for the particular LOV.
     * @maxItems 4000
     */
    parameters?: ParametersNameType[];
}
export interface ParametersNameType {
    /** Name of the parameter needed by the LOV. */
    parameterName?: string;
    /** This element depicts if the given parameter is mandatory for the LOV. */
    mandatory?: boolean;
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
export interface ListOfValues {
    /** Collection of List of Value items. */
    listOfValues?: ListOfValuesType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ListOfValuesType {
    /** @maxItems 4000 */
    items?: ItemType[];
    /**
     * List of Values name.
     * @minLength 0
     * @maxLength 100
     */
    lovName?: string;
    itemCount?: number;
    /**
     * @minLength 0
     * @maxLength 20
     */
    description?: string;
}
export interface ItemType {
    /** Flexfields returning list of name value pairs. */
    flexfields?: ParametersType;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    code?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    name?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    shortDescription?: string;
    active?: boolean;
}
/**
 * Collection of generic Name-Value-Pair parameters.
 * @maxItems 4000
 */
export type ParametersType = ParameterType[];
/** Name value pair type that will hold generic parameter information. Only use this type when the parameters being passed are too dynamic to be defined. */
export interface ParameterType {
    /** Name of the parameter. */
    parameterName?: string;
    /** Value of the parameter. */
    parameterValue?: string;
}
export interface ValidateListOfValues {
    /** Criteria to validate a list of value. */
    criteria?: ListOfValuesCriteriaType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ListOfValuesCriteriaType {
    /** Please see documentation for a list of applicable ParameterName options. */
    parameters?: ParametersType;
    /** @maxItems 4000 */
    itemCodes?: string[];
    excludeCodeList?: CodeListType;
    /**
     * The name of the LOV to fetch.
     * @minLength 0
     * @maxLength 100
     */
    lovName?: string;
    /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
    includeInactive?: boolean;
}
/** @maxItems 4000 */
export type CodeListType = string[];
export interface ValidateListOfValuesDetails {
    /** Match for the List of Value items. */
    match?: ListOfValuesMatchType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** This is a prototype element for the LOV validation. */
export interface ListOfValuesMatchType {
    /** @maxItems 4000 */
    matchingItems?: ItemType[];
    /** @maxItems 4000 */
    nonMatchingItems?: ItemType[];
    /** @maxItems 4000 */
    closeMatchingItems?: ItemType[];
    /**
     * List of Values name.
     * @minLength 0
     * @maxLength 100
     */
    lovName?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    description?: string;
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
 * @title OPERA Cloud List of Values Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /lov/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    listOfValues: {
        /**
         * @description  <p><strong>OperationId:</strong>getLOVNames</p>
         *
         * @tags LOV
         * @name GetLovNames
         * @summary Fetch Names
         * @request GET:/listOfValues
         */
        getLovNames: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<ListOfValueNames, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipClassTypesLOV</p>
         *
         * @tags LOV
         * @name GetMembershipClassTypesLov
         * @summary Fetch List Of Values for Membership Class Types
         * @request GET:/listOfValues/airlines/{airlines}/loyalty/{loyalty}/membershipClassTypes
         */
        getMembershipClassTypesLov: (hotelId: string, loyalty: string, airlines: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPrintersLOV</p>
         *
         * @tags LOV
         * @name GetPrintersLov
         * @summary Fetch List Of Values for Printers
         * @request GET:/listOfValues/alertPrinters/{alertPrinters}/printers
         */
        getPrintersLov: (hotelId: string, alertPrinters: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockBookingStatusesLOV</p>
         *
         * @tags LOV
         * @name GetBlockBookingStatusesLov
         * @summary Fetch List Of Values for Block Booking Statuses
         * @request GET:/listOfValues/blockId/{blockId}/blockBookingStatuses
         */
        getBlockBookingStatusesLov: (hotelId: string, blockId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockCurrentStatusesLOV</p>
         *
         * @tags LOV
         * @name GetBlockCurrentStatusesLov
         * @summary Fetch List Of Values for Block Current Statuses
         * @request GET:/listOfValues/blockId/{blockId}/blockCurrentStatuses
         */
        getBlockCurrentStatusesLov: (hotelId: string, blockId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsRoomCategoryTemplatesLOV</p>
         *
         * @tags LOV
         * @name GetGdsRoomCategoryTemplatesLov
         * @summary Fetch List Of Values for Gds Room Category Templates
         * @request GET:/listOfValues/bookingChannels/{bookingChannelCodes}/gdsRoomCategoryTemplates
         */
        getGdsRoomCategoryTemplatesLov: (hotelId: string, bookingChannelCodes: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsGuaranteeCodesLOV</p>
         *
         * @tags LOV
         * @name GetGdsGuaranteeCodesLov
         * @summary Fetch List Of Values for Gds Guarantee Codes
         * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsGuaranteeCodes
         */
        getGdsGuaranteeCodesLov: (hotelId: string, bookingChannelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsRateCategoriesLOV</p>
         *
         * @tags LOV
         * @name GetGdsRateCategoriesLov
         * @summary Fetch List Of Values for Gds Rate Categories
         * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsRateCategories
         */
        getGdsRateCategoriesLov: (hotelId: string, bookingChannelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsRateLevelsLOV</p>
         *
         * @tags LOV
         * @name GetGdsRateLevelsLov
         * @summary Fetch List Of Values for Gds Rate Levels
         * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsRateLevels
         */
        getGdsRateLevelsLov: (hotelId: string, bookingChannelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateBookingChannelRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetTemplateBookingChannelRoomTypesLov
         * @summary Fetch List Of Values for Template Booking Channel Room Types
         * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/templateBookingChannelRoomTypes
         */
        getTemplateBookingChannelRoomTypesLov: (hotelId: string, bookingChannelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockNextStatusesLOV</p>
         *
         * @tags LOV
         * @name GetBlockNextStatusesLov
         * @summary Fetch List Of Values for Block Next Statuses
         * @request GET:/listOfValues/bookingStatus/{bookingStatus}/blockNextStatuses
         */
        getBlockNextStatusesLov: (hotelId: string, bookingStatus: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGridTypesLOV</p>
         *
         * @tags LOV
         * @name GetGridTypesLov
         * @summary Fetch List Of Values for Grid Types
         * @request GET:/listOfValues/bookingStatus/{bookingStatus}/gridTypes
         */
        getGridTypesLov: (hotelId: string, bookingStatus: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaskSheetLOV</p>
         *
         * @tags LOV
         * @name GetTaskSheetLov
         * @summary Fetch List Of Values for Task Sheet
         * @request GET:/listOfValues/breakOutId/{breakOutId}/taskSheet
         */
        getTaskSheetLov: (hotelId: string, breakOutId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCashierHotelsLOV</p>
         *
         * @tags LOV
         * @name GetCashierHotelsLov
         * @summary Fetch List Of Values for Cashier Hotels
         * @request GET:/listOfValues/cashierId/{cashierId}/cashierHotels
         */
        getCashierHotelsLov: (hotelId: string, cashierId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockCatNextStatusesLOV</p>
         *
         * @tags LOV
         * @name GetBlockCatNextStatusesLov
         * @summary Fetch List Of Values for Block Cat Next Statuses
         * @request GET:/listOfValues/catStatus/{catStatus}/blockCatNextStatuses
         */
        getBlockCatNextStatusesLov: (hotelId: string, catStatus: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUserDbFunctionsLOV</p>
         *
         * @tags LOV
         * @name GetUserDbFunctionsLov
         * @summary Fetch List Of Values for User Db Functions
         * @request GET:/listOfValues/category/{category}/userDbFunctions
         */
        getUserDbFunctionsLov: (hotelId: string, category: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringBudgetTypesLOV</p>
         *
         * @tags LOV
         * @name GetCateringBudgetTypesLov
         * @summary Fetch List Of Values for Catering Budget Types
         * @request GET:/listOfValues/catering/{catering}/active/{active}/cateringBudgetTypes
         */
        getCateringBudgetTypesLov: (hotelId: string, active: string, catering: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelsForSnCLOV</p>
         *
         * @tags LOV
         * @name GetHotelsForSnClov
         * @summary Fetch List Of Values for Hotels For Sn C
         * @request GET:/listOfValues/cateringEvents/{cateringEvents}/hotelsForSnC
         */
        getHotelsForSnClov: (hotelId: string, cateringEvents: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChainLanguagesLOV</p>
         *
         * @tags LOV
         * @name GetChainLanguagesLov
         * @summary Fetch List Of Values for Chain Languages
         * @request GET:/listOfValues/chainCode/{chainCode}/chainLanguages
         */
        getChainLanguagesLov: (hotelId: string, chainCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPreferenceSubgroupsLOV</p>
         *
         * @tags LOV
         * @name GetPreferenceSubgroupsLov
         * @summary Fetch List Of Values for Preference Subgroups
         * @request GET:/listOfValues/chainCode/{chainCode}/preferenceGroup/{preferenceGroup}/preferenceSubgroups
         */
        getPreferenceSubgroupsLov: (hotelId: string, preferenceGroup: string, chainCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getScreenStyleCodesLOV</p>
         *
         * @tags LOV
         * @name GetScreenStyleCodesLov
         * @summary Fetch List Of Values for Screen Style Codes
         * @request GET:/listOfValues/chainCode/{chainCode}/screenCode/{screenCode}/screenStyleCodes
         */
        getScreenStyleCodesLov: (hotelId: string, screenCode: string, chainCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getScreenCodesLOV</p>
         *
         * @tags LOV
         * @name GetScreenCodesLov
         * @summary Fetch List Of Values for Screen Codes
         * @request GET:/listOfValues/chainCode/{chainCode}/screenType/{screenType}/screenArea/{screenArea}/screenCodes
         */
        getScreenCodesLov: (hotelId: string, screenArea: string, screenType: string, chainCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFieldNameLOV</p>
         *
         * @tags LOV
         * @name GetFieldNameLov
         * @summary Fetch List Of Values for Field Name
         * @request GET:/listOfValues/changeSource/{changeSource}/fieldName
         */
        getFieldNameLov: (hotelId: string, changeSource: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBookingChannelRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetBookingChannelRoomTypesLov
         * @summary Fetch List Of Values for Booking Channel Room Types
         * @request GET:/listOfValues/channel/{channel}/bookingChannelRoomTypes
         */
        getBookingChannelRoomTypesLov: (hotelId: string, channel: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsHotelsLOV</p>
         *
         * @tags LOV
         * @name GetGdsHotelsLov
         * @summary Fetch List Of Values for Gds Hotels
         * @request GET:/listOfValues/channelType/{channelType}/gdsHotels
         */
        getGdsHotelsLov: (hotelId: string, channelType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringCodesLOV</p>
         *
         * @tags LOV
         * @name GetCateringCodesLov
         * @summary Fetch List Of Values for Catering Codes
         * @request GET:/listOfValues/codeType/{codeType}/cateringCodes
         */
        getCateringCodesLov: (hotelId: string, codeType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPostalCodesLOV</p>
         *
         * @tags LOV
         * @name GetPostalCodesLov
         * @summary Fetch List Of Values for Postal Codes
         * @request GET:/listOfValues/country/{country}/postalCodes
         */
        getPostalCodesLov: (hotelId: string, country: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getToPostalCodesLOV</p>
         *
         * @tags LOV
         * @name GetToPostalCodesLov
         * @summary Fetch List Of Values for To Postal Codes
         * @request GET:/listOfValues/country/{country}/toPostalCodes
         */
        getToPostalCodesLov: (hotelId: string, country: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExchangeTypesLOV</p>
         *
         * @tags LOV
         * @name GetExchangeTypesLov
         * @summary Fetch List Of Values for Exchange Types
         * @request GET:/listOfValues/currencyCode/{currencyCode}/exchangeTypes
         */
        getExchangeTypesLov: (hotelId: string, currencyCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCurrencyFormatsLOV</p>
         *
         * @tags LOV
         * @name GetCurrencyFormatsLov
         * @summary Fetch List Of Values for Currency Formats
         * @request GET:/listOfValues/decimal/{decimal}/currencyFormats
         */
        getCurrencyFormatsLov: (hotelId: string, decimal: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getNoteTypesLOV</p>
         *
         * @tags LOV
         * @name GetNoteTypesLov
         * @summary Fetch List Of Values for Note Types
         * @request GET:/listOfValues/departments/{departmentType}/noteTypes
         */
        getNoteTypesLov: (hotelId: string, departmentType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDeviceCodeMappingValuesLOV</p>
         *
         * @tags LOV
         * @name GetDeviceCodeMappingValuesLov
         * @summary Fetch List Of Values for Device Code Mapping Values
         * @request GET:/listOfValues/deviceType/{deviceType}/deviceCode/{deviceCode}/codeType/{codeType}/externalCode/{externalCode}/deviceCodeMappingValues
         */
        getDeviceCodeMappingValuesLov: (hotelId: string, externalCode: string, codeType: string, deviceCode: string, deviceType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getECertificateGroupEntityLOV</p>
         *
         * @tags LOV
         * @name GetECertificateGroupEntityLov
         * @summary Fetch List Of Values for ECertificate Group Entity
         * @request GET:/listOfValues/entityName/{entityName}/eCertificateGroupEntity
         */
        getECertificateGroupEntityLov: (hotelId: string, entityName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getADSEchoTokenLOV</p>
         *
         * @tags LOV
         * @name GetAdsEchoTokenLov
         * @summary Fetch List Of Values for ADSEcho Token
         * @request GET:/listOfValues/errorType/{errorType}/adsEchoToken
         */
        getAdsEchoTokenLov: (hotelId: string, errorType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getADSStatusLOV</p>
         *
         * @tags LOV
         * @name GetAdsStatusLov
         * @summary Fetch List Of Values for ADSStatus
         * @request GET:/listOfValues/errorType/{errorType}/adsStatus
         */
        getAdsStatusLov: (hotelId: string, errorType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringStatusCodesLOV</p>
         *
         * @tags LOV
         * @name GetCateringStatusCodesLov
         * @summary Fetch List Of Values for Catering Status Codes
         * @request GET:/listOfValues/exclusionList/{exclusionList}/cateringStatusCodes
         */
        getCateringStatusCodesLov: (hotelId: string, exclusionList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEventStatusCodesLOV</p>
         *
         * @tags LOV
         * @name GetEventStatusCodesLov
         * @summary Fetch List Of Values for Event Status Codes
         * @request GET:/listOfValues/exclusionList/{exclusionList}/eventStatusCodes
         */
        getEventStatusCodesLov: (hotelId: string, exclusionList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGdsConvAmenityCodesLOV</p>
         *
         * @tags LOV
         * @name GetGdsConvAmenityCodesLov
         * @summary Fetch List Of Values for Gds Conv Amenity Codes
         * @request GET:/listOfValues/featureType/{featureType}/bookingChannels/{bookingChannelCodes}/gdsConvAmenityCodes
         */
        getGdsConvAmenityCodesLov: (hotelId: string, bookingChannelCodes: string, featureType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateTransactionSubgroupsLOV</p>
         *
         * @tags LOV
         * @name GetTemplateTransactionSubgroupsLov
         * @summary Fetch List Of Values for Template Transaction Subgroups
         * @request GET:/listOfValues/fetchOnlyUniqueValues/{fetchOnlyUniqueValues}/templateTransactionSubgroups
         */
        getTemplateTransactionSubgroupsLov: (hotelId: string, fetchOnlyUniqueValues: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGlobalAlertFunctionLOV</p>
         *
         * @tags LOV
         * @name GetGlobalAlertFunctionLov
         * @summary Fetch List Of Values for Global Alert Function
         * @request GET:/listOfValues/fieldType/{fieldType}/globalAlertFunction
         */
        getGlobalAlertFunctionLov: (hotelId: string, fieldType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUserDbFunctionArgsLOV</p>
         *
         * @tags LOV
         * @name GetUserDbFunctionArgsLov
         * @summary Fetch List Of Values for User Db Function Args
         * @request GET:/listOfValues/functionName/{functionName}/category/{category}/userDbFunctionArgs
         */
        getUserDbFunctionArgsLov: (hotelId: string, category: string, functionName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingChannelCardTypeLOV</p>
         *
         * @tags LOV
         * @name GetChannelCardTypeMappingChannelCardTypeLov
         * @summary Fetch List Of Values for Channel Card Type Mapping Channel Card Type
         * @request GET:/listOfValues/gdsHost/{gdsHost}/cardType/{cardType}/channelCardTypeMappingChannelCardType
         */
        getChannelCardTypeMappingChannelCardTypeLov: (hotelId: string, cardType: string, gdsHost: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepGroupReportsLOV</p>
         *
         * @tags LOV
         * @name GetRepGroupReportsLov
         * @summary Fetch List Of Values for Rep Group Reports
         * @request GET:/listOfValues/groupName/{groupName}/repGroupReports
         */
        getRepGroupReportsLov: (hotelId: string, groupName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFrequencyLOV</p>
         *
         * @tags LOV
         * @name GetFrequencyLov
         * @summary Fetch List Of Values for Frequency
         * @request GET:/listOfValues/guestRequested/{guestRequested}/defaultDepartureTask/{defaultDepartureTask}/frequency
         */
        getFrequencyLov: (hotelId: string, defaultDepartureTask: string, guestRequested: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFrequencyTypeLOV</p>
         *
         * @tags LOV
         * @name GetFrequencyTypeLov
         * @summary Fetch List Of Values for Frequency Type
         * @request GET:/listOfValues/guestRequested/{guestRequested}/defaultDepartureTask/{defaultDepartureTask}/frequencyType
         */
        getFrequencyTypeLov: (hotelId: string, defaultDepartureTask: string, guestRequested: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getQueueNameLOV</p>
         *
         * @tags LOV
         * @name GetQueueNameLov
         * @summary Fetch List Of Values for Queue Name
         * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/queueName
         */
        getQueueNameLov: (hotelId: string, hotelCodeList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRoomTypeMultiHotelLOV</p>
         *
         * @tags LOV
         * @name GetRepRoomTypeMultiHotelLov
         * @summary Fetch List Of Values for Rep Room Type Multi Hotel
         * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/repRoomTypeMultiHotel
         */
        getRepRoomTypeMultiHotelLov: (hotelId: string, hotelCodeList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomClassMultiPropertyLOV</p>
         *
         * @tags LOV
         * @name GetRoomClassMultiPropertyLov
         * @summary Fetch List Of Values for Room Class Multi Property
         * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/roomClassMultiProperty
         */
        getRoomClassMultiPropertyLov: (hotelId: string, hotelCodeList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepOwnerCodesLOV</p>
         *
         * @tags LOV
         * @name GetRepOwnerCodesLov
         * @summary Fetch List Of Values for Rep Owner Codes
         * @request GET:/listOfValues/hotelCodesList/{hotelCodesList}/repOwnerCodes
         */
        getRepOwnerCodesLov: (hotelId: string, hotelCodesList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActivitiesLOV</p>
         *
         * @tags LOV
         * @name GetActivitiesLov
         * @summary Fetch List Of Values for Activities
         * @request GET:/listOfValues/hotels/{hotelId}/activities
         */
        getActivitiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActivityConfigTypesLOV</p>
         *
         * @tags LOV
         * @name GetActivityConfigTypesLov
         * @summary Fetch List Of Values for Activity Config Types
         * @request GET:/listOfValues/hotels/{hotelId}/activityConfigTypes
         */
        getActivityConfigTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUserLogActivityTypesLOV</p>
         *
         * @tags LOV
         * @name GetUserLogActivityTypesLov
         * @summary Fetch List Of Values for User Log Activity Types
         * @request GET:/listOfValues/hotels/{hotelId}/activityGroup/{activityGroup}/userLogActivityTypes
         */
        getUserLogActivityTypesLov: (activityGroup: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActivityLocationsLOV</p>
         *
         * @tags LOV
         * @name GetActivityLocationsLov
         * @summary Fetch List Of Values for Activity Locations
         * @request GET:/listOfValues/hotels/{hotelId}/activityLocations
         */
        getActivityLocationsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActivityStatusLOV</p>
         *
         * @tags LOV
         * @name GetActivityStatusLov
         * @summary Fetch List Of Values for Activity Status
         * @request GET:/listOfValues/hotels/{hotelId}/activityStatus
         */
        getActivityStatusLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActivityTypesLOV</p>
         *
         * @tags LOV
         * @name GetActivityTypesLov
         * @summary Fetch List Of Values for Activity Types
         * @request GET:/listOfValues/hotels/{hotelId}/activityTypes
         */
        getActivityTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationPackagesLOV</p>
         *
         * @tags LOV
         * @name GetReservationPackagesLov
         * @summary Fetch List Of Values for Reservation Packages
         * @request GET:/listOfValues/hotels/{hotelId}/adults/{adults}/children/{children}/arrival/{arrival}/departure/{departure}/reservationPackages
         */
        getReservationPackagesLov: (departure: string, arrival: string, children: string, adults: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationPackagesGroupItemsLOV</p>
         *
         * @tags LOV
         * @name GetReservationPackagesGroupItemsLov
         * @summary Fetch List Of Values for Reservation Packages Group Items
         * @request GET:/listOfValues/hotels/{hotelId}/adults/{adults}/children/{children}/arrival/{arrival}/group/{group}/reservationPackagesGroupItems
         */
        getReservationPackagesGroupItemsLov: (group: string, arrival: string, children: string, adults: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAgentAccountsLOV</p>
         *
         * @tags LOV
         * @name GetAgentAccountsLov
         * @summary Fetch List Of Values for Agent Accounts
         * @request GET:/listOfValues/hotels/{hotelId}/agentAccounts
         */
        getAgentAccountsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAgentSourceCitiesLOV</p>
         *
         * @tags LOV
         * @name GetAgentSourceCitiesLov
         * @summary Fetch List Of Values for Agent Source Cities
         * @request GET:/listOfValues/hotels/{hotelId}/agentSourceCities
         */
        getAgentSourceCitiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAgentSourceResvCitiesLOV</p>
         *
         * @tags LOV
         * @name GetAgentSourceResvCitiesLov
         * @summary Fetch List Of Values for Agent Source Resv Cities
         * @request GET:/listOfValues/hotels/{hotelId}/agentSourceResvCities
         */
        getAgentSourceResvCitiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAlertCodesLOV</p>
         *
         * @tags LOV
         * @name GetAlertCodesLov
         * @summary Fetch List Of Values for Alert Codes
         * @request GET:/listOfValues/hotels/{hotelId}/alertCodes
         */
        getAlertCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAlternateHotelCodesLOV</p>
         *
         * @tags LOV
         * @name GetAlternateHotelCodesLov
         * @summary Fetch List Of Values for Alternate Hotel Codes
         * @request GET:/listOfValues/hotels/{hotelId}/alternateHotelCodes
         */
        getAlternateHotelCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAmenitiesLOV</p>
         *
         * @tags LOV
         * @name GetAmenitiesLov
         * @summary Fetch List Of Values for Amenities
         * @request GET:/listOfValues/hotels/{hotelId}/amenities
         */
        getAmenitiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getARAccountTypesLOV</p>
         *
         * @tags LOV
         * @name GetArAccountTypesLov
         * @summary Fetch List Of Values for ARAccount Types
         * @request GET:/listOfValues/hotels/{hotelId}/arAccountTypes
         */
        getArAccountTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getARCreditCardsLOV</p>
         *
         * @tags LOV
         * @name GetArCreditCardsLov
         * @summary Fetch List Of Values for ARCredit Cards
         * @request GET:/listOfValues/hotels/{hotelId}/arCreditCards
         */
        getArCreditCardsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getArrangementCodeLOV</p>
         *
         * @tags LOV
         * @name GetArrangementCodeLov
         * @summary Fetch List Of Values for Arrangement Code
         * @request GET:/listOfValues/hotels/{hotelId}/arrangementCode
         */
        getArrangementCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPackageArrangementAssociationLOV</p>
         *
         * @tags LOV
         * @name GetPackageArrangementAssociationLov
         * @summary Fetch List Of Values for Package Arrangement Association
         * @request GET:/listOfValues/hotels/{hotelId}/arrangementCode/{arrangementCode}/packageArrangementAssociation
         */
        getPackageArrangementAssociationLov: (arrangementCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockRatesLOV</p>
         *
         * @tags LOV
         * @name GetBlockRatesLov
         * @summary Fetch List Of Values for Block Rates
         * @request GET:/listOfValues/hotels/{hotelId}/arrival/{arrival}/departure/{departure}/blockId/{blockId}/blockRates
         */
        getBlockRatesLov: (blockId: string, departure: string, arrival: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationTicketsCodesLOV</p>
         *
         * @tags LOV
         * @name GetReservationTicketsCodesLov
         * @summary Fetch List Of Values for Reservation Tickets Codes
         * @request GET:/listOfValues/hotels/{hotelId}/arrival/{arrival}/departure/{departure}/reservationTicketsCodes
         */
        getReservationTicketsCodesLov: (departure: string, arrival: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockCodesByArrivalDateLOV</p>
         *
         * @tags LOV
         * @name GetBlockCodesByArrivalDateLov
         * @summary Fetch List Of Values for Block Codes By Arrival Date
         * @request GET:/listOfValues/hotels/{hotelId}/arrivalDate/{arrivalDate}/blockCodesByArrivalDate
         */
        getBlockCodesByArrivalDateLov: (arrivalDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getArticleCodesLOV</p>
         *
         * @tags LOV
         * @name GetArticleCodesLov
         * @summary Fetch List Of Values for Article Codes
         * @request GET:/listOfValues/hotels/{hotelId}/articleCodes
         */
        getArticleCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAttractionsLOV</p>
         *
         * @tags LOV
         * @name GetAttractionsLov
         * @summary Fetch List Of Values for Attractions
         * @request GET:/listOfValues/hotels/{hotelId}/attractions
         */
        getAttractionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAuthorizerLOV</p>
         *
         * @tags LOV
         * @name GetAuthorizerLov
         * @summary Fetch List Of Values for Authorizer
         * @request GET:/listOfValues/hotels/{hotelId}/authorizer
         */
        getAuthorizerLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAvailableProfileOwnerRoomsLOV</p>
         *
         * @tags LOV
         * @name GetAvailableProfileOwnerRoomsLov
         * @summary Fetch List Of Values for Available Profile Owner Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/availableProfileOwnerRooms
         */
        getAvailableProfileOwnerRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAvailableScriptLanguagesLOV</p>
         *
         * @tags LOV
         * @name GetAvailableScriptLanguagesLov
         * @summary Fetch List Of Values for Available Script Languages
         * @request GET:/listOfValues/hotels/{hotelId}/availableScriptLanguages
         */
        getAvailableScriptLanguagesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAwardCodesLOV</p>
         *
         * @tags LOV
         * @name GetAwardCodesLov
         * @summary Fetch List Of Values for Award Codes
         * @request GET:/listOfValues/hotels/{hotelId}/awardCodes
         */
        getAwardCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAwardCodesMultiHotelLOV</p>
         *
         * @tags LOV
         * @name GetAwardCodesMultiHotelLov
         * @summary Fetch List Of Values for Award Codes Multi Hotel
         * @request GET:/listOfValues/hotels/{hotelId}/awardCodesMultiHotel
         */
        getAwardCodesMultiHotelLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAwardMktgCodesLOV</p>
         *
         * @tags LOV
         * @name GetAwardMktgCodesLov
         * @summary Fetch List Of Values for Award Mktg Codes
         * @request GET:/listOfValues/hotels/{hotelId}/awardMktgCodes
         */
        getAwardMktgCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBankAccountsLOV</p>
         *
         * @tags LOV
         * @name GetBankAccountsLov
         * @summary Fetch List Of Values for Bank Accounts
         * @request GET:/listOfValues/hotels/{hotelId}/bankAccounts
         */
        getBankAccountsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBankAccountsForReportsLOV</p>
         *
         * @tags LOV
         * @name GetBankAccountsForReportsLov
         * @summary Fetch List Of Values for Bank Accounts For Reports
         * @request GET:/listOfValues/hotels/{hotelId}/bankAccountsForReports
         */
        getBankAccountsForReportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBanquetPrintingMethodLOV</p>
         *
         * @tags LOV
         * @name GetBanquetPrintingMethodLov
         * @summary Fetch List Of Values for Banquet Printing Method
         * @request GET:/listOfValues/hotels/{hotelId}/banquetPrintingMethod
         */
        getBanquetPrintingMethodLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEndOfDayReportsLOV</p>
         *
         * @tags LOV
         * @name GetEndOfDayReportsLov
         * @summary Fetch List Of Values for End Of Day Reports
         * @request GET:/listOfValues/hotels/{hotelId}/beforeIncomeAudit/{beforeIncomeAudit}/endOfDayReports
         */
        getEndOfDayReportsLov: (beforeIncomeAudit: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockCodesLOV</p>
         *
         * @tags LOV
         * @name GetBlockCodesLov
         * @summary Fetch List Of Values for Block Codes
         * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/blockCodes
         */
        getBlockCodesLov: (endDate: string, beginDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockIdsLOV</p>
         *
         * @tags LOV
         * @name GetBlockIdsLov
         * @summary Fetch List Of Values for Block Ids
         * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/blockIds
         */
        getBlockIdsLov: (endDate: string, beginDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetBlockRateCodesLov
         * @summary Fetch List Of Values for Block Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/negotiatedOnly/{negotiatedOnly}/blockRateCodes
         */
        getBlockRateCodesLov: (negotiatedOnly: string, endDate: string, beginDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResStatReportRateCodeLOV</p>
         *
         * @tags LOV
         * @name GetResStatReportRateCodeLov
         * @summary Fetch List Of Values for Res Stat Report Rate Code
         * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/resStatReportRateCode
         */
        getResStatReportRateCodeLov: (endDate: string, beginDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipPromotionsLOV</p>
         *
         * @tags LOV
         * @name GetMembershipPromotionsLov
         * @summary Fetch List Of Values for Membership Promotions
         * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/membershipId/{membershipId}/membershipPromotions
         */
        getMembershipPromotionsLov: (membershipId: string, beginDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBillingInstructionsLOV</p>
         *
         * @tags LOV
         * @name GetBillingInstructionsLov
         * @summary Fetch List Of Values for Billing Instructions
         * @request GET:/listOfValues/hotels/{hotelId}/billingInstructions
         */
        getBillingInstructionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockCodesFinOperationsLOV</p>
         *
         * @tags LOV
         * @name GetBlockCodesFinOperationsLov
         * @summary Fetch List Of Values for Block Codes Fin Operations
         * @request GET:/listOfValues/hotels/{hotelId}/blockCodesFinOperations
         */
        getBlockCodesFinOperationsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockEventsLOV</p>
         *
         * @tags LOV
         * @name GetBlockEventsLov
         * @summary Fetch List Of Values for Block Events
         * @request GET:/listOfValues/hotels/{hotelId}/blockEvents
         */
        getBlockEventsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockEventIdsLOV</p>
         *
         * @tags LOV
         * @name GetBlockEventIdsLov
         * @summary Fetch List Of Values for Block Event Ids
         * @request GET:/listOfValues/hotels/{hotelId}/blockId/{blockId}/blockEventIds
         */
        getBlockEventIdsLov: (blockId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockModeLovLOV</p>
         *
         * @tags LOV
         * @name GetBlockModeLovLov
         * @summary Fetch List Of Values for Block Mode Lov
         * @request GET:/listOfValues/hotels/{hotelId}/blockModeLov
         */
        getBlockModeLovLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockPaymentMethodsLOV</p>
         *
         * @tags LOV
         * @name GetBlockPaymentMethodsLov
         * @summary Fetch List Of Values for Block Payment Methods
         * @request GET:/listOfValues/hotels/{hotelId}/blockPaymentMethods
         */
        getBlockPaymentMethodsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChannelConfigRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetChannelConfigRateCodesLov
         * @summary Fetch List Of Values for Channel Config Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/bookingChannels/{bookingChannelCode}/roomType/{roomType}/channelConfigRateCodes
         */
        getChannelConfigRateCodesLov: (roomType: string, bookingChannelCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBlockReservationTypesLOV</p>
         *
         * @tags LOV
         * @name GetBlockReservationTypesLov
         * @summary Fetch List Of Values for Block Reservation Types
         * @request GET:/listOfValues/hotels/{hotelId}/bookingStatus/{bookingStatus}/blockReservationTypes
         */
        getBlockReservationTypesLov: (bookingStatus: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBookingTypesIndividualsLOV</p>
         *
         * @tags LOV
         * @name GetBookingTypesIndividualsLov
         * @summary Fetch List Of Values for Booking Types Individuals
         * @request GET:/listOfValues/hotels/{hotelId}/bookingTypesIndividuals
         */
        getBookingTypesIndividualsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKTaskSheetsNoLOV</p>
         *
         * @tags LOV
         * @name GetHkTaskSheetsNoLov
         * @summary Fetch List Of Values for HKTask Sheets No
         * @request GET:/listOfValues/hotels/{hotelId}/breakOutId/{breakOutId}/hkTaskSheetsNo
         */
        getHkTaskSheetsNoLov: (breakOutId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRevenueBucketTrxCodesLOV</p>
         *
         * @tags LOV
         * @name GetRevenueBucketTrxCodesLov
         * @summary Fetch List Of Values for Revenue Bucket Trx Codes
         * @request GET:/listOfValues/hotels/{hotelId}/bucketType/{bucketType}/revenueBucketTrxCodes
         */
        getRevenueBucketTrxCodesLov: (bucketType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBudgetForecastCodesLOV</p>
         *
         * @tags LOV
         * @name GetBudgetForecastCodesLov
         * @summary Fetch List Of Values for Budget Forecast Codes
         * @request GET:/listOfValues/hotels/{hotelId}/budgetForecastCodes
         */
        getBudgetForecastCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBudgetRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetBudgetRateCodesLov
         * @summary Fetch List Of Values for Budget Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/budgetRateCodes
         */
        getBudgetRateCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKScheduledAttendantsLOV</p>
         *
         * @tags LOV
         * @name GetHkScheduledAttendantsLov
         * @summary Fetch List Of Values for HKScheduled Attendants
         * @request GET:/listOfValues/hotels/{hotelId}/businessDate/{businessDate}/hkScheduledAttendants
         */
        getHkScheduledAttendantsLov: (businessDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCampaignActivityTypesLOV</p>
         *
         * @tags LOV
         * @name GetCampaignActivityTypesLov
         * @summary Fetch List Of Values for Campaign Activity Types
         * @request GET:/listOfValues/hotels/{hotelId}/campaignActivityTypes
         */
        getCampaignActivityTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCashRegisterIDLOV</p>
         *
         * @tags LOV
         * @name GetCashRegisterIdlov
         * @summary Fetch List Of Values for Cash Register ID
         * @request GET:/listOfValues/hotels/{hotelId}/cashRegisterId
         */
        getCashRegisterIdlov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCatBudgetTypeEventCodesLOV</p>
         *
         * @tags LOV
         * @name GetCatBudgetTypeEventCodesLov
         * @summary Fetch List Of Values for Cat Budget Type Event Codes
         * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeEventCodes
         */
        getCatBudgetTypeEventCodesLov: (catBudgetType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCatBudgetTypeMarketCodesLOV</p>
         *
         * @tags LOV
         * @name GetCatBudgetTypeMarketCodesLov
         * @summary Fetch List Of Values for Cat Budget Type Market Codes
         * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeMarketCodes
         */
        getCatBudgetTypeMarketCodesLov: (catBudgetType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCatBudgetTypeMealCodesLOV</p>
         *
         * @tags LOV
         * @name GetCatBudgetTypeMealCodesLov
         * @summary Fetch List Of Values for Cat Budget Type Meal Codes
         * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeMealCodes
         */
        getCatBudgetTypeMealCodesLov: (catBudgetType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCatBudgetTypeRevenueCodesLOV</p>
         *
         * @tags LOV
         * @name GetCatBudgetTypeRevenueCodesLov
         * @summary Fetch List Of Values for Cat Budget Type Revenue Codes
         * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeRevenueCodes
         */
        getCatBudgetTypeRevenueCodesLov: (catBudgetType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringPackagePriceCodesLOV</p>
         *
         * @tags LOV
         * @name GetCateringPackagePriceCodesLov
         * @summary Fetch List Of Values for Catering Package Price Codes
         * @request GET:/listOfValues/hotels/{hotelId}/cateringPackagePriceCodes
         */
        getCateringPackagePriceCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBookingChannelRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetBookingChannelRatePlansLov
         * @summary Fetch List Of Values for Booking Channel Rate Plans
         * @request GET:/listOfValues/hotels/{hotelId}/channel/{channel}/bookingChannelRatePlans
         */
        getBookingChannelRatePlansLov: (channel: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingCardTypeLOV</p>
         *
         * @tags LOV
         * @name GetChannelCardTypeMappingCardTypeLov
         * @summary Fetch List Of Values for Channel Card Type Mapping Card Type
         * @request GET:/listOfValues/hotels/{hotelId}/channelCardTypeMappingCardType
         */
        getChannelCardTypeMappingCardTypeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingGdsHostLOV</p>
         *
         * @tags LOV
         * @name GetChannelCardTypeMappingGdsHostLov
         * @summary Fetch List Of Values for Channel Card Type Mapping Gds Host
         * @request GET:/listOfValues/hotels/{hotelId}/channelCardTypeMappingGdsHost
         */
        getChannelCardTypeMappingGdsHostLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCommissionCodeLOV</p>
         *
         * @tags LOV
         * @name GetCommissionCodeLov
         * @summary Fetch List Of Values for Commission Code
         * @request GET:/listOfValues/hotels/{hotelId}/commissionCode
         */
        getCommissionCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCommissionTxnCodesLOV</p>
         *
         * @tags LOV
         * @name GetCommissionTxnCodesLov
         * @summary Fetch List Of Values for Commission Txn Codes
         * @request GET:/listOfValues/hotels/{hotelId}/commissionTxnCodes
         */
        getCommissionTxnCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCompAuthorizersLOV</p>
         *
         * @tags LOV
         * @name GetCompAuthorizersLov
         * @summary Fetch List Of Values for Comp Authorizers
         * @request GET:/listOfValues/hotels/{hotelId}/compAuthorizers
         */
        getCompAuthorizersLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCompTypesLOV</p>
         *
         * @tags LOV
         * @name GetCompTypesLov
         * @summary Fetch List Of Values for Comp Types
         * @request GET:/listOfValues/hotels/{hotelId}/compTypes
         */
        getCompTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCompaniesLOV</p>
         *
         * @tags LOV
         * @name GetCompaniesLov
         * @summary Fetch List Of Values for Companies
         * @request GET:/listOfValues/hotels/{hotelId}/companies
         */
        getCompaniesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConfLetterReportsLOV</p>
         *
         * @tags LOV
         * @name GetConfLetterReportsLov
         * @summary Fetch List Of Values for Conf Letter Reports
         * @request GET:/listOfValues/hotels/{hotelId}/confLetterReports
         */
        getConfLetterReportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExportMappingCodesToLinkLOV</p>
         *
         * @tags LOV
         * @name GetExportMappingCodesToLinkLov
         * @summary Fetch List Of Values for Export Mapping Codes To Link
         * @request GET:/listOfValues/hotels/{hotelId}/configType/{configType}/exportMappingCodesToLink
         */
        getExportMappingCodesToLinkLov: (configType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelContactCommMethodLOV</p>
         *
         * @tags LOV
         * @name GetHotelContactCommMethodLov
         * @summary Fetch List Of Values for Hotel Contact Comm Method
         * @request GET:/listOfValues/hotels/{hotelId}/contactType/{contactType}/hotelContactCommMethod
         */
        getHotelContactCommMethodLov: (contactType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCreditCardTypesLOV</p>
         *
         * @tags LOV
         * @name GetCreditCardTypesLov
         * @summary Fetch List Of Values for Credit Card Types
         * @request GET:/listOfValues/hotels/{hotelId}/creditCardTypes
         */
        getCreditCardTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getStageProfilesLOV</p>
         *
         * @tags LOV
         * @name GetStageProfilesLov
         * @summary Fetch List Of Values for Stage Profiles
         * @request GET:/listOfValues/hotels/{hotelId}/criteria/{criteria}/stageProfiles
         */
        getStageProfilesLov: (criteria: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConfigBaseRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetConfigBaseRatePlansLov
         * @summary Fetch List Of Values for Config Base Rate Plans
         * @request GET:/listOfValues/hotels/{hotelId}/currentRateCode/{currentRateCode}/currencyCode/{currencyCode}/daily/{daily}/tiered/{tiered}/configBaseRatePlans
         */
        getConfigBaseRatePlansLov: (tiered: string, daily: string, currencyCode: string, currentRateCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConfigAdvDynamicBaseRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetConfigAdvDynamicBaseRatePlansLov
         * @summary Fetch List Of Values for Config Adv Dynamic Base Rate Plans
         * @request GET:/listOfValues/hotels/{hotelId}/currentRateCode/{currentRateCode}/tiered/{tiered}/daily/{daily}/configAdvDynamicBaseRatePlans
         */
        getConfigAdvDynamicBaseRatePlansLov: (daily: string, tiered: string, currentRateCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCustomNumberConfigCodesLOV</p>
         *
         * @tags LOV
         * @name GetCustomNumberConfigCodesLov
         * @summary Fetch List Of Values for Custom Number Config Codes
         * @request GET:/listOfValues/hotels/{hotelId}/customNumberConfigCodes
         */
        getCustomNumberConfigCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCustomRoomTranslationLOV</p>
         *
         * @tags LOV
         * @name GetCustomRoomTranslationLov
         * @summary Fetch List Of Values for Custom Room Translation
         * @request GET:/listOfValues/hotels/{hotelId}/dbfLogo/{dbfLogo}/customRoomTranslation
         */
        getCustomRoomTranslationLov: (dbfLogo: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getQuickTextsLOV</p>
         *
         * @tags LOV
         * @name GetQuickTextsLov
         * @summary Fetch List Of Values for Quick Texts
         * @request GET:/listOfValues/hotels/{hotelId}/departmentId/{departmentId}/quickTexts
         */
        getQuickTextsLov: (departmentId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDeviceLocationsLOV</p>
         *
         * @tags LOV
         * @name GetDeviceLocationsLov
         * @summary Fetch List Of Values for Device Locations
         * @request GET:/listOfValues/hotels/{hotelId}/deviceLocations
         */
        getDeviceLocationsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDietaryPreferencesLOV</p>
         *
         * @tags LOV
         * @name GetDietaryPreferencesLov
         * @summary Fetch List Of Values for Dietary Preferences
         * @request GET:/listOfValues/hotels/{hotelId}/dietaryPreferences
         */
        getDietaryPreferencesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getECouponLOV</p>
         *
         * @tags LOV
         * @name GetECouponLov
         * @summary Fetch List Of Values for ECoupon
         * @request GET:/listOfValues/hotels/{hotelId}/eCoupon
         */
        getECouponLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getECouponRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetECouponRateCodesLov
         * @summary Fetch List Of Values for ECoupon Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/eCouponRateCodes
         */
        getECouponRateCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEcouponResvRoomLOV</p>
         *
         * @tags LOV
         * @name GetEcouponResvRoomLov
         * @summary Fetch List Of Values for Ecoupon Resv Room
         * @request GET:/listOfValues/hotels/{hotelId}/ecouponResvRoom
         */
        getEcouponResvRoomLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEventGroupsLOV</p>
         *
         * @tags LOV
         * @name GetEventGroupsLov
         * @summary Fetch List Of Values for Event Groups
         * @request GET:/listOfValues/hotels/{hotelId}/eventGroups
         */
        getEventGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEventLocationsLOV</p>
         *
         * @tags LOV
         * @name GetEventLocationsLov
         * @summary Fetch List Of Values for Event Locations
         * @request GET:/listOfValues/hotels/{hotelId}/eventLocations
         */
        getEventLocationsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCurrencyExchangeRatesLOV</p>
         *
         * @tags LOV
         * @name GetCurrencyExchangeRatesLov
         * @summary Fetch List Of Values for Currency Exchange Rates
         * @request GET:/listOfValues/hotels/{hotelId}/exchangeType/{exchangeType}/currencyExchangeRates
         */
        getCurrencyExchangeRatesLov: (exchangeType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExportMappingTypeCodesLOV</p>
         *
         * @tags LOV
         * @name GetExportMappingTypeCodesLov
         * @summary Fetch List Of Values for Export Mapping Type Codes
         * @request GET:/listOfValues/hotels/{hotelId}/exportMappingTypeCodes
         */
        getExportMappingTypeCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBusinessEventActionTypeLOV</p>
         *
         * @tags LOV
         * @name GetBusinessEventActionTypeLov
         * @summary Fetch List Of Values for Business Event Action Type
         * @request GET:/listOfValues/hotels/{hotelId}/extSystem/{extSystem}/module/{module}/businessEventActionType
         */
        getBusinessEventActionTypeLov: (module: string, extSystem: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExternalReferenceTypesLOV</p>
         *
         * @tags LOV
         * @name GetExternalReferenceTypesLov
         * @summary Fetch List Of Values for External Reference Types
         * @request GET:/listOfValues/hotels/{hotelId}/externalReferenceTypes
         */
        getExternalReferenceTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFacilityCodesLOV</p>
         *
         * @tags LOV
         * @name GetFacilityCodesLov
         * @summary Fetch List Of Values for Facility Codes
         * @request GET:/listOfValues/hotels/{hotelId}/facilityCodes
         */
        getFacilityCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFacilityCodesReservationLOV</p>
         *
         * @tags LOV
         * @name GetFacilityCodesReservationLov
         * @summary Fetch List Of Values for Facility Codes Reservation
         * @request GET:/listOfValues/hotels/{hotelId}/facilityTask/{facilityTask}/facilityCodesReservation
         */
        getFacilityCodesReservationLov: (facilityTask: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFacilityTasksLOV</p>
         *
         * @tags LOV
         * @name GetFacilityTasksLov
         * @summary Fetch List Of Values for Facility Tasks
         * @request GET:/listOfValues/hotels/{hotelId}/facilityTasks
         */
        getFacilityTasksLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAvailableExportTemplatesLOV</p>
         *
         * @tags LOV
         * @name GetAvailableExportTemplatesLov
         * @summary Fetch List Of Values for Available Export Templates
         * @request GET:/listOfValues/hotels/{hotelId}/fileGroup/{fileGroup}/availableExportTemplates
         */
        getAvailableExportTemplatesLov: (fileGroup: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFiscalPaymentMethodsLOV</p>
         *
         * @tags LOV
         * @name GetFiscalPaymentMethodsLov
         * @summary Fetch List Of Values for Fiscal Payment Methods
         * @request GET:/listOfValues/hotels/{hotelId}/fiscalPaymentMethods
         */
        getFiscalPaymentMethodsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepFiscalMonthsLOV</p>
         *
         * @tags LOV
         * @name GetRepFiscalMonthsLov
         * @summary Fetch List Of Values for Rep Fiscal Months
         * @request GET:/listOfValues/hotels/{hotelId}/fiscalYearId/{fiscalYearId}/repFiscalMonths
         */
        getRepFiscalMonthsLov: (fiscalYearId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepFiscalWeeksLOV</p>
         *
         * @tags LOV
         * @name GetRepFiscalWeeksLov
         * @summary Fetch List Of Values for Rep Fiscal Weeks
         * @request GET:/listOfValues/hotels/{hotelId}/fiscalYearId/{fiscalYearId}/repFiscalWeeks
         */
        getRepFiscalWeeksLov: (fiscalYearId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFixedChargesTransactionCodesLOV</p>
         *
         * @tags LOV
         * @name GetFixedChargesTransactionCodesLov
         * @summary Fetch List Of Values for Fixed Charges Transaction Codes
         * @request GET:/listOfValues/hotels/{hotelId}/fixedChargesTransactionCodes
         */
        getFixedChargesTransactionCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFloorsLOV</p>
         *
         * @tags LOV
         * @name GetFloorsLov
         * @summary Fetch List Of Values for Floors
         * @request GET:/listOfValues/hotels/{hotelId}/floors
         */
        getFloorsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFolioStylesLOV</p>
         *
         * @tags LOV
         * @name GetFolioStylesLov
         * @summary Fetch List Of Values for Folio Styles
         * @request GET:/listOfValues/hotels/{hotelId}/folioStyles
         */
        getFolioStylesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFolioTypesLOV</p>
         *
         * @tags LOV
         * @name GetFolioTypesLov
         * @summary Fetch List Of Values for Folio Types
         * @request GET:/listOfValues/hotels/{hotelId}/folioTypes
         */
        getFolioTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getForecastGroupsLOV</p>
         *
         * @tags LOV
         * @name GetForecastGroupsLov
         * @summary Fetch List Of Values for Forecast Groups
         * @request GET:/listOfValues/hotels/{hotelId}/forecastGroups
         */
        getForecastGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaskBreakOutLOV</p>
         *
         * @tags LOV
         * @name GetTaskBreakOutLov
         * @summary Fetch List Of Values for Task Break Out
         * @request GET:/listOfValues/hotels/{hotelId}/fromDate/{fromDate}/taskBreakOut
         */
        getTaskBreakOutLov: (fromDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRoomsStatLOV</p>
         *
         * @tags LOV
         * @name GetRepRoomsStatLov
         * @summary Fetch List Of Values for Rep Rooms Stat
         * @request GET:/listOfValues/hotels/{hotelId}/fromDate/{fromDate}/toDate/{toDate}/repRoomsStat
         */
        getRepRoomsStatLov: (toDate: string, fromDate: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellToRoomClassEditLOV</p>
         *
         * @tags LOV
         * @name GetUpsellToRoomClassEditLov
         * @summary Fetch List Of Values for Upsell To Room Class Edit
         * @request GET:/listOfValues/hotels/{hotelId}/fromRoomClass/{fromRoomClass}/upsellToRoomClassEdit
         */
        getUpsellToRoomClassEditLov: (fromRoomClass: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFromRoomNumberLOV</p>
         *
         * @tags LOV
         * @name GetFromRoomNumberLov
         * @summary Fetch List Of Values for From Room Number
         * @request GET:/listOfValues/hotels/{hotelId}/fromRoomNumber
         */
        getFromRoomNumberLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellToRoomTypeEditLOV</p>
         *
         * @tags LOV
         * @name GetUpsellToRoomTypeEditLov
         * @summary Fetch List Of Values for Upsell To Room Type Edit
         * @request GET:/listOfValues/hotels/{hotelId}/fromRoomTypeLabel/{fromRoomTypeLabel}/upsellToRoomTypeEdit
         */
        getUpsellToRoomTypeEditLov: (fromRoomTypeLabel: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGemMenuItemsLOV</p>
         *
         * @tags LOV
         * @name GetGemMenuItemsLov
         * @summary Fetch List Of Values for Gem Menu Items
         * @request GET:/listOfValues/hotels/{hotelId}/gemMenuItems
         */
        getGemMenuItemsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGenericReportsLOV</p>
         *
         * @tags LOV
         * @name GetGenericReportsLov
         * @summary Fetch List Of Values for Generic Reports
         * @request GET:/listOfValues/hotels/{hotelId}/genericReports
         */
        getGenericReportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGroupArrivalsLOV</p>
         *
         * @tags LOV
         * @name GetGroupArrivalsLov
         * @summary Fetch List Of Values for Group Arrivals
         * @request GET:/listOfValues/hotels/{hotelId}/groupArrivals
         */
        getGroupArrivalsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGroupsLOV</p>
         *
         * @tags LOV
         * @name GetGroupsLov
         * @summary Fetch List Of Values for Groups
         * @request GET:/listOfValues/hotels/{hotelId}/groups
         */
        getGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGuestMessagesMultiHotelLOV</p>
         *
         * @tags LOV
         * @name GetGuestMessagesMultiHotelLov
         * @summary Fetch List Of Values for Guest Messages Multi Hotel
         * @request GET:/listOfValues/hotels/{hotelId}/guestMessagesMultiHotel
         */
        getGuestMessagesMultiHotelLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGuestMessagesQuickTextsLOV</p>
         *
         * @tags LOV
         * @name GetGuestMessagesQuickTextsLov
         * @summary Fetch List Of Values for Guest Messages Quick Texts
         * @request GET:/listOfValues/hotels/{hotelId}/guestMessagesQuickTexts
         */
        getGuestMessagesQuickTextsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKAttendantsLOV</p>
         *
         * @tags LOV
         * @name GetHkAttendantsLov
         * @summary Fetch List Of Values for HKAttendants
         * @request GET:/listOfValues/hotels/{hotelId}/hkAttendants
         */
        getHkAttendantsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKAttendantsMobileLOV</p>
         *
         * @tags LOV
         * @name GetHkAttendantsMobileLov
         * @summary Fetch List Of Values for HKAttendants Mobile
         * @request GET:/listOfValues/hotels/{hotelId}/hkAttendantsMobile
         */
        getHkAttendantsMobileLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHkFloorsLOV</p>
         *
         * @tags LOV
         * @name GetHkFloorsLov
         * @summary Fetch List Of Values for Hk Floors
         * @request GET:/listOfValues/hotels/{hotelId}/hkFloors
         */
        getHkFloorsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHkRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetHkRoomTypesLov
         * @summary Fetch List Of Values for Hk Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/hkRoomTypes
         */
        getHkRoomTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHkRoomsLOV</p>
         *
         * @tags LOV
         * @name GetHkRoomsLov
         * @summary Fetch List Of Values for Hk Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/hkRooms
         */
        getHkRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKTaskBreakOutLOV</p>
         *
         * @tags LOV
         * @name GetHkTaskBreakOutLov
         * @summary Fetch List Of Values for HKTask Break Out
         * @request GET:/listOfValues/hotels/{hotelId}/hkTaskBreakOut
         */
        getHkTaskBreakOutLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKTaskCodesLOV</p>
         *
         * @tags LOV
         * @name GetHkTaskCodesLov
         * @summary Fetch List Of Values for HKTask Codes
         * @request GET:/listOfValues/hotels/{hotelId}/hkTaskCodes
         */
        getHkTaskCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHKTaskTemplatesLOV</p>
         *
         * @tags LOV
         * @name GetHkTaskTemplatesLov
         * @summary Fetch List Of Values for HKTask Templates
         * @request GET:/listOfValues/hotels/{hotelId}/hkTaskTemplates
         */
        getHkTaskTemplatesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelEventTypesLOV</p>
         *
         * @tags LOV
         * @name GetHotelEventTypesLov
         * @summary Fetch List Of Values for Hotel Event Types
         * @request GET:/listOfValues/hotels/{hotelId}/hotelEventTypes
         */
        getHotelEventTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceImportRoomsLOV</p>
         *
         * @tags LOV
         * @name GetHotelInterfaceImportRoomsLov
         * @summary Fetch List Of Values for Hotel Interface Import Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/hotelInterfaceImportRooms
         */
        getHotelInterfaceImportRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelRateTierLOV</p>
         *
         * @tags LOV
         * @name GetHotelRateTierLov
         * @summary Fetch List Of Values for Hotel Rate Tier
         * @request GET:/listOfValues/hotels/{hotelId}/hotelRateTier
         */
        getHotelRateTierLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHouseKeepingRoomsLOV</p>
         *
         * @tags LOV
         * @name GetHouseKeepingRoomsLov
         * @summary Fetch List Of Values for House Keeping Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/houseKeepingRooms
         */
        getHouseKeepingRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHouseKeepingSectionsLOV</p>
         *
         * @tags LOV
         * @name GetHouseKeepingSectionsLov
         * @summary Fetch List Of Values for House Keeping Sections
         * @request GET:/listOfValues/hotels/{hotelId}/houseKeepingSections
         */
        getHouseKeepingSectionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHousekeepingCreditRulesLOV</p>
         *
         * @tags LOV
         * @name GetHousekeepingCreditRulesLov
         * @summary Fetch List Of Values for Housekeeping Credit Rules
         * @request GET:/listOfValues/hotels/{hotelId}/housekeepingCreditRules
         */
        getHousekeepingCreditRulesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getIfcRightsViewLOV</p>
         *
         * @tags LOV
         * @name GetIfcRightsViewLov
         * @summary Fetch List Of Values for Ifc Rights View
         * @request GET:/listOfValues/hotels/{hotelId}/ifcId/{ifcId}/category/{category}/ifcRightsView
         */
        getIfcRightsViewLov: (category: string, ifcId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getImbalanceVerificationTypesLOV</p>
         *
         * @tags LOV
         * @name GetImbalanceVerificationTypesLov
         * @summary Fetch List Of Values for Imbalance Verification Types
         * @request GET:/listOfValues/hotels/{hotelId}/imbalanceVerificationTypes
         */
        getImbalanceVerificationTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellOccupancyLevelsLOV</p>
         *
         * @tags LOV
         * @name GetUpsellOccupancyLevelsLov
         * @summary Fetch List Of Values for Upsell Occupancy Levels
         * @request GET:/listOfValues/hotels/{hotelId}/includeBlank/{includeBlank}/upsellOccupancyLevels
         */
        getUpsellOccupancyLevelsLov: (includeBlank: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSourceGroupsLOV</p>
         *
         * @tags LOV
         * @name GetSourceGroupsLov
         * @summary Fetch List Of Values for Source Groups
         * @request GET:/listOfValues/hotels/{hotelId}/includeInactive/{includeInactive}/sourceGroups
         */
        getSourceGroupsLov: (includeInactive: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceAutoBalanceLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceAutoBalanceLov
         * @summary Fetch List Of Values for Interface Auto Balance
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceAutoBalance
         */
        getInterfaceAutoBalanceLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestMarketCodeLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestMarketCodeLov
         * @summary Fetch List Of Values for Interface Data Request Market Code
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestMarketCode
         */
        getInterfaceDataRequestMarketCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestMarketGroupLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestMarketGroupLov
         * @summary Fetch List Of Values for Interface Data Request Market Group
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestMarketGroup
         */
        getInterfaceDataRequestMarketGroupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestRoomClassLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestRoomClassLov
         * @summary Fetch List Of Values for Interface Data Request Room Class
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestRoomClass
         */
        getInterfaceDataRequestRoomClassLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestRoomTypesLov
         * @summary Fetch List Of Values for Interface Data Request Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestRoomTypes
         */
        getInterfaceDataRequestRoomTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestSourceCodeLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestSourceCodeLov
         * @summary Fetch List Of Values for Interface Data Request Source Code
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestSourceCode
         */
        getInterfaceDataRequestSourceCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestSourceGroupLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceDataRequestSourceGroupLov
         * @summary Fetch List Of Values for Interface Data Request Source Group
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestSourceGroup
         */
        getInterfaceDataRequestSourceGroupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfacePseudoRoomLOV</p>
         *
         * @tags LOV
         * @name GetInterfacePseudoRoomLov
         * @summary Fetch List Of Values for Interface Pseudo Room
         * @request GET:/listOfValues/hotels/{hotelId}/interfacePseudoRoom
         */
        getInterfacePseudoRoomLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceResyncFunctionSpaceLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceResyncFunctionSpaceLov
         * @summary Fetch List Of Values for Interface Resync Function Space
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncFunctionSpace
         */
        getInterfaceResyncFunctionSpaceLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceResyncOwnerContractLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceResyncOwnerContractLov
         * @summary Fetch List Of Values for Interface Resync Owner Contract
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncOwnerContract
         */
        getInterfaceResyncOwnerContractLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceResyncOwnerContractRoomLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceResyncOwnerContractRoomLov
         * @summary Fetch List Of Values for Interface Resync Owner Contract Room
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncOwnerContractRoom
         */
        getInterfaceResyncOwnerContractRoomLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceResyncProductsLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceResyncProductsLov
         * @summary Fetch List Of Values for Interface Resync Products
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncProducts
         */
        getInterfaceResyncProductsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceTrxCodesAllChargesLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceTrxCodesAllChargesLov
         * @summary Fetch List Of Values for Interface Trx Codes All Charges
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceTrxCodesAllCharges
         */
        getInterfaceTrxCodesAllChargesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceTrxCodesMinibarLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceTrxCodesMinibarLov
         * @summary Fetch List Of Values for Interface Trx Codes Minibar
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceTrxCodesMinibar
         */
        getInterfaceTrxCodesMinibarLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAllowedHotelInterfaceRightsLOV</p>
         *
         * @tags LOV
         * @name GetAllowedHotelInterfaceRightsLov
         * @summary Fetch List Of Values for Allowed Hotel Interface Rights
         * @request GET:/listOfValues/hotels/{hotelId}/interfaceType/{interfaceType}/interfaceRowId/{interfaceRowId}/allowedHotelInterfaceRights
         */
        getAllowedHotelInterfaceRightsLov: (interfaceRowId: string, interfaceType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInvItemsClassesLOV</p>
         *
         * @tags LOV
         * @name GetInvItemsClassesLov
         * @summary Fetch List Of Values for Inv Items Classes
         * @request GET:/listOfValues/hotels/{hotelId}/invItemsClasses
         */
        getInvItemsClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInvItemsPoolsLOV</p>
         *
         * @tags LOV
         * @name GetInvItemsPoolsLov
         * @summary Fetch List Of Values for Inv Items Pools
         * @request GET:/listOfValues/hotels/{hotelId}/invItemsPools
         */
        getInvItemsPoolsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInventoryItemTemplateItemsLOV</p>
         *
         * @tags LOV
         * @name GetInventoryItemTemplateItemsLov
         * @summary Fetch List Of Values for Inventory Item Template Items
         * @request GET:/listOfValues/hotels/{hotelId}/inventoryItemTemplateItems
         */
        getInventoryItemTemplateItemsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getItemClassesLOV</p>
         *
         * @tags LOV
         * @name GetItemClassesLov
         * @summary Fetch List Of Values for Item Classes
         * @request GET:/listOfValues/hotels/{hotelId}/itemClasses
         */
        getItemClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getItemCodesLOV</p>
         *
         * @tags LOV
         * @name GetItemCodesLov
         * @summary Fetch List Of Values for Item Codes
         * @request GET:/listOfValues/hotels/{hotelId}/itemCodes
         */
        getItemCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInventoryItemAttributesLOV</p>
         *
         * @tags LOV
         * @name GetInventoryItemAttributesLov
         * @summary Fetch List Of Values for Inventory Item Attributes
         * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/inventoryItemAttributes
         */
        getInventoryItemAttributesLov: (itemId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInventoryItemRatesLOV</p>
         *
         * @tags LOV
         * @name GetInventoryItemRatesLov
         * @summary Fetch List Of Values for Inventory Item Rates
         * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/inventoryItemRates
         */
        getInventoryItemRatesLov: (itemId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getItemPriceCodeLOV</p>
         *
         * @tags LOV
         * @name GetItemPriceCodeLov
         * @summary Fetch List Of Values for Item Price Code
         * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/itemPriceCode
         */
        getItemPriceCodeLov: (itemId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getItemVendorLOV</p>
         *
         * @tags LOV
         * @name GetItemVendorLov
         * @summary Fetch List Of Values for Item Vendor
         * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/itemVendor
         */
        getItemVendorLov: (itemId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getJobTitlesLOV</p>
         *
         * @tags LOV
         * @name GetJobTitlesLov
         * @summary Fetch List Of Values for Job Titles
         * @request GET:/listOfValues/hotels/{hotelId}/jobTitles
         */
        getJobTitlesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getKeyOptionsLOV</p>
         *
         * @tags LOV
         * @name GetKeyOptionsLov
         * @summary Fetch List Of Values for Key Options
         * @request GET:/listOfValues/hotels/{hotelId}/keyOptions
         */
        getKeyOptionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getLicensesLOV</p>
         *
         * @tags LOV
         * @name GetLicensesLov
         * @summary Fetch List Of Values for Licenses
         * @request GET:/listOfValues/hotels/{hotelId}/licenses
         */
        getLicensesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getLocatorQuickTextsLOV</p>
         *
         * @tags LOV
         * @name GetLocatorQuickTextsLov
         * @summary Fetch List Of Values for Locator Quick Texts
         * @request GET:/listOfValues/hotels/{hotelId}/locatorQuickTexts
         */
        getLocatorQuickTextsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceDataLineTypesLOV</p>
         *
         * @tags LOV
         * @name GetHotelInterfaceDataLineTypesLov
         * @summary Fetch List Of Values for Hotel Interface Data Line Types
         * @request GET:/listOfValues/hotels/{hotelId}/logo/{logo}/hotelInterfaceDataLineTypes
         */
        getHotelInterfaceDataLineTypesLov: (logo: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceRevenueCodeLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceRevenueCodeLov
         * @summary Fetch List Of Values for Interface Revenue Code
         * @request GET:/listOfValues/hotels/{hotelId}/logo/{logo}/interfaceRevenueCode
         */
        getInterfaceRevenueCodeLov: (logo: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getManagerReportDetailsLOV</p>
         *
         * @tags LOV
         * @name GetManagerReportDetailsLov
         * @summary Fetch List Of Values for Manager Report Details
         * @request GET:/listOfValues/hotels/{hotelId}/managerReportDetails
         */
        getManagerReportDetailsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getManagersReportsLOV</p>
         *
         * @tags LOV
         * @name GetManagersReportsLov
         * @summary Fetch List Of Values for Managers Reports
         * @request GET:/listOfValues/hotels/{hotelId}/managersReports
         */
        getManagersReportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMarketGroupsLOV</p>
         *
         * @tags LOV
         * @name GetMarketGroupsLov
         * @summary Fetch List Of Values for Market Groups
         * @request GET:/listOfValues/hotels/{hotelId}/marketGroups
         */
        getMarketGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMarketSegmentLOV</p>
         *
         * @tags LOV
         * @name GetMarketSegmentLov
         * @summary Fetch List Of Values for Market Segment
         * @request GET:/listOfValues/hotels/{hotelId}/marketSegment
         */
        getMarketSegmentLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMasterBlockLOV</p>
         *
         * @tags LOV
         * @name GetMasterBlockLov
         * @summary Fetch List Of Values for Master Block
         * @request GET:/listOfValues/hotels/{hotelId}/masterBlock
         */
        getMasterBlockLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipAwardFinTrxLOV</p>
         *
         * @tags LOV
         * @name GetMembershipAwardFinTrxLov
         * @summary Fetch List Of Values for Membership Award Fin Trx
         * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardFinTrx
         */
        getMembershipAwardFinTrxLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipAwardProductsLOV</p>
         *
         * @tags LOV
         * @name GetMembershipAwardProductsLov
         * @summary Fetch List Of Values for Membership Award Products
         * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardProducts
         */
        getMembershipAwardProductsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipAwardRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetMembershipAwardRateCodesLov
         * @summary Fetch List Of Values for Membership Award Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardRateCodes
         */
        getMembershipAwardRateCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipAwardUpgradeRoomLOV</p>
         *
         * @tags LOV
         * @name GetMembershipAwardUpgradeRoomLov
         * @summary Fetch List Of Values for Membership Award Upgrade Room
         * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardUpgradeRoom
         */
        getMembershipAwardUpgradeRoomLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipAwardUpgradeRoomGroupLOV</p>
         *
         * @tags LOV
         * @name GetMembershipAwardUpgradeRoomGroupLov
         * @summary Fetch List Of Values for Membership Award Upgrade Room Group
         * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardUpgradeRoomGroup
         */
        getMembershipAwardUpgradeRoomGroupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMenuClassesLOV</p>
         *
         * @tags LOV
         * @name GetMenuClassesLov
         * @summary Fetch List Of Values for Menu Classes
         * @request GET:/listOfValues/hotels/{hotelId}/menuClasses
         */
        getMenuClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMenuItemsLOV</p>
         *
         * @tags LOV
         * @name GetMenuItemsLov
         * @summary Fetch List Of Values for Menu Items
         * @request GET:/listOfValues/hotels/{hotelId}/menuItems
         */
        getMenuItemsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getBusinessEventActionTypeExtDBLOV</p>
         *
         * @tags LOV
         * @name GetBusinessEventActionTypeExtDblov
         * @summary Fetch List Of Values for Business Event Action Type Ext DB
         * @request GET:/listOfValues/hotels/{hotelId}/module/{module}/extSystem/{extSystem}/databaseId/{databaseId}/businessEventActionTypeExtDB
         */
        getBusinessEventActionTypeExtDblov: (databaseId: string, extSystem: string, module: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFormatLOV</p>
         *
         * @tags LOV
         * @name GetFormatLov
         * @summary Fetch List Of Values for Format
         * @request GET:/listOfValues/hotels/{hotelId}/moduleName/{moduleName}/method/{method}/format
         */
        getFormatLov: (method: string, moduleName: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTestUpsellRulesRateCodeLOV</p>
         *
         * @tags LOV
         * @name GetTestUpsellRulesRateCodeLov
         * @summary Fetch List Of Values for Test Upsell Rules Rate Code
         * @request GET:/listOfValues/hotels/{hotelId}/nights/{nights}/arrivalDate/{arrivalDate}/roomCategory/{roomCategory}/testUpsellRulesRateCode
         */
        getTestUpsellRulesRateCodeLov: (roomCategory: string, arrivalDate: string, nights: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOSAActivityTypesLOV</p>
         *
         * @tags LOV
         * @name GetOsaActivityTypesLov
         * @summary Fetch List Of Values for OSAActivity Types
         * @request GET:/listOfValues/hotels/{hotelId}/osaActivityTypes
         */
        getOsaActivityTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOXIInterfaceReferencesLOV</p>
         *
         * @tags LOV
         * @name GetOxiInterfaceReferencesLov
         * @summary Fetch List Of Values for OXIInterface References
         * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaceReferences
         */
        getOxiInterfaceReferencesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOXIInterfaceResortsLOV</p>
         *
         * @tags LOV
         * @name GetOxiInterfaceResortsLov
         * @summary Fetch List Of Values for OXIInterface Resorts
         * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaceResorts
         */
        getOxiInterfaceResortsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOXIInterfacesLOV</p>
         *
         * @tags LOV
         * @name GetOxiInterfacesLov
         * @summary Fetch List Of Values for OXIInterfaces
         * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaces
         */
        getOxiInterfacesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPackForecastGroupCodeLOV</p>
         *
         * @tags LOV
         * @name GetPackForecastGroupCodeLov
         * @summary Fetch List Of Values for Pack Forecast Group Code
         * @request GET:/listOfValues/hotels/{hotelId}/packForecastGroupCode
         */
        getPackForecastGroupCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPaymentMethodsLOV</p>
         *
         * @tags LOV
         * @name GetPaymentMethodsLov
         * @summary Fetch List Of Values for Payment Methods
         * @request GET:/listOfValues/hotels/{hotelId}/paymentMethods
         */
        getPaymentMethodsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPaymentTypesLOV</p>
         *
         * @tags LOV
         * @name GetPaymentTypesLov
         * @summary Fetch List Of Values for Payment Types
         * @request GET:/listOfValues/hotels/{hotelId}/paymentTypes
         */
        getPaymentTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPeriodSetupLOV</p>
         *
         * @tags LOV
         * @name GetPeriodSetupLov
         * @summary Fetch List Of Values for Period Setup
         * @request GET:/listOfValues/hotels/{hotelId}/periodSetup
         */
        getPeriodSetupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPeriodsSetupLOV</p>
         *
         * @tags LOV
         * @name GetPeriodsSetupLov
         * @summary Fetch List Of Values for Periods Setup
         * @request GET:/listOfValues/hotels/{hotelId}/periodsSetup
         */
        getPeriodsSetupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDepositCancelRulesLOV</p>
         *
         * @tags LOV
         * @name GetDepositCancelRulesLov
         * @summary Fetch List Of Values for Deposit Cancel Rules
         * @request GET:/listOfValues/hotels/{hotelId}/policyType/{policyType}/depositCancelRules
         */
        getDepositCancelRulesLov: (policyType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPostingRoomLOV</p>
         *
         * @tags LOV
         * @name GetPostingRoomLov
         * @summary Fetch List Of Values for Posting Room
         * @request GET:/listOfValues/hotels/{hotelId}/postingRoom
         */
        getPostingRoomLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPostingTransactionCodesLOV</p>
         *
         * @tags LOV
         * @name GetPostingTransactionCodesLov
         * @summary Fetch List Of Values for Posting Transaction Codes
         * @request GET:/listOfValues/hotels/{hotelId}/postingTransactionCodes
         */
        getPostingTransactionCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPrepaidCardInterfacesLOV</p>
         *
         * @tags LOV
         * @name GetPrepaidCardInterfacesLov
         * @summary Fetch List Of Values for Prepaid Card Interfaces
         * @request GET:/listOfValues/hotels/{hotelId}/prepaidCardInterfaces
         */
        getPrepaidCardInterfacesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPrioritiesLOV</p>
         *
         * @tags LOV
         * @name GetPrioritiesLov
         * @summary Fetch List Of Values for Priorities
         * @request GET:/listOfValues/hotels/{hotelId}/priorities
         */
        getPrioritiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileIdentificationsLOV</p>
         *
         * @tags LOV
         * @name GetProfileIdentificationsLov
         * @summary Fetch List Of Values for Profile Identifications
         * @request GET:/listOfValues/hotels/{hotelId}/profiles/{profileId}/profileIdentifications
         */
        getProfileIdentificationsLov: (profileId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPromoRatesLOV</p>
         *
         * @tags LOV
         * @name GetPromoRatesLov
         * @summary Fetch List Of Values for Promo Rates
         * @request GET:/listOfValues/hotels/{hotelId}/promoCode/{promoCode}/promoRates
         */
        getPromoRatesLov: (promoCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPromoGroupsLOV</p>
         *
         * @tags LOV
         * @name GetPromoGroupsLov
         * @summary Fetch List Of Values for Promo Groups
         * @request GET:/listOfValues/hotels/{hotelId}/promoGroups
         */
        getPromoGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPropertyAmenitiesLOV</p>
         *
         * @tags LOV
         * @name GetPropertyAmenitiesLov
         * @summary Fetch List Of Values for Property Amenities
         * @request GET:/listOfValues/hotels/{hotelId}/propertyAmenities
         */
        getPropertyAmenitiesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateCategoriesLOV</p>
         *
         * @tags LOV
         * @name GetRateCategoriesLov
         * @summary Fetch List Of Values for Rate Categories
         * @request GET:/listOfValues/hotels/{hotelId}/rateCategories
         */
        getRateCategoriesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRatePlansForYieldAsConfigLOV</p>
         *
         * @tags LOV
         * @name GetRatePlansForYieldAsConfigLov
         * @summary Fetch List Of Values for Rate Plans For Yield As Config
         * @request GET:/listOfValues/hotels/{hotelId}/rateCode/{rateCode}/ratePlansForYieldAsConfig
         */
        getRatePlansForYieldAsConfigLov: (rateCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateCodeGlobalDescEditLOV</p>
         *
         * @tags LOV
         * @name GetRateCodeGlobalDescEditLov
         * @summary Fetch List Of Values for Rate Code Global Desc Edit
         * @request GET:/listOfValues/hotels/{hotelId}/rateCodeGlobalDescEdit
         */
        getRateCodeGlobalDescEditLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateCodesByTypeLOV</p>
         *
         * @tags LOV
         * @name GetRateCodesByTypeLov
         * @summary Fetch List Of Values for Rate Codes By Type
         * @request GET:/listOfValues/hotels/{hotelId}/rateCodeType/{rateCodeType}/rateCodesByType
         */
        getRateCodesByTypeLov: (rateCodeType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRatePlanForMassRateLOV</p>
         *
         * @tags LOV
         * @name GetRatePlanForMassRateLov
         * @summary Fetch List Of Values for Rate Plan For Mass Rate
         * @request GET:/listOfValues/hotels/{hotelId}/rateCodeType/{rateCodeType}/ratePlanForMassRate
         */
        getRatePlanForMassRateLov: (rateCodeType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateCodesValidLOV</p>
         *
         * @tags LOV
         * @name GetRateCodesValidLov
         * @summary Fetch List Of Values for Rate Codes Valid
         * @request GET:/listOfValues/hotels/{hotelId}/rateCodesValid
         */
        getRateCodesValidLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateCommissionCodesLOV</p>
         *
         * @tags LOV
         * @name GetRateCommissionCodesLov
         * @summary Fetch List Of Values for Rate Commission Codes
         * @request GET:/listOfValues/hotels/{hotelId}/rateCommissionCodes
         */
        getRateCommissionCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateConfigCurrenciesLOV</p>
         *
         * @tags LOV
         * @name GetRateConfigCurrenciesLov
         * @summary Fetch List Of Values for Rate Config Currencies
         * @request GET:/listOfValues/hotels/{hotelId}/rateConfigCurrencies
         */
        getRateConfigCurrenciesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRateGroupsLOV</p>
         *
         * @tags LOV
         * @name GetRateGroupsLov
         * @summary Fetch List Of Values for Rate Groups
         * @request GET:/listOfValues/hotels/{hotelId}/rateGroups
         */
        getRateGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomTypesForMassRateLOV</p>
         *
         * @tags LOV
         * @name GetRoomTypesForMassRateLov
         * @summary Fetch List Of Values for Room Types For Mass Rate
         * @request GET:/listOfValues/hotels/{hotelId}/ratePlanCodes/{ratePlanCodes}/roomTypesForMassRate
         */
        getRoomTypesForMassRateLov: (ratePlanCodes: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetRatePlansLov
         * @summary Fetch List Of Values for Rate Plans
         * @request GET:/listOfValues/hotels/{hotelId}/ratePlans
         */
        getRatePlansLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getApplicationModulesLOV</p>
         *
         * @tags LOV
         * @name GetApplicationModulesLov
         * @summary Fetch List Of Values for Application Modules
         * @request GET:/listOfValues/hotels/{hotelId}/relModuleName/{relModuleName}/applicationModules
         */
        getApplicationModulesLov: (relModuleName: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepBlockCodesParamOffLOV</p>
         *
         * @tags LOV
         * @name GetRepBlockCodesParamOffLov
         * @summary Fetch List Of Values for Rep Block Codes Param Off
         * @request GET:/listOfValues/hotels/{hotelId}/repBlockCodesParamOff
         */
        getRepBlockCodesParamOffLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepBlockCodesParamOnLOV</p>
         *
         * @tags LOV
         * @name GetRepBlockCodesParamOnLov
         * @summary Fetch List Of Values for Rep Block Codes Param On
         * @request GET:/listOfValues/hotels/{hotelId}/repBlockCodesParamOn
         */
        getRepBlockCodesParamOnLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepCashiersLOV</p>
         *
         * @tags LOV
         * @name GetRepCashiersLov
         * @summary Fetch List Of Values for Rep Cashiers
         * @request GET:/listOfValues/hotels/{hotelId}/repCashiers
         */
        getRepCashiersLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepContactListLOV</p>
         *
         * @tags LOV
         * @name GetRepContactListLov
         * @summary Fetch List Of Values for Rep Contact List
         * @request GET:/listOfValues/hotels/{hotelId}/repContactList
         */
        getRepContactListLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepCurrenciesLOV</p>
         *
         * @tags LOV
         * @name GetRepCurrenciesLov
         * @summary Fetch List Of Values for Rep Currencies
         * @request GET:/listOfValues/hotels/{hotelId}/repCurrencies
         */
        getRepCurrenciesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepDepartmentsLOV</p>
         *
         * @tags LOV
         * @name GetRepDepartmentsLov
         * @summary Fetch List Of Values for Rep Departments
         * @request GET:/listOfValues/hotels/{hotelId}/repDepartments
         */
        getRepDepartmentsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepFiscalYearsLOV</p>
         *
         * @tags LOV
         * @name GetRepFiscalYearsLov
         * @summary Fetch List Of Values for Rep Fiscal Years
         * @request GET:/listOfValues/hotels/{hotelId}/repFiscalYears
         */
        getRepFiscalYearsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepForeignCurrenciesLOV</p>
         *
         * @tags LOV
         * @name GetRepForeignCurrenciesLov
         * @summary Fetch List Of Values for Rep Foreign Currencies
         * @request GET:/listOfValues/hotels/{hotelId}/repForeignCurrencies
         */
        getRepForeignCurrenciesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepGroupsLOV</p>
         *
         * @tags LOV
         * @name GetRepGroupsLov
         * @summary Fetch List Of Values for Rep Groups
         * @request GET:/listOfValues/hotels/{hotelId}/repGroups
         */
        getRepGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepInventoryItemPoolsLOV</p>
         *
         * @tags LOV
         * @name GetRepInventoryItemPoolsLov
         * @summary Fetch List Of Values for Rep Inventory Item Pools
         * @request GET:/listOfValues/hotels/{hotelId}/repInventoryItemPools
         */
        getRepInventoryItemPoolsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepMarketCodesLOV</p>
         *
         * @tags LOV
         * @name GetRepMarketCodesLov
         * @summary Fetch List Of Values for Rep Market Codes
         * @request GET:/listOfValues/hotels/{hotelId}/repMarketCodes
         */
        getRepMarketCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRoomStatusesLOV</p>
         *
         * @tags LOV
         * @name GetRepRoomStatusesLov
         * @summary Fetch List Of Values for Rep Room Statuses
         * @request GET:/listOfValues/hotels/{hotelId}/repRoomStatuses
         */
        getRepRoomStatusesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetRepRoomTypesLov
         * @summary Fetch List Of Values for Rep Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/repRoomTypes
         */
        getRepRoomTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRoomsLOV</p>
         *
         * @tags LOV
         * @name GetRepRoomsLov
         * @summary Fetch List Of Values for Rep Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/repRooms
         */
        getRepRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepServiceRequestCodesLOV</p>
         *
         * @tags LOV
         * @name GetRepServiceRequestCodesLov
         * @summary Fetch List Of Values for Rep Service Request Codes
         * @request GET:/listOfValues/hotels/{hotelId}/repServiceRequestCodes
         */
        getRepServiceRequestCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepTransactionCodesLOV</p>
         *
         * @tags LOV
         * @name GetRepTransactionCodesLov
         * @summary Fetch List Of Values for Rep Transaction Codes
         * @request GET:/listOfValues/hotels/{hotelId}/repTransactionCodes
         */
        getRepTransactionCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepTraveAgtCalendarYearLOV</p>
         *
         * @tags LOV
         * @name GetRepTraveAgtCalendarYearLov
         * @summary Fetch List Of Values for Rep Trave Agt Calendar Year
         * @request GET:/listOfValues/hotels/{hotelId}/repTraveAgtCalendarYear
         */
        getRepTraveAgtCalendarYearLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationBasedBlocksLOV</p>
         *
         * @tags LOV
         * @name GetReservationBasedBlocksLov
         * @summary Fetch List Of Values for Reservation Based Blocks
         * @request GET:/listOfValues/hotels/{hotelId}/reservationBasedBlocks
         */
        getReservationBasedBlocksLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationBasedProfilesLOV</p>
         *
         * @tags LOV
         * @name GetReservationBasedProfilesLov
         * @summary Fetch List Of Values for Reservation Based Profiles
         * @request GET:/listOfValues/hotels/{hotelId}/reservationBasedProfiles
         */
        getReservationBasedProfilesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationPreferencesLOV</p>
         *
         * @tags LOV
         * @name GetReservationPreferencesLov
         * @summary Fetch List Of Values for Reservation Preferences
         * @request GET:/listOfValues/hotels/{hotelId}/reservationPreferences
         */
        getReservationPreferencesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationStatusesHotelLOV</p>
         *
         * @tags LOV
         * @name GetReservationStatusesHotelLov
         * @summary Fetch List Of Values for Reservation Statuses Hotel
         * @request GET:/listOfValues/hotels/{hotelId}/reservationStatusesHotel
         */
        getReservationStatusesHotelLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortAirportsLOV</p>
         *
         * @tags LOV
         * @name GetResortAirportsLov
         * @summary Fetch List Of Values for Resort Airports
         * @request GET:/listOfValues/hotels/{hotelId}/resortAirports
         */
        getResortAirportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortCROsLOV</p>
         *
         * @tags LOV
         * @name GetResortCrOsLov
         * @summary Fetch List Of Values for Resort CROs
         * @request GET:/listOfValues/hotels/{hotelId}/resortCROs
         */
        getResortCrOsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortGuaranteeCodesLOV</p>
         *
         * @tags LOV
         * @name GetResortGuaranteeCodesLov
         * @summary Fetch List Of Values for Resort Guarantee Codes
         * @request GET:/listOfValues/hotels/{hotelId}/resortGuaranteeCodes
         */
        getResortGuaranteeCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortMarketCodesLOV</p>
         *
         * @tags LOV
         * @name GetResortMarketCodesLov
         * @summary Fetch List Of Values for Resort Market Codes
         * @request GET:/listOfValues/hotels/{hotelId}/resortMarketCodes
         */
        getResortMarketCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getStagedProfilePreferencesLOV</p>
         *
         * @tags LOV
         * @name GetStagedProfilePreferencesLov
         * @summary Fetch List Of Values for Staged Profile Preferences
         * @request GET:/listOfValues/hotels/{hotelId}/resortNameId/{resortNameId}/stagedProfilePreferences
         */
        getStagedProfilePreferencesLov: (resortNameId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortRateClassesLOV</p>
         *
         * @tags LOV
         * @name GetResortRateClassesLov
         * @summary Fetch List Of Values for Resort Rate Classes
         * @request GET:/listOfValues/hotels/{hotelId}/resortRateClasses
         */
        getResortRateClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortRestrictionStatusesLOV</p>
         *
         * @tags LOV
         * @name GetResortRestrictionStatusesLov
         * @summary Fetch List Of Values for Resort Restriction Statuses
         * @request GET:/listOfValues/hotels/{hotelId}/resortRestrictionStatuses
         */
        getResortRestrictionStatusesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortRoomNumbersLOV</p>
         *
         * @tags LOV
         * @name GetResortRoomNumbersLov
         * @summary Fetch List Of Values for Resort Room Numbers
         * @request GET:/listOfValues/hotels/{hotelId}/resortRoomNumbers
         */
        getResortRoomNumbersLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetResortRoomTypesLov
         * @summary Fetch List Of Values for Resort Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/resortRoomTypes
         */
        getResortRoomTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortTransportationLabelsLOV</p>
         *
         * @tags LOV
         * @name GetResortTransportationLabelsLov
         * @summary Fetch List Of Values for Resort Transportation Labels
         * @request GET:/listOfValues/hotels/{hotelId}/resortTransportationLabels
         */
        getResortTransportationLabelsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResourceItemClassesLOV</p>
         *
         * @tags LOV
         * @name GetResourceItemClassesLov
         * @summary Fetch List Of Values for Resource Item Classes
         * @request GET:/listOfValues/hotels/{hotelId}/resourceItemClasses
         */
        getResourceItemClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResvAutoAttachRulesCodesLOV</p>
         *
         * @tags LOV
         * @name GetResvAutoAttachRulesCodesLov
         * @summary Fetch List Of Values for Resv Auto Attach Rules Codes
         * @request GET:/listOfValues/hotels/{hotelId}/resvAutoAttachRulesCodes
         */
        getResvAutoAttachRulesCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResvAutoAttachRulesRuleTypeLOV</p>
         *
         * @tags LOV
         * @name GetResvAutoAttachRulesRuleTypeLov
         * @summary Fetch List Of Values for Resv Auto Attach Rules Rule Type
         * @request GET:/listOfValues/hotels/{hotelId}/resvAutoAttachRulesRuleType
         */
        getResvAutoAttachRulesRuleTypeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResvBasedProfilesLOV</p>
         *
         * @tags LOV
         * @name GetResvBasedProfilesLov
         * @summary Fetch List Of Values for Resv Based Profiles
         * @request GET:/listOfValues/hotels/{hotelId}/resvBasedProfiles
         */
        getResvBasedProfilesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReservationTicketsLOV</p>
         *
         * @tags LOV
         * @name GetReservationTicketsLov
         * @summary Fetch List Of Values for Reservation Tickets
         * @request GET:/listOfValues/hotels/{hotelId}/resvNameId/{resvNameId}/reservationTickets
         */
        getReservationTicketsLov: (resvNameId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResvTransactionDiversionCodesLOV</p>
         *
         * @tags LOV
         * @name GetResvTransactionDiversionCodesLov
         * @summary Fetch List Of Values for Resv Transaction Diversion Codes
         * @request GET:/listOfValues/hotels/{hotelId}/resvNameId/{resvNameId}/resvTransactionDiversionCodes
         */
        getResvTransactionDiversionCodesLov: (resvNameId: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRevenueTypeMappingSpaceLOV</p>
         *
         * @tags LOV
         * @name GetRevenueTypeMappingSpaceLov
         * @summary Fetch List Of Values for Revenue Type Mapping Space
         * @request GET:/listOfValues/hotels/{hotelId}/revenueTypeMappingSpace
         */
        getRevenueTypeMappingSpaceLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRevenueTypeMappingTrxCodesLOV</p>
         *
         * @tags LOV
         * @name GetRevenueTypeMappingTrxCodesLov
         * @summary Fetch List Of Values for Revenue Type Mapping Trx Codes
         * @request GET:/listOfValues/hotels/{hotelId}/revenueTypeMappingTrxCodes
         */
        getRevenueTypeMappingTrxCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUserRolesLOV</p>
         *
         * @tags LOV
         * @name GetUserRolesLov
         * @summary Fetch List Of Values for User Roles
         * @request GET:/listOfValues/hotels/{hotelId}/roleWithDepartment/{roleWithDepartment}/userRoles
         */
        getUserRolesLov: (roleWithDepartment: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAssignRoomsLOV</p>
         *
         * @tags LOV
         * @name GetAssignRoomsLov
         * @summary Fetch List Of Values for Assign Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/assignRooms
         */
        getAssignRoomsLov: (room: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEventSetupStylesLOV</p>
         *
         * @tags LOV
         * @name GetEventSetupStylesLov
         * @summary Fetch List Of Values for Event Setup Styles
         * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/eventSetupStyles
         */
        getEventSetupStylesLov: (room: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomRatesLOV</p>
         *
         * @tags LOV
         * @name GetRoomRatesLov
         * @summary Fetch List Of Values for Room Rates
         * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/roomRates
         */
        getRoomRatesLov: (room: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomClassCategoriesLOV</p>
         *
         * @tags LOV
         * @name GetRoomClassCategoriesLov
         * @summary Fetch List Of Values for Room Class Categories
         * @request GET:/listOfValues/hotels/{hotelId}/roomClassCategories
         */
        getRoomClassCategoriesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomClassesLOV</p>
         *
         * @tags LOV
         * @name GetRoomClassesLov
         * @summary Fetch List Of Values for Room Classes
         * @request GET:/listOfValues/hotels/{hotelId}/roomClasses
         */
        getRoomClassesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomFeaturesLOV</p>
         *
         * @tags LOV
         * @name GetRoomFeaturesLov
         * @summary Fetch List Of Values for Room Features
         * @request GET:/listOfValues/hotels/{hotelId}/roomFeatures
         */
        getRoomFeaturesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomHoldConditionsLOV</p>
         *
         * @tags LOV
         * @name GetRoomHoldConditionsLov
         * @summary Fetch List Of Values for Room Hold Conditions
         * @request GET:/listOfValues/hotels/{hotelId}/roomHoldConditions
         */
        getRoomHoldConditionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomMaintenanceLOV</p>
         *
         * @tags LOV
         * @name GetRoomMaintenanceLov
         * @summary Fetch List Of Values for Room Maintenance
         * @request GET:/listOfValues/hotels/{hotelId}/roomMaintenance
         */
        getRoomMaintenanceLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConnectingSuitesLOV</p>
         *
         * @tags LOV
         * @name GetConnectingSuitesLov
         * @summary Fetch List Of Values for Connecting Suites
         * @request GET:/listOfValues/hotels/{hotelId}/roomNumber/{roomNumber}/connectingSuites
         */
        getConnectingSuitesLov: (roomNumber: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomPoolRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetRoomPoolRoomTypesLov
         * @summary Fetch List Of Values for Room Pool Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/roomPool/{roomPool}/roomPoolRoomTypes
         */
        getRoomPoolRoomTypesLov: (roomPool: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomPoolsLOV</p>
         *
         * @tags LOV
         * @name GetRoomPoolsLov
         * @summary Fetch List Of Values for Room Pools
         * @request GET:/listOfValues/hotels/{hotelId}/roomPools
         */
        getRoomPoolsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomRevenueTrxCodesLOV</p>
         *
         * @tags LOV
         * @name GetRoomRevenueTrxCodesLov
         * @summary Fetch List Of Values for Room Revenue Trx Codes
         * @request GET:/listOfValues/hotels/{hotelId}/roomRevenueTrxCodes
         */
        getRoomRevenueTrxCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomRotationGroupsLOV</p>
         *
         * @tags LOV
         * @name GetRoomRotationGroupsLov
         * @summary Fetch List Of Values for Room Rotation Groups
         * @request GET:/listOfValues/hotels/{hotelId}/roomRotationGroups
         */
        getRoomRotationGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomRotationUnitGradesLOV</p>
         *
         * @tags LOV
         * @name GetRoomRotationUnitGradesLov
         * @summary Fetch List Of Values for Room Rotation Unit Grades
         * @request GET:/listOfValues/hotels/{hotelId}/roomRotationUnitGrades
         */
        getRoomRotationUnitGradesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomSpecialsLOV</p>
         *
         * @tags LOV
         * @name GetRoomSpecialsLov
         * @summary Fetch List Of Values for Room Specials
         * @request GET:/listOfValues/hotels/{hotelId}/roomSpecials
         */
        getRoomSpecialsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomingListHKRoomsLOV</p>
         *
         * @tags LOV
         * @name GetRoomingListHkRoomsLov
         * @summary Fetch List Of Values for Rooming List HKRooms
         * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/arrival/{arrival}/departure/{departure}/roomingListHKRooms
         */
        getRoomingListHkRoomsLov: (departure: string, arrival: string, roomType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAvailableRoomTypeComponentsLOV</p>
         *
         * @tags LOV
         * @name GetAvailableRoomTypeComponentsLov
         * @summary Fetch List Of Values for Available Room Type Components
         * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/availableRoomTypeComponents
         */
        getAvailableRoomTypeComponentsLov: (roomType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAvailableRoomComponentsLOV</p>
         *
         * @tags LOV
         * @name GetAvailableRoomComponentsLov
         * @summary Fetch List Of Values for Available Room Components
         * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/roomNumber/{roomNumber}/availableRoomComponents
         */
        getAvailableRoomComponentsLov: (roomNumber: string, roomType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFacilityTasksRoomTypeLOV</p>
         *
         * @tags LOV
         * @name GetFacilityTasksRoomTypeLov
         * @summary Fetch List Of Values for Facility Tasks Room Type
         * @request GET:/listOfValues/hotels/{hotelId}/roomTypeLabel/{roomTypeLabel}/facilityTasksRoomType
         */
        getFacilityTasksRoomTypeLov: (roomTypeLabel: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomTypePoolLOV</p>
         *
         * @tags LOV
         * @name GetRoomTypePoolLov
         * @summary Fetch List Of Values for Room Type Pool
         * @request GET:/listOfValues/hotels/{hotelId}/roomTypePool
         */
        getRoomTypePoolLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetRoomTypesLov
         * @summary Fetch List Of Values for Room Types
         * @request GET:/listOfValues/hotels/{hotelId}/roomTypes
         */
        getRoomTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomsLOV</p>
         *
         * @tags LOV
         * @name GetRoomsLov
         * @summary Fetch List Of Values for Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/rooms
         */
        getRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomsKeyGenerationLOV</p>
         *
         * @tags LOV
         * @name GetRoomsKeyGenerationLov
         * @summary Fetch List Of Values for Rooms Key Generation
         * @request GET:/listOfValues/hotels/{hotelId}/roomsKeyGeneration
         */
        getRoomsKeyGenerationLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoutingInstructionsLOV</p>
         *
         * @tags LOV
         * @name GetRoutingInstructionsLov
         * @summary Fetch List Of Values for Routing Instructions
         * @request GET:/listOfValues/hotels/{hotelId}/routingInstructions
         */
        getRoutingInstructionsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSalesManagerGoalPeriodLOV</p>
         *
         * @tags LOV
         * @name GetSalesManagerGoalPeriodLov
         * @summary Fetch List Of Values for Sales Manager Goal Period
         * @request GET:/listOfValues/hotels/{hotelId}/salesManagerGoalPeriod
         */
        getSalesManagerGoalPeriodLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getScheduledReportsExportLOV</p>
         *
         * @tags LOV
         * @name GetScheduledReportsExportLov
         * @summary Fetch List Of Values for Scheduled Reports Export
         * @request GET:/listOfValues/hotels/{hotelId}/scheduledReportsExport
         */
        getScheduledReportsExportLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSitePlanSectionTypeLinksLOV</p>
         *
         * @tags LOV
         * @name GetSitePlanSectionTypeLinksLov
         * @summary Fetch List Of Values for Site Plan Section Type Links
         * @request GET:/listOfValues/hotels/{hotelId}/sectionType/{sectionType}/sitePlanSectionTypeLinks
         */
        getSitePlanSectionTypeLinksLov: (sectionType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getForeignCurrenciesLOV</p>
         *
         * @tags LOV
         * @name GetForeignCurrenciesLov
         * @summary Fetch List Of Values for Foreign Currencies
         * @request GET:/listOfValues/hotels/{hotelId}/sell/{sell}/exchangeType/{exchangeType}/foreignCurrencies
         */
        getForeignCurrenciesLov: (exchangeType: string, sell: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInventoryItemsLOV</p>
         *
         * @tags LOV
         * @name GetInventoryItemsLov
         * @summary Fetch List Of Values for Inventory Items
         * @request GET:/listOfValues/hotels/{hotelId}/sellInReservation/{sellInReservation}/sellInEvent/{sellInEvent}/inventoryItems
         */
        getInventoryItemsLov: (sellInEvent: string, sellInReservation: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getResortInventoryItemsLOV</p>
         *
         * @tags LOV
         * @name GetResortInventoryItemsLov
         * @summary Fetch List Of Values for Resort Inventory Items
         * @request GET:/listOfValues/hotels/{hotelId}/sellInReservation/{sellInReservation}/sellInEvent/{sellInEvent}/resortInventoryItems
         */
        getResortInventoryItemsLov: (sellInEvent: string, sellInReservation: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getServiceRequestCodesLOV</p>
         *
         * @tags LOV
         * @name GetServiceRequestCodesLov
         * @summary Fetch List Of Values for Service Request Codes
         * @request GET:/listOfValues/hotels/{hotelId}/serviceRequestCodes
         */
        getServiceRequestCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSetupStylesLOV</p>
         *
         * @tags LOV
         * @name GetSetupStylesLov
         * @summary Fetch List Of Values for Setup Styles
         * @request GET:/listOfValues/hotels/{hotelId}/setupStyles
         */
        getSetupStylesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getShiftReportsLOV</p>
         *
         * @tags LOV
         * @name GetShiftReportsLov
         * @summary Fetch List Of Values for Shift Reports
         * @request GET:/listOfValues/hotels/{hotelId}/shiftReports
         */
        getShiftReportsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSitePlansLOV</p>
         *
         * @tags LOV
         * @name GetSitePlansLov
         * @summary Fetch List Of Values for Site Plans
         * @request GET:/listOfValues/hotels/{hotelId}/siteType/{siteType}/sitePlans
         */
        getSitePlansLov: (siteType: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringSetupStylesLOV</p>
         *
         * @tags LOV
         * @name GetCateringSetupStylesLov
         * @summary Fetch List Of Values for Catering Setup Styles
         * @request GET:/listOfValues/hotels/{hotelId}/space/{space}/cateringSetupStyles
         */
        getCateringSetupStylesLov: (space: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEventRateCodeLOV</p>
         *
         * @tags LOV
         * @name GetEventRateCodeLov
         * @summary Fetch List Of Values for Event Rate Code
         * @request GET:/listOfValues/hotels/{hotelId}/space/{space}/eventRateCode
         */
        getEventRateCodeLov: (space: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSpacesLOV</p>
         *
         * @tags LOV
         * @name GetSpacesLov
         * @summary Fetch List Of Values for Spaces
         * @request GET:/listOfValues/hotels/{hotelId}/spaces
         */
        getSpacesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSpecialRequestsLOV</p>
         *
         * @tags LOV
         * @name GetSpecialRequestsLov
         * @summary Fetch List Of Values for Special Requests
         * @request GET:/listOfValues/hotels/{hotelId}/specialRequests
         */
        getSpecialRequestsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSpecialsLOV</p>
         *
         * @tags LOV
         * @name GetSpecialsLov
         * @summary Fetch List Of Values for Specials
         * @request GET:/listOfValues/hotels/{hotelId}/specials
         */
        getSpecialsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getStoredValueRedeemTrxLOV</p>
         *
         * @tags LOV
         * @name GetStoredValueRedeemTrxLov
         * @summary Fetch List Of Values for Stored Value Redeem Trx
         * @request GET:/listOfValues/hotels/{hotelId}/storedValueRedeemTrx
         */
        getStoredValueRedeemTrxLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSummaryRefreshLogLOV</p>
         *
         * @tags LOV
         * @name GetSummaryRefreshLogLov
         * @summary Fetch List Of Values for Summary Refresh Log
         * @request GET:/listOfValues/hotels/{hotelId}/summaryRefreshLog
         */
        getSummaryRefreshLogLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSubBlockLOV</p>
         *
         * @tags LOV
         * @name GetSubBlockLov
         * @summary Fetch List Of Values for Sub Block
         * @request GET:/listOfValues/hotels/{hotelId}/superBlock/{superBlock}/subBlock
         */
        getSubBlockLov: (superBlock: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSynchronizeRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetSynchronizeRateCodesLov
         * @summary Fetch List Of Values for Synchronize Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/synchronizeRateCodes
         */
        getSynchronizeRateCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaskSheetRoomsLOV</p>
         *
         * @tags LOV
         * @name GetTaskSheetRoomsLov
         * @summary Fetch List Of Values for Task Sheet Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/taskCode/{taskCode}/taskSheetNo/{taskSheetNo}/taskSheetRooms
         */
        getTaskSheetRoomsLov: (taskSheetNo: string, taskCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaxTransactionCodeLOV</p>
         *
         * @tags LOV
         * @name GetTaxTransactionCodeLov
         * @summary Fetch List Of Values for Tax Transaction Code
         * @request GET:/listOfValues/hotels/{hotelId}/taxCode/{taxCode}/taxTransactionCode
         */
        getTaxTransactionCodeLov: (taxCode: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaxTypesLOV</p>
         *
         * @tags LOV
         * @name GetTaxTypesLov
         * @summary Fetch List Of Values for Tax Types
         * @request GET:/listOfValues/hotels/{hotelId}/taxTypes
         */
        getTaxTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTelephoneCategoryLOV</p>
         *
         * @tags LOV
         * @name GetTelephoneCategoryLov
         * @summary Fetch List Of Values for Telephone Category
         * @request GET:/listOfValues/hotels/{hotelId}/telephoneCategory
         */
        getTelephoneCategoryLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConfigDynamicBaseRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetConfigDynamicBaseRatePlansLov
         * @summary Fetch List Of Values for Config Dynamic Base Rate Plans
         * @request GET:/listOfValues/hotels/{hotelId}/tiered/{tiered}/currentRateCode/{currentRateCode}/configDynamicBaseRatePlans
         */
        getConfigDynamicBaseRatePlansLov: (currentRateCode: string, tiered: string, hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionAdjustmentReasonCodesLOV</p>
         *
         * @tags LOV
         * @name GetTransactionAdjustmentReasonCodesLov
         * @summary Fetch List Of Values for Transaction Adjustment Reason Codes
         * @request GET:/listOfValues/hotels/{hotelId}/transactionAdjustmentReasonCodes
         */
        getTransactionAdjustmentReasonCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionCodesLOV</p>
         *
         * @tags LOV
         * @name GetTransactionCodesLov
         * @summary Fetch List Of Values for Transaction Codes
         * @request GET:/listOfValues/hotels/{hotelId}/transactionCodes
         */
        getTransactionCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionCodesConsumptionLOV</p>
         *
         * @tags LOV
         * @name GetTransactionCodesConsumptionLov
         * @summary Fetch List Of Values for Transaction Codes Consumption
         * @request GET:/listOfValues/hotels/{hotelId}/transactionCodesConsumption
         */
        getTransactionCodesConsumptionLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionCodesPaymentLOV</p>
         *
         * @tags LOV
         * @name GetTransactionCodesPaymentLov
         * @summary Fetch List Of Values for Transaction Codes Payment
         * @request GET:/listOfValues/hotels/{hotelId}/transactionCodesPayment
         */
        getTransactionCodesPaymentLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionDeleteReasonCodesLOV</p>
         *
         * @tags LOV
         * @name GetTransactionDeleteReasonCodesLov
         * @summary Fetch List Of Values for Transaction Delete Reason Codes
         * @request GET:/listOfValues/hotels/{hotelId}/transactionDeleteReasonCodes
         */
        getTransactionDeleteReasonCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionDiversionRuleRoomsLOV</p>
         *
         * @tags LOV
         * @name GetTransactionDiversionRuleRoomsLov
         * @summary Fetch List Of Values for Transaction Diversion Rule Rooms
         * @request GET:/listOfValues/hotels/{hotelId}/transactionDiversionRuleRooms
         */
        getTransactionDiversionRuleRoomsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionGroupsLOV</p>
         *
         * @tags LOV
         * @name GetTransactionGroupsLov
         * @summary Fetch List Of Values for Transaction Groups
         * @request GET:/listOfValues/hotels/{hotelId}/transactionGroups
         */
        getTransactionGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransactionSubgroupsLOV</p>
         *
         * @tags LOV
         * @name GetTransactionSubgroupsLov
         * @summary Fetch List Of Values for Transaction Subgroups
         * @request GET:/listOfValues/hotels/{hotelId}/transactionSubgroups
         */
        getTransactionSubgroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransportTypesLOV</p>
         *
         * @tags LOV
         * @name GetTransportTypesLov
         * @summary Fetch List Of Values for Transport Types
         * @request GET:/listOfValues/hotels/{hotelId}/transportTypes
         */
        getTransportTypesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTransportTypesHotelLOV</p>
         *
         * @tags LOV
         * @name GetTransportTypesHotelLov
         * @summary Fetch List Of Values for Transport Types Hotel
         * @request GET:/listOfValues/hotels/{hotelId}/transportTypesHotel
         */
        getTransportTypesHotelLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTravelAgentSourceLOV</p>
         *
         * @tags LOV
         * @name GetTravelAgentSourceLov
         * @summary Fetch List Of Values for Travel Agent Source
         * @request GET:/listOfValues/hotels/{hotelId}/travelAgentSource
         */
        getTravelAgentSourceLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTravelAgentSourceResvLOV</p>
         *
         * @tags LOV
         * @name GetTravelAgentSourceResvLov
         * @summary Fetch List Of Values for Travel Agent Source Resv
         * @request GET:/listOfValues/hotels/{hotelId}/travelAgentSourceResv
         */
        getTravelAgentSourceResvLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTurnawayCodesLOV</p>
         *
         * @tags LOV
         * @name GetTurnawayCodesLov
         * @summary Fetch List Of Values for Turnaway Codes
         * @request GET:/listOfValues/hotels/{hotelId}/turnawayCodes
         */
        getTurnawayCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellDefaultTrxCodeLOV</p>
         *
         * @tags LOV
         * @name GetUpsellDefaultTrxCodeLov
         * @summary Fetch List Of Values for Upsell Default Trx Code
         * @request GET:/listOfValues/hotels/{hotelId}/upsellDefaultTrxCode
         */
        getUpsellDefaultTrxCodeLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellFromRoomClassEditLOV</p>
         *
         * @tags LOV
         * @name GetUpsellFromRoomClassEditLov
         * @summary Fetch List Of Values for Upsell From Room Class Edit
         * @request GET:/listOfValues/hotels/{hotelId}/upsellFromRoomClassEdit
         */
        getUpsellFromRoomClassEditLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellFromRoomTypeEditLOV</p>
         *
         * @tags LOV
         * @name GetUpsellFromRoomTypeEditLov
         * @summary Fetch List Of Values for Upsell From Room Type Edit
         * @request GET:/listOfValues/hotels/{hotelId}/upsellFromRoomTypeEdit
         */
        getUpsellFromRoomTypeEditLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellHierarchyLevelsLOV</p>
         *
         * @tags LOV
         * @name GetUpsellHierarchyLevelsLov
         * @summary Fetch List Of Values for Upsell Hierarchy Levels
         * @request GET:/listOfValues/hotels/{hotelId}/upsellHierarchyLevels
         */
        getUpsellHierarchyLevelsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellRateCategoriesEditLOV</p>
         *
         * @tags LOV
         * @name GetUpsellRateCategoriesEditLov
         * @summary Fetch List Of Values for Upsell Rate Categories Edit
         * @request GET:/listOfValues/hotels/{hotelId}/upsellRateCategoriesEdit
         */
        getUpsellRateCategoriesEditLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellRateCodesLOV</p>
         *
         * @tags LOV
         * @name GetUpsellRateCodesLov
         * @summary Fetch List Of Values for Upsell Rate Codes
         * @request GET:/listOfValues/hotels/{hotelId}/upsellRateCodes
         */
        getUpsellRateCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellRoomClassViewLOV</p>
         *
         * @tags LOV
         * @name GetUpsellRoomClassViewLov
         * @summary Fetch List Of Values for Upsell Room Class View
         * @request GET:/listOfValues/hotels/{hotelId}/upsellRoomClassView
         */
        getUpsellRoomClassViewLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellRoomTypeViewLOV</p>
         *
         * @tags LOV
         * @name GetUpsellRoomTypeViewLov
         * @summary Fetch List Of Values for Upsell Room Type View
         * @request GET:/listOfValues/hotels/{hotelId}/upsellRoomTypeView
         */
        getUpsellRoomTypeViewLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellRuleLOV</p>
         *
         * @tags LOV
         * @name GetUpsellRuleLov
         * @summary Fetch List Of Values for Upsell Rule
         * @request GET:/listOfValues/hotels/{hotelId}/upsellRule
         */
        getUpsellRuleLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellTrxCodesLOV</p>
         *
         * @tags LOV
         * @name GetUpsellTrxCodesLov
         * @summary Fetch List Of Values for Upsell Trx Codes
         * @request GET:/listOfValues/hotels/{hotelId}/upsellTrxCodes
         */
        getUpsellTrxCodesLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUserLogActivityGroupsLOV</p>
         *
         * @tags LOV
         * @name GetUserLogActivityGroupsLov
         * @summary Fetch List Of Values for User Log Activity Groups
         * @request GET:/listOfValues/hotels/{hotelId}/userLogActivityGroups
         */
        getUserLogActivityGroupsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getYearSetupLOV</p>
         *
         * @tags LOV
         * @name GetYearSetupLov
         * @summary Fetch List Of Values for Year Setup
         * @request GET:/listOfValues/hotels/{hotelId}/yearSetup
         */
        getYearSetupLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getYieldMarketsLOV</p>
         *
         * @tags LOV
         * @name GetYieldMarketsLov
         * @summary Fetch List Of Values for Yield Markets
         * @request GET:/listOfValues/hotels/{hotelId}/yieldMarkets
         */
        getYieldMarketsLov: (hotelId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomReservationStatusLOV</p>
         *
         * @tags LOV
         * @name GetRoomReservationStatusLov
         * @summary Fetch List Of Values for Room Reservation Status
         * @request GET:/listOfValues/includeDayUse/{includeDayUse}/roomReservationStatus
         */
        getRoomReservationStatusLov: (hotelId: string, includeDayUse: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplatePreferencesLOV</p>
         *
         * @tags LOV
         * @name GetTemplatePreferencesLov
         * @summary Fetch List Of Values for Template Preferences
         * @request GET:/listOfValues/includeGlobals/{includeGlobals}/templatePreferences
         */
        getTemplatePreferencesLov: (hotelId: string, includeGlobals: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateMarketCodesLOV</p>
         *
         * @tags LOV
         * @name GetTemplateMarketCodesLov
         * @summary Fetch List Of Values for Template Market Codes
         * @request GET:/listOfValues/includeInactive/{includeInactive}/templateMarketCodes
         */
        getTemplateMarketCodesLov: (hotelId: string, includeInactive: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateMarketGroupsLOV</p>
         *
         * @tags LOV
         * @name GetTemplateMarketGroupsLov
         * @summary Fetch List Of Values for Template Market Groups
         * @request GET:/listOfValues/includeInactive/{includeInactive}/templateMarketGroups
         */
        getTemplateMarketGroupsLov: (hotelId: string, includeInactive: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateRoomClassesLOV</p>
         *
         * @tags LOV
         * @name GetTemplateRoomClassesLov
         * @summary Fetch List Of Values for Template Room Classes
         * @request GET:/listOfValues/includeInactive/{includeInactive}/templateRoomClasses
         */
        getTemplateRoomClassesLov: (hotelId: string, includeInactive: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateSourceCodesLOV</p>
         *
         * @tags LOV
         * @name GetTemplateSourceCodesLov
         * @summary Fetch List Of Values for Template Source Codes
         * @request GET:/listOfValues/includeInactive/{includeInactive}/templateSourceCodes
         */
        getTemplateSourceCodesLov: (hotelId: string, includeInactive: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateSourceGroupsLOV</p>
         *
         * @tags LOV
         * @name GetTemplateSourceGroupsLov
         * @summary Fetch List Of Values for Template Source Groups
         * @request GET:/listOfValues/includeInactive/{includeInactive}/templateSourceGroups
         */
        getTemplateSourceGroupsLov: (hotelId: string, includeInactive: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAllRevenueTypesLOV</p>
         *
         * @tags LOV
         * @name GetAllRevenueTypesLov
         * @summary Fetch List Of Values for All Revenue Types
         * @request GET:/listOfValues/interfaceId/{interfaceId}/allRevenueTypes
         */
        getAllRevenueTypesLov: (hotelId: string, interfaceId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOXIResortsLOV</p>
         *
         * @tags LOV
         * @name GetOxiResortsLov
         * @summary Fetch List Of Values for OXIResorts
         * @request GET:/listOfValues/interfaceId/{interfaceId}/oxiResorts
         */
        getOxiResortsLov: (hotelId: string, interfaceId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExternalDatabaseAvailableResortsLOV</p>
         *
         * @tags LOV
         * @name GetExternalDatabaseAvailableResortsLov
         * @summary Fetch List Of Values for External Database Available Resorts
         * @request GET:/listOfValues/interfaceType/{interfaceType}/databaseId/{databaseId}/externalDatabaseAvailableResorts
         */
        getExternalDatabaseAvailableResortsLov: (hotelId: string, databaseId: string, interfaceType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getChannelParametersLOV</p>
         *
         * @tags LOV
         * @name GetChannelParametersLov
         * @summary Fetch List Of Values for Channel Parameters
         * @request GET:/listOfValues/levelCode/{levelCode}/levelType/{levelType}/settingName/{settingName}/channelCode/{channelCode}/channelParameters
         */
        getChannelParametersLov: (hotelId: string, channelCode: string, settingName: string, levelType: string, levelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getApplicationSettingsLOV</p>
         *
         * @tags LOV
         * @name GetApplicationSettingsLov
         * @summary Fetch List Of Values for Application Settings
         * @request GET:/listOfValues/levelCode/{levelCode}/settingName/{settingName}/applicationSettings
         */
        getApplicationSettingsLov: (hotelId: string, settingName: string, levelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTaskSheetDeptLOV</p>
         *
         * @tags LOV
         * @name GetTaskSheetDeptLov
         * @summary Fetch List Of Values for Task Sheet Dept
         * @request GET:/listOfValues/levelCode/{levelCode}/taskSheetDept
         */
        getTaskSheetDeptLov: (hotelId: string, levelCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDistributionTemplatesLOV</p>
         *
         * @tags LOV
         * @name GetDistributionTemplatesLov
         * @summary Fetch List Of Values for Distribution Templates
         * @request GET:/listOfValues/locationType/{locationType}/location/{location}/distributionTemplates
         */
        getDistributionTemplatesLov: (hotelId: string, location: string, locationType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipStatementBatchListLOV</p>
         *
         * @tags LOV
         * @name GetMembershipStatementBatchListLov
         * @summary Fetch List Of Values for Membership Statement Batch List
         * @request GET:/listOfValues/membershipId/{membershipId}/membershipStatementBatchList
         */
        getMembershipStatementBatchListLov: (hotelId: string, membershipId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipTotalPointsAvailableLOV</p>
         *
         * @tags LOV
         * @name GetMembershipTotalPointsAvailableLov
         * @summary Fetch List Of Values for Membership Total Points Available
         * @request GET:/listOfValues/membershipId/{membershipId}/membershipTotalPointsAvailable
         */
        getMembershipTotalPointsAvailableLov: (hotelId: string, membershipId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipCardFeeAmountLOV</p>
         *
         * @tags LOV
         * @name GetMembershipCardFeeAmountLov
         * @summary Fetch List Of Values for Membership Card Fee Amount
         * @request GET:/listOfValues/membershipLevel/{membershipLevel}/membershipCardFeeAmount
         */
        getMembershipCardFeeAmountLov: (hotelId: string, membershipLevel: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipMaxDowngradeLevelLOV</p>
         *
         * @tags LOV
         * @name GetMembershipMaxDowngradeLevelLov
         * @summary Fetch List Of Values for Membership Max Downgrade Level
         * @request GET:/listOfValues/membershipLevelRank/{membershipLevelRank}/membershipType/{membershipType}/membershipMaxDowngradeLevel
         */
        getMembershipMaxDowngradeLevelLov: (hotelId: string, membershipType: string, membershipLevelRank: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipBenefitProgramLOV</p>
         *
         * @tags LOV
         * @name GetMembershipBenefitProgramLov
         * @summary Fetch List Of Values for Membership Benefit Program
         * @request GET:/listOfValues/membershipType/{membershipType}/membershipBenefitProgram
         */
        getMembershipBenefitProgramLov: (hotelId: string, membershipType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipBenefitsLOV</p>
         *
         * @tags LOV
         * @name GetMembershipBenefitsLov
         * @summary Fetch List Of Values for Membership Benefits
         * @request GET:/listOfValues/membershipType/{membershipType}/membershipBenefits
         */
        getMembershipBenefitsLov: (hotelId: string, membershipType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipPointsRuleCodesLOV</p>
         *
         * @tags LOV
         * @name GetMembershipPointsRuleCodesLov
         * @summary Fetch List Of Values for Membership Points Rule Codes
         * @request GET:/listOfValues/membershipType/{membershipType}/membershipPointsRuleCodes
         */
        getMembershipPointsRuleCodesLov: (hotelId: string, membershipType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUpsellMembershipLevelsOnlyLOV</p>
         *
         * @tags LOV
         * @name GetUpsellMembershipLevelsOnlyLov
         * @summary Fetch List Of Values for Upsell Membership Levels Only
         * @request GET:/listOfValues/membershipType/{membershipType}/upsellMembershipLevelsOnly
         */
        getUpsellMembershipLevelsOnlyLov: (hotelId: string, membershipType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMenuLOV</p>
         *
         * @tags LOV
         * @name GetMenuLov
         * @summary Fetch List Of Values for Menu
         * @request GET:/listOfValues/menuClassId/{menuClassId}/menu
         */
        getMenuLov: (hotelId: string, menuClassId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFolioGroupingTransactionCodesLOV</p>
         *
         * @tags LOV
         * @name GetFolioGroupingTransactionCodesLov
         * @summary Fetch List Of Values for Folio Grouping Transaction Codes
         * @request GET:/listOfValues/mode/{mode}/folioGroupingTransactionCodes
         */
        getFolioGroupingTransactionCodesLov: (hotelId: string, mode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getActionTypesLOV</p>
         *
         * @tags LOV
         * @name GetActionTypesLov
         * @summary Fetch List Of Values for Action Types
         * @request GET:/listOfValues/module/{module}/actionTypes
         */
        getActionTypesLov: (hotelId: string, module: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getReportsGenericLOV</p>
         *
         * @tags LOV
         * @name GetReportsGenericLov
         * @summary Fetch List Of Values for Reports Generic
         * @request GET:/listOfValues/moduleId/{moduleId}/parameterName/{parameter}/reportsGeneric
         */
        getReportsGenericLov: (hotelId: string, parameter: string, moduleId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getConfigReportsLOV</p>
         *
         * @tags LOV
         * @name GetConfigReportsLov
         * @summary Fetch List Of Values for Config Reports
         * @request GET:/listOfValues/moduleName/{moduleName}/configReports
         */
        getConfigReportsLov: (hotelId: string, moduleName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUDFMappingsLOV</p>
         *
         * @tags LOV
         * @name GetUdfMappingsLov
         * @summary Fetch List Of Values for UDFMappings
         * @request GET:/listOfValues/moduleName/{moduleName}/udfMappings
         */
        getUdfMappingsLov: (hotelId: string, moduleName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileEnrollmentMatchCriteriaLOV</p>
         *
         * @tags LOV
         * @name GetProfileEnrollmentMatchCriteriaLov
         * @summary Fetch List Of Values for Profile Enrollment Match Criteria
         * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentMatchCriteria
         */
        getProfileEnrollmentMatchCriteriaLov: (hotelId: string, nameType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileEnrollmentRuleDoNotMergeCriteriaLOV</p>
         *
         * @tags LOV
         * @name GetProfileEnrollmentRuleDoNotMergeCriteriaLov
         * @summary Fetch List Of Values for Profile Enrollment Rule Do Not Merge Criteria
         * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentRuleDoNotMergeCriteria
         */
        getProfileEnrollmentRuleDoNotMergeCriteriaLov: (hotelId: string, nameType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileEnrollmentRuleFilterCriteriaLOV</p>
         *
         * @tags LOV
         * @name GetProfileEnrollmentRuleFilterCriteriaLov
         * @summary Fetch List Of Values for Profile Enrollment Rule Filter Criteria
         * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentRuleFilterCriteria
         */
        getProfileEnrollmentRuleFilterCriteriaLov: (hotelId: string, nameType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringEventStatusLOV</p>
         *
         * @tags LOV
         * @name GetCateringEventStatusLov
         * @summary Fetch List Of Values for Catering Event Status
         * @request GET:/listOfValues/newEvent/{newEvent}/waitList/{waitList}/cateringEventStatus
         */
        getCateringEventStatusLov: (hotelId: string, waitList: string, newEvent: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAutoNumberGeneratorLOV</p>
         *
         * @tags LOV
         * @name GetAutoNumberGeneratorLov
         * @summary Fetch List Of Values for Auto Number Generator
         * @request GET:/listOfValues/number/{number}/autoNumberGenerator
         */
        getAutoNumberGeneratorLov: (hotelId: string, number: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileNameValidationsTypeLOV</p>
         *
         * @tags LOV
         * @name GetProfileNameValidationsTypeLov
         * @summary Fetch List Of Values for Profile Name Validations Type
         * @request GET:/listOfValues/operaParam/{operaParam}/profileNameValidationsType
         */
        getProfileNameValidationsTypeLov: (hotelId: string, operaParam: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getServiceNameLOV</p>
         *
         * @tags LOV
         * @name GetServiceNameLov
         * @summary Fetch List Of Values for Service Name
         * @request GET:/listOfValues/outboundType/{outboundType}/protocol/{protocol}/outboundServiceNames
         */
        getServiceNameLov: (hotelId: string, protocol: string, outboundType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getParameterActiveUnderChainLOV</p>
         *
         * @tags LOV
         * @name GetParameterActiveUnderChainLov
         * @summary Fetch List Of Values for Parameter Active Under Chain
         * @request GET:/listOfValues/parameterName/{parameter}/chainCode/{chainCode}/parameterActiveUnderChain
         */
        getParameterActiveUnderChainLov: (hotelId: string, chainCode: string, parameter: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepCalendarYearsLOV</p>
         *
         * @tags LOV
         * @name GetRepCalendarYearsLov
         * @summary Fetch List Of Values for Rep Calendar Years
         * @request GET:/listOfValues/period/{period}/repCalendarYears
         */
        getRepCalendarYearsLov: (hotelId: string, period: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringPackageRevenueEventTypeLOV</p>
         *
         * @tags LOV
         * @name GetCateringPackageRevenueEventTypeLov
         * @summary Fetch List Of Values for Catering Package Revenue Event Type
         * @request GET:/listOfValues/pkgId/{pkgId}/cateringPackageRevenueEventType
         */
        getCateringPackageRevenueEventTypeLov: (hotelId: string, pkgId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringPackageRevenueConfigEventTypeLOV</p>
         *
         * @tags LOV
         * @name GetCateringPackageRevenueConfigEventTypeLov
         * @summary Fetch List Of Values for Catering Package Revenue Config Event Type
         * @request GET:/listOfValues/pkgLinkId/{pkgLinkId}/cateringPackageRevenueConfigEventType
         */
        getCateringPackageRevenueConfigEventTypeLov: (hotelId: string, pkgLinkId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDepositCancelRulesMultiHotelLOV</p>
         *
         * @tags LOV
         * @name GetDepositCancelRulesMultiHotelLov
         * @summary Fetch List Of Values for Deposit Cancel Rules Multi Hotel
         * @request GET:/listOfValues/policyType/{policyType}/depositCancelRulesMultiHotel
         */
        getDepositCancelRulesMultiHotelLov: (hotelId: string, policyType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplatePolicyCodesLOV</p>
         *
         * @tags LOV
         * @name GetTemplatePolicyCodesLov
         * @summary Fetch List Of Values for Template Policy Codes
         * @request GET:/listOfValues/policyType/{policyType}/templatePolicyCodes
         */
        getTemplatePolicyCodesLov: (hotelId: string, policyType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPreferencesMultiHotelsLOV</p>
         *
         * @tags LOV
         * @name GetPreferencesMultiHotelsLov
         * @summary Fetch List Of Values for Preferences Multi Hotels
         * @request GET:/listOfValues/preferenceGroup/{preferenceGroup}/preferencesMultiHotels
         */
        getPreferencesMultiHotelsLov: (hotelId: string, preferenceGroup: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getClaimMembershipDetailsLOV</p>
         *
         * @tags LOV
         * @name GetClaimMembershipDetailsLov
         * @summary Fetch List Of Values for Claim Membership Details
         * @request GET:/listOfValues/profiles/{profileId}/claimMembershipDetails
         */
        getClaimMembershipDetailsLov: (hotelId: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getHotelsForARProfileLOV</p>
         *
         * @tags LOV
         * @name GetHotelsForArProfileLov
         * @summary Fetch List Of Values for Hotels For ARProfile
         * @request GET:/listOfValues/profiles/{profileId}/hotelsForARProfile
         */
        getHotelsForArProfileLov: (hotelId: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMembershipTransferPointsLOV</p>
         *
         * @tags LOV
         * @name GetMembershipTransferPointsLov
         * @summary Fetch List Of Values for Membership Transfer Points
         * @request GET:/listOfValues/profiles/{profileId}/membershipTransferPoints
         */
        getMembershipTransferPointsLov: (hotelId: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getNegotiatedRateHotelsLOV</p>
         *
         * @tags LOV
         * @name GetNegotiatedRateHotelsLov
         * @summary Fetch List Of Values for Negotiated Rate Hotels
         * @request GET:/listOfValues/profiles/{profileId}/negotiatedRateHotels
         */
        getNegotiatedRateHotelsLov: (hotelId: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileCommunicationsLOV</p>
         *
         * @tags LOV
         * @name GetProfileCommunicationsLov
         * @summary Fetch List Of Values for Profile Communications
         * @request GET:/listOfValues/profiles/{profileId}/profileCommunications
         */
        getProfileCommunicationsLov: (hotelId: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileHotelsLOV</p>
         *
         * @tags LOV
         * @name GetProfileHotelsLov
         * @summary Fetch List Of Values for Profile Hotels
         * @request GET:/listOfValues/profiles/{profileId}/taxTypeCheck/{taxTypeCheck}/profileHotels
         */
        getProfileHotelsLov: (hotelId: string, taxTypeCheck: string, profileId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomHierarchyClassesCopyLOV</p>
         *
         * @tags LOV
         * @name GetRoomHierarchyClassesCopyLov
         * @summary Fetch List Of Values for Room Hierarchy Classes Copy
         * @request GET:/listOfValues/property/{property}/roomHierarchyClassesCopy
         */
        getRoomHierarchyClassesCopyLov: (hotelId: string, property: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomHierarchyRoomClassesLOV</p>
         *
         * @tags LOV
         * @name GetRoomHierarchyRoomClassesLov
         * @summary Fetch List Of Values for Room Hierarchy Room Classes
         * @request GET:/listOfValues/property/{property}/roomHierarchyRoomClasses
         */
        getRoomHierarchyRoomClassesLov: (hotelId: string, property: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomHierarchyRoomTypesLOV</p>
         *
         * @tags LOV
         * @name GetRoomHierarchyRoomTypesLov
         * @summary Fetch List Of Values for Room Hierarchy Room Types
         * @request GET:/listOfValues/property/{property}/roomHierarchyRoomTypes
         */
        getRoomHierarchyRoomTypesLov: (hotelId: string, property: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRoomHierarchyTypesCopyLOV</p>
         *
         * @tags LOV
         * @name GetRoomHierarchyTypesCopyLov
         * @summary Fetch List Of Values for Room Hierarchy Types Copy
         * @request GET:/listOfValues/property/{property}/roomHierarchyTypesCopy
         */
        getRoomHierarchyTypesCopyLov: (hotelId: string, property: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepRatePlansLOV</p>
         *
         * @tags LOV
         * @name GetRepRatePlansLov
         * @summary Fetch List Of Values for Rep Rate Plans
         * @request GET:/listOfValues/propertyList/{propertyList}/repRatePlans
         */
        getRepRatePlansLov: (hotelId: string, propertyList: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCateringPackageCodesLOV</p>
         *
         * @tags LOV
         * @name GetCateringPackageCodesLov
         * @summary Fetch List Of Values for Catering Package Codes
         * @request GET:/listOfValues/radioType/{radioType}/hotels/{hotelId}/cateringPackageCodes
         */
        getCateringPackageCodesLov: (hotelId: string, radioType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getNegotiatedRatesHotelsLOV</p>
         *
         * @tags LOV
         * @name GetNegotiatedRatesHotelsLov
         * @summary Fetch List Of Values for Negotiated Rates Hotels
         * @request GET:/listOfValues/rateCode/{rateCode}/profiles/{profileId}/negotiatedRatesHotels
         */
        getNegotiatedRatesHotelsLov: (hotelId: string, profileId: string, rateCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRolesForLevelLOV</p>
         *
         * @tags LOV
         * @name GetRolesForLevelLov
         * @summary Fetch List Of Values for Roles For Level
         * @request GET:/listOfValues/roleLevel/{roleLevel}/levelCode/{levelCode}/rolesForLevel
         */
        getRolesForLevelLov: (hotelId: string, levelCode: string, roleLevel: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getOrganizationsLOV</p>
         *
         * @tags LOV
         * @name GetOrganizationsLov
         * @summary Fetch List Of Values for Organizations
         * @request GET:/listOfValues/roles/{roles}/chainCode/{chainCode}/actionTask/{actionTask}/organizations
         */
        getOrganizationsLov: (hotelId: string, actionTask: string, chainCode: string, roles: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAddressFormatElementsLOV</p>
         *
         * @tags LOV
         * @name GetAddressFormatElementsLov
         * @summary Fetch List Of Values for Address Format Elements
         * @request GET:/listOfValues/salesFormat/{salesFormat}/addressFormatElements
         */
        getAddressFormatElementsLov: (hotelId: string, salesFormat: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getShiftReportsNoParamLOV</p>
         *
         * @tags LOV
         * @name GetShiftReportsNoParamLov
         * @summary Fetch List Of Values for Shift Reports No Param
         * @request GET:/listOfValues/shiftGroupId/{shiftGroupId}/shiftReportsNoParam
         */
        getShiftReportsNoParamLov: (hotelId: string, shiftGroupId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getSitePlanSectionTypesLOV</p>
         *
         * @tags LOV
         * @name GetSitePlanSectionTypesLov
         * @summary Fetch List Of Values for Site Plan Section Types
         * @request GET:/listOfValues/siteType/{siteType}/sitePlanSectionTypes
         */
        getSitePlanSectionTypesLov: (hotelId: string, siteType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGlobalAlertFieldQueryLOV</p>
         *
         * @tags LOV
         * @name GetGlobalAlertFieldQueryLov
         * @summary Fetch List Of Values for Global Alert Field Query
         * @request GET:/listOfValues/sourceId/{sourceId}/globalAlertFieldQuery
         */
        getGlobalAlertFieldQueryLov: (hotelId: string, sourceId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getGlobalAlertOperatorLOV</p>
         *
         * @tags LOV
         * @name GetGlobalAlertOperatorLov
         * @summary Fetch List Of Values for Global Alert Operator
         * @request GET:/listOfValues/sourceIdIn/{sourceIdIn}/fieldType/{fieldType}/fieldName/{fieldName}/tableName/{tableName}/globalAlertOperator
         */
        getGlobalAlertOperatorLov: (hotelId: string, tableName: string, fieldName: string, fieldType: string, sourceIdIn: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getMailGenericLOV</p>
         *
         * @tags LOV
         * @name GetMailGenericLov
         * @summary Fetch List Of Values for Mail Generic
         * @request GET:/listOfValues/sourceIdIn/{sourceIdIn}/mailGeneric
         */
        getMailGenericLov: (hotelId: string, sourceIdIn: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPublisherPropertiesLOV</p>
         *
         * @tags LOV
         * @name GetPublisherPropertiesLov
         * @summary Fetch List Of Values for Publisher Properties
         * @request GET:/listOfValues/subscriber/{subscriber}/publisherProperties
         */
        getPublisherPropertiesLov: (hotelId: string, subscriber: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceTabColumnsLOV</p>
         *
         * @tags LOV
         * @name GetInterfaceTabColumnsLov
         * @summary Fetch List Of Values for Interface Tab Columns
         * @request GET:/listOfValues/tableName/{tableName}/interfaceTabColumns
         */
        getInterfaceTabColumnsLov: (hotelId: string, tableName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getAutoTraceExpressionFieldsLOV</p>
         *
         * @tags LOV
         * @name GetAutoTraceExpressionFieldsLov
         * @summary Fetch List Of Values for Auto Trace Expression Fields
         * @request GET:/listOfValues/tableName/{tableName}/traceGroup/{traceGroup}/autoTraceExpressionFields
         */
        getAutoTraceExpressionFieldsLov: (hotelId: string, traceGroup: string, tableName: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTemplateFiscalFolioParametersLOV</p>
         *
         * @tags LOV
         * @name GetTemplateFiscalFolioParametersLov
         * @summary Fetch List Of Values for Template Fiscal Folio Parameters
         * @request GET:/listOfValues/templateCode/{templateCode}/templateFiscalFolioParameters
         */
        getTemplateFiscalFolioParametersLov: (hotelId: string, templateCode: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getArrangementCodesNumberLOV</p>
         *
         * @tags LOV
         * @name GetArrangementCodesNumberLov
         * @summary Fetch List Of Values for Arrangement Codes Number
         * @request GET:/listOfValues/type/{type}/arrangementCodesNumber
         */
        getArrangementCodesNumberLov: (hotelId: string, type: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getEnrollmentMatchCommunicationTypeLOV</p>
         *
         * @tags LOV
         * @name GetEnrollmentMatchCommunicationTypeLov
         * @summary Fetch List Of Values for Enrollment Match Communication Type
         * @request GET:/listOfValues/type/{type}/enrollmentMatchCommunicationType
         */
        getEnrollmentMatchCommunicationTypeLov: (hotelId: string, type: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getFolioGroupingCodesLOV</p>
         *
         * @tags LOV
         * @name GetFolioGroupingCodesLov
         * @summary Fetch List Of Values for Folio Grouping Codes
         * @request GET:/listOfValues/type/{type}/folioGroupingCodes
         */
        getFolioGroupingCodesLov: (hotelId: string, type: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRevenueBucketsLOV</p>
         *
         * @tags LOV
         * @name GetRevenueBucketsLov
         * @summary Fetch List Of Values for Revenue Buckets
         * @request GET:/listOfValues/type/{type}/revenueBuckets
         */
        getRevenueBucketsLov: (hotelId: string, type: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTrxCodeArrangementLOV</p>
         *
         * @tags LOV
         * @name GetTrxCodeArrangementLov
         * @summary Fetch List Of Values for Trx Code Arrangement
         * @request GET:/listOfValues/type/{type}/trxCodeArrangement
         */
        getTrxCodeArrangementLov: (hotelId: string, type: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getUdfAttributesLOV</p>
         *
         * @tags LOV
         * @name GetUdfAttributesLov
         * @summary Fetch List Of Values for Udf Attributes
         * @request GET:/listOfValues/udfType/{udfType}/udfCategory/{udfCategory}/udfAttributes
         */
        getUdfAttributesLov: (hotelId: string, udfCategory: string, udfType: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getCroUsersLOV</p>
         *
         * @tags LOV
         * @name GetCroUsersLov
         * @summary Fetch List Of Values for Cro Users
         * @request GET:/listOfValues/userId/{userId}/croUsers
         */
        getCroUsersLov: (hotelId: string, userId: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>validateListOfValues</p>
         *
         * @tags LOV
         * @name ValidateListOfValues
         * @summary Validate List Of Values
         * @request PUT:/listOfValues/validate
         */
        validateListOfValues: (hotelId: string, validateListOfValues: ValidateListOfValues, params?: RequestParams) => Promise<AxiosResponse<ValidateListOfValuesDetails, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTraceDateCalcLOV</p>
         *
         * @tags LOV
         * @name GetTraceDateCalcLov
         * @summary Fetch List Of Values for Trace Date Calc
         * @request GET:/listOfValues/view/{view}/traceDateCalc
         */
        getTraceDateCalcLov: (hotelId: string, view: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getTraceFieldLOV</p>
         *
         * @tags LOV
         * @name GetTraceFieldLov
         * @summary Fetch List Of Values for Trace Field
         * @request GET:/listOfValues/view/{view}/traceField
         */
        getTraceFieldLov: (hotelId: string, view: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepCalendarMonthsLOV</p>
         *
         * @tags LOV
         * @name GetRepCalendarMonthsLov
         * @summary Fetch List Of Values for Rep Calendar Months
         * @request GET:/listOfValues/year/{year}/repCalendarMonths
         */
        getRepCalendarMonthsLov: (hotelId: string, year: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getRepCalendarWeeksLOV</p>
         *
         * @tags LOV
         * @name GetRepCalendarWeeksLov
         * @summary Fetch List Of Values for Rep Calendar Weeks
         * @request GET:/listOfValues/year/{year}/repCalendarWeeks
         */
        getRepCalendarWeeksLov: (hotelId: string, year: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getStatisticsYearsLOV</p>
         *
         * @tags LOV
         * @name GetStatisticsYearsLov
         * @summary Fetch List Of Values for Statistics Years
         * @request GET:/listOfValues/year/{year}/statisticsYears
         */
        getStatisticsYearsLov: (hotelId: string, year: string, query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getListOfValues</p>
         *
         * @tags LOV
         * @name GetListOfValues
         * @summary Fetch List Of Values for the given name of the LOV
         * @request GET:/listOfValues/{name}
         */
        getListOfValues: (hotelId: string, name: 'ADSErrorType' | 'ARNoteTypes' | 'ARReminderCycleType' | 'ARStatementModeType' | 'AccountPriorities' | 'AccountRelationshipTypes' | 'AccountTypes' | 'AccumulatedBusinessEvtModuleType' | 'AccumulatedBusinessEvtStatusType' | 'ActivityClasses' | 'ActivityResults' | 'AddOnLicenses' | 'AddressDoctorModes' | 'AddressFormats' | 'AddressTypes' | 'AdjustmentCodeCalculationType' | 'AdjustmentCodes' | 'AirportTemplates' | 'AirportsMultiHotels' | 'AlertAreas' | 'AlertCodesMultiHotel' | 'AllCashiers' | 'AllNoteTypes' | 'AllProfileTypes' | 'AllotmentOrigins' | 'AlternateHotelDirections' | 'AlternateLanguageTitles' | 'AmenitiesMultiHotel' | 'AmenityTypes' | 'AppUsers' | 'ArticleCodesMultiHotel' | 'AssociatedCreditFoioType' | 'AttractionClasses' | 'AttractionsConfigMultiHotels' | 'AttractionsMultiHotel' | 'AuthorizerGroupsMultiHotel' | 'AutoFolioSettlementPreferences' | 'AutoFolioSettlementTypes' | 'AutoSettleRulesPaymentType' | 'AutomaticTranSchedulesFrequencyType' | 'AutomaticTranSchedulesModuleType' | 'AvailabilityType' | 'AvailableColumnsForExport' | 'AvailableExportSources' | 'AwardRateCodesMultiSel' | 'AwardTypes' | 'BankMaster' | 'BanquetForeignCurrency' | 'BanquetRevenueSummary' | 'BaseRounding' | 'BedTypeRequests' | 'BedTypes' | 'Beverages' | 'BillingAccountContractChannel' | 'BillingAccountContractChannelType' | 'BillingAccountContractFeeType' | 'BillingAccountContractFrequency' | 'BillingAccountContractPriceType' | 'BillingAccountContractTransactionType' | 'BillingAccountTypes' | 'BirGuestTypes' | 'BirthCountry' | 'BlockAllotmentCodes' | 'BlockCancellationCodes' | 'BlockCatNewStatuses' | 'BlockCodeStatusType' | 'BlockConversions' | 'BlockCurrentStatus' | 'BlockDestinations' | 'BlockLostBookingCodes' | 'BlockNewStatuses' | 'BlockOrigins' | 'BlockOwners' | 'BlockRankings' | 'BlockRefusedBookingCodes' | 'BlockRefusedReasons' | 'BlockReservationMethods' | 'BlockStatusColor' | 'BlockStatuses' | 'BlockTraceCodes' | 'BookingChannelErrorCodes' | 'BookingChannels' | 'BookingNoteTypes' | 'BookingResponses' | 'BookingStatusCodes' | 'BookingTypes' | 'BrandCode' | 'BudgetYear' | 'BuildingGroups' | 'Buildings' | 'BusinessEventDataElement' | 'BusinessEventModule' | 'BusinessProfileTypes' | 'BusinessSegments' | 'CalculationRules' | 'CancelStatus' | 'CancellationPolicyTypes' | 'CancellationReasons' | 'CardNumberBasedOn' | 'CardTypes' | 'CardTypesIfc' | 'CashierShiftDropLocations' | 'CashieringTransactionTypes' | 'Cashiers' | 'CashiersConfig' | 'CateringEventTypes' | 'CateringRevenueCodes' | 'CateringRevenueGroups' | 'CateringStatuses' | 'CertificateActivities' | 'CertificateStatus' | 'ChainInventoryItems' | 'ChainMaintenanceCodes' | 'ChainPackageCodes' | 'ChainRoomConditions' | 'ChainRoomStatusReasons' | 'ChainRoomTypes' | 'ChainTrackItTypes' | 'Chains' | 'ChannelBillingAccounts' | 'ChannelCardTypeMappingResort' | 'ChannelRateCode' | 'ChannelResortMappingGdsHost' | 'ChannelResortMappingResort' | 'Channels' | 'CityTaxRanges' | 'ClaimAdjustmentLimitCodes' | 'CollectingAgentTaxCodeSeq' | 'Colors' | 'CommissionCalculatedOnType' | 'CommissionPaidType' | 'CommissionPaymentActivityStatus' | 'CommissionPaymentMethods' | 'CommunicationMethods' | 'CommunicationMethodsEntDetail' | 'CommunicationMethodsSystemType' | 'CommunicationRoles' | 'CommunicationTypeEmail' | 'CommunicationTypePhone' | 'CommunicationTypeWeb' | 'CommunicationsLocale' | 'CompInHouse' | 'CompanyTypes' | 'CompetitionCodes' | 'CompositeResvStatuses' | 'ConfigModes' | 'ConfigTitles' | 'ContactMethod' | 'Container' | 'ContractBillingInstructions' | 'ConversionCodes' | 'CorporateBusinessUnits' | 'CorporateDepartmentCodes' | 'CorporateDivisions' | 'CorporateOperatingUnits' | 'Countries' | 'CountryMainGroup' | 'CountryModes' | 'CreditCardProcessingType' | 'CreditRatings' | 'CroChains' | 'CroViews' | 'Currencies' | 'CurrencyExchangeRateType' | 'CurrencyFormat' | 'CustomBudgetCodes' | 'Databases' | 'DatamartSynchType' | 'DayTypeCodesMultiHotels' | 'DayTypeColors' | 'DaysOfWeek' | 'DbInstance' | 'DefaultFolioStyle' | 'DefaultReservationType' | 'DefiniteStatus' | 'DeleteCharacterIndicator' | 'DeleteDateIndicator' | 'DeleteNumberIndicator' | 'DeliveryStatus' | 'DeltaMode' | 'DepartmentHotel' | 'DepartmentMenuItem' | 'Departments' | 'DepositMaturityPreferenceType' | 'DepositPolicyTypes' | 'DepositType' | 'DirectionCodes' | 'DiscountReasons' | 'DistanceTypes' | 'Districts' | 'DiversionEntityTypes' | 'DiversionScopeTypes' | 'Domains' | 'DummyHotels' | 'ECertificateIssue' | 'ECertificateStatus' | 'ECertificateTypes' | 'EcertMembershipTypes' | 'EmailDeliveryFormats' | 'EmailFormats' | 'EmployeeEmails' | 'EndOfDayReportDestinations' | 'EnrollmentCodes' | 'EnrollmentMatchCommunicationName' | 'EntityDetails' | 'EntityHeaderDataTypes' | 'EntityHeaders' | 'EntryPoint' | 'EventActions' | 'EventChangeSources' | 'EventDisplays' | 'EventSpaceTypes' | 'EventTypes' | 'ExchangeServiceTaxCode' | 'ExportBucketCodes' | 'ExportColumnXMLTypes' | 'ExportCommonFields' | 'ExportEndPoints' | 'ExportMappingTypes' | 'ExternalDatabases' | 'ExternalSystemSubTypes' | 'ExternalSystems' | 'FITContractStatus' | 'FITContractTypes' | 'FeatureTypes' | 'FetchCount30rPlusValues' | 'FileTypes' | 'FiscalFolioParameters' | 'FiscalFolioProfileHandling' | 'FiscalGuestTypes' | 'FiscalOperations' | 'FiscalPartners' | 'FiscalRegionCodes' | 'FiscalServiceType' | 'FixedChargeFrequencyTypes' | 'FlaggedReasons' | 'FloorRequests' | 'FolioLegends' | 'FolioMessageMergeCodes' | 'FolioTypeReports' | 'FolioWindows' | 'ForeignCurrency' | 'ForeignCurrencyPosting' | 'Formula' | 'FullPurgeNoOfDays' | 'FunctionSpaceCodes' | 'FunctionSpaceLocations' | 'FunctionSpaceSetupStyles' | 'GRSCodes' | 'GdsAmenities' | 'GdsCardTypes' | 'GdsConvAvailRateCodes' | 'GdsHostAndResortCombinedGuaranteeCodes' | 'GdsMarketingPolicyDetails' | 'GdsMarketingPolicyTypes' | 'GdsMarketingTransactionTypes' | 'GdsRateTypes' | 'GemItemClass' | 'GenderTypes' | 'GenerateRoundingMethod' | 'GenericRevenueTypes' | 'GlobalActionCodes' | 'GuaranteeCodes' | 'GuaranteeCodesMultiHotels' | 'GuestSecretQuestions' | 'GuestTypes' | 'HKStatus' | 'HkCreditRuleTravelTypes' | 'HoldReasons' | 'HotelCategories' | 'HotelContactRoleType' | 'HotelInterfaceIds' | 'HotelInterfaceMachine' | 'HotelInterfaceMenuType' | 'HotelInterfaceTypes' | 'HotelTypes' | 'Hotels' | 'HouseKeepingGroups' | 'HousekeepingCreditRuleTypes' | 'Hubs' | 'IdentificationCountry' | 'IdentificationRoleType' | 'IdentificationTypes' | 'ImageTypes' | 'ImportPostalCodesCountry' | 'InactiveHotels' | 'Industries' | 'InfluenceCodes' | 'IntegrationMessageErrorType' | 'Interests' | 'InterfaceCalcTrxCodes' | 'InterfaceCashCreditPosting' | 'InterfaceChargeScaling' | 'InterfaceDataRequestConfigLevel' | 'InterfaceDataRequestConfigType' | 'InterfaceDataRequestExchangeRate' | 'InterfaceDialedDigits' | 'InterfaceDifferencePosting' | 'InterfaceOriginCodes' | 'InterfacePostType' | 'InterfacePostingCodeSetup' | 'InterfacePostings' | 'InterfacePostingsAddInfo' | 'InterfacePrograms' | 'InterfaceReferenceField' | 'InterfaceResyncDatamartType' | 'InterfaceResyncOwnerContractStatus' | 'InterfaceSplitCode' | 'InterfaceSubtotalPosting' | 'InterfaceSystemType' | 'InterfaceType' | 'InterfaceWorkstationTerminals' | 'InterfaceWorkstationType' | 'InterfaceZeroPostings' | 'ItemPoolsClassCode' | 'ItemPoolsCode' | 'ItemRates' | 'JobTitlesMultiHotels' | 'KeepingCharacterIndicator' | 'KeepingDateIndicator' | 'KeepingNumberIndicator' | 'KeyPacketsReport' | 'KeywordTypes' | 'LanguageCodes' | 'Languages' | 'LatitudeDirections' | 'LetterNames' | 'LetterTypes' | 'LocationTypes' | 'LogicalOperator' | 'LogoType' | 'LongDateFormats' | 'LongitudeDirections' | 'LookupExternalDatabases' | 'MDSCustomValidators' | 'MailingActions' | 'MaintenanceCodes' | 'MaintenanceCodesMultiHotel' | 'ManagerReportUDFFields' | 'MarketCodePrintGroupType' | 'MarketCodes' | 'MarketCodesMultiHotels' | 'MarketGroupsMultiHotels' | 'MarketSegments' | 'MarketSelection' | 'MarketingCities' | 'MarketingCitiesMultiHotels' | 'MarketingCityTemplates' | 'MarketingRegions' | 'MarriottModeArrivalAlerts' | 'MealTypes' | 'MemberLetterList' | 'MembershipActions' | 'MembershipAwardDisplaySet' | 'MembershipAwardPointsValidityDuration' | 'MembershipAwards' | 'MembershipBasedOn' | 'MembershipBillingGroups' | 'MembershipCalculationPeriod' | 'MembershipCalendarGracePeriod' | 'MembershipCardValidationRules' | 'MembershipClaimActivity' | 'MembershipClaimApprovalStatus' | 'MembershipClaimApprovalStatusSearch' | 'MembershipClaimOrigins' | 'MembershipClaimRecordTypes' | 'MembershipClaimStatus' | 'MembershipClaimTypes' | 'MembershipClasses' | 'MembershipDowngrade' | 'MembershipEnrollmentCodes' | 'MembershipEnrollmentGroups' | 'MembershipExtractTypes' | 'MembershipLevelRuleType' | 'MembershipLevels' | 'MembershipMarketGroups' | 'MembershipMultipleRooms' | 'MembershipNumberOfYears' | 'MembershipPointsCalcAwards' | 'MembershipPointsCalculationCurrency' | 'MembershipPointsSchedule' | 'MembershipRateCodes' | 'MembershipRateGroupRateCodes' | 'MembershipRateGroups' | 'MembershipResortGroupCodes' | 'MembershipResortGroups' | 'MembershipRevenueGroups' | 'MembershipRevenueTypes' | 'MembershipRoomGrps' | 'MembershipStatementUDFSet' | 'MembershipStatuses' | 'MembershipTierAdministration' | 'MembershipTransactionCodes' | 'MembershipTransactionGroupCode' | 'MembershipTscHeader' | 'MembershipTypeRuleAppliesOn' | 'MembershipTypeRuleBasedOn' | 'MembershipTypeRulePointsRoundingFlags' | 'MembershipTypeRulePointsType' | 'MembershipTypeRuleTransactionCode' | 'MembershipTypeRuleTypes' | 'MembershipTypes' | 'MembershipTypesAndLevels' | 'MembershipUpgradeDowngradeCalendarPeriod' | 'MembrshipMarketGroupCodes' | 'MergeCodes' | 'Messages' | 'Modules' | 'MonthNames' | 'MonthNumber' | 'MoveReasons' | 'MrwTitle' | 'NameType' | 'Nationalities' | 'Newspapers' | 'NextBlockStatus' | 'NoShowPostingRuleValues' | 'NoShowPostingRules' | 'NoShowReservationTypes' | 'NoShowSourceCodes' | 'NoteActionTypes' | 'NoteGroups' | 'NotificationAreas' | 'NumberDescriptions' | 'NumberOfChains' | 'OCATemplates' | 'OOSReasonConfigMultiHotels' | 'OOSReasonsConfig' | 'OXIActiveInterfaces' | 'OXIInterfaceSetup' | 'OXIInterfacesSetup' | 'OXIMessageFormats' | 'OXIMessageTypes' | 'OXIMesssgeStatuses' | 'OXIProcessorLogsErrorType' | 'OXIProcessorLogsReviewType' | 'OperatorType' | 'Origins' | 'OutboundAuthenticationTypes' | 'OutboundCodes' | 'OutboundTypes' | 'OwnerCodes' | 'OwnerRelationTypes' | 'OwnerTeams' | 'PackCodes' | 'PackageCodes' | 'PackageCodesMultiHotel' | 'PackageForecastGroupMultiHotel' | 'PackageForecastGroupTemplates' | 'PaperSize' | 'PastYears' | 'PayDays' | 'PaymentAuthorizationRules' | 'PaymentMethodValidationRules' | 'PaymentMethodsMultiHotel' | 'PaymentTaxTypes' | 'PaymentTransactionCodeType' | 'PercentageBaseCode' | 'PhoneTypes' | 'PillowTypes' | 'PostedTransactionTypes' | 'PostingRhythms' | 'PotentialForecastTypes' | 'PotentialFrequency' | 'PreRegistrationRuleTypes' | 'PreferenceTypes' | 'Preferences' | 'PreferencesView' | 'PrintTask' | 'PriorStatuses' | 'ProductFeatures' | 'ProfileAccountTypes' | 'ProfileDistributionCountry' | 'ProfileDistributionDatabase' | 'ProfileDistributionFilter' | 'ProfileDistributionKeywordType' | 'ProfileDistributionRegion' | 'ProfileDistributionRoomLabel' | 'ProfileEnrollmentMatchRules' | 'ProfileIdCountries' | 'ProfileIdTypes' | 'ProfileInactiveReasons' | 'ProfileKeywordTypes' | 'ProfileLinkNameTypes' | 'ProfileMemberships' | 'ProfileRegions' | 'ProfileRelationships' | 'ProfileResortRegions' | 'ProfileRestrictionReasons' | 'ProfileViewBy' | 'PromoGroupTemplates' | 'PromotionCodeRegistration' | 'Promotions' | 'PropertyDayTypes' | 'PropertyDetailCategroy' | 'PropertyEventCodes' | 'PurposeOfStay' | 'RankingCodes' | 'RateCategoryMultiHotels' | 'RateCategoryTemplates' | 'RateClassTemplates' | 'RateClassesMultiHotels' | 'RateCodePostingRhythm' | 'RateCodes' | 'RateCodesGlobalDesc' | 'RateConfigExchangeTypes' | 'RateDisplaySets' | 'RateDisplaySetsConfiguration' | 'RateOverrideReasons' | 'RateOwnership' | 'RatePkgTrxCodes' | 'RatePlanSets' | 'RatePlansMultiHotel' | 'RateRoomCategory' | 'RateSeasonCodeTemplates' | 'RateSeasonCodes' | 'RateSeasonCodesMultiHotel' | 'RateStrategyConditionTypes' | 'RateTiers' | 'ReasonType' | 'ReceiptHistoryTypes' | 'ReferenceCurrency' | 'RegCards' | 'Regions' | 'RelationshipTypes' | 'RepAppUsers' | 'RepDayOfWeek' | 'RepEmployeeUsers' | 'RepHorizontalValues' | 'RepNoteTypes' | 'RepProfileTypes' | 'RepRateCategories' | 'RepResvTypeCodeList' | 'RepServiceRequestStatuses' | 'RepStates' | 'ReportDateLanguage' | 'ReportDestinations' | 'ReportDetails' | 'ReportFileNames' | 'ReportFormats' | 'ReportGroups' | 'ReportParameterDataTypes' | 'ReportParameterForms' | 'ReportPrinters' | 'ReportServersList' | 'ReportTextConfiguration' | 'Reports' | 'ReportsToAttach' | 'RequirementCodes' | 'ResStatusWithGuaranteeCodes' | 'ReservationAgents' | 'ReservationChannels' | 'ReservationContactType' | 'ReservationGuestStatus' | 'ReservationImmigrationStatus' | 'ReservationNoteTypes' | 'ReservationStatuses' | 'ReservationTypes' | 'ReservationUDFs' | 'ResortCardTypes' | 'ResortChains' | 'ResortFeatures' | 'ResortNoteTypes' | 'ResortReservationTypes' | 'RestApiModules' | 'RestApiOperations' | 'ResvAutoAttachRulesBasedOn' | 'ResyncBlockCodes' | 'RevenueBucketTypes' | 'RevenueGroups' | 'RevenueTypes' | 'RoomAmenities' | 'RoomAssignmentRating' | 'RoomClassMultiHotels' | 'RoomClassesTemplate' | 'RoomConditions' | 'RoomConditionsMultiHotels' | 'RoomFeatureRating' | 'RoomFeaturesAll' | 'RoomMaintenanceTemplates' | 'RoomMoveReasons' | 'RoomPool' | 'RoomPotential' | 'RoomPriorityRequests' | 'RoomRateAssignment' | 'RoomReadyStatus' | 'RoomRotationAdjustmentReasons' | 'RoomRotationOverrideReasons' | 'RoomSpecialRatings' | 'RoomStatus' | 'RoomStatusReasons' | 'RoomTypeRequests' | 'RoomTypeTemplates' | 'RoomTypeTypes' | 'RoomTypeYieldStatus' | 'RoomTypesGlobalDesc' | 'RoomTypesMultiHotel' | 'RoundingRule' | 'RoutingProfileTypes' | 'RoutingTypes' | 'SCMailingActions' | 'SCPeriods' | 'SalesCateringEventStatus' | 'SalesScopeCities' | 'SalesScopes' | 'SampleDynamic' | 'ScannerDevice' | 'ScheduledActivitiesLocationCodes' | 'ScheduledActivitiesStatusCodes' | 'SellBy' | 'ServiceRequestPriority' | 'ServiceRequestStatus' | 'ShortDateFormats' | 'SitePlanTypes' | 'Snacks' | 'SourceCodes' | 'SourceCodesMultiHotels' | 'SourceGroupsMultiHotels' | 'Sources' | 'StagedProfileMembership' | 'StartDayOfWeek' | 'States' | 'StatisticsContactProfileRoles' | 'StatisticsCurrencyCodes' | 'StoredValueTransaction' | 'SynchronizeEventType' | 'SynchronizeExternalSystems' | 'SynchronizeReservationStatus' | 'TaxCategoryCodes' | 'TaxOffice' | 'TaxRangesType' | 'TaxTypesConfiguration' | 'TempExclusivePreferences' | 'TemplateAlertCodes' | 'TemplateAmenityCodes' | 'TemplateAttractionCodes' | 'TemplateDayTypeCodes' | 'TemplateDeviceLocations' | 'TemplateEventCodes' | 'TemplateGuestMessages' | 'TemplateJobTitles' | 'TemplateLocatorCodes' | 'TemplatePreferenceTypes' | 'TemplatePromotionCodes' | 'TemplatePromotionGroups' | 'TemplateRoomConditions' | 'TemplateTransactionCodes' | 'TemplateTransactionGroups' | 'TemplateTransportCodes' | 'TemplateTransportationLabels' | 'TemplateType' | 'Territories' | 'TimeFormats' | 'TimezoneRegions' | 'Titles' | 'TmplCashierShiftDropLocations' | 'TopBasedOn' | 'TraceCodes' | 'TraceGroups' | 'TraceStatuses' | 'TraceTexts' | 'TrackItActions' | 'TrackItGroups' | 'TrackItLocations' | 'TrackItTypes' | 'TransactionCodeTypes' | 'TransactionCodesMultiHotel' | 'TransactionDiversionCodesMultiHotel' | 'TransactionDiversionLevels' | 'TransactionDiversionRuleTypes' | 'TransactionGroupsMultiHotel' | 'TransactionSubgroupsMultiHotel' | 'TransactionUsages' | 'TransactionUserGroupHotels' | 'TranslatedLanguages' | 'TranslationLanguageCode' | 'TransportTypesMultiHotels' | 'TravelAgentTypes' | 'TrxCodeConsumptionMultiHotel' | 'TrxServiceTypes' | 'TurnawayCodesMultiHotels' | 'TurnawayTemplateCode' | 'TurnawaysInterfaceResync' | 'UDFAttributesMultiHotels' | 'UdfTypes' | 'UpdateContactActivityStatus' | 'UpsellMarketCodes' | 'UpsellMembershipTypesEdit' | 'UpsellMembershipTypesOnly' | 'UpsellMembershipTypesView' | 'UserDefinedFieldGroups' | 'UserRoleGroups' | 'VIPStatuses' | 'WaitlistCodes' | 'WaitlistPriorities' | 'WakeupCallStatuses' | 'WashScheduleMultiHotel' | 'YieldAdjustmentCodes' | 'YieldAdjustmentTypeValues' | 'YieldCategories' | 'YieldMarketsMultiHotel' | 'YieldableCodes', query?: {
            /** Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. */
            includeInactiveFlag?: boolean;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListOfValues, any>>;
    };
    services: {
        /**
         * @description  <p><strong>OperationId:</strong>pingLOVService</p>
         *
         * @tags LOV
         * @name PingLovService
         * @summary Retrieve List of Values Service Version
         * @request GET:/services/listOfValues/status
         */
        pingLovService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
}
