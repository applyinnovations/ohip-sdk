/** Request to change articles. */
export interface Articles {
    /** Hotel context for the articles. */
    hotelId?: CodeType;
    /** Collection of articles. */
    articles?: ArticlesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
 * @minLength 0
 * @maxLength 20
 */
export type CodeType = string;
/**
 * Holds collection of articles.
 * @maxItems 4000
 */
export type ArticlesType = ArticleInfoType[];
/** Information regarding an article. */
export interface ArticleInfoType {
    /**
     * Description of the article.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Transaction code to which the article belongs.
     * @minLength 0
     * @maxLength 20
     */
    transactionCode?: string;
    /** Default price of the article. */
    price?: CurrencyAmountType;
    /** Post it information of the article. */
    postIt?: ArticlePostItType;
    /**
     * Unique Universal product code of the article.
     * @minLength 0
     * @maxLength 20
     */
    universalProductCode?: string;
    /**
     * Hotel code to which the article belongs.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Unique code of the article.
     * @minLength 0
     * @maxLength 20
     */
    articleCode?: string;
    /** Indicates whether the article is inactive or not. */
    inactive?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
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
/** Post it information of an article. */
export interface ArticlePostItType {
    /** Indicates whether the article is available for post it. */
    availableForPostIt?: boolean;
    /** Color indicator which is only configurable if article is available for post it. */
    color?: ColorType;
}
/** Color configuration type. This color configuration provides a visual category of entities. */
export declare enum ColorType {
    Red = "Red",
    DarkRed = "DarkRed",
    Green = "Green",
    DarkGreen = "DarkGreen",
    LightGreen = "LightGreen",
    Orange = "Orange",
    White = "White",
    Yellow = "Yellow",
    DarkYellow = "DarkYellow",
    Purple = "Purple",
    Brown = "Brown",
    Gray = "Gray",
    Aqua = "Aqua",
    Chocolate = "Chocolate",
    Blue = "Blue",
    LightBlue = "LightBlue",
    DarkBlue = "DarkBlue",
    Cyan = "Cyan",
    DarkCyan = "DarkCyan",
    Magenta = "Magenta",
    DarkMagenta = "DarkMagenta",
    Black = "Black"
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
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
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
export interface ArticlesInfo {
    /** Collection of articles. */
    articles?: ArticlesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface AuthorizationConfigRules {
    /** Authorization configuration rule type. */
    authorizationConfigRulesType?: AuthorizationConfigRulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of AuthorizationRuleType.
 * @maxItems 4000
 */
export type AuthorizationConfigRulesType = AuthorizationConfigRuleType[];
/** Authorization configuration Rule Type.Authorization Rules specify the rule (or rules) that the property uses for credit card authorizations */
export interface AuthorizationConfigRuleType {
    /**
     * Property associated with authorization rule
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Authorization rule Room type.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** Authorization rule room class code. */
    roomClass?: RoomClassCodeInfoType;
    /** Authorization rule source code. */
    sourceCode?: SourceCodeInfoType;
    /** Authorization rule Rate Category code. */
    rateCategory?: RateCategoryType;
    /**
     * Rate code associated to this rule.
     * @minLength 0
     * @maxLength 20
     */
    rateCode?: string;
    /**
     * Guarantee code associated to this rule.
     * @minLength 0
     * @maxLength 20
     */
    guaranteeCode?: string;
    /** Rule Number for current authorization. */
    ruleNo?: number;
    /**
     * Rule Number description for current authorization.
     * @minLength 0
     * @maxLength 200
     */
    ruleDescription?: string;
    /** Amount to be applied to all rules with an amount configured in the formula. */
    amount?: CurrencyAmountType;
    /**
     * Percentage to be applied to all rules with a percentage configured in the formula.
     * @min 0
     * @max 100
     */
    percentage?: number;
    /** A maximum of two digits to set the number of days to authorize for a credit card. If the field is left blank, authorizations will be done for the entire stay duration of the reservation */
    maxDaysToAuthorize?: number;
    /** Ignore deposits paid for calculation of the amount to be authorized. */
    ignoreDepositsYN?: boolean;
}
/** Code of the room class type. */
export interface RoomClassCodeInfoType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomClassCode?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
export interface SourceCodeInfoType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    sourceCode?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    sourceGroup?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
/** This type represents the rate category type. */
export interface RateCategoryType {
    /** Begin date for the rate category. */
    rateCategoryDetails?: {
        /**
         * Begin date for the rate category.
         * @format date
         * @maxLength 8
         */
        beginDate?: string;
        /**
         * End date for the rate category.
         * @format date
         * @maxLength 8
         */
        endDate?: string;
        /**
         * Description of rate category.
         * @minLength 0
         * @maxLength 200
         */
        description?: string;
        /**
         * Active date of the room category.
         * @minLength 0
         * @maxLength 20
         */
        rateClass?: string;
        /** Indicates rate category sell sequence. */
        sellSequence?: number;
    };
    /**
     * Rate category Code.
     * @minLength 0
     * @maxLength 20
     */
    rateCategory?: string;
}
export interface AuthorizerGroupsToChange {
    /** Authorizer Groups Configuration to be changed. */
    criteria?: AuthorizerGroupsCriteriaType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Criteria to change authorizer group. */
export interface AuthorizerGroupsCriteriaType {
    /** If true, updates all authorizers in the group. */
    updateAuthorizers?: boolean;
    /** Authorizer Groups Configuration to be changed. */
    authorizerGroups?: AuthorizerGroupsType;
}
/**
 * Authorizer Group
 * @maxItems 4000
 */
export type AuthorizerGroupsType = AuthorizerGroupType[];
/** A representation of the information contained by a Authorizer Group. */
export interface AuthorizerGroupType {
    /**
     * Description of the Authorizer Group.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Rate Code of the Authorizer Group.
     * @minLength 0
     * @maxLength 20
     */
    rateCode?: string;
    /** Transactions information of the Authorizer Group. */
    transactionLimits?: AuthorizerTrxLimitsType;
    /**
     * Hotel Code to which the Authorizer Group belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Authorizer Group code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/**
 * Set of Transaction Limit configured for the Authorizer Group.
 * @maxItems 4000
 */
export type AuthorizerTrxLimitsType = AuthorizerTrxLimitType[];
/** A representation of the information of Transaction Limit. */
export interface AuthorizerTrxLimitType {
    /** Set of Transaction Codes configured for the Authorizer Group. */
    transactionCodes?: AuthTransactionCodesType;
    /** Set of Billing Instructions configured for the Authorizer Group. */
    billingInstructions?: AuthBillingInstructionsType;
    /** Group Header Id for a transaction row. */
    groupHeaderId?: number;
    /** Credit Limit for a transaction. */
    creditLimit?: number;
    /** Occurrence Limit for a transaction. */
    occurrenceLimit?: number;
}
/**
 * List of Transaction codes info.
 * @maxItems 4000
 */
export type AuthTransactionCodesType = CodeDescriptionType[];
/** This contains a generic code and description information. */
export interface CodeDescriptionType {
    /**
     * Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
/**
 * Set of Billing Instruction codes.
 * @maxItems 4000
 */
export type AuthBillingInstructionsType = CodeDescriptionType[];
export interface AuthorizerGroups {
    /** Collection of Authorizer Groups fetched. */
    authorizerGroups?: AuthorizerGroupsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for fetching Auto Folio Settlement Types. */
export interface AutoFolioSettlementTypesDetails {
    /** Collection of Auto Folio Settlement Types. */
    autoFolioSettlementTypes?: AutoFolioSettlementTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Auto Folio Settlement Types.
 * @maxItems 4000
 */
export type AutoFolioSettlementTypesType = AutoFolioSettlementTypeType[];
/** Contains Common Master configuration detail. */
export interface AutoFolioSettlementTypeType {
    /**
     * Common Master unique code.
     * @minLength 0
     * @maxLength 40
     */
    code?: string;
    /** Description of the Master code. */
    description?: TranslationTextType2000;
    /** Common Master record sequence number. */
    displayOrder?: number;
}
/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType2000 {
    /**
     * Default text with Character length from 0 to 2000.
     * @minLength 0
     * @maxLength 2000
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
/** Request object for creating Auto Folio Settlement Types. */
export interface AutoFolioSettlementTypesCriteria {
    /** Auto Folio Settlement Typesto be created. */
    autoFolioSettlementTypes?: AutoFolioSettlementTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing Auto Folio Settlement Types. */
export interface AutoFolioSettlementTypesToBeChanged {
    /** Auto Folio Settlement Typesto be changed. */
    autoFolioSettlementTypes?: AutoFolioSettlementTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CashiersDetails {
    /** Lists of cashiers and their information. */
    cashiers?: CashiersType;
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
/**
 * Details about a cashier.
 * @maxItems 4000
 */
export type CashiersType = CashierType[];
/** Cashiers Information. */
export interface CashierType {
    /** Numeric code for cashier ID. */
    cashierId?: number;
    /**
     * The currency code used by the hotel that the cashier belongs to.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * Name assigned to the cashier.
     * @minLength 0
     * @maxLength 40
     */
    name?: string;
    /**
     * User(s) assigned to the cashier.
     * @minLength 0
     * @maxLength 40
     */
    attachedUser?: string;
    /** Cashier / Interface Cashier / LDAP Template options are provided. */
    cashierType?: CashierTypeType;
    /** The Starting Amount in the Cashier drawer. */
    startingAmount?: number;
    /** Selected if the cashier is allowed to drop below or above the required drop amount. */
    floatOverShort?: boolean;
    /** Information about how the cashier is used. */
    usageInfo?: {
        /** The Maximum Daily Uses for the cashier. */
        maximumDailyUses?: number;
        /** Statistics about the use of the cashier. */
        history?: {
            /**
             * The date that the cashier last opened.
             * @format date
             * @maxLength 8
             */
            lastOpened?: string;
            /** The number of times the cashier has opened their account today. */
            timesOpened?: number;
        };
    };
    /** Indicator that this cashier is the one to be used by Kiosk Partner to carry out postings and payments for the guest. */
    kiosk?: boolean;
    /** Indicator that tells whether the cashier is active or not. */
    inactive?: boolean;
    /** Indicator that tells whether the cashier is open or not. */
    open?: boolean;
}
/** The types of cashier. */
export declare enum CashierTypeType {
    Cashier = "Cashier",
    InterfaceCashier = "InterfaceCashier",
    LDAPTemplate = "LDAPTemplate"
}
export interface Cashiers {
    /** List of cashiers to be modified. */
    cashiers?: CashiersType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CashierNumber {
    /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
    cashierId?: CashierId;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The Cashier ID of the Cashier who is currently processing the transaction(s). */
export type CashierId = number;
/** Response object for fetching commission codes. */
export interface CommissionCodesSummary {
    /** Collection of commission code details. */
    commissionCodesSummary?: CommissionCodesSummaryType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Commission code details.
 * @maxItems 4000
 */
export type CommissionCodesSummaryType = CommissionCodeSummaryInfoType[];
/** Commission codes summary details. */
export interface CommissionCodeSummaryInfoType {
    /**
     * Property of the commission codes.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Commission code details.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /**
     * Commission code description for which details are fetched.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Commission code sequence number. */
    sequence?: number;
    /** Commission based on information. */
    basedOn?: CommissionBasedOnType;
    /** Commission amount that needs to be paid. */
    commissionAmount?: CurrencyAmountType;
    /** Commission paid Tax details. */
    taxPercentage?: number;
    default?: boolean;
}
/** Commission based on Revenue. */
export declare enum CommissionBasedOnType {
    Reservation = "Reservation",
    Revenue = "Revenue"
}
/** Request object to update commission codes. */
export interface CommissionCodes {
    /** Commission codes information to update. */
    commissionCodes?: CommissionCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Commission code details object.
 * @maxItems 4000
 */
export type CommissionCodesType = CommissionCodeInfoType[];
/** Commission code info. */
export interface CommissionCodeInfoType {
    /**
     * Property of the commission codes.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Commission code for which details are fetched.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /**
     * Commission code description for which details are fetched.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Commission code sequence number. */
    sequence?: number;
    /** Commission code hold status details. */
    commissionCodeHoldStatus?: CommissionCodeHoldStatusType;
    /** Commission paid manually details. */
    reservationHistoryRecords?: CommissionPaidDetailsType;
    /** Commission calculation type based on details. */
    commissionCalculation?: CommissionCalculationType;
    /** Commission paid Tax details. */
    taxPercentage?: number;
}
/** Commission Code Hold Status type */
export interface CommissionCodeHoldStatusType {
    /** Hold always status for commission code. */
    holdAlways?: boolean;
    /** Hold prepaid status for commission code. */
    holdPrepaid?: boolean;
    /** Hold accoutn receivables status for commission code. */
    holdAccountReceivables?: boolean;
}
/** Commission paid details. */
export interface CommissionPaidDetailsType {
    perNight?: boolean;
    perStay?: boolean;
    /** Commission amount that needs to be paid. */
    commissionAmount?: CurrencyAmountType;
    /** Commission amount that needs to be paid over weekend. */
    weekEndCommissionAmount?: CurrencyAmountType;
    /**
     * Indicates the type of commission paid to agent.
     * @minLength 1
     * @maxLength 1
     */
    commissionType?: string;
}
/** Commission calculation type based on details. */
export interface CommissionCalculationType {
    /** Revenue based commission details. */
    revenueBasedCommission?: RevenueBasedCommissionType;
    /** Reservation based commission details. */
    reservationBasedCommission?: ReservationBasedCommissionType;
}
/**
 * Revenue based commission details.
 * @maxItems 4000
 */
export type RevenueBasedCommissionType = CommissionCodeTransactionType[];
/** Revenue based commission details. */
export interface CommissionCodeTransactionType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    transactionCode?: string;
    /** @maxLength 2000 */
    transactionCodeDesc?: string;
    basedOnNetAmount?: boolean;
    /** Commission paid details. */
    commissionPaidDetails?: CommissionPaidDetailsType;
}
/** Reservation based commission details. */
export interface ReservationBasedCommissionType {
    /** Commission paid details. */
    commissionPaidDetails?: CommissionPaidDetailsType;
}
/** Request object for creating CompTypes. */
export interface CompTypesCriteria {
    /** Comp Types to be created. */
    compTypes?: CompTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Comp Types.
 * @maxItems 4000
 */
export type CompTypesType = CompTypeType[];
/** Information representation of Comp Type. */
export interface CompTypeType {
    /**
     * Code is used to identify the CompType.
     * @minLength 0
     * @maxLength 20
     */
    compTypeCode?: string;
    /**
     * Text is used to describe the CompType.
     * @minLength 0
     * @maxLength 2000
     */
    compTypeDescription?: string;
    /** Comp Type record sequence number. */
    displayOrder?: number;
}
/** Request object for changing Comp Types. */
export interface CompTypesToBeChanged {
    /** Comp Types to be changed. */
    compTypes?: CompTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface CompTypesStatus {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response for fetching Bank Accounts */
export interface BankAccountsInfo {
    /** Collection of Bank Accounts */
    bankAccounts?: ConfigBankAccountsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of bank accounts.
 * @maxItems 4000
 */
export type ConfigBankAccountsType = ConfigBankAccountType[];
/** Indentifier for a Bank Account. */
export interface ConfigBankAccountType {
    /**
     * Property of the bank account.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Bank account ID. */
    bankAccountId?: number;
    /**
     * Account number at the bank.
     * @minLength 0
     * @maxLength 80
     */
    bankAccountNumber?: string;
    /**
     * Unique code of the bank.
     * @minLength 0
     * @maxLength 20
     */
    bankCode?: string;
    /**
     * Code for the branch of the bank.
     * @minLength 0
     * @maxLength 20
     */
    branchCode?: string;
    /**
     * Name of the bank account.
     * @minLength 0
     * @maxLength 2000
     */
    bankName?: string;
    /**
     * Routing number for the bank account.
     * @minLength 0
     * @maxLength 20
     */
    routingNumber?: string;
    /** Type of payment associated with the bank account. */
    paymentMethod?: CommissionConfigPaymentMethodType;
    /**
     * Type of format for Payment Method.
     * @minLength 0
     * @maxLength 80
     */
    format?: string;
    /**
     * Used to hold last exported date for commission export.
     * @format date
     * @maxLength 8
     */
    lastExportDate?: string;
    /** Used to hold last exported filename for commission export. */
    lastExportFileNo?: number;
    /** Next check number used by commission handling module for bank account selected. */
    nextCheckNumber?: number;
    /** Minimum amount required to produce a check through commission processing for the selected account. */
    minProcessingAmount?: number;
    /**
     * Currency associated with the bank account.
     * @minLength 0
     * @maxLength 20
     */
    currency?: string;
    /** Number of lines to be printed on check stub. */
    checkStubLines?: number;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Source directory for importing commission information.
     * @minLength 0
     * @maxLength 2000
     */
    sourceImportDirectory?: string;
    /**
     * Target directory where import files will be stored.
     * @minLength 0
     * @maxLength 2000
     */
    targetImportDirectory?: string;
    /** Check number allowed to be edited true/false. */
    editCheckNumber?: boolean;
    /** Force validation of TA/Source IATA number during commision payment process. */
    validateIATANumber?: boolean;
    /** Default Bank Account for that resort. */
    default?: boolean;
    /** Used mainly to figure out default bank for resort and currency combination. */
    defaultForCurrency?: boolean;
    /** Indicate that the bank account uses Positive Pay Export. */
    positivePayExport?: boolean;
    /** Indicates that bank account uses 1099 report. */
    report1099?: boolean;
}
/** This value of the enum is used for Payment methods */
export declare enum CommissionConfigPaymentMethodType {
    Check = "Check",
    CentrallyPaid = "CentrallyPaid",
    Eft = "Eft"
}
/** Request object to edit Bank Accounts */
export interface BankAccounts {
    /** Details of the Bank Accounts to edit */
    bankAccounts?: ConfigBankAccountsType;
    /** Update default confirmation response */
    updateDefault?: boolean;
    /** Update default for currency confirmation response */
    updateDefaultForCurrency?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CreditCardInfo {
    /** Credit card information. */
    creditCard?: ResPaymentCardType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Information on a credit card for the customer. */
export interface ResPaymentCardType {
    /** credit card id */
    cardId?: UniqueIDType;
    /** A monetary value expressed with a currency code. */
    currentAuthorizedAmount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    approvalAmountNeeded?: CurrencyAmountType;
    /**
     * Approval code sent by the credit card company on a successful authorization.
     * @minLength 0
     * @maxLength 20
     */
    approvalCode?: string;
    /** Indicates the type of credit card from a defined list */
    cardType?: CardTypeType;
    /**
     * Indicates the user defined credit card type if credit card type from a defined list is not provided
     * @minLength 0
     * @maxLength 2
     */
    userDefinedCardType?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    cardNumber?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    cardNumberMasked?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    cardNumberLast4Digits?: string;
    /**
     * Expiration date of the credit card
     * @format date
     * @maxLength 8
     */
    expirationDate?: string;
    /**
     * Masked Expiration date of the credit card
     * @minLength 0
     * @maxLength 20
     */
    expirationDateMasked?: string;
    expirationDateExpired?: boolean;
    /**
     * @minLength 0
     * @maxLength 200
     */
    cardHolderName?: string;
    /** Attach the credit card to profile. */
    attachCreditCardToProfile?: boolean;
    /** This contains information on whether EFT is enabled. A value of 'C' indicates EFT is enabled and 'M' indicates manual authorization is available for this payment card type. */
    processing?: CardProcessingType;
    swiped?: boolean;
    /** Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. */
    cardPresent?: boolean;
    /** This contains information on whether credit card is tokenized (token enabled). A value of 'Token' indicates credit card is token enabled and 'CardNumber' indicates non token environment for this payment card type. */
    cardOrToken?: CardNumberTypeType;
    /**
     * Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
     * @minLength 0
     * @maxLength 30
     */
    citId?: string;
}
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
/** This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. */
export declare enum CardTypeType {
    Ab = "Ab",
    Am = "Am",
    Ax = "Ax",
    Cb = "Cb",
    Dc = "Dc",
    Ds = "Ds",
    Dt = "Dt",
    Ec = "Ec",
    Er = "Er",
    Jc = "Jc",
    Jl = "Jl",
    Mc = "Mc",
    Nb = "Nb",
    So = "So",
    St = "St",
    Sw = "Sw",
    Va = "Va",
    Xy = "Xy",
    Zz = "Zz",
    Cp = "Cp",
    Cu = "Cu"
}
export declare enum CardProcessingType {
    Eft = "Eft",
    Manual = "Manual"
}
/** Simple type for indicating if credit card number is tokenized. */
export declare enum CardNumberTypeType {
    CardNumber = "CardNumber",
    Token = "Token"
}
export interface CurrencyExchangeServiceTaxes {
    /** List of currency exchange service taxes */
    currencyExchangeServiceTaxes?: CurrencyExchangeServiceTaxesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of currency exchange service taxes
 * @maxItems 4000
 */
export type CurrencyExchangeServiceTaxesType = CurrencyExchangeServiceTaxType[];
/** Currency exchange service tax identification details */
export interface CurrencyExchangeServiceTaxType {
    /**
     * Property associated with currency exchange service tax
     * @minLength 0
     * @maxLength 20
     */
    hotel?: string;
    /**
     * Currency exchange service tax code
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Starting value of exchange equivalent range */
    amountFrom?: number;
    /** End value of exchange equivalent range */
    amountTo?: number;
    /** Percentage of local currency */
    percentage?: number;
    /** Minimum service tax to be collected */
    minServiceTax?: number;
    /** Maximimum service tax to be collected */
    maxServiceTax?: number;
    /** Base tax basis of local currency. This is normally configured to the resulting tax basis of the previous tax slab range. */
    baseAmount?: number;
}
/** Response object for fetching Custom Tax Types. */
export interface CustomTaxTypesDetails {
    /** Collection of Custom Tax Types. */
    customTaxTypes?: CustomTaxTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Custom Tax Types.
 * @maxItems 4000
 */
export type CustomTaxTypesType = CustomTaxTypeType[];
/** Contains Common Master configuration detail. */
export interface CustomTaxTypeType {
    /**
     * Common Master unique code.
     * @minLength 0
     * @maxLength 40
     */
    code?: string;
    /** Description of the Master code. */
    description?: TranslationTextType2000;
    /** Common Master record sequence number. */
    displayOrder?: number;
}
/** Request object for creating Custom Tax Types. */
export interface CustomTaxTypesCriteria {
    /** Custom Tax Types to be created. */
    customTaxTypes?: CustomTaxTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing Custom Tax Types. */
export interface CustomTaxTypesToBeChanged {
    /** Custom Tax Types to be changed. */
    customTaxTypes?: CustomTaxTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface DailyPlanCodes {
    /** Collection of daily plan codes. */
    dailyPlanCodes?: DailyPlanCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Details for daily plan code along with associated transaction codes.
 * @maxItems 4000
 */
export type DailyPlanCodesType = DailyPlanCodeType[];
/** Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request. */
export interface DailyPlanCodeType {
    /**
     * Hotel where the code is configured.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Configuration code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Primay key of arrangement codes */
    arrangementId?: number;
    /** Description of the Folio Group Code. */
    description?: TranslationTextType2000;
    /**
     * information about the tax type code linked to the folio arrangment Code.
     * @maxLength 2000
     */
    taxTypeCode?: string;
    /** specify whether the arrangement postings are classed as revenue. */
    revenue?: boolean;
    /** Transaction codes that are associated to the folio grouping codes. */
    transactionCodes?: CodeListType;
}
/** @maxItems 4000 */
export type CodeListType = string[];
export interface ExpenseArrangementCodes {
    /** Collection of expense arrangement codes. */
    expenseArrangementCodes?: ExpenseArrangementCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Details for expense arrangement code along with associated transaction codes.
 * @maxItems 4000
 */
export type ExpenseArrangementCodesType = ExpenseArrangementCodeType[];
/** Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request. */
export interface ExpenseArrangementCodeType {
    /**
     * Hotel where the code is configured.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Configuration code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Primay key of arrangement codes */
    arrangementId?: number;
    /** Description of the Folio Group Code. */
    description?: TranslationTextType2000;
    /**
     * information about the tax type code linked to the folio arrangment Code.
     * @maxLength 2000
     */
    taxTypeCode?: string;
    /** specify whether the arrangement postings are classed as revenue. */
    revenue?: boolean;
    /** Transaction codes that are associated to the folio grouping codes. */
    transactionCodes?: CodeListType;
}
export interface FiscalFolioParameters {
    /** Collection of Fiscal Folio Parameter configurations. */
    fiscalFolioParameters?: FiscalFolioParametersType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Holds Fiscal Folio Parameter details.
 * @maxItems 4000
 */
export type FiscalFolioParametersType = FiscalFolioParameterType[];
/** Provides information about the Fiscal Folio Parameter. */
export interface FiscalFolioParameterType {
    /**
     * Code of the Hotel.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Fiscal folio parameter associated with Partner.
     * @minLength 0
     * @maxLength 80
     */
    partner?: string;
    /**
     * Code of the Fiscal Folio Parameter.
     * @minLength 0
     * @maxLength 80
     */
    code?: string;
    /**
     * Description of the Fiscal Folio Parameter.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Parameter value of the Fiscal Folio Parameter.
     * @minLength 0
     * @maxLength 200
     */
    value?: string;
    /** Indicates whether the Fiscal Folio Parameter is user created or from seed data. */
    internal?: boolean;
}
/** Response object for fetch folio type legend mapping. */
export interface FolioTypeLegendMappingsConfigDetails {
    /** Details about folio type legened mapping. */
    legends?: FolioTypeLegendMappingsConfigType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Details about folio type legened mapping.
 * @maxItems 4000
 */
export type FolioTypeLegendMappingsConfigType = FolioTypeLegendMappingConfigType[];
/** Folio type legened mapping information. */
export interface FolioTypeLegendMappingConfigType {
    /**
     * Property associated with folio type legend mapping
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Legend code to which folio types attached.
     * @minLength 0
     * @maxLength 20
     */
    legendCode?: string;
    /**
     * Folio type attached to the legend.
     * @minLength 0
     * @maxLength 20
     */
    folioType?: string;
    /**
     * Folio type description attached to the legend.
     * @minLength 0
     * @maxLength 200
     */
    folioTypeDescription?: string;
}
/** Request object to create folio type legend mapping information. */
export interface FolioTypeLegendMappingConfigCriteria {
    /** Criteria to create folio type legend mapping. */
    criteria?: FolioTypeLegendMappingConfigType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object to edit folio type legend mapping information. */
export interface FolioTypeLegendMappingConfigToBeChanged {
    /** Criteria to edit folio type legend mapping. */
    criteria?: FolioTypeLegendMappingConfigType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface FolioTypeLegendMappingConfigStatus {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface AdjustmentCodes {
    /** Collection of Adjustment Code configurations. */
    adjustmentCodes?: AdjustmentCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Holds Adjustment Code details.
 * @maxItems 4000
 */
export type AdjustmentCodesType = AdjustmentCodeType[];
/** Provides information about Adjustment Codes. */
export interface AdjustmentCodeType {
    /**
     * Code of the Hotel.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Adjustment Reason Code
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Correction type. e.g. ADJ for adjustment, COR for correction, DEL for deletion. */
    codeType?: AdjustmentReasonCodeType;
    /**
     * Adjustment Reason Description
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Amount or Percentage Value for Adjustment Code */
    amount?: CurrencyAmountType;
    /**
     * BIR Guest Type in Adjustment Codes.
     * @minLength 0
     * @maxLength 2000
     */
    bIRGuest?: string;
    /** Adjustment Code Calculation Type, valid values are Amount and Percentage. */
    amountOrPercentageFlag?: AmountOrPercentage;
}
/** Defines values for Adjustment reason codes. e.g. ADJ for adjustment, COR for correction, DEL for deletion. */
export declare enum AdjustmentReasonCodeType {
    Adjustment = "Adjustment",
    Correction = "Correction",
    Deletion = "Deletion",
    ServiceRecovery = "ServiceRecovery",
    CreditBill = "CreditBill"
}
/** Adjustment Code calculation type based on details. */
export declare enum AmountOrPercentage {
    Amount = "Amount",
    Percent = "Percent"
}
export interface TaxTypes {
    /** Collection of Tax Type configurations. */
    taxTypes?: TaxTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Holds Tax Type details.
 * @maxItems 4000
 */
export type TaxTypesType = TaxTypeType[];
/** Provides information about the Tax Type. */
export interface TaxTypeType {
    /**
     * Code of the Hotel.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Code of the Tax Type.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Tax Type.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** A boolean flag for Collecting Agent Tax */
    collectingAgentTax?: boolean;
    /** Print auto adjust information for this tax type on the tax exempt report. */
    printAutoAdjust?: boolean;
    /** Number of days after which the guest will be tax exempt. Only used for tax exempt report. */
    reportExemptDays?: number;
    /**
     * Tax percentage. Only used for tax exempt report.
     * @min 0
     * @max 100
     */
    reportTaxPercentage?: number;
    /** Minimun Length of Stay. */
    minimumLengthOfStay?: number;
}
/** Response object for fetching commission code details. */
export interface CommissionCodeDetail {
    /** Collection of commission code details. */
    commissionCodeDetail?: CommissionCodeDetailType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Commission code detail. */
export interface CommissionCodeDetailType {
    /** Commission code details. */
    commissionCodeInfo?: CommissionCodeInfoType;
}
/** Response object for fetching Comp Types. */
export interface CompTypesDetails {
    /** Collection of Comp Types. */
    compTypes?: CompTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of exchange rates and their information.
 * @maxItems 4000
 */
export type FuturePastExchangeRates = ExchangeRateType[];
/** Exchange rate configuration type. */
export interface ExchangeRateType {
    /**
     * Property where exchange rate is set.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Type for exchange calculation.
     * @maxItems 4000
     */
    exchangeType?: CurrencyExchangeType[];
    /** Currency code. */
    currency?: CodeDescriptionType;
    /** Exchange rate base currency. */
    baseCurrency?: CodeDescriptionType;
    /**
     * Date on which the rate is to become active.
     * @format date-time
     */
    beginDate?: string;
    /** Buy Rate for foreign currency. */
    buyRate?: number;
    /** Percentage of the amount that is to be a commission for the currency buy operation. */
    buyCommission?: number;
    /** Sell Rate for foreign currency. */
    sellRate?: number;
    /** Percentage of the amount that is to be a commission for the currency sell operation. */
    sellCommission?: number;
    /**
     * Comments associated with the exchange rate.
     * @maxLength 2000
     */
    comment?: string;
    /** Status past, present, or future. */
    status?: StatusTypes;
}
/** E-certificate conversion. */
export declare enum CurrencyExchangeType {
    Cash = "Cash",
    Settlement = "Settlement",
    Posting = "Posting",
    Check = "Check",
    TACommission = "TACommission",
    Membership = "Membership",
    Certificate = "Certificate"
}
/** Defines status in terms of time. */
export declare enum StatusTypes {
    Future = "Future",
    Current = "Current",
    Past = "Past"
}
/** Response for Ping operation. */
export interface OperaVersion {
    /** Opera version number. */
    operaVersion?: OperaVersionNumberType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Current Opera Version Number
 * @minLength 0
 * @maxLength 40
 */
export type OperaVersionNumberType = string;
/** Response object for fetching Stop Processing Reason. */
export interface StopProcessingReasons {
    /** Collection of Stop Processing Reasons. */
    stopProcessingReasons?: StopProcessingReasonsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of the Stop Processing Reasons to be configured or fetched
 * @maxItems 4000
 */
export type StopProcessingReasonsType = StopProcessingReasonType[];
/** Details for Stop Processing Reason. */
export interface StopProcessingReasonType {
    /**
     * Code is used to identify a Stop Processing Reason.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Stop Processing Reason.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Stop Processing Reason display sequence Number. */
    displaySequence?: number;
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
 * @title OPERA Cloud Front Desk Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /fof/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    articles: {
        /**
         * @description Operation to change articles. <p><strong>OperationId:</strong>putArticles</p>
         *
         * @tags CashieringConfig
         * @name PutArticles
         * @summary Operation to change Articles.
         * @request PUT:/articles
         */
        putArticles: (hotelId: string, articles: Articles, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to create articles. <p><strong>OperationId:</strong>postArticles</p>
         *
         * @tags CashieringConfig
         * @name PostArticles
         * @summary Operation to create Articles.
         * @request POST:/articles
         */
        postArticles: (hotelId: string, articles: Articles, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to return articles for one or multiple properties based on search criteria such as hotelIds, transactionCodes, articleCodes, etc. One transaction code can sometimes serve as an umbrella for multiple articles, which can be posted using that transaction code.  For example, a single mini bar food transaction code might cover potato chips, crackers, peanuts, pretzels, and so on.<p><strong>OperationId:</strong>getArticles</p>
         *
         * @tags CashieringConfig
         * @name GetArticles
         * @summary Get articles
         * @request GET:/articles
         */
        getArticles: (hotelId: string, query: {
            hotelIds: string[];
            transactionCodes?: string[];
            articleCodes?: string[];
            /** Unique Universal product code search criteria. */
            universalProductCode?: string;
            /**
             * Indicator that tells whether to include inactive articles in search results.
             * @example "false"
             */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ArticlesInfo, any>>;
        /**
         * @description Operation to remove articles. <p><strong>OperationId:</strong>deleteArticles</p>
         *
         * @tags CashieringConfig
         * @name DeleteArticles
         * @summary Operation to delete Articles.
         * @request DELETE:/articles
         */
        deleteArticles: (hotelId: string, query: {
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            hotelId: string;
            /** Unique code of the article. */
            articleCodes: string[];
            /** Hotel code to which the article belongs. */
            articleHotelId?: string[];
            /**
             * Indicates whether the article is inactive or not.
             * @example ["false"]
             */
            inactive?: boolean[];
            /** Display Order sequence. */
            orderSequence?: number[];
            /** Description of the article. */
            description?: string[];
            /** Transaction code to which the article belongs. */
            transactionCode?: string[];
            /** A monetary amount. */
            amount?: number;
            /** Provides a currency code to reflect the currency in which an amount may be expressed. */
            currencyCode?: string;
            /** Indicates whether the article is available for post it. */
            availableForPostIt?: boolean;
            /**
             * Color configuration type. This color configuration provides a visual category of entities.
             * @uniqueItems true
             */
            color?: 'Red' | 'DarkRed' | 'Green' | 'DarkGreen' | 'LightGreen' | 'Orange' | 'White' | 'Yellow' | 'DarkYellow' | 'Purple' | 'Brown' | 'Gray' | 'Aqua' | 'Chocolate' | 'Blue' | 'LightBlue' | 'DarkBlue' | 'Cyan' | 'DarkCyan' | 'Magenta' | 'DarkMagenta' | 'Black';
            /** Unique Universal product code of the article. */
            universalProductCode?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    authorizationConfigRule: {
        /**
         * @description  <p><strong>OperationId:</strong>putAuthorizationConfigRule</p>
         *
         * @tags CashieringConfig
         * @name PutAuthorizationConfigRule
         * @summary Operation to change AuthorizationConfigRule.
         * @request PUT:/authorizationConfigRule
         */
        putAuthorizationConfigRule: (hotelId: string, authorizationConfigRules: AuthorizationConfigRules, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postAuthorizationConfigRule</p>
         *
         * @tags CashieringConfig
         * @name PostAuthorizationConfigRule
         * @summary Operation to create AuthorizationConfigRule.
         * @request POST:/authorizationConfigRule
         */
        postAuthorizationConfigRule: (hotelId: string, authorizationConfigRules: AuthorizationConfigRules, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteAuthorizationConfigRule</p>
         *
         * @tags CashieringConfig
         * @name DeleteAuthorizationConfigRule
         * @summary Operation to delete AuthorizationConfigRule.
         * @request DELETE:/authorizationConfigRule
         */
        deleteAuthorizationConfigRule: (hotelId: string, query: {
            /** Property associated with authorization rule */
            hotelId: string[];
            /** Authorization rule Room type. */
            roomType?: string[];
            roomClassHotelId?: string;
            roomClassCode?: string;
            sourceCodeHotelId?: string;
            sourceCode?: string;
            /** Rate category Code. */
            rateCategory?: string;
            /** Rate code associated to this rule. */
            rateCode?: string[];
            /** Guarantee code associated to this rule. */
            guaranteeCode?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    authorizerGroups: {
        /**
         * @description Operation to change Authorizer Groups. <p><strong>OperationId:</strong>putAuthorizerGroups</p>
         *
         * @tags CashieringConfig
         * @name PutAuthorizerGroups
         * @summary Operation to change AuthorizerGroups.
         * @request PUT:/authorizerGroups
         */
        putAuthorizerGroups: (hotelId: string, authorizerGroupsToChange: AuthorizerGroupsToChange, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to create Authorizer Groups. <p><strong>OperationId:</strong>postAuthorizerGroups</p>
         *
         * @tags CashieringConfig
         * @name PostAuthorizerGroups
         * @summary Operation to create AuthorizerGroups.
         * @request POST:/authorizerGroups
         */
        postAuthorizerGroups: (hotelId: string, authorizerGroups: AuthorizerGroups, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to fetch Authorizer Groups. <p><strong>OperationId:</strong>getAuthorizerGroups</p>
         *
         * @tags CashieringConfig
         * @name GetAuthorizerGroups
         * @summary Operation to fetch AuthorizerGroups.
         * @request GET:/authorizerGroups
         */
        getAuthorizerGroups: (hotelId: string, query: {
            hotelIds: string[];
            /** Codes to be searched. */
            authorizerGroupsCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<AuthorizerGroups, any>>;
        /**
         * @description Operation to remove Authorizer Groups. <p><strong>OperationId:</strong>deleteAuthorizerGroups</p>
         *
         * @tags CashieringConfig
         * @name DeleteAuthorizerGroups
         * @summary Operation to delete AuthorizerGroups.
         * @request DELETE:/authorizerGroups
         */
        deleteAuthorizerGroups: (hotelId: string, query?: {
            /** Configuration code. */
            authorizerGroup?: string;
            /** Hotel where the code is configured. */
            hotelId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    autoFolioSettlementTypes: {
        /**
         * @description Use this API to get Auto Folio Settlement Types. <p><strong>OperationId:</strong>getAutoFolioSettlementTypes</p>
         *
         * @tags ChainConfig
         * @name GetAutoFolioSettlementTypes
         * @summary Get Auto Folio Settlement Types
         * @request GET:/autoFolioSettlementTypes
         */
        getAutoFolioSettlementTypes: (hotelId: string, query?: {
            /** Determines wether to fetch inactive records or not. */
            fetchInactive?: boolean;
            /** Codes to be searched. */
            codes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
            /** Description of the code. */
            description?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<AutoFolioSettlementTypesDetails, any>>;
        /**
         * @description Use this API to create Auto Folio Settlement Types. <p><strong>OperationId:</strong>postAutoFolioSettlementTypes</p>
         *
         * @tags ChainConfig
         * @name PostAutoFolioSettlementTypes
         * @summary Create Auto Folio Settlement Types
         * @request POST:/autoFolioSettlementTypes
         */
        postAutoFolioSettlementTypes: (hotelId: string, autoFolioSettlementTypesCriteria: AutoFolioSettlementTypesCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to update Auto Folio Settlement Types. <p><strong>OperationId:</strong>putAutoFolioSettlementTypes</p>
         *
         * @tags ChainConfig
         * @name PutAutoFolioSettlementTypes
         * @summary Change Auto Folio Settlement Types
         * @request PUT:/autoFolioSettlementTypes/{code}
         */
        putAutoFolioSettlementTypes: (hotelId: string, code: string, autoFolioSettlementTypesToBeChanged: AutoFolioSettlementTypesToBeChanged, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to delete Auto Folio Settlement Types. <p><strong>OperationId:</strong>deleteAutoFolioSettlementTypes</p>
         *
         * @tags ChainConfig
         * @name DeleteAutoFolioSettlementTypes
         * @summary Delete Auto Folio Settlement Types
         * @request DELETE:/autoFolioSettlementTypes/{code}
         */
        deleteAutoFolioSettlementTypes: (hotelId: string, code: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    cashierDetails: {
        /**
         * @description Use this API to return Cashier information based on search criteria such as cashierIDs, limit, name. <p><strong>OperationId:</strong>getCashiers</p>
         *
         * @tags CashieringConfig
         * @name GetCashiers
         * @summary Get cashiers
         * @request GET:/cashierDetails/cashiers
         */
        getCashiers: (hotelId: string, query: {
            /**
             * Numberic code for cashier ID.
             * @example ["54"]
             */
            cashierIDs: number[];
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /** Partial name of a cashier. */
            name?: string;
            /**
             * Indicator that tells whether to include inactive cashiers in search results.
             * @example "false"
             */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<CashiersDetails, any>>;
    };
    cashiers: {
        /**
         * @description This Operation to Change a Cashier. <p><strong>OperationId:</strong>putCashiers</p>
         *
         * @tags CashieringConfig
         * @name PutCashiers
         * @summary Operation to change CashiersDetails.
         * @request PUT:/cashiers
         */
        putCashiers: (hotelId: string, cashiers: Cashiers, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to Create Cashier. <p><strong>OperationId:</strong>postCashiers</p>
         *
         * @tags CashieringConfig
         * @name PostCashiers
         * @summary Operation to create Cashiers.
         * @request POST:/cashiers
         */
        postCashiers: (hotelId: string, cashiers: Cashiers, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description The operation returns a next available Cashier Number to be used while creating a new Cashier. <p><strong>OperationId:</strong>getAvailableCashierNumber</p>
         *
         * @tags CashieringConfig
         * @name GetAvailableCashierNumber
         * @summary Operation to fetch AvailableCashierNumber.
         * @request GET:/cashiers/nextAvailable
         */
        getAvailableCashierNumber: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<CashierNumber, any>>;
    };
    commissionCodes: {
        /**
         * @description  <p><strong>OperationId:</strong>getCommissionCodes</p>
         *
         * @tags CommissionConfig
         * @name GetCommissionCodes
         * @summary Operation to fetch commission codes.
         * @request GET:/commissionCodes
         */
        getCommissionCodes: (hotelId: string, query: {
            hotelIds: string[];
            commissionCodes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<CommissionCodesSummary, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>putCommissionCodes</p>
         *
         * @tags CommissionConfig
         * @name PutCommissionCodes
         * @summary Operation to change commission codes.
         * @request PUT:/commissionCodes
         */
        putCommissionCodes: (hotelId: string, commissionCodes: CommissionCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postCommissionCodes</p>
         *
         * @tags CommissionConfig
         * @name PostCommissionCodes
         * @summary Operation to create commission codes.
         * @request POST:/commissionCodes
         */
        postCommissionCodes: (hotelId: string, commissionCodes: CommissionCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteCommissionCodes</p>
         *
         * @tags CommissionConfig
         * @name DeleteCommissionCodes
         * @summary Operation to remove commission codes.
         * @request DELETE:/commissionCodes
         */
        deleteCommissionCodes: (hotelId: string, query: {
            /** Property of the commission code. */
            hotelIds: string[];
            /** Commission code for which details are deleted. */
            commissionCodes: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    compTypes: {
        /**
         * @description Operation to Create Comp Types <p><strong>OperationId:</strong>postCompTypes</p>
         *
         * @tags CashieringConfig
         * @name PostCompTypes
         * @summary Operation to Create Comp Types
         * @request POST:/compTypes
         */
        postCompTypes: (hotelId: string, compTypesCriteria: CompTypesCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to Change Comp Types. <p><strong>OperationId:</strong>changeCompTypes</p>
         *
         * @tags CashieringConfig
         * @name ChangeCompTypes
         * @summary Operation to Change Comp Types.
         * @request PUT:/compTypes
         */
        changeCompTypes: (hotelId: string, compTypesToBeChanged: CompTypesToBeChanged, params?: RequestParams) => Promise<AxiosResponse<CompTypesStatus, any>>;
        /**
         * @description Operation to Remove Comp Types. <p><strong>OperationId:</strong>removeCompTypes</p>
         *
         * @tags CashieringConfig
         * @name RemoveCompTypes
         * @summary Operation to Remove Comp Types.
         * @request DELETE:/compTypes/codes/{compTypesCode}
         */
        removeCompTypes: (hotelId: string, compTypesCode: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    configBankAccounts: {
        /**
         * @description  <p><strong>OperationId:</strong>getConfigBankAccounts</p>
         *
         * @tags CommissionConfig
         * @name GetConfigBankAccounts
         * @summary Operation to fetch config bank accounts.
         * @request GET:/configBankAccounts
         */
        getConfigBankAccounts: (hotelId: string, query: {
            hotels: string[];
            /** Codes to be searched. */
            bankCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BankAccountsInfo, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>putConfigBankAccounts</p>
         *
         * @tags CommissionConfig
         * @name PutConfigBankAccounts
         * @summary Operation to change config bank accounts.
         * @request PUT:/configBankAccounts
         */
        putConfigBankAccounts: (hotelId: string, bankAccounts: BankAccounts, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteConfigBankAccounts</p>
         *
         * @tags CommissionConfig
         * @name DeleteConfigBankAccounts
         * @summary Operation to remove config bank accounts.
         * @request DELETE:/configBankAccounts
         */
        deleteConfigBankAccounts: (hotelId: string, query: {
            /** Property of the bank account. */
            hotelId: string[];
            /** Bank account ID. */
            bankAccountID: number[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postConfigBankAccounts</p>
         *
         * @tags CommissionConfig
         * @name PostConfigBankAccounts
         * @summary Operation to create config bank accounts.
         * @request POST:/configBankAccounts
         */
        postConfigBankAccounts: (hotelId: string, bankAccounts: BankAccounts, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    creditCardInfo: {
        /**
         * @description Use this API to return the token inclusive cardType and expirationDate for the credit card used in a specific reservation. Oracle does not provide any credit card numbers. Include the hotelId and the cardId in the parameters. The cardId can be returned with the getReservation operation. <p><strong>OperationId:</strong>getCreditCardInfo</p>
         *
         * @tags CreditCard
         * @name GetCreditCardInfo
         * @summary Get credit card token information
         * @request GET:/creditCardInfo
         */
        getCreditCardInfo: (hotelId: string, query: {
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            hotelId: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationId?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            cardId?: string;
            /** Additional identifying value assigned by the creating system. */
            cardIdExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            cardIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            cardIdType?: string;
            /**
             * Currently supported transaction type categories used for credit card authorization.
             * @uniqueItems true
             */
            accessTransactionType?: 'Additional' | 'ArPayment' | 'Batch' | 'BatchDeposit' | 'BatchDepositRefund' | 'Billing' | 'CheckIn' | 'CheckInManualAuth' | 'Deposit' | 'EndOfDay' | 'EndOfDayDeposit' | 'Manual' | 'Other' | 'PasserBy' | 'PostIt' | 'PreCheckIn' | 'Refund' | 'Scheduled';
        }, params?: RequestParams) => Promise<AxiosResponse<CreditCardInfo, any>>;
    };
    currencyExchangeServiceTaxes: {
        /**
         * @description Operation to change currency exchange service taxes. <p><strong>OperationId:</strong>putCurrencyExchangeServiceTaxes</p>
         *
         * @tags CashieringConfig
         * @name PutCurrencyExchangeServiceTaxes
         * @summary Operation to change ExchangeServiceTaxes.
         * @request PUT:/currencyExchangeServiceTaxes
         */
        putCurrencyExchangeServiceTaxes: (hotelId: string, currencyExchangeServiceTaxes: CurrencyExchangeServiceTaxes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to create currency exchange service taxes. <p><strong>OperationId:</strong>postCurrencyExchangeServiceTaxes</p>
         *
         * @tags CashieringConfig
         * @name PostCurrencyExchangeServiceTaxes
         * @summary Operation to create CurrencyExchangeServiceTaxes.
         * @request POST:/currencyExchangeServiceTaxes
         */
        postCurrencyExchangeServiceTaxes: (hotelId: string, currencyExchangeServiceTaxes: CurrencyExchangeServiceTaxes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to fetch currency exchange service taxes. <p><strong>OperationId:</strong>getCurrencyExchangeServiceTaxes</p>
         *
         * @tags CashieringConfig
         * @name GetCurrencyExchangeServiceTaxes
         * @summary Operation to fetch CurrencyExchangeServiceTaxes.
         * @request GET:/currencyExchangeServiceTaxes
         */
        getCurrencyExchangeServiceTaxes: (hotelId: string, query: {
            hotelIds: string[];
            codes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<CurrencyExchangeServiceTaxes, any>>;
        /**
         * @description Operation to remove currency exchange service taxes. <p><strong>OperationId:</strong>deleteCurrencyExchangeServiceTaxes</p>
         *
         * @tags CashieringConfig
         * @name DeleteCurrencyExchangeServiceTaxes
         * @summary Operation to delete CurrencyExchangeServiceTaxes.
         * @request DELETE:/currencyExchangeServiceTaxes
         */
        deleteCurrencyExchangeServiceTaxes: (hotelId: string, query: {
            /** Property associated with currency exchange service tax */
            hotelId: string[];
            /** Currency exchange service tax code */
            currencyExchangeServiceTaxCode?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    customTaxTypes: {
        /**
         * @description Use this API to get Custom Tax Types. <p><strong>OperationId:</strong>getCustomTaxTypes</p>
         *
         * @tags ChainConfig
         * @name GetCustomTaxTypes
         * @summary Get Custom Tax Types
         * @request GET:/customTaxTypes
         */
        getCustomTaxTypes: (hotelId: string, query?: {
            /** Determines wether to fetch inactive records or not. */
            fetchInactive?: boolean;
            /** Codes to be searched. */
            codes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
            /** Description of the code. */
            description?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CustomTaxTypesDetails, any>>;
        /**
         * @description Use this API to create Custom Tax Types. <p><strong>OperationId:</strong>postCustomTaxTypes</p>
         *
         * @tags ChainConfig
         * @name PostCustomTaxTypes
         * @summary Create Custom Tax Types
         * @request POST:/customTaxTypes
         */
        postCustomTaxTypes: (hotelId: string, customTaxTypesCriteria: CustomTaxTypesCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to update Custom Tax Types. <p><strong>OperationId:</strong>changeCustomTaxTypes</p>
         *
         * @tags ChainConfig
         * @name ChangeCustomTaxTypes
         * @summary Change Custom Tax Types
         * @request PUT:/customTaxTypes/{taxTypeCode}
         */
        changeCustomTaxTypes: (hotelId: string, taxTypeCode: string, customTaxTypesToBeChanged: CustomTaxTypesToBeChanged, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to delete Custom Tax Types. <p><strong>OperationId:</strong>removeCustomTaxTypes</p>
         *
         * @tags ChainConfig
         * @name RemoveCustomTaxTypes
         * @summary Delete Custom Tax Types
         * @request DELETE:/customTaxTypes/{taxTypeCode}
         */
        removeCustomTaxTypes: (hotelId: string, taxTypeCode: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    dailyPlanCodes: {
        /**
         * @description  <p><strong>OperationId:</strong>putDailyPlanCodes</p>
         *
         * @tags CashieringConfig
         * @name PutDailyPlanCodes
         * @summary Operation to change DailyPlanCodes.
         * @request PUT:/dailyPlanCodes
         */
        putDailyPlanCodes: (hotelId: string, dailyPlanCodes: DailyPlanCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getDailyPlanCodes</p>
         *
         * @tags CashieringConfig
         * @name GetDailyPlanCodes
         * @summary Operation to fetch DailyPlanCodes.
         * @request GET:/dailyPlanCodes
         */
        getDailyPlanCodes: (hotelId: string, query: {
            hotelIds: string[];
            /**
             * A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true.
             * @example "false"
             */
            includeTransactionCodes?: boolean;
            /** Codes to be searched. */
            arrangementCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<DailyPlanCodes, any>>;
    };
    expenseArrangementCodes: {
        /**
         * @description  <p><strong>OperationId:</strong>putExpenseArrangementCodes</p>
         *
         * @tags CashieringConfig
         * @name PutExpenseArrangementCodes
         * @summary Operation to change ExpenseArrangementCodes.
         * @request PUT:/expenseArrangementCodes
         */
        putExpenseArrangementCodes: (hotelId: string, expenseArrangementCodes: ExpenseArrangementCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postExpenseArrangementCodes</p>
         *
         * @tags CashieringConfig
         * @name PostExpenseArrangementCodes
         * @summary Operation to create ExpenseArrangementCodes.
         * @request POST:/expenseArrangementCodes
         */
        postExpenseArrangementCodes: (hotelId: string, expenseArrangementCodes: ExpenseArrangementCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getExpenseArrangementCodes</p>
         *
         * @tags CashieringConfig
         * @name GetExpenseArrangementCodes
         * @summary Operation to fetch ExpenseArrangementCodes.
         * @request GET:/expenseArrangementCodes
         */
        getExpenseArrangementCodes: (hotelId: string, query: {
            hotelIds: string[];
            /**
             * A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true.
             * @example "false"
             */
            includeTransactionCodes?: boolean;
            /** Codes to be searched. */
            arrangementCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ExpenseArrangementCodes, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteExpenseArrangementCodes</p>
         *
         * @tags CashieringConfig
         * @name DeleteExpenseArrangementCodes
         * @summary Operation to delete ExpenseArrangementCodes.
         * @request DELETE:/expenseArrangementCodes
         */
        deleteExpenseArrangementCodes: (hotelId: string, query: {
            /** Hotel where the code is configured. */
            hotelId: string[];
            /** Configuration code. */
            code?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    fiscalFolioParameters: {
        /**
         * @description Operation to change Fiscal Folio Parameters. <p><strong>OperationId:</strong>putFiscalFolioParameters</p>
         *
         * @tags CashieringConfig
         * @name PutFiscalFolioParameters
         * @summary Operation to change FiscalFolioParameters.
         * @request PUT:/fiscalFolioParameters
         */
        putFiscalFolioParameters: (hotelId: string, fiscalFolioParameters: FiscalFolioParameters, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to fetch Fiscal Folio Parameters. <p><strong>OperationId:</strong>getFiscalFolioParameters</p>
         *
         * @tags CashieringConfig
         * @name GetFiscalFolioParameters
         * @summary Operation to fetch FiscalFolioParameters.
         * @request GET:/fiscalFolioParameters
         */
        getFiscalFolioParameters: (hotelId: string, query: {
            hotelIds: string[];
            code?: string[];
            /** Codes to be searched. */
            codes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
            /**
             * Indicates whether the Fiscal Folio Parameter is user created or from seed data. Set this true to see the standard Fiscal Folio Parameters that are seeded along with the manually created Fiscal Folio Parameters.
             * @example "false"
             */
            internal?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FiscalFolioParameters, any>>;
        /**
         * @description Operation to remove Fiscal Folio Parameters. <p><strong>OperationId:</strong>deleteFiscalFolioParameters</p>
         *
         * @tags CashieringConfig
         * @name DeleteFiscalFolioParameters
         * @summary Operation to delete FiscalFolioParameters.
         * @request DELETE:/fiscalFolioParameters
         */
        deleteFiscalFolioParameters: (hotelId: string, query?: {
            /** Code of the Hotel. */
            hotelId?: string[];
            /** Fiscal folio parameter associated with Partner. */
            partner?: string[];
            /** Code of the Fiscal Folio Parameter. */
            code?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    folioTypeLegendMappings: {
        /**
         * @description Operation to fetch folio type legend mappings config. <p><strong>OperationId:</strong>getFolioTypeLegendMappingsConfig</p>
         *
         * @tags CashieringConfig
         * @name GetFolioTypeLegendMappingsConfig
         * @summary Operation to fetch folio type legend mappings config.
         * @request GET:/folioTypeLegendMappings
         */
        getFolioTypeLegendMappingsConfig: (hotelId: string, query: {
            /** Property associated with folio type legend mapping */
            hotelId: string;
            /** Legend code to which folio types attached. */
            legendCode: string;
            /** Folio type to be searched. */
            folioType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FolioTypeLegendMappingsConfigDetails, any>>;
        /**
         * @description Operation to create folio type legend mappings config. <p><strong>OperationId:</strong>postFolioTypeLegendMappingConfig</p>
         *
         * @tags CashieringConfig
         * @name PostFolioTypeLegendMappingConfig
         * @summary Operation to create folio type legend mappings config.
         * @request POST:/folioTypeLegendMappings
         */
        postFolioTypeLegendMappingConfig: (hotelId: string, folioTypeLegendMappingConfigCriteria: FolioTypeLegendMappingConfigCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to change folio type legend mappings config. <p><strong>OperationId:</strong>changeFolioTypeLegendMappingConfig</p>
         *
         * @tags CashieringConfig
         * @name ChangeFolioTypeLegendMappingConfig
         * @summary Operation to change folio type legend mappings config.
         * @request PUT:/folioTypeLegendMappings
         */
        changeFolioTypeLegendMappingConfig: (hotelId: string, folioTypeLegendMappingConfigToBeChanged: FolioTypeLegendMappingConfigToBeChanged, params?: RequestParams) => Promise<AxiosResponse<FolioTypeLegendMappingConfigStatus, any>>;
    };
    hotelAdjustmentCodes: {
        /**
         * @description Operation to change Adjustment Codes. <p><strong>OperationId:</strong>putAdjustmentCodes</p>
         *
         * @tags CashieringConfig
         * @name PutAdjustmentCodes
         * @summary Operation to change AdjustmentCodes.
         * @request PUT:/hotelAdjustmentCodes
         */
        putAdjustmentCodes: (hotelId: string, adjustmentCodes: AdjustmentCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to create Adjustment Codes. <p><strong>OperationId:</strong>postAdjustmentCodes</p>
         *
         * @tags CashieringConfig
         * @name PostAdjustmentCodes
         * @summary Operation to create AdjustmentCodes.
         * @request POST:/hotelAdjustmentCodes
         */
        postAdjustmentCodes: (hotelId: string, adjustmentCodes: AdjustmentCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Operation to fetch Adjustment Codes. <p><strong>OperationId:</strong>getAdjustmentCodes</p>
         *
         * @tags CashieringConfig
         * @name GetAdjustmentCodes
         * @summary Operation to fetch AdjustmentCodes.
         * @request GET:/hotelAdjustmentCodes
         */
        getAdjustmentCodes: (hotelId: string, query: {
            hotelIds: string[];
            /** Codes to be searched. */
            adjustmentCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<AdjustmentCodes, any>>;
        /**
         * @description Operation to remove Adjustment Codes. <p><strong>OperationId:</strong>deleteAdjustmentCodes</p>
         *
         * @tags CashieringConfig
         * @name DeleteAdjustmentCodes
         * @summary Operation to delete AdjustmentCodes.
         * @request DELETE:/hotelAdjustmentCodes
         */
        deleteAdjustmentCodes: (hotelId: string, query?: {
            /** Configuration code. */
            adjustmentCode?: string;
            /** Hotel where the code is configured. */
            hotelId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    hotelTaxTypes: {
        /**
         * @description Operation to fetch Tax Types. <p><strong>OperationId:</strong>getTaxTypes</p>
         *
         * @tags CashieringConfig
         * @name GetTaxTypes
         * @summary Operation to fetch TaxTypes.
         * @request GET:/hotelTaxTypes
         */
        getTaxTypes: (hotelId: string, query: {
            hotelIds: string[];
            /** Codes to be searched. */
            taxTypeCodes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TaxTypes, any>>;
    };
    hotels: {
        /**
         * @description  <p><strong>OperationId:</strong>getCommissionCode</p>
         *
         * @tags CommissionConfig
         * @name GetCommissionCode
         * @summary Operation to fetch commission code.
         * @request GET:/hotels/{hotelId}/commissionCode/{commissionCode}
         */
        getCommissionCode: (commissionCode: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<CommissionCodeDetail, any>>;
        /**
         * @description Operation to Fetch Comp TYpes. <p><strong>OperationId:</strong>getCompTypes</p>
         *
         * @tags CashieringConfig
         * @name GetCompTypes
         * @summary Operation to Fetch Comp Types.
         * @request GET:/hotels/{hotelId}/compTypes
         */
        getCompTypes: (hotelId: string, query?: {
            /** Code is used to identify the CompType. */
            compTypeCode?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CompTypesDetails, any>>;
        /**
         * @description Operation to Fetch Future Past Exchange Rates. <p><strong>OperationId:</strong>getFuturePastExchangeRates</p>
         *
         * @tags CashieringConfig
         * @name GetFuturePastExchangeRates
         * @summary Operation to fetch FuturePastExchangeRates.
         * @request GET:/hotels/{hotelId}/exchangeRates/{currencyCode}
         */
        getFuturePastExchangeRates: (currencyCode: string, hotelId: string, query: {
            /**
             * E-certificate conversion.
             * @uniqueItems true
             * @example "Cash"
             */
            exchangeTypes: 'Cash' | 'Settlement' | 'Posting' | 'Check' | 'TACommission' | 'Membership' | 'Certificate';
            /** @format date */
            dateRangeStart?: string;
            /** @format date */
            dateRangeEnd?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FuturePastExchangeRates, any>>;
        /**
         * @description Operation to remove folio type legend mappings config. <p><strong>OperationId:</strong>removeFolioTypeLegendMappingConfig</p>
         *
         * @tags CashieringConfig
         * @name RemoveFolioTypeLegendMappingConfig
         * @summary Operation to remove folio type legend mappings config.
         * @request DELETE:/hotels/{hotelId}/folios/{folioType}/legends/{legendCode}
         */
        removeFolioTypeLegendMappingConfig: (legendCode: string, folioType: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    services: {
        /**
         * @description  <p><strong>OperationId:</strong>deleteCommisionConfigServicesCache</p>
         *
         * @tags CommissionConfig
         * @name DeleteCommisionConfigServicesCache
         * @summary Operation to clear cache.
         * @request DELETE:/services/commissionConfig/cache
         */
        deleteCommisionConfigServicesCache: (hotelId: string, query?: {
            /** Request object for cleaning WS cache input type */
            operaClearInput?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>pingCommisionConfigServices</p>
         *
         * @tags CommissionConfig
         * @name PingCommisionConfigServices
         * @summary Operation to ping.
         * @request GET:/services/commissionConfig/status
         */
        pingCommisionConfigServices: (hotelId: string, query?: {
            /** Opera Ping request input type */
            operaPingInput?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
    stopProcessingReasons: {
        /**
         * @description  <p><strong>OperationId:</strong>getStopProcessingReasons</p>
         *
         * @tags CommissionConfig
         * @name GetStopProcessingReasons
         * @summary Operation to fetch stop processing reasons.
         * @request GET:/stopProcessingReasons
         */
        getStopProcessingReasons: (hotelId: string, query?: {
            /**
             * Determines wether to fetch inactive records or not.
             * @example "false"
             */
            fetchInactive?: boolean;
            /** Codes to be searched. */
            codes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
            /** Description of the code. */
            description?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<StopProcessingReasons, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>putStopProcessingReasons</p>
         *
         * @tags CommissionConfig
         * @name PutStopProcessingReasons
         * @summary Operation to change stop processing reasons.
         * @request PUT:/stopProcessingReasons
         */
        putStopProcessingReasons: (hotelId: string, stopProcessingReasons: StopProcessingReasons, params?: RequestParams) => Promise<AxiosResponse<StopProcessingReasons, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postStopProcessingReasons</p>
         *
         * @tags CommissionConfig
         * @name PostStopProcessingReasons
         * @summary Operation to create stop processing reasons.
         * @request POST:/stopProcessingReasons
         */
        postStopProcessingReasons: (hotelId: string, stopProcessingReasons: StopProcessingReasons, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteStopProcessingReasons</p>
         *
         * @tags CommissionConfig
         * @name DeleteStopProcessingReasons
         * @summary Operation to remove stop processing reasons.
         * @request DELETE:/stopProcessingReasons
         */
        deleteStopProcessingReasons: (hotelId: string, query: {
            codes: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
}
