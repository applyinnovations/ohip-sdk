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

/** Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included. */
export interface SubAllocation {
  /** Contains the detailed information regarding the sub allocation. */
  subAllocations?: SubAllocationsType;
  /** The instruction to determine the block information to be returned in a successful create operation. */
  fetchInstructions?: BlockDetailInstructionType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A collection of Sub Allocations or Unique IDs of Sub Allocation. */
export interface SubAllocationsType {
  /**
   * A collection of Sub Allocations or Unique IDs of Sub Allocations.
   * @maxItems 4000
   */
  subAllocationInfo?: {
    /** Provides detailed information regarding a sub allocation including (Profiles, Owners, Reservations, etc.). */
    subAllocation?: SubAllocationType;
  }[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Extended Block Type object to hold information for a Sub Allocation along with master allocation identification. */
export interface SubAllocationType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /** External Reference information for Reservation. */
  externalReferences?: ExternalReferencesType;
  /** Detailed Block information for this block. */
  blockDetails?: BlockDetailsType;
  /** Criteria to assign the owners of a business block. */
  blockOwners?: BlockOwnersType;
  /** Basic information of master and sub blocks structure in tree manner, this element only used while retrieving Block Type. */
  masterBlockInfo?: MasterBlockInfoType;
  /**
   * A list of reservation policies.
   * @maxItems 4000
   */
  reservationPolicies?: ReservationPoliciesType[];
  /** Details of room Information for the Block. */
  reservationDetails?: BlockReservationDetailsType;
  /** Details of catering Information for the Block. */
  catering?: CateringType;
  /** A collection of all the profiles associated to this block. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time. */
  blockProfiles?: {
    /**
     * The list of profiles associated with the block.
     * @maxItems 4000
     */
    blockProfile?: BlockProfilesType[];
    /** Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided. */
    fullOverlay?: boolean;
  };
  /**
   * A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges.
   * @maxItems 4000
   */
  blockPackages?: BlockPackageType[];
  /** A collection of inventory items attached to a block. */
  inventoryItems?: BlockInventoryItemsType;
  /** Indicates the room and revenue statistics of the block. */
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
  /** Room Allocations for the Block. */
  roomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
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
    allDescriptionDDSecured?: boolean;
    /** Rates Secured from GNR. */
    ratesSecuredfromGNR?: boolean;
    /** Rates Secured from All Displays. */
    ratesSecuredfromAllDisplays?: boolean;
    /** Housing Information Secured. */
    housingInformationSecured?: boolean;
    /** Number of Days Deposit due to guarantee the guest booking. */
    daysDepositRequired?: number;
    /** Number of days before the arrival date a reservation can be canceled without losing the deposit. */
    advanceCancelDays?: number;
    /** Return One Day at a time. */
    returnOneDayAtTimeYn?: boolean;
    /** Determines if Travel Agent commission will be paid on reservations booked through the HOLIDEX Plus TACP program. */
    commissionableYn?: boolean;
  };
  /**
   * Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud.
   * @maxItems 4000
   */
  ratePrograms?: RateProgramType[];
  /** Block attributes used for external systems. Only available if configured in OPERA Cloud. */
  externalAttributes?: {
    /** Only available if configured in OPERA Cloud. */
    housingProtected?: boolean;
    /** Contract type of a block, which is used for external system. Only available if configured in OPERA Cloud. */
    eventType?: EventTypeType;
    /** Group IATA number validated by an external system and block can't be saved unless confirmed that GIID is valid. Only available if configured in OPERA Cloud. */
    gIId?: string;
    /** When this flag is set it will be used to roll Block End Date and Block Rate Program End Date in the night audit process. Only available if configured in OPERA Cloud. */
    rollEndDate?: boolean;
  };
  /** Generic Room Type Allocations for the Block. */
  genericRoomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Generic Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /**
   * Alternate Date information for the Block.
   * @maxItems 4000
   */
  alternateDates?: BlockAlternateDateType[];
  /** List of sell messages for the Block. */
  sellMessages?: SellMessageConfigsType;
  /** List of attachments for the Block. */
  attachments?: AttachmentsType;
  /** List of wash schedules for the Block. */
  washSchedules?: BlockWashSchedulesType;
  /** List of restrictions for the Block. */
  restrictions?: BlockRestrictionsType;
  /** List of access exclusions for the block. */
  accessExclusions?: BlockAccessExclusionsType;
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
  /**
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
  /** This type has ability to pertain basic information for master allocation, only ID and Hotel Code will be used to link sub allocation with master allocation in CreateSubAllocation operation. */
  masterAllocationInfo?: MasterSubBlockBaseInfoType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type BlockIdList = UniqueIDType[];

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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  /** Alias name(s) that can be used to search for the block. */
  blockAliases?: BlockAliasesType;
  /** The Time Span(Arrival, Departure) which covers the Block Span. */
  timeSpan?: TimeSpanType;
  /** The Original Time Span(Arrival, Departure) which covers the Block Span. */
  originalTimeSpan?: TimeSpanType;
  /** The Shoulder Dates (Arrival, Departure) which covers the Block Shoulder Span. */
  shoulderDates?: TimeSpanType;
  /** The shoulder rate plans which cover the block shoulder start and end dates. */
  shoulderRatePlanCode?: {
    /**
     * The Rate Plan(s) for the days between the shoulder start date and the actual block start date.
     * @maxItems 4000
     */
    shoulderStart?: BlockRatePlanInfoType[];
    /**
     * The Rate Plan(s) for the days between the actual block end date and the shoulder end date.
     * @maxItems 4000
     */
    shoulderEnd?: BlockRatePlanInfoType[];
  };
  /** Current status of the block. */
  blockStatus?: BookingStatusDetailType;
  /** List of possible next booking statuses of the business block. */
  blockNextStatusList?: BlockNextStatusListType;
  /** List of booking status changes. */
  blockStatusChangeHistory?: BlockStatusChangeHistoryType;
  /** Reservation Type info of the block. */
  reservationType?: ReservationTypeInfoType;
  /** Market code info of the block. */
  marketCode?: MarketCodeInfoType;
  /** Point of Sale of block. Identifies the entity/channel who made the block reservation. */
  sourceOfSale?: BlockSourceOfSaleType;
  /** Reservation Method of the block. Indicates how the individual reservations will be handled (Individual Call In, Rooming List, etc). */
  reservationMethod?: CodeDescriptionType;
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
   * Origin information of the block PMS/ORS/SC/SFA
   * @minLength 0
   * @maxLength 20
   */
  blockOrigin?: string;
  /** Indicate which method of payment will be used for the block’s charges. */
  paymentMethod?: CodeDescriptionType;
  /**
   * Indicate what percentage of this block is eligible for commission.
   * @min 0
   * @max 100
   */
  commissionPercent?: number;
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
  /** Information on the canceled block. */
  cancellationDetails?: CancellationDetailsType;
  /**
   * A text field used to communicate the proper name of the hotel.
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /**
   * The tour code that this block belongs to, if the block is a part of a tour series.
   * @minLength 0
   * @maxLength 20
   */
  tourCode?: string;
  /** Indicates whether the block can be updated only by the Hotel to which it belongs. */
  hotelUse?: HotelUseType;
  /** Indicates the reason for overriding the rate amounts on a block. */
  rateOverrideReason?: CodeDescriptionType;
  /** Indicate Block Classification. */
  blockClassification?: BlockClassificationType;
  /** Indicate if Master/Sub Blocks are Synchronized. */
  synchronized?: boolean;
  /** Sub Block code will be populated, when master block creation is in progress. */
  subBlockIdList?: SubBlockIdList;
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
  /** Primary rates for the block. */
  primaryRatePlanCodes?: {
    /** Primary Block Rate */
    blockRatePlanCode?: BlockRatePlanInfoType;
    /** Primary Shoulder Start Rate */
    shoulderStartRatePlanCode?: BlockRatePlanInfoType;
    /** Primary Shoulder End Rate */
    shoulderEndRatePlanCode?: BlockRatePlanInfoType;
    /** Total number of Block Rates. */
    blockRatePlanCodeCount?: number;
    /** Total number of Shoulder Start Rates. */
    shoulderStartRatePlanCodeCount?: number;
    /** Total number of Shoulder End Rates. */
    shoulderEndRatePlanCodeCount?: number;
  };
  /** Indicates if this is a catering only block. */
  cateringOnlyBlock?: boolean;
  /** Indicates if alternate dates are allowed for the booking. */
  flexibleDates?: boolean;
  /** Indicates if the block is locked by an external system. */
  externalLocked?: boolean;
  /** Indicates if contract grid will be auto loaded from original grid. */
  autoloadContractGrid?: boolean;
  /** Indicates whether rates of a block can be overridden. Applicable only for blocks with a Rate Code. */
  allowRateOverride?: boolean;
  /** Indicates whether Block was cutoff manually. */
  manualCutOff?: boolean;
  /** Indicates whether the business block should be considered as a wholesale block for revenue management block materialization forecasting */
  wholesaleBlock?: boolean;
  /** Determines whether or not the block can be managed at the CRS level. */
  controlBlockLocally?: boolean;
  /** Indicate whether arrivals exists on current business date. */
  businessDateArrivalsExist?: boolean;
}

/**
 * List of Block Aliases.
 * @maxItems 4000
 */
export type BlockAliasesType = string[];

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

/** Rate Plan info type extension for block. */
export interface BlockRatePlanInfoType {
  /**
   * Brief Information of the Rate Code.
   * @minLength 0
   * @maxLength 2000
   */
  shortInfo?: string;
  /**
   * Detail Information of the Rate Code.
   * @minLength 0
   * @maxLength 2000
   */
  longInfo?: string;
  /**
   * URL providing more information about the Rate Code.
   * @minLength 0
   * @maxLength 2000
   */
  webPage?: string;
  /**
   * Description of the Rate Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Currency Code of the rate code.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /**
   * All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanLevel?: string;
  /** Guarantee details for rate plan code. */
  guarantee?: GuaranteeType;
  /** Cancellation details for rate plan code. */
  cancelPenalty?: CancelPenaltyType;
  /** Meal plan codes for rate plan code. */
  mealPlans?: MealPlansType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCategory?: string;
  /** Indicates if tax is included in the rate code amount. */
  taxInclusive?: boolean;
  /** Indicates if service fee is included in the rate code amount. */
  serviceFeeInclusive?: boolean;
  /** Is it a primary rate plan? */
  primary?: boolean;
  /** Is the rate amount to be shown? */
  showRateAmount?: boolean;
  /**
   * Market Code associated with the RatePlanCode.
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * Source Code associated with the RatePlanCode.
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
  /** Indicates if the rate code is a negotiated rate code */
  negotiated?: boolean;
}

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

/**
 * Meal plan codes associated with the rate codes.
 * @maxItems 4000
 */
export type MealPlansType = MealPlanCodeType[];

/** Meal plan codes associated with the rate codes. */
export interface MealPlanCodeType {
  /**
   * Meal plan code.
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /** Represents if the meal plan code is included in rate code or not. */
  included?: boolean;
  /** Represents if the meal plan code is available for breakfast or not. */
  breakfastIncluded?: boolean;
  /** Represents if the meal plan code is available for lunch or not. */
  lunchIncluded?: boolean;
  /** Represents if the meal plan code is available for dinner or not. */
  dinnerIncluded?: boolean;
}

/** Booking Status details of the business block. */
export interface BookingStatusDetailType {
  /** Booking Status of the business block. */
  bookingStatus?: BookingStatusType;
  /**
   * Parent status of the booking status, if one exists.
   * @minLength 0
   * @maxLength 20
   */
  parentBookingStatus?: string;
  /** Indicates if blocked rooms are deducted from inventory. */
  deductInventory?: boolean;
  /** Indicates if catering event's spaces are deducted from inventory */
  catDeductInventory?: boolean;
  /** Indicates if business blocks with this status will be allowed for pickup or not. */
  allowPickup?: boolean;
  /** Indicates if blocked rooms will be returned to availability or not. */
  returnToInventory?: boolean;
  /**
   * Default reservation type for the booking status.
   * @minLength 0
   * @maxLength 20
   */
  defaultReservationType?: string;
  /** Cancellation reason type of the booking status. Populates only when the booking status is of return to inventory type. */
  cancellationType?: BlockCancellationTypeType;
  /** Indicates status type Inquiry, Actual, Cancel, etc. */
  statusType?: BlockStatusTypeType;
  /** Indicates status type Inquiry, Actual, Cancel, etc. */
  catStatusType?: BlockStatusTypeType;
}

/** Booking status code, description and configured color of the status. This will be used for block and event statuses. */
export interface BookingStatusType {
  /** Status code and description. */
  status?: CodeDescriptionType;
  /** Color from status configuration. */
  color?: StatusColorType;
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

/** Simple type for cancellation reasons which helps to decide type of cancellation. */
export enum BlockCancellationTypeType {
  Lost = 'Lost',
  Cancel = 'Cancel',
  Refused = 'Refused',
}

/** Simple type for specifying the block status type. */
export enum BlockStatusTypeType {
  Inquiry = 'Inquiry',
  Actual = 'Actual',
  Waitlist = 'Waitlist',
  Cancel = 'Cancel',
  Referral = 'Referral',
}

/**
 * Next booking status of the business block.
 * @maxItems 4000
 */
export type BlockNextStatusListType = BookingStatusDetailType[];

/**
 * Collection of block status history.
 * @maxItems 4000
 */
export type BlockStatusChangeHistoryType = BookingStatusHistoryType[];

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
  /**
   * The of entity/channel where this business block originated.
   * @minLength 0
   * @maxLength 20
   */
  sourceType?: string;
  /**
   * The of entity/channel where this business block originated.
   * @minLength 0
   * @maxLength 2000
   */
  sourceTypeDescription?: string;
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

export interface HotelUseType {
  /**
   * Explains the reason why the business block can be updated only by the Hotel.
   * @minLength 0
   * @maxLength 4000
   */
  hotelUseReason?: string;
  /** List of block access exclusion/restriction types. The field HotelUseOnly and Modify under this will behave the same. User can pass either of them. For new development use this field. */
  accessRestrictions?: AccessRestrictionsType;
  /** Indicates whether this business block can be updated only by the Hotel to which it belongs. This is used to communicate to CRO that the business block can be only updated by the Hotel. */
  hotelUseOnly?: boolean;
}

/**
 * Block access exclusion/restriction type.
 * @maxItems 4000
 */
export type AccessRestrictionsType = BlockAccessRestrictionType[];

/** Simple type for block access exclusion/restriction types. */
export enum BlockAccessRestrictionType {
  Availability = 'Availability',
  Create = 'Create',
  Modify = 'Modify',
  Cancel = 'Cancel',
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
  Opportunity = 'Opportunity',
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type SubBlockIdList = UniqueIDType[];

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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  /** Indicates if profile is printable to customer reports by default. */
  defaultPrint?: boolean;
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
   * Trace Code associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  traceCode?: string;
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
  /** List of Delivery methods configured against a Property for this Profile. */
  profileDeliveryMethods?: {
    /**
     * Collection of delivery methods for this Profile.
     * @maxItems 4000
     */
    profileDeliveryMethod?: ProfileDeliveryMethod[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of loyalty program(s) the profile is subscribed to. */
  profileMemberships?: {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @maxItems 4000
     */
    profileMembership?: ProfileMembershipType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of customer preferences. */
  preferenceCollection?: {
    /**
     * Collection of Detailed information on preferences of the customer.
     * @maxItems 4000
     */
    preferenceType?: PreferenceTypeType[];
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
  reservationInfoList?: ReservationHistoryFutureInfoType;
  /** Collection of Detailed information on history and future reservations associated with the profile. */
  stayReservationInfoList?: ReservationStayHistoryFutureInfoType;
  /** Information on last stay of the profile. */
  lastStayInfo?: LastStayInfoType;
  /** Detailed information on restrictions associated with the profile. */
  profileRestrictions?: ProfileRestrictions;
  /** Contains privacy related information associated with the profile */
  privacyInfo?: PrivacyInfoType;
  /** Contains cashiering related details for the profile */
  cashiering?: ProfileCashieringType;
  /**
   * Contains commission related details for the profile.
   * @maxItems 4000
   */
  commissionInfoList?: ProfileCommissionType[];
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /** Profile information about tax. */
  taxInfo?: ProfileTaxInfoType;
  /** E-Certificate assosiated with the profile. */
  eCertificates?: ECertificatesType;
  /** Room Ownership records. */
  roomOwnershipsList?: {
    /**
     * Collection of Detailed information on Room Ownership records.
     * @maxItems 4000
     */
    roomOwnershipInfo?: RoomOwnershipType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
  profileType?: ProfileTypeType;
  /** Status of the profile. Active/Inactive */
  statusCode?: ProfileStatusType;
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
  /** Populates true if the profile has commission configured false otherwise. */
  hasCommission?: boolean;
  /** Flag to show inactive Room Owners. */
  showInactiveRoomOwners?: boolean;
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
  /** List of identification of the customer. */
  identifications?: {
    /**
     * Collection of detailed information on the identification of the customer.
     * @maxItems 4000
     */
    identificationInfo?: IdentificationInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /**
   * Profession of a person.
   * @minLength 0
   * @maxLength 80
   */
  profession?: string;
  /** Company Information of the Profile. */
  companyInfo?: CompanyInfoType;
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
   * @maxLength 8
   */
  birthDate?: string;
  /** Indicates the date of birth as masked. */
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
  /** This element tells profile is property exclusive or not. */
  privateProfile?: boolean;
  /** This element tells if profile is blacklisted or not. */
  blacklist?: boolean;
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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
   * @maxLength 8
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
   * @maxLength 8
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

/** Company Information of the Profile. */
export interface CompanyInfoType {
  /**
   * Legal Company.
   * @minLength 0
   * @maxLength 20
   */
  legalCompany?: string;
  /**
   * Department of the Profile.
   * @minLength 0
   * @maxLength 20
   */
  department?: string;
  /**
   * Business Title or Position of the profile.
   * @minLength 0
   * @maxLength 40
   */
  position?: string;
}

export interface CompanyType {
  /**
   * Name of the company.
   * @minLength 0
   * @maxLength 40
   */
  companyName?: string;
  /**
   * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
   * @minLength 0
   * @maxLength 40
   */
  alternateName?: string;
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
   * Commission code of the company.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
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
   * A reference to the type of object defined by the UniqueID element.
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
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
   * A reference to the type of object defined by the UniqueID element.
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
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  /** When true, the note internal could be modified. */
  overrideInternal?: boolean;
  /** When true, the note title will be populated from the note type description and couldn't be modified. */
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

/** Delivery Information type to the profile. */
export interface ProfileDeliveryMethod {
  /** Delivery ID. It will be empty in case of new delivery method. */
  deliveryId?: UniqueIDType;
  /**
   * Delivery type can have a value EMAIL, ELECTRONIC etc and it depends on the parameter set in OPERA Control.
   * @minLength 0
   * @maxLength 20
   */
  deliveryType?: string;
  /**
   * Delivery value holds the corresponding value of the delivery type..
   * @minLength 0
   * @maxLength 2000
   */
  deliveryValue?: string;
  /**
   * Property that has delivery methods configured.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
  deliveryModule?: ProfileDeliveryModuleType;
  /** When true, indicates a primary information. */
  primaryInd?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
}

/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
export enum ProfileDeliveryModuleType {
  EfolioExport = 'EfolioExport',
}

/** Detailed information of the memberships. */
export interface ProfileMembershipType {
  /** Additional comments regarding to the membership. */
  comment?: ParagraphType;
  /** Card Number of the membership. */
  newMembershipNumber?: string;
  /** Name to be displayed on the membership card. */
  nameOnCard?: string;
  /** Description of the membership program. */
  programDescription?: string;
  /** Indicates the membership level. */
  membershipLevel?: string;
  /**
   * Indicates the membership level description.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevelDescription?: string;
  /** Indicates the membership class. */
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
  /** Value Rating Type Description for this membership. */
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
  /** Card Number of the membership. */
  membershipId?: string;
  /** Type of membership. */
  membershipType?: string;
  /**
   * Indicator if Membership is a Primary Membership.
   * @minLength 0
   * @maxLength 1
   */
  primaryMembershipYn?: string;
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
   * @maxLength 8
   */
  signupDate?: string;
  /**
   * Indicates the starting date.
   * @format date
   * @maxLength 8
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   * @maxLength 8
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
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
}

/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface ParagraphType {
  /** Formatted text content. */
  text?: FormattedTextTextType;
  /** An image for this paragraph. */
  image?: string;
  /** A URL for this paragraph. */
  url?: string;
}

/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
export enum MembershipEarningPreferenceType {
  Points = 'Points',
  Miles = 'Miles',
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

/** Request to re issue a new card. */
export enum CardReIssueType {
  Pending = 'Pending',
  NotApplicable = 'NotApplicable',
  Requested = 'Requested',
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
  /** Preference group description. */
  preferenceTypeDescription?: string;
  /** Preference Sequence. */
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
  /**
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
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
  /** Specifies whether to copy the reservation preference to the profile or not. */
  copyToProfile?: boolean;
}

/** Relationship Type contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoType {
  /** Refer to Relationship Profile type document. */
  relationshipProfile?: RelationshipProfileType;
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
   * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
   * @minLength 0
   * @maxLength 20
   */
  targetRelation?: string;
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

/** Information of History and Future Reservation details attached to Profiles. */
export interface ReservationHistoryFutureInfoType {
  /** Refer to History list type document. */
  historyList?: HistoryListType;
  /** Refer to Future list type document. */
  futureList?: FutureListType;
}

/** A collection of reservation history details attached to Profiles. */
export interface HistoryListType {
  /**
   * Additional reservation information attached to the profile . Eg : History reservation details
   * @maxItems 4000
   */
  reservationInfo?: ReservationInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** The Reservation class contains the current reservation being created or altered. */
export interface ReservationInfoType {
  /** Unique identifiers for the reservation for both internal and external systems */
  reservationIdList?: ReservationIdList;
  /** External Reference information for Reservation. */
  externalReferences?: ExternalReferencesType;
  /** Collection of room stays. */
  roomStay?: StayInfoType;
  /** Collection of guests associated with the reservation. */
  reservationGuest?: ResGuestInfoType;
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
   * @maxLength 8
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
  reservationCommunication?: ResCommunicationType;
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
     * @maxLength 8
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
   * @maxLength 8
   */
  purgeDate?: string;
  /** Indicates the status of the reservation. */
  reservationStatus?: PMSResStatusType;
  /** Indicates the status of the reservation. */
  computedReservationStatus?: PMSResStatusType;
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
  /** True indicates room type is a component type. */
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
  /** When true, indicates a room number cannot be changed. When false, indicates a room number may be changed. */
  roomNumberLocked?: boolean;
  /** True indicates as pseudo room type. This is usually used for a posting master reservation. */
  pseudoRoom?: boolean;
  /** Represents the room was assigned by AI Room Assignment. */
  assignedByAI?: boolean;
  /** Represents the room was assigned by AI Room Assignment. */
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

/** The Redeem Points contains the number of points required to book a room type. */
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
   * Promotion Coupon Code when promotion is setup to have a valid coupon code.
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
   * @maxLength 20
   */
  type?: string;
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
 * Collection of shared guest reservations.
 * @maxItems 4000
 */
export type ResSharedGuestListType = ResSharedGuestInfoType[];

/** Contains information regarding the share reservation. */
export interface ResSharedGuestInfoType {
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  profileId?: ProfileId;
  /** Given name, first name or names */
  firstName?: string;
  /** Family name, last name. */
  lastName?: string;
  /** String representation of the full name */
  fullName?: string;
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
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @minLength 0
     * @maxLength 80
     */
    idContext?: string;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
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
  /**
   * Approval code sent by the credit card company on a successful authorization.
   * @minLength 0
   * @maxLength 20
   */
  approvalCode?: string;
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
   * @maxLength 8
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
  /** Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. */
  cardPresent?: boolean;
  /** This contains information on whether credit card is tokenized (token enabled). A value of 'Token' indicates credit card is token enabled and 'CardNumber' indicates non token environment for this payment card type. */
  cardOrToken?: CardNumberTypeType;
  /**
   * Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
   * @minLength 0
   * @maxLength 30
   */
  citId?: string;
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

export enum CardProcessingType {
  Eft = 'Eft',
  Manual = 'Manual',
}

/** Simple type for indicating if credit card number is tokenized. */
export enum CardNumberTypeType {
  CardNumber = 'CardNumber',
  Token = 'Token',
}

/** Configured rule for computing the amount to authorize. */
export interface AuthorizationRuleType {
  /**
   * The authorization rule code.
   * @pattern [0-9]{1,9}
   */
  code?: number;
  /** The amount applicable to the authorization rule. */
  amount?: CurrencyAmountType;
  /** A percentage value if the authorization rule is percentage based. */
  percent?: number;
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

/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
export enum HousekeepingRoomStatusType {
  Clean = 'Clean',
  Dirty = 'Dirty',
  Pickup = 'Pickup',
  Inspected = 'Inspected',
  OutOfOrder = 'OutOfOrder',
  OutOfService = 'OutOfService',
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

/** Information regarding the Date, Duration and Priority of the reservation on Queue for Check in. */
export interface ReservationQueueInformationType {
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
  timeSpan?: {
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
    /** The total duration, in seconds, the reservation is on Queue. */
    durationInSeconds?: number;
  };
  /** Information for the message sent to the user */
  guestTextInfo?: QueueTextInfoType;
  /** The Queue Priority given to this reservation. */
  priority?: number;
  /** The average time, in seconds, a reservation was on queue prior to Check-In. */
  averageQueueTimeToCheckIn?: number;
  /** The average time, in seconds, of the reservations currently in queue. */
  averageQueueTimeCurrentReservations?: number;
  /**
   * The Business date on which the reservation was due to arrive and is currently placed on Queue for Check In.
   * @format date
   * @maxLength 8
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

/** Holds housekeeping turndown service information for the room. */
export interface ResHousekeepingType {
  /** Turndown instructions for the room. */
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
   * @maxLength 8
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
   * @maxLength 8
   */
  date?: string;
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
  reservationPreConfiguredRoutingInstruction?: ResPreConfiguredRoutingInstrType;
  /** The guest from whom payment has to be recovered (direct guest). */
  financiallyResponsible?: boolean;
  /** In case of Appartment style billing indicates whether a prorated amount should be used for an Apartment Style Billing rate. */
  proratedBilling?: boolean;
  /**
   * Date of the last Room And Tax posting. Used primarily to know the date in case of Advance Billing.
   * @format date
   * @maxLength 8
   */
  lastRoomAndTaxPostedDate?: string;
  /** This attribute is to verify if reverse check-in is allowed for the reservation. */
  reverseCheckInAllowed?: boolean;
  /** This attribute is to verify if reverse advance check-in is allowed for the reservation. */
  reverseAdvanceCheckInAllowed?: boolean;
  /** Specifies whether reservation has a financial transaction associated with it. */
  transactionsPosted?: boolean;
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
  /** Comp Balance amount */
  compBalance?: CurrencyAmountType;
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
   * @maxLength 8
   */
  folioCloseDate?: string;
  /** Indicates if the guest is scheduled for automatic check out. */
  scheduledCheckout?: boolean;
  /**
   * Time of automatic check out if guest is schedule for automatic check out.
   * @format date
   * @maxLength 8
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
  reportTaxPercentage?: number;
  /** Minimun Length of Stay. */
  minimumLengthOfStay?: number;
  /**
   * Tax exempt number on the profile.
   * @minLength 0
   * @maxLength 20
   */
  taxExemptNo?: string;
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
   * @maxLength 8
   */
  visaIssueDate?: string;
  /**
   * Visa Expiration Date used for Maldives Bed Tax Reporting
   * @format date
   * @maxLength 8
   */
  visaExpiryDate?: string;
  /** Number of days for which the Maldives tax is applicable. */
  taxableDays?: number;
}

/**
 * This stores the description for the type of tax calculation especially with tax exemption, etc.
 * @maxItems 2
 */
export type FolioTextsType = {
  /**
   * Additional text field to display on the folio.
   * @minLength 0
   * @maxLength 50
   */
  text?: string;
  /** Row number of the additional text. */
  row?: number;
}[];

/** Information regarding periodic folios set on the reservation. */
export interface ResPeriodicFolioType {
  /**
   * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
   * @format date
   * @maxLength 8
   */
  lastSettlementDate?: string;
  /**
   * Latest date when a folio was printed using the "Periodic Batch Folios" option
   * @format date
   * @maxLength 8
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
  /**
   * Indicates if the Comp Billing/posting Exist
   * @minLength 0
   * @maxLength 5
   */
  compPostings?: string;
}

/** Instruction to attach Pre-Configured Routing Instructions to a Reservation. */
export interface ResPreConfiguredRoutingInstrType {
  /** The authorizer information for Promotion Code with attached Complimentary Routing */
  authorizerInfo?: AuthorizerInfoType;
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

/** Authorizer Information */
export interface AuthorizerInfoType {
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  authorizerId?: UniqueIDType;
  /**
   * Application user name of the authorizer
   * @minLength 0
   * @maxLength 40
   */
  authorizerUserName?: string;
  /**
   * Full name of the authorizer.
   * @minLength 0
   * @maxLength 100
   */
  authorizerName?: string;
  /**
   * Rate code of the authorizer.
   * @minLength 0
   * @maxLength 20
   */
  authorizerRateCode?: string;
  /** Indicates whether user has the choice to have reservation inherit rate code from the authorizer. */
  inheritAuthorizerRateCode?: boolean;
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
  reportTaxPercentage?: number;
  /** Minimun Length of Stay. */
  minimumLengthOfStay?: number;
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
   * @maxLength 8
   */
  dueDate?: string;
  /**
   * Deposit Posting Date.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /** Resolves whether reservation has paid deposit. */
  hasPaid?: boolean;
  /** Resolves whether reservation has outstanding deposit. */
  hasOutstanding?: boolean;
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
  /** Error message when Mobile Notification has failed. */
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

/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
export enum ResAccessRestrictionType {
  Change = 'Change',
  Cancel = 'Cancel',
  ChangeOrCancel = 'ChangeOrCancel',
}

export enum CommissionPayoutToType {
  TravelAgent = 'TravelAgent',
  Source = 'Source',
  TravelAgentSource = 'TravelAgentSource',
  None = 'None',
}

/** A collection of reservation history details attached to Profiles. */
export interface FutureListType {
  /**
   * Additional reservation information attached to the profile . Eg : Future reservation details
   * @maxItems 4000
   */
  reservationInfo?: ReservationInfoType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
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
  /** Collection of room stays. */
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

/** Contains last stay related details for the profile */
export interface LastStayInfoType {
  /**
   * Used to hold last stay information for the profile.
   * @format date
   * @maxLength 8
   */
  lastVisit?: string;
  /** Used to hold last room information for the profile. */
  lastRoom?: string;
  /** Used to hold last rate information for the profile. */
  lastRate?: CurrencyAmountType;
  /** The total number of previous stay of the profile. */
  totalStay?: number;
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

/** Defines Privacy related information for the profile. */
export interface PrivacyInfoType {
  /** Indicates if the profile participates in market research. */
  marketResearchParticipation?: boolean;
  /**
   * Indicate the last privacy prompt date of the guest.
   * @format date
   * @maxLength 8
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

/** This is the preconfigured routing instruction type. */
export interface ProfileCommissionType {
  /**
   * Hotel Code for the commission being used for a profile.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * commission Code for a profile.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
  /**
   * Bank account used for the commission for a profile.
   * @minLength 0
   * @maxLength 20
   */
  bankAccount?: string;
  /** Type of payment associated with the bank account. */
  paymentMethod?: CommissionPaymentMethods;
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

/** Check */
export enum CommissionPaymentMethods {
  Cent = 'Cent',
  Eft = 'Eft',
  Chk = 'Chk',
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
  alternateName?: string;
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
  alternateName?: string;
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
   * @maxLength 8
   */
  value?: string;
  /**
   * Label of user defined field used by vendors or customers.
   * @minLength 0
   * @maxLength 2000
   */
  alternateName?: string;
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
   * @maxLength 8
   */
  expiryDate?: string;
  /**
   * New Date of expiry to extend e-certificate.
   * @format date
   * @maxLength 8
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
   * @maxLength 8
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
   * @maxLength 8
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
  inLieuSequence?: number;
  /**
   * Date on which the cancellation was requested.
   * @format date
   * @maxLength 8
   */
  cancelRequestDate?: string;
  /** Number of times e-certificate is already extended. */
  extensionCount?: number;
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
   * @maxLength 8
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
  authorizationCode?: string;
  /**
   * Date on which the service is due (arrival date in case of reservation).
   * @format date
   * @maxLength 8
   */
  serviceDate?: string;
}

/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
export enum ECertificateConsumeSourceType {
  Central = 'Central',
  Web = 'Web',
  Hotel = 'Hotel',
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

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AwardId {
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

/** Indicates that OPERA E-Certificate is issued by external system. */
export enum ECertificateIssueSourceType {
  Opera = 'Opera',
  Web = 'Web',
  Interface = 'Interface',
}

/** Indicates that guest purchased OPERA E-Certificate. */
export enum ECertificateIssueType {
  Assigned = 'Assigned',
  OptedIn = 'OptedIn',
  Purchased = 'Purchased',
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

/** Define the search criteria for retrieving room ownership records */
export interface RoomOwnershipType {
  /** Contract ID of the room ownership record. */
  contractId?: number;
  /** Contract number for room owner. */
  contractNumber?: string;
  /** Unit for room owner. */
  unit?: string;
  /** Room Category of the room ownership record. */
  roomCategory?: string;
  /** Room Type of the room ownership record. */
  roomType?: string;
  /**
   * Start Date of the room ownership record.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End Date of the room ownership record.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Profile ID of the room ownership record. */
  profileId?: UniqueIDType;
  /** Status of the room ownership record. */
  status?: string;
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
  /** When this flag is true, the logged in user cannot modify the existing room owners for the current block. */
  lockRoomsOwners?: boolean;
  /** When this flag is true, the logged in user cannot modify the existing catering owners for the current block. */
  lockCateringOwners?: boolean;
}

/** Basic information pertaining to the master block. */
export interface MasterBlockInfoType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /**
   * Master/Sub Block's Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Indicate Block Classification. */
  blockType?: BlockClassificationType;
  /** The Time Span(Arrival, Departure) which covers the Block Span. */
  timeSpan?: TimeSpanType;
  /**
   * Block description.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** Current status of the block. */
  blockStatus?: BookingStatusType;
  /** Catering Status details of the block. */
  cateringStatus?: BookingStatusType;
  /** Pertain value for blocked rooms for a block. */
  roomNights?: number;
  /** Pertain value for reserved rooms for a block. */
  roomNightsPickedup?: number;
  /** Indicates to check if Block Dates to be in sync. */
  syncBlockDates?: boolean;
  /** Indicates whether other BlockDetails to be in Sync. */
  syncOtherBlockDetails?: boolean;
  /** Indicates if Block Status Details to be in sync. */
  syncBlockStatusDetails?: boolean;
  /** Indicates if packages to be in Sync. */
  syncPackages?: boolean;
  /**
   * Basic information pertaining to the sub block.
   * @maxItems 4000
   */
  subBlockInfo?: MasterSubBlockBaseInfoType[];
  /**
   * Pertains valid hotel code list for logged in user against Master/Sub header record.
   * @maxItems 4000
   */
  masterSubHotels?: HotelCodeListType[];
}

export interface MasterSubBlockBaseInfoType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /**
   * Master/Sub Block's Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Indicate Block Classification. */
  blockType?: BlockClassificationType;
  /** The Time Span(Arrival, Departure) which covers the Block Span. */
  timeSpan?: TimeSpanType;
  /**
   * Block description.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** Current status of the block. */
  blockStatus?: BookingStatusType;
  /** Catering Status details of the block. */
  cateringStatus?: BookingStatusType;
  /** Pertain value for blocked rooms for a block. */
  roomNights?: number;
  /** Pertain value for reserved rooms for a block. */
  roomNightsPickedup?: number;
  /** Indicates to check if Block Dates to be in sync. */
  syncBlockDates?: boolean;
  /** Indicates whether other BlockDetails to be in Sync. */
  syncOtherBlockDetails?: boolean;
  /** Indicates if Block Status Details to be in sync. */
  syncBlockStatusDetails?: boolean;
  /** Indicates if packages to be in Sync. */
  syncPackages?: boolean;
}

/**
 * Hotel code.
 * @maxItems 4000
 */
export type HotelCodeListType = string[];

/** A collection of reservation deposit and cancellation policies. */
export interface ReservationPoliciesType {
  /** A collection of reservation cancellation policies.. */
  cancellationPolicies?: ResCancellationPoliciesType;
  /** A collection of reservation deposit policies. */
  depositPolicies?: ResDepositPoliciesType;
  /** A list of Ids for reservation. */
  reservationIdList?: UniqueIDListType;
  /** Name identifier for the reservation. */
  name?: string;
}

/**
 * A list of reservation cancellation policies.
 * @maxItems 4000
 */
export type ResCancellationPoliciesType = ResCancellationPolicyType[];

/** A cancellation policy attached with the reservation. */
export interface ResCancellationPolicyType {
  /** Type of reservation. */
  revenueType?: DepositCancelRevenueType;
  /** Cancellation policy details. */
  policy?: ResCancelPenaltyType;
  /**
   * The percentage amount due for reservation cancellation.
   * @min 0
   * @max 100
   */
  percentageDue?: number;
  /**
   * Comments attached with the reservation cancellation.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** Unique ID of the Reservation Policy. */
  policyId?: UniqueIDType;
}

/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
export enum DepositCancelRevenueType {
  Rooms = 'Rooms',
  Catering = 'Catering',
  All = 'All',
}

/** The CancelPenalty class defines the cancellation policy of the hotel facility. */
export interface ResCancelPenaltyType {
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
  /** Indicator if Cancellation Penalty is currently applicable or not. */
  effective?: boolean;
}

/**
 * A list of deposit policies attached with the reservation.
 * @maxItems 4000
 */
export type ResDepositPoliciesType = ResDepositPolicyType[];

/** A deposit policy attached with the reservation. */
export interface ResDepositPolicyType {
  /** Type of reservation. */
  revenueType?: DepositCancelRevenueType;
  /** Reservation deposit policy details. */
  policy?: DepositPolicyType;
  /**
   * Comments attached with a deposit.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** Total amount paid against the reservation deposit. */
  amountPaid?: CurrencyAmountType;
  /** Total amount due against the reservation deposit. */
  amountDue?: CurrencyAmountType;
  /** Unique ID of the Reservation Policy. */
  policyId?: UniqueIDType;
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

/** Contains reservation related information for the block. */
export interface BlockReservationDetailsType {
  /**
   * Rate Plan for the block.
   * @maxItems 4000
   */
  ratePlanCode?: BlockRatePlanInfoType[];
  /**
   * Indicates the approximate check in time for the reservations made for the block.
   * @format date-time
   */
  arrivalTime?: string;
  /**
   * Indicates the approximate check out time for the reservations made for the block.
   * @format date-time
   */
  departureTime?: string;
  /** Trace code for the block. */
  traceCode?: CodeDescriptionType;
  /** Indicates the breakfast information for the block room rates. */
  breakfast?: BreakfastType;
  /** Indicates the Porterage information for the block room rates. */
  porterage?: PorterageType;
  /**
   * Free format field to store information from Wholesaler for the block.
   * @minLength 0
   * @maxLength 50
   */
  taRecordLocator?: string;
  /**
   * Cut off date of the block.
   * @format date
   * @maxLength 8
   */
  cutOffDate?: string;
  /** Cut off days of the block. */
  cutOffDays?: number;
  /** Determines whether the CutOffDate or CutOffDays has changed for the block header. If CutOffDate or CutOffDays is changed then apply the changed cutoff date/ days as the new cutoff date/ days to all the room types in the Grid. */
  updateGridOnCutoffChange?: boolean;
  /**
   * This element informs about the systematic follow up on this business block. A Group Reservations Agent or Reservations Manager can use this date to identify when to followup with the customer.
   * @format date
   * @maxLength 8
   */
  followupDate?: string;
  /**
   * Contains information about the date by which the group must make a decision on the block.
   * @format date
   * @maxLength 8
   */
  decisionDate?: string;
  /**
   * Due date for the rooming list for the block. This is the date by which the guest list should be provided by the customer.
   * @format date
   * @maxLength 8
   */
  roomingListDueDate?: string;
  /** Elasticity of the block. */
  elastic?: number;
  /** Are Rate amounts suppressed for the block. */
  suppressRate?: boolean;
  /** Determines if the rate amounts are to be printed on the reservations picked up from the block. This becomes the default Print Rate setting for all reservations picked up from the block. */
  printRate?: boolean;
  /** If this is true, then when a reservation is picked up for the block, the rate for that reservation is taken from the rate grid belonging to the block. If this is false, the rate amounts on the room grid are updated every time the Refresh Rates process is applied. */
  rateGuarantee?: boolean;
  /** Indicates whether the block is non elastic, elastic or sell limit block. */
  inventoryControl?: BlockInventoryControlType;
  /** Indicates the expected number of guests per sleeping room when Occupancy Split Per Room Type parameter is N. */
  personsPerRoom?: number;
  /** Whether any active posting master reservations exist for the business block. */
  activePostingMasterReservations?: boolean;
  /** Determines whether or not the block can be managed at the CRS level. */
  housing?: boolean;
  /** Determines whether the CRS guarantee is required or not for the block. */
  guaranteeRequired?: boolean;
  /** Determines whether or not the block can be managed at the CRS level. */
  controlBlockLocally?: boolean;
  /**
   * Transaction Code for the block
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
}

/** Information about breakfast charges. */
export interface BreakfastType {
  /** Indicates if the room rate quoted includes the breakfast cost. */
  breakfastIncluded?: boolean;
  /** The additional charges per person for breakfast, if breakfast is not included in the rate. */
  price?: CurrencyAmountType;
  /**
   * The exact breakfast method for this business block that is included or offered as an extra.
   * @minLength 0
   * @maxLength 40
   */
  description?: string;
}

/** Information about porterage charges. */
export interface PorterageType {
  /** Indicates if the room rate quoted includes any porterage cost. */
  porterageIncluded?: boolean;
  /** The additional charges per person for porterage service, if porterage is not included in the rate. */
  price?: CurrencyAmountType;
}

/** Simple type for block inventory control values. This determines if it is a Non Elastic, Elastic or Sell Limits block. */
export enum BlockInventoryControlType {
  NonElastic = 'NonElastic',
  Elastic = 'Elastic',
  SellLimit = 'SellLimit',
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

/** This contains the full information and schedule of the block package. */
export interface BlockPackageType {
  /** Package information from configuration. */
  packageHeaderType?: PackageCodeHeaderType;
  /** The changed dates(Start and End dates) for this product. */
  newTimeSpan?: TimeSpanType;
  /** Package consumption details. Includes information for quantity , allowance etc. */
  consumptionDetails?: PackageConsumptionType;
  /**
   * Package code. This is the unique code used for the package and is a required element.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /**
   * The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Required value when changing a package. If the original start date was null, then null is required.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * Required value when changing a package. If the original end date was null, then null is required.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record .
   * @minLength 0
   * @maxLength 20
   */
  packageGroup?: string;
}

export interface PackageCodeHeaderType {
  /** Package code header primary details. */
  primaryDetails?: ConfigPackagePrimaryDetailsType;
  /** Package code header transaction information. */
  transactionDetails?: ConfigPackageTransactionType;
  /** Package code posting attributes. */
  postingAttributes?: ConfigPostingAttributesType;
  /** Package code usage information. */
  usageDetails?: ConfigPackageUsageDetailType;
}

/** A Config Package Info type. */
export interface ConfigPackagePrimaryDetailsType {
  /**
   * The description of the package.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * The short description of the package.
   * @minLength 0
   * @maxLength 2000
   */
  shortDescription?: string;
  /**
   * The Forecast group package belongs to.
   * @minLength 0
   * @maxLength 20
   */
  forecastGroup?: string;
  /**
   * Arrangement Code.
   * @minLength 0
   * @maxLength 20
   */
  arrangementCode?: string;
  /**
   * Indicates the begin sell date of the package.
   * @format date
   * @maxLength 8
   */
  beginSellDate?: string;
  /**
   * Indicates the end sell date of the package.
   * @format date
   * @maxLength 8
   */
  endSellDate?: string;
}

/** A HotelPackageTransaction type. */
export interface ConfigPackageTransactionType {
  /** Package is marked as an allowance, in case charge is expected back to the guest account from external interface eg. POS. which need to be offset against a consumption allowance. */
  allowance?: boolean;
  /**
   * The currency code for this package.
   * @minLength 0
   * @maxLength 20
   */
  currency?: string;
  /**
   * The posting frequency for this package, e.g., daily, arrival, departure, etc.
   * @minLength 0
   * @maxLength 20
   */
  postingType?: string;
  /**
   * The price calculation rule for this package.
   * @minLength 0
   * @maxLength 80
   */
  calculationRule?: string;
  /** The package posting rule details. */
  packagePostingRules?: PackagePostingRulesType;
}

export interface PackagePostingRulesType {
  /** The Transaction code used to post the package price. */
  transactionCode?: PackageTransactionCodeType;
  /** The overage code to record over consumed allowance. */
  overageCode?: PackageTransactionCodeType;
  /** The transaction code to record package profit, if any, from un-consumed allowance. */
  profitCode?: PackageTransactionCodeType;
  /** The transaction code to record package Loss, if any, from un-consumed allowance. */
  lossCode?: PackageTransactionCodeType;
  /**
   * The alternate transaction code that can be consumed by the guest in place of the transaction code.
   * @maxItems 4000
   */
  alternateCodesList?: PackageTransactionCodeType[];
}

export interface PackageTransactionCodeType {
  /**
   * The description of the code.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
  /**
   * Posting / transaction code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Code is inclusive or exclusive of other chanrges such as taxes. */
  type?: AmountDeterminationType;
}

/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
export enum AmountDeterminationType {
  Inclusive = 'Inclusive',
  Exclusive = 'Exclusive',
}

/** A config Package posting attributes type. */
export interface ConfigPostingAttributesType {
  /** The package price is added to the room rate. */
  addToRate?: boolean;
  /** The package price is printed on separate line of the folio. */
  printSeparateLine?: boolean;
  /** Can the package be sold separate from rate plan code? */
  sellSeparate?: boolean;
  /** package charges will be posted next business day. */
  postNextDay?: boolean;
  /** Package will be forecasted for consumption the next business day. */
  forecastNextDay?: boolean;
  /** Indicates whether a delivery time is required for the package. */
  deliveryTimeRequired?: boolean;
  /** Can package be sold via Web channel. */
  webBookable?: boolean;
  /**
   * The custom formula used for this package, if any.
   * @minLength 0
   * @maxLength 2000
   */
  formula?: string;
  /**
   * The custom formula function name used for this package, if any.
   * @minLength 0
   * @maxLength 2000
   */
  formulaFunctionName?: string;
  /** The function argument name-value combination accepted by the custom formula used for this package. */
  formulaFunctionArguments?: FunctionArgumentsType;
  /** Start time the package is valid. */
  startTime?: string;
  /** End time the package is valid. */
  endTime?: string;
  /** Is package used for catering? */
  catering?: boolean;
  /** The posting rhythm for this package. */
  postingRhythm?: PackagePostingRhythmType;
  /** The price calculation rule for this package. */
  priceCalculationRule?: PackageCalculationRuleType;
  /** Indicates whether a package is configured as a ticket or not. */
  ticket?: boolean;
  /**
   * Package Code Inventory Items type.
   * @maxItems 4000
   */
  inventoryItems?: PkgInventoryItemType[];
  /** Calculated Package Price based from Number of Adults, Children and Calculation Rule. */
  calculatedPrice?: number;
}

/**
 * Collection of function arguments and their corresponding values.
 * @maxItems 4000
 */
export type FunctionArgumentsType = FunctionArgumentType[];

/** This type provided details of a function argument and the value it holds. */
export interface FunctionArgumentType {
  /**
   * Specifies the name of the function argument.
   * @minLength 0
   * @maxLength 200
   */
  name?: string;
  /**
   * Specifies the value held by the function argument.
   * @minLength 0
   * @maxLength 200
   */
  value?: string;
  /** Specifies the position of the function argument in the argument list. */
  position?: number;
  /**
   * Specifies the datatype of the function argument.
   * @minLength 0
   * @maxLength 40
   */
  dataType?: string;
  /** Argument of the function mandatory or not. */
  required?: boolean;
}

/** Package Posting rhythm type. */
export interface PackagePostingRhythmType {
  /** Post the package every X nights Staring from Night Y. */
  everyXNightsStartingNightY?: {
    /** Starting night for consumption and posting prices. */
    startOnNightY?: number;
    /** Occurance of nights when the package needs to be posted and consumed. */
    postEveryXNights?: number;
  };
  /** Post the package on certain nights of the week. */
  certainNightsOfTheWeek?: {
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
  };
  /** This user defined schedule lets you enter a posting rhythm over a 14-day period, starting with the arrival date, by assigning the day (number) within a guest stay for posting this package price. */
  customStaySchedule?: {
    /** Night 1 indicator. */
    night1?: boolean;
    /** Night 2 indicator. */
    night2?: boolean;
    /** Night 3 indicator. */
    night3?: boolean;
    /** Night 4 indicator. */
    night4?: boolean;
    /** Night 5 indicator. */
    night5?: boolean;
    /** Night 6 indicator. */
    night6?: boolean;
    /** Night 7 indicator. */
    night7?: boolean;
    /** Night 8 indicator. */
    night8?: boolean;
    /** Night 9 indicator. */
    night9?: boolean;
    /** Night 10 indicator. */
    night10?: boolean;
    /** Night 11 indicator. */
    night11?: boolean;
    /** Night 12 indicator. */
    night12?: boolean;
    /** Night 13 indicator. */
    night13?: boolean;
    /** Night 14 indicator. */
    night14?: boolean;
  };
  /** The start and end of the posting period is determined as follows: If the package is attached to a rate code: The period starts with the date when the rate code to which the package is attached becomes effective for the stay. The period ends with the date of the last night for that rate code (or the last night of the stay if the rate code remains in effect until the departure date). If the package is attached separately to the reservation: The Begin Date specified on the reservation when the package was attached is the start date for the period. The End Date specified on the reservation when the package was attached is the end date for the period. If no Begin Date and/or End Date are specified when the package is attached to the reservation, the Begin Date is assumed to be the arrival date and the End Date is assumed to be the departure date of the reservation, irrespective of when the package is attached to the reservation. */
  customNightSchedule?: {
    /** Night 1 indicator. */
    night1?: boolean;
    /** Night 2 indicator. */
    night2?: boolean;
    /** Night 3 indicator. */
    night3?: boolean;
    /** Night 4 indicator. */
    night4?: boolean;
    /** Night 5 indicator. */
    night5?: boolean;
    /** Night 6 indicator. */
    night6?: boolean;
    /** Night 7 indicator. */
    night7?: boolean;
    /** Night 8 indicator. */
    night8?: boolean;
    /** Night 9 indicator. */
    night9?: boolean;
    /** Night 10 indicator. */
    night10?: boolean;
    /** Night 11 indicator. */
    night11?: boolean;
    /** Night 12 indicator. */
    night12?: boolean;
    /** Night 13 indicator. */
    night13?: boolean;
    /** Night 14 indicator. */
    night14?: boolean;
  };
  /** Posting Rhythm for the package. */
  type?: PostingRhythmType;
}

/** Simple type for posting Rhythm types. */
export enum PostingRhythmType {
  EveryNight = 'EveryNight',
  ArrivalNight = 'ArrivalNight',
  EveryXNightsStartingNightY = 'EveryXNightsStartingNightY',
  CertainNightsOfTheWeek = 'CertainNightsOfTheWeek',
  LastNight = 'LastNight',
  EveryNightExceptArrivalNight = 'EveryNightExceptArrivalNight',
  EveryNightExceptLast = 'EveryNightExceptLast',
  EveryNightExceptFirstAndLast = 'EveryNightExceptFirstAndLast',
  CustomStaySchedule = 'CustomStaySchedule',
  CustomNightSchedule = 'CustomNightSchedule',
  FloatingAllowancePerStay = 'FloatingAllowancePerStay',
  TicketPosting = 'TicketPosting',
}

/** Simple type for package caluculation rules. */
export enum PackageCalculationRuleType {
  FlatRate = 'FlatRate',
  PerPerson = 'PerPerson',
  PerAdult = 'PerAdult',
  PerChild = 'PerChild',
  PerRoom = 'PerRoom',
}

export interface PkgInventoryItemType {
  /**
   * Article Number of the inventory item.
   * @minLength 0
   * @maxLength 20
   */
  articleNumber?: string;
  /**
   * Description of the inventory item.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
  /** Quantity of the inventory item allocated to the package. */
  quantity?: number;
  /** Identifier for the inventory item. */
  itemId?: number;
}

/** A Config Package Usage Detail type. */
export interface ConfigPackageUsageDetailType {
  /** Indicates if the source of the product is Rate header, Rate Detail or Reservation. */
  source?: ProductSourceType;
  /** Indicates if the package is used in, reserved or prospect reservations. */
  usedInReservations?: boolean;
  /** Indicates if the package is used in any rate code. */
  usedInRates?: boolean;
  /** Indicates if any checked in reservations are using this product. */
  usedInHouseReservations?: boolean;
}

/** Sources of Products */
export enum ProductSourceType {
  Reservation = 'Reservation',
  RateHeader = 'RateHeader',
  RateDetail = 'RateDetail',
}

/** Package Consumption Information. Includes information on quantity of the package used, allowance consumption etc. */
export interface PackageConsumptionType {
  /** The default quantity attached in the package. */
  defaultQuantity?: number;
  /** The quantity which has been excluded in the package. */
  excludedQuantity?: number;
  /** The total quantity of the package, calculated based on the calculation rule as defined in the PackageHeaderType. */
  totalQuantity?: number;
  /** Indicates if Allowance(for POS packages) has been consumed/posted for today. */
  allowanceConsumed?: boolean;
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
  /** Specifies Items and its attributes. When used for data manipulation for Items setup on reservation, etc only code is considered. Other Attributes are for used to provide information during fetch operation. */
  item?: ItemInfoType;
  /** Number of items booked. */
  quantity?: number;
  /** Begin and end date and time of the items applicability. */
  timeSpan?: DateRangeType;
  /** If exists specifies whether the item is setup due to a Rate Plan, Package or a Block. */
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
  timeSpan?: TimeSpanType;
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

/** Defines a Time period with start time and an end time. */
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
  start?: string;
  /**
   * The ending value of the date range.
   * @format date
   * @maxLength 8
   */
  end?: string;
}

/** Defines whether the item is setup due to a Rate Plan, Package or a Block. */
export interface BlockInventoryItemSourceType {
  /**
   * Rate Plan Code, If populated specifies that the item is setup due to a Rate Plan.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Package Code, If populated specifies that the item is setup due to a Package.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /** Block Unique ID, If populated specifies that the item is setup due to a Block. */
  blockId?: BlockId;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockId {
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

export interface BlockStatisticsType {
  /** Indicates the room statistics for allocated rooms. */
  allocatedRoomStatistics?: RoomStatisticsType;
  /** Indicates the room statistics for actualized rooms. */
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
  /** The average rate per room. */
  averageRate?: number;
}

/** A collection of Allocation objects for a block, such as Current Rooms, Original Rooms, Rate Amounts, etc. */
export interface RoomAllocationTypeType {
  /**
   * Allocation objects for a block.
   * @maxItems 4000
   */
  roomAllocationInfo?: RoomAllocationInfoType[];
  /** Indicates the type of the Allocation objects. */
  allocation?: AllocationType;
}

/** A collection of Allocation objects for a block that indicate room inventory or rate amounts. */
export interface RoomAllocationInfoType {
  /**
   * Indicates the values of room inventory or rate amounts.
   * @maxItems 4000
   */
  roomGridDetails?: RoomGridDetailsType[];
  /**
   * Indicates the values of room inventory's summary.
   * @maxItems 4000
   */
  roomGridInvSummary?: BlockGridInvType[];
  /**
   * Indicates the values of room available room grid inventory's summary.
   * @maxItems 4000
   */
  availableRoomGridInvSummary?: BlockGridInvType[];
  /**
   * Indicates the date of the room allocation or rate amount.
   * @format date
   * @maxLength 8
   */
  stayDate?: string;
  /** Indicates if the current date will require automatic block extension. */
  extendedStay?: boolean;
}

/** Indicates the values of room inventory or rate amount per room type. */
export interface RoomGridDetailsType {
  /** Indicates the room inventory values per person occupancy. */
  inventory?: BlockGridInvType;
  /** Indicates the rate amount values per person occupancy. */
  rate?: BlockGridRatesType;
  /**
   * Indicates the room type for which the inventory or rate values are applicable.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Indicates the Generic Room Type (Room Pool) the Room Type belongs to.
   * @minLength 0
   * @maxLength 20
   */
  genericRoomType?: string;
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

/** Indicates the rate amount values per person occupancy. */
export interface BlockGridRatesType {
  /** Indicates the one person occupancy rate amount. */
  onePerson?: number;
  /** Indicates the two person occupancy rate amount. */
  twoPerson?: number;
  /** Indicates the three person occupancy rate amount. */
  threePerson?: number;
  /** Indicates the four person occupancy rate amount. */
  fourPerson?: number;
  /** Indicates the extra person occupancy rate amount. */
  extraPerson?: number;
}

/** Simple type for block allocation used in room rate grid. */
export enum AllocationType {
  Initial = 'Initial',
  Actual = 'Actual',
  Rates = 'Rates',
  Pickup = 'Pickup',
  Contract = 'Contract',
  Available = 'Available',
  Pickupperc = 'Pickupperc',
  Changes = 'Changes',
  Released = 'Released',
  Houseavailability = 'Houseavailability',
  SellLimit = 'SellLimit',
  AvailableSellLimit = 'AvailableSellLimit',
  MasterAllocInitial = 'MasterAllocInitial',
  Allocated = 'Allocated',
  SubAllocResv = 'SubAllocResv',
  CutoffDate = 'CutoffDate',
}

export interface RoomAllocationMasterInfoType {
  /**
   * Detailed information about Room Type in the Hotel.
   * @maxItems 4000
   */
  roomTypes?: AllocationRoomTypeInfoType[];
  /**
   * Detailed information about Room Type in the Hotel.
   * @maxItems 4000
   */
  genericRoomTypes?: AllocationRoomTypeInfoType[];
}

/** The information about the room types contained in the block room allocation. */
export interface AllocationRoomTypeInfoType {
  /**
   * Detail description of the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  longDescription?: string;
  /**
   * Name corresponding to a RoomType.
   * @minLength 0
   * @maxLength 80
   */
  webName?: string;
  /**
   * URL providing more information about the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  webPage?: string;
  /** Collection of room features. */
  roomFeatures?: RoomFeaturesType;
  /** Room type attributes. */
  roomTypeAttributes?: RoomTypeAttributesType;
  /**
   * Booking Channels mapping for the Room Type.
   * @maxItems 4000
   */
  bookingChannelMappings?: BookingChannelMappingType[];
  /**
   * Bed type code associated with room.
   * @maxItems 4000
   */
  bedTypeCodes?: string[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Indicates room type is a suite. */
  suite?: boolean;
  /** Indicates room type is a Component Room. */
  component?: boolean;
  /**
   * Block code.
   * @minLength 0
   * @maxLength 40
   */
  invBlockCode?: string;
  /**
   * Represents the room view code like City view, River view, Ocean view etc.
   * @minLength 0
   * @maxLength 40
   */
  roomViewCode?: string;
  /**
   * Represents the promotional code.
   * @minLength 0
   * @maxLength 40
   */
  promotionCode?: string;
  /**
   * Represents the room qualifier code like Deluxe,Economy,Suite etc.
   * @minLength 0
   * @maxLength 40
   */
  roomQualifierCode?: string;
  /**
   * Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
   * @minLength 0
   * @maxLength 20
   */
  roomQualifierMatchIndicator?: string;
  /** Used to specify an availability status for the room type. */
  available?: boolean;
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

/** Attributes of property room type. */
export interface RoomTypeAttributesType {
  /** Default occupancy of property room type. */
  defaultOccupancy?: number;
  /** Max occupancy of property room type. */
  maximumOccupancy?: number;
  /** Number of physical rooms of property room type. */
  noOfPhysicalRooms?: number;
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

/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface DateTimeSpanType {
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ReservationId {
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

/** Type to store summary detail like rooms sold, average room rate and revenue for a statistic type. */
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

/** Rate Programs for the Block. */
export interface RateProgramType {
  /**
   * Room Pool Code.
   * @minLength 0
   * @maxLength 20
   */
  roomPool?: string;
  /**
   * Block Rate Program Rates.
   * @maxItems 4000
   */
  rates?: RateProgramRateType[];
}

/** Room Pool Rate Program. */
export interface RateProgramRateType {
  /**
   * Rate Program Code.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /** RateMarketCode is a rate attribute required for external system in order to create a rate program. Only available if configured in OPERA Cloud. */
  rateMarketCode?: CodeDescriptionType;
  /** Rate Program Amounts. */
  rateAmounts?: BlockGridRatesType;
  /** Rate Program Room Types. */
  roomTypes?: RateProgramRoomType;
  /**
   * Start date of the Room Pool Rate Program.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End date of the Room Pool Rate Program.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Rate Program Commissionable Indicator. */
  commissionable?: boolean;
  /** Rate Program Mobile Checkout Allowed Indicator. */
  mobileCheckout?: boolean;
  /** Rate Program Primary Rate Code Indicator. */
  primary?: boolean;
  /** Sequence Number of the Rate Program. */
  sequence?: number;
}

/**
 * Room type for which Rate Program Rate Applies.
 * @maxItems 4000
 */
export type RateProgramRoomType = string[];

/** Contract type. */
export enum EventTypeType {
  Convention = 'Convention',
  Contract = 'Contract',
}

/** Information for Alternate date types */
export interface BlockAlternateDateType {
  /**
   * Alternate Begin date.
   * @format date
   * @maxLength 8
   */
  alternateBeginDate?: string;
  /** Rate details for Alternate Dates. */
  blockRates?: BlockGridRatesType;
  /**
   * The Room Category Label
   * @minLength 0
   * @maxLength 20
   */
  roomCategory?: string;
  /** The Priority given to these alternate dates. */
  priority?: number;
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
   * A single room type on which wash operation should be performed.
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

/** The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group. */
export interface RestrictionStatusType {
  /** Identifies the type of restriction. I.E. Closed, ClosedForArrival, etc. */
  code?: RestrictionStatusesType;
  /** Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. */
  unit?: number;
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

/** Access Exclusion information indicating the actions allowed under a HUB or hotel for which the access exclusion is set. */
export interface BlockAccessExclusionsType {
  /** @maxItems 4000 */
  blockAccessExclusion?: BlockAccessExclusionType[];
  /** Exclusion message for the block. */
  accessExclusionMessage?: BlockAccessExclusionMessageType;
  /**
   * Hotel code to which the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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

/** Access Exclusion information indicating the actions allowed under a HUB or Hotel for which the access exclusion is set. */
export interface BlockAccessExclusionType {
  /**
   * The type of source (CRO or Hotel code) for which the rate access exclusion is set.
   * @minLength 0
   * @maxLength 40
   */
  sourceType?: string;
  /**
   * CRO or Hotel code value.
   * @minLength 0
   * @maxLength 80
   */
  sourceValue?: string;
  /** Allow to modify a reservation under this access exclusion. */
  allowModifyReservation?: boolean;
  /** Allow to cancel a reservation under this access exclusion. */
  allowCancelReservation?: boolean;
  /** Allow to create a reservation under this access exclusion. */
  allowCreateReservation?: boolean;
  /** The rate access exclusion is inactive */
  inactive?: boolean;
  /** Exclude a specific rate from availability */
  excludeFromAvailability?: boolean;
}

/** Access exclusion message. */
export interface BlockAccessExclusionMessageType {
  /**
   * Access Exclusion message for the block.
   * @minLength 0
   * @maxLength 4000
   */
  exclusionMessage?: string;
}

/** Type for block instructions that can be used in requests for partial operations. */
export enum BlockDetailInstructionType {
  AccessExclusions = 'AccessExclusions',
  Aliases = 'Aliases',
  AlternateDates = 'AlternateDates',
  Attachments = 'Attachments',
  Block = 'Block',
  BlockNextStatuses = 'BlockNextStatuses',
  BlockStatusHistory = 'BlockStatusHistory',
  CatNextStatuses = 'CatNextStatuses',
  CatStatusHistory = 'CatStatusHistory',
  Comments = 'Comments',
  DateProtect = 'DateProtect',
  ExternalReferences = 'ExternalReferences',
  GenericRateGrid = 'GenericRateGrid',
  Header = 'Header',
  Indicators = 'Indicators',
  InventoryItems = 'InventoryItems',
  Owners = 'Owners',
  Packages = 'Packages',
  Policies = 'Policies',
  PrimaryOwners = 'PrimaryOwners',
  PrimaryProfiles = 'PrimaryProfiles',
  PrimaryRates = 'PrimaryRates',
  Profiles = 'Profiles',
  RateGrid = 'RateGrid',
  RateProgram = 'RateProgram',
  Rates = 'Rates',
  Restrictions = 'Restrictions',
  SellMessages = 'SellMessages',
  Statistics = 'Statistics',
  SummaryStatistics = 'SummaryStatistics',
  Traces = 'Traces',
  WashSchedules = 'WashSchedules',
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

/** Response object for fetching block activity log. This object contains collection of user activity log for the block, Success, Warnings and Errors related to this operation */
export interface BlockActivityLog {
  /** Refer to Generic common types document. */
  activityLog?: ActivityLogListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ActivityLogListType {
  /** @maxItems 4000 */
  activityLog?: ActivityLogType[];
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

export interface ActivityLogType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  module?: string;
  /** @format date-time */
  logDate?: string;
  refActionId?: number;
  logUserId?: number;
  logUserName?: string;
  machineStation?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  croCode?: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  actionType?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  actionDescription?: string;
  /**
   * The IP Address of the machine that performed the activity
   * @minLength 0
   * @maxLength 2000
   */
  iPAddress?: string;
}

/** Request object for block wash operation. */
export interface BlockAllocationWash {
  /** Holds wash criteria for the block. */
  blockAllocationWashType?: BlockAllocationWashType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Holds criteria for performing a wash operation on a block. */
export interface BlockAllocationWashType {
  /** Block Id for the wash operation. */
  blockId?: BlockId;
  /**
   * Hotel Code to which the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Start date for the wash operation.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End date for the wash operation.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * List of room types on which wash operation should be performed.
   * @maxItems 4000
   */
  roomTypes?: string[];
  /**
   * String of length seven, each position representing various days of week from Sunday to Saturday, each character is either 0 or 1 indicating whether to apply wash for that day.
   * @minLength 0
   * @maxLength 8
   */
  includedDays?: string;
  /** A true value indicates that absolute value is being passed for occupancy, else it indicates that a percentage value is passed. */
  byValue?: boolean;
  /** Used to pass occupancy values. If values are passed as percentage, only occupancy1 will be honored. */
  blockInventory?: BlockGridInvType;
  /** A true value indicates that percentage values are being passed day-wise. */
  percentByDay?: boolean;
  /** Holds percentage values for each day. */
  occPercentByDay?: {
    /** Percentage occupancy value for Sunday. */
    sunday?: number;
    /** Percentage occupancy value for Monday. */
    monday?: number;
    /** Percentage occupancy value for Tuesday. */
    tuesday?: number;
    /** Percentage occupancy value for Wednesday. */
    wednesday?: number;
    /** Percentage occupancy value for Thursday. */
    thursday?: number;
    /** Percentage occupancy value for Friday. */
    friday?: number;
    /** Percentage occupancy value for Saturday. */
    saturday?: number;
  };
  /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
  genericRoomType?: boolean;
}

/** Block information required for performing a wash operation on a block. */
export interface BlockWashInfo {
  /** Block information required for performing a wash operation. */
  blockWashInformation?: BlockWashInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Block information and allocated room types information for performing a wash operation. */
export interface BlockWashInfoType {
  /** Block information required to perform a wash operation. */
  blockInfo?: {
    /**
     * Hotel Code to which the block belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Block ID of the block on which wash operation is performed. */
    blockId?: BlockId;
    /**
     * Block code of the block on which wash operation is performed.
     * @minLength 0
     * @maxLength 20
     */
    blockCode?: string;
    /**
     * Start date of the block.
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * End date of the block.
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    /**
     * Shoulder start date of the block.
     * @format date
     * @maxLength 8
     */
    shoulderStartDate?: string;
    /**
     * Shoulder end date of the block.
     * @format date
     * @maxLength 8
     */
    shoulderEndDate?: string;
    /** Indicates if the block is elastic or not. */
    inventoryControl?: BlockInventoryControlType;
  };
  /**
   * List of allocated room types for the block.
   * @maxItems 4000
   */
  roomTypes?: string[];
}

/** It also contains Success,Warnings and Errors related to this operation. */
export interface BlockSummaries {
  /** Type contains the summary information for a block. */
  blockSummaries?: BlockSummariesType;
  /** Refer to Generic common types document. */
  masterInfoList?: MasterInfoType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Summary information returned during block search. */
export interface BlockSummariesType {
  /**
   * A collection of Blocks or Unique IDs of Blocks.
   * @maxItems 4000
   */
  blockInfo?: {
    /** Collection of unique block identifiers. */
    blockIdList?: BlockIdList;
    /** Provides summary information regarding a block. */
    block?: BlockSummaryType;
  }[];
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

export interface BlockSummaryType {
  /**
   * Hotel code for this block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Block code for this block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * Block name for this block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** Status code and description for this block. */
  blockStatus?: BookingStatusType;
  /**
   * Internal status for the block.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Rate code assigned to block.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /** Catering Status Code and Description for the block. */
  cateringStatus?: BookingStatusType;
  /** Number of Attendees for Catering Event */
  cateringAttendees?: number;
  /** Indicates if this is a catering only block. */
  cateringOnlyBlock?: boolean;
  /**
   * Start date for this block.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End date for this block.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Shoulder begin date for this block.
   * @format date
   * @maxLength 8
   */
  shoulderStartDate?: string;
  /**
   * Shoulder end date for this block.
   * @format date
   * @maxLength 8
   */
  shoulderEndDate?: string;
  /** Indicates whether the block is elastic. Stores 0 for non-elastic, 1 for elastic and 2 for sell limit block. */
  inventoryControl?: BlockInventoryControlType;
  /** Indicates whether the block can be updated only by the Hotel to which it belongs. */
  hotelUse?: HotelUseType;
  /** Super Search matching terms. */
  searchMatches?: SearchMatchesType;
  /** Indicators of additional information attached to the block */
  blockIndicators?: IndicatorsType;
  /**
   * The tour code that this block belongs to, if the block is a part of a tour series.
   * @minLength 0
   * @maxLength 20
   */
  tourCode?: string;
  /** Inventory held for the business block. */
  rooms?: number;
  /** Primary Owners for the the business block. */
  primaryOwners?: BlockOwnersType;
  /** Indicate Master/Sub Block. */
  blockClassification?: BlockClassificationType;
  /** Indicate if Master/Sub Blocks are Synchronized. */
  synchronized?: boolean;
  /**
   * Group name for this block.
   * @minLength 0
   * @maxLength 2000
   */
  groupName?: string;
  /** If tentative block, block inventory is not deducted from hotel inventory else block inventory is deducted. */
  tentativeBlock?: boolean;
  /** Specifies custom extension fields for a Block Summary Type */
  customFields?: CustomFieldsType;
  /** Inventory held for the block's reservations. */
  actualRooms?: number;
  /**
   * Date after which unused block rooms should be returned to house.
   * @format date
   * @maxLength 8
   */
  cutoffDate?: string;
  /**
   * Reservation type of the business block.
   * @minLength 0
   * @maxLength 20
   */
  reservationType?: string;
  /** Indicates if alternate dates are allowed for the booking. */
  flexibleDates?: boolean;
  /** Indicates if blocked rooms are deducted from inventory. */
  deductInventory?: boolean;
  /** Indicates if blocked catering events are deducted from inventory. */
  cateringDeductInventory?: boolean;
  /**
   * Contains information about the date by which the group must make a decision on the block.
   * @format date
   * @maxLength 8
   */
  decisionDate?: string;
  /**
   * Contains information to follow up on the block.
   * @format date
   * @maxLength 8
   */
  followupDate?: string;
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

/** A common type used to hold custom user defined fields(UDFs). This type should be used to handle custom UDFs on RReservation, Profiles, tc. */
export interface CustomFieldsType {
  /** Collection of custom user defined fields of Character/String Type. */
  customCharUDFs?: CustomCharUDFsType;
  /** Collection of custom user defined fields of Numeric Type. */
  customNumericUDFs?: CustomNumericUDFsType;
  /** Collection of custom user defined fields of Date Type. */
  customDateUDFs?: CustomDateUDFsType;
}

/**
 * Used to hold collection of custom user defined fields of Character/String Type.
 * @maxItems 4000
 */
export type CustomCharUDFsType = CharacterUDFType[];

/**
 * Used to hold collection of custom user defined fields of Numeric Type.
 * @maxItems 4000
 */
export type CustomNumericUDFsType = NumericUDFType[];

/**
 * Used to hold collection of custom user defined fields of Date Type.
 * @maxItems 4000
 */
export type CustomDateUDFsType = DateUDFType[];

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

/** Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. */
export interface BlockValidate {
  /** Contains the detailed information regarding the block. */
  blocks?: BlocksType;
  /** Contains the detailed information to validate the block rate code. */
  blockRateCodeDetails?: BlockRateCodeValidationType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A collection of Block objects or Unique IDs of Blocks. */
export interface BlocksType {
  /**
   * A collection of Blocks or Unique IDs of Blocks.
   * @maxItems 4000
   */
  blockInfo?: {
    /** Provides detailed information regarding a block. */
    block?: BlockType;
  }[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
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
  /** Basic information of master and sub blocks structure in tree manner, this element only used while retrieving Block Type. */
  masterBlockInfo?: MasterBlockInfoType;
  /**
   * A list of reservation policies.
   * @maxItems 4000
   */
  reservationPolicies?: ReservationPoliciesType[];
  /** Details of room Information for the Block. */
  reservationDetails?: BlockReservationDetailsType;
  /** Details of catering Information for the Block. */
  catering?: CateringType;
  /** A collection of all the profiles associated to this block. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time. */
  blockProfiles?: {
    /**
     * The list of profiles associated with the block.
     * @maxItems 4000
     */
    blockProfile?: BlockProfilesType[];
    /** Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided. */
    fullOverlay?: boolean;
  };
  /**
   * A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges.
   * @maxItems 4000
   */
  blockPackages?: BlockPackageType[];
  /** A collection of inventory items attached to a block. */
  inventoryItems?: BlockInventoryItemsType;
  /** Indicates the room and revenue statistics of the block. */
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
  /** Room Allocations for the Block. */
  roomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
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
    allDescriptionDDSecured?: boolean;
    /** Rates Secured from GNR. */
    ratesSecuredfromGNR?: boolean;
    /** Rates Secured from All Displays. */
    ratesSecuredfromAllDisplays?: boolean;
    /** Housing Information Secured. */
    housingInformationSecured?: boolean;
    /** Number of Days Deposit due to guarantee the guest booking. */
    daysDepositRequired?: number;
    /** Number of days before the arrival date a reservation can be canceled without losing the deposit. */
    advanceCancelDays?: number;
    /** Return One Day at a time. */
    returnOneDayAtTimeYn?: boolean;
    /** Determines if Travel Agent commission will be paid on reservations booked through the HOLIDEX Plus TACP program. */
    commissionableYn?: boolean;
  };
  /**
   * Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud.
   * @maxItems 4000
   */
  ratePrograms?: RateProgramType[];
  /** Block attributes used for external systems. Only available if configured in OPERA Cloud. */
  externalAttributes?: {
    /** Only available if configured in OPERA Cloud. */
    housingProtected?: boolean;
    /** Contract type of a block, which is used for external system. Only available if configured in OPERA Cloud. */
    eventType?: EventTypeType;
    /** Group IATA number validated by an external system and block can't be saved unless confirmed that GIID is valid. Only available if configured in OPERA Cloud. */
    gIId?: string;
    /** When this flag is set it will be used to roll Block End Date and Block Rate Program End Date in the night audit process. Only available if configured in OPERA Cloud. */
    rollEndDate?: boolean;
  };
  /** Generic Room Type Allocations for the Block. */
  genericRoomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Generic Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /**
   * Alternate Date information for the Block.
   * @maxItems 4000
   */
  alternateDates?: BlockAlternateDateType[];
  /** List of sell messages for the Block. */
  sellMessages?: SellMessageConfigsType;
  /** List of attachments for the Block. */
  attachments?: AttachmentsType;
  /** List of wash schedules for the Block. */
  washSchedules?: BlockWashSchedulesType;
  /** List of restrictions for the Block. */
  restrictions?: BlockRestrictionsType;
  /** List of access exclusions for the block. */
  accessExclusions?: BlockAccessExclusionsType;
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

/** Information for validation of block rate code. */
export interface BlockRateCodeValidationType {
  /**
   * Hotel code for which rate code should be validated.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Rate code
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Start date for the rate code validation.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End date for the rate code validation.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
}

/** Response Object of Fetch Block Daily Statistics. */
export interface BlockDailyStatistics {
  /** Collection of Block Daily Statistics for selected Block. */
  blockDailyStatistics?: BlocksDailyStatisticsType;
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
 * A collection of Blocks.
 * @maxItems 4000
 */
export type BlocksDailyStatisticsType = {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
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
  /** TimeSpan reflects the Arrival, Departure of the block. */
  timeSpan?: TimeSpanType;
  /**
   * Collection of daily statistics per allotment date.
   * @maxItems 4000
   */
  stayDates?: BlockDailyStatisticsDatesType[];
  /**
   * The Hotel Code the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}[];

/**
 * Collection of statistics detail for every allotment date.
 * @maxItems 4000
 */
export type BlockDailyStatisticsDatesType = BlockDailyStatisticsDateType[];

/** Holds the room type or generic room type(Room Pool) level statistics for an allotment date. */
export interface BlockDailyStatisticsDateType {
  /** Collection of room type level statistics. */
  roomTypeStatisticsList?: BlockDailyRoomStatisticsListType;
  /** Collection of generic room type(Room Pool) level statistics. */
  genericRoomTypeStatisticsList?: BlockDailyRoomStatisticsListType;
  /**
   * @format date
   * @maxLength 8
   */
  date?: string;
}

/**
 * Collection of room type level statistics.
 * @maxItems 4000
 */
export type BlockDailyRoomStatisticsListType = BlockDailyRoomStatisticsType[];

/** Statistics information for the room type. */
export interface BlockDailyRoomStatisticsType {
  /** Information about Block daily statistics. */
  statisticsInfo?: BlockDailyStatisticsInfoType;
  /**
   * Pertain value for room type or generic room type (Room Pool) code.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
}

/** Information about Block daily statistics. */
export interface BlockDailyStatisticsInfoType {
  /** Pertain value for available rooms for a block. */
  available?: number;
  /** Pertain value for blocked rooms for a block. */
  allocated?: number;
  /** Pertain value for reserved rooms for a block. */
  pickup?: number;
}

/** Response element for block statistics. */
export interface BlockStats {
  /** Statistical report - each report is determined by the requested report in the service request criteria. */
  reports?: BlockStatReportType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Base abstraction defining all details needed to create a statistical report. */
export interface BlockStatReportType {
  /**
   * The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The IATA city code; for example DCA, ORD.
   * @minLength 0
   * @maxLength 40
   */
  hotelCityCode?: string;
  /**
   * A text field used to communicate the proper name of the hotel.
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /**
   * A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
   * @minLength 0
   * @maxLength 40
   */
  hotelCodeContext?: string;
  /**
   * The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
   * @minLength 0
   * @maxLength 80
   */
  chainName?: string;
  /**
   * Statistical date of the requested report.
   * @format date
   * @maxLength 8
   */
  calendarDate?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** @maxItems 4000 */
  statCategory?: HSKStatCategoryType[];
  /** Supported Housekeeping report codes. */
  reportCode?: HSKStatReportCodeType;
}

/** Defines the codes and corresponding categories for which the data in the other elements has been gathered. */
export interface HSKStatCategoryType {
  /**
   * Defines where this statistical data is applied.
   * @minLength 0
   * @maxLength 20
   */
  statCode?: string;
  /**
   * Classification of the statistical data.
   * @minLength 0
   * @maxLength 40
   */
  statCodeClass?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** @maxItems 4000 */
  statSet?: HSKStatSetType[];
  /** Supported housekeeping statistical category codes. */
  statCategoryCode?: HSKStatCategoryCodeType;
}

/** Base statistic set holder which defines the span of the statistical data. */
export interface HSKStatSetType {
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
  /** @maxItems 4000 */
  stat?: HSKStatType[];
  code?: string;
}

/** Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units. */
export interface HSKStatType {
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
  /** Supported housekeeping statistical codes. */
  code?: HSKStatCodeType;
}

/** Supported statistical units. */
export enum StatUnitCategoryType {
  Numeric = 'Numeric',
  Amount = 'Amount',
}

/** Supported housekeeping statistical codes. */
export enum HSKStatCodeType {
  ApprovedCompPostings = 'ApprovedCompPostings',
  StagedCompPostings = 'StagedCompPostings',
  DeclinedCompPostings = 'DeclinedCompPostings',
  CompRoutingInstructionsRequests = 'CompRoutingInstructionsRequests',
  TotalPhysicalRooms = 'TotalPhysicalRooms',
  TotalRoomsToSell = 'TotalRoomsToSell',
  TotalOutOfOrder = 'TotalOutOfOrder',
  TotalOutOfService = 'TotalOutOfService',
  TotalRevenue = 'TotalRevenue',
  PercentRoomsOccupied = 'PercentRoomsOccupied',
  StayoverRooms = 'StayoverRooms',
  StayoverPersons = 'StayoverPersons',
  StayoverVIP = 'StayoverVIP',
  DeparturesExpectedRooms = 'DeparturesExpectedRooms',
  DeparturesExpectedPersons = 'DeparturesExpectedPersons',
  DeparturesExpectedVIP = 'DeparturesExpectedVIP',
  DeparturesActualRooms = 'DeparturesActualRooms',
  DeparturesActualPersons = 'DeparturesActualPersons',
  DeparturesActualVIP = 'DeparturesActualVIP',
  DeparturesInLastHour = 'DeparturesInLastHour',
  ArrivalsInLastHour = 'ArrivalsInLastHour',
  ArrivalsTotal = 'ArrivalsTotal',
  ArrivalsExpectedRooms = 'ArrivalsExpectedRooms',
  ArrivalsExpectedPersons = 'ArrivalsExpectedPersons',
  ArrivalsExpectedVIP = 'ArrivalsExpectedVIP',
  ArrivalsExpectedRoomsMadeToday = 'ArrivalsExpectedRoomsMadeToday',
  ArrivalsExpectedPersonsMadeToday = 'ArrivalsExpectedPersonsMadeToday',
  ArrivalsExpectedVIPMadeToday = 'ArrivalsExpectedVIPMadeToday',
  ArrivalsActualRooms = 'ArrivalsActualRooms',
  ArrivalsActualPersons = 'ArrivalsActualPersons',
  ArrivalsActualVIP = 'ArrivalsActualVIP',
  ExtendedStaysRooms = 'ExtendedStaysRooms',
  ExtendedStaysPersons = 'ExtendedStaysPersons',
  ExtendedStaysVIP = 'ExtendedStaysVIP',
  DeparturesTotal = 'DeparturesTotal',
  EarlyDeparturesRooms = 'EarlyDeparturesRooms',
  EarlyDeparturesPersons = 'EarlyDeparturesPersons',
  EarlyDeparturesVIP = 'EarlyDeparturesVIP',
  DayUseRooms = 'DayUseRooms',
  DayUsePersons = 'DayUsePersons',
  DayUseVIP = 'DayUseVIP',
  WalkInRooms = 'WalkInRooms',
  WalkInPersons = 'WalkInPersons',
  WalkInVIP = 'WalkInVIP',
  CanceledOnArrivalRooms = 'CanceledOnArrivalRooms',
  CanceledOnArrivalPersons = 'CanceledOnArrivalPersons',
  CanceledOnArrivalVIP = 'CanceledOnArrivalVIP',
  ComplimentaryArrivalRooms = 'ComplimentaryArrivalRooms',
  ComplimentaryArrivalPersons = 'ComplimentaryArrivalPersons',
  ComplimentaryArrivalVIP = 'ComplimentaryArrivalVIP',
  ComplimentaryStayoverRooms = 'ComplimentaryStayoverRooms',
  ComplimentaryStayoverPersons = 'ComplimentaryStayoverPersons',
  ComplimentaryStayoverVIP = 'ComplimentaryStayoverVIP',
  ComplimentaryDepartureRooms = 'ComplimentaryDepartureRooms',
  ComplimentaryDeparturePersons = 'ComplimentaryDeparturePersons',
  ComplimentaryDepartureVIP = 'ComplimentaryDepartureVIP',
  HouseUseArrivalVIP = 'HouseUseArrivalVIP',
  HouseUseStayoverRooms = 'HouseUseStayoverRooms',
  HouseUseStayoverPersons = 'HouseUseStayoverPersons',
  HouseUseStayoverVIP = 'HouseUseStayoverVIP',
  HouseUseDepartureRooms = 'HouseUseDepartureRooms',
  HouseUseDeparturePersons = 'HouseUseDeparturePersons',
  HouseUseDepartureVIP = 'HouseUseDepartureVIP',
  MinAvailableTonightRooms = 'MinAvailableTonightRooms',
  MaxOccupiedTonightRooms = 'MaxOccupiedTonightRooms',
  MaxOccupiedTonightPersons = 'MaxOccupiedTonightPersons',
  MaxOccupiedTonightVIP = 'MaxOccupiedTonightVIP',
  MaxPercentageOccupiedTonightRooms = 'MaxPercentageOccupiedTonightRooms',
  BlocksNotPickedUp = 'BlocksNotPickedUp',
  IndividualRooms = 'IndividualRooms',
  IndividualPersons = 'IndividualPersons',
  IndividualVIP = 'IndividualVIP',
  GroupAndBlockRooms = 'GroupAndBlockRooms',
  GroupAndBlockPersons = 'GroupAndBlockPersons',
  GroupAndBlockVIP = 'GroupAndBlockVIP',
  RoomRevenue = 'RoomRevenue',
  AverageRoomRevenue = 'AverageRoomRevenue',
  InspectedRooms = 'InspectedRooms',
  InspectedVacant = 'InspectedVacant',
  InspectedAssigned = 'InspectedAssigned',
  InspectedOccupied = 'InspectedOccupied',
  CleanedRooms = 'CleanedRooms',
  CleanVacant = 'CleanVacant',
  CleanAssigned = 'CleanAssigned',
  CleanOccupied = 'CleanOccupied',
  DirtyVacant = 'DirtyVacant',
  DirtyAssigned = 'DirtyAssigned',
  DirtyOccupied = 'DirtyOccupied',
  PickupVacant = 'PickupVacant',
  PickupAssigned = 'PickupAssigned',
  PickupOccupied = 'PickupOccupied',
  OutOfOrderVacant = 'OutOfOrderVacant',
  OutOfOrderAssigned = 'OutOfOrderAssigned',
  OutOfOrderOccupied = 'OutOfOrderOccupied',
  OutOfServiceVacant = 'OutOfServiceVacant',
  OutOfServiceAssigned = 'OutOfServiceAssigned',
  OutOfServiceOccupied = 'OutOfServiceOccupied',
  QueueRooms = 'QueueRooms',
  TurndownRequired = 'TurndownRequired',
  TurndownNotRequired = 'TurndownNotRequired',
  TurndownCompletedRequired = 'TurndownCompletedRequired',
  AdultsInHouse = 'AdultsInHouse',
  ChildrenInHouse = 'ChildrenInHouse',
  AdultsExpectedCheckedOut = 'AdultsExpectedCheckedOut',
  ChildrenExpectedCheckedOut = 'ChildrenExpectedCheckedOut',
  AdultsDeparted = 'AdultsDeparted',
  ChildrenDeparted = 'ChildrenDeparted',
  InHouseRooms = 'InHouseRooms',
  InHouse = 'InHouse',
  MaxOccupancyPercentage = 'MaxOccupancyPercentage',
  Stayover = 'Stayover',
  TotalRoomsReserved = 'TotalRoomsReserved',
  RevPar = 'RevPar',
  SkipRooms = 'SkipRooms',
  SleepRooms = 'SleepRooms',
  HouseUseArrivalRooms = 'HouseUseArrivalRooms',
  HouseUseArrivalPersons = 'HouseUseArrivalPersons',
  AverageCheckInTime = 'AverageCheckInTime',
  CurrentAveWaitTime = 'CurrentAveWaitTime',
  CheckedInsTotal = 'CheckedInsTotal',
  ExpectedCheckInsTotal = 'ExpectedCheckInsTotal',
  CheckedOutsTotal = 'CheckedOutsTotal',
  ExpectedCheckOutsTotal = 'ExpectedCheckOutsTotal',
  ScheduledCheckOutsTotal = 'ScheduledCheckOutsTotal',
  RoomMaintenanceResolvedTotal = 'RoomMaintenanceResolvedTotal',
  RoomMaintenanceUnResolvedTotal = 'RoomMaintenanceUnResolvedTotal',
  PreRegisteredTotal = 'PreRegisteredTotal',
  VIPPreRegisteredTotal = 'VIPPreRegisteredTotal',
  OpenFolioTotal = 'OpenFolioTotal',
  TurndownTotal = 'TurndownTotal',
  VIPTurndownTotal = 'VIPTurndownTotal',
  VIPGuestsArriving = 'VIPGuestsArriving',
  VIPGuestsDeparting = 'VIPGuestsDeparting',
  VIPGuestsTotal = 'VIPGuestsTotal',
  IndividualAdvanceCheckedInCurrent = 'IndividualAdvanceCheckedInCurrent',
  BlockAdvanceCheckedInCurrent = 'BlockAdvanceCheckedInCurrent',
  IndividualAdvanceCheckedInInhouse = 'IndividualAdvanceCheckedInInhouse',
  BlockAdvanceCheckedInInhouse = 'BlockAdvanceCheckedInInhouse',
  IndividualAdvanceCheckedInTotal = 'IndividualAdvanceCheckedInTotal',
  BlockAdvanceCheckedInTotal = 'BlockAdvanceCheckedInTotal',
  InHouseBlocksTotal = 'InHouseBlocksTotal',
  CancellationsTotal = 'CancellationsTotal',
  NewReservationsTotal = 'NewReservationsTotal',
  ArrivalResvs = 'ArrivalResvs',
  ArrivalVIPResvs = 'ArrivalVIPResvs',
  ArrivalMemberResvs = 'ArrivalMemberResvs',
  ArrivalUnallocResvs = 'ArrivalUnallocResvs',
  ArrivalManualAssgnResvs = 'ArrivalManualAssgnResvs',
  ArrivalAIAssgnResvs = 'ArrivalAIAssgnResvs',
  ArrivalAIUpgResvs = 'ArrivalAIUpgResvs',
  ArrivalAIAssgnVIPResvs = 'ArrivalAIAssgnVIPResvs',
  ArrivalAIAssgnMemberResvs = 'ArrivalAIAssgnMemberResvs',
  ArrivalAIAssgnOverridden = 'ArrivalAIAssgnOverridden',
}

/** Supported housekeeping statistical category codes. */
export enum HSKStatCategoryCodeType {
  HotelCode = 'HotelCode',
}

/** Supported Housekeeping report codes. */
export enum HSKStatReportCodeType {
  HouseSummary = 'HouseSummary',
  HouseSummaryMonthToDate = 'HouseSummaryMonthToDate',
  HouseSummaryYearToDate = 'HouseSummaryYearToDate',
  ReservationActivity = 'ReservationActivity',
  ReservationActivityDaily = 'ReservationActivityDaily',
  ReservationActivityMonthToDate = 'ReservationActivityMonthToDate',
  ReservationActivityYearToDate = 'ReservationActivityYearToDate',
  ComplimentaryOrHouseUse = 'ComplimentaryOrHouseUse',
  DailyProjection = 'DailyProjection',
  RoomStatus = 'RoomStatus',
  LastHourStatus = 'LastHourStatus',
  Turndown = 'Turndown',
  InHouse = 'InHouse',
  CheckIns = 'CheckIns',
  CheckOuts = 'CheckOuts',
  AvailableRooms = 'AvailableRooms',
  RoomMaintenance = 'RoomMaintenance',
  ReservationStatistics = 'ReservationStatistics',
  VIPGuests = 'VIPGuests',
  AdvanceCheckIn = 'AdvanceCheckIn',
  BlockArrivals = 'BlockArrivals',
  ReservationsCancellationsToday = 'ReservationsCancellationsToday',
  AIRoomAssignment = 'AIRoomAssignment',
  CompRouting = 'CompRouting',
}

/** Response object for FetchNextBlockStatus operation. */
export interface NextBlockStatus {
  /** List of all the next statuses for the block status passed in the request. This also holds next statuses for all the next statuses of the status sent in request. */
  blockNextStatusList?: BlockNextStatusListType;
  /** List of all the next statuses for the catering status passed in the request. This also holds next statuses for all the next statuses of the status sent in request. */
  cateringNextStatusList?: CateringNextStatusListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for validating blocks in a train. Block is not created. The standard optional Opera Context element is also included. */
export interface BlockCodeToValidate {
  /** Hotel code for this block. */
  hotelId?: CodeType;
  /** Collection of unique block identifiers */
  blockIdList?: BlockIdList;
  /**
   * Start date for this block.
   * @format date
   */
  startDate?: string;
  /**
   * End date for this block.
   * @format date
   */
  endDate?: string;
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

/** Request object to create block alternate dates. */
export interface BlockAlternateDates {
  /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
  hotelId?: CodeType;
  /** Collection of unique block identifiers */
  blockIdList?: BlockIdList;
  /** Set of block alternate dates. */
  blockAlternateDates?: BlockAlternateDatesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Contains a list of Block Alternate Dates.
 * @maxItems 4000
 */
export type BlockAlternateDatesType = BlockAlternateDateType[];

/** Return object to the request for information regarding block attachments. */
export interface BlockAttachments {
  /** Collection of information about block attachments returned/fetched as per the criteria in the fetch request. */
  blockAttachments?: AttachmentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating access exclusion permissions for a block. */
export interface BlockAccessExclusion {
  /** List of all access exclusion permissions for this block. */
  blockAccessExclusions?: {
    blockAccessExclusion?: BlockAccessExclusionType[];
    /** Exclusion message for the block. */
    accessExclusionMessage?: BlockAccessExclusionMessageType;
    /**
     * Hotel code to which the block belongs to.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @maxLength 2000
     */
    url?: string;
    /**
     * A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT).
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
    /** Indicates whether to overlay the list of existing access exclusions with the new list. */
    overlay?: boolean;
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching block access exclusions for a block. */
export interface BlockAccessExclusionInfo {
  /** Access exclusions list for the block. */
  blockAccessExclusions?: BlockAccessExclusionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to transition the block status to Open for Pickup. This object contains unique identifier ( Block unique id ) to identify the block to be transitioned and the standard optional Opera Context element. */
export interface BlockStatus {
  /** Hotel Code of the block to be changed. */
  hotelId?: CodeType;
  /** Block unique id to be changed. */
  blockId?: BlockId;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object that returns all sales manager owners associated with a business block. */
export interface BlockOwners {
  /** Collection of owners associated with a business block. */
  owners?: BlockOwnersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to assign block owners. */
export interface BlockOwnersToAssign {
  /** Criteria to assign the owners of a business block. */
  criteria?: SetBlockOwnersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to update block owners. */
export interface SetBlockOwnersType {
  /**
   * Hotel Code of the business block
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique ID of the business block whose owners will be updated. */
  blockIdList?: BlockIdList;
  /** Specifies the block ownership type. */
  ownership?: BlockOwnershipType;
  /** Collection of block owners to be updated. */
  blockOwners?: BlockOwnersType;
}

/** Request object to change block owners. */
export interface BlockOwnersToChange {
  /** Criteria to change the owners of a block. */
  criteria?: SetBlockOwnersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The request object to implement batch changes to block reservations based upon changes made to a reference reservation. */
export interface BlockReservationsToChange {
  /** Criteria used to implement changes to reservations belonging to a block. */
  criteria?: ChangeBlockReservationsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria used to perform batch changes to reservations that belong to a block. */
export interface ChangeBlockReservationsType {
  /** Unique block identifier such as the Block Id. */
  blockId?: BlockId;
  /** Contains the pre-change and post-change snapshot of the reference reservation. */
  referenceReservation?: {
    /** Contains the snapshot of the reference reservation before it was changed. */
    preChangeSnapshot?: ReservationSnapshotType;
    /** This contains the snapshot of the reference reservation after it was changed. */
    postChangeSnapshot?: ReservationSnapshotType;
  };
  /** Indicates the filter to identify the block reservations to which changes need to be applied in batch. */
  reservationFilter?: BlockReservationsCriteriaType;
  /**
   * Change instructions to be used.
   * @maxItems 4000
   */
  changeBlockReservationsInstructions?: ChangeBlockResvInstructionType[];
  /**
   * Opera Hotel code that the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Indicates whether to borrow inventory from the house and overbook if required for any inventory needed to complete the apply to all operation. */
  borrowForAll?: boolean;
}

/** This is used when changing block reservations in bulk. */
export interface ReservationSnapshotType {
  /** Contains detailed information about the snapshot reservation */
  hotelReservation?: HotelReservationType;
  /** Contains the routing instructions of the reservation. */
  routingInstructions?: RoutingInfoListType;
}

/** The Reservation class contains the current reservation being created or altered. */
export interface HotelReservationType {
  /** Used to provide PMS and/or CRS identifiers. */
  reservationIdList?: ReservationIdList;
  /** External Reference information for Reservation. */
  externalReferences?: ExternalReferencesType;
  /** Information regarding associated reservations. */
  associatedReservations?: AssociatedResType;
  /** Point of Sale of reservation. Identifies the entity/channel who made the reservation. */
  sourceOfSale?: SourceOfSaleType;
  /** Room stays information. */
  roomStay?: RoomStayType;
  /** Reservation Comp Authorizer. */
  compAuthorizer?: CompAuthorizerInfoType;
  /**
   * Collection of guests associated with the reservation.
   * @maxItems 4000
   */
  reservationGuests?: ResGuestType[];
  /** Collection of guests who share this reservation. */
  sharedGuests?: ResSharedGuestListType;
  /** Entry Date into the country. (Croatian Requirements). */
  additionalGuestInfo?: ResGuestAdditionalInfoType;
  /** Collection of guests associated with the reservation. */
  reservationProfiles?: {
    /** @maxItems 4000 */
    reservationProfile?: ReservationProfileType[];
    /** If not null, reservation is considered to pay out commission to either Travel Agent, Source or both. */
    commissionPayoutTo?: CommissionPayoutToType;
  };
  /** Collection of reservation communication details. */
  reservationCommunication?: ResCommunicationType;
  /** Collection of Awards,Certificates for the guest profile. */
  reservationAwards?: AwardsType;
  /** Collection of TrackIt Items available for that reservation */
  trackItItems?: TrackItItemsType;
  /** Collection of share reservation available for that reservation */
  shares?: HotelReservationsType;
  /** Collection of Locators available for that reservation */
  locators?: ReservationLocatorsType;
  /** Collection of attachments available for that reservation */
  attachments?: AttachmentsType;
  /** Collection of Web Registration Cards available for that reservation */
  webRegistrationCards?: AttachmentsType;
  /** Collection of Service Requests available for that reservation */
  serviceRequests?: ServiceRequests;
  /** Collection of Reservation Activities available for that reservation */
  reservationActivities?: ActivityLookUpList;
  /** Collection of Scheduled Activities available for that reservation */
  scheduledActivities?: ActivityLookUpList;
  /** Collection of Prepaid Cards available for that reservation */
  prepaidCards?: PrepaidCardsType;
  /** Collection of profile awards available for that reservation */
  profileAwards?: AwardsType;
  /**
   * A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges.
   * @maxItems 4000
   */
  reservationPackages?: ReservationPackageType[];
  /** A collection of inventory items attached to a reservation. */
  inventoryItems?: ResInventoryItemsType;
  /**
   * List of Notes for the Guest related to the reservation.
   * @maxItems 4000
   */
  comments?: CommentInfoType[];
  /**
   * List of Notes for the Guest related to the profile.
   * @maxItems 4000
   */
  guestComments?: CommentInfoType[];
  /**
   * List of Memberships for the Guest related to the reservation.
   * @maxItems 4000
   */
  guestMemberships?: MembershipType[];
  /**
   * Collection of reservation preferences.
   * @maxItems 4000
   */
  preferenceCollection?: PreferenceTypeType[];
  /**
   * List of reservation memberships.
   * @maxItems 4000
   */
  reservationMemberships?: ReservationMembershipType[];
  /** A collection of Payment Method objects. */
  reservationPaymentMethods?: ReservationPaymentMethodsType;
  /** Set of Routing Instructions. */
  routingInstructions?: RoutingInfoListType;
  /** A collection of Cancellation Penalties objects. */
  reservationPolicies?: ReservationPoliciesType;
  /** Holds cashiering related information for the reservation. */
  cashiering?: ResCashieringType;
  /** Holds rooms housekeeping information. */
  housekeeping?: ResHousekeepingType;
  /** Reservations related to the current Reservation. */
  linkedReservation?: LinkedReservationsInfoType;
  extSystemSync?: boolean;
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /** Indicators of additional information attached to the reservation */
  reservationIndicators?: IndicatorsType;
  /** Information regarding why reservation has been/was waitlisted. This could hold information as history even if reservation is no more in Waitlist status. */
  waitlist?: WaitlistResType;
  /** Information regarding why reservation has been/was cancelled. This could hold information as history even if reservation is no more in in Cancelled status. */
  cancellation?: {
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
    /** Cancellation Number given when reservation was last cancelled. */
    cancellationNo?: UniqueIDType;
    /**
     * Date when reservation was last cancelled.
     * @format date
     * @maxLength 8
     */
    date?: string;
  };
  /** Catering event information if reservation is associated with the catering event. */
  catering?: CateringResInfoType;
  /** Catering event information if reservation is associated with the catering event. */
  statisticalClassification?: ResStatClassificationType;
  /** List of reservation alerts. */
  alerts?: AlertsType;
  /** List of reservation Traces. */
  traces?: HotelReservationTracesType;
  /** List of reservation confirmation letters. */
  confirmationLetters?: ConfirmationsType;
  /** List of reservation calls. */
  callHistory?: CallHistoryType;
  /** List of reservation fixed charges. */
  fixedCharges?: FixedChargesType;
  /** List of Messages. */
  guestMessages?: GuestMessagesType;
  /** An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid. */
  lockHandle?: number;
  /** List of overrides done for the reservation. */
  overrideInstructions?: OverrideInstructionsType;
  /** Information about the time and duration this reservation was on Queue for Checkin. */
  queue?: ReservationQueueInformationType;
  /** Collection of allowed actions for the reservation. */
  allowedActions?: ReservationAllowedActionsType;
  /** List of eCoupons. */
  eCoupons?: ECouponsType;
  /** List of transaction diversions attached to the reservation. */
  transactionDiversions?: {
    /** @maxItems 4000 */
    transactionDiversions?: ReservationTransactionDiversionsType[];
    /** @maxLength 2000 */
    actionType?: string;
  };
  /** Information relating to Reservation's Advance Checked In state and Expected Time of Return */
  advanceCheckIn?: AdvanceCheckInType;
  /** List of Reservation Tickets. */
  tickets?: TicketsType;
  /**
   * Configurable Access Restriction Message for Excluded Block or Rate Code.
   * @minLength 0
   * @maxLength 4000
   */
  accessRestrictionMessage?: string;
  /** List of ECertificates attached to the reservation. */
  eCertificates?: ReservationECertificatesType;
  /** List of Custom Name Value Information attached to the reservation. */
  customNameValueDetail?: NameValueDetailType;
  /** List of Custom Charge Exemptions attached to the reservation. */
  customChargeExemptionDetails?: CustomChargeExemptionsType;
  /** This flag will force to borrow from house if borrow required for number of rooms requested, this will only applicable when reservation is attached to a Block. */
  autoBorrowFromHouse?: boolean;
  /** Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation */
  overrideExternalChecks?: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Boolean True if this reservation is reserving rooms. False if it is only reserving services. */
  roomStayReservation?: boolean;
  /** Indicates the Actual status of the reservation. */
  reservationStatus?: PMSResStatusType;
  /** Indicates the Computed status of the reservation. */
  computedReservationStatus?: PMSResStatusType;
  /** When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. */
  walkIn?: boolean;
  /** Indicates whether to show the rate or not on a printed document which includes the rate. */
  printRate?: boolean;
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
   * Business Date when the reservation was created.
   * @format date
   * @maxLength 8
   */
  createBusinessDate?: string;
  /**
   * Business Date when the reservation was last reinstated.
   * @format date
   * @maxLength 8
   */
  reinstateDate?: string;
  /**
   * Party/PartyCode when reservation is part of a party(a small group).
   * @minLength 0
   * @maxLength 50
   */
  party?: string;
  /**
   * Name Of the Resort/Hotel for the primary enrollment
   * @minLength 0
   * @maxLength 80
   */
  primaryEnrollmentResort?: string;
  /**
   * Name of the Chain for the primary enrollment
   * @minLength 0
   * @maxLength 80
   */
  primaryEnrollmentChain?: string;
  /**
   * Custom Reference to identify reservation.
   * @minLength 0
   * @maxLength 50
   */
  customReference?: string;
  /**
   * The color to display this reservation on room grid displays.
   * @minLength 0
   * @maxLength 20
   */
  displayColor?: string;
  /** Mark this reservation as recently accessed. */
  markAsRecentlyAccessed?: boolean;
  /** Indicates to Override the Room Inventory Check if applicable. */
  overrideInventoryCheck?: boolean;
  /** Indicates user restriction on the reservation based on the Access exclusion functionality such as Restriction on Changes, Cancellation or both. */
  accessRestriction?: ResAccessRestrictionType;
  /** Is the reservation pre-registered. */
  preRegistered?: boolean;
  /** Indicates whether the reservation is eligible for upgrade. */
  upgradeEligible?: boolean;
  overrideBlockRestriction?: boolean;
  /** Flag to allow auto checkin */
  allowAutoCheckin?: boolean;
  hasOpenFolio?: boolean;
  /** Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. */
  allowMobileCheckout?: boolean;
  /** Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. */
  allowMobileViewFolio?: boolean;
  /** Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. */
  allowPreRegistration?: boolean;
  /** Flag containing true or false value to determine if the guest has opted for communications pertaining to this reservation.Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is marked for communication. Upon fetch, the current state of the flag will show true or false. */
  optedForCommunication?: boolean;
  /**
   * This attribute represents Hotel charge card number. This number is generated automatically in OPERA when a reservation is created in OPERA. It is part of a functionality that provide the guest with the convenience of placing all their charges directly on their reservation folio.
   * @minLength 0
   * @maxLength 100
   */
  chargeCardNumber?: string;
}

/** Information regarding associated reservations to the reservation. */
export interface AssociatedResType {
  /** Stores Unique ID of the parent reservation. */
  parentReservation?: UniqueIDType;
  /** Stores Unique ID of the original multi room reservation from which this reservation is split off. */
  originalMultiRoomRes?: UniqueIDType;
}

export interface RoomStayType {
  /** Registration Number of the reservation for the current day. */
  registrationNumber?: UniqueIDType;
  /** Room information of the reservation for the current day. */
  currentRoomInfo?: CurrentRoomInfoType;
  /**
   * A collection of Room Rates associated with a particular Room Stay. Each Room Rate combination can have multiple rates. Example King room, Rack rate plan, Monday through Thursday, weekday amount, Friday and Saturday, weekend amount.
   * @maxItems 4000
   */
  roomRates?: RoomRateType[];
  /** A collection of GuestCount by age group. */
  guestCounts?: GuestCountsType;
  /** @format date */
  arrivalDate?: string;
  /** @format date */
  departureDate?: string;
  /** The Expected Arrival and Departure Times. */
  expectedTimes?: ResExpectedTimesType;
  /** The Original Time Span(Arrival, Departure) which covers the Room Stay. In case of Rolling No Show TimeSpan's StratDate moves forward but OriginalTimeSpan's StratDate remains the same. */
  originalTimeSpan?: TimeSpanType;
  /** The guarantee information associated to the Room Stay. A maximum of 5 occurances are available for use depending on the context. */
  guarantee?: ResGuaranteeType;
  /** Promotions applied to the reservation to get the promotional rate. */
  promotion?: PromotionType;
  /**
   * Connecting Rooms.
   * @minLength 0
   * @maxLength 200
   */
  suiteWith?: string;
  /** The total amount charged for the Room Stay. */
  total?: TotalType;
  /** The total number of Points charged for the Room Stay. */
  totalPoints?: PointsType;
  /**
   * Informative indicators indicating different values of an attribute exists over the stay.
   * @maxItems 4000
   */
  multiValueAttrs?: string[];
  /** Indicates Upsell Information to be applied on Reservation. */
  upsellInfo?: UpsellInfoType;
  /** Denotes the status of Room Ready and Key Ready messages. */
  mobileNotifications?: ResMobileNotificationsType;
  /** When true, indicates a room number cannot be changed. When false, indicates a room number may be changed. */
  roomNumberLocked?: boolean;
  /** This control whether rate info will be printed in confirmation letter. */
  printRate?: boolean;
  /** Indicates whether reservation is for Unit/Room Owner or Authorized User. If this attribute is not define it is a regular/rental reservation. */
  ownerReservationType?: OwnerResTypeType;
  /** This is populated in case of primary share scenario. This indicates whether this reservation is primary or non primary. Changes or postings to the 'non-primary' share reservation is not allowed. */
  primaryShareType?: PrimaryShareTypeType;
  /** Indicates whether the reservation is pre-registered for internet check-in or not. */
  remoteCheckInAllowed?: boolean;
  /**
   * Classifies the medium(Channel field on reservation screen) through which the reservation is made.
   * @minLength 0
   * @maxLength 20
   */
  bookingMedium?: string;
  /**
   * Description of the booking medium.
   * @minLength 0
   * @maxLength 2000
   */
  bookingMediumDescription?: string;
  /** Number of Upsell Offers Available for this stay. This will only be populated if the Upsell Instruction is included in the Allowed Instruction request */
  availableUpsellOfferCount?: number;
}

/** Room information of the reservation for the current day. */
export interface CurrentRoomInfoType {
  /**
   * Current room type.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Current room number.
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /** Suggested room numbers. */
  suggestedRoomNumbers?: CodeListType;
  /**
   * Current room description.
   * @minLength 0
   * @maxLength 2000
   */
  roomDescription?: string;
  /**
   * Represents the room view code like City view, River view, Ocean view etc.
   * @minLength 0
   * @maxLength 40
   */
  roomViewCode?: string;
  /** Represents the room was assigned by AI Room Assignment. */
  assignedByAI?: boolean;
  /** Represents the room was upgraded by AI Room Assignment. */
  upgradedByAI?: boolean;
}

/** @maxItems 4000 */
export type CodeListType = string[];

export interface RoomRateType {
  /** The total amount charged for the service including additional amounts and fees. */
  total?: TotalType;
  /** The Redeem Points contains the number of points required to book a room type. */
  totalPoints?: PointsType;
  /** Individual rate amount. */
  rates?: RatesType;
  /** @maxItems 4000 */
  packages?: PackageElementType[];
  /**
   * Profile associated with the room Stay.
   * @maxItems 4000
   */
  stayProfiles?: ReservationProfileType[];
  /** A collection of Guest Counts associated with the room rate. */
  guestCounts?: GuestCountsType;
  /** A collection of Tax Free Guest Counts associated with the room rate. This list does not add to the guest count but just indicates number of tax free guests out of guest counts. */
  taxFreeGuestCounts?: GuestCountsType;
  /** Membership Awards code applied on the reservation. */
  awards?: ResAwardsType;
  /** Exchange Type information for the postings. */
  foreignExchange?: ForeignExchangeType;
  /** Key information about the block for this reservation. */
  reservationBlock?: ReservationBlockType;
  /**
   * Information about the Room Rate Combination.
   * @minLength 0
   * @maxLength 2000
   */
  roomRateInfo?: string;
  /** Meal plan codes for rate plan code. */
  mealPlans?: MealPlansType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  promotionCode?: string;
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
  /** Used to specify an availability status for the room rate. When available value could be either not specified or "Available". */
  availability?: RoomRateAvailReasonType;
  suppressRate?: boolean;
  /**
   * The code that relates to the market being sold to (e.g., the corporate market, packages).
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * Description of the market code.
   * @minLength 0
   * @maxLength 4000
   */
  marketCodeDescription?: string;
  /**
   * To specify where the business came from e.g. radio, newspaper ad, etc.
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
  /** The number of rooms. */
  numberOfUnits?: number;
  /**
   * A string value representing the unique identification of a room.
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /** True indicates as pseudo room type. This is usually used for a posting master reservation. */
  pseudoRoom?: boolean;
  /**
   * Room Type used for the Rate calculation.
   * @minLength 0
   * @maxLength 20
   */
  roomTypeCharged?: string;
  /**
   * Commission Code applicable for commission calculation for Travel Agent/Company.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
  /** Indicates Commission is applicable for commission calculation for Travel Agent/Company. */
  commissionable?: boolean;
  /** Indicates this reservation is for House use. */
  houseUseOnly?: boolean;
  /** Indicates this reservation rate is complimentary. */
  complimentary?: boolean;
  /** Indicates whether the room type inventory was taken from the allotment or House availability. */
  inventoryLender?: string;
  /** Fixed Rate Indicator. */
  fixedRate?: boolean;
  /** Best Available rates ranking. */
  barRanking?: number;
  /**
   * For RatePlanSet equals BESTAVAILABLERATE, in case Rate Groups are enabled the element provides the rate group for the rate plan code.
   * @minLength 0
   * @maxLength 20
   */
  rateGroup?: string;
  /** Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code. */
  discountAllowed?: boolean;
  /** Indicates if the Rate Code has BOGO(Bye one Get one) indicator. */
  bogoDiscount?: boolean;
  /**
   * Rate plan type like Corporate,Regular,Military,Weekend etc.
   * @minLength 0
   * @maxLength 20
   */
  rateLevel?: string;
  /** Indicates commission percentage used by the rate plan. */
  commissionPercentage?: number;
  /** Indicates commission amount used by the rate plan. */
  commissionAmount?: number;
  /** If true, indicates that credentials is required to sell the rate code. */
  credentialsRequired?: boolean;
  /** If true, indicates if tax is included in the rate code. */
  taxIncluded?: boolean;
  /**
   * Rate code description.
   * @minLength 0
   * @maxLength 4000
   */
  rateDescription?: string;
}

/** The total amount charged for the service including additional amounts and fees. */
export interface TotalType {
  /** A collection of taxes. */
  taxes?: TaxesType;
  /** A collection of fees or service charges. */
  fees?: FeesType;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax). */
  amountBeforeTax?: number;
  /** The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). */
  amountAfterTax?: number;
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
   * Type of charge.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** When true indicates that the rate amount has been overridden. */
  rateOverride?: boolean;
}

/** A collection of taxes. */
export interface TaxesType {
  /**
   * An individual tax.
   * @maxItems 99
   */
  tax?: TaxType[];
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Applicable tax element. This element allows for both percentages and flat amounts. If one field is used, the other should be zero since logically, taxes should be calculated in only one of the two ways. */
export interface TaxType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Used to indicate if the amount is inclusive or exclusive of other charges, such as taxes, or is cumulative (amounts have been added to each other). */
  type?: AmountDeterminationType;
  /**
   * Code identifying the fee (e.g.,agency fee, municipality fee).
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** A collection of fees or service charges. */
export interface FeesType {
  /**
   * An individual fee or service charge.
   * @maxItems 99
   */
  fee?: FeeType[];
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Applicable service charges or fees. */
export interface FeeType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Used to indicate if the amount is inclusive or exclusive of other charges, such as taxes, or is cumulative (amounts have been added to each other). */
  type?: AmountDeterminationType;
  /**
   * Code identifying the fee (e.g.,agency fee, municipality fee).
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
}

/** Individual rate amount. */
export interface RatesType {
  /**
   * The Rate contains a collection of elements that define the amount of the rate, associated fees, additional occupant amounts. Taxes can be broken out or included within the various amounts. A currency can be associated to each amount.
   * @maxItems 4000
   */
  rate?: AmountType[];
  /**
   * Rate Range details like maximum rate amount and minimum rate amount in each available rate category.
   * @maxItems 4000
   */
  rateRange?: RateRangeType[];
}

/** Base charge and additional charges related to a room that includes such things as additional guest amounts, cancel fees, etc. Also includes Discount percentages, total amount, and the rate description. */
export interface AmountType {
  /** The base amount charged for the accommodation or service per unit of time (ex: Nightly, Weekly, etc). If TaxInclusive is set to True, then taxes are included in the base amount. Note that any additional charges should itemized in the other elements. */
  base?: TotalType;
  /**
   * Collection of incremental charges per age qualifying code for additional guests. Amount charged for additional occupant is with respect to age group of the base guests.
   * @maxItems 4000
   */
  additionalGuestAmounts?: AdditionalGuestAmountType[];
  /** Discount percentage and/or Amount, code and textual reason for discount */
  discount?: DiscountType;
  /**
   * Indicates the share rate percentage for the reservation if set to CUSTOMSPLIT.
   * @min 0
   * @max 100
   */
  shareRatePercentage?: number;
  /** Last rate share distribution instruction applied on share reservation daily rate segment. */
  shareDistributionInstruction?: ShareDistributionInstructionType;
  /** The total amount charged for this rate including additional occupant amounts and fees. */
  total?: TotalType;
  /** The Points contains the number of points required to book a particular room type. */
  requiredPoints?: PointsType;
  /** The reservation effective amount charged for the accommodation or service (i.e. base amount + amount for Add to Rate Combine Line packages) per unit of time */
  effectiveRate?: TotalType;
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

export interface AdditionalGuestAmountType {
  /** The total amount charged for the service including additional amounts and fees. */
  amount?: TotalType;
  ageQualifyingCode?:
    | 'ADULT'
    | 'CHILD'
    | 'OTHER'
    | 'CHILDBUCKET1'
    | 'CHILDBUCKET2'
    | 'CHILDBUCKET3'
    | 'CHILDBUCKET4'
    | 'CHILDBUCKET5';
}

/** Identifies and provides details about the discount. This allows for both percentages and flat amounts. If one field is used, the other should be zero/not specified since logically. */
export interface DiscountType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  discountReason?: string;
  /** Percentage discount. */
  percent?: number;
  /** A monetary amount. */
  amount?: number;
  /**
   * Provides a currency code to reflect the currency in which an amount may be expressed.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
  /**
   * Specifies the type of discount (e.g., No condition, LOS, Deposit or Total amount spent).
   * @minLength 0
   * @maxLength 20
   */
  discountCode?: string;
}

/** The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations. */
export enum ShareDistributionInstructionType {
  Full = 'Full',
  Entire = 'Entire',
  Split = 'Split',
  CustomSplit = 'CustomSplit',
}

/** Rate Range details like maximum rate amount and minimum rate amount in each available rate category. */
export interface RateRangeType {
  /**
   * The base amount charged for the accommodation or service.
   * @maxItems 4000
   */
  base?: TotalType[];
  /** Rate Change Indicator. */
  rateChange?: boolean;
}

export interface PackageElementType {
  /** A monetary value expressed with a currency code. */
  amount?: CurrencyAmountType;
  /** A monetary value expressed with a currency code. */
  allowance?: CurrencyAmountType;
  /** @maxItems 4000 */
  description?: string[];
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
  packageCode?: string;
  calculationRule?: string;
  postingRhythm?: string;
  quantity?: number;
  includedInRate?: boolean;
  addRateSeprateLine?: boolean;
  addRateCombinedLine?: boolean;
  startTime?: string;
  endTime?: string;
  sellSeparate?: boolean;
}

export interface ReservationProfileType {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: ProfileIdList;
  /** Provides detailed information regarding either a company or a customer profile. */
  profile?: ProfileType;
  reservationProfileType?: ResProfileTypeType;
}

/** A collection of GuestCount by age group. */
export interface GuestCountsType {
  /** Defines Children's Ages. Number of children ages mentioned may mot match with children counts. */
  childAges?: ChildAgesType;
  /** Defines children counts with Age Qualifying Group(Child Bucket#1) classification. */
  childBuckets?: ChildBucketsType;
  /** Defines the number of Adults. */
  adults?: number;
  /** Defines the number of Children. */
  children?: number;
}

/**
 * Age of a child in years.
 * @maxItems 4000
 */
export type ChildAgesType = ChildAgeType[];

/** Defines Child's Age. */
export interface ChildAgeType {
  /** Age of a child in years. */
  age?: number;
}

/** Defines children counts with Age Qualifying Group(Child Bucket) classification. */
export interface ChildBucketsType {
  /** Number of children classified under the first Age Qualifying Group(Child Bucket#1). */
  bucket1Count?: number;
  /** Number of children classified under the second Age Qualifying Group(Child Bucket#2). */
  bucket2Count?: number;
  /** Number of children classified under the third Age Qualifying Group(Child Bucket#3). */
  bucket3Count?: number;
  /** Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). */
  bucket4Count?: number;
  /** Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). */
  bucket5Count?: number;
}

/** Membership Awards code applied on the reservation. */
export interface ResAwardsType {
  /** Membership program under which the award is applied. */
  membershipNo?: UniqueIDType;
  /** This stores the Membership Awards code applied on the reservation. */
  awardVouchers?: AwardVouchersType;
  /**
   * Room Type before the Upgrade Award.
   * @minLength 0
   * @maxLength 20
   */
  originalRoomType?: string;
  /**
   * Room Type after the Upgrade Award.
   * @minLength 0
   * @maxLength 20
   */
  upgradeRoomType?: string;
}

/**
 * This stores the Membership Awards code applied on the reservation.
 * @maxItems 5
 */
export type AwardVouchersType = {
  /**
   * Membership Award code applied on the reservation.
   * @minLength 0
   * @maxLength 20
   */
  awardCode?: string;
  /**
   * Membership Award number.
   * @minLength 0
   * @maxLength 80
   */
  voucherNo?: string;
}[];

/** Foreign Exchange info. */
export interface ForeignExchangeType {
  /**
   * Exchange Type for the postings.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Effective Exchange date for the foreign currency posting.
   * @format date
   * @maxLength 8
   */
  effectiveDate?: string;
}

/** Indicates the Room Rate is not available due to unavailability of enough items for the rate code. */
export enum RoomRateAvailReasonType {
  Available = 'Available',
  Restricted = 'Restricted',
  RestrictedDueToInventory = 'RestrictedDueToInventory',
  RestrictedDueToOccupancy = 'RestrictedDueToOccupancy',
  RestrictedDueToItemInventory = 'RestrictedDueToItemInventory',
}

/** Information regarding upsell for a reservation. */
export interface UpsellInfoType {
  /** Original Values of the reservation prior to upgrade. */
  originalInfo?: {
    /**
     * The Rate Code of the Reservation before it was upgraded
     * @minLength 0
     * @maxLength 20
     */
    rateCode?: string;
    /** Total Amount of the reservation before it was upgraded. */
    totalAmount?: CurrencyAmountType;
    /** Original Reservation Room Type before being upgraded. */
    roomType?: CodeDescriptionType;
    /** The number of nights of the reservation before being upgraded. */
    nights?: number;
  };
  /** Information of a reservation during the process of upgrade. */
  upsellInfo?: {
    /** Amount that was charged for the upsell. */
    totalUpsellCharge?: CurrencyAmountType;
    /** Total Amount that was charged including upsell. */
    totalUpsellMoneyAmount?: CurrencyAmountType;
    /** First Night Total Amount including Upsell. */
    firstNightUpsellAmount?: CurrencyAmountType;
    /** First Night Upsell Charges. */
    firstNightUpsellCharge?: CurrencyAmountType;
    /** Total Upsell Points. */
    totalUpsellPoints?: number;
    /** Actual Total Room Rate for the Target Upsell Room Type. */
    totalActualRateAmount?: CurrencyAmountType;
    /** Reservation Room Type for Upsell. */
    roomType?: CodeDescriptionType;
    /**
     * Detail description of the Room Type.
     * @minLength 0
     * @maxLength 2000
     */
    roomLongDescription?: string;
    /** Upsell Rule Id. */
    ruleId?: number;
    /**
     * Upsell rule code
     * @minLength 0
     * @maxLength 20
     */
    ruleCode?: string;
    /**
     * Upsell rule description
     * @minLength 0
     * @maxLength 2000
     */
    ruleDescription?: string;
    /**
     * Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered)
     * @min 0
     * @max 100
     */
    percentageSavings?: number;
    /**
     * The date on which reservation is upgraded.
     * @format date
     * @maxLength 8
     */
    upsellDate?: string;
    /**
     * User who upgraded the reservation.
     * @minLength 0
     * @maxLength 40
     */
    upsellUser?: string;
  };
}

export enum OwnerResTypeType {
  Owner = 'Owner',
  AuthorizedUser = 'AuthorizedUser',
}

export enum PrimaryShareTypeType {
  Primary = 'Primary',
  NonPrimary = 'NonPrimary',
}

/** Authorizer Information */
export interface CompAuthorizerInfoType {
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  authorizerId?: UniqueIDType;
  /**
   * Application user name of the authorizer
   * @minLength 0
   * @maxLength 40
   */
  authorizerUserName?: string;
  /**
   * Full name of the authorizer.
   * @minLength 0
   * @maxLength 100
   */
  authorizerName?: string;
}

/** A collection of ResGuest objects, identifying the guests associated with this reservation. Which guests are in which room is determined by each RoomStays ResGuestRPHs collection. */
export interface ResGuestType {
  /** A collection of Profiles or Unique IDs of Profiles. */
  profileInfo?: {
    /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
    profileIdList?: ProfileIdList;
    /** Provides detailed information regarding either a company or a customer profile. */
    profile?: ProfileType;
    /** Cashiering details for the profile. */
    profileCashieringDetail?: ProfileCashieringDetailType;
    /**
     * Unique identifier of the police registration card number.
     * @minLength 0
     * @maxLength 40
     */
    registrationCardNo?: string;
  };
  arrivalTransport?: TransportInfoType;
  departureTransport?: TransportInfoType;
  visaInfo?: VisaInfoType;
  /**
   * This is a reference placeholder, used as an index for this guest in this reservation. In the ResGuest object it is used like all other RPH attributes to send the delta of a reservation. It is used by the RoomStay and Service objects to indicate which guests are associated with that room stay or service.
   * @minLength 1
   * @maxLength 8
   */
  reservationGuestRPH?: string;
  /** When true indicates this is the primary guest. */
  primary?: boolean;
}

/** The type contains routing instructions for the profile. */
export interface ProfileCashieringDetailType {
  /** Payment Method Details. */
  paymentMethod?: CodeDescriptionType;
  /** E-Commerce ID of the Profile */
  eCommerceId?: UniqueIDType;
  /** Set of preconfigured transaction codes. */
  routingInstructions?: ProfileRoutingInstructionsType;
  /**
   * Tax type code.
   * @minLength 0
   * @maxLength 20
   */
  taxType?: string;
  /**
   * Guest type code.
   * @minLength 0
   * @maxLength 20
   */
  fiscalGuestType?: string;
  /**
   * Hotel Code for which the routing instructions are provided for a profile.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** The type contains routing instructions for the profile. */
export interface ProfileRoutingInstructionsType {
  /** Set of preconfigured transaction codes. */
  transactionCodes?: TrxCodesInfoType;
  /** Set of preconfigured Billing Instruction results. */
  billingInstructions?: BillingInstructionsType;
  /** A flag which determines whether the instructions has to be automatically populated for this profile or not. */
  autoPopulateRouting?: boolean;
}

/**
 * List of Transaction codes info.
 * @maxItems 4000
 */
export type TrxCodesInfoType = TrxInfoType[];

/** Transaction codes info. */
export interface TrxInfoType {
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
  transactionGroup?: string;
  /**
   * Sub category of the transaction code.
   * @minLength 0
   * @maxLength 20
   */
  transactionSubGroup?: string;
  /**
   * Unique Universal product code of the transaction code.
   * @minLength 0
   * @maxLength 20
   */
  universalProductCode?: string;
  /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
  routingInstructionsId?: number;
  /**
   * The List of Articles defined for this transaction code, when using the Articles functionality.
   * @maxItems 4000
   */
  articles?: ArticleInfoType[];
  /**
   * Contains service type for transaction code.
   * @minLength 0
   * @maxLength 20
   */
  trxServiceType?: string;
  /**
   * Unique identifier for the Transaction code.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /**
   * Hotel context of the Transaction code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
  printTrxReceipt?: boolean;
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

/**
 * Set of Billing Instruction codes.
 * @maxItems 4000
 */
export type BillingInstructionsType = BillingInstructionType[];

/** Configured Billing Instruction which represents a set of Transaction Codes. */
export interface BillingInstructionType {
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
}

export interface TransportInfoType {
  /**
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  transportCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  carrierCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  stationCode?: string;
  /** @format date-time */
  dateTime?: string;
  transportationReqd?: boolean;
}

export interface VisaInfoType {
  /**
   * @format date
   * @maxLength 8
   */
  visaIssueDate?: string;
  /**
   * @format date
   * @maxLength 8
   */
  visaExpiryDate?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  visaNumber?: string;
}

export interface ResGuestAdditionalInfoType {
  /**
   * Entry point into the country. (Croatian Requirements).
   * @minLength 0
   * @maxLength 40
   */
  portOfEntry?: string;
  /**
   * Entry Date into the country. (Croatian Requirements).
   * @format date
   * @maxLength 8
   */
  dateOfEntry?: string;
  /** Entry Date into the country. (Croatian Requirements). */
  nextDestination?: string;
  /**
   * Preferred Room Type of the guest.
   * @minLength 0
   * @maxLength 20
   */
  preferredRoomType?: string;
  /** Last Stay information of the guest. */
  lastStay?: GuestLastStayInfoType;
  /**
   * Purpose of stay.
   * @minLength 0
   * @maxLength 20
   */
  purposeOfStay?: string;
  /**
   * Guest Classification for the data export.
   * @minLength 0
   * @maxLength 40
   */
  guestClassification?: string;
  /**
   * Guest Status for the data export.
   * @minLength 0
   * @maxLength 40
   */
  guestStatus?: string;
}

/**
 * List of awards.
 * @maxItems 4000
 */
export type AwardsType = AwardType[];

/** Detailed information of the awards. */
export interface AwardType {
  /**
   * Award category.
   * @minLength 0
   * @maxLength 20
   */
  awardCode?: string;
  /** Can be P (Paper) or E (E-Certificate). */
  awardType?: AwardKindType;
  /** Description of the award/certificate. */
  description?: string;
  /**
   * Certificate No.
   * @minLength 0
   * @maxLength 20
   */
  certificateNo?: string;
  /**
   * Master Certificate No.
   * @minLength 0
   * @maxLength 20
   */
  masterCertificiateNo?: string;
  /** Membership No. */
  membershipNo?: string;
  /**
   * Hotel Code for which the routing instructions are provided for a profile.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Indicates the lowest hotel category for which the certificate is valid.
   * @minLength 0
   * @maxLength 20
   */
  hotelCategory?: string;
  /**
   * Hotel Code of the CRS application that this certificate belongs to.
   * @minLength 0
   * @maxLength 20
   */
  externalHotelCode?: string;
  /**
   * Confirmation Number given by a CRS application for this reservation.
   * @minLength 0
   * @maxLength 20
   */
  externalConfirmationNo?: string;
  /** Indicates whether the category of certificate is valid or not for this resort. */
  categoryValid?: boolean;
  /** [R]=Reward, [I]=Incentive. */
  reservationCertificateType?: ReservationCertificateType;
  /** [RE]=Regular Certificate, [SA]=Stay Anytime Certificate, [PS]=Point Saver Certificate. */
  rewardCertificateType?: RewardCertificateType;
  /** Status of the award aka available. */
  status?: AwardStatusType;
  /**
   * Expiration Date.
   * @format date
   * @maxLength 8
   */
  expirationDate?: string;
  /** Signifies whether award is gift or not. */
  gift?: boolean;
  /** Signifies whether upgrade award or not. */
  upgrade?: boolean;
  /** Signifies whether upgrade is package or not. */
  package?: boolean;
  /** Indicates if the award is an Instant Redemption award. */
  instantlyRedeemable?: boolean;
  /** Indicates if this certificate was ordered using the "Paid Upgrade" option in the E-Certs screen. */
  paidUpgrade?: boolean;
  /** Indicates if this certificate is detailed or not. */
  detailedCertificate?: boolean;
  /** Award Nights. */
  nights?: number;
  /** MRW : From MRW MAN:Entered manually. */
  sourceType?: string;
  /** No. of points used to order this award. */
  points?: number;
  /** FBA related fields. */
  fBAInfo?: FBAInfoType;
  /** Reservation IDs will be empty if award is not attached. */
  reservationId?: ReservationId;
  /** Unique profile identifier requested to be fetched. */
  profileId?: ProfileId;
  /** Quantity of such awards needed to be ordered. */
  quantity?: number;
  /** Indicates the order in which the certificates received from MRW. */
  displaySequence?: number;
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

/** Indicates that this is electronic certificate. */
export enum AwardKindType {
  Paper = 'Paper',
  ECertificate = 'ECertificate',
}

/** Certificate is incentive. */
export enum ReservationCertificateType {
  Reward = 'Reward',
  Incentive = 'Incentive',
}

/** Point Saver reward. */
export enum RewardCertificateType {
  Regular = 'Regular',
  StayAnytime = 'StayAnytime',
  PointSaver = 'PointSaver',
}

/** Indicates that certificate is in use. */
export enum AwardStatusType {
  Available = 'Available',
  NotAvailable = 'NotAvailable',
  InUse = 'InUse',
}

/** FBA ( Flexible Benefits Awards ) related fields. */
export interface FBAInfoType {
  /** Possible FBA statuses. */
  status?: FBAStatusType;
  /** Award's FBA monetary values. */
  monetaryValue?: number;
  /** Award's FBA amount. */
  amount?: number;
  /** Award's FBA posted amount. */
  postedAmount?: number;
  /** Award's FBA reimbursed amount. */
  reimbursedAmount?: number;
  /**
   * Date and time of the FBA posting.
   * @format date
   * @maxLength 8
   */
  postingDateTime?: string;
  /**
   * Business date of the FBA posting.
   * @format date
   * @maxLength 8
   */
  postingBusinessDate?: string;
  /**
   * Date and time of the FBA settlement.
   * @format date
   * @maxLength 8
   */
  settlementDateTime?: string;
  /**
   * Business date of the FBA settlement.
   * @format date
   * @maxLength 8
   */
  settlementBusinessDate?: string;
  /**
   * Date and time of the FBA reimbursement.
   * @format date
   * @maxLength 8
   */
  reimbursementDateTime?: string;
  /**
   * Business date of the FBA reimbursement.
   * @format date
   * @maxLength 8
   */
  reimbursementBusinessDate?: string;
  /**
   * Business date of the FBA bill generation.
   * @format date
   * @maxLength 8
   */
  fbaBillGenDate?: string;
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
  /** Indicates if this certificate is a Flexible Benefit Award certificate. */
  flexibleBenefitAward?: boolean;
  /** Indicates whether FBA has been posted. */
  posted?: boolean;
  /** Indicates whether FBA has been settled. */
  settled?: boolean;
  /** Indicates whether FBA has been reimbursed. */
  reimbursed?: boolean;
  /** Marks if the certificate is eligible for resettlement */
  resettleAllowed?: boolean;
  /** Marks if the certificate is eligible for reimbursement. */
  reimburseAllowed?: boolean;
  /** Indicates whether the certificate is Orphan or not. */
  orphanCertificate?: boolean;
}

/** Flexible benefit award has been reimbursed. */
export enum FBAStatusType {
  Ordered = 'Ordered',
  Attached = 'Attached',
  Posted = 'Posted',
  Settled = 'Settled',
  Reimbursed = 'Reimbursed',
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
export enum TrackItGroup {
  Parcel = 'Parcel',
  Valet = 'Valet',
  Baggage = 'Baggage',
  Lost = 'Lost',
}

/** Identifies the kind of Parcel, Baggage, or Lost items or Valet-managed vehicles or services. */
export interface TrackItType {
  /** This contains a generic code and description information. */
  type?: CodeDescriptionType;
  /** Web site address, in IETF(The Internet Engineering Task Force) specified format. */
  url?: URLType;
}

/** Identifies the response expected from staff or other parties relative to a Track It ticket. */
export interface TrackItActionType {
  /** This contains a generic code and description information. */
  trackItAction?: CodeDescriptionType;
  /** Action status of the Track It item(Open, Closed). */
  status?: ActionStatusType;
}

/** Action status of the Track It item(Open, Closed). */
export enum ActionStatusType {
  Open = 'Open',
  Closed = 'Closed',
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

/** A collection of Reservation objects and Unique IDs of Reservation. */
export interface HotelReservationsType {
  /**
   * A collection of Reservations.
   * @maxItems 4000
   */
  reservation?: HotelReservationType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/**
 * Holds the Locator Information.
 * @maxItems 4000
 */
export type ReservationLocatorsType = ReservationLocatorType[];

/** Holds the information for a Reservation Guest Locator */
export interface ReservationLocatorType {
  /** Begin and End date range of the Guest Locator. */
  dateSpan?: DateRangeType;
  /** Time span for the Guest Locator. */
  timeSpan?: DateTimeSpanType;
  /** The Locator Text for the guest. */
  locatorText?: string;
  /**
   * Date and time of the Guest Locator.
   * @format date-time
   */
  locatorOn?: string;
  /** User that entered this Guest Locator. */
  locatorBy?: string;
  /** Unique Id of the Guest Locator ( Locator Id ) */
  locatorId?: UniqueIDType;
}

/**
 * Service request.
 * @maxItems 4000
 */
export type ServiceRequests = ServiceRequest[];

/** Service request. */
export interface ServiceRequest {
  /** Unique identifier of the service request. */
  serviceRequestId?: UniqueIDType;
  /**
   * Hotel Code of the service request.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Service request code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** The status of the service request. */
  status?: ServiceRequestStatusType;
  /**
   * The priority level of the service request.
   * @minLength 0
   * @maxLength 20
   */
  priority?: string;
  /** The department that is associated with the service request code. */
  department?: CodeDescriptionType;
  /** Unique identifier of the reservation. */
  reservationIdList?: ReservationIdList;
  /** Unique identifier of the guest. */
  profileId?: ProfileId;
  /**
   * The guest name.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /**
   * The room number in which the service request was created.
   * @minLength 0
   * @maxLength 20
   */
  room?: string;
  /**
   * The date-time in which the service request was opened.
   * @format date-time
   */
  openDate?: string;
  /**
   * The user who guaranteed the completion of the service request.
   * @minLength 0
   * @maxLength 100
   */
  guaranteedBy?: string;
  /**
   * Description of the service request.
   * @minLength 0
   * @maxLength 2000
   */
  comment?: string;
  /**
   * Description of the action taken to complete the request.
   * @minLength 0
   * @maxLength 200
   */
  action?: string;
  /**
   * Communication method picked from guest profile.
   * @minLength 0
   * @maxLength 100
   */
  guestContactMethod?: string;
  /**
   * The date-time in which the service request was completed.
   * @format date-time
   */
  completionDate?: string;
  /**
   * The date-time in which the service request was closed.
   * @format date-time
   */
  closedDate?: string;
  /**
   * The user who closed the service request.
   * @minLength 0
   * @maxLength 80
   */
  closedBy?: string;
  /**
   * The follow up description.
   * @minLength 0
   * @maxLength 2000
   */
  closeDescription?: string;
}

export enum ServiceRequestStatusType {
  Open = 'Open',
  PendingFollowUp = 'PendingFollowUp',
  Closed = 'Closed',
  DoNotDisturb = 'DoNotDisturb',
  MakeUpRoom = 'MakeUpRoom',
}

/**
 * Criteria for fetching Activity Bookings.
 * @maxItems 4000
 */
export type ActivityLookUpList = FetchActivityBookingsType[];

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

/**
 * Holds fixed charge detail.
 * @maxItems 4000
 */
export type PrepaidCardsType = PrepaidCardType[];

/** Holds fixed charge information. */
export interface PrepaidCardType {
  /**
   * Hotel context for the Reservations.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The unique ID of the reservation to which this record applies. */
  reservationId?: ReservationId;
  /**
   * Family name, last name or Company Name.
   * @minLength 0
   * @maxLength 80
   */
  name?: string;
  /**
   * Given name, first name or names.
   * @minLength 0
   * @maxLength 80
   */
  firstName?: string;
  /** Card / Account holder name ID */
  profileId?: ProfileId;
  /**
   * Prepaid card / account number.
   * @minLength 0
   * @maxLength 80
   */
  cardNo?: string;
  /**
   * Masked Prepaid card / account number.
   * @minLength 0
   * @maxLength 80
   */
  cardNumberMasked?: string;
  /** Prepaid Card Amount. */
  amount?: CurrencyAmountType;
  /**
   * Prepaid card pin code.
   * @minLength 0
   * @maxLength 10
   */
  pinCode?: string;
  /** The unique ID for the Interface. */
  interfaceId?: UniqueIDType;
  /** Prepaid Card details from vendor. */
  cardDetails?: PrepaidCardDetailsType;
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
  /** Indicates a gift card type. */
  giftCard?: boolean;
}

/** Prepaid Card Details. */
export interface PrepaidCardDetailsType {
  /**
   * Holds fixed charge detail.
   * @format date
   * @maxLength 8
   */
  initialLoadDate?: string;
  /**
   * Holds fixed charge detail.
   * @format date
   * @maxLength 8
   */
  activateDate?: string;
  /** Holds fixed charge detail. */
  initialCreditTotal?: CurrencyAmountType;
  /** Holds fixed charge detail. */
  creditTotal?: CurrencyAmountType;
  /** Holds fixed charge detail. */
  debitTotal?: CurrencyAmountType;
  /** Holds fixed charge detail. */
  reservedTotal?: CurrencyAmountType;
  /** Holds fixed charge detail. */
  balanceTotal?: CurrencyAmountType;
  /**
   * Holds fixed charge detail.
   * @format date
   * @maxLength 8
   */
  validUntilDate?: string;
  /**
   * Holds fixed charge detail.
   * @format date
   * @maxLength 8
   */
  expiredDate?: string;
  /**
   * Holds fixed charge detail.
   * @maxItems 4000
   */
  transactions?: PrepaidCardTransactionType[];
}

/** Prepaid Card transaction. */
export interface PrepaidCardTransactionType {
  /** Transaction type enumeration. */
  transactionType?: PrepaidCardTrxTypeType;
  /**
   * Transaction number of the Prepaid card transaction.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /** Transaction number of the Prepaid card transaction. */
  transactionNo?: number;
  /** Prepaid Card Amount. */
  amount?: CurrencyAmountType;
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

/** Reload transaction. */
export enum PrepaidCardTrxTypeType {
  Activate = 'Activate',
  Cancel = 'Cancel',
  Cashout = 'Cashout',
  Inquiry = 'Inquiry',
  Issue = 'Issue',
  Redeem = 'Redeem',
  Reload = 'Reload',
}

/** A ReservationPackageType class. */
export interface ReservationPackageType {
  /** Package information from configuration. */
  packageHeaderType?: PackageCodeHeaderType;
  /**
   * A HotelPackageSchedule type.
   * @maxItems 4000
   */
  scheduleList?: ReservationPackageScheduleType[];
  /** The changed dates(Start and End dates) for this product. */
  newTimeSpan?: TimeSpanType;
  /** Package consumption details. Includes information for quantity , allowance etc. */
  consumptionDetails?: PackageConsumptionType;
  /**
   * Package code. This is the unique code used for the package and is a required element.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /** Reservation Package Opera Internal Unique Id. This is the unique Id used for this reservation package. */
  internalID?: number;
  /**
   * The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record on the reservation.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Required value when changing a reservation package. If the original start date was null, then null is required.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * Required value when changing a reservation package. If the original end date was null, then null is required.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /**
   * Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record .
   * @minLength 0
   * @maxLength 20
   */
  packageGroup?: string;
  /** Indicates if the source of the product is Rate header, Rate Detail or Reservation. For new development this field is to be used for passing the product scource */
  source?: ProductSourceType;
  /**
   * This is the Award code used to redeem the package if the package is a redemption package.
   * @minLength 0
   * @maxLength 20
   */
  awardCode?: string;
  /** Indicates the points used to redeem the redemption package. */
  points?: number;
}

/** A HotelPackageSchedule type. */
export interface ReservationPackageScheduleType {
  /**
   * The date the package was used or can be used.
   * @format date
   * @maxLength 8
   */
  consumptionDate?: string;
  /** The price per unit of the package. */
  unitPrice?: number;
  /** The total quantity of the package for this date, calculated based on the calculation rule as defined in the PackageHeaderType */
  totalQuantity?: number;
  /** Computed Reservation Price of the package. Calculation Will Be Performed Based On Other Parameters. */
  computedResvPrice?: number;
  /** The allowance per unit of the package. */
  unitAllowance?: number;
  /**
   * The date of the Reservation when this package is applicable. This can be different from the date the package will be consumed. Example are next day packages. Reservation date is when the package is applied to the guest and Consumption date is when the guest can consume the package.
   * @format date
   * @maxLength 8
   */
  reservationDate?: string;
  /** The original price per unit of the package if it has been changed. */
  originalUnitPrice?: number;
  /** The original allowance per unit of the package if it has been changed. */
  originalUnitAllowance?: number;
}

/** Defines a collection of inventory items attached to a reservation. */
export interface ResInventoryItemsType {
  /**
   * Inventory item attached to a reservation.
   * @maxItems 4000
   */
  item?: ResInventoryItemType[];
  /**
   * The Item Class ID which the item belongs to.
   * @minLength 0
   * @maxLength 20
   */
  itemClassCode?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ResInventoryItemType {
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
  /** Specifies Items and its attributes. When used for data manipulation for Items setup on reservation, etc only code is considered. Other Attributes are for used to provide information during fetch operation. */
  item?: ItemInfoType;
  /** Number of items booked. */
  quantity?: number;
  /** Begin and end date and time of the items applicability. */
  timeSpan?: DateRangeType;
  /** If exists specifies whether the item is setup due to a Rate Plan, Package or a Block. */
  source?: ResInventoryItemSourceType;
}

/** Defines whether the item is setup due to a Rate Plan, Package or a Block. */
export interface ResInventoryItemSourceType {
  /**
   * Rate Plan Code, If populated specifies that the item is setup due to a Rate Plan.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * Package Code, If populated specifies that the item is setup due to a Package.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /** Block Unique ID, If populated specifies that the item is setup due to a Block. */
  blockId?: BlockId;
  /** If true, it implies that the item has been attached to the reservation as part of a Welcome Offer */
  welcomeOffer?: boolean;
  /** Source Reservation Package Opera Internal Unique Id. This is the unique Id used for the reservation package associated with this item. */
  packageInternalID?: number;
}

/** Detailed information of the memberships. */
export interface MembershipType {
  /** Additional comments regarding to the membership. */
  comment?: ParagraphType;
  /** Card Number of the membership. */
  newMembershipNumber?: string;
  /** Name to be displayed on the membership card. */
  nameOnCard?: string;
  /** Description of the membership program. */
  programDescription?: string;
  /** Indicates the membership level. */
  membershipLevel?: string;
  /**
   * Indicates the membership level description.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevelDescription?: string;
  /** Indicates the membership class. */
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
  /** Value Rating Type Description for this membership. */
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
  /** Card Number of the membership. */
  membershipId?: string;
  /** Type of membership. */
  membershipType?: string;
  /**
   * Indicator if Membership is a Primary Membership.
   * @minLength 0
   * @maxLength 1
   */
  primaryMembershipYn?: string;
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
   * @maxLength 8
   */
  signupDate?: string;
  /**
   * Indicates the starting date.
   * @format date
   * @maxLength 8
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   * @maxLength 8
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
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
}

/** Detailed information of the memberships. */
export interface ReservationMembershipType {
  /** Additional comments regarding to the membership. */
  comment?: ParagraphType;
  /** Card Number of the membership. */
  newMembershipNumber?: string;
  /** Name to be displayed on the membership card. */
  nameOnCard?: string;
  /** Description of the membership program. */
  programDescription?: string;
  /** Indicates the membership level. */
  membershipLevel?: string;
  /**
   * Indicates the membership level description.
   * @minLength 0
   * @maxLength 200
   */
  membershipLevelDescription?: string;
  /** Indicates the membership class. */
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
  /** Value Rating Type Description for this membership. */
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
  /** Card Number of the membership. */
  membershipId?: string;
  /** Type of membership. */
  membershipType?: string;
  /**
   * Indicator if Membership is a Primary Membership.
   * @minLength 0
   * @maxLength 1
   */
  primaryMembershipYn?: string;
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
   * @maxLength 8
   */
  signupDate?: string;
  /**
   * Indicates the starting date.
   * @format date
   * @maxLength 8
   */
  effectiveDate?: string;
  /**
   * Indicates the ending date.
   * @format date
   * @maxLength 8
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
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
  linkMembership?: boolean;
  primary?: boolean;
}

/**
 * Defines reservation payment methods.
 * @maxItems 4000
 */
export type ReservationPaymentMethodsType = ReservationPaymentMethodType[];

/**
 * A routing info object can either be of type Folio OR of type Room with its corresponding instructions.
 * @maxItems 4000
 */
export type RoutingInfoListType = RoutingInfoType[];

/** A routing info object can either be of type Folio OR of type Room with its corresponding object. */
export interface RoutingInfoType {
  /** Folio routing type. */
  folio?: {
    /** Guest details */
    guestInfo?: {
      /** Unique identifiers for the Profile for both internal and external systems. */
      profileIdList?: ProfileIdList;
    };
    /** Payee information. */
    payeeInfo?: PayeeInfoType;
    /**
     * Accounts Receivable.
     * @minLength 0
     * @maxLength 20
     */
    aRNumber?: string;
    /**
     * Set of routing instructions associated to this routing type.
     * @maxItems 4000
     */
    instructions?: RoutingInstructionType[];
    folioWindowNo?: number;
    /** @maxLength 2000 */
    paymentMethod?: string;
  };
  /** Room routing type. */
  room?: {
    /**
     * Room number to route the instructions.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** Guest unique identifier to which the instruction will be routed. */
    guestNameId?: UniqueIDType;
    /**
     * Display Name for the guest.
     * @minLength 0
     * @maxLength 80
     */
    guestDisplayName?: string;
    /** Reservation name id to which the instruction will be routed. */
    reservationNameId?: UniqueIDType;
    /**
     * Set of routing instructions associated to this routing type.
     * @maxItems 4000
     */
    instructions?: RoutingInstructionType[];
  };
  /** Comp Accounting Routing Info */
  comp?: {
    /** Type for the details of a Comp Routing Request */
    compRequestInfo?: CompRoutingRequestType;
    /** Payee information. */
    payeeInfo?: PayeeInfoType;
    /**
     * Set of routing instructions associated to this routing type.
     * @maxItems 4000
     */
    instructions?: RoutingInstructionType[];
    folioWindowNo?: number;
  };
  /** Comp Accounting Request routing */
  request?: {
    /** Type for the details of a Comp Routing Request */
    compRequestInfo?: CompRoutingRequestType;
    /**
     * Set of routing instructions associated to this routing type.
     * @maxItems 4000
     */
    instructions?: RoutingInstructionType[];
  };
  /** On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions. */
  refreshFolio?: boolean;
}

/** Routing limit can be one of the three: Credit Limit, Percetage Limit, Covers Limit */
export interface RoutingInstructionType {
  /** Duration of this instruction. */
  duration?: {
    /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
    timeSpan?: TimeSpanType;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    /** Flag to indicate if the routing instruction is a daily instruction. */
    daily?: boolean;
  };
  /** Set of Transaction Codes configured in this time span. */
  transactionCodes?: TrxCodesInfoType;
  /** Set of Billing Instructions configured in this time span. */
  billingInstructions?: BillingInstructionsType;
  /** Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. */
  creditLimit?: number;
  /** The routing limit percentage allowed for this routing instruction. */
  percentageLimit?: number;
  /** Number of covers for this routing instruction. */
  covers?: number;
  /** Amount of Credit used for this routing instruction. */
  limitUsed?: number;
  /** Internal Routing Link Id identifier to which limit group the instruction belongs. */
  routingLinkId?: UniqueIDType;
}

/** Type for the details of a Comp Routing Request */
export interface CompRoutingRequestType {
  /** User who requested the Comp Routing */
  requestedBy?: UserInfoType;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** User information of user who declined comp routing request */
  declinedBy?: UserInfoType;
  /** Comp routing status */
  status?: CompRoutingStatusType;
}

/** Opera User Information */
export interface UserInfoType {
  /** User Id of the Opera User */
  userId?: number;
  /**
   * Name of the Opera User
   * @minLength 0
   * @maxLength 40
   */
  userName?: string;
}

/** Status which indicates that the Request of Comp Routing was declined */
export enum CompRoutingStatusType {
  Request = 'Request',
  Comp = 'Comp',
  Declined = 'Declined',
}

/** Linked Reservations. */
export interface LinkedReservationsInfoType {
  /** @maxItems 4000 */
  reservationInfo?: LinkedReservationInfoType[];
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

export interface LinkedReservationInfoType {
  /** Unique Id that references an object uniquely in the system. */
  reservationIdList?: ReservationIdList;
  /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
  timeSpan?: TimeSpanType;
  /**
   * @minLength 0
   * @maxLength 40
   */
  givenName?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  surname?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  title?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  room?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** A monetary value expressed with a currency code. */
  rate?: CurrencyAmountType;
  /** Validations type record returned after Validations are done. */
  guarantee?: ResGuaranteeType;
  /** A monetary value expressed with a currency code. */
  balance?: CurrencyAmountType;
  /** Key information about the block for the linked reservation. */
  reservationBlock?: ReservationBlockType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  displayColor?: string;
  /** Collection of allowed actions for the linked reservation. */
  allowedActions?: ReservationAllowedActionsType;
  /** Indicates the Actual status of the reservation. */
  reservationStatus?: PMSResStatusType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Enumeration of the different Linked Reservation Types. */
  linkReservationType?: LinkedReservationType;
  /** This attribute is to verify if reverse check-in is allowed for the reservation. */
  reverseCheckInAllowed?: boolean;
  /** This attribute is to verify if room number is locked for the reservation. When true the room number cannot be changed */
  roomNumberLocked?: boolean;
  /** This attribute checks if rate is suppressed or not in order to properly show strike through. */
  suppressRate?: boolean;
}

/** Enumeration of the different Linked Reservation Types. */
export enum LinkedReservationType {
  Linked = 'Linked',
  Shared = 'Shared',
  Default = 'Default',
}

/** Information regarding catering event and catering revenue type associated to the reservation. */
export interface CateringResInfoType {
  /** Unique ID on a catering event associated to the reservation. */
  eventId?: EventId;
  /** Catering revenue type associated to the reservation. */
  revenueType?: string;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface EventId {
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

/** Statistical Classification information for the reservation. */
export interface ResStatClassificationType {
  /**
   * Room Type used to calculate statistics for export(DRS).
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Rate Tier used calculate statistics for export(DRS). */
  rateTier?: number;
}

/**
 * List of alerts.
 * @maxItems 4000
 */
export type AlertsType = AlertType[];

export interface AlertType {
  /**
   * Code identifying the type of alert.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** Indicate whether the alert is a global that is automatically and dynamically attached to all reservations that meet the alert criteria. */
  global?: boolean;
  /** The Area where the alert will be attached and shown. */
  area?: AlertAreaType;
  /** The alert message. */
  description?: string;
  /** Notify by showing the alert on the screen */
  screenNotification?: boolean;
  /** Notify by sending the message to the printer. */
  printerNotification?: boolean;
  /** Printer used to print the alert notification. */
  printerName?: string;
  /** The module id of the report. This is used to printer the alert. */
  reportId?: UniqueIDType;
  /** Report name of the report type. */
  reportName?: string;
  /**
   * Report description. Mainly used for as a parameter for printing the alerts.
   * @minLength 0
   * @maxLength 1000
   */
  reportDescription?: string;
  /** Contains information regarding the guest. */
  guestInfo?: AlertGuestInfoType;
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
  /** Contains information regarding welcome offer. */
  welcomeOffer?: WelcomeOfferType;
  /** Indicates the Reservation Stop Check In/Check Out Global Alert. */
  stopCheckInCheckOut?: boolean;
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

export enum AlertAreaType {
  CheckIn = 'CheckIn',
  CheckOut = 'CheckOut',
  Reservation = 'Reservation',
  Billing = 'Billing',
  InHouse = 'InHouse',
}

export interface AlertGuestInfoType {
  /**
   * Guest Name.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Membership information of the guest. */
  membership?: MembershipType;
  /** VIP status of the guest. */
  vipStatus?: VIPStatusType;
  /**
   * Hotel code of the last stay location of the guest.
   * @minLength 0
   * @maxLength 20
   */
  lastHotelCode?: string;
  /**
   * Last stay date at the property.
   * @format date
   * @maxLength 8
   */
  lastStayDate?: string;
  /** Holds total number of days that the guest have stayed in the property. */
  totalStay?: number;
  /** Additional alert information regarding the membership of the guest. */
  comments?: string;
  /** Additional alert information regarding the guest. */
  preference?: string;
  /** Additional mandatory alert information regarding the guest preferences. */
  preference2?: string;
  /** Holds the language preferred by the guest. */
  guestPreferredLanguage?: LanguageType;
  /** Holds total number of days that the guest have stayed in the properties for the same brand. */
  totalBrandStay?: number;
  /**
   * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
   * @format date
   * @maxLength 8
   */
  birthDate?: string;
  /** Indicates the date of birth as masked. */
  birthDateMasked?: string;
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

/**
 * @minLength 0
 * @maxLength 40
 */
export type LanguageType = string;

export interface WelcomeOfferType {
  /**
   * Determines the status of the welcome offer.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /** Determines the welcome offer option selected while availing the welcome offer. */
  type?: WelcomeOfferOptionsType;
}

/** None of the Welcome Offer option is selected. */
export enum WelcomeOfferOptionsType {
  BonusPoints = 'BonusPoints',
  Ecoupons = 'Ecoupons',
  Items = 'Items',
  PostIt = 'PostIt',
  NotSelected = 'NotSelected',
}

/**
 * List of Reservation Traces.
 * @maxItems 4000
 */
export type HotelReservationTracesType = HotelReservationTraceType[];

/** Extended Trace object to hold information for a reservation. */
export interface HotelReservationTraceType {
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
 * List of confirmation letters.
 * @maxItems 4000
 */
export type ConfirmationsType = ConfirmationType[];

export interface ConfirmationType {
  /** Receipient's information. */
  recipientInfo?: ConfRecipientInfoType;
  /** The status of the confirmation letter sent via the specified CommunicationType. */
  deliveryInfo?: ConfDeliveryInfoTypes;
  /** Confirmation style. */
  confirmationStyleInfo?: ConfirmationStyle;
  /**
   * Senders Email address.
   * @minLength 0
   * @maxLength 40
   */
  fromEmail?: string;
  /** Flag to indicate sending confirmation letter as text message. */
  sendTextMessage?: boolean;
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

export interface ConfRecipientInfoType {
  /** name id of the recipient. */
  profileId?: ProfileId;
  /** Last Name of recipient. */
  formerName?: ProfileNameType;
  /** id of the address where to send confirmation letter. */
  addressInfo?: AddressInfoType;
  /** id of the Email where to send confirmation letter. */
  emailInfo?: EmailInfoType;
  /** id of the Fax where to send confirmation letter. */
  faxInfo?: TelephoneInfoType;
  /** id of the Mobile where to send confirmation letter. */
  telephoneInfo?: TelephoneInfoType;
  /** The types of Profile handled by the web service. */
  recipientType?: ProfileTypeType;
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

/**
 * List of confirmation letter delivery methods and their status
 * @maxItems 4
 */
export type ConfDeliveryInfoTypes = ConfDeliveryInfoType[];

export interface ConfDeliveryInfoType {
  /** CommunicationType through which the confirmation letter was sent. */
  communicationType?: ConfDeliveryMethod;
  /** Status of last sent confirmation. */
  lastStatus?: SentConfirmationStatus;
  /**
   * Date of last attempt to send confirmation letter.
   * @format date-time
   */
  lastAttempted?: string;
  /** Number of success letter sent. */
  successfulTries?: number;
}

export enum ConfDeliveryMethod {
  Print = 'Print',
  Email = 'Email',
  Fax = 'Fax',
  Text = 'Text',
  NotConfigured = 'NotConfigured',
}

export enum SentConfirmationStatus {
  Pending = 'Pending',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
}

export interface ConfirmationStyle {
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
  /** Name of the confirmation letter style. */
  style?: string;
}

/**
 * Holds call information.
 * @maxItems 4000
 */
export type CallHistoryType = CallType[];

/** Holds call information. */
export interface CallType {
  /** Call Time Span. Start Date and End Date is used for the Call duration. */
  dateTimeSpan?: DateTimeSpanType;
  /** Holds caller information. */
  caller?: CallerType;
  /** Holds Reservation Id and Hotel Code. */
  reservation?: {
    /** Holds Reservation related Ids. */
    reservationIdList?: ReservationIdList;
    /**
     * Holds Hotel Code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
  };
  /**
   * Call turn away code.
   * @minLength 0
   * @maxLength 20
   */
  turnawayCode?: string;
  /**
   * Call comments.
   * @minLength 0
   * @maxLength 200
   */
  comments?: string;
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

/** Holds caller information. */
export interface CallerType {
  /**
   * Caller First Name.
   * @minLength 0
   * @maxLength 280
   */
  givenName?: string;
  /**
   * Caller Last Name.
   * @minLength 0
   * @maxLength 80
   */
  surname?: string;
  /**
   * Caller Phone Number.
   * @minLength 0
   * @maxLength 80
   */
  phone?: string;
  /**
   * Caller Email.
   * @minLength 0
   * @maxLength 80
   */
  email?: string;
  /**
   * Caller Fax Number.
   * @minLength 0
   * @maxLength 80
   */
  fax?: string;
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

/**
 * Holds fixed charge detail.
 * @maxItems 4000
 */
export type FixedChargesType = FixedChargeType[];

/** Holds fixed charge information. */
export interface FixedChargeType {
  /** Holds schedule of fixed charge. */
  schedule?: FixedChargeScheduleType;
  /** Holds specific details of fixed charge. */
  charge?: FixedChargeDetailType;
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

/** Holds schedule of fixed charge. */
export interface FixedChargeScheduleType {
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
  /** Frequency of a fixed charge. */
  frequency?: FixedChargeFrequencyType;
  /**
   * Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly.
   * @minLength 0
   * @maxLength 3
   */
  dayToExecute?: string;
  /**
   * Date of when to execute yearly fixed charge. Applicable when frequency is Yearly.
   * @format date
   * @maxLength 8
   */
  dateToExecute?: string;
}

/** Yearly. */
export enum FixedChargeFrequencyType {
  O = 'O',
  D = 'D',
  W = 'W',
  M = 'M',
  Q = 'Q',
  Y = 'Y',
}

/** Fixed charge amount could be specified by flat fee or be a percentage of the rate amount. */
export interface FixedChargeDetailType {
  /** Transaction code and description of a fixed charge. */
  transaction?: CodeDescriptionType;
  /** Quantity of the product. */
  quantity?: number;
  /** Price of the product. */
  chargeAmount?: CurrencyAmountType;
  /**
   * Percentage of the rate amount.
   * @min 0
   * @max 100
   */
  percent?: number;
  /**
   * Additional information regarding the fixed charge.
   * @minLength 0
   * @maxLength 2000
   */
  supplement?: string;
  /** Holds related article code and description. */
  article?: CodeDescriptionType;
  /** Holds number of comp or cash room night to allocate. */
  roomNights?: number;
}

/**
 * Holds the Message Information
 * @maxItems 4000
 */
export type GuestMessagesType = GuestMessageType[];

/** Holds the Message information for a Reservation */
export interface GuestMessageType {
  /** Holds the Message Information */
  message?: MessageType;
  /** Holds the Delivery Method Information */
  delivery?: MessageDeliveryType;
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

/** Holds the Message Information */
export interface MessageType {
  /**
   * Message Content
   * @minLength 0
   * @maxLength 2000
   */
  messageText?: string;
  /**
   * Date the message was created
   * @format date-time
   */
  messageDate?: string;
  /** Type of message (Voice/Text) */
  typeOfMessage?: TypeOfMessageType;
  /**
   * Recipient of the Message
   * @minLength 0
   * @maxLength 80
   */
  recipient?: string;
  /**
   * User who created the Message
   * @minLength 0
   * @maxLength 40
   */
  operator?: string;
}

/** The type of Message for Guest Messages. */
export enum TypeOfMessageType {
  Tm = 'Tm',
  Vm = 'Vm',
}

/** Holds the Delivery Information of the Message */
export interface MessageDeliveryType {
  /** Status of the Message (Received or Not Received) */
  deliveryStatus?: MessageStatusType;
  /**
   * Date the message has been delivered (marked as received)
   * @format date-time
   */
  deliveryDate?: string;
  /**
   * User who delivered the message (who marked message as received)
   * @minLength 0
   * @maxLength 40
   */
  deliveredBy?: string;
  /**
   * Date when message has been printed
   * @format date-time
   */
  printDate?: string;
  /**
   * Date when message has been sent via SMS
   * @format date-time
   */
  textMessageSentDate?: string;
  /**
   * User who sent the message
   * @minLength 0
   * @maxLength 40
   */
  textMessageSentBy?: string;
  /** User Id of who sent the message */
  textMessageSentById?: number;
  /**
   * Number in which the message is to be sent.
   * @minLength 0
   * @maxLength 2000
   */
  textMessageRecipientNo?: string;
}

/** Status of the Message. */
export enum MessageStatusType {
  Mr = 'Mr',
  Nr = 'Nr',
}

/**
 * List of override actions done.
 * @maxItems 4000
 */
export type OverrideInstructionsType = OverrideInstructionType[];

/** Type for Overrides. Contains information for the override action performed while booking a reservation. */
export interface OverrideInstructionType {
  /**
   * The description of the restriction for which the override was done.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * The date when the override was done.
   * @format date
   * @maxLength 8
   */
  date?: string;
  /**
   * The type of override done. If done for Availability, then it will be AVAILABILITY.
   * @minLength 0
   * @maxLength 80
   */
  type?: string;
  /**
   * Login ID of the user who performed the override.
   * @minLength 0
   * @maxLength 40
   */
  userId?: string;
}

/**
 * Collection of ECouponType object.
 * @maxItems 4000
 */
export type ECouponsType = ECouponType[];

/** Reservation eCoupon Type Information. */
export interface ECouponType {
  /** ECouponID to attach the eCoupon to Reservation. */
  eCouponId?: UniqueIDType;
  /**
   * Code to attach the eCoupon to Reservation.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Description of the eCoupon attached to the Reservation.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Determines whether the eCoupon is attached through the Rate Code or not. */
  autoAttached?: boolean;
  /** Assigned Quantity for the eCoupon when attached to Reservation. */
  issuedQuantity?: number;
  /** Used Quantity of the eCoupon for the Reservation. */
  usedQuantity?: number;
  /**
   * Reason for attaching/modifing eCoupon.
   * @minLength 0
   * @maxLength 4000
   */
  reason?: string;
  /**
   * Rate plan of the attached eCoupon to Reservation.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /** Determines whether this eCoupon is eligible for welcome offer or not. */
  welcomeOffer?: boolean;
}

/**
 * List of Transaction Diversion rules.
 * @maxItems 4000
 */
export type ReservationTransactionDiversionsType = ReservationTransactionDiversionType[];

/** A Transaction Diversion Rule Type */
export interface ReservationTransactionDiversionType {
  /**
   * VIP code to consider while applying Diversion Instruction.
   * @minLength 0
   * @maxLength 20
   */
  vipCode?: string;
  /** Membership type to consider while applying Diversion Instruction. */
  membership?: MembershipTypeLevelType;
  /**
   * Room number to receive all the diverted transactions configured for this instruction.
   * @minLength 0
   * @maxLength 20
   */
  targetRoom?: string;
  /**
   * Collection of Transaction Code List
   * @maxItems 4000
   */
  transactionCodes?: CodeDescriptionType[];
  /**
   * User defined message for the Transaction Diversion Rule.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Level of the Transaction Diversion rule that can be Property or Reservation. */
  level?: TransactionDiversionRuleLevelType;
  /** Threshold Details related to the Transaction diversion rule. */
  thresholds?: ThresholdDetailsType;
  /** Transaction Diversion Rule Types */
  type?: TransactionDiversionRuleTypeType;
  /**
   * Hotel code with which Transaction Diversion Rule is associated.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Transaction Diversion Code
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /** User configured Sequence number. */
  displaySequence?: number;
  /** Indicator that tells whether the transaction diversion rule is active or not. */
  inactive?: boolean;
  /** The Note details related to the Transaction Diversion Rule. */
  notes?: CommentInfoType;
  /** Transaction diversions that are posted. */
  posted?: number;
  /** Transaction diversions that are diverted . */
  diverted?: number;
  /** Collection of daily details of a Transaction diversion rule for a particular reservation. */
  dailyDetails?: TransactionDiversionDailyDetailsType;
}

export interface MembershipTypeLevelType {
  /**
   * Code type for Rule Details
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * Description type for Rule Details
   * @minLength 0
   * @maxLength 20
   */
  level?: string;
}

/** Reservation level. */
export enum TransactionDiversionRuleLevelType {
  Property = 'Property',
  Reservation = 'Reservation',
}

/** Type for the threshold elements. */
export interface ThresholdDetailsType {
  /** Diversion entity type associated with the charge for the transaction diversion rule . */
  entity?: EntityType;
  /** Diversion scope for the transaction diversion rule. */
  scope?: ScopeType;
  /** Minimum required number of quantities, counts or minutes that must be posted. */
  minRequired?: number;
  /** The number of quantities, counts or minutes for which transaction diversion is allowed . */
  complimentary?: number;
  /** Configuring this flag to be TRUE will make the thresholds editable. */
  isEditable?: boolean;
}

/** Indicates the rule is based on Minutes associated with the charge. */
export enum EntityType {
  ThresholdCount = 'ThresholdCount',
  ThresholdQuantity = 'ThresholdQuantity',
  ThresholdMinutes = 'ThresholdMinutes',
}

/** Minimum required and complimentary values are applicable Per Stay. */
export enum ScopeType {
  PerDay = 'PerDay',
  PerStay = 'PerStay',
}

/** The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation */
export enum TransactionDiversionRuleTypeType {
  Vip = 'Vip',
  Membership = 'Membership',
}

/**
 * List of daily details for Transaction Diversion rule.
 * @maxItems 4000
 */
export type TransactionDiversionDailyDetailsType = TransactionDiversionDailyDetailType[];

/** List of daily details for Transaction Diversion rule. */
export interface TransactionDiversionDailyDetailType {
  /** Transaction diversion rules that are posted. */
  posted?: number;
  /** Transaction diversion rules that are diverted . */
  diverted?: number;
  /**
   * Daily details Date about when the rules are posted or diverted.
   * @format date
   * @maxLength 8
   */
  date?: string;
}

/**
 * Collection of TicketType objects.
 * @maxItems 4000
 */
export type TicketsType = TicketType[];

/** Reservation Ticket Type Information. */
export interface TicketType {
  /** Internal Unique ID. */
  ticketId?: UniqueIDType;
  /**
   * Package Code.
   * @minLength 0
   * @maxLength 20
   */
  packageCode?: string;
  /** Reference to the reservation product. */
  reservationProductId?: UniqueIDType;
  /** Ticket number. */
  ticketNumber?: UniqueIDType;
  /**
   * Package description.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Tickets issue date.
   * @format date
   * @maxLength 8
   */
  issueDate?: string;
  /** Tickets price. */
  price?: number;
  /**
   * Tickets comsumption date.
   * @format date
   * @maxLength 8
   */
  consumptionDate?: string;
  /**
   * The Rate Code to which tickets belong to.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /** Number of tickets used to create multiple tickets. */
  quantity?: number;
  /**
   * Free text field for reference information.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * The Status Code for outbound WS call.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * The Status Description for outbound WS call.
   * @minLength 0
   * @maxLength 2000
   */
  statusDescription?: string;
}

/**
 * Collection of ECertificateType object.
 * @maxItems 4000
 */
export type ReservationECertificatesType = ReservationECertificateType[];

/** Reservation ECertificate Type Information. */
export interface ReservationECertificateType {
  /**
   * ECertificate Number for the reservation.
   * @minLength 0
   * @maxLength 40
   */
  eCertificateNo?: string;
  /** ECertificate status for the reservation. */
  actionType?: RequestActionType;
  /** ECertificate Type where value can be PROMOTION,AWARD,BENEFIT and OTHER */
  eCertificateType?: ECertificateClassficationType;
}

export enum RequestActionType {
  Create = 'Create',
  Remove = 'Remove',
  Query = 'Query',
}

/** Enumeration of the different type of Ecertificate. */
export enum ECertificateClassficationType {
  Promotion = 'Promotion',
  Award = 'Award',
  Benefit = 'Benefit',
  Other = 'Other',
}

/** Detailed information returned during name value search. */
export interface NameValueDetailType {
  /** Name Value List. */
  nameValues?: NameValuesType;
}

/**
 * List of name value pairs.
 * @maxItems 4000
 */
export type NameValuesType = NameValueType[];

/** Contains name value pair. */
export interface NameValueType {
  /**
   * Contains unique key which represents for record field.
   * @minLength 0
   * @maxLength 100
   */
  name?: string;
  /**
   * Contains value for the record/column.
   * @minLength 0
   * @maxLength 4000
   */
  value?: string;
  /**
   * Contains format string for values.
   * @minLength 0
   * @maxLength 100
   */
  formatString?: string;
  /** Contains data type for values. */
  dataType?: NameValueDataTypeType;
  /** Contains Origin information. */
  origin?: NameValueOriginType;
  /** Contains value(s) to identify the reports to include the collected information in e.g. PFH=Print Folio Header, PFD=Print Folio Detail. */
  usageInstruction?: CodeListType;
}

export enum NameValueDataTypeType {
  String = 'String',
  Number = 'Number',
  Date = 'Date',
  Datetime = 'Datetime',
  Time = 'Time',
  Integer = 'Integer',
}

/** Contains origin details. */
export interface NameValueOriginType {
  /** Contains origin i.e. Reseravtion, Profile, Folio or FinTrx. */
  originName?: NameValueModuleType;
  /**
   * Contains destination column for Origin.
   * @minLength 0
   * @maxLength 200
   */
  destination?: string;
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
  /**
   * Used to identify the source of the identifier (e.g., IATA, ABTA).
   * @minLength 0
   * @maxLength 80
   */
  idContext?: string;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export enum NameValueModuleType {
  Reservation = 'Reservation',
  Folio = 'Folio',
  Profile = 'Profile',
  Fintrix = 'Fintrix',
}

/**
 * List of Custom Charge Exemptions.
 * @maxItems 4000
 */
export type CustomChargeExemptionsType = CustomChargeExemptionType[];

/** Contains custom charges exemption information. */
export interface CustomChargeExemptionType {
  /** Contains exemption code and description. */
  customChargesExemption?: CodeDescriptionType;
  /** Contains exemption quantity for the stay. When this value is configured, daily exemption quantities are not permitted. */
  customChargeQuantity?: CustomChargeQuantityType;
  /** Contains exemption detail information for each date. */
  customChargeDates?: CustomChargeExemptionDatesType;
  /** Contains list of dates which are not valid for custom charge exemptions. */
  excludedDates?: ExcludedDatesType;
  /**
   * Exemption Percentage
   * @min 0
   * @max 100
   */
  percentage?: number;
  /** Flag specifying if custom charge exemptions is property level or not. */
  propertyExemption?: boolean;
}

/** Contains quantity of custom charge exemptions. */
export interface CustomChargeQuantityType {
  /** Contains number of Custom Charge Exemption for a day. */
  quantity?: number;
  /** Indicates if Custom Charges Exemption information is editable. */
  available?: boolean;
}

/**
 * Contains List of Custom Charge Exemption information for a day.
 * @maxItems 4000
 */
export type CustomChargeExemptionDatesType = CustomChargeExemptionDateType[];

/** Contains Custom Charge Exemption information for a day. */
export interface CustomChargeExemptionDateType {
  /**
   * Contains Custom Charge Exemption date.
   * @format date
   * @maxLength 8
   */
  date?: string;
  /** Contains number of Custom Charge Exemption for a day. */
  quantity?: number;
}

/**
 * Contains list of dates which are valid for custom charge exemptions.
 * @maxItems 4000
 */
export type ExcludedDatesType = ExcludedDateType[];

/** Specifies all the enabled dates. */
export interface ExcludedDateType {
  /**
   * Contains exclusion date.
   * @format date
   * @maxLength 8
   */
  date?: string;
  /** Contains reason for exclusion. */
  reason?: ExclusionReasonType;
}

/** Custom Charge has already been Processed for this date within the reservation stay. */
export enum ExclusionReasonType {
  NotConfigured = 'NotConfigured',
  CustomChargeProcessed = 'CustomChargeProcessed',
}

/** Indicates the filter criteria to identify the block reservations that should implement the same changes as the reference reservation. */
export interface BlockReservationsCriteriaType {
  /**
   * Unique identifier for a block reservation.
   * @maxItems 4000
   */
  reservations?: BlockReservationId[];
  /** Apply changes to block reservations that are staying in the hotel within the date range specified. */
  stayOn?: {
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
  };
  /** Indicates the filter type that is used to identify the block reservations to which changes need to be applied. */
  applyChangesTo?: BlockApplyChangesToType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockReservationId {
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
  /** If this candidate reservation has an out of service room assigned to it, setting this flag to true will ignore the out of service check and apply changes to the reservation. */
  overrideOutOfService?: boolean;
}

/** Valid values are All, Same Arrival Date, Checked In, Selected, In House. */
export enum BlockApplyChangesToType {
  All = 'All',
  SameArrivalDate = 'SameArrivalDate',
  CheckedIn = 'CheckedIn',
  Reservations = 'Reservations',
  StayOn = 'StayOn',
}

/** Sending this instruction would skip applying credit card payment types to other block reservations. */
export enum ChangeBlockResvInstructionType {
  ApplyRateToAllRoomTypes = 'ApplyRateToAllRoomTypes',
  ExcludeCreditCardPaymentTypes = 'ExcludeCreditCardPaymentTypes',
}

/** The response object that contains the reservations that were changed for a block along with the status of each change. */
export interface ChangedBlockReservations {
  /** Contains details of the changed reservation along with a success or error message. */
  reservations?: ChangeBlockReservationType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information about the block reservation being changed. */
export interface ChangeBlockReservationType {
  /** Information about the current reservation. */
  reservationInfo?: ReservationInfoType;
  /** This element will be returned if the reservation was successfully changed. */
  success?: SuccessType;
  /** This element will be used to indicate the error messages due to which the reservation was not changed. */
  errors?: ErrorsType;
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

/** Response type for holding block reservations as part of the response to FetchBlockReservations operation. */
export interface BlockReservations {
  /** Collection of current and future block reservations. */
  reservations?: BlockReservationsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of block reservations. */
export interface BlockReservationsType {
  /** A collection of Reservation objects and Unique IDs of Reservation. */
  reservations?: HotelReservationsType;
  /** Contains a collection of groups of reservations that are shared with each other. */
  shares?: RoomingListSharesType;
}

/**
 * Contains a set of rooming list reservations that need to be shared.
 * @maxItems 4000
 */
export type RoomingListSharesType = RoomingListShareType[];

/** Specifies a group of two or more rooming list reservations that need to be created as shared reservations. */
export interface RoomingListShareType {
  /**
   * Contains information about the rooming list reservation that is to be shared and specifies the type of share that is to be created.
   * @maxItems 4000
   */
  reservation?: RoomingListShareReservationType[];
  /** Instruction to apply new effective rates to the reservations. */
  effectiveRates?: EffectiveRatesType;
  /** The Time Span(Arrival, Departure) for the reservation share set. */
  timeSpan?: TimeSpanType;
}

/** Contains the rooming list reservation that is to be shared and the information about the share type of this reservation. */
export interface RoomingListShareReservationType {
  /** Indicates the unique Reservation Id. */
  reservationId?: UniqueIDType;
  /** Type of rate division for the sharer reservation. Valid types are Full, Entire and Split. */
  typeOfRateAmount?: ShareDistributionInstructionType;
  /** Indicates if this reservation is a primary sharer. */
  primaryShare?: boolean;
  /** The Time Span(Arrival, Departure) for the reservation */
  timeSpan?: TimeSpanType;
}

/**
 * Collection of effective rate amount per guest on specific dates.
 * @maxItems 4000
 */
export type EffectiveRatesType = EffectiveRateType[];

/** Effective rate amount per guest on specific dates. */
export interface EffectiveRateType {
  /** Rate amount for one person. */
  onePersonRate?: number;
  /** Rate amount for two persons. */
  twoPersonRate?: number;
  /** Rate amount for three persons. */
  threePersonRate?: number;
  /** Rate amount for four persons. */
  fourPersonRate?: number;
  /** Rate amount for five persons. */
  fivePersonRate?: number;
  /** Rate amount for each extra person. */
  extraPersonRate?: number;
  /** Rate amount for each extra Child. */
  extraChildRate?: number;
  /** Rate amount for one Child. */
  oneChildRate?: number;
  /** Rate amount for two Children. */
  twoChildrenRate?: number;
  /** Rate amount for three Children. */
  threeChildrenRate?: number;
  /** Rate amount for four Children. */
  fourChildrenRate?: number;
  /** Collection of rate amount by age bracket. */
  rateByAgeBuckets?: RateByAgeBucketsType;
  /** Minimum number of children needed to get free stay. */
  minimumChildrenForFreeStay?: number;
  /** The number of award points required for applying this rate plan schedule. */
  pointsRequired?: number;
  /** true if floor amount needs to be override */
  overrideFloorAmount?: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  numberOfRooms?: number;
  /** Rate amount Before Tax. */
  amountBeforeTax?: number;
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

/**
 * Rate amount by age bucket.
 * @maxItems 3
 */
export type RateByAgeBucketsType = RateByAgeBucketType[];

/** Rate amount by age bucket. */
export interface RateByAgeBucketType {
  /** Rate amount by age bucket. */
  rateAmount?: number;
  /** Minimum age for age bucket. */
  minimumAge?: number;
  /** Maximum age for age bucket. */
  maximumAge?: number;
}

/** Response for FetchBlockRestrictions operation. */
export interface BlockRestrictions {
  /** List of block restrictions fetched based on supplied search criteria. */
  blockRestrictions?: BlockRestrictionsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request for CreateBlockRestriction operation. */
export interface BlockRestriction {
  /** Information required to create block restrictions. */
  createBlockRestriction?: CreateBlockRestrictionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Information for creating restrictions for a block. */
export interface CreateBlockRestrictionType {
  /** Block for which restriction is being applied to. */
  blockId?: BlockId;
  /**
   * Room type for which restriction is being applied.
   * @maxItems 4000
   */
  roomTypes?: string[];
  /** Indicates the type of the restriction. */
  restrictionStatus?: RestrictionStatusType;
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
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Request for clearAllRestrictions operation. */
export interface AllRestrictions {
  /** Hotel to which the block belongs to. */
  hotelId?: CodeType;
  /** Block ID for the block. */
  blockId?: BlockId;
  /**
   * Date for which restrictions should be cleared.
   * @format date
   */
  date?: string;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response Object of details fetched of revenue log changes of selected block */
export interface BlockRevenueChanges {
  /** Collection of Block Revenue Changes for selected Block */
  blockRevenueChanges?: BlockRevenueChangesDetailsType;
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
 * Block Revenue Changes Details
 * @maxItems 4000
 */
export type BlockRevenueChangesDetailsType = BlockRevenueChangesDetailType[];

export interface BlockRevenueChangesDetailType {
  /**
   * Change date.
   * @format date
   * @maxLength 8
   */
  changeDate?: string;
  /**
   * Date of stay.
   * @format date
   * @maxLength 8
   */
  stayDate?: string;
  /** Number of nights room is occupied. */
  nights?: number;
  /** Room revenue details. */
  roomRevenue?: CurrencyAmountType;
  /**
   * Unique Code to identify room status.
   * @minLength 0
   * @maxLength 20
   */
  roomStatus?: string;
  /**
   * Unique Code to identify the owner.
   * @maxItems 4000
   */
  blockOwner?: BlockOwnersType[];
  /** Log time and detiails of the user who made changes . */
  userDetails?: LogUserInfoType;
}

export interface LogUserInfoType {
  /** User details for Log changes */
  userInfo?: UserInfoType;
  /**
   * User Log Changes Time Stamp details
   * @format date-time
   */
  logDateTime?: string;
}

/** Request object for SetRoomTypeOrder operation. */
export interface RoomTypeOrder {
  /** Indicates block room type's display order. */
  roomTypes?: RoomOrderType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface RoomOrderType {
  /**
   * Hotel Code to which the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room Type.
   * @maxItems 4000
   */
  roomTypes?: string[];
  /**
   * Room Type.
   * @maxItems 4000
   */
  genericRoomTypes?: string[];
  /** Collection of unique block identifiers */
  blockIdList?: BlockIdList;
}

/** Response Object for FetchBlockRoomTypes operation. */
export interface BlockRoomTypes {
  /** Room types applicable for a block. */
  roomTypes?: RoomAllocationMasterInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creating rooming list reservations. The standard optional Opera Context element is also included. */
export interface RoomingList {
  /** Information of the block for which rooming list reservations are being created. */
  blockInfo?: RoomingListBlockInfoType;
  /** The collection of one or more block reservations to be created. */
  reservations?: RoomingListReservationsType;
  /** Contains a collection of groups of a reservations that are shared with each other. This contains the list of reservations that are to be created as part of this request. */
  shares?: RoomingListSharesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Block Information for create rooming list operation. */
export interface RoomingListBlockInfoType {
  /**
   * Hotel code for the block
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Collection of unique block identifiers */
  blockIdList?: BlockIdList;
}

/** If anyone or more reservations failed, then it specifies the associated error messages. */
export interface RoomingListReservationsType {
  /**
   * A collection of Block Rooming List Reservations.
   * @maxItems 4000
   */
  reservation?: RoomingListReservationType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** This is used when changing block reservations in bulk. */
export interface RoomingListReservationType {
  /** Contains detailed information about the snapshot reservation */
  hotelReservation?: HotelReservationType;
  /** Contains the routing instructions of the reservation. */
  routingInstructions?: RoutingInfoListType;
  /** This element is returned if the rooming list reservation was successfully created. */
  success?: SuccessType;
  /** This element is returned if the rooming list reservation was not created successfully. It indicates the error messages due to which the reservation was not created. */
  errors?: ErrorsType;
  /** Unique identifier that identifies the sequence of an individual rooming list reservation. The sequence will be maintained across every request and response. */
  roomingListSequence?: number;
}

/** Response object for creation of block rooming list. This object contains the details with unique identifiers for the created block reservations. Also Success,Warnings and Errors related to this operation. */
export interface RoomingListDetails {
  /** Collection of block reservations that were created successfully with unique identifiers. */
  reservations?: RoomingListReservationsType;
  /** Contains a collection of groups of a reservations that are shared with each other. This will contain both successful and failed reservations. */
  shares?: RoomingListSharesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** It also contains Success,Warnings and Errors related to this operation. */
export interface BlockRoomsStatus {
  /** Contains details of the rooms status. */
  roomsStatusSummary?: RoomsStatusSummaryType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Contains Block's room status summary info. */
export interface RoomsStatusSummaryType {
  assigned?: number;
  unassigned?: number;
  inspected?: number;
  dirty?: number;
  clean?: number;
  pickup?: number;
  outOfService?: number;
}

/** The response object that returns Block Statistics information. */
export interface BlockStatistics {
  /** Information on room sold, room revenue and room rate. */
  statisticsDetails?: BlockStatisticsDetailsType;
  /** List of room types with an allotment. */
  masterInfo?: BlockStatisticsAllotedRoomsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Collection of statistics details for every statistic type. */
export interface BlockStatisticsDetailsType {
  /** @maxItems 4000 */
  statisticsDetail?: BlockStatisticsDetailType[];
  /**
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  numberOfDays?: number;
}

/** Statistics Detail for a statistic type. */
export interface BlockStatisticsDetailType {
  /** @maxItems 4000 */
  statisticsDates?: BlockStatisticsDatesType[];
  /** Type of statistic for which its statistics information by date and room type will be populated. */
  statisticType?: StatisticsType;
}

/**
 * Collection of statistics detail for every allotment date.
 * @maxItems 4000
 */
export type BlockStatisticsDatesType = BlockStatisticsDateType[];

/** Holds the room type level statistics and total statistics for an allotment date. */
export interface BlockStatisticsDateType {
  total?: number;
  /** Collection of room type level statistics. */
  roomStatisticsList?: BlockRoomStatisticsListType;
  /**
   * @format date
   * @maxLength 8
   */
  date?: string;
}

/**
 * Collection of room type level statistics.
 * @maxItems 4000
 */
export type BlockRoomStatisticsListType = BlockRoomStatisticsType[];

/** Statistics information for the room type. */
export interface BlockRoomStatisticsType {
  /** Information about availability, rate and allotment statistics. */
  statisticsInfo?: BlockStatisticsInfoType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
}

/** Information about availability, rate and allotment statistics. */
export interface BlockStatisticsInfoType {
  inventory?: number;
  rate?: {
    onePerson?: number;
    twoPerson?: number;
    threePerson?: number;
    fourPerson?: number;
  };
  persons?: number;
  revenue?: number;
  averageRate?: number;
}

/** Type of statistic for which its statistics information by date and room type will be populated. */
export enum StatisticsType {
  Contract = 'Contract',
  Initial = 'Initial',
  Actual = 'Actual',
  Pickup = 'Pickup',
  Available = 'Available',
  Change = 'Change',
  Rates = 'Rates',
  Totalavailable = 'Totalavailable',
  Tentativereservations = 'Tentativereservations',
  Pickuppersons = 'Pickuppersons',
  Roomrevenue = 'Roomrevenue',
  Totalrevenue = 'Totalrevenue',
  Avgroomrate = 'Avgroomrate',
}

/** List of all room types with alloted rooms. */
export interface BlockStatisticsAllotedRoomsType {
  /** @maxItems 7 */
  roomTypes?: StatisticsRoomTypeInfoType[];
}

/** Extended room type to store room category. */
export interface StatisticsRoomTypeInfoType {
  /**
   * Detail description of the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  longDescription?: string;
  /**
   * Name corresponding to a RoomType.
   * @minLength 0
   * @maxLength 80
   */
  webName?: string;
  /**
   * URL providing more information about the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  webPage?: string;
  /** Collection of room features. */
  roomFeatures?: RoomFeaturesType;
  /** Room type attributes. */
  roomTypeAttributes?: RoomTypeAttributesType;
  /**
   * Booking Channels mapping for the Room Type.
   * @maxItems 4000
   */
  bookingChannelMappings?: BookingChannelMappingType[];
  /**
   * Bed type code associated with room.
   * @maxItems 4000
   */
  bedTypeCodes?: string[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Indicates room type is a suite. */
  suite?: boolean;
  /** Indicates room type is a Component Room. */
  component?: boolean;
  /**
   * Block code.
   * @minLength 0
   * @maxLength 40
   */
  invBlockCode?: string;
  /**
   * Represents the room view code like City view, River view, Ocean view etc.
   * @minLength 0
   * @maxLength 40
   */
  roomViewCode?: string;
  /**
   * Represents the promotional code.
   * @minLength 0
   * @maxLength 40
   */
  promotionCode?: string;
  /**
   * Represents the room qualifier code like Deluxe,Economy,Suite etc.
   * @minLength 0
   * @maxLength 40
   */
  roomQualifierCode?: string;
  /**
   * Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
   * @minLength 0
   * @maxLength 20
   */
  roomQualifierMatchIndicator?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomCategory?: string;
}

/** Response object to fetch Status Logs for blocks. */
export interface BlockStatusChanges {
  /** Status Changes Details for selected block */
  blockStatusChanges?: BlockStatusChangesDetailsType;
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
 * Block Status Changes Details
 * @maxItems 4000
 */
export type BlockStatusChangesDetailsType = BlockStatusChangesDetailType[];

export interface BlockStatusChangesDetailType {
  /**
   * Change date for this block .
   * @format date
   * @maxLength 8
   */
  changeDate?: string;
  /**
   * Current Status for this block .
   * @minLength 0
   * @maxLength 20
   */
  currentStatus?: string;
  /**
   * Prior Status for this block .
   * @minLength 0
   * @maxLength 20
   */
  priorStatus?: string;
  /** Number of rooms blocked and average rate details . */
  rooms?: RoomStatisticsType;
  /** Revenue summary Type . */
  revenue?: RevenueSummaryType;
  /** Log time and detiails of the user who made changes . */
  userDetails?: LogUserInfoType;
}

/** Request for creating a tour series based on an existing block. */
export interface TourSeries {
  /** Details about the source block and the information that is to be copied from the source block to the new tour series blocks. */
  criteria?: TourSeriesType;
  /** This flag will allow the user to control the response performance. Response will return block information based on the this flag. Possible values are None, Summary, Details. */
  responseInstruction?: ResponseInstructionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This contains information as the block code, block name, block status regarding the blocks to be created as tour series. */
export interface TourSeriesType {
  /** The unique identifier of the source block. */
  tourBlockId?: UniqueIDType;
  /**
   * The tour code to be applied to the blocks that are part of this tour series.
   * @minLength 0
   * @maxLength 20
   */
  tourCode?: string;
  /** The collection of tour series blocks information. */
  tourSeriesBlocks?: TourSeriesBlocksType;
  /** Instructions which will be considered when creating the tour series from a source block. If this element is not sent, all the flags will be assumed to be ignored. */
  tourInstructions?: {
    /** When true, this will copy the source block's room allocation to the tour series blocks. */
    rooms?: boolean;
    /** When true, this will copy the source block's comments to the tour series blocks. */
    blockComments?: boolean;
    /** When true, this will copy the source block's events to the tour series blocks. */
    events?: boolean;
    /** When true, this will copy the source block's event comments to the events of the tour series blocks. */
    eventComments?: boolean;
    /** When true, this will copy the source block's resources to the tour series blocks. */
    resources?: boolean;
    /** When true, this will copy the source block's resource comments to the resources of the tour series blocks. */
    resourceComments?: boolean;
    /** When true, this will copy the source block's contract billing information to the tour series blocks. */
    contractBilling?: boolean;
    /** When true, this will copy the source block's group profile to the tour series blocks. */
    groupProfile?: boolean;
    /** When true, this will adjust the decision and followup date on the tour series blocks to the same offset as the source block. */
    adjustDecisionAndFollowupDate?: boolean;
    /** When true, this will copy the source block's complimentary information to the tour series blocks. */
    complimentaryInfo?: boolean;
    /** When true, this will copy the source block's rate codes to the tour series blocks. */
    rates?: boolean;
  };
  /**
   * The hotel code of the source block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/**
 * Contains tour series blocks information.
 * @maxItems 4000
 */
export type TourSeriesBlocksType = TourSeriesBlockType[];

/** Information about a tour series block. */
export interface TourSeriesBlockType {
  /**
   * The hotel code of the tour series block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The block code of the tour series block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * The start date of the tour series block.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * The booking status of the tour series block.
   * @minLength 0
   * @maxLength 20
   */
  blockStatus?: string;
  /**
   * The block name of the tour series block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
}

/** Response types used in the Apply Final Postings request. Based on the request the folio summary , folio details or no details will be returned in the response. */
export enum ResponseInstructionType {
  None = 'None',
  Summary = 'Summary',
  Details = 'Details',
}

/** Response object to fetch all the Block Wash Schedules. Each Block Wash Schedule will contain all the information like Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value if exists. */
export interface BlockWashSchedules {
  /** All Block Wash Schedules information required for performing a block wash operation. */
  blockWashSchedules?: BlockWashSchedulesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to change multiple Block Wash Schedules under the selected block. */
export interface BlockWashSchedulesInfo {
  /** The criteria based on which the block wash schedules will be changed. */
  blockWashSchedulesInfo?: BlockWashSchedulesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The criteria based on which the block wash schedules will be created/ changed. */
export interface BlockWashSchedulesInfoType {
  /**
   * Hotel Code to which the block wash schedules will be created/ changed.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Collection of unique block identifiers to which the block wash schedules will be created/ changed */
  blockIdList?: BlockIdList;
  /** Collection of all Block Wash Schedules to be created/ changed. */
  blockWashSchedules?: BlockWashSchedulesType;
}

/** Request for creating a copy of an existing block. */
export interface BlockCopy {
  /** Details about the source block and the information that is to be copied from the source block. */
  criteria?: CopyBlockType;
  /** This flag will allow the user to control the response performance. Response will return block information based on the this flag. Possible values are None, Summary, Details. */
  responseInstruction?: ResponseInstructionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The source block will be used as a template to create the new copied block. */
export interface CopyBlockType {
  /** The unique identifier of the source block. */
  sourceBlockId?: UniqueIDType;
  /** Information about the new block. */
  newBlock?: NewBlockDetailsType;
  /** Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored. */
  copyInstructions?: {
    /** When true, this will copy the source block's room allocation counts to the new block. */
    rooms?: boolean;
    /** When true, this will copy the source block's rate code to the new block. */
    rateCode?: boolean;
    /** When true, this will copy the source block's comments to the new block. */
    blockComments?: boolean;
    /** When true, this will copy the block code of the source block to the new block. */
    blockCode?: boolean;
    /** When true, this will copy the source block's catering information to the new block. */
    catering?: boolean;
    /** When true, this will copy the source block's events to the new block. */
    events?: boolean;
    /** When true, this will copy the source block's event comments to the events of the new block. */
    eventComments?: boolean;
    /** When true, this will copy the source block's resources to the new block. */
    resources?: boolean;
    /** When true, this will copy the source block's resource comments to the resources of the new block. */
    resourceComments?: boolean;
    /** When true, this will copy the source block's resource price amounts to the resources of the new block. */
    resourcePrices?: boolean;
    /** When true, this will copy the source block's number of attendees to the new block. */
    attendeesCount?: boolean;
    /** When true, this will copy the source block's contract billing information to the new block and make the source block a Master Block. */
    contractBilling?: boolean;
    /** When true, this will copy the source block's group profile to the new block. */
    groupProfile?: boolean;
    /** When true, this will copy the source block's alternate dates to the new block. */
    alternateDates?: boolean;
    /** When true, this will copy the rate amounts of the source block's alternate dates to the alternate dates of the new block. */
    ratesOfAlternateDates?: boolean;
    /** When true, this will create the new block in the same potential profile as the source block. */
    potentialProfile?: boolean;
    /** When true, this will adjust the decision and followup date on the new block to the same offset as the source block. */
    adjustDecisionAndFollowupDate?: boolean;
    /** When true, this will copy the new block as a sub block of the source block. */
    createAsSubBlock?: boolean;
    /** When true, this will create the new block in the same tour series as the source block. */
    createAsTourBlock?: boolean;
    /** When true, this will overbook the block. */
    overbook?: boolean;
    /** Contract grid of the source Block will be copied to the contract grid of the new Block */
    contractGrid?: boolean;
    /** Event notes of note code 'CH' will be copied from source events to new events on the Block copy. */
    changeNotes?: boolean;
    /** All event resources, such as menus and item resources are copied with the events to the new Block. Include Resource Notes and Copy Resource Prices are displayed and enabled. */
    otherResources?: boolean;
    /** Event forecast figures will be copied from the source to the events of the new Block. */
    eventForecastFigures?: boolean;
  };
  /**
   * The hotel code of the source block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** This is used when creating a copy of a block. */
export interface NewBlockDetailsType {
  /**
   * The hotel code of the new block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * The block code of the new block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * The start date of the new block.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * The booking status of the new block.
   * @minLength 0
   * @maxLength 20
   */
  blockStatus?: string;
  /**
   * Origin information of the block PMS/ORS/SC/SFA
   * @minLength 0
   * @maxLength 20
   */
  blockOrigin?: string;
  /**
   * The value in this field will be applied as the catering status of the new Block and all its events.
   * @minLength 0
   * @maxLength 20
   */
  cateringStatus?: string;
  /** Room block and events from the source Block will be copied from the entered date starting at the start date of the new Block and ending at the end date of the new block. */
  blockDatesRange?: DateRangeType;
  /** Room block and events from the source Block will be copied from the entered date starting at the start date of the new Block and ending at the end date of the new block. */
  sourceDateRangeToCopy?: DateRangeType;
  /**
   * This is the source grid type, like Original, Current, Pickup, which will be copied to the target Business Block.
   * @minLength 0
   * @maxLength 20
   */
  gridType?: string;
  /** This is the user defined source grid category list, which will be copied to the target business block. This will be used when the business block supports multiple room grid categories. */
  gridCategory?: CodeListType;
  /** Stores the value for no of attendees. */
  attendees?: number;
  /**
   * This is used to pass the market code when a block copy is done to a different property.
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /**
   * This is used to pass the Source code when a block copy is done to a different property.
   * @minLength 0
   * @maxLength 20
   */
  sourceCode?: string;
  /**
   * This is used to pass the Source code when a block copy is done to a different property.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
}

/** Request object for changing the catering status of the business block. */
export interface CateringStatusToChange {
  /** Information on the catering status change. */
  changeCateringStatus?: ChangeCateringStatusType;
  /** Indicator if the request is a verification on whether the catering status can be changed. */
  verificationOnly?: boolean;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This holds the information required to change the catering status of the business block. */
export interface ChangeCateringStatusType {
  /**
   * Opera Hotel code for the change block status operation.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * Current catering status of the business block.
   * @minLength 0
   * @maxLength 20
   */
  currentCateringStatus?: string;
  /**
   * New catering status of the business block.
   * @minLength 0
   * @maxLength 20
   */
  newCateringStatus?: string;
  /** Information related to cancel catering like cancel reason, destination and lost to property. */
  cancellationDetails?: CancellationDetailsType;
  /** Basic information of master and sub blocks structure in tree manner, this element only used while retrieving Block Type. */
  masterSubBlockInfo?: MasterBlockInfoType;
  /** The catering attendees information for events associated with the block. */
  eventAttendees?: EventAttendeesType;
  /** Indicates whether to ignore any warning during applying the changes to the events associated with the current block. */
  overrideEventsProcessingWarnings?: boolean;
}

/** Response object for the request to change catering status. Response contains information on the block whose status was successfully changed. */
export interface ChangedCateringStatus {
  /** Provides detailed information regarding a block. */
  block?: BlockType;
  /** Information on the block that was canceled. */
  cancellationDetails?: CancellationDetailsType;
  /** List of possible next catering statuses of the business block. */
  cateringNextStatusList?: CateringNextStatusListType;
  /** List of catering status changes. */
  cateringStatusChangeHistory?: CateringStatusChangeHistoryType;
  /** Status of the processed events after the block catering status change. */
  cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Status/Info of the processed events.
 * @maxItems 4000
 */
export type CateringEventsProcessedInfoList = CateringEventsProcessedInfoType[];

/** Status/Info of the processed events. */
export interface CateringEventsProcessedInfoType {
  /**
   * Hotel code where event will be copied.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** BlockID of the event. */
  blockId?: BlockId;
  /**
   * Name of event.
   * @minLength 0
   * @maxLength 60
   */
  eventName?: string;
  /**
   * Type of event.
   * @minLength 0
   * @maxLength 20
   */
  eventType?: string;
  /**
   * Date of the event
   * @format date
   * @maxLength 8
   */
  eventDate?: string;
  /** The function space room where the event takes place . */
  room?: CodeDescriptionType;
  /** Status of the processed event. e.g Completed, Not Processed. */
  status?: string;
  /** Reason for not processing the event. */
  reason?: string;
  /** Flag to indicate the warning messages from the API */
  processingInfoType?: string;
  /**
   * Erorr/Warning code for not processing th event.
   * @minLength 0
   * @maxLength 200
   */
  processingInfoCode?: string;
}

/** Response object that returns a default block code based on template. */
export interface DefaultBlockCodeDetails {
  /**
   * Business Block Code.
   * @maxLength 2000
   */
  blockCode?: string;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for creation of blocks. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included. */
export interface Block {
  /** Contains the detailed information regarding the block. */
  blocks?: BlocksType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included. */
export interface BlockToBeChanged {
  /** Provides detailed information of the block to be changed. */
  blocks?: BlockInstructionType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Extended Block object to hold additional instructions along with the block. This should be used during create/update operations on a block. */
export interface BlockInstructionType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /** External Reference information for Reservation. */
  externalReferences?: ExternalReferencesType;
  /** Detailed Block information for this block. */
  blockDetails?: BlockDetailsType;
  /** Criteria to assign the owners of a business block. */
  blockOwners?: BlockOwnersType;
  /** Basic information of master and sub blocks structure in tree manner, this element only used while retrieving Block Type. */
  masterBlockInfo?: MasterBlockInfoType;
  /**
   * A list of reservation policies.
   * @maxItems 4000
   */
  reservationPolicies?: ReservationPoliciesType[];
  /** Details of room Information for the Block. */
  reservationDetails?: BlockReservationDetailsType;
  /** Details of catering Information for the Block. */
  catering?: CateringType;
  /** A collection of all the profiles associated to this block. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time. */
  blockProfiles?: {
    /**
     * The list of profiles associated with the block.
     * @maxItems 4000
     */
    blockProfile?: BlockProfilesType[];
    /** Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided. */
    fullOverlay?: boolean;
  };
  /**
   * A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges.
   * @maxItems 4000
   */
  blockPackages?: BlockPackageType[];
  /** A collection of inventory items attached to a block. */
  inventoryItems?: BlockInventoryItemsType;
  /** Indicates the room and revenue statistics of the block. */
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
  /** Room Allocations for the Block. */
  roomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /** Collections of user defined fields. */
  userDefinedFields?: UserDefinedFieldsType;
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
    allDescriptionDDSecured?: boolean;
    /** Rates Secured from GNR. */
    ratesSecuredfromGNR?: boolean;
    /** Rates Secured from All Displays. */
    ratesSecuredfromAllDisplays?: boolean;
    /** Housing Information Secured. */
    housingInformationSecured?: boolean;
    /** Number of Days Deposit due to guarantee the guest booking. */
    daysDepositRequired?: number;
    /** Number of days before the arrival date a reservation can be canceled without losing the deposit. */
    advanceCancelDays?: number;
    /** Return One Day at a time. */
    returnOneDayAtTimeYn?: boolean;
    /** Determines if Travel Agent commission will be paid on reservations booked through the HOLIDEX Plus TACP program. */
    commissionableYn?: boolean;
  };
  /**
   * Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud.
   * @maxItems 4000
   */
  ratePrograms?: RateProgramType[];
  /** Block attributes used for external systems. Only available if configured in OPERA Cloud. */
  externalAttributes?: {
    /** Only available if configured in OPERA Cloud. */
    housingProtected?: boolean;
    /** Contract type of a block, which is used for external system. Only available if configured in OPERA Cloud. */
    eventType?: EventTypeType;
    /** Group IATA number validated by an external system and block can't be saved unless confirmed that GIID is valid. Only available if configured in OPERA Cloud. */
    gIId?: string;
    /** When this flag is set it will be used to roll Block End Date and Block Rate Program End Date in the night audit process. Only available if configured in OPERA Cloud. */
    rollEndDate?: boolean;
  };
  /** Generic Room Type Allocations for the Block. */
  genericRoomAllocations?: {
    /** @maxItems 4000 */
    roomAllocationType?: RoomAllocationTypeType[];
    /** Generic Room Allocations Master Information contains all the room types in the property. */
    masterInfo?: RoomAllocationMasterInfoType;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    numberOfDays?: number;
  };
  /**
   * Alternate Date information for the Block.
   * @maxItems 4000
   */
  alternateDates?: BlockAlternateDateType[];
  /** List of sell messages for the Block. */
  sellMessages?: SellMessageConfigsType;
  /** List of attachments for the Block. */
  attachments?: AttachmentsType;
  /** List of wash schedules for the Block. */
  washSchedules?: BlockWashSchedulesType;
  /** List of restrictions for the Block. */
  restrictions?: BlockRestrictionsType;
  /** List of access exclusions for the block. */
  accessExclusions?: BlockAccessExclusionsType;
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
  /**
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
  /** Collection of instructions to be returned as a set of block information. */
  responseInstructions?: {
    /** @maxItems 4000 */
    responseInstruction?: BlockDetailInstructionType[];
    /** If this value is set to TRUE, then the operation will only return for a Success or Failed flag. */
    confirmationOnly?: boolean;
  };
}

/** Response object for change/modification of block details. This object contains the block details with unique identifiers for each block. Also Success,Warnings and Errors related to this operation. */
export interface BlockChanged {
  /** Provides detailed information regarding the changed blocks. */
  blocks?: BlocksType;
  /** Status/Info of the processed events. */
  cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A Request message that sets the room allocations as a collection of room types and dates. */
export interface Allocation {
  /** This element contains the block allocations as a collection of room types and dates. */
  criteria?: AllocationGridByRoomTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A collection of Allocation objects for a block defined by room type. */
export interface AllocationGridByRoomTypesType {
  /**
   * Opera Hotel code for the Set Allocation Grid request.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique block identifier of the block for which the allocations need to be set. */
  blockId?: BlockId;
  /**
   * Allocation objects of a block grouped by room types.
   * @maxItems 4000
   */
  allocationRoomTypes?: AllocationGridByRoomTypeType[];
  /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
  genericRoomType?: boolean;
}

/** A collection of Allocation objects for a block defined by room type. */
export interface AllocationGridByRoomTypeType {
  /**
   * Allocation objects for a block by date ranges.
   * @maxItems 4000
   */
  allocationGridDates?: AllocationGridByDateRangesType[];
  /**
   * Sell limits for a block by date ranges.
   * @maxItems 4000
   */
  sellLimitGridDates?: SellLimitGridByDateRangeType[];
  /**
   * Indicates the room type of the Allocation objects.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
}

/** A collection of Allocation objects for a block, such as Current Rooms, Original Rooms, Rate Amounts, etc. */
export interface AllocationGridByDateRangesType {
  /**
   * Allocation objects for a block.
   * @maxItems 4000
   */
  roomAllocationInfo?: AllocationGridByDateRangeType[];
  /**
   * Indicates the type of the Allocation objects.
   * @minLength 0
   * @maxLength 40
   */
  allocation?: string;
}

/** Indicates the block allocations for a date range. This can be rooms or rate amounts. */
export interface AllocationGridByDateRangeType {
  /** Indicates the room inventory values per person occupancy. */
  inventory?: SetBlockGridInvType;
  /** Indicates the rate amount values per person occupancy. */
  rate?: BlockGridRatesType;
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
}

/** Indicates the inventory values ( occupancy or availability ) per person occupancy. */
export interface SetBlockGridInvType {
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
  /** Indicates whether to overbook the rooms in case there are not enough rooms at the house or room type level. */
  forceOverbook?: boolean;
}

/** Indicates the sell limits for a date range. This will be rooms. */
export interface SellLimitGridByDateRangeType {
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
  /** Indicates the sell limit for the date range. */
  sellLimit?: number;
}

/** Request for updating block allocation for a range of dates. */
export interface BlockAllocationRange {
  /** Range information for the block allocation range update operation. */
  blockAllocationRange?: BlockAllocationRangeType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Container for information related to block allocation range update operation */
export interface BlockAllocationRangeType {
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * List of room types for which the range update has to be applied.
   * @maxItems 4000
   */
  roomTypes?: string[];
  /**
   * Begin date for range update operation.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
  /**
   * End date for range update operation.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Allocation type for which the range operation is applied. */
  allocationType?: AllocationType;
  /** Flag to indicate if the occupancy data is absolute or relative to the current value. */
  incrementFlag?: boolean;
  /** Occupancy data for range operation. */
  blockInventory?: BlockGridInvType;
  /** Rate details for range operation. */
  blockRates?: BlockGridRatesType;
  /**
   * Date after which unused block rooms should be returned to house.
   * @format date
   * @maxLength 8
   */
  cutoffDate?: string;
  /** Number of days from block start date after which unused block rooms should be returned to house. */
  cutoffDays?: number;
  /**
   * @minLength 0
   * @maxLength 8
   */
  includedDays?: string;
  /** Indicates whether the range is being applied on shoulder dates or core dates. */
  rangeMode?: BlockRangeModeType;
  /**
   * Date which has to be overbooked or excluded.
   * @maxItems 4000
   */
  overbookList?: {
    /**
     * Date which has to be overbooked or excluded.
     * @format date
     * @maxLength 8
     */
    stayDate?: string;
    /**
     * Room type that has to be overbooked or excluded.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** A true value indicates that the date/room type should be overbooked for inventory. A false value indicates that this combination should be excluded from range. */
    overbook?: boolean;
  }[];
  /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
  genericRoomType?: boolean;
}

/** Enumerates range operation modes. */
export enum BlockRangeModeType {
  Core = 'Core',
  ShoulderStart = 'ShoulderStart',
  ShoulderEnd = 'ShoulderEnd',
}

/** Response type for fetch block information for range operation. */
export interface BlockRangeInfo {
  /** Block information required for range operation including room types list. */
  blockRangeInformation?: BlockRangeInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Block Information needed to perform a range operation. */
export interface BlockRangeInfoType {
  /** Block information needed to perform range operation on the block. */
  blockInfo?: {
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
    blockId?: BlockId;
    /**
     * Block Code
     * @minLength 0
     * @maxLength 20
     */
    blockCode?: string;
    /**
     * Block Start Date
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * Block End Date
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    /**
     * Block Shoulder Start Date.
     * @format date
     * @maxLength 8
     */
    shoulderStartDate?: string;
    /**
     * Block Shoulder End Date.
     * @format date
     * @maxLength 8
     */
    shoulderEndDate?: string;
    /**
     * Block Rate Code.
     * @minLength 0
     * @maxLength 20
     */
    rateCode?: string;
    /**
     * Block Status.
     * @minLength 0
     * @maxLength 20
     */
    blockStatus?: string;
    /** Indicates if the block is elastic or not. */
    inventoryControl?: BlockInventoryControlType;
  };
  /**
   * List of all room types for the hotel.
   * @maxItems 4000
   */
  roomTypes?: string[];
}

/** Response for FetchBlockAvailability operation. */
export interface BlockAvailability {
  /** Block Availability details. */
  blockAvailability?: BlockAvailabilityType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Holds block availability information. */
export interface BlockAvailabilityType {
  /** Master info for the block availability. */
  blockAvailabilityMasterInfo?: BlockAvailabilityMasterInfoType;
  /** Block header information. */
  blockHeaderInfo?: BlockHeaderInfoType;
  /**
   * Provides room allocation/availability information for a stay date.
   * @maxItems 4000
   */
  blockAvailability?: BlockAvailabilityInfoType[];
}

/** Holds master information for block availability. */
export interface BlockAvailabilityMasterInfoType {
  /** All room types available within the hotel. */
  masterRoomTypes?: CodeListType;
  /**
   * Details pertaining to a room type.
   * @maxItems 4000
   */
  fetchedRoomTypes?: BlockAvailabilityRoomTypeInfo[];
  /**
   * Rate plan code details for the block.
   * @maxItems 4000
   */
  ratePlans?: BlockAvailabilityRatePlanInfo[];
  /**
   * Currency exchange rate information.
   * @maxItems 4000
   */
  currencyExchangeRates?: CurrencyExchangeRateType[];
}

/** Room type information including packages and basic room type details. */
export interface BlockAvailabilityRoomTypeInfo {
  /**
   * Package information.
   * @maxItems 4000
   */
  packages?: PackageElementType[];
  /** Holds complete room type information. */
  roomTypeInfo?: RoomTypeInfoType;
  /** Indicates whether the room type is defined in the rate code for which availability is fetched. */
  available?: boolean;
  /**
   * Room type for which the details can be found in this node.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
}

export interface RoomTypeInfoType {
  /**
   * Detail description of the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  longDescription?: string;
  /**
   * Name corresponding to a RoomType.
   * @minLength 0
   * @maxLength 80
   */
  webName?: string;
  /**
   * URL providing more information about the Room Type.
   * @minLength 0
   * @maxLength 2000
   */
  webPage?: string;
  /** Collection of room features. */
  roomFeatures?: RoomFeaturesType;
  /** Room type attributes. */
  roomTypeAttributes?: RoomTypeAttributesType;
  /**
   * Booking Channels mapping for the Room Type.
   * @maxItems 4000
   */
  bookingChannelMappings?: BookingChannelMappingType[];
  /**
   * Bed type code associated with room.
   * @maxItems 4000
   */
  bedTypeCodes?: string[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Indicates room type is a suite. */
  suite?: boolean;
  /** Indicates room type is a Component Room. */
  component?: boolean;
  /**
   * Block code.
   * @minLength 0
   * @maxLength 40
   */
  invBlockCode?: string;
  /**
   * Represents the room view code like City view, River view, Ocean view etc.
   * @minLength 0
   * @maxLength 40
   */
  roomViewCode?: string;
  /**
   * Represents the promotional code.
   * @minLength 0
   * @maxLength 40
   */
  promotionCode?: string;
  /**
   * Represents the room qualifier code like Deluxe,Economy,Suite etc.
   * @minLength 0
   * @maxLength 40
   */
  roomQualifierCode?: string;
  /**
   * Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
   * @minLength 0
   * @maxLength 20
   */
  roomQualifierMatchIndicator?: string;
}

/** Rate plan information including package details. */
export interface BlockAvailabilityRatePlanInfo {
  /** Rate Plan details. */
  ratePlanInfo?: {
    /**
     * Brief Information of the Rate Code.
     * @minLength 0
     * @maxLength 2000
     */
    shortInfo?: string;
    /**
     * Detail Information of the Rate Code.
     * @minLength 0
     * @maxLength 2000
     */
    longInfo?: string;
    /**
     * URL providing more information about the Rate Code.
     * @minLength 0
     * @maxLength 2000
     */
    webPage?: string;
    /**
     * Description of the Rate Code.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** To populate RatePlanLevel, RatePlanWebName, and RatePlanID according to the setup made under channel. */
    ratePlanChannelInfo?: RatePlanChannelInfoType;
    /**
     * Currency Code of the rate code.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * Booking Channel mapping for the Rate Plan Code.
     * @maxItems 4000
     */
    bookingChannelMappings?: BookingChannelMappingType[];
    /**
     * All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanLevel?: string;
    /** Guarantee details for rate plan code. */
    guarantee?: GuaranteeType;
    /** Cancellation details for rate plan code. */
    cancelPenalty?: CancelPenaltyType;
    /** Meal plan codes for rate plan code. */
    mealPlans?: MealPlansType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCategory?: string;
    /** Indicates if tax is included in the rate code amount. */
    taxInclusive?: boolean;
    /** Indicates if service fee is included in the rate code amount. */
    serviceFeeInclusive?: boolean;
    /** Commission details for Rate plan code. */
    rateCommission?: RatePlanCommissionType;
    /** If Rate plan is negotiated by Guest or any attached profiles, this indicates how negotiated it. Applicable values are Guest, Company, Agent and Source. */
    negotiatedBy?: ProfileTypeType;
  };
}

export interface RatePlanChannelInfoType {
  /**
   * All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanLevel?: string;
  /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
  ratePlanId?: {
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
  };
  /**
   * To populate the RatePlanName, setup for the channel.
   * @minLength 0
   * @maxLength 80
   */
  ratePlanWebName?: string;
}

export interface RatePlanCommissionType {
  /**
   * commission code used by the rate plan.
   * @minLength 0
   * @maxLength 20
   */
  commissionCode?: string;
  /** commission percentage used by the rate plan. */
  commissionPercentage?: number;
  /** commission amount used by the rate plan. */
  commissionAmount?: number;
}

/** Currency code configuration. */
export interface CurrencyExchangeRateType {
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
   * Description of the currency code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Exchange Rate for the currency code. Exchange rate is based on the current business date of the property. */
  exchangeRate?: CurrencyAmountType;
}

/** Holds block header details. */
export interface BlockHeaderInfoType {
  /**
   * Hotel code to which the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Name of the hotel.
   * @minLength 0
   * @maxLength 80
   */
  hotelName?: string;
  /**
   * Block description.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /**
   * Unique code for the block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * Default currency code of the block.
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /**
   * Primary rate code of the block.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Shoulder start date of the block, applicable if the block is elastic.
   * @format date
   * @maxLength 8
   */
  shoulderStartDate?: string;
  /**
   * Shoulder end date of the block, applicable if the block is elastic.
   * @format date
   * @maxLength 8
   */
  shoulderEndDate?: string;
  /**
   * Start date of the block.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /**
   * End date of the block.
   * @format date
   * @maxLength 8
   */
  endDate?: string;
  /** Indicates whether the block is elastic. */
  inventoryControl?: BlockInventoryControlType;
  /**
   * Market code for the block.
   * @minLength 0
   * @maxLength 20
   */
  marketCode?: string;
  /** Source for the block. */
  sourceOfSale?: BlockSourceOfSaleType;
  /**
   * Guarantee Code for the block.
   * @minLength 0
   * @maxLength 20
   */
  guaranteeCode?: string;
  /** Booking Status of the block. */
  blockStatus?: CodeDescriptionType;
  /** Indicates whether rates are suppressed. */
  suppressRate?: boolean;
}

/** Captures room availability information for the block. */
export interface BlockAvailabilityInfoType {
  /** @maxItems 4000 */
  roomInfo?: BlockAvailabilityRoomInfoType[];
  /**
   * @format date
   * @maxLength 8
   */
  stayDate?: string;
  extendedStay?: boolean;
}

/** Captures occupancy and rate information for a room type. */
export interface BlockAvailabilityRoomInfoType {
  /** Total occupancy alloted for the room type and stay date. */
  inventory?: number;
  /** The derived rate amount for the room type, stay date and number of adults. */
  rate?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Available Sell Limit rooms for a Sell Limit block. */
  sellLimit?: number;
}

/** Request object for block cancelation. This object contains unique identifiers (Block unique id, Block Code and Block Start Date ) to identify the block to be Canceled and the standard optional Opera Context element. */
export interface BlockToCancel {
  /** Cancelled block identifier information. */
  cancelBlock?: CancelBlockType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** ID information of the cancelled Block. */
export interface CancelBlockType {
  /**
   * Opera Hotel code for the cancel block operation.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Collection of unique block identifiers for both internal and external systems. */
  blockIdList?: BlockIdList;
  /**
   * Start date of the block to be cancelled.
   * @format date
   * @maxLength 8
   */
  startDate?: string;
  /** Information related to cancel block like cancel reason, destination and lost to property. */
  cancellationDetails?: CancellationDetailsType;
  /** Information related to PM reservations cancel like cancel reason and description. */
  pMReservationsCancellationDetails?: CancellationDetailsType;
}

/** Request object for creating a new Posting Master Reservation. */
export interface BlockPostingMaster {
  /** Criteria for creating a Posting Master. */
  criteria?: CreateBlockPostingMasterCriteria;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to create a new posting master reservation. */
export interface CreateBlockPostingMasterCriteria {
  /**
   * Hotel Code of the business block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique block ID for which the posting master needs to be created. */
  blockId?: BlockId;
  /** Dictates the response structure of the returned posting master reservation object. */
  responseInstruction?: {
    /** Whether the response should contain only the ReservationID or full posting master reservation info. */
    fetchFullReservation?: boolean;
  };
}

/** The response object that contains the PM reservations belonging to a block. */
export interface BlockPMReservations {
  /** Collection of the PM reservations belonging to a block. */
  reservations?: ReservationSnapshotsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** A collection of Reservation snapshot objects. */
export interface ReservationSnapshotsType {
  /**
   * A reservation snapshot object.
   * @maxItems 4000
   */
  reservation?: ReservationSnapshotType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Request object of change block rate override operation. */
export interface RateOverride {
  /** Hotel code of the block. */
  hotelId?: CodeType;
  /** Unique id of the block for which the rates need to be refreshed. */
  blockIdList?: BlockIdList;
  /** Indicates whether rates of a block can be overridden. Applicable only for blocks with a Rate Code. */
  allowRateOverride?: boolean;
  /** Indicates the reason for overriding the rate amounts on a block. */
  rateOverrideReason?: CodeDescriptionType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface RateOverrideStatus {
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to shift business block starting date. */
export interface BlockToShift {
  /** Contains details of the block to be shifted along with the new start date to be applied. */
  criteria?: ShiftBlockCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ShiftBlockCriteriaType {
  /**
   * Hotel code of the business block.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Business Block Id for which the start date is to be changed. */
  blockId?: BlockId;
  /**
   * New start date of the business block.
   * @format date
   * @maxLength 8
   */
  newStartDate?: string;
  /** When true, this will remove alternate dates for this block before shifting dates. */
  removeAlternateDates?: boolean;
  /** When true, this will validate alternate dates for this block before shifting dates. */
  validateAlternateDates?: boolean;
  /** When true, this will overbook allocated rooms if needed. */
  overbookAll?: boolean;
  /** When true, this will shift the block even if there are rooms pre-allocated. */
  ignorePreAllocatedRooms?: boolean;
  /** When true, this will shift the block even if there are active traces. */
  ignoreTraces?: boolean;
  /** Indicates whether to ignore any warning during applying the changes to the events associated with the current block. */
  overrideEventsProcessingWarnings?: boolean;
}

/** Response object for shift block operation. */
export interface ShiftedBlock {
  /** Status/Info of the processed events. */
  cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object for changing the booking status of the business block. */
export interface BlockStatusToChange {
  /** Contains the booking status of the business block. */
  blocksStatus?: any;
  /** Information on the block status change. */
  changeBlockStatus?: ChangeBlockStatusType;
  /** Indicator if the request is a verification on whether the block status can be changed. */
  verificationOnly?: boolean;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This holds the information required to change the booking status of the business block. */
export interface ChangeBlockStatusType {
  /**
   * Opera Hotel code for the change block status operation.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * Current booking status of the business block.
   * @minLength 0
   * @maxLength 20
   */
  currentBlockStatus?: string;
  /**
   * New booking status of the business block.
   * @minLength 0
   * @maxLength 20
   */
  newBlockStatus?: string;
  /**
   * Reservation type of the business block.
   * @minLength 0
   * @maxLength 20
   */
  reservationType?: string;
  /** Information related to cancel block like cancel reason, destination and lost to property. */
  cancellationDetails?: CancellationDetailsType;
  /** Information related to PM reservations cancel like cancel reason and description. */
  pMReservationsCancellationDetails?: CancellationDetailsType;
  /** Basic information of master and sub blocks structure in tree manner, this element only used while retrieving Block Type. */
  masterSubBlockInfo?: MasterBlockInfoType;
  /** Indicates whether to overbook when transitioning from a non-deduct to deduct inventory status. */
  overbookAll?: boolean;
  /** Indicates whether to cancel all PM reservations when canceling a block, if any. */
  cancelAllPMReservations?: boolean;
  /** Indicates to apply block status code to catering status if existing values are same. */
  applyChangesToCateringSatus?: boolean;
  /** Indicates whether to ignore any warning during applying the changes to the events associated with the current block. */
  overrideEventsProcessingWarnings?: boolean;
}

/** Response object for the request to change block status. Response contains information on the block whose status was successfully changed. */
export interface ChangedBlockStatus {
  /** Provides detailed information regarding a block. */
  block?: BlockType;
  /** Information on the block that was canceled. */
  cancellationDetails?: CancellationDetailsType;
  /** List of possible next booking statuses of the business block. */
  blockNextStatusList?: BlockNextStatusListType;
  /** List of booking status changes. */
  blockStatusChangeHistory?: BlockStatusChangeHistoryType;
  /** Indicates whether block has any active PM reservations. */
  anyActivePMReservations?: boolean;
  /** Status of the processed events after the block catering status change. */
  cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request object to create new sub block. */
export interface SubBlock {
  /** Criteria to create new sub block. */
  criteria?: {
    /** Collection of unique block identifiers. */
    blockIdList?: BlockIdList;
    /** Master Block's Hotel Code. */
    masterBlockHotelCode?: CodeType;
    /** Sub Block Information for creating Sub Blocks. */
    subBlockInfo?: CreateSubBlockBaseInfoType[];
  };
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface CreateSubBlockBaseInfoType {
  /**
   * Sub Block's Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Block description.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /**
   * Block code for the sub block.
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * Origin information of the block PMS/ORS/SC/SFA
   * @minLength 0
   * @maxLength 20
   */
  blockOrigin?: string;
  /** TimeSpan reflects the Start, End of the sub block. */
  timeSpan?: TimeSpanType;
}

/** Fetch traces response. */
export interface TracesByDateRange {
  /** List of all of the block and reservation traces based on the request search criteria. */
  tracesInfoList?: TracesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of the traces
 * @maxItems 4000
 */
export type TracesType = MiscTraceType[];

/** A collection of retrieved blocks and reservations traces. */
export interface MiscTraceType {
  /** List of common information from block or reservation trace. */
  trace?: TraceType;
  /** Block information related to the trace, if it is a block trace. */
  blockInfo?: TraceBlockInfoType;
  /** Reservation information related to the trace, if it is a reservation trace. */
  reservationInfo?: TraceResvInfoType;
}

export interface TraceType {
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

/** Block information related to the trace. */
export interface TraceBlockInfoType {
  /** Collection of unique block identifiers, which contains BlockID and BlockCode. */
  blockIdList?: BlockIdList;
  /**
   * Hotel Code where trace is set.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Name of the block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** The Time Span(Arrival, Departure) which covers the Block Span. */
  timeSpan?: TimeSpanType;
}

/** Reservation information related to the trace. */
export interface TraceResvInfoType {
  /** Used to provide PMS and/or CRS identifiers that trace is associated with. */
  reservationIdList?: ReservationIdList;
  /**
   * Hotel Code where trace is set.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The Time Span which covers the Room Stay. */
  timeSpan?: TimeSpanType;
  /**
   * Room Id
   * @minLength 0
   * @maxLength 20
   */
  roomId?: string;
  /**
   * Current Room Status.
   * @minLength 0
   * @maxLength 2000
   */
  roomStatus?: string;
  /**
   * Current Reservation Status.
   * @minLength 0
   * @maxLength 2000
   */
  reservationStatus?: string;
  /**
   * Collection of guests associated with the reservation.
   * @maxItems 4000
   */
  reservationGuests?: ResGuestType[];
}

/** The standard optional Opera Context element is also included. */
export interface InventoryToBorrow {
  /** Opera Hotel code for the Borrow Inventory request. */
  hotelId?: CodeType;
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /** The unique id of an existing reservation. This should be supplied when borrowing inventory when an existing reservation is being edited. */
  existingReservationId?: UniqueIDType;
  /** The Room type for which the rooms need to be borrowed. */
  roomType?: CodeType;
  /** The number of adults that are expected to stay in a room. */
  adultCount?: number;
  /** Indicates whether to overbook the Sales Allowance in case there are no rooms left at the Generic Sales Allowance level. */
  overbookSalesAllowance?: boolean;
  /** The date and number of rooms to borrow from either room type or House. */
  borrowInventoryList?: BorrowInventoryType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This holds the number of rooms for each date that will be borrowed from the candidate room type provided. */
export interface BorrowInventoryType {
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * The date on which rooms need to be borrowed for the block either from another room type in the block or from House if the block is elastic.
   * @format date
   * @maxLength 8
   */
  borrowDate?: string;
  /**
   * Specifies the number of rooms to be borrowed from the room type or House.
   * @maxItems 4000
   */
  borrowRooms?: BorrowRoomType[];
}

/** Specifies the number of rooms to be borrowed from the room type or House. */
export interface BorrowRoomType {
  /** Indicates if the rooms are to be borrowed from the House. */
  house?: HouseType;
  /**
   * Indicates the room type from which the rooms will be borrowed.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** The number of rooms that need to be borrowed. */
  roomsToBorrow?: number;
}

/** Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House. */
export type HouseType = object;

/** The standard optional Opera Context element is also included. */
export interface BorrowedInventoryToReturn {
  /** Opera Hotel code for the Borrow Inventory request. */
  hotelId?: CodeType;
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /** The unique id of an existing reservation. This should be supplied when returning borrowed inventory when an existing reservation is being edited. */
  existingReservationId?: UniqueIDType;
  /** The source Room type from which the borrowed rooms need to be returned. */
  roomType?: CodeType;
  /** The number of adults that are expected to stay in a room. */
  adultCount?: number;
  /** The date and number of rooms to return to either a room type or House. */
  inventoryToReturnList?: InventoryToReturnType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This holds the number of rooms for each date that will be returned to the room destination type provided. */
export interface InventoryToReturnType {
  /** Specifies the Block ID which is the unique identifier for the Block for both internal and external systems. */
  blockId?: BlockId;
  /**
   * The date on which rooms need to be returned for the block either to another room type in the block or to House if the borrowed room was from House.
   * @format date
   * @maxLength 8
   */
  returnDate?: string;
  /**
   * Specifies the collection of number of rooms to be returned to room types or House.
   * @maxItems 4000
   */
  returnRooms?: ReturnRoomType[];
}

/** Specifies the number of rooms to be returned to a room type or House. */
export interface ReturnRoomType {
  /** Indicates if the rooms are to be returned to House. */
  house?: HouseType;
  /**
   * Indicates the room type to which the rooms will be returned.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** The number of rooms that need to be returned. */
  roomsToReturn?: number;
}

/** Response object that returns the candidate room types on which inventory is available to borrow. The standard optional Opera Context element is also included. */
export interface InventoryToBorrowInfo {
  /** Contains the dates and rooms that can be borrowed from room types or House if the block is elastic. */
  borrowCandidates?: BorrowCandidateType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** This contains a collection of all dates and required rooms. It also contains the borrow candidates which could be room types or house. */
export interface BorrowCandidateType {
  /** Collection of unique block identifiers */
  blockId?: BlockId;
  /**
   * The date on which rooms need to be borrowed for the block.
   * @format date
   * @maxLength 8
   */
  borrowDate?: string;
  /** The unique id of an existing reservation. */
  existingReservationId?: UniqueIDType;
  /** The number of rooms that need to be borrowed. */
  requiredRooms?: number;
  /**
   * Holds the information about a borrowable room type and available rooms for each borrow date.
   * @maxItems 4000
   */
  borrowableInventoryList?: BorrowableInventoryType[];
  /**
   * Specifies the hotel that the block belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** This provides a collection of all borrowable room types by date. */
export interface BorrowableInventoryType {
  /** This indicates that the room will be borrowed from House. */
  house?: HouseType;
  /**
   * The room type that contains rooms that can be borrowed.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** The number of rooms that are available to be borrowed from the room type or house. */
  availableRooms?: number;
  /** The number of sell limit rooms that are available for the room type. */
  availableSellLimit?: number;
  /** The collection of error messages. These are the message associated with the room type that will prevent it from being borrowed. */
  errors?: ErrorsType;
  /** The collection of warning messages. These are the messages associated with the borrowable room type that will require some user overrides if rooms are to be borrowed. */
  warning?: WarningsType;
}

export interface RecentlyAccessedBlocks {
  /** List of recently accessed blocks. */
  blocks?: RecentlyAccessedBlocksType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * A single recently accessed block.
 * @maxItems 10
 */
export type RecentlyAccessedBlocksType = RecentlyAccessedBlockType[];

/** A recently used block record. */
export interface RecentlyAccessedBlockType {
  /** Collection of unique block identifiers. */
  blockIdList?: BlockIdList;
  /**
   * Business Block Code
   * @minLength 0
   * @maxLength 20
   */
  blockCode?: string;
  /**
   * The name of the business block.
   * @minLength 0
   * @maxLength 2000
   */
  blockName?: string;
  /** Business block start date and end date. */
  timeSpan?: TimeSpanType;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @format date
   * @maxLength 8
   */
  accessDate?: string;
}

/** Response returned by fetch corrected sales allowances. */
export interface SalesAllowances {
  /** All corrected sales allowances that meet the criteria. */
  salesAllowances?: SalesAllowancesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of Sales Allowances.
 * @maxItems 4000
 */
export type SalesAllowancesType = SalesAllowanceType[];

/** A single sales allowances. */
export interface SalesAllowanceType {
  /** ID of sales allowance. */
  ceilingId?: SalesAllowanceIDType;
  /**
   * Properties for which sales allowances exist.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Number of Room nights booked at a deduct status for the date. */
  allotmentDeductQty?: number;
  /**
   * Ceiling date for the Sales Allowance.
   * @format date
   * @maxLength 8
   */
  ceilingDate?: string;
  /** Number of Rooms allotted for the Sales Allowance. */
  salesAllowance?: number;
  /** Number of Rooms booked against the Sales Allowance. */
  booked?: number;
  /** Number of rooms booked that is more than the allotted Sales Allowance. */
  overBooked?: number;
  /** Number of rooms still available on the Sales Allowance. */
  available?: number;
}

/** Unique identifier of a single sales allowance. */
export interface SalesAllowanceIDType {
  /** ID of sales allowance. */
  ceilingId?: number;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/blk/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Block API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /blk/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  allocation = {
    /**
     * @description Use this API to create sub allocation. <p><strong>OperationId:</strong>postSubAllocation</p>
     *
     * @tags Block
     * @name PostSubAllocation
     * @summary Create Sub allocation
     * @request POST:/allocation
     */
    postSubAllocation: (hotelId: string, subAllocation: SubAllocation, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/allocation`,
        method: 'POST',
        body: subAllocation,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockActivityLog = {
    /**
     * @description Use this API to facilitate retrieving the block activity log. <p><strong>OperationId:</strong>getBlockActivityLog</p>
     *
     * @tags Block
     * @name GetBlockActivityLog
     * @summary Get the Block activity log
     * @request GET:/blockActivityLog
     */
    getBlockActivityLog: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Hotel code. */
        hotelId?: string;
        /**
         * Activity module.
         * @uniqueItems true
         */
        module?:
          | 'Reservation'
          | 'Contract'
          | 'Allotment'
          | 'Outlookview'
          | 'Profile'
          | 'Accountreceivables'
          | 'GdsConvRateCodes'
          | 'RateCode'
          | 'Billing'
          | 'Activity';
        /** Name of the parameter. */
        moduleParamsParameterName?: string[];
        /** Value of the parameter. */
        moduleParamsParameterValue?: string[];
        activityGroup?: string;
        activityType?: string;
        /**
         * Search from date for the user activity log.
         * @format date
         */
        activityParamsFromDate?: string;
        /**
         * Search to date for the user activity log.
         * @format date
         */
        activityParamsToDate?: string;
        /** Search text for the user activity log. */
        activityParamsSearchText?: string;
        userByIDsUserId?: number[];
        userForIDsUserId?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockActivityLog, ExceptionDetailType>({
        path: `/blockActivityLog`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blockWash = {
    /**
     * @description This API removes block allocation to a range of dates for a set of room types. <p><strong>OperationId:</strong>putBlockAllocationWash</p>
     *
     * @tags Block
     * @name PutBlockAllocationWash
     * @summary Update Block Allocation Wash
     * @request PUT:/blockWash
     */
    putBlockAllocationWash: (hotelId: string, blockAllocationWash: BlockAllocationWash, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blockWash`,
        method: 'PUT',
        body: blockAllocationWash,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves block information needed to perform block wash operation. <p><strong>OperationId:</strong>getBlockWashInfo</p>
     *
     * @tags Block
     * @name GetBlockWashInfo
     * @summary Get Block Wash Information
     * @request GET:/blockWash
     */
    getBlockWashInfo: (
      hotelId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        blockId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        blockIdType?: string;
        /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
        genericRoomType?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockWashInfo, ExceptionDetailType>({
        path: `/blockWash`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  blocks = {
    /**
     * @description Use this API to retrieve blocks.  You can use the query parameters to narrow down your results. <p><strong>OperationId:</strong>getBlocks</p>
     *
     * @tags Block
     * @name GetBlocks
     * @summary Get Blocks
     * @request GET:/blocks
     */
    getBlocks: (
      hotelId: string,
      query?: {
        hotelId?: string;
        /** Mark this block as recently accessed. */
        markAsRecentlyAccessed?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Hotel code. */
        multipleHotelsSearchHotelIds?: string[];
        /** Free form text field for searching block fields */
        superSearch?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        blockIdList?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        blockIdType?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        externalReferenceIds?: string[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        externalSystemCodes?: string[];
        /** Block code */
        blockCode?: string;
        /** Block Name */
        blockName?: string;
        /** Block Owner. */
        blockOwner?: string[];
        /** Block Status. */
        blockStatus?: string[];
        /** Catering Status. */
        cateringStatus?: string[];
        /** user who created the Block(s). */
        createdByUser?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        blockStartEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        blockStartStartDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        blockEndEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        blockEndStartDate?: string;
        /**
         * Date when guests plan to arrive(first night stay date).
         * @format date
         */
        reservationArrival?: string;
        /**
         * Date when guests plan to leave(last stay day date).
         * @format date
         */
        reservationDeparture?: string;
        /** Whether to include shoulder dates when considering stay date. */
        includeShoulderDates?: boolean;
        /** @format date */
        stayDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        blockCreatedOnEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        blockCreatedOnStartDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        decisionEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        decisionStartDate?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        cutOffEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        cutOffStartDate?: string;
        /**
         * Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company.
         * @uniqueItems true
         */
        category?: ('Group' | 'Source' | 'Agent' | 'Contact' | 'Company' | 'Account')[];
        /** Attached profile name */
        name?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        attachedProfileId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        attachedProfileIdType?: string;
        /** Show Leads in the search result. */
        leads?: boolean;
        /** Show tour series in the search result. */
        tourSeries?: boolean;
        /** Fetch only blocks which are open for pickup, if true. If the value is false, fetch all block statuses. */
        onlyPickupBlocks?: boolean;
        /** Indicates that only Opportunity blocks will be fetched. */
        onlyOpportunities?: boolean;
        /** Rate Plan Code. */
        ratePlanCode?: string[];
        /** Tour code for the block. */
        tourCode?: string;
        attributeName?: string[];
        /** @uniqueItems true */
        orderType?: ('Asc' | 'Desc')[];
        /**
         * Type for block instructions that can be used in requests for partial operations.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'AccessExclusions'
          | 'Aliases'
          | 'AlternateDates'
          | 'Attachments'
          | 'Block'
          | 'BlockNextStatuses'
          | 'BlockStatusHistory'
          | 'CatNextStatuses'
          | 'CatStatusHistory'
          | 'Comments'
          | 'DateProtect'
          | 'ExternalReferences'
          | 'GenericRateGrid'
          | 'Header'
          | 'Indicators'
          | 'InventoryItems'
          | 'Owners'
          | 'Packages'
          | 'Policies'
          | 'PrimaryOwners'
          | 'PrimaryProfiles'
          | 'PrimaryRates'
          | 'Profiles'
          | 'RateGrid'
          | 'RateProgram'
          | 'Rates'
          | 'Restrictions'
          | 'SellMessages'
          | 'Statistics'
          | 'SummaryStatistics'
          | 'Traces'
          | 'WashSchedules'
        )[];
        /** Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. */
        fetchAllocatedRoomTypes?: boolean;
        /**
         * Start Date for the rate grid data. Only applicable to fetch instruction RateGrid.
         * @format date
         */
        additionalCriteriaStartDate?: string;
        /** Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. */
        numberOfDays?: number;
        /** Defines the number of Adults. */
        adults?: number;
        /** Defines the number of Children. */
        children?: number;
        /** Age of a child in years. */
        childAge?: number[];
        /** Number of children classified under the first Age Qualifying Group(Child Bucket#1). */
        bucket1Count?: number;
        /** Number of children classified under the second Age Qualifying Group(Child Bucket#2). */
        bucket2Count?: number;
        /** Number of children classified under the third Age Qualifying Group(Child Bucket#3). */
        bucket3Count?: number;
        /** Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). */
        bucket4Count?: number;
        /** Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). */
        bucket5Count?: number;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        existingReservationId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        existingReservationIdType?: string;
        /**
         * Simple type for block allocation used in room rate grid.
         * @uniqueItems true
         */
        roomAllocationCriteria?: (
          | 'Initial'
          | 'Actual'
          | 'Rates'
          | 'Pickup'
          | 'Contract'
          | 'Available'
          | 'Pickupperc'
          | 'Changes'
          | 'Released'
          | 'Houseavailability'
          | 'SellLimit'
          | 'AvailableSellLimit'
          | 'MasterAllocInitial'
          | 'Allocated'
          | 'SubAllocResv'
          | 'CutoffDate'
        )[];
        /** The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. */
        roomType?: string[];
        /** Rate Plan to use for fetching rates. */
        additionalCriteriaRatePlanCode?: string;
        /** Curency in which the grid rates should be fetched. */
        currencyCode?: string;
        /** Label of user defined field used by vendors or customers. */
        customCharUDFsAltname?: string[];
        /** Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. */
        customCharUDFsName?: string[];
        /** Value of user defined field. */
        customCharUDFsValue?: string[];
        /** Label of user defined field used by vendors or customers. */
        customNumericUDFsAltname?: string[];
        /** Name of user defined field. */
        customNumericUDFsName?: string[];
        /** Value of user defined field. */
        customNumericUDFsValue?: number[];
        /** Label of user defined field used by vendors or customers. */
        customDateUDFsAltname?: string[];
        /** Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. */
        customDateUDFsName?: string[];
        /** Value of user defined field. */
        customDateUDFsValue?: string[];
        /**
         * Simple type for block access exclusion/restriction types.
         * @uniqueItems true
         */
        accessRestriction?: ('Availability' | 'Create' | 'Modify' | 'Cancel')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockSummaries, ExceptionDetailType>({
        path: `/blocks`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to validate if block rate code has overlapping blocks and also validates and creates block details. <p><strong>OperationId:</strong>postBlockValidate</p>
     *
     * @tags Block
     * @name PostBlockValidate
     * @summary Validate Block
     * @request POST:/blocks/actions/validate
     */
    postBlockValidate: (hotelId: string, blockValidate: BlockValidate, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/actions/validate`,
        method: 'POST',
        body: blockValidate,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve block daily statistics for the given date range and hotel ID. It returns allocated, picked up, and available number of room nights per block, per day, per room type.<p><strong>OperationId:</strong>getBlockDailyStatistics</p>
     *
     * @tags Block
     * @name GetBlockDailyStatistics
     * @summary Get Block Daily Statistics
     * @request GET:/blocks/dailyStatistics
     */
    getBlockDailyStatistics: (
      hotelId: string,
      query?: {
        /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
        genericRoomType?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Pertain Hotel Code for search criteria. */
        hotelId?: string;
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
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockDailyStatistics, ExceptionDetailType>({
        path: `/blocks/dailyStatistics`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves block statistics. <p><strong>OperationId:</strong>getBlockStats</p>
     *
     * @tags BlockStats
     * @name GetBlockStats
     * @summary Get Block statistics
     * @request GET:/blocks/statistics
     */
    getBlockStats: (
      hotelId: string,
      query?: {
        /** Property context of the request. */
        hotelId?: string;
        /**
         * Supported Housekeeping report codes.
         * @uniqueItems true
         */
        reportCode?: (
          | 'HouseSummary'
          | 'HouseSummaryMonthToDate'
          | 'HouseSummaryYearToDate'
          | 'ReservationActivity'
          | 'ReservationActivityDaily'
          | 'ReservationActivityMonthToDate'
          | 'ReservationActivityYearToDate'
          | 'ComplimentaryOrHouseUse'
          | 'DailyProjection'
          | 'RoomStatus'
          | 'LastHourStatus'
          | 'Turndown'
          | 'InHouse'
          | 'CheckIns'
          | 'CheckOuts'
          | 'AvailableRooms'
          | 'RoomMaintenance'
          | 'ReservationStatistics'
          | 'VIPGuests'
          | 'AdvanceCheckIn'
          | 'BlockArrivals'
          | 'ReservationsCancellationsToday'
          | 'AIRoomAssignment'
          | 'CompRouting'
        )[];
        /** End date of the report. */
        reportEndDate?: string[];
        /** Start date of the report. */
        reportStartDate?: string[];
        /**
         * Supported housekeeping statistical codes.
         * @uniqueItems true
         */
        statisticalCode?: (
          | 'ApprovedCompPostings'
          | 'StagedCompPostings'
          | 'DeclinedCompPostings'
          | 'CompRoutingInstructionsRequests'
          | 'TotalPhysicalRooms'
          | 'TotalRoomsToSell'
          | 'TotalOutOfOrder'
          | 'TotalOutOfService'
          | 'TotalRevenue'
          | 'PercentRoomsOccupied'
          | 'StayoverRooms'
          | 'StayoverPersons'
          | 'StayoverVIP'
          | 'DeparturesExpectedRooms'
          | 'DeparturesExpectedPersons'
          | 'DeparturesExpectedVIP'
          | 'DeparturesActualRooms'
          | 'DeparturesActualPersons'
          | 'DeparturesActualVIP'
          | 'DeparturesInLastHour'
          | 'ArrivalsInLastHour'
          | 'ArrivalsTotal'
          | 'ArrivalsExpectedRooms'
          | 'ArrivalsExpectedPersons'
          | 'ArrivalsExpectedVIP'
          | 'ArrivalsExpectedRoomsMadeToday'
          | 'ArrivalsExpectedPersonsMadeToday'
          | 'ArrivalsExpectedVIPMadeToday'
          | 'ArrivalsActualRooms'
          | 'ArrivalsActualPersons'
          | 'ArrivalsActualVIP'
          | 'ExtendedStaysRooms'
          | 'ExtendedStaysPersons'
          | 'ExtendedStaysVIP'
          | 'DeparturesTotal'
          | 'EarlyDeparturesRooms'
          | 'EarlyDeparturesPersons'
          | 'EarlyDeparturesVIP'
          | 'DayUseRooms'
          | 'DayUsePersons'
          | 'DayUseVIP'
          | 'WalkInRooms'
          | 'WalkInPersons'
          | 'WalkInVIP'
          | 'CanceledOnArrivalRooms'
          | 'CanceledOnArrivalPersons'
          | 'CanceledOnArrivalVIP'
          | 'ComplimentaryArrivalRooms'
          | 'ComplimentaryArrivalPersons'
          | 'ComplimentaryArrivalVIP'
          | 'ComplimentaryStayoverRooms'
          | 'ComplimentaryStayoverPersons'
          | 'ComplimentaryStayoverVIP'
          | 'ComplimentaryDepartureRooms'
          | 'ComplimentaryDeparturePersons'
          | 'ComplimentaryDepartureVIP'
          | 'HouseUseArrivalVIP'
          | 'HouseUseStayoverRooms'
          | 'HouseUseStayoverPersons'
          | 'HouseUseStayoverVIP'
          | 'HouseUseDepartureRooms'
          | 'HouseUseDeparturePersons'
          | 'HouseUseDepartureVIP'
          | 'MinAvailableTonightRooms'
          | 'MaxOccupiedTonightRooms'
          | 'MaxOccupiedTonightPersons'
          | 'MaxOccupiedTonightVIP'
          | 'MaxPercentageOccupiedTonightRooms'
          | 'BlocksNotPickedUp'
          | 'IndividualRooms'
          | 'IndividualPersons'
          | 'IndividualVIP'
          | 'GroupAndBlockRooms'
          | 'GroupAndBlockPersons'
          | 'GroupAndBlockVIP'
          | 'RoomRevenue'
          | 'AverageRoomRevenue'
          | 'InspectedRooms'
          | 'InspectedVacant'
          | 'InspectedAssigned'
          | 'InspectedOccupied'
          | 'CleanedRooms'
          | 'CleanVacant'
          | 'CleanAssigned'
          | 'CleanOccupied'
          | 'DirtyVacant'
          | 'DirtyAssigned'
          | 'DirtyOccupied'
          | 'PickupVacant'
          | 'PickupAssigned'
          | 'PickupOccupied'
          | 'OutOfOrderVacant'
          | 'OutOfOrderAssigned'
          | 'OutOfOrderOccupied'
          | 'OutOfServiceVacant'
          | 'OutOfServiceAssigned'
          | 'OutOfServiceOccupied'
          | 'QueueRooms'
          | 'TurndownRequired'
          | 'TurndownNotRequired'
          | 'TurndownCompletedRequired'
          | 'AdultsInHouse'
          | 'ChildrenInHouse'
          | 'AdultsExpectedCheckedOut'
          | 'ChildrenExpectedCheckedOut'
          | 'AdultsDeparted'
          | 'ChildrenDeparted'
          | 'InHouseRooms'
          | 'InHouse'
          | 'MaxOccupancyPercentage'
          | 'Stayover'
          | 'TotalRoomsReserved'
          | 'RevPar'
          | 'SkipRooms'
          | 'SleepRooms'
          | 'HouseUseArrivalRooms'
          | 'HouseUseArrivalPersons'
          | 'AverageCheckInTime'
          | 'CurrentAveWaitTime'
          | 'CheckedInsTotal'
          | 'ExpectedCheckInsTotal'
          | 'CheckedOutsTotal'
          | 'ExpectedCheckOutsTotal'
          | 'ScheduledCheckOutsTotal'
          | 'RoomMaintenanceResolvedTotal'
          | 'RoomMaintenanceUnResolvedTotal'
          | 'PreRegisteredTotal'
          | 'VIPPreRegisteredTotal'
          | 'OpenFolioTotal'
          | 'TurndownTotal'
          | 'VIPTurndownTotal'
          | 'VIPGuestsArriving'
          | 'VIPGuestsDeparting'
          | 'VIPGuestsTotal'
          | 'IndividualAdvanceCheckedInCurrent'
          | 'BlockAdvanceCheckedInCurrent'
          | 'IndividualAdvanceCheckedInInhouse'
          | 'BlockAdvanceCheckedInInhouse'
          | 'IndividualAdvanceCheckedInTotal'
          | 'BlockAdvanceCheckedInTotal'
          | 'InHouseBlocksTotal'
          | 'CancellationsTotal'
          | 'NewReservationsTotal'
          | 'ArrivalResvs'
          | 'ArrivalVIPResvs'
          | 'ArrivalMemberResvs'
          | 'ArrivalUnallocResvs'
          | 'ArrivalManualAssgnResvs'
          | 'ArrivalAIAssgnResvs'
          | 'ArrivalAIUpgResvs'
          | 'ArrivalAIAssgnVIPResvs'
          | 'ArrivalAIAssgnMemberResvs'
          | 'ArrivalAIAssgnOverridden'
        )[];
        /** Name of the parameter. */
        reportParametersParameterName?: string[];
        /** Value of the parameter. */
        reportParametersParameterValue?: string[];
        /**
         * Supported Housekeeping report codes.
         * @uniqueItems true
         */
        blockOwnersCode?: (
          | 'HouseSummary'
          | 'HouseSummaryMonthToDate'
          | 'HouseSummaryYearToDate'
          | 'ReservationActivity'
          | 'ReservationActivityDaily'
          | 'ReservationActivityMonthToDate'
          | 'ReservationActivityYearToDate'
          | 'ComplimentaryOrHouseUse'
          | 'DailyProjection'
          | 'RoomStatus'
          | 'LastHourStatus'
          | 'Turndown'
          | 'InHouse'
          | 'CheckIns'
          | 'CheckOuts'
          | 'AvailableRooms'
          | 'RoomMaintenance'
          | 'ReservationStatistics'
          | 'VIPGuests'
          | 'AdvanceCheckIn'
          | 'BlockArrivals'
          | 'ReservationsCancellationsToday'
          | 'AIRoomAssignment'
          | 'CompRouting'
        )[];
        /**
         * Supported Housekeeping report codes.
         * @uniqueItems true
         */
        blockStatusCode?: (
          | 'HouseSummary'
          | 'HouseSummaryMonthToDate'
          | 'HouseSummaryYearToDate'
          | 'ReservationActivity'
          | 'ReservationActivityDaily'
          | 'ReservationActivityMonthToDate'
          | 'ReservationActivityYearToDate'
          | 'ComplimentaryOrHouseUse'
          | 'DailyProjection'
          | 'RoomStatus'
          | 'LastHourStatus'
          | 'Turndown'
          | 'InHouse'
          | 'CheckIns'
          | 'CheckOuts'
          | 'AvailableRooms'
          | 'RoomMaintenance'
          | 'ReservationStatistics'
          | 'VIPGuests'
          | 'AdvanceCheckIn'
          | 'BlockArrivals'
          | 'ReservationsCancellationsToday'
          | 'AIRoomAssignment'
          | 'CompRouting'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockStats, ExceptionDetailType>({
        path: `/blocks/statistics`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve next set of statuses and their next statuses for the current status passed in the request. <p><strong>OperationId:</strong>getNextBlockStatus</p>
     *
     * @tags Block
     * @name GetNextBlockStatus
     * @summary Get Next Block Status
     * @request GET:/blocks/status
     */
    getNextBlockStatus: (
      hotelId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        currentStatus?: string;
        /** Flag to include catering next status. */
        includeCateringStatus?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<NextBlockStatus, ExceptionDetailType>({
        path: `/blocks/status`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API validates the block code for the following if applicable - Unique block code/ Start of inventory week/ Block code template. <p><strong>OperationId:</strong>putValidateBlockCode</p>
     *
     * @tags Block
     * @name PutValidateBlockCode
     * @summary Validate Block Code
     * @request PUT:/blocks/{blockCode}/actions/validate
     */
    putValidateBlockCode: (
      hotelId: string,
      blockCode: string,
      blockCodeToValidate: BlockCodeToValidate,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockCode}/actions/validate`,
        method: 'PUT',
        body: blockCodeToValidate,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create alternate dates for a block. <p><strong>OperationId:</strong>postAlternateDates</p>
     *
     * @tags Block
     * @name PostAlternateDates
     * @summary Create alternate dates for a Block
     * @request POST:/blocks/{blockId}/alternateDates
     */
    postAlternateDates: (
      hotelId: string,
      blockId: string,
      blockAlternateDates: BlockAlternateDates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/alternateDates`,
        method: 'POST',
        body: blockAlternateDates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to change alternate dates for a block. <p><strong>OperationId:</strong>putAlternateDates</p>
     *
     * @tags Block
     * @name PutAlternateDates
     * @summary Change alternate dates for a Block
     * @request PUT:/blocks/{blockId}/alternateDates
     */
    putAlternateDates: (
      hotelId: string,
      blockId: string,
      blockAlternateDates: BlockAlternateDates,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/alternateDates`,
        method: 'PUT',
        body: blockAlternateDates,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete alternate dates for a block. <p><strong>OperationId:</strong>deleteAlternateDates</p>
     *
     * @tags Block
     * @name DeleteAlternateDates
     * @summary Delete alternate dates for a Block
     * @request DELETE:/blocks/{blockId}/alternateDates
     */
    deleteAlternateDates: (hotelId: string, blockId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/alternateDates`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve block attachments. <p><strong>OperationId:</strong>getBlockAttachments</p>
     *
     * @tags Block
     * @name GetBlockAttachments
     * @summary Get Block Attachments
     * @request GET:/blocks/{blockId}/attachments
     */
    getBlockAttachments: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Hotel Code. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockAttachments, ExceptionDetailType>({
        path: `/blocks/${blockId}/attachments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API remove block attachments. <p><strong>OperationId:</strong>deleteBlockAttachment</p>
     *
     * @tags Block
     * @name DeleteBlockAttachment
     * @summary Delete Block Attachment
     * @request DELETE:/blocks/{blockId}/attachments/{attachId}
     */
    deleteBlockAttachment: (hotelId: string, attachId: string, blockId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/attachments/${attachId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Us this API to create/change block access exclusion information. <p><strong>OperationId:</strong>putBlockAccessExclusion</p>
     *
     * @tags Block
     * @name PutBlockAccessExclusion
     * @summary Set Block Exclusion information
     * @request PUT:/blocks/{blockId}/blockAccessExclusion
     */
    putBlockAccessExclusion: (
      hotelId: string,
      blockId: string,
      blockAccessExclusion: BlockAccessExclusion,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/blockAccessExclusion`,
        method: 'PUT',
        body: blockAccessExclusion,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves block exclusion information. <p><strong>OperationId:</strong>getBlockAccessExclusion</p>
     *
     * @tags Block
     * @name GetBlockAccessExclusion
     * @summary Get Block exclusion information
     * @request GET:/blocks/{blockId}/blockAccessExclusion
     */
    getBlockAccessExclusion: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockAccessExclusionInfo, ExceptionDetailType>({
        path: `/blocks/${blockId}/blockAccessExclusion`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete block access exclusion <p><strong>OperationId:</strong>deleteBlockAccessExclusion</p>
     *
     * @tags Block
     * @name DeleteBlockAccessExclusion
     * @summary Delete Block access exclusion
     * @request DELETE:/blocks/{blockId}/blockAccessExclusion
     */
    deleteBlockAccessExclusion: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Allow to cancel a reservation under this access exclusion. */
        allowCancelReservation?: boolean;
        /** Allow to create a reservation under this access exclusion. */
        allowCreateReservation?: boolean;
        /** Allow to modify a reservation under this access exclusion. */
        allowModifyReservation?: boolean;
        /** Exclude a specific rate from availability */
        excludeFromAvailability?: boolean;
        /** The rate access exclusion is inactive */
        inactive?: boolean;
        /** The type of source (CRO or Hotel code) for which the rate access exclusion is set. */
        sourceType?: string;
        /** CRO or Hotel code value. */
        sourceValue?: string;
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/blockAccessExclusion`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API cuts off block allocation effective current date. <p><strong>OperationId:</strong>putBlockCutoff</p>
     *
     * @tags Block
     * @name PutBlockCutoff
     * @summary Block Cut Off
     * @request PUT:/blocks/{blockId}/blockCutOff
     */
    putBlockCutoff: (hotelId: string, blockId: string, blockStatus: BlockStatus, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/blockCutOff`,
        method: 'PUT',
        body: blockStatus,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve block owners. <p><strong>OperationId:</strong>getBlockOwners</p>
     *
     * @tags Block
     * @name GetBlockOwners
     * @summary Get Block owners
     * @request GET:/blocks/{blockId}/owners
     */
    getBlockOwners: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Hotel code of the business block. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockOwners, ExceptionDetailType>({
        path: `/blocks/${blockId}/owners`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to assign block owners. <p><strong>OperationId:</strong>postBlockOwners</p>
     *
     * @tags Block
     * @name PostBlockOwners
     * @summary Assign a Block owner
     * @request POST:/blocks/{blockId}/owners
     */
    postBlockOwners: (
      hotelId: string,
      blockId: string,
      blockOwnersToAssign: BlockOwnersToAssign,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/owners`,
        method: 'POST',
        body: blockOwnersToAssign,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete a block owner. <p><strong>OperationId:</strong>deleteBlockOwners</p>
     *
     * @tags Block
     * @name DeleteBlockOwners
     * @summary Delete a Block owner
     * @request DELETE:/blocks/{blockId}/owners
     */
    deleteBlockOwners: (hotelId: string, blockId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/owners`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to change block owners. <p><strong>OperationId:</strong>putBlockOwners</p>
     *
     * @tags Block
     * @name PutBlockOwners
     * @summary Change Block owners
     * @request PUT:/blocks/{blockId}/owners
     */
    putBlockOwners: (
      hotelId: string,
      blockId: string,
      blockOwnersToChange: BlockOwnersToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/owners`,
        method: 'PUT',
        body: blockOwnersToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to refreshes block rates. <p><strong>OperationId:</strong>putBlockRates</p>
     *
     * @tags Block
     * @name PutBlockRates
     * @summary Refreshes Block rates
     * @request PUT:/blocks/{blockId}/rates
     */
    putBlockRates: (hotelId: string, blockId: string, blockStatus: BlockStatus, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/rates`,
        method: 'PUT',
        body: blockStatus,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to make changes to block reservations. <p><strong>OperationId:</strong>putBlockReservations</p>
     *
     * @tags Block
     * @name PutBlockReservations
     * @summary Change Block reservations
     * @request PUT:/blocks/{blockId}/reservations
     */
    putBlockReservations: (
      hotelId: string,
      blockId: string,
      blockReservationsToChange: BlockReservationsToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChangedBlockReservations, ExceptionDetailType>({
        path: `/blocks/${blockId}/reservations`,
        method: 'PUT',
        body: blockReservationsToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to  retrieve all reservations created for the block. <p><strong>OperationId:</strong>getBlockReservations</p>
     *
     * @tags Block
     * @name GetBlockReservations
     * @summary Retrieves all reservations created for the Block
     * @request GET:/blocks/{blockId}/reservations
     */
    getBlockReservations: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Hotel Code to which the block belongs to. */
        hotelId?: string;
        /**
         * Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'Reservation'
          | 'Comments'
          | 'GuestComments'
          | 'Packages'
          | 'InventoryItems'
          | 'ReservationPaymentMethods'
          | 'RoutingInstructions'
          | 'Preferences'
          | 'Memberships'
          | 'Alerts'
          | 'Traces'
          | 'ConfirmationLetters'
          | 'CallHistory'
          | 'FixedCharges'
          | 'GuestMessages'
          | 'ReservationPolicies'
          | 'Indicators'
          | 'LinkedReservations'
          | 'RevenuesAndBalances'
          | 'GuestLastStay'
          | 'ECoupons'
          | 'TrackItItems'
          | 'TotalCostOfStay'
          | 'ReservationAwards'
          | 'WebRegistrationCards'
          | 'ServiceRequests'
          | 'ReservationActivities'
          | 'ScheduledActivities'
          | 'PrepaidCards'
          | 'Shares'
          | 'Attachments'
          | 'Locators'
          | 'ProfileAwards'
          | 'TransactionDiversions'
          | 'Tickets'
          | 'GuestMemberships'
          | 'ECertificates'
          | 'UpsellInfo'
          | 'RoomAssignedByAI'
          | 'CustomNameValue'
          | 'CustomChargeExemptions'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockReservations, ExceptionDetailType>({
        path: `/blocks/${blockId}/reservations`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API retrieves block restrictions. <p><strong>OperationId:</strong>getBlockRestrictions</p>
     *
     * @tags Block
     * @name GetBlockRestrictions
     * @summary Get Block restrictions
     * @request GET:/blocks/{blockId}/restrictions
     */
    getBlockRestrictions: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Hotel Code to which the block belongs to. */
        hotelId?: string;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /** Room Type for the restriction. */
        roomType?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockRestrictions, ExceptionDetailType>({
        path: `/blocks/${blockId}/restrictions`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create block restrictions. <p><strong>OperationId:</strong>postBlockRestriction</p>
     *
     * @tags Block
     * @name PostBlockRestriction
     * @summary Create Block Restriction
     * @request POST:/blocks/{blockId}/restrictions
     */
    postBlockRestriction: (
      hotelId: string,
      blockId: string,
      blockRestriction: BlockRestriction,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/restrictions`,
        method: 'POST',
        body: blockRestriction,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete block restrictions. <p><strong>OperationId:</strong>deleteBlockRestriction</p>
     *
     * @tags Block
     * @name DeleteBlockRestriction
     * @summary Delete Block Restriction
     * @request DELETE:/blocks/{blockId}/restrictions
     */
    deleteBlockRestriction: (
      hotelId: string,
      blockId: string,
      query: {
        /** Hotel to which the block belongs to. */
        hotelId: string;
        /** @format date */
        startDate: string;
        /** @format date */
        endDate: string;
        /** @uniqueItems true */
        code:
          | 'Closed'
          | 'ClosedForArrival'
          | 'ClosedForDeparture'
          | 'MinimumStayThrough'
          | 'MaximumStayThrough'
          | 'MinimumLengthOfStay'
          | 'MaximumLengthOfStay'
          | 'LOSNotAvailable'
          | 'MinimumAdvanceBooking'
          | 'MaximumAdvanceBooking'
          | 'Open'
          | 'OpenForArrival'
          | 'OpenForDeparture';
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/restrictions`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API clears all block restrictions for a given date. <p><strong>OperationId:</strong>putClearAllRestrictions</p>
     *
     * @tags Block
     * @name PutClearAllRestrictions
     * @summary Clear-All Block Restrictions
     * @request PUT:/blocks/{blockId}/restrictions
     */
    putClearAllRestrictions: (
      hotelId: string,
      blockId: string,
      allRestrictions: AllRestrictions,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/restrictions`,
        method: 'PUT',
        body: allRestrictions,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will fetch revenue changes for a specific block recorded in the revenue change log for a specified date range. Please note that the revenue changes are delta changes only and single records do not represent a total summary of the block revenue per date. <p><strong>OperationId:</strong>getBlockRevenueChanges</p>
     *
     * @tags Block
     * @name GetBlockRevenueChanges
     * @summary Fetch Block Revenue Changes
     * @request GET:/blocks/{blockId}/revenueActivityLog
     */
    getBlockRevenueChanges: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Hotel code for this block. */
        hotelId?: string;
        /** Status of this block. */
        status?: string[];
        /**
         * The ending value of the date range.
         * @format date
         */
        changeEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        changeStartDate?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockRevenueChanges, ExceptionDetailType>({
        path: `/blocks/${blockId}/revenueActivityLog`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to set room type order for a block. <p><strong>OperationId:</strong>putRoomTypeOrder</p>
     *
     * @tags Block
     * @name PutRoomTypeOrder
     * @summary Set room type order for a Block
     * @request PUT:/blocks/{blockId}/roomTypeOrder
     */
    putRoomTypeOrder: (hotelId: string, blockId: string, roomTypeOrder: RoomTypeOrder, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/roomTypeOrder`,
        method: 'PUT',
        body: roomTypeOrder,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve room types for a block based on search criteria <p><strong>OperationId:</strong>getBlockRoomTypes</p>
     *
     * @tags Block
     * @name GetBlockRoomTypes
     * @summary Get Bock Room Types
     * @request GET:/blocks/{blockId}/roomTypes
     */
    getBlockRoomTypes: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
        /** Indicates whether to fetch only allocated room types for the block. */
        fetchAllocatedRoomTypes?: boolean;
        /**
         * The start date of the range to be used to fetch allocated room types.
         * @format date
         */
        startDate?: string;
        /**
         * The end date of the range to be used to fetch allocated room types.
         * @format date
         */
        endDate?: string;
        /** Indicates to fetch Generic Room Types (Room Pools). */
        fetchGenericRoomTypes?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockRoomTypes, ExceptionDetailType>({
        path: `/blocks/${blockId}/roomTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a Reservation Rooming List. <p><strong>OperationId:</strong>postRoomingList</p>
     *
     * @tags Block
     * @name PostRoomingList
     * @summary Create Block Rooming List Reservations
     * @request POST:/blocks/{blockId}/roomingList
     */
    postRoomingList: (hotelId: string, blockId: string, roomingList: RoomingList, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomingListDetails, ExceptionDetailType>({
        path: `/blocks/${blockId}/roomingList`,
        method: 'POST',
        body: roomingList,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API facilitates retrieving room status for the block. <p><strong>OperationId:</strong>getBlockRoomsStatus</p>
     *
     * @tags Block
     * @name GetBlockRoomsStatus
     * @summary Get room status for a Block
     * @request GET:/blocks/{blockId}/roomsStatus
     */
    getBlockRoomsStatus: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockRoomsStatus, ExceptionDetailType>({
        path: `/blocks/${blockId}/roomsStatus`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to API retrieve detailed block statistics <p><strong>OperationId:</strong>getBlockStatistics</p>
     *
     * @tags Block
     * @name GetBlockStatistics
     * @summary Get Block Statistics
     * @request GET:/blocks/{blockId}/statistics
     */
    getBlockStatistics: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Hotel Code of the business block. */
        hotelId?: string;
        /**
         * Start date for the statistics data.
         * @format date
         */
        startDate?: string;
        /** Number of days to fetch for statistics data. */
        numberOfDays?: number;
        /**
         * Type of statistic for which its statistics information by date and room type will be populated.
         * @uniqueItems true
         */
        statisticsInstructions?: (
          | 'Contract'
          | 'Initial'
          | 'Actual'
          | 'Pickup'
          | 'Available'
          | 'Change'
          | 'Rates'
          | 'Totalavailable'
          | 'Tentativereservations'
          | 'Pickuppersons'
          | 'Roomrevenue'
          | 'Totalrevenue'
          | 'Avgroomrate'
        )[];
        roomTypeHotelId?: string[];
        /** Block code. */
        invBlockCode?: string[];
        /** Represents the promotional code. */
        promotionCode?: string[];
        roomCategory?: string[];
        roomClass?: string[];
        /** Represents the room qualifier code like Deluxe,Economy,Suite etc. */
        roomQualifierCode?: string[];
        /** Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code. */
        roomQualifierMatchIndicator?: string[];
        roomType?: string[];
        /** Represents the room view code like City view, River view, Ocean view etc. */
        roomViewCode?: string[];
        /** A code representing a room feature. */
        roomFeatureCode?: string[];
        /** Default occupancy of property room type. */
        defaultOccupancy?: number;
        /** Max occupancy of property room type. */
        maximumOccupancy?: number;
        /** Number of physical rooms of property room type. */
        noOfPhysicalRooms?: number;
        bookingChannelCode?: string[];
        bookingChannelMappingCode?: string[];
        bookingChannelMappingName?: string[];
        /** Bed type code associated with room. */
        bedTypeCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockStatistics, ExceptionDetailType>({
        path: `/blocks/${blockId}/statistics`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve block status change log based on the HotelCode and Block ID. <p><strong>OperationId:</strong>getBlockStatusChanges</p>
     *
     * @tags Block
     * @name GetBlockStatusChanges
     * @summary Get Block Status Activity Log
     * @request GET:/blocks/{blockId}/statusActivityLog
     */
    getBlockStatusChanges: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Hotel Code for this block . */
        hotelId?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        changeEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        changeStartDate?: string;
        /** Current Status of the block . */
        currentStatus?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockStatusChanges, ExceptionDetailType>({
        path: `/blocks/${blockId}/statusActivityLog`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a block tour series. <p><strong>OperationId:</strong>postTourSeries</p>
     *
     * @tags Block
     * @name PostTourSeries
     * @summary Create a Block tour series
     * @request POST:/blocks/{blockId}/tourSeries
     */
    postTourSeries: (hotelId: string, blockId: string, tourSeries: TourSeries, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/tourSeries`,
        method: 'POST',
        body: tourSeries,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve the information regarding block wash schedule based on the parameter HotelCode and Block ID. <p><strong>OperationId:</strong>getBlockWashSchedules</p>
     *
     * @tags Block
     * @name GetBlockWashSchedules
     * @summary Get Block Wash Schedule
     * @request GET:/blocks/{blockId}/washSchedules
     */
    getBlockWashSchedules: (
      hotelId: string,
      blockId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockWashSchedules, ExceptionDetailType>({
        path: `/blocks/${blockId}/washSchedules`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API creates new block wash schedules based on Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value. <p><strong>OperationId:</strong>postBlockWashSchedules</p>
     *
     * @tags Block
     * @name PostBlockWashSchedules
     * @summary Create Block Wash Schedules
     * @request POST:/blocks/{blockId}/washSchedules
     */
    postBlockWashSchedules: (
      hotelId: string,
      blockId: string,
      blockWashSchedulesInfo: BlockWashSchedulesInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/washSchedules`,
        method: 'POST',
        body: blockWashSchedulesInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API changes block wash schedules Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value. <p><strong>OperationId:</strong>putBlockWashSchedules</p>
     *
     * @tags Block
     * @name PutBlockWashSchedules
     * @summary Change Block Wash Schedules
     * @request PUT:/blocks/{blockId}/washSchedules
     */
    putBlockWashSchedules: (
      hotelId: string,
      blockId: string,
      blockWashSchedulesInfo: BlockWashSchedulesInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/washSchedules`,
        method: 'PUT',
        body: blockWashSchedulesInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to remove block wash schedules based on the HotelCode, Block ID and Wash Date. <p><strong>OperationId:</strong>deleteBlockWashSchedules</p>
     *
     * @tags Block
     * @name DeleteBlockWashSchedules
     * @summary Remove Block Wash Schedules
     * @request DELETE:/blocks/{blockId}/washSchedules
     */
    deleteBlockWashSchedules: (hotelId: string, blockId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${blockId}/washSchedules`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to copy the a block. The block copied (Source block) will serve as a template for the new one. <p><strong>OperationId:</strong>postCopyBlock</p>
     *
     * @tags Block
     * @name PostCopyBlock
     * @summary Copy a Block
     * @request POST:/blocks/{sourceBlockId}/copy
     */
    postCopyBlock: (hotelId: string, sourceBlockId: string, blockCopy: BlockCopy, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/blocks/${sourceBlockId}/copy`,
        method: 'POST',
        body: blockCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  caterings = {
    /**
     * @description Use this API to update catering status. <p><strong>OperationId:</strong>putCateringStatus</p>
     *
     * @tags Block
     * @name PutCateringStatus
     * @summary Change Catering Status
     * @request PUT:/caterings/{eventId}/cateringStatus
     */
    putCateringStatus: (
      hotelId: string,
      eventId: string,
      cateringStatusToChange: CateringStatusToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChangedCateringStatus, ExceptionDetailType>({
        path: `/caterings/${eventId}/cateringStatus`,
        method: 'PUT',
        body: cateringStatusToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  contractDefaults = {
    /**
     * @description Use this API to set the contract defaults. <p><strong>OperationId:</strong>putContractDefaults</p>
     *
     * @tags Block
     * @name PutContractDefaults
     * @summary Set Contract Defaults
     * @request PUT:/contractDefaults
     */
    putContractDefaults: (hotelId: string, blockStatus: BlockStatus, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/contractDefaults`,
        method: 'PUT',
        body: blockStatus,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  defaultBlockCode = {
    /**
     * @description Use this API to retrieve a default block code based on template. <p><strong>OperationId:</strong>getDefaultBlockCode</p>
     *
     * @tags Block
     * @name GetDefaultBlockCode
     * @summary Get default Block Code
     * @request GET:/defaultBlockCode
     */
    getDefaultBlockCode: (
      hotelId: string,
      query?: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId?: string;
        /** Used for Character Strings, length 0 to 2000. */
        blockName?: string;
        /**
         * Start Date of the business block.
         * @format date
         */
        startDate?: string;
        /** Used for Character Strings, length 0 to 2000. */
        blockCodeTemplate?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<DefaultBlockCodeDetails, ExceptionDetailType>({
        path: `/defaultBlockCode`,
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
     * @description Use this API to create a new group block in OPERA Cloud. You must first use the ListOfValues APIs to find block attributes, such as Block Status, Room Types, and so on. Knowing this list of values helps ensure a successful postBlock. <p><strong>OperationId:</strong>postBlock</p>
     *
     * @tags Block
     * @name PostBlock
     * @summary Create a Block
     * @request POST:/hotels/{hotelId}/block
     */
    postBlock: (hotelId: string, block: Block, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/block`,
        method: 'POST',
        body: block,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve a specific block.  You will need to know the blockID in the request; if you don't know it, please go ahead and use getBlocks API first.  The response will include detailed information about the block. <p><strong>OperationId:</strong>getBlock</p>
     *
     * @tags Block
     * @name GetBlock
     * @summary Get a Block By ID
     * @request GET:/hotels/{hotelId}/blocks/{blockId}
     */
    getBlock: (
      blockId: string,
      hotelId: string,
      query?: {
        /** Mark this block as recently accessed. */
        markAsRecentlyAccessed?: boolean;
        /**
         * Type for block instructions that can be used in requests for partial operations.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'AccessExclusions'
          | 'Aliases'
          | 'AlternateDates'
          | 'Attachments'
          | 'Block'
          | 'BlockNextStatuses'
          | 'BlockStatusHistory'
          | 'CatNextStatuses'
          | 'CatStatusHistory'
          | 'Comments'
          | 'DateProtect'
          | 'ExternalReferences'
          | 'GenericRateGrid'
          | 'Header'
          | 'Indicators'
          | 'InventoryItems'
          | 'Owners'
          | 'Packages'
          | 'Policies'
          | 'PrimaryOwners'
          | 'PrimaryProfiles'
          | 'PrimaryRates'
          | 'Profiles'
          | 'RateGrid'
          | 'RateProgram'
          | 'Rates'
          | 'Restrictions'
          | 'SellMessages'
          | 'Statistics'
          | 'SummaryStatistics'
          | 'Traces'
          | 'WashSchedules'
        )[];
        /** Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. */
        fetchAllocatedRoomTypes?: boolean;
        /**
         * Start Date for the rate grid data. Only applicable to fetch instruction RateGrid.
         * @format date
         */
        startDate?: string;
        /** Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. */
        numberOfDays?: number;
        /**
         * Simple type for block allocation used in room rate grid.
         * @uniqueItems true
         */
        roomAllocationCriteria?: (
          | 'Initial'
          | 'Actual'
          | 'Rates'
          | 'Pickup'
          | 'Contract'
          | 'Available'
          | 'Pickupperc'
          | 'Changes'
          | 'Released'
          | 'Houseavailability'
          | 'SellLimit'
          | 'AvailableSellLimit'
          | 'MasterAllocInitial'
          | 'Allocated'
          | 'SubAllocResv'
          | 'CutoffDate'
        )[];
        /** The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. */
        roomTypes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Block, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update an existing group block in OPERA Cloud. This API allows update of block header information, such as description, market segment, source code, rate code, and other details, but does not include updates for room grid or events, which have their own update API calls. <p><strong>OperationId:</strong>putBlock</p>
     *
     * @tags Block
     * @name PutBlock
     * @summary Change a Block
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}
     */
    putBlock: (blockId: string, hotelId: string, blockToBeChanged: BlockToBeChanged, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockChanged, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}`,
        method: 'PUT',
        body: blockToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete block, if any reservations attached to the block, you will be unable to delete.  <p><strong>OperationId:</strong>deleteBlock</p>
     *
     * @tags Block
     * @name DeleteBlock
     * @summary Delete a Block
     * @request DELETE:/hotels/{hotelId}/blocks/{blockId}
     */
    deleteBlock: (blockId: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add block room type allocations and rates to a specified Block. <p><strong>OperationId:</strong>putBlockAllocation</p>
     *
     * @tags Block
     * @name PutBlockAllocation
     * @summary Set Block Allocation
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/allocation
     */
    putBlockAllocation: (blockId: string, hotelId: string, allocation: Allocation, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/allocation`,
        method: 'PUT',
        body: allocation,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to set block allocation for a range of dates for a list of room types. <p><strong>OperationId:</strong>putBlockAllocationRange</p>
     *
     * @tags Block
     * @name PutBlockAllocationRange
     * @summary Set Block Allocation Range
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/allocationRange
     */
    putBlockAllocationRange: (
      blockId: string,
      hotelId: string,
      blockAllocationRange: BlockAllocationRange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/allocationRange`,
        method: 'PUT',
        body: blockAllocationRange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Request for updating block allocation for a range of dates. <p><strong>OperationId:</strong>getBlockRangeInfo</p>
     *
     * @tags Block
     * @name GetBlockRangeInfo
     * @summary Get Block Range Information
     * @request GET:/hotels/{hotelId}/blocks/{blockId}/allocationRange
     */
    getBlockRangeInfo: (
      blockId: string,
      hotelId: string,
      query?: {
        /** Indicates if the Allocation objects refer to Generic Room Types (Room Pools). */
        genericRoomType?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockRangeInfo, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/allocationRange`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to search for availability on an OPERA block.  You will need to know the block ID.  Once you know what rooms and rates are available you can proceed to post a block reservation. <p><strong>OperationId:</strong>getBlockAvailability</p>
     *
     * @tags Block
     * @name GetBlockAvailability
     * @summary Get Block AvailaBility
     * @request GET:/hotels/{hotelId}/blocks/{blockId}/availability
     */
    getBlockAvailability: (
      blockId: string,
      hotelId: string,
      query?: {
        overrideRateCode?: boolean;
        /**
         * Arrival date.
         * @format date
         */
        arrivalDate?: string;
        /** Number of nights of stay. */
        nights?: number;
        /** Documentation goes here */
        adults?: number;
        /** Documentation goes here */
        children?: number;
        /** Documentation goes here */
        rooms?: number;
        /** Documentation goes here */
        ratePlanCode?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        existingReservationId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        existingReservationIdType?: string;
        /** Room type. */
        roomType?: string[];
        /**
         * Instruction to determine room types to fetch.
         * @uniqueItems true
         */
        fetchAllocatedRoomType?: ('Allocated' | 'Available' | 'GenericAllocated' | 'GenericAvailable')[];
        /** Criteria to fetch number of room type(s). */
        roomTypeCount?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockAvailability, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/availability`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to complete a cancellation of the block. <p><strong>OperationId:</strong>postCancelBlock</p>
     *
     * @tags Block
     * @name PostCancelBlock
     * @summary Cancel the Block
     * @request POST:/hotels/{hotelId}/blocks/{blockId}/cancellations
     */
    postCancelBlock: (blockId: string, hotelId: string, blockToCancel: BlockToCancel, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/cancellations`,
        method: 'POST',
        body: blockToCancel,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to transition booking status in allotment header to an Open for Pickup Status, which ready to receive reservation bookings. <p><strong>OperationId:</strong>putBlockStatusToOpen</p>
     *
     * @tags Block
     * @name PutBlockStatusToOpen
     * @summary Change Block status to Open
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/openStatus
     */
    putBlockStatusToOpen: (blockId: string, hotelId: string, blockStatus: BlockStatus, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/openStatus`,
        method: 'PUT',
        body: blockStatus,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a new posting Master reservation against a block in OPERA.  The block status in OPERA needs to be 'Open for Pick up' to successfully post a BlockPostingMaster reservation. <p><strong>OperationId:</strong>postBlockPostingMaster</p>
     *
     * @tags Block
     * @name PostBlockPostingMaster
     * @summary Create Block posting master
     * @request POST:/hotels/{hotelId}/blocks/{blockId}/postingMaster
     */
    postBlockPostingMaster: (
      blockId: string,
      hotelId: string,
      blockPostingMaster: BlockPostingMaster,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/postingMaster`,
        method: 'POST',
        body: blockPostingMaster,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve PM (Posting Master) reservations for a block. <p><strong>OperationId:</strong>getBlockPMReservations</p>
     *
     * @tags Block
     * @name GetBlockPmReservations
     * @summary Get Posting Master Reservations for a Block
     * @request GET:/hotels/{hotelId}/blocks/{blockId}/postingMaster/reservations
     */
    getBlockPmReservations: (
      blockId: string,
      hotelId: string,
      query?: {
        /**
         * If true, a PM reservation will be created for the block if no PM reservations exist.
         * @default true
         */
        postingmaster?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockPMReservations, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/postingMaster/reservations`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to change rate override. <p><strong>OperationId:</strong>changeRateOverride</p>
     *
     * @tags Block
     * @name ChangeRateOverride
     * @summary Change rate override
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/rate/override
     */
    changeRateOverride: (blockId: string, hotelId: string, rateOverride: RateOverride, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RateOverrideStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/rate/override`,
        method: 'PUT',
        body: rateOverride,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to move or shift the dates of a block in OPERA.  <p><strong>OperationId:</strong>putBlockShift</p>
     *
     * @tags Block
     * @name PutBlockShift
     * @summary Shifts the Block start date
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/shifts
     */
    putBlockShift: (blockId: string, hotelId: string, blockToShift: BlockToShift, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ShiftedBlock, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/shifts`,
        method: 'PUT',
        body: blockToShift,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this to change the status of a block in Opera.  To know a hotels Block status codes, use the List Of Values API - BlockStatuses.  Also note, you can only change the status in a particular order, for example INQ to DEF, but not DEF to INQ. <p><strong>OperationId:</strong>putBlockStatus</p>
     *
     * @tags Block
     * @name PutBlockStatus
     * @summary Change the Status of a Block
     * @request PUT:/hotels/{hotelId}/blocks/{blockId}/status
     */
    putBlockStatus: (
      blockId: string,
      hotelId: string,
      blockStatusToChange: BlockStatusToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChangedBlockStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/status`,
        method: 'PUT',
        body: blockStatusToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this when you want to create a sub block.You will need to know the OPERA Block ID, which you want this sub block to fall under. <p><strong>OperationId:</strong>postSubBlock</p>
     *
     * @tags Block
     * @name PostSubBlock
     * @summary Create a sub-Block
     * @request POST:/hotels/{hotelId}/blocks/{blockId}/subBlocks
     */
    postSubBlock: (blockId: string, hotelId: string, subBlock: SubBlock, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/blocks/${blockId}/subBlocks`,
        method: 'POST',
        body: subBlock,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve a specific block.  You will need to know the blockID in the request; if you don't know it, please go ahead and use getBlocks API first.  The response will include detailed information about the block. <p><strong>OperationId:</strong>getBlockByExtId</p>
     *
     * @tags Block
     * @name GetBlockByExtId
     * @summary Get a Block By ID
     * @request GET:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}
     */
    getBlockByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      query?: {
        /** Mark this block as recently accessed. */
        markAsRecentlyAccessed?: boolean;
        /**
         * Type for block instructions that can be used in requests for partial operations.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'AccessExclusions'
          | 'Aliases'
          | 'AlternateDates'
          | 'Attachments'
          | 'Block'
          | 'BlockNextStatuses'
          | 'BlockStatusHistory'
          | 'CatNextStatuses'
          | 'CatStatusHistory'
          | 'Comments'
          | 'DateProtect'
          | 'ExternalReferences'
          | 'GenericRateGrid'
          | 'Header'
          | 'Indicators'
          | 'InventoryItems'
          | 'Owners'
          | 'Packages'
          | 'Policies'
          | 'PrimaryOwners'
          | 'PrimaryProfiles'
          | 'PrimaryRates'
          | 'Profiles'
          | 'RateGrid'
          | 'RateProgram'
          | 'Rates'
          | 'Restrictions'
          | 'SellMessages'
          | 'Statistics'
          | 'SummaryStatistics'
          | 'Traces'
          | 'WashSchedules'
        )[];
        /** Indicates whether to fetch only those room types that have rooms allocated. If this flag is true then only those room types with rooms allocated for the block are fetched. Only applicable to fetch instruction RateGrid. */
        fetchAllocatedRoomTypes?: boolean;
        /**
         * Start Date for the rate grid data. Only applicable to fetch instruction RateGrid.
         * @format date
         */
        startDate?: string;
        /** Number of days to fetch for the rate grid data. Only applicable to fetch instruction RateGrid. */
        numberOfDays?: number;
        /**
         * Simple type for block allocation used in room rate grid.
         * @uniqueItems true
         */
        roomAllocationCriteria?: (
          | 'Initial'
          | 'Actual'
          | 'Rates'
          | 'Pickup'
          | 'Contract'
          | 'Available'
          | 'Pickupperc'
          | 'Changes'
          | 'Released'
          | 'Houseavailability'
          | 'SellLimit'
          | 'AvailableSellLimit'
          | 'MasterAllocInitial'
          | 'Allocated'
          | 'SubAllocResv'
          | 'CutoffDate'
        )[];
        /** The Room Types that need to be fetched for the rate room grid data. If these values are not provided, all room types for the block will be fetched. */
        roomTypes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Block, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to update an existing block.  You must know the block ID for the request message.  Use getBlocks if you dont already know the block ID. <p><strong>OperationId:</strong>putBlockByExtId</p>
     *
     * @tags Block
     * @name PutBlockByExtId
     * @summary Change a Block
     * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}
     */
    putBlockByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      blockToBeChanged: BlockToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockChanged, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}`,
        method: 'PUT',
        body: blockToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add block room type allocations and rates to a specified Block. <p><strong>OperationId:</strong>putBlockAllocationByExtId</p>
     *
     * @tags Block
     * @name PutBlockAllocationByExtId
     * @summary Set Block Allocation
     * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocation/roomTypes/{roomType}
     */
    putBlockAllocationByExtId: (
      roomType: string,
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      allocation: Allocation,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/allocation/roomTypes/${roomType}`,
        method: 'PUT',
        body: allocation,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to set block allocation for a range of dates for a list of room types. <p><strong>OperationId:</strong>putBlockAllocationRangeByExtId</p>
     *
     * @tags Block
     * @name PutBlockAllocationRangeByExtId
     * @summary Set Block Allocation Range
     * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocationRange
     */
    putBlockAllocationRangeByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      blockAllocationRange: BlockAllocationRange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/allocationRange`,
        method: 'PUT',
        body: blockAllocationRange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve PM (Posting Master) reservations for a block. <p><strong>OperationId:</strong>getBlockPMReservationsByExtId</p>
     *
     * @tags Block
     * @name GetBlockPmReservationsByExtId
     * @summary Get Posting Master Reservations for a Block
     * @request GET:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/postingMaster/reservations
     */
    getBlockPmReservationsByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      query?: {
        /**
         * If true, a PM reservation will be created for the block if no PM reservations exist.
         * @default true
         */
        postingmaster?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<BlockPMReservations, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/postingMaster/reservations`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this to change the status of a block in Opera.  To know a hotels Block status codes, use the List Of Values API - BlockStatuses.  Also note, you can only change the status in a particular order, for example INQ to DEF, but not DEF to INQ. <p><strong>OperationId:</strong>putBlockStatusByExtId</p>
     *
     * @tags Block
     * @name PutBlockStatusByExtId
     * @summary Change the Status of a Block
     * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/status
     */
    putBlockStatusByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      blockStatusToChange: BlockStatusToChange,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ChangedBlockStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/status`,
        method: 'PUT',
        body: blockStatusToChange,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this when you want to create a sub block.You will need to know the OPERA Block ID, which you want this sub block to fall under. <p><strong>OperationId:</strong>postSubBlockByExtId</p>
     *
     * @tags Block
     * @name PostSubBlockByExtId
     * @summary Create a sub-Block
     * @request POST:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/subBlocks
     */
    postSubBlockByExtId: (
      blockExternalId: string,
      externalSystemCode: string,
      hotelId: string,
      subBlock: SubBlock,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/subBlocks`,
        method: 'POST',
        body: subBlock,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to get traces for Reservations and Blocks. <p><strong>OperationId:</strong>getTracesByDateRange</p>
     *
     * @tags Block
     * @name GetTracesByDateRange
     * @summary Get Traces By Date Range
     * @request GET:/hotels/{hotelId}/tracesByDateRange
     */
    getTracesByDateRange: (
      hotelId: string,
      query?: {
        /** Hotel code. */
        hotelIds?: string[];
        /**
         * Begin date for fetching traces criteria.
         * @format date
         */
        beginDate?: string;
        /**
         * End date for fetching traces criteria.
         * @format date
         */
        endDate?: string;
        /** Department for which traces are to be fetched. */
        department?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<TracesByDateRange, ExceptionDetailType>({
        path: `/hotels/${hotelId}/tracesByDateRange`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  inventory = {
    /**
     * @description Use this API to borrow inventory from the block or house when you encounter an insufficient number of rooms for block a reservation. <p><strong>OperationId:</strong>putInventory</p>
     *
     * @tags Block
     * @name PutInventory
     * @summary Borrow Inventory
     * @request PUT:/inventory
     */
    putInventory: (hotelId: string, inventoryToBorrow: InventoryToBorrow, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/inventory`,
        method: 'PUT',
        body: inventoryToBorrow,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  inventoryReleased = {
    /**
     * @description Use this API to return the previously borrowed inventory on the block back to the original source from which it was borrowed. The original source can be a room type or house inventory, as indicated in the request. <p><strong>OperationId:</strong>putReleasedInventory</p>
     *
     * @tags Block
     * @name PutReleasedInventory
     * @summary Return Borrowed Inventory
     * @request PUT:/inventoryReleased
     */
    putReleasedInventory: (
      hotelId: string,
      borrowedInventoryToReturn: BorrowedInventoryToReturn,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/inventoryReleased`,
        method: 'PUT',
        body: borrowedInventoryToReturn,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  inventoryToBorrow = {
    /**
     * @description Use this API to retrieve borrowable inventory for the requested dates when encountering an insufficient number of rooms in a block for a specific room type, or for overall inventory. This operations would usually be used when attempting to pick up a reservation against a block, and the block inventory does not have enough rooms left to support the reservation pick up. <p><strong>OperationId:</strong>getInventoryToBorrow</p>
     *
     * @tags Block
     * @name GetInventoryToBorrow
     * @summary Get inventory to Borrow
     * @request GET:/inventoryToBorrow
     */
    getInventoryToBorrow: (
      hotelId: string,
      query: {
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        hotelId: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        blockId: string;
        /** @format date */
        startDate: string;
        /** The number of rooms that need to be borrowed. */
        requiredRooms: number[];
        /**
         * Used to identify the source of the identifier (e.g., IATA, ABTA).
         * @default "OPERA"
         */
        blockIdContext?: string;
        /**
         * A reference to the type of object defined by the UniqueID element.
         * @default "Block"
         */
        blockIdType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        existingReservationId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        existingReservationIdType?: string;
        /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
        roomType?: string;
        /** @format date */
        endDate?: string;
        duration?: string;
        /** The number of rooms associated with the reservation. */
        numberOfRooms?: number;
        /** The date on which rooms need to be borrowed for the block. */
        borrowDate?: string[];
        /** Flag to override the inclusion of block rate code as a criteria when deciding what room types can be allowed to borrow. */
        overrideRateCode?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InventoryToBorrowInfo, ExceptionDetailType>({
        path: `/inventoryToBorrow`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  recentlyAccessedBlocks = {
    /**
     * @description This API retrieves recently accessed blocks. <p><strong>OperationId:</strong>getRecentlyAccessedBlocks</p>
     *
     * @tags Block
     * @name GetRecentlyAccessedBlocks
     * @summary Get recently accessed Blocks
     * @request GET:/recentlyAccessedBlocks
     */
    getRecentlyAccessedBlocks: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RecentlyAccessedBlocks, ExceptionDetailType>({
        path: `/recentlyAccessedBlocks`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  salesAllowances = {
    /**
     * @description Use this API to retrieve the Sales Allowance of max amount of rooms that can be sold. <p><strong>OperationId:</strong>getSalesAllowances</p>
     *
     * @tags Block
     * @name GetSalesAllowances
     * @summary Get Sales allowances
     * @request GET:/salesAllowances
     */
    getSalesAllowances: (
      hotelId: string,
      query?: {
        /** ID of sales allowance. */
        ceilingId?: number[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<SalesAllowances, ExceptionDetailType>({
        path: `/salesAllowances`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description This API deletes the block service cache. <p><strong>OperationId:</strong>deleteBlockServiceCache</p>
     *
     * @tags Block
     * @name DeleteBlockServiceCache
     * @summary Delete Block service cache
     * @request DELETE:/services/block/cache
     */
    deleteBlockServiceCache: (hotelId: string, params: RequestParams = {}) => {
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
     * @description Use this API to ping and retrieve block service status. <p><strong>OperationId:</strong>pingBlockService</p>
     *
     * @tags Block
     * @name PingBlockService
     * @summary This API retrieves the Block service version
     * @request GET:/services/block/status
     */
    pingBlockService: (hotelId: string, params: RequestParams = {}) => {
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
     * @description Use this API to delete Block Stat Service cache. <p><strong>OperationId:</strong>deleteBlockStatsServiceCache</p>
     *
     * @tags BlockStats
     * @name DeleteBlockStatsServiceCache
     * @summary Delete Block Stat Service cache
     * @request DELETE:/services/blockStats/cache
     */
    deleteBlockStatsServiceCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/blockStats/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to retrieve block stats service status. <p><strong>OperationId:</strong>pingBlockStatsService</p>
     *
     * @tags BlockStats
     * @name PingBlockStatsService
     * @summary Retrieve/Ping  Block stats service
     * @request GET:/services/blockStats/status
     */
    pingBlockStatsService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/blockStats/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
