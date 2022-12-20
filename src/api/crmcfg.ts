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

/** Response object for fetching Account Priorities. */
export interface AccountPrioritiesDetails {
  /** Collection of Account Priorities. */
  accountPriorities?: AccountPrioritiesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Account Priorities.
 * @maxItems 4000
 */
export type AccountPrioritiesType = AccountPriorityType[];

/** Contains Common Master configuration detail. */
export interface AccountPriorityType {
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

/** Request object for creating Account Priorities. */
export interface AccountPrioritiesCriteria {
  /** Account Prioritiesto be created. */
  accountPriorities?: AccountPrioritiesType;
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

/** Request object for changing Account Priorities. */
export interface AccountPrioritiesToBeChanged {
  /** Account Prioritiesto be changed. */
  accountPriorities?: AccountPrioritiesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Account Types. */
export interface AccountTypesDetails {
  /** Collection of Account Types. */
  accountTypes?: AccountTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Account Types.
 * @maxItems 4000
 */
export type AccountTypesType = AccountTypeType[];

/** Contains Common Master configuration detail. */
export interface AccountTypeType {
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
  /** Indicates the account type is inactive or not. */
  inactive?: boolean;
}

/** Request object for creating Account Types. */
export interface AccountTypesCriteria {
  /** Account Typesto be created. */
  accountTypes?: AccountTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Account Types. */
export interface AccountTypesToBeChanged {
  /** Account Typesto be changed. */
  accountTypes?: AccountTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Address Formats. */
export interface AddressFormats {
  /** Collection of Address formats fetched. */
  formats?: AddressFormatsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * An Address formats.
 * @maxItems 4000
 */
export type AddressFormatsType = AddressFormatType[];

/** A representation of the information contained by an address format. */
export interface AddressFormatType {
  /**
   * Address format code.
   * @minLength 0
   * @maxLength 20
   */
  formatCode?: string;
  /**
   * Address format definition with the elements of the address.
   * @minLength 0
   * @maxLength 2000
   */
  formatDefinition?: string;
  /**
   * Description of the address format.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
  /** sequence number of the address format. */
  displayOrder?: number;
  /**
   * An example address formatted with the current format definition.
   * @minLength 0
   * @maxLength 2000
   */
  formattedExample?: string;
  /** Determines if the format is a sales format or not. */
  salesFormat?: boolean;
  /** Determines whether this address format can be deleted. */
  canDelete?: boolean;
}

/** Response object for fetching Address Types. */
export interface AddressTypesDetails {
  /** Collection of Address Types. */
  addressTypes?: AddressTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Communication Role Enumeration element.
 * @maxItems 4000
 */
export type AddressTypesType = AddressTypeType[];

/** Contains Common Master configuration detail. */
export interface AddressTypeType {
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

/** Request object for creating a new Address Type. */
export interface AddressTypesCriteria {
  /** Address Type to be created. */
  addressTypes?: AddressTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing an existing Address Type. */
export interface AddressTypesToBeChanged {
  /** Address Type to be changed. */
  addressTypes?: AddressTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Alternate Language Guest Titles. */
export interface AlternateLanguageGuestTitlesDetails {
  /** Collection of Alternate Language Guest Titles. */
  alternateLanguageGuestTitles?: GuestTitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Guest Titles.
 * @maxItems 4000
 */
export type GuestTitlesType = GuestTitleType[];

/** Information representation of Guest Title. */
export interface GuestTitleType {
  /**
   * Description of the Guest Title.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Business Title for advanced title configuration.
   * @minLength 0
   * @maxLength 200
   */
  greeting?: string;
  /** Guest Title record sequence number. */
  displayOrder?: number;
  /** Description of the Guest Title. */
  newTitleType?: number;
  /**
   * Description of the Guest Title.
   * @minLength 0
   * @maxLength 20
   */
  newLanguageCode?: string;
  /**
   * Code of the Guest Title.
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /** Title Type for advanced title configuration. */
  titleType?: number;
  /**
   * Language code of the Guest Title.
   * @minLength 0
   * @maxLength 20
   */
  languageCode?: string;
}

/** Request object for creating Alternate Language Guest Titles. */
export interface AlternateLanguageGuestTitlesCriteria {
  /** Alternate Language Guest Titles to be created. */
  alternateLanguageGuestTitles?: GuestTitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Alternate Language Guest Titles. */
export interface AlternateLanguageGuestTitlesToBeChanged {
  /** Alternate Language Guest Titles to be changed. */
  alternateLanguageGuestTitles?: GuestTitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Business Segments. */
export interface BusinessSegmentsDetails {
  /** Collection of Business Segments. */
  businessSegments?: BusinessSegmentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Business Segments.
 * @maxItems 4000
 */
export type BusinessSegmentsType = BusinessSegmentType[];

/** Contains Common Master configuration detail. */
export interface BusinessSegmentType {
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

/** Request object for creating Business Segments. */
export interface BusinessSegmentsCriteria {
  /** Business Segments to be created. */
  businessSegments?: BusinessSegmentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Business Segments. */
export interface BusinessSegmentsToBeChanged {
  /** Business Segments to be changed. */
  businessSegments?: BusinessSegmentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching city and postal codes. */
export interface CityPostalCodesDetails {
  /** Collection of city and postal codes fetched based on the search criteria. */
  cityPostalCodes?: CityPostalCodesType;
  /** Refer to Generic common types document. */
  masterInfoList?: MasterInfoType[];
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
 * Lists of City and Postal Codes.
 * @maxItems 4000
 */
export type CityPostalCodesType = CityPostalCodeType[];

/** Information about the City and Postal Code. */
export interface CityPostalCodeType {
  /** The identifier of the city and postal code. */
  cityPostalCodeId?: number;
  /**
   * The start range of the city and postal code.
   * @minLength 0
   * @maxLength 20
   */
  postalCodeFrom?: string;
  /**
   * The end range of the city and postal code.
   * @minLength 0
   * @maxLength 20
   */
  postalCodeTo?: string;
  /**
   * The name of the city which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * The District which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 20
   */
  districtCode?: string;
  /**
   * The State which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 20
   */
  stateCode?: string;
  /**
   * The Territoty which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 20
   */
  territoryCode?: string;
  /**
   * The Country which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 20
   */
  countryCode?: string;
  /**
   * The Fiscal Region Code which the City and Postal belongs to.
   * @minLength 0
   * @maxLength 20
   */
  fiscalRegionCode?: string;
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

/** Request object for creating new city and postal codes. */
export interface CityPostalCodesCriteria {
  /** Collection of city and postal codes to be created. */
  cityPostalCodes?: CityPostalCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for updating city and postal codes. */
export interface CityPostalCodesToBeChanged {
  /** Collection of city and postal codes to be modified. */
  cityPostalCodes?: CityPostalCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Communication Types. */
export interface CommunicationTypesDetails {
  /** Collection of Communication Types. */
  communicationTypes?: CommunicationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Communication Type details.
 * @maxItems 4000
 */
export type CommunicationTypesType = CommunicationTypeType[];

/** Communication Type details. */
export interface CommunicationTypeType {
  /** Communication Role enumeration element. */
  role?: CommunicationRoleType;
  /**
   * Communication Type description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Communication Type SMS Text Message enabled. */
  textEnabled?: boolean;
  /** Communication Type sequence. */
  sequence?: number;
  /**
   * Unique Communication Type Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
}

/** Phone Number Communication Role. */
export enum CommunicationRoleType {
  Email = 'Email',
  Fax = 'Fax',
  EmailForRequest = 'EmailForRequest',
  Webpage = 'Webpage',
  Phone = 'Phone',
}

/** Request object for creating a new Communication Type. */
export interface CommunicationTypeCriteria {
  /** Communication Type to be created. */
  communicationType?: CommunicationTypeType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing an existing Communication Type. */
export interface CommunicationTypeToBeChanged {
  /** Communication Type to be changed. */
  communicationType?: CommunicationTypeType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Company Types. */
export interface CompanyTypesDetails {
  /** Collection of Company Types. */
  companyTypes?: CompanyTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Company Types.
 * @maxItems 4000
 */
export type CompanyTypesType = CompanyTypeType[];

/** Contains Common Master configuration detail. */
export interface CompanyTypeType {
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

/** Request object for creating Company Types. */
export interface CompanyTypesCriteria {
  /** Company Typesto be created. */
  companyTypes?: CompanyTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Company Types. */
export interface CompanyTypesToBeChanged {
  /** Company Typesto be changed. */
  companyTypes?: CompanyTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Competition Codes. */
export interface CompetitionCodesDetails {
  /** Collection of Competition Codes. */
  competitionCodes?: CompetitionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Competition Codes.
 * @maxItems 4000
 */
export type CompetitionCodesType = CompetitionCodeType[];

/** Contains Common Master configuration detail. */
export interface CompetitionCodeType {
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

/** Request object for creating Competition Codes. */
export interface CompetitionCodesCriteria {
  /** Competition Codesto be created. */
  competitionCodes?: CompetitionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Competition Codes. */
export interface CompetitionCodesToBeChanged {
  /** Competition Codesto be changed. */
  competitionCodes?: CompetitionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching credit ratings. */
export interface CreditRatings {
  /** Collection of Credit Ratings. */
  creditRatings?: CreditRatingsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Credit Ratings.
 * @maxItems 4000
 */
export type CreditRatingsType = CreditRatingType[];

/** Contains Common Master configuration detail. */
export interface CreditRatingType {
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
  /** Determines whether this credit rating is inactive or not. */
  inactive?: boolean;
}

/** Response object for fetching Distance Types. */
export interface DistanceTypesDetails {
  /** Collection of Distance Types. */
  distanceTypes?: DistanceTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Distance Types.
 * @maxItems 4000
 */
export type DistanceTypesType = DistanceTypeType[];

/** Contains Common Master configuration detail. */
export interface DistanceTypeType {
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

/** Request object for creating Distance Types. */
export interface DistanceTypesCriteria {
  /** Distance Typesto be created. */
  distanceTypes?: DistanceTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Distance Types. */
export interface DistanceTypesToBeChanged {
  /** Distance Typesto be changed. */
  distanceTypes?: DistanceTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Districts. */
export interface DistrictsDetails {
  /** Collection of Districts. */
  districts?: DistrictsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Districts.
 * @maxItems 4000
 */
export type DistrictsType = DistrictType[];

/** Contains Common Master configuration detail. */
export interface DistrictType {
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

/** Request object for creating Districts. */
export interface DistrictsCriteria {
  /** Districtsto be created. */
  districts?: DistrictsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Districts. */
export interface DistrictsToBeChanged {
  /** Districtsto be changed. */
  districts?: DistrictsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching exclusive preferences at the template level. */
export interface TemplateExclusivePreferences {
  /** Collection of exclusive preferences specified at the template level. */
  templateExclusivePreferences?: ConfigTemplateExclusivePreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Base details common between both template and property level exclusive preferences.
 * @maxItems 4000
 */
export type ConfigTemplateExclusivePreferencesType = ConfigExclusivePreferenceBaseType[];

/** Base details common between both template and property level Exclusive preference ids. */
export interface ConfigExclusivePreferenceBaseType {
  /**
   * Specifies the Exclusive preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the Exclusive preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
  /** Specifies the preference codes mapped to the exclusive preference. */
  preferenceCodes?: PreferenceCodesType;
  /** Display Order sequence. */
  orderSequence?: number;
}

/**
 * Specifies the preference code and its description mapped to the exclusive preference.
 * @maxItems 4000
 */
export type PreferenceCodesType = CodeDescriptionType[];

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

/** Request object for copying template Exclusive preferences to hotel(s). */
export interface ExclusivePreferencesCopy {
  /** List of the template Exclusive preferences to be copied to hotel(s). */
  copyInstructions?: ConfigCopyExclusivePreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Copy instructions for copying template Exclusive preferences to hotel(s) */
export interface ConfigCopyExclusivePreferencesType {
  /**
   * Template Exclusive preference to be copied to the hotel(s).
   * @maxItems 4000
   */
  templateExclusivePreference?: ConfigExclusivePrefCodeAndGroupType[];
  /** Hotel codes list to which the exclusive pref is to be copied. */
  hotelCodes?: CodeListType;
}

/** Base details common between both template and property level Exclusive preference ids. */
export interface ConfigExclusivePrefCodeAndGroupType {
  /**
   * Specifies the Exclusive preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the Exclusive preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
}

/** @maxItems 4000 */
export type CodeListType = string[];

/** Response object for fetching Travel Agent Types. */
export interface TravelAgentTypesDetails {
  /** Collection of Travel Agent Types. */
  travelAgentTypes?: TravelAgentTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Travel Agent Types.
 * @maxItems 4000
 */
export type TravelAgentTypesType = TravelAgentTypeType[];

/** Contains Common Master configuration detail. */
export interface TravelAgentTypeType {
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

/** Request object for creating Travel Agent Types. */
export interface TravelAgentTypesCriteria {
  /** Travel Agent Typesto be created. */
  travelAgentTypes?: TravelAgentTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Travel Agent Types. */
export interface TravelAgentTypesToBeChanged {
  /** Travel Agent Typesto be changed. */
  travelAgentTypes?: TravelAgentTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Guest Statuses. */
export interface GuestStatusesDetails {
  /** Collection of Guest Statuses. */
  guestStatuses?: GuestStatusesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Guest Statuses.
 * @maxItems 4000
 */
export type GuestStatusesType = GuestStatusType[];

/** Contains Common Master configuration detail. */
export interface GuestStatusType {
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

/** Request object for creating Guest Statuses. */
export interface GuestStatusesCriteria {
  /** Guest Statuses to be created. */
  guestStatuses?: GuestStatusesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Guest Statuses. */
export interface GuestStatusesToBeChanged {
  /** Guest Statuses to be changed. */
  guestStatuses?: GuestStatusesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Guest Titles. */
export interface GuestTitlesDetails {
  /** Collection of Guest Titles. */
  guestTitles?: GuestTitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating Guest Titles. */
export interface GuestTitlesCriteria {
  /** Guest Titles to be created. */
  guestTitles?: GuestTitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Guest Types. */
export interface GuestTypesDetails {
  /** Collection of Guest Types. */
  guestTypes?: GuestTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Guest Types.
 * @maxItems 4000
 */
export type GuestTypesType = GuestTypeType[];

/** Contains Common Master configuration detail. */
export interface GuestTypeType {
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

/** Request object for creating Guest Types. */
export interface GuestTypesCriteria {
  /** Guest Types to be created. */
  guestTypes?: GuestTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Guest Types. */
export interface GuestTypesToBeChanged {
  /** Guest Types to be changed. */
  guestTypes?: GuestTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Ecertificate Location Types. */
export interface EcertificateLocationTypesDetails {
  /** Collection of Ecertificate Location Types. */
  ecertificateLocationTypes?: EcertificateLocationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Ecertificate Location Types.
 * @maxItems 4000
 */
export type EcertificateLocationTypesType = EcertificateLocationTypeType[];

/** Contains Common Master configuration detail. */
export interface EcertificateLocationTypeType {
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

/** Request object for creating Ecertificate Location Types. */
export interface EcertificateLocationTypesCriteria {
  /** Ecertificate Location Types to be created. */
  ecertificateLocationTypes?: EcertificateLocationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Exclusive preferences at the property level. */
export interface ExclusivePreferences {
  /** Collection of Exclusive preferences specified at the property level. */
  hotelExclusivePreferences?: ConfigHotelExclusivePreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * This gives detailed information about a Exclusive preference at the property level.
 * @maxItems 4000
 */
export type ConfigHotelExclusivePreferencesType = ConfigHotelExclusivePreferenceType[];

/** Base details common between both template and property level Exclusive preference ids. */
export interface ConfigHotelExclusivePreferenceType {
  /**
   * Specifies the Exclusive preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the Exclusive preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
  /** Specifies the preference codes mapped to the exclusive preference. */
  preferenceCodes?: PreferenceCodesType;
  /** Display Order sequence. */
  orderSequence?: number;
  /**
   * Specifies the hotel code for which the Exclusive preference is specified.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Response object for fetching preferences at the property level. */
export interface HotelPreferences {
  /** Collection of preferences specified at the property level. */
  hotelPreferences?: ConfigHotelPreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * This type holds a collection of preferences at the property level.
 * @maxItems 4000
 */
export type ConfigHotelPreferencesType = ConfigHotelPreferenceType[];

/** Base details common between both template and property level preferences. */
export interface ConfigHotelPreferenceType {
  /**
   * The description about the preference.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Specifies the preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
  /**
   * This is a placeholder element for future use. Functionality may not be available for the current implementation.
   * @minLength 0
   * @maxLength 20
   */
  preferenceSubGroup?: string;
  /** Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS. */
  housekeeping?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
  /**
   * Specifies the hotel code for which the preference is specified.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Response object for fetching Identification Types. */
export interface IdentificationTypesDetails {
  /** Collection of Identification Types. */
  identificationTypes?: IdentificationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Identification Types.
 * @maxItems 4000
 */
export type IdentificationTypesType = IdentificationTypeType[];

/** Contains Common Master configuration detail. */
export interface IdentificationTypeType {
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
  /** Used to store the identification role associated to the identification type. Passport, Driver License, Visa, ID or Unknown are the possible values. */
  identificationRole?: IdentificationRoleType;
}

/** Simple type for storing identification roles. */
export enum IdentificationRoleType {
  Passport = 'Passport',
  DriverLicense = 'DriverLicense',
  Visa = 'Visa',
  Id = 'Id',
  Unknown = 'Unknown',
}

/** Request object for creating Identification Types. */
export interface IdentificationTypesCriteria {
  /** Identification Typesto be created. */
  identificationTypes?: IdentificationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Identification Types. */
export interface IdentificationTypesToBeChanged {
  /** Identification Typesto be changed. */
  identificationTypes?: IdentificationTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Immigration Statuses. */
export interface ImmigrationStatusesDetails {
  /** Collection of Immigration Statuses. */
  immigrationStatuses?: ImmigrationStatusesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Immigration Statuses.
 * @maxItems 4000
 */
export type ImmigrationStatusesType = ImmigrationStatusType[];

/** Contains Common Master configuration detail. */
export interface ImmigrationStatusType {
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

/** Request object for changing Immigration Statuses. */
export interface ImmigrationStatusesToBeChanged {
  /** Immigration Statuses to be changed. */
  immigrationStatuses?: ImmigrationStatusesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Industry Codes. */
export interface IndustryCodesDetails {
  /** Collection of Industry Codes. */
  industryCodes?: IndustryCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Industry Codes.
 * @maxItems 4000
 */
export type IndustryCodesType = IndustryCodeType[];

/** Contains Common Master configuration detail. */
export interface IndustryCodeType {
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

/** Request object for creating Industry Codes. */
export interface IndustryCodesCriteria {
  /** Industry Codesto be created. */
  industryCodes?: IndustryCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Industry Codes. */
export interface IndustryCodesToBeChanged {
  /** Industry Codesto be changed. */
  industryCodes?: IndustryCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Influence Codes. */
export interface InfluenceCodesDetails {
  /** Collection of Influence Codes. */
  influenceCodes?: InfluenceCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Influence Codes.
 * @maxItems 4000
 */
export type InfluenceCodesType = InfluenceCodeType[];

/** Contains Common Master configuration detail. */
export interface InfluenceCodeType {
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

/** Request object for creating Influence Codes. */
export interface InfluenceCodesCriteria {
  /** Influence Codesto be created. */
  influenceCodes?: InfluenceCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Influence Codes. */
export interface InfluenceCodesToBeChanged {
  /** Influence Codesto be changed. */
  influenceCodes?: InfluenceCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Keyword Types. */
export interface KeywordTypesDetails {
  /** Collection of Keyword Types. */
  keywordTypes?: KeywordTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Keyword Types.
 * @maxItems 4000
 */
export type KeywordTypesType = KeywordTypeType[];

/** Contains Common Master configuration detail. */
export interface KeywordTypeType {
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
  /** Indicates if the KEYWORD TYPE is to be copied from a Company Master to a Company Subsidiary. */
  masterSubKeyword?: boolean;
}

/** Request object for creating Keyword Types. */
export interface KeywordTypesCriteria {
  /** Keyword Typesto be created. */
  keywordTypes?: KeywordTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Keyword Types. */
export interface KeywordTypesToBeChanged {
  /** Keyword Typesto be changed. */
  keywordTypes?: KeywordTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Mailing Action Codes. */
export interface MailingActionCodesDetails {
  /** Collection of Mailing Action Codes. */
  mailingActionCodes?: MailingActionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Mailing Action Codes.
 * @maxItems 4000
 */
export type MailingActionCodesType = MailingActionCodeType[];

/** Contains Common Master configuration detail. */
export interface MailingActionCodeType {
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

/** Request object for creating Mailing Action Codes. */
export interface MailingActionCodesCriteria {
  /** Mailing Action Codes to be created. */
  mailingActionCodes?: MailingActionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Mailing Action Codes. */
export interface MailingActionCodesToBeChanged {
  /** Mailing Action Codes to be changed. */
  mailingActionCodes?: MailingActionCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response to fetch Membership Awards. */
export interface MembershipAwardsInfo {
  /** Collection of Membership Awards. */
  membershipAwards?: MembershipAwardsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Membership Award details.
 * @maxItems 4000
 */
export type MembershipAwardsType = MembershipAwardType[];

/** Values by which membership award is uniquely identied. */
export interface MembershipAwardType {
  /**
   * Membership type for which awards are defined.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Membership Award Code.
   * @minLength 0
   * @maxLength 40
   */
  awardCode?: string;
  /**
   * Short description of Award.
   * @minLength 0
   * @maxLength 80
   */
  shortDescription?: string;
  /**
   * Detailed description and specification of the Award.
   * @minLength 0
   * @maxLength 2000
   */
  longDescription?: string;
  /**
   * Rule Schedule applied to this Award.
   * @minLength 0
   * @maxLength 20
   */
  ruleScheduleCode?: string;
  /**
   * The billing group that represents a billing rule schedule for the membership award.
   * @minLength 0
   * @maxLength 20
   */
  billingGroup?: string;
  /**
   * Membership level required for eligibility to receive this award. Other membership levels are not eligible for this award.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /** Begin date and End date of this membership award. */
  dateRange?: DateRangeType;
  /** Inactive flag for Membership Award. The award record cannot be deleted. */
  inactive?: boolean;
  /** Display sequence of Award. */
  displaySequence?: number;
  /** Number of awards to be given. */
  awardQuantity?: number;
  /** Indicates if award consumtion is tracked by the system. If value is Y, then system keeps track of availability of award after it is issued. */
  autoConsume?: boolean;
  /** Force verification whether Rate or Product for the Award is valid at reservation. */
  forceVerification?: boolean;
  /** Indicates if the Award is based on RATE, PRODUCT,UPGRADE,FT or OTHER. */
  awardBasedOn?: MembershipAwardBasedOnType;
  /** Information related to Rate based Award. */
  rateInfo?: MembershipAwardRateInfoType;
  /** Information related to Product based Award. */
  productInfo?: MembershipAwardProductInfoType;
  /** Information related to Upgrade based Award. */
  upgradeInfo?: MembershipAwardUpgradeInfoType;
  /** Information related to Other Award. */
  otherInfo?: MembershipAwardOtherInfoType;
  /** Information related to FT based Award. */
  financialTransactionInfo?: MembershipAwardFinancialTransactionInfoType;
  /** Membership Award Rate/Product/FT/Upgrade records associated with this Award. */
  awardDetails?: MembershipAwardDetailsType;
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

/** This award allows a guest to apply available membership points towards the balance of his or her bill. */
export enum MembershipAwardBasedOnType {
  Rate = 'Rate',
  Product = 'Product',
  Upgrade = 'Upgrade',
  Other = 'Other',
  Ft = 'Ft',
}

/** Membership Award cancel related details. */
export interface MembershipAwardRateInfoType {
  /** If a reservation is booked using award points, this is the number of days before the arrival date by which the reservation may be cancelled without penalty. Zero indicates that the reservation may be cancelled any time up to and including the arrival date without incurring a penalty. */
  cancelPenaltyDays?: number;
  /** The flat number of award points, or the percentage of the award points, that are forfeited if the guest cancels the reservation fewer than the number of days specified in Cancel Penalty Days before the arrival date. */
  cancelPenaltyCharge?: number;
  /** Cancel Penalty type POINTS/PERCENT. */
  cancelPenaltyType?: MembershipAwardCancelPenaltyType;
  /** Type of cancel policy - All/Nights. */
  cancelPolicyType?: MembershipAwardCancelPolicyType;
  /** Number of nights cancel policy is applicable. */
  numberOfNights?: number;
}

/** Penalty charge is in percentage. */
export enum MembershipAwardCancelPenaltyType {
  Points = 'Points',
  Percent = 'Percent',
}

/** Cancel policy is applicable only on Nights. */
export enum MembershipAwardCancelPolicyType {
  All = 'All',
  Nights = 'Nights',
}

/** Membership Award cancel related details. */
export interface MembershipAwardProductInfoType {
  /** If a reservation is booked using award points, this is the number of days before the arrival date by which the reservation may be cancelled without penalty. Zero indicates that the reservation may be cancelled any time up to and including the arrival date without incurring a penalty. */
  cancelPenaltyDays?: number;
  /** The flat number of award points, or the percentage of the award points, that are forfeited if the guest cancels the reservation fewer than the number of days specified in Cancel Penalty Days before the arrival date. */
  cancelPenaltyCharge?: number;
  /** Cancel Penalty type POINTS/PERCENT. */
  cancelPenaltyType?: MembershipAwardCancelPenaltyType;
  /** Type of cancel policy - All/Nights. */
  cancelPolicyType?: MembershipAwardCancelPolicyType;
  /** Number of nights cancel policy is applicable. */
  numberOfNights?: number;
}

/** Membership Award cancel related details. */
export interface MembershipAwardUpgradeInfoType {
  /** If a reservation is booked using award points, this is the number of days before the arrival date by which the reservation may be cancelled without penalty. Zero indicates that the reservation may be cancelled any time up to and including the arrival date without incurring a penalty. */
  cancelPenaltyDays?: number;
  /** The flat number of award points, or the percentage of the award points, that are forfeited if the guest cancels the reservation fewer than the number of days specified in Cancel Penalty Days before the arrival date. */
  cancelPenaltyCharge?: number;
  /** Cancel Penalty type POINTS/PERCENT. */
  cancelPenaltyType?: MembershipAwardCancelPenaltyType;
  /** Type of cancel policy - All/Nights. */
  cancelPolicyType?: MembershipAwardCancelPolicyType;
  /** Number of nights cancel policy is applicable. */
  numberOfNights?: number;
  /** Indicates if the membership award upgrade is based on room category (N) or room category group (Y). */
  basedOnRoomGroup?: boolean;
}

/** Information related to Other Award. */
export interface MembershipAwardOtherInfoType {
  /** Points required to avail/redeem this award. */
  pointsRequired?: number;
  /** The actual value of the award, in the amount of currency. */
  awardValue?: number;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine1?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine2?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine3?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine4?: string;
  /**
   * Display set for other type of awards for export purpose.
   * @minLength 0
   * @maxLength 40
   */
  displaySet?: string;
}

/** Information related to Other Award. */
export interface MembershipAwardFinancialTransactionInfoType {
  /** Points required to avail/redeem this award. */
  pointsRequired?: number;
  /** The actual value of the award, in the amount of currency. */
  awardValue?: number;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine1?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine2?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine3?: string;
  /**
   * Message for Other awards.
   * @minLength 0
   * @maxLength 4000
   */
  messageLine4?: string;
  /**
   * Display set for other type of awards for export purpose.
   * @minLength 0
   * @maxLength 40
   */
  displaySet?: string;
  /**
   * Exchange rate type to be used.
   * @minLength 0
   * @maxLength 20
   */
  exchangeRate?: string;
  /** Max percent of total value to be allowed to convert money to points. */
  maxPercentAllowed?: number;
  /** Ignore Financial transactions in OPERA or not? If true, Financial transaction is not required in OPERA while giving award as it may be recorded in some external system and only points accounting is done in OCIS. */
  ignoreFinancialTransaction?: boolean;
}

/**
 * Membership Award Rate details.
 * @maxItems 4000
 */
export type MembershipAwardDetailsType = MembershipAwardDetailType[];

/** Values by which membership award is uniquely identied. */
export interface MembershipAwardDetailType {
  /**
   * Membership type for which awards are defined.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Membership Award Code.
   * @minLength 0
   * @maxLength 40
   */
  awardCode?: string;
  /**
   * Hotel code to which the record belongs.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Membership Award Detail Code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Value to uniquely identify Room/Room Group upgrade record. */
  upgradeId?: UniqueIDType;
  /** Identify whether Room or Room Group upgrade record. */
  groupUpgrade?: boolean;
  /** Inactive flag for Membership Award detail (Rate/Product/upgrade). */
  inactive?: boolean;
  /** Begin date and End date of this membership award upgrade. */
  dateRange?: DateRangeType;
  /** Points required to upgrade. */
  pointsRequired?: number;
  /**
   * Upgrade from Room.
   * @minLength 0
   * @maxLength 20
   */
  fromRoom?: string;
  /**
   * Upgrade to Room.
   * @minLength 0
   * @maxLength 20
   */
  toRoom?: string;
  /**
   * Upgrade from Room Group.
   * @minLength 0
   * @maxLength 20
   */
  fromRoomGroup?: string;
  /**
   * Upgrade to Room Group.
   * @minLength 0
   * @maxLength 20
   */
  toRoomGroup?: string;
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

/** Request object for modifying membership awards. */
export interface MembershipAwards {
  /** Collection of membership awards to be changed. */
  membershipAwards?: MembershipAwardsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching membership benefit programs. */
export interface MembershipBenefitProgramsInfo {
  /** Collection of membership benefit programs. */
  membershipBenefitPrograms?: MembershipBenefitProgramsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Membership Benefit Program details.
 * @maxItems 4000
 */
export type MembershipBenefitProgramsType = MembershipBenefitProgramType[];

/** Type that holds key values, that uniquely identifies a membership benefit program */
export interface MembershipBenefitProgramType {
  /**
   * Membership type
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Benefit Code
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /** Begin date and End date of this membership benefit program. */
  dateRange?: DateRangeType;
  /**
   * Min value for membership level. This is the minimum membership level member gets for enrolling into this program.
   * @minLength 0
   * @maxLength 20
   */
  minimumLevel?: string;
  /**
   * Description of the Membership Benefit Program.
   * @minLength 0
   * @maxLength 4000
   */
  description?: string;
  /** Flag indicates whether the Membership Benefit Program is active or not. */
  inactive?: boolean;
}

/** Request object for modifying membership benefit programs. */
export interface MembershipBenefitPrograms {
  /** Collection of membership benefit programs to be changed. */
  membershipBenefitPrograms?: MembershipBenefitProgramsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Class. */
export interface MembershipClassesInfo {
  /** Collection of Membership Classes. */
  membershipClasses?: MembershipClassesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of the Membership Class to be configured or fetched
 * @maxItems 4000
 */
export type MembershipClassesType = MembershipClassType[];

/** Base type provides information about Membership Market/Property Groups Configuration. */
export interface MembershipClassType {
  /**
   * Code is used to identify a Membership Market/Resort Group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership Market/Propety Group.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Membership Market/Property Groups display sequence Number */
  displaySequence?: number;
  /** This flag indicates whether the membership class is eligible for loyalty program or not. */
  loyaltyProgram?: boolean;
  /** This flag indicates whether the membership class is eligible for frequent flyer or not. */
  frequentFlyer?: boolean;
}

/** Request object for changing Membership Class. */
export interface MembershipClasses {
  /** Details of the Membership Classes to be edited. */
  membershipClasses?: MembershipClassesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Enrollment Codes. */
export interface MembershipEnrollmentCodesDetails {
  /** Collection of Membership Enrollment Codes. */
  membershipEnrollmentCodes?: MembershipEnrollmentCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Membership Enrollment Codes.
 * @maxItems 4000
 */
export type MembershipEnrollmentCodesType = MembershipEnrollmentCodeType[];

/** Contains Common Master configuration detail. */
export interface MembershipEnrollmentCodeType {
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

/** Request object for creating Membership Enrollment Codes. */
export interface MembershipEnrollmentCodesCriteria {
  /** Membership Enrollment Codes to be created. */
  membershipEnrollmentCodes?: MembershipEnrollmentCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Membership Enrollment Codes. */
export interface MembershipEnrollmentCodesToBeChanged {
  /** Membership Enrollment Codes to be changed. */
  membershipEnrollmentCodes?: MembershipEnrollmentCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching membership enrollment groups. */
export interface MembershipEnrollmentGroupsInfo {
  /** Collection of membership enrollment groups. */
  membershipEnrollmentGroups?: MembershipEnrollmentGroupsType;
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
 * Details of membership enrollment group type.
 * @maxItems 4000
 */
export type MembershipEnrollmentGroupsType = MembershipEnrollmentGroupType[];

/** Base type provides information about Membership Market/Property Groups Configuration. */
export interface MembershipEnrollmentGroupType {
  /**
   * Code is used to identify a Membership Market/Resort Group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership Market/Propety Group.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Membership Market/Property Groups display sequence Number */
  displaySequence?: number;
  /** Collection of code and description of enrollment codes that are associated to the membership enrollment group. */
  enrollmentCodes?: MembershipEnrollmentCodesInfoType;
}

/**
 * Membership enrollment code code and description.
 * @maxItems 4000
 */
export type MembershipEnrollmentCodesInfoType = CodeDescriptionType[];

/** Request object for changing new membership enrollment groups. */
export interface MembershipEnrollmentGroups {
  /** Collection of membership enrollment groups. */
  membershipEnrollmentGroups?: MembershipEnrollmentGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of FolioTexts to be inserted at MembershipLevel. */
export interface MembershipFolioTexts {
  membershipFolioTexts?: MembershipFolioTextsType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A type which is used to insert Membership FolioTexts. */
export interface MembershipFolioTextsType {
  /**
   * Membership Type code.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Membership Level code.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /**
   * Folio Texts.
   * @maxItems 4000
   */
  folioTexts?: HotelFolioTextsType[];
}

/**
 * Collection of hotel folio texts
 * @maxItems 4000
 */
export type HotelFolioTextsType = HotelFolioTextType[];

/** Folio text */
export interface HotelFolioTextType {
  /**
   * @minLength 0
   * @maxLength 400
   */
  folioText1?: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  folioText2?: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  folioText3?: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  folioText4?: string;
  /**
   * Signifies folio text for a specific hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Response object for fetching membership levels. */
export interface MembershipLevelsInfo {
  /** Collection of membership levels. */
  membershipLevels?: MembershipLevelsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of membership levels
 * @maxItems 4000
 */
export type MembershipLevelsType = MembershipLevelType[];

/** A Type that holds key values, that uniquely identifies a membership level */
export interface MembershipLevelType {
  /**
   * Membership type
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Membership level
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership level.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Label of the Membership level.
   * @minLength 0
   * @maxLength 40
   */
  label?: string;
  /** Rank of Membership level. */
  rank?: number;
  /**
   * VIP level associated to the Membership level.
   * @minLength 0
   * @maxLength 20
   */
  vip?: string;
  /** Display Colour of Membership level. */
  displayColor?: ColorType;
  /** Inactive flag for a Membership level. */
  inactive?: boolean;
  /** Folio text for a specific membership type level for hotels in the chain. */
  folioTexts?: HotelFolioTextsType;
  /** Indicates whether memberships upgraded or downgraded to or from this level will be included in the Membership Export. */
  fulfillment?: boolean;
  /** Indicates whether memberships level is restricted to prevent users from making changes to it. */
  changesRestricted?: boolean;
  /** Select the number of graces the member will be allowed before the membership level auto-renews based on the member current points. It is available when the Tier Management Reset option is selected on Membership Type. */
  autoRenewGrace?: number;
  /** Specify the time limit (from 1 to 5 years) for membership card expiration for this level */
  cardValidYears?: number;
  /** Indicates whether memberships level is restricted to prevent users from making changes to it. It is available when the Advanced Enrollment option is selected on Membership Type. */
  restrictedLevel?: boolean;
  /** Indicates whether membership has expired by the time the membership record is uploaded, the members card will be renewed and updated with a new expiration date. */
  renewCard?: boolean;
  /** Indicates whether membership fee payment is required upon upgrade to this membership level. */
  feeRequired?: boolean;
  /**
   * The lowest level in which this level can be downgraded to.
   * @minLength 0
   * @maxLength 20
   */
  maxDowngradeLevel?: string;
  /** Number of transaction(s) for each stay. Value will be 2 in case of double dipping otherwise it will be null or 1. */
  numberOfTransactions?: number;
}

/** Color configuration type. This color configuration provides a visual category of entities. */
export enum ColorType {
  Red = 'Red',
  DarkRed = 'DarkRed',
  Green = 'Green',
  DarkGreen = 'DarkGreen',
  LightGreen = 'LightGreen',
  Orange = 'Orange',
  White = 'White',
  Yellow = 'Yellow',
  DarkYellow = 'DarkYellow',
  Purple = 'Purple',
  Brown = 'Brown',
  Gray = 'Gray',
  Aqua = 'Aqua',
  Chocolate = 'Chocolate',
  Blue = 'Blue',
  LightBlue = 'LightBlue',
  DarkBlue = 'DarkBlue',
  Cyan = 'Cyan',
  DarkCyan = 'DarkCyan',
  Magenta = 'Magenta',
  DarkMagenta = 'DarkMagenta',
  Black = 'Black',
}

/** Request object for modifying membership levels. */
export interface MembershipLevels {
  /** Collection of membership levels to be changed. */
  membershipLevels?: MembershipLevelsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Market Groups configurations. */
export interface MembershipMarketGroupsInfo {
  /** Collection of Membership Market Groups configurations. */
  membershipMarketGroups?: MembershipMarketGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Details for Membership Market Group along with associated Market codes.
 * @maxItems 4000
 */
export type MembershipMarketGroupsType = MembershipMarketGroupType[];

/** Base type provides information about Membership Market/Property Groups Configuration. */
export interface MembershipMarketGroupType {
  /**
   * Code is used to identify a Membership Market/Resort Group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership Market/Propety Group.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Membership Market/Property Groups display sequence Number */
  displaySequence?: number;
  /** Collection of Market codes which associated for a Membership Market Group. */
  marketCodes?: MembershipMarketCodesType;
}

/**
 * Membership Markets code and Description.
 * @maxItems 4000
 */
export type MembershipMarketCodesType = CodeDescriptionType[];

/** Request object for changing existing Membership Market Groups Configurations. */
export interface MembershipMarketGroups {
  /** Membership Market Groups Configurations to be changed. */
  membershipMarketGroups?: MembershipMarketGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Property Groups configurations. */
export interface MembershipPropertyGroupsInfo {
  /** Collection of Membership Property Groups configurations. */
  membershipPropertyGroups?: MembershipPropertyGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Details for Membership Property Group along with associated property codes.
 * @maxItems 4000
 */
export type MembershipPropertyGroupsType = MembershipPropertyGroupType[];

/** Base type provides information about Membership Market/Property Groups Configuration. */
export interface MembershipPropertyGroupType {
  /**
   * Code is used to identify a Membership Market/Resort Group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership Market/Propety Group.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Membership Market/Property Groups display sequence Number */
  displaySequence?: number;
  /** Collection of property codes which associated for a Membership Property Group. */
  hotels?: MembershipPropertyCodesType;
}

/**
 * Membership Property code and Description.
 * @maxItems 4000
 */
export type MembershipPropertyCodesType = CodeDescriptionType[];

/** Request object for changing existing Membership Property Groups Configurations. */
export interface MembershipPropertyGroups {
  /** Membership Property Groups Configurations to be changed. */
  membershipPropertyGroups?: MembershipPropertyGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Rate Groups. */
export interface MembershipRateGroupsInfo {
  /** Collection of Membership Rate Group. */
  membershipRateGroups?: MembershipRateGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Details for Membership Rate Group.
 * @maxItems 4000
 */
export type MembershipRateGroupsType = MembershipRateGroupType[];

/** Base type provides information about Membership Market/Property Groups Configuration. */
export interface MembershipRateGroupType {
  /**
   * Code is used to identify a Membership Market/Resort Group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Membership Market/Propety Group.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Membership Market/Property Groups display sequence Number */
  displaySequence?: number;
  /** Collection of Rate codes associated with this Rate Group. */
  rateCodes?: MembershipRateCodesType;
}

/**
 * Membership Rates code and Description.
 * @maxItems 4000
 */
export type MembershipRateCodesType = CodeDescriptionType[];

/** Request object for modifying Membership Rate Groups. */
export interface MembershipRateGroups {
  /** Collection of Membership Rate Groups to be changed. */
  membershipRateGroups?: MembershipRateGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Status Codes. */
export interface MembershipStatusCodesDetails {
  /** Collection of Membership Status Codes. */
  membershipStatusCodes?: MembershipStatusCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Membership Status Codes.
 * @maxItems 4000
 */
export type MembershipStatusCodesType = MembershipStatusCodeType[];

/** Contains Common Master configuration detail. */
export interface MembershipStatusCodeType {
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

/** Request object for creating Membership Status Codes. */
export interface MembershipStatusCodesCriteria {
  /** Membership Status Codes to be created. */
  membershipStatusCodes?: MembershipStatusCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Membership Status Codes. */
export interface MembershipStatusCodesToBeChanged {
  /** Membership Status Codes to be changed. */
  membershipStatusCodes?: MembershipStatusCodesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching membership type rules. */
export interface MembershipTypeRulesInfo {
  /** Collection of membership type rules summary. */
  membershipTypeRules?: MembershipTypeRulesSummariesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Membership type rules summary information.
 * @maxItems 4000
 */
export type MembershipTypeRulesSummariesType = MembershipTypeRuleSummaryType[];

/** Membership Type rule summary information. */
export interface MembershipTypeRuleSummaryType {
  /** Membership type rule primary information. */
  membershipTypeRulePrimaryDetails?: MembershipTypeRulePrimaryDetailsType;
  /**
   * Rule code of the membership type rule.
   * @minLength 0
   * @maxLength 20
   */
  ruleCode?: string;
  /** Program(Points/Tier) type of the rule. */
  programType?: MembershipTypeRuleType;
}

/** Membership Type rule primary information. */
export interface MembershipTypeRulePrimaryDetailsType {
  /** Membership type rule ID details. */
  membershipTypeRuleId?: MembershipTypeRuleIDType;
  /**
   * Description of the rule.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Calculation rule name of the type rule. Determines whether this Membership generates points based on guest Revenue, Stays, Nights, Enrolment. */
  ruleBasedOn?: MembershipTypeRuleBasedOnType;
  /**
   * Start date indicates the begin date for this points calculation rule.
   * @format date
   * @maxLength 8
   */
  ruleStartDate?: string;
  /**
   * End date for this points calculation rule.
   * @format date
   * @maxLength 8
   */
  ruleEndDate?: string;
  /** Specifies if points are BASE or BONUS. */
  pointsType?: RulePointsTypeType;
  /**
   * The date that Membership type rule is marked as inactive.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
  /** Tranaction code for membership type rule. e.g. Resident, Non Resident */
  transactionCode?: MembershipTypeRuleTransactionCodeType;
}

/** Membership type rule ID. */
export interface MembershipTypeRuleIDType {
  /**
   * Membership type of the Rule.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /** Sequence number of the membership type rule. */
  membershipPointsSequence?: number;
}

/** Indicates Membership upgrades/downgrades to the next tier level uses RFM (Recency, Frequency, Monetary Value) score. */
export enum MembershipTypeRuleBasedOnType {
  Revenue = 'Revenue',
  Stay = 'Stay',
  Nights = 'Nights',
  Enrollment = 'Enrollment',
  TierUpgrade = 'TierUpgrade',
  Renewal = 'Renewal',
  Rfm = 'Rfm',
}

/** Possible membership points types. */
export enum RulePointsTypeType {
  Base = 'Base',
  Bonus = 'Bonus',
}

/** Determines the Transaction Code for Membership program rule. */
export enum MembershipTypeRuleTransactionCodeType {
  Resident = 'Resident',
  NonResident = 'NonResident',
}

/** Membership Type/Program rule types. */
export enum MembershipTypeRuleType {
  All = 'All',
  Points = 'Points',
  Tier = 'Tier',
}

/** Request object for changing membership type rules. */
export interface MembershipTypeRules {
  /** Collection of membership type rules to be changed. */
  membershipTypeRules?: MembershipTypeRuleDetailsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of Membership type rule details.
 * @maxItems 4000
 */
export type MembershipTypeRuleDetailsType = MembershipTypeRuleDetailType[];

/** Membership type Rule details. */
export interface MembershipTypeRuleDetailType {
  /** Membership type rule summary information. */
  rulePrimaryDetails?: MembershipTypeRulePrimaryDetailsType;
  /** Membership type rule definition details. */
  ruleDefinition?: MembershipTypeRuleDefinitionType;
  /** Membership Type rule points definition details. */
  rulePointsDefinition?: MembershipTypeRulePointsDefinitionType;
  /** Membership Type rule conditions details. */
  ruleConditions?: MembershipTypeRuleConditionsType;
}

/** Membership Type Rule definition details. */
export interface MembershipTypeRuleDefinitionType {
  /**
   * Rule code of the membership type rule.
   * @minLength 0
   * @maxLength 20
   */
  ruleCode?: string;
  /** Program(Points/Tier) type of the rule. */
  programType?: MembershipTypeRuleType;
  /** Rule applies on Reservation Arrival Date, Reservation Departure Date, Any date during stay or RestrictedDates. */
  ruleAppliesOn?: RuleAppliesOnType;
  /** Specifies total number of times program rule is eligible . */
  noOfTimesEligible?: number;
  /**
   * This field will be used to store export label and will be used only for exporting purposes.
   * @minLength 0
   * @maxLength 40
   */
  ruleExportLabel?: string;
  /**
   * Date on which the rule will be expired.
   * @format date
   * @maxLength 8
   */
  ruleExpirationDate?: string;
}

/** Applies on restricted dates. */
export enum RuleAppliesOnType {
  Arrival = 'Arrival',
  Departure = 'Departure',
  Any = 'Any',
  Restricted = 'Restricted',
}

/** Membership Program Rule points details. */
export interface MembershipTypeRulePointsDefinitionType {
  /** Specifies the ratio of the points accumulated per Stay or Night or Revenue. This ratio multiplied by the actual Stays or Nights or Revenue will give the Total points accumulated. */
  points?: number;
  /** Indicates the cost per point for this membership program. */
  costPerPoint?: number;
  /** Specifies the minimum units needed. */
  revenueUnits?: number;
  /** This flag tells if the total amount computed will be rounded, rounded up or rounded down. */
  pointsRoundingFlag?: PointsRoundingFlagType;
  /** Points ratio is expressed in terms of %. */
  percentagePoints?: boolean;
  /** Determines while calculating points projection should the rule be excluded or included. Default is included(N). */
  excludePointProjection?: boolean;
}

/** This flag tells if the total amount computed will be rounded, rounded up or rounded down. */
export enum PointsRoundingFlagType {
  Round = 'Round',
  Ceil = 'Ceil',
  Floor = 'Floor',
}

/** Membership Type Rule Conditions. */
export interface MembershipTypeRuleConditionsType {
  /** Specifies the General Conditions to apply the rules. */
  generalConditions?: MembershipTypeRuleGeneralConditionsType;
  /** Specifies the Rate code Conditions to apply the rules. */
  rateConditions?: MembershipTypeRuleRateConditionsType;
  /** Specifies the Room Conditions to apply the rules. */
  roomConditions?: MembershipTypeRuleRoomConditionsType;
  /** Specifies the Segmentation Conditions to apply the rules. */
  segmentationConditions?: MembershipTypeRuleSegmentationConditionsType;
  /** Specifies the Reservation Conditions to apply the rules. */
  reservationConditions?: MembershipTypeRuleReservationConditionsType;
}

/** Membership Type Rules general Conditions. */
export interface MembershipTypeRuleGeneralConditionsType {
  /**
   * Reservation Channel for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  reservationChannel?: string;
  /**
   * Property for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  property?: string;
  /**
   * Property group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  propertyGroup?: string;
  /**
   * Enrollment Code for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentCode?: string;
  /**
   * Enrollment Group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentGroup?: string;
  /**
   * Promotion Code for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /**
   * Membership Level for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
}

/** Membership Type Rules rate Conditions. */
export interface MembershipTypeRuleRateConditionsType {
  /**
   * Rate code for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Rate group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  rateGroup?: string;
  /**
   * Revenue group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  revenueGroup?: string;
  /** Average rate amount of the reservations for which rule will be applied. */
  averageRateAmount?: number;
  /** Minimum revenue on which rule will be applied. */
  minimumRevenue?: number;
  /**
   * Transaction group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  transactionGroup?: string;
  /** Points ratio is expressed in terms of %. */
  qualifyingRates?: boolean;
  /** To specify the exclusion of rate group. */
  excludeRateGroup?: boolean;
  /** To specify the exclusion of revenue group while applying rule. */
  excludeRevenueGroup?: boolean;
  /** To specify the inclusion of Transaction group. */
  includeTransactionGroup?: boolean;
  /** Points Calculation will be based on all rate codes when specify All Membership Rates. */
  allMembershipRates?: boolean;
  /** Points Calculation will be based on all transaction codes when specify All Membership Transactions. */
  allMembershipTrx?: boolean;
}

/** Membership Type Rules room conditions. */
export interface MembershipTypeRuleRoomConditionsType {
  /**
   * Room type/label for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Membership room group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  roomGroup?: string;
  /**
   * Room class for the room for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /** Indicates whether to use Room Type or Booked Room Type for the rule. If Y then Booked Room Type will be used for points calculation otherwise Room Type to be used. */
  roomsToCharge?: boolean;
}

/** Membership Type Rules segmentation conditions. */
export interface MembershipTypeRuleSegmentationConditionsType {
  /**
   * Market Code for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * Market group for which the rule is applied.
   * @minLength 0
   * @maxLength 20
   */
  marketGroup?: string;
  /** To specify the exclusion of market group while applying rule. */
  excludeMarketGroup?: boolean;
}

/** Membership Type Rules reservation conditions. */
export interface MembershipTypeRuleReservationConditionsType {
  /**
   * Reservations with start date for which the rule is applied.
   * @format date
   * @maxLength 8
   */
  reservationStartDate?: string;
  /**
   * Reservations with end date for which the rule is applied.
   * @format date
   * @maxLength 8
   */
  reservationEndDate?: string;
  /** Minimum length of stay required to receive points if membership type is based on STAY. */
  minimumNights?: number;
  /** Maximum length of stay required to receive points if membership type is based on NIGHTS. */
  maximumNights?: number;
  /** Number of days from enrolment. */
  daysFromEnrollment?: number;
  sunday?: boolean;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
}

/** Response object for creating membership type rules. */
export interface MembershipTypeRulesDetails {
  /** Membership type rule primary details on successful creation. */
  membershipTypeRules?: MembershipTypeRulesIDType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of membership type rule ID's.
 * @maxItems 4000
 */
export type MembershipTypeRulesIDType = MembershipTypeRuleIDType[];

/** Response object for fetching membership type rule. */
export interface MembershipTypeRule {
  /** Membership type rule detailed information. */
  membershipTypeRule?: MembershipTypeRuleDetailType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Membership Types. */
export interface MembershipTypes {
  /** Collection of Membership types fetched. */
  membershipTypes?: MembershipTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Membership Type
 * @maxItems 4000
 */
export type MembershipTypesType = MembershipTypeType[];

/** A representation of the information contained by a membership type. */
export interface MembershipTypeType {
  /**
   * Membership Type code.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Membership Class code.
   * @minLength 0
   * @maxLength 20
   */
  membershipClass?: string;
  /**
   * Description of the membership type.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Label used to refer to points for this membership type
   * @minLength 0
   * @maxLength 20
   */
  pointsLabel?: string;
  /** Indicates if this membership type has a point calculation rule. */
  hasPointCalculationRule?: boolean;
  /** Defines the priority order of this membership type. */
  ranking?: number;
  /** Sequence number that controls the position of the membership type when displayed in lists. */
  sequence?: number;
  /** Membership card details. */
  cardDetails?: CardNumberDetailsType;
  /**
   * The currency in which user would like to calculate the membership points.
   * @minLength 0
   * @maxLength 20
   */
  currency?: string;
  /** "Type of action that the user wants to attach membership information to the reservation. */
  membershipAction?: MembershipActionType;
  /**
   * Exchange type to be used in the currency conversion.
   * @minLength 0
   * @maxLength 20
   */
  exchangeType?: string;
  /**
   * The cost per point.
   * @minLength 1
   * @maxLength 5
   */
  pointCost?: string;
  /**
   * Indicates when the membership action to be taken .
   * @maxItems 4000
   */
  attachMembershipToReservationRule?: AttachMembershipToReservationRuleType[];
  /** Folio message for member. */
  memberFolioMessage?: TranslationTextType2000;
  /** Folio message for non-member. */
  nonMemberFolioMessage?: TranslationTextType2000;
  /** Folio Message FBA Posting. */
  folioMessageFBAPosting?: TranslationTextType2000;
  /** Award Generation Method. */
  awardGenerationMethod?: MembershipAwardGenerationMethodType;
  /** Detail on award points for membership award upgrades/downgrades. */
  awardPointsDetail?: AwardPointsType;
  /** Detail on award points for membership tier management. */
  tierPointsDetails?: TierPointsType;
  /** Membership Type additional settings. */
  additionalDetails?: MembershipTypeAdditionalInfoType;
  /** Membership Handling Details */
  handlingDetails?: MembershipHandlingType;
  /** Membership levels associated with this membership. */
  membershipLevels?: MembershipLevelsType;
  /** Detail on Enrollment Match Rule and User Defined Enrollment fields for membership type. */
  enrollmentMatchRule?: EnrollmentMatchRuleType;
  /** Indicates if the membership type is inactive. */
  inactive?: boolean;
  /** Indicates exclude profiles with an active membership of this type from the automatic purge utility. */
  excludeProfileFromPurge?: boolean;
  /** Indicates that the award points to each membership holder attached to the shared reservation. */
  allowShares?: boolean;
  /** Indicates that the reservation that is eligible for points would have its data processed by the End of Day procedures and transferred to the interface. */
  sendCheckoutToInterface?: boolean;
  /** Allows the user to input a value by which the base number of points is multiplied. */
  multiplier?: boolean;
  /** Indicates how the award points for this membership type will be managed. */
  centralSetup?: boolean;
  /** Indicates whether enrollment code is required or not. */
  enrollmentCodeRequiredYn?: boolean;
  /** Indicates the membership type is for a Booker. */
  bookerProgramYn?: boolean;
  /** Add the booker membership to company profile type. */
  companyYn?: boolean;
  /** Add the booker membership to travel agent profile type. */
  travelAgentYn?: boolean;
  /** Add the booker membership to source profile type. */
  sourceYn?: boolean;
  /** Add the booker membership to group profile type. */
  groupYn?: boolean;
  /** Add the booker membership to contact profile type. */
  contactYn?: boolean;
  /** Flag that affects how a Membership Type is added, edited or deleted from a profile. */
  externallyControlled?: boolean;
  /** Flag that indicates Profile Address is editable during Enrollment. */
  enrollmentAddressAllowed?: boolean;
  /** Flag that indicates Profile Communication is editable during Enrollment. */
  enrollmentCommunicationAllowed?: boolean;
  /** Flag that indicates Fee is editable during Enrollment. */
  enrollmentFeeAllowed?: boolean;
  /** Flag that indicates Birthdate field is editable during Enrollment. */
  enrollmentBirthdateAllowed?: boolean;
  /** Indicates whether to re-issue the membership card or not, when it is lost / stolen. */
  reIssueNewCard?: boolean;
  /** Indicates whether primary membership or not. */
  primaryMembership?: boolean;
  /** Print Folio Message on confirmation. */
  printFolioMsgOnConfirmation?: boolean;
  /**
   * Indicates database for external system for Membership Type.
   * @minLength 0
   * @maxLength 20
   */
  externalDatabase?: string;
}

/** Card Number of membership type. */
export interface CardNumberDetailsType {
  /** ValidationRules for credit card. */
  membershipCardValidationRule?: MembershipCardValidationRuleType;
  /** Indicates new membership card numbers, either based on the enrollment code or on the next available number in the card sequence. */
  cardNumberBasedOn?: CardNumberGenerationModeType;
  /**
   * Indicates External System from which card number will be generated.
   * @minLength 0
   * @maxLength 20
   */
  database?: string;
  /** Indicates if the multiple membership cards may be issued with the same membership number. */
  allowDuplicateCardNumbers?: boolean;
  /** Indicates if the membership expiration date is required for validation of the profile membership information. */
  expirationDateRequired?: boolean;
  /** Indicates is there a microchip that stores information which can be used to verify the validity of the membership and authenticate the customer based on a personal identification number (PIN). */
  chipAndPin?: boolean;
  /** Indicates is the membership card is validated through the interface. */
  validationByInterface?: boolean;
}

/** Payment method card validation rules. */
export interface MembershipCardValidationRuleType {
  /**
   * Valid lengths of card number.
   * @minLength 0
   * @maxLength 50
   */
  length?: string;
  /**
   * Valid card number prefix.
   * @minLength 0
   * @maxLength 50
   */
  prefix?: string;
  /** Collection of card number ranges. */
  ranges?: CardRangesType;
  /**
   * Formula used for card validation. Only valid in case of user defined validation.
   * @minLength 0
   * @maxLength 2000
   */
  formula?: string;
  /** Defines rules to be used for membership card validation. */
  rule?: MembershipCardValidationRuleTypeType;
}

/**
 * Card number start and end range.
 * @maxItems 4000
 */
export type CardRangesType = CardRangeType[];

/** Card number start and end range. */
export interface CardRangeType {
  /**
   * Starting range of the card.
   * @minLength 0
   * @maxLength 50
   */
  from?: string;
  /**
   * End range of the card.
   * @minLength 0
   * @maxLength 50
   */
  to?: string;
}

/** Defines rules to be used for card validation. */
export enum MembershipCardValidationRuleTypeType {
  Mod7 = 'Mod7',
  Mod10 = 'Mod10',
  Udef = 'Udef',
  Novalid = 'Novalid',
  Internal = 'Internal',
  External = 'External',
}

/** Card Number is generated using Enrollment Code. */
export enum CardNumberGenerationModeType {
  DefaultSequence = 'DefaultSequence',
  EnrollmentCode = 'EnrollmentCode',
}

/** Type of action that the user wants to attach membership information to the reservation . */
export enum MembershipActionType {
  AutoPopulate = 'AutoPopulate',
  PromptToPopulate = 'PromptToPopulate',
  AlwaysPrompt = 'AlwaysPrompt',
  NoAction = 'NoAction',
}

/** Indicates when the membership information should get attach to the reservation. */
export enum AttachMembershipToReservationRuleType {
  NewReservation = 'NewReservation',
  UpdateReservation = 'UpdateReservation',
  Checkin = 'Checkin',
  Checkout = 'Checkout',
}

/** Type of action that generates membership award points. */
export enum MembershipAwardGenerationMethodType {
  Batch = 'Batch',
  Manual = 'Manual',
  System = 'System',
}

/** Base parent type for membership points comprising common elements between award points and tier points. */
export interface AwardPointsType {
  /** Indicates if points will be displayed for guests who are not members. */
  nonMemberPoints?: boolean;
  /** Award points will be recognized in this number of days following the guest's check out date. The minimum number of days is 3 and the maximum number of days is 60. This delay provides a period of time during which adjustments can be made at the PMS level before awards are uploaded to ORS/OCIS. */
  delayInDays?: number;
  /** Indicates Membership card will be expired if there is no activity on the card for this number of years. */
  yearsToExpire?: number;
  /** Period of points calculation. */
  calendarPeriod?: CalendarPeriodType;
  /** Membership card expiration period. */
  expiryPeriod?: NumberOfYearsType;
  /**
   * Month of Expiry for Calendar
   * @minLength 0
   * @maxLength 10
   */
  expiryMonth?: string;
  /** Months for which the Points accumulated can be redeemed for Rolling period. */
  monthsToAwardPointsExpiry?: number;
  /** Months for which the Points accumulated can be redeemed for Calendar period. */
  awardPointsExpiryDate?: AwardPointsValidityDurationType;
  /** Award redemption threshold */
  awardRedeemThreshold?: number;
  /** Activity Period in months for Rolling. */
  activityPeriodMonths?: number;
  /** Activity Period in years for Calendar. */
  activityPeriodYears?: NumberOfYearsType;
  /** Grace Period in months used for Rolling. */
  gracePeriodMonths?: number;
  /** Grace Period in years used for Calendar. */
  gracePeriodYear?: CalendarGracePeriodType;
  /** Calculate stay points even if the loyalty membership card is not attached. */
  requiredOnStayPeriod?: boolean;
  /** Criteria for detecting exceptions in points calculation. */
  exceptionCriteria?: AwardsExceptionCriteriaType;
}

/** 12 month period based on starting month. */
export enum CalendarPeriodType {
  Calendar = 'Calendar',
  Rolling = 'Rolling',
}

/** Five Year period */
export enum NumberOfYearsType {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
}

/** Five Year period */
export enum AwardPointsValidityDurationType {
  DoNotExpire = 'DoNotExpire',
  SameYear = 'SameYear',
  OneYear = 'OneYear',
  TwoYears = 'TwoYears',
  ThreeYears = 'ThreeYears',
  FourYears = 'FourYears',
  FiveYears = 'FiveYears',
}

/** Five Year period */
export enum CalendarGracePeriodType {
  NoGracePeriod = 'NoGracePeriod',
  OneYear = 'OneYear',
  TwoYears = 'TwoYears',
  ThreeYears = 'ThreeYears',
  FourYears = 'FourYears',
  FiveYears = 'FiveYears',
}

/** Criteria for detecting exceptions in points calculation */
export interface AwardsExceptionCriteriaType {
  /** Exception applied to multiple rooms. */
  multipleRooms?: MultipleRoomsType;
  /** Back to Back stay at a Single Property */
  bBSingleProperty?: boolean;
  /** Back to back stay at a Single Group */
  bBSingleGroup?: boolean;
  /** Cross Membership Back to Back Stays */
  bBCrossMembership?: boolean;
  /** Number of days while awaiting an external accept/reject response file. */
  externalProcessingException?: number;
}

/** Exception rule for 10 Rooms. */
export enum MultipleRoomsType {
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
  Six = 'Six',
  Seven = 'Seven',
  Eight = 'Eight',
  Nine = 'Nine',
  Ten = 'Ten',
}

/** Base parent type for membership points comprising common elements between award points and tier points. */
export interface TierPointsType {
  /** Indicates if points will be displayed for guests who are not members. */
  nonMemberPoints?: boolean;
  /** Date on which the tier management is based. */
  basedOn?: PointsCalculationDateType;
  /**
   * Month for Upgrade/Downgrade in a Calendar Period.
   * @minLength 0
   * @maxLength 10
   */
  tierExpirationMonth?: string;
  /** Requalify on Upgrade */
  requalifyOnUpgrade?: boolean;
  /** Downgrade/Renew the membership level automatically. */
  downgradeRenewalInAutoJob?: boolean;
  /** Upgrade period of points for Rolling period. */
  upgradePeriodRolling?: NumberOfYearsType;
  /** Downgrade period of points for Rolling period. */
  downgradePeriodRolling?: NumberOfYearsType;
  /** Upgrade period of points for Calendar period. */
  upgradePeriodCalendar?: UpgradeDowngradeForCalendarPeriodType;
  /** Downgrade period of points for Calendar period. */
  downgradePeriodCalendar?: UpgradeDowngradeForCalendarPeriodType;
  /** TMR (Tier Management Reset) Level Rules configuration enabled or not. */
  enableTierManagementReset?: boolean;
}

/** Tier Management based on date of transaction */
export enum PointsCalculationDateType {
  ArrivalDate = 'ArrivalDate',
  DepartureDate = 'DepartureDate',
  PostingDate = 'PostingDate',
  TransactionDate = 'TransactionDate',
}

/** Calculate points from five Years */
export enum UpgradeDowngradeForCalendarPeriodType {
  ThisYear = 'ThisYear',
  LastYear = 'LastYear',
  TwoYears = 'TwoYears',
  ThreeYears = 'ThreeYears',
  FourYears = 'FourYears',
  FiveYears = 'FiveYears',
}

/** Membership Type miscellanous settings. */
export interface MembershipTypeAdditionalInfoType {
  /**
   * When enrolling new members, this is the default letter to be sent.
   * @minLength 0
   * @maxLength 80
   */
  enrollmentLetter?: string;
  /**
   * Default membership statement to be sent ad hoc.
   * @minLength 0
   * @maxLength 80
   */
  adhocStatement?: string;
  /**
   * Batch process statement.
   * @minLength 0
   * @maxLength 80
   */
  batchStatement?: string;
  /** Automatically open to allow a web user account to be created. */
  autoWebEnrollment?: boolean;
  /** Automatically update web login. */
  autoUpdateWebLogin?: boolean;
}

/** Represents the way a membership type has to be processed. */
export interface MembershipHandlingType {
  /**
   * Indicates database for external system (if applicable).
   * @minLength 0
   * @maxLength 20
   */
  externalDatabase?: string;
  /** Indicates whether to include membership level for validation or not , when profile membership information is send from External System to ORS/OCIS. */
  levelRequired?: boolean;
  /** True if you wish to be able to select this membership type when creating an export file for fulfillment. */
  fulfillment?: boolean;
  /** Indicates whether to perform profile merge or not. */
  allowCardNumberOverride?: boolean;
  /** Indicates whether Enrollment Code required of not. */
  enrollmentCodeRequired?: boolean;
  /** Indicates whether to store discard membership number or not.Membership Number will be discarded during profile merge. */
  saveCardNumberHistory?: boolean;
  /**
   * Represents Membership Statement UDF Set. Selected Statement UDF template will be attached to Membership.
   * @minLength 0
   * @maxLength 40
   */
  statementUDFSet?: string;
  /**
   * Represents Membership status.This status will be assigned to Guest's profile with membership type.
   * @minLength 0
   * @maxLength 40
   */
  defaultMembershipStatus?: string;
  /** Prevent profile name change. */
  nameProtected?: boolean;
  /** Prevent profile alternate name change. */
  alternateNameProtected?: boolean;
  /** Automatically generate the reference number for the primary membership. */
  autoGenerateReferenceNo?: boolean;
  /** Automatically populate number from name. */
  autoPopulateNumberFromName?: boolean;
  /** Membership card name using the alternate name. */
  nameOnCardFromAltName?: boolean;
  /** Move the membership promotions to the active membership. */
  moveMemPromotions?: boolean;
}

/** Represent Enrollment Match Rule and User Defined Enrollment fields/Attribute configuration for membership type. */
export interface EnrollmentMatchRuleType {
  /**
   * Enrollment Match Rule for Membership Type.
   * @minLength 0
   * @maxLength 4000
   */
  membershipEnrollmentMatchRule?: string;
  /** User Defined Enrollment fields/Attributes for membership type. */
  userDefinedEnrollmentFields?: UserDefinedEnrollmentFieldsType;
  /** Indicates if the Advanced Enrollment is enabled for Membership Type. Advanced Enrollment is required tp apply Membership Enrollment Match Rule and User Defined Enrollment Fields/Attributes. */
  advancedEnrollment?: boolean;
}

/**
 * Type that holds the User Defined Enrollment field/Attribute such as Communication, First Name , Last Name etc.
 * @maxItems 4000
 */
export type UserDefinedEnrollmentFieldsType = UserDefinedEnrollmentFieldType[];

/** User Defined Enrollment Field/Attribute. */
export interface UserDefinedEnrollmentFieldType {
  /** Name of the Field/Attribute such as comunication, birthdate etc. */
  fieldName?: UserDefinedEnrollmentFieldNameType;
  /**
   * Type of the Field/Attribute such as phone, fax, email etc.
   * @minLength 0
   * @maxLength 2000
   */
  fieldType?: string;
  /** Indicates if the Field/Attribute is required for Membership Type. */
  requiredField?: boolean;
  /** Indicates if the Field/Attribute is active for Membership Type. */
  active?: boolean;
}

/** Date of birth field of Membership Type. */
export enum UserDefinedEnrollmentFieldNameType {
  Communication = 'Communication',
  LastName = 'LastName',
  FirstName = 'FirstName',
  Address = 'Address',
  Fee = 'Fee',
  BirthDate = 'BirthDate',
}

/** Response object for fetching Membership Type. */
export interface MembershipTypesDetails {
  /** List of Membership types fetched. */
  membershipTypes?: MembershipTypesType;
  /** Refer to Generic common types document. */
  masterInfoList?: MasterInfoType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing membership type. */
export interface MembershipTypeChangeInstructions {
  /** A collection of MembershipTypes with information that needs to be changed. */
  membershipTypeChangeInstructions?: MembershipTypeChangeInstructionType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Represents the membership type under change . */
export interface MembershipTypeChangeInstructionType {
  /** Membership type details. */
  membershipType?: MembershipTypeType;
  /** Collection of instructions to be returned as a set of membership type information. */
  responseInstructions?: {
    /** @maxItems 4000 */
    responseInstruction?: MembershipTypeInstructionType[];
    /** If this value is set to TRUE, then the operation will only return for a Success or Failed flag. */
    confirmationOnly?: boolean;
  };
}

/** Membership levels. */
export enum MembershipTypeInstructionType {
  PrimaryDetails = 'PrimaryDetails',
  CardNumberDetails = 'CardNumberDetails',
  PointsDetails = 'PointsDetails',
  ExceptionCriteriaDetails = 'ExceptionCriteriaDetails',
  AdditionalDetails = 'AdditionalDetails',
  EnrollmentDetails = 'EnrollmentDetails',
  Levels = 'Levels',
}

/** Response object for fetching Nationalities. */
export interface NationalitiesDetails {
  /** Collection of Nationalities. */
  nationalities?: NationalitiesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Nationalities.
 * @maxItems 4000
 */
export type NationalitiesType = NationalityType[];

/** Contains Common Master configuration detail. */
export interface NationalityType {
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

/** Request object for creating Nationalities. */
export interface NationalitiesCriteria {
  /** Nationalities to be created. */
  nationalities?: NationalitiesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Nationalities. */
export interface NationalitiesToBeChanged {
  /** Nationalities to be changed. */
  nationalities?: NationalitiesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Owner Teams. */
export interface OwnerTeamsDetails {
  /** Collection of Owner Teams. */
  ownerTeams?: OwnerTeamsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Owner Teams.
 * @maxItems 4000
 */
export type OwnerTeamsType = OwnerTeamType[];

/** Contains Common Master configuration detail. */
export interface OwnerTeamType {
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

/** Request object for creating Owner Teams. */
export interface OwnerTeamsCriteria {
  /** Owner Teamsto be created. */
  ownerTeams?: OwnerTeamsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Owner Teams. */
export interface OwnerTeamsToBeChanged {
  /** Owner Teamsto be changed. */
  ownerTeams?: OwnerTeamsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Pay Days. */
export interface PayDaysDetails {
  /** Collection of Pay Days. */
  payDays?: PayDaysType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Pay Days.
 * @maxItems 4000
 */
export type PayDaysType = PayDayType[];

/** Contains Common Master configuration detail. */
export interface PayDayType {
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
  /** To configure the different pay days. */
  inactive?: boolean;
}

/** Request object for creating Pay Days. */
export interface PayDaysCriteria {
  /** Pay Daysto be created. */
  payDays?: PayDaysType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Pay Days. */
export interface PayDaysToBeChanged {
  /** Pay Daysto be changed. */
  payDays?: PayDaysType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching preference groups. */
export interface PreferenceGroups {
  /** Collection of preference groups matching the search criteria. */
  preferenceGroups?: PreferenceGroupsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of preference groups.
 * @maxItems 4000
 */
export type PreferenceGroupsType = PreferenceGroupType[];

/** Preference group identification details. */
export interface PreferenceGroupType {
  /**
   * Code identifying the preference group.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the preference group.
   * @minLength 0
   * @maxLength 40
   */
  description?: string;
  /** When this mandatory reservation is true then user cannot set or change reservation preference flag and also this is a non editable field. SPECIALS AND ROOM FEATURES preference groups will have true for this field */
  mandatoryReservation?: boolean;
  /** Indicates if the preference group can be used in reservations. */
  reservationPreference?: boolean;
  /** Maximum number of preferences which can be created in this preference group. */
  maxQuantity?: number;
  /** Display sequence for the preference group. */
  sequence?: number;
  /** This is a placeholder element for future use. Functionality may not be available for the current implementation. */
  allowSubTypes?: boolean;
}

/** Response object for fetching preferences at the template level. */
export interface TemplatePreferences {
  /** Collection of preferences specified at the template level. */
  templatePreferences?: ConfigTemplatePreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * This type holds a collection of preferences at the template level.
 * @maxItems 4000
 */
export type ConfigTemplatePreferencesType = ConfigTemplatePreferenceType[];

/** Base details common between both template and property level preferences. */
export interface ConfigTemplatePreferenceType {
  /**
   * The description about the preference.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Specifies the preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
  /**
   * This is a placeholder element for future use. Functionality may not be available for the current implementation.
   * @minLength 0
   * @maxLength 20
   */
  preferenceSubGroup?: string;
  /** Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS. */
  housekeeping?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
  /** Specifies whether the preference is to be available for selection at all properties . */
  global?: boolean;
}

/** Request object for copying template preferences to hotel(s). */
export interface PreferencesCopy {
  /** List of the template preferences to be copied to hotel(s). */
  copyInstructions?: ConfigCopyPreferencesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Copy instructions for copying template preferences to hotel(s) */
export interface ConfigCopyPreferencesType {
  /** Hotel codes to copy the template preferences to. */
  hotelCodes?: CodeListType;
  /**
   * Template preference to be copied to the hotel(s).
   * @maxItems 4000
   */
  templatePreferences?: ConfigTemplatePreferenceIDType[];
}

/** Base details common between both template and property level preference ids. */
export interface ConfigTemplatePreferenceIDType {
  /**
   * Specifies the preference code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Specifies the preference group the preference belongs to.
   * @minLength 0
   * @maxLength 20
   */
  preferenceGroup?: string;
}

/** Response object for fetching Profile Inactive Reasons. */
export interface ProfileInactiveReasonsDetails {
  /** Collection of Profile Inactive Reasons. */
  profileInactiveReasons?: ProfileInactiveReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Profile Inactive Reasons.
 * @maxItems 4000
 */
export type ProfileInactiveReasonsType = ProfileInactiveReasonType[];

/** Contains Common Master configuration detail. */
export interface ProfileInactiveReasonType {
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

/** Request object for creating Profile Inactive Reasons. */
export interface ProfileInactiveReasonsCriteria {
  /** Profile Inactive Reasonsto be created. */
  profileInactiveReasons?: ProfileInactiveReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Profile Inactive Reasons. */
export interface ProfileInactiveReasonsToBeChanged {
  /** Profile Inactive Reasonsto be changed. */
  profileInactiveReasons?: ProfileInactiveReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response for fetching Profile names. */
export interface ProfileNameValidations {
  /** Collection of Profile names. */
  profileNames?: ProfileNameValidationsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of the Profile name to be configured or fetched.
 * @maxItems 4000
 */
export type ProfileNameValidationsType = ProfileNameValidationType[];

/** Provides information about the Profile Names. */
export interface ProfileNameValidationType {
  /** Type of the Profile. */
  type?: ProfileNameValidationTypeType;
  /**
   * Name of the Profile.
   * @minLength 0
   * @maxLength 80
   */
  name?: string;
}

/** Simple Type for Profile Name Validations Type. e.g. Company,Travel Agent,Source. */
export enum ProfileNameValidationTypeType {
  Company = 'Company',
  TravelAgent = 'TravelAgent',
  Source = 'Source',
}

/** Request object to edit Profile names. */
export interface ProfileNameValidationsToChange {
  /** Details of the Profile names to edit. */
  profileNames?: ProfileNameValidationEditType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Provides information about the Profile Names. */
export interface ProfileNameValidationEditType {
  /** Type of the Profile. */
  type?: ProfileNameValidationTypeType;
  /**
   * Name of the Profile.
   * @minLength 0
   * @maxLength 80
   */
  name?: string;
  /** List of new values for Profile Name and Type . */
  newProfileName?: ProfileNameValidationType;
}

/** Response object for fetching Profile Restriction Reasons. */
export interface ProfileRestrictionReasonsDetails {
  /** Collection of Profile Restriction Reasons. */
  profileRestrictionReasons?: ProfileRestrictionReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Profile Restriction Reasons.
 * @maxItems 4000
 */
export type ProfileRestrictionReasonsType = ProfileRestrictionReasonType[];

/** Contains Common Master configuration detail. */
export interface ProfileRestrictionReasonType {
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

/** Request object for creating Profile Restriction Reasons. */
export interface ProfileRestrictionReasonsCriteria {
  /** Profile Restriction Reasonsto be created. */
  profileRestrictionReasons?: ProfileRestrictionReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Profile Restriction Reasons. */
export interface ProfileRestrictionReasonsToBeChanged {
  /** Profile Restriction Reasonsto be changed. */
  profileRestrictionReasons?: ProfileRestrictionReasonsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetch profile links */
export interface ProfileLinks {
  /** Holds the collection of profile link objects */
  profileLinks?: ProfileLinksType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Holds the collection of profile link objects
 * @maxItems 4000
 */
export type ProfileLinksType = ProfileLinkType[];

/** ProfileLinksType for create, change and delete */
export interface ProfileLinkType {
  /**
   * From type to process
   * @minLength 0
   * @maxLength 20
   */
  fromType?: string;
  /**
   * To type to process
   * @minLength 0
   * @maxLength 20
   */
  toType?: string;
  /**
   * From code to process
   * @minLength 0
   * @maxLength 20
   */
  fromCode?: string;
  /**
   * To code to process
   * @minLength 0
   * @maxLength 20
   */
  toCode?: string;
  /**
   * The description about from relation
   * @minLength 0
   * @maxLength 2000
   */
  fromDescription?: string;
  /**
   * The description about to relation
   * @minLength 0
   * @maxLength 2000
   */
  toDescription?: string;
  /** Relationship is default relationship or not */
  defaultProfileLink?: boolean;
  /** Relationship is global relationship or not */
  globalProfileLink?: boolean;
  /** Inherit rates will take either to or from */
  inheritRates?: ProfileLinkInheritRates;
  /** Determines whether this code is protected from deleting. This is a read-only element and is only populated during the fetch operation. */
  protected?: boolean;
  /** Determines whether this relationship is hierarchichal or not. */
  hasHierarchy?: boolean;
}

/** Simple type for inherit rates */
export enum ProfileLinkInheritRates {
  From = 'From',
  To = 'To',
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

/** Response object for fetching Sources. */
export interface SourcesDetails {
  /** Collection of Sources. */
  sources?: SourcesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Sources.
 * @maxItems 4000
 */
export type SourcesType = SourceType[];

/** Contains Common Master configuration detail. */
export interface SourceType {
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

/** Request object for creating Sources. */
export interface SourcesCriteria {
  /** Sourcesto be created. */
  sources?: SourcesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Sources. */
export interface SourcesToBeChanged {
  /** Sourcesto be changed. */
  sources?: SourcesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Territories. */
export interface TerritoriesDetails {
  /** Collection of Territories. */
  territories?: TerritoriesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Territories.
 * @maxItems 4000
 */
export type TerritoriesType = TerritoryType[];

/** Contains Common Master configuration detail. */
export interface TerritoryType {
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

/** Request object for creating Territories. */
export interface TerritoriesCriteria {
  /** Territoriesto be created. */
  territories?: TerritoriesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Territories. */
export interface TerritoriesToBeChanged {
  /** Territoriesto be changed. */
  territories?: TerritoriesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Titles. */
export interface TitlesDetails {
  /** Collection of Titles. */
  titles?: TitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Titles.
 * @maxItems 4000
 */
export type TitlesType = TitleType[];

/** Contains Common Master configuration detail. */
export interface TitleType {
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

/** Request object for creating Titles. */
export interface TitlesCriteria {
  /** Titlesto be created. */
  titles?: TitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing Titles. */
export interface TitlesToBeChanged {
  /** Titlesto be changed. */
  titles?: TitlesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching V I P Levels. */
export interface VIPLevelsDetails {
  /** Collection of V I P Levels. */
  vIPLevels?: VIPLevelsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of V I P Levels.
 * @maxItems 4000
 */
export type VIPLevelsType = VIPLevelType[];

/** Contains Common Master configuration detail. */
export interface VIPLevelType {
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
  /** Determines the color of this code. */
  displayColor?: CommonMasterColorType;
  /** AI priority order of this code. */
  ranking?: number;
}

/** Simple type enumeration for Common Master Colors. */
export enum CommonMasterColorType {
  None = 'None',
  Blue = 'Blue',
  Red = 'Red',
  Cyan = 'Cyan',
  Green = 'Green',
  Black = 'Black',
  White = 'White',
  Yellow = 'Yellow',
  Gray = 'Gray',
}

/** Request object for creating V I P Levels. */
export interface VIPLevelsCriteria {
  /** V I P Levelsto be created. */
  vIPLevels?: VIPLevelsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing V I P Levels. */
export interface VIPLevelsToBeChanged {
  /** V I P Levelsto be changed. */
  vIPLevels?: VIPLevelsType;
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
      baseURL: new URL('/crm/config/v1', axiosConfig.baseURL).toString(),
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
 * @title OPERA Cloud CRM Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  accountPriorities = {
    /**
     * @description Use this API to get Account Priorities. <p><strong>OperationId:</strong>getAccountPriorities</p>
     *
     * @tags ChainConfig
     * @name GetAccountPriorities
     * @summary Get Account Priorities
     * @request GET:/accountPriorities
     */
    getAccountPriorities: (
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
      return this.request<AccountPrioritiesDetails, ExceptionDetailType>({
        path: `/accountPriorities`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Account Priorities. <p><strong>OperationId:</strong>postAccountPriorities</p>
     *
     * @tags ChainConfig
     * @name PostAccountPriorities
     * @summary Create Account Priorities
     * @request POST:/accountPriorities
     */
    postAccountPriorities: (
      hotelId: string,
      accountPrioritiesCriteria: AccountPrioritiesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountPriorities`,
        method: 'POST',
        body: accountPrioritiesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Account Priorities. <p><strong>OperationId:</strong>putAccountPriorities</p>
     *
     * @tags ChainConfig
     * @name PutAccountPriorities
     * @summary Change Account Priorities
     * @request PUT:/accountPriorities/{accountPriorityId}
     */
    putAccountPriorities: (
      hotelId: string,
      accountPriorityId: string,
      accountPrioritiesToBeChanged: AccountPrioritiesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountPriorities/${accountPriorityId}`,
        method: 'PUT',
        body: accountPrioritiesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to remove Account Priorities. <p><strong>OperationId:</strong>deleteAccountPriorities</p>
     *
     * @tags ChainConfig
     * @name DeleteAccountPriorities
     * @summary Remove Account Priorities
     * @request DELETE:/accountPriorities/{accountPriorityId}
     */
    deleteAccountPriorities: (hotelId: string, accountPriorityId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountPriorities/${accountPriorityId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  accountTypes = {
    /**
     * @description Use this API to get Account Types. <p><strong>OperationId:</strong>getAccountTypes</p>
     *
     * @tags ChainConfig
     * @name GetAccountTypes
     * @summary Get Account Types
     * @request GET:/accountTypes
     */
    getAccountTypes: (
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
      return this.request<AccountTypesDetails, ExceptionDetailType>({
        path: `/accountTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Account Types. <p><strong>OperationId:</strong>postAccountTypes</p>
     *
     * @tags ChainConfig
     * @name PostAccountTypes
     * @summary Create Account Types
     * @request POST:/accountTypes
     */
    postAccountTypes: (hotelId: string, accountTypesCriteria: AccountTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountTypes`,
        method: 'POST',
        body: accountTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Account Types. <p><strong>OperationId:</strong>putAccountTypes</p>
     *
     * @tags ChainConfig
     * @name PutAccountTypes
     * @summary Change Account Types
     * @request PUT:/accountTypes/{accountTypesId}
     */
    putAccountTypes: (
      hotelId: string,
      accountTypesId: string,
      accountTypesToBeChanged: AccountTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountTypes/${accountTypesId}`,
        method: 'PUT',
        body: accountTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to remove Account Types. <p><strong>OperationId:</strong>deleteAccountTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteAccountTypes
     * @summary Remove Account Types
     * @request DELETE:/accountTypes/{accountTypesId}
     */
    deleteAccountTypes: (hotelId: string, accountTypesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountTypes/${accountTypesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  addressFormats = {
    /**
     * @description You can use this API to get address formats. <p><strong>OperationId:</strong>getAddressFormats</p>
     *
     * @tags ProfileConfiguration
     * @name GetAddressFormats
     * @summary Get address formats
     * @request GET:/addressFormats
     */
    getAddressFormats: (
      hotelId: string,
      query?: {
        /** Codes to be searched. */
        codes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AddressFormats, ExceptionDetailType>({
        path: `/addressFormats`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change address formats. <p><strong>OperationId:</strong>putAddressFormats</p>
     *
     * @tags ProfileConfiguration
     * @name PutAddressFormats
     * @summary Change address formats
     * @request PUT:/addressFormats
     */
    putAddressFormats: (hotelId: string, addressFormats: AddressFormats, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressFormats`,
        method: 'PUT',
        body: addressFormats,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete address formats. <p><strong>OperationId:</strong>deleteAddressFormats</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteAddressFormats
     * @summary Delete address formats
     * @request DELETE:/addressFormats
     */
    deleteAddressFormats: (
      hotelId: string,
      query: {
        formatCodes: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressFormats`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create address formats. <p><strong>OperationId:</strong>postAddressFormats</p>
     *
     * @tags ProfileConfiguration
     * @name PostAddressFormats
     * @summary Create address formats
     * @request POST:/addressFormats
     */
    postAddressFormats: (hotelId: string, addressFormats: AddressFormats, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressFormats`,
        method: 'POST',
        body: addressFormats,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  addressTypes = {
    /**
     * @description Use this API to get Address types. <p><strong>OperationId:</strong>getAddressTypes</p>
     *
     * @tags ChainConfig
     * @name GetAddressTypes
     * @summary Get Address types
     * @request GET:/addressTypes
     */
    getAddressTypes: (
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
      return this.request<AddressTypesDetails, ExceptionDetailType>({
        path: `/addressTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a new Address type. <p><strong>OperationId:</strong>postAddressTypes</p>
     *
     * @tags ChainConfig
     * @name PostAddressTypes
     * @summary Create a new Address type
     * @request POST:/addressTypes
     */
    postAddressTypes: (hotelId: string, addressTypesCriteria: AddressTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressTypes`,
        method: 'POST',
        body: addressTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update an existing Address type. <p><strong>OperationId:</strong>putAddressTypes</p>
     *
     * @tags ChainConfig
     * @name PutAddressTypes
     * @summary Change an existing Address type
     * @request PUT:/addressTypes/{addressTypeId}
     */
    putAddressTypes: (
      hotelId: string,
      addressTypeId: string,
      addressTypesToBeChanged: AddressTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressTypes/${addressTypeId}`,
        method: 'PUT',
        body: addressTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete an existing Address type. <p><strong>OperationId:</strong>deleteAddressTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteAddressTypes
     * @summary Delete an existing Address type
     * @request DELETE:/addressTypes/{addressTypeId}
     */
    deleteAddressTypes: (hotelId: string, addressTypeId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/addressTypes/${addressTypeId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  alternateLanguages = {
    /**
     * @description Use this API to get Alternate Language Guest Titles. <p><strong>OperationId:</strong>getAlternateLanguageGuestTitles</p>
     *
     * @tags ChainConfig
     * @name GetAlternateLanguageGuestTitles
     * @summary Get Alternate Language Guest Titles
     * @request GET:/alternateLanguages
     */
    getAlternateLanguageGuestTitles: (
      hotelId: string,
      query?: {
        codes?: string[];
        titleCodes?: string[];
        /** Description of the Guest Title. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AlternateLanguageGuestTitlesDetails, ExceptionDetailType>({
        path: `/alternateLanguages`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Alternate Language Guest Titles. <p><strong>OperationId:</strong>postAlternateLanguageGuestTitles</p>
     *
     * @tags ChainConfig
     * @name PostAlternateLanguageGuestTitles
     * @summary Create Alternate Language Guest Titles
     * @request POST:/alternateLanguages
     */
    postAlternateLanguageGuestTitles: (
      hotelId: string,
      alternateLanguageGuestTitlesCriteria: AlternateLanguageGuestTitlesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/alternateLanguages`,
        method: 'POST',
        body: alternateLanguageGuestTitlesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to modify Alternate Language Guest Titles. <p><strong>OperationId:</strong>changeAlternateLanguageGuestTitles</p>
     *
     * @tags ChainConfig
     * @name ChangeAlternateLanguageGuestTitles
     * @summary Change Alternate Language Guest Titles
     * @request PUT:/alternateLanguages/{guestTitlesCode}
     */
    changeAlternateLanguageGuestTitles: (
      hotelId: string,
      guestTitlesCode: string,
      alternateLanguageGuestTitlesToBeChanged: AlternateLanguageGuestTitlesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/alternateLanguages/${guestTitlesCode}`,
        method: 'PUT',
        body: alternateLanguageGuestTitlesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Alternate Language Guest Titles. <p><strong>OperationId:</strong>removeAlternateLanguageGuestTitles</p>
     *
     * @tags ChainConfig
     * @name RemoveAlternateLanguageGuestTitles
     * @summary Delete Alternate Language Guest Titles
     * @request DELETE:/alternateLanguages/{guestTitlesCode}
     */
    removeAlternateLanguageGuestTitles: (
      hotelId: string,
      guestTitlesCode: string,
      query?: {
        /** Language code of the Guest Title. */
        languageCode?: string[];
        /** Title Type for advanced title configuration. */
        titleTypes?: number[];
        /** Description of the Guest Title. */
        titleDescription?: string[];
        /** Business Title for advanced title configuration. */
        greeting?: string[];
        /** Guest Title record sequence number. */
        displayOrder?: number[];
        /** Description of the Guest Title. */
        newTitleType?: number[];
        /** Description of the Guest Title. */
        newLanguageCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/alternateLanguages/${guestTitlesCode}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  businessSegments = {
    /**
     * @description Use this API to get Business Segments. <p><strong>OperationId:</strong>getBusinessSegments</p>
     *
     * @tags ChainConfig
     * @name GetBusinessSegments
     * @summary Get Business Segments
     * @request GET:/businessSegments
     */
    getBusinessSegments: (
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
      return this.request<BusinessSegmentsDetails, ExceptionDetailType>({
        path: `/businessSegments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Business Segments. <p><strong>OperationId:</strong>postBusinessSegments</p>
     *
     * @tags ChainConfig
     * @name PostBusinessSegments
     * @summary Create Business Segments
     * @request POST:/businessSegments
     */
    postBusinessSegments: (
      hotelId: string,
      businessSegmentsCriteria: BusinessSegmentsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/businessSegments`,
        method: 'POST',
        body: businessSegmentsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Business Segments. <p><strong>OperationId:</strong>changeBusinessSegments</p>
     *
     * @tags ChainConfig
     * @name ChangeBusinessSegments
     * @summary Change Business Segments
     * @request PUT:/businessSegments/{businessSegmentCode}
     */
    changeBusinessSegments: (
      hotelId: string,
      businessSegmentCode: string,
      businessSegmentsToBeChanged: BusinessSegmentsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/businessSegments/${businessSegmentCode}`,
        method: 'PUT',
        body: businessSegmentsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Business Segments. <p><strong>OperationId:</strong>removeBusinessSegments</p>
     *
     * @tags ChainConfig
     * @name RemoveBusinessSegments
     * @summary Delete Business Segments
     * @request DELETE:/businessSegments/{businessSegmentCode}
     */
    removeBusinessSegments: (hotelId: string, businessSegmentCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/businessSegments/${businessSegmentCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  cityPostalCodes = {
    /**
     * @description Use this API to get City Postal Codes. Associate countries (and states or provinces if configured for the country) with cities and with postal codes can be utilized to validate addresses.<p><strong>OperationId:</strong>getCityPostalCodes</p>
     *
     * @tags ChainConfig
     * @name GetCityPostalCodes
     * @summary Get city postal codes
     * @request GET:/cityPostalCodes
     */
    getCityPostalCodes: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** The start range of the postal codes valid for the particular country/state/territory/city/postal code combination. */
        postalCodeFrom?: string;
        /** The end range of the postal codes valid for the particular country/state/territory/city/postal code combination. */
        postalCodeTo?: string;
        /** The name of the city to search for city and postal codes. */
        cityWildCard?: string;
        /** Codes to be searched. */
        codes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Codes to be searched. */
        stateCodes?: string[];
        /** Wildcard search on the code. */
        stateWildCard?: string;
        /** Codes to be searched. */
        territoryCodes?: string[];
        /** Wildcard search on the code. */
        territoryWildCard?: string;
        /** Codes to be searched. */
        districtCodes?: string[];
        /** Wildcard search on the code. */
        districtWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CityPostalCodesDetails, ExceptionDetailType>({
        path: `/cityPostalCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create City Postal Codes. <p><strong>OperationId:</strong>postCityPostalCodes</p>
     *
     * @tags ChainConfig
     * @name PostCityPostalCodes
     * @summary Create CityPostalCodes
     * @request POST:/cityPostalCodes
     */
    postCityPostalCodes: (
      hotelId: string,
      cityPostalCodesCriteria: CityPostalCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/cityPostalCodes`,
        method: 'POST',
        body: cityPostalCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update City Postal Codes. <p><strong>OperationId:</strong>changeCityPostalCodes</p>
     *
     * @tags ChainConfig
     * @name ChangeCityPostalCodes
     * @summary Change City Postal Codes
     * @request PUT:/cityPostalCodes/{postalCode}
     */
    changeCityPostalCodes: (
      hotelId: string,
      postalCode: string,
      cityPostalCodesToBeChanged: CityPostalCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/cityPostalCodes/${postalCode}`,
        method: 'PUT',
        body: cityPostalCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete City Postal Codes. <p><strong>OperationId:</strong>removeCityPostalCodes</p>
     *
     * @tags ChainConfig
     * @name RemoveCityPostalCodes
     * @summary Delete City Postal Codes
     * @request DELETE:/cityPostalCodes/{postalCode}
     */
    removeCityPostalCodes: (hotelId: string, postalCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/cityPostalCodes/${postalCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  communicationTypes = {
    /**
     * @description Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
     *
     * @tags HotelConfig
     * @name GetCommunicationTypes
     * @summary Get communication types
     * @request GET:/communicationTypes
     */
    getCommunicationTypes: (
      hotelId: string,
      query?: {
        codes?: string[];
        /**
         * Phone Number Communication Role.
         * @uniqueItems true
         */
        roles?: ('Email' | 'Fax' | 'EmailForRequest' | 'Webpage' | 'Phone')[];
        /** Description of the Communication Types to be searched. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CommunicationTypesDetails, ExceptionDetailType>({
        path: `/communicationTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
     *
     * @tags HotelConfig
     * @name PostCommunicationType
     * @summary Create a  communication type
     * @request POST:/communicationTypes
     */
    postCommunicationType: (
      hotelId: string,
      communicationTypeCriteria: CommunicationTypeCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/communicationTypes`,
        method: 'POST',
        body: communicationTypeCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
     *
     * @tags HotelConfig
     * @name RemoveCommunicationType
     * @summary Delete a communication type
     * @request DELETE:/communicationTypes/{communicationTypeCode}
     */
    removeCommunicationType: (hotelId: string, communicationTypeCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/communicationTypes/${communicationTypeCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
     *
     * @tags HotelConfig
     * @name ChangeCommunicationType
     * @summary Change a  communication type
     * @request PUT:/communicationTypes/{communicationTypeCode}
     */
    changeCommunicationType: (
      hotelId: string,
      communicationTypeCode: string,
      communicationTypeToBeChanged: CommunicationTypeToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/communicationTypes/${communicationTypeCode}`,
        method: 'PUT',
        body: communicationTypeToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  companyTypes = {
    /**
     * @description Use this API to get Company Types. <p><strong>OperationId:</strong>getCompanyTypes</p>
     *
     * @tags ChainConfig
     * @name GetCompanyTypes
     * @summary Get Company Types
     * @request GET:/companyTypes
     */
    getCompanyTypes: (
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
      return this.request<CompanyTypesDetails, ExceptionDetailType>({
        path: `/companyTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Company Types. <p><strong>OperationId:</strong>postCompanyTypes</p>
     *
     * @tags ChainConfig
     * @name PostCompanyTypes
     * @summary Create Company Types
     * @request POST:/companyTypes
     */
    postCompanyTypes: (hotelId: string, companyTypesCriteria: CompanyTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/companyTypes`,
        method: 'POST',
        body: companyTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Company Types. <p><strong>OperationId:</strong>putCompanyTypes</p>
     *
     * @tags ChainConfig
     * @name PutCompanyTypes
     * @summary Change Company Types
     * @request PUT:/companyTypes/{companyTypesCode}
     */
    putCompanyTypes: (
      hotelId: string,
      companyTypesCode: string,
      companyTypesToBeChanged: CompanyTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/companyTypes/${companyTypesCode}`,
        method: 'PUT',
        body: companyTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Company Types. <p><strong>OperationId:</strong>deleteCompanyTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteCompanyTypes
     * @summary Delete Company Types
     * @request DELETE:/companyTypes/{companyTypesCode}
     */
    deleteCompanyTypes: (hotelId: string, companyTypesCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/companyTypes/${companyTypesCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  competitionCodes = {
    /**
     * @description Use this API to get Competition Codes.  Competition codes enable you to identify other hospitality businesses that are competing with you for an account&apos;s business opportunities.<p><strong>OperationId:</strong>getCompetitionCodes</p>
     *
     * @tags ChainConfig
     * @name GetCompetitionCodes
     * @summary Get competition codes
     * @request GET:/competitionCodes
     */
    getCompetitionCodes: (
      hotelId: string,
      query: {
        /**
         * Determines wether to fetch inactive records or not.
         * @default "false"
         */
        fetchInactive: boolean;
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
      return this.request<CompetitionCodesDetails, ExceptionDetailType>({
        path: `/competitionCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Competition Codes. Competition codes enable you to identify other hospitality businesses that are competing with you for an account&apos;s business opportunities.<p><strong>OperationId:</strong>postCompetitionCodes</p>
     *
     * @tags ChainConfig
     * @name PostCompetitionCodes
     * @summary Create competition codes
     * @request POST:/competitionCodes
     */
    postCompetitionCodes: (
      hotelId: string,
      competitionCodesCriteria: CompetitionCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/competitionCodes`,
        method: 'POST',
        body: competitionCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Competition Codes. <p><strong>OperationId:</strong>putCompetitionCodes</p>
     *
     * @tags ChainConfig
     * @name PutCompetitionCodes
     * @summary Change Competition Codes
     * @request PUT:/competitionCodes/{competitionCodesId}
     */
    putCompetitionCodes: (
      hotelId: string,
      competitionCodesId: string,
      competitionCodesToBeChanged: CompetitionCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/competitionCodes/${competitionCodesId}`,
        method: 'PUT',
        body: competitionCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to remove Competition Codes. <p><strong>OperationId:</strong>deleteCompetitionCodes</p>
     *
     * @tags ChainConfig
     * @name DeleteCompetitionCodes
     * @summary Remove Competition Codes
     * @request DELETE:/competitionCodes/{competitionCodesId}
     */
    deleteCompetitionCodes: (hotelId: string, competitionCodesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/competitionCodes/${competitionCodesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  creditRatings = {
    /**
     * @description You can use this API to get credit ratings. <p><strong>OperationId:</strong>getCreditRatings</p>
     *
     * @tags ProfileConfiguration
     * @name GetCreditRatings
     * @summary Get credit ratings
     * @request GET:/creditRatings
     */
    getCreditRatings: (
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
      return this.request<CreditRatings, ExceptionDetailType>({
        path: `/creditRatings`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change credit ratings. <p><strong>OperationId:</strong>putCreditRatings</p>
     *
     * @tags ProfileConfiguration
     * @name PutCreditRatings
     * @summary Change credit ratings
     * @request PUT:/creditRatings
     */
    putCreditRatings: (hotelId: string, creditRatings: CreditRatings, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/creditRatings`,
        method: 'PUT',
        body: creditRatings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete credit ratings. <p><strong>OperationId:</strong>deleteCreditRatings</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteCreditRatings
     * @summary Delete credit ratings
     * @request DELETE:/creditRatings
     */
    deleteCreditRatings: (
      hotelId: string,
      query: {
        creditRatings: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/creditRatings`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create credit ratings. <p><strong>OperationId:</strong>postCreditRatings</p>
     *
     * @tags ProfileConfiguration
     * @name PostCreditRatings
     * @summary Create credit ratings
     * @request POST:/creditRatings
     */
    postCreditRatings: (hotelId: string, creditRatings: CreditRatings, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/creditRatings`,
        method: 'POST',
        body: creditRatings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  distanceTypes = {
    /**
     * @description Use this API to get Distance Types. <p><strong>OperationId:</strong>getDistanceTypes</p>
     *
     * @tags ChainConfig
     * @name GetDistanceTypes
     * @summary Get Distance Types
     * @request GET:/distanceTypes
     */
    getDistanceTypes: (
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
      return this.request<DistanceTypesDetails, ExceptionDetailType>({
        path: `/distanceTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Distance Types. <p><strong>OperationId:</strong>postDistanceTypes</p>
     *
     * @tags ChainConfig
     * @name PostDistanceTypes
     * @summary Create Distance Types
     * @request POST:/distanceTypes
     */
    postDistanceTypes: (hotelId: string, distanceTypesCriteria: DistanceTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/distanceTypes`,
        method: 'POST',
        body: distanceTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Distance Types. <p><strong>OperationId:</strong>putDistanceTypes</p>
     *
     * @tags ChainConfig
     * @name PutDistanceTypes
     * @summary Change Distance Types
     * @request PUT:/distanceTypes/{distanceTypesId}
     */
    putDistanceTypes: (
      hotelId: string,
      distanceTypesId: string,
      distanceTypesToBeChanged: DistanceTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/distanceTypes/${distanceTypesId}`,
        method: 'PUT',
        body: distanceTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Distance Types. <p><strong>OperationId:</strong>deleteDistanceTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteDistanceTypes
     * @summary Delete Distance Types
     * @request DELETE:/distanceTypes/{distanceTypesId}
     */
    deleteDistanceTypes: (hotelId: string, distanceTypesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/distanceTypes/${distanceTypesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  districts = {
    /**
     * @description Use this API to get Districts. <p><strong>OperationId:</strong>getDistricts</p>
     *
     * @tags ChainConfig
     * @name GetDistricts
     * @summary Get Districts
     * @request GET:/districts
     */
    getDistricts: (
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
      return this.request<DistrictsDetails, ExceptionDetailType>({
        path: `/districts`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Districts. <p><strong>OperationId:</strong>postDistricts</p>
     *
     * @tags ChainConfig
     * @name PostDistricts
     * @summary Create Districts
     * @request POST:/districts
     */
    postDistricts: (hotelId: string, districtsCriteria: DistrictsCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/districts`,
        method: 'POST',
        body: districtsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Districts. <p><strong>OperationId:</strong>putDistricts</p>
     *
     * @tags ChainConfig
     * @name PutDistricts
     * @summary Change Districts
     * @request PUT:/districts/{districtsId}
     */
    putDistricts: (
      hotelId: string,
      districtsId: string,
      districtsToBeChanged: DistrictsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/districts/${districtsId}`,
        method: 'PUT',
        body: districtsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Districts. <p><strong>OperationId:</strong>deleteDistricts</p>
     *
     * @tags ChainConfig
     * @name DeleteDistricts
     * @summary Delete Districts
     * @request DELETE:/districts/{districtsId}
     */
    deleteDistricts: (hotelId: string, districtsId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/districts/${districtsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  exclusivePreferences = {
    /**
     * @description You can use this API to get template Exclusive Preferences. <p><strong>OperationId:</strong>getTemplateExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name GetTemplateExclusivePreferences
     * @summary Get template Exclusive Preferences
     * @request GET:/exclusivePreferences
     */
    getTemplateExclusivePreferences: (
      hotelId: string,
      query?: {
        exclusivePreferenceCodes?: string[];
        preferenceGroupsCodes?: string[];
        preferenceCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<TemplateExclusivePreferences, ExceptionDetailType>({
        path: `/exclusivePreferences`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change template Exclusive Preferences. <p><strong>OperationId:</strong>putTemplateExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PutTemplateExclusivePreferences
     * @summary Change template Exclusive Preferences
     * @request PUT:/exclusivePreferences
     */
    putTemplateExclusivePreferences: (
      hotelId: string,
      templateExclusivePreferences: TemplateExclusivePreferences,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/exclusivePreferences`,
        method: 'PUT',
        body: templateExclusivePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete template Exclusive Preferences. <p><strong>OperationId:</strong>deleteTemplateExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteTemplateExclusivePreferences
     * @summary Delete template Exclusive Preferences
     * @request DELETE:/exclusivePreferences
     */
    deleteTemplateExclusivePreferences: (
      hotelId: string,
      query: {
        /** Specifies the Exclusive preference code. */
        exclusivePreferenceCode: string;
        /** Specifies the preference group the Exclusive preference belongs to. */
        exclusivePreferenceGroup: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/exclusivePreferences`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create template Exclusive Preferences. <p><strong>OperationId:</strong>postTemplateExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PostTemplateExclusivePreferences
     * @summary Create template Exclusive Preferences
     * @request POST:/exclusivePreferences
     */
    postTemplateExclusivePreferences: (
      hotelId: string,
      templateExclusivePreferences: TemplateExclusivePreferences,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/exclusivePreferences`,
        method: 'POST',
        body: templateExclusivePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to copy Exclusive Preferences. <p><strong>OperationId:</strong>copyExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name CopyExclusivePreferences
     * @summary Copy Exclusive Preferences
     * @request PUT:/exclusivePreferences/copy
     */
    copyExclusivePreferences: (
      hotelId: string,
      exclusivePreferencesCopy: ExclusivePreferencesCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/exclusivePreferences/copy`,
        method: 'PUT',
        body: exclusivePreferencesCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  fiscalAgentTypes = {
    /**
     * @description Use this API to get Travel Agent Types. <p><strong>OperationId:</strong>getTravelAgentTypes</p>
     *
     * @tags ChainConfig
     * @name GetTravelAgentTypes
     * @summary Get Travel Agent Types
     * @request GET:/fiscalAgentTypes
     */
    getTravelAgentTypes: (
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
      return this.request<TravelAgentTypesDetails, ExceptionDetailType>({
        path: `/fiscalAgentTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Travel Agent Types. <p><strong>OperationId:</strong>postTravelAgentTypes</p>
     *
     * @tags ChainConfig
     * @name PostTravelAgentTypes
     * @summary Create Travel Agent Types
     * @request POST:/fiscalAgentTypes
     */
    postTravelAgentTypes: (
      hotelId: string,
      travelAgentTypesCriteria: TravelAgentTypesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/fiscalAgentTypes`,
        method: 'POST',
        body: travelAgentTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Travel Agent Types. <p><strong>OperationId:</strong>changeTravelAgentTypes</p>
     *
     * @tags ChainConfig
     * @name ChangeTravelAgentTypes
     * @summary Change Travel Agent Types
     * @request PUT:/fiscalAgentTypes/{fiscalAgentTypeCode}
     */
    changeTravelAgentTypes: (
      hotelId: string,
      fiscalAgentTypeCode: string,
      travelAgentTypesToBeChanged: TravelAgentTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/fiscalAgentTypes/${fiscalAgentTypeCode}`,
        method: 'PUT',
        body: travelAgentTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Travel Agent Types. <p><strong>OperationId:</strong>removeTravelAgentTypes</p>
     *
     * @tags ChainConfig
     * @name RemoveTravelAgentTypes
     * @summary Delete Travel Agent Types
     * @request DELETE:/fiscalAgentTypes/{fiscalAgentTypeCode}
     */
    removeTravelAgentTypes: (hotelId: string, fiscalAgentTypeCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/fiscalAgentTypes/${fiscalAgentTypeCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  guestStatuses = {
    /**
     * @description Use this API to get Guest Statuses. <p><strong>OperationId:</strong>getGuestStatuses</p>
     *
     * @tags ChainConfig
     * @name GetGuestStatuses
     * @summary Get Guest Statuses
     * @request GET:/guestStatuses
     */
    getGuestStatuses: (
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
      return this.request<GuestStatusesDetails, ExceptionDetailType>({
        path: `/guestStatuses`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Guest Statuses. <p><strong>OperationId:</strong>postGuestStatuses</p>
     *
     * @tags ChainConfig
     * @name PostGuestStatuses
     * @summary Create Guest Statuses
     * @request POST:/guestStatuses
     */
    postGuestStatuses: (hotelId: string, guestStatusesCriteria: GuestStatusesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestStatuses`,
        method: 'POST',
        body: guestStatusesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Guest Statuses. <p><strong>OperationId:</strong>changeGuestStatuses</p>
     *
     * @tags ChainConfig
     * @name ChangeGuestStatuses
     * @summary Change Guest Statuses
     * @request PUT:/guestStatuses/{guestStatusCode}
     */
    changeGuestStatuses: (
      hotelId: string,
      guestStatusCode: string,
      guestStatusesToBeChanged: GuestStatusesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestStatuses/${guestStatusCode}`,
        method: 'PUT',
        body: guestStatusesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Guest Statuses. <p><strong>OperationId:</strong>removeGuestStatuses</p>
     *
     * @tags ChainConfig
     * @name RemoveGuestStatuses
     * @summary Delete Guest Statuses
     * @request DELETE:/guestStatuses/{guestStatusCode}
     */
    removeGuestStatuses: (hotelId: string, guestStatusCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestStatuses/${guestStatusCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  guestTitles = {
    /**
     * @description Use this API to get Guest Titles. <p><strong>OperationId:</strong>getGuestTitles</p>
     *
     * @tags ChainConfig
     * @name GetGuestTitles
     * @summary Get Guest Titles
     * @request GET:/guestTitles
     */
    getGuestTitles: (
      hotelId: string,
      query?: {
        codes?: string[];
        titleCodes?: string[];
        /** Description of the Guest Title. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<GuestTitlesDetails, ExceptionDetailType>({
        path: `/guestTitles`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Guest Titles. <p><strong>OperationId:</strong>postGuestTitles</p>
     *
     * @tags ChainConfig
     * @name PostGuestTitles
     * @summary Create Guest Titles
     * @request POST:/guestTitles
     */
    postGuestTitles: (hotelId: string, guestTitlesCriteria: GuestTitlesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestTitles`,
        method: 'POST',
        body: guestTitlesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  guestTypes = {
    /**
     * @description Use this API to get Guest Types. <p><strong>OperationId:</strong>getGuestTypes</p>
     *
     * @tags ChainConfig
     * @name GetGuestTypes
     * @summary Get Guest Types
     * @request GET:/guestTypes
     */
    getGuestTypes: (
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
      return this.request<GuestTypesDetails, ExceptionDetailType>({
        path: `/guestTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Guest Types. <p><strong>OperationId:</strong>postGuestTypes</p>
     *
     * @tags ChainConfig
     * @name PostGuestTypes
     * @summary Create Guest Types
     * @request POST:/guestTypes
     */
    postGuestTypes: (hotelId: string, guestTypesCriteria: GuestTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestTypes`,
        method: 'POST',
        body: guestTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Guest Types. <p><strong>OperationId:</strong>changeGuestTypes</p>
     *
     * @tags ChainConfig
     * @name ChangeGuestTypes
     * @summary Change Guest Types
     * @request PUT:/guestTypes/{guestTypeCode}
     */
    changeGuestTypes: (
      hotelId: string,
      guestTypeCode: string,
      guestTypesToBeChanged: GuestTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestTypes/${guestTypeCode}`,
        method: 'PUT',
        body: guestTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Guest Types. <p><strong>OperationId:</strong>removeGuestTypes</p>
     *
     * @tags ChainConfig
     * @name RemoveGuestTypes
     * @summary Delete Guest Types
     * @request DELETE:/guestTypes/{guestTypeCode}
     */
    removeGuestTypes: (hotelId: string, guestTypeCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/guestTypes/${guestTypeCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  hotels = {
    /**
     * @description Use this API to get Ecertificate Location Types. <p><strong>OperationId:</strong>getEcertificateLocationTypes</p>
     *
     * @tags ChainConfig
     * @name GetEcertificateLocationTypes
     * @summary Get Ecertificate Location Types
     * @request GET:/hotels/{hotelId}/eCertificateLocationTypes
     */
    getEcertificateLocationTypes: (
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
      return this.request<EcertificateLocationTypesDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/eCertificateLocationTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Ecertificate Location Types. <p><strong>OperationId:</strong>postEcertificateLocationTypes</p>
     *
     * @tags ChainConfig
     * @name PostEcertificateLocationTypes
     * @summary Create Ecertificate Location Types
     * @request POST:/hotels/{hotelId}/eCertificateLocationTypes
     */
    postEcertificateLocationTypes: (
      hotelId: string,
      ecertificateLocationTypesCriteria: EcertificateLocationTypesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/eCertificateLocationTypes`,
        method: 'POST',
        body: ecertificateLocationTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to get Exclusive preferences at hotel Level. <p><strong>OperationId:</strong>getExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name GetExclusivePreferences
     * @summary Get Exclusive preferences
     * @request GET:/hotels/{hotelId}/exclusivePreferences
     */
    getExclusivePreferences: (
      hotelId: string,
      query?: {
        exclusivePreferenceCodes?: string[];
        preferenceGroupsCodes?: string[];
        preferenceCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ExclusivePreferences, ExceptionDetailType>({
        path: `/hotels/${hotelId}/exclusivePreferences`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>putExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PutExclusivePreferences
     * @summary Change Exclusive Preferences
     * @request PUT:/hotels/{hotelId}/exclusivePreferences
     */
    putExclusivePreferences: (
      hotelId: string,
      exclusivePreferences: ExclusivePreferences,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/exclusivePreferences`,
        method: 'PUT',
        body: exclusivePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>deleteExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteExclusivePreferences
     * @summary Delete Exclusive Preferences
     * @request DELETE:/hotels/{hotelId}/exclusivePreferences
     */
    deleteExclusivePreferences: (
      hotelId: string,
      query: {
        /** Specifies the Exclusive preference code. */
        exclusivePreferenceCode: string;
        /** Specifies the preference group the Exclusive preference belongs to. */
        exclusivePreferenceGroup: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/exclusivePreferences`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>postExclusivePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PostExclusivePreferences
     * @summary Create Exclusive Preferences
     * @request POST:/hotels/{hotelId}/exclusivePreferences
     */
    postExclusivePreferences: (
      hotelId: string,
      exclusivePreferences: ExclusivePreferences,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/exclusivePreferences`,
        method: 'POST',
        body: exclusivePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get all configured guest preferences. Use preference grouping code or preference code to narrow down the results.<p><strong>OperationId:</strong>getPreferences</p>
     *
     * @tags ProfileConfiguration
     * @name GetPreferences
     * @summary Get preferences
     * @request GET:/hotels/{hotelId}/preferences
     */
    getPreferences: (
      hotelId: string,
      query?: {
        preferenceCodes?: string[];
        preferenceGroupsCodes?: string[];
        createdByUserIds?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<HotelPreferences, ExceptionDetailType>({
        path: `/hotels/${hotelId}/preferences`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update and change existing preferences. <p><strong>OperationId:</strong>putPreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PutPreferences
     * @summary Change preferences
     * @request PUT:/hotels/{hotelId}/preferences
     */
    putPreferences: (hotelId: string, hotelPreferences: HotelPreferences, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/preferences`,
        method: 'PUT',
        body: hotelPreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete preferences. <p><strong>OperationId:</strong>deletePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name DeletePreferences
     * @summary Delete preferences
     * @request DELETE:/hotels/{hotelId}/preferences
     */
    deletePreferences: (
      hotelId: string,
      query: {
        /** Specifies the preference code. */
        preferenceCode: string;
        /** Specifies the preference group the preference belongs to. */
        preferenceGroup: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/preferences`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This will allow you to create new preferences. <p><strong>OperationId:</strong>postPreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PostPreferences
     * @summary Create preferences
     * @request POST:/hotels/{hotelId}/preferences
     */
    postPreferences: (hotelId: string, hotelPreferences: HotelPreferences, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/preferences`,
        method: 'POST',
        body: hotelPreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  identificationTypes = {
    /**
     * @description Use this API to get Identification Types such as passport, driver license, military ID, and so on.<p><strong>OperationId:</strong>getIdentificationTypes</p>
     *
     * @tags ChainConfig
     * @name GetIdentificationTypes
     * @summary Get identification types
     * @request GET:/identificationTypes
     */
    getIdentificationTypes: (
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
      return this.request<IdentificationTypesDetails, ExceptionDetailType>({
        path: `/identificationTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Identification Types. <p><strong>OperationId:</strong>postIdentificationTypes</p>
     *
     * @tags ChainConfig
     * @name PostIdentificationTypes
     * @summary Create Identification Types
     * @request POST:/identificationTypes
     */
    postIdentificationTypes: (
      hotelId: string,
      identificationTypesCriteria: IdentificationTypesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/identificationTypes`,
        method: 'POST',
        body: identificationTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Identification Types. <p><strong>OperationId:</strong>putIdentificationTypes</p>
     *
     * @tags ChainConfig
     * @name PutIdentificationTypes
     * @summary Change Identification Types
     * @request PUT:/identificationTypes/{identificationTypesId}
     */
    putIdentificationTypes: (
      hotelId: string,
      identificationTypesId: string,
      identificationTypesToBeChanged: IdentificationTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/identificationTypes/${identificationTypesId}`,
        method: 'PUT',
        body: identificationTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Identification Types. <p><strong>OperationId:</strong>deleteIdentificationTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteIdentificationTypes
     * @summary Delete Identification Types
     * @request DELETE:/identificationTypes/{identificationTypesId}
     */
    deleteIdentificationTypes: (hotelId: string, identificationTypesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/identificationTypes/${identificationTypesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  immigrationStatuses = {
    /**
     * @description Use this API to get Immigration Statuses. <p><strong>OperationId:</strong>getImmigrationStatuses</p>
     *
     * @tags ChainConfig
     * @name GetImmigrationStatuses
     * @summary Get Immigration Statuses
     * @request GET:/immigrationStatuses
     */
    getImmigrationStatuses: (
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
      return this.request<ImmigrationStatusesDetails, ExceptionDetailType>({
        path: `/immigrationStatuses`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Immigration Statuses. <p><strong>OperationId:</strong>changeImmigrationStatuses</p>
     *
     * @tags ChainConfig
     * @name ChangeImmigrationStatuses
     * @summary Change Immigration Statuses
     * @request PUT:/immigrationStatuses/{immigrationStatusCode}
     */
    changeImmigrationStatuses: (
      hotelId: string,
      immigrationStatusCode: string,
      immigrationStatusesToBeChanged: ImmigrationStatusesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/immigrationStatuses/${immigrationStatusCode}`,
        method: 'PUT',
        body: immigrationStatusesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Immigration Statuses. <p><strong>OperationId:</strong>removeImmigrationStatuses</p>
     *
     * @tags ChainConfig
     * @name RemoveImmigrationStatuses
     * @summary Delete Immigration Statuses
     * @request DELETE:/immigrationStatuses/{immigrationStatusCode}
     */
    removeImmigrationStatuses: (hotelId: string, immigrationStatusCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/immigrationStatuses/${immigrationStatusCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  industryCodes = {
    /**
     * @description Use this API to get Industry Codes. <p><strong>OperationId:</strong>getIndustryCodes</p>
     *
     * @tags ChainConfig
     * @name GetIndustryCodes
     * @summary Get Industry Codes
     * @request GET:/industryCodes
     */
    getIndustryCodes: (
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
      return this.request<IndustryCodesDetails, ExceptionDetailType>({
        path: `/industryCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Industry Codes. <p><strong>OperationId:</strong>postIndustryCodes</p>
     *
     * @tags ChainConfig
     * @name PostIndustryCodes
     * @summary Create Industry Codes
     * @request POST:/industryCodes
     */
    postIndustryCodes: (hotelId: string, industryCodesCriteria: IndustryCodesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/industryCodes`,
        method: 'POST',
        body: industryCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Industry Codes. <p><strong>OperationId:</strong>putIndustryCodes</p>
     *
     * @tags ChainConfig
     * @name PutIndustryCodes
     * @summary Change Industry Codes
     * @request PUT:/industryCodes/{industryCodesId}
     */
    putIndustryCodes: (
      hotelId: string,
      industryCodesId: string,
      industryCodesToBeChanged: IndustryCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/industryCodes/${industryCodesId}`,
        method: 'PUT',
        body: industryCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Industry Codes. <p><strong>OperationId:</strong>deleteIndustryCodes</p>
     *
     * @tags ChainConfig
     * @name DeleteIndustryCodes
     * @summary Delete Industry Codes
     * @request DELETE:/industryCodes/{industryCodesId}
     */
    deleteIndustryCodes: (hotelId: string, industryCodesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/industryCodes/${industryCodesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  influenceCodes = {
    /**
     * @description Use this API to get Influence Codes. <p><strong>OperationId:</strong>getInfluenceCodes</p>
     *
     * @tags ChainConfig
     * @name GetInfluenceCodes
     * @summary Get Influence Codes
     * @request GET:/influenceCodes
     */
    getInfluenceCodes: (
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
      return this.request<InfluenceCodesDetails, ExceptionDetailType>({
        path: `/influenceCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Influence Codes. <p><strong>OperationId:</strong>postInfluenceCodes</p>
     *
     * @tags ChainConfig
     * @name PostInfluenceCodes
     * @summary Create Influence Codes
     * @request POST:/influenceCodes
     */
    postInfluenceCodes: (
      hotelId: string,
      influenceCodesCriteria: InfluenceCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/influenceCodes`,
        method: 'POST',
        body: influenceCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Influence Codes. <p><strong>OperationId:</strong>putInfluenceCodes</p>
     *
     * @tags ChainConfig
     * @name PutInfluenceCodes
     * @summary Change Influence Codes
     * @request PUT:/influenceCodes/{influenceCodesId}
     */
    putInfluenceCodes: (
      hotelId: string,
      influenceCodesId: string,
      influenceCodesToBeChanged: InfluenceCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/influenceCodes/${influenceCodesId}`,
        method: 'PUT',
        body: influenceCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Influence Codes. <p><strong>OperationId:</strong>deleteInfluenceCodes</p>
     *
     * @tags ChainConfig
     * @name DeleteInfluenceCodes
     * @summary Delete Influence Codes
     * @request DELETE:/influenceCodes/{influenceCodesId}
     */
    deleteInfluenceCodes: (hotelId: string, influenceCodesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/influenceCodes/${influenceCodesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  keywordTypes = {
    /**
     * @description Use this API to get Keyword Types. <p><strong>OperationId:</strong>getKeywordTypes</p>
     *
     * @tags ChainConfig
     * @name GetKeywordTypes
     * @summary Get Keyword Types
     * @request GET:/keywordTypes
     */
    getKeywordTypes: (
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
      return this.request<KeywordTypesDetails, ExceptionDetailType>({
        path: `/keywordTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Keyword Types. <p><strong>OperationId:</strong>postKeywordTypes</p>
     *
     * @tags ChainConfig
     * @name PostKeywordTypes
     * @summary Create Keyword Types
     * @request POST:/keywordTypes
     */
    postKeywordTypes: (hotelId: string, keywordTypesCriteria: KeywordTypesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/keywordTypes`,
        method: 'POST',
        body: keywordTypesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Keyword Types. <p><strong>OperationId:</strong>putKeywordTypes</p>
     *
     * @tags ChainConfig
     * @name PutKeywordTypes
     * @summary Change Keyword Types
     * @request PUT:/keywordTypes/{keywordTypesId}
     */
    putKeywordTypes: (
      hotelId: string,
      keywordTypesId: string,
      keywordTypesToBeChanged: KeywordTypesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/keywordTypes/${keywordTypesId}`,
        method: 'PUT',
        body: keywordTypesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Keyword Types. <p><strong>OperationId:</strong>deleteKeywordTypes</p>
     *
     * @tags ChainConfig
     * @name DeleteKeywordTypes
     * @summary Delete Keyword Types
     * @request DELETE:/keywordTypes/{keywordTypesId}
     */
    deleteKeywordTypes: (hotelId: string, keywordTypesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/keywordTypes/${keywordTypesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  mailingActionCodes = {
    /**
     * @description Use this API to get Mailing Action Codes. <p><strong>OperationId:</strong>getMailingActionCodes</p>
     *
     * @tags ChainConfig
     * @name GetMailingActionCodes
     * @summary Get Mailing Action Codes
     * @request GET:/mailingActionCodes
     */
    getMailingActionCodes: (
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
      return this.request<MailingActionCodesDetails, ExceptionDetailType>({
        path: `/mailingActionCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Mailing Action Codes. <p><strong>OperationId:</strong>postMailingActionCodes</p>
     *
     * @tags ChainConfig
     * @name PostMailingActionCodes
     * @summary Create Mailing Action Codes
     * @request POST:/mailingActionCodes
     */
    postMailingActionCodes: (
      hotelId: string,
      mailingActionCodesCriteria: MailingActionCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/mailingActionCodes`,
        method: 'POST',
        body: mailingActionCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Mailing Action Codes. <p><strong>OperationId:</strong>changeMailingActionCodes</p>
     *
     * @tags ChainConfig
     * @name ChangeMailingActionCodes
     * @summary Change Mailing Action Codes
     * @request PUT:/mailingActionCodes/{mailingActionCode}
     */
    changeMailingActionCodes: (
      hotelId: string,
      mailingActionCode: string,
      mailingActionCodesToBeChanged: MailingActionCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/mailingActionCodes/${mailingActionCode}`,
        method: 'PUT',
        body: mailingActionCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Mailing Action Codes. <p><strong>OperationId:</strong>removeMailingActionCodes</p>
     *
     * @tags ChainConfig
     * @name RemoveMailingActionCodes
     * @summary Delete Mailing Action Codes
     * @request DELETE:/mailingActionCodes/{mailingActionCode}
     */
    removeMailingActionCodes: (hotelId: string, mailingActionCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/mailingActionCodes/${mailingActionCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipAwards = {
    /**
     * @description You can use this API to get Membership Awards. <p><strong>OperationId:</strong>getMembershipAwards</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipAwards
     * @summary Get Membership Awards
     * @request GET:/membershipAwards
     */
    getMembershipAwards: (
      hotelId: string,
      query?: {
        /** Membership type for which awards are defined. */
        membershipType?: string;
        /** Codes to be searched. */
        awardCodes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Description for the membership award. */
        description?: string;
        /**
         * Date when membership award is valid.
         * @format date
         */
        validForDate?: string;
        /** Flag to decide whether or not to include inactive records in search result set. */
        includeInactive?: boolean;
        /** Fetch operation will return only Membership Award records by default. If Include Details is true, then it will return associated child records like Membership Award Rate/Product/Upgrade/FT as well. */
        includeDetails?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipAwardsInfo, ExceptionDetailType>({
        path: `/membershipAwards`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership Awards. <p><strong>OperationId:</strong>postMembershipAwards</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipAwards
     * @summary Create Membership Awards
     * @request POST:/membershipAwards
     */
    postMembershipAwards: (hotelId: string, membershipAwards: MembershipAwards, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipAwards`,
        method: 'POST',
        body: membershipAwards,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership Awards. <p><strong>OperationId:</strong>putMembershipAwards</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipAwards
     * @summary Change Membership Awards
     * @request PUT:/membershipAwards/{membershipAwardsId}
     */
    putMembershipAwards: (
      hotelId: string,
      membershipAwardsId: string,
      membershipAwards: MembershipAwards,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipAwards/${membershipAwardsId}`,
        method: 'PUT',
        body: membershipAwards,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership Awards. <p><strong>OperationId:</strong>deleteMembershipAwards</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipAwards
     * @summary Delete Membership Awards
     * @request DELETE:/membershipAwards/{membershipAwardsId}
     */
    deleteMembershipAwards: (
      hotelId: string,
      membershipAwardsId: string,
      query?: {
        /** Membership type for which awards are defined. */
        membershipType?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipAwards/${membershipAwardsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipBenefitPrograms = {
    /**
     * @description This API allows you to fetch Membership Benefit Programs of Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria - primary central setup, not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>getMembershipBenefitPrograms</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipBenefitPrograms
     * @summary Retrieve a Membership Benefit Program
     * @request GET:/membershipBenefitPrograms
     */
    getMembershipBenefitPrograms: (
      hotelId: string,
      query?: {
        /** Membership type */
        membershipType?: string;
        /** Benefit Code */
        code?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        end?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        start?: string;
        /** Min value for membership level. This is the minimum membership level member gets for enrolling into this program. */
        minimumLevel?: string;
        /** Flag to decide whether or not to include inactive records in search result set. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipBenefitProgramsInfo, ExceptionDetailType>({
        path: `/membershipBenefitPrograms`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API is used to create Membership Benefit Programs of a Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria  - primary  central setup,  not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>postMembershipBenefitPrograms</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipBenefitPrograms
     * @summary Create Membership Benefit Program
     * @request POST:/membershipBenefitPrograms
     */
    postMembershipBenefitPrograms: (
      hotelId: string,
      membershipBenefitPrograms: MembershipBenefitPrograms,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipBenefitPrograms`,
        method: 'POST',
        body: membershipBenefitPrograms,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API allows you to modify Membership Benefit Programs of Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria  - primary central setup, not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>putMembershipBenefitPrograms</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipBenefitPrograms
     * @summary Change Membership Benefit Program
     * @request PUT:/membershipBenefitPrograms/{membershipBenefitProgramsId}
     */
    putMembershipBenefitPrograms: (
      hotelId: string,
      membershipBenefitProgramsId: string,
      membershipBenefitPrograms: MembershipBenefitPrograms,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipBenefitPrograms/${membershipBenefitProgramsId}`,
        method: 'PUT',
        body: membershipBenefitPrograms,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will allow you to delete s Membership Benefit Programs of a Membership Type.  <p><strong>OperationId:</strong>deleteMembershipBenefitPrograms</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipBenefitPrograms
     * @summary Delete Membership Benedict Program
     * @request DELETE:/membershipBenefitPrograms/{membershipBenefitProgramsId}
     */
    deleteMembershipBenefitPrograms: (
      hotelId: string,
      membershipBenefitProgramsId: string,
      query?: {
        /** Membership type */
        membershipType?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipBenefitPrograms/${membershipBenefitProgramsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipClasses = {
    /**
     * @description Retrieve a list of membership classes that are configured. <p><strong>OperationId:</strong>getMembershipClasses</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipClasses
     * @summary Get Membership classes
     * @request GET:/membershipClasses
     */
    getMembershipClasses: (
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
      return this.request<MembershipClassesInfo, ExceptionDetailType>({
        path: `/membershipClasses`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a new membership class. <p><strong>OperationId:</strong>postMembershipClasses</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipClasses
     * @summary Create Membership classes
     * @request POST:/membershipClasses
     */
    postMembershipClasses: (hotelId: string, membershipClasses: MembershipClasses, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipClasses`,
        method: 'POST',
        body: membershipClasses,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Update an existing membership class <p><strong>OperationId:</strong>putMembershipClasses</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipClasses
     * @summary Change Membership classes
     * @request PUT:/membershipClasses/{membershipClassId}
     */
    putMembershipClasses: (
      hotelId: string,
      membershipClassId: string,
      membershipClasses: MembershipClasses,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipClassesInfo, ExceptionDetailType>({
        path: `/membershipClasses/${membershipClassId}`,
        method: 'PUT',
        body: membershipClasses,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete an existing membership class. <p><strong>OperationId:</strong>deleteMembershipClasses</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipClasses
     * @summary Delete Membership classes
     * @request DELETE:/membershipClasses/{membershipClassId}
     */
    deleteMembershipClasses: (hotelId: string, membershipClassId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipClasses/${membershipClassId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipEnrollmentCodes = {
    /**
     * @description Use this API to get Membership Enrollment Codes. <p><strong>OperationId:</strong>getMembershipEnrollmentCodes</p>
     *
     * @tags ChainConfig
     * @name GetMembershipEnrollmentCodes
     * @summary Get Membership Enrollment Codes
     * @request GET:/membershipEnrollmentCodes
     */
    getMembershipEnrollmentCodes: (
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
      return this.request<MembershipEnrollmentCodesDetails, ExceptionDetailType>({
        path: `/membershipEnrollmentCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Membership Enrollment Codes. <p><strong>OperationId:</strong>postMembershipEnrollmentCodes</p>
     *
     * @tags ChainConfig
     * @name PostMembershipEnrollmentCodes
     * @summary Create Membership Enrollment Codes
     * @request POST:/membershipEnrollmentCodes
     */
    postMembershipEnrollmentCodes: (
      hotelId: string,
      membershipEnrollmentCodesCriteria: MembershipEnrollmentCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentCodes`,
        method: 'POST',
        body: membershipEnrollmentCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Membership Enrollment Codes. <p><strong>OperationId:</strong>changeMembershipEnrollmentCodes</p>
     *
     * @tags ChainConfig
     * @name ChangeMembershipEnrollmentCodes
     * @summary Change Membership Enrollment Codes
     * @request PUT:/membershipEnrollmentCodes/{enrollmentCode}
     */
    changeMembershipEnrollmentCodes: (
      hotelId: string,
      enrollmentCode: string,
      membershipEnrollmentCodesToBeChanged: MembershipEnrollmentCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentCodes/${enrollmentCode}`,
        method: 'PUT',
        body: membershipEnrollmentCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Membership Enrollment Codes. <p><strong>OperationId:</strong>removeMembershipEnrollmentCodes</p>
     *
     * @tags ChainConfig
     * @name RemoveMembershipEnrollmentCodes
     * @summary Delete Membership Enrollment Codes
     * @request DELETE:/membershipEnrollmentCodes/{enrollmentCode}
     */
    removeMembershipEnrollmentCodes: (hotelId: string, enrollmentCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentCodes/${enrollmentCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipEnrollmentGroups = {
    /**
     * @description Retrieve a list of membership Enrollment Groups that are configured. <p><strong>OperationId:</strong>getMembershipEnrollmentGroups</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipEnrollmentGroups
     * @summary Get Membership enrollment groups
     * @request GET:/membershipEnrollmentGroups
     */
    getMembershipEnrollmentGroups: (
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
        enrollmentCodes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Description of the enrollment group to be fetched. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipEnrollmentGroupsInfo, ExceptionDetailType>({
        path: `/membershipEnrollmentGroups`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a new membership enrollment group. <p><strong>OperationId:</strong>postMembershipEnrollmentGroups</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipEnrollmentGroups
     * @summary Create Membership enrollment groups
     * @request POST:/membershipEnrollmentGroups
     */
    postMembershipEnrollmentGroups: (
      hotelId: string,
      membershipEnrollmentGroups: MembershipEnrollmentGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentGroups`,
        method: 'POST',
        body: membershipEnrollmentGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Update an existing membership group. <p><strong>OperationId:</strong>putMembershipEnrollmentGroups</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipEnrollmentGroups
     * @summary Change Membership enrollment groups
     * @request PUT:/membershipEnrollmentGroups/{membershipEnrollmentGroupsId}
     */
    putMembershipEnrollmentGroups: (
      hotelId: string,
      membershipEnrollmentGroupsId: string,
      membershipEnrollmentGroups: MembershipEnrollmentGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentGroups/${membershipEnrollmentGroupsId}`,
        method: 'PUT',
        body: membershipEnrollmentGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description delete an existing membership group. <p><strong>OperationId:</strong>deleteMembershipEnrollmentGroups</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipEnrollmentGroups
     * @summary Remove Membership enrollment groups
     * @request DELETE:/membershipEnrollmentGroups/{membershipEnrollmentGroupsId}
     */
    deleteMembershipEnrollmentGroups: (
      hotelId: string,
      membershipEnrollmentGroupsId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipEnrollmentGroups/${membershipEnrollmentGroupsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipFolioTexts = {
    /**
     * @description You can use this API to Set Membership folio texts. <p><strong>OperationId:</strong>postMembershipFolioTexts</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipFolioTexts
     * @summary Set Membership folio texts
     * @request POST:/membershipFolioTexts
     */
    postMembershipFolioTexts: (
      hotelId: string,
      membershipFolioTexts: MembershipFolioTexts,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipFolioTexts`,
        method: 'POST',
        body: membershipFolioTexts,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipLevels = {
    /**
     * @description You can use this API to get Membership levels. <p><strong>OperationId:</strong>getMembershipLevels</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipLevels
     * @summary Get Membership levels
     * @request GET:/membershipLevels
     */
    getMembershipLevels: (
      hotelId: string,
      query: {
        /** Type of membership that the levels belong to. */
        membershipTypeCode: string;
        /**
         * Inactive flag - whether or not to display inactive records.
         * @default "false"
         */
        includeInactive?: boolean;
        /** Boolean flag to fetch membership type levels with/without folio text. 'True' indicates including folio texts for corresponding membership type level. */
        includeFolioTexts?: boolean;
        hotelIds?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipLevelsInfo, ExceptionDetailType>({
        path: `/membershipLevels`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership levels. <p><strong>OperationId:</strong>postMembershipLevels</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipLevels
     * @summary Create Membership levels
     * @request POST:/membershipLevels
     */
    postMembershipLevels: (hotelId: string, membershipLevels: MembershipLevels, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipLevels`,
        method: 'POST',
        body: membershipLevels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership levels. <p><strong>OperationId:</strong>putMembershipLevels</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipLevels
     * @summary Change Membership levels
     * @request PUT:/membershipLevels/{membershipLevelsId}
     */
    putMembershipLevels: (
      hotelId: string,
      membershipLevelsId: string,
      membershipLevels: MembershipLevels,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipLevels/${membershipLevelsId}`,
        method: 'PUT',
        body: membershipLevels,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership levels. <p><strong>OperationId:</strong>deleteMembershipLevels</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipLevels
     * @summary Delete Membership levels
     * @request DELETE:/membershipLevels/{membershipLevelsId}
     */
    deleteMembershipLevels: (
      hotelId: string,
      membershipLevelsId: string,
      query?: {
        /** Membership type */
        type?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipLevels/${membershipLevelsId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipMarketGroups = {
    /**
     * @description You can use this API to get Membership market groups. <p><strong>OperationId:</strong>getMembershipMarketGroups</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipMarketGroups
     * @summary Get Membership market groups
     * @request GET:/membershipMarketGroups
     */
    getMembershipMarketGroups: (
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
      return this.request<MembershipMarketGroupsInfo, ExceptionDetailType>({
        path: `/membershipMarketGroups`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership market groups. <p><strong>OperationId:</strong>postMembershipMarketGroups</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipMarketGroups
     * @summary Create Membership market groups
     * @request POST:/membershipMarketGroups
     */
    postMembershipMarketGroups: (
      hotelId: string,
      membershipMarketGroups: MembershipMarketGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipMarketGroups`,
        method: 'POST',
        body: membershipMarketGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership market groups. <p><strong>OperationId:</strong>putMembershipMarketGroups</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipMarketGroups
     * @summary Change Membership market groups
     * @request PUT:/membershipMarketGroups/{membershipMarketGroupId}
     */
    putMembershipMarketGroups: (
      hotelId: string,
      membershipMarketGroupId: string,
      membershipMarketGroups: MembershipMarketGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipMarketGroups/${membershipMarketGroupId}`,
        method: 'PUT',
        body: membershipMarketGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership market groups. <p><strong>OperationId:</strong>deleteMembershipMarketGroups</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipMarketGroups
     * @summary Delete Membership market groups
     * @request DELETE:/membershipMarketGroups/{membershipMarketGroupId}
     */
    deleteMembershipMarketGroups: (hotelId: string, membershipMarketGroupId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipMarketGroups/${membershipMarketGroupId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipPropertyGroups = {
    /**
     * @description You can use this API to get Membership property groups. <p><strong>OperationId:</strong>getMembershipPropertyGroups</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipPropertyGroups
     * @summary Get Membership property groups
     * @request GET:/membershipPropertyGroups
     */
    getMembershipPropertyGroups: (
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
      return this.request<MembershipPropertyGroupsInfo, ExceptionDetailType>({
        path: `/membershipPropertyGroups`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership property groups. <p><strong>OperationId:</strong>postMembershipPropertyGroups</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipPropertyGroups
     * @summary Create Membership property groups
     * @request POST:/membershipPropertyGroups
     */
    postMembershipPropertyGroups: (
      hotelId: string,
      membershipPropertyGroups: MembershipPropertyGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipPropertyGroups`,
        method: 'POST',
        body: membershipPropertyGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership property groups. <p><strong>OperationId:</strong>putMembershipPropertyGroups</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipPropertyGroups
     * @summary Change Membership property groups
     * @request PUT:/membershipPropertyGroups/{membershipPropertyGroupsId}
     */
    putMembershipPropertyGroups: (
      hotelId: string,
      membershipPropertyGroupsId: string,
      membershipPropertyGroups: MembershipPropertyGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipPropertyGroups/${membershipPropertyGroupsId}`,
        method: 'PUT',
        body: membershipPropertyGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership property groups. <p><strong>OperationId:</strong>deleteMembershipPropertyGroups</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipPropertyGroups
     * @summary Delete Membership property groups
     * @request DELETE:/membershipPropertyGroups/{membershipPropertyGroupsId}
     */
    deleteMembershipPropertyGroups: (
      hotelId: string,
      membershipPropertyGroupsId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipPropertyGroups/${membershipPropertyGroupsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipRateGroups = {
    /**
     * @description You can use this API to get Membership rate groups. <p><strong>OperationId:</strong>getMembershipRateGroups</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipRateGroups
     * @summary Get Membership rate groups
     * @request GET:/membershipRateGroups
     */
    getMembershipRateGroups: (
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
      return this.request<MembershipRateGroupsInfo, ExceptionDetailType>({
        path: `/membershipRateGroups`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership rate groups. <p><strong>OperationId:</strong>postMembershipRateGroups</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipRateGroups
     * @summary Create Membership rate groups
     * @request POST:/membershipRateGroups
     */
    postMembershipRateGroups: (
      hotelId: string,
      membershipRateGroups: MembershipRateGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipRateGroups`,
        method: 'POST',
        body: membershipRateGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership rate groups. <p><strong>OperationId:</strong>putMembershipRateGroups</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipRateGroups
     * @summary Change Membership rate groups
     * @request PUT:/membershipRateGroups/{membershipRateGroupId}
     */
    putMembershipRateGroups: (
      hotelId: string,
      membershipRateGroupId: string,
      membershipRateGroups: MembershipRateGroups,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipRateGroups/${membershipRateGroupId}`,
        method: 'PUT',
        body: membershipRateGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership rate groups. <p><strong>OperationId:</strong>deleteMembershipRateGroups</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipRateGroups
     * @summary Delete Membership rate groups
     * @request DELETE:/membershipRateGroups/{membershipRateGroupId}
     */
    deleteMembershipRateGroups: (hotelId: string, membershipRateGroupId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipRateGroups/${membershipRateGroupId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipStatusCodes = {
    /**
     * @description Use this API to get Membership Status Codes. <p><strong>OperationId:</strong>getMembershipStatusCodes</p>
     *
     * @tags ChainConfig
     * @name GetMembershipStatusCodes
     * @summary Get Membership Status Codes
     * @request GET:/membershipStatusCodes
     */
    getMembershipStatusCodes: (
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
      return this.request<MembershipStatusCodesDetails, ExceptionDetailType>({
        path: `/membershipStatusCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Membership Status Codes. <p><strong>OperationId:</strong>postMembershipStatusCodes</p>
     *
     * @tags ChainConfig
     * @name PostMembershipStatusCodes
     * @summary Create Membership Status Codes
     * @request POST:/membershipStatusCodes
     */
    postMembershipStatusCodes: (
      hotelId: string,
      membershipStatusCodesCriteria: MembershipStatusCodesCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipStatusCodes`,
        method: 'POST',
        body: membershipStatusCodesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Membership Status Codes. <p><strong>OperationId:</strong>changeMembershipStatusCodes</p>
     *
     * @tags ChainConfig
     * @name ChangeMembershipStatusCodes
     * @summary Change Membership Status Codes
     * @request PUT:/membershipStatusCodes/{membershipStatusCode}
     */
    changeMembershipStatusCodes: (
      hotelId: string,
      membershipStatusCode: string,
      membershipStatusCodesToBeChanged: MembershipStatusCodesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipStatusCodes/${membershipStatusCode}`,
        method: 'PUT',
        body: membershipStatusCodesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Membership Status Codes. <p><strong>OperationId:</strong>removeMembershipStatusCodes</p>
     *
     * @tags ChainConfig
     * @name RemoveMembershipStatusCodes
     * @summary Delete Membership Status Codes
     * @request DELETE:/membershipStatusCodes/{membershipStatusCode}
     */
    removeMembershipStatusCodes: (hotelId: string, membershipStatusCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipStatusCodes/${membershipStatusCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipTypeRules = {
    /**
     * @description get Membership type rules based on criteria <p><strong>OperationId:</strong>getMembershipTypeRules</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipTypeRules
     * @summary Get Membership type rules
     * @request GET:/membershipTypeRules
     */
    getMembershipTypeRules: (
      hotelId: string,
      query?: {
        membershipTypesCodes?: string[];
        /**
         * Membership Type/Program rule types.
         * @uniqueItems true
         */
        programType?: 'All' | 'Points' | 'Tier';
        /** Rule code of the membership type rule. */
        ruleCode?: string;
        /**
         * Indicates Membership upgrades/downgrades to the next tier level uses RFM (Recency, Frequency, Monetary Value) score.
         * @uniqueItems true
         */
        ruleBasedOn?: 'Revenue' | 'Stay' | 'Nights' | 'Enrollment' | 'TierUpgrade' | 'Renewal' | 'Rfm';
        /** Indicates whether search includes inactive membership type rules. */
        includeInactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypeRulesInfo, ExceptionDetailType>({
        path: `/membershipTypeRules`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Membership type rules. <p><strong>OperationId:</strong>postMembershipTypeRules</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipTypeRules
     * @summary Create Membership type rules
     * @request POST:/membershipTypeRules
     */
    postMembershipTypeRules: (
      hotelId: string,
      membershipTypeRules: MembershipTypeRules,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypeRulesDetails, ExceptionDetailType>({
        path: `/membershipTypeRules`,
        method: 'POST',
        body: membershipTypeRules,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to get Membership type rule details. <p><strong>OperationId:</strong>getMembershipTypeRule</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipTypeRule
     * @summary Get Membership type rule details
     * @request GET:/membershipTypeRules/{membershipTypeRulesId}
     */
    getMembershipTypeRule: (
      hotelId: string,
      membershipTypeRulesId: string,
      query?: {
        /** Membership type of the Rule. */
        membershipType?: string;
        /** Sequence number of the membership type rule. */
        membershipPointsSequence?: number;
        /**
         * To include type rule filters information.
         * @uniqueItems true
         */
        fetchInstructions?: ('RuleDefinition' | 'PointsDefinition' | 'RuleConditions')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypeRule, ExceptionDetailType>({
        path: `/membershipTypeRules/${membershipTypeRulesId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Membership type rules. <p><strong>OperationId:</strong>putMembershipTypeRules</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipTypeRules
     * @summary Change Membership type rules
     * @request PUT:/membershipTypeRules/{membershipTypeRulesId}
     */
    putMembershipTypeRules: (
      hotelId: string,
      membershipTypeRulesId: string,
      membershipTypeRules: MembershipTypeRules,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipTypeRules/${membershipTypeRulesId}`,
        method: 'PUT',
        body: membershipTypeRules,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Membership type rules. <p><strong>OperationId:</strong>deleteMembershipTypeRules</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipTypeRules
     * @summary Delete Membership type rules
     * @request DELETE:/membershipTypeRules/{membershipTypeRulesId}
     */
    deleteMembershipTypeRules: (
      hotelId: string,
      membershipTypeRulesId: string,
      query?: {
        /** Sequence number of the membership type rule. */
        membershipPointsSequence?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipTypeRules/${membershipTypeRulesId}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  membershipTypes = {
    /**
     * @description Membership types enable you to identify, organize, and manage the membership programs on a profile. For example, your property might have a guest loyalty program that awards guests based on the amount of revenue generated or the number of stays per year. You would create a specific membership type for this program. This API will retrieve all configured Membership Types configured.<p><strong>OperationId:</strong>getMembershipTypes</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipTypes
     * @summary Get membership types
     * @request GET:/membershipTypes
     */
    getMembershipTypes: (
      hotelId: string,
      query?: {
        /** Search criteria for fetching inactive memberships. When set to true, inactive records will be included. */
        includeInactive?: boolean;
        /** Codes to be searched. */
        membershipTypesCodes?: string[];
        /** Wildcard search on the code. */
        membershipTypesWildCard?: string;
        /** Codes to be searched. */
        membershipClassesCodes?: string[];
        /** Wildcard search on the code. */
        membershipClassesWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypes, ExceptionDetailType>({
        path: `/membershipTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Membership types enable you to identify, organize, and manage the membership programs on a profile. For example, your property might have a guest loyalty program that awards guests based on the amount of revenue generated or the number of stays per year. You would create a specific membership type for this program. <p><strong>OperationId:</strong>postMembershipTypes</p>
     *
     * @tags MembershipConfig
     * @name PostMembershipTypes
     * @summary Create Membership types
     * @request POST:/membershipTypes
     */
    postMembershipTypes: (hotelId: string, membershipTypes: MembershipTypes, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipTypes`,
        method: 'POST',
        body: membershipTypes,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get a specific Membership Type and its details. <p><strong>OperationId:</strong>getMembershipType</p>
     *
     * @tags MembershipConfig
     * @name GetMembershipType
     * @summary Get a Membership type
     * @request GET:/membershipTypes/{membershipTypeId}
     */
    getMembershipType: (
      hotelId: string,
      membershipTypeId: string,
      query?: {
        /** Membership type code. */
        membershipTypeCode?: string;
        /**
         * Membership levels.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'PrimaryDetails'
          | 'CardNumberDetails'
          | 'PointsDetails'
          | 'ExceptionCriteriaDetails'
          | 'AdditionalDetails'
          | 'EnrollmentDetails'
          | 'Levels'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypesDetails, ExceptionDetailType>({
        path: `/membershipTypes/${membershipTypeId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update an existing Membership Type <p><strong>OperationId:</strong>putMembershipType</p>
     *
     * @tags MembershipConfig
     * @name PutMembershipType
     * @summary Change Membership type
     * @request PUT:/membershipTypes/{membershipTypeId}
     */
    putMembershipType: (
      hotelId: string,
      membershipTypeId: string,
      membershipTypeChangeInstructions: MembershipTypeChangeInstructions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<MembershipTypes, ExceptionDetailType>({
        path: `/membershipTypes/${membershipTypeId}`,
        method: 'PUT',
        body: membershipTypeChangeInstructions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete an existing Membership Type <p><strong>OperationId:</strong>deleteMembershipTypes</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipTypes
     * @summary Delete Membership type
     * @request DELETE:/membershipTypes/{membershipTypeId}
     */
    deleteMembershipTypes: (hotelId: string, membershipTypeId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/membershipTypes/${membershipTypeId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  nationalities = {
    /**
     * @description Use this API to get Nationalities codes and description configured in OPERA.<p><strong>OperationId:</strong>getNationalities</p>
     *
     * @tags ChainConfig
     * @name GetNationalities
     * @summary Get nationalities
     * @request GET:/nationalities
     */
    getNationalities: (
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
      return this.request<NationalitiesDetails, ExceptionDetailType>({
        path: `/nationalities`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Nationalities. <p><strong>OperationId:</strong>postNationalities</p>
     *
     * @tags ChainConfig
     * @name PostNationalities
     * @summary Create Nationalities
     * @request POST:/nationalities
     */
    postNationalities: (hotelId: string, nationalitiesCriteria: NationalitiesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/nationalities`,
        method: 'POST',
        body: nationalitiesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Nationalities. <p><strong>OperationId:</strong>putNationalities</p>
     *
     * @tags ChainConfig
     * @name PutNationalities
     * @summary Change Nationalities
     * @request PUT:/nationalities/{nationalitiesId}
     */
    putNationalities: (
      hotelId: string,
      nationalitiesId: string,
      nationalitiesToBeChanged: NationalitiesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/nationalities/${nationalitiesId}`,
        method: 'PUT',
        body: nationalitiesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Nationalities. <p><strong>OperationId:</strong>deleteNationalities</p>
     *
     * @tags ChainConfig
     * @name DeleteNationalities
     * @summary Delete Nationalities
     * @request DELETE:/nationalities/{nationalitiesId}
     */
    deleteNationalities: (hotelId: string, nationalitiesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/nationalities/${nationalitiesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  ownerTeams = {
    /**
     * @description Use this API to get Owner Teams. <p><strong>OperationId:</strong>getOwnerTeams</p>
     *
     * @tags ChainConfig
     * @name GetOwnerTeams
     * @summary Get Owner Teams
     * @request GET:/ownerTeams
     */
    getOwnerTeams: (
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
      return this.request<OwnerTeamsDetails, ExceptionDetailType>({
        path: `/ownerTeams`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Owner Teams. <p><strong>OperationId:</strong>postOwnerTeams</p>
     *
     * @tags ChainConfig
     * @name PostOwnerTeams
     * @summary Create Owner Teams
     * @request POST:/ownerTeams
     */
    postOwnerTeams: (hotelId: string, ownerTeamsCriteria: OwnerTeamsCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/ownerTeams`,
        method: 'POST',
        body: ownerTeamsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Owner Teams. <p><strong>OperationId:</strong>changeOwnerTeams</p>
     *
     * @tags ChainConfig
     * @name ChangeOwnerTeams
     * @summary Change Owner Teams
     * @request PUT:/ownerTeams/{ownerTeamCode}
     */
    changeOwnerTeams: (
      hotelId: string,
      ownerTeamCode: string,
      ownerTeamsToBeChanged: OwnerTeamsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/ownerTeams/${ownerTeamCode}`,
        method: 'PUT',
        body: ownerTeamsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Owner Teams. <p><strong>OperationId:</strong>removeOwnerTeams</p>
     *
     * @tags ChainConfig
     * @name RemoveOwnerTeams
     * @summary Delete Owner Teams
     * @request DELETE:/ownerTeams/{ownerTeamCode}
     */
    removeOwnerTeams: (hotelId: string, ownerTeamCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/ownerTeams/${ownerTeamCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  payDays = {
    /**
     * @description Use this API to get Pay Days. <p><strong>OperationId:</strong>getPayDays</p>
     *
     * @tags ChainConfig
     * @name GetPayDays
     * @summary Get Pay Days
     * @request GET:/payDays
     */
    getPayDays: (
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
      return this.request<PayDaysDetails, ExceptionDetailType>({
        path: `/payDays`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Pay Days. <p><strong>OperationId:</strong>postPayDays</p>
     *
     * @tags ChainConfig
     * @name PostPayDays
     * @summary Create Pay Days
     * @request POST:/payDays
     */
    postPayDays: (hotelId: string, payDaysCriteria: PayDaysCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/payDays`,
        method: 'POST',
        body: payDaysCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Pay Days. <p><strong>OperationId:</strong>putPayDays</p>
     *
     * @tags ChainConfig
     * @name PutPayDays
     * @summary Change Pay Days
     * @request PUT:/payDays/{payDaysId}
     */
    putPayDays: (
      hotelId: string,
      payDaysId: string,
      payDaysToBeChanged: PayDaysToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/payDays/${payDaysId}`,
        method: 'PUT',
        body: payDaysToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Pay Days. <p><strong>OperationId:</strong>deletePayDays</p>
     *
     * @tags ChainConfig
     * @name DeletePayDays
     * @summary Delete Pay Days
     * @request DELETE:/payDays/{payDaysId}
     */
    deletePayDays: (hotelId: string, payDaysId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/payDays/${payDaysId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  preference = {
    /**
     * @description Use this API to delete preferences, this API allows us to delete both the Global and Hotel level preferences. <p><strong>OperationId:</strong>deleteHotelAndGlobalPreferences</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteHotelAndGlobalPreferences
     * @summary Delete preferences
     * @request DELETE:/preference
     */
    deleteHotelAndGlobalPreferences: (
      hotelId: string,
      query: {
        /** Specifies the preference code. */
        preferenceCode: string;
        /** Specifies the preference group the preference belongs to. */
        preferenceGroup: string;
        /** Specifies the hotel code for which the preference is specified. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preference`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  preferenceGroups = {
    /**
     * @description The API can be used to retrieve preference groups that match the given criteria in the request. <p><strong>OperationId:</strong>getPreferenceGroups</p>
     *
     * @tags ProfileConfiguration
     * @name GetPreferenceGroups
     * @summary Get Preference Groups
     * @request GET:/preferenceGroups
     */
    getPreferenceGroups: (
      hotelId: string,
      query?: {
        preferenceGroupsCodes?: string[];
        /** Preference group description to be searched. */
        wildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<PreferenceGroups, ExceptionDetailType>({
        path: `/preferenceGroups`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API can be used to modify the preference groups. Changes can be made concurrently to multiple groups. <p><strong>OperationId:</strong>putPreferenceGroups</p>
     *
     * @tags ProfileConfiguration
     * @name PutPreferenceGroups
     * @summary Change Preference Groups
     * @request PUT:/preferenceGroups
     */
    putPreferenceGroups: (hotelId: string, preferenceGroups: PreferenceGroups, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferenceGroups`,
        method: 'PUT',
        body: preferenceGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This will allow you to delete an existing Preference Group. <p><strong>OperationId:</strong>deletePreferenceGroups</p>
     *
     * @tags ProfileConfiguration
     * @name DeletePreferenceGroups
     * @summary Delete preference groups
     * @request DELETE:/preferenceGroups
     */
    deletePreferenceGroups: (
      hotelId: string,
      query: {
        /** Code identifying the preference group. */
        preferenceGroup: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferenceGroups`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a new Preference group. <p><strong>OperationId:</strong>postPreferenceGroups</p>
     *
     * @tags ProfileConfiguration
     * @name PostPreferenceGroups
     * @summary Create new preference groups
     * @request POST:/preferenceGroups
     */
    postPreferenceGroups: (hotelId: string, preferenceGroups: PreferenceGroups, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferenceGroups`,
        method: 'POST',
        body: preferenceGroups,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  preferences = {
    /**
     * @description You can use this API to get template Preferences. <p><strong>OperationId:</strong>getTemplatePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name GetTemplatePreferences
     * @summary Get template Preferences
     * @request GET:/preferences
     */
    getTemplatePreferences: (
      hotelId: string,
      query?: {
        preferenceCodes?: string[];
        preferenceGroupsCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<TemplatePreferences, ExceptionDetailType>({
        path: `/preferences`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change template preferences. <p><strong>OperationId:</strong>putTemplatePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PutTemplatePreferences
     * @summary Change template preferences
     * @request PUT:/preferences
     */
    putTemplatePreferences: (hotelId: string, templatePreferences: TemplatePreferences, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferences`,
        method: 'PUT',
        body: templatePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete template preferences. <p><strong>OperationId:</strong>deleteTemplatePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteTemplatePreferences
     * @summary Delete template preferences
     * @request DELETE:/preferences
     */
    deleteTemplatePreferences: (
      hotelId: string,
      query: {
        /** Specifies the preference code. */
        preferenceCode: string;
        /** Specifies the preference group the preference belongs to. */
        preferenceGroup: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferences`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create template preferences. <p><strong>OperationId:</strong>postTemplatePreferences</p>
     *
     * @tags ProfileConfiguration
     * @name PostTemplatePreferences
     * @summary Create template preferences
     * @request POST:/preferences
     */
    postTemplatePreferences: (
      hotelId: string,
      templatePreferences: TemplatePreferences,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferences`,
        method: 'POST',
        body: templatePreferences,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to copy preferences. <p><strong>OperationId:</strong>copyPreferences</p>
     *
     * @tags ProfileConfiguration
     * @name CopyPreferences
     * @summary Copy preferences
     * @request PUT:/preferences/copy
     */
    copyPreferences: (hotelId: string, preferencesCopy: PreferencesCopy, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/preferences/copy`,
        method: 'PUT',
        body: preferencesCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  profileInactiveReasons = {
    /**
     * @description Use this API to get Profile Inactive Reasons. <p><strong>OperationId:</strong>getProfileInactiveReasons</p>
     *
     * @tags ChainConfig
     * @name GetProfileInactiveReasons
     * @summary Get Profile Inactive Reasons
     * @request GET:/profileInactiveReasons
     */
    getProfileInactiveReasons: (
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
      return this.request<ProfileInactiveReasonsDetails, ExceptionDetailType>({
        path: `/profileInactiveReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Profile Inactive Reasons. <p><strong>OperationId:</strong>postProfileInactiveReasons</p>
     *
     * @tags ChainConfig
     * @name PostProfileInactiveReasons
     * @summary Create Profile Inactive Reasons
     * @request POST:/profileInactiveReasons
     */
    postProfileInactiveReasons: (
      hotelId: string,
      profileInactiveReasonsCriteria: ProfileInactiveReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileInactiveReasons`,
        method: 'POST',
        body: profileInactiveReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Profile Inactive Reasons. <p><strong>OperationId:</strong>putProfileInactiveReasons</p>
     *
     * @tags ChainConfig
     * @name PutProfileInactiveReasons
     * @summary Change Profile Inactive Reasons
     * @request PUT:/profileInactiveReasons/{profileInactiveReasonsId}
     */
    putProfileInactiveReasons: (
      hotelId: string,
      profileInactiveReasonsId: string,
      profileInactiveReasonsToBeChanged: ProfileInactiveReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileInactiveReasons/${profileInactiveReasonsId}`,
        method: 'PUT',
        body: profileInactiveReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Profile Inactive Reasons. <p><strong>OperationId:</strong>deleteProfileInactiveReasons</p>
     *
     * @tags ChainConfig
     * @name DeleteProfileInactiveReasons
     * @summary Delete Profile Inactive Reasons
     * @request DELETE:/profileInactiveReasons/{profileInactiveReasonsId}
     */
    deleteProfileInactiveReasons: (hotelId: string, profileInactiveReasonsId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileInactiveReasons/${profileInactiveReasonsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  profileNameValidations = {
    /**
     * @description You can use this API to get Profile Name Validations. <p><strong>OperationId:</strong>getProfileNameValidations</p>
     *
     * @tags ProfileConfiguration
     * @name GetProfileNameValidations
     * @summary Get Profile Name Validations
     * @request GET:/profileNameValidations
     */
    getProfileNameValidations: (
      hotelId: string,
      query?: {
        /** Codes to be searched. */
        typeCodes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Profile Name to be Searched. */
        name?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ProfileNameValidations, ExceptionDetailType>({
        path: `/profileNameValidations`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change Profile Name Validations. <p><strong>OperationId:</strong>putProfileNameValidations</p>
     *
     * @tags ProfileConfiguration
     * @name PutProfileNameValidations
     * @summary Change Profile Name Validations
     * @request PUT:/profileNameValidations
     */
    putProfileNameValidations: (
      hotelId: string,
      profileNameValidationsToChange: ProfileNameValidationsToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileNameValidations`,
        method: 'PUT',
        body: profileNameValidationsToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete Profile Name Validations. <p><strong>OperationId:</strong>deleteProfileNameValidations</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteProfileNameValidations
     * @summary Delete Profile Name Validations
     * @request DELETE:/profileNameValidations
     */
    deleteProfileNameValidations: (
      hotelId: string,
      query: {
        /**
         * Simple Type for Profile Name Validations Type. e.g. Company,Travel Agent,Source.
         * @uniqueItems true
         */
        profileType: 'Company' | 'TravelAgent' | 'Source';
        /** Name of the Profile. */
        profileName: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileNameValidations`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create Profile Name Validations. <p><strong>OperationId:</strong>postProfileNameValidations</p>
     *
     * @tags ProfileConfiguration
     * @name PostProfileNameValidations
     * @summary Create Profile Name Validations
     * @request POST:/profileNameValidations
     */
    postProfileNameValidations: (
      hotelId: string,
      profileNameValidations: ProfileNameValidations,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileNameValidations`,
        method: 'POST',
        body: profileNameValidations,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  profileRestrictionReasons = {
    /**
     * @description Use this API to get Profile Restriction Reasons. <p><strong>OperationId:</strong>getProfileRestrictionReasons</p>
     *
     * @tags ChainConfig
     * @name GetProfileRestrictionReasons
     * @summary Get Profile Restriction Reasons
     * @request GET:/profileRestrictionReasons
     */
    getProfileRestrictionReasons: (
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
      return this.request<ProfileRestrictionReasonsDetails, ExceptionDetailType>({
        path: `/profileRestrictionReasons`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Profile Restriction Reasons. <p><strong>OperationId:</strong>postProfileRestrictionReasons</p>
     *
     * @tags ChainConfig
     * @name PostProfileRestrictionReasons
     * @summary Create Profile Restriction Reasons
     * @request POST:/profileRestrictionReasons
     */
    postProfileRestrictionReasons: (
      hotelId: string,
      profileRestrictionReasonsCriteria: ProfileRestrictionReasonsCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileRestrictionReasons`,
        method: 'POST',
        body: profileRestrictionReasonsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Profile Restriction Reasons. <p><strong>OperationId:</strong>putProfileRestrictionReasons</p>
     *
     * @tags ChainConfig
     * @name PutProfileRestrictionReasons
     * @summary Change Profile Restriction Reasons
     * @request PUT:/profileRestrictionReasons/{profileRestrictionReasonsId}
     */
    putProfileRestrictionReasons: (
      hotelId: string,
      profileRestrictionReasonsId: string,
      profileRestrictionReasonsToBeChanged: ProfileRestrictionReasonsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileRestrictionReasons/${profileRestrictionReasonsId}`,
        method: 'PUT',
        body: profileRestrictionReasonsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Profile Restriction Reasons. <p><strong>OperationId:</strong>deleteProfileRestrictionReasons</p>
     *
     * @tags ChainConfig
     * @name DeleteProfileRestrictionReasons
     * @summary Delete Profile Restriction Reasons
     * @request DELETE:/profileRestrictionReasons/{profileRestrictionReasonsId}
     */
    deleteProfileRestrictionReasons: (
      hotelId: string,
      profileRestrictionReasonsId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/profileRestrictionReasons/${profileRestrictionReasonsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  relationships = {
    /**
     * @description You can use this API to get profile relationships. <p><strong>OperationId:</strong>getProfileRelationships</p>
     *
     * @tags ProfileConfiguration
     * @name GetProfileRelationships
     * @summary Get profile relationships
     * @request GET:/relationships
     */
    getProfileRelationships: (
      hotelId: string,
      query?: {
        /** From type to process */
        fromType?: string;
        /** To type to process */
        toType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ProfileLinks, ExceptionDetailType>({
        path: `/relationships`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to change profile relationships. <p><strong>OperationId:</strong>putProfileRelationships</p>
     *
     * @tags ProfileConfiguration
     * @name PutProfileRelationships
     * @summary Change profile relationships
     * @request PUT:/relationships
     */
    putProfileRelationships: (hotelId: string, profileLinks: ProfileLinks, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/relationships`,
        method: 'PUT',
        body: profileLinks,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to delete profile relationships. <p><strong>OperationId:</strong>deleteProfileRelationships</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteProfileRelationships
     * @summary Delete profile relationships
     * @request DELETE:/relationships
     */
    deleteProfileRelationships: (
      hotelId: string,
      query: {
        /** From type to process */
        fromType: string;
        /** To type to process */
        toType: string;
        /** From code to process */
        fromCode: string;
        /** To code to process */
        toCode: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/relationships`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to create profile relationships. <p><strong>OperationId:</strong>postProfileRelationships</p>
     *
     * @tags ProfileConfiguration
     * @name PostProfileRelationships
     * @summary Create profile relationships
     * @request POST:/relationships
     */
    postProfileRelationships: (hotelId: string, profileLinks: ProfileLinks, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/relationships`,
        method: 'POST',
        body: profileLinks,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description Clear Membership Configuration Cache <p><strong>OperationId:</strong>deleteMembershipConfigCache</p>
     *
     * @tags MembershipConfig
     * @name DeleteMembershipConfigCache
     * @summary  clear cache
     * @request DELETE:/services/membershipConfig/cache
     */
    deleteMembershipConfigCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/membershipConfig/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Ping Membership Configuration Service <p><strong>OperationId:</strong>pingMembershipConfigService</p>
     *
     * @tags MembershipConfig
     * @name PingMembershipConfigService
     * @summary  ping
     * @request GET:/services/membershipConfig/status
     */
    pingMembershipConfigService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/membershipConfig/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Clear Profile Configuratoin Cache <p><strong>OperationId:</strong>deleteProfileConfigServiceCache</p>
     *
     * @tags ProfileConfiguration
     * @name DeleteProfileConfigServiceCache
     * @summary  clear cache
     * @request DELETE:/services/profile/cache
     */
    deleteProfileConfigServiceCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/profile/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Ping Profile Configuration Service <p><strong>OperationId:</strong>pingProfileConfigService</p>
     *
     * @tags ProfileConfiguration
     * @name PingProfileConfigService
     * @summary  ping
     * @request GET:/services/profile/status
     */
    pingProfileConfigService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/profile/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  sources = {
    /**
     * @description Use this API to get Sources. <p><strong>OperationId:</strong>getSources</p>
     *
     * @tags ChainConfig
     * @name GetSources
     * @summary Get Sources
     * @request GET:/sources
     */
    getSources: (
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
      return this.request<SourcesDetails, ExceptionDetailType>({
        path: `/sources`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Sources. <p><strong>OperationId:</strong>postSources</p>
     *
     * @tags ChainConfig
     * @name PostSources
     * @summary Create Sources
     * @request POST:/sources
     */
    postSources: (hotelId: string, sourcesCriteria: SourcesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/sources`,
        method: 'POST',
        body: sourcesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Sources. <p><strong>OperationId:</strong>putSources</p>
     *
     * @tags ChainConfig
     * @name PutSources
     * @summary Change Sources
     * @request PUT:/sources/{sourcesId}
     */
    putSources: (
      hotelId: string,
      sourcesId: string,
      sourcesToBeChanged: SourcesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/sources/${sourcesId}`,
        method: 'PUT',
        body: sourcesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Sources. <p><strong>OperationId:</strong>deleteSources</p>
     *
     * @tags ChainConfig
     * @name DeleteSources
     * @summary Delete Sources
     * @request DELETE:/sources/{sourcesId}
     */
    deleteSources: (hotelId: string, sourcesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/sources/${sourcesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  territories = {
    /**
     * @description Use this API to get Territories. <p><strong>OperationId:</strong>getTerritories</p>
     *
     * @tags ChainConfig
     * @name GetTerritories
     * @summary Get Territories
     * @request GET:/territories
     */
    getTerritories: (
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
      return this.request<TerritoriesDetails, ExceptionDetailType>({
        path: `/territories`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Territories. <p><strong>OperationId:</strong>postTerritories</p>
     *
     * @tags ChainConfig
     * @name PostTerritories
     * @summary Create Territories
     * @request POST:/territories
     */
    postTerritories: (hotelId: string, territoriesCriteria: TerritoriesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/territories`,
        method: 'POST',
        body: territoriesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Territories. <p><strong>OperationId:</strong>putTerritories</p>
     *
     * @tags ChainConfig
     * @name PutTerritories
     * @summary Change Territories
     * @request PUT:/territories/{territoriesId}
     */
    putTerritories: (
      hotelId: string,
      territoriesId: string,
      territoriesToBeChanged: TerritoriesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/territories/${territoriesId}`,
        method: 'PUT',
        body: territoriesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Territories. <p><strong>OperationId:</strong>deleteTerritories</p>
     *
     * @tags ChainConfig
     * @name DeleteTerritories
     * @summary Delete Territories
     * @request DELETE:/territories/{territoriesId}
     */
    deleteTerritories: (hotelId: string, territoriesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/territories/${territoriesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  titles = {
    /**
     * @description Use this API to get Titles. <p><strong>OperationId:</strong>getTitles</p>
     *
     * @tags ChainConfig
     * @name GetTitles
     * @summary Get Titles
     * @request GET:/titles
     */
    getTitles: (
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
      return this.request<TitlesDetails, ExceptionDetailType>({
        path: `/titles`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create Titles. <p><strong>OperationId:</strong>postTitles</p>
     *
     * @tags ChainConfig
     * @name PostTitles
     * @summary Create Titles
     * @request POST:/titles
     */
    postTitles: (hotelId: string, titlesCriteria: TitlesCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/titles`,
        method: 'POST',
        body: titlesCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Titles. <p><strong>OperationId:</strong>putTitles</p>
     *
     * @tags ChainConfig
     * @name PutTitles
     * @summary Change Titles
     * @request PUT:/titles/{titlesId}
     */
    putTitles: (
      hotelId: string,
      titlesId: string,
      titlesToBeChanged: TitlesToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/titles/${titlesId}`,
        method: 'PUT',
        body: titlesToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete Titles. <p><strong>OperationId:</strong>deleteTitles</p>
     *
     * @tags ChainConfig
     * @name DeleteTitles
     * @summary Delete Titles
     * @request DELETE:/titles/{titlesId}
     */
    deleteTitles: (hotelId: string, titlesId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/titles/${titlesId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  vipLevels = {
    /**
     * @description Use this API to get VIP Levels. <p><strong>OperationId:</strong>getVIPLevels</p>
     *
     * @tags ChainConfig
     * @name GetVipLevels
     * @summary Get VIP Levels
     * @request GET:/vipLevels
     */
    getVipLevels: (
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
      return this.request<VIPLevelsDetails, ExceptionDetailType>({
        path: `/vipLevels`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create VIP Levels. <p><strong>OperationId:</strong>postVIPLevels</p>
     *
     * @tags ChainConfig
     * @name PostVipLevels
     * @summary Create VIP Levels
     * @request POST:/vipLevels
     */
    postVipLevels: (hotelId: string, vIPLevelsCriteria: VIPLevelsCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/vipLevels`,
        method: 'POST',
        body: vIPLevelsCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update VIP Levels. <p><strong>OperationId:</strong>putVIPLevels</p>
     *
     * @tags ChainConfig
     * @name PutVipLevels
     * @summary Change VIP Levels
     * @request PUT:/vipLevels/{vipLevelsId}
     */
    putVipLevels: (
      hotelId: string,
      vipLevelsId: string,
      vIPLevelsToBeChanged: VIPLevelsToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/vipLevels/${vipLevelsId}`,
        method: 'PUT',
        body: vIPLevelsToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete VIP Levels. <p><strong>OperationId:</strong>deleteVIPLevels</p>
     *
     * @tags ChainConfig
     * @name DeleteVipLevels
     * @summary Delete VIP Levels
     * @request DELETE:/vipLevels/{vipLevelsId}
     */
    deleteVipLevels: (hotelId: string, vipLevelsId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/vipLevels/${vipLevelsId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
