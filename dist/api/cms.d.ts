/** Response for fetching calendar tasks. */
export interface CalendarTasks {
    /** Detailed information regarding calendar task. */
    taskSummary?: CalendarTaskListType;
    /** Defines summary count of calendar tasks that belongs to specific classification. */
    countSummary?: CalendarTaskCountListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Detailed information regarding calendar task.
 * @maxItems 4000
 */
export type CalendarTaskListType = CalendarTaskType[];
/** Detailed information regarding calendar task. */
export interface CalendarTaskType {
    /**
     * Hotel code of calendar task.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Duration of calendar task. */
    timeSpan?: TimeSpanType;
    /** Completion status of calendar task. */
    status?: {
        /** Name of person who completed the task. Ignored when task is not marked as completed. */
        completedBy?: string;
        /**
         * Date on which the task was completed. Ignored when task is not marked as completed.
         * @format date
         * @maxLength 8
         */
        completedOn?: string;
        /** Whether the task is completed or not. */
        completed?: boolean;
    };
    /** Priority level of calendar task. */
    priorityInfo?: CalendarTaskPriorityType;
    /** Classification of calendar task. */
    classCode?: CalendarTaskClassType;
    /** Type of calendar task based on its classification. */
    typeCode?: CodeDescriptionType;
    /**
     * Brief description and purpose of calendar task.
     * @minLength 0
     * @maxLength 2000
     */
    purpose?: string;
    /**
     * Additional notes and information regarding calendar task.
     * @minLength 0
     * @maxLength 2000
     */
    notes?: string;
    /**
     * Owner code of the person to whom the calendar task is assigned.
     * @minLength 0
     * @maxLength 20
     */
    taskOwner?: string;
    /**
     * Author of the calendar task.
     * @minLength 0
     * @maxLength 20
     */
    author?: string;
    /** List of Accounts that are linked with the calendar task. */
    accountIdList?: UniqueNameIDListType;
    /** List of Contacts that are linked with the calendar task. */
    contactIdList?: UniqueNameIDListType;
    /** List of Blocks that are linked with the calendar task. */
    blockIdList?: UniqueNameIDListType;
    /** Count of the attachments that are attached to the task. */
    attachmentsCount?: number;
    /** URL that identifies the location associated with the record identified by the UniqueID. */
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
/** Calendar Task code, description and color This will be used for calendar task priorities. */
export interface CalendarTaskPriorityType {
    /** Status code and description. */
    code?: CodeDescriptionType;
    /** Color for Calendar Task. */
    priorityColor?: PriorityColorType;
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
/** Priority code color configuration type. */
export declare enum PriorityColorType {
    Red = "Red",
    DarkRed = "DarkRed",
    Blue = "Blue",
    DarkBlue = "DarkBlue",
    Cyan = "Cyan",
    DarkCyan = "DarkCyan",
    Magenta = "Magenta",
    DarkMagenta = "DarkMagenta",
    Green = "Green",
    DarkGreen = "DarkGreen",
    Black = "Black",
    Yellow = "Yellow",
    DarkYellow = "DarkYellow"
}
/** Defines classification codes of calendar task. */
export declare enum CalendarTaskClassType {
    Correspondence = "Correspondence",
    Meeting = "Meeting",
    Todolist = "Todolist",
    Call = "Call",
    Appointment = "Appointment"
}
/**
 * Defines descriptive name and unique identification combination.
 * @maxItems 4000
 */
export type UniqueNameIDListType = UniqueNameIDType[];
/** Defines descriptive name, unique identification, and basic information combination. */
export interface UniqueNameIDType {
    /**
     * Display name.
     * @minLength 0
     * @maxLength 200
     */
    name?: string;
    /** Phone number. */
    phoneNumber?: PhoneNumberType;
    /** Email address. */
    email?: BasicEmailType;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
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
 * Phone number
 * @minLength 0
 * @maxLength 40
 */
export type PhoneNumberType = string;
/**
 * Email address
 * @minLength 0
 * @maxLength 2000
 */
export type BasicEmailType = string;
/**
 * Defines summary count of calendar tasks that belongs to specific classification.
 * @maxItems 4000
 */
export type CalendarTaskCountListType = CalendarTaskCountType[];
/** Defines summary count of calendar tasks that belongs to specific classification. */
export interface CalendarTaskCountType {
    /** Classification code of calendar task. */
    class?: CalendarTaskClassType;
    /**
     * Owner code of the person to whom the calendar task is assigned.
     * @minLength 0
     * @maxLength 20
     */
    taskOwner?: string;
    /** Total number of outstanding calendar tasks under specific classification. */
    outstandingCount?: number;
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
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Response for fetching calendar task. */
export interface CalendarTask {
    /** Detailed information regarding calendar task. */
    calendarTaskDetails?: CalendarTaskType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response for fetching calendar task attachments. */
export interface CalendarTaskAttachments {
    /** Collection of information about calendar task attachments returned/fetched as per the criteria in the fetch request. */
    calendarTaskAttachments?: AttachmentsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Attachment List.
 * @maxItems 4000
 */
export type AttachmentsType = AttachmentType[];
/** Attached files. */
export interface AttachmentType {
    /**
     * Name of the file.
     * @minLength 0
     * @maxLength 2000
     */
    fileName?: string;
    /** Size of the file. */
    fileSize?: number;
    /**
     * Description for the file.
     * @minLength 0
     * @maxLength 4000
     */
    description?: string;
    /** Flag to say if attachment is available across properties. */
    global?: boolean;
    /**
     * Hotel Code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** History data associated with Attachment. */
    history?: DateTimeStampGroupType;
    /** URL that identifies the location associated with the record identified by the UniqueID. */
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
export interface DateTimeStampGroupType {
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
/** Response object that retrieves Track It items. */
export interface TrackItItems {
    trackItItemsInfo?: TrackItItemsType;
    /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
    hotelId?: CodeType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** @maxItems 4000 */
export type TrackItItemsType = TrackItItemType[];
/** Detailed information of a Track It item. */
export interface TrackItItemType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    trackItId?: TrackItId;
    /** Group to which the Track It items belong. */
    group?: TrackItGroup;
    /**
     * @minLength 0
     * @maxLength 80
     */
    ticketNumber?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    referenceNumber?: string;
    /** Identifies the kind of Parcel, Baggage, or Lost items or Valet-managed vehicles or services. */
    type?: TrackItType;
    /** Identifies the response expected from staff or other parties relative to a Track It ticket. */
    action?: TrackItActionType;
    /** This contains a generic code and description information. */
    location?: CodeDescriptionType;
    quantity?: number;
    /**
     * @format date
     * @maxLength 8
     */
    followUpDate?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    assignedTo?: ApplicationUserType;
    /** Reservation info associated with a Track It item. */
    reservationInfo?: TrackItReservationInfoType;
    trackItLogList?: TrackItLogListType;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface TrackItId {
    /** URL that identifies the location associated with the record identified by the UniqueID. */
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
/** Group to which the Track It items belong. */
export declare enum TrackItGroup {
    Parcel = "Parcel",
    Valet = "Valet",
    Baggage = "Baggage",
    Lost = "Lost"
}
/** Identifies the kind of Parcel, Baggage, or Lost items or Valet-managed vehicles or services. */
export interface TrackItType {
    /** This contains a generic code and description information. */
    type?: CodeDescriptionType;
    /** Web site address, in IETF(The Internet Engineering Task Force) specified format. */
    url?: URLType;
}
/** Web site address, in IETF(The Internet Engineering Task Force) specified format. */
export interface URLType {
    /** Property Value */
    value?: string;
    /**
     * Defines the purpose of the URL address, such as personal, business, public, etc.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Describes the Type code
     * @minLength 0
     * @maxLength 2000
     */
    typeDescription?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
/** Identifies the response expected from staff or other parties relative to a Track It ticket. */
export interface TrackItActionType {
    /** This contains a generic code and description information. */
    trackItAction?: CodeDescriptionType;
    /** Action status of the Track It item(Open, Closed). */
    status?: ActionStatusType;
}
/** Action status of the Track It item(Open, Closed). */
export declare enum ActionStatusType {
    Open = "Open",
    Closed = "Closed"
}
export interface ApplicationUserType {
    /** Hotel where user belongs. */
    hotel?: CodeDescriptionType;
    /**
     * @minLength 0
     * @maxLength 60
     */
    appUser?: string;
    /**
     * @minLength 0
     * @maxLength 60
     */
    lDAPUser?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    actAs?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    actAt?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    userDefaultLanguage?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    appUserId?: UniqueIDType;
    cashierId?: number;
    /**
     * Cashier title.
     * @minLength 0
     * @maxLength 2000
     */
    cashierTitle?: string;
    /**
     * @minLength 0
     * @maxLength 60
     */
    department?: string;
    /**
     * @minLength 0
     * @maxLength 60
     */
    departmentLocation?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    salesRepCode?: string;
    /**
     * @format date
     * @maxLength 8
     */
    expiryDate?: string;
    /**
     * @format date
     * @maxLength 8
     */
    disabledUntil?: string;
    /**
     * @format date
     * @maxLength 8
     */
    passwordChangeDate?: string;
    userInfo?: EmployeeInfoType;
    /** This is only used during log-in. */
    userSessionInfo?: UserSessionInfoType;
    attendantInfo?: AttendantType;
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
export interface EmployeeInfoType {
    /** This provides name information for a person. */
    personName?: PersonNameType;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    profileId?: UniqueIDType;
    /** Provides address information. */
    addressInfo?: AddressInfoType;
    /** Information on an email for the customer. */
    emailInfo?: EmailInfoType;
    /** Information on a telephone number for the customer. */
    phoneInfo?: TelephoneInfoType;
    /** This contains a generic code and description information. */
    department?: CodeDescriptionType;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @minLength 0
     * @maxLength 20
     */
    gender?: string;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @format date
     * @maxLength 8
     */
    birthDate?: string;
    /** Indicates the date of birth as masked. */
    birthDateMasked?: string;
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
export interface AddressInfoType {
    /** Address details for the profile. */
    address?: AddressType;
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
/** Information on an email for the customer. */
export interface EmailInfoType {
    /** eMail deatils for the profile. */
    email?: EmailType;
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
/** Information on an email for the customer. */
export interface EmailType {
    /**
     * Defines the e-mail address.
     * @minLength 0
     * @maxLength 2000
     */
    emailAddress?: string;
    /**
     * Defines the purpose of the e-mail address (e.g. personal, business, listserve).
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Describes the Type code
     * @minLength 0
     * @maxLength 2000
     */
    typeDescription?: string;
    /** Supported Email format. */
    emailFormat?: 'Html' | 'Text';
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
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
/** Information on a telephone number for the customer. */
export interface TelephoneInfoType {
    /** Phone details for the profile. */
    telephone?: TelephoneType;
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
/** Information on a telephone number for the customer. */
export interface TelephoneType {
    /**
     * Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc.
     * @minLength 0
     * @maxLength 20
     */
    phoneTechType?: string;
    /**
     * Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening).
     * @minLength 0
     * @maxLength 20
     */
    phoneUseType?: string;
    /**
     * Description of the PhoneUseType code
     * @minLength 0
     * @maxLength 2000
     */
    phoneUseTypeDescription?: string;
    /**
     * Telephone number assigned to a single location.
     * @minLength 0
     * @maxLength 40
     */
    phoneNumber?: string;
    /**
     * Extension to reach a specific party at the phone number.
     * @minLength 0
     * @maxLength 20
     */
    extension?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
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
export interface UserSessionInfoType {
    /**
     * @format date
     * @maxLength 8
     */
    businessDate?: string;
    /**
     * @format date
     * @maxLength 8
     */
    systemDate?: string;
    terminal?: string;
    runningApp?: string;
    shareProfiles?: boolean;
    /** This contains a generic code and description information. */
    hotel?: CodeDescriptionType;
    /** This contains a generic code and description information. */
    cro?: CodeDescriptionType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    chain?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    cROCountryCode?: string;
    sessionDefaults?: UserSessionDefaultsType;
    /** Collection of generic Name-Value-Pair parameters. */
    parameters?: ParametersType;
}
export interface UserSessionDefaultsType {
    dbDateFormat?: string;
    oracleDateFormat?: string;
    oracleTimeFormat?: string;
    javaDateFormat?: string;
    javaTimeFormat?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    currencyFormat?: string;
    defaultLanguage?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    baseLanguage?: string;
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
export interface AttendantType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    attendantId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** Reservation info associated with a Track It item. */
export interface TrackItReservationInfoType {
    /** Unique Id that references an object uniquely in the system. */
    reservationIdList?: ReservationIdList;
    /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
    timeSpan?: TimeSpanType;
    /** Specifies Company or Travel Agent profile using IATA or Corp. No. */
    guestInfo?: ResGuestInfoType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
    roomStatus?: HousekeepingRoomStatusType;
    /** Validations type record returned after Validations are done. */
    guarantee?: ResGuaranteeType;
    /** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
    reservationStatus?: PMSResStatusType;
    /** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
    computedReservationStatus?: PMSResStatusType;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ReservationIdList = UniqueIDType[];
/** Specifies Company or Travel Agent profile using IATA or Corp. No. */
export interface ResGuestInfoType {
    /** The Membership object identifying the frequent customer reward program. */
    membership?: MembershipInfoType;
    /** Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.) */
    namePrefix?: NamePrefixType;
    /** Given name, first name or names */
    givenName?: GivenNameType;
    /**
     * Alternate given name, first name or names
     * @minLength 0
     * @maxLength 40
     */
    alternateGivenName?: string;
    /**
     * The middle name of the person name
     * @minLength 0
     * @maxLength 40
     */
    middleName?: string;
    /**
     * e.g "van der", "von", "de"
     * @minLength 0
     * @maxLength 20
     */
    surnamePrefix?: string;
    /** Family name, last name. */
    surname?: SurnameType;
    /**
     * Alternate family name, last name.
     * @minLength 0
     * @maxLength 40
     */
    alternateSurname?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.).
     * @minLength 0
     * @maxLength 20
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @minLength 0
     * @maxLength 20
     */
    nameTitle?: string;
    /** Full display name */
    fullName?: string;
    /** Altername full display name */
    alternateFullName?: string;
    /** Phone number */
    phoneNumber?: PhoneNumberType;
    /** Email address */
    email?: BasicEmailType;
    /**
     * Date of birth
     * @format date
     * @maxLength 8
     */
    birthDate?: string;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /** Affiliation or ethnicity to a particular country. */
    nationality?: CountryNameType;
    /** The supplier's ranking of the customer (e.g., VIP, numerical ranking). */
    vip?: VIPType;
    /** Address information that is attached to the reservation guest */
    address?: AddressSearchType;
    /** Provides information about the guest's anonymization status */
    anonymization?: AnonymizationType;
    /** List of guest names that are accompanying the reservation guest */
    accompanyGuests?: ResAccompanyGuestListType;
    /** External information about the guest associated with the reservation. */
    externalInfo?: ResGuestExternalInfoType;
    /** Contains information regarding the last stay of this guest. */
    guestLastStayInfo?: GuestLastStayInfoType;
    /** Guest profile restricted reason code */
    guestRestrictedCode?: string;
    /** Guest profile restricted reason description */
    guestRestrictedReasonDesc?: string;
    /** True indicates there are restrictions associated with the current profile. */
    guestRestricted?: boolean;
    /**
     * Unique identifier of the police registration card number.
     * @minLength 0
     * @maxLength 40
     */
    registrationCardNo?: string;
    nameType?: NameTypeType;
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
/** The Membership object identifies the frequent customer reward program. */
export interface MembershipInfoType {
    /** Membership ID (Unique ID from the memberships table). */
    membershipId?: number;
    /**
     * The code or name of the membership program ('Hertz', 'AAdvantage', etc.).
     * @minLength 0
     * @maxLength 20
     */
    programCode?: string;
    /**
     * The code or name of the bonus program. BonusCode can be used to indicate the level of membership (Gold Club, Platinum member, etc.)
     * @minLength 0
     * @maxLength 20
     */
    bonusCode?: string;
    /**
     * The description of the ProgramCode.(Delta Previlige for code DP)
     * @minLength 0
     * @maxLength 2000
     */
    membershipTypeDesc?: string;
    /**
     * The description of the Bonus Code.(Platinum for code P)
     * @minLength 0
     * @maxLength 2000
     */
    membershipLevelDesc?: string;
    /**
     * The account identification number for this particular member in this particular program.
     * @minLength 0
     * @maxLength 50
     */
    accountId?: string;
    /**
     * The code or name of the membership level and indicates the level of membership (Gold Club, Platinum member, etc.). This is same as the BonusCode.
     * @minLength 0
     * @maxLength 20
     */
    membershipLevel?: string;
    /** Ranking assigned to the Player Profile by the Gaming system. */
    playerRanking?: number;
}
/**
 * Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
 * @minLength 0
 * @maxLength 40
 */
export type NamePrefixType = string;
/**
 * Given name, first name or names
 * @minLength 0
 * @maxLength 40
 */
export type GivenNameType = string;
/**
 * Family name, last name.
 * @minLength 0
 * @maxLength 40
 */
export type SurnameType = string;
/** The supplier's ranking of the customer. */
export interface VIPType {
    /**
     * VIP Code.
     * @minLength 0
     * @maxLength 20
     */
    vipCode?: string;
    /**
     * VIP Description.
     * @minLength 0
     * @maxLength 80
     */
    vipDescription?: string;
}
/** Address Details such as city, state, country, postal code etc. */
export interface AddressSearchType {
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
     * State or Province name (e.g., Texas).
     * @minLength 0
     * @maxLength 20
     */
    state?: string;
    /** Country name (e.g., Ireland). */
    country?: CountryNameType;
    /**
     * First Line of Street Address. For profile search it matches the first Address line.
     * @minLength 0
     * @maxLength 80
     */
    streetAddress?: string;
    /** When true indicates that only profiles with city will be fetched. */
    excludeNoCity?: boolean;
}
/** Provides information about guest's anonymization status. */
export interface AnonymizationType {
    /** Status of anonymization such as Requested or Anonymized. */
    anonymizationStatus?: AnonymizationStatusType;
    /**
     * Date and Time when the guest was anonymized.
     * @format date-time
     */
    anonymizationDate?: string;
}
/** Guest has been anonymized. */
export declare enum AnonymizationStatusType {
    Requested = "Requested",
    Anonymized = "Anonymized"
}
/**
 * Collection of accompany guests
 * @maxItems 4000
 */
export type ResAccompanyGuestListType = ResAccompanyGuestInfoType[];
export interface ResAccompanyGuestInfoType {
    /** Given name, first name or names */
    firstName?: string;
    /** Family name, last name. */
    lastName?: string;
    /** String representation of the full name */
    fullName?: string;
    /**
     * Unique identifier of the police registration card number.
     * @minLength 0
     * @maxLength 40
     */
    registrationCardNo?: string;
    /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
    profileIdList?: ProfileIdList;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];
/** Specifies Company or Travel Agent profile using IATA or Corp. No. */
export interface ResGuestExternalInfoType {
    /** Given name, first name or names */
    givenName?: GivenNameType;
    /** Family name, last name. */
    surname?: SurnameType;
}
/** Contains last stay related details of the guest. */
export interface GuestLastStayInfoType {
    /**
     * Guest's last stay date.
     * @format date
     * @maxLength 8
     */
    lastStayDate?: string;
    /**
     * Room Number where the guest stayed.
     * @minLength 0
     * @maxLength 20
     */
    lastStayRoom?: string;
    /** The Rate amount of the guest's last stay. */
    lastStayRate?: CurrencyAmountType;
    /** The total number of previous stay of the guest. */
    totalStay?: number;
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
export declare enum NameTypeType {
    Guest = "Guest",
    Company = "Company",
    Agent = "Agent",
    Contact = "Contact",
    Source = "Source",
    Group = "Group",
    Employee = "Employee",
    Hotel = "Hotel",
    Purge = "Purge"
}
/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
export declare enum HousekeepingRoomStatusType {
    Clean = "Clean",
    Dirty = "Dirty",
    Pickup = "Pickup",
    Inspected = "Inspected",
    OutOfOrder = "OutOfOrder",
    OutOfService = "OutOfService"
}
/** Validations type record returned after Validations are done. */
export interface ResGuaranteeType {
    /**
     * Guarantee Code.
     * @minLength 0
     * @maxLength 20
     */
    guaranteeCode?: string;
    /**
     * Guarantee Code.
     * @minLength 0
     * @maxLength 80
     */
    shortDescription?: string;
    /** Guarantee Code. */
    onHold?: boolean;
}
/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
export declare enum PMSResStatusType {
    Reserved = "Reserved",
    Requested = "Requested",
    NoShow = "NoShow",
    Cancelled = "Cancelled",
    InHouse = "InHouse",
    CheckedOut = "CheckedOut",
    Waitlisted = "Waitlisted",
    DueIn = "DueIn",
    DueOut = "DueOut",
    Walkin = "Walkin",
    PendingCheckout = "PendingCheckout"
}
/** @maxItems 4000 */
export type TrackItLogListType = TrackItLogType[];
/** Individual activity log related to the Track It ticket. */
export interface TrackItLogType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    trackItLogId?: UniqueIDType;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    trackItId?: TrackItId;
    /**
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * @minLength 0
     * @maxLength 200
     */
    description?: string;
    /**
     * @format date
     * @maxLength 8
     */
    businessDate?: string;
    logUserId?: number;
    logUserName?: string;
    /** @format date-time */
    logDate?: string;
}
/**
 * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
 * @minLength 0
 * @maxLength 20
 */
export type CodeType = string;
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
 * @title OPERA Cloud API for Customer Management Service
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /cms/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    activities: {
        /**
         * @description You can fetch a list of Calendar Tasks for with this API, for one or more properties. <p><strong>OperationId:</strong>getCalendarTasks</p>
         *
         * @tags CustomerManagement
         * @name GetCalendarTasks
         * @summary Get Calendar Tasks
         * @request GET:/activities/tasks
         */
        getCalendarTasks: (hotelId: string, query?: {
            /** Indicator whether summary count will be retrieved or not. */
            countSummary?: boolean;
            /** Indicator whether task summary will be retrieved or not. */
            taskSummary?: boolean;
            /** List of Hotel codes of calendar task. */
            hotelIds?: string[];
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            duration?: string;
            /**
             * Defines completion status codes of calendar task.
             * @uniqueItems true
             */
            completionStatus?: 'All' | 'Completed' | 'Outstanding';
            /** List of priority levels of calendar task. */
            priorityCodes?: string[];
            /**
             * Defines classification codes of calendar task.
             * @uniqueItems true
             */
            classCodes?: ('Correspondence' | 'Meeting' | 'Todolist' | 'Call' | 'Appointment')[];
            /** List of types of calendar task based on its classification. */
            typeCodes?: string[];
            /** Brief description and purpose of calendar task. */
            purpose?: string;
            /** Owner code of the person to whom the calendar task is assigned. */
            taskOwner?: string;
            /** Author of the calendar task. */
            author?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            accountId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            accountIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            accountIdType?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            contactIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            contactIdType?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            blockIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            blockIdType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CalendarTasks, any>>;
        /**
         * @description Delete an attachment associated with the calendar task <p><strong>OperationId:</strong>deleteCalendarTaskAttachment</p>
         *
         * @tags CustomerManagement
         * @name DeleteCalendarTaskAttachment
         * @summary Delete a Calendar Task attachment
         * @request DELETE:/activities/tasks/attachment
         */
        deleteCalendarTaskAttachment: (hotelId: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            linkedToId: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            attachId: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description With this API you can get a Calendar Task. <p><strong>OperationId:</strong>getCalendarTask</p>
         *
         * @tags CustomerManagement
         * @name GetCalendarTask
         * @summary Get a Calendar Task
         * @request GET:/activities/{activityId}/task
         */
        getCalendarTask: (hotelId: string, activityId: string, query?: {
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            idType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CalendarTask, any>>;
    };
    hotels: {
        /**
         * @description This API will allow you to create a new Calendar Task. <p><strong>OperationId:</strong>postCalendarTask</p>
         *
         * @tags CustomerManagement
         * @name PostCalendarTask
         * @summary Create Calendar Task
         * @request POST:/hotels/{hotelId}/activities/task
         */
        postCalendarTask: (hotelId: string, calendarTask: CalendarTask, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Retrieve the attachments on a Calendar task. <p><strong>OperationId:</strong>getCalendarTaskAttachments</p>
         *
         * @tags CustomerManagement
         * @name GetCalendarTaskAttachments
         * @summary Get calendar task attachments
         * @request GET:/hotels/{hotelId}/activities/tasks/{taskId}/attachments
         */
        getCalendarTaskAttachments: (taskId: string, hotelId: string, query?: {
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            idType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CalendarTaskAttachments, any>>;
        /**
         * @description This API will allow you to update an existing Calendar Task. <p><strong>OperationId:</strong>putCalendarTask</p>
         *
         * @tags CustomerManagement
         * @name PutCalendarTask
         * @summary Update Calendar Task
         * @request PUT:/hotels/{hotelId}/activities/{activityId}/task
         */
        putCalendarTask: (activityId: string, hotelId: string, calendarTask: CalendarTask, params?: RequestParams) => Promise<AxiosResponse<CalendarTask, any>>;
        /**
         * @description This API will allow you to delete a Calendar Task. <p><strong>OperationId:</strong>deleteCalendarTask</p>
         *
         * @tags CustomerManagement
         * @name DeleteCalendarTask
         * @summary Delete a Calendar Task
         * @request DELETE:/hotels/{hotelId}/activities/{activityId}/task
         */
        deleteCalendarTask: (activityId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Create a new Track It Item. Track It manages storage and delivery of guest luggage, parcels, vehicles (valet), and lost items.  They can optionally be linked to a reservation if related or an arrival, in-house or departure reservation. <p><strong>OperationId:</strong>postTrackItItems</p>
         *
         * @tags CustomerManagement
         * @name PostTrackItItems
         * @summary Creates track it items
         * @request POST:/hotels/{hotelId}/trackItems
         */
        postTrackItItems: (hotelId: string, trackItItems: TrackItItems, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Update the details of a Track It Item for a property. <p><strong>OperationId:</strong>putTrackItItems</p>
         *
         * @tags CustomerManagement
         * @name PutTrackItItems
         * @summary Updates track it items
         * @request PUT:/hotels/{hotelId}/trackItems
         */
        putTrackItItems: (hotelId: string, trackItItems: TrackItItems, params?: RequestParams) => Promise<AxiosResponse<TrackItItems, any>>;
        /**
         * @description Delete a Track It Item for a property. <p><strong>OperationId:</strong>deleteTrackItItems</p>
         *
         * @tags CustomerManagement
         * @name DeleteTrackItItems
         * @summary Deletes track it items
         * @request DELETE:/hotels/{hotelId}/trackItems
         */
        deleteTrackItItems: (hotelId: string, query?: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            trackItId?: string[];
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            trackItIdContext?: string[];
            /** A reference to the type of object defined by the UniqueID element. */
            trackItIdType?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Retrieve a list of all Track It Items for a property. <p><strong>OperationId:</strong>getTrackItItems</p>
         *
         * @tags CustomerManagement
         * @name GetTrackItItems
         * @summary Fetches track it items
         * @request GET:/hotels/{hotelId}/trackItems
         */
        getTrackItItems: (hotelId: string, query?: {
            /** Complete ticket number of the Track It item. */
            ticketId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            reservationIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            reservationIdType?: string;
            /** Given name, first name or names. */
            givenName?: string;
            /** Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. */
            surname?: string;
            /**
             * Group to which the Track It items belong.
             * @uniqueItems true
             */
            trackItGroups?: ('Parcel' | 'Valet' | 'Baggage' | 'Lost')[];
            /** Track It types based on the Track It group. */
            types?: string[];
            /** Locations for Track It location. */
            locations?: string[];
            /** Track It actions based on Track It groups. */
            actions?: string[];
            /**
             * Action status of the Track It item(Open, Closed).
             * @uniqueItems true
             */
            actionStatuses?: ('Open' | 'Closed')[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            appUserId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            appUserIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            appUserIdType?: string;
            /**
             * Assignment status of the Track It item(Assigned, Unassigned).
             * @uniqueItems true
             */
            assignedStatuses?: ('Assigned' | 'Unassigned')[];
            /** Guest's room number if ticket associated with a reservation. */
            room?: string;
            /**
             * Follow up date for the ticket.
             * @format date
             */
            followUpDate?: string;
            /**
             * Date when the ticket was created.
             * @format date
             */
            createdOn?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            createdByUserId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            createdByUserIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            createdByUserIdType?: string;
            /** Description associated with the Track It item. */
            description?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TrackItItems, any>>;
    };
    services: {
        /**
         * @description  <p><strong>OperationId:</strong>deleteCustomerManagementServiceCache</p>
         *
         * @tags CustomerManagement
         * @name DeleteCustomerManagementServiceCache
         * @summary Operation to clear the cache for the customer management service
         * @request DELETE:/services/customerManagement/cache
         */
        deleteCustomerManagementServiceCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>pingCustomerManagementService</p>
         *
         * @tags CustomerManagement
         * @name PingCustomerManagementService
         * @summary Operation to ping the customer management service
         * @request GET:/services/customerManagement/status
         */
        pingCustomerManagementService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
}
