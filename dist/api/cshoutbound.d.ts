/** A monetary value expressed with a currency code. */
export interface CurrencyAmountType {
    /** A monetary amount. */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @minLength 3
     * @maxLength 3
     */
    currencyCode?: string;
}
export interface SendCompTransactionsStatus {
    /** List of transactions processed by the vendor. */
    compPostings?: CompTransactionsInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of comp transactions.
 * @maxItems 4000
 */
export type CompTransactionsInfoType = CompTransactionInfoType[];
/** Transaction information being processed by the vendor. */
export interface CompTransactionInfoType {
    /** Transaction Number for which request is being submitted. */
    transactionId?: number;
    /**
     * Transaction code.
     * @minLength 0
     * @maxLength 200
     */
    transactionCode?: string;
    /**
     * Transaction description.
     * @minLength 0
     * @maxLength 2000
     */
    transactionDescription?: string;
    /**
     * Room number associated with the transaction.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /**
     * Confirmation number associated with the transaction.
     * @minLength 0
     * @maxLength 50
     */
    confirmationNo?: string;
    /**
     * Approval date of the posting.
     * @format date
     * @maxLength 8
     */
    approvalDate?: string;
    /**
     * Approval status of the posting.
     * @minLength 0
     * @maxLength 20
     */
    approvalStatus?: string;
    /**
     * Approval code of the posting.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
    /**
     * Approval message of the posting coming from the vendor.
     * @minLength 0
     * @maxLength 200
     */
    approvalMessage?: string;
    /** Transaction amount. */
    amount?: CurrencyAmountType;
    /**
     * Family name, last name or Company Name.
     * @minLength 0
     * @maxLength 80
     */
    name?: string;
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 80
     */
    firstName?: string;
}
/** The Cashier ID of the Cashier who is currently processing the transaction(s). */
export type CashierId = number;
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
     * @maxLength 40
     */
    type?: string;
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
/** Response type for retrieval of Complimentary Redemption codes and their respective Available Amount. */
export interface FetchCompRedemptionsRS {
    /** Complimentary Redemption codes and their respective Available Amount. */
    compRedemptions?: FetchCompRedemptionsRSCompRedemptionsType;
}
/**
 * Collection of Complimentary Redemption codes and their respective Available Amount.
 * @maxItems 4000
 */
export type FetchCompRedemptionsRSCompRedemptionsType = FetchCompRedemptionsRSCompRedemptionType[];
/** Information about a Complimentary Redemption code and its Available Amount. */
export interface FetchCompRedemptionsRSCompRedemptionType {
    /**
     * The associated redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Complimentary Redemption code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Available Amount of the Complimentary Redemption code. */
    availableAmount?: CurrencyAmountType;
}
/** Request type of Complimentary Redemptions for approval. */
export interface AuthorizeCompRedemptionsRQ {
    /** Complimentary Redemptions for approval. */
    compRedemptions?: AuthorizeCompRedemptionsRQCompRedemptionsType;
}
/**
 * Collection of Complimentary Redemptions for approval.
 * @maxItems 4000
 */
export type AuthorizeCompRedemptionsRQCompRedemptionsType = AuthorizeCompRedemptionsRQCompRedemptionType[];
/** Information about a Complimentary Redemption for approval. */
export interface AuthorizeCompRedemptionsRQCompRedemptionType {
    /** The amount to redeem when posting a payment. */
    amount?: CurrencyAmountType;
    /**
     * The associated redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Complimentary Redemption code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Available Amount of the Complimentary Redemption code. */
    availableAmount?: CurrencyAmountType;
}
/** Response type of Complimentary Redemptions for approval. */
export interface AuthorizeCompRedemptionsRS {
    /** Complimentary Redemption codes and their respective Approval Code. */
    compRedemptions?: AuthorizeCompRedemptionsRSCompRedemptionsType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Complimentary Redemption codes and their respective Approval Code.
 * @maxItems 4000
 */
export type AuthorizeCompRedemptionsRSCompRedemptionsType = AuthorizeCompRedemptionsRSCompRedemptionType[];
/** Information about a Complimentary Redemption including its approval code. */
export interface AuthorizeCompRedemptionsRSCompRedemptionType {
    /**
     * The associated Complimentary Redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Approval Code of the Complimentary Redemption.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
}
/** Request type of Complimentary Redemptions posting. */
export interface PostCompRedemptionsRQ {
    /** Complimentary Redemptions to post as payment. */
    compRedemptions?: PostCompRedemptionsRQCompRedemptionsType;
}
/**
 * Collection of Complimentary Redemptions for posting.
 * @maxItems 4000
 */
export type PostCompRedemptionsRQCompRedemptionsType = PostCompRedemptionsRQCompRedemptionType[];
/** Information about a Complimentary Redemption for posting. */
export interface PostCompRedemptionsRQCompRedemptionType {
    /** The amount to redeem when posting a payment. */
    amount?: CurrencyAmountType;
    /**
     * The associated redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Complimentary Redemption code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Available Amount of the Complimentary Redemption code. */
    availableAmount?: CurrencyAmountType;
    /**
     * Approval Code of the Complimentary Redemption.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
}
/** Response type of Complimentary Redemptions for posting. */
export interface PostCompRedemptionsRS {
    /** Complimentary Redemption codes and their respective Approval Code. */
    compRedemptions?: PostCompRedemptionsRSCompRedemptionsType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Complimentary Redemption codes and their respective Approval Code.
 * @maxItems 4000
 */
export type PostCompRedemptionsRSCompRedemptionsType = PostCompRedemptionsRSCompRedemptionType[];
/** Information about a Complimentary Redemption including its approval code. */
export interface PostCompRedemptionsRSCompRedemptionType {
    /**
     * The associated Complimentary Redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Approval Code of the Complimentary Redemption.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Request type of Complimentary Redemptions reversal. */
export interface ReverseCompRedemptionsRQ {
    /** Complimentary Redemptions for reversal. */
    compRedemptions?: ReverseCompRedemptionsRQCompRedemptionsType;
}
/**
 * Collection of Complimentary Redemptions for reversal.
 * @maxItems 4000
 */
export type ReverseCompRedemptionsRQCompRedemptionsType = ReverseCompRedemptionsRQCompRedemptionType[];
/** Information about a Complimentary Redemption for reversal. */
export interface ReverseCompRedemptionsRQCompRedemptionType {
    /** The amount to reverse. */
    amount?: CurrencyAmountType;
    /**
     * The associated redemption code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Complimentary Redemption code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Approval Code of the Complimentary Redemption.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
}
/** Response type of Complimentary Redemptions for reversal */
export interface ReverseCompRedemptionsRS {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Contains all transactions to be submitted to the vendor */
export interface CompTransactionsCriteriaType {
    /**
     * List of transactions to be submitted to the vendor.
     * @maxItems 4000
     */
    compPostings?: CompTransactionType[];
}
/** Contains the transaction to be submitted to the vendor */
export interface CompTransactionType {
    /** Transaction amount. */
    amount?: CurrencyAmountType;
    /** Posted amount. */
    postedAmount?: CurrencyAmountType;
    /** Debit amount. */
    debit?: CurrencyAmountType;
    /** Credit amount. */
    credit?: CurrencyAmountType;
    /**
     * Family name, last name or Company Name.
     * @minLength 0
     * @maxLength 80
     */
    name?: string;
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 80
     */
    firstName?: string;
    /**
     * Membership number.
     * @minLength 0
     * @maxLength 100
     */
    membershipId?: string;
    /**
     * Membership number.
     * @minLength 0
     * @maxLength 100
     */
    membershipType?: string;
    /**
     * Approval date of the posting.
     * @format date
     * @maxLength 8
     */
    approvalDate?: string;
    /**
     * Approval status of the posting.
     * @minLength 0
     * @maxLength 20
     */
    approvalStatus?: string;
    /**
     * Approval code of the posting.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
    /** Authorizer Id. */
    authorizerId?: UniqueIDType;
    /** Guest unique identifier. */
    guestNameId?: UniqueIDType;
    /** Reservation id. */
    resvNameId?: UniqueIDType;
    /**
     * Confirmation number associated with the transaction.
     * @minLength 0
     * @maxLength 50
     */
    confirmationNo?: string;
    /**
     * Room number associated with the transaction.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /**
     * Comp number associated with the transaction.
     * @minLength 0
     * @maxLength 50
     */
    compId?: string;
    /** Window number where the transaction is posted. */
    folioNo?: number;
    /**
     * Subgroup for the transaction.
     * @minLength 0
     * @maxLength 100
     */
    subGroup?: string;
    /** Transaction amount. */
    transactionAmount?: CurrencyAmountType;
    /** Transaction Number for which request is being submitted. */
    transactionId?: number;
    /**
     * Transaction code.
     * @minLength 0
     * @maxLength 200
     */
    transactionCode?: string;
    /**
     * Transaction description.
     * @minLength 0
     * @maxLength 2000
     */
    transactionDescription?: string;
    /**
     * Transaction status.
     * @minLength 0
     * @maxLength 100
     */
    transactionStatus?: string;
    /**
     * Transaction date of the posting.
     * @format date
     * @maxLength 8
     */
    transactionDate?: string;
    /**
     * User name.
     * @minLength 0
     * @maxLength 80
     */
    userName?: string;
    /** External user id. */
    externalUserId?: UniqueIDType;
    /** Numeric ID of the cashier. */
    cashierId?: CashierId;
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
 * @title OPERA Cloud Cashiering API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /csh/outbound/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description You can use this API to get complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>getCompRedemptions</p>
         *
         * @tags Cashiering
         * @name GetCompRedemptions
         * @summary Operation to get complimentary redemptions for a guest having PTS Membership Type
         * @request GET:/hotels/{hotelId}/memberships/{membershipId}/compRedemptions
         */
        getCompRedemptions: (membershipId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<FetchCompRedemptionsRS, any>>;
        /**
         * @description You can use this API to authorize complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>authorizeCompRedemptions</p>
         *
         * @tags Cashiering
         * @name AuthorizeCompRedemptions
         * @summary Operation to authorize complimentary redemptions for a guest having PTS Membership Type
         * @request PUT:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionAuthorizations
         */
        authorizeCompRedemptions: (membershipId: string, hotelId: string, authorizeCompRedemptions: AuthorizeCompRedemptionsRQ, params?: RequestParams) => Promise<AxiosResponse<AuthorizeCompRedemptionsRS, any>>;
        /**
         * @description You can use this API to post complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>postCompRedemptions</p>
         *
         * @tags Cashiering
         * @name PostCompRedemptions
         * @summary Operation to post complimentary redemptions for a guest having PTS Membership Type
         * @request POST:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionPostings
         */
        postCompRedemptions: (membershipId: string, hotelId: string, postCompRedemptions: PostCompRedemptionsRQ, params?: RequestParams) => Promise<AxiosResponse<PostCompRedemptionsRS, any>>;
        /**
         * @description You can use this API to reverse complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>reverseCompRedemptions</p>
         *
         * @tags Cashiering
         * @name ReverseCompRedemptions
         * @summary Operation to reverse complimentary redemptions for a guest having PTS Membership Type
         * @request POST:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionReversals
         */
        reverseCompRedemptions: (membershipId: string, hotelId: string, reverseCompRedemptions: ReverseCompRedemptionsRQ, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API to submit Comp Transactions. <p><strong>OperationId:</strong>approveCompPostings</p>
         *
         * @tags Cashiering
         * @name ApproveCompPostings
         * @summary Operation to request for comp postings approval.
         * @request PUT:/hotels/{hotelId}/compPostingsApproval
         */
        approveCompPostings: (hotelId: string, postings: CompTransactionsCriteriaType, params?: RequestParams) => Promise<AxiosResponse<SendCompTransactionsStatus, any>>;
        /**
         * @description You can use this API to reverse Comp Transactions. <p><strong>OperationId:</strong>reverseCompPostings</p>
         *
         * @tags Cashiering
         * @name ReverseCompPostings
         * @summary Operation to request for comp postings reversal.
         * @request PUT:/hotels/{hotelId}/compPostingsReversal
         */
        reverseCompPostings: (hotelId: string, postings: CompTransactionsCriteriaType, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
}
