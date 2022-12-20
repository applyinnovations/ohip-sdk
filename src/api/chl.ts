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

/** Response object to fetch regional rate parity. */
export interface RegionalRateParity {
  /** Information on Room rate parity among channels or hotels */
  regionalRateParity?: RegionalRateParityType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information on Room Rate Parity among Channels/Property */
export interface RegionalRateParityType {
  /**
   * Channels and Property combination.
   * @maxItems 4000
   */
  regionalParityGroups?: RegionalParityGroupType[];
  /** @maxItems 4000 */
  hotelsInfo?: HotelChannelInfoType[];
  /** @maxItems 4000 */
  bookingChannelsInfo?: BookingChannelInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Channels and Property Group wise Rates for Room Type and Rate Plan combination. */
export interface RegionalParityGroupType {
  /**
   * Minimum and Maximum Rate on specific arrival date.
   * @maxItems 4000
   */
  regionalParityRates?: RegionalParityRateType[];
  /**
   * The code that identifies a Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The code that identifies a Booking Channel.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  bookingChannelURL?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  bookingChannelIconURL?: string;
}

/** Rate on specific arrival date. */
export interface RegionalParityRateType {
  minimumRate?: number;
  maximumRate?: number;
  /**
   * Arrival Date.
   * @format date
   * @maxLength 8
   */
  arrivalDate?: string;
  weekendDay?: boolean;
  /**
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
  /**
   * Status Code related to functionality.
   * @minLength 0
   * @maxLength 80
   */
  statusCode?: string;
  /**
   * Description of Status Code.
   * @minLength 0
   * @maxLength 2000
   */
  statusDescription?: string;
}

export interface HotelChannelInfoType {
  /**
   * Booking Channels mapping for the Hotel Code.
   * @maxItems 4000
   */
  bookingChannelMappings?: BookingChannelMappingType[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  name?: string;
}

export interface BookingChannelMappingType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
}

export interface BookingChannelInfoType {
  /**
   * Hotel Code mapping for the Booking Channel.
   * @maxItems 4000
   */
  hotelMappings?: HotelMappingType[];
  /** Collection of generic Name-Value-Pair parameters. */
  configurationParameters?: ParametersType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 240
   */
  bookingChannelType?: string;
}

export interface HotelMappingType {
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
  /**
   * @minLength 0
   * @maxLength 40
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
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

/** Response object for fetching channels. */
export interface Channels {
  /** Collection of channels based on the request criteria. */
  channels?: ChannelsType;
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
 * Identify details of channels.
 * @maxItems 4000
 */
export type ChannelsType = ChannelType[];

/** Identify details of an external system. */
export interface ChannelType {
  /** Identify main details of external system. */
  systemInfo?: SystemInfoType;
  /**
   * External system Sell By.
   * @minLength 0
   * @maxLength 20
   */
  sellBy?: string;
  /**
   * External system Add-on license. Available for ADS only.
   * @minLength 0
   * @maxLength 20
   */
  addOnLicense?: string;
  /**
   * External system rate levels details.
   * @maxItems 4000
   */
  rateLevels?: SystemRateLevelType[];
  /**
   * External system rate categories details.
   * @maxItems 4000
   */
  rateCategories?: SystemRateCategoryType[];
  /**
   * External system room type details.
   * @maxItems 4000
   */
  roomTypes?: SystemRoomTypeType[];
  /**
   * External system carrier details.
   * @maxItems 4000
   */
  carriers?: SystemCarrierType[];
  /**
   * External system error details.
   * @maxItems 4000
   */
  errorCodes?: SystemErrorType[];
  /** Parameters of external system. */
  parameters?: ParametersType;
}

/** External system attributes. */
export interface SystemInfoType {
  /**
   * External system name.
   * @minLength 0
   * @maxLength 40
   */
  systemName?: string;
  /**
   * Cannel Website URL
   * @minLength 0
   * @maxLength 2000
   */
  websiteURL?: string;
  /**
   * Channel Icon URL
   * @minLength 0
   * @maxLength 2000
   */
  iconURL?: string;
  /**
   * External system code such as TRAVELOCITY, EXPEDIA, etc.
   * @minLength 0
   * @maxLength 20
   */
  systemCode?: string;
  /**
   * External system type such as CHANNEL, OXI, etc.
   * @minLength 0
   * @maxLength 20
   */
  systemType?: string;
  /**
   * External system subtype such as GDS, WEB, etc.
   * @minLength 0
   * @maxLength 20
   */
  systemSubType?: string;
  /** Indicates whether code is inactive or not. */
  inactive?: boolean;
}

/** Identify rate level details of external system. */
export interface SystemRateLevelType {
  /** Code and description of rate level. */
  rateLevelCode?: CodeDescriptionType;
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

/** Identify rate category details of external system. */
export interface SystemRateCategoryType {
  /** Code and description of rate category. */
  rateCategoryCode?: CodeDescriptionType;
  /**
   * Shopping category of rate category external system.
   * @minLength 0
   * @maxLength 1
   */
  shoppingCategory?: string;
  /** Indicates whether external system rate category is negotiated or not. */
  negotiated?: boolean;
  /** Indicates whether external system rate category is active or not. */
  inactive?: boolean;
}

/** Identify room type details of external system. */
export interface SystemRoomTypeType {
  /** Code and description of room type. */
  roomTypeCode?: CodeDescriptionType;
  /**
   * Inactive date of room type external system.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
}

/** Identify carrier details of external system. */
export interface SystemCarrierType {
  /** Code and description of carrier. */
  carrierCode?: CodeDescriptionType;
  /** Indicates whether external system carrier is merchant or not. */
  merchant?: boolean;
  /** Indicates whether external system carrier is active or not. */
  inactive?: boolean;
}

/** Identify error details of external system. */
export interface SystemErrorType {
  /**
   * Code and description of error.
   * @minLength 0
   * @maxLength 50
   */
  errorCode?: string;
  /**
   * description of error.
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Prefix of system error code.
   * @minLength 0
   * @maxLength 20
   */
  errorPrefix?: string;
  /**
   * Suffix of system error code.
   * @minLength 0
   * @maxLength 20
   */
  errorSuffix?: string;
  /** Booking response of system error code. */
  bookingResponse?: SystemErrorBookingResponseType;
  /** Validity date of system error code. */
  dateRange?: TimeSpanType;
  /** Indicates whether system error code is manual process or not */
  manualProcess?: boolean;
}

/** Simple type for external system booking response. */
export enum SystemErrorBookingResponseType {
  PendingNeeded = 'PendingNeeded',
  Unconfirmed = 'Unconfirmed',
  Cancelled = 'Cancelled',
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

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Request object to copy the channel account contract and create a new contract. */
export interface ChannelAccountContractsCopy {
  /** Channel account information to create a copy. */
  channelAccountContractsCopy?: ChannelAccountContractsCopyType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of channel account contracts information to create a copy of.
 * @maxItems 4000
 */
export type ChannelAccountContractsCopyType = ChannelAccountContractCopyType[];

/** Channel account contract type to hold account and contract details to copy. */
export interface ChannelAccountContractCopyType {
  /** Target Profile Id to which contract to be copied. User can populate either Profile ID or AccountCode. */
  targetProfileId?: UniqueIDType;
  /**
   * Target Account code to which contract to be copied. This is utilised to find account when TargetProfileID is not provided.
   * @minLength 0
   * @maxLength 20
   */
  targetAccountCode?: string;
  /**
   * Contract details to copy.
   * @maxItems 4000
   */
  channelAccountContractCopyDetails?: ChannelAccountContractCopyDetailsType[];
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

/** Channel account contract type to hold account and contract details to copy. */
export interface ChannelAccountContractCopyDetailsType {
  /** Holds channel account profile identifier of the contract to be copied. */
  sourceProfileId?: UniqueIDType;
  /** Holds contract Id of the contract to be copied. */
  sourceContractId?: UniqueIDType;
  /**
   * Holds contract No of the new contract to create.
   * @minLength 0
   * @maxLength 20
   */
  contractNo?: string;
  /**
   * Holds begin date of the new contract.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Holds end date of the new contract.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Holds Note for the new contract.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Flag to retain contract No or generate new one. */
  retainContractNo?: boolean;
}

/** Response object of the Channel account contract copy request. */
export interface ChannelAccountContractsDetailsCopy {
  /** Response details of the contracts sent for copy. */
  channelAccountContractsCopyResponse?: ChannelAccountContractsCopyResponseType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of channel account contracts information to create a copy of.
 * @maxItems 4000
 */
export type ChannelAccountContractsCopyResponseType = ChannelAccountContractCopyResponseType[];

/** Channel account contract type to hold account and contract details to copy. */
export interface ChannelAccountContractCopyResponseType {
  /** Target account Id to which contract copied. */
  accountId?: UniqueIDType;
  /**
   * Target Account code to which contract is copied.
   * @minLength 0
   * @maxLength 20
   */
  accountCode?: string;
  /**
   * Holds contract Id of the contract copied.
   * @maxItems 4000
   */
  contractResponseInformation?: {
    /** Holds contract Id of the contract copied. */
    contractId?: UniqueIDType;
    /**
     * Holds contract No of the contract which is copied.
     * @minLength 0
     * @maxLength 20
     */
    sourceContractNo?: string;
    /**
     * Holds contract No of the new contract created.
     * @minLength 0
     * @maxLength 20
     */
    targetContractNo?: string;
    /** Error message if failed to copy the contract. */
    errorMessage?: ErrorType;
    /** Flag to identify contract is copied successfully. */
    success?: boolean;
  }[];
  /** Error message if failed to copy all the contracts from account. */
  errorMessage?: ErrorType;
}

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

/** Response object of the Channel accounts fetch request. */
export interface ChannelAccountsSummary {
  /** Type to contain summary details of the channel account. */
  channelAccounts?: ChannelAccountsSummaryType;
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
 * This type holds collection of channel accounts summary information.
 * @maxItems 4000
 */
export type ChannelAccountsSummaryType = ChannelAccountSummaryType[];

/** To hold channel account detailed information. */
export interface ChannelAccountSummaryType {
  /**
   * Property of the Billing Account.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Billing Account profile Id details. */
  profileIdList?: UniqueIDListType;
  /** Detailed Account information. */
  accountDetails?: ChannelAccountDetailsType;
  /** Detailed information on an address for the Billing Account contact. */
  addressInfo?: AddressInfoType;
  /** Detailed information on telephone/ fax for the Billing Account contact. */
  telephoneInfo?: TelephoneInfoType;
  /** Detailed information on an eMail address for the customer contact. */
  emailInfo?: EmailInfoType;
  /**
   * Channel account contract ends on date.
   * @format date
   * @maxLength 8
   */
  contractEndsOn?: string;
  /** Indicators of additional information attached to the profile */
  channelAccountIndicators?: IndicatorsType;
  /** List of all the hotels where channel account is associated. */
  hotels?: CodeListType;
  /** Indicates whether the account is inactive or not. */
  inactive?: boolean;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

/** To hold channel account detailed information. */
export interface ChannelAccountDetailsType {
  /**
   * Holds Account code for which details are fetched.
   * @minLength 0
   * @maxLength 20
   */
  accountCode?: string;
  /**
   * Holds Template Account code on which current account is based on.
   * @minLength 0
   * @maxLength 20
   */
  templateAccountCode?: string;
  /** Holds Account type for which details are fetched. */
  accountType?: ChannelAccountTypeType;
  /**
   * Holds Account Name for which details are fetched.
   * @minLength 0
   * @maxLength 80
   */
  accountName?: string;
  /**
   * Account contact name information.
   * @minLength 0
   * @maxLength 40
   */
  contactName?: string;
  /**
   * Holds ECU No alias AR_No.
   * @minLength 0
   * @maxLength 40
   */
  eCUNo?: string;
}

/** Represents channel account TEMPLATE type. */
export enum ChannelAccountTypeType {
  Property = 'Property',
  Chain = 'Chain',
  Dealer = 'Dealer',
  Subsidiary = 'Subsidiary',
  Routing = 'Routing',
  Template = 'Template',
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

/** @maxItems 4000 */
export type CodeListType = string[];

/** Request object to create the channel accounts. */
export interface ChannelAccounts {
  /** Channel account information to create a new channel account. */
  channelAccounts?: ChannelAccountsInformationType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Channel account information object to hold details of channel account.
 * @maxItems 4000
 */
export type ChannelAccountsInformationType = ChannelAccountInformationType[];

/** To hold channel account detailed information. */
export interface ChannelAccountInformationType {
  /** Detailed Account information. */
  accountDetails?: ChannelAccountDetailsType;
  /** Detailed Account setup information. */
  accountSetupDetails?: ChannelAccountSetupDetailsType;
  /** Account contact information. */
  contactInformation?: ChannelAccountContactType;
  /** Account notes information. */
  channelAccountNotes?: ChannelAccountNotesType;
  /** Communication details assigned to account. */
  communicationDetails?: ChannelAccountCommunicationType;
  /** Communication details assigned to account. */
  contractInformation?: ChannelAccountContractsInformationType;
  /** Indicators of additional information attached to the profile */
  channelAccountIndicators?: IndicatorsType;
}

/** To hold channel account detailed setup information. */
export interface ChannelAccountSetupDetailsType {
  /** Hotels information where channel account is associated/active with. */
  hotelCodes?: CodeListType;
  /**
   * Chain information where current account is configured with.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * Holds Currency code.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /** Hold list of account codes whose template account is current account. */
  instances?: CodeListType;
  /**
   * The rebate date for the account.
   * @format date
   * @maxLength 8
   */
  rebateDate?: string;
  /**
   * The date that account was marked as inactive.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /**
   * Contract End date.
   * @format date
   * @maxLength 8
   */
  contractEndsOn?: string;
  /**
   * Property which registered this channel account.
   * @minLength 0
   * @maxLength 20
   */
  registeredHotel?: string;
}

/** Holds channel account contact information. */
export interface ChannelAccountContactType {
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
}

/** Holds channel account notes information. */
export interface ChannelAccountNotesType {
  /**
   * Holds Note for the account.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
}

/** Holds channel account communication information. */
export interface ChannelAccountCommunicationType {
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
}

/**
 * Channel account contract information object to hold details of channel account contract.
 * @maxItems 4000
 */
export type ChannelAccountContractsInformationType = ChannelAccountContractInformationType[];

/** To hold channel account contract detailed information. */
export interface ChannelAccountContractInformationType {
  /** Holds contract Id of the contract. */
  contractId?: UniqueIDType;
  /**
   * Holds contract No of the contract.
   * @minLength 0
   * @maxLength 20
   */
  contractNo?: string;
  /**
   * Holds begin date of the contract.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Holds end date of the contract.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Holds Note for the account contract.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Holds contract elements information. */
  channelAccountContractElements?: ChannelAccountContractElementsType;
  /** Flag to mark respective statements which were generated on these contracts to be regenerated. */
  markStatementsToRegenerate?: boolean;
}

/**
 * Channel account contract elements information object to hold details of contract elements.
 * @maxItems 4000
 */
export type ChannelAccountContractElementsType = ContractElementInformationType[];

/** To hold channel account contract element detailed information. */
export interface ContractElementInformationType {
  /** Contract Id of the contract. */
  contractId?: UniqueIDType;
  /** Sequence identifies contract element per contract. */
  sequence?: number;
  /** Holds Fee type of the contract element. If Fee type is not populated, it will be considered to delete this contract element. */
  feeType?: ContractFeeTypeType;
  /**
   * Holds channel type of the contract element.
   * @minLength 0
   * @maxLength 240
   */
  bookingChannelType?: string;
  /**
   * Holds channel of the contract element.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /** Price information for this contract element. */
  contractPricing?: ContractPricingType;
  /** Holds Contract Range per number of Properties, Rooms or reservations information. */
  contractRangeInformation?: ContractRangeInformationType;
  /** Holds frequency of billing. */
  frequency?: ContractPriceFrequencyType;
  /**
   * Holds Note for the contract element.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
}

/** To specify contract element is for Miscellaneous fee. */
export enum ContractFeeTypeType {
  Setup = 'Setup',
  Maintenance = 'Maintenance',
  Transaction = 'Transaction',
  Fax = 'Fax',
  MinimumFee = 'MinimumFee',
  Miscellaneous = 'Miscellaneous',
}

/** Price information applied as part of contract. */
export interface ContractPricingType {
  /** Price that will be billed as part of this contract element. */
  price?: CurrencyAmountType;
  /** Identifies weather Price to be billed per Reservation, property, room or as a flat fee. */
  pricePer?: ContractPriceType;
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

/** To specify price will be billed per reservation. This is allowed only if Fee type is Transaction or Fax. */
export enum ContractPriceType {
  FlatFee = 'FlatFee',
  Property = 'Property',
  Room = 'Room',
  Reservation = 'Reservation',
}

/** Holds Contract Range per number of Properties, Rooms or reservations information. */
export interface ContractRangeInformationType {
  /** Holds Contract Range per number of Properties, Rooms or reservations information. */
  contractTransaction?: ContractTransactionType;
  /** Holds No of reservations range for Transaction Fee type. */
  range?: number;
  /** Holds No of months calculated while generating statements for Maintenance Fee type. */
  months?: number;
  /** Holds minimum and maximum range per number of Properties/Rooms/Reservations value. */
  contractRange?: NumberRangeType;
}

/** To specify range information is considered per number of Rooms. This is allowed only if Fee type is Maintenance. */
export enum ContractTransactionType {
  Properties = 'Properties',
  Rooms = 'Rooms',
}

/** Date Range with Start and End dates. */
export interface NumberRangeType {
  /** The starting value of the range of number */
  from?: number;
  /** The ending value of the range of number */
  to?: number;
}

/** To specify bills will be generated on Yearly basis. */
export enum ContractPriceFrequencyType {
  Monthly = 'Monthly',
  Quarterly = 'Quarterly',
  HalfYearly = 'HalfYearly',
  Yearly = 'Yearly',
}

/** Channel account information to create a new channel account. */
export type ChannelAccountsToChange = ChannelAccountType[];

/** A collection of Channel Account Profile Id and account details information. */
export interface ChannelAccountType {
  /** Unique Billing account profile identifier fetched. */
  profileId?: ProfileId;
  /** Provides detailed information regarding Channel Account. */
  channelAccountInformation?: ChannelAccountInformationType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ProfileId {
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

/** Response object of the Channel account fetch request. Contains detailed information for the channel account. */
export interface ChannelAccount {
  /** Channel account detailed information type to contain details of channel account including account information, setup details, communication information. */
  channelAccount?: ChannelAccountType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to create the channel account contracts. */
export interface ChannelAccountContracts {
  /** Channel account information to create a new channel account contracts. */
  channelAccountContracts?: ChannelAccountContractsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Channel account contracts type to hold account and contract details. */
export interface ChannelAccountContractsType {
  /** Unique channel account profile identifier. */
  profileId?: ProfileId;
  /**
   * Holds Account code of the channel account.
   * @minLength 0
   * @maxLength 20
   */
  accountCode?: string;
  /**
   * Holds Account Name of the channel account.
   * @minLength 0
   * @maxLength 80
   */
  accountName?: string;
  /** Provides detailed information regarding Channel Account contract. */
  channelAccountContractsInformation?: ChannelAccountContractsInformationType;
}

/** Response object of the channel account contract elements fetch request. Contains detailed information for the channel contract elements. */
export interface ChannelAccountContractElements {
  /** Holds list of contract elements detail. */
  contractElements?: ChannelAccountContractElementsType;
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

/** Request object for changing external system amenities. */
export interface Amenities {
  /** External system amenities to be changed. */
  amenities?: AmenitiesMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about an external system amenity mapping.
 * @maxItems 4000
 */
export type AmenitiesMappingType = AmenityMappingType[];

/** Base external system mapping info. */
export interface AmenityMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /**
   * Code used inside the OPERA System
   * @minLength 0
   * @maxLength 20
   */
  localSystemCode?: string;
  /**
   * Code used in the External System
   * @minLength 0
   * @maxLength 20
   */
  externalSystemCode?: string;
  /**
   * Detailed Description of the given entity.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Start and End Date of the mapping validity. If value is not supplied that mapping will be valid forever. */
  dateRange?: TimeSpanType;
  /** User defined logical group name for the amenities. */
  amenityGroup?: AmenityGroupType;
}

/** User defined logical group name for the amenities. */
export enum AmenityGroupType {
  PropertyFeatures = 'PropertyFeatures',
  RoomFeatures = 'RoomFeatures',
  ProductsFeatures = 'ProductsFeatures',
  BedCodes = 'BedCodes',
}

/** Response object for fetching external system amenities. */
export interface AmenitiesMapping {
  /** Collection of external system amenities based on the request criteria. */
  amenitiesMapping?: AmenitiesMappingType;
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

/** Request object for publishing rate availability to channels. */
export interface ChannelAvailability {
  /** Availability information to be published. */
  publishAvailability?: PublishRatePlanType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information to publish a new rate code. */
export interface PublishRatePlanType {
  /**
   * The target channel to send the updated rate information to the external channel.
   * @minLength 0
   * @maxLength 40
   */
  channel?: string;
  /**
   * The source Property to send the updated rate information to the external channel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Date from which rate code will be effective on the channel.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Date on which rate code will cease to be effective.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** The selected Channel Rate Codes for update. */
  channelCodes?: {
    /** The selected Channel Rate Codes for update. */
    channelRatePlanCodes?: CodeListType;
    /** The selected Channel Rate Codes for update. */
    channelRoomTypes?: CodeListType;
  };
  /** The selected property Rate Codes for update. */
  hotelCodes?: {
    /** The selected property Rate Codes for update. */
    ratePlanCodes?: CodeListType;
    /** The selected property Rate Codes for update. */
    roomTypes?: CodeListType;
  };
}

/** Response object of the channel billing statements fetch request. */
export interface ChannelBillingStatementSummaries {
  /** Summary information of channel billing statements. */
  channelBillingStatementsSummary?: ChannelBillingStatementSummariesType;
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
 * Holds summary of channel billing statement.
 * @maxItems 4000
 */
export type ChannelBillingStatementSummariesType = ChannelBillingStatementSummaryType[];

/** To hold channel account statement detailed information. */
export interface ChannelBillingStatementSummaryType {
  /** Holds statement Id. */
  statementId?: UniqueIDType;
  /** List of Billing Account profile code's. */
  accountCodeList?: CodeListType;
  /**
   * Holds date on which statement is created.
   * @format date
   * @maxLength 8
   */
  statementDate?: string;
  /**
   * Holds begin date of the statement.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Holds end date of the statement.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Holds date on which statement is locked.
   * @format date
   * @maxLength 8
   */
  lockDate?: string;
  /**
   * Holds Note for the statement.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Holds Total amount information from statement accounts generated. */
  totalAmount?: CurrencyAmountType;
  /** Flag to identify Statements were generated or not. */
  generated?: boolean;
  /** Flag to identify Statements generated were dirty or not. */
  dirty?: boolean;
}

/** Request object to Change channel billing statements. */
export interface ChannelBillingStatements {
  /** Channel billing statements information to Change. */
  channelBillingStatements?: ChannelBillingStatementsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Provides detailed information regarding channel billing statement.
 * @maxItems 4000
 */
export type ChannelBillingStatementsType = ChannelBillingStatementType[];

/** To hold channel account statement detailed information. */
export interface ChannelBillingStatementType {
  /** Holds statement Id. */
  statementId?: UniqueIDType;
  /** List of Billing Account profile code's. */
  accountCodeList?: CodeListType;
  /**
   * Holds date on which statement is created.
   * @format date
   * @maxLength 8
   */
  statementDate?: string;
  /**
   * Holds begin date of the statement.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Holds end date of the statement.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Holds date on which statement is locked.
   * @format date
   * @maxLength 8
   */
  lockDate?: string;
  /**
   * Holds Note for the statement.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Holds Total amount information from statement accounts generated. */
  totalAmount?: CurrencyAmountType;
  /** Flag to identify Statements were generated or not. */
  generated?: boolean;
  /** Flag to identify Statements generated were dirty or not. */
  dirty?: boolean;
  /** Holds Channel account statements information. */
  channelAccountStatements?: ChannelStatementAccountsType;
}

/**
 * Provides detailed information regarding Channel Account contract.
 * @maxItems 4000
 */
export type ChannelStatementAccountsType = ChannelStatementAccountType[];

/** Channel account statement type to hold statement details. WS wont update any statement account information except Note and account details information. */
export interface ChannelStatementAccountType {
  /** Profile ID of the account statement. */
  profileId?: UniqueIDType;
  /**
   * Holds Account code of the channel account statement.
   * @minLength 0
   * @maxLength 20
   */
  accountCode?: string;
  /** Contract ID of the account statement. */
  contractId?: UniqueIDType;
  /**
   * Holds begin date of the account statement.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * Holds end date of the account statement.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Holds Note for the account statement.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Holds Total amount information from details in channel account currency. */
  totalDetailsAmount?: CurrencyAmountType;
  /** Holds Channel account statement details. */
  channelAccountStatementDetails?: ChannelStatementDetailsType;
}

/**
 * Provides detailed information regarding Channel Account statements.
 * @maxItems 4000
 */
export type ChannelStatementDetailsType = ChannelStatementDetailType[];

/** To hold channel account contract element detailed information. */
export interface ChannelStatementDetailType {
  /** Contract Id of the contract. */
  contractId?: UniqueIDType;
  /** Sequence identifies contract element per contract. */
  sequence?: number;
  /** Holds Fee type of the contract element. If Fee type is not populated, it will be considered to delete this contract element. */
  feeType?: ContractFeeTypeType;
  /**
   * Holds channel type of the contract element.
   * @minLength 0
   * @maxLength 240
   */
  bookingChannelType?: string;
  /**
   * Holds channel of the contract element.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /** Price information for this contract element. */
  contractPricing?: ContractPricingType;
  /** Holds Contract Range per number of Properties, Rooms or reservations information. */
  contractRangeInformation?: ContractRangeInformationType;
  /** Holds frequency of billing. */
  frequency?: ContractPriceFrequencyType;
  /**
   * Holds Note for the contract element.
   * @minLength 0
   * @maxLength 4000
   */
  note?: string;
  /** Statement Id of the statement detail. */
  statementId?: UniqueIDType;
  /**
   * Holds the property for the statement detail.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Holds the value of property that user changed from to find and update.
   * @minLength 0
   * @maxLength 20
   */
  oldHotelCode?: string;
  /** Number of Units (transactions, rooms or properties). */
  quantity?: number;
  /**
   * Holds Routing account. If no value is provided, it will be defaulted to *
   * @minLength 0
   * @maxLength 20
   */
  routingAccount?: string;
  /** Holds contract amount calculated while generating the contracts. */
  contractAmount?: CurrencyAmountType;
  /** Holds amount per line calculated while generating the contracts. */
  invoiceAmount?: CurrencyAmountType;
  /** Holds the default Order By value. */
  orderByList?: OrderByListType;
}

/** @maxItems 4000 */
export type OrderByListType = {
  /** @maxLength 2000 */
  attributeName?: string;
  orderType?: OrderByAscDescType;
}[];

export enum OrderByAscDescType {
  Asc = 'Asc',
  Desc = 'Desc',
}

/** Response object of the channel billing statement fetch request. */
export interface ChannelBillingStatement {
  /** Detailed information of channel billing statement. */
  channelBillingStatement?: ChannelBillingStatementType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object of the channel account statement details fetch request. */
export interface ChannelBillingStatementDetails {
  /** Holds list of channel statement details. */
  channelStatementDetails?: ChannelStatementDetailsType;
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

/** Response object of the channel account statement details statistics fetch request. */
export interface StatementDetailsStatistics {
  /** Holds statement details statistics. */
  channelStatementDetails?: StatementDetailsStatisticsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Channel statement details statistics . */
export interface StatementDetailsStatisticsType {
  /** Channel billing statement details statistics by Resort. */
  detailsByResort?: StatisticDetailsType;
  /** Channel billing statement details statistics by Channel. */
  detailsByChannel?: StatisticDetailsType;
  /** Channel billing statement details statistics by Channel type. */
  detailsByChannelType?: StatisticDetailsType;
  /** Channel billing statement details statistics by Fee type. */
  detailsByFeeType?: StatisticDetailsType;
}

/**
 * Holds the statistic details for the statement details.
 * @maxItems 4000
 */
export type StatisticDetailsType = StatementDetailsStatisticType[];

/** Channel statement details statistics. */
export interface StatementDetailsStatisticType {
  /**
   * Holds the property for the statement detail statistic By resort.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Holds channel of the statement details statistic By Channel.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Holds channel type of the statement details statistic By Channel Type.
   * @minLength 0
   * @maxLength 240
   */
  bookingChannelType?: string;
  /** Holds Fee type of the statement details statistic By Fee Type. */
  feeType?: ContractFeeTypeType;
  /** Holds total contract amount for all the statement details grouped by Resort/Channel/Channel Type/Fee Type. */
  contractAmount?: CurrencyAmountType;
  /** Holds invoice amount for all the statement details grouped by Resort/Channel/Channel Type/Fee Type. */
  invoiceAmount?: CurrencyAmountType;
  /** Channel billing statement details record count grouped by Resort/Channel/Channel Type/Fee Type. */
  detailsCount?: number;
}

/** Response object for fetching channel-hotel card type mappings. */
export interface ChannelCardTypeMappingDetails {
  /** Paging information and collection of channel-hotel card type mappings. */
  channelCardTypeMappings?: {
    /** Channel-hotel card type mapping and its details. */
    channelCardTypeMapping?: ChannelCardTypeMappingType[];
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Channel-hotel card type mapping information. */
export interface ChannelCardTypeMappingType {
  /**
   * New channel card type for the existing card type mapping.
   * @minLength 0
   * @maxLength 20
   */
  newChannelCardType?: string;
  /**
   * Inactive date of card type mapping.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /**
   * Hotel code of card type mapping.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Booking channel code of card type mapping.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Card type of card type mapping.
   * @minLength 0
   * @maxLength 20
   */
  cardType?: string;
  /**
   * Channel card type of card type mapping.
   * @minLength 0
   * @maxLength 20
   */
  channelCardType?: string;
}

/** Request object for changing existing external system credit cards. */
export interface CreditCards {
  /** External system credit cards to be changed. */
  creditCards?: CreditCardsMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about an external system credit card mapping.
 * @maxItems 4000
 */
export type CreditCardsMappingType = CreditCardMappingType[];

/** Base external system mapping info. */
export interface CreditCardMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /**
   * Code used inside the OPERA System
   * @minLength 0
   * @maxLength 20
   */
  localSystemCode?: string;
  /**
   * Code used in the External System
   * @minLength 0
   * @maxLength 20
   */
  externalSystemCode?: string;
  /**
   * Detailed Description of the given entity.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Start and End Date of the mapping validity. If value is not supplied that mapping will be valid forever. */
  dateRange?: TimeSpanType;
}

/** Response object for fetching external system credit cards. */
export interface CreditCardsMapping {
  /** Collection of external system credit cards based on the request criteria. */
  creditCardsMapping?: CreditCardsMappingType;
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

/** Response object after fetch Hotel Letters associated with the Booking Channels */
export interface FetchedChannelHotelLetters {
  /** Retrieve the collection detail of Hotel Letters associated with the booking channel based on the search criteria */
  channelHotelLetters?: ChannelHotelLettersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of Hotel Letters Type
 * @maxItems 4000
 */
export type ChannelHotelLettersType = ChannelHotelLetterType[];

/** Provide unique identification of Hotel Letter associated with a Booking Channel. */
export interface ChannelHotelLetterType {
  /** Booking channel code associated to the hotel letters. */
  bookingChannel?: CodeDescriptionType;
  /**
   * Hotel code which the hotel letters belong to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Language code associated with the hotel letters. */
  languageCode?: CodeDescriptionType;
  /** Letter Type associated to hotel letters. */
  letterType?: LetterTypeType;
  /**
   * Name of the letter that associated to Hotel Letter.
   * @minLength 0
   * @maxLength 100
   */
  letterName?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Represents Inquiry Letter Type. */
export enum LetterTypeType {
  Confirmation = 'Confirmation',
  Cancellation = 'Cancellation',
  BanquetEventOrder = 'BanquetEventOrder',
  Contract = 'Contract',
  Inquiry = 'Inquiry',
}

/** Request object to create new Hotel Letters associated with the Channels */
export interface ChannelHotelLettersToBeCreated {
  /** Hotel Letters associated with the Booking Channel to be created. */
  channelHotelLetters?: ChannelHotelLettersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to update existing Hotel Letters associated with the Booking Channels */
export interface ChannelHotelLettersToBeChanged {
  /** Hotel Letters associated with a booking channel to be changed. */
  channelHotelLetters?: ChannelHotelLettersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing existing external system currencies. */
export interface Currencies {
  /** External system currencies to be changed. */
  currencies?: CurrenciesMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about an external currency mapping.
 * @maxItems 4000
 */
export type CurrenciesMappingType = CurrencyMappingType[];

/** Base external system mapping info. */
export interface CurrencyMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /**
   * Code used inside the OPERA System
   * @minLength 0
   * @maxLength 20
   */
  localSystemCode?: string;
  /**
   * Code used in the External System
   * @minLength 0
   * @maxLength 20
   */
  externalSystemCode?: string;
  /**
   * Detailed Description of the given entity.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Start and End Date of the mapping validity. If value is not supplied that mapping will be valid forever. */
  dateRange?: TimeSpanType;
  /** Number of decimal positions used by the currency. */
  lanyonDecimalPosition?: number;
  /** Number of decimal positions used by the currency as per the channel. */
  channelDecimalPosition?: number;
}

/** Response object for fetching external system currencies. */
export interface CurrenciesMapping {
  /** Collection of external system currencies based on the request criteria. */
  currenciesMapping?: CurrenciesMappingType;
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

/** Response object for fetching distribution templates based on search criteria. */
export interface DistributionTemplates {
  /** Collection of chain level distribution templates. */
  distributionTemplates?: DistributionTemplatesType;
  /** Collection of hotel level distribution templates. */
  hotelsDistributionTemplates?: HotelsDistributionTemplatesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about a distribution template.
 * @maxItems 4000
 */
export type DistributionTemplatesType = DistributionTemplateType[];

/** Information about a distribution template. */
export interface DistributionTemplateType {
  /**
   * Description of the distribution template.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Classification or grouping of the distribution template.
   * @minLength 0
   * @maxLength 2000
   */
  type?: string;
  /** Overrides availability of configuring negotiated rates given Channel is flagged as negotiated. */
  negotiatedRate?: boolean;
  /** Flag that indicates whether distribution template is inactive or not. */
  inactive?: boolean;
  /** Display sequence of the distribution template. */
  displaySequence?: number;
  /** Information about channel rates where distribution template will be distributed to. */
  channelRates?: DistributionTemplateChannelRatesType;
  /**
   * Uniquely identifies the distribution template.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
}

/**
 * Information about channel rate where distribution template will be distributed to.
 * @maxItems 4000
 */
export type DistributionTemplateChannelRatesType = DistributionTemplateChannelRateType[];

/** Information about channel rates of a distribution template. */
export interface DistributionTemplateChannelRateType {
  /** Main details of external system. */
  systemInfo?: SystemInfoType;
  /**
   * Channel Rate Code where distribution template will be distributed to.
   * @minLength 0
   * @maxLength 20
   */
  channelRateCode?: string;
  /**
   * Channel Rate Category where distribution template will be distributed to.
   * @minLength 0
   * @maxLength 20
   */
  channelRateCategory?: string;
  /**
   * Channel Rate Level where distribution template will be distributed to.
   * @minLength 0
   * @maxLength 20
   */
  channelRateLevel?: string;
  /** Regional Availability flag which will be the default value when rate code is distributed to channels. */
  regionalAvailability?: boolean;
  /** Rate update flag which will be the default value when rate code is distributed to channels. */
  rateUpdate?: boolean;
  /** Restriction update flag which will be the default value when rate code is distributed to channels. */
  restrictionUpdate?: boolean;
  /** Return SGA flag which will be the default value when rate code is distributed to channels. */
  returnSGA?: boolean;
}

/**
 * Information about a hotel level distribution template.
 * @maxItems 4000
 */
export type HotelsDistributionTemplatesType = HotelDistributionTemplatesType[];

/** Collection of distribution templates. */
export interface HotelDistributionTemplatesType {
  /**
   * Information about a distribution template.
   * @maxItems 4000
   */
  distributionTemplate?: DistributionTemplateType[];
  /**
   * Hotel code where distribute templates belong to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Request object for changing external system guarantees. */
export interface Guarantees {
  /** External system guarantees to be changed. */
  guarantees?: GuaranteesMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about an external system guarantee mapping.
 * @maxItems 4000
 */
export type GuaranteesMappingType = GuaranteeMappingType[];

/** Base external system mapping info. */
export interface GuaranteeMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /**
   * Code used inside the OPERA System
   * @minLength 0
   * @maxLength 20
   */
  localSystemCode?: string;
  /**
   * Code used in the External System
   * @minLength 0
   * @maxLength 20
   */
  externalSystemCode?: string;
  /**
   * Detailed Description of the given entity.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Start and End Date of the mapping validity. If value is not supplied that mapping will be valid forever. */
  dateRange?: TimeSpanType;
  /**
   * Requirement code of guarantee.
   * @minLength 0
   * @maxLength 20
   */
  requirementCode?: string;
}

/** Response object for fetching external system guarantees. */
export interface GuaranteesMapping {
  /** Collection of external system guarantees based on the request criteria. */
  guaranteesMapping?: GuaranteesMappingType;
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

/** Request object for changing existing external system properties. */
export interface Properties {
  /** External system properties to be changed. */
  properties?: PropertiesMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about an external property mapping.
 * @maxItems 4000
 */
export type PropertiesMappingType = PropertyMappingType[];

/** Base external system mapping info. */
export interface PropertyMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /** Initial Upload or not. */
  initialUpload?: boolean;
  /**
   * Code used inside the OPERA System
   * @minLength 0
   * @maxLength 20
   */
  localSystemCode?: string;
  /**
   * Code used in the External System
   * @minLength 0
   * @maxLength 20
   */
  externalSystemCode?: string;
  /**
   * Detailed Description of the given entity.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Start and End Date of the mapping validity. If value is not supplied that mapping will be valid forever. */
  dateRange?: TimeSpanType;
  /**
   * City code of the channel hotel.
   * @minLength 0
   * @maxLength 20
   */
  city?: string;
  /** Maximum room limit for the channel hotel reservation. */
  roomLimit?: number;
  /** Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled. */
  bookingLimit?: number;
  /**
   * Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel.
   * @minLength 0
   * @maxLength 1
   */
  hotelChainId?: string;
  /**
   * Chain code for the channel-hotel mapping.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /** Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on. */
  prevailingRates?: boolean;
  /** ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS. */
  aRIEnabled?: boolean;
  /**
   * External system Add-on license. This is mandatory when Channel Type is ADS.
   * @minLength 0
   * @maxLength 20
   */
  addOnLicense?: string;
  /** Rate code revenue thresholds information. */
  channelHotelCodeMappingBuckets?: ChannelHotelCodeMappingBucketsType;
}

/** Channel-hotel mapping buckets information. */
export interface ChannelHotelCodeMappingBucketsType {
  /**
   * Default rate code revenue thresholds.
   * @maxItems 3
   */
  channelHotelCodeMappingBucket?: ChannelHotelCodeMappingBucketType[];
  /**
   * Default rate code to be used to calculate the total revenue.
   * @minLength 0
   * @maxLength 20
   */
  defaultRateCode?: string;
  /** Flag indicating if channel resort mapping is available. */
  available?: boolean;
}

/** Channel-hotel mapping bucket information. */
export interface ChannelHotelCodeMappingBucketType {
  /** Low revenue threshold. */
  lowRevenueThreshold?: number;
  /** High revenue threshold. */
  highRevenueThreshold?: number;
  /**
   * Default rate code of channel hotel.
   * @minLength 0
   * @maxLength 20
   */
  defaultRateCode?: string;
}

/** Response object for fetching external system properties. */
export interface PropertiesMapping {
  /** Collection of external system properties based on the request criteria. */
  propertiesMapping?: PropertiesMappingType;
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

/** Response object for fetching channel marketing texts. */
export interface ChannelMarketingTextsInfo {
  /** List of channel marketing texts based on the request criteria. */
  marketingTexts?: MarketingTextsType;
  /** Reference hotel info for the hotels in the result set. */
  hotelsInfo?: HotelChannelInfoType[];
  /** Reference booking channel info for booking channels in the result set. */
  bookingChannelsInfo?: BookingChannelInfoType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** @maxItems 4000 */
export type MarketingTextsType = MarketingTextType[];

/** Information about the the Marketing text for the Channel */
export interface MarketingTextType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  newHotelCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  newTransactionType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  newPolicyType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  newPolicyDetail?: string;
  /**
   * @format date
   * @maxLength 8
   */
  newBeginDate?: string;
  /**
   * The code that identifies a Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The code that identifies a Booking Channel.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  marketingText?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  transactionType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  policyType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  policyDetail?: string;
  /**
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  globalTextYN?: boolean;
}

/** Request object for creating channel marketing texts. */
export interface ChannelMarketingText {
  /** List of channel marketing texts to be created. */
  createChannelMarketingTexts?: MarketingTextType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing channel marketing texts. */
export interface ChannelMarketingTextToChange {
  /** List of channel marketing texts to be changed. */
  changeChannelMarketingTexts?: MarketingTextType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to copy channel marketing texts. */
export interface ChannelMarketingTextCopy {
  /** List of channel marketing texts to be copied. */
  copyChannelMarketingTexts?: CopyMarketingTextType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Copy Channel Marketing Text among Channels */
export interface CopyMarketingTextType {
  copyFrom?: {
    /** Information about the the Marketing text for the Channel */
    copyFrom?: MarketingTextType;
  };
  copyTo?: {
    /** @maxItems 4000 */
    bookingChannelCodes?: string[];
    /** @maxItems 4000 */
    hotelCodes?: string[];
  };
}

/** Request object for changing Negotiated channel rates. */
export interface ChannelNegotiatedRates {
  /** Negotiated channel rate details to be modified. */
  channelNegRates?: ChannelNegRateType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ChannelNegRateType {
  /** @maxItems 4000 */
  negProfile?: ChannelNegProfileType[];
  /**
   * Booking Channel Code.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
}

/** A negotiated rate type */
export interface ChannelNegProfileType {
  /** Unique Id that references an object uniquely in the system. */
  uniqueId?: UniqueIDListType;
  /** This provides name information for a person. */
  formerName?: PersonNameType;
  /** @maxItems 4000 */
  accessInfoList?: ChannelNegRateAccessType[];
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
export enum PersonNameTypeType {
  Primary = 'Primary',
  Alternate = 'Alternate',
  Incognito = 'Incognito',
  External = 'External',
  Phonetic = 'Phonetic',
}

export interface ChannelNegRateAccessType {
  accessInfoDetail?: ChannelNegRateAccessDetailType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  accessCode?: string;
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

export interface ChannelNegRateAccessDetailType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  newAccessCode?: string;
  channelRatePlanCodeOrder?: number;
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
  newTimeSpan?: TimeSpanType;
}

/** Response object for fetching Negotiated channel rates. */
export interface ChannelNegotiatedRateDetails {
  /** List of negotiated channel rates based on search criteria. */
  channelNegRates?: {
    /** List of negotiated channel rates based on search criteria. */
    channelNegRate?: ChannelNegRateType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching hotel-channel rate code mappings given search criteria including hotel codes, booking channel codes, rate codes, channel rate codes, etc. */
export interface ChannelRateMappings {
  /** Hotel-channel rate code mappings fetch results based on the search criteria. */
  channelRateMappings?: ChannelRateMappingsType;
  /** Additional details about the booking channels and source descriptions for a hotel rate code referenced within the fetched results. */
  masterInfo?: ChannelRateMappingMasterInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of hotel-channel rate code mappings. */
export interface ChannelRateMappingsType {
  /**
   * Information about hotel-channel rate code mapping.
   * @maxItems 4000
   */
  channelRateMapping?: ChannelRateMappingType[];
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

/** Basic details of a hotel-channel rate code mapping. */
export interface ChannelRateMappingType {
  /** Description of channel rate plan code. */
  description?: ChannelRateMappingDescriptionType;
  /**
   * Name of channel rate plan code to display on web.
   * @minLength 0
   * @maxLength 80
   */
  channelRatePlanWebName?: string;
  /**
   * Channel rate category of hotel-channel rate code mapping.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCategory?: string;
  /**
   * Rate Level.
   * @minLength 0
   * @maxLength 3
   */
  rateLevel?: string;
  /** Rate Tier. */
  rateTierAttr?: {
    rateTier?: number;
  };
  /**
   * Block Rate Indicator.
   * @minLength 0
   * @maxLength 80
   */
  blockRateIndicator?: string;
  /**
   * Promotion Code.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /** Order of the channel rate type mapping. */
  channelRatePlanOrder?: number;
  /** Indicates if Rate updates to Channel are allowed. */
  allowRateUpdate?: boolean;
  /** Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality. */
  allowRestrictionUpdate?: boolean;
  /** Indicates if rate participates in Regional Availability. */
  regionalAvailAttr?: {
    inclInRegionalAvail?: boolean;
    allowRegionalAvail?: boolean;
  };
  /**
   * Begin date of the channel rate code mapping.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * End date of the channel rate code mapping.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Carrier attached to the Channel Rate Plan. */
  carrierInfo?: CarrierInfoType;
  /**
   * New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code.
   * @minLength 0
   * @maxLength 20
   */
  newChannelRatePlanCode?: string;
  /** @maxItems 4000 */
  roomTypes?: string[];
  /** Rate plan information including description and sell dates. */
  ratePlanInfo?: RatePlanPrimaryDetailsType;
  /**
   * Booking Channel Code.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room Type.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
  /** True if this channel rate plan code has negotiated rates, otherwise false */
  hasNegotiatedRates?: boolean;
  /** True if the mapping has channel negotiated rates, otherwise false. */
  hasChannelNegotiatedRates?: boolean;
}

/** This type holds descriptions of hotel-channel rate code mapping. Description may be from Hotel rate code description, Global description or custom user defined description. Global description only supports enhanced description. */
export interface ChannelRateMappingDescriptionType {
  /** Description of hotel-channel rate code mapping from hotel rate code configuration. */
  rateCodeDescription?: ChannelRateMappingDescriptionDetailsType;
  /** Description of hotel-channel rate code mapping from global description. */
  globalDescription?: ChannelRateMappingEnhancedDescriptionType;
  /** Custom or user-defined description of hotel-channel rate code mapping. */
  customDescription?: ChannelRateMappingDescriptionDetailsType;
  /** Channel rate code short description for Channel AA or Channel with HTML support. */
  shortDescription?: TranslationTextType80;
}

/** Descriptions of hotel-channel rate code mapping which may be enhanced descriptions, HTML supported description or a simple string description. */
export interface ChannelRateMappingDescriptionDetailsType {
  /** Enhanced descriptions which allow defining line 1 to 3 descriptions. */
  enhancedDescription?: ChannelRateMappingEnhancedDescriptionType;
  /** HTML supported description. */
  hTMLSupportedDescription?: TranslationTextType2000;
  /** Plain text description. */
  description?: TranslationTextType2000;
}

/** Enhanced descriptions of hotel-channel room type or rate code mapping. */
export interface ChannelRateMappingEnhancedDescriptionType {
  /** Enhanced Description Line 1. */
  enhancedDescriptionLine1?: TranslationTextType50;
  /** Enhanced Description Line 2. */
  enhancedDescriptionLine2?: TranslationTextType50;
  /** Enhanced Description Line 3. */
  enhancedDescriptionLine3?: TranslationTextType50;
  /** Rate code description in addition to enhanced description line 1 to 3. */
  description?: TranslationTextType2000;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType50 {
  /**
   * Default text with Character length from 0 to 50.
   * @minLength 0
   * @maxLength 50
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

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType80 {
  /**
   * Default text with Character length from 0 to 80.
   * @minLength 0
   * @maxLength 80
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translatedTexts?: TranslationsTextType;
}

/** Carrier Information Type. */
export interface CarrierInfoType {
  /**
   * Use the SGA(Signature Airline Code) to filter rate codes for specific sources of business. This field can also be used to exclude specific sources of availability and bookings from the selection of rates.
   * @minLength 0
   * @maxLength 20
   */
  carrierCode?: string;
  /** Return to SGA. */
  returnToSGA?: boolean;
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

/** Simple type for base type, flat or differential. */
export enum BaseType {
  Flat = 'Flat',
  Differential = 'Differential',
}

/** Indicates that the rate code is locked by the central system and cannot be edited at the property level. */
export enum RateCodeLockStatusType {
  Unlocked = 'Unlocked',
  External = 'External',
  Property = 'Property',
  Central = 'Central',
}

/** Indicates that the Rate Plan is approved for selling. */
export enum RatePlanApprovalStatusType {
  NewUnapproved = 'NewUnapproved',
  ChangedUnapproved = 'ChangedUnapproved',
  Rejected = 'Rejected',
  Approved = 'Approved',
}

/** Additional details about the booking channels and source descriptions for a hotel rate code referenced within the fetched results. */
export interface ChannelRateMappingMasterInfoType {
  /** Additional details about booking channels. */
  bookingChannelsInfo?: BookingChannelsInfoType;
  /** Hotel-channel rate code mappings source descriptions. */
  sourceDescriptions?: ChannelRateMappingsSourceDescriptionsType;
}

/**
 * Additional detail about booking channel.
 * @maxItems 4000
 */
export type BookingChannelsInfoType = BookingChannelInfoType[];

/**
 * Source descriptions of a hotel-channel rate code mapping.
 * @maxItems 4000
 */
export type ChannelRateMappingsSourceDescriptionsType = ChannelRateMappingSourceDescriptionsType[];

/** Source descriptions of a hotel-channel rate code mapping. */
export interface ChannelRateMappingSourceDescriptionsType {
  /**
   * Description from hotel rate code configuration.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Global descriptions of a hotel rate code. */
  globalDescription?: ChannelRateMappingEnhancedDescriptionType;
  /**
   * Hotel code where the descriptions belong to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Rate code where the descriptions belong to.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
}

/** Request object for changing channel rate mappings. */
export interface ChannelRateMapping {
  /** Information about the Rate mapping to be updated. */
  channelRateMappings?: {
    /** Information about the Rate mapping to be updated. */
    channelRateMapping?: ChannelRateMappingType[];
    /** 'Y' if warnings like "Channel Rate Code already exists in Channel" should be ignored and should proceed with creating a new mapping; otherwise, value is 'N' */
    ignoreChannelRateWarning?: boolean;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to create new Global Descriptions of the GDS Channels */
export interface ChannelGlobalDescriptions {
  /** Collection of GDS channel Global description types */
  channelGlobalDescriptions?: ChannelGlobalDescriptionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of GDS channel Global description types
 * @maxItems 4000
 */
export type ChannelGlobalDescriptionsType = GenericGlobalDescriptionType[];

/** This type holds enhanced room/rate description. */
export interface GenericGlobalDescriptionType {
  /**
   * Property mapping with Rate plan code or Room type
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Global description type holds Rate plan code. */
  ratePlanCode?: CodeDescriptionType;
  /** Global description type holds Room Type. */
  roomType?: CodeDescriptionType;
  /** Global description type to differentiate the type */
  globalDescType?: GlobalDescTypeType;
  /** Generic global description holds rate plan enhanced description details */
  ratePlanGlobalDescription?: ChannelRateMappingEnhancedDescriptionType;
  /** Generic global description Room Type enhanced description details */
  roomTypeGlobalDescription?: ChannelMappingEnhancedDescriptionType;
}

/** Either Room Type or Rate Plan Code */
export enum GlobalDescTypeType {
  RoomType = 'RoomType',
  RatePlan = 'RatePlan',
}

/** Enhanced descriptions of hotel-channel room type or rate code mapping. */
export interface ChannelMappingEnhancedDescriptionType {
  /** Enhanced Description Line 1. */
  enhancedDescriptionLine1?: TranslationTextType50;
  /** Enhanced Description Line 2. */
  enhancedDescriptionLine2?: TranslationTextType50;
  /** Enhanced Description Line 3. */
  enhancedDescriptionLine3?: TranslationTextType50;
}

/** Request object for changing sequence for channel rate rooms. */
export interface ChannelRateRoomSequence {
  /** Booking channel rate room List. */
  channelRateRoomList?: ChannelRateRoomListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This type holds collection of channel Rate Room details. */
export interface ChannelRateRoomListType {
  /** @maxItems 4000 */
  channelRateRoom?: ChannelRateRoomType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** This type holds data for channel Rate room. */
export interface ChannelRateRoomType {
  /** This type holds data for channel Rate room. */
  channelRateRoomDetail?: ChannelRateRoomDetailType;
  /**
   * Booking Channel Code.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room Type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /**
   * Rate Plan code.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Channel Rate Plan code.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
  /**
   * Begin Date.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * End Date.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Channel Rate Room Type is invalid. */
  inactive?: boolean;
}

/** This type holds data for channel Rate room. */
export interface ChannelRateRoomDetailType {
  /** Room order for rate room combination.It will be used if RoomOrderFromRoomMapping is not set. */
  roomOrder?: number;
  /** Rate order for rate room combination. It will be used if RateOrderFromRateMapping is not set. */
  rateOrder?: number;
  /** Room order from the booking channel room mapping. */
  roomOrderFromRoomMapping?: number;
  /** Rate order from the booking channel rate mapping. */
  rateOrderFromRateMapping?: number;
}

/** Request object for publishing rate restrictions to channels. */
export interface ChannelRestrictions {
  /** Restriction information to be published. */
  publishRestriction?: PublishRatePlanType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for Channel Room Mapping creation. */
export interface ChannelRoomMappings {
  /** Channel Room Type mapping details to be defined. */
  channelRoomMappings?: ChannelRoomMappingsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Hotel-channel room type mapping information.
 * @maxItems 4000
 */
export type ChannelRoomMappingsType = ChannelRoomMappingType[];

/** Basic details of hotel-channel room type mapping. */
export interface ChannelRoomMappingType {
  /**
   * End date of the hotel-channel room type mapping.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Hotel-channel room type mapping description. */
  description?: ChannelRoomMappingDescriptionType;
  /**
   * Alternate channel room type name.
   * @minLength 0
   * @maxLength 40
   */
  alternateChannelRoomType?: string;
  /** Channel room type order of the hotel-channel room type mapping. */
  channelRoomTypeOrder?: number;
  /** Sell sequence for hotel-channel room type mapping. */
  sellSequence?: number;
  /** Flag that indicates whether hotel-channel room type mapping is active or not. */
  active?: boolean;
  /**
   * Channel bed type code.
   * @minLength 0
   * @maxLength 20
   */
  bedTypeCode?: string;
  /** Channel base allocation. */
  baseAllocation?: number;
  /**
   * Rate codes where hotel-channel room type mappings belong to.
   * @maxItems 4000
   */
  rateCodes?: string[];
  /**
   * Channel rate codes where hotel-channel room mappings belong to.
   * @maxItems 4000
   */
  channelRateCodes?: string[];
  /**
   * Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping.
   * @minLength 0
   * @maxLength 20
   */
  newChannelRoomType?: string;
  /**
   * Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping.
   * @format date
   * @maxLength 8
   */
  newBeginDate?: string;
  /** Additional details about the booking channel. */
  bookingChannelInfo?: BookingChannelInfoType;
  /** Global descriptions for the hotel room type. */
  globalDescription?: ChannelMappingEnhancedDescriptionType;
  /** Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping. */
  channelRoomMappingDetails?: ChannelRoomMappingDetailsType;
  /**
   * Booking Channel Code.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room Type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /**
   * Begin Date.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
}

/** This type holds descriptions of hotel-channel room type mapping. Description may be from Hotel Room Type description, Global description or custom user defined description. Global description only supports enhanced description. */
export interface ChannelRoomMappingDescriptionType {
  /** Description of hotel-channel room type mapping from Hotel Room Type configuration. */
  roomTypeDescription?: ChannelRoomMappingDescriptionDetailsType;
  /** Description of hotel-channel room type mapping from Global description. */
  globalDescription?: ChannelMappingEnhancedDescriptionType;
  /** Custom or user-defined description of hotel-channel room type mapping. */
  customDescription?: ChannelRoomMappingDescriptionDetailsType;
}

/** This type holds descriptions of hotel-channel room type mapping. Descriptions may be enhanced descriptions, HTML supported description or a simple string description. */
export interface ChannelRoomMappingDescriptionDetailsType {
  /** Enhanced descriptions which allow defining line 1 to 3 descriptions. */
  enhancedDescription?: ChannelMappingEnhancedDescriptionType;
  /** HTML supported description with addition of channel room type short description. */
  hTMLSupportedDescription?: ChannelRoomMappingHTMLSupportedDescriptionType;
  /**
   * Description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
}

/** This type holds HTML description of hotel-channel room type with additional channel room type short description. */
export interface ChannelRoomMappingHTMLSupportedDescriptionType {
  /**
   * Description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Channel room type or rate code short description.
   * @minLength 0
   * @maxLength 80
   */
  shortDescription?: string;
}

/** Basic details of hotel-channel room type mapping. */
export interface ChannelRoomMappingDetailsType {
  /**
   * End date of the hotel-channel room type mapping.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Hotel-channel room type mapping description. */
  description?: ChannelRoomMappingDescriptionType;
  /**
   * Alternate channel room type name.
   * @minLength 0
   * @maxLength 40
   */
  alternateChannelRoomType?: string;
  /** Channel room type order of the hotel-channel room type mapping. */
  channelRoomTypeOrder?: number;
  /** Sell sequence for hotel-channel room type mapping. */
  sellSequence?: number;
  /** Flag that indicates whether hotel-channel room type mapping is active or not. */
  active?: boolean;
  /**
   * Channel bed type code.
   * @minLength 0
   * @maxLength 20
   */
  bedTypeCode?: string;
  /** Channel base allocation. */
  baseAllocation?: number;
  /**
   * Rate codes where hotel-channel room type mappings belong to.
   * @maxItems 4000
   */
  rateCodes?: string[];
  /**
   * Channel rate codes where hotel-channel room mappings belong to.
   * @maxItems 4000
   */
  channelRateCodes?: string[];
  /**
   * Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping.
   * @minLength 0
   * @maxLength 20
   */
  newChannelRoomType?: string;
  /**
   * Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping.
   * @format date
   * @maxLength 8
   */
  newBeginDate?: string;
  /** Additional details about the booking channel. */
  bookingChannelInfo?: BookingChannelInfoType;
  /** Global descriptions for the hotel room type. */
  globalDescription?: ChannelMappingEnhancedDescriptionType;
}

/** Request object for changing channel rate codes global description. */
export interface ChannelGlobalDescription {
  /** Channel Rate code mapping global description details. */
  channelRoomDescription?: ChannelGlobalDescriptionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This type holds enhanced room/rate description. */
export interface ChannelGlobalDescriptionType {
  /** Contains Multiple translated texts and language codes. */
  shortDescription?: TranslationTextType2000;
  /** Contains Multiple translated texts and language codes. */
  description?: TranslationTextType2000;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc1?: TranslationTextType50;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc2?: TranslationTextType50;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc3?: TranslationTextType50;
  source?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
}

/** Response object for fetching details of channel. */
export interface Channel {
  /** Details of a channel. */
  channel?: ChannelType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating channel errors. */
export interface ChannelErrors {
  /** channel errors to be created. */
  errors?: {
    /**
     * Channel error details.
     * @maxItems 4000
     */
    error?: SystemErrorType[];
    /** Channel code. */
    bookingChannelCode?: CodeType;
  };
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
 * @minLength 0
 * @maxLength 20
 */
export type CodeType = string;

/** Response giving OPERA hotel code mapped to channel hotel code for a booking channel and vice versa. */
export interface ChannelHotelCodeMapping {
  /**
   * Channel code for which the hotel code mapping information is needed.
   * @maxLength 2000
   */
  channelCode?: string;
  /** OPERA or Channel hotel code information. */
  hotelInfo?: HotelCodeMappingInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Generic information of the OPERA hotel code, channel hotelcode for the requested booking channel code. */
export interface HotelCodeMappingInfoType {
  /**
   * OPERA hotel code for the requested channel hotel code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Channel hotel code for the requested OPERA hotel code.
   * @minLength 0
   * @maxLength 20
   */
  channelHotelCode?: string;
}

/** Request object for modifying channel parameter(s). */
export interface ChangeChannelParameters {
  /** Collection of channel parameter(s) to be modified. */
  criteria?: ChangeChannelParametersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ChangeChannelParametersType {
  /**
   * External system code.
   * @minLength 0
   * @maxLength 20
   */
  systemCode?: string;
  /** Collection of channel parameters whose value needs to be modified. */
  channelParameters?: ChannelParametersSimpleType;
}

/**
 * Collection of channel parameters simple information.
 * @maxItems 4000
 */
export type ChannelParametersSimpleType = ChannelParameterSimpleType[];

/** Basic channel parameter info used in changing channel parameter values. */
export interface ChannelParameterSimpleType {
  /**
   * @minLength 0
   * @maxLength 80
   */
  parameterName?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  parameterValue?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The value types of parameter, possible types are Boolean, String, Date, and Number. */
  parameterValueType?: ChannelParameterValueType;
}

/** The value types of parameter, possible types are Boolean, String, Date, and Number. */
export enum ChannelParameterValueType {
  Boolean = 'Boolean',
  String = 'String',
  Date = 'Date',
  Time = 'Time',
  Number = 'Number',
  SingleSelectLOV = 'SingleSelectLOV',
  MultiSelectLOV = 'MultiSelectLOV',
}

/** Request object for creating channel rate categories. */
export interface ChannelRateCategories {
  /** channel rate categories to be created. */
  rateCategories?: {
    /** Channel rate category details. */
    rateCategory?: SystemRateCategoryType[];
    /** Channel code. */
    bookingChannelCode?: CodeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating channel rate levels. */
export interface ChannelRateLevels {
  /** channel rate levels to be created. */
  rateLevels?: {
    /** Channel rate level details. */
    rateLevel?: SystemRateLevelType[];
    /** Channel code. */
    bookingChannelCode?: CodeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for publishing rate codes to GDS. */
export interface ChannelRatePlans {
  /** Rate code information to be published. */
  publishRatePlan?: PublishRatePlanType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for channel rate rooms sequence based on a criteria. */
export interface ChannelRateRoomSequenceDetails {
  /** Booking channel rate room List. */
  channelRateRoomList?: ChannelRateRoomListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating channel room types. */
export interface ChannelRoomTypes {
  /** channel room types to be created. */
  roomTypes?: {
    /** Channel room type details. */
    roomType?: SystemRoomTypeType[];
    /** Channel code. */
    bookingChannelCode?: CodeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating channel carriers. */
export interface ChannelCarriers {
  /** Channel carriers to be created. */
  carriers?: {
    /** Channel carrier details. */
    carrier?: SystemCarrierType[];
    /** Channel code. */
    bookingChannelCode?: CodeType;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for Create Channel to ORG and CRO Mapping. */
export interface ChannelOrgMapping {
  /** Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping. */
  channelOrgMappingDetails?: ChannelOrgMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping. */
export interface ChannelOrgMappingType {
  /**
   * Channel code for which OrgCode mapping needs to be done.
   * @minLength 0
   * @maxLength 20
   */
  channelCode?: string;
  /**
   * OrgCode for which Channel code mapping needs to be done.
   * @minLength 0
   * @maxLength 20
   */
  orgCode?: string;
  /**
   * Default Login Resort value used while mapping Channel Code and OrgCode.
   * @minLength 0
   * @maxLength 20
   */
  defaultLoginResort?: string;
}

/** Response object for Fetch Channel to ORG and CRO Mapping. */
export interface ChannelOrgMappingsDetails {
  /** Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping. */
  channelOrgMappingsDetails?: ChannelOrgMappingsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping.
 * @maxItems 4000
 */
export type ChannelOrgMappingsType = ChannelOrgMappingType[];

/** Response object to populate total pricing elements of the GDS channel. */
export interface TotalPricingElements {
  /** List of Total Pricing Element Type */
  totalPricingElements?: TotalPricingElementsType;
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
 * List of Total Pricing Element Type
 * @maxItems 4000
 */
export type TotalPricingElementsType = TotalPricingElementType[];

/** Total Pricing Element ID type used to identify the record */
export interface TotalPricingElementType {
  /**
   * Hotel Code that associated with Transaction Code and Total Pricing Element
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Transaction Code with Total Pricing Element of the GDS channel */
  transaction?: CodeDescriptionType;
  /** The mapped Total Pricing Element code of the GDS channel */
  elementCode?: CodeDescriptionType;
  /** The mapped Total Pricing Element Charge Type of the GDS channel */
  chargeType?: ChargeTypeType;
  /** Combination of primary attributes of Total Pricing Element to update the primary attribute field */
  editPricingElementId?: TotalPricingElementIDType;
}

/** Total Pricing Element either Tax or Service Fee */
export enum ChargeTypeType {
  Tax = 'Tax',
  ServiceFee = 'ServiceFee',
}

/** Total Pricing Element ID type used to identify the record */
export interface TotalPricingElementIDType {
  /**
   * Hotel Code that associated with Transaction Code and Total Pricing Element
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Transaction Code with Total Pricing Element of the GDS channel */
  transaction?: CodeDescriptionType;
}

/** Request object to copy the total pricing elements into the target properties. */
export interface TotalPricingElementsCopy {
  /** Total Pricing Elements to copy from single source property to multi target properties */
  copyInstructions?: CopyTotalPricingElementsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Total Pricing Elements to copy from single source property to multi target properties */
export interface CopyTotalPricingElementsType {
  /** Total Pricing Element Type record details to copy */
  totalPricingElements?: TotalPricingElementsType;
  /** Target properties to copy Total Pricing Element records */
  targetHotels?: CodeListType;
}

/** Response object containing sell limit schedules set for the channel or channel room type. */
export interface ChannelSellLimits {
  /** List of sell limit schedules configured for the requested channel or channel room type. */
  sellLimits?: ChannelSellLimitSchedulesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Details about a sell limit schedule for a channel or channel room type.
 * @maxItems 4000
 */
export type ChannelSellLimitSchedulesType = ChannelSellLimitScheduleType[];

/** Details about a sell limit schedule for a channel or channel room type. */
export interface ChannelSellLimitScheduleType {
  /** Unique identifier for the channel sell limit. */
  sellLimitId?: UniqueIDType;
  /**
   * Hotel for which the sell limit schedule is applicable.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Channel for which the sell limit schedule is applicable.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Channel room type for which the sell limit schedule is applicable.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /** Sell limit schedule begin and end dates as well as which days of the week the limit applies to. */
  dateRange?: TimeSpanDaysOfWeekType;
  /** Number of rooms which can be sold under the hotel, channel, and channel room type combination for the specified date range. */
  numberOfRooms?: number;
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

/** Request object to create or update sell limits for the channel or channel room type by day. Advanced logic is implemented to combine consecutive blocks of sell limits into a single schedule which have the same limits configured. Existing schedules can also be split as needed to account for overlapping schedules. */
export interface ChannelSellLimitsByDate {
  /** Collection of sell limits to be created or updated for the channel or channel room type and a particular day. */
  sellLimits?: ChannelSellLimitsByDateType;
  /** Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed. */
  adjustOverlappingSchedules?: boolean;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of sell limits for a channel or channel room type structured by day. */
export interface ChannelSellLimitsByDateType {
  /**
   * Details about the sell limit for this particular resort, channel, and date.
   * @maxItems 4000
   */
  channelSellLimits?: ChannelSellLimitType[];
  /**
   * Details about the sell limit for this particular resort, channel, channel room type, and date.
   * @maxItems 4000
   */
  channelRoomTypeSellLimits?: {
    /** Number of rooms that can be sold for this particular sell limit date. */
    numberOfRooms?: number;
    /**
     * Channel for which this sell limit is applicable.
     * @minLength 0
     * @maxLength 20
     */
    bookingChannelCode?: string;
    /**
     * Date on which this sell limit is applicable.
     * @format date
     * @maxLength 8
     */
    date?: string;
    /**
     * Channel room type for which this sell limit is applicable.
     * @minLength 0
     * @maxLength 20
     */
    channelRoomType?: string;
  }[];
  /**
   * Hotel under which the channel sell limits are applicable.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

export interface ChannelSellLimitType {
  /** Number of rooms that can be sold for this particular sell limit date. */
  numberOfRooms?: number;
  /**
   * Channel for which this sell limit is applicable.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Date on which this sell limit is applicable.
   * @format date
   * @maxLength 8
   */
  date?: string;
}

/** Response object for fetching channel-hotel guarantee code mappings. */
export interface ChannelGuaranteeCodeMappingDetails {
  /** Paging information and collection of channel-hotel guarantee code mappings. */
  channelGuaranteeCodeMappings?: {
    /** Channel-hotel guarantee code mapping and its details. */
    channelGuaranteeCodeMapping?: ChannelGuaranteeCodeMappingType[];
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Channel-hotel guarantee code mapping information. */
export interface ChannelGuaranteeCodeMappingType {
  /**
   * New channel guarantee code for the existing guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  newChannelGuaranteeCode?: string;
  /**
   * Payment type of guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  paymentType?: string;
  /**
   * Inactive date of guarantee code mapping.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /**
   * Hotel code of guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Booking channel code of guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Guarantee code of guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  guaranteeCode?: string;
  /**
   * Channel guarantee code of guarantee code mapping.
   * @minLength 0
   * @maxLength 20
   */
  channelGuaranteeCode?: string;
}

/** Request object for distributing channel rates. */
export interface ChannelRates {
  /** Information about rate code to be distributed to channels. */
  distributeChannelRates?: DistributeChannelRatesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information about rate codes to be distributed to channels. */
export interface DistributeChannelRatesType {
  /**
   * Information about rate codes to be distributed to a channel.
   * @maxItems 4000
   */
  distributeChannelRate?: DistributeChannelRateType[];
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Information about rate codes to be distributed to a channel. */
export interface DistributeChannelRateType {
  /**
   * Information about rate codes to be distributed to a channel.
   * @maxItems 4000
   */
  distributeChannelRateMappings?: DistributeChannelRateMappingType[];
  /**
   * Negotiated channel rate details to be modified.
   * @maxItems 4000
   */
  negotiatedProfiles?: ChannelNegProfileType[];
  /**
   * Channel.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Channel Rate Code.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
}

/** Basic details of a hotel-channel rate code mapping. */
export interface DistributeChannelRateMappingType {
  /** Description of channel rate plan code. */
  description?: ChannelRateMappingDescriptionType;
  /**
   * Name of channel rate plan code to display on web.
   * @minLength 0
   * @maxLength 80
   */
  channelRatePlanWebName?: string;
  /**
   * Channel rate category of hotel-channel rate code mapping.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCategory?: string;
  /**
   * Rate Level.
   * @minLength 0
   * @maxLength 3
   */
  rateLevel?: string;
  /** Rate Tier. */
  rateTierAttr?: {
    rateTier?: number;
  };
  /**
   * Block Rate Indicator.
   * @minLength 0
   * @maxLength 80
   */
  blockRateIndicator?: string;
  /**
   * Promotion Code.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /** Order of the channel rate type mapping. */
  channelRatePlanOrder?: number;
  /** Indicates if Rate updates to Channel are allowed. */
  allowRateUpdate?: boolean;
  /** Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality. */
  allowRestrictionUpdate?: boolean;
  /** Indicates if rate participates in Regional Availability. */
  regionalAvailAttr?: {
    inclInRegionalAvail?: boolean;
    allowRegionalAvail?: boolean;
  };
  /**
   * Begin date of the channel rate code mapping.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * End date of the channel rate code mapping.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Carrier attached to the Channel Rate Plan. */
  carrierInfo?: CarrierInfoType;
  /**
   * New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code.
   * @minLength 0
   * @maxLength 20
   */
  newChannelRatePlanCode?: string;
  /** @maxItems 4000 */
  roomTypes?: string[];
  /** Rate plan information including description and sell dates. */
  ratePlanInfo?: RatePlanPrimaryDetailsType;
  /**
   * Rate Plan Code.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** True if this channel rate plan code has negotiated rates, otherwise false */
  hasNegotiatedRates?: boolean;
  /** True if the mapping has channel negotiated rates, otherwise false. */
  hasChannelNegotiatedRates?: boolean;
}

/** Request object for creating a new channel-hotel card type mapping. */
export interface ChannelCardTypeMappings {
  /** Channel-hotel card type mapping information to be created. */
  channelCardTypeMapping?: ChannelCardTypeMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating a new channel-hotel guarantee code mapping. */
export interface ChannelGuaranteeCodeMappings {
  /** Channel-hotel guarantee code mapping information to be created. */
  channelGuaranteeCodeMapping?: ChannelGuaranteeCodeMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for channel parameter(s) based on search criteria. */
export interface ChannelParameterMapping {
  /** Collection of channel parameter(s) result based on the search criteria. */
  channelParameterMapping?: ChannelParameterMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Includes information about the parametersTypes and system Information for the Channel/Hotel. */
export interface ChannelParameterMappingType {
  /** Identify details of External System */
  systemInfo?: SystemInfoType;
  /**
   * Collection of channel parameters organized into groups.
   * @maxItems 4000
   */
  groups?: ChannelParameterGroupType[];
}

export interface ChannelParameterGroupType {
  /** parameters details. */
  channelParameters?: ChannelParametersType;
  /**
   * @minLength 0
   * @maxLength 80
   */
  groupName?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  groupDisplayName?: string;
}

/**
 * parameters details.
 * @maxItems 4000
 */
export type ChannelParametersType = ChannelParameterType[];

/** Parameters details for the Channel. */
export interface ChannelParameterType {
  /**
   * Name of the parameter in the channel.
   * @minLength 0
   * @maxLength 80
   */
  parameterName?: string;
  /**
   * The display name for the parameter in the channel.
   * @minLength 0
   * @maxLength 80
   */
  parameterDisplay?: string;
  /**
   * Short description for the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  shortDescription?: string;
  /**
   * The Description for the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  parameterDescription?: string;
  /**
   * The Value of the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  parameterValue?: string;
  /**
   * Hotel code identifying the parameters related to the Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The type of the parameter, the possible types are P (Parameter), Setting (S). */
  parameterType?: 'P' | 'S';
  /** Whether this is a global or property level parameter. */
  scope?: 'H' | 'P';
  /** The value types of parameter, possible types are Boolean, String, Date, and Number. */
  valueType?: ChannelParameterValueType;
  /** Sequence number for displaying the parameter in the channel. */
  sequence?: number;
  /** @maxItems 4000 */
  parameters?: BaseChannelParameterType[];
  levelType?: ChannelParameterLevelType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  levelCode?: string;
}

/** Parameters details for the Channel. */
export interface BaseChannelParameterType {
  /**
   * Name of the parameter in the channel.
   * @minLength 0
   * @maxLength 80
   */
  parameterName?: string;
  /**
   * The display name for the parameter in the channel.
   * @minLength 0
   * @maxLength 80
   */
  parameterDisplay?: string;
  /**
   * Short description for the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  shortDescription?: string;
  /**
   * The Description for the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  parameterDescription?: string;
  /**
   * The Value of the parameter.
   * @minLength 0
   * @maxLength 2000
   */
  parameterValue?: string;
  /**
   * Hotel code identifying the parameters related to the Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The type of the parameter, the possible types are P (Parameter), Setting (S). */
  parameterType?: 'P' | 'S';
  /** Whether this is a global or property level parameter. */
  scope?: 'H' | 'P';
  /** The value types of parameter, possible types are Boolean, String, Date, and Number. */
  valueType?: ChannelParameterValueType;
  /** Sequence number for displaying the parameter in the channel. */
  sequence?: number;
}

export enum ChannelParameterLevelType {
  Global = 'Global',
  Hotel = 'Hotel',
}

/** Request object for fetching Policies, guarantee, and deposit Details. */
export interface ChannelPolicies {
  /** Reservation Rules and Policies related Information */
  channelPoliciesInfo?: ChannelPoliciesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * To list down all the policies associated with the relevant input request.
 * @maxItems 4000
 */
export type ChannelPoliciesInfoType = ChannelPolicyType[];

/** Policy details including guaranteeInfo, cancellation information etc. */
export interface ChannelPolicyType {
  /** Guarantee details to be fetched */
  guarantees?: GuaranteesInfoType;
  /** Cancellation details. */
  cancelPenalty?: CancelPenaltyType;
  /** DepositPolicy details. */
  depositPolicy?: DepositPolicyType;
  /** Channel Marketing Text like cancel,deposit,tax,commission policy etc. */
  channelMarketingInfo?: ChannelMarketingInfoType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
  hold?: boolean;
  deposit?: boolean;
  commissionCode?: string;
}

/**
 * Guarantee details.
 * @maxItems 4000
 */
export type GuaranteesInfoType = GuaranteeType[];

/** Specifies Guarantee Code attributes. */
export interface GuaranteeType {
  /**
   * Description of the Guarantee Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Specifies various requirements for the guarantee code. */
  requirements?: GuaranteeRequirementsType;
  /** Brief description of the Guarantee Code. */
  shortDescription?: TranslationTextType80;
  /** Specifies various payment types for the guarantee code. */
  paymentTypes?: PaymentTypesType;
  /**
   * Code assigned to the Guarantee.
   * @minLength 0
   * @maxLength 20
   */
  guaranteeCode?: string;
  /** If true indicates this Guarantee Code is used only to hold the inventory during reservation process. */
  onHold?: boolean;
  /** If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. */
  reserveInventory?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
  /** Represents the late arrival time. */
  lateArrival?: string;
}

/** Specifies various requirement for the guarantee code. */
export interface GuaranteeRequirementsType {
  /** Requirement Code. */
  requirementCode?: string;
  /** When true indicates cancellation on the reservation is required for this guarantee code. */
  cancellation?: boolean;
  /** When true indicates phone number on the reservation is required for this guarantee code. */
  phoneNumber?: boolean;
  /** When true indicates address on the reservation is required for this guarantee code. */
  address?: boolean;
  /** When true indicates Credit Card on the reservation is required for this guarantee code. */
  creditCard?: boolean;
  /** When true indicates arrival Time on the reservation is required for this guarantee code. */
  arrivalTime?: boolean;
  /** When true indicates deposit is required for this guarantee code. */
  deposit?: boolean;
}

/**
 * Payment card code like AX,VI etc.
 * @maxItems 4000
 */
export type PaymentTypesType = string[];

/** The CancelPenalty class defines the cancellation policy of the hotel facility. */
export interface CancelPenaltyType {
  /** Cancellation deadline, absolute or relative. */
  deadline?: PolicyDeadlineType;
  /** Cancellation fee expressed as a fixed amount, or percentage of/or room nights. */
  amountPercent?: PolicyAmountPercentType;
  /**
   * Text description of the Penalty in a given language.
   * @minLength 0
   * @maxLength 2000
   */
  penaltyDescription?: string;
  /** Indicates deadline offset unit type. */
  offsetUnit?: OffsetUnitType;
  /**
   * Formatted Text Rule of the Cancellation Penalty.
   * @minLength 0
   * @maxLength 2000
   */
  formattedRule?: string;
  /**
   * Policy Code.
   * @minLength 0
   * @maxLength 20
   */
  policyCode?: string;
  /** Flag to indicate if the cancellation policy is manual. */
  manual?: boolean;
  /** Indicates if the amount is refundable if booking is canceled. */
  nonRefundable?: boolean;
}

/** Cancellation deadline, absolute or relative. */
export interface PolicyDeadlineType {
  /**
   * Defines the absolute deadline. Either this or the offset attributes may be used.
   * @format date-time
   */
  absoluteDeadline?: string;
  /** The number of days before arrival that allows cancellation without penalties. */
  offsetFromArrival?: number;
  /**
   * Time on offset day the cancellation penalties applies.
   * @format date-time
   */
  offsetDropTime?: string;
  /** The number of days after booking deposit must be paid. */
  offsetFromBookingDate?: number;
}

/** Defines the percentage basis for calculating the fee amount or the amount. */
export interface PolicyAmountPercentType {
  /** Provides the basis for how the amount of the guarantee is calculated. */
  basisType?: PolicyBasisTypeType;
  /** The number of nights of the hotel stay that are used to calculate the fee amount. */
  nights?: number;
  /**
   * The percentage used to calculate the amount.
   * @min 0
   * @max 100
   */
  percent?: number;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Full Amount. */
export enum PolicyBasisTypeType {
  FlatAmount = 'FlatAmount',
  Percentage = 'Percentage',
  Nights = 'Nights',
  NightPercentage = 'NightPercentage',
  FullAmount = 'FullAmount',
}

/** Indicates deadline offset unit type. */
export enum OffsetUnitType {
  Year = 'Year',
  Month = 'Month',
  Day = 'Day',
  Hour = 'Hour',
}

/** Used to define the deposit policy, guarantees policy, and/or accepted forms of payment. */
export interface DepositPolicyType {
  /** Payment expressed as a fixed amount, or a percentage of/or room nights. */
  amountPercent?: PolicyAmountPercentType;
  /** Payment deadline, absolute or relative. */
  deadline?: PolicyDeadlineType;
  /**
   * Text description of the Payment in a given language.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Receipt number associated with the deposit policy */
  depositReceiptNo?: number;
  /**
   * Transaction Date associated with the deposit policy
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /** Flag to indicate if deposit policy is reversed */
  depositReqReversed?: boolean;
  /**
   * Formatted Text Rule of the deposit policy.
   * @minLength 0
   * @maxLength 2000
   */
  formattedRule?: string;
  /** Defines if the deposit amount is calculated based on Room Charges, Catering Charges or both */
  typeOfCharges?: DepositCancelRevenueType;
  /**
   * Deposit Policy Code
   * @minLength 0
   * @maxLength 20
   */
  policyCode?: string;
  /** Flag to indicate if the cancellation policy is manual. */
  manual?: boolean;
}

/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
export enum DepositCancelRevenueType {
  Rooms = 'Rooms',
  Catering = 'Catering',
  All = 'All',
}

/**
 * Marketing Text like cancel policy, deposit policy etc.
 * @maxItems 4000
 */
export type ChannelMarketingInfoType = {
  /**
   * Marketing Text like cancel policy, deposit policy etc.
   * @minLength 0
   * @maxLength 4000
   */
  description?: string;
  /** Indicates the policy type like cancel,deposit etc. */
  policyType?: MarketingPolicyType;
  /**
   * Indicates the rate code for which the policy is associated with.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
}[];

/** Indicates the channel policy type like deposit,cancel etc. */
export enum MarketingPolicyType {
  Deposit = 'Deposit',
  Commission = 'Commission',
  Cancel = 'Cancel',
  Guarantee = 'Guarantee',
  General = 'General',
  Penalty = 'Penalty',
  Tax = 'Tax',
  Promotion = 'Promotion',
}

/** Request object for changing Channel Room Mapping. */
export interface ChannelRoomMapping {
  /** Channel Room Type mapping details to be changed. */
  channelRoomMapping?: ChannelRoomMappingType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object containing the room availability and restrictions for a hotel in relation to booking channels. */
export interface ChannelInventorySnapshot {
  /** Channel inventory snapshot containing room availability and restrictions for a hotel in relation to booking channels. */
  channelInventorySnapshot?: ChannelInventorySnapshotType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The evaluated channel inventory snapshot statistics based on the search criteria given. */
export interface ChannelInventorySnapshotType {
  /** The main statistics for the channel inventory snapshot. */
  inventories?: ChannelInventorySnapshotInventoriesType;
  /** Additional information about the records returned in the snapshot. */
  masterInfo?: ChannelInventorySnapshotMasterInfoType;
}

/** Collection of inventory statistics and restrictions for a hotel in relation to booking channels. */
export interface ChannelInventorySnapshotInventoriesType {
  /**
   * Details of inventory statistics and restrictions.
   * @maxItems 4000
   */
  inventory?: ChannelInventoryType[];
  /**
   * Hotel that the inventory belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Inventory statistics and restrictions. This can have no code (House level), BookingChannelCode, or ChannelRoomType to represent the different levels. */
export interface ChannelInventoryType {
  /**
   * Inventory statistics and restriction details.
   * @maxItems 4000
   */
  snapshot?: ChannelSnapshotType[];
  /**
   * Booking channel code that the snapshot belongs to.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Booking channel room type that the snapshot belongs to.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
}

/** Inventory statistic and restriction information for a given date. */
export interface ChannelSnapshotType {
  /** Restrictions information for the day. */
  restrictionsInfo?: RestrictionsInfoType;
  /** Number of rooms in inventory. */
  inventoryRooms?: number;
  /** Number of overbooking rooms allowed. */
  sellLimit?: number;
  /** Number of tentative rooms sold - does not include definite reservations. */
  tentativeRoomsSold?: number;
  /** Number of rooms sold. */
  roomsSold?: number;
  /** Number of available rooms. */
  availableRooms?: number;
  /**
   * Date of the statistics and restrictions.
   * @format date
   * @maxLength 8
   */
  date?: string;
}

/**
 * Provides the basic Restriction type details, specifically used in snapshot operations for efficiency.
 * @maxItems 4000
 */
export type RestrictionsInfoType = RestrictionInfoType[];

export interface RestrictionInfoType {
  /** Indicates the type of the restriction. */
  restrictionStatus?: RestrictionInfoStatusType;
}

/** The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group. */
export interface RestrictionInfoStatusType {
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
  /**
   * Room Class of actual restriction.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Rate Category of actual restriction.
   * @minLength 0
   * @maxLength 20
   */
  rateCategory?: string;
  /**
   * Rate Code of actual restriction.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Room Type of actual restriction.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Booking channel code of actual restriction.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
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

/** Details about the booking channels and room types contained in the channel inventory snapshot. */
export interface ChannelInventorySnapshotMasterInfoType {
  /**
   * Collection of booking channels returned in the channel inventory snapshot and the details about those channels.
   * @maxItems 4000
   */
  bookingChannel?: {
    /**
     * Details about a specific channel room type.
     * @maxItems 4000
     */
    channelRoomTypes?: {
      /**
       * The channel room type's identifying code.
       * @minLength 0
       * @maxLength 20
       */
      channelRoomTypeCode?: string;
      /**
       * The internal room type label which is mapped to the channel room type.
       * @minLength 0
       * @maxLength 20
       */
      roomTypeCode?: string;
      /**
       * If the ENHANCED_ROOM_RATE_DESCRIPTION function is off, this element will contain the simple channel room type description.
       * @minLength 0
       * @maxLength 200
       */
      description?: string;
      /**
       * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the first line of the enhanced channel room type description.
       * @minLength 0
       * @maxLength 200
       */
      roomDescriptionLine1?: string;
      /**
       * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the second line of the enhanced channel room type description.
       * @minLength 0
       * @maxLength 200
       */
      roomDescriptionLine2?: string;
      /**
       * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the third line of the enhanced channel room type description.
       * @minLength 0
       * @maxLength 200
       */
      roomDescriptionLine3?: string;
      /** The order in which the channel room type is to be displayed. */
      sellSequence?: number;
    }[];
    /**
     * The booking channel's identifying code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * The name or description of the booking channel.
     * @minLength 0
     * @maxLength 40
     */
    description?: string;
    /**
     * The type of channel. I.E. GDS, ADS, ODS, WEB.
     * @minLength 0
     * @maxLength 20
     */
    bookingChannelType?: string;
    /** Flag to indicate if the channel and hotel combination have the Channel Inventory parameter active. This parameter allows sell limits to be set for the channel or channel room type. */
    channelInventoryActive?: boolean;
  }[];
  /**
   * The internal hotel code that the given booking channel info is mapped under.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Request object to create or update sell limit schedules for the channel or channel room type within a date range. Existing schedules can be split as needed to account for overlapping schedules. */
export interface ChannelSellLimitsByDateRange {
  /** List of sell limit schedules to be created or updated for the channel or channel room type. */
  sellLimits?: ChannelSellLimitSchedulesType;
  /** Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed. */
  adjustOverlappingSchedules?: boolean;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object to simulate general availability. */
export interface GeneralAvailabilitySimulator {
  /** Room Type and room rate combination. */
  generalAvailability?: GeneralAvailSimulatorType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Room Type and Room Rate combination. */
export interface GeneralAvailSimulatorType {
  /** @maxItems 4000 */
  availableRatePlans?: AvailableRatePlanType[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  marketingInfo?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  supportsHTMLEditor?: string;
  /** Sell by room, rate or rate room. */
  sellOrder?: SellOrderType;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Room Type and Room Rate combination. */
export interface AvailableRatePlanType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  marketingInfo?: string;
  /** @maxItems 4000 */
  availableRooms?: AvailableRoomType[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  ratePlanDesc?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  currency?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  taxInfo?: string;
}

/** Room Type and Room Rate combination. */
export interface AvailableRoomType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  rateChangedYN?: string;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Channel Sell By which may be RATEROOM, RATE or ROOM. */
export enum SellOrderType {
  RateRoom = 'RateRoom',
  Rate = 'Rate',
  Room = 'Room',
}

/** Response object to fetch Rate Parity. */
export interface RateParity {
  /** Rate parity. */
  rateParity?: RateParityType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information on Room Rate Parity among Channels/Property */
export interface RateParityType {
  /**
   * Channels and Property combination.
   * @maxItems 4000
   */
  parityGroups?: ParityGroupType[];
  /** @maxItems 4000 */
  hotelsInfo?: HotelChannelInfoType[];
  /** @maxItems 4000 */
  bookingChannelsInfo?: BookingChannelInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Channels and Property Group wise Rates for Room Type and Rate Plan combination. */
export interface ParityGroupType {
  /**
   * Room Type and Rate Plan combination.
   * @maxItems 4000
   */
  parityRoomRates?: ParityRoomRateType[];
  /**
   * The code that identifies a Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The code that identifies a Booking Channel.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  bookingChannelURL?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  bookingChannelIconURL?: string;
}

/** Rate for Room Type and Rate Plan combination. */
export interface ParityRoomRateType {
  /**
   * Rate on specific arrival date.
   * @maxItems 4000
   */
  parityRates?: ParityRateType[];
  /**
   * The code that identifies a Room Type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * The code that identifies a Rate Plan Code.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * The code that identifies a Booking Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /**
   * The code that identifies a Booking Channel Rate Plan Code.
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCode?: string;
}

/** Minimum and Maximum Rate on specific arrival date. */
export interface ParityRateType {
  additionalDetailList?: AdditionalDetailListType;
  /** This type holds enhanced room/rate description. */
  roomTypeDescription?: EnhancedDescriptionType;
  /** This type holds enhanced room/rate description. */
  rateDescription?: EnhancedDescriptionType;
  ratePlanDescription?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  channelRatePlanCategory?: string;
  rateFrequency?: string;
  availableRooms?: number;
  additionalAmounts?: AdditionalAmountListType;
  rateAmounts?: {
    /** A monetary value expressed with a currency code. */
    totalAmount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    taxAmount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    cancellationAmount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    commissionAmount?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    depositAmount?: CurrencyAmountType;
  };
  totalPricingAmounts?: {
    /** A monetary value expressed with a currency code. */
    totalSurcharge?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    totalTax?: CurrencyAmountType;
    /** A monetary value expressed with a currency code. */
    totalRateIncl?: CurrencyAmountType;
  };
  /**
   * Arrival Date.
   * @format date
   * @maxLength 8
   */
  arrivalDate?: string;
  weekendDay?: boolean;
  closed?: boolean;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
  /**
   * Status Code related to functionality.
   * @minLength 0
   * @maxLength 80
   */
  statusCode?: string;
  /**
   * Description of Status Code.
   * @minLength 0
   * @maxLength 2000
   */
  statusDescription?: string;
  rateChangesOverDays?: boolean;
}

/** @maxItems 4000 */
export type AdditionalDetailListType = AdditionalDetailType[];

export interface AdditionalDetailType {
  description?: string;
  detailType?:
    | 'CancelPolicy'
    | 'CommissionPolicy'
    | 'GuaranteePolicy'
    | 'DepositPolicy'
    | 'PenaltyPolicy'
    | 'MarketingInformation'
    | 'Promotion'
    | 'TaxInformation'
    | 'Other';
  /**
   * @minLength 0
   * @maxLength 80
   */
  otherDetailType?: string;
}

/** This type holds enhanced room/rate description. */
export interface EnhancedDescriptionType {
  /** Contains Multiple translated texts and language codes. */
  shortDescription?: TranslationTextType2000;
  /** Contains Multiple translated texts and language codes. */
  description?: TranslationTextType2000;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc1?: TranslationTextType50;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc2?: TranslationTextType50;
  /** Contains Multiple translated texts and language codes. */
  enhancedDesc3?: TranslationTextType50;
  source?: string;
}

/** @maxItems 4000 */
export type AdditionalAmountListType = AdditionalAmountType[];

export interface AdditionalAmountType {
  amountType?:
    | 'AdditionalAdult'
    | 'AdditionalChild'
    | 'AdditionalRollawayBed'
    | 'AdditionalCrib'
    | 'AdditionalRollawayCrib';
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Response object for information regarding global descriptions of hotel room types. */
export interface ChannelEnhancedGlobalDescription {
  /** Contains the global descriptions of hotel room types. */
  globalDescription?: EnhancedDescriptionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Operation to fetch hotel-channel room type mappings. */
export interface ChannelRoomMappingsSummary {
  /** Refer to Generic common types document. */
  channelRoomMappingsSummary?: ChannelRoomMappingsSummaryType;
  /** Additional details about the booking channels and source descriptions for a hotel room type referenced within the fetched results. */
  masterInfo?: ChannelRoomMappingMasterInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of hotel-channel room type mappings. */
export interface ChannelRoomMappingsSummaryType {
  /**
   * Information about hotel-channel room type mapping.
   * @maxItems 4000
   */
  channelRoomMappingSummary?: ChannelRoomMappingSummaryType[];
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

/** Basic details of hotel-channel room type mapping. */
export interface ChannelRoomMappingSummaryType {
  /**
   * End date of the hotel-channel room type mapping.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Hotel-channel room type mapping description. */
  description?: ChannelRoomMappingDescriptionType;
  /**
   * Alternate channel room type name.
   * @minLength 0
   * @maxLength 40
   */
  alternateChannelRoomType?: string;
  /** Channel room type order of the hotel-channel room type mapping. */
  channelRoomTypeOrder?: number;
  /** Sell sequence for hotel-channel room type mapping. */
  sellSequence?: number;
  /** Flag that indicates whether hotel-channel room type mapping is active or not. */
  active?: boolean;
  /**
   * Channel bed type code.
   * @minLength 0
   * @maxLength 20
   */
  bedTypeCode?: string;
  /** Channel base allocation. */
  baseAllocation?: number;
  /**
   * Rate codes where hotel-channel room type mappings belong to.
   * @maxItems 4000
   */
  rateCodes?: string[];
  /**
   * Channel rate codes where hotel-channel room mappings belong to.
   * @maxItems 4000
   */
  channelRateCodes?: string[];
  /** Number of active rate room mappings for the channel room type. */
  noOfRateRoomsMapped?: number;
  /** The maximum occupancy for this room category. */
  maximumOccupancy?: number;
  /** Default occupancy for the room type. */
  defaultOccupancy?: number;
  /** The physical number of rooms in this room category at this property. */
  physicalRoomsCount?: number;
  /**
   * Booking Channel Code.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room Type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Channel Room Type.
   * @minLength 0
   * @maxLength 20
   */
  channelRoomType?: string;
  /**
   * Begin Date.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
}

/** Additional details about the booking channels and source descriptions for a hotel room type referenced within the fetched results. */
export interface ChannelRoomMappingMasterInfoType {
  /** Additional details about booking channels. */
  bookingChannelsInfo?: BookingChannelsInfoType;
  /** hotel-channel room type mapping source descriptions. */
  sourceDescriptions?: ChannelRoomMappingsSourceDescriptionsType;
}

/**
 * This type holds hotel-channel room type mapping source descriptions.
 * @maxItems 4000
 */
export type ChannelRoomMappingsSourceDescriptionsType = ChannelRoomMappingSourceDescriptionsType[];

/** Hotel-channel room type mapping source descriptions. */
export interface ChannelRoomMappingSourceDescriptionsType {
  /**
   * Hotel room type description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Hotel room type global description. */
  globalDescription?: ChannelMappingEnhancedDescriptionType;
  /**
   * Hotel code the descriptions belong to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room type the descriptions belong to.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/chl/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Channel Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /chl/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  availability = {
    /**
     * @description Operation to Fetch the Regional Rate Parity. <p><strong>OperationId:</strong>getRegionalRateParity</p>
     *
     * @tags Availability
     * @name GetRegionalRateParity
     * @summary Gets the regional rate parity
     * @request GET:/availability/summary
     */
    getRegionalRateParity: (
      hotelId: string,
      query?: {
        /** Language identification. */
        language?: string;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        numberOfDays?: number;
        hotelIds?: string[];
        channelCode?: string[];
        ratePlanCode?: string[];
        channelRatePlanCode?: string[];
        chainCode?: string;
        rateAccessCode?: string;
        qualifyingProfileCategory?: string;
        qualifyingProfileId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RegionalRateParity, ExceptionDetailType>({
        path: `/availability/summary`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  channels = {
    /**
     * @description Use this API to get list of channels from OPERA. <p><strong>OperationId:</strong>getChannels</p>
     *
     * @tags Channel
     * @name GetChannels
     * @summary Gets list of channels
     * @request GET:/channels
     */
    getChannels: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        channelCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        /** Flag whether to include inactive channel or not. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Channels, ExceptionDetailType>({
        path: `/channels`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel configuration <p><strong>OperationId:</strong>putChannels</p>
     *
     * @tags Channel
     * @name PutChannels
     * @summary Update channel configuration
     * @request PUT:/channels
     */
    putChannels: (hotelId: string, channels: Channels, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels`,
        method: 'PUT',
        body: channels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add new channel code in OPERA <p><strong>OperationId:</strong>postChannels</p>
     *
     * @tags Channel
     * @name PostChannels
     * @summary Adds new channel
     * @request POST:/channels
     */
    postChannels: (hotelId: string, channels: Channels, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels`,
        method: 'POST',
        body: channels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API deletes channel account contracts. <p><strong>OperationId:</strong>deleteChannelAccountContracts</p>
     *
     * @tags Channel
     * @name DeleteChannelAccountContracts
     * @summary Deletes channel account contracts.
     * @request DELETE:/channels/account/contracts
     */
    deleteChannelAccountContracts: (
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string;
        /** Additional identifying value assigned by the creating system. */
        idExtension?: number;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        type?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id1?: string[];
        /** Additional identifying value assigned by the creating system. */
        idExtension1?: number[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext1?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        type1?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/account/contracts`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API creates copy of channel account contracts. <p><strong>OperationId:</strong>copyChannelAccountContracts</p>
     *
     * @tags Channel
     * @name CopyChannelAccountContracts
     * @summary Creates copy of channel account contracts
     * @request PUT:/channels/account/contracts/copy
     */
    copyChannelAccountContracts: (
      hotelId: string,
      channelAccountContractsCopy: ChannelAccountContractsCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelAccountContractsDetailsCopy, ExceptionDetailType>({
        path: `/channels/account/contracts/copy`,
        method: 'PUT',
        body: channelAccountContractsCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel accounts. <p><strong>OperationId:</strong>getChannelAccounts</p>
     *
     * @tags Channel
     * @name GetChannelAccounts
     * @summary This API retrieves channel accounts.
     * @request GET:/channels/accounts
     */
    getChannelAccounts: (
      hotelId: string,
      query?: {
        /** Indicator that tells whether to include inactive channel accounts or not. */
        excludeInactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        hotelId?: string[];
        /**
         * Represents channel account TEMPLATE type.
         * @uniqueItems true
         */
        accountType?: 'Property' | 'Chain' | 'Dealer' | 'Subsidiary' | 'Routing' | 'Template';
        /** Account Name for which details need to be fetched. */
        accountName?: string;
        /** Account Code/No for which details need to be fetched. */
        accountCode?: string;
        /** To fetch channel accounts which expires in no., of days. */
        contractExpInDays?: number;
        attributeName?: string[];
        /** @uniqueItems true */
        orderType?: ('Asc' | 'Desc')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelAccountsSummary, ExceptionDetailType>({
        path: `/channels/accounts`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API adds channel accounts. <p><strong>OperationId:</strong>postChannelAccounts</p>
     *
     * @tags Channel
     * @name PostChannelAccounts
     * @summary Adds channel accounts.
     * @request POST:/channels/accounts
     */
    postChannelAccounts: (hotelId: string, channelAccounts: ChannelAccounts, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/accounts`,
        method: 'POST',
        body: channelAccounts,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing channel account for a given OPERA profile id <p><strong>OperationId:</strong>putChannelAccounts</p>
     *
     * @tags Channel
     * @name PutChannelAccounts
     * @summary Updates channel accounts
     * @request PUT:/channels/accounts
     */
    putChannelAccounts: (
      hotelId: string,
      channelAccountsToChange: ChannelAccountsToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/accounts`,
        method: 'PUT',
        body: channelAccountsToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get existing channel account for a given OPERA profile id. <p><strong>OperationId:</strong>getChannelAccount</p>
     *
     * @tags Channel
     * @name GetChannelAccount
     * @summary Gets channel accounts
     * @request GET:/channels/accounts/{accountProfileId}
     */
    getChannelAccount: (
      hotelId: string,
      accountProfileId: string,
      query?: {
        /** Providing this flag marks the billing account as recently accessed. */
        markAsRecentlyAccessed?: boolean;
        /**
         * Channel account indicators information.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'PrimaryDetails'
          | 'Communication'
          | 'Contact'
          | 'Notes'
          | 'Contracts'
          | 'Statements'
          | 'Indicators'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelAccount, ExceptionDetailType>({
        path: `/channels/accounts/${accountProfileId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing cannel account contract for a given OPERA profile id <p><strong>OperationId:</strong>putChannelAccountContracts</p>
     *
     * @tags Channel
     * @name PutChannelAccountContracts
     * @summary Updates channel account contracts for given profile Id.
     * @request PUT:/channels/accounts/{accountProfileId}/contracts
     */
    putChannelAccountContracts: (
      hotelId: string,
      accountProfileId: string,
      channelAccountContracts: ChannelAccountContracts,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/accounts/${accountProfileId}/contracts`,
        method: 'PUT',
        body: channelAccountContracts,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API adds channel account contracts for given profile Id. <p><strong>OperationId:</strong>postChannelAccountContracts</p>
     *
     * @tags Channel
     * @name PostChannelAccountContracts
     * @summary Adds channel account contracts for given profile Id.
     * @request POST:/channels/accounts/{accountProfileId}/contracts
     */
    postChannelAccountContracts: (
      hotelId: string,
      accountProfileId: string,
      channelAccountContracts: ChannelAccountContracts,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/accounts/${accountProfileId}/contracts`,
        method: 'POST',
        body: channelAccountContracts,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get existing cannel account contract for a given OPERA profile id. <p><strong>OperationId:</strong>getChannelAccountContractElements</p>
     *
     * @tags Channel
     * @name GetChannelAccountContractElements
     * @summary Gets channel account contracts for given profile Id.
     * @request GET:/channels/accounts/{accountProfileId}/contracts/{contractId}
     */
    getChannelAccountContractElements: (
      hotelId: string,
      contractId: string,
      accountProfileId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        attributeName?: string[];
        /** @uniqueItems true */
        orderType?: ('Asc' | 'Desc')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelAccountContractElements, ExceptionDetailType>({
        path: `/channels/accounts/${accountProfileId}/contracts/${contractId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel amenities mapping <p><strong>OperationId:</strong>postAmenitiesMapping</p>
     *
     * @tags Channel
     * @name PostAmenitiesMapping
     * @summary Adds channel amenities configuration
     * @request POST:/channels/amenities
     */
    postAmenitiesMapping: (hotelId: string, amenities: Amenities, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/amenities`,
        method: 'POST',
        body: amenities,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel amenities mapping <p><strong>OperationId:</strong>putAmenitiesMapping</p>
     *
     * @tags Channel
     * @name PutAmenitiesMapping
     * @summary Updates channel amenities configuration
     * @request PUT:/channels/amenities
     */
    putAmenitiesMapping: (hotelId: string, amenities: Amenities, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/amenities`,
        method: 'PUT',
        body: amenities,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel amenities mapping <p><strong>OperationId:</strong>deleteAmenitiesMapping</p>
     *
     * @tags Channel
     * @name DeleteAmenitiesMapping
     * @summary Deletes channel amenities configuration
     * @request DELETE:/channels/amenities
     */
    deleteAmenitiesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether code is inactive or not. */
        inactive?: boolean;
        /** External system code such as TRAVELOCITY, EXPEDIA, etc. */
        systemCode?: string;
        /** External system subtype such as GDS, WEB, etc. */
        systemSubType?: string;
        /** External system type such as CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system name. */
        systemName?: string;
        /** Cannel Website URL */
        websiteURL?: string;
        /** Channel Icon URL */
        iconURL?: string;
        /** Code used inside the OPERA System */
        localSystemCode?: string[];
        /** Code used in the External System */
        externalSystemCode?: string[];
        /** Detailed Description of the given entity. */
        description?: string[];
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /**
         * User defined logical group name for the amenities.
         * @uniqueItems true
         */
        amenityGroup?: ('PropertyFeatures' | 'RoomFeatures' | 'ProductsFeatures' | 'BedCodes')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/amenities`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel amenities mapping. <p><strong>OperationId:</strong>getAmenitiesMapping</p>
     *
     * @tags Channel
     * @name GetAmenitiesMapping
     * @summary Gets channel amenities configuration
     * @request GET:/channels/amenities/mapping
     */
    getAmenitiesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        systemCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        localSystemCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AmenitiesMapping, ExceptionDetailType>({
        path: `/channels/amenities/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes publishes channel availability. <p><strong>OperationId:</strong>publishChannelAvailability</p>
     *
     * @tags Channel
     * @name PublishChannelAvailability
     * @summary Publishes channel availability.
     * @request PUT:/channels/availability/publish
     */
    publishChannelAvailability: (
      hotelId: string,
      channelAvailability: ChannelAvailability,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/availability/publish`,
        method: 'PUT',
        body: channelAvailability,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel billing statements. <p><strong>OperationId:</strong>getChannelBillingStatements</p>
     *
     * @tags Channel
     * @name GetChannelBillingStatements
     * @summary Retrieves channel billing statements.
     * @request GET:/channels/billingStatements
     */
    getChannelBillingStatements: (
      hotelId: string,
      query?: {
        /** Indicates whether search results should include locked statements or not. By default, locked statements will be included. */
        includeLocked?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        statementId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        statementIdType?: string;
        /**
         * Begin date of the statement.
         * @format date
         */
        beginDate?: string;
        /**
         * End date of the statement.
         * @format date
         */
        endDate?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        profileIdType?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelBillingStatementSummaries, ExceptionDetailType>({
        path: `/channels/billingStatements`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API adds channel billing statements. <p><strong>OperationId:</strong>postChannelBillingStatements</p>
     *
     * @tags Channel
     * @name PostChannelBillingStatements
     * @summary Adds channel billing statements.
     * @request POST:/channels/billingStatements
     */
    postChannelBillingStatements: (
      hotelId: string,
      channelBillingStatements: ChannelBillingStatements,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/billingStatements`,
        method: 'POST',
        body: channelBillingStatements,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channels billing statements for a given OPERA statement id <p><strong>OperationId:</strong>putChannelBillingStatements</p>
     *
     * @tags Channel
     * @name PutChannelBillingStatements
     * @summary Updates channel billing statement details
     * @request PUT:/channels/billingStatements
     */
    putChannelBillingStatements: (
      hotelId: string,
      channelBillingStatements: ChannelBillingStatements,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/billingStatements`,
        method: 'PUT',
        body: channelBillingStatements,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API deletes channel billing statements. <p><strong>OperationId:</strong>deleteChannelBillingStatements</p>
     *
     * @tags Channel
     * @name DeleteChannelBillingStatements
     * @summary Deletes channel billing statements.
     * @request DELETE:/channels/billingStatements
     */
    deleteChannelBillingStatements: (
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string[];
        /** Additional identifying value assigned by the creating system. */
        idExtension?: number[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        type?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/billingStatements`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API generates channel billing statements. <p><strong>OperationId:</strong>generateChannelBillingStatements</p>
     *
     * @tags Channel
     * @name GenerateChannelBillingStatements
     * @summary This API generates channel billing statements.
     * @request POST:/channels/billingStatements/generate
     */
    generateChannelBillingStatements: (
      hotelId: string,
      channelBillingStatements: ChannelBillingStatements,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/billingStatements/generate`,
        method: 'POST',
        body: channelBillingStatements,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel billing statement for a given statement Id. <p><strong>OperationId:</strong>getChannelBillingStatement</p>
     *
     * @tags Channel
     * @name GetChannelBillingStatement
     * @summary Retrieves channel billing statement for a given statement Id
     * @request GET:/channels/billingStatements/{statementId}
     */
    getChannelBillingStatement: (
      hotelId: string,
      statementId: string,
      query?: {
        /**
         * Used to identify the source of the identifier (e.g., IATA, ABTA).
         * @default "OPERA"
         */
        idContext?: string;
        /**
         * A reference to the type of object defined by the UniqueID element.
         * @default "Statement"
         */
        idType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelBillingStatement, ExceptionDetailType>({
        path: `/channels/billingStatements/${statementId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel billing statement details for a given statement Id. <p><strong>OperationId:</strong>getChannelBillingStatementDetails</p>
     *
     * @tags Channel
     * @name GetChannelBillingStatementDetails
     * @summary Retrieves channel billing statement details for a given statement Id
     * @request GET:/channels/billingStatements/{statementId}/details
     */
    getChannelBillingStatementDetails: (
      hotelId: string,
      statementId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        contractId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        contractIdType?: string;
        attributeName?: string[];
        /** @uniqueItems true */
        orderType?: ('Asc' | 'Desc')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelBillingStatementDetails, ExceptionDetailType>({
        path: `/channels/billingStatements/${statementId}/details`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves billing statement details statistics. <p><strong>OperationId:</strong>getStatementDetailsStatistics</p>
     *
     * @tags Channel
     * @name GetStatementDetailsStatistics
     * @summary Retrieves billing statement details statistics.
     * @request GET:/channels/billingStatements/{statementId}/statistics
     */
    getStatementDetailsStatistics: (
      hotelId: string,
      statementId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        contractId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        contractIdType?: string;
        /**
         * Type for statement details statistics instructions that can be used in requests for partial operations.
         * @uniqueItems true
         */
        fetchInstructions?: ('ByResort' | 'ByChannel' | 'ByChannelType' | 'ByFeeType')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<StatementDetailsStatistics, ExceptionDetailType>({
        path: `/channels/billingStatements/${statementId}/statistics`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel mapping for OPERA credit cards to channel for a given hotel id. <p><strong>OperationId:</strong>getChannelCardTypeMappings</p>
     *
     * @tags Channel
     * @name GetChannelCardTypeMappings
     * @summary Gets channel credit card mapping for a hotel
     * @request GET:/channels/cardType/mappings
     */
    getChannelCardTypeMappings: (
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
        bookingChannelCodes?: string[];
        cardTypes?: string[];
        channelCardTypes?: string[];
        /** Indicates whether search includes inactive mapping. */
        includeInactive?: boolean;
        /** Indicates whether unmapped channel-hotel card types should be fetched. */
        fetchUnmapped?: boolean;
        /** Indicates whether mapped channel-hotel card types should be fetched. */
        fetchMapped?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelCardTypeMappingDetails, ExceptionDetailType>({
        path: `/channels/cardType/mappings`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel mapping for OPERA Credit cards <p><strong>OperationId:</strong>postCreditCardsMapping</p>
     *
     * @tags Channel
     * @name PostCreditCardsMapping
     * @summary Adds channel credit card mapping
     * @request POST:/channels/cardTypes
     */
    postCreditCardsMapping: (hotelId: string, creditCards: CreditCards, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/cardTypes`,
        method: 'POST',
        body: creditCards,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel credit card code mapping to OPERA credit card code <p><strong>OperationId:</strong>putCreditCardsMapping</p>
     *
     * @tags Channel
     * @name PutCreditCardsMapping
     * @summary Updates channel credit card mapping
     * @request PUT:/channels/cardTypes
     */
    putCreditCardsMapping: (hotelId: string, creditCards: CreditCards, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/cardTypes`,
        method: 'PUT',
        body: creditCards,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel credit card code mapping to OPERA credit card code. <p><strong>OperationId:</strong>deleteCreditCardsMapping</p>
     *
     * @tags Channel
     * @name DeleteCreditCardsMapping
     * @summary Deletes channel credit card mapping
     * @request DELETE:/channels/cardTypes
     */
    deleteCreditCardsMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether code is inactive or not. */
        inactive?: boolean;
        /** External system code such as TRAVELOCITY, EXPEDIA, etc. */
        systemCode?: string;
        /** External system subtype such as GDS, WEB, etc. */
        systemSubType?: string;
        /** External system type such as CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system name. */
        systemName?: string;
        /** Cannel Website URL */
        websiteURL?: string;
        /** Channel Icon URL */
        iconURL?: string;
        /** Code used inside the OPERA System */
        localSystemCode?: string[];
        /** Code used in the External System */
        externalSystemCode?: string[];
        /** Detailed Description of the given entity. */
        description?: string[];
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/cardTypes`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel credit card code mapping to OPERA credit card code. <p><strong>OperationId:</strong>getCreditCardsMapping</p>
     *
     * @tags Channel
     * @name GetCreditCardsMapping
     * @summary Gets channel credit card mapping
     * @request GET:/channels/cardTypes/mapping
     */
    getCreditCardsMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        systemCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        localSystemCodes?: string[];
        /** Indicates whether to include inactive guarantees or not. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CreditCardsMapping, ExceptionDetailType>({
        path: `/channels/cardTypes/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel property confirmation letter configuration <p><strong>OperationId:</strong>getChannelHotelLetters</p>
     *
     * @tags Channel
     * @name GetChannelHotelLetters
     * @summary Gets channel property confirmation letter mapping
     * @request GET:/channels/confirmationLetters
     */
    getChannelHotelLetters: (
      hotelId: string,
      query?: {
        channelCode?: string[];
        hotelIds?: string[];
        /** Language code associated with the hotel letters. */
        language?: string;
        /**
         * Represents Inquiry Letter Type.
         * @uniqueItems true
         */
        letterType?: 'Confirmation' | 'Cancellation' | 'BanquetEventOrder' | 'Contract' | 'Inquiry';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<FetchedChannelHotelLetters, ExceptionDetailType>({
        path: `/channels/confirmationLetters`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel property confirmation letter configuration <p><strong>OperationId:</strong>postChannelHotelLetters</p>
     *
     * @tags Channel
     * @name PostChannelHotelLetters
     * @summary Adds channel property confirmation letter mapping
     * @request POST:/channels/confirmationLetters
     */
    postChannelHotelLetters: (
      hotelId: string,
      channelHotelLettersToBeCreated: ChannelHotelLettersToBeCreated,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/confirmationLetters`,
        method: 'POST',
        body: channelHotelLettersToBeCreated,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel property confirmation letter configuration <p><strong>OperationId:</strong>putChannelHotelLetters</p>
     *
     * @tags Channel
     * @name PutChannelHotelLetters
     * @summary Updates channel property confirmation letter mapping
     * @request PUT:/channels/confirmationLetters
     */
    putChannelHotelLetters: (
      hotelId: string,
      channelHotelLettersToBeChanged: ChannelHotelLettersToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/confirmationLetters`,
        method: 'PUT',
        body: channelHotelLettersToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel property confirmation letter configuration. <p><strong>OperationId:</strong>deleteChannelHotelLetters</p>
     *
     * @tags Channel
     * @name DeleteChannelHotelLetters
     * @summary Deletes channel property confirmation letter mapping
     * @request DELETE:/channels/confirmationLetters
     */
    deleteChannelHotelLetters: (
      hotelId: string,
      query?: {
        /** Code. */
        code?: string;
        /** description. */
        description?: string;
        /** Hotel code which the hotel letters belong to. */
        hotelId?: string[];
        /** Code. */
        code1?: string;
        /** description. */
        description1?: string;
        /**
         * Represents Inquiry Letter Type.
         * @uniqueItems true
         */
        letterType?: ('Confirmation' | 'Cancellation' | 'BanquetEventOrder' | 'Contract' | 'Inquiry')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/confirmationLetters`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel currency code mapping to OPERA currency codes. <p><strong>OperationId:</strong>postCurrenciesMapping</p>
     *
     * @tags Channel
     * @name PostCurrenciesMapping
     * @summary Adds channel currency code mapping
     * @request POST:/channels/currencies
     */
    postCurrenciesMapping: (hotelId: string, currencies: Currencies, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/currencies`,
        method: 'POST',
        body: currencies,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel mapping to OPERA currency codes <p><strong>OperationId:</strong>putCurrenciesMapping</p>
     *
     * @tags Channel
     * @name PutCurrenciesMapping
     * @summary Updates channel currency code mapping
     * @request PUT:/channels/currencies
     */
    putCurrenciesMapping: (hotelId: string, currencies: Currencies, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/currencies`,
        method: 'PUT',
        body: currencies,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel mapping to OPERA currency codes. <p><strong>OperationId:</strong>deleteCurrenciesMapping</p>
     *
     * @tags Channel
     * @name DeleteCurrenciesMapping
     * @summary Deletes channel currency code mapping
     * @request DELETE:/channels/currencies
     */
    deleteCurrenciesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether code is inactive or not. */
        inactive?: boolean;
        /** External system code such as TRAVELOCITY, EXPEDIA, etc. */
        systemCode?: string;
        /** External system subtype such as GDS, WEB, etc. */
        systemSubType?: string;
        /** External system type such as CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system name. */
        systemName?: string;
        /** Cannel Website URL */
        websiteURL?: string;
        /** Channel Icon URL */
        iconURL?: string;
        /** Code used inside the OPERA System */
        localSystemCode?: string[];
        /** Code used in the External System */
        externalSystemCode?: string[];
        /** Detailed Description of the given entity. */
        description?: string[];
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /** Number of decimal positions used by the currency. */
        lanyonDecimalPosition?: number[];
        /** Number of decimal positions used by the currency as per the channel. */
        channelDecimalPosition?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/currencies`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel mapping to OPERA currency codes. <p><strong>OperationId:</strong>getCurrenciesMapping</p>
     *
     * @tags Channel
     * @name GetCurrenciesMapping
     * @summary Gets channel currency code mapping
     * @request GET:/channels/currencies/mapping
     */
    getCurrenciesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        systemCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        localSystemCodes?: string[];
        /** Indicates whether to include inactive guarantees or not. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CurrenciesMapping, ExceptionDetailType>({
        path: `/channels/currencies/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves distribution templates. <p><strong>OperationId:</strong>getDistributionTemplates</p>
     *
     * @tags Channel
     * @name GetDistributionTemplates
     * @summary Retrieves distribution templates
     * @request GET:/channels/distributionTemplates
     */
    getDistributionTemplates: (
      hotelId: string,
      query?: {
        /**
         * Filter chain level distribution templates by chain.
         * @default "false"
         */
        isChain?: boolean;
        hotelIds?: string[];
        codes?: string[];
        types?: string[];
        /** Indicates whether search includes inactive distribution templates. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<DistributionTemplates, ExceptionDetailType>({
        path: `/channels/distributionTemplates`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add a distribution rate template. <p><strong>OperationId:</strong>postDistributionTemplates</p>
     *
     * @tags Channel
     * @name PostDistributionTemplates
     * @summary Adds rate templates configurations
     * @request POST:/channels/distributionTemplates
     */
    postDistributionTemplates: (
      hotelId: string,
      distributionTemplates: DistributionTemplates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/distributionTemplates`,
        method: 'POST',
        body: distributionTemplates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing distribution rate template <p><strong>OperationId:</strong>putDistributionTemplates</p>
     *
     * @tags Channel
     * @name PutDistributionTemplates
     * @summary Updates rate templates configurations
     * @request PUT:/channels/distributionTemplates
     */
    putDistributionTemplates: (
      hotelId: string,
      distributionTemplates: DistributionTemplates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/distributionTemplates`,
        method: 'PUT',
        body: distributionTemplates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete existing distribution rate template. <p><strong>OperationId:</strong>deleteDistributionTemplates</p>
     *
     * @tags Channel
     * @name DeleteDistributionTemplates
     * @summary Deletes rate templates configurations
     * @request DELETE:/channels/distributionTemplates
     */
    deleteDistributionTemplates: (
      hotelId: string,
      query?: {
        codes?: string[];
        /** Configuration code. */
        code?: string[];
        /** Hotel where the code is configured. */
        hotelId?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/distributionTemplates`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel error code mapping configurations. <p><strong>OperationId:</strong>deleteChannelErrors</p>
     *
     * @tags Channel
     * @name DeleteChannelErrors
     * @summary Deletes channel error codes
     * @request DELETE:/channels/errorCodes
     */
    deleteChannelErrors: (
      hotelId: string,
      query?: {
        /** Booking channel code of error. */
        bookingChannelCode?: string[];
        /** Code of error. */
        error?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/errorCodes`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel's guarantee codes mapping to OPERA guarantee codes. <p><strong>OperationId:</strong>postGuaranteesMapping</p>
     *
     * @tags Channel
     * @name PostGuaranteesMapping
     * @summary Adds channel guarantee code mapping
     * @request POST:/channels/guarantees
     */
    postGuaranteesMapping: (hotelId: string, guarantees: Guarantees, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/guarantees`,
        method: 'POST',
        body: guarantees,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel's guarantee codes mapping to OPERA guarantee codes <p><strong>OperationId:</strong>putGuaranteesMapping</p>
     *
     * @tags Channel
     * @name PutGuaranteesMapping
     * @summary Updates channel guarantee code mapping
     * @request PUT:/channels/guarantees
     */
    putGuaranteesMapping: (hotelId: string, guarantees: Guarantees, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/guarantees`,
        method: 'PUT',
        body: guarantees,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel's guarantee codes mapping to OPERA guarantee codes. <p><strong>OperationId:</strong>deleteGuaranteesMapping</p>
     *
     * @tags Channel
     * @name DeleteGuaranteesMapping
     * @summary Deletes channel guarantee code mapping
     * @request DELETE:/channels/guarantees
     */
    deleteGuaranteesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether code is inactive or not. */
        inactive?: boolean;
        /** External system code such as TRAVELOCITY, EXPEDIA, etc. */
        systemCode?: string;
        /** External system subtype such as GDS, WEB, etc. */
        systemSubType?: string;
        /** External system type such as CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system name. */
        systemName?: string;
        /** Cannel Website URL */
        websiteURL?: string;
        /** Channel Icon URL */
        iconURL?: string;
        /** Code used inside the OPERA System */
        localSystemCode?: string[];
        /** Code used in the External System */
        externalSystemCode?: string[];
        /** Detailed Description of the given entity. */
        description?: string[];
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /** Requirement code of guarantee. */
        requirementCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/guarantees`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel guarantee code mapping to OPERA guarantee code for a given hotel. <p><strong>OperationId:</strong>getGuaranteesMapping</p>
     *
     * @tags Channel
     * @name GetGuaranteesMapping
     * @summary Gets channel guarantee code mapping for a hotel
     * @request GET:/channels/guarantees/mapping
     */
    getGuaranteesMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        systemCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        localSystemCodes?: string[];
        /** Indicates whether to include inactive guarantees or not. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<GuaranteesMapping, ExceptionDetailType>({
        path: `/channels/guarantees/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>postHotelsMapping</p>
     *
     * @tags Channel
     * @name PostHotelsMapping
     * @summary Adds channel hotel mapping
     * @request POST:/channels/hotels
     */
    postHotelsMapping: (hotelId: string, properties: Properties, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/hotels`,
        method: 'POST',
        body: properties,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date <p><strong>OperationId:</strong>putHotelsMapping</p>
     *
     * @tags Channel
     * @name PutHotelsMapping
     * @summary Updates channel hotel mapping
     * @request PUT:/channels/hotels
     */
    putHotelsMapping: (hotelId: string, properties: Properties, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/hotels`,
        method: 'PUT',
        body: properties,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>deleteHotelsMapping</p>
     *
     * @tags Channel
     * @name DeleteHotelsMapping
     * @summary Deletes channel hotel mapping
     * @request DELETE:/channels/hotels
     */
    deleteHotelsMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether code is inactive or not. */
        inactive?: boolean;
        /** External system code such as TRAVELOCITY, EXPEDIA, etc. */
        systemCode?: string;
        /** External system subtype such as GDS, WEB, etc. */
        systemSubType?: string;
        /** External system type such as CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system name. */
        systemName?: string;
        /** Cannel Website URL */
        websiteURL?: string;
        /** Channel Icon URL */
        iconURL?: string;
        /** Code used inside the OPERA System */
        localSystemCode?: string[];
        /** Code used in the External System */
        externalSystemCode?: string[];
        /** Detailed Description of the given entity. */
        description?: string[];
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /** City code of the channel hotel. */
        city?: string[];
        /** Maximum room limit for the channel hotel reservation. */
        roomLimit?: number[];
        /** Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled. */
        bookingLimit?: number[];
        /** Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel. */
        hotelChainId?: string[];
        /** Chain code for the channel-hotel mapping. */
        chainCode?: string[];
        /** Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on. */
        prevailingRates?: boolean[];
        /** ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS. */
        aRIEnabled?: boolean[];
        /** External system Add-on license. This is mandatory when Channel Type is ADS. */
        addOnLicense?: string[];
        /** Flag indicating if channel resort mapping is available. */
        available?: boolean;
        /** Default rate code to be used to calculate the total revenue. */
        defaultRateCode?: string;
        /** Default rate code of channel hotel. */
        defaultRateCode1?: string[];
        /** Low revenue threshold. */
        lowRevenueThreshold?: number[];
        /** High revenue threshold. */
        highRevenueThreshold?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/hotels`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>getHotelsMapping</p>
     *
     * @tags Channel
     * @name GetHotelsMapping
     * @summary Gets channel hotel mapping
     * @request GET:/channels/hotels/mapping
     */
    getHotelsMapping: (
      hotelId: string,
      query?: {
        /** Indicates whether searching for active or inactive codes. */
        inactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. */
        systemCode?: string;
        /** External system type to be searched. Possible values are CHANNEL, OXI, etc. */
        systemType?: string;
        /** External system sub type to be searched. Possible values are GDS, WEB, etc. */
        systemSubType?: string;
        /** External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. */
        systemRateType?: string;
        localSystemCodes?: string[];
        /** Indicates whether to include inactive guarantees or not. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<PropertiesMapping, ExceptionDetailType>({
        path: `/channels/hotels/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel mapping for marketing messages. <p><strong>OperationId:</strong>getChannelMarketingText</p>
     *
     * @tags Channel
     * @name GetChannelMarketingText
     * @summary Gets channel marketing messages
     * @request GET:/channels/marketingText
     */
    getChannelMarketingText: (
      hotelId: string,
      query?: {
        transactionType?: string;
        policyType?: string;
        policyDetail?: string;
        /** @format date */
        beginDate?: string;
        filterHotelIds?: string[];
        bookingChannelCode?: string[];
        transactionTypes?: string[];
        policyTypesPolicyType?: string[];
        policyDetailPolicyDetail?: string[];
        showGlobal?: boolean;
        /** Include or not include inactive channel marketing text. */
        includeInactive?: boolean;
        /**
         * Simple type for channel fetch instruction.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'Marketingtext'
          | 'Amenity'
          | 'Carrier'
          | 'Currency'
          | 'Error'
          | 'Guarantee'
          | 'Ratecategory'
        )[];
        /** Hotel code. */
        hotelIds?: string[];
        channelCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelMarketingTextsInfo, ExceptionDetailType>({
        path: `/channels/marketingText`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel mapping for marketing messages <p><strong>OperationId:</strong>postChannelMarketingText</p>
     *
     * @tags Channel
     * @name PostChannelMarketingText
     * @summary Adds channel marketing messages
     * @request POST:/channels/marketingText
     */
    postChannelMarketingText: (
      hotelId: string,
      channelMarketingText: ChannelMarketingText,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/marketingText`,
        method: 'POST',
        body: channelMarketingText,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel mapping for marketing messages <p><strong>OperationId:</strong>putChannelMarketingText</p>
     *
     * @tags Channel
     * @name PutChannelMarketingText
     * @summary Updates channel marketing messages
     * @request PUT:/channels/marketingText
     */
    putChannelMarketingText: (
      hotelId: string,
      channelMarketingTextToChange: ChannelMarketingTextToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/marketingText`,
        method: 'PUT',
        body: channelMarketingTextToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel mapping for marketing messages. <p><strong>OperationId:</strong>deleteChannelMarketingText</p>
     *
     * @tags Channel
     * @name DeleteChannelMarketingText
     * @summary Deletes channel marketing messages
     * @request DELETE:/channels/marketingText
     */
    deleteChannelMarketingText: (
      hotelId: string,
      query?: {
        beginDate?: string[];
        /** The code that identifies a Booking Channel. */
        bookingChannelCode?: string[];
        endDate?: string[];
        globalTextYN?: boolean[];
        /** The code that identifies a Hotel. */
        hotelId?: string[];
        marketingText?: string[];
        policyDetail?: string[];
        policyType?: string[];
        transactionType?: string[];
        newHotelId?: string[];
        newTransactionType?: string[];
        newPolicyType?: string[];
        newPolicyDetail?: string[];
        newBeginDate?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/marketingText`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to copy one channel's mapping for marketing messages to another channel and hotel mapping. <p><strong>OperationId:</strong>copyChannelMarketingText</p>
     *
     * @tags Channel
     * @name CopyChannelMarketingText
     * @summary Allows to copy marketing message to another channel and hotel
     * @request POST:/channels/marketingText/copy
     */
    copyChannelMarketingText: (
      hotelId: string,
      channelMarketingTextCopy: ChannelMarketingTextCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/marketingText/copy`,
        method: 'POST',
        body: channelMarketingTextCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel's negotiated rate code mapping with an OPERA profile for a given hotel id <p><strong>OperationId:</strong>postChannelNegotiatedRate</p>
     *
     * @tags Channel
     * @name PostChannelNegotiatedRate
     * @summary Adds channel negotiate rate
     * @request POST:/channels/negotiatedRates
     */
    postChannelNegotiatedRate: (
      hotelId: string,
      channelNegotiatedRates: ChannelNegotiatedRates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/negotiatedRates`,
        method: 'POST',
        body: channelNegotiatedRates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>putChannelNegotiatedRate</p>
     *
     * @tags Channel
     * @name PutChannelNegotiatedRate
     * @summary Updates channel negotiate rate
     * @request PUT:/channels/negotiatedRates
     */
    putChannelNegotiatedRate: (
      hotelId: string,
      channelNegotiatedRates: ChannelNegotiatedRates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/negotiatedRates`,
        method: 'PUT',
        body: channelNegotiatedRates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>deleteChannelNegotiatedRate</p>
     *
     * @tags Channel
     * @name DeleteChannelNegotiatedRate
     * @summary Deletes channel negotiate rate
     * @request DELETE:/channels/negotiatedRates
     */
    deleteChannelNegotiatedRate: (
      hotelId: string,
      query?: {
        /** Booking Channel Code. */
        bookingChannelCode?: string;
        /** Channel Room Type. */
        channelRatePlanCode?: string;
        /** Hotel Code. */
        hotelId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        type?: string[];
        /** When name type is external, indicates the external system the name belongs to. */
        externalSystem?: string;
        /** Language code associated with an alternate name. */
        language?: string;
        /**
         * Person's name in an external system.
         * @uniqueItems true
         */
        nameType?: 'Primary' | 'Alternate' | 'Incognito' | 'External' | 'Phonetic';
        /** Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) */
        namePrefix?: string;
        /** Given name, first name or names. */
        givenName?: string;
        /** The middle name of the person name. */
        middleName?: string;
        /** Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. */
        surname?: string;
        /** Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) */
        nameSuffix?: string;
        /** Degree or honors (e.g., Ph.D., M.D.) */
        nameTitle?: string;
        /** Title Suffix. Must be populated if ADVANCED_TITLE is on. */
        nameTitleSuffix?: number;
        /** Envelope Greeting of the profile */
        envelopeGreeting?: string;
        /** Salutation of the profile */
        salutation?: string;
        accessCode?: string[];
        /** The ending value of the date range. */
        end?: string[];
        /** The starting value of the date range. */
        start?: string[];
        newAccessCode?: string;
        channelRatePlanCodeOrder?: number;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/negotiatedRates`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>getChannelNegotiatedRate</p>
     *
     * @tags Channel
     * @name GetChannelNegotiatedRate
     * @summary Gets channel negotiate rate
     * @request GET:/channels/negotiatedRates
     */
    getChannelNegotiatedRate: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        hotelId?: string;
        bookingChannelCode?: string;
        channelRatePlanCode?: string;
        accessCode?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        uniqueId?: string[];
        uniqueIdType?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelNegotiatedRateDetails, ExceptionDetailType>({
        path: `/channels/negotiatedRates`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel rate categories for a given channel. <p><strong>OperationId:</strong>deleteChannelRateCategories</p>
     *
     * @tags Channel
     * @name DeleteChannelRateCategories
     * @summary Deletes given channel's rate categories
     * @request DELETE:/channels/rateCategories
     */
    deleteChannelRateCategories: (
      hotelId: string,
      query: {
        /** Booking channel code of rate category. */
        bookingChannelCodes: string[];
        /** Code of rate category. */
        rateCategories: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rateCategories`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel rate level code's description. <p><strong>OperationId:</strong>deleteChannelRateLevels</p>
     *
     * @tags Channel
     * @name DeleteChannelRateLevels
     * @summary Deletes channel rate level
     * @request DELETE:/channels/rateLevels
     */
    deleteChannelRateLevels: (
      hotelId: string,
      query: {
        /** Booking channel code of rate level. */
        bookingChannelCodes: string[];
        /** Code of rate level. */
        rateLevels: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rateLevels`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>getChannelRateMapping</p>
     *
     * @tags Channel
     * @name GetChannelRateMapping
     * @summary Gets channel property rate mapping
     * @request GET:/channels/rates
     */
    getChannelRateMapping: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        hotelId?: string[];
        channelCode?: string[];
        ratePlanCodes?: string[];
        channelRatePlanCodes?: string[];
        ratePlanCategories?: string[];
        channelRatePlanCategories?: string[];
        /** Flag whether to include unmapped rate codes. */
        includeUnmappedRatePlans?: boolean;
        /** Flag whether to include unmapped rate codes only. */
        onlyUnmappedRatePlans?: boolean;
        /** Flag whether to include inactive mappings. */
        includeInactiveMappings?: boolean;
        /** Flag whether to include negotiated rate mappings only. */
        onlyNegotiatedRates?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelRateMappings, ExceptionDetailType>({
        path: `/channels/rates`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel property rate mapping with OPERA hotel rate <p><strong>OperationId:</strong>postChannelRateMapping</p>
     *
     * @tags Channel
     * @name PostChannelRateMapping
     * @summary Adds channel property rate mapping
     * @request POST:/channels/rates
     */
    postChannelRateMapping: (hotelId: string, channelRateMapping: ChannelRateMapping, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates`,
        method: 'POST',
        body: channelRateMapping,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>putChannelRateMapping</p>
     *
     * @tags Channel
     * @name PutChannelRateMapping
     * @summary Updates channel property rate mapping
     * @request PUT:/channels/rates
     */
    putChannelRateMapping: (hotelId: string, channelRateMapping: ChannelRateMapping, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates`,
        method: 'PUT',
        body: channelRateMapping,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>deleteChannelRateMapping</p>
     *
     * @tags Channel
     * @name DeleteChannelRateMapping
     * @summary Deletes channel property rate mapping
     * @request DELETE:/channels/rates
     */
    deleteChannelRateMapping: (
      hotelId: string,
      query?: {
        /** Booking Channel Code. */
        bookingChannelCode?: string[];
        /** Channel Room Type. */
        channelRatePlanCode?: string[];
        /** True if the mapping has channel negotiated rates, otherwise false. */
        hasChannelNegotiatedRates?: boolean[];
        /** True if this channel rate plan code has negotiated rates, otherwise false */
        hasNegotiatedRates?: boolean[];
        /** Hotel Code. */
        hotelId?: string[];
        /** Room Type. */
        ratePlanCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get global rate description for given hotel id. <p><strong>OperationId:</strong>getChannelRatesGlobalDescriptions</p>
     *
     * @tags Channel
     * @name GetChannelRatesGlobalDescriptions
     * @summary Gets global rate descriptions
     * @request GET:/channels/rates/globalDescriptions
     */
    getChannelRatesGlobalDescriptions: (
      hotelId: string,
      query?: {
        hotelIds?: string[];
        ratePlanCodes?: string[];
        roomTypes?: string[];
        /**
         * Either Room Type or Rate Plan Code
         * @uniqueItems true
         */
        globalDescriptionType?: 'RoomType' | 'RatePlan';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelGlobalDescriptions, ExceptionDetailType>({
        path: `/channels/rates/globalDescriptions`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to adds global room description for given hotel id and room type code <p><strong>OperationId:</strong>postChannelRatesGlobalDescriptions</p>
     *
     * @tags Channel
     * @name PostChannelRatesGlobalDescriptions
     * @summary Adds global room descriptions
     * @request POST:/channels/rates/globalDescriptions
     */
    postChannelRatesGlobalDescriptions: (
      hotelId: string,
      channelGlobalDescriptions: ChannelGlobalDescriptions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates/globalDescriptions`,
        method: 'POST',
        body: channelGlobalDescriptions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update global rate description for given hotel id and rate code <p><strong>OperationId:</strong>putChannelRatesGlobalDescriptions</p>
     *
     * @tags Channel
     * @name PutChannelRatesGlobalDescriptions
     * @summary Updates global rate descriptions
     * @request PUT:/channels/rates/globalDescriptions
     */
    putChannelRatesGlobalDescriptions: (
      hotelId: string,
      channelGlobalDescriptions: ChannelGlobalDescriptions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates/globalDescriptions`,
        method: 'PUT',
        body: channelGlobalDescriptions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete global rate description for given hotel id and rate code. <p><strong>OperationId:</strong>deleteChannelRatesGlobalDescriptions</p>
     *
     * @tags Channel
     * @name DeleteChannelRatesGlobalDescriptions
     * @summary Deletes global rate descriptions
     * @request DELETE:/channels/rates/globalDescriptions
     */
    deleteChannelRatesGlobalDescriptions: (
      hotelId: string,
      query?: {
        /** Property mapping with Rate plan code or Room type */
        hotelId?: string[];
        /** Code. */
        code?: string;
        /** description. */
        description?: string;
        /** Code. */
        code1?: string;
        /** description. */
        description1?: string;
        /**
         * Either Room Type or Rate Plan Code
         * @uniqueItems true
         */
        globalDescType?: ('RoomType' | 'RatePlan')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates/globalDescriptions`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update sequence for given channel property rate room mapping  <p><strong>OperationId:</strong>putChannelRateRoomSeq</p>
     *
     * @tags Channel
     * @name PutChannelRateRoomSeq
     * @summary Updates channel property rateroom sequence
     * @request PUT:/channels/rates/roomSequence
     */
    putChannelRateRoomSeq: (
      hotelId: string,
      channelRateRoomSequence: ChannelRateRoomSequence,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rates/roomSequence`,
        method: 'PUT',
        body: channelRateRoomSequence,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes the channel restrictions. <p><strong>OperationId:</strong>publishChannelRestrictions</p>
     *
     * @tags Channel
     * @name PublishChannelRestrictions
     * @summary Publishes channel restrictions
     * @request PUT:/channels/restrictions/publish
     */
    publishChannelRestrictions: (
      hotelId: string,
      channelRestrictions: ChannelRestrictions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/restrictions/publish`,
        method: 'PUT',
        body: channelRestrictions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel configuration. <p><strong>OperationId:</strong>deleteChannelRoomTypes</p>
     *
     * @tags Channel
     * @name DeleteChannelRoomTypes
     * @summary Delete channel configuration
     * @request DELETE:/channels/roomTypes
     */
    deleteChannelRoomTypes: (
      hotelId: string,
      query: {
        /** Booking channel code of room type. */
        bookingChannelCodes: string[];
        /** Code of room type. */
        roomTypes: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/roomTypes`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel room mapping to OPERA hotel's room. <p><strong>OperationId:</strong>postChannelRoomMapping</p>
     *
     * @tags Channel
     * @name PostChannelRoomMapping
     * @summary Adds channel property room mapping
     * @request POST:/channels/rooms
     */
    postChannelRoomMapping: (hotelId: string, channelRoomMappings: ChannelRoomMappings, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms`,
        method: 'POST',
        body: channelRoomMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel room description <p><strong>OperationId:</strong>manageChannelRoomMapping</p>
     *
     * @tags Channel
     * @name ManageChannelRoomMapping
     * @summary Updates channel room configuration
     * @request PUT:/channels/rooms
     */
    manageChannelRoomMapping: (
      hotelId: string,
      channelRoomMappings: ChannelRoomMappings,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms`,
        method: 'PUT',
        body: channelRoomMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update OPERA room's global description for global distribution type channels <p><strong>OperationId:</strong>putRoomDescription</p>
     *
     * @tags Channel
     * @name PutRoomDescription
     * @summary Update global descriptions for a room
     * @request PUT:/channels/rooms/globalDescription
     */
    putRoomDescription: (
      hotelId: string,
      channelGlobalDescription: ChannelGlobalDescription,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms/globalDescription`,
        method: 'PUT',
        body: channelGlobalDescription,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get global room description for given hotel id and room type code. <p><strong>OperationId:</strong>getChannelRoomsGlobalDescriptions</p>
     *
     * @tags Channel
     * @name GetChannelRoomsGlobalDescriptions
     * @summary Gets global room descriptions
     * @request GET:/channels/rooms/globalDescriptions
     */
    getChannelRoomsGlobalDescriptions: (
      hotelId: string,
      query?: {
        hotelIds?: string[];
        ratePlanCodes?: string[];
        roomTypes?: string[];
        /**
         * Either Room Type or Rate Plan Code
         * @uniqueItems true
         */
        globalDescriptionType?: 'RoomType' | 'RatePlan';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelGlobalDescriptions, ExceptionDetailType>({
        path: `/channels/rooms/globalDescriptions`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add global rate description for given hotel id and rate code <p><strong>OperationId:</strong>postChannelRoomsGlobalDescriptions</p>
     *
     * @tags Channel
     * @name PostChannelRoomsGlobalDescriptions
     * @summary Adds global rate descriptions
     * @request POST:/channels/rooms/globalDescriptions
     */
    postChannelRoomsGlobalDescriptions: (
      hotelId: string,
      channelGlobalDescriptions: ChannelGlobalDescriptions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms/globalDescriptions`,
        method: 'POST',
        body: channelGlobalDescriptions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update global room description for given hotel id and room type code <p><strong>OperationId:</strong>putChannelRoomsGlobalDescriptions</p>
     *
     * @tags Channel
     * @name PutChannelRoomsGlobalDescriptions
     * @summary Updates global room descriptions
     * @request PUT:/channels/rooms/globalDescriptions
     */
    putChannelRoomsGlobalDescriptions: (
      hotelId: string,
      channelGlobalDescriptions: ChannelGlobalDescriptions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms/globalDescriptions`,
        method: 'PUT',
        body: channelGlobalDescriptions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete global room description for given hotel id and room type code. <p><strong>OperationId:</strong>deleteChannelRoomsGlobalDescriptions</p>
     *
     * @tags Channel
     * @name DeleteChannelRoomsGlobalDescriptions
     * @summary Deletes global room descriptions
     * @request DELETE:/channels/rooms/globalDescriptions
     */
    deleteChannelRoomsGlobalDescriptions: (
      hotelId: string,
      query?: {
        /** Property mapping with Rate plan code or Room type */
        hotelId?: string[];
        /** Code. */
        code?: string;
        /** description. */
        description?: string;
        /** Code. */
        code1?: string;
        /** description. */
        description1?: string;
        /**
         * Either Room Type or Rate Plan Code
         * @uniqueItems true
         */
        globalDescType?: ('RoomType' | 'RatePlan')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/rooms/globalDescriptions`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete sub-channel (carrier) configuration for a given channel code. <p><strong>OperationId:</strong>deleteChannelCarriers</p>
     *
     * @tags Channel
     * @name DeleteChannelCarriers
     * @summary Deletes sub channel configuration
     * @request DELETE:/channels/subChannels
     */
    deleteChannelCarriers: (
      hotelId: string,
      query: {
        /** Booking channel code of carrier. */
        bookingChannelCodes: string[];
        /** Code of carrier. */
        carriers: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/subChannels`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel information for the given channel code. <p><strong>OperationId:</strong>getChannel</p>
     *
     * @tags Channel
     * @name GetChannel
     * @summary Gets channel detail
     * @request GET:/channels/{channelCode}
     */
    getChannel: (
      hotelId: string,
      channelCode: string,
      query?: {
        /** Indicates whether fetch should include inactive codes or not. */
        includeInactive?: boolean[];
        /**
         * Simple type for external system instructions that can be used in requests for partial operations.
         * @uniqueItems true
         */
        fetchInstructions?: ('RateLevel' | 'Error' | 'RoomType' | 'Carrier' | 'RateCategory')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Channel, ExceptionDetailType>({
        path: `/channels/${channelCode}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel error code mapping configurations <p><strong>OperationId:</strong>putChannelErrors</p>
     *
     * @tags Channel
     * @name PutChannelErrors
     * @summary Updates channel error codes
     * @request PUT:/channels/{channelCode}/errorCodes
     */
    putChannelErrors: (
      hotelId: string,
      channelCode: string,
      channelErrors: ChannelErrors,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/errorCodes`,
        method: 'PUT',
        body: channelErrors,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel error code mapping configurations <p><strong>OperationId:</strong>postChannelErrors</p>
     *
     * @tags Channel
     * @name PostChannelErrors
     * @summary Adds channel error codes
     * @request POST:/channels/{channelCode}/errorCodes
     */
    postChannelErrors: (
      hotelId: string,
      channelCode: string,
      channelErrors: ChannelErrors,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/errorCodes`,
        method: 'POST',
        body: channelErrors,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get the channel mappings to the OPERA hotel id, including hotel details for channel hotel code, room sell limit per reservation, city code and end date. <p><strong>OperationId:</strong>getChannelHotelCodeMapping</p>
     *
     * @tags Channel
     * @name GetChannelHotelCodeMapping
     * @summary Get channel hotel mappings
     * @request GET:/channels/{channelCode}/hotels
     */
    getChannelHotelCodeMapping: (
      hotelId: string,
      channelCode: string,
      query?: {
        /** OPERA hotel code for which mapped channel hotel code should be fetched. */
        hotelId?: string;
        /** Channel hotel code for which mapped OPERA hotel code should be fetched. */
        channelHotelCode?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelHotelCodeMapping, ExceptionDetailType>({
        path: `/channels/${channelCode}/hotels`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to active/inactive channel controls. It also allows to update channel control settings. <p><strong>OperationId:</strong>putChannelParameters</p>
     *
     * @tags Channel
     * @name PutChannelParameters
     * @summary Updates channel control settings
     * @request PUT:/channels/{channelCode}/parameters
     */
    putChannelParameters: (
      hotelId: string,
      channelCode: string,
      changeChannelParameters: ChangeChannelParameters,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/parameters`,
        method: 'PUT',
        body: changeChannelParameters,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel rate categories for a given channel. <p><strong>OperationId:</strong>putChannelRateCategories</p>
     *
     * @tags Channel
     * @name PutChannelRateCategories
     * @summary Updates given channel's rate categories
     * @request PUT:/channels/{channelCode}/rateCategories
     */
    putChannelRateCategories: (
      hotelId: string,
      channelCode: string,
      channelRateCategories: ChannelRateCategories,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/rateCategories`,
        method: 'PUT',
        body: channelRateCategories,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel rate categories for a given channel. <p><strong>OperationId:</strong>postChannelRateCategories</p>
     *
     * @tags Channel
     * @name PostChannelRateCategories
     * @summary Adds given channel's rate categories
     * @request POST:/channels/{channelCode}/rateCategories
     */
    postChannelRateCategories: (
      hotelId: string,
      channelCode: string,
      channelRateCategories: ChannelRateCategories,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/rateCategories`,
        method: 'POST',
        body: channelRateCategories,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel rate level code's description <p><strong>OperationId:</strong>putChannelRateLevels</p>
     *
     * @tags Channel
     * @name PutChannelRateLevels
     * @summary Updates channel rate level
     * @request PUT:/channels/{channelCode}/rateLevels
     */
    putChannelRateLevels: (
      hotelId: string,
      channelCode: string,
      channelRateLevels: ChannelRateLevels,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/rateLevels`,
        method: 'PUT',
        body: channelRateLevels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel rate level configurations <p><strong>OperationId:</strong>postChannelRateLevels</p>
     *
     * @tags Channel
     * @name PostChannelRateLevels
     * @summary Adds channel rate level
     * @request POST:/channels/{channelCode}/rateLevels
     */
    postChannelRateLevels: (
      hotelId: string,
      channelCode: string,
      channelRateLevels: ChannelRateLevels,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/rateLevels`,
        method: 'POST',
        body: channelRateLevels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes the channel rate plans for given channel code. <p><strong>OperationId:</strong>publishChannelRatePlans</p>
     *
     * @tags Channel
     * @name PublishChannelRatePlans
     * @summary Publishes channel rate plan codes
     * @request PUT:/channels/{channelCode}/ratePlans
     */
    publishChannelRatePlans: (
      hotelId: string,
      channelCode: string,
      channelRatePlans: ChannelRatePlans,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/ratePlans`,
        method: 'PUT',
        body: channelRatePlans,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get sequence for given channel property rate room mapping. <p><strong>OperationId:</strong>getChannelRateRoomSeq</p>
     *
     * @tags Channel
     * @name GetChannelRateRoomSeq
     * @summary Gets channel property rateroom sequence
     * @request GET:/channels/{channelCode}/rateRoomSequences
     */
    getChannelRateRoomSeq: (
      hotelId: string,
      channelCode: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** Hotel Rate Plan Code. */
        ratePlanCode?: string;
        /** Hotel Room Type. */
        roomType?: string;
        /** Channel Rate Plan Code. */
        channelRatePlanCode?: string;
        /** Channel Room Type. */
        channelRoomType?: string;
        /**
         * Enumaration of the different parameters Channel Rate Room accepts.
         * @uniqueItems true
         */
        channelRateRoomParameterName?: 'ShowInactive'[];
        channelRateRoomParameterValue?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelRateRoomSequenceDetails, ExceptionDetailType>({
        path: `/channels/${channelCode}/rateRoomSequences`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update OPERA rate's global description for global distribution type channels <p><strong>OperationId:</strong>putRateGlobalDescription</p>
     *
     * @tags Channel
     * @name PutRateGlobalDescription
     * @summary Updates global descriptions for a rate
     * @request PUT:/channels/{channelCode}/rates/{channelRateCode}/globalDescription
     */
    putRateGlobalDescription: (
      hotelId: string,
      channelRateCode: string,
      channelCode: string,
      channelGlobalDescription: ChannelGlobalDescription,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/rates/${channelRateCode}/globalDescription`,
        method: 'PUT',
        body: channelGlobalDescription,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel room description <p><strong>OperationId:</strong>putChannelRoomTypes</p>
     *
     * @tags Channel
     * @name PutChannelRoomTypes
     * @summary Updates channel room
     * @request PUT:/channels/{channelCode}/roomTypes
     */
    putChannelRoomTypes: (
      hotelId: string,
      channelCode: string,
      channelRoomTypes: ChannelRoomTypes,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/roomTypes`,
        method: 'PUT',
        body: channelRoomTypes,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel room configuration <p><strong>OperationId:</strong>postChannelRoomTypes</p>
     *
     * @tags Channel
     * @name PostChannelRoomTypes
     * @summary Adds channel room
     * @request POST:/channels/{channelCode}/roomTypes
     */
    postChannelRoomTypes: (
      hotelId: string,
      channelCode: string,
      channelRoomTypes: ChannelRoomTypes,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/roomTypes`,
        method: 'POST',
        body: channelRoomTypes,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update sub-channel (carrier) configuration for a given channel code <p><strong>OperationId:</strong>putChannelCarriers</p>
     *
     * @tags Channel
     * @name PutChannelCarriers
     * @summary Updates sub channel configuration
     * @request PUT:/channels/{channelCode}/subChannels
     */
    putChannelCarriers: (
      hotelId: string,
      channelCode: string,
      channelCarriers: ChannelCarriers,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/subChannels`,
        method: 'PUT',
        body: channelCarriers,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add sub-channel (carrier) configuration for a given channel code <p><strong>OperationId:</strong>postChannelCarriers</p>
     *
     * @tags Channel
     * @name PostChannelCarriers
     * @summary Adds sub channel configuration
     * @request POST:/channels/{channelCode}/subChannels
     */
    postChannelCarriers: (
      hotelId: string,
      channelCode: string,
      channelCarriers: ChannelCarriers,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/subChannels`,
        method: 'POST',
        body: channelCarriers,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API adds channel tenants. <p><strong>OperationId:</strong>postChannelOrgMapping</p>
     *
     * @tags Channel
     * @name PostChannelOrgMapping
     * @summary Adds channel tenants.
     * @request POST:/channels/{channelCode}/tenants
     */
    postChannelOrgMapping: (
      hotelId: string,
      channelCode: string,
      channelOrgMapping: ChannelOrgMapping,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/tenants`,
        method: 'POST',
        body: channelOrgMapping,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes channel tenants mapping. <p><strong>OperationId:</strong>putChannelOrgMapping</p>
     *
     * @tags Channel
     * @name PutChannelOrgMapping
     * @summary Updates channel tenants mapping.
     * @request PUT:/channels/{channelCode}/tenants/{tenantCode}
     */
    putChannelOrgMapping: (
      hotelId: string,
      tenantCode: string,
      channelCode: string,
      channelOrgMapping: ChannelOrgMapping,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/tenants/${tenantCode}`,
        method: 'PUT',
        body: channelOrgMapping,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel tenants mapping. <p><strong>OperationId:</strong>getChannelOrgMapping</p>
     *
     * @tags Channel
     * @name GetChannelOrgMapping
     * @summary Retrieves channel tenants mapping.
     * @request GET:/channels/{channelCode}/tenants/{tenantCode}
     */
    getChannelOrgMapping: (
      hotelId: string,
      tenantCode: string,
      channelCode: string,
      query?: {
        /** Chain code for which channel code and org code are mapped. */
        chainCode?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelOrgMappingsDetails, ExceptionDetailType>({
        path: `/channels/${channelCode}/tenants/${tenantCode}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API deletes channel tenants mapping. <p><strong>OperationId:</strong>deleteChannelOrgMapping</p>
     *
     * @tags Channel
     * @name DeleteChannelOrgMapping
     * @summary Deletes channel tenants mapping.
     * @request DELETE:/channels/{channelCode}/tenants/{tenantCode}
     */
    deleteChannelOrgMapping: (
      hotelId: string,
      tenantCode: string,
      channelCode: string,
      query?: {
        /** Chain code for which channel code and org code are mapped. */
        chainCode?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/channels/${channelCode}/tenants/${tenantCode}`,
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
     * @description Use this API to add global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>postTotalPricingElements</p>
     *
     * @tags Channel
     * @name PostTotalPricingElements
     * @summary Adds total pricing tax and fee types
     * @request POST:/hotels/totalPricing
     */
    postTotalPricingElements: (
      hotelId: string,
      totalPricingElements: TotalPricingElements,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/totalPricing`,
        method: 'POST',
        body: totalPricingElements,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update global distribution channels tax and fee configurations <p><strong>OperationId:</strong>putTotalPricingElements</p>
     *
     * @tags Channel
     * @name PutTotalPricingElements
     * @summary Updates total pricing tax and fee types
     * @request PUT:/hotels/totalPricing
     */
    putTotalPricingElements: (
      hotelId: string,
      totalPricingElements: TotalPricingElements,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/totalPricing`,
        method: 'PUT',
        body: totalPricingElements,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>deleteTotalPricingElements</p>
     *
     * @tags Channel
     * @name DeleteTotalPricingElements
     * @summary Deletes total pricing tax and fee types
     * @request DELETE:/hotels/totalPricing
     */
    deleteTotalPricingElements: (
      hotelId: string,
      query?: {
        /** Hotel Code that associated with Transaction Code and Total Pricing Element */
        hotelId?: string[];
        /** Code. */
        code?: string;
        /** description. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/totalPricing`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to copy global distribution system's fee and tax configurations from one hotel to another hotel within same chain/tenant <p><strong>OperationId:</strong>copyTotalPricingElements</p>
     *
     * @tags Channel
     * @name CopyTotalPricingElements
     * @summary Allows to copy total pricing tax and fees to another hotel id
     * @request PUT:/hotels/totalPricing/copy
     */
    copyTotalPricingElements: (
      hotelId: string,
      totalPricingElementsCopy: TotalPricingElementsCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/totalPricing/copy`,
        method: 'PUT',
        body: totalPricingElementsCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve channel sell limit detail to get or review daily sell limits for a given hotel-channel combination. <p><strong>OperationId:</strong>getChannelSellLimits</p>
     *
     * @tags Inventory
     * @name GetChannelSellLimits
     * @summary Gets sell limit detail for a given channel hotel combination
     * @request GET:/hotels/{hotelId}/channel/sellLimits
     */
    getChannelSellLimits: (
      hotelId: string,
      query: {
        /**
         * Sell limits which exist at or beyond this date will be fetched.
         * @format date
         */
        fromDate: string;
        /** Channel for which the sell limits are to be fetched. */
        bookingChannelCode?: string;
        /** Channel room type for which the sell limits are to be fetched. */
        channelRoomType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelSellLimits, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channel/sellLimits`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel property sell limit mapping by given dates. <p><strong>OperationId:</strong>changeChannelSellLimitsByDate</p>
     *
     * @tags Inventory
     * @name ChangeChannelSellLimitsByDate
     * @summary Updates channel sell limits by date
     * @request PUT:/hotels/{hotelId}/channelSellLimits
     */
    changeChannelSellLimitsByDate: (
      hotelId: string,
      channelSellLimitsByDate: ChannelSellLimitsByDate,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channelSellLimits`,
        method: 'PUT',
        body: channelSellLimitsByDate,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel property sell limit mapping. <p><strong>OperationId:</strong>deleteChannelSellLimits</p>
     *
     * @tags Inventory
     * @name DeleteChannelSellLimits
     * @summary Deletes channel sell limits
     * @request DELETE:/hotels/{hotelId}/channelSellLimits/{Id}
     */
    deleteChannelSellLimits: (id: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channelSellLimits/${id}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API  to get the list of the channel guarantee code mappings to the OPERA guarantee codes. <p><strong>OperationId:</strong>getChannelGuaranteeCodeMappings</p>
     *
     * @tags Channel
     * @name GetChannelGuaranteeCodeMappings
     * @summary Gets channel guarantee code mappings
     * @request GET:/hotels/{hotelId}/channels/guarantees
     */
    getChannelGuaranteeCodeMappings: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        bookingChannelCodes?: string[];
        guaranteeCode?: string[];
        channelGuaranteeCode?: string[];
        /** Indicates whether search includes inactive mapping. */
        includeInactive?: boolean;
        /** Indicates whether unmapped channel-hotel guarantee code should be fetched. */
        fetchUnmapped?: boolean;
        /** Indicates whether mapped channel-hotel guarantee code should be fetched. */
        fetchMapped?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelGuaranteeCodeMappingDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/guarantees`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes the channel rate plans for given Hotel Id. <p><strong>OperationId:</strong>publishHotelChannelRatePlans</p>
     *
     * @tags Channel
     * @name PublishHotelChannelRatePlans
     * @summary Publishes channel hotel rate plan codes
     * @request PUT:/hotels/{hotelId}/channels/ratePlans
     */
    publishHotelChannelRatePlans: (hotelId: string, channelRatePlans: ChannelRatePlans, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/ratePlans`,
        method: 'PUT',
        body: channelRatePlans,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to link (distribute) channel a rate code to channel room types. <p><strong>OperationId:</strong>postChannelRates</p>
     *
     * @tags Channel
     * @name PostChannelRates
     * @summary Distributes channel rate mappings to channel room types
     * @request POST:/hotels/{hotelId}/channels/rates
     */
    postChannelRates: (hotelId: string, channelRates: ChannelRates, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/rates`,
        method: 'POST',
        body: channelRates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>getTotalPricingElements</p>
     *
     * @tags Channel
     * @name GetTotalPricingElements
     * @summary Gets total pricing tax and fee types
     * @request GET:/hotels/{hotelId}/channels/totalPricing
     */
    getTotalPricingElements: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        elementCodes?: string[];
        transactionCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<TotalPricingElements, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/totalPricing`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel mapping for OPERA credit cards to channel for a given hotel id <p><strong>OperationId:</strong>postChannelCardTypeMapping</p>
     *
     * @tags Channel
     * @name PostChannelCardTypeMapping
     * @summary Adds channel credit card mapping for a hotel
     * @request POST:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
     */
    postChannelCardTypeMapping: (
      cardTypeCode: string,
      channelCode: string,
      hotelId: string,
      channelCardTypeMappings: ChannelCardTypeMappings,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`,
        method: 'POST',
        body: channelCardTypeMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel mapping for OPERA credit cards to channel for a given hotel id <p><strong>OperationId:</strong>putChannelCardTypeMapping</p>
     *
     * @tags Channel
     * @name PutChannelCardTypeMapping
     * @summary Updates channel credit card mapping for a hotel
     * @request PUT:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
     */
    putChannelCardTypeMapping: (
      cardTypeCode: string,
      channelCode: string,
      hotelId: string,
      channelCardTypeMappings: ChannelCardTypeMappings,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`,
        method: 'PUT',
        body: channelCardTypeMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel mapping for OPERA credit cards to channel for a given hotel id. <p><strong>OperationId:</strong>deleteChannelCardTypeMapping</p>
     *
     * @tags Channel
     * @name DeleteChannelCardTypeMapping
     * @summary Deletes channel credit card mapping for a hotel
     * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
     */
    deleteChannelCardTypeMapping: (
      cardTypeCode: string,
      channelCode: string,
      hotelId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        channelCardType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add channel guarantee code mapping to OPERA guarantee code for a given hotel <p><strong>OperationId:</strong>postChannelGuaranteeCodeMapping</p>
     *
     * @tags Channel
     * @name PostChannelGuaranteeCodeMapping
     * @summary Adds channel guarantee code mapping for a hotel
     * @request POST:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
     */
    postChannelGuaranteeCodeMapping: (
      guaranteeCode: string,
      channelCode: string,
      hotelId: string,
      channelGuaranteeCodeMappings: ChannelGuaranteeCodeMappings,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`,
        method: 'POST',
        body: channelGuaranteeCodeMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel guarantee code mapping to OPERA guarantee code for a given hotel <p><strong>OperationId:</strong>putChannelGuaranteeCodeMapping</p>
     *
     * @tags Channel
     * @name PutChannelGuaranteeCodeMapping
     * @summary Updates channel guarantee code mapping for a hotel
     * @request PUT:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
     */
    putChannelGuaranteeCodeMapping: (
      guaranteeCode: string,
      channelCode: string,
      hotelId: string,
      channelGuaranteeCodeMappings: ChannelGuaranteeCodeMappings,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`,
        method: 'PUT',
        body: channelGuaranteeCodeMappings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel guarantee code mapping to OPERA guarantee code for a given property. <p><strong>OperationId:</strong>deleteChannelGuaranteeCodeMapping</p>
     *
     * @tags Channel
     * @name DeleteChannelGuaranteeCodeMapping
     * @summary Deletes channel guarantee code mapping for a hotel
     * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
     */
    deleteChannelGuaranteeCodeMapping: (
      guaranteeCode: string,
      channelCode: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get list of channel parameters and their settings. <p><strong>OperationId:</strong>getChannelParameters</p>
     *
     * @tags Channel
     * @name GetChannelParameters
     * @summary Retrieves channel parameters.
     * @request GET:/hotels/{hotelId}/channels/{channelCode}/parameters
     */
    getChannelParameters: (
      channelCode: string,
      hotelId: string,
      query?: {
        /** Parameter for wild card search on channel parameters. */
        parameterNameWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelParameterMapping, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/parameters`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve channel policies mapping. <p><strong>OperationId:</strong>getChannelPolicies</p>
     *
     * @tags Channel
     * @name GetChannelPolicies
     * @summary Retrieves the channel policies
     * @request GET:/hotels/{hotelId}/channels/{channelCode}/policies
     */
    getChannelPolicies: (
      channelCode: string,
      hotelId: string,
      query?: {
        requestType?: string;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        channelRatePlanCode?: string[];
        channelRoomTypeCode?: string[];
        ratePlanCode?: string[];
        roomTypeCode?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        corporateId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        corporateIdType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelPolicies, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/policies`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to link (distribute) channel a room type to channel rate codes. <p><strong>OperationId:</strong>postChannelRoomTypeRate</p>
     *
     * @tags Channel
     * @name PostChannelRoomTypeRate
     * @summary Distributes channel room rate mappings.
     * @request POST:/hotels/{hotelId}/channels/{channelCode}/rooms/{channelRoomType}/rates
     */
    postChannelRoomTypeRate: (
      channelRoomType: string,
      channelCode: string,
      hotelId: string,
      channelRates: ChannelRates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${channelRoomType}/rates`,
        method: 'POST',
        body: channelRates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel room mapping by room type. <p><strong>OperationId:</strong>getChannelRoomMappingById</p>
     *
     * @tags Channel
     * @name GetChannelRoomMappingById
     * @summary Gets channel room mapping by room type
     * @request GET:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
     */
    getChannelRoomMappingById: (
      roomTypeCode: string,
      channelCode: string,
      hotelId: string,
      query?: {
        /**
         * Begin Date.
         * @format date
         */
        beginDate?: string;
        /** Channel Room Type. */
        channelRoomType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelRoomMapping, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>putChannelRoomMapping</p>
     *
     * @tags Channel
     * @name PutChannelRoomMapping
     * @summary Updates channel property room mapping
     * @request PUT:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
     */
    putChannelRoomMapping: (
      roomTypeCode: string,
      channelCode: string,
      hotelId: string,
      channelRoomMapping: ChannelRoomMapping,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`,
        method: 'PUT',
        body: channelRoomMapping,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>deleteChannelRoomMapping</p>
     *
     * @tags Channel
     * @name DeleteChannelRoomMapping
     * @summary Deletes channel property room mapping
     * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
     */
    deleteChannelRoomMapping: (
      roomTypeCode: string,
      channelCode: string,
      hotelId: string,
      query?: {
        /**
         * Begin Date.
         * @format date
         */
        beginDate?: string;
        /** Channel Room Type. */
        channelRoomType?: string;
        /**
         * End date of the hotel-channel room type mapping.
         * @format date
         */
        endDate?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Operation to fetch the room availability and restrictions for a given property and room type in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshotByRoomType</p>
     *
     * @tags Availability
     * @name GetChannelInventorySnapshotByRoomType
     * @summary Gets hotel room's restrictions and channel availability
     * @request GET:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}/inventorySnapshot
     */
    getChannelInventorySnapshotByRoomType: (
      roomTypeCode: string,
      channelCode: string,
      hotelId: string,
      query: {
        /** @format date */
        fromDate: string;
        /** @default "false" */
        friday?: boolean;
        /** @default "false" */
        monday?: boolean;
        /** @default "false" */
        saturday?: boolean;
        /** @default "false" */
        sunday?: boolean;
        /** @default "false" */
        thursday?: boolean;
        /** @default "false" */
        tuesday?: boolean;
        /** @default "false" */
        wednesday?: boolean;
        /** @format date */
        endDate?: string;
        duration?: string;
        /**
         * Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria.
         * @uniqueItems true
         */
        snapshotLevel?: 'BookingChannel' | 'ChannelRoomType';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelInventorySnapshot, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}/inventorySnapshot`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update channel property sell limit mapping by given date range. <p><strong>OperationId:</strong>changeChannelSellLimitsByDateRange</p>
     *
     * @tags Inventory
     * @name ChangeChannelSellLimitsByDateRange
     * @summary Updates channel sell limits by daterange
     * @request PUT:/hotels/{hotelId}/channels/{channelId}/channelSellLimitsByDateRange
     */
    changeChannelSellLimitsByDateRange: (
      channelId: string,
      hotelId: string,
      channelSellLimitsByDateRange: ChannelSellLimitsByDateRange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/channels/${channelId}/channelSellLimitsByDateRange`,
        method: 'PUT',
        body: channelSellLimitsByDateRange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to fetch the General Availability Simulator. <p><strong>OperationId:</strong>getGeneralAvailabilitySimulator</p>
     *
     * @tags Availability
     * @name GetGeneralAvailabilitySimulator
     * @summary Gets the General Availability
     * @request GET:/hotels/{hotelId}/generalAvailabilitySimulator
     */
    getGeneralAvailabilitySimulator: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        bookingChannelCode?: string;
        /** @format date */
        arrival?: string;
        adults?: number;
        nights?: number;
        children?: number;
        noOfRooms?: number;
        channelRatePlanCode?: string[];
        rateAccessCode?: string;
        corpIdIATA?: string;
        inventoryBlockCode?: string;
        promotionCode?: string;
        currencyCode?: string;
        language?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<GeneralAvailabilitySimulator, ExceptionDetailType>({
        path: `/hotels/${hotelId}/generalAvailabilitySimulator`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Operation to fetch the room availability and restrictions for a given property in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshot</p>
     *
     * @tags Availability
     * @name GetChannelInventorySnapshot
     * @summary Gets hotel's rooms and restrictions channel availability
     * @request GET:/hotels/{hotelId}/inventorySnapshot
     */
    getChannelInventorySnapshot: (
      hotelId: string,
      query: {
        /** @format date */
        fromDate: string;
        /** @default "false" */
        friday?: boolean;
        /** @default "false" */
        monday?: boolean;
        /** @default "false" */
        saturday?: boolean;
        /** @default "false" */
        sunday?: boolean;
        /** @default "false" */
        thursday?: boolean;
        /** @default "false" */
        tuesday?: boolean;
        /** @default "false" */
        wednesday?: boolean;
        /** @format date */
        endDate?: string;
        duration?: string;
        bookingChannelCodes?: string[];
        channelRoomTypes?: string[];
        /**
         * Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria.
         * @uniqueItems true
         */
        snapshotLevel?: 'BookingChannel' | 'ChannelRoomType';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelInventorySnapshot, ExceptionDetailType>({
        path: `/hotels/${hotelId}/inventorySnapshot`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Operation to Fetch the Rate Parity. The rate parity search criteria can include room types, rate plans, promotion code, rate access code or chain codes. <p><strong>OperationId:</strong>getRateParity</p>
     *
     * @tags Availability
     * @name GetRateParity
     * @summary Gets channel's rate configuration
     * @request GET:/hotels/{hotelId}/rateParity
     */
    getRateParity: (
      hotelId: string,
      query?: {
        /** An enumerated type defining the Parity Comparison type. Values: FIRST_RATES, CHANNEL_RATES. CHANNEL_RATES requires HotelCode and BookingChannelCode as part of request. */
        comparisonType?: string;
        /** Language identification. */
        language?: string;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        numberOfDays?: number;
        channelCode?: string[];
        roomType?: string[];
        ratePlanCode?: string[];
        channelRoomType?: string[];
        channelRatePlanCode?: string[];
        chainCode?: string[];
        rateAccessCode?: string;
        inventoryBlockCode?: string;
        promotionCode?: string;
        qualifyingProfileCategory?: string;
        qualifyingProfileId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RateParity, ExceptionDetailType>({
        path: `/hotels/${hotelId}/rateParity`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get global rate description for given hotel id and rate code. <p><strong>OperationId:</strong>getChannelRateCodeGlobalDesc</p>
     *
     * @tags Channel
     * @name GetChannelRateCodeGlobalDesc
     * @summary Gets global rate descriptions
     * @request GET:/hotels/{hotelId}/rates/{ratePlanCode}/globalDescription
     */
    getChannelRateCodeGlobalDesc: (ratePlanCode: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelEnhancedGlobalDescription, ExceptionDetailType>({
        path: `/hotels/${hotelId}/rates/${ratePlanCode}/globalDescription`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>getChannelRoomMapping</p>
     *
     * @tags Channel
     * @name GetChannelRoomMapping
     * @summary Gets channel property room mapping
     * @request GET:/hotels/{hotelId}/rooms/mapping
     */
    getChannelRoomMapping: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        bookingChannelCodes?: string[];
        roomTypes?: string[];
        channelRoomTypes?: string[];
        /** Flag whether to include inactive mappings or not. */
        includeInactiveMappings?: boolean;
        /** Flag whether to include unmapped room types or not. */
        includeUnmappedRoomTypes?: boolean;
        /** Flag whether to include mapped room types only. */
        onlyUnmappedRoomTypes?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelRoomMappingsSummary, ExceptionDetailType>({
        path: `/hotels/${hotelId}/rooms/mapping`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get global room description for given hotel id and room type code. <p><strong>OperationId:</strong>getChannelRoomTypeGlobalDesc</p>
     *
     * @tags Channel
     * @name GetChannelRoomTypeGlobalDesc
     * @summary Gets global room descriptions
     * @request GET:/hotels/{hotelId}/rooms/{roomType}/globalDescription
     */
    getChannelRoomTypeGlobalDesc: (roomType: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChannelEnhancedGlobalDescription, ExceptionDetailType>({
        path: `/hotels/${hotelId}/rooms/${roomType}/globalDescription`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description This API deletes the cache for Channel Service. <p><strong>OperationId:</strong>deleteChannelServiceCache</p>
     *
     * @tags Channel
     * @name DeleteChannelServiceCache
     * @summary Deletes the cache for Channel Service.
     * @request DELETE:/services/channels/cache
     */
    deleteChannelServiceCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/channels/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves channel service version. <p><strong>OperationId:</strong>pingChannelService</p>
     *
     * @tags Channel
     * @name PingChannelService
     * @summary Retrieves channel service version
     * @request GET:/services/channels/status
     */
    pingChannelService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/channels/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
