/** Request object for creating Activity Locations. */
export interface CreateActivityLocations {
    /** Collection of Activity Locations to be created. */
    activityLocations?: ActivityLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Activity Locations.
 * @maxItems 4000
 */
export type ActivityLocationsType = ActivityLocationType[];
/** Activity Location detail information. */
export interface ActivityLocationType {
    /**
     * Property to which the activity Location belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Code for the activity Location.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description for the Activity Location.
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
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
/** Response object after fetching the Activity Locations. */
export interface FetchActivityLocations {
    /** Collection of fetched Activity Locations. */
    activityLocations?: ActivityLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing Activity Locations. */
export interface ChangeActivityLocations {
    /** Collection of Activity Locations to be changed. */
    activityLocations?: ActivityLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangeActivityLocationsRS {
    /** Refer to Generic common types document. */
    success?: SuccessType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    /** Refer to Generic common types document. */
    errors?: ErrorsType;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @minLength 0
     * @maxLength 128
     */
    echoToken?: string;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @format date-time
     */
    timeStamp?: string;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @minLength 0
     * @maxLength 40
     */
    version?: string;
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @minLength 0
     * @maxLength 80
     */
    correlationId?: string;
    /** Indicates if the operation supports the ability to retry the request. */
    retryAllowed?: boolean;
    /** Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. */
    enforceAllowed?: boolean;
    /** This attribute carries the user selected confirmation value on confirmation popup. */
    useLocalAllowed?: boolean;
    links?: Links;
}
/** Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. */
export type SuccessType = object;
/**
 * An error that occurred during the processing of a message.
 * @maxItems 99
 */
export type ErrorsType = ErrorType[];
/** Standard way to indicate that an error occurred during the processing of an message. If the message successfully processes, but there are business errors, those errors should be passed in the warning element. */
export interface ErrorType {
    /** Property Value */
    value?: string;
    /** An abbreviated version of the error in textual format. */
    shortText?: string;
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** If present, this URL refers to an online description of the error that occurred. */
    docURL?: string;
    /** If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration. */
    status?: string;
    /** If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing]. */
    tag?: string;
    /** If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction. */
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
    /** An XPath expression that selects all the nodes whose data caused this error. Further, this expression should have an additional contraint which contains the data of the node. This will provide the offending data back to systems that cannot maintain the original message. */
    nodeList?: string;
}
/** Request object for copying Activity Locations to hotel(s). */
export interface CopyActivityLocations {
    /** List of the Activity Location details to be copied to hotel(s). */
    copyInstructions?: CopyConfigurationCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Information needed to copy configuration code from one property to the other.
 * @maxItems 4000
 */
export type CopyConfigurationCodesType = CopyConfigurationCodeType[];
/** Information needed to copy configuration code from one property to the other. */
export interface CopyConfigurationCodeType {
    /**
     * Property to which configuration code type to be copied to.
     * @maxItems 4000
     */
    targetHotelCode?: string[];
    /**
     * Code that is to be copied.
     * @minLength 0
     * @maxLength 20
     */
    sourceHotelCode?: string;
    /**
     * Source hotel code from which code is to be copied from.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface CopyActivityLocationsRS {
    /** Refer to Generic common types document. */
    success?: SuccessType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    /** Refer to Generic common types document. */
    errors?: ErrorsType;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @minLength 0
     * @maxLength 128
     */
    echoToken?: string;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @format date-time
     */
    timeStamp?: string;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @minLength 0
     * @maxLength 40
     */
    version?: string;
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @minLength 0
     * @maxLength 80
     */
    correlationId?: string;
    /** Indicates if the operation supports the ability to retry the request. */
    retryAllowed?: boolean;
    /** Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. */
    enforceAllowed?: boolean;
    /** This attribute carries the user selected confirmation value on confirmation popup. */
    useLocalAllowed?: boolean;
    links?: Links;
}
/** Request object for creating Activity Status Codes. */
export interface CreateActivityStatusCodes {
    /** Collection of Activity Status Codes to be created. */
    activityStatusCodes?: ActivityStatusCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Activity Status Codes object.
 * @maxItems 4000
 */
export type ActivityStatusCodesType = ActivityStatusCodeType[];
/** Activity Status Code detail information. */
export interface ActivityStatusCodeType {
    /**
     * Property to which the activity status code belongs to. Cannot be null.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Code for the activity status code. Cannot be null.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description for the Activity Status Code. Cannot be null.
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /** Priority for the activity status code. */
    priority?: number;
    /**
     * Used in Application for the activity status code.
     * @minLength 0
     * @maxLength 20
     */
    application?: string;
}
/** Response object after fetching the Activity Status Codes. */
export interface FetchActivityStatusCodes {
    /** Collection of fetched Activity Status Codes */
    activityStatusCodes?: ActivityStatusCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing Activity Status Codes. */
export interface ChangeActivityStatusCodes {
    /** Collection of Activity Status Codes to be changed. */
    activityStatusCodes?: ActivityStatusCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangeActivityStatusCodesRS {
    /** Refer to Generic common types document. */
    success?: SuccessType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    /** Refer to Generic common types document. */
    errors?: ErrorsType;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @minLength 0
     * @maxLength 128
     */
    echoToken?: string;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @format date-time
     */
    timeStamp?: string;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @minLength 0
     * @maxLength 40
     */
    version?: string;
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @minLength 0
     * @maxLength 80
     */
    correlationId?: string;
    /** Indicates if the operation supports the ability to retry the request. */
    retryAllowed?: boolean;
    /** Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. */
    enforceAllowed?: boolean;
    /** This attribute carries the user selected confirmation value on confirmation popup. */
    useLocalAllowed?: boolean;
    links?: Links;
}
/** Response object after fetching the Activity Types. */
export interface FetchActivityTypes {
    /** Collection of fetched Activity Types. */
    activityTypes?: ActivityTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Activity Types.
 * @maxItems 4000
 */
export type ActivityTypesType = ActivityTypeDetailType[];
/** Activity Type detail information. */
export interface ActivityTypeDetailType {
    /**
     * Property to which the activity Type belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Type for the activity Type.
     * @minLength 0
     * @maxLength 20
     */
    typeCode?: string;
    /**
     * Description for the Activity Type.
     * @minLength 0
     * @maxLength 100
     */
    description?: string;
}
/** Request object for creating Activity Types. */
export interface CreateActivityTypes {
    /** Collection of Activity Types to be created. */
    activityTypes?: ActivityTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing Activity Types. */
export interface ChangeActivityTypes {
    /** Collection of Activity Types to be changed. */
    activityTypes?: ActivityTypesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangeActivityTypesRS {
    /** Refer to Generic common types document. */
    success?: SuccessType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    /** Refer to Generic common types document. */
    errors?: ErrorsType;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @minLength 0
     * @maxLength 128
     */
    echoToken?: string;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @format date-time
     */
    timeStamp?: string;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @minLength 0
     * @maxLength 40
     */
    version?: string;
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @minLength 0
     * @maxLength 80
     */
    correlationId?: string;
    /** Indicates if the operation supports the ability to retry the request. */
    retryAllowed?: boolean;
    /** Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. */
    enforceAllowed?: boolean;
    /** This attribute carries the user selected confirmation value on confirmation popup. */
    useLocalAllowed?: boolean;
    links?: Links;
}
/** Request object for copying Activity Types to hotel(s). */
export interface CopyActivityTypes {
    /** List of the Activity Type details to be copied to hotel(s). */
    copyInstructions?: CopyConfigurationCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface CopyActivityTypesRS {
    /** Refer to Generic common types document. */
    success?: SuccessType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    /** Refer to Generic common types document. */
    errors?: ErrorsType;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @minLength 0
     * @maxLength 128
     */
    echoToken?: string;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @format date-time
     */
    timeStamp?: string;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @minLength 0
     * @maxLength 40
     */
    version?: string;
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @minLength 0
     * @maxLength 80
     */
    correlationId?: string;
    /** Indicates if the operation supports the ability to retry the request. */
    retryAllowed?: boolean;
    /** Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail. */
    enforceAllowed?: boolean;
    /** This attribute carries the user selected confirmation value on confirmation popup. */
    useLocalAllowed?: boolean;
    links?: Links;
}
export interface ActivityBookingsDetails {
    /** Criteria for fetching Activity Bookings. */
    activityLookUpList?: FetchActivityBookingsType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Used in the request message to describe the "filtering Criteria" when executing an activity lookup. */
export interface FetchActivityBookingsType {
    /** ProfileID associated with the Activity under lookup. */
    profileId?: UniqueIDListType;
    /** Detailed name information for the customer. */
    personName?: PersonNameType;
    /** Detailed Address information for the customer. */
    address?: AddressType;
    /** The specific acitvity information to be used for filtering the Look-up. */
    activities?: ActivityList;
    /**
     * Hotel Code, It is used to filter hotel specific children to this specific hotel code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
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
export interface PersonNameType {
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
     * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name.
     * @minLength 0
     * @maxLength 40
     */
    surname?: string;
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
    /** Title Suffix. Must be populated if ADVANCED_TITLE is on. */
    nameTitleSuffix?: number;
    /** Envelope Greeting of the profile */
    envelopeGreeting?: string;
    /** Salutation of the profile */
    salutation?: string;
    /** Type of name of the individual, such as former, nickname, alternate or alias name. */
    nameType?: PersonNameTypeType;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * When name type is external, indicates the external system the name belongs to.
     * @minLength 0
     * @maxLength 40
     */
    externalSystem?: string;
}
/** Person's name in an external system. */
export declare enum PersonNameTypeType {
    Primary = "Primary",
    Alternate = "Alternate",
    Incognito = "Incognito",
    External = "External",
    Phonetic = "Phonetic"
}
/** Provides address information. */
export interface AddressType {
    /** Indicator to define if the Address is validated by the Address Validation System. */
    isValidated?: boolean;
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @maxItems 4
     */
    addressLine?: string[];
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @minLength 0
     * @maxLength 40
     */
    cityName?: string;
    /**
     * Post Office Code number.
     * @minLength 0
     * @maxLength 15
     */
    postalCode?: string;
    /**
     * Post Office City Extension Code number. City Extension mainly used for UK addresses.
     * @minLength 0
     * @maxLength 20
     */
    cityExtension?: string;
    /**
     * County or District Name (e.g., Fairfax). This is read only.
     * @minLength 0
     * @maxLength 20
     */
    county?: string;
    /**
     * State or Province name (e.g., Texas).
     * @minLength 0
     * @maxLength 20
     */
    state?: string;
    /** Country name (e.g., Ireland). */
    country?: CountryNameType;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Defines the type of address (e.g. home, business, other).
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /** Describes the type code */
    typeDescription?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. */
    updateReservations?: boolean;
    /**
     * The postal barcode for the address.
     * @minLength 0
     * @maxLength 100
     */
    barCode?: string;
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
/** Code for a country or a nationality. */
export interface CountryNameType {
    /**
     * Used for Character Strings, length 0 to 200.
     * @minLength 0
     * @maxLength 200
     */
    value?: string;
    /**
     * Code for a country or a nationality.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/**
 * A collection of Activity objects.
 * @maxItems 4000
 */
export type ActivityList = {
    /** A collection of reference ID values that identify this uniquely scheduled activity instance. May contain one ID per external system plus an internal identifier. */
    activityIds?: UniqueIDListType;
    /** The Type of the activity. Eg: SPA, Golf etc. */
    type?: string;
    /** The Location where the activity takes place. Eg: Salon */
    location?: string;
    /**
     * Name of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons
     * @maxItems 4000
     */
    name?: string[];
    /** The total number of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons */
    numberOfPersons?: number;
    /** The time with-in which an activity falls (Starts/Ends/Spans) */
    timeSpan?: DateTimeSpanType;
    /** The time span of the activity falls */
    duration?: DateTimeSpanType;
    /**
     * Description of the activity
     * @maxItems 4000
     */
    description?: string[];
    /**
     * Any additional notes or comments regarding the scheduled activity.
     * @maxItems 4000
     */
    note?: string[];
    /** Any Block code associated with the activity if its a Group booking. */
    groupCode?: string;
    /** The amount charged for the activity. */
    amount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    deposit?: {
        /** A monetary amount. */
        amount?: number;
        /**
         * Provides a currency code to reflect the currency in which an amount may be expressed.
         * @minLength 3
         * @maxLength 3
         */
        currencyCode?: string;
        collectedBy?: 'Vendor' | 'Agent' | 'Other';
    };
    /**
     * The Date by which the activity is deemed Cancelled/Deleted.
     * @format date-time
     */
    inactiveDate?: string;
    /**
     * The names of the participants.
     * @maxItems 4000
     */
    participants?: PersonNameType[];
    /** The URL link to launch the Activity Reservation System to view or edit full details of this activity. */
    uRLLink?: string;
    /**
     * Vendor extensions to the activity record.
     * @maxItems 4000
     */
    extensions?: string[];
    /** Activity reservation status. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE. */
    status?: string;
    /** Activity reservation status description. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE. */
    statusDescription?: string;
    /** When true indicates that activity link only needs to be inserted or deleted for this record. */
    link?: boolean;
}[];
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface DateTimeSpanType {
    /** @format date-time */
    startDateTime?: string;
    /** @format date-time */
    endDateTime?: string;
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
export interface CreateActivityBooking {
    /** Information related to activity booking to be created. */
    activityBooking?: ActivityBookingRQType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The choice between a reservation header or a profile ID. One or the other is required. */
export interface ActivityBookingRQType {
    /**
     * This is not required if a Reservation Id is provided
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Required unique identifier of the reservation */
    reservationId?: UniqueIDType;
    /** ProfileID associated with the Activity. */
    profileId?: UniqueIDType;
    /** A collection of activities */
    activities?: ActivityList;
}
export interface ChangeActivityBooking {
    /** Information related to activity booking to be modified. */
    activityBooking?: ActivityBookingRQType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ActivityBookingModified {
    /** Information related to modified activity booking. */
    activityBooking?: ActivityBookingRSType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Generic self-contained response object that is used when inserting/ updating/ canceling activities. */
export interface ActivityBookingRSType {
    /** A collection of activities */
    activities?: ActivityList;
}
export interface LocationNotificationToBeCreated {
    /** Required unique identifier of the reservation */
    reservationId?: UniqueIDType;
    /** The scheduled start and End time of Location Notification. */
    activityTime?: DateTimeSpanType;
    /** Location Text of the Notification */
    locationText?: FormattedTextTextType;
    /** Required unique identifier of the Profile ID */
    profileId?: UniqueIDType;
    /** Description of the Location Notification */
    description?: FormattedTextTextType;
    /** Location Notification Status */
    locationNotificationStatus?: LocationNotificationStatus;
    /** @maxLength 2000 */
    otherLocationNotificationStatus?: string;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Provides text and indicates whether it is formatted or not. */
export interface FormattedTextTextType {
    /** Property Value */
    value?: string;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
}
/** (Enumeration) There are 3 possible values: SET, CLEAR and OTHER */
export declare enum LocationNotificationStatus {
    Set = "Set",
    Clear = "Clear",
    Other = "Other"
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
 * @title OPERA Cloud Leisure Management API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /lms/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    activityLocations: {
        /**
         * @description Use this API to create a new Activity location for a property. <p><strong>OperationId:</strong>postActivityLocations</p>
         *
         * @tags LeisureManagementConfig
         * @name PostActivityLocations
         * @summary Create an Activity Locations
         * @request POST:/activityLocations
         */
        postActivityLocations: (hotelId: string, createActivityLocations: CreateActivityLocations, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to fetch Activity location codes for a property. <p><strong>OperationId:</strong>getActivityLocations</p>
         *
         * @tags LeisureManagementConfig
         * @name GetActivityLocations
         * @summary Look up of Activity Locations
         * @request GET:/activityLocations
         */
        getActivityLocations: (hotelId: string, query: {
            hotelIds: string[];
            criteriaCodes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchActivityLocations, any>>;
        /**
         * @description Use this API to update an existing Activity location Code for a property. <p><strong>OperationId:</strong>putActivityLocations</p>
         *
         * @tags LeisureManagementConfig
         * @name PutActivityLocations
         * @summary Change in Activity Locations
         * @request PUT:/activityLocations/{activityLocationsId}
         */
        putActivityLocations: (hotelId: string, activityLocationsId: string, changeActivityLocations: ChangeActivityLocations, params?: RequestParams) => Promise<AxiosResponse<ChangeActivityLocationsRS, any>>;
        /**
         * @description Use this API to delete an Activity location for a property. <p><strong>OperationId:</strong>deleteActivityLocations</p>
         *
         * @tags LeisureManagementConfig
         * @name DeleteActivityLocations
         * @summary Remove Activity Locations
         * @request DELETE:/activityLocations/{activityLocationsId}
         */
        deleteActivityLocations: (hotelId: string, activityLocationsId: string, query: {
            /** Hotel where the code is configured. */
            hotelIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to copy an Activity location for a property. <p><strong>OperationId:</strong>copyActivityLocations</p>
         *
         * @tags LeisureManagementConfig
         * @name CopyActivityLocations
         * @summary Copy Activity Locations
         * @request PUT:/activityLocations/{activityLocationsId}/copy
         */
        copyActivityLocations: (hotelId: string, activityLocationsId: string, copyActivityLocations: CopyActivityLocations, params?: RequestParams) => Promise<AxiosResponse<CopyActivityLocationsRS, any>>;
    };
    activityStatusCodes: {
        /**
         * @description Retrieve Activity Status Code that are configured for a property.  Activity Status Codes are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>postActivityStatusCodes</p>
         *
         * @tags LeisureManagementConfig
         * @name PostActivityStatusCodes
         * @summary Create Activity Status Code
         * @request POST:/activityStatusCodes
         */
        postActivityStatusCodes: (hotelId: string, createActivityStatusCodes: CreateActivityStatusCodes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Fetch Activity Status Codes that are configured for a property.  <p><strong>OperationId:</strong>getActivityStatusCodes</p>
         *
         * @tags LeisureManagementConfig
         * @name GetActivityStatusCodes
         * @summary Get Activity Status Codes
         * @request GET:/activityStatusCodes
         */
        getActivityStatusCodes: (hotelId: string, query: {
            hotelIds: string[];
            criteriaCodes?: string[];
            applicationCodes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchActivityStatusCodes, any>>;
        /**
         * @description Modify an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>putActivityStatusCodes</p>
         *
         * @tags LeisureManagementConfig
         * @name PutActivityStatusCodes
         * @summary Change Activity Status Code
         * @request PUT:/activityStatusCodes/{activityStatusCodesId}
         */
        putActivityStatusCodes: (hotelId: string, activityStatusCodesId: string, changeActivityStatusCodes: ChangeActivityStatusCodes, params?: RequestParams) => Promise<AxiosResponse<ChangeActivityStatusCodesRS, any>>;
        /**
         * @description Remove an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>deleteActivityStatusCodes</p>
         *
         * @tags LeisureManagementConfig
         * @name DeleteActivityStatusCodes
         * @summary Remove Activity Status Code
         * @request DELETE:/activityStatusCodes/{activityStatusCodesId}
         */
        deleteActivityStatusCodes: (hotelId: string, activityStatusCodesId: string, query: {
            /** Hotel where the code is configured. */
            hotelIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    activityTypes: {
        /**
         * @description Retrieve Activity Types that are configured for a property.  Activity Types are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>getActivityTypes</p>
         *
         * @tags LeisureManagementConfig
         * @name GetActivityTypes
         * @summary Fetch Activity Types
         * @request GET:/activityTypes
         */
        getActivityTypes: (hotelId: string, query: {
            hotelIds: string[];
            typeCodes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchActivityTypes, any>>;
        /**
         * @description Create a new Activity Type Code for a specific property. <p><strong>OperationId:</strong>postActivityTypes</p>
         *
         * @tags LeisureManagementConfig
         * @name PostActivityTypes
         * @summary Create Activity Types
         * @request POST:/activityTypes
         */
        postActivityTypes: (hotelId: string, createActivityTypes: CreateActivityTypes, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Modify an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
         *
         * @tags LeisureManagementConfig
         * @name PutActivityTypes
         * @summary Change Activity Types
         * @request PUT:/activityTypes/{activityTypesId}
         */
        putActivityTypes: (hotelId: string, activityTypesId: string, changeActivityTypes: ChangeActivityTypes, params?: RequestParams) => Promise<AxiosResponse<ChangeActivityTypesRS, any>>;
        /**
         * @description Delete an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>deleteActivityTypes</p>
         *
         * @tags LeisureManagementConfig
         * @name DeleteActivityTypes
         * @summary Remove Activity Types
         * @request DELETE:/activityTypes/{activityTypesId}
         */
        deleteActivityTypes: (hotelId: string, activityTypesId: string, query: {
            /** Hotel where the code is configured. */
            hotelIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Copy existing Activity Types from source property to target properties. <p><strong>OperationId:</strong>copyActivityTypes</p>
         *
         * @tags LeisureManagementConfig
         * @name CopyActivityTypes
         * @summary Copy Activity Types
         * @request PUT:/activityTypes/{activityTypesId}/copy
         */
        copyActivityTypes: (hotelId: string, activityTypesId: string, copyActivityTypes: CopyActivityTypes, params?: RequestParams) => Promise<AxiosResponse<CopyActivityTypesRS, any>>;
    };
    hotels: {
        /**
         * @description This API will send a response to Look-up of Activity Bookings. <p><strong>OperationId:</strong>getActivityBookings</p>
         *
         * @tags LeisureManagement
         * @name GetActivityBookings
         * @summary Send a response to Look-up of Activity Bookings
         * @request GET:/hotels/{hotelId}/activityBookings
         */
        getActivityBookings: (hotelId: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            profileIds: string[];
            /**
             * Used to identify the source of the identifier (e.g., IATA, ABTA).
             * @default ["Opera"]
             */
            profileIdContext?: string[];
            /**
             * A reference to the type of object defined by the UniqueID element.
             * @default ["Profile"]
             */
            profileIdsType?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationIds?: string[];
            /**
             * Used to identify the source of the identifier (e.g., IATA, ABTA).
             * @default ["Opera"]
             */
            reservationIdContext?: string[];
            /**
             * A reference to the type of object defined by the UniqueID element.
             * @default ["Reservation"]
             */
            reservationIdsType?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            activityIds?: string[];
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            activityIdContext?: string[];
            /** A reference to the type of object defined by the UniqueID element. */
            activityIdsType?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ActivityBookingsDetails, any>>;
        /**
         * @description This API will send a response to Creation of Activity Booking. <p><strong>OperationId:</strong>postActivityBooking</p>
         *
         * @tags LeisureManagement
         * @name PostActivityBooking
         * @summary Send a response to Creation of Activity Booking
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
         */
        postActivityBooking: (reservationId: string, hotelId: string, createActivityBooking: CreateActivityBooking, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API will send a response to a  Change in Activity Booking request from external Activity Scheduler system. <p><strong>OperationId:</strong>putActivityBooking</p>
         *
         * @tags LeisureManagement
         * @name PutActivityBooking
         * @summary Send a response to Change in Activity Booking
         * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
         */
        putActivityBooking: (reservationId: string, hotelId: string, changeActivityBooking: ChangeActivityBooking, params?: RequestParams) => Promise<AxiosResponse<ActivityBookingModified, any>>;
        /**
         * @description This API will send a response to Cancellation of an Activity Booking. <p><strong>OperationId:</strong>deleteActivityBooking</p>
         *
         * @tags LeisureManagement
         * @name DeleteActivityBooking
         * @summary Send a response to Cancellation of an Activity Booking
         * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
         */
        deleteActivityBooking: (reservationId: string, hotelId: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            activityId: string;
            /**
             * A reference to the type of object defined by the UniqueID element.
             * @example "EXTERNALSYSTEMCODE"
             */
            activityIdType: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API will send a response to a Location Notification. <p><strong>OperationId:</strong>postLocationNotification</p>
         *
         * @tags LeisureManagement
         * @name PostLocationNotification
         * @summary Send a response to Location Notification
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/locationNotifications
         */
        postLocationNotification: (reservationId: string, hotelId: string, locationNotificationToBeCreated: LocationNotificationToBeCreated, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    services: {
        /**
         * @description Operation to clear cache <p><strong>OperationId:</strong>deleteLeisureManagementServiceCache</p>
         *
         * @tags LeisureManagement
         * @name DeleteLeisureManagementServiceCache
         * @summary Clear Cache for the Leisure Management Service
         * @request DELETE:/services/leisureManagement/cache
         */
        deleteLeisureManagementServiceCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Service ping the Leisure Management Service. <p><strong>OperationId:</strong>pingLeisureManagementService</p>
         *
         * @tags LeisureManagement
         * @name PingLeisureManagementService
         * @summary Ping the Leisure Management Service
         * @request GET:/services/leisureManagement/status
         */
        pingLeisureManagementService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
        /**
         * @description Delete Leisure Management Configuration Cache <p><strong>OperationId:</strong>deleteLeisureManagementConfigCache</p>
         *
         * @tags LeisureManagementConfig
         * @name DeleteLeisureManagementConfigCache
         * @summary  clear cache
         * @request DELETE:/services/leisureManagementConfig/cache
         */
        deleteLeisureManagementConfigCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Get Leisure Management Configuration Services Status <p><strong>OperationId:</strong>getLeisureManagementConfigServicesStatus</p>
         *
         * @tags LeisureManagementConfig
         * @name GetLeisureManagementConfigServicesStatus
         * @summary Send a response to a ping
         * @request GET:/services/leisureManagementConfig/status
         */
        getLeisureManagementConfigServicesStatus: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
}
