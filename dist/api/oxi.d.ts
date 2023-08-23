export interface AutomaticTransmissionSchedulesToBeCreated {
    /** Collection of automatic transmission schedules that needs to be created. */
    automaticTransmissionSchedules?: AutomaticTransmissionSchedulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of automatic transmission schedules
 * @maxItems 4000
 */
export type AutomaticTransmissionSchedulesType = AutomaticTransmissionScheduleType[];
/** Details which uniquely identifies transmission schedule */
export interface AutomaticTransmissionScheduleType {
    /**
     * Unique alpha numeric value which determines exact transmission schedule. Pass null when creating new transmission schedule
     * @minLength 0
     * @maxLength 30
     */
    messageId?: string;
    /**
     * Hotel code for which the automatic transmission schedule is set.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Interface configured for the property for which the automatic transmission schedule is set.
     * @minLength 0
     * @maxLength 80
     */
    interface?: string;
    /** Data model for which automatic transmission schedule is set. */
    module?: AutomaticTransmissionScheduleModuleTypeType;
    /** Frequency for automatic transmission schedule */
    frequency?: AutomaticTransmissionScheduleFrequencyType;
    /**
     * Date from which transmission schedule has to run
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * End date of transmission schedule
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    /** Indicates whether automatic transmission is active or not */
    inactive?: boolean;
    /** True to modify how the header and grid information sent in the RTAV message. */
    delta?: boolean;
    /**
     * Date when last automatic transmission occurred.
     * @format date-time
     */
    lastSend?: string;
}
/** Data modules that are currently supported */
export declare enum AutomaticTransmissionScheduleModuleTypeType {
    ARExport = "ARExport",
    Block = "Block",
    Inventory = "Inventory",
    ProfileRequest = "ProfileRequest",
    ProfileDailyStats = "ProfileDailyStats"
}
/** Automatic transmission schedule frequency details */
export interface AutomaticTransmissionScheduleFrequencyType {
    /** How frequently transmission schedule has to run */
    frequency?: AutomaticTransmissionScheduleFrequencyTypeType;
    /** Hour of day that the transmission schedule has to run. */
    hourToRun?: number;
    /** Days of the week on which the transmission schedule is to run. */
    weekDayToRun?: DaysOfWeekType;
    /** Day of the month the transmission schedule is to run. Value should be between 1 and 31. */
    dayToRun?: number;
    /** Number representing the month of year that the transmission schedule is to run. For example, 1 = January, 2 = February, 12 = December, etc. */
    monthToRun?: number;
    /** If frequency type is set to intervals then this value will be used to determine the frequency. For example if value is 18 then transmission will be sent every 18 minutes */
    interval?: number;
}
/** Frequency for transmission such as Daily, Weekly, Monthly, Yearly and Interval settings */
export declare enum AutomaticTransmissionScheduleFrequencyTypeType {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Yearly = "Yearly",
    Interval = "Interval"
}
/** Allowed values for the days of week type. */
export declare enum DaysOfWeekType {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
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
export interface CommunicationMethodsToBeChanged {
    /** Collection of Communication Methods to be changed. */
    communicationMethods?: CommunicationMethodsEditType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Contains new values along with associated old values to edit.
 * @maxItems 4000
 */
export type CommunicationMethodsEditType = CommunicationMethodEditType[];
/** Type represents the Communication Mehtod Base Type. */
export interface CommunicationMethodEditType {
    /**
     * OXI Interface ID
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * SID-RESORT for Global Level and HotelId associated with the interface for the Property Level configuration.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Communication Type like HTTP, None. */
    communicationType?: CommunicationType;
    /**
     * Attribute represents the communication flow like UPLOAD,DOWNLOAD.
     * @minLength 0
     * @maxLength 128
     */
    communicationFlow?: string;
    /** New values for Communication Method. */
    newMethod?: CommunicationMethodType;
}
/** Define values for Communication Types. e.g. NO_COMMUNICATION for None, HTTP for HTTP/S. */
export declare enum CommunicationType {
    None = "None",
    Http = "Http"
}
/** Type represents the Communication Method Base Type. */
export interface CommunicationMethodType {
    /**
     * OXI Interface ID
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * SID-RESORT for Global Level and HotelId associated with the interface for the Property Level configuration.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Communication Type like HTTP, None. */
    communicationType?: CommunicationType;
    /**
     * Attribute represents the communication flow like UPLOAD,DOWNLOAD.
     * @minLength 0
     * @maxLength 128
     */
    communicationFlow?: string;
    /** Attribute represents Type None */
    noCommunication?: CommunicationMethodNoneType;
    /** Attribute represents Type HTTP */
    hTTPS?: CommunicationMethodHTTPSType;
    /**
     * Attribute that indicates whether the communication type allowed or not.
     * @minLength 0
     * @maxLength 2000
     */
    allowedComTypes?: string;
    /**
     * Attribute represents Description of Communication Flow
     * @minLength 0
     * @maxLength 100
     */
    displayText?: string;
    /** Attribute represents Retry Count */
    retryCount?: number;
    /** Attribute represents Interval in seconds between retries */
    retryInterval?: number;
    /**
     * Attribute represents Upload start time in HH:MI 24 hrs format
     * @minLength 0
     * @maxLength 5
     */
    startTime?: string;
    /** Attribute represents Number of days files to be kept in the backup folder */
    noOfDaysToKeep?: number;
    /**
     * Attribute represents Version Number of the PM System.
     * @minLength 0
     * @maxLength 80
     */
    versionNumber?: string;
    /**
     * Attribute represents System Type(Production/Test)
     * @minLength 0
     * @maxLength 80
     */
    systemType?: string;
    /**
     * Chain code.
     * @minLength 0
     * @maxLength 20
     */
    chainCode?: string;
}
/** Type represents details of NONE Communication Type */
export interface CommunicationMethodNoneType {
    /** Attribute represents the Idle Time(in Minutes) */
    sleepTime?: number;
}
/** Type represents the Communication Type Base Details. */
export interface CommunicationMethodHTTPSType {
    /**
     * Attribute represents Username for Types HTTP
     * @minLength 0
     * @maxLength 128
     */
    userName?: string;
    /**
     * Attribute represents Password for Types HTTP
     * @minLength 0
     * @maxLength 128
     */
    password?: string;
    /** Attribute represents Idle Time(in Minutes) of HTTP,None */
    sleepTime?: number;
    /** Attribute is used to indentify the TimeOut(in Seconds) of HTTP,None */
    timeOut?: number;
    /**
     * Attribute represents Address
     * @minLength 0
     * @maxLength 1028
     */
    address?: string;
    /**
     * Attribute that represents Proxy URL
     * @minLength 0
     * @maxLength 1028
     */
    proxyAddress?: string;
    /** Attribute that indicates whether data to compressed or not */
    compressData?: boolean;
    /** Attribute that indicates whether to use client certificate or not */
    useClientCertificate?: boolean;
    /** System Type(Holidex specific) like Dev, UAT, Prod, Stage */
    system?: SystemType;
    /**
     * Locale(Holidex specific) Values like US,EU
     * @minLength 0
     * @maxLength 20
     */
    locale?: string;
    /** Attribute that indicates whether to use Proxy URL or User configured URL. */
    useVaultProxy?: boolean;
    /** Attribute that indicates whether to allow compress data or not. */
    allowCompressData?: boolean;
}
/** Defines values for System Type */
export declare enum SystemType {
    Dev = "Dev",
    Uat = "Uat",
    Stage = "Stage",
    Prod = "Prod"
}
export interface ChangedCommunicationMethods {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ConversionCodesStatusToBeChanged {
    /** Central/Property */
    integrationSystem?: IntegrationSystemType;
    /** Collection of Conversion Codes along with the status that should be updated. */
    conversionCodesStatus?: ConversionCodesStatusType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Represents both OXI and OXI HUB are installed. */
export declare enum IntegrationSystemType {
    Central = "Central",
    Property = "Property",
    Both = "Both"
}
/**
 * Conversion Code and status information.
 * @maxItems 4000
 */
export type ConversionCodesStatusType = ConversionCodeStatusType[];
/** A common type contains basic information about Conversion Code. */
export interface ConversionCodeStatusType {
    /**
     * Hotel Code of the Property.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Identifier of the Interface.
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Type of Conversion Code or user-defined function (UDF) module name configured in the system.
     * @minLength 0
     * @maxLength 80
     */
    conversionCode?: string;
    /** A flag that is true if the conversion code is an user-defined function (UDF) module code. */
    uDFCode?: boolean;
    /** A flag that indicates whether the Conversion Code should be activated or inactivated. */
    activate?: boolean;
}
export interface ChangedConversionCodesStatus {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ExternalInterfaceSetupsToBeCreated {
    /** Values of the created External Interface Setups. */
    externalInterfaceSetups?: InterfaceSetupsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Interface Setups.
 * @maxItems 4000
 */
export type InterfaceSetupsType = InterfaceSetupType[];
/** Type represents ID one Interface Setup */
export interface InterfaceSetupType {
    /**
     * ID of the Interface Setup
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Property for which the Interface Setup is defined.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Corresponding property in the external system
     * @minLength 0
     * @maxLength 20
     */
    externalHotelCode?: string;
    /** Logical Name of the machine that runs the OXIHUB */
    machine?: number;
    /**
     * Detailed information about the interface.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * Type of the message. (XML, TPI, AMF, etc.).
     * @minLength 0
     * @maxLength 80
     */
    messageFormat?: string;
    /** List of all XML Versions defined for the selected Property */
    xMLVersions?: InterfaceSetupXMLVersionsType;
    /**
     * Database ID
     * @minLength 0
     * @maxLength 20
     */
    databaseId?: string;
    /**
     * Type of the interface (UPLOAD, DOWNLOAD, EXPORT, FTCRS, HOLIDEX, etc.,).
     * @minLength 0
     * @maxLength 40
     */
    interfaceType?: string;
    /** Indicates if external system is active */
    externalSystemActivated?: boolean;
    /** System Type of the interface like OXI, OXI-HUB, OG-SPA, OG-GAMING. */
    systemType?: InterfaceSystemType;
    /** Select for all interfaces that send data from Opera to an external system. */
    batchProcessBE?: boolean;
    /** Compress all accumulated Business Events if true. */
    zipData?: boolean;
    /** Indicates external system does not send the full message for changes. */
    deltaMode?: boolean;
    /** Allows to set indicators for deleting data in the OPERA system from an incoming message. This is applicable only for Delta Interfaces, which indicates that the external system does not always send full data for a change. In this case OXI will leave data that is not sent in the message untouched in OPERA. */
    deletionIndicator?: InterfaceSetupMessageIndicatorType;
    /** Allows to set indicators for keeping data in the OPERA system from an incoming message. */
    keepingIndicator?: InterfaceSetupMessageIndicatorType;
    /** Indicates if interface is ORS destination. */
    orsDestination?: boolean;
    /** Indicates if XML Versions Negotiable. */
    xmlSchemaVersionsNegotiable?: boolean;
    /** Indicates to set all XML Versions to Max version. */
    negotiateXmlSchemaVersion?: boolean;
    /**
     * XML Version to be used by all XLM schemas.
     * @minLength 0
     * @maxLength 4
     */
    setAllToVersion?: string;
}
/**
 * Collection of XMLTypes
 * @maxItems 4000
 */
export type InterfaceSetupXMLVersionsType = InterfaceSetupXMLVersionType[];
/** Type representing one XML Type Version for one Interface Setup */
export interface InterfaceSetupXMLVersionType {
    /**
     * XML Type for the current record
     * @minLength 0
     * @maxLength 20
     */
    xMLType?: string;
    /**
     * Maximum Version
     * @minLength 0
     * @maxLength 80
     */
    maximumVersion?: string;
    /**
     * Version of the current XML Type
     * @minLength 0
     * @maxLength 4
     */
    version?: string;
}
/** Defines values for System Type of the interface */
export declare enum InterfaceSystemType {
    Oxi = "Oxi",
    OxiHub = "OxiHub",
    OgSpa = "OgSpa",
    OgGaming = "OgGaming",
    Bexml = "Bexml",
    Import = "Import",
    WebServices = "WebServices"
}
/** Type represents indicators for deleting/keeping data in the OPERA system from an incoming message. */
export interface InterfaceSetupMessageIndicatorType {
    /**
     * Character Indicator
     * @minLength 0
     * @maxLength 20
     */
    characterIndicator?: string;
    /** Numeric Indicator */
    numericIndicator?: number;
    /**
     * Date Indicator.
     * @format date
     * @maxLength 8
     */
    dateIndicator?: string;
}
export interface FetchIntegrationInboundMessages {
    /** List of integration inbound messages matching the criteria provided in the request */
    messages?: IntegrationInboundMessagesType;
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
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of integration inbound messages
 * @maxItems 4000
 */
export type IntegrationInboundMessagesType = IntegrationInboundMessageType[];
/** Elements that uniquely identifies inbound message */
export interface IntegrationInboundMessageType {
    /** ID assigned for this message */
    messageId?: UniqueIDType;
    /**
     * TimeStamp of enqueue of message in OXI Monitoring tables (Inbound/Outbound).
     * @format date-time
     */
    enqueueTime?: string;
    /**
     * TimeStamp of dequeue of message from OXI Monitoring tables (Inbound/Outbound).
     * @format date-time
     */
    dequeueTime?: string;
    /**
     * The interface this message was created for
     * @minLength 0
     * @maxLength 80
     */
    interface?: string;
    /**
     * This identifies the kind of message sent (e.g., reservation, profile, rate, block, rate restriction, inventory, and result)
     * @minLength 0
     * @maxLength 40
     */
    messageType?: string;
    /**
     * Property this message was sent from.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Status of the transmitted message.
     * @minLength 0
     * @maxLength 80
     */
    messageStatus?: string;
    /** Flag that tells whether the message is marked as reviewed or not */
    reviewed?: boolean;
    /**
     * Integration message reference
     * @minLength 0
     * @maxLength 100
     */
    messageReference?: string;
    /**
     * Information that was obtained in a message such as guest last/first name from a reservation message or block code from a block message.
     * @minLength 0
     * @maxLength 200
     */
    messagePrimayInfo?: string;
    /** List of errors or warnings that occurred */
    notices?: WarningsType;
    /** Flag that tells whether the message has attachments or not */
    attachmentExists?: boolean;
    /**
     * Status of the transmitted message.
     * @minLength 0
     * @maxLength 80
     */
    processStatus?: string;
    /** Shows whether the processing of this message was retried and how many times. */
    retryCount?: number;
    /**
     * Populated if external message key is available
     * @minLength 0
     * @maxLength 200
     */
    externalMessageKey?: string;
    /**
     * External system hotel code
     * @minLength 0
     * @maxLength 20
     */
    externalHotelCode?: string;
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
export interface FetchAutomaticTransmissionSchedules {
    /** List of automatic transmission schedules that match the criteria specified in request */
    automaticTransmissonSchedules?: AutomaticTransmissionSchedulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface AutomaticTransmissionSchedulesToBeChanged {
    /** Collection of automatic transmission schedules that needs to be changed. */
    automaticTransmissionSchedules?: AutomaticTransmissionSchedulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ChangedAutomaticTransmissionSchedules {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface FetchConversionCodes {
    /** List of Conversion Codes that met the given search criteria. */
    conversionCodes?: ConversionCodesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Conversion Codes.
 * @maxItems 4000
 */
export type ConversionCodesType = ConversionCodeType[];
/** A common type contains basic information about Conversion Code. */
export interface ConversionCodeType {
    /**
     * Hotel Code of the Property.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Identifier of the Interface.
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Type of Conversion Code or user-defined function (UDF) module name configured in the system.
     * @minLength 0
     * @maxLength 80
     */
    conversionCode?: string;
    /** A flag that is true if the conversion code is an user-defined function (UDF) module code. */
    uDFCode?: boolean;
    /**
     * Label of the Conversion Code that is displayed in UI.
     * @minLength 0
     * @maxLength 200
     */
    label?: string;
    /**
     * Description of the Conversion Code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** A field that distinguishes active and inactive Conversion Codes. */
    active?: boolean;
    /**
     * XML Types for the Conversion Code.
     * @minLength 0
     * @maxLength 2000
     */
    group?: string;
    /** Information about the master (if any) that the current code depends on. */
    master?: ConversionCodeMasterType;
}
/** A type that holds details of master code, that the conversion code depends on. */
export interface ConversionCodeMasterType {
    /**
     * Value of the master code that the conversion code depends on.
     * @minLength 0
     * @maxLength 80
     */
    code?: string;
    /**
     * Label of the master code.
     * @minLength 0
     * @maxLength 200
     */
    label?: string;
}
export interface FetchAccumulatedBusinessEvents {
    /** List of accumulated business events matching the criteria provided in the request */
    businessEvents?: AccumulatedBusinessEventsType;
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
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of accumulated business event messages
 * @maxItems 4000
 */
export type AccumulatedBusinessEventsType = AccumulatedBusinessEventType[];
/** Business Event message details */
export interface AccumulatedBusinessEventType {
    /**
     * Primary Key identifier assigned to the business event.
     * @minLength 0
     * @maxLength 40
     */
    primaryKey?: string;
    /** State of the business event. */
    status?: AccumulatedBusinessEventStatusType;
    /**
     * Data when the message was created by external systems
     * @format date-time
     */
    createDate?: string;
    /**
     * The interface this message was created for
     * @minLength 0
     * @maxLength 20
     */
    interface?: string;
    /**
     * Data module of outgoing message. This identifies the kind of message sent (e.g., reservation, profile, rate, block, rate restriction, inventory, and result)
     * @minLength 0
     * @maxLength 20
     */
    module?: string;
    /**
     * Property this message was sent from.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** State of Accumulated Business Event */
export declare enum AccumulatedBusinessEventStatusType {
    New = "New",
    Ready = "Ready"
}
export interface ConversionCodeMappingsToBeChanged {
    /** Central/Property */
    integrationSystem?: IntegrationSystemType;
    /** Conversion Code Mapping details that should be updated. */
    conversionCodeMappings?: ConversionCodeMappingsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Conversion Code Mappings.
 * @maxItems 4000
 */
export type ConversionCodeMappingsType = ConversionCodeMappingType[];
/** A common type contains basic information about Conversion Code. */
export interface ConversionCodeMappingType {
    /**
     * Hotel Code of the Property.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Identifier of the Interface.
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Type of Conversion Code or user-defined function (UDF) module name configured in the system.
     * @minLength 0
     * @maxLength 80
     */
    conversionCode?: string;
    /** A flag that is true if the conversion code is an user-defined function (UDF) module code. */
    uDFCode?: boolean;
    /** Conversion Code Detail Sequence Number, that uniquely identifies a mapping. */
    id?: number;
    /**
     * OPERA Code value or user-defined function (UDF) field name of the mapping.
     * @minLength 0
     * @maxLength 40
     */
    operaValue?: string;
    /**
     * A value in the External System that should be mapped to the corresponding OPERA Value or user-defined function (UDF) field.
     * @minLength 0
     * @maxLength 100
     */
    externalValue?: string;
    /**
     * Name of the OPERA column that is used in the user-defined function (UDF) mapping.
     * @minLength 0
     * @maxLength 40
     */
    operaColumn?: string;
    /**
     * Field name in the external system that is used in the user-defined function (UDF) mapping.
     * @minLength 0
     * @maxLength 100
     */
    externalFieldName?: string;
    /**
     * Profile type of the user-defined function (UDF) definition.
     * @minLength 0
     * @maxLength 20
     */
    profileType?: string;
    /** When this is true, the External Value of current record is considered to be the default mapping value, where there are more than one mapping for OPERA Value. */
    operaToExternalDefault?: boolean;
    /** When this is true, the OPERA Value of current record is considered to be the default mapping value, where there are more than one mapping for the External System Value. */
    externalToOperaDefault?: boolean;
    /** A flag to indicate whether the current External Value should be considered as default, when there is already a default External Value mapped for the same OPERA Value. */
    overrideExternalDefault?: boolean;
    /** A flag to indicate whether the current OPERA Value should be considered as default, when there is already a default OPERA Value mapped for the same External Value. */
    overrideOperaDefault?: boolean;
    /** A flag to indicate whether the conversion code mapping is active in the system or not. */
    active?: boolean;
    /** A flag to indicate whether this conversion was manually entered or IFC created. */
    iFCCreated?: boolean;
    /**
     * Master Value for the Conversion Code Mapping (if any), to which the OPERA mapping value corresponds to. For user-defined function (UDF) mapping, this field represents the profile type of a profile UDF definition.
     * @minLength 0
     * @maxLength 20
     */
    masterValue?: string;
}
export interface ChangedConversionCodeMappings {
    /** Type containing additional status information after creating or changing mappings. */
    conversionCodeMappingStatus?: ConversionCodeMappingStatusType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** A type that holds status after creating/changing a conversion code mapping. */
export interface ConversionCodeMappingStatusType {
    /** A flag that indicates if another Opera Value is marked as External->OPERA default for the same External Value mapping. */
    operaDefaultExists?: boolean;
    /** A flag that indicates if another External Value is marked as OPERA->External default for the same Opera Value mapping. */
    externalDefaultExists?: boolean;
}
export interface ConversionCodeMappingsToBeCreated {
    /** Central/Property */
    integrationSystem?: IntegrationSystemType;
    /** Conversion Code Mapping details that should be created. */
    conversionCodeMappings?: ConversionCodeMappingsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CreatedConversionCodeMappings {
    /** Type containing additional status information after creating or changing mappings. */
    conversionCodeMappingStatus?: ConversionCodeMappingStatusType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface FetchConversionCodeMappings {
    /** List of Conversion Code Mappings that met the given search criteria. */
    conversionCodeMappings?: ConversionCodeMappingsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface FetchIntegrationOutboundMessages {
    /** List of integration outbound messages matching the criteria provided in the request */
    messages?: IntegrationOutboundMessagesType;
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
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of integration outbound messages
 * @maxItems 4000
 */
export type IntegrationOutboundMessagesType = IntegrationOutboundMessageType[];
/** Elements that uniquely identifies inbound message */
export interface IntegrationOutboundMessageType {
    /** ID assigned for this message */
    messageId?: UniqueIDType;
    /**
     * TimeStamp of enqueue of message in OXI Monitoring tables (Inbound/Outbound).
     * @format date-time
     */
    enqueueTime?: string;
    /**
     * TimeStamp of dequeue of message from OXI Monitoring tables (Inbound/Outbound).
     * @format date-time
     */
    dequeueTime?: string;
    /**
     * The interface this message was created for
     * @minLength 0
     * @maxLength 80
     */
    interface?: string;
    /**
     * This identifies the kind of message sent (e.g., reservation, profile, rate, block, rate restriction, inventory, and result)
     * @minLength 0
     * @maxLength 40
     */
    messageType?: string;
    /**
     * Property this message was sent from.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Status of the transmitted message.
     * @minLength 0
     * @maxLength 80
     */
    messageStatus?: string;
    /** Flag that tells whether the message is marked as reviewed or not */
    reviewed?: boolean;
    /**
     * Integration message reference
     * @minLength 0
     * @maxLength 100
     */
    messageReference?: string;
    /**
     * Information that was obtained in a message such as guest last/first name from a reservation message or block code from a block message.
     * @minLength 0
     * @maxLength 200
     */
    messagePrimayInfo?: string;
    /** List of errors or warnings that occurred */
    notices?: WarningsType;
    /** Flag that tells whether the message has attachments or not */
    attachmentExists?: boolean;
    /** If this message was triggered by business event then related information will be populated in this element. */
    businessEventQueue?: PendingBusinessEventType;
    /**
     * TimeStamp of change in message processing status (PROCESSED/FAILED/RESEND_SUCCESS/REJECT).
     * @format date-time
     */
    updateTime?: string;
    /**
     * TimeStamp of receival of acknowledgement from external system (RESULT_SUCCESS/RESULT_FAILED).
     * @format date-time
     */
    resultTime?: string;
    /**
     * TimeStamp of receival of http call status intiated by the OXI processor to deliver message to the external system.
     * @format date-time
     */
    deliveryTime?: string;
}
/** Business event queue status common details */
export interface PendingBusinessEventType {
    /**
     * Module name where the change occurred
     * @minLength 0
     * @maxLength 40
     */
    module?: string;
    /**
     * Name of the external system that the message was created for
     * @minLength 0
     * @maxLength 4000
     */
    externalSystem?: string;
    /**
     * Type of action that the outbound message is pertaining to
     * @minLength 0
     * @maxLength 40
     */
    actionType?: string;
    /**
     * Action Id number that is automatically assigned to the action when it happened
     * @minLength 0
     * @maxLength 40
     */
    actionId?: string;
    /**
     * Date when the business event change occurred
     * @format date-time
     */
    enquiryDate?: string;
    /**
     * Hotel Code associated with business event
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Date and time that the change happened
     * @format date-time
     */
    createdDate?: string;
    /**
     * Alpha-numeric key to uniquely identify the data applicable to that particular action
     * @minLength 0
     * @maxLength 2000
     */
    primaryKey?: string;
    /**
     * Name of the external system that the message was created for and needs to picked up by.
     * @minLength 0
     * @maxLength 2000
     */
    consumer?: string;
}
export interface FetchInterfaceControls {
    /** Contains a collection of OXI Parameters/Settings, organized into groups. */
    interfaceControlGroups?: InterfaceControlGroupsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * OXI Parameters/Settings group.
 * @maxItems 4000
 */
export type InterfaceControlGroupsType = InterfaceControlGroupType[];
/** Type to group the different OXI Parameters/Settings. */
export interface InterfaceControlGroupType {
    /**
     * Group Name.
     * @minLength 0
     * @maxLength 80
     */
    groupName?: string;
    /**
     * Group Display Name.
     * @minLength 0
     * @maxLength 80
     */
    displayName?: string;
    /** Collection of OXI Parameters/Settings. */
    interfaceControls?: InterfaceControlsType;
}
/**
 * OXI Parameters/Settings.
 * @maxItems 4000
 */
export type InterfaceControlsType = InterfaceControlType[];
/** Internal settings that can be of a certain valueType. */
export interface InterfaceControlType {
    /**
     * @minLength 0
     * @maxLength 2000
     */
    shortDescription?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** A flag which indicate whether a wild card search should be made. */
    wildCardMatch?: boolean;
    /**
     * @minLength 0
     * @maxLength 80
     */
    name?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    displayName?: string;
    type?: ApplicationSettingTypeType;
    /**
     * Each configuration item will come with a HotelCode which will help the configuration to specify what context the update has to be. Eg. _Global,ORS,'CRO', etc.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    sequence?: number;
    editAllowed?: boolean;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
    scope?: 'P' | 'G' | 'Ch' | 'C';
    valueType?: 'Yn' | 'Integer' | 'String' | 'SingleSelectLov' | 'MultiSelectLov' | 'ShuttleLov' | 'Custom' | 'Double' | 'Secure';
    /** Represents whether the value is OXI Parameter or Conversion code default. */
    conversionType?: ApplicationSettingConversionType;
    /** Indicator if the function does not count against the OPERA Control function count limit or not */
    subscriptionCountEligible?: boolean;
    /** @maxItems 4000 */
    settings?: BaseApplicationSettingType[];
    levelType?: ApplicationSettingLevelType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    levelCode?: string;
    /**
     * Identifier of the Interface.
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /** Flag indicating to use global inbound/outbound value for conversion code. */
    useGlobal?: boolean;
    /**
     * V5 parameter group.
     * @minLength 0
     * @maxLength 80
     */
    oxiParameterGroup?: string;
}
export declare enum ApplicationSettingTypeType {
    Function = "Function",
    Parameter = "Parameter",
    Setting = "Setting"
}
export declare enum ApplicationSettingConversionType {
    Default = "Default",
    Parameter = "Parameter"
}
/** Internal settings that can be of a certain valueType. */
export interface BaseApplicationSettingType {
    /**
     * @minLength 0
     * @maxLength 2000
     */
    shortDescription?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** A flag which indicate whether a wild card search should be made. */
    wildCardMatch?: boolean;
    /**
     * @minLength 0
     * @maxLength 80
     */
    name?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    displayName?: string;
    type?: ApplicationSettingTypeType;
    /**
     * Each configuration item will come with a HotelCode which will help the configuration to specify what context the update has to be. Eg. _Global,ORS,'CRO', etc.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    sequence?: number;
    editAllowed?: boolean;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
    scope?: 'P' | 'G' | 'Ch' | 'C';
    valueType?: 'Yn' | 'Integer' | 'String' | 'SingleSelectLov' | 'MultiSelectLov' | 'ShuttleLov' | 'Custom' | 'Double' | 'Secure';
    /** Represents whether the value is OXI Parameter or Conversion code default. */
    conversionType?: ApplicationSettingConversionType;
    /** Indicator if the function does not count against the OPERA Control function count limit or not */
    subscriptionCountEligible?: boolean;
}
export declare enum ApplicationSettingLevelType {
    Global = "Global",
    Hotel = "Hotel",
    Cro = "Cro"
}
/** Response element for Downloaded Messages statistics. */
export interface MessageStatistics {
    /** Interface Setup Details. */
    reports?: {
        /** Interface Setup Details. */
        interfaceDetails?: InterfaceSetupIDType;
        /** Statistical report - each report is determined by the requested report in the service request criteria. */
        statReports?: ExchangeStatReportDetailsType;
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type represents ID one Interface Setup */
export interface InterfaceSetupIDType {
    /**
     * ID of the Interface Setup
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Property for which the Interface Setup is defined.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/**
 * Exchange Interface Report Type.
 * @maxItems 4000
 */
export type ExchangeStatReportDetailsType = ExchangeStatReportType[];
/** Concrete exchange interface report type. */
export interface ExchangeStatReportType {
    /** @maxItems 4000 */
    stat?: ExchangeStatType[];
    /** Supported Exchange Interface report codes. */
    reportCode?: ExchangeStatReportCodeType;
    /**
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/** Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units. */
export interface ExchangeStatType {
    /**
     * Unit of measurement or the actual code that defines the value. Eg. CurrencyCode for the Amount Category.
     * @minLength 3
     * @maxLength 3
     */
    unitType?: string;
    /** Statistical value. */
    unitValue?: number;
    /** Statistical unit category. */
    unitCategory?: StatUnitCategoryType;
    /** Supported Exchange Interface statistical codes. */
    code?: ExchangeStatCodeType;
}
/** Supported statistical units. */
export declare enum StatUnitCategoryType {
    Numeric = "Numeric",
    Amount = "Amount"
}
/** Supported Exchange Interface statistical codes. */
export declare enum ExchangeStatCodeType {
    Success = "Success",
    Failed = "Failed",
    Warning = "Warning",
    Total = "Total"
}
/** Supported Exchange Interface report codes. */
export declare enum ExchangeStatReportCodeType {
    UploadedMessages = "UploadedMessages",
    DownloadedMessages = "DownloadedMessages"
}
export interface OXIMessageStatistics {
    /** Message Statistical report. */
    messageStatisticsReport?: MessageStatisticsReportType;
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
/**
 * Exchange interface message statistics report type.
 * @maxItems 4000
 */
export type MessageStatisticsReportType = MessageStatisticsType[];
/** Type for Message statistics Details. */
export interface MessageStatisticsType {
    /**
     * InterfaceId of the Messages.
     * @minLength 0
     * @maxLength 40
     */
    interfaceId?: string;
    /**
     * Property of the Messages.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Module name of messages.
     * @minLength 0
     * @maxLength 40
     */
    module?: string;
    /**
     * Action Type of the messages.
     * @minLength 0
     * @maxLength 40
     */
    actionType?: string;
    /** Status of the messages. */
    messageStatus?: OXIMessageStatusType;
    /** Number of the messages */
    messageCount?: number;
    /**
     * Last date on which messages are processed for given criteria.
     * @format date-time
     */
    lastProcessedDate?: string;
}
/** Supported Message Status. */
export declare enum OXIMessageStatusType {
    Processed = "Processed",
    Failed = "Failed",
    Ready = "Ready",
    Expired = "Expired"
}
export interface FetchCommunicationMethods {
    /** Response which returns list of Communication Methods */
    communicationMethods?: CommunicationMethodsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** @maxItems 4000 */
export type CommunicationMethodsType = CommunicationMethodType[];
export interface FetchExternalInterfaceSetups {
    /** List of External Interface Setups that meet the criteria. */
    externalInterfaceSetups?: InterfaceSetupsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ExternalInterfaceSetupsToBeChanged {
    /** Values of the changed External Interface Setups. */
    externalInterfaceSetups?: InterfaceSetupsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ChangedExternalInterfaceSetups {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface InterfaceControlsToBeChanged {
    /** Central(OXI HUB)/Property(OXI). */
    integrationSystem?: IntegrationSystemType;
    /** Contains a collection of OXI Parameters/Settings to update. */
    interfaceControls?: InterfaceControlsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ChangedInterfaceControls {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for fetch legacy interface status. */
export interface LegacyInterfaceStatusDetails {
    /** Collection which contains interface Status. */
    interfacesStatus?: InterfacesStatusType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection which contains Interface ID and its details.
 * @maxItems 4000
 */
export type InterfacesStatusType = InterfaceStatusType[];
/** Type which holds the details of Interface. */
export interface InterfaceStatusType {
    /**
     * Interface ID for which processor will be started.
     * @minLength 0
     * @maxLength 40
     */
    interfaceId?: string;
    /**
     * Hotel Code which is associated with Interface ID will be processed.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Description of Interface ID.
     * @minLength 0
     * @maxLength 40
     */
    description?: string;
    /** Indicates the mode of processing Interface such as NT Service, DBMS Job.For DBMS Job, Database job will be scheduled to process. */
    processType?: InterfaceStatusProcessTypeType;
    /** Indicates that the Processor performs a role/function such as Upload , Download, Communication. The Interface with Upload role will upload Interface details to the External System and Download Role will download Interface Details from External System. */
    processRole?: InterfaceStatusProcessRoleType;
    /** Status of the processor such as Stopped,Running,Exited and Disconnected. */
    status?: ExchangeInterfaceStatusType;
    /** Command to perform a function Such as Start, Stop, Exit, Diagnostic,Restart. */
    command?: ExchangeInterfaceStatusCommandType;
    /**
     * Indicates time at which process started.
     * @format date
     * @maxLength 8
     */
    updatedTime?: string;
    /**
     * User who started the processor.
     * @minLength 0
     * @maxLength 40
     */
    user?: string;
    /**
     * The System type for which Interface Setups have to be listed like OXI, OXIHub.
     * @minLength 0
     * @maxLength 80
     */
    systemType?: string;
}
/** Processor use Database Job. */
export declare enum InterfaceStatusProcessTypeType {
    NtService = "NtService",
    DbmsJob = "DbmsJob"
}
/** FileExport process. */
export declare enum InterfaceStatusProcessRoleType {
    Upload = "Upload",
    Download = "Download",
    Lookup = "Lookup",
    Communication = "Communication",
    Resync = "Resync",
    FileExport = "FileExport"
}
/** Indicates that Interface process is disconnected. */
export declare enum ExchangeInterfaceStatusType {
    Running = "Running",
    Stopped = "Stopped",
    Exited = "Exited",
    Disconnected = "Disconnected"
}
/** Command to restart Interface process. */
export declare enum ExchangeInterfaceStatusCommandType {
    Start = "Start",
    Stop = "Stop",
    Exit = "Exit",
    Diagnostic = "Diagnostic",
    Restart = "Restart"
}
export interface FetchProfileMatchRules {
    /** Collection of Exchange profile match rules to be fetched */
    exchangeProfileMatchRules?: ExchangeProfileMatchRulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Type that holds collection of exchange profile match rules.
 * @maxItems 4000
 */
export type ExchangeProfileMatchRulesType = ExchangeProfileMatchRuleType[];
/** Type that represents a rule to define point criteria and threshold. */
export interface ExchangeProfileMatchRuleType {
    /** Threshold level of Match Point Criteria. */
    threshold?: number;
    /** Set of point criteria to define match attributes, points and Active Flag. */
    pointCriteria?: PointCriteriaType;
    /**
     * Interface for which the rules are configured.
     * @minLength 0
     * @maxLength 80
     */
    interfaceId?: string;
    /**
     * Hotel for which the rules are configured.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** The type of profile for which rules are configured. */
    profileType?: ExchangeProfileTypeType;
    /** The activation flag for the rule by itself. */
    active?: boolean;
}
/**
 * Type that represents Criteria such as match attributes, points and Active Flag to match profiles.
 * @maxItems 4000
 */
export type PointCriteriaType = CriterionType[];
/** Type that represents Criteria such as match attributes, points and Active Flag for Profile Match Rule. */
export interface CriterionType {
    /** Weighing points for the given match rule. */
    points?: number;
    /** The activation flag for the match rule criteria. */
    active?: boolean;
    /** Rules defining the Attributes to match profiles (Ex: Passport number or First name, last name, Telephone or Telephone, Address or more) . */
    matchAttributes?: MatchAttributesType;
}
/**
 * Rules defining the match Attribute.
 * @maxItems 4000
 */
export type MatchAttributesType = MatchAttributeTypeType[];
/** Profiles to match with Alternate Last Name. Alternate Last Name is not for OXI. */
export declare enum MatchAttributeTypeType {
    AddressLine1 = "AddressLine1",
    ARNumber = "ARNumber",
    Birthday = "Birthday",
    City = "City",
    ClientID = "ClientID",
    CorpNumber = "CorpNumber",
    Country = "Country",
    CreditCard = "CreditCard",
    Email = "Email",
    Fax = "Fax",
    FirstName = "FirstName",
    IATANumber = "IATANumber",
    MembershipNumber = "MembershipNumber",
    LastName = "LastName",
    PassportNumber = "PassportNumber",
    PhoneNumber = "PhoneNumber",
    PostalCode = "PostalCode",
    State = "State",
    SubscriptionID = "SubscriptionID",
    AlternateFirstName = "AlternateFirstName",
    AlternateLastName = "AlternateLastName"
}
/** Represents Group profile type. */
export declare enum ExchangeProfileTypeType {
    Guest = "Guest",
    Company = "Company",
    TravelAgent = "TravelAgent",
    Source = "Source",
    Group = "Group"
}
export interface FetchOXIListOfValues {
    /** Collection of List of Value items. */
    listOfValues?: ListOfValuesType;
    links?: Links;
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
    lOVName?: string;
    itemCount?: number;
    /**
     * @minLength 0
     * @maxLength 20
     */
    description?: string;
}
export interface ItemType {
    iDs?: IDTypes;
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
     * @maxLength 20
     */
    sequence?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    parentCode?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    color?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    shortDescription?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    imageURL?: string;
    active?: boolean;
}
/** @maxItems 4000 */
export type IDTypes = IdType[];
export interface IdType {
    /**
     * Used for Character Strings, length 0 to 20.
     * @minLength 0
     * @maxLength 20
     */
    value?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    source?: string;
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
export interface FetchIntegrationMessageAttachments {
    /** Integration message additional details */
    message?: IntegrationMessageAttachmentsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** This type holds additional details related to inbound messages like XML and External message */
export interface IntegrationMessageAttachmentsType {
    /**
     * XML message details
     * @format byte
     */
    xMLMsg?: string;
    /**
     * Orignal message from external systems(From the one's that don't create XML)
     * @format byte
     */
    extMsg?: string;
}
export interface ProfileMatchRulesToBeCreated {
    /** Collection of Exchange Profile Matching Rules can be created. */
    exchangeProfileMatchRules?: ExchangeProfileMatchRulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ProfileMatchRulesToBeChanged {
    /** Collection of Exchange Profile Matching Rules can be changed. */
    exchangeProfileMatchRules?: ExchangeProfileMatchRulesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ChangedProfileMatchRules {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CommunicationMethods {
    /** @maxItems 4000 */
    communicationDetails?: CommunicationMethodType[];
    /** Indicates the index of the next applicable set(page). */
    offset?: number;
    /** Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. */
    limit?: number;
    /** Indicates number of records the API has returned actually as per the API request criteria. */
    count?: number;
    /** Indicates whether there are more records available to be returned as per the API request criteria or not. */
    hasMore?: boolean;
    /** Indicates total number of records available that can be returned as per the API request criteria. */
    totalResults?: number;
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
 * @title OPERA Cloud Xchange Interface OXI API
 * @version 23.0.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /oxi/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to create and manage OPERA Xchange Interface (OXI) configurations for OPERA Cloud Exchange module functionality.<br /><br /> Compatible with OPERA Cloud release 23.0.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    automaticTransmissionSchedules: {
        /**
         * @description API to Create Automatic Transmission Schedules. <p><strong>OperationId:</strong>postAutomaticTransmissionSchedules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PostAutomaticTransmissionSchedules
         * @summary Create Automatic Transmission Schedules
         * @request POST:/automaticTransmissionSchedules
         */
        postAutomaticTransmissionSchedules: (hotelId: string, automaticTransmissionSchedulesToBeCreated: AutomaticTransmissionSchedulesToBeCreated, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    communicationMethods: {
        /**
         * @description API to Modify Communication Methods. <p><strong>OperationId:</strong>putCommunicationMethods</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutCommunicationMethods
         * @summary Modify Communication Methods
         * @request PUT:/communicationMethods
         */
        putCommunicationMethods: (hotelId: string, communicationMethodsToBeChanged: CommunicationMethodsToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedCommunicationMethods, any>>;
    };
    conversionCodeMappingId: {
        /**
         * @description API to Delete  Interface Mapping Conversion Codes by Conversion Code Mapping Id. <p><strong>OperationId:</strong>deleteConversionCodeMappings</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name DeleteConversionCodeMappings
         * @summary Remove Conversion Codes Mappings
         * @request DELETE:/conversionCodeMappingID/{id}/conversionCodeMapping
         */
        deleteConversionCodeMappings: (hotelId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    conversionCodesStatus: {
        /**
         * @description API to Modify Interface Mapping UDF Conversion Codes. <p><strong>OperationId:</strong>putConversionCodesStatus</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutConversionCodesStatus
         * @summary Change Conversion codes Status
         * @request PUT:/conversionCodesStatus
         */
        putConversionCodesStatus: (hotelId: string, conversionCodesStatusToBeChanged: ConversionCodesStatusToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedConversionCodesStatus, any>>;
    };
    externalInterfaceSetups: {
        /**
         * @description API to Create Interface Setup configuration. <p><strong>OperationId:</strong>postExternalInterfaceSetups</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PostExternalInterfaceSetups
         * @summary Create Interface Setup details
         * @request POST:/externalInterfaceSetups
         */
        postExternalInterfaceSetups: (hotelId: string, externalInterfaceSetupsToBeCreated: ExternalInterfaceSetupsToBeCreated, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    hotels: {
        /**
         * @description API to Fetch Inbound Messages From External System by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getIntegrationInboundMessages</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetIntegrationInboundMessages
         * @summary Fetch integration inbound messages
         * @request GET:/hotels/{externalHotelCode}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationInboundMessages
         */
        getIntegrationInboundMessages: (hotelId: string, integrationSystem: string, interfaceId: string, externalHotelCode: string, query?: {
            /** Unique External hotel IDs used to identify external Hotel in OPERA */
            externalHotelCodes?: string[];
            /** Sepcify Message type to restrict results */
            messageTypes?: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            endDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            startDate?: string;
            /** If true, messages that are marked as reviewed will also be fetched */
            includeReviewed?: boolean;
            /** The starting value of the range */
            fromMessageID?: string;
            /** The ending value of the range */
            toMessageID?: string;
            /** Specify Integration message reference value to restrict results */
            messageStatus?: string[];
            /** Specify Integration message reference value to restrict results */
            messageReference?: string;
            /** Specify partial or complete error message to restrict results */
            errorMessageWildCard?: string;
            /**
             * This value is only applicable for outbound messages
             * @uniqueItems true
             */
            errorMessageType?: 'Error' | 'ResultException' | 'OptionalWarning' | 'Warning';
            /** String to search inside a message. User can specify multiple strings separated by comma */
            msgContains?: string;
            /**
             * If true then results with message that has at least one of the string specified for message contains will be returned.
             * @default "false"
             */
            anyOneOfTheMsg?: boolean;
            /**
             * If true then passed string will be matched against the node values of the XML message
             * @default "false"
             */
            valuesOnly?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * If true then errors and warnings will be fetched for action id and other criteria mentioned
             * @default "false"
             */
            includeErrors?: boolean;
            /** Action ID for which errors and warnings should be fetched */
            actionId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchIntegrationInboundMessages, any>>;
        /**
         * @description API to Fetch Automatic Transmission Schedules by Hotel Id. <p><strong>OperationId:</strong>getAutomaticTransmissionSchedules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetAutomaticTransmissionSchedules
         * @summary Fetch Automatic Transmission Schedules
         * @request GET:/hotels/{hotelId}/automaticTransmissionSchedules
         */
        getAutomaticTransmissionSchedules: (hotelId: string, query?: {
            hotelIds?: string[];
            /** Interfaces configured for automatic transmission schedules */
            interfaceList?: string[];
            /**
             * If true, this flag will set the criteria to return Inactive records along with active records.
             * @default "false"
             */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchAutomaticTransmissionSchedules, any>>;
        /**
         * @description API to Modify  Automatic Transmission Schedules by Hotel Id. <p><strong>OperationId:</strong>putAutomaticTransmissionSchedules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutAutomaticTransmissionSchedules
         * @summary Change Automatic Transmission Schedules
         * @request PUT:/hotels/{hotelId}/automaticTransmissionSchedules
         */
        putAutomaticTransmissionSchedules: (hotelId: string, automaticTransmissionSchedulesToBeChanged: AutomaticTransmissionSchedulesToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedAutomaticTransmissionSchedules, any>>;
        /**
         * @description API to Fetch Interface Mappings UDF Conversion Codes by Hotel Id and Interface Id. <p><strong>OperationId:</strong>getConversionCodes</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetConversionCodes
         * @summary Fetch Conversion Codes
         * @request GET:/hotels/{hotelId}/intefaces/{interfaceId}/conversionCodes
         */
        getConversionCodes: (interfaceId: string, hotelId: string, query?: {
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             * @example "Central, Property, Both"
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
            /** Type of Conversion Code or user-defined function (UDF) module name configured in the system. */
            conversionCode?: string;
            /** A flag that is true if the conversion code is an user-defined function (UDF) module code. */
            udfCode?: boolean;
            /** A flag to indicate whether to include inactive Conversion Codes. */
            includeInactive?: boolean;
            /** XML Type by which the Conversion Codes should be filtered. */
            group?: string;
            /** A flag to indicate whether user-defined function (UDF) module names should be included in the results or not. */
            includeUDFCodes?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchConversionCodes, any>>;
        /**
         * @description API to Fetch  Accumulated Business Event Messages for External Systems by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getAccumulatedBusinessEvents</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetAccumulatedBusinessEvents
         * @summary Fetch accumulated business events
         * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/accumulatedBusinessEvents
         */
        getAccumulatedBusinessEvents: (interfaceId: string, hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Accumulated Business Event Module
             * @uniqueItems true
             */
            modules?: ('Availability' | 'Block' | 'BlockDetail' | 'BlockHeader' | 'Rate' | 'Reservation' | 'Restriction')[];
            /**
             * The ending value of the date range.
             * @format date
             */
            endDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            startDate?: string;
            /** Specify primary key identifier to search for */
            primaryKey?: string;
            /**
             * State of Accumulated Business Event
             * @uniqueItems true
             */
            status?: 'New' | 'Ready';
            hotelIds?: string[];
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
        }, params?: RequestParams) => Promise<AxiosResponse<FetchAccumulatedBusinessEvents, any>>;
        /**
         * @description API to Modify  Interface Mapping  Conversion Codes by Hotel Id, Interface Id and Conversion Code Id with OPERA value and External value. <p><strong>OperationId:</strong>putConversionCodeMappings</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutConversionCodeMappings
         * @summary Change Conversion Codes Mappings
         * @request PUT:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/ID/{id}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping
         */
        putConversionCodeMappings: (externalValue: string, operaValue: string, id: string, conversionCode: string, interfaceId: string, hotelId: string, conversionCodeMappingsToBeChanged: ConversionCodeMappingsToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedConversionCodeMappings, any>>;
        /**
         * @description API to Create  Interface Mapping Conversion Codes by Hotel Id, Interface Id and Conversion Code with OPERA value and External value. <p><strong>OperationId:</strong>postConversionCodeMappings</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PostConversionCodeMappings
         * @summary Create Conversion Codes Mappings
         * @request POST:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping
         */
        postConversionCodeMappings: (externalValue: string, operaValue: string, conversionCode: string, interfaceId: string, hotelId: string, conversionCodeMappingsToBeCreated: ConversionCodeMappingsToBeCreated, params?: RequestParams) => Promise<AxiosResponse<CreatedConversionCodeMappings, any>>;
        /**
         * @description API to Delete Interface Mapping UDF Conversion Codes by Hotel Id, Interface Id and Conversion Code. <p><strong>OperationId:</strong>deleteUDFMappings</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name DeleteUdfMappings
         * @summary Remove UDF Mappings
         * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/udfMapping
         */
        deleteUdfMappings: (operaValue: string, conversionCode: string, interfaceId: string, hotelId: string, query?: {
            /** Profile type of the user-defined function (UDF) definition. */
            profileType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Fetch Interface Mapping  Conversion Codes by Hotel Id, Interface Id and Conversion Code. <p><strong>OperationId:</strong>getConversionCodeMappings</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetConversionCodeMappings
         * @summary Fetch Conversion Code Mappings
         * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/conversions/{conversionCode}/conversionCodeMapping
         */
        getConversionCodeMappings: (conversionCode: string, interfaceId: string, hotelId: string, query?: {
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             * @example "Central, Property, Both"
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
            /**
             * A flag that is true if the conversion code is an user-defined function (UDF) module code.
             * @default "false"
             * @example "true, false"
             */
            udfCode?: boolean;
            /** This value is used for wild card search on OPERA Code/External code. */
            mappingValue?: string;
            /**
             * Search for both OPERA and External mapping value.
             * @uniqueItems true
             * @example "OperaValue, ExternalValue, Both"
             */
            searchBy?: 'OperaValue' | 'ExternalValue' | 'Both';
            /**
             * A flag to indicate whether to include Global Mappings or not.
             * @default true
             * @example "true, false"
             */
            includeGlobal?: boolean;
            /** Profile type by which the user-defined function (UDF) mappings should be filtered. */
            profileType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchConversionCodeMappings, any>>;
        /**
         * @description API to Delete Interface Setup configuration by Hotel Id and Interface Id. <p><strong>OperationId:</strong>deleteExternalInterfaceSetups</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name DeleteExternalInterfaceSetups
         * @summary Delete external Interface Setup details
         * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/externalInterfaceSetups
         */
        deleteExternalInterfaceSetups: (interfaceId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Fetch Outbound Messages To External System by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getIntegrationOutboundMessages</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetIntegrationOutboundMessages
         * @summary fetch integration outbound messages
         * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationOutboundMessages
         */
        getIntegrationOutboundMessages: (integrationSystem: string, interfaceId: string, hotelId: string, query?: {
            hotelIds?: string[];
            /** Specify action(that has triggered the creation of message) to restrict results */
            actionType?: string;
            /** Specify partial or complete error message to restrict results */
            errorMessageWildCard?: string;
            /**
             * This value is only applicable for outbound messages
             * @uniqueItems true
             */
            errorMessageType?: 'Error' | 'ResultException' | 'OptionalWarning' | 'Warning';
            /**
             * The ending value of the date range.
             * @format date
             */
            endDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            startDate?: string;
            /**
             * If true, messages that are marked as reviewed will also be fetched
             * @default "false"
             */
            includeReviewed?: boolean;
            /** The starting value of the range */
            fromMessageID?: string;
            /** The ending value of the range */
            toMessageID?: string;
            /** Specify Integration message reference value to restrict results */
            messageStatus?: string[];
            /** String to search inside a message. User can specify multiple strings separated by comma */
            msgContains?: string;
            /**
             * If true then results with message that has at least one of the string specified for message contains will be returned.
             * @default "false"
             */
            anyOneOfTheMsg?: boolean;
            /**
             * If true then passed string will be matched against the node values of the XML message
             * @default "false"
             */
            valuesOnly?: boolean;
            /** Specify Integration message reference value to restrict results */
            messageReference?: string;
            /** Sepcify Message type to restrict results */
            messageTypes?: string[];
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * If true then errors and warnings will be fetched for action id and other criteria mentioned
             * @default "false"
             */
            includeErrors?: boolean;
            /** Action ID for which errors and warnings should be fetched */
            actionId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchIntegrationOutboundMessages, any>>;
        /**
         * @description API to Fetch  Interface Controls  by Hotel Id and Interface Id <p><strong>OperationId:</strong>getInterfaceControls</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetInterfaceControls
         * @summary Retrieve OXI Parameters and Defaults
         * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/interfaceControls
         */
        getInterfaceControls: (interfaceId: string, hotelId: string, query?: {
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             * @example "Central, Property, Both"
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
            croCode?: string;
            /** @example "HANDLE_PSEUDO_ROOMTYPES" */
            parameterNameWildCard?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchInterfaceControls, any>>;
        /**
         * @description API to Delete  Profile Match Rules by Hotel Id, Interface Id and Profile Type. <p><strong>OperationId:</strong>deleteProfileMatchRules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name DeleteProfileMatchRules
         * @summary Delete profile match rules
         * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/profiles/{profileType}/profileMatchRules
         */
        deleteProfileMatchRules: (profileType: string, interfaceId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Fetch OXI Dashboard Tile Statistics (Upload and Download message counts by Success, Fail and Warning Status codes) by Hotel Id and Interface Id. <p><strong>OperationId:</strong>getMessageStatistics</p>
         *
         * @tags OperaExchangeInterfaceStats
         * @name GetMessageStatistics
         * @summary Retrieves the statistics of Messages for Opera Exchange Interface.
         * @request GET:/hotels/{hotelId}/messageStatistics
         */
        getMessageStatistics: (hotelId: string, query?: {
            /**
             * Supported Exchange Interface report codes.
             * @uniqueItems true
             */
            code?: ('UploadedMessages' | 'DownloadedMessages')[];
            /** End date of the report. */
            endDate?: string[];
            /** Start date of the report. */
            startDate?: string[];
            /**
             * Supported Exchange Interface statistical codes.
             * @uniqueItems true
             */
            statCode?: ('Success' | 'Failed' | 'Warning' | 'Total')[];
            /** ID of the Interface Setup */
            interfaceId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<MessageStatistics, any>>;
        /**
         * @description API to retrieve message statistics for inbound , outbound and business event queues. <p><strong>OperationId:</strong>getOXIMessageStatistics</p>
         *
         * @tags OperaExchangeInterfaceStats
         * @name GetOxiMessageStatistics
         * @summary Retrieves the statistics of Messages in inbound,outbound and BE queues.
         * @request GET:/hotels/{hotelId}/queues/{queueName}/messageStatistics
         */
        getOxiMessageStatistics: (queueName: 'Inbound' | 'Outbound' | 'Be', hotelId: string, query: {
            /**
             * Supported Message Status.
             * @uniqueItems true
             * @default "Ready"
             */
            messageStatus: 'Processed' | 'Failed' | 'Ready' | 'Expired';
            /** InterfaceID for which Message statistics has to be fetched. */
            InterfaceId?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            enqueueEndDate?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            enqueueStartDate?: string;
            /** Attribute that decides whether the results must be grouped additionally by Module and Action type of the messages. */
            groupByModuleAndActionType?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<OXIMessageStatistics, any>>;
    };
    intefaces: {
        /**
         * @description API to Fetch Communication Methods. <p><strong>OperationId:</strong>getCommunicationMethods</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetCommunicationMethods
         * @summary Fetch Communication Methods
         * @request GET:/intefaces/{interfaceId}/communicationMethods
         */
        getCommunicationMethods: (hotelId: string, interfaceId: string, query: {
            /** SID Resort */
            isGlobal: boolean;
            /** @maxItems 4000 */
            hotelId?: string[];
            /** InterfaceID */
            interfaceIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchCommunicationMethods, any>>;
    };
    interfaceSetups: {
        /**
         * @description API to Fetch Interface Setup configurations by Interface Ids and Hotel Ids. <p><strong>OperationId:</strong>getExternalInterfaceSetups</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetExternalInterfaceSetups
         * @summary fetch external Interface Setup details
         * @request GET:/interfaceSetups
         */
        getExternalInterfaceSetups: (hotelId: string, query?: {
            /** InterfaceID */
            interfaceIds?: string[];
            hotelIds?: string[];
            /**
             * Attribute that decides whether the search results include the XML Schema version details
             * @default "false"
             */
            includeXmlVersion?: boolean;
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             */
            systemType?: 'Central' | 'Property' | 'Both';
        }, params?: RequestParams) => Promise<AxiosResponse<FetchExternalInterfaceSetups, any>>;
        /**
         * @description API to Modify  Interface Setup configuration. <p><strong>OperationId:</strong>putExternalInterfaceSetups</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutExternalInterfaceSetups
         * @summary Modify external Interface Setup details
         * @request PUT:/interfaceSetups
         */
        putExternalInterfaceSetups: (hotelId: string, externalInterfaceSetupsToBeChanged: ExternalInterfaceSetupsToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedExternalInterfaceSetups, any>>;
    };
    interfaces: {
        /**
         * @description API to purge messages from inbound and outbound queues. <p><strong>OperationId:</strong>dequeueOXIMessages</p>
         *
         * @tags OperaExchangeInterfaceStats
         * @name DequeueOxiMessages
         * @summary Purge the messages from OXI inbound and outbound queues.
         * @request DELETE:/interfaces/{interfaceId}/hotels/{hotelId}/queues/{queueName}/dequeueOXIMessages
         */
        dequeueOxiMessages: (queueName: 'Inbound' | 'Outbound', hotelId: string, interfaceId: string, query: {
            /**
             * Supported Message Status.
             * @uniqueItems true
             * @example "Ready"
             */
            messageStatus: 'Processed' | 'Failed' | 'Ready' | 'Expired';
            /**
             * The ending value of the time span.
             * @format date-time
             */
            endDate?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            startDate?: string;
            /** Module of the messages. */
            module?: string;
            /** Action Type of the messages. */
            actionType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Modify Interface Controls by Interface Id. <p><strong>OperationId:</strong>putInterfaceControls</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutInterfaceControls
         * @summary Change OXI Parameters and Defaults
         * @request PUT:/interfaces/{interfaceId}/interfaceControls
         */
        putInterfaceControls: (hotelId: string, interfaceId: string, interfaceControlsToBeChanged: InterfaceControlsToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedInterfaceControls, any>>;
        /**
         * @description API to Fetch legacy OXI Interface Processor Status by Interface Id. <p><strong>OperationId:</strong>getLegacyInterfaceStatus</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetLegacyInterfaceStatus
         * @summary Fetch legacy interface status
         * @request GET:/interfaces/{interfaceId}/legacyInterfaceStatus
         */
        getLegacyInterfaceStatus: (hotelId: string, interfaceId: string, params?: RequestParams) => Promise<AxiosResponse<LegacyInterfaceStatusDetails, any>>;
        /**
         * @description API to Fetch Profile Match Rules by Interface Id and Hotel Id. <p><strong>OperationId:</strong>getProfileMatchRules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetProfileMatchRules
         * @summary Fetch profile match rules
         * @request GET:/interfaces/{interfaceId}/profileMatchRules
         */
        getProfileMatchRules: (hotelId: string, interfaceId: string, query?: {
            /** @maxItems 4000 */
            hotelId?: string[];
            /**
             * Attribute that decides whether the search results include the XML Schema version details
             * @default "false"
             */
            includeXmlVersions?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchProfileMatchRules, any>>;
    };
    lovCode: {
        /**
         * @description API to Fetch list of values for all OXI interface type External Systems. <p><strong>OperationId:</strong>getOXIListOfValues</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name GetOxiListOfValues
         * @summary Fetch list of values details for OXI
         * @request GET:/lovCode/{lovCode}/listOfValuesOXI
         */
        getOxiListOfValues: (hotelId: string, lovCode: string, query?: {
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             * @example "Central, Property, Both"
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
            /**
             * Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included.
             * @default "false"
             * @example "true ,false"
             */
            includeInActive?: true | false;
            /** Name of the parameter. */
            parameterNames?: string[];
            /** Value of the parameter. */
            parameterValues?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchOXIListOfValues, any>>;
    };
    messages: {
        /**
         * @description API to Delete  Automatic Transmission Schedules by Scheduled Message Id. <p><strong>OperationId:</strong>deleteAutomaticTransmissionSchedules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name DeleteAutomaticTransmissionSchedules
         * @summary Remove Automatic Transmission Schedules
         * @request DELETE:/messages/{messageId}/automaticTransmissionSchedules
         */
        deleteAutomaticTransmissionSchedules: (hotelId: string, messageId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Fetch OXI Inbound/Outbound XML Message Content by Message Id. <p><strong>OperationId:</strong>getIntegrationMessageAttachments</p>
         *
         * @tags OperaExchangeContent
         * @name GetIntegrationMessageAttachments
         * @summary Fetch integration message attachments
         * @request GET:/messages/{messageId}/integrationMessageAttachments
         */
        getIntegrationMessageAttachments: (hotelId: string, messageId: string, query?: {
            /**
             * Determines whether message is an inbound message or a outbound message
             * @uniqueItems true
             * @example "Inbound, Outbound"
             */
            integrationMessageType?: 'Inbound' | 'Outbound';
            /**
             * Represents both OXI and OXI HUB are installed.
             * @uniqueItems true
             * @example "Central, Property, Both"
             */
            integrationSystem?: 'Central' | 'Property' | 'Both';
        }, params?: RequestParams) => Promise<AxiosResponse<FetchIntegrationMessageAttachments, any>>;
    };
    profileMatchRules: {
        /**
         * @description API to Create Profile Match Rules. <p><strong>OperationId:</strong>postProfileMatchRules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PostProfileMatchRules
         * @summary Create profile match rules
         * @request POST:/profileMatchRules
         */
        postProfileMatchRules: (hotelId: string, profileMatchRulesToBeCreated: ProfileMatchRulesToBeCreated, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description API to Modify Profile Match Rules. <p><strong>OperationId:</strong>putProfileMatchRules</p>
         *
         * @tags OperaExchangeInterfaceConfig
         * @name PutProfileMatchRules
         * @summary Change profile match rules
         * @request PUT:/profileMatchRules
         */
        putProfileMatchRules: (hotelId: string, profileMatchRulesToBeChanged: ProfileMatchRulesToBeChanged, params?: RequestParams) => Promise<AxiosResponse<ChangedProfileMatchRules, any>>;
    };
}
