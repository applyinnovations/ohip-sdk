/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
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
/** Response to request to fetch the delivery method for a property/HUB/Chain and its configurations. */
export interface FetchedDeliveryMethods {
    /** Collection of all delivery method types. */
    deliveryMethods?: ConfiguredExternalDeliveryMethodsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** External system configuration delivery methods for a property(chain or hub). */
export interface ConfiguredExternalDeliveryMethodsType {
    /** General delivery method SFTPConfigurationType configuration, settings for Email and Fax Delivery of General Letters */
    general?: GeneralDeliveryMethodType;
    /** Queue reservation delivery method configuration, settings for Text Message Delivery of Queue Reservation status */
    queueReservation?: QueueReservationDeliveryMethodType;
    /** Confirmation letter delivery method configuration, settings for Text Message, Email and Fax Delivery of Confirmation Letters */
    confirmation?: ConfirmationDeliveryMethodType;
    /** Guest text message configuration, settings for Text Message Delivery of Guest Messages */
    guestMessage?: GuestMessageDeliveryMethodType;
    /** Billing folio delivery method configuration, settings for Email and Fax Delivery of Guest Folios */
    billingFolio?: BillingFolioDeliveryMethodType;
    /** Queue rush delivery method configuration, settings for Text Message Delivery of Queue Reservation status */
    queueRush?: QueueRushDeliveryMethodType;
}
/** General delivery method SFTPConfigurationType configuration, settings for Email and Fax Delivery of General Letters */
export interface GeneralDeliveryMethodType {
    /** Email content configuration template */
    email?: EmailDeliveryConfigurationType;
    /** Email content configuration template */
    fax?: FaxDeliveryConfigurationType;
    /** Type that holds sftp configurations */
    sftpConfigurations?: SftpConfigurationsListType;
}
/** Email content configuration template */
export interface EmailDeliveryConfigurationType {
    /**
     * @minLength 0
     * @maxLength 200
     */
    fromAddress?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    userId?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    userPassword?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    serverName?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    subject?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    body?: string;
    /** EMAIL Format: HTML, RTF, PDF. Fax Format: TIF */
    format?: EmailDeliveryFormatType;
    /** Deliver Type, possible values: AR, BILLING, CONFIRMATION, LEADS, OWS, OVOS. */
    type?: EmailDeliveryMethodType;
    /**
     * Hotel code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** This option must be selected in order to activate emailing from an SMTP compliant email server */
    activateDelivery?: boolean;
    /** Available for Confirmation Letters only and when Activate Email Delivery is selected */
    hTMLFormatDelivery?: boolean;
    attachICalender?: boolean;
}
/** Email delivery format */
export declare enum EmailDeliveryFormatType {
    Htmlcss = "Htmlcss",
    Pdf = "Pdf",
    Rtf = "Rtf",
    Tif = "Tif"
}
/** Email delivery method type */
export declare enum EmailDeliveryMethodType {
    Billing = "Billing",
    Confirmation = "Confirmation",
    General = "General",
    Other = "Other"
}
/** Email content configuration template */
export interface FaxDeliveryConfigurationType {
    /**
     * @minLength 0
     * @maxLength 200
     */
    fromAddress?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    userId?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    userPassword?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    serverName?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    subject?: string;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    body?: string;
    /** EMAIL Format: HTML, RTF, PDF. Fax Format: TIF */
    format?: EmailDeliveryFormatType;
    /** Deliver Type, possible values: AR, BILLING, CONFIRMATION, LEADS, OWS, OVOS. */
    type?: EmailDeliveryMethodType;
    /**
     * Hotel code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    faxPrefix?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    faxSuffix?: string;
    /**
     * @minLength 0
     * @maxLength 40
     */
    faxDomain?: string;
    /** This option must be selected in order to activate faxing from an SMTP compliant fax server */
    activateEmailToFax?: boolean;
}
/**
 * Type that holds sftp configurations
 * @maxItems 4000
 */
export type SftpConfigurationsListType = SftpConfigurationType[];
/** Information which uniquely identifies SFTP Configuration */
export interface SftpConfigurationType {
    /** Unique id associated with this configuration */
    configurationId?: number;
    /**
     * SFTP destination
     * @minLength 0
     * @maxLength 20
     */
    destination?: string;
    /**
     * Description of the destination, such as Shift Reports.
     * @minLength 0
     * @maxLength 200
     */
    description?: string;
    /** Indicates whether the configuration is inactive or not. */
    inactive?: boolean;
    /**
     * Hotel code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** Queue reservation delivery method configuration, settings for Text Message Delivery of Queue Reservation status */
export interface QueueReservationDeliveryMethodType {
    /** Text message delivery configuration */
    textMessage?: TextMessageDeliveryConfigurationType;
}
/** Text message delivery configuration */
export interface TextMessageDeliveryConfigurationType {
    /**
     * Partner or User ID, Text field for Partner ID or User ID for the delivery provider, Name of the Text Messaging Provider.
     * @minLength 0
     * @maxLength 80
     */
    userId?: string;
    /**
     * Text field for Service type or email server address for the SMTP.
     * @minLength 0
     * @maxLength 80
     */
    serverName?: string;
    /**
     * Text field for Service ID or email account for the SMTP as advised by Text Messaging Provider.
     * @minLength 0
     * @maxLength 80
     */
    account?: string;
    /**
     * @minLength 0
     * @maxLength 80
     */
    password?: string;
    /** Number field for Delivery time out in seconds for the message. Any message exceeding this limit will be timed out. Add word Seconds using small grey font next to the number box. */
    timeOut?: number;
    /**
     * Text field for URL address or the Text Messaging Provider.
     * @minLength 0
     * @maxLength 2000
     */
    url?: string;
    /** Url parameter(format) is supported by Text Messaging Provider, it can be either an XML or TEXT format. */
    uRLParameter?: UrlFormatType;
    /**
     * Text field for entering any special formatting for the delivery, or multi select LOV type, for example the one used for Address Format for selection of SID fields, to allow users choosing from a list of tags that may be used to customize this field.
     * @minLength 0
     * @maxLength 4000
     */
    format?: string;
    /**
     * Text field for entering the Text Message for delivery.
     * @minLength 0
     * @maxLength 4000
     */
    message?: string;
    /** Type of Delivery Method HTTP/SMTP: HTTP for URL, SMTP for Email */
    type?: TextDeliveryMethodType;
    /**
     * Hotel code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** Url content format */
export declare enum UrlFormatType {
    Xml = "Xml",
    Text = "Text"
}
/** Text delivery method type */
export declare enum TextDeliveryMethodType {
    Url = "Url",
    Email = "Email"
}
/** Confirmation letter delivery method configuration, settings for Text Message, Email and Fax Delivery of Confirmation Letters */
export interface ConfirmationDeliveryMethodType {
    /** Email content configuration template */
    email?: EmailDeliveryConfigurationType;
    /** Email content configuration template */
    fax?: FaxDeliveryConfigurationType;
    /** Text message delivery configuration */
    textMessage?: TextMessageDeliveryConfigurationType;
}
/** Guest text message configuration, settings for Text Message Delivery of Guest Messages */
export interface GuestMessageDeliveryMethodType {
    /** Text message delivery configuration */
    textMessage?: TextMessageDeliveryConfigurationType;
}
/** Billing folio delivery method configuration, settings for Email and Fax Delivery of Guest Folios */
export interface BillingFolioDeliveryMethodType {
    /** Email content configuration template */
    email?: EmailDeliveryConfigurationType;
    /** Email content configuration template */
    fax?: FaxDeliveryConfigurationType;
}
/** Queue rush delivery method configuration, settings for Text Message Delivery of Queue Reservation status */
export interface QueueRushDeliveryMethodType {
    /** Text message delivery configuration */
    textMessage?: TextMessageDeliveryConfigurationType;
}
/** Request to change the delivery method for a property/HUB/Chain and its configurations. */
export interface ChangeDeliveryMethods {
    /** Collection of delivery method types to change. */
    deliveryMethods?: ConfiguredExternalDeliveryMethodsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangedDeliveryMethods {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request to create the delivery method for a property/HUB/Chain and its configurations. */
export interface CreateDeliveryMethods {
    /** Collection of delivery method types to create. */
    deliveryMethods?: ConfiguredExternalDeliveryMethodsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for fetching template Device locations. */
export interface TemplateDeviceLocationsDetails {
    /** Collection of template Device locations. */
    templateDeviceLocations?: TemplateDeviceLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * List of Device locations at template level.
 * @maxItems 4000
 */
export type TemplateDeviceLocationsType = TemplateDeviceLocationType[];
/** Contains Common Master configuration detail. */
export interface TemplateDeviceLocationType {
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
/** Request object for creating template Device locations. */
export interface TemplateDeviceLocationsCriteria {
    /** Template Device locations to be created. */
    templateDeviceLocations?: TemplateDeviceLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for changing template Device locations. */
export interface TemplateDeviceLocationsToBeChanged {
    /** Template Device locations to be changed. */
    templateDeviceLocations?: TemplateDeviceLocationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request to create publishers. */
export interface CreatePublishers {
    /** Subcriber external system information. */
    subscriber?: ExternalSystemType;
    /** Collection of publisher external systems information. */
    publishers?: PublishersType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** External System Information */
export interface ExternalSystemType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** External System Code */
    externalSystemCode?: ExternalSystemCodeType;
}
/** External System Code */
export interface ExternalSystemCodeType {
    /**
     * @minLength 0
     * @maxLength 40
     */
    code?: string;
}
/**
 * Information of all the publishers for a given subscriber.
 * @maxItems 4000
 */
export type PublishersType = ExternalSystemType[];
/** Response to request to fetch the external systems */
export interface FetchedPublishers {
    /** Collection of publisher external systems information. */
    publishers?: PublishersType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for retrieving Hotel Interfaces. */
export interface FetchedHotelInterfaces {
    /** Collection of Hotel Interfaces. */
    hotelInterfaces?: HotelInterfacesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Hotel Interfaces.
 * @maxItems 4000
 */
export type HotelInterfacesType = HotelInterfaceType[];
export interface HotelInterfaceType {
    /** Unique DB internal number of a Hotel Interface record. */
    interfaceId?: UniqueIDType;
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Name of the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    interfaceName?: string;
    /** Three letter code for each interface that identifies the interface. */
    interfaceType?: HotelInterfaceTypeType;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Unique machine name of the running IFC.
     * @minLength 0
     * @maxLength 80
     */
    machineName?: string;
    /** The current status of the IFC. */
    status?: HotelInterfaceStatusType;
    /** Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. */
    activeFlag?: boolean;
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
/** XML Posting Interface */
export declare enum HotelInterfaceTypeType {
    Bms = "Bms",
    Cas = "Cas",
    Ccw = "Ccw",
    Dls = "Dls",
    Eft = "Eft",
    Exp = "Exp",
    Mak = "Mak",
    Mbs = "Mbs",
    Msc = "Msc",
    Pbx = "Pbx",
    Pos = "Pos",
    Svs = "Svs",
    Tik = "Tik",
    Vid = "Vid",
    Vms = "Vms",
    Www = "Www",
    Xml = "Xml"
}
/** Status of the Hotel Interface either STOPPED or RUNNING. */
export declare enum HotelInterfaceStatusType {
    Stopped = "Stopped",
    Running = "Running",
    Waiting = "Waiting",
    StopInitiated = "StopInitiated",
    StartInitiated = "StartInitiated",
    RebootInitiated = "RebootInitiated",
    Other = "Other"
}
/** Request object for updating a Hotel Interface Right. It will create the Hotel Interface Right if it does not exist on the database. */
export interface ChangeInterfaceRight {
    details?: InterfaceRightType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface InterfaceRightType {
    /**
     * Hotel Code to which the Interface Right belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Unique DB internal number of a Hotel Interface record. */
    interfaceId?: UniqueIDType;
    /** Internal code for each allowed right of a Hotel Interface record. */
    right?: number;
    /**
     * User defined code for an Interface Right.
     * @minLength 0
     * @maxLength 5
     */
    code?: string;
    /**
     * User defined description for an Interface Right.
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
    /**
     * System Description of an allowed Interface Right.
     * @minLength 0
     * @maxLength 80
     */
    interfaceRightDescription?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangedInterfaceRight {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Collection of Hotel Interface Rights. */
export type FetchedInterfaceRights = InterfaceRightType[];
/** Response object for retrieving the Available properties for External Databases. */
export interface FetchedExternalDatabaseAvailableProperties {
    /** Collection of Hotel for external database. */
    availailableProperties?: ExternalDatabaseAssociatedHotelsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of Hotel for external database.
 * @maxItems 4000
 */
export type ExternalDatabaseAssociatedHotelsType = ExternalDatabaseAssociatedHotelType[];
export interface ExternalDatabaseAssociatedHotelType {
    /**
     * Pertain associated hotel code for external database.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Pertain associated hotel code for external database.
     * @minLength 0
     * @maxLength 80
     */
    hotelName?: string;
}
/** Message received on an UDFs Lookup. */
export interface FetchedUDFMappings {
    /** Criteria for fetching UDFs. */
    uDFMappings?: UDFMappingType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Generic self-contained request object that is used when updating and fetching UDFs. */
export interface UDFMappingType {
    /**
     * Name of the user-defined function (UDF) field.
     * @minLength 0
     * @maxLength 40
     */
    uDFName?: string;
    /**
     * Label the user-defined function (UDF) field shared with external system which will be send in the request message for mapping of actual UDF Name.
     * @minLength 0
     * @maxLength 200
     */
    uDFLabel?: string;
    /** A flag to indicate whether the UDF mapping is active in the Interface system or not. */
    active?: boolean;
    /** A flag to indicate whether the update is allowed in the Interface system or not. */
    updateAllowed?: boolean;
    /**
     * A reference to the type of object defined by the Type for Reservation and Profile Type.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
}
/** Self-contained Request object that is used when Updating UDFMapping. */
export interface ChangeUDFMapping {
    /** Generic self-contained request object that is used when updating and fetching UDFs. */
    uDFMapping?: UDFMappingType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ChangedUDFMapping {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ConditionGroupType {
    /** @maxItems 4000 */
    condition?: ConditionType[];
    /** @maxItems 4000 */
    conditionGroup?: ConditionGroupType[];
    logicalOperator?: LogicalOperatorType;
}
export declare enum LogicalOperatorType {
    And = "And",
    Or = "Or"
}
export interface ConditionType {
    leftExpression?: ExpressionFieldType;
    operator?: ExpressionOperatorType;
    rightExpression?: ExpressionParameterType;
    logicalOperator?: LogicalOperatorType;
}
export interface ExpressionFieldType {
    /**
     * @minLength 0
     * @maxLength 40
     */
    fieldName?: string;
    /**
     * @minLength 0
     * @maxLength 40
     */
    fieldDescription?: string;
    /**
     * @minLength 0
     * @maxLength 40
     */
    tableName?: string;
    virtual?: boolean;
    /**
     * @minLength 0
     * @maxLength 40
     */
    dataType?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    lovSelected?: string;
}
export interface ExpressionParameterType {
    /** @maxItems 3 */
    parameter?: string[];
    functionIdOne?: number;
    functionIdTwo?: number;
}
export interface ExpressionOperatorType {
    /**
     * @minLength 0
     * @maxLength 40
     */
    operatorName?: string;
    /**
     * @minLength 0
     * @maxLength 40
     */
    operatorDescription?: string;
    parameterSize?: number;
}
export interface HotelInterfaceDetailType {
    /** Primary information of a Hotel Interface. */
    primaryInfo?: InterfacePrimaryInfoType;
    /** Additional information of a Hotel Interface. */
    additionalInfo?: InterfaceAdditionalInfoType;
    /** General information of a Hotel Interface. */
    generalInfo?: GeneralInfoType;
    /** Communication related information of a Hotel Interface. */
    communicationInfo?: InterfaceCommunicationInfoType;
    /** Communication related information of a Hotel Interface. */
    translationInfo?: TranslationType;
    /** Information related to Class of Service of a Hotel Interface. */
    classOfServiceInfo?: ClassOfServiceType;
    /** Information related to Import Rooms of a Hotel Interface. */
    importRoomsInfo?: ImportRoomsType;
    /** Workstation setup of a hotel interface. */
    workstationSetupInfo?: WorkstationSetupType;
    /** Postings of a hotel interface. */
    postingsInfo?: PostingInfoType;
    /** Information related to Custom Data of a Hotel Interface. */
    customDataInfo?: InterfaceCustomDataInfoType;
    /** Information related to Export Data of a Hotel Interface. */
    exportDataInfo?: InterfaceExportDataInfoType;
    /** Postings of a hotel interface. */
    transactionsInfo?: TransactionCodeInfoType;
}
/** This type holds the custom data of a hotel interface. */
export interface InterfaceCustomDataInfoType {
    /** Specifies whether the details have to be exported as XML. If true, then the details are exported as XML else details are exported as text. */
    exportAsXml?: boolean;
    /** Specifies whether the Doorcard field details have to be included in the XML Export. If true, Doorcard field details will be included in the XML Export else details will not be included. This field is available only when the Export as XML field is selected. */
    includeDoorcardField?: boolean;
    /** Collection of custom data details of a hotel interface. */
    interfaceCustomDataDetails?: InterfaceCustomDataDetailsType;
}
/**
 * Collection of custom data details of a hotel interface.
 * @maxItems 4000
 */
export type InterfaceCustomDataDetailsType = InterfaceCustomDataDetailType[];
/** This gives information of custom detail of a hotel interface. */
export interface InterfaceCustomDataDetailType {
    /**
     * Specifies the type of data stored.
     * @minLength 0
     * @maxLength 200
     */
    customDataField?: string;
    /**
     * Specifies the actual data corresponding to each value in the field.
     * @minLength 0
     * @maxLength 2000
     */
    customDataValue?: string;
}
export interface InterfaceCommunicationInfoType {
    tCPConfig?: TCPConfigType;
}
export interface TCPConfigType {
    /**
     * IP address of the interface server
     * @minLength 0
     * @maxLength 20
     */
    iPAddress?: string;
    /**
     * Logical Port assignment
     * @minLength 0
     * @maxLength 80
     */
    portNumber?: string;
}
/**
 * List of workstations of a hotel interface.
 * @maxItems 4000
 */
export type WorkstationSetupType = InterfaceWorkstationType[];
export interface InterfaceWorkstationType {
    /**
     * Hotel Code of a workstation.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Logo of a workstation.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** Internal code of a workstation. */
    internalCode?: number;
    /**
     * Workstation of a hotel interface.
     * @minLength 0
     * @maxLength 200
     */
    workstation?: string;
    /**
     * IP of a workstation.
     * @minLength 0
     * @maxLength 200
     */
    deviceIp?: string;
    /**
     * Location of a workstation.
     * @minLength 0
     * @maxLength 200
     */
    location?: string;
    /**
     * Type of a workstation.
     * @minLength 0
     * @maxLength 2
     */
    type?: string;
    /**
     * Device Group / Area.
     * @minLength 0
     * @maxLength 40
     */
    deviceLocation?: string;
}
export interface ImportRoomsType {
    /** Indicator for Requires line number setup, from Import Rooms related information of a Hotel Interface. */
    requiresLineNumberSetup?: boolean;
    /** Indicator for Virtual number setup, from Import Rooms related information of a Hotel Interface. */
    virtualNumberSetup?: boolean;
    /** Indicator for support of Input/Output Lines for Hotel Room Categories. */
    ioLines?: boolean;
    /**
     * Translation table for incoming messages.
     * @minLength 0
     * @maxLength 100
     */
    inXlatId?: string;
    /**
     * Translation table for outgoing messages.
     * @minLength 0
     * @maxLength 100
     */
    ouXlatId?: string;
    /**
     * Concatenated label of Hotel Room Categories for which SendToInterface flag should be set as true.
     * @minLength 0
     * @maxLength 4000
     */
    selectedRoomTypes?: string;
}
export interface InterfacePrimaryInfoType {
    /** Unique DB internal number of a Hotel Interface record. */
    interfaceId?: UniqueIDType;
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Name of the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    interfaceName?: string;
    /** Three letter code for each interface that identifies the interface. */
    interfaceType?: HotelInterfaceTypeType;
    /**
     * Three letter code that uniquely identifies the external interface.
     * @minLength 0
     * @maxLength 4
     */
    productCode?: string;
    /**
     * Interface License code
     * @minLength 0
     * @maxLength 20
     */
    licenseCode?: string;
    /** The ID stored in IFC_MACHINES table. */
    machineId?: number;
    /**
     * Unique machine name of the running IFC.
     * @minLength 0
     * @maxLength 80
     */
    machineName?: string;
    /**
     * FKT Logo required for the external interface.
     * @minLength 0
     * @maxLength 40
     */
    interfaceProductCode?: string;
}
export interface TranslationType {
    /**
     * Guest number length of a translation setup.
     * @minLength 0
     * @maxLength 2
     */
    guestNoLength?: string;
    /**
     * Guest message id length of a translation setup.
     * @minLength 0
     * @maxLength 2
     */
    guestMessageIdLength?: string;
    /**
     * Group number length of a translation setup.
     * @minLength 0
     * @maxLength 2
     */
    groupNoLength?: string;
    /** Default charge of a translation setup. */
    defaultCharge?: number;
    /**
     * Translation configuration of a hotel interface.
     * @maxItems 4000
     */
    configuation?: InterfaceControlCfgType[];
    /**
     * Translation article setup of a hotel interface.
     * @maxItems 4000
     */
    articles?: InterfaceControlArticleType[];
    /**
     * Translation specifications setup of a hotel interface.
     * @maxItems 4000
     */
    specifications?: InterfaceControlSpecType[];
    /**
     * Translation languages setup of a hotel interface.
     * @maxItems 4000
     */
    languages?: InterfaceControlLangType[];
}
export interface InterfaceControlCfgType {
    /**
     * Hotel Code of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** Internal code of a translation configuration setup. */
    internalCode?: number;
    /**
     * Origin code of a translation configuration setup.
     * @minLength 0
     * @maxLength 100
     */
    originCode?: string;
    /**
     * Merchant Id of a translation configuration setup.
     * @minLength 0
     * @maxLength 100
     */
    merchantId?: string;
}
export interface InterfaceControlSpecType {
    /**
     * Hotel Code of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** Internal code of a translation specification setup. */
    internalCode?: number;
    /**
     * Selector of a translation specification setup.
     * @minLength 0
     * @maxLength 100
     */
    selector?: string;
    /**
     * Specification of a translation specification setup.
     * @minLength 0
     * @maxLength 100
     */
    specification?: string;
    /**
     * Priority of a translation specification setup.
     * @minLength 0
     * @maxLength 100
     */
    priority?: string;
    /**
     * Position of a translation specification setup.
     * @minLength 0
     * @maxLength 100
     */
    position?: string;
}
export interface InterfaceControlLangType {
    /**
     * Hotel Code of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** Internal code of a translation language setup. */
    internalCode?: number;
    /**
     * Selector of a translation language setup.
     * @minLength 0
     * @maxLength 100
     */
    selector?: string;
    /**
     * Language code of a translation language setup.
     * @minLength 0
     * @maxLength 100
     */
    languageCode?: string;
}
export interface InterfaceControlArticleType {
    /**
     * Hotel Code of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** Internal code of a translation article setup. */
    internalCode?: number;
    /**
     * Selector of a translation article setup.
     * @minLength 0
     * @maxLength 100
     */
    selector?: string;
    /**
     * Article Number of a translation article setup.
     * @minLength 0
     * @maxLength 100
     */
    articleNo?: string;
    /**
     * Description of a translation article setup.
     * @minLength 0
     * @maxLength 100
     */
    description?: string;
}
export interface TransactionCodeInfoType {
    /**
     * All charges code of transaction code setup
     * @minLength 0
     * @maxLength 10
     */
    allChargesCode?: string;
    /**
     * Minibar charges code of transaction code setup
     * @minLength 0
     * @maxLength 10
     */
    miniBarCode?: string;
    /**
     * Cash or credit card posting of transaction code setup
     * @minLength 0
     * @maxLength 1
     */
    cashCreditCardPosting?: string;
    /**
     * Subtotal posting of transaction code setup
     * @minLength 0
     * @maxLength 1
     */
    subtotalPosting?: string;
    /**
     * Difference posting of transaction code setup
     * @minLength 0
     * @maxLength 1
     */
    differencePosting?: string;
    /**
     * Calculated transaction code posting of transaction code setup
     * @minLength 0
     * @maxLength 1
     */
    calcTrxCodePosting?: string;
    /**
     * Number of dialed digits transaction code setup
     * @minLength 0
     * @maxLength 1
     */
    numberOfDialedDigits?: string;
    /**
     * Postings information of transaction codes setup.
     * @maxItems 4000
     */
    postingAccounts?: PostingAccountType[];
    /**
     * Split information of transaction code setup.
     * @maxItems 4000
     */
    itemizers?: ItemizerType[];
    /**
     * Split information of transaction code setup.
     * @maxItems 4000
     */
    transactionCodes?: TransactionCodeDetailType[];
}
export interface ItemizerType {
    /**
     * Split code of the itemizer setup.
     * @minLength 0
     * @maxLength 10
     */
    splitCode?: string;
    /** Split posting of the itemizer setup. */
    splitPost?: number;
    /**
     * Split text of the itemizer setup.
     * @minLength 0
     * @maxLength 50
     */
    splitText?: string;
    /** Split factor of the itemizer setup. */
    splitFactor?: number;
}
export interface PostingAccountType {
    /** Internal ID to reference the records. */
    id?: number;
    /**
     * Payment method of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 10
     */
    paymentMethod?: string;
    /**
     * Account of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 50
     */
    account?: string;
    /**
     * Account description of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 100
     */
    accountDescription?: string;
    /**
     * Sales outlet of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 100
     */
    salesOutlet?: string;
    /**
     * Transaction code of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 40
     */
    transactionCode?: string;
    /**
     * Description of posting accounts in transaction codes setup.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Auto balance flag of postings setup. */
    autoBalance?: boolean;
}
export interface TransactionCodeDetailType {
    /**
     * Serving period of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    servingPeriod?: string;
    /** Row number of transaction code setup. */
    rowNum?: number;
    /**
     * Revenue center of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    revenueCenter?: string;
    /**
     * Terminal of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    terminal?: string;
    /**
     * Payment number of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    paymentNum?: string;
    /**
     * User id of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    userId?: string;
    /**
     * Post route of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    postRoute?: string;
    /**
     * Dialed digits of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    dialedDigits?: string;
    /**
     * Line type of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    lineType?: string;
    /**
     * Code of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    code?: string;
    /**
     * Tip code of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    tipCode?: string;
    /**
     * Description of transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    description?: string;
    /**
     * Itemizer short info of transaction code setup.
     * @maxItems 4000
     */
    itemizersShortInfo?: ItemizerShortInfoType[];
}
export interface ItemizerShortInfoType {
    /**
     * Code of the itemizer on a transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    code?: string;
    /**
     * Itemizer name on a transaction code setup.
     * @minLength 0
     * @maxLength 50
     */
    itemizerName?: string;
    /** Itemizer number which is the split post on a transaction code setup. */
    itemNumber?: number;
}
export interface GeneralInfoType {
    /** Create stored value during checkin of a Hotel Interface */
    createSVCheckIn?: boolean;
    /** Enable failover of a Hotel Interface */
    enableFailover?: boolean;
    /** CC vault of a Hotel Interface */
    ccVaultFunction?: boolean;
    /** Enable resend of a Hotel Interface */
    enableResend?: boolean;
    /** Send AR auth type of a Hotel Interface */
    sendARAuthType?: boolean;
    /** Enable DB verification of a Hotel Interface */
    enableDBVerification?: boolean;
    /** Allow CC cancel transactions of a Hotel Interface */
    allowCCCancelTransaction?: boolean;
    /** Show stored value pin of a Hotel Interface */
    showStoredValuePin?: boolean;
    /** Show SV transaction of a Hotel Interface */
    showSVTransaction?: SVTransactionType;
    /** Stored value system of a Hotel Interface */
    storedValueSystem?: boolean;
    /** Send enhanced fields of a Hotel Interface */
    sendEnhancedFields?: boolean;
    /** Card present of a Hotel Interface */
    cardPresentFlag?: boolean;
    /** Handle night audit command of a Hotel Interface */
    handleNightAudit?: boolean;
    /** Regular transaction command of a Hotel Interface */
    regularTransaction?: boolean;
    /** Courtesy card handling command of a Hotel Interface */
    courtesyCardHandling?: boolean;
    /** Send end of day of a Hotel Interface */
    sendEndOfDay?: boolean;
    /**
     * Logical port number 1 of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    portNumber1?: string;
    /**
     * Logical port number 2 of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    portNumber2?: string;
    /**
     * Logical port number 3 of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    portNumber3?: string;
    /**
     * Logical port number 4 of a the Hotel Interface
     * @minLength 0
     * @maxLength 200
     */
    portNumber4?: string;
    /**
     * IP Address of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    iPAddress?: string;
    /**
     * Stored value reedeem transaction of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    sVRedeemTrx?: string;
    /**
     * Device of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    device?: string;
    /**
     * Department code 1 of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    departmentCode1?: string;
    /**
     * Department code 2 of a the Hotel Interface
     * @minLength 0
     * @maxLength 40
     */
    departmentCode2?: string;
    /** Rollup transactions flag of the Hotel Interface */
    rollupTransactions?: boolean;
    /** Indicator if video checkout is allowed or not. */
    allowVideoCheckout?: boolean;
    /** One of the video checkout options whether to check the credit limit. */
    checkCreditLimit?: boolean;
    /** One of the video checkout options whether to check the balance. */
    checkBalance?: boolean;
    /** One of the video checkout options whether to check the routing. */
    checkRouting?: boolean;
    /** Indicator if the Hotel Interface handles wakeup calls. */
    wakeupYn?: boolean;
    /**
     * Determines who handles the wakeup calls, either by Opera (0) or a Vendor (1).
     * @minLength 0
     * @maxLength 1
     */
    wakeupHandledBy?: string;
    /** Wakeup retry limit of the Hotel Interface. Value range is 0 to 999. */
    wakeRetry?: number;
    /** Wakeup delay value of the Hotel Interface. */
    wakeDelay?: number;
    /** Used by the Interface module (IFC7.exe). */
    prevWake?: number;
    /**
     * Folio display option of the Hotel Interface applicable to VID and MSC. "0" means folio display option off. "A" means a guest folio display option. "U" means user defined folio display option.
     * @minLength 0
     * @maxLength 1
     */
    folioDisplayOption?: string;
    /** Indicator if the User defined folio 1 is utilized. */
    userDefinedFolio1?: boolean;
    /** Indicator if the User defined folio 2 is utilized. */
    userDefinedFolio2?: boolean;
    /** Indicator if the User defined folio 3 is utilized. */
    userDefinedFolio3?: boolean;
    /** Indicator if the User defined folio 4 is utilized. */
    userDefinedFolio4?: boolean;
    /** Indicator if the phone name will be displayed. */
    displayPhoneName?: boolean;
    /** Indicator if the Key Pin is active or not. */
    keyPinActive?: boolean;
    /** Indicator for Default All Print Details On. */
    allPrintDetailOn?: boolean;
}
/** Status of the Hotel Interface either STOPPED or RUNNING. */
export declare enum SVTransactionType {
    OperaTransaction = "OperaTransaction",
    VendorTransaction = "VendorTransaction",
    OperaAndVendorTransaction = "OperaAndVendorTransaction"
}
/** This type holds the export data of a hotel interface. */
export interface InterfaceExportDataInfoType {
    /** Collection which shows the manually selected columns for the export data of a hotel interface. */
    interfaceExportDataDetails?: InterfaceExportDataDetailsType;
    /** Collection which shows the mandatory columns for the export data of a hotel interface. */
    interfaceExportDataMandatoryDetails?: InterfaceExportDataDetailsType;
}
/**
 * Collection of export data details of a hotel interface.
 * @maxItems 4000
 */
export type InterfaceExportDataDetailsType = InterfaceExportDataDetailType[];
/** This gives information of export detail of a hotel interface. */
export interface InterfaceExportDataDetailType {
    /**
     * Specifies the table where the event data is stored.
     * @minLength 0
     * @maxLength 50
     */
    sourceTableName?: string;
    /**
     * Specifies the column name found in the table.
     * @minLength 0
     * @maxLength 50
     */
    columnName?: string;
    /**
     * Specifies the type of data in the column.
     * @minLength 0
     * @maxLength 20
     */
    dataType?: string;
    /** Specifies the length of data in the column. */
    dataLength?: number;
    /**
     * Specifies the tag name found in the export.
     * @minLength 0
     * @maxLength 50
     */
    xMLTagName?: string;
    /** Specifies whether the column is chosen to be included in the export. */
    columnSelected?: boolean;
}
export interface InterfaceAdditionalInfoType {
    /** Internal representation for Interface Type */
    menuType?: IfcMenuTypeType;
    /**
     * Name of the Interface sub-menu
     * @minLength 0
     * @maxLength 20
     */
    menuName?: string;
    /** Opera IFC controller (server) port for the connecting clients. */
    controllerPort?: number;
    /** VNC server port for connecting to a VNC server. */
    vncPort?: number;
    /** Cashier Number. */
    cashierId?: number;
    /** Used if interface has to support more than one front office system. */
    pathId1?: number;
    /**
     * Used by the Interface module. ( IFC7.exe )
     * @minLength 0
     * @maxLength 3
     */
    timeout?: string;
    /** True if the interface will be displayed. */
    displayFlag?: boolean;
    /** Decides if the interface will be started automatically when the controller is restarted. */
    autoStartFlag?: boolean;
    /** Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. */
    activeFlag?: boolean;
    /** Status if the Hotel Interface is STOPPED or RUNNING. This is different from the Active Flag, which is either 1 or 0. */
    interfaceStatus?: HotelInterfaceStatusType;
    /**
     * Version no. of each external interface that is installed
     * @minLength 0
     * @maxLength 10
     */
    version?: string;
    /**
     * (Internal Use) Message Expires After
     * @minLength 0
     * @maxLength 8
     */
    msgExpiresAfter?: string;
    useDataThroughFlag?: boolean;
    /** Indicator if the Hotel Interface handles night audit commands. */
    nAStart?: boolean;
    /** Indicator if the Hotel Interface allows multiple room selection for keys. */
    multipleRoomKey?: boolean;
    /** Indicator if the Hotel Interface is an online key system. */
    onlineKeySystem?: boolean;
    /** Indicator if the Interface Keys will be deleted on KeyDelete. */
    deleteIfcKeysOnKeyDelete?: boolean;
    /** Indicator for Hotel Interface Send Track 1 Data. */
    sendTrack1Data?: boolean;
    /** Indicator for Hotel Interface Send Track 2 Data. */
    sendTrack2Data?: boolean;
    /** Indicator if the Room Status will be sent. */
    sendRoomStatus?: boolean;
    /** Indicates on what the post unit charge is based on. */
    telephoneCharge?: TelephoneChargeType;
    /**
     * Maximum number of additional rooms allowed.
     * @min 1
     * @max 999
     */
    additionalRoomsLimit?: number;
    /** Indicator if the DLS Interface allows to send valid start date and time. */
    sendValidStartDateTime?: boolean;
}
/** Auto Choose */
export declare enum TelephoneChargeType {
    Value0 = "0",
    Value1 = "1",
    Value2 = "2"
}
/** Data Card System */
export declare enum IfcMenuTypeType {
    Cas = "Cas",
    Kss = "Kss",
    Mbs = "Mbs",
    Pbx = "Pbx",
    Pos = "Pos",
    Vss = "Vss",
    Dcs = "Dcs"
}
export interface ClassOfServiceType {
    /**
     * @minLength 0
     * @maxLength 1
     */
    cosMsgLmpRg?: string;
    /**
     * @minLength 0
     * @maxLength 1
     */
    cosChkRg?: string;
    /**
     * @minLength 0
     * @maxLength 1
     */
    cosMsgCmdRg?: string;
    roomEquipCi?: boolean;
    roomEquipCo?: boolean;
    guestDataChangeCo?: boolean;
    /**
     * Standard name format in the class of service.
     * @minLength 0
     * @maxLength 5
     */
    standardNameFormat?: string;
    /**
     * Defined name format in the class of service.
     * @maxItems 4000
     */
    definedNameFormat?: DefinedNameFormatType[];
    /** Indicates whethe a message will be triggered when a room/reservation is placed on QUEUE */
    resvInQueue?: boolean;
}
export interface DefinedNameFormatType {
    /**
     * Hotel Code where the defined name format is associated.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * ID of the defined name format.
     * @minLength 0
     * @maxLength 20
     */
    definedFormatId?: string;
    /**
     * Table from which the info will be retrieved.
     * @minLength 0
     * @maxLength 200
     */
    expressionTable?: string;
    /**
     * Expression of the defined name format It basically contains all formats that are being set.
     * @minLength 0
     * @maxLength 200
     */
    expression?: string;
    /**
     * Logo of the hotel interface.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
}
export interface PostingInfoType {
    /**
     * Reference field of postings setup.
     * @minLength 0
     * @maxLength 1
     */
    referenceField?: string;
    /**
     * Charge scaling of postings setup.
     * @minLength 0
     * @maxLength 1
     */
    chargeScaling?: string;
    /**
     * Zero charge posting of postings setup.
     * @minLength 0
     * @maxLength 1
     */
    zeroChargePostings?: string;
    /**
     * Postings of postings setup.
     * @minLength 0
     * @maxLength 1
     */
    postings?: string;
    /**
     * Post type of postings setup.
     * @minLength 0
     * @maxLength 1
     */
    postType?: string;
    /** Conversion of postings setup. */
    conversion?: number;
    /**
     * Reference of postings setup.
     * @minLength 0
     * @maxLength 50
     */
    reference?: string;
    /**
     * Supplement of postings setup.
     * @minLength 0
     * @maxLength 50
     */
    supplement?: string;
    /** Override credit limit of postings setup. */
    overrideCreditLimit?: boolean;
    /** No post flag of postings setup. */
    noPostFlag?: boolean;
    /** IFC generate tax of postings setup. */
    generatesTax?: boolean;
    /** Type of number masking used for the dialed numbers in the particular interface. */
    dialedNumberMasking?: MaskDialNumberType;
    /** Article Prefix of postings setup. */
    articleNoPrefix?: boolean;
}
/** Mask the dialled digits as per the room configuration. */
export declare enum MaskDialNumberType {
    NoMasking = "NoMasking",
    MaskLast2Digits = "MaskLast2Digits",
    MaskLast4Digits = "MaskLast4Digits",
    Mask4DigitsLeaveLast2Intact = "Mask4DigitsLeaveLast2Intact",
    MaskAllExceptFirst2 = "MaskAllExceptFirst2",
    MaskAll = "MaskAll",
    MaskingPerRoom = "MaskingPerRoom"
}
export interface InterfaceRoomType {
    /**
     * Hotel Code of the Interface Room.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Front Office Room Type.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /**
     * Front Office Room Number.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /**
     * External System's extension number.
     * @minLength 0
     * @maxLength 20
     */
    lineNumber?: string;
    /**
     * External System's extension number. It is used for editing a record. It is logically part of the record ID, and can actually be updated.
     * @minLength 0
     * @maxLength 20
     */
    oldLineNumber?: string;
    /**
     * Line Type of an Interface Room.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /** I/O Lines type, which is either IN or OUT. */
    dataLine?: DataLineType;
    /**
     * Translation Table Id as defined in the IFC_CTRL table. It is also referred as Xlat Id.
     * @minLength 0
     * @maxLength 100
     */
    dataLineId?: string;
    /** Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. */
    wakeUpCall?: boolean;
    /** Value to set/check if the Do Not Disturb funtionality is enabled/disabled/NA for the particular line number. */
    doNotDisturb?: DoNotDisturbType;
    /** Value to set/check if the Class of Service funtionality is enabled/disabled/NA for the particular line number. */
    classOfService?: ClassOfServiceConfigType;
    /** Value to set/check if the Direct Inward Dial funtionality is enabled/disabled/NA for the particular line number. */
    directInwardDial?: DirectInwardDialType;
    /** Value to set/check if the Message Waiting funtionality is enabled/disabled/NA for the particular line number. */
    messageWaiting?: MessageWaitingType;
    /** Value to set/check the type number masking used for the particular line number. */
    maskDialNumber?: MaskDialNumberType;
}
/** Line Out */
export declare enum DataLineType {
    In = "In",
    Out = "Out"
}
/** Do Not Disturb is set to available and freely switchable. */
export declare enum DoNotDisturbType {
    NotAvailable = "NotAvailable",
    AlwaysOn = "AlwaysOn",
    AlwaysOff = "AlwaysOff",
    FreelySwitchable = "FreelySwitchable"
}
/** Message Waiting is set to available and freely switchable. */
export declare enum MessageWaitingType {
    NotAvailable = "NotAvailable",
    AlwaysOn = "AlwaysOn",
    AlwaysOff = "AlwaysOff",
    FreelySwitchable = "FreelySwitchable"
}
/** Class Of Service is set to available and freely switchable. */
export declare enum ClassOfServiceConfigType {
    NotAvailable = "NotAvailable",
    AlwaysOn = "AlwaysOn",
    AlwaysOff = "AlwaysOff",
    FreelySwitchable = "FreelySwitchable"
}
/** Direct Inward Dial is set to available and freely switchable. */
export declare enum DirectInwardDialType {
    NotAvailable = "NotAvailable",
    AlwaysOn = "AlwaysOn",
    AlwaysOff = "AlwaysOff",
    FreelySwitchable = "FreelySwitchable"
}
export interface ImportInterfaceRoomsType {
    /**
     * Hotel Code to which the Interface Room belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /** I/O Lines type, which is either IN or OUT. */
    dataLine?: DataLineType;
    /** Number of lines to use for the import of a Hotel Interface Room. */
    numberOfLines?: number;
    /** Number of lines to use for the import of a Hotel Interface Room. */
    removeLeadingZeros?: boolean;
    /** Prefix for the Hotel Interface Room number for Line 1. */
    line1Prefix?: number;
    /** Numeric value to be summed with the Hotel Interface Room number for Line 1. */
    line1AddTo?: number;
    /** Prefix for the Hotel Interface Room number for Line 2. */
    line2Prefix?: number;
    /** Numeric value to be summed with the Hotel Interface Room number for Line 2. */
    line2AddTo?: number;
    /** Prefix for the Hotel Interface Room number for Line 3. */
    line3Prefix?: number;
    /** Numeric value to be summed with the Hotel Interface Room number for Line 3. */
    line3AddTo?: number;
    /** Prefix for the Hotel Interface Room number for Line 4. */
    line4Prefix?: number;
    /** Numeric value to be summed with the Hotel Interface Room number for Line 4. */
    line4AddTo?: number;
    /**
     * Concatenated label of Hotel Room Categories, which will be imported to the Hotel Interface.
     * @minLength 0
     * @maxLength 4000
     */
    selectedRoomTypes?: string;
    /**
     * Mask configurations for different line types.
     * @maxItems 4000
     */
    maskLines?: RoomMaskSetupType[];
}
export interface RoomMaskSetupType {
    /** Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. */
    wakeUpCall?: boolean;
    /** Value to set/check if the Do Not Disturb funtionality is enabled/disabled/NA for the particular line number. */
    doNotDisturb?: DoNotDisturbType;
    /** Value to set/check if the Class of Service funtionality is enabled/disabled/NA for the particular line number. */
    classOfService?: ClassOfServiceConfigType;
    /** Value to set/check if the Direct Inward Dial funtionality is enabled/disabled/NA for the particular line number. */
    directInwardDial?: DirectInwardDialType;
    /** Value to set/check if the Message Waiting funtionality is enabled/disabled/NA for the particular line number. */
    messageWaiting?: MessageWaitingType;
    /** Value to set/check the type number masking used for the particular line number. */
    maskDialNumber?: MaskDialNumberType;
}
/** A data manipulation language command for deleting an existing record. */
export declare enum DMLCommandType {
    Insert = "Insert",
    Update = "Update",
    Delete = "Delete"
}
/**
 * Collection of Hotel Interface Schemas.
 * @maxItems 4000
 */
export type HotelInterfaceSchemasType = HotelInterfaceSchemaType[];
export interface HotelInterfaceSchemaType {
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Action Name
     * @minLength 0
     * @maxLength 40
     */
    actionName?: string;
    /**
     * Schema Name
     * @minLength 0
     * @maxLength 40
     */
    schemaName?: string;
    /**
     * Schema
     * @minLength 0
     * @maxLength 4000
     */
    schema?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @format date-time
     */
    insertDate?: string;
    /**
     * ifcType
     * @minLength 0
     * @maxLength 4000
     */
    ifcType?: string;
}
/**
 * Collection of Hotel Interface Errors.
 * @maxItems 4000
 */
export type HotelInterfaceErrorsType = HotelInterfaceErrorType[];
export interface HotelInterfaceErrorType {
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Action Name
     * @minLength 0
     * @maxLength 40
     */
    actionName?: string;
    /**
     * Message
     * @minLength 0
     * @maxLength 4000
     */
    message?: string;
    /**
     * Error
     * @minLength 0
     * @maxLength 2000
     */
    error?: string;
    /**
     * Schema
     * @minLength 0
     * @maxLength 40
     */
    resvNameId?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @format date-time
     */
    insertDate?: string;
    /**
     * ifcType
     * @minLength 0
     * @maxLength 4000
     */
    ifcType?: string;
}
/**
 * Collection of Hotel Interface Failed Messages.
 * @maxItems 4000
 */
export type HotelInterfaceFailedMessagesType = HotelInterfaceFailedMessageType[];
export interface HotelInterfaceFailedMessageType {
    /**
     * Hotel Code
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @minLength 0
     * @maxLength 20
     */
    logo?: string;
    /**
     * Action Name
     * @minLength 0
     * @maxLength 40
     */
    actionName?: string;
    /**
     * Message
     * @minLength 0
     * @maxLength 4000
     */
    message?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @format date-time
     */
    insertDate?: string;
    /**
     * ifcType
     * @minLength 0
     * @maxLength 4000
     */
    ifcType?: string;
}
/**
 * Collection of Hotel Interface Controller Registry.
 * @maxItems 4000
 */
export type HotelInterfaceControllerRegsType = HotelInterfaceControllerRegType[];
export interface HotelInterfaceControllerRegType {
    /** Internal ID to reference the records. */
    id?: number;
    /**
     * Machine Name
     * @minLength 0
     * @maxLength 80
     */
    machine?: string;
    /**
     * Controller Registry Setting
     * @minLength 0
     * @maxLength 20
     */
    cntrlRegSetting?: string;
    /**
     * Data
     * @minLength 0
     * @maxLength 400
     */
    data?: string;
    /**
     * Description
     * @minLength 0
     * @maxLength 4000
     */
    description?: string;
}
/** Request object for creating a new Hotel Interface. */
export interface HotelInterface {
    details?: HotelInterfaceDetailType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for importing the Interface Rooms for a Hotel Interface record. */
export interface ImportInterfaceRooms {
    details?: ImportInterfaceRoomsType;
    /** A data manipulation language command for deleting an existing record. */
    dMLCommand?: DMLCommandType;
    targetedImport?: InterfaceRoomType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for retrieving Hotel Interface Schemas. */
export interface FetchedHotelInterfaceSchemas {
    /** Collection of Hotel Interface Schemas. */
    schemas?: HotelInterfaceSchemasType;
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
/** Response object for retrieving Hotel Interface Errors. */
export interface FetchedHotelInterfaceErrors {
    /** Collection of Hotel Interface Errors. */
    hotelInterfaceErrors?: HotelInterfaceErrorsType;
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
/** Response object for retrieving Hotel Interface Failed Messages. */
export interface FetchedHotelInterfaceFailedMessages {
    /** Collection of Hotel Interface Failed Messages. */
    messages?: HotelInterfaceFailedMessagesType;
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
/** Response object for retrieving Hotel Interface Controller Registry. */
export interface FetchedHotelInterfaceControllerRegistry {
    /** Collection of Hotel Interface Controller Registry. */
    reg?: HotelInterfaceControllerRegsType;
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
 * @title OPERA Cloud Integration Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /int/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    config: {
        /**
         * @description  <p><strong>OperationId:</strong>clearCacheBeProcessor</p>
         *
         * @tags BEProcessor
         * @name ClearCacheBeProcessor
         * @summary Operation to clear cache.
         * @request DELETE:/config/oxi/services/beProcessor/cache
         */
        clearCacheBeProcessor: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>pingBeProcessor</p>
         *
         * @tags BEProcessor
         * @name PingBeProcessor
         * @summary Operation to ping.
         * @request GET:/config/oxi/services/beProcessor/status
         */
        pingBeProcessor: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
    deliveryMethods: {
        /**
         * @description  <p><strong>OperationId:</strong>getDeliveryMethods</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetDeliveryMethods
         * @summary Operation to fetch delivery methods.
         * @request GET:/deliveryMethods
         */
        getDeliveryMethods: (hotelId: string, query?: {
            /** Property code. */
            hotelId?: string;
            /** CRO code. */
            croCode?: string;
            /**
             * Settings for Text Message Delivery of Queue Reservation status
             * @uniqueItems true
             */
            usages?: ('General' | 'QueueReservation' | 'Confirmation' | 'GuestMessage' | 'BillingFolio' | 'QueueRush')[];
            /** If true this will include inactive records(This is only applicable for general SMTP delivery method ). */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedDeliveryMethods, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>putDeliveryMethods</p>
         *
         * @tags ExternalSystemsConfig
         * @name PutDeliveryMethods
         * @summary Operation to change delivery methods.
         * @request PUT:/deliveryMethods
         */
        putDeliveryMethods: (hotelId: string, changeDeliveryMethods: ChangeDeliveryMethods, params?: RequestParams) => Promise<AxiosResponse<ChangedDeliveryMethods, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteDeliveryMethods</p>
         *
         * @tags ExternalSystemsConfig
         * @name DeleteDeliveryMethods
         * @summary Operation to remove delivery methods.
         * @request DELETE:/deliveryMethods
         */
        deleteDeliveryMethods: (hotelId: string, query?: {
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            hotelId?: string;
            /**
             * Settings for Text Message Delivery of Queue Reservation status
             * @uniqueItems true
             */
            type?: 'General' | 'QueueReservation' | 'Confirmation' | 'GuestMessage' | 'BillingFolio' | 'QueueRush';
            /**
             * SFTP delivery configurations
             * @uniqueItems true
             */
            options?: ('Email' | 'Fax' | 'TextMessage' | 'Sftp')[];
            /** Unique id associated with this configuration */
            configurationId?: number[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postDeliveryMethods</p>
         *
         * @tags ExternalSystemsConfig
         * @name PostDeliveryMethods
         * @summary Operation to create delivery methods.
         * @request POST:/deliveryMethods
         */
        postDeliveryMethods: (hotelId: string, createDeliveryMethods: CreateDeliveryMethods, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    deviceLocations: {
        /**
         * @description Use this API to get the template device locations. <p><strong>OperationId:</strong>getTemplateDeviceLocations</p>
         *
         * @tags ChainConfig
         * @name GetTemplateDeviceLocations
         * @summary Get the template device locations
         * @request GET:/deviceLocations
         */
        getTemplateDeviceLocations: (hotelId: string, query?: {
            /**
             * Determines wether to fetch inactive records or not.
             * @default "false"
             */
            fetchInactive?: boolean;
            /** Codes to be searched. */
            codes?: string[];
            /** Wildcard search on the code. */
            wildCard?: string;
            /** Description of the code. */
            description?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TemplateDeviceLocationsDetails, any>>;
        /**
         * @description Use this API to create the template device locations. <p><strong>OperationId:</strong>postTemplateDeviceLocations</p>
         *
         * @tags ChainConfig
         * @name PostTemplateDeviceLocations
         * @summary Create the template device locations
         * @request POST:/deviceLocations
         */
        postTemplateDeviceLocations: (hotelId: string, templateDeviceLocationsCriteria: TemplateDeviceLocationsCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to update the template device locations. <p><strong>OperationId:</strong>changeTemplateDeviceLocations</p>
         *
         * @tags ChainConfig
         * @name ChangeTemplateDeviceLocations
         * @summary Change the template device locations
         * @request PUT:/deviceLocations/{deviceLocationId}
         */
        changeTemplateDeviceLocations: (hotelId: string, deviceLocationId: string, templateDeviceLocationsToBeChanged: TemplateDeviceLocationsToBeChanged, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to delete the template device locations. <p><strong>OperationId:</strong>removeTemplateDeviceLocations</p>
         *
         * @tags ChainConfig
         * @name RemoveTemplateDeviceLocations
         * @summary Delete the template device locations
         * @request DELETE:/deviceLocations/{deviceLocationId}
         */
        removeTemplateDeviceLocations: (hotelId: string, deviceLocationId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    externalSystems: {
        /**
         * @description  <p><strong>OperationId:</strong>clearCache</p>
         *
         * @tags ExternalSystemsConfig
         * @name ClearCache
         * @summary Operation to clear cache.
         * @request DELETE:/externalSystems/config/cache
         */
        clearCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>ping</p>
         *
         * @tags ExternalSystemsConfig
         * @name Ping
         * @summary Operation to ping.
         * @request GET:/externalSystems/config/ping
         */
        ping: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postPublishers</p>
         *
         * @tags ExternalSystemsConfig
         * @name PostPublishers
         * @summary Operation to create publishers.
         * @request POST:/externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers
         */
        postPublishers: (hotelId: string, externalSystemCode: string, createPublishers: CreatePublishers, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deletePublisher</p>
         *
         * @tags ExternalSystemsConfig
         * @name DeletePublisher
         * @summary Operation to remove publisher.
         * @request DELETE:/externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers
         */
        deletePublisher: (hotelId: string, externalSystemCode: string, query?: {
            subscriberHotelId?: string;
            code?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getPublishers</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetPublishers
         * @summary Operation to fetch publishers.
         * @request GET:/externalSystems/{externalSystemCode}/publishers
         */
        getPublishers: (hotelId: string, externalSystemCode: string, query?: {
            hotelId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedPublishers, any>>;
    };
    hotelInterfaceTypes: {
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaces</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetHotelInterfaces
         * @summary Operation to fetch hotel interfaces.
         * @request GET:/hotelInterfaceTypes
         */
        getHotelInterfaces: (hotelId: string, query?: {
            hotelIds?: string[];
            /**
             * XML Posting Interface
             * @uniqueItems true
             */
            interfaceTypes?: ('Bms' | 'Cas' | 'Ccw' | 'Dls' | 'Eft' | 'Exp' | 'Mak' | 'Mbs' | 'Msc' | 'Pbx' | 'Pos' | 'Svs' | 'Tik' | 'Vid' | 'Vms' | 'Www' | 'Xml')[];
            logosCodes?: string[];
            /** If true this will set the criteria to include inactive records. */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedHotelInterfaces, any>>;
    };
    hotels: {
        /**
         * @description  <p><strong>OperationId:</strong>deleteHotelInterface</p>
         *
         * @tags ExternalSystemsConfig
         * @name DeleteHotelInterface
         * @summary Operation to remove hotel interface.
         * @request DELETE:/hotels/{hotelId}/hotelInerface
         */
        deleteHotelInterface: (hotelId: string, query?: {
            /** Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. */
            logo?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    interfaceControllerRegistry: {
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceControllerRegistry</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetHotelInterfaceControllerRegistry
         * @summary Operation to fetch hotel interface controller registry.
         * @request GET:/interfaceControllerRegistry
         */
        getHotelInterfaceControllerRegistry: (hotelId: string, query?: {
            /** Used for Character Strings, length 0 to 40. */
            machine?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedHotelInterfaceControllerRegistry, any>>;
    };
    interfaceErrors: {
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceErrors</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetHotelInterfaceErrors
         * @summary Operation to fetch hotel interface errors.
         * @request GET:/interfaceErrors
         */
        getHotelInterfaceErrors: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            hotelIds?: string[];
            /**
             * XML Posting Interface
             * @uniqueItems true
             */
            interfaceTypes?: ('Bms' | 'Cas' | 'Ccw' | 'Dls' | 'Eft' | 'Exp' | 'Mak' | 'Mbs' | 'Msc' | 'Pbx' | 'Pos' | 'Svs' | 'Tik' | 'Vid' | 'Vms' | 'Www' | 'Xml')[];
            logoCodes?: string[];
            /** If true this will set the criteria to include inactive records. */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedHotelInterfaceErrors, any>>;
    };
    interfaceFailedMessages: {
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceFailedMessages</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetHotelInterfaceFailedMessages
         * @summary Operation to fetch hotel interface failed messages.
         * @request GET:/interfaceFailedMessages
         */
        getHotelInterfaceFailedMessages: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            hotelIds?: string[];
            /**
             * XML Posting Interface
             * @uniqueItems true
             */
            interfaceTypes?: ('Bms' | 'Cas' | 'Ccw' | 'Dls' | 'Eft' | 'Exp' | 'Mak' | 'Mbs' | 'Msc' | 'Pbx' | 'Pos' | 'Svs' | 'Tik' | 'Vid' | 'Vms' | 'Www' | 'Xml')[];
            logoCodes?: string[];
            /** If true this will set the criteria to include inactive records. */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedHotelInterfaceFailedMessages, any>>;
    };
    interfaceRights: {
        /**
         * @description  <p><strong>OperationId:</strong>putInterfaceRight</p>
         *
         * @tags ExternalSystemsConfig
         * @name PutInterfaceRight
         * @summary Operation to change interface right.
         * @request PUT:/interfaceRights
         */
        putInterfaceRight: (hotelId: string, changeInterfaceRight: ChangeInterfaceRight, params?: RequestParams) => Promise<AxiosResponse<ChangedInterfaceRight, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>deleteInterfaceRight</p>
         *
         * @tags ExternalSystemsConfig
         * @name DeleteInterfaceRight
         * @summary Operation to remove interface right.
         * @request DELETE:/interfaceRights
         */
        deleteInterfaceRight: (hotelId: string, query?: {
            /** Hotel Code to which the Interface Right belongs to. */
            hotelId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
            /** Internal code for each allowed right of a Hotel Interface record. */
            right?: number;
            /** User defined code for an Interface Right. */
            code?: string;
            /** User defined description for an Interface Right. */
            description?: string;
            /** System Description of an allowed Interface Right. */
            interfaceRightDescription?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getInterfaceRights</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetInterfaceRights
         * @summary Operation to fetch interface rights.
         * @request GET:/interfaceRights
         */
        getInterfaceRights: (hotelId: string, query?: {
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            hotelId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedInterfaceRights, any>>;
    };
    interfaceSchemas: {
        /**
         * @description  <p><strong>OperationId:</strong>getHotelInterfaceSchemas</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetHotelInterfaceSchemas
         * @summary Operation to fetch hotel interface schemas.
         * @request GET:/interfaceSchemas
         */
        getHotelInterfaceSchemas: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            hotelIds?: string[];
            /**
             * XML Posting Interface
             * @uniqueItems true
             */
            interfaceTypes?: ('Bms' | 'Cas' | 'Ccw' | 'Dls' | 'Eft' | 'Exp' | 'Mak' | 'Mbs' | 'Msc' | 'Pbx' | 'Pos' | 'Svs' | 'Tik' | 'Vid' | 'Vms' | 'Www' | 'Xml')[];
            logoCodes?: string[];
            /** If true this will set the criteria to include inactive records. */
            includeInactive?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedHotelInterfaceSchemas, any>>;
    };
    interfaces: {
        /**
         * @description  <p><strong>OperationId:</strong>getExternalDatabaseAvailableProperties</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetExternalDatabaseAvailableProperties
         * @summary Operation to fetch external database available properties.
         * @request GET:/interfaces/{interfaceId}/databases/{databaseId}/availableResorts
         */
        getExternalDatabaseAvailableProperties: (hotelId: string, databaseId: string, interfaceId: string, query?: {
            /** Flag that indicates to include inactive records. */
            includeInactive?: boolean;
            interfaceCodes?: string[];
            hotelIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedExternalDatabaseAvailableProperties, any>>;
    };
    udfMappings: {
        /**
         * @description Operation to send a response to the Look-up of UDFs. <p><strong>OperationId:</strong>getUDFMappings</p>
         *
         * @tags ExternalSystemsConfig
         * @name GetUdfMappings
         * @summary Operation to send a response to the Look up of UDFs.
         * @request GET:/udfMappings
         */
        getUdfMappings: (hotelId: string, query?: {
            /** A reference to the type of object defined by the Type for Reservation and Profile Type. */
            type?: string;
            /** Name of the user-defined function (UDF) field. */
            uDFName?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FetchedUDFMappings, any>>;
        /**
         * @description Operation to send a response to the Change in UDF. <p><strong>OperationId:</strong>putUDFMapping</p>
         *
         * @tags ExternalSystemsConfig
         * @name PutUdfMapping
         * @summary Operation to send a response to the Change in UDF.
         * @request PUT:/udfMappings
         */
        putUdfMapping: (hotelId: string, changeUDFMapping: ChangeUDFMapping, params?: RequestParams) => Promise<AxiosResponse<ChangedUDFMapping, any>>;
    };
}
