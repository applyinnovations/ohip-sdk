export interface GetBestAvailableRatesDetails {
    /** The list of best available rates for rate code(s) */
    bestAvailableRatesList?: BestAvailableRatesListType;
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
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The list of best availabe rates for rate code(s) */
export interface BestAvailableRatesListType {
    /**
     * Collection of best available rates for rate code(s)
     * @maxItems 4000
     */
    bestAvailableRates?: BestAvailableRateType[];
    /**
     * The list of references of rate code selected as best available rates
     * @maxItems 4000
     */
    masterInfoList?: MasterInfo[];
    /**
     * Hotel code for which best available rates will be considered.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** The list of best availabe rates for rates code(s). */
export interface BestAvailableRateType {
    /** Rate Code selected to be search. */
    rateCode?: CodeListType;
    /** Best available rate length of stay */
    lengthOfStay?: number;
    /**
     * Best available rate date available
     * @format date
     * @maxLength 8
     */
    date?: string;
}
/** @maxItems 4000 */
export type CodeListType = string[];
/** The reference to the rate codes selected as best availabe rates */
export interface MasterInfo {
    /** Rate Codes for which best available rates will be considered. */
    rate?: CodeDescriptionType;
}
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
/** Request to create best available rates for rate code(s) */
export interface CreateBestAvailableRates {
    /** The best available rates created. */
    bestAvailableRates?: BestAvailableRatesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The best available rate for rate code(s) */
export interface BestAvailableRatesType {
    /**
     * Hotel Code for Best Available Rate
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Rate Code selected to be search. */
    rateCode?: CodeListType;
    /** Date range for the best available rates. */
    dateRange?: DateRangeType;
    /** Days for which best available rates will be considered */
    duration?: {
        sunday?: boolean;
        monday?: boolean;
        tuesday?: boolean;
        wednesday?: boolean;
        thursday?: boolean;
        friday?: boolean;
        saturday?: boolean;
    };
    /** Length of Stay for which best available rates will be considered */
    lengthOfStay?: {
        /** Indicates Length of Stay 1 configuration. */
        lOS1?: boolean;
        /** Indicates Length of Stay 2 configuration. */
        lOS2?: boolean;
        /** Indicates Length of Stay 3 configuration. */
        lOS3?: boolean;
        /** Indicates Length of Stay 4 configuration. */
        lOS4?: boolean;
        /** Indicates Length of Stay 5 configuration. */
        lOS5?: boolean;
        /** Indicates Length of Stay 6 configuration. */
        lOS6?: boolean;
        /** Indicates Length of Stay 7 configuration. */
        lOS7?: boolean;
        /** Indicates Length of Stay 8 configuration. */
        lOS8?: boolean;
    };
}
/** Date Range with Start and End dates. */
export interface DateRangeType {
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Response object for fetching negotiated rates and profile discounts. */
export interface NegotiatedRates {
    /** Negotiated rates based on the search criteria. */
    negotiatedRates?: NegotiatedRatesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Negotiated rates to be maintained.
 * @maxItems 4000
 */
export type NegotiatedRatesType = NegotiatedRateType[];
/** Negotiated rate details */
export interface NegotiatedRateType {
    /**
     * Collection of Negotiated profiles.
     * @maxItems 4000
     */
    negotiatedProfile?: NegotiatedProfileType[];
    /**
     * Hotel Code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Rate plan code.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
}
/** Profile details */
export interface NegotiatedProfileType {
    /** Unique id for the Negotiated profile. */
    profileIdList?: UniqueIDListType;
    /** Name details for the profile. */
    profileName?: ProfileNameType;
    /**
     * collection of Negotiated rates.
     * @maxItems 4000
     */
    rateInfoList?: NegRateAccessType[];
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
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
     * @maxLength 40
     */
    type?: string;
}
/** This provides name information for a person. */
export interface ProfileNameType {
    /**
     * Family name, last name or Company Name.
     * @minLength 0
     * @maxLength 40
     */
    name?: string;
    /**
     * Full display Name.
     * @minLength 0
     * @maxLength 200
     */
    fullName?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @minLength 0
     * @maxLength 40
     */
    namePrefix?: string;
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 40
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @minLength 0
     * @maxLength 40
     */
    middleName?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @minLength 0
     * @maxLength 40
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @minLength 0
     * @maxLength 80
     */
    nameTitle?: string;
    /** Type of name of the individual, such as former, nickname, alternate or alias name. */
    nameType?: PersonNameTypeType;
}
/** Person's name in an external system. */
export declare enum PersonNameTypeType {
    Primary = "Primary",
    Alternate = "Alternate",
    Incognito = "Incognito",
    External = "External",
    Phonetic = "Phonetic"
}
/** Details of Negotiated rate. */
export interface NegRateAccessType {
    /**
     * Commission code for the negotiated rate.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /** Sequence for the negotiated rate. */
    negotiatedRateOrder?: number;
    /** Valid Time span for the negotiated rate. */
    newTimeSpan?: TimeSpanType;
    /**
     * List of discounts for the negotiated rate.
     * @maxItems 4000
     */
    discounts?: ProfileDiscountType[];
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface TimeSpanType {
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    duration?: string;
}
/** Discount details for a profile. */
export interface ProfileDiscountType {
    /** Valid Time span for the discount rate and days of week details. */
    dateRangeDetails?: TimeSpanDaysOfWeekType;
    /** Discount amount value and type. Percentage or flat for a discounted rate. */
    discAmount?: {
        amount?: number;
        /** @maxLength 2000 */
        flatOrPercentage?: string;
    };
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @maxLength 2000
     */
    url?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @minLength 0
     * @maxLength 80
     */
    instance?: string;
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
    /** Additional identifying value assigned by the creating system. */
    idExtension?: number;
}
/** Container for Time span with days of week. */
export interface TimeSpanDaysOfWeekType {
    /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
    timeSpan?: TimeSpanType;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
}
/** The types of Profile handled by the web service. */
export declare enum ProfileTypeType {
    Guest = "Guest",
    Agent = "Agent",
    Company = "Company",
    Group = "Group",
    Source = "Source",
    Employee = "Employee",
    Hotel = "Hotel",
    Vendor = "Vendor",
    Contact = "Contact",
    Purge = "Purge",
    BusinessHeader = "BusinessHeader",
    BillingAccount = "BillingAccount",
    Activity = "Activity",
    Potential = "Potential",
    Account = "Account"
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface NegotiatedRatesDetails {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object to fetch rate plan's complete details. */
export interface RatePlanInfo {
    /** Rate plan complete details such as primary details, classifications, room types etc. */
    ratePlans?: RatePlanType[];
    /** Refer to Generic common types document. */
    masterInfoList?: MasterInfoType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The Rate plan code Details. */
export interface RatePlanType {
    /** Rate plan code header primary details. */
    primaryDetails?: RatePlanPrimaryDetailsType;
    /** Rate plan code grouping details. */
    classifications?: RatePlanClassificationsType;
    /** Rate plan code header folio and transaction information. */
    transactionDetails?: RatePlanTransactionDetailsType;
    /** Commission details for Rate plan code. */
    rateCommission?: RatePlanCommissionType;
    /** Deposit details for Rate plan code. */
    rateDeposit?: RatePlanDepositType;
    /** Short and Long info details of the Rate Plan. */
    descriptions?: RatePlanDescriptionsType;
    /** List of room types that are supported by the Rate Plan. */
    roomTypeList?: RateRoomTypeListType;
    /** A collection of packages associated to the rate plan code. */
    ratePackages?: RatePackagesType;
    /** List of negotiated Profiles. */
    negotiatedRates?: {
        /** @maxItems 4000 */
        negotiatedRate?: NegotiatedRateType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Describes the sell and yield controls for the rate code. */
    controls?: RatePlanControlsType;
    /** Distribution setup for the rate code. */
    distribution?: RatePlanDistributionType;
    /** Indicators of additional information attached to the Rate code. */
    ratePlanCodeIndicators?: IndicatorsType;
    /** Rate plan types based on rates. */
    ratePlanBasedOnRates?: RatePlanBasedOnRatesType;
    /** Rate plan's summary information about its schedules. */
    ratePlanScheduleInfo?: RatePlanScheduleInfoType;
    /** Approval Notes for Rate plan code. */
    approvalNotes?: RatePlanNotesType;
    /** Rate plan's default routing instructions. */
    routingInstructions?: RatePlanRoutingInstructionsType;
    /** Elements which are needed by External Interfaces */
    externalAttributes?: RatePlanExternalAttributesType;
    /**
     * List of access exclusions.
     * @maxItems 4000
     */
    accessExclusions?: RateAccessExclusionType[];
    /** This is a placeholder element for future use. Functionality may not be available for the current implementation. */
    mobileCheckinAllowed?: boolean;
    /** This is a placeholder element for future use. Functionality may not be available for the current implementation. */
    mobileCheckoutAllowed?: boolean;
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Rate plan Code
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @format date
     * @maxLength 8
     */
    purgeDate?: string;
    /** Is rate amount suppressed for the rate plan? */
    supressRate?: boolean;
    /** Is Rate amount printed on the reports for the rate plan? */
    printRate?: boolean;
    /** Is rate plan code discounted? */
    discountAllowed?: boolean;
    /** Is redemption allowed on the rate code? */
    redemption?: boolean;
    /** Is rate plan code externally controlled? */
    externallyControlled?: boolean;
    /** Is rate plan code of BAR Rate type? */
    bARRate?: boolean;
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
    /** An amount that act as Floor value for Rate Plan. */
    floorAmount?: number;
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
    /** Sell Sequence for the rate plan. */
    sellSequence?: number;
    /** The particular rate code is marked as privileged making it restrictive on who can update information. */
    privilegedRate?: boolean;
    /** The restrictions marked on the rate code are marked as privileged making it restrictive on who can update information. */
    privilegedRateRestriction?: boolean;
    /** In Advanced Dynamic Base Rates, specifies how the rate code rates are defined, either as FLAT (defined by amounts) or DIFFERENTIAL (defined by offset). */
    baseType?: BaseType;
    /** Specifies the lock status of the rate code. Rates can be Unlocked, Externally locked, locked at Property level, or locked at Central level. */
    lockStatus?: RateCodeLockStatusType;
    /** Approval Status of the Rate Plan. */
    approvalStatus?: RatePlanApprovalStatusType;
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
export interface RatePlanClassificationsType {
    /**
     * Rate Category for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    rateCategory?: string;
    /**
     * Display set for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    displaySet?: string;
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
    /**
     * Rate group for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    rateGroup?: string;
}
export interface RatePlanTransactionDetailsType {
    /** Folio text of the rate plan. */
    folioText?: TranslationTextType2000;
    /**
     * Transaction code used by the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    transactionCode?: string;
    /** Collection of transaction codes configured by room types/room classes. The Revenue Posting by Room Type/Room Class function should be on to use this element. */
    roomTransactionCodes?: RatePlanRoomTransactionCodesType;
    /**
     * Package Transaction code used by the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    packageTransactionCode?: string;
    /**
     * Currency code used by the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /** Is tax included in the rate plan? */
    rateIncludesTax?: boolean;
    /** Determines how the exchange rate is set for the rate code. */
    exchangePosting?: ExchangePostingType;
    /** Determines the rate code posting rhythm. */
    postingRhythm?: RatePlanPostingRhythmType;
    /** When the Advanced Rate Code Posting Rhythm parameter is turned on, this element will contain the collection of advanced Buy x Get y posting rhythms for the rate plan. */
    advancedPostingRhythms?: RatePlanAdvancedPostingRhythmsType;
}
/**
 * Single transaction code and room type/class association.
 * @maxItems 4000
 */
export type RatePlanRoomTransactionCodesType = RatePlanRoomTransactionCodeType[];
/** Transaction code associated to a room type or room class on a rate plan. */
export interface RatePlanRoomTransactionCodeType {
    /**
     * Room type which the transaction code is associated to.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /**
     * Room class which the transaction code is associated to.
     * @minLength 0
     * @maxLength 20
     */
    roomClass?: string;
    /**
     * Transaction code associated to the room type/room class.
     * @minLength 0
     * @maxLength 20
     */
    transactionCode?: string;
}
/** Fixed at Block. */
export declare enum ExchangePostingType {
    FixedAtCheckIn = "FixedAtCheckIn",
    FixedAtReservation = "FixedAtReservation",
    CurrentDate = "CurrentDate",
    FixedAtBlock = "FixedAtBlock"
}
/** Rate Plan Posting rhythm type. */
export interface RatePlanPostingRhythmType {
    /** Do not Post the Rate Code every X nights. This can be used to offer free nights after staying certain number of nights on the rate plan. */
    doNotPostEveryXNights?: {
        /**
         * The night the rate plan is not supposed to be posted.
         * @min 1
         * @max 14
         */
        xNight?: number;
        /** Post the packages on free nights if the packages posting rhythm falls on the night rate plan is not getting posted. */
        postPackages?: boolean;
    };
}
/**
 * Posting rhythm details for a rate plan containing Buy x Get y functionality.
 * @maxItems 4000
 */
export type RatePlanAdvancedPostingRhythmsType = RatePlanAdvancedPostingRhythmType[];
/** Posting rhythm details for a rate plan containing Buy x Get y functionality. */
export interface RatePlanAdvancedPostingRhythmType {
    /**
     * Code identifying the posting rhythm within the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the posting rhythm offer.
     * @minLength 0
     * @maxLength 40
     */
    description?: string;
    /**
     * Date which the posting rhythm becomes applicable.
     * @format date
     * @maxLength 8
     */
    beginSellDate?: string;
    /**
     * Date which the posting rhythm ceases to be applicable.
     * @format date
     * @maxLength 8
     */
    endSellDate?: string;
    /** The number of nights which are required to be paid in order to receive free nights. */
    requiredPaidNights?: number;
    /** The number of free nights which are eligible when the number of required paid nights has been met. */
    eligibleFreeNights?: number;
    /** Indicates if the posting rhythm offer can be repeated more than once during the entire stay. */
    repeatWithinStay?: boolean;
    /** Indicates if the posting rhythm offer can be repeated more than once within a specific sell segment of the reservation. */
    repeatWithinSellSegment?: boolean;
}
export interface RatePlanCommissionType {
    /**
     * commission code used by the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /** commission percentage used by the rate plan. */
    commissionPercentage?: number;
    /** commission amount used by the rate plan. */
    commissionAmount?: number;
}
export interface RatePlanDepositType {
    /** Deposit maturity preference used by the rate plan. */
    depositMaturityPreference?: DepositMaturityPreferenceType;
}
/** Fixed values for Deposite Maturity Preference affecting the rate code */
export declare enum DepositMaturityPreferenceType {
    CheckIn = "CheckIn",
    LastStayNight = "LastStayNight",
    LastDayAdvDeposit = "LastDayAdvDeposit"
}
/** Info URL, Short and Long Info details of the rate plan. */
export interface RatePlanDescriptionsType {
    /** Short info of the rate plan. */
    shortInfo?: TranslationTextType2000;
    /** Long info of the rate plan. */
    longInfo?: TranslationTextType2000;
    /**
     * Info URL is the location associated for more information about the rate plan.
     * @maxLength 2000
     */
    infoURL?: string;
    /**
     * Rate information template which is configured for the hotel. This value can be used to populate the LongInfo of this rate plan, if desired.
     * @minLength 0
     * @maxLength 2000
     */
    rateInfoTemplate?: string;
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
    /**
     * Text description for the room type
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** True if room type will not be associated with physical rooms included in inventory */
    pseudo?: boolean;
    /** This is the minimum amount of which room can be sold */
    rateFloor?: number;
}
export interface RatePackagesType {
    /** A collection of packages attached to the rate code. */
    packages?: RatePackageCodeListType;
    /**
     * Package Group full Information along with the members that belong to this Group.
     * @maxItems 4000
     */
    packageGroups?: RatePackageGroupType[];
}
/**
 * Rate Package Full Information
 * @maxItems 4000
 */
export type RatePackageCodeListType = RatePackageCodeType[];
/** Package code details applied to a rate plan. */
export interface RatePackageCodeType {
    /** Package code header details. */
    header?: PackageCodeHeaderType;
    /**
     * Package code price schedule details.
     * @maxItems 4000
     */
    schedules?: ConfigPackageScheduleType[];
    /**
     * Hotel code for the packages.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Package Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Package Code Description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Indicates if it is a Package Group or not. */
    group?: boolean;
    /**
     * Package Code specific to a rate plan code.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Flag to adjust the overlapping dates automatically. True will allow the system to adjust the overlapping dates automatically . False will not allow overlapping dates and throws error messages if overlapping dates are found */
    adjustOverlappingRange?: boolean;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * Package code schedule price exception for the rate plan.
     * @maxItems 4000
     */
    scheduleExceptions?: ConfigPackageScheduleType[];
    /** Quantity of the package code included in the rate plan. */
    quantity?: number;
}
export interface PackageCodeHeaderType {
    /** Package code header primary details. */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /** Package code header transaction information. */
    transactionDetails?: ConfigPackageTransactionType;
    /** Package code posting attributes. */
    postingAttributes?: ConfigPostingAttributesType;
    /** Package code usage information. */
    usageDetails?: ConfigPackageUsageDetailType;
}
/** A Config Package Info type. */
export interface ConfigPackagePrimaryDetailsType {
    /**
     * The description of the package.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * The short description of the package.
     * @minLength 0
     * @maxLength 2000
     */
    shortDescription?: string;
    /**
     * The Forecast group package belongs to.
     * @minLength 0
     * @maxLength 20
     */
    forecastGroup?: string;
    /**
     * Arrangement Code.
     * @minLength 0
     * @maxLength 20
     */
    arrangementCode?: string;
    /**
     * Indicates the begin sell date of the package.
     * @format date
     * @maxLength 8
     */
    beginSellDate?: string;
    /**
     * Indicates the end sell date of the package.
     * @format date
     * @maxLength 8
     */
    endSellDate?: string;
}
/** A HotelPackageTransaction type. */
export interface ConfigPackageTransactionType {
    /** Package is marked as an allowance, in case charge is expected back to the guest account from external interface eg. POS. which need to be offset against a consumption allowance. */
    allowance?: boolean;
    /**
     * The currency code for this package.
     * @minLength 0
     * @maxLength 20
     */
    currency?: string;
    /**
     * The posting frequency for this package, e.g., daily, arrival, departure, etc.
     * @minLength 0
     * @maxLength 20
     */
    postingType?: string;
    /**
     * The price calculation rule for this package.
     * @minLength 0
     * @maxLength 80
     */
    calculationRule?: string;
    /** The package posting rule details. */
    packagePostingRules?: PackagePostingRulesType;
}
export interface PackagePostingRulesType {
    /** The Transaction code used to post the package price. */
    transactionCode?: PackageTransactionCodeType;
    /** The overage code to record over consumed allowance. */
    overageCode?: PackageTransactionCodeType;
    /** The transaction code to record package profit, if any, from un-consumed allowance. */
    profitCode?: PackageTransactionCodeType;
    /** The transaction code to record package Loss, if any, from un-consumed allowance. */
    lossCode?: PackageTransactionCodeType;
    /**
     * The alternate transaction code that can be consumed by the guest in place of the transaction code.
     * @maxItems 4000
     */
    alternateCodesList?: PackageTransactionCodeType[];
}
export interface PackageTransactionCodeType {
    /**
     * The description of the code.
     * @minLength 0
     * @maxLength 200
     */
    description?: string;
    /**
     * Posting / transaction code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Code is inclusive or exclusive of other chanrges such as taxes. */
    type?: AmountDeterminationType;
}
/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
export declare enum AmountDeterminationType {
    Inclusive = "Inclusive",
    Exclusive = "Exclusive"
}
/** A config Package posting attributes type. */
export interface ConfigPostingAttributesType {
    /** The package price is added to the room rate. */
    addToRate?: boolean;
    /** The package price is printed on separate line of the folio. */
    printSeparateLine?: boolean;
    /** Can the package be sold separate from rate plan code? */
    sellSeparate?: boolean;
    /** package charges will be posted next business day. */
    postNextDay?: boolean;
    /** Package will be forecasted for consumption the next business day. */
    forecastNextDay?: boolean;
    /** Indicates whether a delivery time is required for the package. */
    deliveryTimeRequired?: boolean;
    /** Can package be sold via Web channel. */
    webBookable?: boolean;
    /**
     * The custom formula used for this package, if any.
     * @minLength 0
     * @maxLength 2000
     */
    formula?: string;
    /**
     * The custom formula function name used for this package, if any.
     * @minLength 0
     * @maxLength 2000
     */
    formulaFunctionName?: string;
    /** The function argument name-value combination accepted by the custom formula used for this package. */
    formulaFunctionArguments?: FunctionArgumentsType;
    /** Start time the package is valid. */
    startTime?: string;
    /** End time the package is valid. */
    endTime?: string;
    /** Is package used for catering? */
    catering?: boolean;
    /** The posting rhythm for this package. */
    postingRhythm?: PackagePostingRhythmType;
    /** The price calculation rule for this package. */
    priceCalculationRule?: PackageCalculationRuleType;
    /** Indicates whether a package is configured as a ticket or not. */
    ticket?: boolean;
    /**
     * Package Code Inventory Items type.
     * @maxItems 4000
     */
    inventoryItems?: PkgInventoryItemType[];
    /** Calculated Package Price based from Number of Adults, Children and Calculation Rule. */
    calculatedPrice?: number;
}
/**
 * Collection of function arguments and their corresponding values.
 * @maxItems 4000
 */
export type FunctionArgumentsType = FunctionArgumentType[];
/** This type provided details of a function argument and the value it holds. */
export interface FunctionArgumentType {
    /**
     * Specifies the name of the function argument.
     * @minLength 0
     * @maxLength 200
     */
    name?: string;
    /**
     * Specifies the value held by the function argument.
     * @minLength 0
     * @maxLength 200
     */
    value?: string;
    /** Specifies the position of the function argument in the argument list. */
    position?: number;
    /**
     * Specifies the datatype of the function argument.
     * @minLength 0
     * @maxLength 40
     */
    dataType?: string;
    /** Argument of the function mandatory or not. */
    required?: boolean;
}
/** Package Posting rhythm type. */
export interface PackagePostingRhythmType {
    /** Post the package every X nights Staring from Night Y. */
    everyXNightsStartingNightY?: {
        /** Starting night for consumption and posting prices. */
        startOnNightY?: number;
        /** Occurance of nights when the package needs to be posted and consumed. */
        postEveryXNights?: number;
    };
    /** Post the package on certain nights of the week. */
    certainNightsOfTheWeek?: {
        sunday?: boolean;
        monday?: boolean;
        tuesday?: boolean;
        wednesday?: boolean;
        thursday?: boolean;
        friday?: boolean;
        saturday?: boolean;
    };
    /** This user defined schedule lets you enter a posting rhythm over a 14-day period, starting with the arrival date, by assigning the day (number) within a guest stay for posting this package price. */
    customStaySchedule?: {
        /** Night 1 indicator. */
        night1?: boolean;
        /** Night 2 indicator. */
        night2?: boolean;
        /** Night 3 indicator. */
        night3?: boolean;
        /** Night 4 indicator. */
        night4?: boolean;
        /** Night 5 indicator. */
        night5?: boolean;
        /** Night 6 indicator. */
        night6?: boolean;
        /** Night 7 indicator. */
        night7?: boolean;
        /** Night 8 indicator. */
        night8?: boolean;
        /** Night 9 indicator. */
        night9?: boolean;
        /** Night 10 indicator. */
        night10?: boolean;
        /** Night 11 indicator. */
        night11?: boolean;
        /** Night 12 indicator. */
        night12?: boolean;
        /** Night 13 indicator. */
        night13?: boolean;
        /** Night 14 indicator. */
        night14?: boolean;
    };
    /** The start and end of the posting period is determined as follows: If the package is attached to a rate code: The period starts with the date when the rate code to which the package is attached becomes effective for the stay. The period ends with the date of the last night for that rate code (or the last night of the stay if the rate code remains in effect until the departure date). If the package is attached separately to the reservation: The Begin Date specified on the reservation when the package was attached is the start date for the period. The End Date specified on the reservation when the package was attached is the end date for the period. If no Begin Date and/or End Date are specified when the package is attached to the reservation, the Begin Date is assumed to be the arrival date and the End Date is assumed to be the departure date of the reservation, irrespective of when the package is attached to the reservation. */
    customNightSchedule?: {
        /** Night 1 indicator. */
        night1?: boolean;
        /** Night 2 indicator. */
        night2?: boolean;
        /** Night 3 indicator. */
        night3?: boolean;
        /** Night 4 indicator. */
        night4?: boolean;
        /** Night 5 indicator. */
        night5?: boolean;
        /** Night 6 indicator. */
        night6?: boolean;
        /** Night 7 indicator. */
        night7?: boolean;
        /** Night 8 indicator. */
        night8?: boolean;
        /** Night 9 indicator. */
        night9?: boolean;
        /** Night 10 indicator. */
        night10?: boolean;
        /** Night 11 indicator. */
        night11?: boolean;
        /** Night 12 indicator. */
        night12?: boolean;
        /** Night 13 indicator. */
        night13?: boolean;
        /** Night 14 indicator. */
        night14?: boolean;
    };
    /** Posting Rhythm for the package. */
    type?: PostingRhythmType;
}
/** Simple type for posting Rhythm types. */
export declare enum PostingRhythmType {
    EveryNight = "EveryNight",
    ArrivalNight = "ArrivalNight",
    EveryXNightsStartingNightY = "EveryXNightsStartingNightY",
    CertainNightsOfTheWeek = "CertainNightsOfTheWeek",
    LastNight = "LastNight",
    EveryNightExceptArrivalNight = "EveryNightExceptArrivalNight",
    EveryNightExceptLast = "EveryNightExceptLast",
    EveryNightExceptFirstAndLast = "EveryNightExceptFirstAndLast",
    CustomStaySchedule = "CustomStaySchedule",
    CustomNightSchedule = "CustomNightSchedule",
    FloatingAllowancePerStay = "FloatingAllowancePerStay",
    TicketPosting = "TicketPosting"
}
/** Simple type for package caluculation rules. */
export declare enum PackageCalculationRuleType {
    FlatRate = "FlatRate",
    PerPerson = "PerPerson",
    PerAdult = "PerAdult",
    PerChild = "PerChild",
    PerRoom = "PerRoom"
}
export interface PkgInventoryItemType {
    /**
     * Article Number of the inventory item.
     * @minLength 0
     * @maxLength 20
     */
    articleNumber?: string;
    /**
     * Description of the inventory item.
     * @minLength 0
     * @maxLength 200
     */
    description?: string;
    /** Quantity of the inventory item allocated to the package. */
    quantity?: number;
    /** Identifier for the inventory item. */
    itemId?: number;
}
/** A Config Package Usage Detail type. */
export interface ConfigPackageUsageDetailType {
    /** Indicates if the source of the product is Rate header, Rate Detail or Reservation. */
    source?: ProductSourceType;
    /** Indicates if the package is used in, reserved or prospect reservations. */
    usedInReservations?: boolean;
    /** Indicates if the package is used in any rate code. */
    usedInRates?: boolean;
    /** Indicates if any checked in reservations are using this product. */
    usedInHouseReservations?: boolean;
}
/** Sources of Products */
export declare enum ProductSourceType {
    Reservation = "Reservation",
    RateHeader = "RateHeader",
    RateDetail = "RateDetail"
}
/** A Hotel Package Schedule. */
export interface ConfigPackageScheduleType {
    /** The new time span for package price. */
    newTimeSpan?: TimeSpanType;
    /**
     * Collection of price schedule for the package.
     * @maxItems 4000
     */
    schedulePrices?: HotelPackageSchedulePriceType[];
    /**
     * The rate plan code specific prices for the package (if any).
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Minimum number of nights that are required on a reservation to avail the package. */
    minNights?: number;
    /** Maximum number of nights that are required on a reservation to avail the package. */
    maxNights?: number;
    /** Minimum number of persons that are required on a reservation to avail the package. */
    minPersons?: number;
    /** Maximum number of persons that are required on a reservation to avail the package. */
    maxPersons?: number;
    /** New minimum number of nights that are required on a reservation to avail the package. */
    newMinNights?: number;
    /** New maximum number of nights that are required on a reservation to avail the package. */
    newMaxNights?: number;
    /** New minimum number of persons that are required on a reservation to avail the package. */
    newMinPersons?: number;
    /** New maximum number of persons that are required on a reservation to avail the package. */
    newMaxPersons?: number;
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/** A Hotel Package Schedule Pricing. */
export interface HotelPackageSchedulePriceType {
    /** The price per unit of the package. */
    unitPrice?: number;
    /** The allowance per unit of the package. */
    unitAllowance?: number;
    /** The bucket is applicable for child bucket functionality when package's price calculation rule is Child. */
    bucket?: PackageChildBuckets;
}
/** Simple type for package child buckets. */
export declare enum PackageChildBuckets {
    Bucket1 = "Bucket1",
    Bucket2 = "Bucket2",
    Bucket3 = "Bucket3"
}
/** Information about a package group common to all usages. */
export interface RatePackageGroupType {
    /**
     * Package group description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * The short description of the package group.
     * @minLength 0
     * @maxLength 40
     */
    shortDescription?: string;
    /**
     * Package group Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Can Package group be sold separately? */
    sellSeparate?: boolean;
    /** Is Package group web bookable? */
    webBookable?: boolean;
    /** List of Package group members for a rate plan. */
    packages?: RatePackageCodeListType;
}
export interface RatePlanControlsType {
    /** Sell controls for the rate code i.e. min. Length of stay, max Length of Stay etc. */
    sell?: RatePlanSellControlsType;
    /** Yield controls for the rate code i.e. Is rate yieldable? Rate bucket it belongs to? Yield Market it belongs to? etc . */
    yield?: RatePlanYieldControlsType;
}
export interface RatePlanSellControlsType {
    /** Minimum number of nights the guest has to stay through to consume this rate plan code. */
    minimumStayThrough?: number;
    /** Maximum number of nights the guest has to stay through to consume this rate plan code. */
    maximumStayThrough?: number;
    /** Minimum number of nights the guest has to stay to consume this rate plan code. */
    minimumLengthOfStay?: number;
    /** Maximum number of nights the guest has to stay to consume this rate plan code. */
    maximumLengthOfStay?: number;
    /** Minimum number of days the guest has to book in advance to consume this rate plan code. */
    minimumAdvanceBooking?: number;
    /** Maximum number of days the guest has to book in advance to consume this rate plan code. */
    maximumAdvanceBooking?: number;
}
export interface RatePlanYieldControlsType {
    /** Is rate plan code Yieldable / non-yieldable / stay-pattern? */
    yieldable?: RatePlanYieldableType;
    /**
     * This rate plan code is to be yielded as Yield as Rate Plan Code (if any).
     * @minLength 0
     * @maxLength 20
     */
    yieldAsRatePlanCode?: string;
    /** The List of Yeild market codes to be used for this Rate Plan Code (if any). */
    yieldMarketCodeList?: YieldMarketCodeListType;
    /**
     * The rate bucket the rate plan code belongs to.
     * @minLength 0
     * @maxLength 20
     */
    rateBucket?: string;
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
export interface RatePlanDistributionType {
    /** Restriction updates for the rate plan to be sent to channels? */
    restrictionUpdate?: boolean;
    /** Rate updates for the rate plan to be sent to channels? */
    rateUpdate?: boolean;
    /** Consider the rate plan for regional availability to be used by channels? */
    regionalAvailability?: boolean;
    /** Rate plan to be uploaded to MyFidleio and published. */
    myFidelioUploadAllowed?: boolean;
    /** Flag to indicate if Rate Plan is mapped to at least one Channel. */
    channelRateMappingExists?: boolean;
    /** Rate plan Code is available for channels. */
    channelAllowed?: boolean;
}
/**
 * Collection of lamp indicators.
 * @maxItems 4000
 */
export type IndicatorsType = IndicatorType[];
/** Lamp indicator Type. */
export interface IndicatorType {
    /**
     * Name of the indicator.
     * @minLength 0
     * @maxLength 80
     */
    indicatorName?: string;
    /** Indicates number of occurrences of the indicator. */
    count?: number;
}
/**
 * Rate plan type based on rates.
 * @maxItems 2
 */
export type RatePlanBasedOnRatesType = RatePlanBasedOnRateType[];
/** Base Rate type such as "Base Rate", "Dynamic Base Rate" */
export interface RatePlanBasedOnRateType {
    /** Base Rate type */
    baseRate?: {
        /**
         * Rate plan code used to base the rate on.
         * @minLength 0
         * @maxLength 20
         */
        basedOnRatePlan?: string;
        /** Base Amount used for base rate calculation. */
        baseAmount?: number;
        /**
         * Flat or Percentage (FLT/PCT) indicator.
         * @minLength 0
         * @maxLength 3
         */
        flatOrPercentage?: string;
        /**
         * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
         * @minLength 0
         * @maxLength 1
         */
        rounding?: string;
        /** Dependent Rate plan code(s) for the rate plan. It is the list of rate plans that are based on the Rate Plan. */
        dependentRatePlans?: RatePlanCodeListType;
    };
    /** Dynamic Base Rate type */
    dynamicBaseRate?: {
        /**
         * Rate plan code used to Dynamically base the rate on.
         * @minLength 0
         * @maxLength 20
         */
        dynamicBasedOnRatePlan?: string;
        /** Base Amount used for Dynamic base rate calculation. */
        dynamicBaseAmount?: number;
        /**
         * Flat or Percentage (FLT/PCT) indicator.
         * @minLength 0
         * @maxLength 3
         */
        flatOrPercentage?: string;
        /**
         * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
         * @minLength 0
         * @maxLength 1
         */
        rounding?: string;
        /** While showing availability, do system need to compare the static rates defined for the rate with dynamically computed base rate pricing? If true, availability shows lower of the these two pricing. If false, availabilty shows the dynamically calucated pricing. */
        compareWithRateSchedules?: boolean;
        /** Dependent Rate plan code(s) for the rate plan.It is the list of rate plans that are Dynamically based on the Rate Plan. */
        dependentRatePlans?: RatePlanCodeListType;
    };
    /** Best Available Rate (BAR) Based Rate type */
    bARBasedRate?: {
        /** Base Amount used for BAR based rate calculation. */
        bARBaseAmount?: number;
        /**
         * Flat or Percentage (FLT/PCT) indicator.
         * @minLength 0
         * @maxLength 3
         */
        flatOrPercentage?: string;
        /**
         * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
         * @minLength 0
         * @maxLength 1
         */
        rounding?: string;
        /** While showing availability, do system need to compare the static rates defined for the rate with dynamically computed BAR based rate pricing? If true, availability shows lower of the these two pricing. If false, availabilty shows the dynamically calucated pricing. */
        compareWithRateSchedules?: boolean;
        /** While showing availability, in case all the BAR rates are closed whether to calculate the rate amount based on highest BAR instead of defaulting to its own rate schedule. If false, availability shows rates from its own rate schedule. */
        defaultToHighestBar?: boolean;
    };
    /** Advanced Dynamic Base Rate type */
    advancedDynamicBaseRate?: AdvancedDynamicBaseRateType;
    /** Determines the type of Based on Rate plan. None type signifies it is not based on rate plan and if passed to any operation that changes rate plan will remove the Based On Rate Plan (if any). */
    basedOnRatePlanType?: BasedOnRatePlanType;
}
/**
 * Rate Plan code.
 * @maxItems 4000
 */
export type RatePlanCodeListType = string[];
/** Advanced Dynamic Base Rate type */
export interface AdvancedDynamicBaseRateType {
    /**
     * Rate plan code used to Advanced Dynamically base the rate on.
     * @minLength 0
     * @maxLength 20
     */
    basedOnRatePlan?: string;
    /**
     * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
     * @minLength 0
     * @maxLength 1
     */
    rounding?: string;
    /** While showing availability, do system need to compare the static rates defined for the rate with Advanced dynamically computed base rate pricing? If true, availability shows lower of the these two pricing. If false, availability shows the advanced dynamically calculated pricing. */
    compareWithRateSchedules?: boolean;
    /** Advanced Dependent Rate plan code(s) for the rate plan.It is the list of rate plans that are Advanced Dynamically based on the Rate Plan. */
    advancedDependentRatePlans?: RatePlanCodeListType;
}
/** None means that rate is a standard rate. If sent in the changeRatePlan operation will delete any Based on Rate Plan Type. */
export declare enum BasedOnRatePlanType {
    BaseRate = "BaseRate",
    DynamicBaseRate = "DynamicBaseRate",
    BARBasedRate = "BARBasedRate",
    AdvancedDynamicBaseRate = "AdvancedDynamicBaseRate",
    None = "None"
}
/** This type contains summary details about the rate plan schedules such as Schedulesefined etc. */
export interface RatePlanScheduleInfoType {
    /** Returns true in case the rate plan has any schedules defined. */
    schedulesDefined?: boolean;
}
/** @maxItems 4000 */
export type RatePlanNotesType = RatePlanNoteType[];
/** Details of the Rate Plan Approval Note */
export interface RatePlanNoteType {
    /** Unique identifier for the Approval Note */
    noteId?: UniqueIDType;
    /**
     * Note Text
     * @minLength 0
     * @maxLength 4000
     */
    note?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @format date
     * @maxLength 8
     */
    purgeDate?: string;
}
/** Routing fetchInstructions details for a rate plan. */
export interface RatePlanRoutingInstructionsType {
    /** The profile type configured for the rate plan routing instructions. Valid values are Company, Agent, Contact, and Source. */
    profileType?: RoutingProfileTypeType;
    /** Set of transaction codes configured for the rate plan. */
    transactionCodes?: TrxCodesInfoType;
    /** Set of billing instructions configured for the rate plan. */
    billingInstructions?: BillingInstructionsType;
}
/** Profile Types available for routing instructions. */
export declare enum RoutingProfileTypeType {
    Agent = "Agent",
    Company = "Company",
    Contact = "Contact",
    Source = "Source"
}
/**
 * List of Transaction codes info.
 * @maxItems 4000
 */
export type TrxCodesInfoType = TrxInfoType[];
/** Transaction codes info. */
export interface TrxInfoType {
    /**
     * Transaction codes info.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Category of the transaction code.
     * @minLength 0
     * @maxLength 20
     */
    transactionGroup?: string;
    /**
     * Sub category of the transaction code.
     * @minLength 0
     * @maxLength 20
     */
    transactionSubGroup?: string;
    /**
     * Unique Universal product code of the transaction code.
     * @minLength 0
     * @maxLength 20
     */
    universalProductCode?: string;
    /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
    routingInstructionsId?: number;
    /**
     * The List of Articles defined for this transaction code, when using the Articles functionality.
     * @maxItems 4000
     */
    articles?: ArticleInfoType[];
    /**
     * Contains service type for transaction code.
     * @minLength 0
     * @maxLength 20
     */
    trxServiceType?: string;
    /**
     * Unique identifier for the Transaction code.
     * @minLength 0
     * @maxLength 20
     */
    transactionCode?: string;
    /**
     * Hotel context of the Transaction code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
    printTrxReceipt?: boolean;
}
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
/**
 * Set of Billing Instruction codes.
 * @maxItems 4000
 */
export type BillingInstructionsType = BillingInstructionType[];
/** Configured Billing Instruction which represents a set of Transaction Codes. */
export interface BillingInstructionType {
    /**
     * Billing Instruction code description.
     * @minLength 0
     * @maxLength 2000
     */
    desc?: string;
    /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
    routingInstructionsId?: number;
    /**
     * Unique identifier for the Billing Instruction.
     * @minLength 0
     * @maxLength 20
     */
    billingCode?: string;
    /**
     * Hotel context of the Billing Instruction.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
export interface RatePlanExternalAttributesType {
    /**
     * Rate Category for the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    marshaRateProgram?: string;
}
/** Access Exclusion information indicating the actions allowed under a HUB or Hotel for which the access exclusion is set. */
export interface RateAccessExclusionType {
    /**
     * The type of source (CRO or Hotel code) for which the rate access exclusion is set.
     * @minLength 0
     * @maxLength 40
     */
    sourceType?: string;
    /**
     * CRO or Hotel code value.
     * @minLength 0
     * @maxLength 80
     */
    sourceValue?: string;
    /** Allow to modify a reservation under this access exclusion. */
    allowModifyReservation?: boolean;
    /** Allow to cancel a reservation under this access exclusion. */
    allowCancelReservation?: boolean;
    /** Allow to create a reservation under this access exclusion. */
    allowCreateReservation?: boolean;
    /** The rate access exclusion is inactive */
    inactive?: boolean;
    /** Exclude a specific rate from availability */
    excludeFromAvailability?: boolean;
    /** Date range for the rate access exclusion. */
    dateRange?: DateRangeType;
}
export interface MasterInfoType {
    /** @maxItems 4000 */
    codeInfo?: CodeInfoType[];
    codeType?: MasterType;
}
export interface CodeInfoType {
    /**
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
    /** Holds name of additional code information */
    addtionalCodeInfo?: AddtionalCodeInfoType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/**
 * Holds name of additional code information
 * @maxItems 4000
 */
export type AddtionalCodeInfoType = {
    /** Holds name of additional code information */
    name?: MasterInfoCodeDetailType;
    /**
     * Holds value of additional code information
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
}[];
export declare enum MasterInfoCodeDetailType {
    LongDescription = "LongDescription",
    ShortDescription = "ShortDescription"
}
export declare enum MasterType {
    Country = "Country",
    State = "State",
    AddressType = "AddressType",
    PhoneType = "PhoneType",
    RateCategory = "RateCategory",
    CalculationRule = "CalculationRule",
    PostingRythym = "PostingRythym",
    BillingInstruction = "BillingInstruction",
    TransactionCode = "TransactionCode",
    DisplaySet = "DisplaySet",
    MailingActions = "MailingActions",
    DistanceType = "DistanceType",
    District = "District",
    Territory = "Territory",
    FiscalRegion = "FiscalRegion",
    InventoryItem = "InventoryItem",
    Package = "Package",
    RoomFeaturePreference = "RoomFeaturePreference",
    SpecialPreference = "SpecialPreference",
    Promotion = "Promotion",
    Department = "Department",
    ReservationPreference = "ReservationPreference",
    FacilityTask = "FacilityTask",
    RoomType = "RoomType",
    RateCode = "RateCode",
    OutOfOrderReason = "OutOfOrderReason",
    Block = "Block"
}
/** Response object to fetch rate plan schedules. */
export interface RatePlanSchedulesInfo {
    /** List of the rate plan schedules fetched based on the request criteria. */
    ratePlanScheduleList?: RatePlanScheduleListType;
    /** Contains the Rate Plan info that will be used as reference by the Rate Schedules. For example, it provides the master list for room types that a rate schedule can have for a rate plan. */
    ratePlanMasterInfo?: RatePlanMasterInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface RatePlanScheduleListType {
    /**
     * Rate plan schedule list.
     * @maxItems 4000
     */
    ratePlanSchedule?: RatePlanSchedulesType[];
    /**
     * Hotel code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Rate plan Code.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
export interface RatePlanSchedulesType {
    /** Rate Plan schedule ID. */
    ratePlanScheduleId?: UniqueIDType;
    /** Rate Plan Schedule Details. */
    ratePlanScheduleDetail?: RatePlanScheduleDetailType;
}
/** Details of rate plan schedule including room type list and days of week of the schedule. */
export interface RatePlanScheduleDetailType {
    /** Rate amounts for the rate plan schedule. */
    rateAmounts?: ScheduleRateAmountsType;
    /** Rate plan schedule based on an offset from its Base Rate or BAR Rate. */
    advancedBaseRateOffset?: AdvancedBaseRateOffsetType;
    /** Rate amount boundaries for the rate plan schedule. Includes the minimum and/or maximum rate amounts for one and/or two adults. */
    rateAmountBoundaries?: RateAmountBoundariesType;
    /** Rate plan schedule grouping details. */
    classifications?: RatePlanScheduleClassificationsType;
    /** Occupant threshold pricing for the rate plan schedule including adult thresholds, child thresholds, and occupant thresholds. */
    occupantThresholdPricing?: OccupantThresholdPricingType;
    /** The adjustment code details for the rate plan schedule. */
    adjustmentDetails?: ScheduleAdjustmentDetailsType;
    /** List of packages attached to the rate plan schedule. */
    rateSchedulePackages?: RatePackagesType;
    /** Tier that the rate plan schedule belongs to. */
    tierID?: TierIDType;
    /**
     * Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record.
     * @minLength 0
     * @maxLength 20
     */
    seasonCode?: string;
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
    /** List of room types that are for the rate plan schedule. */
    roomTypeList?: RoomTypeListType;
    /**
     * The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code
     * @minLength 0
     * @maxLength 20
     */
    advancedDailyBaseRatePlanCode?: string;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
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
/** A Rate which is of Advanced Dynamic Base Rate can have rate schedule based on an offset from its Base Rate or BAR Rate. */
export interface AdvancedBaseRateOffsetType {
    /** offset amount for the advanced dynamic base rate schedule. */
    offset?: number;
    /**
     * It signifies offset amount is of Flat or Percentage type. Valid Values are F/P.
     * @minLength 1
     * @maxLength 1
     */
    flatOrPercentage?: string;
    /** Should this schedule be Advanced dynamically based on BAR rate. */
    applyBar?: boolean;
}
/** Rate amount boundaries for the rate plan schedule. Minimum and/or maximum rate amounts can be defined for one and/or two adults. */
export interface RateAmountBoundariesType {
    /** Minimum rate amounts for one and/or two adults. */
    minimum?: RateAmountBoundaryType;
    /** Maximum rate amounts for one and/or two adults. */
    maximum?: RateAmountBoundaryType;
}
/** Set of rate amounts for one and/or two adults. This set will represent either the minimum or maximum rate boundary. */
export interface RateAmountBoundaryType {
    /** One person rate amount for the rate boundary. */
    onePersonRate?: number;
    /** Two person rate amount for the rate boundary. */
    twoPersonRate?: number;
}
export interface RatePlanScheduleClassificationsType {
    /**
     * Market code for the rate schedule.
     * @minLength 0
     * @maxLength 20
     */
    marketCode?: string;
    /**
     * Source code for the rate schedule.
     * @minLength 0
     * @maxLength 20
     */
    sourceCode?: string;
}
/** Definition for creating pricing for a rate schedule, based on occupants threshold level. */
export interface OccupantThresholdPricingType {
    /** Threshold for Adults in the room. */
    adults?: {
        /** Threshold value, after it is reached the corresponding amount will be charged. */
        threshold?: number;
        /** Amount to be charged after the threshold is reached. */
        amount?: number;
    };
    /** Threshold for Children in the room. */
    children?: {
        /** Threshold value, after it is reached the corresponding amount will be charged. */
        threshold?: number;
        /** Amount to be charged after the threshold is reached. */
        amount?: number;
        /** When rates are Defined by Age buckets, should the 1st buckets children count be excluded from threshold pricing. */
        excludeBucket1?: boolean;
        /** When rates are Defined by Age buckets, should the 2nd buckets children count be excluded from threshold pricing. */
        excludeBucket2?: boolean;
        /** When rates are Defined by Age buckets, should the 3rd buckets children count be excluded from threshold pricing. */
        excludeBucket3?: boolean;
    };
    /** Threshold for Occupants in the room. */
    occupants?: {
        /** Threshold value, after it is reached the corresponding amount will be charged. */
        threshold?: number;
        /** Amount to be charged after the threshold is reached. */
        amount?: number;
    };
}
/**
 * The list of adjustment codes for the rate plan schedule.
 * @maxItems 4000
 */
export type ScheduleAdjustmentDetailsType = AdjustmentDetailType[];
/** The adjustment code details for the rate schedule. */
export interface AdjustmentDetailType {
    /** The amount with which the actual adjustment will be overridden. if no amount is sent, default adjustment code's amount will be used. */
    overriddenAmount?: number;
    /**
     * the adjustment code that needs to be attached to the rate schedule.
     * @minLength 0
     * @maxLength 20
     */
    adjustmentCode?: string;
    /** Should this Adjustment code be deleted ? */
    deleteAdjustment?: boolean;
}
/**
 * @min 1
 * @max 5
 */
export type TierIDType = number;
/**
 * Room Type.
 * @maxItems 4000
 */
export type RoomTypeListType = string[];
/** The Rate plan info type is used primarily by rate plan schedules to get basic rate plan header details. */
export interface RatePlanMasterInfoType {
    /** Rate plan code header primary details. */
    primaryDetails?: RatePlanPrimaryDetailsType;
    /** List of room types that are supported by the Rate Plan. */
    roomTypeList?: RateRoomTypeListType;
    /** Based on rate plan details. */
    ratePlanBasedOnRates?: RatePlanBasedOnRatesType;
    /** Rate Tier levels and ranges available for the property. */
    rateTiers?: RateTiersType;
    /**
     * Hotel Code of the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Rate Plan Code of the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Is Rate plan tiered? */
    tiered?: boolean;
    /** Is rate plan code a daily rate? */
    daily?: boolean;
    /**
     * Currency code used by the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /** Is rate plan code of BAR Rate type? */
    bARRate?: boolean;
    /** Is rate plan code Complimentary? */
    complimentary?: boolean;
    /** Is rate plan code for House Use? */
    houseUse?: boolean;
    /** Flag to identify if Rate Code is Advanced Daily Base Rate Code */
    advancedDailyBase?: boolean;
    /** An amount that act as Floor value for Rate Plan. */
    floorAmount?: number;
}
/**
 * Details for each rate tier.
 * @maxItems 5
 */
export type RateTiersType = RateTierType[];
/** Details for a single rate tier. */
export interface RateTierType {
    /** The starting length of stay days. This is a required field. */
    startLOS?: number;
    /** The ending length of stay days. This is not a required field. */
    endLOS?: number;
    /** The rate tier number/level. */
    tierID?: TierIDType;
}
/** Response object to fetch list of packages. */
export interface PackagesInfo {
    /** List of package codes. */
    packageCodesList?: {
        /** Package Codes of each hotel. */
        packageCodes?: HotelPackageCodesType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Refer to Generic common types document. */
    masterInfoList?: MasterInfoType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Depending on the fetch instructions either full details or basic details will be fetched */
export interface HotelPackageCodesType {
    /**
     * Basic information about the each package code.
     * @maxItems 4000
     */
    packageCodeShortInfo?: PackageCodeShortInfoType[];
    /**
     * Full Details about each package code
     * @maxItems 4000
     */
    packageCodeInfo?: PackageCodeType[];
    /**
     * Hotel code for the packages.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
export interface PackageCodeShortInfoType {
    /** Package code header primary details. */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /** Package code header transaction information. */
    transactionDetails?: ConfigPackageTransactionType;
    /** Package code posting attributes. */
    postingAttributes?: ConfigPostingAttributesType;
    /**
     * Package Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Indicates if it is a Package Group or not. */
    group?: boolean;
    /** Flag to check the package code is used in application setting. */
    usedInAppSetting?: boolean;
}
export interface PackageCodeType {
    /** Package code header details. */
    header?: PackageCodeHeaderType;
    /**
     * Package code price schedule details.
     * @maxItems 4000
     */
    schedules?: ConfigPackageScheduleType[];
    /**
     * Hotel code for the packages.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Package Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Package Code Description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Indicates if it is a Package Group or not. */
    group?: boolean;
    /**
     * Package Code specific to a rate plan code.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Flag to adjust the overlapping dates automatically. True will allow the system to adjust the overlapping dates automatically . False will not allow overlapping dates and throws error messages if overlapping dates are found */
    adjustOverlappingRange?: boolean;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** Response object to fetch rate plans summary information. */
export interface RatePlansSummary {
    /** List of summary information for the rate plan code. */
    ratePlanShortInfoList?: {
        /** List of summary information for the rate plan code. */
        ratePlanShortInfo?: RatePlanShortInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
        /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
        offset?: number;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** Evaluated total page count based on the requested max fetch count. */
        totalPages?: number;
    };
    /** Refer to Generic common types document. */
    masterInfoList?: MasterInfoType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The Rate plan code information. */
export interface RatePlanShortInfoType {
    /** Rate plan code header primary details. */
    primaryDetails?: RatePlanPrimaryDetailsType;
    /** Rate plan code grouping details. */
    classifications?: RatePlanClassificationsType;
    /** Short and Long info details of the Rate Plan. */
    descriptions?: RatePlanDescriptionsType;
    /** Elements which are needed by External Interfaces */
    externalAttributes?: RatePlanExternalAttributesType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @format date
     * @maxLength 8
     */
    purgeDate?: string;
    /** Indicates whether the rate plan is allowed to be discounted. */
    discountAllowed?: boolean;
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
 * @title OPERA Cloud Rate API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rtp/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description This API allows to fetch Best Available rates for rate code(s). <p><strong>OperationId:</strong>getBestAvailableRates</p>
         *
         * @tags RatePlan
         * @name GetBestAvailableRates
         * @summary Fetch Best Available Rates
         * @request GET:/hotels/{hotelId}/bestavailablerates
         */
        getBestAvailableRates: (hotelId: string, query: {
            /**
             * The starting value of the date range.
             * @format date
             */
            startDay: string;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            rateCode?: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            endDay?: string;
            /**
             * Allowed values for the days of week type.
             * @uniqueItems true
             */
            daysOfWeek?: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
            /**
             * Allowed values for length stay type.
             * @uniqueItems true
             */
            lengthOfStay?: ('One' | 'Two' | 'Three' | 'Four' | 'Five' | 'Six' | 'Seven' | 'Eight')[];
        }, params?: RequestParams) => Promise<AxiosResponse<GetBestAvailableRatesDetails, any>>;
        /**
         * @description This API allows to create Best Available rates for rate code(s). <p><strong>OperationId:</strong>postBestAvailableRates</p>
         *
         * @tags RatePlan
         * @name PostBestAvailableRates
         * @summary Create a Best Available Rates
         * @request POST:/hotels/{hotelId}/bestavailablerates
         */
        postBestAvailableRates: (hotelId: string, createBestAvailableRates: CreateBestAvailableRates, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API allows to fetch Best Available rates for rate code(s). <p><strong>OperationId:</strong>deleteBestAvailableRates</p>
         *
         * @tags RatePlan
         * @name DeleteBestAvailableRates
         * @summary Delete Best Available Rates
         * @request DELETE:/hotels/{hotelId}/bestavailablerates
         */
        deleteBestAvailableRates: (hotelId: string, query: {
            code: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            end: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            start: string;
            friday?: boolean;
            monday?: boolean;
            saturday?: boolean;
            sunday?: boolean;
            thursday?: boolean;
            tuesday?: boolean;
            wednesday?: boolean;
            /** Indicates Length of Stay 1 configuration. */
            lOS1?: boolean;
            /** Indicates Length of Stay 2 configuration. */
            lOS2?: boolean;
            /** Indicates Length of Stay 3 configuration. */
            lOS3?: boolean;
            /** Indicates Length of Stay 4 configuration. */
            lOS4?: boolean;
            /** Indicates Length of Stay 5 configuration. */
            lOS5?: boolean;
            /** Indicates Length of Stay 6 configuration. */
            lOS6?: boolean;
            /** Indicates Length of Stay 7 configuration. */
            lOS7?: boolean;
            /** Indicates Length of Stay 8 configuration. */
            lOS8?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API allows you to fetch negotiated rates and profile for a given hotel id. <p><strong>OperationId:</strong>getNegotiatedRates</p>
         *
         * @tags RatePlan
         * @name GetNegotiatedRates
         * @summary Get negotiated rates and profiles
         * @request GET:/hotels/{hotelId}/negotiatedRates
         */
        getNegotiatedRates: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Start Date.
             * @format date
             */
            startDate?: string;
            /**
             * End Date.
             * @format date
             */
            endDate?: string;
            /** Inactive negotiated rates. */
            includeInactiveNegotiatedRates?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            fetchInstructionsLimit?: number;
            /**
             * Simple type for negotiated rates instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: 'Discounts'[];
        }, params?: RequestParams) => Promise<AxiosResponse<NegotiatedRates, any>>;
        /**
         * @description This API allows you to create negotiated rate for a given profile. <p><strong>OperationId:</strong>postNegotiatedRates</p>
         *
         * @tags RatePlan
         * @name PostNegotiatedRates
         * @summary Create negotiated rates
         * @request POST:/hotels/{hotelId}/negotiatedRates
         */
        postNegotiatedRates: (hotelId: string, negotiatedRates: NegotiatedRates, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API allows you to update negotiated rate for a given profile. <p><strong>OperationId:</strong>putNegotiatedRates</p>
         *
         * @tags RatePlan
         * @name PutNegotiatedRates
         * @summary Change negotiated rates
         * @request PUT:/hotels/{hotelId}/negotiatedRates/{rateCode}
         */
        putNegotiatedRates: (rateCode: string, hotelId: string, negotiatedRates: NegotiatedRates, params?: RequestParams) => Promise<AxiosResponse<NegotiatedRatesDetails, any>>;
        /**
         * @description This API allows you to fetch a Rate Plan and Profile for given hotel id and negotiated rate code. <p><strong>OperationId:</strong>getNegotiatedRatesForGivenHotelAndRate</p>
         *
         * @tags RatePlan
         * @name GetNegotiatedRatesForGivenHotelAndRate
         * @summary Fetch Negotiated Rates
         * @request GET:/hotels/{hotelId}/negotiatedRates/{rateCode}/profiles
         */
        getNegotiatedRatesForGivenHotelAndRate: (rateCode: string, hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Start Date.
             * @format date
             */
            startDate?: string;
            /**
             * End Date.
             * @format date
             */
            endDate?: string;
            /** Inactive negotiated rates. */
            includeInactiveNegotiatedRates?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            fetchInstructionsLimit?: number;
            /**
             * Simple type for negotiated rates instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: 'Discounts'[];
        }, params?: RequestParams) => Promise<AxiosResponse<NegotiatedRates, any>>;
        /**
         * @description This API allows you to fetch Rate Plans for a given hotel id. <p><strong>OperationId:</strong>getRatePlan</p>
         *
         * @tags RatePlan
         * @name GetRatePlan
         * @summary Get rate plan
         * @request GET:/hotels/{hotelId}/ratePlans
         */
        getRatePlan: (hotelId: string, query?: {
            /** Rate plan code. */
            ratePlanCode?: string;
            /**
             * Simple type for Rate plan codes instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: ('PrimaryDetails' | 'TransactionDetails' | 'Packages' | 'RateCommission' | 'NegotiatedProfiles' | 'RateControls' | 'RoutingInstructions' | 'AccessExclusions' | 'ApprovalNotes')[];
        }, params?: RequestParams) => Promise<AxiosResponse<RatePlanInfo, any>>;
        /**
         * @description Use this API to get a rate plan&apos;s pricing schedules. The information includes the date range and room types for which the price is valid, rate amounts for multiple persons, and associated packages.<p><strong>OperationId:</strong>getRatePlanSchedules</p>
         *
         * @tags RatePlan
         * @name GetRatePlanSchedules
         * @summary Get rate plan schedules
         * @request GET:/hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules
         */
        getRatePlanSchedules: (ratePlanCode: string, hotelId: string, query?: {
            /** Exclude the List of Pricing Schedule Packages from the response. */
            excludeRatePlanPackage?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * @min 1
             * @max 5
             */
            tierId?: number;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            ratePlanScheduleId?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            ratePlanScheduleIdType?: string;
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            duration?: string;
            /** Room Type. */
            roomType?: string[];
            /** Room Class. */
            roomClass?: string[];
            /** Include inactive rate schedules in the fetch result. */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<RatePlanSchedulesInfo, any>>;
        /**
         * @description Use this API to delete Rate Plan schedules.<p><strong>OperationId:</strong>deleteRatePlanSchedules</p>
         *
         * @tags RatePlan
         * @name DeleteRatePlanSchedules
         * @summary Delete rate plan schedule
         * @request DELETE:/hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules
         */
        deleteRatePlanSchedules: (ratePlanCode: string, hotelId: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            ratePlanScheduleIds: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    packages: {
        /**
         * @description Use this API you to get configured packages for a hotel.<p><strong>OperationId:</strong>getPackages</p>
         *
         * @tags RatePlan
         * @name GetPackages
         * @summary Get Packages
         * @request GET:/packages
         */
        getPackages: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /** Hotel code. */
            hotelId?: string[];
            packageCode?: string[];
            /** The description or a part of the description based on which results should be filtered. */
            descriptionWildCard?: string;
            /**
             * Start Date for pricing schedule.
             * @format date
             */
            startDate?: string;
            /**
             * End Date for pricing schedule.
             * @format date
             */
            endDate?: string;
            /** Number of adults for pricing schedule calculation. */
            adults?: number;
            /** Number of children for pricing schedule calculation. */
            children?: number;
            /** Indicates if Group Packages will be fetched. */
            includeGroup?: boolean;
            /** Indicates if Only Sell Separate Packages will be fetched, if not specified, it will ignore the criteria. */
            sellSeparate?: boolean;
            /** Indicates if Only Ticket Posting Rhythm will be fetched, if not specified, it will ignore the criteria. */
            ticketPostingRhythm?: boolean;
            /**
             * Simple type for package instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: ('Header' | 'PostingRules' | 'CalculatedPrice' | 'Items' | 'Details' | 'UsageDetails')[];
        }, params?: RequestParams) => Promise<AxiosResponse<PackagesInfo, any>>;
    };
    profiles: {
        /**
         * @description This API allows you to fetch negotiated Rates for a given profile. <p><strong>OperationId:</strong>getNegotiatedRatesForGivenProfile</p>
         *
         * @tags RatePlan
         * @name GetNegotiatedRatesForGivenProfile
         * @summary Get negotiated rate details for given profile
         * @request GET:/profiles/{profileId}/negotiatedRates
         */
        getNegotiatedRatesForGivenProfile: (hotelId: string, profileId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Start Date.
             * @format date
             */
            startDate?: string;
            /**
             * End Date.
             * @format date
             */
            endDate?: string;
            /** Inactive negotiated rates. */
            includeInactiveNegotiatedRates?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            fetchInstructionsLimit?: number;
            /**
             * Simple type for negotiated rates instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: 'Discounts'[];
        }, params?: RequestParams) => Promise<AxiosResponse<NegotiatedRates, any>>;
    };
    ratePlans: {
        /**
         * @description Use this API to get configured Rate Plans for a property and filter this by search criteria.<p><strong>OperationId:</strong>getRatePlans</p>
         *
         * @tags RatePlan
         * @name GetRatePlans
         * @summary Get rate plans
         * @request GET:/ratePlans
         */
        getRatePlans: (hotelId: string, query: {
            /** Hotel code. */
            hotelId: string[];
            /** Indicates whether rate plan short and long information should be included in the fetched results. */
            includeRateInformation?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /** Rate Plan code. */
            ratePlanCode?: string[];
            /** Rate category of the rate plan. */
            rateCategory?: string[];
            /**
             * Sell date of the rate plan.
             * @format date
             */
            sellDate?: string;
            /** Display set for the rate plan. */
            displaySet?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
            attributeName?: string[];
            /** @uniqueItems true */
            orderType?: ('Asc' | 'Desc')[];
            /** Include or not include inactive rate codes. */
            includeInactive?: boolean;
            /** Indicates to only fetch rate plans flagged as Day Use. */
            dayUseOnly?: boolean;
            /**
             * Indicates that the Rate Plan is approved for selling.
             * @uniqueItems true
             */
            approvalStatus?: 'NewUnapproved' | 'ChangedUnapproved' | 'Rejected' | 'Approved';
        }, params?: RequestParams) => Promise<AxiosResponse<RatePlansSummary, any>>;
    };
}
