/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Response object for fetching Bed Types. */
export interface BedTypesDetails {
  /** Collection of Bed Types. */
  bedTypes?: BedTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Bed Type Enumeration element.
 * @maxItems 4000
 */
export type BedTypesType = BedTypeType[];

/** Contains Common Master configuration detail. */
export interface BedTypeType {
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

/** Response object for fetching housekeeping tasks and housekeeping codes associated to a room type. */
export interface HousekeepingRoomSchedulesDetails {
  /** Collection of housekeeping tasks and housekeeping codes associated to a room type. */
  housekeepingRoomSchedules?: ConfigHousekeepingRoomSchedulesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * This type holds a collection of housekeeping tasks attached to a room type.
 * @maxItems 4000
 */
export type ConfigHousekeepingRoomSchedulesType = ConfigHousekeepingRoomScheduleType[];

/** Facility Housekeeping task code and description. */
export interface ConfigHousekeepingRoomScheduleType {
  /**
   * Facility task description.
   * @minLength 0
   * @maxLength 80
   */
  description?: string;
  /** Signifies the priority of the task. */
  priority?: number;
  /**
   * Code of the housekeeping task.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Housekeeping credits associated with this housekeeping task. */
  credits?: number;
  /** Signifies frequency(i.e. every 2 days) with which housekeeping task is to be performed. */
  frequency?: FrequencyTypeType;
  /** Specify how often in days following the guest's arrival date, the housekeeping task is to be completed. */
  frequencyDays?: number;
  /** Specify a particular Special code to associate to a housekeeping task code. */
  specialRequests?: CodeListType;
  /** Specify a particular VIP code to associate to a housekeeping task code. */
  vIPStatuses?: CodeListType;
  /** Used to store the housekeeping task sequence. */
  sequence?: number;
  /** This option, if applied, works in conjunction with the Every XX Day(s) option to allow you to control the days of the week on which this housekeeping task can take place. */
  daysOfWeek?: TimeSpanDaysOfWeekType;
  /** Specify one or more Rate Codes to associate to a specific housekeeping task code. */
  rateCodes?: CodeListType;
  /** Specify one or more Market Codes to associate to a specific housekeeping task code. */
  marketCodes?: CodeListType;
  /** Signifies offset(in days) i.e. start on 3rd day from arrival. */
  cycleStartDay?: number;
  /**
   * The information that is entered into this text box.
   * @minLength 0
   * @maxLength 400
   */
  customizePromptText?: string;
  /** Collection of housekeeping task supplies for a room type. */
  taskSupplies?: ConfigHousekeepingRoomScheduleTaskSuppliesType;
  /** Specifies the room type code with description. */
  roomType?: CodeDescriptionType;
  /** Signifies whether housekeeping task is a guest requested task. */
  guestRequested?: boolean;
  /** Signifies that task is a default task for the checked out room. */
  defaultDepartureTask?: boolean;
  /** Automatically moves the task up one day if it falls on the day before the guest’s departure. It will only be available when the schedule is set to every 3 days or more. */
  moveup?: boolean;
  /**
   * Specifies the hotel code that the room type belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Simple type for storing frequency type. */
export enum FrequencyTypeType {
  Everyday = 'Everyday',
  EveryXDays = 'EveryXDays',
  CustomSchedule = 'CustomSchedule',
  DepartureDayOnly = 'DepartureDayOnly',
  ArrivalDayOnly = 'ArrivalDayOnly',
  NotRequired = 'NotRequired',
  SpecificDays = 'SpecificDays',
}

/** @maxItems 4000 */
export type CodeListType = string[];

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

/**
 * This type holds a collection of housekeeping task supplies attached to a room type.
 * @maxItems 4000
 */
export type ConfigHousekeepingRoomScheduleTaskSuppliesType = ConfigHousekeepingRoomScheduleTaskSupplyType[];

/** Facility Housekeeping Code, its description and quantity. */
export interface ConfigHousekeepingRoomScheduleTaskSupplyType {
  /**
   * Facility Code.
   * @minLength 0
   * @maxLength 80
   */
  description?: string;
  /** Signifies the quantity. */
  quantity?: number;
  /**
   * Facility code value.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Used to store the housekeeping room schedule sequence. */
  sequence?: number;
  /** Specifies the room type code with description. */
  roomType?: CodeDescriptionType;
  /**
   * Specifies the hotel code that the room type belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Specifies the housekeeping room schedule code.
   * @minLength 0
   * @maxLength 20
   */
  housekeepingRoomScheduleCode?: string;
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

/** Request object for associating housekeeping tasks and housekeeping codes to a room type. */
export interface HousekeepingRoomSchedulesCriteria {
  /** Collection containing details of housekeeping tasks and housekeeping codes to be associated to a room type. */
  housekeepingRoomSchedules?: ConfigHousekeepingRoomSchedulesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Request object for changing housekeeping tasks and housekeeping codes associated to a room type. */
export interface HousekeepingRoomSchedulesToBeChanged {
  /** Collection containing details of housekeeping tasks and housekeeping codes associated to a room type which have to be changed. */
  housekeepingRoomSchedules?: ConfigHousekeepingRoomSchedulesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching housekeeping section codes. */
export interface HousekeepingSectionsDetails {
  /** Collection of housekeeping section codes. */
  housekeepingSections?: HousekeepingSectionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of the housekeeping sections to be configured or fetched
 * @maxItems 4000
 */
export type HousekeepingSectionsType = HousekeepingSectionType[];

/** Information regarding Housekeeping Sections. */
export interface HousekeepingSectionType {
  /**
   * Property where this section is defined.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The Housekeeping Section Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Section.
   * @minLength 0
   * @maxLength 80
   */
  description?: string;
  /**
   * Housekeeping Section Group.
   * @minLength 0
   * @maxLength 20
   */
  sectionGroup?: string;
  /** Target Credit for each task sheet created for this section when auto task assignment is broken out by section. */
  targetCredits?: number;
  /** Rooms count for this section code. This is auto populated while creating/fetching record. */
  rooms?: number;
  /** Number of housekeeping credits. This is auto populated while creating/fetching record. */
  roomCredits?: number;
  /** Display sequence when task assignment is automatically broken out by Section Group. */
  sequence?: number;
  /** Indicates if the Section Code is active. */
  inactive?: boolean;
}

/** Add housekeeping section codes configurations for resort. */
export interface HousekeepingSectionsCriteria {
  /** Add the housekeeping section code to the configuration of resort. */
  housekeepingSections?: HousekeepingSectionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Modify housekeeping section codes in resort configurations. */
export interface HousekeepingSectionsToBeChanged {
  /** The housekeeping section code to be modified in the configuration of the resort. */
  housekeepingSections?: HousekeepingSectionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching room maintenance reasons for a hotel. */
export interface HotelRoomMaintenanceReasonsDetails {
  /** Collection of hotel level room maintenance reasons. */
  hotelRoomMaintenanceReasons?: HotelRoomMaintenanceReasonsType;
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
 * Details for room maintenance reason at hotel level.
 * @maxItems 4000
 */
export type HotelRoomMaintenanceReasonsType = HotelRoomMaintenanceReasonType[];

/** Base common structure for Room Maintenance at both hotel and template levels. */
export interface HotelRoomMaintenanceReasonType {
  /**
   * Identification code for a particular room maintenance reason.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of a particular room maintenance reason.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Indicates the sell sequence for a particular room maintenance reason. */
  sellSequence?: number;
  /** Inactive flag for a particular room maintenance reason. */
  inactive?: boolean;
  /**
   * Hotel code that a particular room maintenance reason belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Request object for creating new room maintenance reasons for a hotel. */
export interface HotelRoomMaintenanceReasonsCriteria {
  /** Collection of hotel room maintenance reasons to be created. */
  hotelRoomMaintenanceReasons?: HotelRoomMaintenanceReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for modifying room maintenance reasons for a hotel. */
export interface HotelRoomMaintenanceReasonsToBeChanged {
  /** Collection of hotel room maintenance reason to be changed. */
  hotelRoomMaintenanceReasons?: HotelRoomMaintenanceReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for Fetching existing Room Types. */
export interface RoomTypesDetails {
  /** Contains the results of a successful operation. */
  roomTypesSummary?: RoomTypesSummaryType[];
  /** Collection of Room Type Templates and their information. */
  roomTypes?: RoomTypesType[];
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

/** This type holds collection of room type. */
export interface RoomTypesSummaryType {
  /** @maxItems 4000 */
  roomTypeSummary?: RoomTypeSummaryType[];
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** This type represents the summary of room type attributes. */
export interface RoomTypeSummaryType {
  /**
   * Room class for the room type code.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Short Description of room type.
   * @minLength 0
   * @maxLength 200
   */
  shortDescription?: string;
  /**
   * Active date of the room type.
   * @format date
   * @maxLength 8
   */
  activeDate?: string;
  /** Indicates if room type is pseudo. */
  pseudo?: boolean;
  /** Indicates if room type is accessible. */
  accessible?: boolean;
  /** Indicates if room type is sent to interface. */
  sendToInterface?: boolean;
  /** Indicates room types sell sequence. */
  sellSequence?: number;
  /** Indicates room type is a suite. */
  suite?: boolean;
  /** Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. */
  meetingRoom?: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Number of rooms for this room type. */
  numberOfRooms?: number;
  /** Indicates the room type is inactive or not. */
  inactive?: boolean;
}

/** This type holds collection of room type. */
export interface RoomTypesType {
  /** @maxItems 4000 */
  roomType?: RoomTypeType[];
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** This type represents the room type attributes. */
export interface RoomTypeType {
  /**
   * New Room type code. (Used in change template room type operation)
   * @minLength 0
   * @maxLength 20
   */
  newRoomType?: string;
  /**
   * Room class for the room type code.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Bed type of room type.
   * @minLength 0
   * @maxLength 20
   */
  bedType?: string;
  /** Short Description of room type. */
  shortDescription?: TranslationTextType2000;
  /** Long Description of room type. */
  description?: TranslationTextType2000;
  /**
   * Specifies the smoking preference for this room type. I.E. SM, NS.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreference?: string;
  /**
   * Active date of the room type.
   * @format date
   * @maxLength 8
   */
  activeDate?: string;
  /** Indicates if room type is pseudo. */
  pseudo?: boolean;
  /** Indicates if room type is accessible. */
  accessible?: boolean;
  /** Indicates room type is a suite. */
  suite?: {
    /** Property Value */
    value?: boolean;
    /** Indicates if room type Room Components may be changed. */
    editable?: boolean;
  };
  /** Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. */
  meetingRoom?: boolean;
  /** Indicates room type is sent to interface. */
  sendToInterface?: boolean;
  /** Indicates room types sell sequence. */
  sellSequence?: number;
  /** Indicates room type is generic. */
  generic?: boolean;
  /** Indicates room type is available for maintenance request. */
  maintenance?: boolean;
  /** Default occupancy for the room type. */
  defaultOccupancy?: number;
  /** Minimum occupancy for the room type. */
  minimumOccupancy?: number;
  /** Maximum occupancy for the room type. */
  maximumOccupancy?: number;
  /** Maximum Adults for the room type. */
  maxAdults?: number;
  /** Maximum Children for the room type. */
  maxChildren?: number;
  /** Room type shows in house keeping. */
  houseKeeping?: boolean;
  /**
   * Room type info URL.
   * @minLength 0
   * @maxLength 200
   */
  infoURL?: string;
  /** Room type is automatically attached when new rate codes are created. */
  autoPopulate?: boolean;
  /** Room number is automatically assigned when a reservation is made for this Room Type. */
  autoRoomAssign?: boolean;
  /** Creates a new linked Reservation, and proceeds within check-in of the new reservation. */
  autoCheckin?: boolean;
  /** This value will control the minimum amount that the selected room type can be sold */
  rateFloor?: number;
  /** Room type component details. */
  components?: RoomTypeComponentsType;
  /** Room type feature details. */
  features?: RoomFeaturesType;
  /** Specify whether the room type is yieldable or non-yieldable (Available when a yield integration add-on license is active.) */
  yieldStatus?: RoomTypeYieldableType;
  /**
   * Yield category for this room type (Available when a yield integration add-on license is active and when room type is Yieldable.)
   * @minLength 0
   * @maxLength 20
   */
  yieldCategory?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Number of rooms for this room type. */
  numberOfRooms?: number;
  /** Is Room type inactive? */
  inactive?: boolean;
}

/**
 * Contains room components of a component room type.
 * @maxItems 4000
 */
export type RoomTypeComponentsType = RoomTypeComponentType[];

/** Room component and its quantity for the component room type. */
export interface RoomTypeComponentType {
  /** Quantity of room component for the component room type. */
  qty?: number;
  /**
   * Description of room component.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
}

/**
 * A recurring element that identifies the room features.
 * @maxItems 4000
 */
export type RoomFeaturesType = RoomFeatureType[];

/** Room Feature Information. */
export interface RoomFeatureType {
  /**
   * A code representing a room feature.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * A code representing a room feature.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Display Order sequence. */
  orderSequence?: number;
  /** Indicates quantity. */
  quantity?: number;
}

/** Simple type for Yieldable or Non Yieldable */
export enum RoomTypeYieldableType {
  Yieldable = 'Yieldable',
  NonYieldable = 'NonYieldable',
}

/** Request object for Creating a new Room Type. */
export interface RoomTypesCriteria {
  /** Room Type details to be created. */
  roomType?: {
    /** Room Type details to be created. */
    roomTypeDetails?: RoomTypeType;
    /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
    hotelId?: CodeType;
  };
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

/** Request object for Modifying Room Type. */
export interface RoomTypesToBeChanged {
  /** Room Type details to be changed. */
  roomType?: {
    /** Room Type details to be changed. */
    roomTypeDetails?: RoomTypeType;
    /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
    hotelId?: CodeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching complete information of existing rooms. */
export interface RoomsDetails {
  /** Collection of rooms with detailed information. */
  rooms?: ConfigRoomsType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This type holds collection of rooms with complete information. */
export interface ConfigRoomsType {
  /** @maxItems 4000 */
  room?: ConfigRoomType[];
  /**
   * Hotel Code of the rooms.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** This type represents the primary room attributes. */
export interface ConfigRoomType {
  /** Room type basic information of the room. */
  roomType?: RoomTypeShortInfoType;
  /**
   * Floor of the Room.
   * @minLength 0
   * @maxLength 20
   */
  floor?: string;
  /**
   * Description for the Floor of the Room.
   * @minLength 0
   * @maxLength 20
   */
  floorDescription?: string;
  /** Room Features for the room. */
  roomFeatures?: RoomFeaturesType;
  /**
   * Detail Long Description Of The Room.
   * @minLength 0
   * @maxLength 20
   */
  roomDescription?: string;
  /** Description of the room. */
  description?: TranslationTextType2000;
  /**
   * This indicates room smoking preference.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreference?: string;
  /**
   * This indicates the description of the room smoking preference.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreferenceDescription?: string;
  /**
   * Building associated with the room.
   * @minLength 0
   * @maxLength 20
   */
  building?: string;
  /** Assignment Rating associated with the room. */
  roomAssignmentRating?: RatePlanRatingType;
  /** Indicates whether the room is accessibility compliant. */
  accessible?: boolean;
  /**
   * Code of the room.
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /** Indicates whether the room is a Meeting Room */
  meetingRoom?: boolean;
  /** Components of a room. */
  roomComponents?: RoomComponentsType;
  /** Connecting rooms of a room. */
  connectingRooms?: RoomRoomsType;
  /**
   * Published rate code of a room.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /** Published rate amount of a room. */
  rateAmount?: CurrencyAmountType;
  /** Maximum occupancy of a room. */
  maximumOccupancy?: number;
  /** Display sequence of a room. */
  sellSequence?: number;
  /** This indicates if room is marked as a owner room */
  ownerRoom?: boolean;
  /**
   * The Unit Grade Code attached to the room
   * @minLength 0
   * @maxLength 20
   */
  unitGradeCode?: string;
  /** This indicates if smoking is allowed in the room. */
  smoking?: boolean;
  /**
   * Key code of a room.
   * @minLength 0
   * @maxLength 20
   */
  keyCode?: string;
  /** Key options of a room. */
  keyOptions?: CodeListType;
  /** Square units of a room. */
  squareUnits?: number;
  /** Turndown service flag of a room. */
  turndownService?: boolean;
  /**
   * Square unit measurement of a room.
   * @minLength 0
   * @maxLength 20
   */
  squareUnitsMeasurement?: string;
  /**
   * Square unit measurement of a room.
   * @minLength 0
   * @maxLength 20
   */
  phoneNumber?: string;
  /**
   * Housekeeping credits of the room. This may include stayover, departure, pickup and turndown credits.
   * @maxItems 4000
   */
  housekeepingCredit?: HousekeepingCreditsType[];
  /** Room section of the room. This includes day and evening sections. */
  roomSection?: RoomSectionType;
  /** Number of beds of the room. */
  noOfBeds?: number;
}

/** Basic information of room type. */
export interface RoomTypeShortInfoType {
  /** Indicates if room is a pseudo. This is read-only. */
  pseudo?: boolean;
  /** Indicates if room is a suite. This is read-only. */
  suite?: boolean;
  /**
   * Room Class of the room. This is read-only.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Short Description of room type.
   * @minLength 0
   * @maxLength 200
   */
  shortDescription?: string;
  /** Indicates if room type of the room is flagged as housekeeping. This is read-only. */
  houseKeeping?: boolean;
  /**
   * Specifies the smoking preference for room type of the room.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreference?: string;
  /**
   * Building associated with the room.
   * @minLength 0
   * @maxLength 20
   */
  building?: string;
  /** Assignment Rating associated with the room. */
  roomAssignmentRating?: RatePlanRatingType;
  /** Minimum occupancy for the room type. */
  minimumOccupancy?: number;
  /** Maximum occupancy for the room type. */
  maximumOccupancy?: number;
  /** Room Features for the room. */
  roomFeatures?: RoomFeaturesType;
  /** Indicates if room type is accessible. */
  accessible?: boolean;
  /**
   * Room type of the room.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Indicates whether function space can be meeting room. */
  meetingRoom?: boolean;
}

/** Possible Rate plan rating values. */
export enum RatePlanRatingType {
  MostImportant = 'MostImportant',
  Important = 'Important',
  SomewhatImportant = 'SomewhatImportant',
  LessImportant = 'LessImportant',
  LeastImportant = 'LeastImportant',
  NoValueSet = 'NoValueSet',
}

/**
 * Component of a room.
 * @maxItems 4000
 */
export type RoomComponentsType = RoomComponentType[];

/** Room component and its quantity for the component room type. */
export interface RoomComponentType {
  /** Quantity of room component for the component room type. */
  qty?: number;
  /**
   * Description of room component.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Collection of rooms assigned to the room type component. */
  rooms?: RoomRoomsType;
}

/**
 * Collection of rooms.
 * @maxItems 4000
 */
export type RoomRoomsType = RoomRoomType[];

/** This type represents the primary room attributes. */
export interface RoomRoomType {
  /** Room type basic information of the room. */
  roomType?: RoomTypeShortInfoType;
  /**
   * Floor of the Room.
   * @minLength 0
   * @maxLength 20
   */
  floor?: string;
  /**
   * Description for the Floor of the Room.
   * @minLength 0
   * @maxLength 20
   */
  floorDescription?: string;
  /** Room Features for the room. */
  roomFeatures?: RoomFeaturesType;
  /**
   * Detail Long Description Of The Room.
   * @minLength 0
   * @maxLength 20
   */
  roomDescription?: string;
  /** Description of the room. */
  description?: TranslationTextType2000;
  /**
   * This indicates room smoking preference.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreference?: string;
  /**
   * This indicates the description of the room smoking preference.
   * @minLength 0
   * @maxLength 20
   */
  smokingPreferenceDescription?: string;
  /**
   * Building associated with the room.
   * @minLength 0
   * @maxLength 20
   */
  building?: string;
  /** Assignment Rating associated with the room. */
  roomAssignmentRating?: RatePlanRatingType;
  /** Indicates whether the room is accessibility compliant. */
  accessible?: boolean;
  /**
   * Code of the room.
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /** Indicates whether the room is a Meeting Room */
  meetingRoom?: boolean;
  /** Code and description of condition assigned on the room. */
  roomCondition?: CodeDescriptionType;
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

/** Information regarding the credits for housekeeping tasks/rooms. */
export interface HousekeepingCreditsType {
  /** The Type of Credit. Example: TOTAL credits for the task sheet, total TRAVELLING credits for the task sheet. */
  type?: HousekeepingCreditsDefinitionType;
  /** Total number of Credits for the Type. */
  numberOfCredits?: number;
}

/** Type for the different kinds of Credits which will be used in Rooms Management. */
export enum HousekeepingCreditsDefinitionType {
  Departure = 'Departure',
  Pickup = 'Pickup',
  Turndown = 'Turndown',
  StayOver = 'StayOver',
  FacilityTask = 'FacilityTask',
  Travelling = 'Travelling',
  Total = 'Total',
}

export interface RoomSectionType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  daySectionCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  eveningSectionCode?: string;
}

/** Response object for fetching Room Potentials. */
export interface RoomPotentialsDetails {
  /** Collection of Room Potentials. */
  roomPotentials?: RoomPotentialsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Room Potentials.
 * @maxItems 4000
 */
export type RoomPotentialsType = RoomPotentialType[];

/** Contains Common Master configuration detail. */
export interface RoomPotentialType {
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
  /** Determines whether this code is inactive or not. */
  inactive?: boolean;
}

/** Request object for creating Room Potentials. */
export interface RoomPotentialsCriteria {
  /** Room Potentials to be created. */
  roomPotentials?: RoomPotentialsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Room Potentials. */
export interface RoomPotentialsToBeChanged {
  /** Room Potentials to be changed. */
  roomPotentials?: RoomPotentialsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for information regarding room type template of a property. */
export interface RoomTypeTemplatesDetails {
  /** Contains the results of a successful operation. */
  roomTypeTemplatesSummary?: RoomTypeTemplateSummaryType;
  /** Collection of Room Type Templates and their information. */
  roomTypeTemplates?: RoomTypeTemplateType;
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
 * This type holds collection of room type.
 * @maxItems 4000
 */
export type RoomTypeTemplateSummaryType = RoomTypeSummaryType[];

/**
 * This type holds collection of room type.
 * @maxItems 4000
 */
export type RoomTypeTemplateType = RoomTypeType[];

/** Request object for creating a new Room Type Template. */
export interface RoomTypeTemplatesCriteria {
  /** Room Type template details to be created. */
  roomTypeTemplate?: {
    /** Room Type template details to be created. */
    roomTypeTemplateDetails?: RoomTypeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for Modifying existing Room Type Templates. */
export interface RoomTypeTemplatesToBeChanged {
  /** Room Type template details to be changed. */
  roomTypeTemplate?: {
    /** Room Type template details to be changed. */
    roomTypeTemplateDetails?: RoomTypeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching floors at the template level. */
export interface TemplateFloorsDetails {
  /** Collection of floors specified at the template level. */
  templateFloors?: TemplateFloorsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * This type holds a collection of floors at the template level.
 * @maxItems 4000
 */
export type TemplateFloorsType = TemplateFloorType[];

/** Base details common between both template and hotel level floors. */
export interface TemplateFloorType {
  /**
   * Specifies the floor code.
   * @minLength 0
   * @maxLength 20
   */
  floor?: string;
  /**
   * Description for the floor.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Flag to indicate if this floor should be available on the Task Sheet Workflow configuration. */
  housekeeping?: boolean;
  /** Display sequence for the floor. */
  sequence?: number;
  /** Specifies whether the floor is to be available for selection at all hotels. */
  global?: boolean;
}

/** Request object for creating floors at the template level. */
export interface TemplateFloorsCriteria {
  /** Collection containing details of floors specified at the template level which have to be created. */
  templateFloors?: TemplateFloorsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing floors at the template level. */
export interface TemplateFloorsToBeChanged {
  /** Collection containing details of floors specified at the template level which have to be changed. */
  templateFloors?: TemplateFloorsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  public prerequest: Promise<any> = Promise.resolve();
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/rm/config/v1', axiosConfig.baseURL).toString() });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    // Wait for the prerequest to resolve before proceeding with the actual request. Useful for waiting for fetching auth tokens
    await this.prerequest;

    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title OPERA Cloud Room Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bedTypes = {
    /**
     * @description Use this API to return bed types based on search criteria such as fetchInactive, codes, wildCard, description.<p><strong>OperationId:</strong>getBedTypes</p>
     *
     * @tags ChainConfig
     * @name GetBedTypes
     * @summary Get bed types
     * @request GET:/bedTypes
     */
    getBedTypes: (
      hotelId: string,
      query?: {
        /** Determines wether to fetch inactive records or not. */
        fetchInactive?: boolean;
        /** Codes to be searched. */
        codes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Description of the code. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BedTypesDetails, ExceptionDetailType>({
        path: `/bedTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  hotels = {
    /**
     * @description Use this API to get housekeeping room schedules. <p><strong>OperationId:</strong>getHousekeepingRoomSchedules</p>
     *
     * @tags HotelConfig
     * @name GetHousekeepingRoomSchedules
     * @summary Get housekeeping room schedules
     * @request GET:/hotels/{hotelId}/housekeepingRoomSchedules
     */
    getHousekeepingRoomSchedules: (
      hotelId: string,
      query?: {
        roomTypeCodes?: string[];
        housekeepingRoomScheduleCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<HousekeepingRoomSchedulesDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingRoomSchedules`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create housekeeping room schedules. <p><strong>OperationId:</strong>postHousekeepingRoomSchedules</p>
     *
     * @tags HotelConfig
     * @name PostHousekeepingRoomSchedules
     * @summary Create housekeeping room schedules
     * @request POST:/hotels/{hotelId}/housekeepingRoomSchedules
     */
    postHousekeepingRoomSchedules: (
      hotelId: string,
      housekeepingRoomSchedulesCriteria: HousekeepingRoomSchedulesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingRoomSchedules`,
        method: 'POST',
        body: housekeepingRoomSchedulesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update housekeeping room schedules. <p><strong>OperationId:</strong>changeHousekeepingRoomSchedules</p>
     *
     * @tags HotelConfig
     * @name ChangeHousekeepingRoomSchedules
     * @summary Change housekeeping room schedules
     * @request PUT:/hotels/{hotelId}/housekeepingRoomSchedules/{roomScheduleId}
     */
    changeHousekeepingRoomSchedules: (
      roomScheduleId: string,
      hotelId: string,
      housekeepingRoomSchedulesToBeChanged: HousekeepingRoomSchedulesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingRoomSchedules/${roomScheduleId}`,
        method: 'PUT',
        body: housekeepingRoomSchedulesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get Housekeeping Sections. <p><strong>OperationId:</strong>getHousekeepingSections</p>
     *
     * @tags HotelConfig
     * @name GetHousekeepingSections
     * @summary Get Housekeeping Sections
     * @request GET:/hotels/{hotelId}/housekeepingSections
     */
    getHousekeepingSections: (
      hotelId: string,
      query?: {
        /** Indicates if the Section Code is active. */
        includeInactive?: boolean;
        housekeepingSectionsCodes?: string[];
        /** Description of the Section. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<HousekeepingSectionsDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingSections`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Housekeeping Sections. <p><strong>OperationId:</strong>postHousekeepingSections</p>
     *
     * @tags HotelConfig
     * @name PostHousekeepingSections
     * @summary Create Housekeeping Sections
     * @request POST:/hotels/{hotelId}/housekeepingSections
     */
    postHousekeepingSections: (
      hotelId: string,
      housekeepingSectionsCriteria: HousekeepingSectionsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingSections`,
        method: 'POST',
        body: housekeepingSectionsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Housekeeping Sections. <p><strong>OperationId:</strong>removeHousekeepingSections</p>
     *
     * @tags HotelConfig
     * @name RemoveHousekeepingSections
     * @summary Delete Housekeeping Sections
     * @request DELETE:/hotels/{hotelId}/housekeepingSections/{code}
     */
    removeHousekeepingSections: (code: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingSections/${code}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Housekeeping Sections. <p><strong>OperationId:</strong>changeHousekeepingSections</p>
     *
     * @tags HotelConfig
     * @name ChangeHousekeepingSections
     * @summary Change Housekeeping Sections
     * @request PUT:/hotels/{hotelId}/housekeepingSections/{code}
     */
    changeHousekeepingSections: (
      code: string,
      hotelId: string,
      housekeepingSectionsToBeChanged: HousekeepingSectionsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/housekeepingSections/${code}`,
        method: 'PUT',
        body: housekeepingSectionsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>getHotelRoomMaintenanceReasons</p>
     *
     * @tags HotelConfig
     * @name GetHotelRoomMaintenanceReasons
     * @summary Get Hotel Room Maintenance Reasons
     * @request GET:/hotels/{hotelId}/roomMaintenanceReasons
     */
    getHotelRoomMaintenanceReasons: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Codes to be searched. */
        roomMaintenanceReasonCodes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Inactive flag - whether or not to display inactive records */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<HotelRoomMaintenanceReasonsDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomMaintenanceReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>postHotelRoomMaintenanceReasons</p>
     *
     * @tags HotelConfig
     * @name PostHotelRoomMaintenanceReasons
     * @summary Create Hotel Room Maintenance Reasons
     * @request POST:/hotels/{hotelId}/roomMaintenanceReasons
     */
    postHotelRoomMaintenanceReasons: (
      hotelId: string,
      hotelRoomMaintenanceReasonsCriteria: HotelRoomMaintenanceReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomMaintenanceReasons`,
        method: 'POST',
        body: hotelRoomMaintenanceReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>changeHotelRoomMaintenanceReasons</p>
     *
     * @tags HotelConfig
     * @name ChangeHotelRoomMaintenanceReasons
     * @summary Change Hotel Room Maintenance Reasons
     * @request PUT:/hotels/{hotelId}/roomMaintenanceReasons/{reasonCode}
     */
    changeHotelRoomMaintenanceReasons: (
      reasonCode: string,
      hotelId: string,
      hotelRoomMaintenanceReasonsToBeChanged: HotelRoomMaintenanceReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomMaintenanceReasons/${reasonCode}`,
        method: 'PUT',
        body: hotelRoomMaintenanceReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>removeHotelRoomMaintenanceReasons</p>
     *
     * @tags HotelConfig
     * @name RemoveHotelRoomMaintenanceReasons
     * @summary Delete Hotel Room Maintenance Reasons
     * @request DELETE:/hotels/{hotelId}/roomMaintenanceReasons/{reasonCode}
     */
    removeHotelRoomMaintenanceReasons: (reasonCode: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomMaintenanceReasons/${reasonCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete housekeeping room schedules. <p><strong>OperationId:</strong>removeHousekeepingRoomSchedules</p>
     *
     * @tags HotelConfig
     * @name RemoveHousekeepingRoomSchedules
     * @summary Delete housekeeping room schedules
     * @request DELETE:/hotels/{hotelId}/roomTypeCodes/{roomTypeCode}/housekeepingRoomSchedules/{roomScheduleId}
     */
    removeHousekeepingRoomSchedules: (
      roomScheduleId: string,
      roomTypeCode: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomTypeCodes/${roomTypeCode}/housekeepingRoomSchedules/${roomScheduleId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to return room types for a specific property based on search criteria such as roomClassCodes, roomTypeCodes, physical, pseudo, etc.<p><strong>OperationId:</strong>getRoomTypes</p>
     *
     * @tags HotelConfig
     * @name GetRoomTypes
     * @summary Get hotel room types
     * @request GET:/hotels/{hotelId}/roomTypes
     */
    getRoomTypes: (
      hotelId: string,
      query?: {
        /** Flag to indicate if accessible room type should be fetched. */
        accessible?: boolean;
        /** Flag to indicate if inactive room types should be included. */
        includeInactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Is it a physical sleep room type. */
        physical?: boolean;
        /** Is it a pseudo room type. */
        pseudo?: boolean;
        /** Flag to indicate if summary or detailed information should be fetched. */
        summaryInfo?: boolean;
        roomTypeCodes?: string[];
        roomClassCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomTypesDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create new room types for a property. A list of new room types can be passed as part of the request to Use this API to create multiple rooms in one request. <p><strong>OperationId:</strong>postRoomTypes</p>
     *
     * @tags HotelConfig
     * @name PostRoomTypes
     * @summary Create a new room type
     * @request POST:/hotels/{hotelId}/roomTypes
     */
    postRoomTypes: (hotelId: string, roomTypesCriteria: RoomTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomTypes`,
        method: 'POST',
        body: roomTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update a Room Type from a property. A list of room types that need to be modified can also passed as part of the request. <p><strong>OperationId:</strong>putRoomTypes</p>
     *
     * @tags HotelConfig
     * @name PutRoomTypes
     * @summary Update a Room Type
     * @request PUT:/hotels/{hotelId}/roomTypes/{roomTypeId}
     */
    putRoomTypes: (
      roomTypeId: string,
      hotelId: string,
      roomTypesToBeChanged: RoomTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomTypes/${roomTypeId}`,
        method: 'PUT',
        body: roomTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete a Room Type from a property. <p><strong>OperationId:</strong>deleteRoomTypes</p>
     *
     * @tags HotelConfig
     * @name DeleteRoomTypes
     * @summary Delete Room Types
     * @request DELETE:/hotels/{hotelId}/roomTypes/{roomTypeId}
     */
    deleteRoomTypes: (
      roomTypeId: string,
      hotelId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        roomType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomTypes/${roomTypeId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to return rooms for a specific property based on search criteria such as roomClassCodes, roomTypeCodes, room, etc.<p><strong>OperationId:</strong>getRooms</p>
     *
     * @tags HotelConfig
     * @name GetRooms
     * @summary Get hotel rooms
     * @request GET:/hotels/{hotelId}/rooms
     */
    getRooms: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Is it a physical room type. */
        physical?: boolean;
        /** Is it a pseudo room type. */
        pseudo?: boolean;
        roomClassCodes?: string[];
        roomTypeCodes?: string[];
        /** Room to be searched. */
        room?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomsDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/rooms`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  roomPotentials = {
    /**
     * @description Use this API to get Room Potentials. <p><strong>OperationId:</strong>getRoomPotentials</p>
     *
     * @tags ChainConfig
     * @name GetRoomPotentials
     * @summary Get Room Potentials
     * @request GET:/roomPotentials
     */
    getRoomPotentials: (
      hotelId: string,
      query?: {
        /** Determines wether to fetch inactive records or not. */
        fetchInactive?: boolean;
        /** Codes to be searched. */
        codes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Description of the code. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomPotentialsDetails, ExceptionDetailType>({
        path: `/roomPotentials`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Room Potentials. <p><strong>OperationId:</strong>postRoomPotentials</p>
     *
     * @tags ChainConfig
     * @name PostRoomPotentials
     * @summary Create Room Potentials
     * @request POST:/roomPotentials
     */
    postRoomPotentials: (
      hotelId: string,
      roomPotentialsCriteria: RoomPotentialsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomPotentials`,
        method: 'POST',
        body: roomPotentialsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Room Potentials. <p><strong>OperationId:</strong>putRoomPotentials</p>
     *
     * @tags ChainConfig
     * @name PutRoomPotentials
     * @summary Change Room Potentials
     * @request PUT:/roomPotentials/{roomPotentialsId}
     */
    putRoomPotentials: (
      hotelId: string,
      roomPotentialsId: string,
      roomPotentialsToBeChanged: RoomPotentialsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomPotentials/${roomPotentialsId}`,
        method: 'PUT',
        body: roomPotentialsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Room Potentials. <p><strong>OperationId:</strong>deleteRoomPotentials</p>
     *
     * @tags ChainConfig
     * @name DeleteRoomPotentials
     * @summary Delete Room Potentials
     * @request DELETE:/roomPotentials/{roomPotentialsId}
     */
    deleteRoomPotentials: (
      hotelId: string,
      roomPotentialsId: string,
      query?: {
        roomPotentialsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomPotentials/${roomPotentialsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  roomTypes = {
    /**
     * @description This API accepts the room type template request search criteria and gets the Room Type templates. <p><strong>OperationId:</strong>getRoomTypeTemplates</p>
     *
     * @tags HotelConfig
     * @name GetRoomTypeTemplates
     * @summary Get Room Type Templates
     * @request GET:/roomTypes
     */
    getRoomTypeTemplates: (
      hotelId: string,
      query?: {
        /** Include inactive Room type in search result? */
        includeInactive?: boolean;
        /**
         * Is it a physical sleep room type.
         * @default "false"
         */
        physical?: boolean;
        /**
         * Is it a pseudo room type.
         * @default "false"
         */
        pseudo?: boolean;
        summaryInfo?: boolean;
        roomTypeCodes?: string[];
        roomClassCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomTypeTemplatesDetails, ExceptionDetailType>({
        path: `/roomTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API is used to Use this API to create new Room Type templates. <p><strong>OperationId:</strong>postRoomTypeTemplates</p>
     *
     * @tags HotelConfig
     * @name PostRoomTypeTemplates
     * @summary Create Room Type Templates
     * @request POST:/roomTypes
     */
    postRoomTypeTemplates: (
      hotelId: string,
      roomTypeTemplatesCriteria: RoomTypeTemplatesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomTypes`,
        method: 'POST',
        body: roomTypeTemplatesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API is used to update a Room Type template. Use this API to updates can be made concurrently to multiple templates by passing Collection of Room Type templates with the new values. <p><strong>OperationId:</strong>putRoomTypeTemplates</p>
     *
     * @tags HotelConfig
     * @name PutRoomTypeTemplates
     * @summary Change Room Type Templates
     * @request PUT:/roomTypes/{roomTypeTemplatesId}
     */
    putRoomTypeTemplates: (
      hotelId: string,
      roomTypeTemplatesId: string,
      roomTypeTemplatesToBeChanged: RoomTypeTemplatesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomTypes/${roomTypeTemplatesId}`,
        method: 'PUT',
        body: roomTypeTemplatesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete new Room Type templates. <p><strong>OperationId:</strong>deleteRoomTypeTemplates</p>
     *
     * @tags HotelConfig
     * @name DeleteRoomTypeTemplates
     * @summary Delete new Room Type templates
     * @request DELETE:/roomTypes/{roomTypeTemplatesId}
     */
    deleteRoomTypeTemplates: (
      hotelId: string,
      roomTypeTemplatesId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        roomType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/roomTypes/${roomTypeTemplatesId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  templateFloors = {
    /**
     * @description Use this API to get template floors. <p><strong>OperationId:</strong>getTemplateFloors</p>
     *
     * @tags HotelConfig
     * @name GetTemplateFloors
     * @summary Get template floors
     * @request GET:/templateFloors
     */
    getTemplateFloors: (
      hotelId: string,
      query?: {
        floors?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<TemplateFloorsDetails, ExceptionDetailType>({
        path: `/templateFloors`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create template floors. <p><strong>OperationId:</strong>postTemplateFloors</p>
     *
     * @tags HotelConfig
     * @name PostTemplateFloors
     * @summary Create template floors
     * @request POST:/templateFloors
     */
    postTemplateFloors: (
      hotelId: string,
      templateFloorsCriteria: TemplateFloorsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/templateFloors`,
        method: 'POST',
        body: templateFloorsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update template floors. <p><strong>OperationId:</strong>changeTemplateFloors</p>
     *
     * @tags HotelConfig
     * @name ChangeTemplateFloors
     * @summary Change template floors
     * @request PUT:/templateFloors/{templateFloorsId}
     */
    changeTemplateFloors: (
      hotelId: string,
      templateFloorsId: string,
      templateFloorsToBeChanged: TemplateFloorsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/templateFloors/${templateFloorsId}`,
        method: 'PUT',
        body: templateFloorsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete template floors. <p><strong>OperationId:</strong>removeTemplateFloors</p>
     *
     * @tags HotelConfig
     * @name RemoveTemplateFloors
     * @summary Delete template floors
     * @request DELETE:/templateFloors/{templateFloorsId}
     */
    removeTemplateFloors: (hotelId: string, templateFloorsId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/templateFloors/${templateFloorsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
