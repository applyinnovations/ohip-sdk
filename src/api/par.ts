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

/** Response object to search hotel availability based on request segment. */
export interface HotelAvailability {
  hotelAvailability?: AvailResponseSegmentType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface AvailResponseSegmentType {
  /** @maxItems 4000 */
  roomStays?: RoomStayType[];
  /** Availability master info type */
  masterInfo?: AvailResponseMasterInfoType;
  /**
   * Hotel Alert Message.
   * @minLength 0
   * @maxLength 2000
   */
  hotelAlert?: string;
  /** Indicates the restriction types. */
  restriction?: MasterRestrictionStatusesType;
  /** Indicates the amount returned is FIRSTNIGHT/HIGHEST/LOWEST/MOSTCOMMON/AVERAGE when there is rate change in the stay dates. */
  rateChange?: RateChangeTypeType;
  /** Hotel information like hotel name,address,communication etc and also alternate hotel information if requested property is not available. */
  hotelInfo?: HotelInfoType;
  /** Channel related information if availability request is send for a channel. */
  channelInformation?: ChannelAvailRSInfoType;
  /**
   * Rate Plan Set whose Rate Plans are returned in the response.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanSet?: string;
  /**
   * Hotel Code whose Rate Plans are returned in the response.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** If the availability response has a house level restriction, this flag will be true. */
  closed?: boolean;
  /** Used to indicate if the Room Rates returned are calculated based on points. */
  redemption?: boolean;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
  /**
   * Used to indicate the paging key(rate room) when more rate rooms available.
   * @maxLength 2000
   */
  pagingKey?: string;
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
  /**
   * Indicates whether the room type inventory was taken from the allotment or House availability.
   * @maxLength 2000
   */
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

/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
export enum AmountDeterminationType {
  Inclusive = 'Inclusive',
  Exclusive = 'Exclusive',
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
  /** @maxLength 2000 */
  packageCode?: string;
  /** @maxLength 2000 */
  calculationRule?: string;
  /** @maxLength 2000 */
  postingRhythm?: string;
  quantity?: number;
  includedInRate?: boolean;
  addRateSeprateLine?: boolean;
  addRateCombinedLine?: boolean;
  startTime?: string;
  endTime?: string;
  sellSeparate?: boolean;
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

export interface ReservationProfileType {
  /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
  profileIdList?: ProfileIdList;
  /** Provides detailed information regarding either a company or a customer profile. */
  profile?: ProfileType;
  reservationProfileType?: ResProfileTypeType;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];

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
  /**
   * Influence Code associated to the profile.
   * @minLength 0
   * @maxLength 40
   */
  influenceCode?: string;
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
  /** List of customer keywords. */
  keywords?: {
    /**
     * Collection of keywords attached to the profile.
     * @maxItems 4000
     */
    keyword?: KeywordType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of profile negotiated rates. */
  negotiatedRates?: {
    /**
     * Collection of Detailed information on profile negotiated rates.
     * @maxItems 4000
     */
    negotiatedRate?: NegotiatedType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** List of channel negotiated rates that this profile has been assigned to. */
  gdsNegotiatedRates?: {
    /**
     * Collection of Detailed information on channel negotiated rates for the profile.
     * @maxItems 4000
     */
    gdsNegotiatedRate?: GdsNegotiatedType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
  };
  /** Indicators of additional information attached to the profile */
  profileIndicators?: IndicatorsType;
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
  /** Detailed information on access type associated with the profile. */
  profileAccessType?: ProfileAccessType;
  /** Detailed information on restrictions associated with the profile. */
  profileRestrictions?: ProfileRestrictions;
  /** Contains collection of mailing action list associated with the profile */
  mailingActions?: MailingActionsType;
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
  /** List of Web User Accounts of the profile. */
  webUserAccounts?: WebUserAccountsType;
  /** Profile information about tax. */
  taxInfo?: ProfileTaxInfoType;
  /** Sales information of the profiles. */
  salesInfo?: SalesInfoType;
  /** E-Certificate assosiated with the profile. */
  eCertificates?: ECertificatesType;
  /** List of profile subscriptions. */
  subscriptions?: ProfileSubscriptionListType;
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
  /**
   * Date an item will be purged from a database (e.g., from a live database to an archive).
   * @format date
   * @maxLength 8
   */
  purgeDate?: string;
  /** Mark this profile as recently accessed. */
  markAsRecentlyAccessed?: boolean;
  /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
  markForHistory?: boolean;
  /** Populates true if the profile has commission configured false otherwise. */
  hasCommission?: boolean;
  /** Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. */
  inheritedNegRates?: boolean;
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
  /** Company Information of the Profile. */
  companyInfo?: CompanyInfoType;
  /**
   * Business Title.
   * @minLength 0
   * @maxLength 80
   */
  businessTitle?: string;
  /** Identifies the gender. */
  gender?: 'Male' | 'Female' | 'Unknown';
  /**
   * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
   * @format date
   * @maxLength 8
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
   * @maxLength 40
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
  /**
   * Describes the type code
   * @maxLength 2000
   */
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
   * A reference to the type of object defined by the UniqueID element.
   * @minLength 0
   * @maxLength 40
   */
  type?: string;
}

/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface CommentType {
  /** Formatted text content. */
  text?: FormattedTextTextType;
  /**
   * An image for this paragraph.
   * @maxLength 2000
   */
  image?: string;
  /**
   * A URL for this paragraph.
   * @maxLength 2000
   */
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
   * Indicates Upgrade information which includes member's next tier level, policyRequirements for the next upgrade.
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
  /**
   * An image for this paragraph.
   * @maxLength 2000
   */
  image?: string;
  /**
   * A URL for this paragraph.
   * @maxLength 2000
   */
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
  preferenceId?: string;
  /** Specifies the count of preferences excluded for the attached reservation preference. */
  excludedPreferencesCount?: number;
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

/** This holds a list of NegotiatedInfoType. */
export interface NegotiatedType {
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

/** This holds a list of GdsNegotiatedInfoType. */
export interface GdsNegotiatedType {
  /**
   * List of channel negotiated rates for the profile.
   * @maxItems 4000
   */
  gdsNegotiatedInfoList?: GdsNegotiatedInfoType[];
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

/** This provides information for a channel negotiated rate. */
export interface GdsNegotiatedInfoType {
  /**
   * The GDS negotiated rate code.
   * @minLength 0
   * @maxLength 20
   */
  accessCode?: string;
  /** The sell order. */
  order?: number;
  /** The GDS Negotiated Rate is inactive or not */
  inactive?: boolean;
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

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ProfileId {
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

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

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
  /**
   * Full display name
   * @maxLength 2000
   */
  fullName?: string;
  /**
   * Altername full display name
   * @maxLength 2000
   */
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
     * @maxLength 40
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

export interface ProfileAccessType {
  /**
   * Indicates the Chain code where the profile was created
   * @minLength 0
   * @maxLength 200
   */
  chainCode?: string;
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

/** Defines mailing action list for the profile. */
export interface MailingActionsType {
  /**
   * Defines mailing action code and description.
   * @maxItems 4000
   */
  mailingAction?: CodeDescriptionType[];
  /** When true indicates that profile has subscribed to the mailing list. */
  active?: boolean;
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
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

/**
 * Web User Accounts List.
 * @maxItems 4000
 */
export type WebUserAccountsType = WebUserAccountType[];

/** Web User Account of the guest. */
export interface WebUserAccountType {
  /** Security Question and its Code associated with the account to verify the user. */
  securityQuestion?: CodeDescriptionType;
  /**
   * Answer to the Security Question.
   * @minLength 0
   * @maxLength 4000
   */
  securityAnswer?: string;
  /**
   * Comments.
   * @minLength 0
   * @maxLength 4000
   */
  comments?: string;
  /** Web User Account History. */
  history?: WebUserHistoryType;
  /**
   * New Login Name of the guest.
   * @minLength 0
   * @maxLength 80
   */
  newLoginName?: string;
  /**
   * Login Password.
   * @minLength 0
   * @maxLength 2000
   */
  newPassword?: string;
  /** A flag which determines if the password is auto generated. */
  autoGeneratePassword?: boolean;
  /**
   * Login Name of the guest.
   * @minLength 0
   * @maxLength 80
   */
  loginName?: string;
  /**
   * Domain code.
   * @minLength 0
   * @maxLength 20
   */
  domainCode?: string;
  /** Boolean flag that indicates whether the web account is locked or not. */
  locked?: boolean;
  /** Boolean flag that indicates whether the web account is inactive or not. */
  inactive?: boolean;
}

/** Creation date time, Creator Id, last modification date time and last Modifier Id. */
export interface WebUserHistoryType {
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
   * Last login date.
   * @format date
   * @maxLength 8
   */
  lastLogin?: string;
  /**
   * Last Password change date.
   * @format date
   * @maxLength 8
   */
  lastPasswordChange?: string;
  /**
   * Inactive date.
   * @format date
   * @maxLength 8
   */
  inactiveDate?: string;
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

/** Availability master info type */
export interface AvailResponseMasterInfoType {
  /** Collection of room type information */
  roomTypes?: RoomTypeMasterInfoType;
  /** Collection of rate plan information */
  ratePlans?: AvailRatePlanInfoType;
}

/** The RoomType element is used to contain all the room type information for a single room type. */
export interface RoomTypeMasterInfoType {
  /**
   * Room type information
   * @maxItems 4000
   */
  roomType?: RoomTypeInfoType[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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

/** The rate plan element is used to contain all the rate information for a single Rate Plan */
export interface AvailRatePlanInfoType {
  /**
   * Rate plan information
   * @maxItems 4000
   */
  ratePlan?: {
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
    /** A collection of Guarantee Codes information with cancellation penalty and deposit policy information. */
    resGuarantees?: GuaranteePoliciesType;
    /** If Rate plane is negotiated by Guest or any attached profiles, this indicates how negotiated it. Applicable values are Guest, Company, Agent and Source. */
    negotiatedBy?: ProfileTypeType;
    /**
     * Holds the market code.
     * @minLength 0
     * @maxLength 20
     */
    marketCode?: string;
    /**
     * Holds the source code.
     * @minLength 0
     * @maxLength 20
     */
    sourceCode?: string;
    /** If true, indicates this rates is not allowed to be sold by CRO. For CRO this is information only. */
    hotelUseOnly?: boolean;
    /** If true, indicates additional discount could be applied on the Rate. */
    discountAllowed?: boolean;
    /** If true, indicates that credentials is required to sell the rate code. */
    credentialsRequired?: boolean;
  }[];
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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
  };
  /**
   * To populate the RatePlanName, setup for the channel.
   * @minLength 0
   * @maxLength 80
   */
  ratePlanWebName?: string;
}

/** Specifies Guarantee Code attributes. */
export interface GuaranteeType {
  /**
   * Description of the Guarantee Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Specifies various policyRequirements for the guarantee code. */
  policyRequirements?: GuaranteeRequirementsType;
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
  /**
   * Represents the late arrival time.
   * @maxLength 2000
   */
  lateArrival?: string;
}

/** Specifies various requirement for the guarantee code. */
export interface GuaranteeRequirementsType {
  /**
   * Requirement Code.
   * @maxLength 2000
   */
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

/**
 * Guarantee Code information with cancellation penalty and deposit policy information.
 * @maxItems 4000
 */
export type GuaranteePoliciesType = GuaranteePolicyType[];

/** Specifies Guarantee Code attributes. */
export interface GuaranteePolicyType {
  /**
   * Code assigned to the Guarantee.
   * @minLength 0
   * @maxLength 20
   */
  guaranteeCode?: string;
  /** Brief description of the Guarantee Code. */
  shortDescription?: TranslationTextType80;
  /** Specifies various policyRequirements for the guarantee code. */
  policyRequirements?: GuaranteeRequirementsType;
  /**
   * Description of the Guarantee Code.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Specifies various payment types for the guarantee code. */
  paymentTypes?: PaymentTypesType;
  /** If true indicates this Guarantee Code is used only to hold the inventory during reservation process. */
  onHold?: boolean;
  /** If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. */
  reserveInventory?: boolean;
  /** Display Order sequence. */
  orderSequence?: number;
  /**
   * Represents the late arrival time.
   * @maxLength 2000
   */
  lateArrival?: string;
  /** The CancelPenalty class defines the cancellation policy of the hotel facility. */
  cancelPenalty?: {
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
    /** Message. */
    estimatedAmount?: number;
  };
  /** A deposit policy attached with the reservation. */
  depositPolicy?: {
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
    /** Message. */
    estimatedAmount?: number;
  };
  /** If true indicates this can be the default guarantee type to be selected for a reservation. */
  defaultGuarantee?: boolean;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
export enum DepositCancelRevenueType {
  Rooms = 'Rooms',
  Catering = 'Catering',
  All = 'All',
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

export enum MasterRestrictionStatusesType {
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
  Hurdle = 'Hurdle',
  MinimumOccupancy = 'MinimumOccupancy',
  MaximumOccupancy = 'MaximumOccupancy',
  RateStrategy = 'RateStrategy',
  RateDetailsNotSet = 'RateDetailsNotSet',
  InventoryItemNotAvailable = 'InventoryItemNotAvailable',
  RankRestriction = 'RankRestriction',
  MaximumAuth = 'MaximumAuth',
  InventoryNotAvailable = 'InventoryNotAvailable',
  RoomClassNotAvailable = 'RoomClassNotAvailable',
  RoomTypeNotAvailable = 'RoomTypeNotAvailable',
  BlockSellLimit = 'BlockSellLimit',
  OnRequest = 'OnRequest',
}

/** Indicates the rate amount returned is first night or highest rate. */
export enum RateChangeTypeType {
  FirstNight = 'FirstNight',
  Highest = 'Highest',
  Lowest = 'Lowest',
  MostCommon = 'MostCommon',
  Average = 'Average',
}

/** Contains the basic configuration information about a Hotel. */
export interface HotelInfoType {
  /** Primary Information of the hotel. */
  primaryDetails?: {
    /**
     * Legal owner of the hotel.
     * @minLength 0
     * @maxLength 80
     */
    legalOwner?: string;
  };
  /** General Information of the hotel. */
  generalInformation?: {
    /**
     * The type of the Hotel.
     * @minLength 0
     * @maxLength 20
     */
    hotelType?: string;
    /** The total number of rooms in the Hotel. */
    roomCount?: number;
    /** The total number of beds in the Hotel. */
    bedCount?: number;
    /** The total number of floors of the Hotel. */
    floorCount?: number;
    /**
     * The official check in time of the Hotel.
     * @format date-time
     */
    checkInTime?: string;
    /**
     * The official check out time of the Hotel.
     * @format date-time
     */
    checkOutTime?: string;
    /** URL where property information is located. */
    hotelInfoWebsite?: URLType;
    /** Longitude of the hotel. */
    longitude?: number;
    /** Latitude of the hotel. */
    latitude?: number;
    /** The base language of the Hotel. */
    baseLanguage?: LanguageType;
  };
  /** Accommodation Details of the hotel. */
  accommodationDetails?: {
    /** The number of Single Rooms of the Hotel. */
    singleRooms?: number;
    /** The number of Double Rooms of the Hotel. */
    doubleRooms?: number;
    /** The number of Twin Rooms of the Hotel. */
    twinRooms?: number;
    /** The number of Family Rooms of the Hotel. */
    familyRooms?: number;
    /** The number of Connecting Rooms of the Hotel. */
    connectingRooms?: number;
    /** The number of Accessible Rooms of the Hotel. */
    accessibleRooms?: number;
    /** The number of Non-Smoking Rooms of the Hotel. */
    nonSmokingRooms?: number;
    /** Maximum Adults for Family Room Type. */
    maxAdultsInFamilyRoom?: number;
    /** Maximum Children for Family Room Type. */
    maxChildrenInFamilyRoom?: number;
    /** The total number of the Guest Room Floors. */
    guestRoomFloors?: number;
    /** The number of Guest Room Elevators. */
    guestRoomElevators?: number;
    /** The number of Suites of the Hotel. */
    suites?: number;
    /**
     * The floor number of Executive Floors of the Hotel.
     * @minLength 0
     * @maxLength 1000
     */
    executiveFloorNo?: string;
    /**
     * The information about the Room Amenities.
     * @minLength 0
     * @maxLength 2000
     */
    roomAmenties?: string;
    /**
     * The Description of the shops in the Hotel.
     * @minLength 0
     * @maxLength 2000
     */
    shopDescription?: string;
  };
  /** Property controls information configuration of the hotel. */
  propertyControls?: {
    /** The sell controls information configuration of the hotel. */
    sellControls?: {
      /**
       * Date when the hotel become valid for use.
       * @format date
       * @maxLength 8
       */
      startDate?: string;
      /**
       * The end date of the hotel.
       * @format date
       * @maxLength 8
       */
      endDate?: string;
      /**
       * The hotel code.
       * @minLength 0
       * @maxLength 80
       */
      hotelId?: string;
    };
    /** Currency Formatting information configuration of the hotel. */
    currencyFormatting?: {
      /**
       * The base currency code for this hotel..
       * @minLength 0
       * @maxLength 20
       */
      currencyCode?: string;
      /**
       * Format for the local currency.
       * @minLength 0
       * @maxLength 80
       */
      currencyFormat?: string;
      /**
       * Symbol to designate the default currency of the hotel.
       * @minLength 0
       * @maxLength 20
       */
      currencySymbol?: string;
      /** Number of decimal positions used for this currency type. */
      decimalPositions?: number;
    };
    /** Catering Currency Formatting information configuration of the hotel. */
    cateringCurrencyFormatting?: {
      /**
       * The base currency code for this hotel..
       * @minLength 0
       * @maxLength 20
       */
      currencyCode?: string;
      /**
       * Format for the local currency.
       * @minLength 0
       * @maxLength 80
       */
      currencyFormat?: string;
    };
    /** Date Time Formatting information configuration of the hotel */
    dateTimeFormatting?: {
      /**
       * Long date format of the hotel.
       * @minLength 0
       * @maxLength 20
       */
      longDateFormat?: string;
      /**
       * Short date format of the hotel.
       * @minLength 0
       * @maxLength 20
       */
      shortDateFormat?: string;
      /**
       * Time format for the hotel.
       * @minLength 0
       * @maxLength 20
       */
      timeFormat?: string;
      /**
       * Time zone region of the hotel.
       * @minLength 0
       * @maxLength 80
       */
      timeZoneRegion?: string;
    };
    /** Application Mode information configuration of the hotel. */
    applicationMode?: {
      /**
       * The hotel's configuration mode if applicable.
       * @minLength 0
       * @maxLength 20
       */
      configurationMode?: string;
      /**
       * The hotel's country code.
       * @minLength 0
       * @maxLength 20
       */
      countryMode?: string;
      /**
       * Hotel Code used for third party exports.
       * @minLength 0
       * @maxLength 20
       */
      expHotelCode?: string;
      /**
       * The Tourist Number of the hotel.
       * @minLength 0
       * @maxLength 20
       */
      touristNumber?: string;
      /** Indicates if the hotel uses MBS (Marriott Business Services). */
      mBSSupported?: boolean;
    };
  };
  /** Communication information of the hotel. */
  communication?: {
    /** The direct dial phone number of the hotel. */
    phoneNumber?: TelephoneType;
    /** Toll free phone number of the hotel. */
    tollFreeNumber?: TelephoneType;
    /** Fax phone number of the hotel. */
    faxNumber?: TelephoneType;
    /** Email address of the hotel. */
    emailAddress?: BasicEmailType;
    /** The web address of the hotel. */
    webPage?: URLType;
  };
  /** Provides address information. */
  address?: {
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
    /**
     * The region code of the hotel.
     * @minLength 0
     * @maxLength 20
     */
    regionCode?: string;
  };
  /** Names of restaurants which can be found in the Hotel. */
  hotelRestaurants?: HotelRestaurantsType;
  /** The rate ranges which are offered by the hotels. */
  hotelRateRanges?: HotelRateRangesType;
  /** Informations about alternative hotels provided by the Hotel. */
  alternateHotels?: AlternateHotelsType;
  /** The contacts information the hotels. */
  hotelContacts?: HotelContactsType;
  /** Even Space information of the hotel. */
  hotelEventSpaces?: HotelEventSpacesType;
  /** List of notes for the hotel. */
  hotelNotes?: HotelNotesType;
  /** Corporate information details of the property */
  hotelCorporateInformations?: HotelCorporateInformationsType;
  /** List of Attractions for the hotel. */
  attractions?: HotelAttractionsType;
  /** List of Meeting Rooms for the hotel. */
  meetingRooms?: MeetingRoomsType;
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
}

/**
 * @minLength 0
 * @maxLength 40
 */
export type LanguageType = string;

/** @maxItems 4000 */
export type HotelRestaurantsType = HotelRestaurantType[];

/** Information about the Restaurants in the hotel. */
export interface HotelRestaurantType {
  /**
   * The name of the Restaurant.
   * @minLength 0
   * @maxLength 1000
   */
  restaurantName?: string;
  /**
   * The Type of Restaurant.
   * @minLength 0
   * @maxLength 1000
   */
  restaurantType?: string;
  /**
   * The Hours of Operation of the Restaurant.
   * @minLength 0
   * @maxLength 1000
   */
  hours?: string;
  /**
   * The price range of the Restaurant.
   * @minLength 0
   * @maxLength 40
   */
  priceRange?: string;
  /**
   * Comments about the Restaurant.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** The category that the Restaurant belongs to. */
  category?: RestaurantCategoryType;
  /** The Start Date and End Date of the Restaurant. */
  timeSpan?: TimeSpanType;
  /**
   * The new Restaurant Code which is used in the change method.
   * @minLength 0
   * @maxLength 20
   */
  newRestaurantCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  restaurantCode?: string;
  orderBy?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Simple type for Hotel Restaurant. */
export enum RestaurantCategoryType {
  Restaurant = 'Restaurant',
  Retail = 'Retail',
}

/**
 * Lists of rate ranges of the hotel.
 * @maxItems 4000
 */
export type HotelRateRangesType = HotelRateRangeType[];

/** The rate rage information of the hotel. */
export interface HotelRateRangeType {
  /** The Start Date and End Date of the Hotel rate range. */
  timeSpan?: TimeSpanType;
  /** Minimum Rate offered by the hotel. */
  minRate?: number;
  /** Maximum Rate offered by the hotel. */
  maxRate?: number;
  /**
   * The base currency code for rate range(The currency code used by the hotel which the rate range belongs to).
   * @minLength 0
   * @maxLength 20
   */
  currencyCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** @maxItems 4000 */
export type AlternateHotelsType = AlternateHotelType[];

export interface AlternateHotelType {
  /** Provides address information. */
  address?: AddressType;
  /** @maxItems 4000 */
  contactNumbers?: TelephoneType[];
  /** A monetary value expressed with a currency code. */
  minRate?: CurrencyAmountType;
  /** A monetary value expressed with a currency code. */
  maxRate?: CurrencyAmountType;
  /** Defines the position of an entity in relation to another entity (e.g. from an airport to a hotel, the relationship is dependent on use). */
  relativePosition?: RelativePositionType;
  /** @maxItems 4000 */
  hotelAmenities?: HotelAmenityType[];
  /** True if the hotel has any scheduled events within the requested date range. */
  event?: boolean;
  /** Any additional information like membership, restriction status, room stay information of the requested hotels etc. */
  rateRoomDetails?: RateRoomDetailsType;
  /** Channel related information if availability request is send for a channel. */
  channelSummaryInfo?: ChannelSummaryInfoType;
  /** Sell messages retrieved based on the Time Span criteria for all Rate Codes and Room Types of the requested hotel. */
  sellMessages?: SellMessagesType;
  /** Exchange Rate information for currency codes of the requested hotel. */
  currencyExchangeRates?: CurrencyExchangeRatesType;
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
   * @minLength 0
   * @maxLength 20
   */
  hotelType?: string;
  negotiated?: boolean;
  alternate?: boolean;
  displayOrder?: number;
  inventoryRooms?: number;
  availableRooms?: number;
  /**
   * Comments of alternate Hotel.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /**
   * Compass direction to the attraction from the hotel (North/South, etc).
   * @minLength 0
   * @maxLength 20
   */
  direction?: string;
  /** whether the alternate relationship should be applied to the alternate hotel as well. If this flag is true, not only will the AlternateHotelCode hotel be an alternate for HotelCode hotel, but HotelCode hotel will also be an alternate for AlternateHotelCode hotel. */
  reciprocalRelationship?: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  alternateHotelCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  newAlternateHotelCode?: string;
}

/** Defines the position of an entity in relation to another entity (e.g. from an airport to a hotel, the relationship is dependent on use). */
export interface RelativePositionType {
  /** Defines the distance between two points. */
  distance?: number;
  /**
   * The unit of measure in a code format.
   * @minLength 0
   * @maxLength 20
   */
  distanceType?: string;
  /**
   * The driving time in a free text format.
   * @minLength 0
   * @maxLength 20
   */
  drivingTime?: string;
}

export interface HotelAmenityType {
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
   * @minLength 0
   * @maxLength 2000
   */
  type?: string;
  displayOrder?: number;
}

export interface RateRoomDetailsType {
  /**
   * Detail regarding customer loyalty program.
   * @maxItems 4000
   */
  memberships?: MembershipSearchType[];
  /** Indicates the restriction types if hotel is not available. */
  restrictionType?: MasterRestrictionStatusesType;
  /**
   * Room stay information.
   * @maxItems 4000
   */
  roomStays?: RoomStayType[];
}

/** Identifies criteria for searching frequent customer reward program. */
export interface MembershipSearchType {
  /**
   * Membership ID criteria.
   * @maxLength 2000
   */
  membershipId?: string;
  /** Membership Level criteria. */
  membershipLevel?: CodeListType;
  /** Membership Type criteria. */
  membershipType?: CodeListType;
  /** If this is true,the reservations which has membership information associated will be resulted . */
  associatedReservationsOnly?: boolean;
}

/** Depicts channel information such as the type and code. */
export interface ChannelSummaryInfoType {
  bookingChannel?: BookingChannelType;
  /**
   * Indicates the transaction identifier.
   * @maxLength 2000
   */
  messageId?: string;
  /** Used to indicate whether to return summarized or detailed rate room information. */
  summaryOnly?: boolean;
}

export interface BookingChannelType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  channelCode?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  channelName?: string;
  /**
   * @minLength 0
   * @maxLength 240
   */
  channelType?: string;
}

/** The SellMessagesType is the list of message and attributes returned by web service. */
export interface SellMessagesType {
  /**
   * This is the message text.
   * @maxItems 4000
   */
  sellMessage?: SellMessageType[];
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** The SellMessagesType defines the standard attributes that will be retrieved with the sell message. */
export interface SellMessageType {
  /**
   * This is the message text.
   * @minLength 0
   * @maxLength 2000
   */
  message?: string;
  /**
   * This is the Central Reservation office code.
   * @minLength 0
   * @maxLength 20
   */
  croCode?: string;
  /**
   * This is the chain code.
   * @minLength 0
   * @maxLength 20
   */
  chainCode?: string;
  /**
   * This is the hotel code or resort.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * This represents the room type code.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * This represents the rate plan code of the room type.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
  /**
   * This is the language code.
   * @minLength 0
   * @maxLength 20
   */
  languageCode?: string;
  /**
   * Flag which tells if this message is Sticky (Y/N).
   * @minLength 0
   * @maxLength 1
   */
  stickyFlagYn?: string;
  /** This represents the correct moduletype which should be used for fetching SellMessages. */
  usedInModule?: UsedInModuleType;
  /**
   * This is the Begin date for the configured SellMessage.
   * @format date
   * @maxLength 8
   */
  beginDate?: string;
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

/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
export enum UsedInModuleType {
  Blocks = 'Blocks',
  Reservations = 'Reservations',
  FunctionDiary = 'FunctionDiary',
  LookToBookSales = 'LookToBookSales',
  GroupRoomsControl = 'GroupRoomsControl',
}

/**
 * Exchange Rate information for a currency code.
 * @maxItems 4000
 */
export type CurrencyExchangeRatesType = CurrencyExchangeRateType[];

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

/**
 * Lists of contacts of the hotel.
 * @maxItems 4000
 */
export type HotelContactsType = HotelContactType[];

/** Contact identification details. */
export interface HotelContactType {
  /** Contact or employee identifier.. */
  nameId?: UniqueIDType;
  /**
   * The code of the hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Name of the hotel contact.
   * @minLength 0
   * @maxLength 2000
   */
  name?: string;
  /** List of HotelContactType. */
  roles?: HotelContactRolesType;
  /**
   * The contact's code in the hotel.
   * @minLength 0
   * @maxLength 20
   */
  ownerCode?: string;
  /**
   * The preferred method of communication for the contact.
   * @minLength 0
   * @maxLength 20
   */
  communicationMethod?: string;
  /**
   * Details about the preferred communication method. Example: email address, fax number, etc.
   * @minLength 0
   * @maxLength 80
   */
  communicationAddress?: string;
  /** Primary flag. */
  primary?: boolean;
}

/**
 * Lists of HotelContactRoles of the hotel.
 * @maxItems 4000
 */
export type HotelContactRolesType = HotelContactRoleType[];

/** The contact's role in the hotel. Possible values are Lead, General, and Contract. */
export enum HotelContactRoleType {
  Lead = 'Lead',
  General = 'General',
  Contract = 'Contract',
}

/** The Detail and Summary info of event space about the hotel */
export interface HotelEventSpacesType {
  /** Even Space Detail information of the hotel. */
  eventSpaceDetails?: HotelEventSpaceDetailsType;
  /** Event Space Summary information of the hotel. */
  eventSpaceSummaries?: HotelEventSpaceSummariesType;
  /** List of hotel setup style codes of the hotel. */
  setupStyles?: HotelSetupStylesType;
}

/**
 * List of detail info of hotel event space
 * @maxItems 4000
 */
export type HotelEventSpaceDetailsType = HotelEventSpaceDetailType[];

/** The detail info of hotel event space */
export interface HotelEventSpaceDetailType {
  /**
   * The code of hotel event space.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Th description of the hotel event space
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** Th max capacity of the hotel event space */
  maxCapacity?: number;
  /** List of max occupancies of the event space based on the setup code. */
  maxOccupancies?: EventSpaceMaxOccupanciesType;
}

/**
 * List of event space max occupancy.
 * @maxItems 5
 */
export type EventSpaceMaxOccupanciesType = number[];

/**
 * List of summary info of hotel event space
 * @maxItems 4000
 */
export type HotelEventSpaceSummariesType = HotelEventSpaceSummaryType[];

/** The summary info of hotel event space */
export interface HotelEventSpaceSummaryType {
  /** The total event space number which has the same space type, max capacity and setup style. */
  no?: number;
  /**
   * The type of the event space
   * @minLength 0
   * @maxLength 2000
   */
  spaceType?: string;
  /** The max capacity of this event space group */
  maxCapacity?: number;
  /** List of max occupancies of the event space based on the setup code. */
  maxOccupancies?: EventSpaceMaxOccupanciesType;
}

/**
 * List of event space setup style codes.
 * @maxItems 5
 */
export type HotelSetupStylesType = string[];

/**
 * List of Notes of the hotel.
 * @maxItems 4000
 */
export type HotelNotesType = CommentInfoType[];

/** Corporate information details of the property */
export interface HotelCorporateInformationsType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  brandCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelCategory?: string;
  /** List of codes with primary flag */
  businessUnit?: PrimaryCodesType;
  /** List of codes with primary flag */
  departmentCode?: PrimaryCodesType;
  /** List of codes with primary flag */
  division?: PrimaryCodesType;
  /** List of codes with primary flag */
  opertingUnit?: PrimaryCodesType;
}

/**
 * List of codes with primary flag
 * @maxItems 4000
 */
export type PrimaryCodesType = PrimaryCodeType[];

/** Primary flag with code and description. */
export interface PrimaryCodeType {
  primary?: boolean;
  /** This contains a generic code and description information. */
  codeDescription?: CodeDescriptionType;
}

/** @maxItems 4000 */
export type HotelAttractionsType = HotelAttractionType[];

/** Information about the attractions near the hotel. */
export interface HotelAttractionType {
  /** Attraction name for the hotel. */
  name?: TranslationTextType2000;
  /**
   * The type of the attraction.
   * @minLength 0
   * @maxLength 60
   */
  type?: string;
  /**
   * The class of the attraction.
   * @minLength 0
   * @maxLength 60
   */
  class?: string;
  /**
   * Directions to the attraction from the hotel.
   * @minLength 0
   * @maxLength 2000
   */
  generalDirections?: string;
  /** Defines the position of an entity in relation to another entity (e.g. from an airport to a hotel, the relationship is dependent on use). */
  relativePosition?: RelativePositionType;
  /** Address of the attraction. */
  address?: AddressType;
  /** Website for the attraction. */
  website?: URLType;
  /**
   * Price range for the attraction.
   * @minLength 0
   * @maxLength 40
   */
  priceRange?: string;
  /**
   * Price range for the attraction.
   * @minLength 0
   * @maxLength 20
   */
  operationHours?: string;
  /** Display sequence of the attraction. */
  displaySeq?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
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
 * List of meeting rooms of the hotel.
 * @maxItems 4000
 */
export type MeetingRoomsType = MeetingRoomType[];

/** Information about the meeting rooms of the hotel. */
export interface MeetingRoomType {
  /**
   * the code of the meeting room
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * The charge for the meeting room.
   * @minLength 0
   * @maxLength 40
   */
  charge?: string;
  /**
   * A description of the meeting room.
   * @minLength 0
   * @maxLength 200
   */
  description?: string;
}

/** Channel specific information to be returned in availability response. */
export interface ChannelAvailRSInfoType {
  /** Channel information like channel code etc. */
  channelSummaryInfo?: ChannelSummaryInfoType;
  /** Channel Marketing Text like cancel,deposit,tax,commission policy etc. */
  channelMarketingInfo?: ChannelMarketingInfoType;
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

/** Response object to fetch reservation guarantees. */
export interface ReservationGuaranteesPolicies {
  /** A collection of Guarantee Codes information with cancellation penalty and deposit policy information. */
  resGuarantees?: GuaranteePoliciesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for fetching restrictions based on date range. */
export interface RestrictionsByDateRange {
  /** Response of Restrictions By Date Range */
  restrictionsByDateRange?: FetchRestrictionsByDateRangeRSType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for searching restrictions by date range. */
export interface FetchRestrictionsByDateRangeRSType {
  /** Requested restrictions by date Range. */
  restrictionsByDateRange?: RestrictionsByDateRangeType;
}

/** Restriction by date range for the requested Hotel. */
export interface RestrictionsByDateRangeType {
  /**
   * Restriction set for a date range.
   * @maxItems 4000
   */
  restrictionSets?: RestrictionSetType[];
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
  /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
  hasMore?: boolean;
  /** Total number of rows queried */
  totalResults?: number;
  /** Total number of rows returned */
  count?: number;
}

/** Indicates Restriction set applicable for the date range. */
export interface RestrictionSetType {
  /** Indicates the applicability of the restriction. */
  restrictionControl?: RestrictionControlType;
  /** Indicates the type of the restriction. */
  restrictionStatus?: RestrictionStatusType;
  /** Actual time span of the restriction. */
  actualTimeSpan?: TimeSpanType;
  /** Indicates whether the Closed restriction is flagged as On Request. */
  onRequest?: boolean;
  /**
   * Indicates the action performed on restriction
   * @minLength 0
   * @maxLength 2000
   */
  actionType?: string;
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

/** The RestrictionControlType is used to indicate the applicability of the restriction. */
export interface RestrictionControlType {
  /** Indicates the restriction is applicable at the House Level. When this is true all other attributes are ignored. */
  house?: boolean;
  /**
   * Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified.
   * @minLength 0
   * @maxLength 20
   */
  bookingChannelCode?: string;
  /**
   * Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified.
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /**
   * Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCategory?: string;
  /**
   * Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified.
   * @minLength 0
   * @maxLength 20
   */
  ratePlanCode?: string;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/par/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Price Availability Rate API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /par/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  hotels = {
    /**
     * @description Use this API to get hotel availability for multiple hotels, given dates, Rate Plans, Rate Category, Rate Group, Membership Rates, and number of people. By default five records are returned unless a higher number is specified in the limit query parameter.<p><strong>OperationId:</strong>getHotelAvailability</p>
     *
     * @tags Availability
     * @name GetHotelAvailability
     * @summary Get hotel availability
     * @request GET:/hotels/{hotelId}/availability
     */
    getHotelAvailability: (
      hotelId: string,
      query?: {
        /** Central reservation office Code who is requesting Rate Availability. */
        cro?: string[];
        /** Used to indicate if closed rates are to be included in the Rate Plan set. */
        includeClosedRates?: boolean[];
        /** Used to indicate if the configured default rate plan set will be included. */
        includeDefaultRatePlanSet?: boolean[];
        /** If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. */
        initialRatePlanSet?: boolean[];
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number[];
        /** Specifies fetched record's key as pointer to fetch additional records from. If key is composite use comma separated string. */
        pagePointerKey?: string[];
        /** Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). */
        ratePlanSet?: string[];
        /** Used to indicate if the awards are to be redeemed. */
        redeemAwards?: boolean[];
        /** @format date */
        roomStayStartDate?: string;
        /** @format date */
        roomStayEndDate?: string;
        roomStayQuantity?: number;
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
        /** @format date */
        fullStayTimeSpanStartDate?: string;
        /** @format date */
        fullStayTimeSpanEndDate?: string;
        prevailingRate?: boolean;
        rateCategory?: string;
        rateClass?: string;
        rateGroup?: string;
        ratePlanCode?: string[];
        /** Promotion code associated with the rate plan. */
        promotionCode?: string[];
        roomType?: string[];
        feature?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationGuestId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationGuestIdType?: string;
        /** @uniqueItems true */
        reservationProfileType?: (
          | 'Guest'
          | 'Company'
          | 'Group'
          | 'TravelAgent'
          | 'Source'
          | 'ReservationContact'
          | 'BillingContact'
          | 'Addressee'
        )[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        attachedProfileId?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        hotelReservationId?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        hotelReservationIdType?: string;
        /** If true Rate Plan Code Master information will be included in the response. */
        ratePlanInfo?: boolean;
        /** If true Only availability check will be done and it will return available rate codes. */
        returnOnlyAvailableRateCodes?: boolean;
        /** If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. */
        resGuaranteeInfo?: boolean;
        /** If true Room Type Master information will be included in the response. */
        roomTypeInfo?: boolean;
        /** Membership id Number of the guest. */
        membershipIdNumber?: number[];
        /** Membership id Number of the guest. */
        membershipLevel?: string[];
        /** Membership id Number of the guest. */
        membershipType?: string[];
        /** Used to indicate Points Available for Profile Primary Membership Type. */
        pointsAvailable?: number[];
        /** Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. */
        smokingPreference?: string[];
        /** Hotel Package Code to filter the search result. */
        hotelPackage?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<HotelAvailability, ExceptionDetailType>({
        path: `/hotels/${hotelId}/availability`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get the required guarantee types in order to complete a booking. The criteria can include the rate plan code, arrival date, guarantee code and the profile information.<p><strong>OperationId:</strong>getReservationGuarantees</p>
     *
     * @tags Availability
     * @name GetReservationGuarantees
     * @summary Get reservation guarantees
     * @request GET:/hotels/{hotelId}/guarantees
     */
    getReservationGuarantees: (
      hotelId: string,
      query: {
        /**
         * Arrival Date of the guest.
         * @format date
         */
        arrivalDate: string;
        /** Rate Plan Code to find associated Guarantee Codes. */
        ratePlanCode?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        blockId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationGuestId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        companyId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        travelAgentId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        sourceId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        groupId?: string;
        /** Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. */
        guaranteeCode?: string;
        /** Determines whether estimated amount to be calculated or not */
        calculateEstimateAmount?: boolean;
        /** @format date */
        startDate?: string;
        /** @format date */
        endDate?: string;
        numberOfRooms?: number;
        /** Defines the number of Adults. */
        numberOfAdults?: number;
        /** Defines the number of Children. */
        numberOfChildren?: number;
        /** Room Type for the reservation */
        roomType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ReservationGuaranteesPolicies, ExceptionDetailType>({
        path: `/hotels/${hotelId}/guarantees`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get the Restrictions for a hotel in given date range. The search criteria can include filter codes or restriction control types, date range and the hotel information.<p><strong>OperationId:</strong>getRestrictionsByDateRange</p>
     *
     * @tags Availability
     * @name GetRestrictionsByDateRange
     * @summary Get hotel restrictions
     * @request GET:/hotels/{hotelId}/restrictions
     */
    getRestrictionsByDateRange: (
      hotelId: string,
      query?: {
        /** The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). */
        chainName?: string;
        /**
         * The ending value of the date range.
         * @format date
         */
        end?: string;
        /** Defines the maximum amount of restrictions by day. */
        fetchSizeByDay?: number;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** @uniqueItems true */
        restrictionInfo?: 'Detail' | 'Overview' | 'Year';
        /**
         * The starting value of the date range.
         * @format date
         */
        restrictionSearchCriteriaStartDate?: string;
        /** Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. */
        bookingChannelCode?: string;
        /** Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. */
        ratePlanCategory?: string;
        /** Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. */
        ratePlanCode?: string;
        /** Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. */
        roomClass?: string;
        /** Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. */
        roomType?: string;
        /**
         * An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode.
         * @uniqueItems true
         */
        filterCodeCategory?: 'BookingChannelCode' | 'RoomClass' | 'RoomType' | 'RatePlanCategory' | 'RatePlanCode';
        /** Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. */
        filterCode?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RestrictionsByDateRange, ExceptionDetailType>({
        path: `/hotels/${hotelId}/restrictions`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
