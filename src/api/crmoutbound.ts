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

/**
 * Error Detail
 * Complex type that contains error details for a REST call.
 */
export interface ExceptionDetailType {
  /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
  type?: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title?: string;
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
  type?: string;
  /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
  title?: string;
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

/** Metadata describing link description objects that MAY appear in the JSON instance representation. */
export interface InstanceLink {
  /** URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true. */
  href?: string;
  /** Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile. */
  rel?: string;
  /**
   * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
   * @default false
   */
  templated?: boolean;
  /** HTTP method for requesting the target of the link. */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
  /** Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource.. */
  targetSchema?: string;
  /** The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply. */
  operationId?: string;
  /** Exact copy of the "summary" field on the linked operation. */
  title?: string;
}

export type Links = InstanceLink[];

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
    /** Total number of rows queried */
    totalRows?: number;
  };
  /**
   * Business/Market Segment associated to the profile.
   * @maxItems 4000
   */
  businessSegments?: string[];
  /**
   * Territory associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  territory?: string;
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Notes for the customer. */
  comments?: {
    /**
     * Collection of Detailed information on comments for the customer.
     * @maxItems 4000
     */
    commentInfo?: CommentInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of loyalty program(s) the profile is subscribed to. */
  profileMemberships?: {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @maxItems 4000
     */
    profileMembership?: ProfileMembershipType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer preferences. */
  preferenceCollection?: {
    /**
     * Collection of Detailed information on preferences of the customer.
     * @maxItems 4000
     */
    preferenceType?: PreferenceTypeType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer keywords. */
  keywords?: {
    /**
     * Collection of keywords attached to the profile.
     * @maxItems 4000
     */
    keyword?: KeywordType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** Indicators of additional information attached to the profile */
  profileIndicators?: IndicatorsType;
  /** Information on last stay of the profile. */
  lastStayInfo?: LastStayInfoType;
  /** Detailed information on access type associated with the profile. */
  profileAccessType?: ProfileAccessType;
  /** Detailed information on restrictions associated with the profile. */
  profileRestrictions?: ProfileRestrictions;
  /** Contains collection of mailing action list associated with the profile */
  mailingActions?: MailingActionsType;
  /** Contains privacy related information associated with the profile */
  privacyInfo?: PrivacyInfoType;
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /**
   * Localization Guest Type assocaited to the profile.
   * @minLength 0
   * @maxLength 20
   */
  localizationGuestType?: string;
  /**
   * Eligible for Fiscal Folio/Payload generation.
   * @minLength 0
   * @maxLength 20
   */
  eligibleForFiscalFolio?: string;
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
  /**
   * What level this profile is protected.
   * @minLength 0
   * @maxLength 40
   */
  protectedBy?: string;
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
  /** Mark this profile as recently accessed. */
  markAsRecentlyAccessed?: boolean;
  /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
  markForHistory?: boolean;
  /** Populates true if the profile has commission configured false otherwise. */
  hasCommission?: boolean;
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
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface CommentType {
  /** Formatted text content. */
  text?: FormattedTextTextType;
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
  /** When true, the note internal could be modified. */
  overrideInternal?: boolean;
  /**
   * If specified comment belongs to the Hotel, otherwise it is a global comment.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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

/** Provides text and indicates whether it is formatted or not. */
export interface FormattedTextTextType {
  value?: string;
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
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
   * @maxLength 20
   */
  type?: string;
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

/** Contains basic data on the customer's identity, location, relationships, finances, memberships, etc. */
export interface CustomerType {
  /**
   * Detailed name information for the customer.
   * @maxItems 5
   */
  personName?: PersonNameType[];
  /** Provides information about the guest's anonymization status */
  anonymization?: AnonymizationType;
  /** Name of the (self-professed) country that is claimed for citizenship. */
  citizenCountry?: CountryNameType;
  /** List of identification of the customer. */
  identifications?: {
    /**
     * Collection of detailed information on the identification of the customer.
     * @maxItems 4000
     */
    identificationInfo?: IdentificationInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /**
   * Profession of a person.
   * @minLength 0
   * @maxLength 80
   */
  profession?: string;
  /** Immigration/visa information of a foreign person. */
  alienInfo?: AlienInfoType;
  /** Country of birth. */
  birthCountry?: CountryNameType;
  /**
   * Business Title.
   * @minLength 0
   * @maxLength 80
   */
  businessTitle?: string;
  /**
   * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
   * @minLength 0
   * @maxLength 20
   */
  gender?: string;
  /**
   * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
   * @format date
   */
  birthDate?: string;
  /**
   * Indicates the date of birth as masked.
   * @maxLength 2000
   */
  birthDateMasked?: string;
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
   * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
   * @minLength 0
   * @maxLength 20
   */
  customerValue?: string;
  /**
   * Credit Rating of the customer.
   * @minLength 0
   * @maxLength 20
   */
  creditRating?: string;
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
  /**
   * Place of birth.
   * @minLength 0
   * @maxLength 80
   */
  birthPlace?: string;
  /** This element tells profile is property exclusive or not. */
  privateProfile?: boolean;
  /** This element tells if profile is blacklisted or not. */
  blacklist?: boolean;
}

/** immigration/visa information of a foreign person. */
export interface AlienInfoType {
  /**
   * Alien Registration Number.
   * @maxLength 2000
   */
  alienRegistrationNo?: string;
  /**
   * Immigration Status on an Alien.
   * @minLength 0
   * @maxLength 40
   */
  immigrationStatus?: string;
  /**
   * Visa Type of an Alien.
   * @minLength 0
   * @maxLength 40
   */
  visaValidityType?: string;
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
export enum AnonymizationStatusType {
  Requested = 'Requested',
  Anonymized = 'Anonymized',
}

/** Information on the identification of the customer. */
export interface IdentificationInfoType {
  /** Detailed information on the identification of the customer. */
  identification?: IdentificationType;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Identification information of the customer. */
export interface IdentificationType {
  /**
   * Identification Type. Eg Passport, Driving License etc.
   * @minLength 0
   * @maxLength 40
   */
  idType?: string;
  /**
   * Identification Number.
   * @minLength 0
   * @maxLength 80
   */
  idNumber?: string;
  /**
   * Masked Identification Number.
   * @minLength 0
   * @maxLength 80
   */
  idNumberMasked?: string;
  /**
   * The country where Identification was issued.
   * @minLength 0
   * @maxLength 20
   */
  issuedCountry?: string;
  /**
   * Issued date of Identification.
   * @format date
   */
  issuedDate?: string;
  /**
   * The place where Identification was issued.
   * @minLength 0
   * @maxLength 80
   */
  issuedPlace?: string;
  /**
   * Expiration date of Identification.
   * @format date
   */
  expirationDate?: string;
  /**
   * Property where the identification belongs to.
   * @minLength 0
   * @maxLength 20
   */
  registeredProperty?: string;
  /** When true, indicates a primary information. */
  primaryInd?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
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
  /**
   * Envelope Greeting of the profile
   * @maxLength 2000
   */
  envelopeGreeting?: string;
  /**
   * Salutation of the profile
   * @maxLength 2000
   */
  salutation?: string;
  /** Type of name of the individual, such as former, nickname, alternate or alias name. */
  nameType?: PersonNameTypeType;
  /**
   * Language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  language?: string;
}

/** Person's name in an external system. */
export enum PersonNameTypeType {
  Primary = 'Primary',
  Alternate = 'Alternate',
  Incognito = 'Incognito',
  External = 'External',
  Phonetic = 'Phonetic',
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

/** Detailed information of the memberships. */
export interface ProfileMembershipType {
  /** Additional comments regarding to the membership. */
  comment?: ParagraphType;
  /**
   * Card Number of the membership.
   * @maxLength 2000
   */
  newMembershipNumber?: string;
  /**
   * Name to be displayed on the membership card.
   * @maxLength 2000
   */
  nameOnCard?: string;
  /**
   * Description of the membership program.
   * @maxLength 2000
   */
  programDescription?: string;
  /**
   * Indicates the membership level.
   * @maxLength 2000
   */
  membershipLevel?: string;
  /**
   * Indicates the membership level description.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevelDescription?: string;
  /**
   * Indicates the membership class.
   * @maxLength 2000
   */
  membershipClass?: string;
  /** Earning preference to the membership. */
  earningPreference?: MembershipEarningPreferenceType;
  /** Indicates whether membership is active or inactive. */
  inactive?: boolean;
  /** benefits for the membership. */
  benefits?: BenefitsType;
  /** Defines the degree of participation for this membership in the tier management portion of the program. */
  tierAdministration?: TierAdministrationType;
  /** Defines how downgrading will be handled for this membership. */
  downgrade?: DowngradeType;
  /** The status of issuing new membership card to the member. */
  reIssueNewCard?: CardReIssueType;
  /** True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false. */
  excludeFromBatch?: boolean;
  /**
   * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
   * @minLength 0
   * @maxLength 32000
   */
  upgradeDescription?: string;
  /**
   * Indicates information regarding the member's possible downgrades.
   * @minLength 0
   * @maxLength 32000
   */
  downgradeDescription?: string;
  /**
   * Value Rating Type Description for this membership.
   * @maxLength 2000
   */
  rating?: string;
  /**
   * Indicates how the guest enrolled in the program.
   * @minLength 0
   * @maxLength 20
   */
  membershipEnrollmentCode?: string;
  /**
   * Indicates where the guest is in the membership enrollment process.
   * @minLength 0
   * @maxLength 20
   */
  memberStatus?: string;
  /** Profile MemberShip Points. */
  currentPoints?: number;
  /**
   * Label used to refer to points for this membership type
   * @minLength 0
   * @maxLength 20
   */
  pointsLabel?: string;
  /**
   * Source from where the enrollment is done.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentSource?: string;
  /**
   * Resort/CRO where enrollment is done.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentResort?: string;
  /** Preferred Card. */
  preferredCard?: boolean;
  /**
   * Card Number of the membership.
   * @maxLength 2000
   */
  membershipId?: string;
  /**
   * Type of membership.
   * @maxLength 2000
   */
  membershipType?: string;
  /** Boolean indicator set to True implies membership is a Primary Membership. */
  primaryMembership?: boolean;
  /** Membership ID Number. */
  membershipIdNo?: number;
  /** Ranking assigned to the Player Profile by the Gaming system. */
  playerRanking?: number;
  /** Indicates how the award points for this membership type will be managed. */
  centralSetup?: boolean;
  /**
   * Indicates when the member signed up for the loyalty program.
   * @format date
   */
  signupDate?: string;
  /**
   * Indicates the starting date.
   * @format date
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   */
  expireDate?: string;
  /** When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). */
  expireDateExclusiveIndicator?: boolean;
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
}

/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface ParagraphType {
  /** Formatted text content. */
  text?: FormattedTextTextType;
}

/** Do not upgrade membership. The membership may be downgraded. */
export enum TierAdministrationType {
  Disabled = 'Disabled',
  NoUpgrade = 'NoUpgrade',
}

/** Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace. */
export enum DowngradeType {
  Grace = 'Grace',
  Never = 'Never',
  Period = 'Period',
}

/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
export enum MembershipEarningPreferenceType {
  Points = 'Points',
  Miles = 'Miles',
}

/** Request to re issue a new card. */
export enum CardReIssueType {
  Pending = 'Pending',
  NotApplicable = 'NotApplicable',
  Requested = 'Requested',
}

/**
 * Basic information about membership benefit.
 * @maxItems 4000
 */
export type BenefitsType = BenefitType[];

/** Basic information about membership benefit. */
export interface BenefitType {
  /**
   * Benefit code associated with a membership.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Processing message for membership benefit.
   * @minLength 0
   * @maxLength 4000
   */
  message?: string;
  /** Indicates whether membership benefit is active or inactive. */
  inactive?: boolean;
}

export interface ProfileRestrictions {
  /**
   * Restriction reason associated with the current profile.
   * @minLength 0
   * @maxLength 20
   */
  reason?: string;
  /**
   * Description of restriction reason.
   * @minLength 0
   * @maxLength 2000
   */
  reasonDescription?: string;
  /** True indicates there are restrictions associated with the current profile. */
  restricted?: boolean;
}

export enum ProfileStatusType {
  Active = 'Active',
  Inactive = 'Inactive',
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ReservationIdList = UniqueIDType[];

/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
export enum HousekeepingRoomStatusType {
  Clean = 'Clean',
  Dirty = 'Dirty',
  Pickup = 'Pickup',
  Inspected = 'Inspected',
  OutOfOrder = 'OutOfOrder',
  OutOfService = 'OutOfService',
}

/** Provides information about the Tax Type. */
export interface TaxTypeType {
  /**
   * Code of the Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Code of the Tax Type.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Tax Type.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** A boolean flag for Collecting Agent Tax */
  collectingAgentTax?: boolean;
  /** Print auto adjust information for this tax type on the tax exempt report. */
  printAutoAdjust?: boolean;
  /** Number of days after which the guest will be tax exempt. Only used for tax exempt report. */
  reportExemptDays?: number;
  /**
   * Tax percentage. Only used for tax exempt report.
   * @min 0
   * @max 100
   */
  reportTaxPerc?: number;
  /** Minimun Length of Stay. */
  minimumLengthOfStay?: number;
}

/** @maxItems 4000 */
export type ResAttachedProfileListType = ResAttachedProfileType[];

export interface ResAttachedProfileType {
  /**
   * Attached profile name
   * @maxLength 2000
   */
  name?: string;
  /** Collection of unique profile identifiers */
  profileIdList?: ProfileIdList;
  resProfileType?: ResProfileTypeType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];

export enum ResProfileTypeType {
  Company = 'Company',
  Group = 'Group',
  TravelAgent = 'TravelAgent',
  Source = 'Source',
  ReservationContact = 'ReservationContact',
  BillingContact = 'BillingContact',
  Addressee = 'Addressee',
}

/** Communication details for a reservation. */
export interface ResCommunicationType {
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
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
   * @maxLength 20
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
   * @maxLength 20
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
}

/** Information regarding the Date, Duration and Priority of the reservation on Queue for Check in. */
export interface ReservationQueueInformationType {
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, whild Duration provides a measure of time to add to the StartDate to yield end date. */
  timeSpan?: {
    /** @format date */
    startDate?: string;
    /** @format date */
    endDate?: string;
    duration?: string;
    /** The total duration, in seconds, the reservation is on Queue. */
    durationInSeconds?: number;
  };
  /** Information for the message sent to the user */
  guestTextInfo?: QueueTextInfoType;
  /** The Queue Priority given to this reservation. */
  priority?: number;
  /** The average time, in seconds, a reservation was on queue prior to Check-In. */
  avgQueueTimeToCheckIn?: number;
  /** The average time, in seconds, of the reservations currently in queue. */
  avgQueueTimeCurrentReservations?: number;
  /**
   * The Business date on which the reservation was due to arrive and is currently placed on Queue for Check In.
   * @format date
   */
  queueDate?: string;
}

/** Information regarding the message sent to guest. */
export interface QueueTextInfoType {
  /**
   * Time the text was last sent to the user.
   * @format date-time
   */
  sentTime?: string;
  /**
   * User name of the user who sent message.
   * @minLength 0
   * @maxLength 40
   */
  sentBy?: string;
}

/** Point of Sale of reservation. Identifies the entity/channel who made the reservation. */
export interface SourceOfSaleType {
  /**
   * Type of entity/channel who made the reservation..
   * @minLength 0
   * @maxLength 40
   */
  sourceType?: string;
  /**
   * The entity/channel who made the reservation.
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
}

/** Cashiering Information for the reservation. */
export interface ResCashieringType {
  /** Revenues and Balances Amount summary for the reservation. */
  revenuesAndBalances?: ResRevenueBalanceType;
  /** Billing privileges set on the reservation. */
  billingPrivileges?: BillingPrivilegesType;
  /** This stores the code for the type of tax calculation especially with tax exemption, etc. */
  taxType?: ReservationTaxTypeInfo;
  /** This stores the information for Bed Tax Reporting. Mainly used in Maldives. */
  bedTaxReporting?: BedTaxReportingType;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /** Information regarding periodic folios set on the reservation. */
  periodicFolio?: ResPeriodicFolioType;
  /** Information regarding comp accounting on the reservation. */
  compAccounting?: ResCompAccountingType;
  /** Information regarding the selected preconfigured routing instruction on the reservation. */
  resPreConfiguredRoutingInstruction?: ResPreConfiguredRoutingInstrType;
  /** The guest from whom payment has to be recovered (direct guest). */
  financiallyResponsible?: boolean;
  /** In case of Appartment style billing indicates whether a prorated amount should be used for an Apartment Style Billing rate. */
  proratedBilling?: boolean;
  /**
   * Date of the last Room And Tax posting. Used primarily to know the date in case of Advance Billing.
   * @format date
   */
  lastRoomAndTaxPostedDate?: string;
  /** This attribute is to verify if reverse check-in is allowed for the reservation. */
  reverseCheckInAllowed?: boolean;
  /** This attribute is to verify if reverse advance check-in is allowed for the reservation. */
  reverseAdvanceCheckInAllowed?: boolean;
  /** Specifies whether reservation has a financial transaction associated with it. */
  transactionsPosted?: boolean;
}

/** This stores the information the type of tax calculation especially with tax exemption, etc. */
export interface FolioTextsType {
  /**
   * This stores the description for the type of tax calculation especially with tax exemption, etc.
   * @maxItems 2
   */
  folioText?: {
    /**
     * Additional text field to display on the folio.
     * @minLength 0
     * @maxLength 50
     */
    text?: string;
    /** Row number of the additional text. */
    row?: number;
  }[];
}

/** This stores the information for Bed Tax Reporting. Mainly used in Maldives. */
export interface BedTaxReportingType {
  /** Tax Registration Number for Maldives Bed Tax Reporting. */
  taxRegistrationNo?: number;
  /**
   * Visa number used for Maldives Bed Tax Reporting
   * @minLength 0
   * @maxLength 40
   */
  visaNumber?: string;
  /**
   * Visa Issue Date used for Maldives Bed Tax Reporting.
   * @format date
   */
  visaIssueDate?: string;
  /**
   * Visa Expiration Date used for Maldives Bed Tax Reporting
   * @format date
   */
  visaExpiryDate?: string;
  /** Number of days for which the Maldives tax is applicable. */
  taxableDays?: number;
}

/** Instruction to attach Pre-Configured Routing Instructions to a Reservation. */
export interface ResPreConfiguredRoutingInstrType {
  /**
   * Rate Code with attached Routing Instruction.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** Profile Type with attached Routing Instruction. */
  profileType?: ResProfileTypeType;
  /**
   * Promotion Code with attached Complimentary Routing.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
}

/** Revenue and Balance Amount summary for the reservation. */
export interface ResRevenueBalanceType {
  /** Total Fixed Charges on the reservation. */
  totalFixedCharge?: CurrencyAmountType;
  /** Total payment received for the reservation. */
  totalPayment?: CurrencyAmountType;
  /** Room Revenue generated by the reservation. */
  roomRevenue?: CurrencyAmountType;
  /** Food and Beverage Revenue generated by the reservation. */
  foodAndBevRevenue?: CurrencyAmountType;
  /** Other Revenue generated by the reservation. */
  otherRevenue?: CurrencyAmountType;
  /** Total Non Revenue posted on the reservation. */
  nonRevenue?: CurrencyAmountType;
  /** Total Revenue generated by the reservation. */
  totalRevenue?: CurrencyAmountType;
  /** Balance amount on the reservation. */
  balance?: CurrencyAmountType;
}

/** A monetary value expressed with a currency code. */
export interface CurrencyAmountType {
  /** A monetary amount. */
  amount?: number;
}

/** Information regarding periodic folios set on the reservation. */
export interface ResPeriodicFolioType {
  /**
   * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
   * @format date
   */
  lastSettlementDate?: string;
  /**
   * Latest date when a folio was printed using the "Periodic Batch Folios" option
   * @format date
   */
  lastFolioDate?: string;
  /** Frequency in number of days when folios should be printed for this reservation. */
  frequency?: number;
}

/** Information regarding comp accounting on the reservation. */
export interface ResCompAccountingType {
  /**
   * Code used to identify the casino comp type and ranking of a guest.
   * @minLength 0
   * @maxLength 20
   */
  compType?: string;
  /**
   * ID of the employee who will act as the host for this guest.
   * @minLength 0
   * @maxLength 40
   */
  authorizer?: string;
}

/** This stores the information for Bed Tax Reporting. Mainly used in Maldives. */
export interface BillingPrivilegesType {
  /** Flag used by interface program during check in. */
  postingRestriction?: boolean;
  /** Indicates if the reservation has charging privileges before arrival. */
  preStayCharging?: boolean;
  /** Indicates if the reservation has charging privileges after checkout. */
  postStayCharging?: boolean;
  /**
   * Date when folio was closed. This works with PostStayCharging flag.
   * @format date
   */
  folioCloseDate?: string;
  /** Indicates if the guest is scheduled for automatic check out. */
  scheduledCheckout?: boolean;
  /**
   * Time of automatic check out if guest is schedule for automatic check out.
   * @format date
   */
  scheduledCheckoutTime?: string;
  /** If Direct bill is authorized this will hold User ID who authorized it. */
  directBillAuthorized?: boolean;
  /** Indicates if the guest can do video checkout */
  videoCheckout?: boolean;
  /** Indicated if a new reservation should be created and automatically checked in whenever the room is checked out. Available for pseudo room types only. */
  allowAutoCheckin?: boolean;
  /** Indicates if the is a candidate for auto folio settlement. */
  autoSettlement?: boolean;
  /**
   * The folio settlement type for auto folio settlement.
   * @minLength 0
   * @maxLength 40
   */
  autoSettlementType?: string;
  /** The interval of days between each auto folio settlement. */
  autoSettlementFreq?: number;
  /** Indicates if the reservation will be included in the Automatic Credit Limit Overages process and also be listed in the Credit Limit Overages screen results. */
  creditLimitAutoPay?: boolean;
}

/** Provides information about the Tax Type. */
export interface ReservationTaxTypeInfo {
  /**
   * Code of the Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Code of the Tax Type.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the Tax Type.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** A boolean flag for Collecting Agent Tax */
  collectingAgentTax?: boolean;
  /** Print auto adjust information for this tax type on the tax exempt report. */
  printAutoAdjust?: boolean;
  /** Number of days after which the guest will be tax exempt. Only used for tax exempt report. */
  reportExemptDays?: number;
  /**
   * Tax percentage. Only used for tax exempt report.
   * @min 0
   * @max 100
   */
  reportTaxPerc?: number;
  /** Minimun Length of Stay. */
  minimumLengthOfStay?: number;
  /**
   * Tax exempt number on the profile.
   * @minLength 0
   * @maxLength 20
   */
  taxExemptNo?: string;
}

/** Reservation Deposit Type. */
export interface ReservationDepositType {
  /** Deposit Amount Required. */
  amountRequired?: number;
  /** Deposit Amount Paid. */
  amountPaid?: number;
  /** Deposit Amount Owed. */
  amountOwed?: number;
  /**
   * Deposit Due Date.
   * @format date
   */
  dueDate?: string;
  /**
   * Deposit Posting Date.
   * @format date
   */
  postingDate?: string;
  /** Resolves whether reservation has paid deposit. */
  hasPaid?: boolean;
  /** Resolves whether reservation has outstanding deposit. */
  hasOutstanding?: boolean;
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

/** Hotel Interface Type for a reservation and status of the various services */
export interface ReservationInterfaceStatusType {
  /**
   * Identifier for the room extension
   * @minLength 0
   * @maxLength 20
   */
  roomExtension?: string;
  /** Hotel interface information for the reservation */
  hotelInterface?: HotelInterfaceType;
  /**
   * Contains a list of status/rights for the various services under this interface
   * @maxItems 4000
   */
  interfaceRights?: InterfaceRightsStatusType[];
}

export interface InterfaceRightsStatusType {
  /** Internal code for each allowed right of a Hotel Interface record. */
  right?: number;
  /**
   * User defined code for an Interface Right.
   * @minLength 0
   * @maxLength 5
   */
  statusCode?: string;
  /**
   * User defined description for an Interface Right.
   * @minLength 0
   * @maxLength 80
   */
  description?: string;
  /**
   * Category code of this interface right.
   * @minLength 0
   * @maxLength 1
   */
  category?: string;
}

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

/** XML Posting Interface */
export enum HotelInterfaceTypeType {
  Bms = 'Bms',
  Cas = 'Cas',
  Ccw = 'Ccw',
  Dls = 'Dls',
  Eft = 'Eft',
  Exp = 'Exp',
  Mak = 'Mak',
  Mbs = 'Mbs',
  Msc = 'Msc',
  Pbx = 'Pbx',
  Pos = 'Pos',
  Svs = 'Svs',
  Tik = 'Tik',
  Vid = 'Vid',
  Vms = 'Vms',
  Www = 'Www',
  Xml = 'Xml',
}

/** Status of the Hotel Interface either STOPPED or RUNNING. */
export enum HotelInterfaceStatusType {
  Stopped = 'Stopped',
  Running = 'Running',
  Waiting = 'Waiting',
  StopInitiated = 'StopInitiated',
  StartInitiated = 'StartInitiated',
  RebootInitiated = 'RebootInitiated',
  Other = 'Other',
}

export interface ReservationPaymentMethodType {
  /** Information on a credit card for the customer. */
  paymentCard?: ResPaymentCardType;
  /** A monetary value expressed with a currency code. */
  balance?: CurrencyAmountType;
  /** Configured rule for computing the amount to authorize. */
  authorizationRule?: AuthorizationRuleType;
  /** Information on an email for the customer. */
  emailFolioInfo?: {
    /** eMail deatils for the profile. */
    email?: EmailType;
    emailFolio?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
  };
  /**
   * @minLength 0
   * @maxLength 20
   */
  paymentMethod?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  folioView?: number;
}

/** Information on a credit card for the customer. */
export interface ResPaymentCardType {
  /** credit card id */
  cardId?: UniqueIDType;
  /** A monetary value expressed with a currency code. */
  currentAuthorizedAmount?: CurrencyAmountType;
  /** A monetary value expressed with a currency code. */
  approvalAmountNeeded?: CurrencyAmountType;
  /** Indicates the type of credit card from a defined list */
  cardType?: CardTypeType;
  /**
   * Indicates the user defined credit card type if credit card type from a defined list is not provided
   * @minLength 0
   * @maxLength 2
   */
  userDefinedCardType?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  cardNumber?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  cardNumberMasked?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  cardNumberLast4Digits?: string;
  /**
   * Expiration date of the credit card
   * @format date
   */
  expirationDate?: string;
  /**
   * Masked Expiration date of the credit card
   * @minLength 0
   * @maxLength 20
   */
  expirationDateMasked?: string;
  expirationDateExpired?: boolean;
  /**
   * @minLength 0
   * @maxLength 200
   */
  cardHolderName?: string;
  /** Attach the credit card to profile. */
  attachCreditCardToProfile?: boolean;
  /** This contains information on whether EFT is enabled. A value of 'C' indicates EFT is enabled and 'M' indicates manual authorization is available for this payment card type. */
  processing?: CardProcessingType;
  swiped?: boolean;
  /** This contains information on whether credit card is tokenized (token enabled). A value of 'Token' indicates credit card is token enabled and 'CardNumber' indicates non token environment for this payment card type. */
  cardNumberType?: CardNumberTypeType;
}

/** Simple type for indicating if credit card number is tokenized. */
export enum CardNumberTypeType {
  CardNumber = 'CardNumber',
  Token = 'Token',
}

export enum CardProcessingType {
  Eft = 'Eft',
  Manual = 'Manual',
}

/** This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. */
export enum CardTypeType {
  Ab = 'Ab',
  Am = 'Am',
  Ax = 'Ax',
  Cb = 'Cb',
  Dc = 'Dc',
  Ds = 'Ds',
  Dt = 'Dt',
  Ec = 'Ec',
  Er = 'Er',
  Jc = 'Jc',
  Jl = 'Jl',
  Mc = 'Mc',
  Nb = 'Nb',
  So = 'So',
  St = 'St',
  Sw = 'Sw',
  Va = 'Va',
  Xy = 'Xy',
  Zz = 'Zz',
  Cp = 'Cp',
  Cu = 'Cu',
}

/** Configured rule for computing the amount to authorize. */
export interface AuthorizationRuleType {
  /** The authorization rule code. */
  code?: number;
  /** The amount applicable to the authorization rule. */
  amount?: CurrencyAmountType;
  /** A percentage value if the authorization rule is percentage based. */
  percent?: number;
}

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
  /** Room Id */
  numberOfRooms?: number;
  /**
   * Room Id
   * @minLength 0
   * @maxLength 20
   */
  roomNumber?: string;
  /**
   * Rate plan code
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** Rate amount */
  rateAmount?: CurrencyAmountType;
  /** The Points contains the number of points used to book a particular room type. */
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
  partyCode?: string;
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
   * Source of business
   * @minLength 0
   * @maxLength 20
   */
  sourceOfBusiness?: string;
  /**
   * Description of the source of business.
   * @minLength 0
   * @maxLength 4000
   */
  sourceOfBusinessDescription?: string;
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
  /** When true, indicates a room number cannot be changed. When false, indicates a room number may be changed. */
  roomNumberLocked?: boolean;
  /** True indicates as pseudo room type. This is usually used for a posting master reservation. */
  pseudoRoom?: boolean;
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

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type BlockIdList = UniqueIDType[];

/** The Redeem Points contains the number of points required to book a room type. */
export interface PointsType {
  /**
   * Awards type for the award type rate code.
   * @maxLength 2000
   */
  awardsType?: string;
  /** No of points required to book this Room Stay. */
  points?: number;
}

/** Possible values for the Guest Service Status. */
export enum GuestHousekeepingServiceRequestType {
  DoNotDisturb = 'DoNotDisturb',
  MakeUpRoom = 'MakeUpRoom',
  NoStatusSelected = 'NoStatusSelected',
}

/** Holds the Arrival and Departure Time Information */
export interface ResExpectedTimesType {
  /**
   * Arrival Time
   * @format date-time
   */
  resExpectedArrivalTime?: string;
  /**
   * Departure Time
   * @format date-time
   */
  resExpectedDepartureTime?: string;
}

/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, whild Duration provides a measure of time to add to the StartDate to yield end date. */
export interface TimeSpanType {
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  duration?: string;
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
   * Promotion Coupon Code when promotion is setup to have a valid coupon code.
   * @minLength 0
   * @maxLength 40
   */
  couponCode?: string;
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

/**
 * Allowed action.
 * @maxItems 11
 */
export type ReservationAllowedActionsType = ReservationAllowedActionType[];

/** Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. */
export enum ReservationAllowedActionType {
  Cancel = 'Cancel',
  Move = 'Move',
  PreCharge = 'PreCharge',
  PostCharge = 'PostCharge',
  FacilitySchedule = 'FacilitySchedule',
  Upsell = 'Upsell',
  PreCheckIn = 'PreCheckIn',
  PostToNoShowCancel = 'PostToNoShowCancel',
  NoShow = 'NoShow',
  NameChange = 'NameChange',
  Discount = 'Discount',
  EnrollToPrimaryMembership = 'EnrollToPrimaryMembership',
  EnrollInProgress = 'EnrollInProgress',
}

/** Holds housekeeping turndown service information for the room. */
export interface ResHousekeepingType {
  /**
   * Turndown instructions for the room.
   * @maxLength 2000
   */
  instructions?: string;
  /** The facility task applicable for the current day. This will be information only and not used for any updates. */
  facilityTaskInfo?: FacilityTaskType;
  /** Indicates if a linen change is necessary. */
  linenChange?: boolean;
  /** Indicates whether guest wants turndown facility or not. */
  turndownRequested?: boolean;
  /**
   * This is the Turndown room service time.
   * @format date
   */
  serviceTime?: string;
  /** Expected Start Time for housekeeping task(s). */
  expectedServiceTime?: string;
  /** Current room status. Current room status is populated only if room is assigned to the reservation and reservation is due in or in house. */
  roomStatus?: HousekeepingRoomStatusType;
}

/** Information regarding facility task on a reservation. */
export interface FacilityTaskType {
  /** The Task Code. */
  task?: HousekeepingTaskCodeType;
  /** Supplies associated with the task. */
  supplies?: FacilityCodesType;
  /**
   * The Date on which the task is applicable.
   * @format date
   */
  date?: string;
}

/**
 * List of the facility codes.
 * @maxItems 4000
 */
export type FacilityCodesType = FacilityCodeType[];

/** Facility Housekeeping Code, its description and quantity. */
export interface FacilityCodeType {
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
}

/** Information related to a Task Code. Task Codes are used to generate task sheets in Rooms Management. */
export interface HousekeepingTaskCodeType {
  /**
   * Description of the Task Code.
   * @minLength 0
   * @maxLength 80
   */
  description?: string;
  /**
   * Instructions for this Task Code.
   * @minLength 0
   * @maxLength 2000
   */
  instructions?: string;
  /** Indicates if this task code is the default departure task for Facility Tasks. This requires */
  facilityDepartureTask?: boolean;
  /** Indicates if a linen change is necessary. */
  linenChange?: boolean;
  /**
   * Property where this task code is configured.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The Code for the task.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Ordering sequence for display. */
  sequence?: number;
}

/** Contains the status of Room Ready and Key Ready messages. */
export interface ResMobileNotificationsType {
  /** Denotes the status of Room Ready message. It can have one of the values:PENDING, COMPLETED or FAILED */
  roomReady?: CommunicationStatusType;
  /** Denotes the status of Key Ready message. It can have one of the values:PENDING, COMPLETED or FAILED */
  keyReady?: CommunicationStatusType;
  /** Indicates if the Mobile checkout message is received. */
  checkoutMessageReceived?: boolean;
  /** Indicates if user action is required. The action could be for sending Room Ready or Key Ready Notification. It could also be for initiating Checkout */
  requiresAction?: boolean;
  /**
   * Error message when Mobile Notification has failed.
   * @maxLength 2000
   */
  errorMessage?: string;
}

/** Enum to denote the Status of Readiness messages sent to Guest Devices. */
export enum CommunicationStatusType {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
  Sent = 'Sent',
  Received = 'Received',
  Cancelled = 'Cancelled',
  PendingAvailability = 'PendingAvailability',
}

/**
 * Collection of reservation folio windows.
 * @maxItems 4000
 */
export type ReservationFolioWindowsType = ReservationFolioWindowType[];

/** Folio window view which holds the set of folios for a reservation. */
export interface ReservationFolioWindowType {
  /** The window's configured payee information. */
  payeeInfo?: PayeeInfoType;
  /** Running balance of the window. */
  balance?: CurrencyAmountType;
  /**
   * Payment Method Type
   * @minLength 0
   * @maxLength 20
   */
  paymentMethod?: string;
  folioWindowNo?: number;
}

/** Payee information. */
export interface PayeeInfoType {
  /** Opera name id of the payee. */
  payeeId?: UniqueIDType;
  /**
   * Name of the payee.
   * @minLength 0
   * @maxLength 80
   */
  payeeName?: string;
  /** Address of the payee. */
  payeeAddress?: AddressInfoType;
  /** Payee multiple address count. */
  payeeAddressCount?: number;
  /**
   * Reference currency of the payee.
   * @minLength 0
   * @maxLength 20
   */
  payeeReferenceCurrency?: string;
  /** AR account short info of the payee. */
  payeeAccountInfo?: ARAccountShortInfoType;
  /**
   * The tax number of the payee.
   * @minLength 0
   * @maxLength 40
   */
  payeeTaxNumber?: string;
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
   * @maxLength 20
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
  /**
   * Describes the type code
   * @maxLength 2000
   */
  typeDescription?: string;
  /** When true, indicates a primary information. */
  primaryInd?: boolean;
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
}

/** Accounts Receivabales Account details type charged for batched posting. */
export interface ARAccountShortInfoType {
  /**
   * Name of the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountName?: string;
  /** The unique ID for the Account. */
  accountId?: UniqueIDType;
  /**
   * The Account Number for the Account.
   * @minLength 0
   * @maxLength 20
   */
  accountNo?: string;
  /** The status of the account. */
  status?: ARAccountStatusType;
}

/** Type for the Account Status. Status can be restricted and a message/description added to the Account. */
export interface ARAccountStatusType {
  /**
   * The Restriction Code added on the Account. This is available when the functionality for adding restriction codes is ON.
   * @minLength 0
   * @maxLength 20
   */
  restriction?: string;
  /**
   * User defined status message on the Account.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Flag to indicate if the Account is restricted. */
  restricted?: boolean;
}

export enum CommissionPayoutToType {
  TravelAgent = 'TravelAgent',
  Source = 'Source',
  TravelAgentSource = 'TravelAgentSource',
  None = 'None',
}

/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
export enum ResAccessRestrictionType {
  Change = 'Change',
  Cancel = 'Cancel',
  ChangeOrCancel = 'ChangeOrCancel',
}

/** Turndown information for a reservation */
export interface ReservationTurndownInfoType {
  /** Indicates if turndown is allowed or not */
  allowed?: boolean;
  /** Indicates turndown status, values could be required, not required, completed */
  status?: TurndownStatusType;
}

/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
export enum TurndownStatusType {
  Required = 'Required',
  NotRequired = 'NotRequired',
  Compeleted = 'Compeleted',
}

/**
 * Collection of shared guest reservations.
 * @maxItems 4000
 */
export type ResSharedGuestListType = ResSharedGuestInfoType[];

/** Contains information regarding the share reservation. */
export interface ResSharedGuestInfoType {
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  profileId?: ProfileId;
  /**
   * Given name, first name or names
   * @maxLength 2000
   */
  firstName?: string;
  /**
   * Family name, last name.
   * @maxLength 2000
   */
  lastName?: string;
  /**
   * String representation of the full name
   * @maxLength 2000
   */
  fullName?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ProfileId {
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
}

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
  altGivenName?: string;
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
  altSurname?: string;
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
  /**
   * Full display name
   * @maxLength 2000
   */
  fullName?: string;
  /**
   * Altername full display name
   * @maxLength 2000
   */
  altFullName?: string;
  /** Phone number */
  phoneNumber?: PhoneNumberType;
  /** Email address */
  email?: BasicEmailType;
  /**
   * Date of birth
   * @format date
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
  /**
   * Guest profile restricted reason code
   * @maxLength 2000
   */
  guestRestrictedCode?: string;
  /**
   * Guest profile restricted reason description
   * @maxLength 2000
   */
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
   * @maxLength 20
   */
  type?: string;
}

/**
 * Collection of accompany guests
 * @maxItems 4000
 */
export type ResAccompanyGuestListType = ResAccompanyGuestInfoType[];

export interface ResAccompanyGuestInfoType {
  /**
   * Given name, first name or names
   * @maxLength 2000
   */
  firstName?: string;
  /**
   * Family name, last name.
   * @maxLength 2000
   */
  lastName?: string;
  /**
   * String representation of the full name
   * @maxLength 2000
   */
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
 * Given name, first name or names
 * @minLength 0
 * @maxLength 40
 */
export type GivenNameType = string;

/**
 * Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
 * @minLength 0
 * @maxLength 40
 */
export type NamePrefixType = string;

export enum NameTypeType {
  Guest = 'Guest',
  Company = 'Company',
  Agent = 'Agent',
  Contact = 'Contact',
  Source = 'Source',
  Group = 'Group',
  Employee = 'Employee',
  Hotel = 'Hotel',
  Purge = 'Purge',
}

/**
 * Family name, last name.
 * @minLength 0
 * @maxLength 40
 */
export type SurnameType = string;

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

/** Contains last stay related details of the guest. */
export interface GuestLastStayInfoType {
  /**
   * Guest's last stay date.
   * @format date
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

/** The supplier's ranking of the customer. */
export interface VIPType {
  /**
   * VIP Code.
   * @minLength 0
   * @maxLength 20
   */
  vIPCode?: string;
  /**
   * VIP Description.
   * @minLength 0
   * @maxLength 80
   */
  vipDescription?: string;
}

/** Specifies Company or Travel Agent profile using IATA or Corp. No. */
export interface ResGuestExternalInfoType {
  /** Given name, first name or names */
  givenName?: GivenNameType;
  /** Family name, last name. */
  surname?: SurnameType;
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

/** Information relating to Reservation's Advance Checked In state and Expected Time of Return */
export interface AdvanceCheckInType {
  /** Indicates if the reservation is marked as Advance Checked In */
  advanceCheckedIn?: boolean;
  /**
   * Expected Return Time
   * @format date-time
   */
  expectedReturnTime?: string;
  /**
   * ETR Comments
   * @minLength 0
   * @maxLength 2000
   */
  eTRComments?: string;
}

/** Information regarding why reservation is being /has been waitlisted. */
export interface WaitlistResType {
  /**
   * Waitlist Reason Description.
   * @minLength 0
   * @maxLength 2000
   */
  reasonDescription?: string;
  /**
   * Waitlist priority Description.
   * @minLength 0
   * @maxLength 2000
   */
  priorityDescription?: string;
  /**
   * Description why the reservation is being /has been waitlisted.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Waitlist Reason Code.
   * @minLength 0
   * @maxLength 20
   */
  reasonCode?: string;
  /**
   * Waitlist Priority Code.
   * @minLength 0
   * @maxLength 20
   */
  priorityCode?: string;
  /**
   * Guest telephone number.
   * @minLength 0
   * @maxLength 40
   */
  telephone?: string;
}

/**
 * List of Generic Name-Value-Pair Parameters used for super search matches.
 * @maxItems 4000
 */
export type SearchMatchesType = SearchMatchType[];

/** Search match indicating attribute and the matching value. */
export interface SearchMatchType {
  /**
   * Search match attribute.
   * @minLength 0
   * @maxLength 2000
   */
  attribute?: string;
  /**
   * Search match value.
   * @minLength 0
   * @maxLength 2000
   */
  value?: string;
}

/** Provides sales information about the profiles of type company, travel agent, source and contact. */
export interface SalesInfoType {
  /**
   * Defines the scope.
   * @minLength 0
   * @maxLength 2000
   */
  scope?: string;
  /**
   * Defines the scope city.
   * @minLength 0
   * @maxLength 2000
   */
  scopeCity?: string;
  /**
   * Defines the account type.
   * @minLength 0
   * @maxLength 20
   */
  accountType?: string;
  /**
   * Defines the account source.
   * @minLength 0
   * @maxLength 2000
   */
  accountSource?: string;
  /**
   * Defines the industry code.
   * @minLength 0
   * @maxLength 2000
   */
  industryCode?: string;
  /**
   * Defines the Business segments.
   * @minLength 0
   * @maxLength 2000
   */
  businessSegments?: string;
  /**
   * Defines the priority.
   * @minLength 0
   * @maxLength 4000
   */
  priority?: string;
  /**
   * Defines the rooms potential.
   * @minLength 0
   * @maxLength 4000
   */
  roomsPotential?: string;
  /**
   * Defines the action code.
   * @minLength 0
   * @maxLength 4000
   */
  actionCode?: string;
  /**
   * Defines the competition code.
   * @minLength 0
   * @maxLength 4000
   */
  competitionCode?: string;
  /**
   * Defines the influence for the contact profile.
   * @minLength 0
   * @maxLength 2000
   */
  influence?: string;
  /**
   * Defines the Preferred Room for profile.
   * @minLength 0
   * @maxLength 20
   */
  preferredRoom?: string;
  /**
   * Hotel Code used to filter the sales information.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

export interface CompanyType {
  /**
   * Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName?: string;
  /**
   * Second Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName2?: string;
  /**
   * Third Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName3?: string;
  /**
   * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
   * @minLength 0
   * @maxLength 40
   */
  alternateName?: string;
  /**
   * Alternate Language of the company.
   * @minLength 0
   * @maxLength 20
   */
  alternateLanguage?: string;
  /**
   * A jurisdiction(Territory) in which a company is authorized to do business.
   * @minLength 0
   * @maxLength 40
   */
  businessLocale?: string;
  /** IATA Information of the profile. */
  iATAInfo?: IATAInfoType;
  /**
   * Business Title.
   * @minLength 0
   * @maxLength 80
   */
  businessTitle?: string;
  /**
   * The code specifying a monetary unit. Use ISO 4217, three alpha code.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
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
   * Commission code of the company.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
  /**
   * Credit Rating of the company.
   * @minLength 0
   * @maxLength 20
   */
  creditRating?: string;
  /**
   * The type of corporate ID
   * @minLength 0
   * @maxLength 20
   */
  corporateIdType?: string;
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
  /** This element tells if profile is blacklisted or not. */
  blacklist?: boolean;
}

/** IATA Information of the profile. */
export interface IATAInfoType {
  /**
   * IATA Company Detail.
   * @minLength 0
   * @maxLength 20
   */
  iATACompany?: string;
  /**
   * IATA Consortia.
   * @minLength 0
   * @maxLength 40
   */
  iATAConsortia?: string;
  /** IATA Validation Result. */
  iATAValidationResult?: boolean;
}

/** Web site address. */
export interface URLInfoType {
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
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

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

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

/** Contains cashiering related details for the profile */
export interface ProfileCashieringType {
  /**
   * Contains the direct billing related information for the profile.
   * @maxItems 4000
   */
  directBillingList?: DirectBillingType[];
  /**
   * Contains the auto folio settlement type for the profile.
   * @minLength 0
   * @maxLength 40
   */
  autoFolioSettlementType?: string;
  /** Ability to define on the account, the number of days after which the invoice should be paid. */
  paymentDueDays?: number;
  /** Tax1 Percentage for Collecting Agent. */
  taxPercent1?: number;
  /** Tax2 Percentage for Collecting Agent. */
  taxPercent2?: number;
  /** Tax3 Percentage for Collecting Agent. */
  taxPercent3?: number;
  /** Tax4 Percentage for Collecting Agent. */
  taxPercent4?: number;
  /** Tax5 Percentage for Collecting Agent. */
  taxPercent5?: number;
  /**
   * Account Receivables Central Number.
   * @minLength 0
   * @maxLength 20
   */
  arNoCentral?: string;
  /**
   * Reference Currency.
   * @minLength 0
   * @maxLength 20
   */
  referenceCurrency?: string;
  /**
   * VAT Offset Flag.
   * @minLength 0
   * @maxLength 1
   */
  vATOffsetYN?: string;
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
}

/** This is the preconfigured routing instruction type. */
export interface DirectBillingType {
  /**
   * Hotel Code for which the details of direct billing is provided for a profile.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Hotel Code for which the details of direct billing is provided for a profile.
   * @minLength 0
   * @maxLength 20
   */
  aRNumber?: string;
}

/** Contains last stay related details for the profile */
export interface LastStayInfoType {
  /**
   * Used to hold last stay information for the profile.
   * @format date
   */
  lastVisit?: string;
  /**
   * Used to hold last room information for the profile.
   * @maxLength 2000
   */
  lastRoom?: string;
  /** Used to hold last rate information for the profile. */
  lastRate?: CurrencyAmountType;
  /** The total number of previous stay of the profile. */
  totalStay?: number;
}

/** Defines mailing action list for the profile. */
export interface MailingActionsType {
  /**
   * Defines mailing action code and description.
   * @maxItems 4000
   */
  mailingAction?: CodeDescriptionType[];
  /** When true indicates that profile has subscribed to the mailing list. */
  active?: boolean;
  /** Total number of rows queried */
  totalRows?: number;
}

/**
 * List of e-certificates for the profile.
 * @maxItems 4000
 */
export type ECertificatesType = ECertificateType[];

/** E-Certificates details. */
export interface ECertificateType {
  /** System generated unique certificate id. */
  certificateId?: number;
  /**
   * System generated unique voucher number.
   * @minLength 0
   * @maxLength 40
   */
  voucherNo?: string;
  /**
   * Printed certificate no. This has to be unique.
   * @minLength 0
   * @maxLength 40
   */
  certificateNo?: string;
  /** E-Certificates details. */
  eCertificateInfo?: ECertificateInfoType;
  /**
   * Date of expiry.
   * @format date
   */
  expiryDate?: string;
  /**
   * New Date of expiry to extend e-certificate.
   * @format date
   */
  newExpiryDate?: string;
  /** NameId. */
  profileId?: ProfileId;
  /** E-Certificates details. */
  consumptionDetail?: ECertificateConsumptionType;
  /** Status of the certificate. */
  status?: ECertificateStatusType;
  /** Print status of the certificate. */
  printed?: boolean;
  /**
   * Date the record was marked as inactive.
   * @format date
   */
  inactiveDate?: string;
  /** AwardID. */
  awardId?: AwardId;
  /**
   * External reference from which the record is created.
   * @minLength 0
   * @maxLength 20
   */
  databaseId?: string;
  /** Source of e-certificate. */
  source?: ECertificateIssueSourceType;
  /** Process action issued the certificate. valid values are assigned (a),opt in (o) and purchased (p). */
  issueType?: ECertificateIssueType;
  /**
   * Date when certificate was issued.
   * @format date
   */
  issueDate?: string;
  /** Award points if any in case of certificate use membership award. */
  awardPoints?: number;
  /** E-Certificates details. */
  generationDetail?: ECertificateGenerationType;
  /**
   * In case of in lieu of certificate this will contain the original voucher no.
   * @minLength 0
   * @maxLength 40
   */
  originalVoucherNo?: string;
  /**
   * In case of in lieu of certificate this will contain the original certificate no.
   * @minLength 0
   * @maxLength 40
   */
  originalCertificateNo?: string;
  /** Seq of the in lieu of certificate. 1..n. original certificate will be treated as null = 0. */
  inLieuSeq?: number;
  /**
   * Date on which the cancellation was requested.
   * @format date
   */
  cancelRequestDate?: string;
  /** Number of times e-certificate is already extended. */
  extensionCount?: number;
}

/** E-Certificates details. */
export interface ECertificateConsumptionType {
  /**
   * Property where certificate was consumed for.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Source of consumption. */
  source?: ECertificateConsumeSourceType;
  /**
   * Last name of the person who consumed the certificate..
   * @minLength 0
   * @maxLength 40
   */
  surname?: string;
  /**
   * First name of the person who consumed the certificate.
   * @minLength 0
   * @maxLength 40
   */
  firstName?: string;
  /**
   * Middle name of the person who consumed the certificate.
   * @minLength 0
   * @maxLength 40
   */
  middleName?: string;
  /**
   * Email of the person who consumed the certificate.
   * @minLength 0
   * @maxLength 2000
   */
  email?: string;
  /**
   * Date the certificate was consumed.
   * @format date
   */
  date?: string;
  /**
   * Application user who created the consumption.
   * @minLength 0
   * @maxLength 2000
   */
  userName?: string;
  /**
   * Any notes on the certificate entered at time of consumption.
   * @minLength 0
   * @maxLength 4000
   */
  userNotes?: string;
  /** Any reference like reservation no etc against which the certificate was consumed. */
  referenceId?: UniqueIDType;
  /**
   * Consumption location type.
   * @minLength 0
   * @maxLength 20
   */
  locationType?: string;
  /**
   * Authorization code for consumption.
   * @minLength 0
   * @maxLength 100
   */
  authCode?: string;
  /**
   * Date on which the service is due (arrival date in case of reservation).
   * @format date
   */
  serviceDate?: string;
}

/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
export enum ECertificateConsumeSourceType {
  Central = 'Central',
  Web = 'Web',
  Hotel = 'Hotel',
}

/** Indicates that OPERA E-Certificate is issued by external system. */
export enum ECertificateIssueSourceType {
  Opera = 'Opera',
  Web = 'Web',
  Interface = 'Interface',
}

/** E-Certificates details. */
export interface ECertificateInfoType {
  /**
   * User defined certificate code.
   * @minLength 0
   * @maxLength 20
   */
  certificateType?: string;
  /**
   * Membership type to which the certificate is linked to.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * Award type to which the certificate is linked to.
   * @minLength 0
   * @maxLength 20
   */
  awardCode?: string;
  /**
   * Promotion code to which certificate is attached to.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /**
   * Voucher benefit code attached to the certificate.
   * @minLength 0
   * @maxLength 40
   */
  voucherBenefitCode?: string;
  /** Hotel to which certificate is attached to. */
  hotels?: {
    /** @maxItems 4000 */
    code?: string[];
    /** Scope of e-cert: global,single property or multi property. */
    scope?: ECertificateScopeType;
  };
  /**
   * Description about the certificate.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
  /**
   * Detail description about the certificate.
   * @minLength 0
   * @maxLength 4000
   */
  longDescription?: string;
  /**
   * Label for the certificate.
   * @minLength 0
   * @maxLength 40
   */
  label?: string;
  /** Number of times e-certificate can be extended. */
  maxExtensionAllowed?: number;
  /** E-Certificates details. */
  usageCriteria?: ECertificateUsageCriteriaType;
  /** Value of the certificate for the guest. */
  value?: CurrencyAmountType;
  /** Cost of certificate. */
  cost?: CurrencyAmountType;
  /**
   * Summary of Benefits attached to this ECertificate.
   * @minLength 0
   * @maxLength 4000
   */
  benefitSummary?: string;
}

/** Indicates that OPERA E-Certificate is available for a specific list of hotels. */
export enum ECertificateScopeType {
  Global = 'Global',
  Hotel = 'Hotel',
  MultiHotel = 'MultiHotel',
}

/** E-Certificates details. */
export interface ECertificateUsageCriteriaType {
  /** Indicates if certificate is to be used against reservation or not. */
  reservation?: boolean;
  /** Indicates if web certificate can be consumed in OWS. */
  web?: boolean;
  /** Indicates if certificate consumption allowable on the web. */
  webAllowed?: boolean;
  /** Indicates to attach a rate code to the e-certificate as a benefit. */
  benefit?: boolean;
  /** Indicates if web certificate can be consumed in hotel. */
  hotel?: boolean;
  /** Specify if the certificate number verification is required at time of consumption or not. */
  verifyCertificateNo?: boolean;
  /** Identify if cancel is allowed or not. */
  cancelAllowed?: boolean;
  /** Identify if in lieu of certificate can be generated or not. */
  generateInLieuCertificate?: boolean;
}

/** E-Certificates details. */
export interface ECertificateGenerationType {
  /** Key to identify the generation rule id. */
  ruleId?: UniqueIDType;
  /**
   * Reason for which e-certificate was generated.
   * @minLength 0
   * @maxLength 4000
   */
  generationDetail?: string;
  /**
   * Type of value that is in the certificate.valid values are membership_level.
   * @minLength 0
   * @maxLength 20
   */
  referenceValue?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AwardId {
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
}

/** Indicates that OPERA E-Certificate is reserved. */
export enum ECertificateStatusType {
  Cancelled = 'Cancelled',
  Consumed = 'Consumed',
  Deleted = 'Deleted',
  Expired = 'Expired',
  Issued = 'Issued',
  Reserved = 'Reserved',
}

/** Indicates that guest purchased OPERA E-Certificate. */
export enum ECertificateIssueType {
  Assigned = 'Assigned',
  OptedIn = 'OptedIn',
  Purchased = 'Purchased',
}

/** Defines Privacy related information for the profile. */
export interface PrivacyInfoType {
  /** Indicates if the profile participates in market research. */
  marketResearchParticipation?: boolean;
  /**
   * Indicate the last privacy prompt date of the guest.
   * @format date
   */
  lastPrivacyPromptDate?: string;
  /** Indicates if the profile is ok getting info from third parties. */
  infoFromThirdParty?: boolean;
  /** Indicates if the profile wishes to be automatically enrolled in the property's loyalty program. */
  autoEnrollLoyaltyProgram?: boolean;
  /** Indicates if the profile wishes to allow phone calls. */
  allowPhone?: boolean;
  /** Indicates if the profile wishes to allow SMS. */
  allowSMS?: boolean;
  /** Indicates if the profile wishes to allow Email. */
  allowEmail?: boolean;
  /** Indicates if the profile wishes to opt in for Mailing List. */
  optInMailingList?: boolean;
  /** Indicates if the profile wishes to opt in for Market Research. */
  optInMarketResearch?: boolean;
  /** Indicates if the profile wishes to opt in for Third Party. */
  optInThirdParty?: boolean;
  /** Indicates if the profile wishes to opt in for Auto Enrolment Member. */
  optInAutoEnrollmentMember?: boolean;
  /** Indicates if the profile wishes to opt in for Phone. */
  optInPhone?: boolean;
  /** Indicates if the profile wishes to opt in for SMS. */
  optInSms?: boolean;
  /** Indicates if the profile wishes to opt in for Email. */
  optInEmail?: boolean;
}

/** Profile information related to tax. */
export interface ProfileTaxInfoType {
  /**
   * The tax id of this profile. Usually issued by a government agency. Used by 1099 printing.
   * @minLength 0
   * @maxLength 40
   */
  tax1No?: string;
  /**
   * Tax 2 id of this profile.
   * @minLength 0
   * @maxLength 40
   */
  tax2No?: string;
  /**
   * Tax Category to be changed.
   * @minLength 0
   * @maxLength 20
   */
  taxCategory?: string;
  /**
   * Tax Office to be changed.
   * @minLength 0
   * @maxLength 30
   */
  taxOffice?: string;
  /**
   * Tax type to be changed.
   * @minLength 0
   * @maxLength 20
   */
  taxType?: string;
  /**
   * Business ID. The maximum length of this element should not exceed 120 characters.
   * @minLength 0
   * @maxLength 128
   */
  businessId?: string;
  /**
   * Business Registration Code. The maximum length of this element should not exceed 120 characters.
   * @minLength 0
   * @maxLength 128
   */
  businessRegistration?: string;
}

/** This provides information for a profile negotiated rate. */
export interface NegotiatedInfoType {
  /**
   * The master identifier for multiple offices/locations under the same company profile. This is optional
   * @minLength 0
   * @maxLength 80
   */
  corporateAgreementId?: string;
  /**
   * Informational purposes only in numeric format.
   * @minLength 0
   * @maxLength 20
   */
  comissionCode?: string;
  /** The sell order. */
  order?: number;
  /** Negotiated Rate is inactive or not */
  inactive?: boolean;
  /**
   * The starting value of the date range.
   * @format date
   */
  start?: string;
  /**
   * The ending value of the date range.
   * @format date
   */
  end?: string;
}

export interface ProfileAccessType {
  /**
   * Indicates the CRO code where the profile was created
   * @minLength 0
   * @maxLength 200
   */
  croCode?: string;
  /**
   * Indicates the Hotel code where the profile was created
   * @minLength 0
   * @maxLength 200
   */
  hotelId?: string;
  /** Indicates whether the profile is shared at the following levels : global/property/CRO */
  sharedLevel?: ProfileSharedLevelType;
}

/** Simple types for Shared level. */
export enum ProfileSharedLevelType {
  Global = 'Global',
  Property = 'Property',
  Cro = 'Cro',
}

/** Preference details for the profile. */
export interface PreferenceTypeType {
  /**
   * Collection of Preferences for the profile.
   * @maxItems 4000
   */
  preference?: PreferenceType[];
  /**
   * Preference group code.
   * @minLength 0
   * @maxLength 20
   */
  preferenceType?: string;
  /**
   * Preference group description.
   * @maxLength 2000
   */
  preferenceTypeDescription?: string;
  /**
   * Preference Sequence.
   * @maxLength 2000
   */
  sequence?: string;
  /** Maximum quantity of preferences allowed per preference group. */
  maxQuantity?: number;
  /** Available quantity of preferences (maximum quantity - Existing preferences)per preference group. */
  availableQuantity?: number;
  /** Maximum quantity of preferences used by any resort per preference group. */
  maxResortUsedQuantity?: number;
  /** Whether this preference is reservation preference or not. */
  reservationPreference?: boolean;
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
  links?: Links;
}

/** Guest Preference details for the profile. */
export interface PreferenceType {
  /**
   * Preference value for display purposes.
   * @minLength 0
   * @maxLength 200
   */
  preferenceValue?: string;
  /**
   * Preference Description for display purposes.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Whether this preference is property specific or not. */
  global?: boolean;
  /**
   * Source of the preference.
   * @minLength 0
   * @maxLength 40
   */
  source?: string;
  /**
   * If specified preference belongs to the Hotels listed, otherwise it is a global preference.
   * @maxItems 4000
   */
  hotels?: string[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  preferenceCode?: string;
  /** Specifies the count of preferences excluded for the attached reservation preference. */
  excludedPreferencesCount?: number;
}

/**
 * Details of the OPERA Profile subscription to external system
 * @maxItems 4000
 */
export type ProfileSubscriptionListType = ProfileSubscriptionType[];

/** Contains details of the profile subscription. The subscription represents the link between the OPERA profile and the external profile within a particular external system */
export interface ProfileSubscriptionType {
  /** OPERA Profile ID that this subscription record corresponds to. */
  profileId?: ProfileId;
  /** Profile ID within the external system. */
  externalProfileId?: UniqueIDType;
  /** This provides name information for a person. */
  profileInfo?: {
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
    /** OPERA profile type such as Individual or Company */
    profileType?: ProfileTypeType;
  };
  /** Indicates if the profile was distributed to the external system. */
  distributed?: boolean;
  /** Indicates if the profile information should be overwritten by the external system. */
  force?: boolean;
  /**
   * Timestamp when the profile was subscribed to.
   * @format date-time
   */
  subscriptionDate?: string;
  /**
   * Timestamp of the most recent distribution of this profile to the external system.
   * @format date-time
   */
  lastDistributionDate?: string;
  /**
   * Timestamp of the most recent update of the subscription information by the external system.
   * @format date-time
   */
  lastExternalUpdateDate?: string;
  /** Indicates whether this subscription is active or inactive. */
  inactive?: boolean;
}

export interface KeywordType {
  /** The keyword new value, in case keyword value is modified. */
  keywordDetail?: KeywordDetailType;
  /**
   * The type of keyword
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * The keyword value.
   * @minLength 0
   * @maxLength 80
   */
  keyword?: string;
}

export interface KeywordDetailType {
  /**
   * The new keyword value.
   * @minLength 0
   * @maxLength 80
   */
  newKeyword?: string;
}

/** A common type used to hold user defined fields(UDFs). This type should be used to handle UDFs on RReservation, Profiles, etc. */
export interface UserDefinedFieldsType {
  /** Collection of user defined fields of Character/String Type. */
  characterUDFs?: CharacterUDFsType;
  /** Collection of user defined fields of Numeric Type. */
  numericUDFs?: NumericUDFsType;
  /** Collection of user defined fields of Date Type. */
  dateUDFs?: DateUDFsType;
}

/**
 * Used to hold collection of user defined fields of Date Type.
 * @maxItems 4000
 */
export type DateUDFsType = DateUDFType[];

/** Used to hold user defined field of Date Type. */
export interface DateUDFType {
  /**
   * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /**
   * Value of user defined field.
   * @format date
   */
  value?: string;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
}

/**
 * Used to hold collection of user defined fields of Character/String Type.
 * @maxItems 4000
 */
export type CharacterUDFsType = CharacterUDFType[];

/** Used to hold user defined field of Character/String Type. */
export interface CharacterUDFType {
  /**
   * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /**
   * Value of user defined field.
   * @minLength 0
   * @maxLength 2000
   */
  value?: string;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
}

/**
 * Used to hold collection of user defined fields of Numeric Type.
 * @maxItems 4000
 */
export type NumericUDFsType = NumericUDFType[];

/** Used to hold user defined field of Numeric Type. It is highly recommended to use UDFN01, UDFN02,...UDFN40 (Total 40) as Numeric UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. */
export interface NumericUDFType {
  /**
   * Name of user defined field.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /** Value of user defined field. */
  value?: number;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
}

/**
 * Allowed actions for profile operations.
 * @maxItems 2
 */
export type ProfileAllowedActionsType = ProfileAllowedActionType[];

/** Flag indicating whether Profile is Enrolled to Primary Membership Program. */
export enum ProfileAllowedActionType {
  NameChange = 'NameChange',
  TaxIDChange = 'TaxIDChange',
  EnrollToPrimaryMembership = 'EnrollToPrimaryMembership',
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
  /** Allows to supply additional information in the form of name value pairs in Code block, for a given MasterInfoType. */
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

/** Allows to supply additional information in the form of name value pairs in Code block, for a given MasterInfoType. */
export interface AddtionalCodeInfoType {
  /**
   * Holds name of additional code information
   * @maxItems 4000
   */
  code?: {
    /** Holds name of additional code information */
    name?: MasterInfoCodeDetailType;
    /**
     * Holds value of additional code information
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
  }[];
}

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
  Block = 'Block',
}

/** Type provides the detailed information about the profile and its children. */
export interface GuestProfileType {
  /** Detailed customer information for this profile. */
  customer?: CustomerType;
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
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Notes for the customer. */
  comments?: {
    /**
     * Collection of Detailed information on comments for the customer.
     * @maxItems 4000
     */
    commentInfo?: CommentInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of loyalty program(s) the profile is subscribed to. */
  profileMemberships?: {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @maxItems 4000
     */
    profileMembership?: ProfileMembershipType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer preferences. */
  preferenceCollection?: {
    /**
     * Collection of Detailed information on preferences of the customer.
     * @maxItems 4000
     */
    preferenceType?: PreferenceTypeType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer keywords. */
  keywords?: {
    /**
     * Collection of keywords attached to the profile.
     * @maxItems 4000
     */
    keyword?: KeywordType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** Indicators of additional information attached to the profile */
  profileIndicators?: IndicatorsType;
  /** Information on last stay of the profile. */
  lastStayInfo?: LastStayInfoType;
  /** Detailed information on access type associated with the profile. */
  profileAccessType?: ProfileAccessType;
  /** Detailed information on restrictions associated with the profile. */
  profileRestrictions?: ProfileRestrictions;
  /** Contains collection of mailing action list associated with the profile */
  mailingActions?: MailingActionsType;
  /** Contains privacy related information associated with the profile */
  privacyInfo?: PrivacyInfoType;
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /**
   * Localization Guest Type associated to the profile.
   * @minLength 0
   * @maxLength 20
   */
  localizationGuestType?: string;
  /**
   * Eligible for Fiscal Folio/Payload generation.
   * @minLength 0
   * @maxLength 20
   */
  eligibleForFiscalFolio?: string;
  /** Type of profile such as Guest, Employee or Contact. */
  profileType?: GuestProfileTypeType;
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
  /**
   * What level this profile is protected.
   * @minLength 0
   * @maxLength 40
   */
  protectedBy?: string;
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
  /** Mark this profile as recently accessed. */
  markAsRecentlyAccessed?: boolean;
  /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
  markForHistory?: boolean;
  /** Populates true if the profile has commission configured false otherwise. */
  hasCommission?: boolean;
}

/** The types of Profile handled by the web service. */
export enum GuestProfileTypeType {
  Guest = 'Guest',
  Employee = 'Employee',
  Contact = 'Contact',
}

/** Type provides the detailed information about the profile and its children. */
export interface CompanyProfileType {
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
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /**
   * Business/Market Segment associated to the profile.
   * @maxItems 4000
   */
  businessSegments?: string[];
  /**
   * Territory associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  territory?: string;
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Notes for the customer. */
  comments?: {
    /**
     * Collection of Detailed information on comments for the customer.
     * @maxItems 4000
     */
    commentInfo?: CommentInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of loyalty program(s) the profile is subscribed to. */
  profileMemberships?: {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @maxItems 4000
     */
    profileMembership?: ProfileMembershipType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer preferences. */
  preferenceCollection?: {
    /**
     * Collection of Detailed information on preferences of the customer.
     * @maxItems 4000
     */
    preferenceType?: PreferenceTypeType[];
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer keywords. */
  keywords?: {
    /**
     * Collection of keywords attached to the profile.
     * @maxItems 4000
     */
    keyword?: KeywordType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** Indicators of additional information attached to the profile */
  profileIndicators?: IndicatorsType;
  /** Information on last stay of the profile. */
  lastStayInfo?: LastStayInfoType;
  /** Detailed information on access type associated with the profile. */
  profileAccessType?: ProfileAccessType;
  /** Detailed information on restrictions associated with the profile. */
  profileRestrictions?: ProfileRestrictions;
  /** Contains collection of mailing action list associated with the profile */
  mailingActions?: MailingActionsType;
  /** Contains privacy related information associated with the profile */
  privacyInfo?: PrivacyInfoType;
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /**
   * Localization Guest Type associated to the profile.
   * @minLength 0
   * @maxLength 20
   */
  localizationGuestType?: string;
  /**
   * Eligible for Fiscal Folio/Payload generation.
   * @minLength 0
   * @maxLength 20
   */
  eligibleForFiscalFolio?: string;
  /** Type of profile such as Agent, Company, Group and Source. */
  profileType?: CompanyProfileTypeType;
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
  /**
   * What level this profile is protected.
   * @minLength 0
   * @maxLength 40
   */
  protectedBy?: string;
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
  /** Mark this profile as recently accessed. */
  markAsRecentlyAccessed?: boolean;
  /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
  markForHistory?: boolean;
  /** Populates true if the profile has commission configured false otherwise. */
  hasCommission?: boolean;
}

/** The types of Profile handled by the web service. */
export enum CompanyProfileTypeType {
  Agent = 'Agent',
  Company = 'Company',
  Group = 'Group',
  Source = 'Source',
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

/** Post it information of an article. */
export interface ArticlePostItType {
  /** Indicates whether the article is available for post it. */
  availableForPostIt?: boolean;
  /** Color indicator which is only configurable if article is available for post it. */
  color?: ColorType;
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

/** Summary information about a external profile and the associated Unique IDs. */
export interface ExternalProfileSummaryInfoType {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code. */
  profileIdList?: ProfileIdList;
  /** Provides summary information regarding profile. */
  profile?: ExternalProfileSummaryType;
}

/** Type provides the basic information about the external profile. */
export interface ExternalProfileSummaryType {
  /** This provides name information for a person. */
  formerName?: {
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
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @minLength 0
     * @maxLength 20
     */
    gender?: string;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @format date
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @maxLength 2000
     */
    birthDateMasked?: string;
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
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @minLength 0
     * @maxLength 20
     */
    customerValue?: string;
  };
  /** Detailed information on an address for the customer. */
  addressInfo?: AddressInfoType;
  /** Detailed information on telephone/ fax for the customer. */
  telephoneInfo?: TelephoneInfoType;
  /** Detailed information on an eMail address for the customer. */
  emailInfo?: EmailInfoType;
  /** Information on membership for the customer. */
  profileMembership?: ProfileMembershipType;
  /** Detailed information on web url/address for the customer. */
  urlInfo?: URLInfoType;
  /** Owner of the customer. */
  owners?: OwnersType;
  /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
  profileType?: ProfileTypeType;
  /** Status of the profile. Active/Inactive */
  statusCode?: ProfileStatusType;
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
   * Property this profile is registered with.
   * @minLength 0
   * @maxLength 20
   */
  registeredProperty?: string;
}

/**
 * Generic type for a list of owners.
 * @maxItems 4000
 */
export type OwnersType = OwnerType[];

export interface ProfileAdditionalInfoType {
  /**
   * Primary Owner of the profile
   * @minLength 0
   * @maxLength 20
   */
  primaryOwnerCode?: string;
  /**
   * Territory associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  territory?: string;
  /** Indicates if the profile is a Master Account for one or more Subsidiary Accounts. */
  masterAccount?: boolean;
  /** Indicates if the profile is a Subsidiary Account of a Master/Parent Account. */
  subsidiaryAccount?: boolean;
  /**
   * Business Title or Position of the profile.
   * @minLength 0
   * @maxLength 40
   */
  businessPosition?: string;
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

/** VIP status of the customer. */
export interface VIPStatusType {
  /**
   * Used for Character Strings, length 0 to 2000.
   * @minLength 0
   * @maxLength 2000
   */
  value?: string;
  /**
   * VIP status of the customer.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
}

/** Contains basic information of profile. */
export interface PrimaryProfileInfoType {
  /** Unique Identifier for OPERA Profile. */
  profileId?: UniqueIDType;
  /** Type of account such as Agent, Company, and Source. */
  profileType?: ProfileTypeType;
  /**
   * Name of the account.
   * @minLength 0
   * @maxLength 40
   */
  profileName?: string;
}

/** Detailed information about the staged profile. */
export interface StagedProfileType {
  /** List of unique identifier of staged profile. */
  profileIdList?: UniqueIDListType;
  /** Detailed customer information for this profile. */
  customer?: StagedProfileCustomerType;
  /** Detailed company information for this profile. */
  company?: StagedProfileCompanyType;
  /**
   * Collection of detailed information about address for the staged profile.
   * @maxItems 4000
   */
  addresses?: StagedProfileAddressType[];
  /**
   * Collection of detailed information about telephone/fax for the staged profile.
   * @maxItems 4000
   */
  telephones?: StagedProfilePhoneType[];
  /**
   * Collection of detailed information about email for the staged profile.
   * @maxItems 4000
   */
  emails?: StagedProfileEmailType[];
  /**
   * Collection of detailed information about web url/address for the staged profile.
   * @maxItems 4000
   */
  uRLs?: StagedProfileURLType[];
  /**
   * Collection of detailed information about memberships for the staged profile.
   * @maxItems 4000
   */
  memberships?: StagedProfileMembershipType[];
  /**
   * Collection of detailed information about preferences for the staged profile.
   * @maxItems 4000
   */
  preferences?: StagedProfilePreferenceType[];
  /**
   * Collection of detailed information about keyword for the staged profile.
   * @maxItems 4000
   */
  keywords?: StagedProfileKeywordType[];
  /**
   * Collection of detailed information about negotiated rates for the staged profile.
   * @maxItems 4000
   */
  negotiatedRates?: StagedProfileNegotiatedRateType[];
  /**
   * Collection of detailed information about identification for the staged profile.
   * @maxItems 4000
   */
  identifications?: StagedProfileIdentificationsType[];
  /**
   * Collection of routing instructions for the staged profile.
   * @maxItems 4000
   */
  routingInstructions?: StagedProfileRoutingInstructionType[];
  /** List of user defined fields for the staged profile. */
  userDefinedFields?: StagedProfileUserDefinedFieldsType;
  /** Contains collection of mailing action list associated with the profile */
  mailingActions?: MailingActionsType;
  /** Contains privacy related information associated with the profile */
  privacyInfo?: PrivacyInfoType;
  /** List of Notes for the customer. */
  comments?: StagedProfileCommentInfosType;
  /**
   * Hotel code that the staged profile belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The date on which the staged profile has been received.
   * @format date
   */
  importDate?: string;
  /**
   * Type of the staged profile.
   * @minLength 0
   * @maxLength 20
   */
  profileType?: string;
  /**
   * The status of the staged profile.
   * @minLength 0
   * @maxLength 20
   */
  stageStatus?: string;
}

/** Contains basic data on the customer's identity, location, relationships, finances, memberships, etc. */
export interface StagedProfileCustomerType {
  /**
   * Detailed name information for the customer.
   * @maxItems 5
   */
  personName?: PersonNameType[];
  /** Provides information about the guest's anonymization status */
  anonymization?: AnonymizationType;
  /** Name of the (self-professed) country that is claimed for citizenship. */
  citizenCountry?: CountryNameType;
  /** List of identification of the customer. */
  identifications?: {
    /**
     * Collection of detailed information on the identification of the customer.
     * @maxItems 4000
     */
    identificationInfo?: IdentificationInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /**
   * Profession of a person.
   * @minLength 0
   * @maxLength 80
   */
  profession?: string;
  /** Immigration/visa information of a foreign person. */
  alienInfo?: AlienInfoType;
  /** Country of birth. */
  birthCountry?: CountryNameType;
  /**
   * Name Of the company the individual is associated with.
   * @minLength 0
   * @maxLength 80
   */
  legalCompany?: string;
  /**
   * Business Title.
   * @minLength 0
   * @maxLength 80
   */
  businessTitle?: string;
  /**
   * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
   * @minLength 0
   * @maxLength 20
   */
  gender?: string;
  /**
   * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
   * @format date
   */
  birthDate?: string;
  /**
   * Indicates the date of birth as masked.
   * @maxLength 2000
   */
  birthDateMasked?: string;
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
   * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
   * @minLength 0
   * @maxLength 20
   */
  customerValue?: string;
  /**
   * Credit Rating of the customer.
   * @minLength 0
   * @maxLength 20
   */
  creditRating?: string;
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
  /**
   * Place of birth.
   * @minLength 0
   * @maxLength 80
   */
  birthPlace?: string;
  /** This element tells profile is property exclusive or not. */
  privateProfile?: boolean;
  /** This element tells if profile is blacklisted or not. */
  blacklist?: boolean;
  /** List of errors for the staged profile. */
  errors?: {
    /**
     * The error in stage profile.
     * @maxItems 4000
     */
    error?: StagedProfileErrorType[];
  };
  /**
   * ALternate language identification.
   * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
   */
  alternateLanguage?: string;
}

/** Criteria to fetch the staged profile. */
export interface StagedProfileErrorType {
  /** The field that has error. */
  field?: StagedProfileErrorField;
  /**
   * The error description for the staged profile.
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
}

/** Simple type for stage profile error filed to specify which filed in the stage profile has error. */
export enum StagedProfileErrorField {
  PrimaryLanguage = 'PrimaryLanguage',
  AlternateLanguag = 'AlternateLanguag',
  Gender = 'Gender',
  ProfileType = 'ProfileType',
  Nationality = 'Nationality',
  Prefix = 'Prefix',
  VIPStatus = 'VIPStatus',
}

/** Information on a telephone number for the customer. */
export interface StagedProfilePhoneType {
  /** Phone details for the profile. */
  telephone?: TelephoneType;
  /**
   * The error in telephone information in a staged profile with an invalid status.
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /** Indicates whether the phone is the default confirmation method. */
  defaultConfirmation?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Information on the identification of the customer. */
export interface StagedProfileIdentificationsType {
  /** Detailed information on the identification of the customer. */
  identification?: IdentificationType;
  /**
   * The error in negotiated rate information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Hotel code to which the document belongs.
   * @minLength 0
   * @maxLength 20
   */
  documentResort?: string;
  /**
   * The date when the record was inactivated.
   * @format date
   */
  inactiveDate?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/**
 * List of Notes for the customer.
 * @maxItems 4000
 */
export type StagedProfileCommentInfosType = StagedProfileCommentInfoType[];

/** Comment related to the profile/reservation. */
export interface StagedProfileCommentInfoType {
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
  /** The line number of the comment. */
  lineNo?: number;
  /**
   * Indicates comment inactive date.
   * @format date
   */
  inActiveDate?: string;
  /**
   * The error in a user defined field in a staged profile with an invalid status.
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /** Indicates whether the comment information is valid. */
  valid?: boolean;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  allRowsFetched?: boolean;
  /** Total number of rows queried */
  totalRows?: number;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

export interface StagedProfileCompanyType {
  /**
   * Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName?: string;
  /**
   * Second Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName2?: string;
  /**
   * Third Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName3?: string;
  /**
   * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
   * @minLength 0
   * @maxLength 40
   */
  alternateName?: string;
  /**
   * Alternate Language of the company.
   * @minLength 0
   * @maxLength 20
   */
  alternateLanguage?: string;
  /**
   * A jurisdiction(Territory) in which a company is authorized to do business.
   * @minLength 0
   * @maxLength 40
   */
  businessLocale?: string;
  /** IATA Information of the profile. */
  iATAInfo?: IATAInfoType;
  /**
   * Business Title.
   * @minLength 0
   * @maxLength 80
   */
  businessTitle?: string;
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
   * Commission code of the company.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
  /**
   * Credit Rating of the company.
   * @minLength 0
   * @maxLength 20
   */
  creditRating?: string;
  /**
   * The type of corporate ID
   * @minLength 0
   * @maxLength 20
   */
  corporateIdType?: string;
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
  /** This element tells if profile is blacklisted or not. */
  blacklist?: boolean;
  /** List of errors for the staged profile. */
  errors?: {
    /**
     * The error in stage profile.
     * @maxItems 4000
     */
    error?: StagedProfileErrorType[];
  };
}

/** Used to hold user defined fields(UDFs) for staged profile. */
export interface StagedProfileUserDefinedFieldsType {
  /** Collection of user defined fields of Character/String Type. */
  characterUDFs?: StagedProfileCharacterUDFsType;
  /** Collection of user defined fields of Numeric Type. */
  numericUDFs?: StagedProfileNumericUDFsType;
  /** Collection of user defined fields of Date Type. */
  dateUDFs?: StagedProfileDateUDFsType;
}

/**
 * Used to hold collection of user defined fields of Numeric Type.
 * @maxItems 4000
 */
export type StagedProfileNumericUDFsType = StagedProfileNumericUDFType[];

/** Used to hold user defined field of Numeric Type. It is highly recommended to use UDFN01, UDFN02,...UDFN40 (Total 40) as Numeric UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. */
export interface StagedProfileNumericUDFType {
  /**
   * Name of user defined field.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /** Value of user defined field. */
  value?: number;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
  /**
   * The error in a user defined field in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * PMS table name.
   * @minLength 0
   * @maxLength 40
   */
  tableName?: string;
  /** Indicates whether the UDF information is valid. */
  valid?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/**
 * Used to hold collection of user defined fields of Character/String Type.
 * @maxItems 4000
 */
export type StagedProfileCharacterUDFsType = StagedProfileCharacterUDFType[];

/** Used to hold user defined field of Character/String Type. */
export interface StagedProfileCharacterUDFType {
  /**
   * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /**
   * Value of user defined field.
   * @minLength 0
   * @maxLength 2000
   */
  value?: string;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
  /**
   * The error in a user defined field in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * PMS table name.
   * @minLength 0
   * @maxLength 40
   */
  tableName?: string;
  /** Indicates whether the UDF information is valid. */
  valid?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/**
 * Used to hold collection of user defined fields of Date Type.
 * @maxItems 4000
 */
export type StagedProfileDateUDFsType = StagedProfileDateUDFType[];

/** Used to hold user defined field of Date Type. */
export interface StagedProfileDateUDFType {
  /**
   * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
   * @minLength 0
   * @maxLength 20
   */
  name?: string;
  /**
   * Value of user defined field.
   * @format date
   */
  value?: string;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  altname?: string;
  /**
   * The error in a user defined field in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * PMS table name.
   * @minLength 0
   * @maxLength 40
   */
  tableName?: string;
  /** Indicates whether the UDF information is valid. */
  valid?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Information on an email for the customer. */
export interface StagedProfileEmailType {
  /** eMail deatils for the profile. */
  email?: EmailType;
  /**
   * The error in email information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /** Indicates whether the email is the default confirmation method. */
  defaultConfirmation?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Web site address. */
export interface StagedProfileURLType {
  /**
   * The error in URL in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /** Indicates whether the phone is the default confirmation method. */
  defaultConfirmation?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

export interface StagedProfileKeywordType {
  /** The keyword new value, in case keyword value is modified. */
  keywordDetail?: KeywordDetailType;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * The keyword value.
   * @minLength 0
   * @maxLength 80
   */
  keyword?: string;
  /**
   * The error in keyword information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
}

export interface StagedProfileRoutingInstructionType {
  /** Transaction code information in a staged profile with an invalid status */
  transactionInfo?: StagedProfileTrxInfoType;
  /** Configured Billing Instruction in a staged profile with an invalid status */
  billingInstruction?: StagedProfileBillingInstructionType;
}

/** Transaction codes info. */
export interface StagedProfileTrxInfoType {
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
  trxGroup?: string;
  /**
   * Sub category of the transaction code.
   * @minLength 0
   * @maxLength 20
   */
  trxSubGroup?: string;
  /**
   * Unique Universal product code of the transaction code.
   * @minLength 0
   * @maxLength 20
   */
  universalProductCode?: string;
  /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
  routingInstructionsId?: number;
  /** The List of Articles defined for this transaction code, when using the Articles functionality. */
  articles?: {
    /** @maxItems 4000 */
    article?: ArticleInfoType[];
  };
  /**
   * Unique identifier for the Transaction code.
   * @minLength 0
   * @maxLength 20
   */
  trxCode?: string;
  /**
   * Hotel context of the Transaction code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
  printTrxReceipt?: boolean;
  /**
   * The error in transaction code information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Configured Billing Instruction which represents a set of Transaction Codes. */
export interface StagedProfileBillingInstructionType {
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
  /**
   * The error in billing instruction information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Detailed information of the memberships. */
export interface StagedProfileMembershipType {
  /** Additional comments regarding to the membership. */
  comment?: ParagraphType;
  /**
   * Card Number of the membership.
   * @maxLength 2000
   */
  newMembershipNumber?: string;
  /**
   * Name to be displayed on the membership card.
   * @maxLength 2000
   */
  nameOnCard?: string;
  /**
   * Description of the membership program.
   * @maxLength 2000
   */
  programDescription?: string;
  /**
   * Indicates the membership level.
   * @maxLength 2000
   */
  membershipLevel?: string;
  /**
   * Indicates the membership level description.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevelDescription?: string;
  /**
   * Indicates the membership class.
   * @maxLength 2000
   */
  membershipClass?: string;
  /** Earning preference to the membership. */
  earningPreference?: MembershipEarningPreferenceType;
  /** Indicates whether membership is active or inactive. */
  inactive?: boolean;
  /** benefits for the membership. */
  benefits?: BenefitsType;
  /** Defines the degree of participation for this membership in the tier management portion of the program. */
  tierAdministration?: TierAdministrationType;
  /** Defines how downgrading will be handled for this membership. */
  downgrade?: DowngradeType;
  /** The status of issuing new membership card to the member. */
  reIssueNewCard?: CardReIssueType;
  /** True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false. */
  excludeFromBatch?: boolean;
  /**
   * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
   * @minLength 0
   * @maxLength 32000
   */
  upgradeDescription?: string;
  /**
   * Indicates information regarding the member's possible downgrades.
   * @minLength 0
   * @maxLength 32000
   */
  downgradeDescription?: string;
  /**
   * Value Rating Type Description for this membership.
   * @maxLength 2000
   */
  rating?: string;
  /**
   * Indicates how the guest enrolled in the program.
   * @minLength 0
   * @maxLength 20
   */
  membershipEnrollmentCode?: string;
  /**
   * Indicates where the guest is in the membership enrollment process.
   * @minLength 0
   * @maxLength 20
   */
  memberStatus?: string;
  /** Profile MemberShip Points. */
  currentPoints?: number;
  /**
   * Label used to refer to points for this membership type
   * @minLength 0
   * @maxLength 20
   */
  pointsLabel?: string;
  /**
   * Source from where the enrollment is done.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentSource?: string;
  /**
   * Resort/CRO where enrollment is done.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentResort?: string;
  /** Preferred Card. */
  preferredCard?: boolean;
  /**
   * Card Number of the membership.
   * @maxLength 2000
   */
  membershipId?: string;
  /**
   * Type of membership.
   * @maxLength 2000
   */
  membershipType?: string;
  /** Boolean indicator set to True implies membership is a Primary Membership. */
  primaryMembership?: boolean;
  /** Membership ID Number. */
  membershipIdNo?: number;
  /** Ranking assigned to the Player Profile by the Gaming system. */
  playerRanking?: number;
  /** Indicates how the award points for this membership type will be managed. */
  centralSetup?: boolean;
  /**
   * Indicates when the member signed up for the loyalty program.
   * @format date
   */
  signupDate?: string;
  /**
   * Indicates the starting date.
   * @format date
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   */
  expireDate?: string;
  /** When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). */
  expireDateExclusiveIndicator?: boolean;
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
   * The error in membership information in a staged profile with an invalid status.
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Registration resort.
   * @minLength 0
   * @maxLength 20
   */
  registrationResort?: string;
  /**
   * Enrollment code.
   * @minLength 0
   * @maxLength 20
   */
  enrollmentCode?: string;
  /**
   * Membership status.
   * @minLength 0
   * @maxLength 20
   */
  membershipStatus?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /**
   * Device encoded string.
   * @minLength 0
   * @maxLength 200
   */
  deviceCode?: string;
  /**
   * Device disabled date.
   * @format date
   */
  deviceDisabledDate?: string;
  /** Indicates if existing information for primary membership should be overwritten. */
  updateExistingMembership?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Guest Preference details for the profile. */
export interface StagedProfilePreferenceType {
  /**
   * Preference value for display purposes.
   * @minLength 0
   * @maxLength 200
   */
  preferenceValue?: string;
  /**
   * Preference Description for display purposes.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Whether this preference is property specific or not. */
  global?: boolean;
  /**
   * Source of the preference.
   * @minLength 0
   * @maxLength 40
   */
  source?: string;
  /**
   * If specified preference belongs to the Hotels listed, otherwise it is a global preference.
   * @maxItems 4000
   */
  hotels?: string[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  preferenceCode?: string;
  /** Specifies the count of preferences excluded for the attached reservation preference. */
  excludedPreferencesCount?: number;
  /**
   * The error in Preference information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /**
   * Prefernce resort.
   * @minLength 0
   * @maxLength 20
   */
  resortPrefernce?: string;
  /** Indicated whether the preference information is valid. */
  valid?: boolean;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Provides address information. */
export interface StagedProfileAddressType {
  /** Address details for the profile. */
  address?: AddressType;
  /**
   * The error in address information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * Inactivation date of the record.
   * @format date
   */
  inactiveDate?: string;
  /**
   * Postal code extension.
   * @minLength 0
   * @maxLength 15
   */
  postalCodeExtension?: string;
  /**
   * The postal barcode for the address.
   * @minLength 0
   * @maxLength 100
   */
  barCode?: string;
  /** Status of Address Cleansing. */
  cleansStatus?: StagedAddressCleansStatus;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Simple type for status of staged address cleansing. */
export enum StagedAddressCleansStatus {
  NotCleansed = 'NotCleansed',
  Cleansed = 'Cleansed',
  Failure = 'Failure',
}

/** This holds a list of NegotiatedInfoType. */
export interface StagedProfileNegotiatedRateType {
  /** @maxItems 4000 */
  negotiatedInfoList?: NegotiatedInfoType[];
  /**
   * Hotel code for the negotiated rate.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Rate plan code for the negotiated rate.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * The error in negotiated rate information in a staged profile with an invalid status
   * @minLength 0
   * @maxLength 2000
   */
  errorDescription?: string;
  /**
   * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
   * @minLength 0
   * @maxLength 80
   */
  id?: string;
  /**
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** Information about instructions to change the staged profile. */
export interface StagedProfileChangeInstructionsType {
  /** If true then delete and recreat the staged profile details. */
  fullyOverlay?: boolean;
}

/** Unique identifier for a staged profile. */
export interface StagedProfileId {
  /**
   * Hotel code for the staged profile to be reprocessed.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** External profile ID to be reprocessed. */
  profileId?: ProfileId;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ReservationId {
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

/** Date Range with Start and End dates. */
export interface DateRangeType {
  /**
   * The starting value of the date range.
   * @format date
   */
  start?: string;
  /**
   * The ending value of the date range.
   * @format date
   */
  end?: string;
}

/**
 * Profile commission info which contains bank account and commission code details.
 * @maxItems 4000
 */
export type ProfileCommissionAccountInfoListType = ProfileCommissionAccountInfoType[];

/** Profile commission info which contains bank account and commission code details */
export interface ProfileCommissionAccountInfoType {
  /** Unique profile identifier. */
  profileId?: ProfileId;
  /** Bank account details */
  bankAccount?: BankAccountType;
  /** Commission code details */
  commissionCode?: CodeDescriptionType;
}

/** Bank account information like Account ID, Bank Name, Currency, etc. */
export interface BankAccountType {
  /**
   * Property of the bank account.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Bank account ID. */
  bankAccountId?: UniqueIDType;
  /**
   * Account number at the bank.
   * @minLength 0
   * @maxLength 80
   */
  bankAccountNo?: string;
  /**
   * Unique code of the bank account.
   * @minLength 0
   * @maxLength 20
   */
  bankCode?: string;
  /**
   * Code for the branch of the bank.
   * @minLength 0
   * @maxLength 20
   */
  branchCode?: string;
  /**
   * Name of the bank account.
   * @minLength 0
   * @maxLength 2000
   */
  bankName?: string;
  /** Type of payment associated with the bank account. */
  paymentMethod?: CommissionPaymentMethodType;
  /**
   * Type of format for Payment Method.
   * @minLength 0
   * @maxLength 80
   */
  checkFormat?: string;
  /** Currency associated with the bank account. */
  currency?: CodeDescriptionType;
  /** Current check no of the bank account. */
  currentCheckNo?: number;
  /**
   * Property name of the bank account.
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /** Whether this bank account is to be the default in case no bank account is associated with the travel agent or source. */
  default?: boolean;
  /** Whether this bank account is associated with the travel agent or source. */
  linkedToProfile?: boolean;
}

/** This contains a generic code and description information. */
export interface CommissionPaymentMethodType {
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
  /**
   * Payment format if the payment method is EFT.
   * @minLength 0
   * @maxLength 3
   */
  format?: string;
}

/** Contains base info to determine profile commission bank account and code. */
export interface ProfileCommissionAccountCriteriaType {
  /**
   * Hotel code from which the profile bank account and code belongs to
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique profile identifier. */
  profileId?: ProfileId;
  /** Bank account ID. */
  bankAccountId?: UniqueIDType;
  /** Profile commission code */
  commissionCode?: CodeDescriptionType;
  /** Used in CRUD operations. When set to true, proceed validating pending commissions */
  validatePending?: boolean;
}

/** @maxItems 4000 */
export type CodeListType = string[];

/**
 * Current Opera Version Number
 * @minLength 0
 * @maxLength 40
 */
export type OperaVersionNumberType = string;

/**
 * Details of the OPERA Profile subscription to external system
 * @maxItems 4000
 */
export type DuplicateExternalSubscriptionsListType = DuplicateExternalSubscriptionsType[];

/** Contains subscription details about an OPERA Profile that is linked to multiple external profiles within the same external system. */
export interface DuplicateExternalSubscriptionsType {
  /** OPERA Profile ID */
  profileId?: ProfileId;
  /**
   * Code identifying the external database record which is linked to external systems.
   * @minLength 0
   * @maxLength 20
   */
  databaseId?: string;
  /** List of subscriptions where this OPERA profile is linked to multiple external profiles within the same external system */
  profileSubscriptions?: ProfileSubscriptionListType;
}

/**
 * Details of the OPERA Profile subscription to external system
 * @maxItems 4000
 */
export type DuplicateOPERASubscriptionsListType = DuplicateOPERASubscriptionsType[];

/** Contains subscription details about an external profile within a particular external system that is linked to multiple OPERA profiles. */
export interface DuplicateOPERASubscriptionsType {
  /** Profile ID within the external system */
  externalProfileId?: UniqueIDType;
  /** List of profile subscriptions to external system that are linked to the same OPERA Profile */
  profileSubscriptions?: ProfileSubscriptionListType;
}

/** Criteria to identify the profiles to be forgotten. */
export interface ForgetProfilesCriteriaType {
  /** Collection of Unique Identifiers of profiles to be forgotten. */
  profiles?: Profiles;
}

/**
 * Unique identifier for a profile.
 * @maxItems 4000
 */
export type Profiles = ProfileId[];

/** E-Certificates issue API call details. */
export interface ECertificateGenerationDetailsType {
  /** NameId. */
  profileId?: ProfileId;
  /**
   * User defined certificate code.
   * @minLength 0
   * @maxLength 20
   */
  certificateType?: string;
  /** Source of e-certificate. */
  source?: ECertificateIssueSourceType;
  /** Process action issued the certificate. valid values are assigned (a),opt in (o) and purchased (p). */
  issueType?: ECertificateIssueType;
  /**
   * Hotel to which certificate is attached to.
   * @maxItems 4000
   */
  hotels?: string[];
}

/**
 * Collection of suspended profile match statistics.
 * @maxItems 4000
 */
export type SuspendedProfileMatchStatsType = SuspendedProfileMatchStatType[];

/** Type which represents suspended profile match statistics information. */
export interface SuspendedProfileMatchStatType {
  /**
   * Suspended profile which associated with a Hotel code.
   * @minLength 0
   * @maxLength 80
   */
  matchCriteria?: string;
  /** Indicates number of profiles that have met the threshold limit (eg: Upper, Middle and lower) */
  thresholdPoints?: number;
  /**
   * Indicates threshold level(eg: Upper, Middle and lower)
   * @minLength 0
   * @maxLength 30
   */
  threshold?: string;
  /** Type of the suspended profile. */
  profileType?: ProfileTypeType;
}

/**
 * Profile Distribution Filter details.
 * @maxItems 4000
 */
export type ProfileDistributionFiltersType = ProfileDistributionFilterType[];

/** Profile Distribution Filter details. */
export interface ProfileDistributionFilterType {
  /** Unique ID of the Query. */
  queryId?: ProfileDistributionFilterIDType;
  /**
   * Name or code for the query.
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /**
   * Short description for the query.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
  /** Databases to which profile is to be subscribed to. */
  toDatabases?: CodeListType;
  /** Databases for which profile is subscribed to. */
  fromDatabases?: CodeListType;
  /** Country of the property profiles is subscribed to. */
  fromCountry?: CodeListType;
  /** Territory of the property to which profile is subscribed to. */
  fromTerritory?: CodeListType;
  /**
   * Profile Type.
   * @minLength 0
   * @maxLength 20
   */
  profileType?: string;
  /**
   * Membership Type.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * List of membership levels for the membership type.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevels?: string;
  /**
   * List of nationalities to which profile could belong to.
   * @minLength 0
   * @maxLength 4000
   */
  nationalities?: string;
  /**
   * VIP status list.
   * @minLength 0
   * @maxLength 4000
   */
  vIPStatuses?: string;
  /** Restricted profiles. Restricted/Unrestricted/All */
  restricted?: boolean;
  /**
   * Name keyword type.
   * @minLength 0
   * @maxLength 20
   */
  keywordType?: string;
  /**
   * Name keyword.
   * @minLength 0
   * @maxLength 80
   */
  keyword?: string;
  /**
   * List of guest Languages.
   * @minLength 0
   * @maxLength 200
   */
  guestLanguages?: string;
  /**
   * From date range from for arrival or departure date on stay record.
   * @format date
   */
  fromStayDate?: string;
  /**
   * To date range from for arrival or departure date on stay record.
   * @format date
   */
  toStayDate?: string;
  /** List of room labels on stay records. */
  roomLabels?: CodeListType;
  /** List of properties on stay record. */
  stayResorts?: CodeListType;
  /** List of chain code which will determine properties on stay record. */
  stayChains?: CodeListType;
  /** Sum of total revenue on stay records for the time period. */
  totalRevenue?: number;
  /** Sum of room revenue on stay records for the time period. */
  totalRoomRevenue?: number;
  /** Sum of nights on stay records for the time period. */
  totalNights?: number;
  /** Sum of total number of stays on stay records for the time period. */
  totalStays?: number;
  /** Minimum number of different resorts profile has stayed for the time period. */
  minimumStayResorts?: number;
  /**
   * Last server date time when the query was run.
   * @format date
   */
  lastRunDate?: string;
  /** Include inactive profiles also. Inactive profiles are profiles which are marked as N on active_yn flag. */
  includeInactiveProfile?: boolean;
  /**
   * Profile credit rating.
   * @minLength 0
   * @maxLength 20
   */
  creditRating?: string;
  /** Number of top records (for the Top filter). */
  topNumber?: number;
  /**
   * What is the top filter based on (e.g. total revenue, or number of nights).
   * @minLength 0
   * @maxLength 40
   */
  topBasedOn?: string;
  /** Exclude the from and to stay period. */
  excludeStay?: boolean;
  /** Membership Revenue Type. */
  revenueType?: CodeListType;
  /** Total amount of Membership Revenue Type. */
  totalRevenueTypeAmount?: number;
  /**
   * User defined custom sql filter. It is to be used by users who know SQL. Basic purpose is that user who know sql should not have to come to development for small changes in the filter.
   * @minLength 0
   * @maxLength 4000
   */
  customFilter?: string;
  /** Membership TSC Report Id. */
  reportId?: number;
}

/** Unique identifier of a Profile Distribution Filter. */
export interface ProfileDistributionFilterIDType {
  /** Unique ID of the Query. */
  queryId?: number;
}

/** Type provides the detailed information about the profile and its children. */
export interface ProfileEnrollmentType {
  /** Detailed customer information for this profile. */
  customer?: CustomerType;
  /** List of customer addresses. */
  addresses?: {
    /**
     * Collection of Detailed information on an address for the customer.
     * @maxItems 4000
     */
    addressInfo?: AddressInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Telephone Number Information */
  telephones?: {
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @maxItems 4000
     */
    telephoneInfo?: TelephoneInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of email address for the customer. */
  emails?: {
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @maxItems 4000
     */
    emailInfo?: EmailInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of Information on a URL for the customer. */
  urls?: {
    /**
     * Collection of Detailed information on web url/address for the customer.
     * @maxItems 4000
     */
    urlInfo?: URLInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of loyalty program(s) the profile is subscribed to. */
  profileMemberships?: {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @maxItems 4000
     */
    profileMembership?: ProfileMembershipType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
  /** List of customer keywords. */
  keywords?: {
    /**
     * Collection of keywords attached to the profile.
     * @maxItems 4000
     */
    keyword?: KeywordType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    allRowsFetched?: boolean;
    /** Total number of rows queried */
    totalRows?: number;
  };
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
  /** Unique id of the profile. */
  profileId?: UniqueIDType;
  /** Unique identifier of the reservation. */
  reservationId?: UniqueIDType;
  /** Membership enrollment code and description. */
  enrollmentCode?: CodeDescriptionType;
  /**
   * Enrollment details will be fetched from this External database.
   * @minLength 0
   * @maxLength 20
   */
  externalDatabaseID?: string;
  /**
   * Hotel Code, It is used to filter hotel specific children to this specific hotel code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * UserID/LoginID of the user who is enrolling the Guest.
   * @minLength 0
   * @maxLength 200
   */
  userId?: string;
  /**
   * EmployeeID of the user who is enrolling the Guest.
   * @minLength 0
   * @maxLength 20
   */
  employeeId?: string;
}

/** A complex type containing the collection of Profile objects or Unique IDs of Profiles. */
export interface ExternalProfileSummariesType {
  /**
   * A collection of Profiles or Unique IDs of Profiles.
   * @maxItems 4000
   */
  profileInfo?: ExternalProfileSummaryInfoType[];
  /** Total number of rows queried */
  totalRows?: number;
  /** Status of external Profile operation. */
  status?: ExternalStatusType;
  /** Hold/Continue external Profile operation. */
  haltOperation?: boolean;
}

/** Success return when there is no error and operation is successful. */
export enum ExternalStatusType {
  NotEnoughCriteria = 'NotEnoughCriteria',
  IgnoredUnsupportedCriteria = 'IgnoredUnsupportedCriteria',
  ExternalError = 'ExternalError',
  CommunicationError = 'CommunicationError',
  Success = 'Success',
}

/** Type provides the detailed information about the profile. */
export interface ExternalProfileType {
  /** Unique identifiers for the Profile for both internal and external systems. */
  profileIdList?: ProfileIdList;
  /** Detailed customer information for this profile. */
  profile?: ProfileType;
  /** Detailed information of incidents related to the profile */
  incidents?: IncidentsType;
  /**
   * Guest Status for the Profile.
   * @minLength 0
   * @maxLength 40
   */
  guestStatus?: string;
}

/**
 * Collection of Incidents for the profile.
 * @maxItems 4000
 */
export type IncidentsType = IncidentType[];

/** Guest Incident details for the profile. */
export interface IncidentType {
  /**
   * If specified Incident belongs to the Hotel listed, otherwise it is a global Incident.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Code for the Incident.
   * @minLength 0
   * @maxLength 20
   */
  incidentCode?: string;
  /**
   * Incident Description for display purposes.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Date and Time the Incident was raised.
   * @format date-time
   */
  incidentOn?: string;
  /**
   * Status of the Incident.
   * @minLength 0
   * @maxLength 80
   */
  status?: string;
  /**
   * Incident Priority.
   * @maxLength 2000
   */
  priority?: string;
  /**
   * Source of the incident.
   * @minLength 0
   * @maxLength 20
   */
  source?: string;
  /**
   * Holds Note for the Incident.
   * @minLength 0
   * @maxLength 2000
   */
  note?: string;
}

/**
 * Provide match profile details for enrollment.
 * @maxItems 4000
 */
export type EnrollmentMatchProfilesType = ProfileEnrollmentType[];

/** Source of the membership claim. */
export enum ClaimSourceType {
  Ocis = 'Ocis',
  Opms = 'Opms',
  Web = 'Web',
}

/**
 * Summary of claim activity log information.
 * @maxItems 4000
 */
export type ClaimActivityLogListType = ClaimActivityLogType[];

/** Summary of claim activity log information. */
export interface ClaimActivityLogType {
  /** Sequence number for claim activity. */
  sequence?: number;
  /**
   * Claim activity type such as Reply, Call Property for Verification, Caller Called Back, and Remarks.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Name of the application user who created the activity record.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
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

/** Record Type associated with a claim. */
export enum ClaimRecordType {
  Stay = 'Stay',
  Other = 'Other',
  LimitedAdjustment = 'LimitedAdjustment',
}

/** Claim approve or reject status. */
export enum ClaimApprovalStatusType {
  Approved = 'Approved',
  Rejected = 'Rejected',
  Pending = 'Pending',
}

/** Detailed information of a claim. */
export interface MembershipClaimDetailsType {
  /** Unique ID Number assigned to the claim when the claim was created. */
  claimNo?: UniqueIDType;
  /**
   * Date the claim was made.
   * @format date
   */
  claimDate?: string;
  /**
   * If the status is closed, the date the claim was closed.
   * @format date
   */
  closeDate?: string;
  /** Source of the claim. This will be either OCIS, OPMS or WEB. */
  source?: ClaimSourceType;
  /**
   * Name of the person placing the claim. This name may be different from the name on the membership card.
   * @minLength 0
   * @maxLength 100
   */
  callerName?: string;
  /**
   * User who is assigned to handle this claim.
   * @minLength 0
   * @maxLength 50
   */
  owner?: string;
  /**
   * Status of the claim.(Open, Closed, Pending Review, Waiting for Manager, etc.)
   * @minLength 0
   * @maxLength 20
   */
  claimStatus?: string;
  /**
   * Type of user-definable claim such as New Card, Stay, etc.
   * @minLength 0
   * @maxLength 20
   */
  claimType?: string;
  /**
   * Origin of the membership claim. User definable values like Email, Fax, Phone Call, etc.
   * @minLength 0
   * @maxLength 20
   */
  origin?: string;
  /**
   * More information related to call that help to resolve the claim..
   * @minLength 0
   * @maxLength 2000
   */
  callerInformation?: string;
  /**
   * The date, if any, by which a response to the caller was promised.
   * @format date
   */
  replyBy?: string;
  /**
   * Additional comments or steps taken to resolve the claim..
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** Filter claims by approved or rejected status. */
  approvalStatus?: ClaimApprovalStatusType;
  /** Record type of the claim. */
  recordType?: ClaimRecordType;
  /** Profile ID of the membership holder. */
  profileId?: ProfileId;
  /** Membership Type details. */
  membership?: ClaimMembershipType;
  /** Reservation or Stay information for the claim. */
  reservation?: ClaimReservationInfoType;
  /** Membership claims award points and tier points. */
  claimPoints?: ClaimAdjustmentPointsType;
  /** Contains summary information of the claim. */
  activityLog?: ClaimActivityLogListType;
  /**
   * User who entered this claim.
   * @minLength 0
   * @maxLength 50
   */
  submitter?: string;
}

/** Summary of claim activity log information. */
export interface ClaimMembershipType {
  /**
   * Name to be displayed on the membership card.
   * @maxLength 2000
   */
  nameOnCard?: string;
  /**
   * Indicates the membership class.
   * @maxLength 2000
   */
  membershipClass?: string;
  /**
   * Card Number of the membership.
   * @maxLength 2000
   */
  membershipId?: string;
  /** Membership ID Number. */
  membershipIdNo?: number;
  /**
   * Membership Type code.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * The current level of the membership.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /**
   * Indicates the starting date.
   * @format date
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   */
  expireDate?: string;
  /** When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). */
  expireDateExclusiveIndicator?: boolean;
}

/** Summary of membership claim award points and tier points. */
export interface ClaimAdjustmentPointsType {
  /**
   * The selected adjustment code's Award, Stay, Nights, and Revenue thresholds will display.
   * @minLength 0
   * @maxLength 20
   */
  adjustmentCode?: string;
  /**
   * Total base points limits for adjustment.
   * @maxLength 2000
   */
  totalBasePointsLimits?: string;
  /**
   * Base stay limits for adjustment.
   * @maxLength 2000
   */
  baseStayLimits?: string;
  /**
   * Base nights limits for adjustment.
   * @maxLength 2000
   */
  baseNightsLimits?: string;
  /**
   * Base revenue limits for adjustment.
   * @maxLength 2000
   */
  baseRevenueLimits?: string;
  /** Base award points for adjustment. */
  awardBasePoints?: number;
  /** Bonus award points for adjustment. */
  awardBonusPoints?: number;
  /** Miscellaneous award points for adjustment. */
  awardMiscPoints?: number;
  /** Total award points for adjustment. */
  awardTotalPoints?: number;
  /** Tier base stay points for adjustment. */
  tierBaseStayPoints?: number;
  /** Tier bonus stay points for adjustment. */
  tierBonusStayPoints?: number;
  /** Tier total stay points for adjustment. */
  tierTotalStayPoints?: number;
  /** Tier base nights points for adjustment. */
  tierBaseNightsPoints?: number;
  /** Tier bonus nights points for adjustment. */
  tierBonusNightsPoints?: number;
  /** Tier total nights points for adjustment. */
  tierTotalNightsPoints?: number;
  /** Tier Base revenue points for adjustment. */
  tierBaseRevenuePoints?: number;
  /** Tier Bonus revenue points for adjustment. */
  tierBonusRevenuePoints?: number;
  /** Tier Total tier revenue points for adjustment. */
  tierTotalRevenuePoints?: number;
}

/** Summary of claim activity log information. */
export interface ClaimReservationInfoType {
  /**
   * Property where the stay associated with this claim.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** List of reservation confirmation or reference numbers associated with this claim. Like PMS reservation number, Central(ORS) booking number. */
  confirmationNo?: UniqueIDListType;
  /**
   * Arrival date for the stay associated with this claim.
   * @format date
   */
  arrival?: string;
  /**
   * Departure date for the stay associated with this claim.
   * @format date
   */
  departure?: string;
}

/**
 * List of available award points information by Hotel.
 * @maxItems 4000
 */
export type MembershipAwardPointsByHotelType = MembershipAwardPointByHotelType[];

/** Award points information group by Hotel. */
export interface MembershipAwardPointByHotelType {
  /**
   * Award points issued at Property level.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Sum of total positive and negative points. */
  totalPoints?: number;
}

export interface MemberAwardType {
  /** Unique identifiers for the Profile for both internal and external systems. */
  profileIdList?: ProfileIdList;
  /**
   * The type of the membership.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
  /**
   * The card number associated with this membership.
   * @minLength 0
   * @maxLength 50
   */
  membershipCardNo?: string;
  /**
   * The current level of the membership.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /** Unique identifiers for the Reservation like Confirmation Number. */
  reservationIdList?: ReservationIdList;
  /** Number of adults associated with the reservation. */
  adults?: number;
  /** Arrival and Departure dates of the reservation. */
  reservationTimeSpan?: TimeSpanType;
  /** Member points before award transaction. */
  memberPointsBefore?: number;
  /** Member points after award transaction. */
  memberPointsAfter?: number;
  /** Points associated with the award. */
  awardPoints?: number;
  /** Number of cancel points returned. */
  cancelPointsReturn?: number;
  /** Actual number of cancel points. */
  actualCancelPoints?: number;
  /** Points that will expire. */
  expiryPoints?: number;
  /** Processing type of the award like Actual , Projected or Inactive. */
  awardProcessType?: MemberAwardProcessType;
  /** Details related to member award per stay date. */
  memberAwardDetails?: MemberAwardDetailsType;
  /**
   * Property associated with the reservation.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/**
 * Details related to member award per stay date.
 * @maxItems 4000
 */
export type MemberAwardDetailsType = MemberAwardDetailType[];

/** Details related to member award like award type, stay date, rate code, etc. */
export interface MemberAwardDetailType {
  /**
   * The award type or code.
   * @minLength 0
   * @maxLength 40
   */
  awardType?: string;
  /**
   * Indicates if award is a Stay, Package Element or other.
   * @minLength 0
   * @maxLength 20
   */
  awardBasedOn?: string;
  /** Number days before arrival to apply penalty for cancellation. */
  cancelPenaltyDays?: number;
  /** Number points deducted if award is cancelled. */
  cancelPenaltyCharge?: number;
  /**
   * Type of cancel penalty like Points, etc.
   * @minLength 0
   * @maxLength 20
   */
  cancelPenaltyType?: string;
  /** Number of penalty points if cancelled. */
  cancelPenaltyPoints?: number;
  /**
   * Date of stay.
   * @format date
   */
  stayDate?: string;
  /**
   * Rate code associated with the reservation.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Room type label associated with the reservation.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Product code for which the award was issued, in case of a product award.
   * @minLength 0
   * @maxLength 80
   */
  product?: string;
  /**
   * Room type label before the upgrade in case of an upgrade award.
   * @minLength 0
   * @maxLength 20
   */
  fromRoomType?: string;
  /**
   * Room type label after the upgrade for an upgrade award.
   * @minLength 0
   * @maxLength 20
   */
  toRoomType?: string;
  /** Total Local Amount on bill in Hotel Currency. */
  totalLocalAmount?: number;
  /** Redeemed Local Amount on bill in Hotel Currency. */
  redeemedLocalAmount?: number;
  /** Total Central Amount on bill in External System Currency. */
  totalCentralAmount?: number;
  /** Redeemed Central Amount on bill in External System Currency. */
  redeemedCentralAmount?: number;
  /**
   * The Payment Transaction Code for which the Surcharge Applies.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Unique Transaction Identifier. */
  transactionNo?: number;
  /**
   * Exchange Rate Type for the Currency Exchange.
   * @minLength 0
   * @maxLength 20
   */
  exchangeRateType?: string;
  /**
   * Award Voucher Number.
   * @minLength 0
   * @maxLength 40
   */
  awardVoucherNo?: string;
  /** Unique ID for the award cancellation if cancelled. */
  awardCancellationNo?: UniqueIDType;
  /** If the award detail is inactive. */
  inactive?: boolean;
  /** Points required for the stay date. */
  pointsRequired?: number;
}

/** Processing type of the award like Actual , Projected or Inactive. */
export enum MemberAwardProcessType {
  Actual = 'Actual',
  Projected = 'Projected',
  Inactive = 'Inactive',
}

/** Detailed transaction information related to a membership. */
export interface MembershipTransactionType {
  /** Membership details for the requested membership transaction ID. */
  membershipDetails?: MembershipDetailsType;
  /** Membership transaction details for the requested membership transaction ID. */
  membershipTransactionDetails?: MembershipTransactionDetailsType;
}

/** Detailed information related to a membership transaction. */
export interface MembershipTransactionDetailsType {
  /** Unique identifier associated with the membership transaction. */
  membershipTransactionId?: MembershipTransactionId;
  /**
   * Property from which the membership stay information was received.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The type of membership points transaction.
   * @minLength 0
   * @maxLength 20
   */
  transactionType?: string;
  /**
   * The date when the points were calculated.
   * @format date
   */
  transactionDate?: string;
  /** Unique reservation identifiers associated with this transaction like PMS Confirmation Number and CRS Booking Number. */
  reservationIdList?: ReservationIdList;
  /**
   * The property currency at the originating PMS.
   * @minLength 0
   * @maxLength 20
   */
  currency?: string;
  /** Arrival and Departure date for the stay. */
  stayTimeSpan?: TimeSpanType;
  /**
   * Promotion code assigned on reservation.
   * @minLength 0
   * @maxLength 20
   */
  ratePromotion?: string;
  /** Promotion code assigned on reservation. */
  profilePromotions?: CodeListType;
  /**
   * For adjustments, the date when the points are to be credited.
   * @format date
   */
  pointsCreditDate?: string;
  /** The average cost of the room per night. */
  averageRateAmount?: number;
  /** Indicates if the transaction was created as an adjustment. */
  adjustment?: boolean;
  /** Indicates if the points have been calculated on this transaction. */
  pointsCalculated?: boolean;
  /** Indicates if the transaction was flagged as an exception. */
  exception?: boolean;
  /**
   * The room type for this transaction.
   * @minLength 0
   * @maxLength 50
   */
  roomLabel?: string;
  /**
   * The booked room type for this transaction.
   * @minLength 0
   * @maxLength 50
   */
  bookedRoomLabel?: string;
  /**
   * Notes associated with this transaction.
   * @minLength 0
   * @maxLength 4000
   */
  notes?: string;
  /** Statement batch ID. */
  statementId?: UniqueIDType;
  /** Member statement batch ID. */
  memberStatementId?: UniqueIDType;
  /**
   * Billing group the points belong to.
   * @minLength 0
   * @maxLength 20
   */
  billingGroup?: string;
  /**
   * Base billing group the points belong to.
   * @minLength 0
   * @maxLength 20
   */
  baseBillingGroup?: string;
  /**
   * Bonus billing group the points belong to.
   * @minLength 0
   * @maxLength 20
   */
  bonusBillingGroup?: string;
  /** The total cost associated with points earned by this transaction. */
  pointsCost?: number;
  /**
   * Messages generated by the system during points calculation.
   * @minLength 0
   * @maxLength 2000
   */
  processingMessages?: string;
  /** Details if this transaction is associated with award points. */
  awardPoints?: MembershipAwardPointsType;
  /** Details if this transaction is associated with tier points. */
  tierPoints?: MembershipTransactionTierPointsType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface MembershipTransactionId {
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

/** Details associated with award points. */
export interface MembershipAwardPointsType {
  /** Total number of base award points for a membership points transaction. */
  basePoints?: number;
  /** If a membership points transaction involves bonus points, the total number of bonus points. */
  bonusPoints?: number;
  /** If a membership points transaction involves points imported into ORS from a third-party system, the total number of points. */
  miscPoints?: number;
  /** The total number of award points. */
  totalPoints?: number;
  /**
   * The date until points are eligible for redemption based on membership type configuration.
   * @format date
   */
  pointsExpiryDate?: string;
  /**
   * Rule Code for award points.
   * @minLength 0
   * @maxLength 20
   */
  ruleCode?: string;
}

/** Details associated with tier points. */
export interface MembershipTransactionTierPointsType {
  /** Total number of base stay tier points for a membership points transaction. */
  baseStay?: number;
  /** Total number of base nights tier points for a membership points transaction. */
  baseNights?: number;
  /** Total number of base revenue tier points for a membership points transaction. */
  baseRevenue?: number;
  /** The total number of bonus stay tier points. */
  bonusStay?: number;
  /** The total number of bonus nights tier points. */
  bonusNights?: number;
  /** The total number of bonus revenue tier points. */
  bonusRevenue?: number;
}

/** Details about a membership like ProfileID, Card Number, Type, Level, etc. */
export interface MembershipDetailsType {
  /** The profile to which this membership is associated with. */
  profileId?: ProfileId;
  /**
   * The profile name associated with this membership.
   * @minLength 0
   * @maxLength 128
   */
  name?: string;
  /** Unique identifier of this membership. */
  membershipId?: UniqueIDType;
  /**
   * The card number associated with this membership.
   * @minLength 0
   * @maxLength 50
   */
  membershipCardNo?: string;
  /** The type of the membership. */
  membershipType?: CodeDescriptionType;
  /**
   * The current level of the membership.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /**
   * Date when the member enrolled for the membership.
   * @format date
   */
  joinedDate?: string;
  /**
   * Membership card expiration date.
   * @format date
   */
  cardExpirationDate?: string;
}

/**
 * List of of member points to expire.
 * @maxItems 4000
 */
export type MemberPointsToExpireListType = MemberPointToExpireType[];

/** Information related to a member point to expire. */
export interface MemberPointToExpireType {
  /**
   * The date when the member future award points will expire.
   * @format date
   */
  pointsExpiryDate?: string;
  /** Displays the total number of points that will expire on the expiration date. */
  pointsToExpire?: number;
  /** Displays the number of points that are relevant for extension. Points that were already extended from the previous year are not considered for extension. */
  previousPointsToExpire?: number;
  /** Indicates if the points is extendable. */
  extend?: boolean;
  /**
   * The method of award generation.
   * @minLength 0
   * @maxLength 20
   */
  awardGenerationMethod?: string;
}

/**
 * Contains Membership transaction exception information.
 * @maxItems 4000
 */
export type MembershipTransactionExceptionsType = MembershipTransactionExceptionType[];

/** Details about a membership like ProfileID, Card Number, Type, Level, etc. */
export interface MembershipTransactionExceptionType {
  /** The profile to which this membership is associated with. */
  profileId?: ProfileId;
  /**
   * The profile name associated with this membership.
   * @minLength 0
   * @maxLength 128
   */
  name?: string;
  /** Unique identifier of this membership. */
  membershipId?: UniqueIDType;
  /**
   * The card number associated with this membership.
   * @minLength 0
   * @maxLength 50
   */
  membershipCardNo?: string;
  /** The type of the membership. */
  membershipType?: CodeDescriptionType;
  /**
   * The current level of the membership.
   * @minLength 0
   * @maxLength 20
   */
  membershipLevel?: string;
  /**
   * Date when the member enrolled for the membership.
   * @format date
   */
  joinedDate?: string;
  /**
   * Membership card expiration date.
   * @format date
   */
  cardExpirationDate?: string;
  /** Unique identifier associated with the membership transaction. */
  membershipTransactionId?: MembershipTransactionId;
  /**
   * Hotel code of the membership transaction exceptions.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Arrival and Departure date of stay for which you are displaying membership transaction exceptions. */
  fromToRangeDate?: DateRangeType;
  /**
   * Any reference like reservation no etc against which the certificate was consumed.
   * @minLength 0
   * @maxLength 50
   */
  reservationNumber?: string;
  /** If multiple room membership transaction exceptions occurred, the number of rooms booked.(MR) */
  roomsBooked?: number;
  /**
   * Indicates if back to back membership transaction exceptions have occurred or not.
   * @minLength 0
   * @maxLength 2
   */
  backToBack?: string;
  /** The average rate of the stay. */
  averageRate?: number;
  /** Tier stay points associated with this membership points transaction. */
  tierStays?: number;
  /** Award points associated with this membership points transaction. */
  totalAwardPoints?: number;
  /** Tier night points associated with this membership points transaction. */
  totalNights?: number;
  /** Tier revenue points associated with this membership points transaction. */
  totalRevenue?: number;
  /** Points Calculated value(Y/N) for the selected transaction. */
  pointsCalculate?: boolean;
  /**
   * Notes regarding the resolution of the membership transaction exception or for any other reason.
   * @minLength 0
   * @maxLength 4000
   */
  userNotes?: string;
  /**
   * The systems records and notes identifying the exception criteria.
   * @minLength 0
   * @maxLength 2000
   */
  processingMessages?: string;
  /** The total number of award points associated with this transaction. */
  totalPoints?: number;
  /** The total number of base award points for this membership points transaction. */
  awardBasePoints?: number;
  /** Indicates if this transaction involves bonus points, The total number of bonus points. */
  awardBonusPoints?: number;
  /** Details if this transaction is associated with tier points. */
  tierPoints?: MembershipTransactionTierPointsType;
  /** Information to compute award and tier points for membership transaction exception. */
  computedPoints?: MembershipTransactionExceptionComputePointsType;
  /** Indicates the type of Exception like Exception not resolved,Points Rejected on Exception etc., */
  exceptionType?: number;
}

/** Options to compute award and tier points for membership transaction exception. */
export interface MembershipTransactionExceptionComputePointsType {
  /** Indicates if membership transaction exception should be created for base award points. */
  awardBasePoints?: boolean;
  /** Indicates if membership transaction exception should be created for bonus award points. */
  awardBonusPoints?: boolean;
  /** Indicates if membership transaction exception should be created for base tier points for the stay. */
  tierPointsBaseStay?: boolean;
  /** Indicates if membership transaction exception should be created for tier bonus points for the stay. */
  tierPointsBonusStay?: boolean;
  /** Indicates if membership transaction exception should be created for base tier points for the night. */
  tierPointsBaseNights?: boolean;
  /** Indicates if membership transaction exception should be created for tier bonus points for the night. */
  tierPointsBonusNights?: boolean;
  /** Indicates if membership transaction exception should be created for base tier points for the revenue. */
  tierPointsBaseRevenue?: boolean;
  /** Indicates if membership transaction exception should be created for tier bonus points for the revenue. */
  tierPointsBonusRevenue?: boolean;
}

/** Contains summary/detail/Revenue statistics information for Profile. */
export interface ProfileStatisticsType {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: ProfileIdList;
  /** List of summary profile stay statistics. */
  stayStatisticsSummaryList?: StatisticsSummaryListType;
  /** List of detailed profile stay statistics. */
  stayStatisticsDetailList?: StayStatisticsDetailListType;
  /** List of summary profile revenue statistics. */
  revenueStatisticsSummaryList?: RevenueStatisticsSummaryListType;
  /** Contains the statistical report(Reservation, Revenue, Stay Records) type. */
  reportType?: StatisticsReportType;
}

/**
 * Collection of stay statistics detail information
 * @maxItems 4000
 */
export type StayStatisticsDetailListType = StayStatisticsDetailType[];

/** Contains stay statistics detail information */
export interface StayStatisticsDetailType {
  /** The Reservation class contains the current reservation being created or altered. */
  stayDetail?: StayDetailType;
  /** Contains different list of stay statistics revenue information */
  revenue?: StayStatisticsRevenueType;
  /** @maxLength 2000 */
  year?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** The Reservation class contains the current reservation being created or altered. */
export interface StayDetailType {
  /** Unique identifiers for the reservation for both internal and external systems */
  reservationIdList?: ReservationIdList;
  /** Collection of room stays. */
  roomStay?: StayInfoType;
  /** Collection of guests associated with the reservation. */
  resGuest?: ResGuestInfoType;
  /** Collection of guests who share this reservation. */
  sharedGuests?: ResSharedGuestListType;
  /** List of attached profiles */
  attachedProfiles?: ResAttachedProfileListType;
  /** Payment method used for this reservation */
  reservationPaymentMethod?: ReservationPaymentMethodType;
  /** Collection of reservation folio windows. */
  reservationFolioWindows?: ReservationFolioWindowsType;
  /**
   * Set of reservation preferences which belongs to the Specials group.
   * @minLength 0
   * @maxLength 4000
   */
  specials?: string;
  /**
   * Last Privacy Prompt Date
   * @format date
   */
  lastPrivacyPromptDate?: string;
  /**
   * Color setting of the reservation.
   * @minLength 0
   * @maxLength 20
   */
  displayColor?: string;
  /** Indicators of additional information attached to the reservation */
  reservationIndicators?: IndicatorsType;
  /** Current room status */
  roomStatus?: HousekeepingRoomStatusType;
  /** Super Search matching terms. */
  searchMatches?: SearchMatchesType;
  /** Point of Sale of reservation. Identifies the entity/channel who made the reservation. */
  sourceOfSale?: SourceOfSaleType;
  /** Information regarding why reservation has been/was waitlisted. This could hold information as history even if reservation is not in Waitlist status anymore. */
  waitlist?: WaitlistResType;
  /** Information about the time and duration this reservation was on Queue for Checkin. */
  queue?: ReservationQueueInformationType;
  /** Information regarding housekeeping for this reservation. */
  housekeeping?: ResHousekeepingType;
  /** Holds cashiering related information for the reservation. */
  cashiering?: ResCashieringType;
  /** This stores the code for the type of tax calculation especially with tax exemption, etc. */
  taxType?: TaxTypeType;
  /** Holds reservation deposit information. */
  deposit?: ReservationDepositType;
  /** Collection of reservation allowed actions. */
  allowedActions?: ReservationAllowedActionsType;
  /** Revenues and Balances Amount summary for the reservation. */
  revenuesAndBalances?: ResRevenueBalanceType;
  /**
   * Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms.
   * @maxItems 4000
   */
  hotelInterfaceStatusList?: ReservationInterfaceStatusType[];
  /**
   * Currency code preferred by guest.
   * @minLength 0
   * @maxLength 20
   */
  guestPreferredCurrency?: string;
  /** Currency code preferred by guest. */
  turndownInfo?: ReservationTurndownInfoType;
  /** Denotes the status of Room Ready, Key Ready messages. */
  mobileNotifications?: ResMobileNotificationsType;
  /** Collection of reservation communication details. */
  resCommunication?: ResCommunicationType;
  /** Information relating to Reservation's Advance Checked In state and Expected Time of Return */
  advanceCheckIn?: AdvanceCheckInType;
  /** This flag will determine wheather the reservation is eligible for Welcome Offer or not. */
  welcomeOffer?: boolean;
  /** Information regarding why reservation has been/was cancelled. */
  cancellationInfo?: {
    /**
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @format date
     */
    date?: string;
  };
  /** Number of keys created for the reservation. */
  keyCount?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  expectedServiceTime?: string;
  /** Boolean True if this reservation is reserving rooms. False if it is only reserving services. */
  roomStayReservation?: boolean;
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
   */
  purgeDate?: string;
  /** Indicates the status of the reservation. */
  resStatus?: PMSResStatusType;
  /** Indicates the status of the reservation. */
  computedResStatus?: PMSResStatusType;
  /** When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. */
  walkInIndicator?: boolean;
  /** Indicates user restriction on the reservation based on the Access exclusion functionality such as Restriction on Changes, Cancellation or both. */
  accessRestriction?: ResAccessRestrictionType;
  /** If not null, reservation is considered to pay out commission to either Travel Agent, Source or both. */
  commissionPayoutTo?: CommissionPayoutToType;
  /**
   * Payment Method.
   * @minLength 0
   * @maxLength 20
   */
  paymentMethod?: string;
  /** Defines if the reservation is pre-registered or not. */
  preRegistered?: boolean;
  /** Returns true when reservation has an open folio. */
  openFolio?: boolean;
  /** Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. */
  allowMobileCheckout?: boolean;
  /** Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. */
  allowMobileViewFolio?: boolean;
  /** Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation. */
  optedForCommunication?: boolean;
  /** Indicates the profile stay record is complimentaray. */
  complimentaray?: boolean;
  /**
   * Indicates the profile stay record reservation source code.
   * @minLength 0
   * @maxLength 20
   */
  reservationSourceCode?: string;
  /**
   * Indicates the profile stay record reservation source Type.
   * @minLength 0
   * @maxLength 50
   */
  reservationSourceType?: string;
  /**
   * Indicates the share Number for Stay if reservation was a share.
   * @minLength 0
   * @maxLength 20
   */
  shareNumber?: string;
  /**
   * Booking date of the stay record.
   * @format date
   */
  bookingDate?: string;
  /**
   * Booked arrival date of the stay record.
   * @format date
   */
  bookedArrivalDate?: string;
  /**
   * Booked departure date of the stay record.
   * @format date
   */
  bookedDepartureDate?: string;
  /**
   * Cancellation date of the stay record.
   * @format date
   */
  cancellationDate?: string;
  /** Number of cancelled room nights. */
  cancelledRoomNights?: number;
  /** Number of no show room nights. */
  noShowRoomNights?: number;
  /**
   * Travel Agent reference number for stay record.
   * @minLength 0
   * @maxLength 60
   */
  travelAgentReferenceId?: string;
  /**
   * Allotment Code for stay record.
   * @minLength 0
   * @maxLength 20
   */
  allotmentCode?: string;
  /** Indicates whether the guest was the primary sharer or not. */
  primarySharer?: boolean;
  /** Exchange Rate. */
  exchangeRate?: number;
  /**
   * Promotion code associated with the stay.
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
  /**
   * Indicate the category of room originally booked.
   * @minLength 0
   * @maxLength 20
   */
  bookedRoomType?: string;
  /**
   * Indicate channel for stay.
   * @minLength 0
   * @maxLength 20
   */
  channelCode?: string;
  /** Stay Record identifier. */
  stayRecordId?: UniqueIDType;
}

/** Contains different list of stay statistics revenue information */
export interface StayStatisticsRevenueType {
  /** Contains Revenue information */
  averageDailyRate?: StatisticsRevenueTypeType;
  /** Contains Revenue information */
  totalRevenue?: StatisticsRevenueTypeType;
  /** Contains Revenue information */
  roomRevenue?: StatisticsRevenueTypeType;
  /** Contains Revenue information */
  fBRevenue?: StatisticsRevenueTypeType;
  /** Contains Revenue information */
  extraRevenue?: StatisticsRevenueTypeType;
  /** Contains Revenue information */
  nonRevenue?: StatisticsRevenueTypeType;
  /** @maxLength 2000 */
  currency?: string;
  /** Enumeration for stay types. */
  stayReservation?: StayReservationType;
}

/** Contains Revenue information */
export interface StatisticsRevenueTypeType {
  revenueAmount?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  revenueLabel?: string;
}

/** Enumeration for stay types. */
export enum StayReservationType {
  Transient = 'Transient',
  Block = 'Block',
}

/**
 * List of the detailed and yearly summarized information about the profile revenue.
 * @maxItems 4000
 */
export type RevenueStatisticsSummaryListType = RevenueStatisticsSummaryType[];

/** Summary of the revenue for a year */
export interface RevenueStatisticsSummaryType {
  /** Details regarding the profile revenue belonging to the specified year. */
  revenueDetails?: RevenueStatisticsDetailListType;
  /**
   * Year of the revenue.
   * @minLength 4
   * @maxLength 4
   */
  year?: string;
}

/**
 * The collection of profile revenue statistics.
 * @maxItems 4000
 */
export type RevenueStatisticsDetailListType = RevenueStatisticsDetailType[];

/** The different statistics from the revenue of a profile. */
export interface RevenueStatisticsDetailType {
  /** The stay time span of the reservation. */
  stayTimeSpan?: TimeSpanType;
  /**
   * Name Of The Guest.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Id of the guest profile in the reservation. */
  profileIdList?: ProfileIdList;
  /** Id of the reservation. */
  reservationIdList?: ReservationIdList;
  /**
   * Revenue Type for Stay.
   * @minLength 0
   * @maxLength 20
   */
  revenueType?: string;
  /** Central Revenue Type for Stay. */
  centralRevenue?: number;
  /** Local Revenue Type for Stay. */
  localRevenue?: number;
  /**
   * Hotel of the reservation.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Indicate to get revenue of Stay Records. */
export enum StatisticsReportType {
  Reservation = 'Reservation',
  Revenue = 'Revenue',
  ProfileStayRecords = 'ProfileStayRecords',
  DetailStayRecordsRevenue = 'DetailStayRecordsRevenue',
}

/** Collection of Profile statistics summary information */
export interface StatisticsSummaryListType {
  /** @maxItems 4000 */
  profileHotelStatisticsbyYearSummary?: ProfileHotelStatisticsbyYearSummaryType[];
  /** @maxItems 4000 */
  profileStatisticsbyYearSummary?: ProfileStatisticsbyYearSummaryType[];
}

/** Contains stay statistics summary information by year */
export interface ProfileStatisticsbyYearSummaryType {
  /** @maxItems 2 */
  stayDetail?: StayDetailSummaryType[];
  /** @maxItems 2 */
  netRevenue?: StayStatisticsRevenueType[];
  /** @maxLength 2000 */
  year?: string;
}

/** Contains stay related information such as reservation nights,room nights,arrival rooms,cancel rooms,etc. */
export interface StayDetailSummaryType {
  roomNights?: number;
  arrivalRooms?: number;
  cancelRooms?: number;
  noShowRooms?: number;
  dayUseRooms?: number;
  /** Total Booked Stays/Reservations for Profile */
  totalBooked?: number;
  /** Total Stayed Reservations for Profile */
  totalStays?: number;
  /** Enumeration for stay types. */
  stayReservation?: StayReservationType;
}

/** Contains stay statistics summary information by year */
export interface ProfileHotelStatisticsbyYearSummaryType {
  /** @maxItems 2 */
  stayDetail?: StayDetailSummaryType[];
  /** @maxItems 2 */
  netRevenue?: StayStatisticsRevenueType[];
  /** @maxLength 2000 */
  year?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Response for Ping operation. */
export interface OperaVersion {
  /** Opera version number. */
  operaVersion?: OperaVersionNumberType;
  links?: Links;
}

/** Object for creation of profiles. This object contains profile details with unique identifiers for each profile. */
export interface Profile {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as ID. */
  profileIdList?: ProfileIdList;
  /** Provides detailed information regarding either a company or a customer profile. */
  profileDetails?: ProfileType;
  links?: Links;
}

/** Request object for creation of guest/contact/employee profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. */
export interface Guest {
  /** Unique identifiers of Profile for both internal and external systems. */
  guestIdList?: ProfileIdList;
  /** Provides detailed information of a customer profile. */
  guestDetails?: GuestProfileType;
  links?: Links;
}

/** Request object for creation of company/agent/group/source profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. */
export interface Company {
  /** Unique identifiers of Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as ID. */
  companyIdList?: ProfileIdList;
  /** Provides detailed information of a company profile. */
  companyDetails?: CompanyProfileType;
  links?: Links;
}

/** Response object for fetching profile enrollment from external system. */
export interface Enrollment {
  /** Type contains profile enrollment information. */
  enrollmentInfo?: ProfileEnrollmentType;
  links?: Links;
}

/** Response object for fetching profiles from external CRM System. This object contains profile primary details, profile summary details, master info list containing code and description used as lookup for description. */
export interface ExternalProfiles {
  /** Type contains Profile's summary information. */
  externalProfileSummaries?: ExternalProfileSummariesType;
  links?: Links;
}

/** Response object for fetching profile from external CRM System. This object contains profile details, preferences and incidents. */
export interface ExternalProfile {
  /** Type provides the detailed information about the profile. */
  profileInfo?: ExternalProfileType;
  links?: Links;
}

/** Response object to fetch match profiles for enrollment. */
export interface EnrollmentMatchProfiles {
  /** Type contains detail information regarding match profiles. */
  enrollmentMatchProfilesDetail?: EnrollmentMatchProfilesType;
  links?: Links;
}

/** Request object for creating membership claim. */
export interface MembershipClaim {
  /** Detailed information of a claim. */
  membershipClaimDetails?: MembershipClaimDetailsType;
  links?: Links;
}

/** Response object for fetching member award points by Hotel. */
export interface MembershipAwardPointsByHotel {
  /** Collection of member award points list. */
  membershipAwardPoints?: MembershipAwardPointsByHotelType;
  links?: Links;
}

/** Response object for fetching a membership transaction. */
export interface MembershipTransaction {
  /** Membership transaction details for the requested membership transaction ID. */
  membershipTransactionDetails?: MembershipTransactionType;
  links?: Links;
}

/** Response object for fetching member points to expire information. */
export interface MemberPointsToExpire {
  /** Collection of member points to expire. */
  memberPointsToExpireList?: MemberPointsToExpireListType;
  links?: Links;
}

/** Response object for fetching membership transaction exceptions. */
export interface MembershipTransactionExceptions {
  /** A collection of membership transaction exceptions. */
  memberTransactionExceptions?: MembershipTransactionExceptionsType;
  links?: Links;
}

/** Request object to redeem award. */
export interface Award {
  memberAward?: MemberAwardType;
  links?: Links;
}

/** Request object for changing the staged profile. */
export interface StagedProfile {
  /** Detailed information about the staged profile. */
  stagedProfile?: StagedProfileType;
  /** Information about instructions to change the staged profile. */
  changeInstructions?: StagedProfileChangeInstructionsType;
  links?: Links;
}

/** Response object for fetch preference. This object contains collection of preferences,Success,Warnings and Errors related to this operation. */
export interface Preference {
  /** Detailed information of preferences related to the profile */
  preferenceCollections?: PreferenceTypeType[];
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: ProfileIdList;
  links?: Links;
}

/** Request object for create membership. This object contains unique identifiers for each profile and list of membership details to be created. The standard optional Opera Context element is also included. */
export interface Membership {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: ProfileIdList;
  /** Detailed information of membership related to the profile */
  profileMemberships?: ProfileMembershipType[];
  links?: Links;
}

/** Response object for fetching profile commission detail. */
export interface ProfileCommissionAccountInfo {
  /** Profile commission info which contains bank account and commission code details. */
  profileCommissionAccountInfoList?: ProfileCommissionAccountInfoListType;
  links?: Links;
}

/** Request object for creating profile commission detail. */
export interface ProfileCommissionAccount {
  /** Contains base info to determine profile commission bank account and code. */
  criteria?: ProfileCommissionAccountCriteriaType;
  links?: Links;
}

/** Response object for fetching subscriptions where the same OPERA profile is linked to multiple external profiles within the same external system. */
export interface DuplicateExternalSubscriptions {
  /** A collection of subscriptions where the same OPERA profile is linked to multiple external profiles within the same external system. */
  duplicateExternalSubscriptionsList?: DuplicateExternalSubscriptionsListType;
  /** Evaluated total page count based on the requested max fetch count. */
  totalPages?: number;
  /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
  pageNumber?: number;
  /** Indicates maximum number of records a Web Service should return. */
  maxFetchCount?: number;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  allRowsFetched?: boolean;
  /** Total number of rows queried */
  totalRows?: number;
  links?: Links;
}

/** Response object for fetching subscriptions where an external profile within a particular external system is linked to multiple OPERA profiles. */
export interface DuplicateOPERASubscriptions {
  /** A collection of subscriptions where an external profile within a particular external system is linked to multiple OPERA profiles. */
  duplicateOPERASubscriptionsList?: DuplicateOPERASubscriptionsListType;
  /** Evaluated total page count based on the requested max fetch count. */
  totalPages?: number;
  /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
  pageNumber?: number;
  /** Indicates maximum number of records a Web Service should return. */
  maxFetchCount?: number;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  allRowsFetched?: boolean;
  /** Total number of rows queried */
  totalRows?: number;
  links?: Links;
}

/** Operation to validate profiles for forgetting. */
export interface ForgetProfilesCriteria {
  /** Criteria to identify the profiles to be validated for forgetting. */
  validateForgetProfilesCriteria?: ForgetProfilesCriteriaType;
  links?: Links;
}

/** Response object for fetch ECertificates. This object contains collection of ECertificates,Success,Warnings and Errors related to this operation. */
export interface ECertificates {
  /** E-Certificate assosiated with the profile. */
  eCertificatesDetail?: ECertificatesType;
  links?: Links;
}

/** Request object to issue E-Certificate. */
export interface ECertificateGeneration {
  /** Details to issue E-Certificate. */
  eCertificateGenerationDetails?: ECertificateGenerationDetailsType;
  links?: Links;
}

/** Response object for fetch suspended profile match statistics. This object contains collection of MatchCriteria,Threshold points,profile type. */
export interface SuspendedProfileMatchStats {
  /** Indicates response of the match statistics details. */
  suspendedProfileMatchStat?: SuspendedProfileMatchStatsType;
  links?: Links;
}

/** Response object for fetching Profile Distribution Filters. */
export interface ProfileDistributionFilters {
  /** Profile Distribution Filters matching the search criteria. */
  profileDistributionFiltersDetail?: ProfileDistributionFiltersType;
  links?: Links;
}

/** Response object for fetching profile stay/reservation/revenue statistics. This object contains collection of summary or detail,Success,Warnings and Errors related to this operation. */
export interface ProfileStatistics {
  /** Contains summary/detail/revenue statistics information. */
  profileStatistic?: ProfileStatisticsType;
  links?: Links;
}

/** Response of the WS operation to fetch player statistics. */
export interface FetchPlayerStatisticsRS {
  /** The player statistics details for the given profile. */
  playerStatistics?: PlayerStatisticsType;
  links?: Links;
}

/** Contains Player Statistics information */
export interface PlayerStatisticsType {
  /** @maxLength 2000 */
  enrollmentDate?: string;
  /** @maxLength 2000 */
  compDollars?: string;
  /** @maxLength 2000 */
  actualTableWins?: string;
  /** @maxLength 2000 */
  actualOtherWins?: string;
  /** @maxLength 2000 */
  tableTimePlayed?: string;
  /** @maxLength 2000 */
  otherTimePlayed?: string;
  /** @maxLength 2000 */
  averageSlotBet?: string;
  /** @maxLength 2000 */
  skillRating?: string;
  /** @maxLength 2000 */
  playerTableWins?: string;
  /** @maxLength 2000 */
  playerOtherWins?: string;
  /** @maxLength 2000 */
  theoriticalTableWins?: string;
  /** @maxLength 2000 */
  theoriticalOtherWins?: string;
  /** @maxLength 2000 */
  expectedProfit?: string;
  /** @maxLength 2000 */
  grossMarkers?: string;
  /** @maxLength 2000 */
  compPoints?: string;
  /** @maxLength 2000 */
  totalComps?: string;
  /** @maxLength 2000 */
  actualSlotWins?: string;
  /** @maxLength 2000 */
  creditLimit?: string;
  /** @maxLength 2000 */
  slotTimePlayed?: string;
  /** @maxLength 2000 */
  avgTableBet?: string;
  /** @maxLength 2000 */
  avgOtherBet?: string;
  /** @maxLength 2000 */
  preferredGame?: string;
  /** @maxLength 2000 */
  playerSlotWins?: string;
  /** @maxLength 2000 */
  noOfRatings?: string;
  /** @maxLength 2000 */
  theoSlotWins?: string;
  /** @maxLength 2000 */
  theoProfit?: string;
  /** @maxLength 2000 */
  bettingLimit?: string;
  /** @maxLength 2000 */
  netMarkers?: string;
  /** @maxLength 2000 */
  notes?: string;
}

/** Response object for fetching offers from external system. */
export interface GamingOffers {
  /** Type contains offers information. */
  gamingOffersInfo?: GamingOffersType;
  links?: Links;
}

/**
 * Offers that are availabl to be attached
 * @maxItems 4000
 */
export type GamingOffersType = CodeDescriptionType[];

/** Response object to fetch IATA Number validation for Travel Agency Profile. */
export interface IataNumberDetails {
  /** Type contains profile enrollment information. */
  checkIataNumberInfo?: CheckIataNumberType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Type provides the IATA Validation information. */
export interface CheckIataNumberType {
  /**
   * IATA Number.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Last Refresh Date.
   * @minLength 0
   * @maxLength 20
   */
  lastRefreshDate?: string;
  /**
   * Reason.
   * @minLength 0
   * @maxLength 40
   */
  reason?: string;
  /**
   * Agency Name.
   * @minLength 0
   * @maxLength 100
   */
  agencyName?: string;
  /**
   * Approval Date.
   * @minLength 0
   * @maxLength 100
   */
  approvalDate?: string;
  /**
   * Agency Class.
   * @minLength 0
   * @maxLength 100
   */
  agencyClass?: string;
  /**
   * Site Type.
   * @minLength 0
   * @maxLength 100
   */
  siteType?: string;
  /**
   * Address.
   * @minLength 0
   * @maxLength 1000
   */
  address?: string;
  /**
   * City.
   * @minLength 0
   * @maxLength 100
   */
  city?: string;
  /**
   * Postal Code.
   * @minLength 0
   * @maxLength 100
   */
  postalCode?: string;
  /**
   * State.
   * @minLength 0
   * @maxLength 40
   */
  state?: string;
  /**
   * Country.
   * @minLength 0
   * @maxLength 40
   */
  country?: string;
  /**
   * Phone Number.
   * @minLength 0
   * @maxLength 40
   */
  phoneNumber?: string;
  /**
   * Message.
   * @minLength 0
   * @maxLength 100
   */
  message?: string;
}

/** Request object for generating membership number. */
export interface MembershipNumber {
  /** Generate Membership Number criteria. */
  generateMembershipNumberCriteria?: GenerateMembershipNumberCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Auto generate membership number criteria. */
export interface GenerateMembershipNumberCriteriaType {
  /**
   * Indicates the Membership Type where membership number to be generated will be based on.
   * @minLength 0
   * @maxLength 20
   */
  membershipType?: string;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Response object for member info. */
export interface MemberInformation {
  memberInfo?: MemberInfoRSType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface MemberInfoRSType {
  /** Points and stay details of the membership. */
  memberInfoDetails?: MemberInfoDetailsType;
  /** Points and stay details for the membership range. */
  memberInfoRangeDetails?: MemberInfoDetailsType;
  /** Points required for next tier of membership. */
  nextTierPoints?: number;
  /** Points available for the member. */
  pointsAvailable?: number;
}

export interface MemberInfoDetailsType {
  /** Total nights of the guest. */
  guestTotalNights?: number;
  /** STotal stays of the guest. */
  guestTotalStay?: number;
  /** Tier Base Nights Points. */
  tierBaseNights?: number;
  /** Tier Base Revenue Points. */
  tierBaseRevenue?: number;
  /** Tier Base Stay Points. */
  tierBaseStay?: number;
  /** Tier Bonus Nights Points. */
  tierBonusNights?: number;
  /** Tier Bonus Revenue Points. */
  tierBonusRevenue?: number;
  /** Tier Bonus Stay Points. */
  tierBonusStay?: number;
  /** Total Nights of the membership. */
  membershipTotalNights?: number;
  /** Total Stay of the membership. */
  membershipTotalStay?: number;
  /** Total base points of the award. */
  awardBasePoints?: number;
  /** Total bonus points of the award. */
  awardBonusPoints?: number;
  /** Total miscellaneous points of the award. */
  awardMiscPoints?: number;
  /** Total points of the award. */
  totalAwardPoints?: number;
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
 * A collection of validated Addresses.
 * @maxItems 4000
 */
export type AddressValidationsType = AddressValidationInfoType[];

export interface AddressValidationInfoType {
  /**
   * The suggestion that should be presented to the user as a possible match to their input.
   * @minLength 0
   * @maxLength 2000
   */
  addressText?: string;
  /**
   * The ID of the address recieved as part of an address search validation.
   * @minLength 0
   * @maxLength 2000
   */
  externalAddressId?: string;
  /**
   * If the Type is 'Address' then the Id can be passed to the Retrieve service. Any other Id should be passed as the Container to a further Find request to get more results.
   * @minLength 0
   * @maxLength 20
   */
  addressType?: string;
}

/** Response object for fetching offers from external system. */
export interface ValidateMembershipNumber {
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching Addresses from external system. */
export interface ValidatedAddresses {
  /** Type contains Address information. */
  addressValidationsInfo?: AddressValidationsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching full address based on ID from external system. */
export interface ValidatedAddress {
  /** Type contains Address information. */
  addressValidationInfo?: AddressType;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/crm/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Customer Relationship Management Outbound API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  externalSystems = {
    /**
     * @description Use this API when you want to search for profiles in an external system. The response will include a list of profiles that exist in the external system, based on your search criteria.  For example, you want to see if the external system has a profile for Mr David Smith.  The GET API will send a request to external system, and the response will include a list of any profiles that exist for Mr Davis Smith in that system.  If a profile does exist, and the user would like to 'download' that profile into OPERA, you would then proceed to use the downlodExternalProfiles API.
     *
     * @tags ProfileExternal
     * @name GetExternalProfiles
     * @summary Retrieve profiles from external system
     * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles
     */
    getExternalProfiles: (
      extSystemCode: string,
      chainCode: string,
      query?: {
        /** Profile will be fetched from this External database. */
        externalDatabaseId?: string;
        /** Hotel Code, It is used to filter hotel specific children to this specific hotel code. */
        hotelId?: string;
        /**
         * The types of Profile handled by the web service.
         * @uniqueItems true
         */
        profileType?:
          | 'Guest'
          | 'Agent'
          | 'Company'
          | 'Group'
          | 'Source'
          | 'Employee'
          | 'Hotel'
          | 'Vendor'
          | 'Contact'
          | 'Purge'
          | 'BusinessHeader'
          | 'BillingAccount'
          | 'Activity'
          | 'Potential'
          | 'Account';
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        profileIdType?: string[];
        /** Family name, last name or Company Name. */
        name?: string;
        /** Given name, first name or names. */
        givenName?: string;
        /** City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). */
        city?: string;
        /** Post Office Code number. */
        postalCode?: string;
        /** State or Province name (e.g., Texas). */
        state?: string;
        /** Code for a country or a nationality. */
        countryCode?: string;
        /** Keyword associated to the profile. */
        keyword?: string;
        /** Any communication method associated to the profile such as phone, fax, eMail id. */
        communication?: string;
        /** Membership number associated to the profile. */
        membershipNumber?: string;
        /** Member Type of searching profile. */
        membershipType?: string;
        /** Account Receivable associated to the profile. */
        arNumber?: string;
        /**
         * Date of birth
         * @format date
         */
        birthDate?: string;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<ExternalProfiles, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/chains/${chainCode}/externalProfiles`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description After searching for profiles in an external system using getExternalProfiles, proceed to use this API knowing the external profile ID in the path.  The result will be a new profile created in OPERA. <p><strong>OperationId:</strong>downloadExternalProfile</p>
     *
     * @tags ProfileExternal
     * @name DownloadExternalProfile
     * @summary Download a Profile from external system
     * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles/{profileExternalId}
     */
    downloadExternalProfile: (
      extSystemCode: string,
      chainCode: string,
      profileExternalId: string,
      query?: {
        /** Profile will be downloaded from this External database. */
        externalDatabaseId?: string;
        /** Hotel Code, It is used to filter hotel specific children to this specific hotel code. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<Profile, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/chains/${chainCode}/externalProfiles/${profileExternalId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
     *
     * @tags ProfileMembership
     * @name PostEnrollment
     * @summary Create an Enrollment
     * @request POST:/externalSystems/{extSystemCode}/chains/{chainCode}/enrollments
     */
    postEnrollment: (extSystemCode: string, chainCode: string, enrollment: Enrollment, params: RequestParams = {}) => {
      const newParams = params;
      return this.request<Enrollment, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/chains/${chainCode}/enrollments`,
        method: 'POST',
        body: enrollment,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Request for the fetch player statistics WS operation <p><strong>OperationId:</strong>getPlayerStatistics</p>
     *
     * @tags ProfileExternal
     * @name GetPlayerStatistics
     * @summary Retrieve player statistics
     * @request GET:/externalSystems/{extSystemCode}/playerStatistics/{profileId}
     */
    getPlayerStatistics: (
      profileId: string,
      extSystemCode: string,
      query?: {
        /** Unique Identifier for PlayerID. */
        playerId?: string;
        /** Code of the Hotel. */
        hotelId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationIdType?: string;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<FetchPlayerStatisticsRS, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/playerStatistics/${profileId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API when you have a guest profile and you want to get the offers available from an external system. <p><strong>OperationId:</strong>getGamingOffers</p>
     *
     * @tags ProfileExternal
     * @name GetGamingOffers
     * @summary Get offers that can be attached for a profile
     * @request GET:/externalSystems/{extSystemCode}/gamingOffers/{membershipNo}
     */
    getGamingOffers: (
      membershipNo: string,
      extSystemCode: string,
      query?: {
        /** Hotel Code for which the offers will be fetched. */
        hotelId?: string;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<GamingOffers, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/gamingOffers/${membershipNo}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
     *
     * @tags ProfileMembership
     * @name RedeemAward
     * @summary Redeem an award
     * @request PUT:/externalSystems/{extSystemCode}/profiles/{externalProfileId}/profileAwards
     */
    redeemAward: (extSystemCode: string, externalProfileId: string, award: Award, params: RequestParams = {}) => {
      const newParams = params;
      return this.request<Award, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/profiles/${externalProfileId}/profileAwards`,
        method: 'PUT',
        body: award,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will generate a new membership number. <p><strong>OperationId:</strong>postMembershipNumber</p>
     *
     * @tags Profile
     * @name PostMembershipNumber
     * @summary Generate membership number
     * @request POST:/externalSystems/{extSystemCode}/memberships/{membershipType}/membershipIDs
     */
    postMembershipNumber: (
      extSystemCode: string,
      membershipType: string,
      membershipNumber: MembershipNumber,
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<Status, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/memberships/${membershipType}/membershipIDs`,
        method: 'POST',
        body: membershipNumber,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
     *
     * @tags ProfileMembership
     * @name GetMembershipDetails
     * @summary Get membership information on a profile
     * @request GET:/externalSystems/{extSystemCode}/profiles/{externalProfileId}/memberships
     */
    getMembershipDetails: (
      extSystemCode: string,
      externalProfileId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        operaProfileId?: string[];
        /** The type of the membership. */
        membershipType?: string;
        /** The card number associated with this membership. */
        membershipId?: string;
        /** Property from which the membership stay information was received. */
        hotelId?: string;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        /**
         * Whether member info search will pertain to transaction dates/ stay dates/ points credit dates.
         * @uniqueItems true
         */
        mode?: 'TransactionDate' | 'StayBeginDate' | 'StayEndDate' | 'PointsCreditDate';
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<MemberInformation, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/profiles/${externalProfileId}/memberships`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API when you want to validate membership numbers from external system. <p><strong>OperationId:</strong>validateMembershipNumber</p>
     *
     * @tags ProfileExternal
     * @name ValidateMembershipNumber
     * @summary Validate Membership Number attached to a membership
     * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/validateMembershipNumber
     */
    validateMembershipNumber: (
      chainCode: string,
      extSystemCode: string,
      query: {
        /** Indicates membership number of the guest */
        membershipNo: string;
        /** Membership type for which point calculation process is to be run. */
        membershipType: string;
        /** Hotel code from which the membership code belongs to */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<ValidateMembershipNumber, ExceptionDetailType>({
        path: `/externalSystems/${extSystemCode}/chains/${chainCode}/validateMembershipNumber`,
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
     * @description This API will validate and check an IATA number. <p><strong>OperationId:</strong>checkIataNumber</p>
     *
     * @tags ProfileExternal
     * @name CheckIataNumber
     * @summary Validate IATA number.
     * @request GET:/hotels/{hotelId}/travelAgents/{iataNumber}
     */
    checkIataNumber: (iataNumber: string, hotelId: string, params: RequestParams = {}) => {
      const newParams = params;
      return this.request<IataNumberDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/travelAgents/${iataNumber}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  validatedAddresses = {
    /**
     * @description Use this API when you want to validate address from a third party vendor. The response will be a list of addresses with its address ID based on the search criteria. <p><strong>OperationId:</strong>getValidatedAddresses</p>
     *
     * @tags ProfileExternal
     * @name GetValidatedAddresses
     * @summary Retrive valid addresses from a third party vendor.
     * @request GET:/validatedAddresses
     */
    getValidatedAddresses: (
      query: {
        /** The suggestion that should be presented to the user as a possible match to their input. */
        addressText: string;
        /** The ID of the address recieved as part of an address search validation. */
        country: string;
        /** The preferred language for results. This should be a 2 or 4 character language code. */
        language?: string;
        /** Maximum time you are prepared to wait for a response. */
        timeoutSeconds?: number;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<ValidatedAddresses, ExceptionDetailType>({
        path: `/validatedAddresses`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API when you want to fetch full address information for a given address Id. <p><strong>OperationId:</strong>getValidatedAddress</p>
     *
     * @tags ProfileExternal
     * @name GetValidatedAddress
     * @summary Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.
     * @request GET:/validatedAddresses/{externalAddressId}
     */
    getValidatedAddress: (
      externalAddressId: string,
      query?: {
        /** Maximum time you are prepared to wait for a response. */
        timeoutSeconds?: number;
      },
      params: RequestParams = {},
    ) => {
      const newParams = params;
      return this.request<ValidatedAddress, ExceptionDetailType>({
        path: `/validatedAddresses/${externalAddressId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
