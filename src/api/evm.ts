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

/** Response object for fetching events. */
export interface Events {
  /** Events matching the search criteria. */
  eventSummaries?: EventSummariesInfoType;
  /** Refer to Generic common types document */
  masterInfoList?: MasterInfoType[];
  links?: Links;
  /** Used in conjunction with the Success elementSpace to define a business error. */
  warnings?: WarningsType;
}

/** Collection of events. */
export interface EventSummariesInfoType {
  /**
   * Contains master/sub-events or standalone events summary information
   * @maxItems 4000
   */
  eventSummary?: EventSummaryInfoType[];
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
}

/** Contains information about an event. */
export interface EventSummaryInfoType {
  /** Unique identifier of the event. */
  eventId?: EventId;
  /** Link information with other event(s). */
  eventLink?: CateringEventLinkType;
  /** Unique ID to represent the block that the event belongs to. */
  blockIdList?: BlockIdList;
  /**
   * Name of the block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** Number of event attendees. */
  attendees?: number;
  /** The function space functionSpaceDetails where the event takes place. */
  functionSpaceDetails?: CodeDescriptionType;
  /** Rental amount for the event function space. */
  rentalAmount?: number;
  /** Setup Style selected for the Function Space. */
  functionSpaceSetup?: CodeDescriptionType;
  /** Indicators for additional event information. */
  indicators?: IndicatorsType;
  /** Status of the event. Examples are INQ, TEN, DEF, etc. */
  eventStatus?: BookingStatusType;
  /** This is to show the turned status of an event */
  waitlistReturnStatus?: BookingStatusType;
  /** Event Status Type Flag to identify if the Catering event is cancelled, lost, actual, etc. Examples are C(Cancelled), L (Lost), R (Refused), A (Actual). */
  cateringStatusType?: CateringStatusTypeType;
  /** Flag to indicate if the Catering event deducts resources from inventory. */
  cateringStatusDeductInventory?: boolean;
  /** Flag to indicate if the Catering event returns resources to inventory. */
  cateringStatusReturnToInventory?: boolean;
  /** Event space setupCode time in minutes. */
  setupTime?: number;
  /** Event space tear down time in minutes. */
  tearDownTime?: number;
  /** Flag to indicate if the event is a master event. */
  masterEvent?: boolean;
  /** Flag to indicate if the event is a sub event. */
  subEvent?: boolean;
  /** Flag to indicate if the event is part of a package. */
  packageEvent?: boolean;
  /** Flag to indicate if the event is booked as a backup for another event. */
  alternateEvent?: boolean;
  /** Flag to indicate if the doorcard has been selected to display on reports or external readerboard systems. */
  displayDoorCard?: boolean;
  /**
   * The doorcard to be displayed on reports or external readerboard systems.
   * @minLength 0
   * @maxLength 60
   */
  doorCard?: string;
  /** Flag to indicate if the event revenue should be excluded from the forecast. */
  excludeFromForecast?: boolean;
  /** Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event. */
  useForecastRevenue?: boolean;
  /**
   * Setup style code.
   * @minLength 0
   * @maxLength 20
   */
  setupCode?: string;
  /** Minimum Occupancy for the SetupCode of Catring Event. */
  minimumOccupancy?: number;
  /** Maximum Occupancy for the SetupCode of Catring Event. */
  maximumOccupancy?: number;
  /**
   * Discount Percentage applied to Rent Amount.
   * @min 0
   * @max 100
   */
  discountPercentage?: number;
  /** Indicates whether the event is expected to be noisy and might possibly disturb other events. */
  loudEvent?: boolean;
  /**
   * Rate Code for function space.
   * @minLength 0
   * @maxLength 20
   */
  rentalCode?: string;
  /** Flag to indicate if the event is shareable with other events. */
  eventShared?: boolean;
  /** Flag to indicate if the event functionSpaceDetails is shareable. */
  shareable?: boolean;
  /**
   * Inactivation date of the event.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /**
   * Package Code of the Event if it has a Package Enabled in it.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /**
   * Package Name of the Event.
   * @minLength 0
   * @maxLength 200
   */
  packageName?: string;
  /**
   * Hotel where the event is booked.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Hotel where the Block is created for the event.
   * @minLength 0
   * @maxLength 20
   */
  blockHotelCode?: string;
  /** Indicates whether the event has postings. */
  hasPostings?: boolean;
  /** Indicates whether any event in the block has postings. */
  blockHasPostings?: boolean;
  /** Indicates whether the event has posted some charges, but not all. */
  hasPartialPostings?: boolean;
  /** Indicates whether the event has posted all charges. */
  allPosted?: boolean;
  /** Indicates that none of the charges on the event have been posted. */
  nothingPosted?: boolean;
  /**
   * The starting value of the time span.
   * @format date-time
   */
  eventStartDate?: string;
  /**
   * The ending value of the time span.
   * @format date-time
   */
  eventEndDate?: string;
  /**
   * Type of event. Examples are LUN, DIN, etc.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Name of event. This is used to describe the event.
   * @minLength 0
   * @maxLength 60
   */
  eventName?: string;
  /**
   * Currency code when base currency of the property is different than the catering currency.
   * @minLength 3
   * @maxLength 3
   */
  cateringCurrency?: string;
  /**
   * Currency code which is been quoted for Catering Events
   * @minLength 3
   * @maxLength 3
   */
  cateringQuotedCurrency?: string;
  /** Indicators of additional information attached to the event */
  eventIndicators?: IndicatorsType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface EventId {
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
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
}

export interface CateringEventLinkType {
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  id?: UniqueIDType;
  /** A collection of supported list of link types for catering events. */
  type?: CateringEventLinkTypeType;
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date. */
  masterEventDates?: DateTimeSpanType;
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
   * A reference to the type of object defined by the UniqueID elementSpace.
   * @minLength 0
   * @maxLength 40
   */
  type?: string;
}

/** A collection of supported list of link types for catering events. */
export enum CateringEventLinkTypeType {
  SubEvent = 'SubEvent',
  Alternate = 'Alternate',
}

/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date. */
export interface DateTimeSpanType {
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type BlockIdList = UniqueIDType[];

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

/** Booking status code, description and configured color of the status. This will be used for block and event statuses. */
export interface BookingStatusType {
  /** Status code and description. */
  status?: CodeDescriptionType;
  /** Color from status configuration. */
  color?: StatusColorType;
}

/** Status code color configuration type. */
export enum StatusColorType {
  White = 'White',
  Red = 'Red',
  Blue = 'Blue',
  Cyan = 'Cyan',
  Magenta = 'Magenta',
  Green = 'Green',
  Brown = 'Brown',
  Black = 'Black',
  Yellow = 'Yellow',
  Gray = 'Gray',
}

/** List of Event Status Types to identify the current status of catering events. */
export enum CateringStatusTypeType {
  Waitlist = 'Waitlist',
  Regret = 'Regret',
  Inquiry = 'Inquiry',
  Cancel = 'Cancel',
  Actual = 'Actual',
  Referral = 'Referral',
  Lost = 'Lost',
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

export enum MasterInfoCodeDetailType {
  LongDescription = 'LongDescription',
  ShortDescription = 'ShortDescription',
}

export enum MasterType {
  Country = 'Country',
  State = 'State',
  AddressType = 'AddressType',
  PhoneType = 'PhoneType',
  RateCategory = 'RateCategory',
  CalculationRule = 'CalculationRule',
  PostingRythym = 'PostingRythym',
  BillingInstruction = 'BillingInstruction',
  TransactionCode = 'TransactionCode',
  DisplaySet = 'DisplaySet',
  MailingActions = 'MailingActions',
  DistanceType = 'DistanceType',
  District = 'District',
  Territory = 'Territory',
  FiscalRegion = 'FiscalRegion',
  InventoryItem = 'InventoryItem',
  Package = 'Package',
  RoomFeaturePreference = 'RoomFeaturePreference',
  SpecialPreference = 'SpecialPreference',
  Promotion = 'Promotion',
  Department = 'Department',
  ReservationPreference = 'ReservationPreference',
  FacilityTask = 'FacilityTask',
  RoomType = 'RoomType',
  RateCode = 'RateCode',
  OutOfOrderReason = 'OutOfOrderReason',
  Block = 'Block',
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
 * Used in conjunction with the Success elementSpace to define a business error.
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
   * The Warning elementSpace MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
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
  /** Application error code, which is different from HTTP error code. */
  'o:errorCode'?: string;
  /** Path to the problem at the resource or property level. */
  'o:errorPath'?: string;
}

/** Object containing details of the event. */
export interface Event {
  /** Event information. */
  eventDetails?: EventsInfoType;
  links?: Links;
  /** Used in conjunction with the Success elementSpace to define a business error. */
  warnings?: WarningsType;
}

/**
 * Pertain event information.
 * @maxItems 4000
 */
export type EventsInfoType = EventInfoType[];

/** Catering Event information. */
export interface EventInfoType {
  /** Pertain event primary information. */
  eventPrimaryInfo?: EventPrimaryInfoType;
  /** Pertain detail event's information. */
  eventDetail?: EventDetailType;
  /** Pertain detail event's information. */
  eventResources?: EventResourcesListType;
  /** Instructions to control how the event is created. */
  processInstructions?: EventProcessInstructionsType;
  /** Pertain information for block where event belongs to. */
  eventBlockInfo?: BlockType;
  /** Pertain event's function space information. */
  functionSpaceInformation?: EventFunctionSpaceType;
  /** Pertain event's notes. */
  eventNotes?: EventNotesType;
  /** Indicators of additional information attached to the event */
  eventIndicators?: IndicatorsType;
  /** On The Books (OTB) catering revenue for the event. */
  onTheBooksRevenue?: CurrencyAmountType;
  /** Pertain detail information of sub event/events. */
  subEventsDetail?: LightEventsDetailType;
  /** Pertain detail information of alternate event/events in case functionspace for current event becomes unavailable */
  altEventsDetail?: LightEventsDetailType;
  /** Pertain detail information of master event. */
  masterEventDetail?: LightEventDetailType;
  /** Pertain event revenues. */
  eventRevenues?: EventRevenuesInformationType;
}

/** Pertain event identifications. */
export interface EventPrimaryInfoType {
  /** Unique identifier for the event. */
  eventId?: EventId;
  /**
   * Hotel code where event will be organized.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Indicates whether to delete/inactive the sub event(s) of the master event. */
  includeSubEvents?: boolean;
}

/** Pertain Information about the Event Details */
export interface EventDetailType {
  /** Name of event. */
  eventName?: TranslationTextType60;
  /**
   * Type of event.
   * @minLength 0
   * @maxLength 20
   */
  eventType?: string;
  /** Pertain event duration from eventStartDate and eventEndDate date and time. */
  eventTimeSpan?: DateTimeSpanType;
  /** Status details of the Event. */
  eventStatus?: BookingStatusType;
  /** This is to show the turned status of an event */
  waitlistReturnStatus?: BookingStatusType;
  /** Event Status Type Flag to identify if the Catering event is cancelled or lost. Examples are C(Cancelled), L (Lost), R (Refused). */
  cateringStatusType?: CateringStatusTypeType;
  /** Attendees defined in the catering event. */
  attendees?: CateringEventsAttendeesType;
  /** Master event identifier. */
  masterEventId?: UniqueIDType;
  /**
   * It is the group details to display on the outside of a meeting functionSpaceDetails.
   * @minLength 0
   * @maxLength 50
   */
  doorcard?: string;
  /** Link information with other event(s). */
  eventLink?: CateringEventLinkType;
  /**
   * Inactivation date of the event.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /** Package Id of the Event. */
  packageId?: number;
  /**
   * Package Name of the Event.
   * @minLength 0
   * @maxLength 200
   */
  packageName?: string;
  /** Indicates whether event is master event. */
  masterEvent?: boolean;
  /** Flag to indicate if the event is a sub event. */
  subEvent?: boolean;
  /** Flag to indicate if the event is part of a package. */
  packageEvent?: boolean;
  /** Flag to indicate if the event is booked as a backup for another event. */
  alternateEvent?: boolean;
  /** Indicates whether event is wait listed. */
  waitlisted?: boolean;
  /** Indicates whether event dates and functionSpaceDetails are move able. */
  notMoveable?: boolean;
  /** Indicates whether the event is expected to be noisy and might possibly disturb other events. */
  loudEvent?: boolean;
  /** Indicates whether the events has postings. */
  hasPostings?: boolean;
  /** Indicates whether display the doorcard information on the Event Overview report. */
  displayDoorcard?: boolean;
  /** Indicates if catering event's spaces are deducted from inventory */
  cateringDeductInventory?: boolean;
  /** Flag to indicate if the event is shareable with other events. */
  eventShared?: boolean;
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
  /** Flag to indicate if the event space is associated from the Package */
  includeSpaceInPackage?: boolean;
  /** Flag that indicates if actual revenue can be manually edited. */
  eventLevelRevenueActualization?: boolean;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType60 {
  /**
   * Default text with Character length from 0 to 60.
   * @minLength 0
   * @maxLength 60
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translations?: TranslationsTextType;
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

/** All different attendees that a catering event can have. */
export interface CateringEventsAttendeesType {
  /** Number of expected attendees for the catering event. */
  expected?: number;
  /** Number of guaranteed attendees for the catering event. */
  guaranteed?: number;
  /** Number of actual attendees attending to the catering event. */
  actual?: number;
  /** Setup for number of event attendees for resources (i.e. water, pads, tables, etc.). */
  set?: number;
  /** This defines the count of billed attendees with respect to the menu. */
  billed?: number;
  /** Number of package expected attendees for the catering event. */
  packageExpected?: number;
  /** Number of package guaranteed attendees for the catering event. */
  packageGuaranteed?: number;
  /** Number of actual package attendees attending the catering event. */
  packageActual?: number;
  /** This defines the count of package billed attendees with respect to the menu. */
  packageBilled?: number;
}

/**
 * Event resources information.
 * @maxItems 4000
 */
export type EventResourcesListType = CateringEventResourceType[];

/** Event resource information. */
export interface CateringEventResourceType {
  /** Unique identifier for an event resource. */
  resourceId?: ResourceId;
  /** Type of event resource. */
  resourceType?: ResourceType;
  /**
   * Resource name, this could be a resource item or a menu.
   * @minLength 0
   * @maxLength 200
   */
  resourceName?: string;
  /**
   * Setup style for the function space.
   * @minLength 0
   * @maxLength 20
   */
  setupCode?: string;
  /**
   * Item attribute name for non Food and Beverage item.
   * @minLength 0
   * @maxLength 200
   */
  itemAttribute?: string;
  /** The required quantity of the resource. */
  quantity?: number;
  /** The number of charged hours for the resource. */
  hours?: number;
  /** The number of charged persons for the resource. */
  persons?: number;
  /** The attendees/quantity of an item INCLUDED in a package price. */
  quantityIncluded?: number;
  /** The attendees/quantity charged extra, EXCLUDED from the package price. */
  quantityExcluded?: number;
  /** Price per unit of the resource. */
  unitPrice?: CurrencyAmountType;
  /** Total revenue on the books. */
  revenue?: CurrencyAmountType;
  /**
   * Rate Code that is attached to the function spaces and non Food and Beverage items
   * @minLength 0
   * @maxLength 20
   */
  rentalCode?: string;
  /** The menu discount percentage. */
  discount?: number;
  /** Pertains to the event resource's notes. */
  eventResourceNotes?: EventResourceNotesType;
  /**
   * Sell Start Date of resource of type Menu.
   * @format date
   * @maxLength 8
   */
  sellStartDate?: string;
  /**
   * Sell End Date of resource of type Menu.
   * @format date
   * @maxLength 8
   */
  sellEndDate?: string;
  /**
   * Event Start Date of resource of type Menu.
   * @format date
   * @maxLength 8
   */
  eventStartDate?: string;
  /**
   * Event End Date of resource of type Menu.
   * @format date
   * @maxLength 8
   */
  eventEndDate?: string;
  /** Indicates that this resource is consumption based in a catering package */
  consumptionBased?: boolean;
  /** Indicates that this resource is a MultiChoice Menu or not */
  multiChoice?: boolean;
  /**
   * Hotel code which the event resource belong to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The order of the resource in the Banquet Event Order within their specific resource group. */
  order?: string;
  /** Flag that indicates if at least one menu item has a discount. */
  hasDiscountMenuItem?: boolean;
  /** Flag that indicates the resource has notes associated with it. */
  hasNotes?: boolean;
  /** Indicates that item must be ordered externally. */
  external?: boolean;
  /** Indicates that this resource item is a custom item added for this event. */
  custom?: boolean;
  /** Indicates that this resource is included in a catering package. */
  packaged?: boolean;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ResourceId {
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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

/** List of resource types. */
export enum ResourceType {
  FunctionSpace = 'FunctionSpace',
  Menu = 'Menu',
  Item = 'Item',
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

/**
 * Contains event resource comment information.
 * @maxItems 4000
 */
export type EventResourceNotesType = EventResourceNoteType[];

/** Contains the event resource's comment information. */
export interface EventResourceNoteType {
  /** Unique identifier for event resource comment. If it is missing, this indicate that it is a new comment. If only NoteID is provided then it is a delete operation */
  noteId?: UniqueIDType;
  /**
   * Note code.
   * @minLength 0
   * @maxLength 20
   */
  noteCode?: string;
  /** Indicates if the comment is internal use only. */
  internal?: boolean;
  /**
   * Contains comment title.
   * @minLength 0
   * @maxLength 200
   */
  noteTitle?: string;
  /**
   * Contains comment text.
   * @minLength 0
   * @maxLength 2000
   */
  comment?: string;
  /** Contains display sequence. */
  sequence?: number;
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

/** Instructions to control how the event is created. */
export interface EventProcessInstructionsType {
  /** Flag to indicate if configured function space capacity can be overriden. */
  overrideCapacity?: boolean;
  /** Flag to indicate if the function space can be booked when it is occupied by another event. */
  overbook?: boolean;
  /** Flag to indicate if the function space can be booked as shareable with another event. */
  shareable?: boolean;
  /** Flag to indicate if maximum group configured in function space can be overriden. */
  overrideMaxgroups?: boolean;
  /** Flag to indicate if the event can be waitlisted when function space is not available. */
  waitList?: boolean;
  /** Flag to return a warning when the functionspace is being used by other catering event. */
  warnFunctionSpace?: boolean;
  /** Flag to indicate that the Event is being converted from Regular Event as a Sub Event linking to a Master Event. */
  convertToSubEvent?: boolean;
  /** Flag to indicate that the Event is being converted from Sub Event as a Regular Event. */
  convertToRegularEvent?: boolean;
  /** Flag to indicate that both Block and Event would be created as part of the Quick Event process. */
  quickEvent?: boolean;
}

export interface BlockType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /** External Reference information for Reservation. */
  externalReferences?: ExternalReferencesType;
  /** Detailed Block information for this block. */
  blockDetails?: BlockDetailsType;
  /** Criteria to assign the owners of a business block. */
  blockOwners?: BlockOwnersType;
  /** Details of catering Information for the Block. */
  catering?: CateringType;
  /** A collection of all the profiles associated to this block. Please comment that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time. */
  blockProfiles?: {
    /**
     * The list of profiles associated with the block.
     * @maxItems 4000
     */
    blockProfile?: BlockProfilesType[];
    /** Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided. */
    fullOverlay?: boolean;
  };
  /** A collection of inventory items attached to a block. */
  inventoryItems?: BlockInventoryItemsType;
  /** Indicates the functionSpaceDetails and revenue statistics of the block. */
  blockStatistics?: BlockStatisticsType;
  /** List of notes for the Block. */
  comments?: {
    /** @maxItems 4000 */
    commentInfo?: CommentInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Indicators of additional information attached to the block */
  blockIndicators?: IndicatorsType;
  /** List of block traces. */
  traces?: BlockTracesType;
  /**
   * Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc.
   * @maxItems 3
   */
  statistics?: BlockStatisticsSummaryType[];
  /** Block security information used for an external system. Only available if configured in OPERA Cloud. */
  blockSecurity?: {
    /** Secured from DI Display. */
    securedFromDIdisplayYn?: boolean;
    /** All Description DD Secured. */
    allDescriptionDDSecuredYn?: boolean;
    /** Rates Secured from GNR. */
    ratesSecuredfromGNRYn?: boolean;
    /** Rates Secured from All Displays. */
    ratesSecuredfromAllDisplaysYn?: boolean;
    /** Housing Information Secured. */
    housingInformationSecuredYn?: boolean;
  };
  /** List of sell messages for the Block. */
  sellMessages?: SellMessageConfigsType;
  /** List of attachments for the Block. */
  attachments?: AttachmentsType;
  /** List of wash schedules for the Block. */
  washSchedules?: BlockWashSchedulesType;
  /** List of restrictions for the Block. */
  restrictions?: BlockRestrictionsType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Mark this block as recently accessed. */
  markAsRecentlyAccessed?: boolean;
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
}

/**
 * This type contains unique information of external reference.
 * @maxItems 4000
 */
export type ExternalReferencesType = ExternalReferenceType[];

/** This type contains unique information of external reference. */
export interface ExternalReferenceType {
  /**
   * Unique ID of external reference.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /** ID extension for external reference. */
  idExtension?: number;
  /**
   * ID context for external reference.
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
}

/** Information about the Block Details */
export interface BlockDetailsType {
  /**
   * Block code for the block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * Name of the block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** The Time Span(Arrival, Departure) which covers the Block Span. */
  blockDates?: TimeSpanType;
  /** The Shoulder Dates (Arrival, Departure) which covers the Block Shoulder Span. */
  shoulderDates?: TimeSpanType;
  /** Current status of the block. */
  blockStatus?: BookingStatusDetailType;
  /** Reservation Type info of the block. */
  reservationType?: ReservationTypeInfoType;
  /** Market code info of the block. */
  marketCode?: MarketCodeInfoType;
  /** Point of Sale of block. Identifies the entity/channel who made the block reservation. */
  sourceOfSale?: BlockSourceOfSaleType;
  /** Business Block Type field on the Business Block */
  bookingType?: CodeDescriptionType;
  /**
   * Internal status for the block.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Internal type of the block.
   * @minLength 0
   * @maxLength 20
   */
  blockType?: string;
  /**
   * Indicates the likelihood description of the block moving to the next active block status.
   * @minLength 0
   * @maxLength 20
   */
  conversionCode?: string;
  /**
   * Indicates the likelihood of the block moving to the next active block status.
   * @minLength 0
   * @maxLength 2000
   */
  conversionCodeDescription?: string;
  /** Indicates the Rate Protection details for the block. */
  rateProtectionDetails?: BlockRateProtectionType;
  /** Indicates the non-competing industry details. */
  nonCompeteDetails?: BlockNonCompeteType;
  /**
   * Indicates the ranking of the block.
   * @minLength 0
   * @maxLength 20
   */
  rankingCode?: string;
  /**
   * Indicates the ranking description of the block.
   * @minLength 0
   * @maxLength 2000
   */
  rankingCodeDescription?: string;
  /**
   * Currency Code attached to the business block.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /**
   * A text field used to communicate the proper name of the hotel.
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /** Indicate Block Classification. */
  blockClassification?: BlockClassificationType;
  /** Primary owners for the block. */
  primaryOwners?: {
    /** Primary Block Owner */
    blockOwner?: BlockOwnerType;
    /** Primary Rooms Owner */
    roomsOwner?: BlockOwnerType;
    /** Primary Catering Owner */
    cateringOwner?: BlockOwnerType;
    /** Total number of Block Owners. */
    blockOwnerCount?: number;
    /** Total number of Rooms Owners. */
    roomsOwnerCount?: number;
    /** Total number of Catering Owners. */
    cateringOwnerCount?: number;
  };
  /** Primary account and contact for the block. */
  primaryProfiles?: {
    /** Primary Account */
    account?: BlockProfilesType;
    /** Primary Contact */
    contact?: BlockProfilesType;
    /** The primary profile image. If primary contact exists, Contact Image, otherwise primary Account Image */
    image?: ImageSetType;
  };
  /** Indicates if this is a catering only block. */
  cateringOnlyBlock?: boolean;
  /** Indicates if alternate dates are allowed for the booking. */
  flexibleDates?: boolean;
  /** Indicates if the block is locked by an external system. */
  externalLocked?: boolean;
}

/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date. */
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

/** Booking Status details of the business block. */
export interface BookingStatusDetailType {
  /** Booking Status of the business block. */
  bookingStatus?: BookingStatusType;
  /** Indicates if blocked rooms are deducted from inventory. */
  deductInventory?: boolean;
  /** Indicates if catering event's spaces are deducted from inventory */
  cateringDeductInventory?: boolean;
  /** Indicates if blocked rooms will be returned to availability or not. */
  returnToInventory?: boolean;
  /** Indicates status type Inquiry, Actual, Cancel, etc. */
  statusType?: BlockStatusTypeType;
  /** Indicates status type Inquiry, Actual, Cancel, etc. */
  catStatusType?: BlockStatusTypeType;
}

/** Simple type for specifying the block status type. */
export enum BlockStatusTypeType {
  Inquiry = 'Inquiry',
  Actual = 'Actual',
  Waitlist = 'Waitlist',
  Cancel = 'Cancel',
  Referral = 'Referral',
}

export interface ReservationTypeInfoType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  reservationType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
}

export interface MarketCodeInfoType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  marketGroup?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
}

/** Point of Sale of Block. Identifies the entity/channel who made the block reservation. */
export interface BlockSourceOfSaleType {
  /** Identifies how this block came into the property. */
  sourceCode?: SourceCodeInfoType;
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

/** Block Rate Protection code information. */
export interface BlockRateProtectionType {
  /** Indicates the type of rate protection. 'All' means all dates are rate protected. 'None' specifies no rate protection. 'Selected' specifies few dates are rate protected. */
  criteria?: RateProtectionType;
  /** Specifies all the Rate protected dates in the selected range. */
  protectedDates?: DatesType;
}

/** Simple type for specifying the block protection type. */
export enum RateProtectionType {
  All = 'All',
  Selected = 'Selected',
  None = 'None',
}

/**
 * Specifies a single date.
 * @maxItems 4000
 */
export type DatesType = string[];

/** Block Non Compete code information. */
export interface BlockNonCompeteType {
  /**
   * Specifies the Non-Compete Industry.>
   * @minLength 0
   * @maxLength 20
   */
  industry?: string;
  /**
   * Specifies the Non-Compete Industry description.>
   * @minLength 0
   * @maxLength 2000
   */
  industryDescription?: string;
  /** Indicates the type of Non-Compete. 'All' means all dates are Non-Compete. 'None' specifies Non-Compete is disabled. 'Selected' specifies few dates are Non-Compete. */
  criteria?: RateProtectionType;
  /** Specifies all the Non-Compete dates in the selected date range. */
  protectedDates?: DatesType;
}

/** Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD. */
export enum BlockClassificationType {
  MasterBlock = 'MasterBlock',
  MasterTour = 'MasterTour',
  MasterAllocation = 'MasterAllocation',
  MasterItinerary = 'MasterItinerary',
  LeadMaster = 'LeadMaster',
  RegularBooking = 'RegularBooking',
  SubBlock = 'SubBlock',
  SubTour = 'SubTour',
  FitContract = 'FitContract',
  SubAllocation = 'SubAllocation',
  SubItinerary = 'SubItinerary',
  Lead = 'Lead',
  FitMaster = 'FitMaster',
}

/** Generic type for information about an owner. */
export interface BlockOwnerType {
  /** Hotel to which the owner belongs to. */
  hotel?: CodeDescriptionType;
  /** Unique application user ID. */
  userId?: UniqueIDType;
  /**
   * Unique application user name of the owner.
   * @minLength 0
   * @maxLength 40
   */
  userName?: string;
  /**
   * Unique Code to identify the owner.
   * @minLength 0
   * @maxLength 20
   */
  ownerCode?: string;
  /** Unique owner profile information. */
  profileId?: ProfileId;
  /** Provides name information of the owner. */
  name?: PersonNameType;
  /** Department to which the owner belongs to. */
  department?: CodeDescriptionType;
  /** Email information of the owner. */
  email?: EmailInfoType;
  /** Information on the telephone number of the owner. */
  phone?: TelephoneInfoType;
  /** Relationship of the owner within the profile or block. */
  relationship?: CodeDescriptionType;
  /** When true, this is a primary owner. */
  primary?: boolean;
  /** Specifies the business block ownership type. */
  ownership?: BlockOwnershipType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ProfileId {
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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
   * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname elementSpace may be used to pass the full name.
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
  /** Type of name of the individual, such as former, nickname, alternate or alias name. */
  nameType?: PersonNameTypeType;
}

/** Person's name in an external system. */
export enum PersonNameTypeType {
  Primary = 'Primary',
  Alternate = 'Alternate',
  Incognito = 'Incognito',
  External = 'External',
  Phonetic = 'Phonetic',
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
   * A reference to the type of object defined by the UniqueID elementSpace.
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
   * A reference to the type of object defined by the UniqueID elementSpace.
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
}

/** Specifies the type of the owner associated with the business block(Block/Rooms/Catering). */
export enum BlockOwnershipType {
  Block = 'Block',
  Rooms = 'Rooms',
  Catering = 'Catering',
}

/** A collection of Profile objects or Unique IDs of Profiles. */
export interface BlockProfilesType {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: UniqueIDListType;
  /** Provides detailed information regarding either a company or a customer profile. */
  profile?: ProfileType;
  /** Is this profile attached to block is primary? */
  primary?: boolean;
  /** Determines the type of the block profile. */
  blockProfileType?: BlockProfileTypeType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

/** Type provides the detailed information about the profile and its children. */
export interface ProfileType {
  /** Detailed customer information for this profile. */
  customer?: CustomerType;
  /** Detailed company information for this profile. */
  company?: CompanyType;
  /** The profile image. */
  profileImage?: ImageSetType;
  /** List of customer addresses. */
  addresses?: {
    /**
     * Collection of Detailed information on an address for the customer.
     * @maxItems 4000
     */
    addressInfo?: AddressInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /**
   * Owner Code associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  ownerCode?: string;
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of Information on a URL for the customer. */
  uRLs?: {
    /**
     * Collection of Detailed information on web url/address for the customer.
     * @maxItems 4000
     */
    uRLInfo?: URLInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of Notes for the customer. */
  comments?: {
    /**
     * Collection of Detailed information on comments for the customer.
     * @maxItems 4000
     */
    commentInfo?: CommentInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Contains a collection of profiles that have a relationship with this profile. */
  relationships?: {
    /**
     * A collection of the profiles that have a relationship with this profile.
     * @maxItems 4000
     */
    relationship?: RelationshipInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Contains a collection of profiles that have a relationship with this profile. */
  relationshipsSummary?: {
    /**
     * A collection of the profiles summary that have a relationship with this profile.
     * @maxItems 4000
     */
    relationship?: RelationshipInfoSummaryType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Collection of Detailed information on history and future reservations associated with the profile. */
  stayReservationInfoList?: ReservationStayHistoryFutureInfoType;
  /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
  profileType?: ProfileTypeType;
  /** Status of the profile. Active/Inactive */
  statusCode?: ProfileStatusType;
  /**
   * Hotel which this profile is registered with. This attribute is not used for configuration.
   * @minLength 0
   * @maxLength 20
   */
  registeredProperty?: string;
  /**
   * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
   * @minLength 0
   * @maxLength 20
   */
  requestForHotel?: string;
}

/** Contains basic data on the customer's identity, location, relationships, finances, memberships, etc. */
export interface CustomerType {
  /**
   * Detailed name information for the customer.
   * @maxItems 5
   */
  personName?: PersonNameType[];
  /**
   * VIP status of the customer.
   * @minLength 0
   * @maxLength 20
   */
  vipStatus?: string;
  /**
   * Description of the VIP status.
   * @minLength 0
   * @maxLength 2000
   */
  vipDescription?: string;
}

export interface CompanyType {
  /**
   * Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName?: string;
  /**
   * The code specifying a monetary unit. Use ISO 4217, three alpha code.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /**
   * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
   * @minLength 0
   * @maxLength 10
   */
  currencySymbol?: string;
  /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
  decimalPlaces?: number;
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
  /**
   * Nationality code identification
   * @minLength 0
   * @maxLength 20
   */
  nationality?: string;
  /**
   * Nationality code description
   * @minLength 0
   * @maxLength 80
   */
  nationalityDescription?: string;
  /**
   * VIP status of the company.
   * @minLength 0
   * @maxLength 20
   */
  vipStatus?: string;
  /**
   * Description of the VIP status.
   * @minLength 0
   * @maxLength 2000
   */
  vipDescription?: string;
}

/** Represents on image set record. */
export interface ImageSetType {
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
  /**
   * The image set name.
   * @minLength 0
   * @maxLength 800
   */
  imageSet?: string;
  /** The image set sequence ID. */
  sequenceId?: number;
  /** The image set enumerated style. */
  imageStyle?: ImageStyleType;
  /**
   * The image set type.
   * @minLength 0
   * @maxLength 80
   */
  imageType?: string;
  /**
   * The image set hotel code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The image set chain code.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * The image set URL.
   * @minLength 0
   * @maxLength 2000
   */
  imageURL?: string;
  /**
   * The image set description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** The image set order. */
  imageOrder?: number;
  /**
   * The image set website.
   * @minLength 0
   * @maxLength 2000
   */
  website?: string;
}

/** An enumeration of image styles. */
export enum ImageStyleType {
  Full = 'Full',
  Thumbnail = 'Thumbnail',
  Icon = 'Icon',
  Square = 'Square',
  Banner = 'Banner',
  Button = 'Button',
  Lowres = 'Lowres',
  Highres = 'Highres',
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
   * A reference to the type of object defined by the UniqueID elementSpace.
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
   * Defines the type of address (e.g. home, business, other).
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /** Describes the type code */
  typeDescription?: string;
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

/** Web site address. */
export interface URLInfoType {
  /** Provides URL information. */
  url?: URLType;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
   * @minLength 0
   * @maxLength 40
   */
  type?: string;
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

/** Comment related to the profile/reservation. */
export interface CommentInfoType {
  /** Comment details for the comment. It will be empty in case of delete comment. */
  comment?: CommentType;
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
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
   * @minLength 0
   * @maxLength 40
   */
  type?: string;
}

/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface CommentType {
  /** Formatted text content. */
  text?: FormattedTextTextType;
  /** An image for this paragraph. */
  image?: string;
  /** A URL for this paragraph. */
  url?: string;
  /**
   * Specifies Comment's Title.
   * @minLength 0
   * @maxLength 4000
   */
  commentTitle?: string;
  /**
   * Notification Location associated with the Note.
   * @minLength 0
   * @maxLength 20
   */
  notificationLocation?: string;
  /**
   * Specifies type of the comment.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Comment type Description.
   * @minLength 0
   * @maxLength 200
   */
  typeDescription?: string;
  /** When true, the comment may not be shown to the consumer. When false, the comment may be shown to the consumer. */
  internal?: boolean;
  /** When true, the comment may be confidential. */
  confidential?: boolean;
  /** When true, the comment internal could be modified. */
  overrideInternal?: boolean;
  /** When true, the comment title will be populated from the comment type description and couldn't be modified. */
  protectDescription?: boolean;
  /**
   * If specified comment belongs to the Hotel, otherwise it is a global comment.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Specifies type of action described in the comments.
   * @minLength 0
   * @maxLength 20
   */
  actionType?: string;
  /**
   * Indicates at which date an action described in the comment must be taken.
   * @format date
   * @maxLength 8
   */
  actionDate?: string;
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

/** Relationship Type contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoType {
  /** Information about the changes in relationship for the profile */
  changeRelationship?: ChangeRelationsType;
  /** Refer to Relationship Profile type document. */
  relationshipProfile?: RelationshipProfileType;
  /** Refer to Master Profile type document. */
  masterAccountInfo?: MasterAccountInfoType;
  /**
   * Relationship identifier.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 20
   */
  relation?: string;
  /**
   * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  relationDescription?: string;
  /**
   * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
   * @minLength 0
   * @maxLength 20
   */
  targetRelation?: string;
  /**
   * Displays the description of the target relation(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  targetRelationDescription?: string;
}

/** Detailed information regarding the changes made to relationships for the profile. */
export interface ChangeRelationsType {
  /**
   * Relationship identifier.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 20
   */
  relation?: string;
  /**
   * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  relationDescription?: string;
  /**
   * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
   * @minLength 0
   * @maxLength 20
   */
  targetRelation?: string;
  /**
   * Displays the description of the target relation(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  targetRelationDescription?: string;
}

export interface RelationshipProfileType {
  /** Detailed information of the customer */
  customer?: CustomerType;
  /** Detailed information of the Company. */
  company?: CompanyType;
  /** Information on telephone details for the customer/company */
  telephone?: TelephoneInfoType;
  /** Information on address details for the customer/company */
  address?: AddressInfoType;
  /** Information on email address for the customer/company */
  email?: EmailInfoType;
  /** Information on web url/address for the customer/company */
  uRLs?: URLInfoType;
  /** Primary Owner of the profile */
  primaryOwner?: OwnerType;
  /** Original profile details for which the relationships was created */
  profileIdList?: UniqueIDListType;
  /** Updated/changed profile details for the relationships created */
  changeProfileIdList?: UniqueIDListType;
  /**
   * Indicates if this relationship is the primary relationship.
   * @minLength 0
   * @maxLength 20
   */
  primary?: string;
  /**
   * Relationship identifier.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /** Status of the profile. Active/Inactive */
  statusCode?: ProfileStatusType;
  /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
  profileType?: ProfileTypeType;
}

/** Generic type for information about an owner. */
export interface OwnerType {
  /** Hotel to which the owner belongs to. */
  hotel?: CodeDescriptionType;
  /** Unique application user ID. */
  userId?: UniqueIDType;
  /**
   * Unique application user name of the owner.
   * @minLength 0
   * @maxLength 40
   */
  userName?: string;
  /**
   * Unique Code to identify the owner.
   * @minLength 0
   * @maxLength 20
   */
  ownerCode?: string;
  /** Unique owner profile information. */
  profileId?: ProfileId;
  /** Provides name information of the owner. */
  name?: PersonNameType;
  /** Department to which the owner belongs to. */
  department?: CodeDescriptionType;
  /** Email information of the owner. */
  email?: EmailInfoType;
  /** Information on the telephone number of the owner. */
  phone?: TelephoneInfoType;
  /** Relationship of the owner within the profile or block. */
  relationship?: CodeDescriptionType;
  /** When true, this is a primary owner. */
  primary?: boolean;
}

export enum ProfileStatusType {
  Active = 'Active',
  Inactive = 'Inactive',
}

/** The types of Profile handled by the web service. */
export enum ProfileTypeType {
  Guest = 'Guest',
  Agent = 'Agent',
  Company = 'Company',
  Group = 'Group',
  Source = 'Source',
  Employee = 'Employee',
  Hotel = 'Hotel',
  Vendor = 'Vendor',
  Contact = 'Contact',
  Purge = 'Purge',
  BusinessHeader = 'BusinessHeader',
  BillingAccount = 'BillingAccount',
  Activity = 'Activity',
  Potential = 'Potential',
  Account = 'Account',
}

export interface MasterAccountInfoType {
  /** Unique ID of the Master account. */
  masterAccountId?: UniqueIDType;
  /**
   * Name of the Master account.
   * @minLength 0
   * @maxLength 40
   */
  masterAccountName?: string;
}

/** RelationshipInfoSummaryType contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoSummaryType {
  /** Refer to Relationship Profile Summary type document. */
  relationshipProfile?: RelationshipProfileSummaryType;
  /** Refer to Master Profile type document. */
  masterAccountDetails?: MasterAccountInfoType;
  /**
   * Relationship identifier.
   * @minLength 0
   * @maxLength 80
   */
  relationshipID?: string;
  /**
   * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 20
   */
  sourceRelation?: string;
  /**
   * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  sourceRelationDescription?: string;
  /**
   * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
   * @minLength 0
   * @maxLength 20
   */
  targetRelation?: string;
  /**
   * Displays the description of the target relation(Target Profile).
   * @minLength 0
   * @maxLength 200
   */
  targetRelationDescription?: string;
}

export interface RelationshipProfileSummaryType {
  /**
   * Name of the customer
   * @minLength 0
   * @maxLength 40
   */
  customerName?: string;
  /**
   * Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName?: string;
  /**
   * Telephone number assigned to a single location
   * @minLength 0
   * @maxLength 40
   */
  telephoneNumber?: string;
  /** Information on address details for the customer/company */
  address?: RelationshipAddressType;
  /**
   * Defines the e-mail address.
   * @minLength 0
   * @maxLength 2000
   */
  emailAddress?: string;
  /**
   * Unique Code to identify the owner.
   * @minLength 0
   * @maxLength 20
   */
  ownerCode?: string;
  /** Original profile details for which the relationships was created */
  profileIdList?: UniqueIDListType;
  /** Indicates if this relationship is the primary relationship. */
  primary?: boolean;
  /** Status of the profile. Active/Inactive */
  profileStatus?: ProfileStatusType;
  /** When true, this is a primary owner. */
  primaryOwnerCode?: boolean;
  /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
  profileType?: ProfileTypeType;
}

/** Provides address information for a Relationship. */
export interface RelationshipAddressType {
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
  city?: string;
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
  /**
   * Country name (e.g., Ireland).
   * @minLength 0
   * @maxLength 200
   */
  country?: string;
}

/** Information of History and Future Reservation details attached to Profiles. */
export interface ReservationStayHistoryFutureInfoType {
  /** Refer to History list type document. */
  historyList?: StayHistoryListType;
  /** Refer to Future list type document. */
  futureList?: StayFutureListType;
}

/** A collection of reservation history details attached to Profiles. */
export interface StayHistoryListType {
  /**
   * Additional reservation information attached to the profile . Eg : History reservation details
   * @maxItems 4000
   */
  reservationInfo?: StayReservationInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** The Reservation class contains the current reservation being created or altered. */
export interface StayReservationInfoType {
  /** Unique identifiers for the reservation for both internal and external systems */
  reservationIdList?: ReservationIdList;
  /** Collection of functionSpaceDetails stays. */
  roomStay?: StayInfoType;
  /** List of attached profiles */
  attachedProfiles?: ResAttachedProfileListType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Indicates the status of the reservation. */
  reservationStatus?: PMSResStatusType;
  /** Indicates the status of the reservation. */
  computedReservationStatus?: PMSResStatusType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ReservationIdList = UniqueIDType[];

/** Details on the Room Stay including Guest Counts, Time Span of this Room Stay, pointers to Res Guests, guest Memberships, Comments and Special Requests pertaining to this particular Room Stay and finally financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. */
export interface StayInfoType {
  /** @format date */
  arrivalDate?: string;
  /** @format date */
  departureDate?: string;
  /** The Original Time Span covers the Room Stay dates of the original reservation. */
  originalTimeSpan?: TimeSpanType;
  /** The expected arrival, return and departure times of the guest. */
  expectedTimes?: ResExpectedTimesType;
  /** A collection of Guest Counts associated with Room Stay. */
  adultCount?: number;
  /** A collection of Child Counts associated with Room Stay. */
  childCount?: number;
  /**
   * Room class code
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Room type code
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** True indicates functionSpaceDetails type is a component type. */
  componentRoomType?: boolean;
  /** Room Id */
  numberOfRooms?: number;
  /**
   * Room Id
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /**
   * Rate plan code
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** Rate amount */
  rateAmount?: CurrencyAmountType;
  /** The Points contains the number of points used to book a particular functionSpaceDetails type. */
  points?: PointsType;
  /** Whether this rate should be suppressed from view */
  rateSuppressed?: boolean;
  /** Key information about the block for this reservation. */
  reservationBlock?: ReservationBlockType;
  /**
   * Booking channel code
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Party code
   * @maxLength 2000
   */
  linkCode?: string;
  /** True if the rate is a fixed rate, otherwise false */
  fixedRate?: boolean;
  /** The total amount charged for the Room Stay including additional occupant amounts and fees. If TaxInclusive is set to True, then taxes are included in the total amount. */
  totalAmount?: CurrencyAmountType;
  /** The guarantee information associated to the Room Stay. A maximum of 5 occurances are available for use depending on the context. */
  guarantee?: ResGuaranteeType;
  /** Promotion Codes */
  promotion?: PromotionType;
  /**
   * Market code
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * Description of Market code
   * @minLength 0
   * @maxLength 4000
   */
  marketDescription?: string;
  /**
   * Source of business
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
  /**
   * Description of the source of business.
   * @minLength 0
   * @maxLength 4000
   */
  sourceCodeDescription?: string;
  /** Balance amount */
  balance?: CurrencyAmountType;
  /** Comp Balance amount */
  compBalance?: CurrencyAmountType;
  /**
   * Room type code that was charged
   * @minLength 0
   * @maxLength 20
   */
  roomTypeCharged?: string;
  /** A collection of deposit and/or payments for the Room Stay. */
  depositPayments?: CurrencyAmountType;
  /** Service Status of In House guest like DND or MUP */
  guestServiceStatus?: GuestHousekeepingServiceRequestType;
  /**
   * Indicates that this reservation is scheduled for automated check out.
   * @format date
   */
  scheduledCheckoutTime?: string;
  /** When true, indicates a functionSpaceDetails number cannot be changed. When false, indicates a functionSpaceDetails number may be changed. */
  roomNumberLocked?: boolean;
  /** True indicates as pseudo functionSpaceDetails type. This is usually used for a posting master reservation. */
  pseudoRoom?: boolean;
  /** Represents the functionSpaceDetails was assigned by AI Room Assignment. */
  assignedByAI?: boolean;
  /** Represents the functionSpaceDetails was assigned by AI Room Assignment. */
  upgradedByAI?: boolean;
}

/** Holds the Arrival and Departure Time Information */
export interface ResExpectedTimesType {
  /**
   * Arrival Time
   * @format date-time
   */
  reservationExpectedArrivalTime?: string;
  /**
   * Departure Time
   * @format date-time
   */
  reservationExpectedDepartureTime?: string;
}

/** The Redeem Points contains the number of points required to book a functionSpaceDetails type. */
export interface PointsType {
  /** Awards type for the award type rate code. */
  awardsType?: string;
  /** No of points required to book this Room Stay. */
  points?: number;
}

/** Key information about the block for a reservation. */
export interface ReservationBlockType {
  /** Collection of unique block identifiers for the reservation. */
  blockIdList?: BlockIdList;
  /**
   * The Name of the block that is attached to the reservation.
   * @minLength 0
   * @maxLength 40
   */
  blockName?: string;
  /**
   * This is the HotelCode of the Block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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

/** Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation. */
export interface PromotionType {
  /**
   * Promotion code associated with the rate plan.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /**
   * Promotion code Name associated with the rate plan.
   * @minLength 0
   * @maxLength 20
   */
  promotionName?: string;
  /**
   * Promotion Coupon Code when promotion is setupCode to have a valid coupon code.
   * @minLength 0
   * @maxLength 40
   */
  couponCode?: string;
}

/** Possible values for the Guest Service Status. */
export enum GuestHousekeepingServiceRequestType {
  DoNotDisturb = 'DoNotDisturb',
  MakeUpRoom = 'MakeUpRoom',
  NoStatusSelected = 'NoStatusSelected',
}

/** @maxItems 4000 */
export type ResAttachedProfileListType = ResAttachedProfileType[];

export interface ResAttachedProfileType {
  /** Attached profile name */
  name?: string;
  /** Collection of unique profile identifiers */
  profileIdList?: ProfileIdList;
  reservationProfileType?: ResProfileTypeType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];

export enum ResProfileTypeType {
  Guest = 'Guest',
  Company = 'Company',
  Group = 'Group',
  TravelAgent = 'TravelAgent',
  Source = 'Source',
  ReservationContact = 'ReservationContact',
  BillingContact = 'BillingContact',
  Addressee = 'Addressee',
}

/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
export enum PMSResStatusType {
  Reserved = 'Reserved',
  Requested = 'Requested',
  NoShow = 'NoShow',
  Cancelled = 'Cancelled',
  InHouse = 'InHouse',
  CheckedOut = 'CheckedOut',
  Waitlisted = 'Waitlisted',
  DueIn = 'DueIn',
  DueOut = 'DueOut',
  Walkin = 'Walkin',
  PendingCheckout = 'PendingCheckout',
}

/** A collection of reservation history details attached to Profiles. */
export interface StayFutureListType {
  /**
   * Additional reservation information attached to the profile . Eg : Future reservation details
   * @maxItems 4000
   */
  reservationInfo?: StayReservationInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Simple type for block profile types. */
export enum BlockProfileTypeType {
  Company = 'Company',
  Group = 'Group',
  Agent = 'Agent',
  Source = 'Source',
  CompanyContact = 'CompanyContact',
  AgentContact = 'AgentContact',
  SourceContact = 'SourceContact',
}

/** Contains a list of block owners. */
export interface BlockOwnersType {
  /** @maxItems 4000 */
  owner?: BlockOwnerType[];
  /** When this flag is true, the logged in user cannot modify the existing block owners for the current block. */
  lockBlockOwners?: boolean;
  /** When this flag is true, the logged in user cannot modify the existing functionSpaceDetails owners for the current block. */
  lockRoomsOwners?: boolean;
  /** When this flag is true, the logged in user cannot modify the existing catering owners for the current block. */
  lockCateringOwners?: boolean;
}

/** Contains catering related information for the block. */
export interface CateringType {
  /** Catering Status details of the block. */
  cateringStatus?: BookingStatusDetailType;
  /**
   * Internal status for the catering.
   * @minLength 0
   * @maxLength 20
   */
  cateringInternalStatus?: string;
  /** Catering Status details of the block. */
  cateringNextStatusList?: CateringNextStatusListType;
  /** List of catering status changes. */
  cateringStatusChangeHistory?: CateringStatusChangeHistoryType;
  /**
   * Catering Owner of the block.
   * @minLength 0
   * @maxLength 20
   */
  cateringOwner?: string;
  /** The catering attendees information for events associated with the block. */
  eventAttendees?: EventAttendeesType;
  /**
   * The name by which the group wishes to be identified in the hotel.
   * @minLength 0
   * @maxLength 80
   */
  boardInfo?: string;
  /**
   * The name of the customer's in-house representative or contact on the day of the catering event.
   * @minLength 0
   * @maxLength 40
   */
  onSiteName?: string;
  /**
   * Catering contract number for the block.
   * @minLength 0
   * @maxLength 20
   */
  contractNumber?: string;
  /**
   * This provides more detail the type of function for which the event is held. For example, Trade Show, Meeting, or Annual Convention.
   * @minLength 0
   * @maxLength 60
   */
  functionInfo?: string;
  /** Indicates whether the catering change logging for the booking is active or not. Any change made to catering events and resources will be logged when this is true. */
  trackChanges?: boolean;
  /** Indicates if the Banquet Event Orders have been distributed. */
  eventOrder?: EventOrderType;
  /** Information about catering revenue. */
  cateringRevenue?: CateringRevenueType;
  /**
   * Date used by catering manager or coordinator to follow up on the event.
   * @format date
   * @maxLength 8
   */
  followUpDate?: string;
  /**
   * Date by which event group must make a decision on the booking.
   * @format date
   * @maxLength 8
   */
  decisionDate?: string;
  /** Indicates whether event packages or templates can be applied to the block. */
  pkgsTmplt?: boolean;
  /** Information on the catering cancellation. */
  cancellationDetails?: CancellationDetailsType;
  /**
   * Indicates the resource discount percentage to be applied to resource items associated with the catering event.
   * @min 0
   * @max 100
   */
  resourceDiscountPercentage?: number;
  /** Indicates if the block has any package events. */
  hasPackageEvents?: boolean;
  /** Indicates whether BoardInfo changes can be applied to all events of the block. */
  applyBoardInfoToAllEvents?: boolean;
  /** Indicates whether to ignore any warning during applying the changes to the events associated with the current block. */
  overrideEventsProcessingWarnings?: boolean;
  /** Indicates whether Guarantee changes can be applied to all events of the block. */
  applyEventsGuaranteeToAllEvents?: boolean;
  /** Indicates to which the events of the block can the attendees changes be applied. */
  applyEventAttendeesChangesToEvents?: ApplyEventAttendeesChangesToEventsType;
  /** Attibute that indicates to which type of resource the discount should be applied to. */
  resourceDiscountType?: ResourceDiscountTypeType;
}

/**
 * Next catering status of the business block.
 * @maxItems 4000
 */
export type CateringNextStatusListType = BookingStatusDetailType[];

/**
 * Collection of catering status history.
 * @maxItems 4000
 */
export type CateringStatusChangeHistoryType = BookingStatusHistoryType[];

export interface BookingStatusHistoryType {
  /** Number indicating the sequence of status change. */
  sequence?: number;
  /** Booking status of the business block. */
  bookingStatus?: CodeDescriptionType;
  /**
   * Date and time of the status change.
   * @format date
   * @maxLength 8
   */
  modifyDateTime?: string;
  /**
   * User who modified the status.
   * @minLength 0
   * @maxLength 200
   */
  modifierId?: string;
}

/** Event attendees information. */
export interface EventAttendeesType {
  /** The maximum number of attendees for Catering events associated with the block. */
  noOfAttendees?: number;
  /** This denotes that the number of Attendees are the minimum guaranteed by the customer. */
  attendeesGuaranteed?: boolean;
}

/** Event order distribution information. */
export interface EventOrderType {
  /** Indicates if the Banquet Event Orders have been distributed. */
  distributed?: boolean;
  /**
   * This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
   * @format date
   * @maxLength 8
   */
  distributedDate?: string;
  /**
   * This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date/time stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
   * @format date-time
   */
  distributedDateTime?: string;
}

/** Information about Catering Revenue. */
export interface CateringRevenueType {
  /** The service charge for the Catering Events that will be added to the business block. */
  serviceCharge?: CurrencyAmountType;
  /** The tax amount for the Catering Events that will be added to the business block. */
  taxAmount?: CurrencyAmountType;
  /** Item discount for the block. */
  itemDiscount?: number;
  /**
   * The discount percentage to be applied to resource items associated with catering events.
   * @min 0
   * @max 100
   */
  itemDiscountPercentage?: number;
}

/** This type holds information regarding booking status change to Cancel/ Lost. */
export interface CancellationDetailsType {
  /** Cancellation number of the block. */
  cancellationNumber?: UniqueIDType;
  /** Code and description for cancellation reason. */
  cancellationCode?: CodeDescriptionType;
  /**
   * Date on which block was canceled.
   * @format date
   * @maxLength 8
   */
  cancellationDate?: string;
  /**
   * Cancellation information provided by the customer.
   * @minLength 0
   * @maxLength 2000
   */
  cancellationInfo?: string;
  /**
   * Alternate destination where the business is being taken.
   * @minLength 0
   * @maxLength 20
   */
  destination?: string;
  /**
   * Holds the name of the property or competitor brand business was lost to.
   * @minLength 0
   * @maxLength 100
   */
  lostToProperty?: string;
}

/** Non-Pkg Events on the same date. */
export enum ApplyEventAttendeesChangesToEventsType {
  All = 'All',
  None = 'None',
  Same = 'Same',
  NonPackage = 'NonPackage',
  MatchingNonPackage = 'MatchingNonPackage',
  Package = 'Package',
  Date = 'Date',
}

/** Indicates the option to select resources that will be discounted with the Resource Discount Percentage. */
export enum ResourceDiscountTypeType {
  AllDiscountableResources = 'AllDiscountableResources',
  ResourcesWithSameDiscountPercentage = 'ResourcesWithSameDiscountPercentage',
  AllDiscountableItems = 'AllDiscountableItems',
  ItemsWithSameDiscountPercentage = 'ItemsWithSameDiscountPercentage',
  AllDiscountableMenusAndMenuItems = 'AllDiscountableMenusAndMenuItems',
  MenusAndMenuItemsWithSameDiscountPercentage = 'MenusAndMenuItemsWithSameDiscountPercentage',
  AllDiscountableSpaces = 'AllDiscountableSpaces',
  SpacesWithSameDiscountPercentage = 'SpacesWithSameDiscountPercentage',
  None = 'None',
}

/**
 * Inventory item attached to a block.
 * @maxItems 4000
 */
export type BlockInventoryItemsType = BlockInventoryItemType[];

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockInventoryItemType {
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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
  /** Specifies Items and its attributes. When used for data manipulation for Items setupCode on reservation, etc only code is considered. Other Attributes are for used to provide information during fetch operation. */
  item?: ItemInfoType;
  /** Number of items booked. */
  quantity?: number;
  /** Begin and eventEndDate date and time of the items applicability. */
  blockDates?: DateRangeType;
  /** If exists specifies whether the item is setupCode due to a Rate Plan, Package or a Block. */
  source?: BlockInventoryItemSourceType;
}

/** Basic information regarding an Item. */
export interface ItemInfoType {
  /**
   * Detail description of an item.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Defines a Time period when the item is available. */
  availabilityPeriod?: TimeWindowType;
  /** Date Range to get the inventories of the items. */
  blockDates?: TimeSpanType;
  /** Quantity of hold Item */
  quantity?: number;
  /** ID reference for the hold Item */
  itemHoldId?: number;
  /**
   * Item Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Name of an item.
   * @minLength 0
   * @maxLength 200
   */
  name?: string;
  /** Indicates if it is an item pool. Not applicable for Item within the Item Pool. */
  itemPool?: boolean;
  /** If true indicates that item is allowed to sell separately. */
  sellSeparate?: boolean;
  /** If true indicates that item can be sold in reservation. */
  sellInReservation?: boolean;
  /** If true indicates that item can be sold in event. */
  sellInEvent?: boolean;
  /** If true indicates that item is required for the reservation. */
  requiredForBooking?: boolean;
  /** If true indicates that item has fixed charge when it is attached to a reservation. */
  fixedCharge?: boolean;
  /** If true indicates that item could be held outside of the reservation stay days. */
  outsideStay?: boolean;
  /** Define the default duration in days when booking the item. */
  defaultDuration?: number;
}

/** Defines a Time period with eventStartDate time and an eventEndDate time. */
export interface TimeWindowType {
  /** Start Time of the Time window. */
  startTime?: string;
  /** End Time of the Time window. */
  endTime?: string;
}

/** Date Range with Start and End dates. */
export interface DateRangeType {
  /**
   * The starting value of the date range.
   * @format date
   * @maxLength 8
   */
  eventStartDate?: string;
  /**
   * The ending value of the date range.
   * @format date
   * @maxLength 8
   */
  eventEndDate?: string;
}

/** Defines whether the item is setupCode due to a Rate Plan, Package or a Block. */
export interface BlockInventoryItemSourceType {
  /**
   * Rate Plan Code, If populated specifies that the item is setupCode due to a Rate Plan.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Package Code, If populated specifies that the item is setupCode due to a Package.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /** Block Unique ID, If populated specifies that the item is setupCode due to a Block. */
  blockId?: BlockId;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockId {
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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

export interface BlockStatisticsType {
  /** Indicates the functionSpaceDetails statistics for allocated rooms. */
  allocatedRoomStatistics?: RoomStatisticsType;
  /** Indicates the functionSpaceDetails statistics for actualized rooms. */
  actualRoomStatistics?: RoomStatisticsType;
  /** Indicates the catering revenue on the books. */
  cateringRevenueOnBooks?: number;
  /** Indicates actualized catering revenue. */
  actualCateringRevenue?: number;
}

export interface RoomStatisticsType {
  /** The total number of rooms. */
  roomCount?: number;
  /** The total revenue for the rooms. */
  roomRevenue?: number;
  /** The average rate per functionSpaceDetails. */
  averageRate?: number;
}

/**
 * List of Block traces.
 * @maxItems 4000
 */
export type BlockTracesType = BlockTraceType[];

/** Extended Trace object to hold information for a block. */
export interface BlockTraceType {
  /** Date of the trace. */
  timeInfo?: TraceTimeInfoType;
  /** Reservation ID of the reservation for which the traces are to be retrieved. */
  reservationId?: ReservationId;
  /**
   * Indicates the Department code.
   * @minLength 0
   * @maxLength 20
   */
  departmentId?: string;
  /** The information this trace contains. */
  traceText?: string;
  /** Information regarding the status of the trace */
  resolveInfo?: TraceResolveType;
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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

export interface TraceTimeInfoType {
  /** Time span for the trace. */
  dateTimeSpan?: DateTimeSpanType;
  /**
   * Date of the trace.
   * @format date-time
   */
  traceOn?: string;
  /**
   * Time of the trace
   * @minLength 0
   * @maxLength 20
   */
  traceTime?: string;
  /** User that entered this trace. */
  enteredBy?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ReservationId {
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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

export interface TraceResolveType {
  /**
   * Date the trace was resolved
   * @format date
   * @maxLength 8
   */
  resolvedOn?: string;
  /** User that resolved the trace */
  resolvedBy?: string;
}

/** Type to store summary detail like rooms sold, average functionSpaceDetails rate and revenue for a statistic type. */
export interface BlockStatisticsSummaryType {
  /** Total Number of Rooms Picked Up. */
  roomsSold?: number;
  /** Summary information pertaining to revenue like Room, Food and Beverage, Catering, Other, Catering Other and Total Revenue. */
  revenueSummary?: RevenueSummaryType;
  avgRoomRate?: number;
  /** Type of statistic for which summary information is populated. */
  statisticType?: StatisticsSummaryType;
}

/** Summary information pertaining to revenue like Room, Food and Beverage, Catering, Other, Catering Other and Total Revenue. */
export interface RevenueSummaryType {
  roomRevenue?: number;
  foodAndBeverageRevenue?: number;
  otherRevenue?: number;
  cateringRevenue?: number;
  cateringOtherRevenue?: number;
  totalRevenue?: number;
  nonRevenue?: number;
}

/** Type of statistic for which summary information is populated. */
export enum StatisticsSummaryType {
  Potential = 'Potential',
  Actual = 'Actual',
  Variance = 'Variance',
}

/** The SellMessageConfigsType is the list of sell messages, each comprising of all the sell message attributes and other details. */
export interface SellMessageConfigsType {
  /** @maxItems 4000 */
  sellMessageConfig?: SellMessageConfigType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Only one of the following can hold a value: HotelCode, CROCode or ChainCode */
export interface SellMessageConfigType {
  /**
   * Sell message text.
   * @minLength 0
   * @maxLength 2000
   */
  message?: string;
  /** Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. */
  blockId?: BlockId;
  /**
   * Block Code to which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /** Begin and End date for the sell message. */
  timespan?: TimeSpanType;
  /**
   * Hotel Code for which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * CRO Code for which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  croCode?: string;
  /**
   * Chain Code for which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * Room type for which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Rate Plan Code for which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Language in which the sell message is defined.
   * @minLength 0
   * @maxLength 20
   */
  languageCode?: string;
  /** Sticky flag is used to define if the sell message should display on the block screen by default. */
  stickyFlag?: boolean;
  /** This number indicates the display order of the sell message. */
  sellSequence?: number;
  /**
   * This represents the moduleType where we want to display this SellMessage.
   * @maxItems 10
   */
  usedInModule?: UsedInModuleType[];
  /** URL that identifies the location associated with the record identified by the UniqueID. */
  url?: string;
  /**
   * A reference to the type of object defined by the UniqueID elementSpace.
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

/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
export enum UsedInModuleType {
  Blocks = 'Blocks',
  Reservations = 'Reservations',
  FunctionDiary = 'FunctionDiary',
  LookToBookSales = 'LookToBookSales',
  GroupRoomsControl = 'GroupRoomsControl',
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
   * A reference to the type of object defined by the UniqueID elementSpace.
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

/**
 * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
 * @maxItems 4000
 */
export type BlockWashSchedulesType = BlockWashScheduleType[];

/** Allows to select type of wash schedule: by number of rooms or by percentage. */
export interface BlockWashScheduleType {
  /**
   * Date on which the block wash operation will be performed.
   * @format date
   * @maxLength 8
   */
  washDate?: string;
  /**
   * A single functionSpaceDetails type on which wash operation should be performed.
   * @maxItems 4000
   */
  roomTypes?: string[];
  /** Wash by rooms contains the occupany details and sell values for a specific block wash schedule. */
  washByRooms?: BlockGridInvType;
  /**
   * When using the Wash by % option, indicate a wash percentage that will be applied it to the whole block.
   * @min 0
   * @max 100
   */
  washByPercent?: number;
}

/** Indicates the inventory values ( occupancy or availability ) per person occupancy. */
export interface BlockGridInvType {
  /** Indicates the one person inventory value ( occupancy or availability ). */
  onePerson?: number;
  /** Indicates the two person inventory value ( occupancy or availability ). */
  twoPerson?: number;
  /** Indicates the three person inventory value ( occupancy or availability ). */
  threePerson?: number;
  /** Indicates the four person inventory value ( occupancy or availability ). */
  fourPerson?: number;
  /** Indicates the sell limit */
  sellLimit?: number;
  /**
   * Indicates the cutoff date.Date when inventory left in the block will be cut-off.
   * @format date
   * @maxLength 8
   */
  cutoffDate?: string;
}

/** List of restrictions belonging to a block. */
export interface BlockRestrictionsType {
  /** Unique OPERA Block ID which is used to find a Block from OPERA. This ID is a primary identification of a Block in OPERA. */
  blockId?: BlockId;
  /**
   * Block restriction details.
   * @maxItems 4000
   */
  blockRestriction?: BlockRestrictionType[];
  /**
   * Hotel to which the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Restriction details for a block. */
export interface BlockRestrictionType {
  /** Date for which the restriction applies. */
  restrictionDate?: TimeSpanDaysOfWeekType;
  /**
   * Room Type selected for the block restriction.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Indicates the type of restriction along with parameters for restriction, if any. */
  blockRestrictionStatus?: RestrictionStatusType;
  /** Actual time span of the restriction. */
  actualTimeSpan?: TimeSpanType;
}

/** Container for Time span with days of week. */
export interface TimeSpanDaysOfWeekType {
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date. */
  blockDates?: TimeSpanType;
  sunday?: boolean;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
}

/** The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group. */
export interface RestrictionStatusType {
  /** Identifies the type of restriction. I.E. Closed, ClosedForArrival, etc. */
  code?: RestrictionStatusesType;
  /** Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. */
  unit?: number;
  /** Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS1?: boolean;
  /** Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS2?: boolean;
  /** Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS3?: boolean;
  /** Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS4?: boolean;
  /** Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS5?: boolean;
  /** Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS6?: boolean;
  /** Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. */
  lOS7?: boolean;
}

export enum RestrictionStatusesType {
  Closed = 'Closed',
  ClosedForArrival = 'ClosedForArrival',
  ClosedForDeparture = 'ClosedForDeparture',
  MinimumStayThrough = 'MinimumStayThrough',
  MaximumStayThrough = 'MaximumStayThrough',
  MinimumLengthOfStay = 'MinimumLengthOfStay',
  MaximumLengthOfStay = 'MaximumLengthOfStay',
  LOSNotAvailable = 'LOSNotAvailable',
  MinimumAdvanceBooking = 'MinimumAdvanceBooking',
  MaximumAdvanceBooking = 'MaximumAdvanceBooking',
  Open = 'Open',
  OpenForArrival = 'OpenForArrival',
  OpenForDeparture = 'OpenForDeparture',
}

/** Pertain Information about the Function Space for events. */
export interface EventFunctionSpaceType {
  /**
   * Function Space (event functionSpaceDetails) code.
   * @minLength 0
   * @maxLength 20
   */
  functionSpaceCode?: string;
  /**
   * Function Space description.
   * @minLength 0
   * @maxLength 200
   */
  functionSpaceDescription?: string;
  /**
   * Setup style code.
   * @minLength 0
   * @maxLength 20
   */
  setupCode?: string;
  /**
   * Setup Style description.
   * @minLength 0
   * @maxLength 200
   */
  setupDescription?: string;
  /** Setup time in minutes. */
  setupTime?: number;
  /** Setdown time in minutes. */
  setdownTime?: number;
  /**
   * Rate Code for function space.
   * @minLength 0
   * @maxLength 20
   */
  rentalCode?: string;
  /**
   * Function Space Rate description.
   * @minLength 0
   * @maxLength 200
   */
  rateDesc?: string;
  /** The functionSpaceDetails rent amount. */
  rentalAmount?: CurrencyAmountType;
  /**
   * Discount Percentage applied to Rent Amount.
   * @min 0
   * @max 100
   */
  discountPercentage?: number;
  /** Minimum Occupancy for the SetupCode of Catring Event. */
  minimumOccupancy?: number;
  /** Maximum Occupancy for the SetupCode of Catring Event. */
  maximumOccupancy?: number;
  /** Flag to indicate if the event functionSpaceDetails is shareable. */
  shareable?: boolean;
  /** Flag to indicate if the function space is a combination functionSpaceDetails. */
  comboSpace?: boolean;
  /** Flag to indicate if the function space is an elementSpace of a comboSpace function space. */
  elementSpace?: boolean;
}

/**
 * Pertain event information.
 * @maxItems 4000
 */
export type EventNotesType = EventNoteType[];

/** Pertain event's comment information. */
export interface EventNoteType {
  /** Unique identifier for event comment. If it is missing, this indicate that it is a new comment. If only NotID is provided then it is a delete operation */
  noteId?: UniqueIDType;
  /**
   * Note code.
   * @minLength 0
   * @maxLength 20
   */
  noteCode?: string;
  /** Indicates if comment are internal use only. */
  internal?: boolean;
  /**
   * Pertain comment tile.
   * @minLength 0
   * @maxLength 100
   */
  noteTitle?: string;
  /**
   * Pertain comment text.
   * @minLength 0
   * @maxLength 2000
   */
  comment?: string;
  /** Pertain display sequence. */
  sequence?: number;
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

/**
 * Pertain event few information about events.
 * @maxItems 4000
 */
export type LightEventsDetailType = LightEventDetailType[];

/** Light Event Details. */
export interface LightEventDetailType {
  /** Pertain event primary information. */
  eventPrimaryInfo?: EventPrimaryInfoType;
  /** Pertain event information. */
  eventDetail?: EventDetailType;
  /** Pertain event's function space information. */
  functionSpaceInformation?: EventFunctionSpaceType;
}

/** Collection of revenue information about a catering event. */
export interface EventRevenuesInformationType {
  /**
   * Revenue information about a catering event.
   * @maxItems 4000
   */
  eventRevenueInformation?: EventRevenueInformationType[];
  /**
   * Currency code when base currency of the property is different than the catering currency.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
  /** Flag to indicate if the event revenue should be excluded from the forecast. */
  excludeFromForecast?: boolean;
  /** Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event. */
  useForecastRevenue?: boolean;
  /** Flag that indicates if actual revenue can be manually edited. */
  eventLevelRevenueActualization?: boolean;
}

/** Pertain event's revenue information. */
export interface EventRevenueInformationType {
  /** Revenue type */
  revenueType?: RevenueTypeType;
  /** Forecasted revenue. */
  forecastRevenue?: CurrencyAmountType;
  /** Expected revenue. */
  expectedRevenue?: CurrencyAmountType;
  /** Guaranteed revenue. */
  guaranteedRevenue?: CurrencyAmountType;
  /** On the books revenue. */
  onTheBooksRevenue?: CurrencyAmountType;
  /** Billed revenue. */
  billedRevenue?: CurrencyAmountType;
  /** Actual revenue. */
  actualRevenue?: CurrencyAmountType;
  /** Total cost involved on this revenue. */
  totalCost?: CurrencyAmountType;
  /** Flag to indicate forecast revenue is a flat amount, therefore NOT per person. */
  flatForecastRevenue?: boolean;
  /** Flag indicating revenues are from a custom revenue type. */
  custom?: boolean;
  /** Flag indicating to ignore forecast figures. */
  ignoreForecast?: boolean;
  /** Flag indicating if the revenues are generated by a catering package. */
  packaged?: boolean;
  /** Sort order for revenues. */
  orderBy?: number;
}

/** Base type provides information about Catering Revenue Types Configuration. */
export interface RevenueTypeType {
  /**
   * Code is used to identify a Catering Revenue Type/Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Translatable Description of the Catering Revenue Types. */
  translatableDescription?: TranslationTextType200;
  /** Revenue Types display sequence Number */
  displaySequence?: number;
  /**
   * Revenue Group
   * @minLength 0
   * @maxLength 20
   */
  revenueGroup?: string;
  /** Flag for Food and Beverages. */
  foodAndBeverage?: boolean;
  /** Indicates if the Revenue type Code is inactive. */
  inactive?: boolean;
  /** Collection of Revenue details assoicated to a Revenue Type (Additional Details) */
  revenueDetails?: RevenueTypeDetailsType;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType200 {
  /**
   * Default text with Character length from 0 to 200.
   * @minLength 0
   * @maxLength 200
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translations?: TranslationsTextType;
}

/**
 * List of Revenue details assoicated to a Revenue Type (Additional Details)
 * @maxItems 4000
 */
export type RevenueTypeDetailsType = RevenueTypeDetailType[];

/** Details type provides information about Catering Revenue Type Details. */
export interface RevenueTypeDetailType {
  /**
   * Hotel Code is used to set associated revenue type details.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/evm/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Sales Event Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /evm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  events = {
    /**
     * @description This API fetches catering events for multiple hotels, based on search criteria such as dates, linked block, status, function space, and more. The data returned in the result contains, event type, description, dates and times, attendees, function space, setup style and more. <p><strong>OperationId:</strong>getEventsMultipleHotels</p>
     *
     * @tags EventManagement
     * @name GetEventsMultipleHotels
     * @summary Get Events
     * @request GET:/events
     */
    getEventsMultipleHotels: (
      hotelId: string,
      query?: {
        /**
         * This is the Hotel Code of the Event
         * @example ["BHOTEL","WORLDHOTEL"]
         */
        hotelIds?: string[];
        /**
         * The starting value of the date range.
         * @format date
         * @example "2020-12-30"
         */
        eventStartDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         * @example "2020-12-30"
         */
        eventEndDate?: string;
        /**
         * Block ID linked to the Catering Event
         * @example ["52346234"]
         */
        blockId?: string[];
        /**
         * Unique ID for the catering event
         * @example ["823814534"]
         */
        eventId?: string[];
        /**
         * Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company.
         * @uniqueItems true
         */
        category?: ('Group' | 'Source' | 'Agent' | 'Contact' | 'Company' | 'Account')[];
        /** Attached profile name */
        name?: string[];
        /**
         * A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile.
         * @example ["323816531"]
         */
        attachedProfileId?: string[];
        /**
         * Status Codes associated with the events to be fetched.
         * @example ["ACT","DEF"]
         */
        eventStatusCodes?: string[];
        /**
         * Event Type Codes associated with the events to be fetched.
         * @example ["BRK","COF"]
         */
        eventTypeCodes?: string[];
        /** @example ["SPACE01","SPACE02"] */
        functionSpaceCodes?: string[];
        /**
         * Indicates whether to include inactive events in search result.
         * @default false
         * @example false
         */
        includeInactive?: boolean;
        /**
         * Indicates whether to include the alternate events in the search result.
         * @default false
         * @example false
         */
        includeAlternateEvents?: boolean;
        /**
         * Indicates whether to include the sub events in the search result.
         * @default false
         * @example false
         */
        includeSubEvents?: boolean;
        /**
         * A collection of supported list of order by for search catering events.
         * @uniqueItems true
         * @default "StartDateTimeAsc"
         * @example "StartDateTimeAsc"
         */
        cateringEventOrderBy?: 'StartDateTimeAsc' | 'StartDateTimeMasterSubAsc';
        /**
         * Instructions to fetch details information about the selected event. The BlocksInfo fetch instructions will retain a limited amount of data for the associated block.  The Indicators instruction will provide a count.
         * @uniqueItems true
         * @example ["Indicators"]
         */
        fetchInstructions?: (
          | 'EventDetails'
          | 'BlocksInfo'
          | 'Indicators'
          | 'Notes'
          | 'SubEventsInfo'
          | 'AlternateEventsInfo'
          | 'MasterEventInfo'
          | 'Revenues'
          | 'IncludeInactiveSubEventsInfo'
          | 'IncludeInactiveMasterEventInfo'
          | 'ActualEventDetails'
          | 'EligibleMasterEventDetails'
        )[];
        /**
         * Indicates maximum number of records a Web Service should return.
         * @default 200
         * @example 200
         */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Events, ExceptionDetailType>({
        path: `/events`,
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
     * @description This API fetches catering events for a specific hotel, based on search criteria such as dates, linked block, status, function space, and more. The data returned in the result contains, event type, description, dates and times, attendees, function space, setup style and more. <p><strong>OperationId:</strong>getEventsOneHotel</p>
     *
     * @tags EventManagement
     * @name GetEventsOneHotel
     * @summary Get Events
     * @request GET:/hotels/{hotelId}/events
     */
    getEventsOneHotel: (
      hotelId: string,
      query?: {
        /**
         * The starting value of the date range.
         * @format date
         * @example "2020-12-30"
         */
        eventStartDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         * @example "2020-12-30"
         */
        eventEndDate?: string;
        /** Block ID linked to the Catering Event */
        blockId?: string[];
        /**
         * Unique ID for the catering event
         * @example ["823814534"]
         */
        eventId?: string[];
        /**
         * A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile.
         * @example "323816531"
         */
        attachedProfileId?: string;
        /**
         * Status Codes associated with the events to be fetched.
         * @example ["ACT","DEF"]
         */
        eventStatusCodes?: string[];
        /**
         * Event Type Codes associated with the events to be fetched.
         * @example ["BRK","COF"]
         */
        eventTypeCodes?: string[];
        /** @example ["SPACE01","SPACE02"] */
        functionSpaceCodes?: string[];
        /**
         * Indicates whether to include inactive events in search result.
         * @default false
         * @example false
         */
        includeInactive?: boolean;
        /**
         * Indicates whether to include the alternate events in the search result.
         * @default false
         * @example false
         */
        includeAlternateEvents?: boolean;
        /**
         * Indicates whether to include the sub events in the search result.
         * @default false
         * @example false
         */
        includeSubEvents?: boolean;
        /**
         * A collection of supported list of order by for search catering events.
         * @uniqueItems true
         * @default "StartDateTimeAsc"
         * @example "StartDateTimeAsc"
         */
        cateringEventOrderBy?: 'StartDateTimeAsc' | 'StartDateTimeMasterSubAsc';
        /**
         * Instruction to fetch all eligible master events for the selected event
         * @uniqueItems true
         * @example ["Indicators"]
         */
        fetchInstructions?: (
          | 'EventDetails'
          | 'BlocksInfo'
          | 'Indicators'
          | 'Notes'
          | 'SubEventsInfo'
          | 'AlternateEventsInfo'
          | 'MasterEventInfo'
          | 'Revenues'
          | 'IncludeInactiveSubEventsInfo'
          | 'IncludeInactiveMasterEventInfo'
          | 'ActualEventDetails'
          | 'EligibleMasterEventDetails'
        )[];
        /**
         * Indicates maximum number of records a Web Service should return.
         * @default 200
         * @example 200
         */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Events, ExceptionDetailType>({
        path: `/hotels/${hotelId}/events`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will allow you to retrieve the details of one event by specifying the event ID in the path. Event details such as event type, event description, start date / time and end date time, attendees, function space, setup style, function space rate, and more  will be returned. You can also add fetch instructions to specify what additional event data, such as block information, revenue information, event notes, and master / sub event information you would like returned in the response. If you don&apos;t know the eventID, please use getEvents API to find the event and its respective eventID. <p><strong>OperationId:</strong>getEvent</p>
     *
     * @tags EventManagement
     * @name GetEvent
     * @summary Get an Event
     * @request GET:/hotels/{hotelId}/events/{eventId}
     */
    getEvent: (
      eventId: string,
      hotelId: string,
      query?: {
        /**
         * Instruction to fetch all eligible master events for the selected event
         * @uniqueItems true
         * @example ["Indicators","Notes"]
         */
        fetchInstructions?: (
          | 'EventDetails'
          | 'BlocksInfo'
          | 'Indicators'
          | 'Notes'
          | 'AlternateEventsInfo'
          | 'SubEventsInfo'
          | 'MasterEventInfo'
          | 'Revenues'
          | 'IncludeInactiveSubEventsInfo'
          | 'IncludeInactiveMasterEventInfo'
          | 'ActualEventDetails'
          | 'EligibleMasterEventDetails'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Event, ExceptionDetailType>({
        path: `/hotels/${hotelId}/events/${eventId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
