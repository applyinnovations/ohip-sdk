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

/** Response object for fetching Block Cancellation Reasons. */
export interface BlockCancellationReasonsDetails {
  /** Collection of Block Cancellation Reasons. */
  blockCancellationReasons?: BlockCancellationReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Block Cancellation Reasons.
 * @maxItems 4000
 */
export type BlockCancellationReasonsType = BlockCancellationReasonType[];

/** Contains Common Master configuration detail. */
export interface BlockCancellationReasonType {
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

/** Request object for creating Block Cancellation Reasons. */
export interface BlockCancellationReasonsCriteria {
  /** Block Cancellation Reasons to be created. */
  blockCancellationReasons?: BlockCancellationReasonsType;
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

/** Request object for changing Block Cancellation Reasons. */
export interface BlockCancellationReasonsToBeChanged {
  /** Block Cancellation Reasons to be changed. */
  blockCancellationReasons?: BlockCancellationReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Block Lost Booking Codes. */
export interface BlockLostBookingCodesDetails {
  /** Collection of Block Lost Booking Codes. */
  blockLostBookingCodes?: BlockLostBookingCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Block Lost Booking Codes.
 * @maxItems 4000
 */
export type BlockLostBookingCodesType = BlockLostBookingCodeType[];

/** Contains Common Master configuration detail. */
export interface BlockLostBookingCodeType {
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

/** Request object for creating Block Lost Booking Codes. */
export interface BlockLostBookingCodesCriteria {
  /** Block Lost Booking Codes to be created. */
  blockLostBookingCodes?: BlockLostBookingCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Block Lost Booking Codes. */
export interface BlockLostBookingCodesToBeChanged {
  /** Block Lost Booking Codes to be changed. */
  blockLostBookingCodes?: BlockLostBookingCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Block Rate Override Reasons. */
export interface BlockRateOverrideReasonsDetails {
  /** Collection of Block Rate Override Reasons. */
  blockRateOverrideReasons?: BlockRateOverrideReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Block Rate Override Reasons.
 * @maxItems 4000
 */
export type BlockRateOverrideReasonsType = BlockRateOverrideReasonType[];

/** Contains Common Master configuration detail. */
export interface BlockRateOverrideReasonType {
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

/** Request object for creating Block Rate Override Reasons. */
export interface BlockRateOverrideReasonsCriteria {
  /** Block Rate Override Reasons to be created. */
  blockRateOverrideReasons?: BlockRateOverrideReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Block Rate Override Reasons. */
export interface BlockRateOverrideReasonsToBeChanged {
  /** Block Rate Override Reasons to be changed. */
  blockRateOverrideReasons?: BlockRateOverrideReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Block Refused Reasons. */
export interface BlockRefusedReasonsDetails {
  /** Collection of Block Refused Reasons. */
  blockRefusedReasons?: BlockRefusedReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Block Refused Reasons.
 * @maxItems 4000
 */
export type BlockRefusedReasonsType = BlockRefusedReasonType[];

/** Contains Common Master configuration detail. */
export interface BlockRefusedReasonType {
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

/** Request object for creating Block Refused Reasons. */
export interface BlockRefusedReasonsCriteria {
  /** Block Refused Reasons to be created. */
  blockRefusedReasons?: BlockRefusedReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Block Refused Reasons. */
export interface BlockRefusedReasonsToBeChanged {
  /** Block Refused Reasons to be changed. */
  blockRefusedReasons?: BlockRefusedReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching block status codes. */
export interface StatusCodeDetails {
  /** Collection of configured Block Status Codes. */
  blockStatusCodes?: BlockStatusCodeListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Block status code information.
 * @maxItems 4000
 */
export type BlockStatusCodeListType = BlockStatusCodeType[];

/** Block status code information. */
export interface BlockStatusCodeType {
  /** Code and Description used to define a status e.g. (INT, TENT, DEF, CXL) (initial, tentative, definite, cancelled). */
  status?: CodeDescriptionType;
  /** Room status type selected for status code. */
  roomStatusType?: BlockStatusCodeStatusType;
  /** Catering status type selected for status code. When the OPS Sales & Catering license code is active, the Sales & Catering status type for the status code is displayed. */
  cateringStatusType?: BlockStatusCodeStatusType;
  /** Default reservation type to be used for the status code. The reservation type and status code must have the same deduct/no deduct status. */
  defaultReservationType?: CodeDescriptionType;
  /** Reason type for every block reservation cancellation. Block Cancellation Reason, Block Refused Reasons, and Block Lost Reasons. */
  reasonType?: string;
  /** Color code for the status code. */
  color?: StatusColorType;
  /** Indicates if the rooms with this status code will be allowed for pickup or not. */
  allowPickup?: boolean;
  /** Indicates if the rooms with this status code can be returned to availability or not. */
  returnToInventory?: boolean;
  /** Indicates if the status code is the starting status of the status cycle or not. */
  starting?: boolean;
  /** Indicates the default status for all new leads. Only one lead status can be selected as the default. */
  leadStatus?: boolean;
  /** Indicates if the status code logs the catering changes or not. */
  logCatering?: boolean;
  /** Indicates if the function diary will be shown within the Sales and Catering. */
  showDiary?: boolean;
  /** Indicates the order the status code is displayed in the status cycle. */
  orderBy?: number;
  /** Returns true if the status code is already used in Block / Event / Status Flow. */
  inUse?: boolean;
  /** Returns true if the status code is already used in Events. */
  cateringInUse?: boolean;
  /** Indicates that the business block created with this Status is an Opportunity. */
  opportunity?: boolean;
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

/** Simple type for block status code's room status type and catering status type. Valid status values are Waitlist,Cancel,Lost,Refused,Actual,Inquiry,NonDeductInv,DeductInv and Referral. */
export enum BlockStatusCodeStatusType {
  Waitlist = 'Waitlist',
  Cancel = 'Cancel',
  Lost = 'Lost',
  Refused = 'Refused',
  Actual = 'Actual',
  Inquiry = 'Inquiry',
  NonDeductInv = 'NonDeductInv',
  DeductInv = 'DeductInv',
  Referral = 'Referral',
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

/** Request object for updating block status code. */
export interface BlockStatusCodeDetails {
  /** Block status code information to be applied. */
  blockStatusCode?: BlockStatusCodeType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching next block status codes. */
export interface NextBlockStatusCodeDetails {
  /** List of block status code flow which compose of a particular status code and its selected next statuses. Moreover, available next status can be not included if ConfigureOnly is set to true. */
  nextBlockStatusCodeList?: NextBlockStatusCodeListType;
  /** Block status code information e.g. Color, Description, etc. */
  blockStatusCodeMasterList?: BlockStatusCodeListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Block status code with its next configured and/or available status codes.
 * @maxItems 4000
 */
export type NextBlockStatusCodeListType = NextBlockStatusCodeType[];

/** Next block status codes information. Contains list of all configured and/or available next status codes for a particular status code. */
export interface NextBlockStatusCodeType {
  /** List of all configured next status codes for the main status code. */
  nextConfiguredStatusList?: NextBlockStatusCodeInfoListType;
  /** List of all available next status codes for the main status code. */
  nextAvailableStatusList?: NextBlockStatusCodeInfoListType;
  /**
   * Main block status code.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
}

/**
 * List of all configured next status codes for the main status code.
 * @maxItems 4000
 */
export type NextBlockStatusCodeInfoListType = NextBlockStatusCodeInfoType[];

/** Information of next block status code. */
export interface NextBlockStatusCodeInfoType {
  /**
   * Next block status code.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /** Order of next block status code */
  order?: number;
}

/** Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code. */
export interface NextBlockStatusCode {
  /** Contains list of all available next status codes for a particular status code. */
  nextBlockStatusCodeList?: NextBlockStatusCodeListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Destination Codes. */
export interface DestinationCodesDetails {
  /** Collection of Destination Codes. */
  destinationCodes?: DestinationCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Destination Codes.
 * @maxItems 4000
 */
export type DestinationCodesType = DestinationCodeType[];

/** Contains Common Master configuration detail. */
export interface DestinationCodeType {
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

/** Request object for creating Destination Codes. */
export interface DestinationCodesCriteria {
  /** Destination Codes to be created. */
  destinationCodes?: DestinationCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Destination Codes. */
export interface DestinationCodesToBeChanged {
  /** Destination Codes to be changed. */
  destinationCodes?: DestinationCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for FetchBlockSalesAllowance operation which will contain all the information of sales allowance. */
export interface BlockSalesAllowance {
  /** Collection of Block Sales Allowance fetched. */
  salesAllowances?: BlockSalesAllowanceListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Block's sales allowance information.
 * @maxItems 4000
 */
export type BlockSalesAllowanceListType = BlockSalesAllowanceType[];

/** Contains single entry information for Block's Sales Allowance. */
export interface BlockSalesAllowanceType {
  /**
   * Contains Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Contains sales allowance date.
   * @format date
   * @maxLength 8
   */
  salesAllowanceDate?: string;
  /**
   * Contains room type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Contains room pool code.
   * @minLength 0
   * @maxLength 20
   */
  roomPool?: string;
  /** Contains allocated number of rooms for allowance. */
  allowance?: number;
  /** Contains number of rooms are booked/consumed from sales allowance. */
  booked?: number;
  /** Contains number of rooms are overbooked from sales allowance. */
  overBooked?: number;
  /**
   * Contains cutoff date for sales allowance.
   * @format date
   * @maxLength 8
   */
  cutoffDate?: string;
}

/** Operation to a create block sales allowance with date range. */
export interface BlockSalesAllowanceRange {
  /** Criteria to fetch block sales allowance. */
  criteria?: BlockSalesAllowanceRangeType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Indicates the block sales allowance for a date range. */
export interface BlockSalesAllowanceRangeType {
  /**
   * Contains Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Contains quantity for sales allowance. */
  quantity?: number;
  /** Number of days before sales allowance date, after which unused quantity should set to 0. */
  cutoffDays?: number;
  /** Flag to indicate if the sales allowance update is absolute or relative to the current value. */
  incrementFlag?: boolean;
  /** Flag to indicate if the sales allowance already exists for criteria then overwrite the records. */
  overwriteExistingSalesAllowance?: boolean;
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
  sunday?: boolean;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  /** Flag to validate existing sales allowance records within criteria. */
  validateExistingSalesAllowance?: boolean;
}

/** You can use this API to retrieve multiple Sales Managers, you can narrow the results using different search criteria */
export interface SalesManagersInfo {
  /** Collection of Sales Managers information. */
  salesManagers?: SalesManagersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of Sales Managers information. */
export interface SalesManagersType {
  /**
   * Sales Manager's information.
   * @maxItems 4000
   */
  salesManager?: SalesManagerType[];
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

/** Sales Manager's information. */
export interface SalesManagerType {
  /**
   * Hotel Code of the Sales Manager
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique Name ID for the Sales Manager */
  nameId?: UniqueIDType;
  /**
   * Sales Manager's code
   * @minLength 0
   * @maxLength 20
   */
  salesManagerCode?: string;
  /** Sales Manager's name */
  name?: string;
  /** Indicates if the Sales manager has Group Room with Catering Goal */
  groupRoomWithCatering?: boolean;
  /** Indicates if the Sales manager has Transient Room Goal */
  transientRoom?: boolean;
  /** Indicates if the Sales manager has Activity Goal */
  activity?: boolean;
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

/** You can use this API to retrieve individual Sales Manager Goals for a hotel, you can narrow the results using different search criteria */
export interface SalesManagerGoalsInfo {
  /** Collection of Sales Manager Goals information. */
  salesManagerGoals?: SalesManagerGoalsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Detail Information about Sales Manager's goal.
 * @maxItems 4000
 */
export type SalesManagerGoalsType = SalesManagerGoalType[];

/** Detail Information about Sales Manager's goal. */
export interface SalesManagerGoalType {
  /**
   * Hotel Code of the Sales Manager
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique Name ID for the Sales Manager */
  nameId?: UniqueIDType;
  /** Unique Goal ID for the Sales Manager */
  goalID?: UniqueIDType;
  /** Specifies the Goal Type */
  goalType?: string;
  /** Specifies if this is a Arrival or a Production Goal */
  arrivalGoal?: boolean;
  /**
   * Specifies the Production Start Date
   * @format date
   * @maxLength 8
   */
  productionStartDate?: string;
  /**
   * Specifies the Production End Date
   * @format date
   * @maxLength 8
   */
  productionEndDate?: string;
  /** Specifies the Production Period Code */
  productionPeriodCode?: string;
  /**
   * Specifies the Arrival Start Date
   * @format date
   * @maxLength 8
   */
  arrivalStartDate?: string;
  /**
   * Specifies the Arrival End Date
   * @format date
   * @maxLength 8
   */
  arrivalEndDate?: string;
  /** Specifies the Arrival Period Code */
  arrivalPeriodCode?: string;
  /** Market Code assigned for the goal */
  marketCode?: string;
  /** Room Nights assigned for the goal */
  roomNights?: number;
  /** Room Revenue assigned for the Goal */
  roomRevenue?: CurrencyAmountType;
  /** Average Rate assigned for the Goal */
  averageRate?: CurrencyAmountType;
  /** Number of meals or covers assigned for the Goal */
  cateringCovers?: number;
  /** Food and Beverage revenue assigned for the Goal */
  fBRevenue?: CurrencyAmountType;
  /** Average Food and Beverage check assigned for the Goal */
  averageFBCheck?: CurrencyAmountType;
  /** Other revenue assigned for the Goal */
  otherRevenue?: CurrencyAmountType;
  /** Specifies the type of activity being set as a goal */
  activityType?: string;
  /** Specifies the number of activities of Activity Type being set as a goal */
  activitiesCount?: number;
  /** Goal type used to fetch goals related to Group Rooms and Catering business */
  groupRoomsWithCatering?: boolean;
  /** Goal type used to fetch non group goals related to Rooms business */
  transientRoom?: boolean;
  /** Indicates if the Sales manager has Activity Goal */
  activity?: boolean;
  /** Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter */
  future?: boolean;
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

/** Request object for Creating Sales Manager Goal(s). */
export interface CreateSalesManagerGoals {
  /** Collection of Sales Manager Goals information which should be created. */
  salesManagerGoals?: SalesManagerGoalsType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Operation to create new Wash Schedule Configuration under the selected property. */
export interface WashScheduleCriteria {
  /** Wash Schedule Configuration to be created. */
  washCodes?: WashCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Wash Code, which will allow the user to define standard schedules that can be attached to blocks prior to the block's cutoff date to automate this process.
 * @maxItems 4000
 */
export type WashCodesType = WashCodeType[];

/** A representation of the information contained by a Wash Code. */
export interface WashCodeType {
  /**
   * Description of the Wash Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Detail information of the Wash Code. It will contain number of rooms to be washed which is linked to a block by a Percentage or Specific number of rooms. */
  washCodeDetails?: WashCodeDetailsType;
  /**
   * Hotel Code to which the Wash Code belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Wash Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
}

/**
 * Wash Code Detail for a single entry.
 * @maxItems 4000
 */
export type WashCodeDetailsType = WashCodeDetailType[];

/** Allows for a choice to populate the detail information based on the choice between 'Wash by number of rooms' and 'Wash by %'. */
export interface WashCodeDetailType {
  /** A representation of the single entry information for 'Wash by number of rooms' type. */
  washByRoom?: WashByRoomType;
  washByPercent?: number;
  /** Number of days prior to arrival of a block or block's cutoff day. */
  daysPriorToArrival?: number;
}

/** A representation of the single entry information for 'Wash by number of rooms' type. */
export interface WashByRoomType {
  /** Contains the number of 'Occupancy1'. Based on the parameter it should be replaced by the number of 'Rooms'. */
  occupancy1?: number;
  /** Contains the number of 'Occupancy2'. */
  occupancy2?: number;
  /** Contains the number of 'Occupancy3'. */
  occupancy3?: number;
  /** Contains the number of 'Occupancy4'. */
  occupancy4?: number;
  /** Contains the available Sell Limit rooms for a Sell Limit block. */
  sell?: number;
}

/** Response object for fetching Reservation Methods. */
export interface ReservationMethodsDetails {
  /** Collection of Reservation Methods. */
  reservationMethods?: ReservationMethodsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Reservation Methods.
 * @maxItems 4000
 */
export type ReservationMethodsType = ReservationMethodType[];

/** Contains Common Master configuration detail. */
export interface ReservationMethodType {
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

/** Request object for creating Reservation Methods. */
export interface ReservationMethodsCriteria {
  /** Reservation Methods to be created. */
  reservationMethods?: ReservationMethodsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Reservation Methods. */
export interface ReservationMethodsToBeChanged {
  /** Reservation Methods to be changed. */
  reservationMethods?: ReservationMethodsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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

/** Response object for FetchWashSchedule operation which will contain all the information of 'WashCodes' like Days prior to arrival, Occupancy detail, Sell limit and Wash by percent value if exists. */
export interface WashScheduleDetails {
  /** Collection of Block Wash Schedule fetched. */
  washCodes?: WashCodesType;
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
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: new URL('/blk/config/v1', axiosConfig.baseURL).toString(),
    });
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
 * @title OPERA Cloud Block Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /blk/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  blockCancellationReasons = {
    /**
     * @description Use this API to get Block Cancellation Reasons. <p><strong>OperationId:</strong>getBlockCancellationReasons</p>
     *
     * @tags ChainConfig
     * @name GetBlockCancellationReasons
     * @summary Get Block Cancellation Reasons
     * @request GET:/blockCancellationReasons
     */
    getBlockCancellationReasons: (
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
      return this.request<BlockCancellationReasonsDetails, ExceptionDetailType>({
        path: `/blockCancellationReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Block Cancellation Reasons. <p><strong>OperationId:</strong>postBlockCancellationReasons</p>
     *
     * @tags ChainConfig
     * @name PostBlockCancellationReasons
     * @summary Create Block Cancellation Reasons
     * @request POST:/blockCancellationReasons
     */
    postBlockCancellationReasons: (
      hotelId: string,
      blockCancellationReasonsCriteria: BlockCancellationReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockCancellationReasons`,
        method: 'POST',
        body: blockCancellationReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Block Cancellation Reason. <p><strong>OperationId:</strong>putBlockCancellationReasons</p>
     *
     * @tags ChainConfig
     * @name PutBlockCancellationReasons
     * @summary Change Block Cancellation Reason
     * @request PUT:/blockCancellationReasons/{blockCancellationReasonsId}
     */
    putBlockCancellationReasons: (
      hotelId: string,
      blockCancellationReasonsId: string,
      blockCancellationReasonsToBeChanged: BlockCancellationReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockCancellationReasons/${blockCancellationReasonsId}`,
        method: 'PUT',
        body: blockCancellationReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Block Cancellation Reason. <p><strong>OperationId:</strong>deleteBlockCancellationReasons</p>
     *
     * @tags ChainConfig
     * @name DeleteBlockCancellationReasons
     * @summary Delete Block Cancellation Reason
     * @request DELETE:/blockCancellationReasons/{blockCancellationReasonsId}
     */
    deleteBlockCancellationReasons: (
      hotelId: string,
      blockCancellationReasonsId: string,
      query?: {
        blockCancellationReasonsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockCancellationReasons/${blockCancellationReasonsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockLostBookingCodes = {
    /**
     * @description Use this API to get Block Lost Booking Codes. <p><strong>OperationId:</strong>getBlockLostBookingCodes</p>
     *
     * @tags ChainConfig
     * @name GetBlockLostBookingCodes
     * @summary Get Block Lost Booking Codes
     * @request GET:/blockLostBookingCodes
     */
    getBlockLostBookingCodes: (
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
      return this.request<BlockLostBookingCodesDetails, ExceptionDetailType>({
        path: `/blockLostBookingCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Block Lost Booking Codes. <p><strong>OperationId:</strong>postBlockLostBookingCodes</p>
     *
     * @tags ChainConfig
     * @name PostBlockLostBookingCodes
     * @summary Create Block Lost Booking Codes
     * @request POST:/blockLostBookingCodes
     */
    postBlockLostBookingCodes: (
      hotelId: string,
      blockLostBookingCodesCriteria: BlockLostBookingCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockLostBookingCodes`,
        method: 'POST',
        body: blockLostBookingCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Block Lost Booking Code. <p><strong>OperationId:</strong>putBlockLostBookingCodes</p>
     *
     * @tags ChainConfig
     * @name PutBlockLostBookingCodes
     * @summary Change Block Lost Booking Code
     * @request PUT:/blockLostBookingCodes/{blockLostBookingCodesId}
     */
    putBlockLostBookingCodes: (
      hotelId: string,
      blockLostBookingCodesId: string,
      blockLostBookingCodesToBeChanged: BlockLostBookingCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockLostBookingCodes/${blockLostBookingCodesId}`,
        method: 'PUT',
        body: blockLostBookingCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Block Lost Booking Code. <p><strong>OperationId:</strong>deleteBlockLostBookingCodes</p>
     *
     * @tags ChainConfig
     * @name DeleteBlockLostBookingCodes
     * @summary Delete Block Lost Booking Code
     * @request DELETE:/blockLostBookingCodes/{blockLostBookingCodesId}
     */
    deleteBlockLostBookingCodes: (
      hotelId: string,
      blockLostBookingCodesId: string,
      query?: {
        blockLostBookingCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockLostBookingCodes/${blockLostBookingCodesId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockRateOverrideReasons = {
    /**
     * @description Use this API to get Block Rate Override Reasons. <p><strong>OperationId:</strong>getBlockRateOverrideReasons</p>
     *
     * @tags ChainConfig
     * @name GetBlockRateOverrideReasons
     * @summary Get Block Rate Override Reasons
     * @request GET:/blockRateOverrideReasons
     */
    getBlockRateOverrideReasons: (
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
      return this.request<BlockRateOverrideReasonsDetails, ExceptionDetailType>({
        path: `/blockRateOverrideReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Block Rate Override Reasons. <p><strong>OperationId:</strong>postBlockRateOverrideReasons</p>
     *
     * @tags ChainConfig
     * @name PostBlockRateOverrideReasons
     * @summary Create Block Rate Override Reasons
     * @request POST:/blockRateOverrideReasons
     */
    postBlockRateOverrideReasons: (
      hotelId: string,
      blockRateOverrideReasonsCriteria: BlockRateOverrideReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRateOverrideReasons`,
        method: 'POST',
        body: blockRateOverrideReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Block Rate Override Reason. <p><strong>OperationId:</strong>putBlockRateOverrideReasons</p>
     *
     * @tags ChainConfig
     * @name PutBlockRateOverrideReasons
     * @summary Change Block Rate Override Reason
     * @request PUT:/blockRateOverrideReasons/{blockRateOverrideReasonsId}
     */
    putBlockRateOverrideReasons: (
      hotelId: string,
      blockRateOverrideReasonsId: string,
      blockRateOverrideReasonsToBeChanged: BlockRateOverrideReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRateOverrideReasons/${blockRateOverrideReasonsId}`,
        method: 'PUT',
        body: blockRateOverrideReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Block Rate Override Reason. <p><strong>OperationId:</strong>deleteBlockRateOverrideReasons</p>
     *
     * @tags ChainConfig
     * @name DeleteBlockRateOverrideReasons
     * @summary Delete Block Rate Override Reason
     * @request DELETE:/blockRateOverrideReasons/{blockRateOverrideReasonsId}
     */
    deleteBlockRateOverrideReasons: (
      hotelId: string,
      blockRateOverrideReasonsId: string,
      query?: {
        blockRateOverrideReasonsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRateOverrideReasons/${blockRateOverrideReasonsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockRefusedReasons = {
    /**
     * @description Use this API to get Block Refused Reasons. <p><strong>OperationId:</strong>getBlockRefusedReasons</p>
     *
     * @tags ChainConfig
     * @name GetBlockRefusedReasons
     * @summary Get Block Refused Reasons
     * @request GET:/blockRefusedReasons
     */
    getBlockRefusedReasons: (
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
      return this.request<BlockRefusedReasonsDetails, ExceptionDetailType>({
        path: `/blockRefusedReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Block Refused Reasons. <p><strong>OperationId:</strong>postBlockRefusedReasonspostBlo</p>
     *
     * @tags ChainConfig
     * @name PostBlockRefusedReasonspostBlo
     * @summary Create Block Refused Reasons
     * @request POST:/blockRefusedReasons
     */
    postBlockRefusedReasonspostBlo: (
      hotelId: string,
      blockRefusedReasonsCriteria: BlockRefusedReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRefusedReasons`,
        method: 'POST',
        body: blockRefusedReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Block Refused Reason. <p><strong>OperationId:</strong>putBlockRefusedReasons</p>
     *
     * @tags ChainConfig
     * @name PutBlockRefusedReasons
     * @summary Change Block Refused Reason
     * @request PUT:/blockRefusedReasons/{blockRefusedReasonsId}
     */
    putBlockRefusedReasons: (
      hotelId: string,
      blockRefusedReasonsId: string,
      blockRefusedReasonsToBeChanged: BlockRefusedReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRefusedReasons/${blockRefusedReasonsId}`,
        method: 'PUT',
        body: blockRefusedReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Block Refused Reason. <p><strong>OperationId:</strong>deleteBlockRefusedReasons</p>
     *
     * @tags ChainConfig
     * @name DeleteBlockRefusedReasons
     * @summary Delete Block Refused Reason
     * @request DELETE:/blockRefusedReasons/{blockRefusedReasonsId}
     */
    deleteBlockRefusedReasons: (
      hotelId: string,
      blockRefusedReasonsId: string,
      query?: {
        blockRefusedReasonsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockRefusedReasons/${blockRefusedReasonsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockStatusCodes = {
    /**
     * @description This API fetches a list of configured status codes for the chain. It returns status code, description, and status type such as non-deduct, deduct, cancel, waitlist, inquiry, and actual. Status attributes, such as starting status, function diary visibility, allows pickup, and log catering changes are also returned in the response. Please note, that status codes are configured in a strict sequence that must be followed. In order to find available next statuses for the current block status, please use operation getNextBlockStatusCodes. <p><strong>OperationId:</strong>getBlockStatusCodes</p>
     *
     * @tags BlockConfig
     * @name GetBlockStatusCodes
     * @summary Get block status codes
     * @request GET:/blockStatusCodes
     */
    getBlockStatusCodes: (
      hotelId: string,
      query?: {
        blockStatusCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<StatusCodeDetails, ExceptionDetailType>({
        path: `/blockStatusCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create a new block status code. <p><strong>OperationId:</strong>postBlockStatusCode</p>
     *
     * @tags BlockConfig
     * @name PostBlockStatusCode
     * @summary Create a block status code
     * @request POST:/blockStatusCodes
     */
    postBlockStatusCode: (
      hotelId: string,
      blockStatusCodeDetails: BlockStatusCodeDetails,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockStatusCodes`,
        method: 'POST',
        body: blockStatusCodeDetails,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Retrieve the next block Status Codes for a property. <p><strong>OperationId:</strong>getNextBlockStatusCodes</p>
     *
     * @tags BlockConfig
     * @name GetNextBlockStatusCodes
     * @summary Get next block status codes
     * @request GET:/blockStatusCodes/nextStatusCodes
     */
    getNextBlockStatusCodes: (
      hotelId: string,
      query?: {
        /** When set to true, only configured next status codes will be included (available status list will not be included). */
        configuredOnly?: boolean;
        blockStatusCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<NextBlockStatusCodeDetails, ExceptionDetailType>({
        path: `/blockStatusCodes/nextStatusCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete block status code. <p><strong>OperationId:</strong>deleteBlockStatusCode</p>
     *
     * @tags BlockConfig
     * @name DeleteBlockStatusCode
     * @summary Delete block status code
     * @request DELETE:/blockStatusCodes/{blockStatusCode}
     */
    deleteBlockStatusCode: (hotelId: string, blockStatusCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockStatusCodes/${blockStatusCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change block status code. <p><strong>OperationId:</strong>putBlockStatusCode</p>
     *
     * @tags BlockConfig
     * @name PutBlockStatusCode
     * @summary Change block status code
     * @request PUT:/blockStatusCodes/{blockStatusCode}
     */
    putBlockStatusCode: (
      hotelId: string,
      blockStatusCode: string,
      blockStatusCodeDetails: BlockStatusCodeDetails,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockStatusCodes/${blockStatusCode}`,
        method: 'PUT',
        body: blockStatusCodeDetails,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Update the next Block status. <p><strong>OperationId:</strong>putNextBlockStatusCodes</p>
     *
     * @tags BlockConfig
     * @name PutNextBlockStatusCodes
     * @summary Change next block status codes
     * @request PUT:/blockStatusCodes/{srcBlockStatusCode}/nextStatusCodes
     */
    putNextBlockStatusCodes: (
      hotelId: string,
      srcBlockStatusCode: string,
      nextBlockStatusCode: NextBlockStatusCode,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockStatusCodes/${srcBlockStatusCode}/nextStatusCodes`,
        method: 'PUT',
        body: nextBlockStatusCode,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  destinationCodes = {
    /**
     * @description Use this API to get Destination Codes. <p><strong>OperationId:</strong>getDestinationCodes</p>
     *
     * @tags ChainConfig
     * @name GetDestinationCodes
     * @summary Get Destination Codes
     * @request GET:/destinationCodes
     */
    getDestinationCodes: (
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
      return this.request<DestinationCodesDetails, ExceptionDetailType>({
        path: `/destinationCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API allows creation on Destination Codes. Destination Codes are used in OPERA Cloud during the block cancellation process, and they usually represent either a competitor hotel / chain, or a geographic destination that a specific block has been lost to.  <p><strong>OperationId:</strong>postDestinationCodes</p>
     *
     * @tags ChainConfig
     * @name PostDestinationCodes
     * @summary Create Destination Codes
     * @request POST:/destinationCodes
     */
    postDestinationCodes: (
      hotelId: string,
      destinationCodesCriteria: DestinationCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/destinationCodes`,
        method: 'POST',
        body: destinationCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Destination Codes. <p><strong>OperationId:</strong>putDestinationCodes</p>
     *
     * @tags ChainConfig
     * @name PutDestinationCodes
     * @summary Change Destination Codes
     * @request PUT:/destinationCodes/{destinationCodesId}
     */
    putDestinationCodes: (
      hotelId: string,
      destinationCodesId: string,
      destinationCodesToBeChanged: DestinationCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/destinationCodes/${destinationCodesId}`,
        method: 'PUT',
        body: destinationCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Destination Codes. <p><strong>OperationId:</strong>deleteDestinationCodes</p>
     *
     * @tags ChainConfig
     * @name DeleteDestinationCodes
     * @summary Delete Destination Codes
     * @request DELETE:/destinationCodes/{destinationCodesId}
     */
    deleteDestinationCodes: (
      hotelId: string,
      destinationCodesId: string,
      query?: {
        destinationCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/destinationCodes/${destinationCodesId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  hotels = {
    /**
     * @description You can use this API to get Block Sales Allowance. <p><strong>OperationId:</strong>getBlockSalesAllowance</p>
     *
     * @tags BlockConfig
     * @name GetBlockSalesAllowance
     * @summary Get Block Sales Allowance
     * @request GET:/hotels/{hotelId}/blockSalesAllowance
     */
    getBlockSalesAllowance: (
      hotelId: string,
      query?: {
        /**
         * The ending value of the date range.
         * @format date
         */
        endDateRange?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        startDateRange?: string;
        /** Indicate to include restricted room types. */
        includeRestricted?: boolean;
        roomTypesCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockSalesAllowance, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blockSalesAllowance`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete block sales allowance range. <p><strong>OperationId:</strong>deleteBlockSalesAllowanceRange</p>
     *
     * @tags BlockConfig
     * @name DeleteBlockSalesAllowanceRange
     * @summary Delete block sales allowance range
     * @request DELETE:/hotels/{hotelId}/blockSalesAllowanceRange
     */
    deleteBlockSalesAllowanceRange: (
      hotelId: string,
      query: {
        /**
         * The ending value of the date range.
         * @format date
         */
        endDate: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        startDate: string;
        friday?: boolean;
        monday?: boolean;
        saturday?: boolean;
        sunday?: boolean;
        thursday?: boolean;
        tuesday?: boolean;
        wednesday?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blockSalesAllowanceRange`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to set block sales allowance range. <p><strong>OperationId:</strong>setBlockSalesAllowanceRange</p>
     *
     * @tags BlockConfig
     * @name SetBlockSalesAllowanceRange
     * @summary Set block sales allowance range
     * @request PUT:/hotels/{hotelId}/blockSalesAllowanceRange
     */
    setBlockSalesAllowanceRange: (
      hotelId: string,
      blockSalesAllowanceRange: BlockSalesAllowanceRange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blockSalesAllowanceRange`,
        method: 'PUT',
        body: blockSalesAllowanceRange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to retrieve multiple Sales Managers for a hotel, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagers</p>
     *
     * @tags BlockConfig
     * @name GetSalesManagers
     * @summary Get Sales Managers by Hotel.
     * @request GET:/hotels/{hotelId}/salesManagers
     */
    getSalesManagers: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        ownerCodes?: string[];
        /** First name required to fetch Sales Manager information. */
        firstName?: string;
        /** Last name required to fetch Sales Manager information. */
        lastName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<SalesManagersInfo, ExceptionDetailType>({
        path: `/hotels/${hotelId}/salesManagers`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to retrieve individual Sales Manager Goals for a hotel, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagerGoals</p>
     *
     * @tags BlockConfig
     * @name GetSalesManagerGoals
     * @summary Get Sales Manager Goals by Hotel
     * @request GET:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals
     */
    getSalesManagerGoals: (
      salesManagerId: string,
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter */
        future?: boolean;
        /**
         * Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity.
         * @uniqueItems true
         */
        fetchInstructions?: ('GroupRoomsWithCatering' | 'TransientRoom' | 'Activity')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<SalesManagerGoalsInfo, ExceptionDetailType>({
        path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to Create Sales Manager Goals for a Sales Manager ID.You must know the OPERA Sales Manager ID for this API. <p><strong>OperationId:</strong>postSalesManagerGoals</p>
     *
     * @tags BlockConfig
     * @name PostSalesManagerGoals
     * @summary Create Sales Manager Goals
     * @request POST:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals
     */
    postSalesManagerGoals: (
      salesManagerId: string,
      hotelId: string,
      createSalesManagerGoals: CreateSalesManagerGoals,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals`,
        method: 'POST',
        body: createSalesManagerGoals,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Sales Manager Goal.You must know the OPERA Sales Manager ID and Goal ID for this API. <p><strong>OperationId:</strong>putSalesManagerGoals</p>
     *
     * @tags BlockConfig
     * @name PutSalesManagerGoals
     * @summary Update Sales Manager Goal in a hotel by ID
     * @request PUT:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId}
     */
    putSalesManagerGoals: (
      salesGoalId: string,
      salesManagerId: string,
      hotelId: string,
      salesManagerGoalsInfo: SalesManagerGoalsInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals/${salesGoalId}`,
        method: 'PUT',
        body: salesManagerGoalsInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a block wash schedule. <p><strong>OperationId:</strong>postWashSchedule</p>
     *
     * @tags BlockConfig
     * @name PostWashSchedule
     * @summary Create block wash schedule
     * @request POST:/hotels/{hotelId}/washSchedules
     */
    postWashSchedule: (hotelId: string, washScheduleCriteria: WashScheduleCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/washSchedules`,
        method: 'POST',
        body: washScheduleCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete a block wash schedule. <p><strong>OperationId:</strong>deleteWashSchedule</p>
     *
     * @tags BlockConfig
     * @name DeleteWashSchedule
     * @summary Delete block wash schedule
     * @request DELETE:/hotels/{hotelId}/washSchedules/{washScheduleCode}
     */
    deleteWashSchedule: (washScheduleCode: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/washSchedules/${washScheduleCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Change a block wash schedule. <p><strong>OperationId:</strong>putWashSchedule</p>
     *
     * @tags BlockConfig
     * @name PutWashSchedule
     * @summary Change block wash schedule
     * @request PUT:/hotels/{hotelId}/washSchedules/{washScheduleCode}
     */
    putWashSchedule: (
      washScheduleCode: string,
      hotelId: string,
      washScheduleCriteria: WashScheduleCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/washSchedules/${washScheduleCode}`,
        method: 'PUT',
        body: washScheduleCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  reservationMethods = {
    /**
     * @description Use this API to get Reservation Methods. <p><strong>OperationId:</strong>getReservationMethods</p>
     *
     * @tags ChainConfig
     * @name GetReservationMethods
     * @summary Get Reservation Methods
     * @request GET:/reservationMethods
     */
    getReservationMethods: (
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
      return this.request<ReservationMethodsDetails, ExceptionDetailType>({
        path: `/reservationMethods`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Reservation Methods. <p><strong>OperationId:</strong>postReservationMethods</p>
     *
     * @tags ChainConfig
     * @name PostReservationMethods
     * @summary Create Reservation Methods
     * @request POST:/reservationMethods
     */
    postReservationMethods: (
      hotelId: string,
      reservationMethodsCriteria: ReservationMethodsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/reservationMethods`,
        method: 'POST',
        body: reservationMethodsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Reservation Methods. <p><strong>OperationId:</strong>putReservationMethods</p>
     *
     * @tags ChainConfig
     * @name PutReservationMethods
     * @summary Change Reservation Methods
     * @request PUT:/reservationMethods/{reservationMethodsId}
     */
    putReservationMethods: (
      hotelId: string,
      reservationMethodsId: string,
      reservationMethodsToBeChanged: ReservationMethodsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/reservationMethods/${reservationMethodsId}`,
        method: 'PUT',
        body: reservationMethodsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Reservation Methods. <p><strong>OperationId:</strong>deleteReservationMethods</p>
     *
     * @tags ChainConfig
     * @name DeleteReservationMethods
     * @summary Delete Reservation Methods
     * @request DELETE:/reservationMethods/{reservationMethodsId}
     */
    deleteReservationMethods: (
      hotelId: string,
      reservationMethodsId: string,
      query?: {
        reservationMethodsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/reservationMethods/${reservationMethodsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  salesManagers = {
    /**
     * @description You can use this API to retrieve multiple Sales Managers, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagersMultipleHotelIds</p>
     *
     * @tags BlockConfig
     * @name GetSalesManagersMultipleHotelIds
     * @summary Get Sales Managers.
     * @request GET:/salesManagers
     */
    getSalesManagersMultipleHotelIds: (
      hotelId: string,
      query: {
        hotelIds: string[];
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        ownerCodes?: string[];
        /** First name required to fetch Sales Manager information. */
        firstName?: string;
        /** Last name required to fetch Sales Manager information. */
        lastName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<SalesManagersInfo, ExceptionDetailType>({
        path: `/salesManagers`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Sales Manager Goals. <p><strong>OperationId:</strong>removeSalesManagerGoals</p>
     *
     * @tags BlockConfig
     * @name RemoveSalesManagerGoals
     * @summary Delete Sale Manager Goals
     * @request DELETE:/salesManagers/{salesManagerId}/salesManagerGoals
     */
    removeSalesManagerGoals: (
      hotelId: string,
      salesManagerId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        salesGoalId?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/salesManagers/${salesManagerId}/salesManagerGoals`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to retrieve individual Sales Manager Goals, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagerGoalsMultipleHotelIds</p>
     *
     * @tags BlockConfig
     * @name GetSalesManagerGoalsMultipleHotelIds
     * @summary Get Sales Manager Goals
     * @request GET:/salesManagers/{salesManagerId}/salesManagerGoals
     */
    getSalesManagerGoalsMultipleHotelIds: (
      hotelId: string,
      salesManagerId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        hotelIds?: string[];
        /** Use this indicator to fetch goal's having Production From or Arrival From dates later than the current business date or quarter */
        future?: boolean;
        /**
         * Fetch instructions that can be used to fetch details of particular Sales Manager type,ex: Group Room, Transient Room, Catering, Activity.
         * @uniqueItems true
         */
        fetchInstructions?: ('GroupRoomsWithCatering' | 'TransientRoom' | 'Activity')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<SalesManagerGoalsInfo, ExceptionDetailType>({
        path: `/salesManagers/${salesManagerId}/salesManagerGoals`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Sales Manager Goal. <p><strong>OperationId:</strong>removeSalesManagerGoal</p>
     *
     * @tags BlockConfig
     * @name RemoveSalesManagerGoal
     * @summary Delete Sale Manager Goal
     * @request DELETE:/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId}
     */
    removeSalesManagerGoal: (
      hotelId: string,
      salesGoalId: string,
      salesManagerId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/salesManagers/${salesManagerId}/salesManagerGoals/${salesGoalId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description delete Block Configuration Service Cache <p><strong>OperationId:</strong>deleteBlockConfigServiceCache</p>
     *
     * @tags BlockConfig
     * @name DeleteBlockConfigServiceCache
     * @summary  clear cache
     * @request DELETE:/services/block/cache
     */
    deleteBlockConfigServiceCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/block/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Ping Block Configuration Service <p><strong>OperationId:</strong>pingBlockConfigService</p>
     *
     * @tags BlockConfig
     * @name PingBlockConfigService
     * @summary  ping
     * @request GET:/services/block/status
     */
    pingBlockConfigService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/block/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description clearCache <p><strong>OperationId:</strong>deleteChainConfigServicesCache</p>
     *
     * @tags ChainConfig
     * @name DeleteChainConfigServicesCache
     * @summary  clear cache
     * @request DELETE:/services/chainConfig/cache
     */
    deleteChainConfigServicesCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/chainConfig/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description NA <p><strong>OperationId:</strong>pingChainConfigServices</p>
     *
     * @tags ChainConfig
     * @name PingChainConfigServices
     * @summary  ping
     * @request GET:/services/chainConfig/status
     */
    pingChainConfigServices: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/chainConfig/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  washSchedules = {
    /**
     * @description Get block wash schedules. <p><strong>OperationId:</strong>getWashSchedule</p>
     *
     * @tags BlockConfig
     * @name GetWashSchedule
     * @summary Get block wash schedule
     * @request GET:/washSchedules
     */
    getWashSchedule: (
      hotelId: string,
      query?: {
        hotelIds?: string[];
        /** Codes to be searched. */
        washCodes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<WashScheduleDetails, ExceptionDetailType>({
        path: `/washSchedules`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
