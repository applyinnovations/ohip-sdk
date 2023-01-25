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

/** Response to the request to fetch pending Reminders for Accounts. */
export interface Reminders {
  /** Statement History. */
  remindersDetails?: ARRemindersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Information about a Reminder.
 * @maxItems 4000
 */
export type ARRemindersType = ARReminderType[];

/** AR Reminder Information Type. */
export interface ARReminderType {
  /**
   * Property where the Account belongs.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The unique ID of the AR Account. */
  accountId?: UniqueIDType;
  /** The maximum Age(days) of the invoices in the Reminder. This would be available when Simple Reminder functionality is OFF. */
  maxAge?: number;
  /** The Reminder Cycle calculation type(defined for the Account Type) for this Account. This is how the Reminder Cycle is being calculated. Values are Days or End Of Month. */
  cycleUsed?: ReminderCycleType;
  /**
   * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
   * @minLength 0
   * @maxLength 2000
   */
  letterName?: string;
  /** The current Reminder Cycle number for this reminder. This would be available when Simple Reminder functionality is ON. */
  cycle?: number;
  /** The Last Reminder Cycle used for this Account. This would be available when Simple Reminder functionality is ON. */
  lastCycle?: number;
  /**
   * The date of the Last Reminder Sent.
   * @format date
   * @maxLength 8
   */
  lastReminderSent?: string;
  /** The minimum age(days) of the invoices to be included in the Reminder */
  age?: number;
  /**
   * Reminder summary currency code.
   * @minLength 3
   * @maxLength 3
   */
  currencyCode?: string;
  /**
   * The Reminder report file name Letter name which is to be used for reprint.
   * @minLength 0
   * @maxLength 2000
   */
  reportFileName?: string;
  /** Indicates that reminders history exists. */
  isHistoryExists?: boolean;
  /** Invoice details of the Reminder. */
  invoices?: ARInvoicesType;
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

/** The different types of Reminder Cycle calculation rules. */
export enum ReminderCycleType {
  Days = 'Days',
  EndOfMonth = 'EndOfMonth',
}

/**
 * A collection of AR Invoices.
 * @maxItems 4000
 */
export type ARInvoicesType = ARInvoiceType[];

/** Details of an AR Invoice. */
export interface ARInvoiceType {
  /**
   * Property where the invoice exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID of the invoice. */
  reservationId?: ReservationId;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** The Aging age of the invoice */
  age?: number;
  /**
   * Name of the Guest who consumed these transactions.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Original Amount of the Invoice */
  originalAmount?: CurrencyAmountType;
  /** Current Amount of the Invoice. */
  amount?: CurrencyAmountType;
  /** Total Payments made to this Invoice. */
  payments?: CurrencyAmountType;
  /** Amount still open which has not been paid */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  adjusted?: boolean;
  parentInvoiceNo?: number;
  compressed?: boolean;
  /**
   * @format date
   * @maxLength 8
   */
  compressedDate?: string;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /** Invoice market code. */
  market?: MarketCodeInfoType;
  /** Invoice room class code. */
  roomClass?: RoomClassCodeInfoType;
  /** Invoice source code. */
  source?: SourceCodeInfoType;
  /** Reservation guest details. */
  reservationInfo?: ReservationInfoType;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Transaction information . */
  transactionInfo?: TrxInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  /** Addressee Information for the folio. This is available when the Addressee functionality is used and and Addressee is attached to the folio of the Invoice. */
  addresseeInfo?: ProfileInfoType;
  /** Flag to check Partail Transfer Allowed. */
  allowPartialTransferYn?: boolean;
  /** Flag to check Invoice Statement is Printed. */
  printed?: boolean;
  /**
   * Invoice Statement Printed Date.
   * @format date
   * @maxLength 8
   */
  printedDate?: string;
  /** ID of the Stored Folio. */
  storedFolioId?: UniqueIDType;
  /**
   * Name of the Stored Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedFolioName?: string;
  /** ID of the Stored Debit Folio. */
  storedDebitFolioId?: UniqueIDType;
  /**
   * Name of the Stored Debit Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedDebitFolioName?: string;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /**
   * Unique Custom Numbers associated with this record.
   * @maxItems 5
   */
  customNumbers?: CustomNumberType[];
  /** Provides information which is used for fiscal response processing. */
  fiscalResponseType?: FiscalResponseType;
  /** Unique Transaction Identifier of the Invoice. */
  transactionNo?: number;
  /**
   * Transaction Date of the invoice.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Status of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Transaction code of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Folio Number. */
  folioNo?: number;
  /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
  invoiceNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /**
   * The name of the Folio Type used for the Folio Number sequence.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
  /**
   * Internal window ID which is unique to the reservation. This ID can only be used for reference.
   * @minLength 0
   * @maxLength 20
   */
  internalFolioWindowID?: string;
  /**
   * Date of Folio Generation.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
  folioStatus?: FolioStatusType;
  /**
   * The folio number with prefix value.
   * @minLength 0
   * @maxLength 200
   */
  folioNoWithPrefix?: string;
  /** Unique sequence number. Used to identify the current folio tax record. */
  folioSeqNo?: number;
  /** Invoice code of the invoice. */
  invoiceType?: ARInvoiceCategory;
  /** Statementno of the invoice. */
  statementNo?: number;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Close date of the invoice.
   * @format date
   * @maxLength 8
   */
  closeDate?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Transfer date of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** Flag to indicate if postings or adjustments can be made to the invoice. */
  canBeModified?: boolean;
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

/** Code of the room class type. */
export interface RoomClassCodeInfoType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomClassCode?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
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

/** Cashier information. Contains Id and Name details of the cashier. */
export interface CashierInfoType {
  /** Cashier Id of the Cashier. */
  cashierId?: number;
  /**
   * Cashier Name.
   * @minLength 0
   * @maxLength 2000
   */
  cashierName?: string;
}

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

/** Provides information about attached profiles to the block. */
export interface ProfileInfoType {
  /** Opera ID for the profile attached to the block. */
  profileId?: UniqueIDType;
  /**
   * Name for the profile attached to the block.
   * @minLength 0
   * @maxLength 200
   */
  name?: string;
  /**
   * City for the profile attached to the block.
   * @minLength 0
   * @maxLength 80
   */
  city?: string;
  /**
   * Phone for the profile attached to the block.
   * @minLength 0
   * @maxLength 80
   */
  phone?: string;
  /**
   * Defines the type of Linked profiles for a block.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/**
 * Custom number
 * @minLength 0
 * @maxLength 200
 */
export type CustomNumberType = string;

/** Provides information which is used for fiscal response processing. */
export interface FiscalResponseType {
  /** Fiscal Folio sequence ID stored in queue table. */
  folioSeqId?: number;
  /** Flag to do the retrieval process of fiscal printing or not. */
  retryFiscalPrinting?: boolean;
}

/** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
export enum FolioStatusType {
  Deposit = 'Deposit',
  Void = 'Void',
  Ok = 'Ok',
  Zero = 'Zero',
  Compress = 'Compress',
  Converted = 'Converted',
  Internal = 'Internal',
}

export enum ARInvoiceCategory {
  Normal = 'Normal',
  Credit = 'Credit',
  OldBalance = 'OldBalance',
  PasserBy = 'PasserBy',
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

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Response for the request to search for AR Accounts. Based on the criteria, the response can contain a list of AR Accounts and their AR information. */
export interface AccountsInfo {
  /** List of AR Accounts. */
  accountsDetails?: ARAccountsType;
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
 * Information regarding the AR Account.
 * @maxItems 4000
 */
export type ARAccountsType = ARAccountType[];

/** Accounts Receivabales Account details type. */
export interface ARAccountType {
  /**
   * Property where the AR Account exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
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
  /** Internal Profile ID for the AR Account. */
  profileId?: ProfileId;
  /** Open Balance of the Account for this property. */
  balance?: CurrencyAmountType;
  /** The maximum credit allowed for the Account. */
  creditLimit?: CurrencyAmountType;
  /**
   * The person to contact for this Account.
   * @minLength 0
   * @maxLength 200
   */
  contactName?: string;
  /**
   * Number of days on which person can make payment.
   * @minLength 0
   * @maxLength 20
   */
  paymentDueDays?: string;
  /** Month End Calculation. */
  monthEndCalcYN?: boolean;
  /** Address information for the address which is attached to this AR Account. */
  address?: AddressInfoType;
  /** Email information for the Account. This is the Email that is attached to this AR Account. */
  email?: EmailInfoType;
  /**
   * The Telephone and Fax details attached to the Account.
   * @maxItems 4000
   */
  telephones?: TelephoneInfoType[];
  /** Report History Type used as based type for Remiders and Statements History types. */
  lastReminderInfo?: {
    /**
     * Report Name.
     * @minLength 0
     * @maxLength 2000
     */
    reportName?: string;
    /**
     * Report file name when exists to allow report re-printing.
     * @minLength 0
     * @maxLength 2000
     */
    reportFileName?: string;
    /**
     * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
     * @format date
     * @maxLength 8
     */
    dateSent?: string;
    /** The minimum age(days) of the invoices to be included in the Reminder */
    age?: number;
    /** Indicates that reminders history exists. */
    historyExists?: boolean;
  };
  /** Report History Type used as based type for Remiders and Statements History types. */
  lastStatementInfo?: {
    /**
     * Report Name.
     * @minLength 0
     * @maxLength 2000
     */
    reportName?: string;
    /**
     * Report file name when exists to allow report re-printing.
     * @minLength 0
     * @maxLength 2000
     */
    reportFileName?: string;
    /**
     * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
     * @format date
     * @maxLength 8
     */
    dateSent?: string;
    /** When using Statement Numbering, a unique number is associated to the Statement. */
    statementNo?: number;
    /** Indicates that statement history exists. */
    historyExists?: boolean;
  };
  /**
   * The Note details attached to the Account.
   * @maxItems 4000
   */
  notes?: CommentInfoType[];
  /**
   * The Trace details attached to the Account.
   * @maxItems 4000
   */
  traces?: TraceType[];
  /** Fixed charges attached to this AR Account. */
  fixedCharges?: FixedChargesType;
  /** Indicators of additional information attached to the Account. */
  accountIndicators?: IndicatorsType;
  /** The Aging balance information for this account, by Aging Buckets. */
  agingInfo?: ARAgingInfoType;
  /** The Year View balance information for this account. */
  yearViewInfo?: ARYearViewInfoType;
  /** List of all Invoices. */
  invoices?: ARInvoicesType;
  /** List of all Payments made. */
  payments?: ARPaymentsType;
  /** The Summary Information of the Invoices for the Account. */
  summary?: ARBalanceType;
  /** The status of the account. */
  status?: ARAccountStatusType;
  /** Include In Batch Statement */
  batchStatement?: boolean;
  /** Indicates if associated folios should be printed by default with the statement. */
  printFoliosWithStatement?: boolean;
  /** Indicates if the Account has opted to send the statements and reminders to the Account email address by default. */
  emailStatementsReminders?: boolean;
  /** Super Search matching terms. */
  searchMatches?: SearchMatchesType;
  /** Indicates if this Account is the Primary Account for this Guest/Company. */
  primary?: boolean;
  /**
   * The type of Account.
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
  /**
   * The description of the Account Type.
   * @minLength 0
   * @maxLength 2000
   */
  accountTypeDescription?: string;
  /** Indicates if this is a Permanent Account. Permanent Accounts cannot be deleted. */
  permanent?: boolean;
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

/** Information regarding the aging balances for an account. */
export interface ARAgingInfoType {
  /** The total debit and credit balance of the account. */
  totalOutstanding?: ARBalanceType;
  /**
   * The debit and credit balance per Aging bucket.
   * @maxItems 4000
   */
  aging?: ARAgingType[];
}

/** Balance information for AR. */
export interface ARBalanceType {
  /** Debit Balance amount. The amount owed by the Account. */
  debit?: CurrencyAmountType;
  /** The credit Balance amount. Any payment that is Unallocated i.e not applied against an invoice, is included in this. */
  credit?: CurrencyAmountType;
  /** The total balance i.e Debit minus Credit amounts. */
  total?: CurrencyAmountType;
}

/** Aging information for an Aging Bucket. */
export interface ARAgingType {
  /**
   * The bucket description in terms of days. Example : 0-31 days
   * @minLength 0
   * @maxLength 20
   */
  agingBucketRange?: string;
  /** The start date and end date for this Aging bucket. */
  agingDate?: DateRangeType;
  /** The balance amounts for this bucket. Contains the Debit Balance, Credit Balance and the Total Balance. */
  balanceInfo?: ARBalanceType;
  /** The start number of days for this Aging bucket. Example: For the range 31-60 days, this would be 31. */
  agingStartDay?: number;
  /** The end number of days for this Aging bucket. Example: For the range 31-60 days, this would be 60. */
  agingEndDay?: number;
  /** The sequence for display. */
  sequence?: number;
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

/** Information regarding Year View balances for an account. */
export interface ARYearViewInfoType {
  /** The total debit and credit balance of the account. */
  totalOutstanding?: ARBalanceType;
  /**
   * The debit and credit balance per account.
   * @maxItems 4000
   */
  yearView?: ARYearViewType[];
}

/** Year information for an Year View. */
export interface ARYearViewType {
  /** The period start and end date. */
  dateRange?: DateRangeType;
  /** The balance amounts for this date range. Contains the Debit Balance, Credit Balance and the Total Balance. */
  balanceInfo?: ARBalanceType;
  /** The running total balance for the date range. */
  runningTotal?: CurrencyAmountType;
}

/**
 * A collection of AR Payments.
 * @maxItems 4000
 */
export type ARPaymentsType = ARPaymentType[];

/** Details of an AR Payment. */
export interface ARPaymentType {
  /** The Aging age of the payment. */
  age?: number;
  /** Amount of the Payment. */
  amount?: CurrencyAmountType;
  /** Total amount applied against an invoice. */
  amountUsed?: CurrencyAmountType;
  /** Amount still open which has not been applied against any invoice. */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /**
   * Property code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique Transaction Identifier of the Payment. */
  transactionNo?: number;
  /**
   * Date of the Payment.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Transaction code of the Payment.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Transfer of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** When this PostingType is used to return the postings generated by a batch request, the sequence number is used to relate to the Request's sequence number. */
  sequenceNo?: number;
}

/** Reminders History. */
export interface RemindersHistory {
  aRReminderHistory?: ARReminderHistoryType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Report History Type used as based type for Remiders and Statements History types. */
export interface ARReminderHistoryType {
  /**
   * Report Name.
   * @minLength 0
   * @maxLength 2000
   */
  reportName?: string;
  /**
   * Report file name when exists to allow report re-printing.
   * @minLength 0
   * @maxLength 2000
   */
  reportFileName?: string;
  /**
   * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
   * @format date
   * @maxLength 8
   */
  dateSent?: string;
  /** The minimum age(days) of the invoices to be included in the Reminder */
  age?: number;
}

/** Details of the Statement to generate. */
export interface Statements {
  aRStatements?: ARStatementType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Details about an AR Statement. */
export interface ARStatementType {
  /**
   * Property where the Account belongs.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The Statement Balance. */
  balance?: CurrencyAmountType;
  /** The unique ID of the AR Account. */
  accountId?: UniqueIDType;
  /** Invoice details of the Statement. */
  invoices?: ARInvoicesType;
  /** Statement Number for the Statement, when the functionality for Numbering is ON. */
  statementNo?: number;
  /** Internal Report Sequence Number for the which is used to mark statement invoices */
  reportSeqNo?: number;
  /** Flag to indicate if Folios are to be printed along with the Statement. */
  inclFolios?: boolean;
  /**
   * The Statement Report name which should be used for printing.
   * @minLength 0
   * @maxLength 2000
   */
  statementName?: string;
  /** The Type of Statement used. */
  type?: StatementType;
  /**
   * The Statement Report name which should be used for printing.
   * @minLength 0
   * @maxLength 2000
   */
  reportFileName?: string;
}

/** The Types of Statements that can be used on an Account Type. */
export enum StatementType {
  BalanceForward = 'BalanceForward',
  IndividualOpenItems = 'IndividualOpenItems',
}

/** Response after fetching AR transaction details. */
export interface ArTransactions {
  /** Invoice and Payment Details for the Account. */
  transactions?: ARTransactionType;
  /** Transaction codes information which are in the response invoices/payments. */
  trxCodesInfo?: TrxCodesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Transaction Information. */
export interface ARTransactionType {
  /** List of Invoices. */
  invoices?: AccountInvoicesInfoType;
  /** List of Payments. */
  payments?: AccountPaymentsInfoType;
}

/**
 * Account Invoice Info.
 * @maxItems 4000
 */
export type AccountInvoicesInfoType = AccountInvoiceInfoType[];

/** Details of an AR Invoice. */
export interface AccountInvoiceInfoType {
  /**
   * Property where the invoice exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID of the invoice. */
  reservationId?: ReservationId;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** The Aging age of the invoice */
  age?: number;
  /**
   * Name of the Guest who consumed these transactions.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Original Amount of the Invoice */
  originalAmount?: CurrencyAmountType;
  /** Current Amount of the Invoice. */
  amount?: CurrencyAmountType;
  /** Total Payments made to this Invoice. */
  payments?: CurrencyAmountType;
  /** Amount still open which has not been paid */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  adjusted?: boolean;
  parentInvoiceNo?: number;
  compressed?: boolean;
  /**
   * @format date
   * @maxLength 8
   */
  compressedDate?: string;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /** Invoice market code. */
  market?: MarketCodeInfoType;
  /** Invoice room class code. */
  roomClass?: RoomClassCodeInfoType;
  /** Invoice source code. */
  source?: SourceCodeInfoType;
  /** Reservation guest details. */
  reservationInfo?: ReservationInfoType;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Transaction information . */
  transactionInfo?: TrxInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  /** Addressee Information for the folio. This is available when the Addressee functionality is used and and Addressee is attached to the folio of the Invoice. */
  addresseeInfo?: ProfileInfoType;
  /** Flag to check Partail Transfer Allowed. */
  allowPartialTransferYn?: boolean;
  /** Flag to check Invoice Statement is Printed. */
  printed?: boolean;
  /**
   * Invoice Statement Printed Date.
   * @format date
   * @maxLength 8
   */
  printedDate?: string;
  /** ID of the Stored Folio. */
  storedFolioId?: UniqueIDType;
  /**
   * Name of the Stored Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedFolioName?: string;
  /** ID of the Stored Debit Folio. */
  storedDebitFolioId?: UniqueIDType;
  /**
   * Name of the Stored Debit Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedDebitFolioName?: string;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /**
   * Unique Custom Numbers associated with this record.
   * @maxItems 5
   */
  customNumbers?: CustomNumberType[];
  /** Provides information which is used for fiscal response processing. */
  fiscalResponseType?: FiscalResponseType;
  /** Unique Transaction Identifier of the Invoice. */
  transactionNo?: number;
  /**
   * Transaction Date of the invoice.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Status of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Transaction code of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Folio Number. */
  folioNo?: number;
  /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
  invoiceNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /**
   * The name of the Folio Type used for the Folio Number sequence.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
  /**
   * Internal window ID which is unique to the reservation. This ID can only be used for reference.
   * @minLength 0
   * @maxLength 20
   */
  internalFolioWindowID?: string;
  /**
   * Date of Folio Generation.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
  folioStatus?: FolioStatusType;
  /**
   * The folio number with prefix value.
   * @minLength 0
   * @maxLength 200
   */
  folioNoWithPrefix?: string;
  /** Invoice code of the invoice. */
  invoiceType?: ARInvoiceCategory;
  /** Statementno of the invoice. */
  statementNo?: number;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Close date of the invoice.
   * @format date
   * @maxLength 8
   */
  closeDate?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Transfer date of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** Flag to indicate if postings or adjustments can be made to the invoice. */
  canBeModified?: boolean;
  /**
   * Name of the AR Account.
   * @minLength 0
   * @maxLength 1000
   */
  accountName?: string;
  /**
   * The Account Number for the Account.
   * @minLength 0
   * @maxLength 20
   */
  accountNo?: string;
  /** The unique ID for the Account. */
  accountId?: UniqueIDType;
}

/**
 * Account Payments info .
 * @maxItems 4000
 */
export type AccountPaymentsInfoType = AccountPaymentInfoType[];

/** Details of an AR Payment. */
export interface AccountPaymentInfoType {
  /** The Aging age of the payment. */
  age?: number;
  /** Amount of the Payment. */
  amount?: CurrencyAmountType;
  /** Total amount applied against an invoice. */
  amountUsed?: CurrencyAmountType;
  /** Amount still open which has not been applied against any invoice. */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /**
   * Property code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Unique Transaction Identifier of the Payment. */
  transactionNo?: number;
  /**
   * Date of the Payment.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Transaction code of the Payment.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Transfer of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** When this PostingType is used to return the postings generated by a batch request, the sequence number is used to relate to the Request's sequence number. */
  sequenceNo?: number;
  /**
   * Name of the AR Account.
   * @minLength 0
   * @maxLength 1000
   */
  accountName?: string;
  /**
   * The Account Number for the Account.
   * @minLength 0
   * @maxLength 20
   */
  accountNo?: string;
  /** The unique ID for the Account. */
  accountId?: UniqueIDType;
}

/**
 * List of Transaction codes info.
 * @maxItems 4000
 */
export type TrxCodesInfoType = TrxInfoType[];

/** Request to create a new AR Account */
export interface AccountCriteria {
  /** Criteria to create an AR Account. */
  criteria?: ARAccountType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response after fetching on-hold invoices. */
export interface InvoicesOnHold {
  /** Invoice and Payment Details for the Account. */
  details?: ARAccountsInvoicesPaymentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Account Invoice information.
 * @maxItems 4000
 */
export type ARAccountsInvoicesPaymentsType = ARAccountInvoicesPaymentsType[];

/** AR Account Invoices Information. */
export interface ARAccountInvoicesPaymentsType {
  /**
   * Property where the Account exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Profile ID of the Account. */
  profileId?: ProfileId;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
  /**
   * Name of the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountName?: string;
  /**
   * The Account Number for the Account.
   * @minLength 0
   * @maxLength 20
   */
  accountNo?: string;
  /**
   * Number of days on which person can make payment.
   * @minLength 0
   * @maxLength 20
   */
  paymentDueDays?: string;
  /** Month End Calculation. */
  monthEndCalcYN?: boolean;
  /** The Summary Information of the Invoices for the Account. */
  summary?: ARBalanceType;
  /** List of all Invoices. */
  invoices?: ARInvoicesType;
  /** List of all Payments made. */
  payments?: ARPaymentsType;
}

/** Response for the request to fetch details for an AR Account. */
export interface Account {
  /** Account Details. Details can include information regarding Aging, Reminders, Statements, invoices, payments, notes and traces. */
  accountDetails?: ARAccountType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface CreditToInvoices {
  /** Criteria type for apply credits to Invoices. Requires a list of invoices to apply the credit. */
  criteria?: ARApplyPaymentCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria type for apply credits to Invoices. Requires a list of invoices to apply the credit. */
export interface ARApplyPaymentCriteriaType {
  /** Account for which the credit will be applied. */
  account?: ARAccountCriteriaType;
  /** List of Invoices to which the payment may be applied. */
  invoices?: ARPaymentInvoicesType;
  /** List of Payments which will be applied to the invoices. */
  payments?: ARPaymentsType;
  /** Defines how the payment has to be applied. */
  applyType?: ARApplyType;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Criteria type for an AR Account. */
export interface ARAccountCriteriaType {
  /**
   * Property where the AR Account exists. This is required.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Profile ID of the account */
  profileId?: ProfileId;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
  /**
   * Account Number for the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountNo?: string;
  /**
   * Account Name for the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountName?: string;
}

/**
 * AR Invoice to which the payment will be applied.
 * @maxItems 4000
 */
export type ARPaymentInvoicesType = {
  /**
   * Property where the invoice exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID of the invoice. */
  reservationId?: ReservationId;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** The Aging age of the invoice */
  age?: number;
  /**
   * Name of the Guest who consumed these transactions.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Original Amount of the Invoice */
  originalAmount?: CurrencyAmountType;
  /** Current Amount of the Invoice. */
  amount?: CurrencyAmountType;
  /** Total Payments made to this Invoice. */
  payments?: CurrencyAmountType;
  /** Amount still open which has not been paid */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  adjusted?: boolean;
  parentInvoiceNo?: number;
  compressed?: boolean;
  /**
   * @format date
   * @maxLength 8
   */
  compressedDate?: string;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /** Invoice market code. */
  market?: MarketCodeInfoType;
  /** Invoice room class code. */
  roomClass?: RoomClassCodeInfoType;
  /** Invoice source code. */
  source?: SourceCodeInfoType;
  /** Reservation guest details. */
  reservationInfo?: ReservationInfoType;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Transaction information . */
  transactionInfo?: TrxInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  /** Addressee Information for the folio. This is available when the Addressee functionality is used and and Addressee is attached to the folio of the Invoice. */
  addresseeInfo?: ProfileInfoType;
  /** Flag to check Partail Transfer Allowed. */
  allowPartialTransferYn?: boolean;
  /** Flag to check Invoice Statement is Printed. */
  printed?: boolean;
  /**
   * Invoice Statement Printed Date.
   * @format date
   * @maxLength 8
   */
  printedDate?: string;
  /** ID of the Stored Folio. */
  storedFolioId?: UniqueIDType;
  /**
   * Name of the Stored Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedFolioName?: string;
  /** ID of the Stored Debit Folio. */
  storedDebitFolioId?: UniqueIDType;
  /**
   * Name of the Stored Debit Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedDebitFolioName?: string;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /**
   * Unique Custom Numbers associated with this record.
   * @maxItems 5
   */
  customNumbers?: CustomNumberType[];
  /** Provides information which is used for fiscal response processing. */
  fiscalResponseType?: FiscalResponseType;
  /** Unique Transaction Identifier of the Invoice. */
  transactionNo?: number;
  /**
   * Transaction Date of the invoice.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Status of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Transaction code of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Folio Number. */
  folioNo?: number;
  /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
  invoiceNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /**
   * The name of the Folio Type used for the Folio Number sequence.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
  /**
   * Internal window ID which is unique to the reservation. This ID can only be used for reference.
   * @minLength 0
   * @maxLength 20
   */
  internalFolioWindowID?: string;
  /**
   * Date of Folio Generation.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
  folioStatus?: FolioStatusType;
  /**
   * The folio number with prefix value.
   * @minLength 0
   * @maxLength 200
   */
  folioNoWithPrefix?: string;
  /** Invoice code of the invoice. */
  invoiceType?: ARInvoiceCategory;
  /** Statementno of the invoice. */
  statementNo?: number;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Close date of the invoice.
   * @format date
   * @maxLength 8
   */
  closeDate?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Transfer date of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** Flag to indicate if postings or adjustments can be made to the invoice. */
  canBeModified?: boolean;
  /** Amount to apply to this Invoice. */
  amountToApply?: CurrencyAmountType;
}[];

/** Apply payment Selectively to the Invoices included. */
export enum ARApplyType {
  Default = 'Default',
  OldestInvoice = 'OldestInvoice',
  ApplyToInvoices = 'ApplyToInvoices',
  ApplySelectivelyToInvoices = 'ApplySelectivelyToInvoices',
}

/** The Cashier ID of the Cashier who is currently processing the transaction(s). */
export type CashierId = number;

/** Request to transfer AR Credit Card payments. */
export interface ArCreditCardPaymentsToTransfer {
  /** Criteria for the request to transfer AR Credit Card payments. */
  criteria?: TransferARCreditCardPaymentsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Transfer AR Credit Card payment information. */
export interface TransferARCreditCardPaymentsType {
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The unique ID for the Account. */
  accountId?: UniqueIDType;
  /** Total Amount of postings to be transfered. */
  totalAmount?: CurrencyAmountType;
  /**
   * Reference Text for the payment.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * Transaction number of the payments to be transfered.
   * @maxItems 4000
   */
  transactionNo?: number[];
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Request to post charges to an existing invoice, when the functionality is available. If the invoice should not be modified or if the folio should not be modified,based on other functionalities, then the charges cannot be posted to the invoice. */
export interface ArChargesPostingCriteria {
  /** Information regarding the Account, Invoice and the charges which have to be posted to the invoice. */
  criteria?: ARChargesPostingCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The charges which have to be posted. */
export interface ARChargesPostingCriteriaType {
  /**
   * Property where the charges are to be posted.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Information regarding the charges which have to be posted. */
  charges?: ChargesCriteriaType;
  /** The account to which the charges have to be posted. */
  account?: ARAccountCriteriaType;
  /** The invoice to which the charges have to be posted. */
  invoice?: ARInvoiceType;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
  overrideCreditHoldCheck?: boolean;
}

/**
 * Collection of Charges to be posted.
 * @maxItems 4000
 */
export type ChargesCriteriaType = ChargeCriteriaType[];

/** Criteria information for posting a charge. */
export interface ChargeCriteriaType {
  /**
   * Transaction Code to post.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /**
   * Article ID.
   * @minLength 0
   * @maxLength 20
   */
  articleCode?: string;
  /** Amount to post to the folio. */
  price?: CurrencyAmountType;
  /** Quantity to post to the folio. */
  postingQuantity?: number;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  postingReference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  postingRemark?: string;
  /**
   * Indicates the Cheque number.
   * @minLength 0
   * @maxLength 200
   */
  checkNumber?: string;
  /**
   * Corrected arrangement code from the package associated to this transaction.
   * @minLength 0
   * @maxLength 20
   */
  arrangementCode?: string;
  /** Apply room routing when making this posting. */
  applyRoutingInstructions?: boolean;
  /** Use the applicable package allowance when making this posting. */
  usePackageAllowance?: boolean;
  /** True indicates the Transaction Code is allowed to be posted automatically. */
  autoPosting?: boolean;
  /** Collection of unique identifiers of the financial transactions. */
  financialTransactionIdList?: UniqueIDListType;
  folioWindowNo?: number;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];

/** Request to create a Comment for an Account. */
export interface AccountComment {
  /** Comment information to be added to the Account. */
  commentInfo?: ARAccountCommentCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The comments on the AR Account. */
export interface ARAccountCommentCriteriaType {
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
   * The resort where the AR Account exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
  /**
   * Account Number for the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountNo?: string;
  /** Internal Profile ID for the AR Account. */
  profileId?: ProfileId;
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

/** Request to compress two or more invoices for an Account */
export interface ArCompressInvoices {
  /** Details for the invoices which have to be compressed and the new Parent Invoice which will be created. */
  criteria?: ARCompressInvoicesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria type compressing invoices i.e grouping multiple invoices into one,for an Account. */
export interface ARCompressInvoicesType {
  /** Account for which the invoices are compressed. */
  account?: ARAccountCriteriaType;
  /** List of Invoices which have to be compressed. */
  invoices?: ARInvoicesType;
  /**
   * Reference Text for the Master Invoice which will be created.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * Remarks for the Master Invoice which will be created.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
  /**
   * Folio Type for the Master Invoice which will be created.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
}

/** Response for the request to compress two or more invoices. */
export interface CompressedARInvoices {
  /** Details of the Parent invoice which was created, when the invoices were compressed. */
  invoice?: ARInvoiceType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Request to copy AR Account */
export interface ArAccountCopy {
  /** Criteria for copying AR Account */
  criteria?: CopyARAccountCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria for copying AR account. */
export interface CopyARAccountCriteriaType {
  /**
   * Hotel code.
   * @maxItems 4000
   */
  targetHotels?: string[];
  /** Account to be copied */
  sourceAccount?: ARAccountCriteriaType;
}

/** Request to create a Fixed Charge for an Account. */
export interface AccountFixedCharge {
  /** Fixed charge information to be added to the Account. */
  fixedChargeInfo?: ARAccountFixedChargeCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The traces on the AR Account. */
export interface ARAccountFixedChargeCriteriaType {
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
  /**
   * The resort where the AR Account exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
}

/** Response to the request to fetch the Folio Printers applicable for a Folio, based on the */
export interface ArFolioPrinters {
  /** List of Printers which are applicable for this Folio. */
  printers?: FolioPrintersType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** List of Folio Printers. */
export interface FolioPrintersType {
  /**
   * Name of the Folio Type.
   * @minLength 0
   * @maxLength 200
   */
  folioTypeName?: string;
  /**
   * Folio Printer Information.
   * @maxItems 4000
   */
  printer?: FolioPrinterType[];
}

/** Information about a Printer which can be used to print a Folio. */
export interface FolioPrinterType {
  /**
   * Description of the Printer
   * @minLength 0
   * @maxLength 2000
   */
  printerName?: string;
  /**
   * The Printer Device name.
   * @minLength 0
   * @maxLength 200
   */
  device?: string;
  /**
   * The Folio Type for which this printer is being used.
   * @minLength 0
   * @maxLength 2000
   */
  folioType?: string;
  /**
   * Folio Queue name for which this printer is being used.
   * @minLength 0
   * @maxLength 2000
   */
  folioQueueName?: string;
}

/** Request to create a new Invoice for an Account. */
export interface ArInvoice {
  /** Invoice criteria for the creation of the invoice. Includes the transactions which are part of the Invoice. */
  invoice?: CreateARInvoiceCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to Create a new AR Invoice. */
export interface CreateARInvoiceCriteriaType {
  /**
   * Custom Folio Name Value Information to be saved
   * @maxItems 4000
   */
  folioNameValue?: NameValueHeaderDetailType[];
  /** Account details for whom the invoice is being created. */
  account?: ARAccountCriteriaType;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** Information regarding the charges which have to be posted. */
  charges?: ChargesCriteriaType;
  /**
   * User-defined invoice reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined invoice remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /**
   * Invoice market code.
   * @minLength 0
   * @maxLength 20
   */
  market?: string;
  /**
   * Invoice room class code.
   * @minLength 0
   * @maxLength 20
   */
  roomClass?: string;
  /**
   * Invoice source code.
   * @minLength 0
   * @maxLength 20
   */
  source?: string;
  /** Generate Fiscal Folio Criteria type to be used for fiscal folio generation. */
  fiscalFolioInfo?: FiscalServiceType;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
  overrideCreditHoldCheck?: boolean;
}

/** Name value details collected before Folio Settlement */
export interface NameValueHeaderDetailType {
  /** Name Value Header Information */
  nameValueHeader?: NameValueBaseSearchType;
  /** Name Value Detail Information */
  nameValueDetails?: NameValueDetailType;
}

/** Contains name value information search criteria. */
export interface NameValueBaseSearchType {
  /**
   * Specifies the hotel code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Contains model name i.e. Reservation, Profile, Folio or FinTrx. */
  moduleName?: NameValueModuleType;
  /** Contains name value type value i.e. AFTER_SETTLEMENT, BEFORE_SETTLEMENT, RESERVATION, etc. */
  nameValueType?: NameValueTypeType;
  /** Indicates configuration sequence number. */
  sequence?: UniqueIDType;
  /** Custom Name value Config Name. */
  configName?: CustomNameValueConfigType;
}

export enum NameValueModuleType {
  Reservation = 'Reservation',
  Folio = 'Folio',
  Profile = 'Profile',
  Fintrix = 'Fintrix',
}

export enum NameValueTypeType {
  ReservationOptions = 'ReservationOptions',
  AfterSettlement = 'AfterSettlement',
  BeforeSettlement = 'BeforeSettlement',
  AfterPayment = 'AfterPayment',
  ProfileOptions = 'ProfileOptions',
}

/** Italian Lottery Number. */
export enum CustomNameValueConfigType {
  ItalianFattura = 'ItalianFattura',
  Folio = 'Folio',
  FinancialTransaction = 'FinancialTransaction',
  TaiwanInvoice = 'TaiwanInvoice',
  SaudiCustomerType = 'SaudiCustomerType',
  ItalianLotteryNumber = 'ItalianLotteryNumber',
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
   * @maxLength 40
   */
  type?: string;
}

/** @maxItems 4000 */
export type CodeListType = string[];

/** Generate Fiscal Folio Criteria type to be used for fiscal folio generation */
export interface FiscalServiceType {
  /**
   * Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
   * @minLength 0
   * @maxLength 40
   */
  fiscalTerminal?: string;
  /**
   * Fiscal Invoicing Currency code to be used by the Fiscal Service.
   * @minLength 0
   * @maxLength 20
   */
  invoiceCurrencyCode?: string;
  /** Defines the action of the generate folio process. */
  instructions?: FiscalFolioInstruction;
  /** Folio Type , Queue name , Fiscal Flag to be used in folio generation This is a country requirement. */
  folioQueueName?: FolioQueueType;
  /** Fiscal Folio sequence ID stored in queue table. */
  folioSeqId?: UniqueIDType;
}

/** Action to generate Offline folio when no reponse is received from fiscal service. */
export enum FiscalFolioInstruction {
  Retry = 'Retry',
  New = 'New',
  Void = 'Void',
  Offline = 'Offline',
}

/** List of charges that will be posted against the transaction code based from the test criteria. */
export interface FolioQueueType {
  /**
   * Folio Type to be assigned to generated folio. This is a country requirement.
   * @minLength 0
   * @maxLength 100
   */
  folioType?: string;
  /**
   * Folio Queue name.
   * @minLength 0
   * @maxLength 2000
   */
  queueName?: string;
  /** Fiscal folio flag to call fiscal folio web service after folio generation. */
  generateFiscalFolio?: boolean;
}

/** Response to the request to create an invoice for an Account. */
export interface ArInvoiceDetails {
  /** Details of the invoices which was created. */
  invoice?: ARInvoicesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Operation to generate AR Statements. This will validate and check if there exists any invoices to be included in the Statement based on the criteria used. If Statement Numbering is used, this will return a statement number to use in report as well as report sequence id to identify statement's invoices. */
export interface StatementsToBeGenerated {
  /** Criteria for generating AR Statements */
  criteria?: ARGenerateStatementCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to process AR Printed Statements - create history and update invoices. */
export interface ARGenerateStatementCriteriaType {
  /**
   * Details of printed Statements received by Fetch Operation and sent to be printed. Statements type includes report sequence number and report file name.
   * @maxItems 4000
   */
  statements?: ARStatementType[];
  /** Statement criteria for invoices which are to be included in the Statement. */
  statementCriteria?: ARStatementCriteriaType;
}

/** Statements criteria for AR Accounts. */
export interface ARStatementCriteriaType {
  /** Date Range Filter for the Invoices which are to be included in the Statement. */
  filterDate?: DateRangeType;
  /**
   * Text which will be printed on the Invoice.
   * @minLength 0
   * @maxLength 2000
   */
  statementText?: string;
  /** Flag to indicate if Zero Balances Invoices are to be included in the Statement. */
  inclZero?: boolean;
  /** Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. */
  inclPrinted?: boolean;
  /**
   * The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.)
   * @format date
   * @maxLength 8
   */
  balanceForwardDate?: string;
  /** Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. */
  inclFolios?: boolean;
}

/** Request to create a Trace for an Account. */
export interface AccountTrace {
  /** Trace information to be added to the Account. */
  traceInfo?: ARAccountTraceCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** The traces on the AR Account. */
export interface ARAccountTraceCriteriaType {
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
  /**
   * The resort where the AR Account exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
}

export interface InvoicePayment {
  /** Invoice and Payment Details for the Account. */
  details?: ARAccountsInvoicesPaymentsType;
  /** Transaction codes information which are in the response invoices/payments. */
  trxCodesInfo?: TrxCodesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response to the request to change invoice */
export interface Invoice {
  /** Invoice and Payment Details for the Account(s). */
  invoiceDetails?: ARInvoiceCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Details of an AR Invoice. */
export interface ARInvoiceCriteriaType {
  /**
   * Property where the invoice exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID of the invoice. */
  reservationId?: ReservationId;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** The Aging age of the invoice */
  age?: number;
  /**
   * Name of the Guest who consumed these transactions.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Original Amount of the Invoice */
  originalAmount?: CurrencyAmountType;
  /** Current Amount of the Invoice. */
  amount?: CurrencyAmountType;
  /** Total Payments made to this Invoice. */
  payments?: CurrencyAmountType;
  /** Amount still open which has not been paid */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  adjusted?: boolean;
  parentInvoiceNo?: number;
  compressed?: boolean;
  /**
   * @format date
   * @maxLength 8
   */
  compressedDate?: string;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /** Invoice market code. */
  market?: MarketCodeInfoType;
  /** Invoice room class code. */
  roomClass?: RoomClassCodeInfoType;
  /** Invoice source code. */
  source?: SourceCodeInfoType;
  /** Reservation guest details. */
  reservationInfo?: ReservationInfoType;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Transaction information . */
  transactionInfo?: TrxInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  /** Addressee Information for the folio. This is available when the Addressee functionality is used and and Addressee is attached to the folio of the Invoice. */
  addresseeInfo?: ProfileInfoType;
  /** Flag to check Partail Transfer Allowed. */
  allowPartialTransferYn?: boolean;
  /** Flag to check Invoice Statement is Printed. */
  printed?: boolean;
  /**
   * Invoice Statement Printed Date.
   * @format date
   * @maxLength 8
   */
  printedDate?: string;
  /** ID of the Stored Folio. */
  storedFolioId?: UniqueIDType;
  /**
   * Name of the Stored Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedFolioName?: string;
  /** ID of the Stored Debit Folio. */
  storedDebitFolioId?: UniqueIDType;
  /**
   * Name of the Stored Debit Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedDebitFolioName?: string;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /**
   * Unique Custom Numbers associated with this record.
   * @maxItems 5
   */
  customNumbers?: CustomNumberType[];
  /** Provides information which is used for fiscal response processing. */
  fiscalResponseType?: FiscalResponseType;
  /** Unique Transaction Identifier of the Invoice. */
  transactionNo?: number;
  /**
   * Transaction Date of the invoice.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Status of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Transaction code of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Folio Number. */
  folioNo?: number;
  /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
  invoiceNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /**
   * The name of the Folio Type used for the Folio Number sequence.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
  /**
   * Internal window ID which is unique to the reservation. This ID can only be used for reference.
   * @minLength 0
   * @maxLength 20
   */
  internalFolioWindowID?: string;
  /**
   * Date of Folio Generation.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
  folioStatus?: FolioStatusType;
  /**
   * The folio number with prefix value.
   * @minLength 0
   * @maxLength 200
   */
  folioNoWithPrefix?: string;
  /** Invoice code of the invoice. */
  invoiceType?: ARInvoiceCategory;
  /** Statementno of the invoice. */
  statementNo?: number;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Close date of the invoice.
   * @format date
   * @maxLength 8
   */
  closeDate?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Transfer date of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** Flag to indicate if postings or adjustments can be made to the invoice. */
  canBeModified?: boolean;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
  /**
   * The Account Number for the Account.
   * @minLength 0
   * @maxLength 20
   */
  accountNo?: string;
  /** Profile ID of the invoice. */
  profileId?: ProfileId;
  /** To apply additional filter on the posting of an invoice */
  additionalFilter?: {
    /** Cashier Id of the Cashier. */
    cashierId?: number;
    /** Transaction number of the transactions. */
    transactionCode?: CodeListType;
    /** Transaction sub group of the transactions. */
    transactionSubGroup?: CodeListType;
    /** The period start and end date. */
    dateRange?: DateRangeType;
    /**
     * Filters the results for reference.
     * @minLength 0
     * @maxLength 2000
     */
    referenceWildCard?: string;
    /**
     * Filter the results for supplement.
     * @minLength 0
     * @maxLength 200
     */
    supplementWildCard?: string;
    /**
     * Lookup string which will try to match an existing Cheque number's.
     * @minLength 0
     * @maxLength 200
     */
    checkNumberWildCard?: string;
  };
  /** The Cashier who is posting. */
  cashierId?: CashierId;
}

/** Response for Fetch AR Aging Cycles. */
export interface ArAgingCycles {
  /** Aging Cycles for the selected Hotel */
  agingCycles?: ARAgingCyclesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collections of AR Aging Cycles.
 * @maxItems 4000
 */
export type ARAgingCyclesType = ARAgingType[];

/** Request for posting a charge in a batch to list of accounts. */
export interface BatchChargesToPost {
  /** Criteria for posting a charge to list of accounts. */
  criteria?: ARPostChargesInBatchCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria for posting a charge to list of accounts. */
export interface ARPostChargesInBatchCriteriaType {
  /** The list of internal unique ID for AR Accounts. */
  accountIdList?: UniqueIDListType;
  /** The charge information to be applied to ar accounts. */
  chargeInfo?: ChargeCriteriaType;
  /** The Cashier who is posting. */
  cashierId?: CashierId;
  /**
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** Request for Transfer Directs bill to AR. */
export interface TransferDirectBillsToAr {
  /** Criteria in transferring direct bills to account receivable. */
  criteria?: TransferDirectBillsToArCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Provides information about Transfer Direct Bills To Ar Criteria Type. */
export interface TransferDirectBillsToArCriteriaType {
  /**
   * Code of the Hotel.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * List of Invoice Numbers.
   * @maxItems 4000
   */
  invoiceNo?: number[];
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Response to the applied payment details,Contains errors or warnings if any. */
export interface InvoiceAppliedPayments {
  /** Details for the applied payments. */
  details?: ARAppliedPaymentsType;
  /** Transaction codes information which are in the response invoices/payments. */
  trxCodesInfo?: TrxCodesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Applied Payment record.
 * @maxItems 4000
 */
export type ARAppliedPaymentsType = ARAppliedPaymentType[];

/** Details of an AR Invoice. */
export interface ARAppliedPaymentType {
  /**
   * Property where the invoice exists.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID of the invoice. */
  reservationId?: ReservationId;
  /** Guest Profile ID of the invoice. */
  guestProfileId?: UniqueIDType;
  /** The Aging age of the invoice */
  age?: number;
  /**
   * Name of the Guest who consumed these transactions.
   * @minLength 0
   * @maxLength 200
   */
  guestName?: string;
  /** Original Amount of the Invoice */
  originalAmount?: CurrencyAmountType;
  /** Current Amount of the Invoice. */
  amount?: CurrencyAmountType;
  /** Total Payments made to this Invoice. */
  payments?: CurrencyAmountType;
  /** Amount still open which has not been paid */
  balance?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  adjusted?: boolean;
  parentInvoiceNo?: number;
  compressed?: boolean;
  /**
   * @format date
   * @maxLength 8
   */
  compressedDate?: string;
  transferredOut?: boolean;
  transferredIn?: boolean;
  /** Invoice market code. */
  market?: MarketCodeInfoType;
  /** Invoice room class code. */
  roomClass?: RoomClassCodeInfoType;
  /** Invoice source code. */
  source?: SourceCodeInfoType;
  /** Reservation guest details. */
  reservationInfo?: ReservationInfoType;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Transaction information . */
  transactionInfo?: TrxInfoType;
  /** Payment card details. */
  paymentCard?: ResPaymentCardType;
  /** Addressee Information for the folio. This is available when the Addressee functionality is used and and Addressee is attached to the folio of the Invoice. */
  addresseeInfo?: ProfileInfoType;
  /** Flag to check Partail Transfer Allowed. */
  allowPartialTransferYn?: boolean;
  /** Flag to check Invoice Statement is Printed. */
  printed?: boolean;
  /**
   * Invoice Statement Printed Date.
   * @format date
   * @maxLength 8
   */
  printedDate?: string;
  /** ID of the Stored Folio. */
  storedFolioId?: UniqueIDType;
  /**
   * Name of the Stored Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedFolioName?: string;
  /** ID of the Stored Debit Folio. */
  storedDebitFolioId?: UniqueIDType;
  /**
   * Name of the Stored Debit Folio.
   * @minLength 0
   * @maxLength 2000
   */
  storedDebitFolioName?: string;
  /** Additional text fields to display on the folio. */
  folioTexts?: FolioTextsType;
  /**
   * Unique Custom Numbers associated with this record.
   * @maxItems 5
   */
  customNumbers?: CustomNumberType[];
  /** Provides information which is used for fiscal response processing. */
  fiscalResponseType?: FiscalResponseType;
  /** Unique Transaction Identifier of the Invoice. */
  transactionNo?: number;
  /**
   * Transaction Date of the invoice.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Status of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  status?: string;
  /**
   * Transaction code of the invoice.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Folio Number. */
  folioNo?: number;
  /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
  invoiceNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /**
   * The name of the Folio Type used for the Folio Number sequence.
   * @minLength 0
   * @maxLength 100
   */
  folioTypeName?: string;
  /**
   * Internal window ID which is unique to the reservation. This ID can only be used for reference.
   * @minLength 0
   * @maxLength 20
   */
  internalFolioWindowID?: string;
  /**
   * Date of Folio Generation.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
  folioStatus?: FolioStatusType;
  /**
   * The folio number with prefix value.
   * @minLength 0
   * @maxLength 200
   */
  folioNoWithPrefix?: string;
  /** Invoice code of the invoice. */
  invoiceType?: ARInvoiceCategory;
  /** Statementno of the invoice. */
  statementNo?: number;
  /**
   * Revenue date ID of the invoice.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /**
   * Close date of the invoice.
   * @format date
   * @maxLength 8
   */
  closeDate?: string;
  /**
   * Posting date of the invoice.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Transfer date of the invoice.
   * @format date
   * @maxLength 8
   */
  transferDate?: string;
  /** Flag to indicate if postings or adjustments can be made to the invoice. */
  canBeModified?: boolean;
  /** Applied Amount of the Invoice */
  appliedAmount?: CurrencyAmountType;
  /** Transaction no of the Payment. */
  paymentTrxNo?: number;
}

/** Request to post a payment to an AR Account and apply the payment to Invoices.. */
export interface ArPaymentsToBeCreated {
  /** Criteria for the payment information to be posted. */
  criteria?: ARPaymentsCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ARPaymentsCriteriaType {
  /** @maxItems 4000 */
  payment?: ARPaymentCriteria[];
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Criteria for applying payments to invoices or posting an unallocated payment to an AR Account. */
export interface ARPaymentCriteria {
  /**
   * Property code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Payment method used by the payee. */
  paymentMethod?: CashieringPaymentMethodType;
  /** Amount to post to the folio. */
  postingAmount?: CurrencyAmountType;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  postingReference?: string;
  /**
   * User-defined posting remark.
   * @minLength 0
   * @maxLength 2000
   */
  postingRemark?: string;
  /**
   * User Defined Comments. Used for Deposit Payment postings.
   * @minLength 0
   * @maxLength 2000
   */
  comments?: string;
  /** Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. */
  applyCCSurcharge?: boolean;
  /** The Payment Tax information for Thailand Tax functionality. The invoice number and the date will be used. */
  manualPaymentTaxInfo?: PaymentTaxType;
  /** Used for Thailand Tax Functionality.The payment tax records that can be used for a Credit Note for this reservation. */
  creditablePaymentTaxes?: PaymentTaxesType;
  /** Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. */
  terminalId?: string;
  /** Flag to allow a rebate by Credit Card */
  overrideInsufficientCC?: boolean;
  /** Amount of change given to guest. */
  changeDueAmount?: CurrencyAmountType;
  /** Comp redemption information used to post as payment. */
  compRedemptions?: CompRedemptionsType;
  /** Flag to override account receivable credit limit */
  overrideARCreditLimit?: boolean;
  /** Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. */
  applyCurrencyTaxes?: boolean;
  /** Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. */
  vATOffset?: boolean;
  /** Payment action to know from where the payment has been made. */
  action?: PostPaymentActionType;
  /** Prepaid Card redemption information used to post as payment. */
  prepaidCardRedemptions?: PrepaidCardRedemptionsType;
  folioWindowNo?: number;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
  /** Account to which the payment will be posted . */
  account?: ARAccountCriteriaType;
  /** List of Invoices to which the payment may be applied. */
  invoices?: ARPaymentInvoicesType;
  /** Defines how the payment has to be applied. */
  applyType?: ARApplyType;
  /** Sequence of the payment in a batch request. */
  sequenceNo?: number;
}

export interface CashieringPaymentMethodType {
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
  /** Authorization approval record. */
  authorizationApproval?: AuthorizationInfoType;
  /**
   * Track2 data for the card which would be sent to the CC vendor as part of the authorization.
   * @minLength 0
   * @maxLength 200
   */
  track2Data?: string;
}

export interface AuthorizationInfoType {
  /** Approved amount. */
  approvalAmount?: CurrencyAmountType;
  /**
   * The approval code authenticates the authorization.
   * @minLength 0
   * @maxLength 20
   */
  approvalCode?: string;
  /** Unique Authorization Sequence for the authorization and settlement. */
  originalAuthSequence?: number;
  /**
   * Vendor transaction id for the authorization.
   * @minLength 0
   * @maxLength 20
   */
  vendorTranId?: string;
}

/** Information regarding payments made which have Payment Tax. */
export interface PaymentTaxType {
  /**
   * The Tax Invoice for this payment.
   * @minLength 0
   * @maxLength 20
   */
  taxInvoiceNo?: string;
  /** The Type of Payment transaction. */
  paymentType?: PaymentTax;
  /** The payment amount/ */
  amount?: CurrencyAmountType;
  /** The amount that is taxable. */
  taxableAmount?: CurrencyAmountType;
  /** Documentation goes here */
  nonTaxableAmount?: CurrencyAmountType;
  /** The amount that is not taxable. */
  availableCredit?: CurrencyAmountType;
  /**
   * The Payment Invoice date
   * @format date
   * @maxLength 8
   */
  paymentDate?: string;
  /** Unique Transaction Identifier. */
  transactionNo?: number;
  /**
   * Transaction Date of the Payment.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Billing Transaction Code of the Payment.
   * @minLength 0
   * @maxLength 200
   */
  transactionCode?: string;
  /**
   * Billing Transaction Description.
   * @minLength 0
   * @maxLength 2000
   */
  transactionDescription?: string;
  folioWindowNo?: number;
}

/** The types of Payment Tax transactions. */
export enum PaymentTax {
  Deposit = 'Deposit',
  FrontOffice = 'FrontOffice',
  CreditNote = 'CreditNote',
  CityLedger = 'CityLedger',
  AccountsReceivables = 'AccountsReceivables',
  NonVat = 'NonVat',
}

/**
 * Payment Tax record.
 * @maxItems 4000
 */
export type PaymentTaxesType = PaymentTaxType[];

/**
 * Information regarding Complimentary Bucket Redemption object.
 * @maxItems 4000
 */
export type CompRedemptionsType = RedemptionType[];

/** Redemption information. */
export interface RedemptionType {
  /** The amount to redeem when posting a payment. */
  amount?: CurrencyAmountType;
  /**
   * The associated redemption code.
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * Additional information regarding the redemption.
   * @minLength 0
   * @maxLength 2000
   */
  supplement?: string;
  /**
   * Description of the Complimentary Bucket Redemption.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Transaction code of the Complimentary Bucket Redemption.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Available Amount of the Complimentary Bucket Redemption. */
  availableAmount?: CurrencyAmountType;
  /** Transaction Number of the Complimentary Bucket Redemption. */
  transactionNo?: number;
  /**
   * Approval Code of the Complimentary Bucket Redemption.
   * @minLength 0
   * @maxLength 20
   */
  approvalCode?: string;
}

/** Prepaid Card Redemption Action. */
export enum PostPaymentActionType {
  Billing = 'Billing',
  Settlefolio = 'Settlefolio',
  Deposit = 'Deposit',
  Compredemption = 'Compredemption',
  Prepaidcardredemption = 'Prepaidcardredemption',
}

/**
 * A prepaid redemption info object to be used for posting a payment.
 * @maxItems 1000
 */
export type PrepaidCardRedemptionsType = PrepaidCardRedemptionType[];

/** Redemption information. */
export interface PrepaidCardRedemptionType {
  /**
   * Prepaid card number.
   * @minLength 0
   * @maxLength 80
   */
  cardNo?: string;
  /**
   * Prepaid card number.
   * @minLength 0
   * @maxLength 80
   */
  pin?: string;
  /** The unique ID of the Interface. */
  interfaceId?: UniqueIDType;
  /** The amount to redeem when posting a payment. */
  amount?: CurrencyAmountType;
  /**
   * The associated redemption transaction code.
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /**
   * Additional information regarding the redemption.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
}

/** Response notifying if the posting of a payment to an AR Account. */
export interface ArPayments {
  /** List of Postings produced by Post AR Payment Request. */
  payments?: ARPaymentsType;
  /** Transaction codes information which are in response postings. */
  trxCodesInfo?: TrxCodesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Statement History. */
export interface StatementHistory {
  aRStatementHistory?: ARStatementHistoryType[];
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Report History Type used as based type for Remiders and Statements History types. */
export interface ARStatementHistoryType {
  /**
   * Report Name.
   * @minLength 0
   * @maxLength 2000
   */
  reportName?: string;
  /**
   * Report file name when exists to allow report re-printing.
   * @minLength 0
   * @maxLength 2000
   */
  reportFileName?: string;
  /**
   * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
   * @format date
   * @maxLength 8
   */
  dateSent?: string;
  /** When using Statement Numbering, a unique number is associated to the Statement. */
  statementNo?: number;
}

/** Request for reverse AR payment */
export interface ReversePayment {
  /** Criteria type for an AR Account. */
  arPayment?: ReversePaymentCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria type for an AR Account. */
export interface ReversePaymentCriteriaType {
  /**
   * Property where the AR Account exists. This is required.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Profile ID of the account */
  profileId?: ProfileId;
  /** The internal unique ID for the AR Account. */
  accountId?: UniqueIDType;
  /**
   * Account Number for the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountNo?: string;
  /**
   * Account Name for the AR Account.
   * @minLength 0
   * @maxLength 200
   */
  accountName?: string;
  transactionNo?: number;
}

/** Response after fetching AR credit card payments. */
export interface ArCreditCardPayments {
  /** AR Credit Card Payment Details for the Account. */
  aRCreditCardPaymentsDetails?: ARCreditCardPaymentsInfoType;
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

/** Collection of AR Credit Card payments Details. */
export interface ARCreditCardPaymentsInfoType {
  /**
   * Hotel Code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * AR Credit Card Payments info .
   * @maxItems 4000
   */
  aRCreditCardPayments?: ARCreditCardPaymentInfoType[];
}

/** AR Credit Card payment information. */
export interface ARCreditCardPaymentInfoType {
  /**
   * Guest Name .
   * @minLength 0
   * @maxLength 80
   */
  guestName?: string;
  /** Guest profile ID. */
  profileId?: ProfileId;
  /** Posted Amount. */
  amount?: CurrencyAmountType;
  /**
   * Date of posting.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * Reference Text for the payment.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * Remarks for payment.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /** The Folio number of this posting, if there was a Folio already generated. */
  folioNo?: number;
  /** Bill Number returned by the Fiscal Printer. */
  fiscalFolioNo?: number;
  /** Transaction number of the payment. */
  transactionNo?: number;
  /**
   * Transaction Date of the payment.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
}

/** Request to unlink invoice from statement */
export interface UnlinkInvoiceFromStatement {
  /** Criteria for unlinking invoice from statement */
  criteria?: UnlinkStatementCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria for unlinking invoice from statement. */
export interface UnlinkStatementCriteriaType {
  /** Transaction number list of invoices. */
  invoiceTrxNoList?: InvoiceTrxNoList;
  /**
   * Hotel code.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/**
 * Transaction Number .
 * @maxItems 4000
 */
export type InvoiceTrxNoList = number[];

/** Response for the fetch invoice and payments details request. */
export interface InvoicesPayments {
  /** Invoice and Payment Details for the Account(s). */
  details?: ARAccountsInvoicesPaymentsType;
  /** Transaction codes information which are in the response invoices/payments. */
  trxCodesInfo?: TrxCodesInfoType;
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

/** Response to the request to fetch postings for an invoice */
export interface InvoicePostings {
  /** A collection of the invoice posting records. */
  invoicePostingsDetails?: ARInvoicePostingsType;
  /** Transaction codes information which are in the response invoices/payments. */
  trxCodesInfo?: TrxCodesInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Invoice posting detail.
 * @maxItems 4000
 */
export type ARInvoicePostingsType = ARInvoicePostingType[];

/** Posting details. */
export interface ARInvoicePostingType {
  /** Generate transaction number for the Posting. */
  referenceTransactionNo?: number;
  /**
   * Posting remarks.
   * @minLength 0
   * @maxLength 2000
   */
  remark?: string;
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  reference?: string;
  /**
   * Check number for the posting.
   * @minLength 0
   * @maxLength 2000
   */
  checkNo?: string;
  /**
   * Check number count for the posting.
   * @minLength 0
   * @maxLength 2000
   */
  checkCount?: string;
  /** Actual currency amount posted. */
  postedAmount?: CurrencyAmountType;
  /** Indicates the unit price of the consumption. */
  price?: CurrencyAmountType;
  /** Indicates Quantity. */
  quantity?: number;
  /** This is the transaction type which says whether it is a Consumption(C), Payment (FC) or Package (PK) and it is inherited from transaction code. */
  transactionType?: CashieringTransactionTypeType;
  /** The amount posted as credit to the ledger. */
  creditAmount?: CurrencyAmountType;
  /** The amount posted as debit to the ledger. */
  debitAmount?: CurrencyAmountType;
  /**
   * Information regarding the Article(Using Articles Functionality) of this transaction.
   * @minLength 0
   * @maxLength 20
   */
  articleCode?: string;
  /** Cashier information. Contains Id and Name details of the cashier. */
  cashierInfo?: CashierInfoType;
  /** Indicates if this transaction is a paid out transaction. */
  paidOut?: boolean;
  /**
   * Corrected arrangement code from the package associated to this transaction.
   * @minLength 0
   * @maxLength 20
   */
  arrangementCode?: string;
  /** Information related to transaction grouping. */
  groupTypeInfo?: PostingGroupType;
  /**
   * Rate code associated to this transaction.
   * @minLength 0
   * @maxLength 20
   */
  rateCode?: string;
  /**
   * Comp redemption code assiciated to the transaction.
   * @minLength 0
   * @maxLength 20
   */
  compRedemptionCode?: string;
  /** Update info associated to this transaction. */
  updateInfo?: {
    /**
     * @format date
     * @maxLength 8
     */
    updateDate?: string;
    updateBy?: string;
  };
  /** Flag indicates that the posting is Flexible Benefits Awards Certificate */
  fbaCertificate?: boolean;
  /**
   * Tax invoice number generated by payment tax.
   * @minLength 0
   * @maxLength 20
   */
  taxInvoiceNo?: string;
  /** Flag to indicates service recovery */
  serviceRecovery?: boolean;
  /** Comp Postings information for the folio. */
  compPostingsInfo?: CompPostingsType;
  /** Collection of unique identifiers of the financial transactions. */
  financialTransactionIdList?: UniqueIDListType;
  /** Available when the Fetch Folio Search Type requests the amounts to be converted to a currency different from the Resort currency. */
  exchange?: ExchangeAmounts;
  /**
   * Approval code of the posting.
   * @minLength 0
   * @maxLength 20
   */
  approvalCode?: string;
  /**
   * Approval status of the posting.
   * @minLength 0
   * @maxLength 20
   */
  approvalStatus?: string;
  /** Flag to identify a Stamp Duty Transaction. */
  stampDuty?: boolean;
  /** Unique Transaction Identifier. */
  transactionNo?: number;
  /**
   * Transaction Date.
   * @format date
   * @maxLength 8
   */
  transactionDate?: string;
  /**
   * Billing Transaction Code.
   * @minLength 0
   * @maxLength 200
   */
  transactionCode?: string;
  /**
   * Billing Transaction Description.
   * @minLength 0
   * @maxLength 2000
   */
  transactionDescription?: string;
  /** The amount of the transaction. */
  transactionAmount?: number;
  /**
   * Date and time of posting.
   * @format date
   * @maxLength 8
   */
  postingDate?: string;
  /**
   * The date on which the transaction has its revenue effect.
   * @format date
   * @maxLength 8
   */
  revenueDate?: string;
  /** The receipt number of the transaction, if there is a receipt generated. */
  receiptNo?: number;
  /** Indicator to determine if the posting was a posting for the Rounding Difference. */
  roundingDifferenceTrx?: boolean;
  /** Indicator to determine if the transaction is commissionable. */
  commissionable?: boolean;
  /** Reverse payment transaction unique identifier. */
  reversePaymentTransactionNo?: number;
  /** Indicator to determine if the transaction can be adjusted. */
  canAdjustInvoice?: boolean;
  /**
   * Tax Service Accounting Codes used.
   * @minLength 0
   * @maxLength 40
   */
  depositTransactionId?: string;
  /** When some SummaryPostingsGroupBy element is send as request ,then this element will represent how many transactions rolled up into this Summary Posting Type. */
  groupByCount?: number;
  /**
   * Guest Name of the Credit Invoice. For other invoices, this element will be empty.
   * @minLength 0
   * @maxLength 80
   */
  creditInvoiceGuestName?: string;
}

/** Wrapper Transaction Type. */
export enum CashieringTransactionTypeType {
  Revenue = 'Revenue',
  Payment = 'Payment',
  Wrapper = 'Wrapper',
}

/** Transaction group information. Ever posting could represent a. Regular transaction b. Group header - has Group Id, Count, Descripton and Includes Group Memebers elements c. Group transaction - has SubGroupId element pointing to Group Header Id */
export interface PostingGroupType {
  /**
   * Group Id.
   * @minLength 0
   * @maxLength 20
   */
  groupId?: string;
  /** Number of transactions in group. */
  groupCount?: number;
  /**
   * Group Description.
   * @minLength 0
   * @maxLength 2000
   */
  groupDescription?: string;
  /**
   * Indicates to which group transaction belongs.
   * @minLength 0
   * @maxLength 20
   */
  subGroupId?: string;
}

/** Collection of comp postings. */
export interface CompPostingsType {
  /**
   * Authorizer name of the Comp Account.
   * @minLength 0
   * @maxLength 200
   */
  authorizer?: string;
  /**
   * Approval status of the comp account.
   * @minLength 0
   * @maxLength 200
   */
  approvalStatus?: string;
}

/** Converted values for the Exchange Currency requested. */
export interface ExchangeAmounts {
  /** The converted Guest Ledger Debit Amount. */
  debitAmount?: CurrencyAmountType;
  /** The converted Guest Ledger Credit Amount. */
  creditAmount?: CurrencyAmountType;
}

/** Request to close invoice(s) */
export interface Invoices {
  /** Invoices Detail for the Account. */
  invoices?: ARInvoicesCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Criteria for searching Invoices.
 * @maxItems 4000
 */
export type ARInvoicesCriteriaType = ARInvoiceCriteriaType[];

/** Request to change AR invoice(s) account in AR. */
export interface ArInvoicesAccount {
  /** Criteria for changing invoice(s) account. */
  criteria?: ChangeARInvoicesAccountCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria for changing AR invoice(s) account. */
export interface ChangeARInvoicesAccountCriteriaType {
  /**
   * AR Invoice(s) to be changed.
   * @maxItems 4000
   */
  invoices?: ARInvoiceType[];
  /** The Account which will be assigned to selected invoices. */
  toAccount?: ARAccountCriteriaType;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Request to Post AR Old Balances */
export interface ArOldBalances {
  /** Details for Posting AR Old Balance Single Postings */
  oldBalances?: AROldBalancePostingsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collections of Old Balance Postings
 * @maxItems 4000
 */
export type AROldBalancePostingsType = AROldBalancePostingType[];

/** AR Old Balances Base Posting Type. */
export interface AROldBalancePostingType {
  /** The Criteria for finding the Account. */
  accountId?: ARAccountCriteriaType;
  /** The values for posting a single charge to the account. */
  posting?: AROldBalanceChargeType;
  /** The values for posting charges to an Aging Cycle */
  aging?: ARAgingInfoType;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** AR Old Balances Single Posting Type. */
export interface AROldBalanceChargeType {
  /**
   * User-defined posting reference.
   * @minLength 0
   * @maxLength 2000
   */
  postingReference?: string;
  /**
   * User-defined Supplement.
   * @minLength 0
   * @maxLength 2000
   */
  postingRemark?: string;
  /**
   * Date of the Posting.
   * @format date
   * @maxLength 8
   */
  date?: string;
  /** The Folio number of this posting, if there was a Folio entered. */
  folioNo?: number;
  /**
   * The Fiscal Bill number of this posting
   * @minLength 0
   * @maxLength 2000
   */
  fiscalBillNo?: string;
  /** Posted Amount. */
  amount?: CurrencyAmountType;
  /** Tax Codes details. */
  taxCodes?: ARTaxCodesType;
  /** Amount paid in resort currency. */
  paid?: CurrencyAmountType;
}

/**
 * Values of atmost 20 Taxes entered.
 * @maxItems 20
 */
export type ARTaxCodesType = ARTaxCodeType[];

/** AR Old Balances Single Posting Type - Tax and Transaction Code details. */
export interface ARTaxCodeType {
  /**
   * Tax Code number
   * @min 1
   * @max 20
   */
  taxCode?: number;
  /**
   * Transaction Code Value
   * @minLength 0
   * @maxLength 20
   */
  transactionCode?: string;
  /** Value of the Tax entered. */
  taxAmount?: CurrencyAmountType;
}

/** Response to the request to fetch the total Aging information for a Profile. */
export interface ProfileAging {
  /** The Aging Totals information for the Profile and the resorts requested. */
  aging?: ARProfileAgingInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Aging information for a profile. Includes information for the profile for all accounts across properties. */
export interface ARProfileAgingInfoType {
  /** Aging bucket information for the Property, based on the criteria selected. */
  totalProfileAging?: ARAgingInfoType;
  /**
   * Aging bucket information for the Property, based on the criteria selected.
   * @maxItems 4000
   */
  hotel?: {
    /** Aging bucket information for the Property, based on the criteria selected. */
    totalHotelAging?: ARAgingInfoType;
    /** Account Aging details for Accounts which belong to this Property. */
    accountAging?: ARAccountsType;
    /**
     * Property Code for the Aging information.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
  }[];
}

/** Response to the request to fetch the total Year View information for a Profile. */
export interface ProfileYearView {
  /** The Year View Totals information for the Profile and the resorts requested. */
  aRProfileYearView?: ARProfileYearViewInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Year View information for a profile. Includes information for the profile for all accounts across properties. */
export interface ARProfileYearViewInfoType {
  /** Year View information for the Property, based on the criteria selected. */
  totalProfileYearView?: ARYearViewInfoType;
  /**
   * Year View information for the Property, based on the criteria selected.
   * @maxItems 4000
   */
  hotel?: {
    /** Year View information for the Property, based on the criteria selected. */
    totalHotelYearView?: ARYearViewInfoType;
    /** Account Year View details for Accounts which belong to this Property. */
    account?: ARAccountsType;
    /**
     * Property Code for the Year Veiw information.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
  }[];
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

/** Request for transferring invoice(s) in AR. */
export interface InvoicesAndPaymentsToTransfer {
  /** Criteria in transferring invoice(s) to another account. */
  criteria?: TransferARInvoicesCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria for transferring invoice(s) to another account. */
export interface TransferARInvoicesCriteriaType {
  /**
   * AR Invoice(s) to be transferred.
   * @maxItems 4000
   */
  invoicesTransferType?: ARInvoiceType[];
  /** The Account for whom the Invoice(s) are currently associated with. */
  fromAccount?: ARAccountCriteriaType;
  /** The Account for whom the Invoice(s) are to be transferred upon. */
  toAccount?: ARAccountCriteriaType;
  /** Partial amount to be transferred. Partial amounts will not be allowed when multiple invoices are to be transferred. */
  transferAmount?: CurrencyAmountType;
  /**
   * User defined Remarks for this transfer
   * @minLength 0
   * @maxLength 200
   */
  remarks?: string;
  overrideCreditHoldCheck?: boolean;
  /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
  cashierId?: CashierId;
}

/** Request for transferring invoice posting(s)in AR. */
export interface TransferPostings {
  /** Criteria to transfer invoice posting(s) to another invoice. */
  criteria?: ARTransferPostingsCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ARTransferPostingsCriteriaType {
  /** From Invoice and Invoice posting detail. */
  fromInvoice?: {
    /** Invoice detail. */
    invoice?: ARInvoiceCriteriaType;
    /** Invoice postings detail. */
    invoicePostings?: ARInvoicePostingsType;
  };
  /** To Invoice detail. */
  toInvoice?: {
    /** Invoice detail. */
    invoice?: ARInvoiceCriteriaType;
  };
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
    this.instance = axios.create({ ...axiosConfig, baseURL: new URL('/ars/v1', axiosConfig.baseURL).toString() });
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
 * @title OPERA Cloud Accounts Receivables API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /ars/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors’ accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  accountReminders = {
    /**
     * @description Use this API to get AR account holders' reminder letter that includes detail of payment due, their current account balance, or for other purposes. <p><strong>OperationId:</strong>getReminders</p>
     *
     * @tags AccountsReceivables
     * @name GetReminders
     * @summary Get account receivable's reminder statements
     * @request GET:/accountReminders
     */
    getReminders: (
      hotelId: string,
      query: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accounts: string[];
        /** Property where the AR Account exists. This is required. */
        hotelIds?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profiles?: string[];
        /** Account Number for the AR Account. */
        accountNo?: string[];
        /** Account Name for the AR Account. */
        accountName?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Reminders, ExceptionDetailType>({
        path: `/accountReminders`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to generate a reminder statement which includes payment due,  current account balance, and etc. of account receivable account holder. <p><strong>OperationId:</strong>postReminders</p>
     *
     * @tags AccountsReceivables
     * @name PostReminders
     * @summary Generate reminders
     * @request POST:/accountReminders
     */
    postReminders: (hotelId: string, reminders: Reminders, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/accountReminders`,
        method: 'POST',
        body: reminders,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  accounts = {
    /**
     * @description Use this API to search for AR Accounts for a given OPERA Profile id. API returns contain a list of AR Accounts and their AR information. <p><strong>OperationId:</strong>getAccounts</p>
     *
     * @tags AccountsReceivables
     * @name GetAccounts
     * @summary Get given profile's account receivable detail
     * @request GET:/accounts
     */
    getAccounts: (
      hotelId: string,
      query?: {
        /**
         * Search By Balance. Search will be done for 'All', 'Open Balance' or 'Zero Balance' Accounts.
         * @uniqueItems true
         */
        balance?: 'All' | 'Open' | 'Zero';
        /** Search criteria for batch processing */
        batchStatement?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Property where the Accounts exist. */
        hotelIds?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /** Search by Account Type. */
        type?: string;
        /** Account Number . */
        accountNo?: string[];
        /** Wild Card Search by Account Name. Search will be done for any Accounts whose name starts with this value. */
        accountName?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accountId?: string[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        accountIdContext?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        accountType?: string[];
        /** Return statement history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. */
        includeStatementHistoryIndicator?: boolean;
        /** Return reminder history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. */
        includeReminderHistoryIndicator?: boolean;
        /** Free form text field for searching all reservation fields */
        superSearch?: string;
        /** Hotel code. */
        searchHotelIds?: string[];
        attributeName?: string[];
        /** @uniqueItems true */
        orderType?: ('Asc' | 'Desc')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AccountsInfo, ExceptionDetailType>({
        path: `/accounts`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get history of reminder letters prepared for AR account. <p><strong>OperationId:</strong>getRemindersHistory</p>
     *
     * @tags AccountsReceivables
     * @name GetRemindersHistory
     * @summary Get history of reminder letters for a given account receivable
     * @request GET:/accounts/{accountId}/remindersHistory
     */
    getRemindersHistory: (
      hotelId: string,
      accountId: string,
      query?: {
        /** Property where the AR Account exists. This is required. */
        hotelId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        accountIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        accountType?: string;
        /** Account Number for the AR Account. */
        accountNo?: string;
        /** Account Name for the AR Account. */
        accountName?: string;
        /**
         * History Date filter.
         * @format date
         */
        dateSent?: string;
        /** Report Name wild card. */
        reportFileNameWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RemindersHistory, ExceptionDetailType>({
        path: `/accounts/${accountId}/remindersHistory`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to prepare statement for an AR account holders. It is typically prepared for billing purposes.<br><p><strong><mark>This API is deprecated. Please use getARStatements instead</mark></strong></p> <p><strong>OperationId:</strong>getStatements</p>
     *
     * @tags AccountsReceivables
     * @name GetStatements
     * @summary Get given profile's account receivable statements
     * @request GET:/accounts/{accountId}/statements
     * @deprecated
     */
    getStatements: (
      hotelId: string,
      accountId: string,
      query?: {
        /** Property where the AR Account exists. This is required. */
        hotelId?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /** Account Number for the AR Account. */
        accountNo?: string[];
        /** Account Name for the AR Account. */
        accountName?: string[];
        /** Flag to indicate if postings or adjustments can be made to the invoice. */
        canBeModified?: boolean[];
        /** Close date of the invoice. */
        closeDate?: string[];
        /** The Fiscal Bill number of this posting */
        fiscalBillNo?: string[];
        /** Date of Folio Generation. */
        folioDate?: string[];
        /** Folio Number. */
        folioNo?: number[];
        /**
         * The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status.
         * @uniqueItems true
         */
        folioStatus?: ('Deposit' | 'Void' | 'Ok' | 'Zero' | 'Compress' | 'Converted' | 'Internal')[];
        /** The name of the Folio Type used for the Folio Number sequence. */
        folioTypeName?: string[];
        /** Internal window ID which is unique to the reservation. This ID can only be used for reference. */
        internalFolioWindowID?: string[];
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number[];
        /** @uniqueItems true */
        invoiceType?: ('Normal' | 'Credit' | 'OldBalance' | 'PasserBy')[];
        /** Posting date of the invoice. */
        postingDate?: string[];
        /** Revenue date ID of the invoice. */
        revenueDate?: string[];
        /** Statementno of the invoice. */
        statementNo?: number[];
        /** Status of the invoice. */
        status?: string[];
        /** Transfer date of the invoice. */
        transferDate?: string[];
        /** Transaction code of the invoice. */
        invoiceTransactionCode?: string[];
        /** Transaction Date of the invoice. */
        transactionDate?: string[];
        /** Unique Transaction Identifier of the Invoice. */
        transactionNo?: number[];
        /** Property where the AR Account exists. This is required. */
        invoiceHotelIds?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        guestProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        guestProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        guestProfileType?: string;
        /** The Aging age of the invoice */
        age?: number[];
        /** Name of the Guest who consumed these transactions. */
        guestName?: string[];
        /** A monetary amount. */
        originalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        originalAmountCurrencyCode?: string;
        /** A monetary amount. */
        amount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currencyCode?: string;
        /** A monetary amount. */
        paymentsAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        paymentsCurrencyCode?: string;
        /** A monetary amount. */
        balanceAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        balanceCurrencyCode?: string;
        /** User-defined posting reference. */
        reference?: string[];
        /** User-defined posting remark. */
        remark?: string[];
        adjusted?: boolean[];
        parentInvoiceNo?: number[];
        compressed?: boolean[];
        compressedDate?: string[];
        transferredOut?: boolean[];
        transferredIn?: boolean[];
        marketDescription?: string;
        /** Property where the AR Account exists. This is required. */
        marketHotelId?: string;
        marketCode?: string;
        marketGroup?: string;
        roomClassDescription?: string;
        /** Property where the AR Account exists. This is required. */
        roomClassHotelId?: string;
        roomClassCode?: string;
        sourceDescription?: string;
        /** Property where the AR Account exists. This is required. */
        sourceHotelId?: string;
        sourceCode?: string;
        sourceGroup?: string;
        /** Cashier Id of the Cashier. */
        cashierId?: number;
        /** Cashier Name. */
        cashierName?: string;
        /** Property where the AR Account exists. This is required. */
        transactionHotelId?: string;
        /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
        printTrxReceipt?: boolean;
        /** Unique identifier for the Transaction code. */
        accountInvoiceTransactionCode?: string;
        /** Transaction codes info. */
        transactionDescription?: string;
        /** Category of the transaction code. */
        transactionGroup?: string;
        /** Sub category of the transaction code. */
        transactionSubGroup?: string;
        /** Unique Universal product code of the transaction code. */
        universalProductCode?: string;
        /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
        routingInstructionsId?: number;
        /** Unique code of the article. */
        articleCode?: string[];
        /** Property where the AR Account exists. This is required. */
        articleHotelIds?: string[];
        /** Indicates whether the article is inactive or not. */
        inactive?: boolean[];
        /** Display Order sequence. */
        orderSequence?: number[];
        /** Description of the article. */
        articleDescription?: string[];
        /** Transaction code to which the article belongs. */
        transactionCode?: string[];
        /** A monetary amount. */
        articleAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        articleCurrencyCode?: string;
        /** Indicates whether the article is available for post it. */
        availableForPostIt?: boolean;
        /**
         * Color configuration type. This color configuration provides a visual category of entities.
         * @uniqueItems true
         */
        color?:
          | 'Red'
          | 'DarkRed'
          | 'Green'
          | 'DarkGreen'
          | 'LightGreen'
          | 'Orange'
          | 'White'
          | 'Yellow'
          | 'DarkYellow'
          | 'Purple'
          | 'Brown'
          | 'Gray'
          | 'Aqua'
          | 'Chocolate'
          | 'Blue'
          | 'LightBlue'
          | 'DarkBlue'
          | 'Cyan'
          | 'DarkCyan'
          | 'Magenta'
          | 'DarkMagenta'
          | 'Black';
        /** Unique Universal product code of the article. */
        articleUniversalProductCode?: string[];
        /** Attach the credit card to profile. */
        attachCreditCardToProfile?: boolean;
        cardHolderName?: string;
        cardNumber?: string;
        cardNumberLast4Digits?: string;
        cardNumberMasked?: string;
        /**
         * Simple type for indicating if credit card number is tokenized.
         * @uniqueItems true
         */
        cardOrToken?: 'CardNumber' | 'Token';
        /**
         * This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
         * @uniqueItems true
         */
        cardType?:
          | 'Ab'
          | 'Am'
          | 'Ax'
          | 'Cb'
          | 'Dc'
          | 'Ds'
          | 'Dt'
          | 'Ec'
          | 'Er'
          | 'Jc'
          | 'Jl'
          | 'Mc'
          | 'Nb'
          | 'So'
          | 'St'
          | 'Sw'
          | 'Va'
          | 'Xy'
          | 'Zz'
          | 'Cp'
          | 'Cu';
        /**
         * Expiration date of the credit card
         * @format date
         */
        expirationDate?: string;
        expirationDateExpired?: boolean;
        /** Masked Expiration date of the credit card */
        expirationDateMasked?: string;
        /** @uniqueItems true */
        processing?: 'Eft' | 'Manual';
        swiped?: boolean;
        /** Indicates the user defined credit card type if credit card type from a defined list is not provided */
        userDefinedCardType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        invoicePaymentCardId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        invoicePaymentCardIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        invoicePaymentCardIdType?: string;
        /** A monetary amount. */
        currentAuthorizedAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currentAuthorizedAmountCurrencyCode?: string;
        /** A monetary amount. */
        approvalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        approvalAmountCurrencyCode?: string;
        /** Defines the type of Linked profiles for a block. */
        type?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        addresseeProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        addresseeProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        addresseeProfileType?: string;
        /** Name for the profile attached to the block. */
        name?: string;
        /** City for the profile attached to the block. */
        city?: string;
        /** Phone for the profile attached to the block. */
        phone?: string;
        /** Flag to check Partail Transfer Allowed. */
        allowPartialTransferYn?: boolean[];
        /** Flag to check Invoice Statement is Printed. */
        printed?: boolean[];
        /** Invoice Statement Printed Date. */
        printedDate?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedFolioType?: string;
        /** Name of the Stored Folio. */
        storedFolioName?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedDebitFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedDebitFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedDebitFolioType?: string;
        /** Name of the Stored Debit Folio. */
        storedDebitFolioName?: string[];
        /**
         * The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.)
         * @format date
         */
        balanceForwardDate?: string;
        /**
         * Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement.
         * @default "false"
         */
        inclFolios?: boolean;
        /**
         * Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES.
         * @default "false"
         */
        inclPrinted?: boolean;
        /**
         * Flag to indicate if Zero Balances Invoices are to be included in the Statement.
         * @default "false"
         */
        inclZero?: boolean;
        /**
         * The ending value of the date range.
         * @format date
         */
        filterEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        filterStartDate?: string;
        /** Text which will be printed on the Invoice. */
        statementText?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Statements, ExceptionDetailType>({
        path: `/accounts/${accountId}/statements`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  arTransactions = {
    /**
     * @description Use this API to get list of transaction data for a given account receivable account number and list of hotels <p><strong>OperationId:</strong>getARTransactions</p>
     *
     * @tags AccountsReceivables
     * @name GetArTransactions
     * @summary Get AR transactions.
     * @request GET:/arTransactions
     */
    getArTransactions: (
      hotelId: string,
      query: {
        /** Property where the Accounts exist. */
        hotelIds: string[];
        /** Account number of this transaction. */
        accounts?: string;
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
        /** A monetary amount. */
        fromAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        fromCurrencyCode?: string;
        /** A monetary amount. */
        toAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        toCurrencyCode?: string;
        /** Display Name for the guest. */
        guestName?: string;
        /** invoice Number . */
        invoices?: number[];
        /** folio Number . */
        folios?: string[];
        /** Fiscal bill number of this transaction. */
        fiscalBillNo?: string;
        /** Account number of this transaction. */
        accountName?: string;
        /** Addressee Name filter. Works with the Addressee Functionality. */
        addresseName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArTransactions, ExceptionDetailType>({
        path: `/arTransactions`,
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
     * @description Use this API to create a new account receivable type account for given OPERA profile id. Prior creating account, need to use getProfile to find OPERA profile's id.  <p><strong>OperationId:</strong>postAccount</p>
     *
     * @tags AccountsReceivables
     * @name PostAccount
     * @summary Create an account receivable account
     * @request POST:/hotels/{hotelId}/accounts
     */
    postAccount: (hotelId: string, accountCriteria: AccountCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts`,
        method: 'POST',
        body: accountCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get list of account receivable invoices which are put on hold. <p><strong>OperationId:</strong>getInvoicesOnHold</p>
     *
     * @tags AccountsReceivables
     * @name GetInvoicesOnHold
     * @summary Get list of hold invoices for account receivable
     * @request GET:/hotels/{hotelId}/accounts/invoicesOnHold
     */
    getInvoicesOnHold: (
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        accountIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        accountType?: string;
        /** Account Number for the AR Account. */
        accountNo?: string;
        /** Account Name for the AR Account. */
        accountName?: string;
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
        /** Folio Number for the invoice. */
        folios?: string;
        /** Invoice number for the invoice. */
        invoices?: number;
        /** Fiscal Bill number for the invoice. */
        fiscalBillNo?: string;
        /** Guest Name set for the invoice. */
        guestName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoicesOnHold, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/invoicesOnHold`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to search for account receivable type account's  detail for given account id. <p><strong>OperationId:</strong>getAccount</p>
     *
     * @tags AccountsReceivables
     * @name GetAccount
     * @summary Get account
     * @request GET:/hotels/{hotelId}/accounts/{accountId}
     */
    getAccount: (
      accountId: string,
      hotelId: string,
      query?: {
        /** Account Number for the Account. */
        accountNo?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /**
         * Instructions to fetch AR Account details.
         * @uniqueItems true
         */
        fetchInstructions?: (
          | 'Account'
          | 'Aging'
          | 'FixedCharges'
          | 'Invoices'
          | 'Payments'
          | 'Summary'
          | 'Comments'
          | 'Traces'
          | 'Reminder'
          | 'Statement'
          | 'Indicators'
          | 'YearView'
        )[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Account, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing account using account id and further detail. Use get account to get account detail prior updating. <p><strong>OperationId:</strong>putAccount</p>
     *
     * @tags AccountsReceivables
     * @name PutAccount
     * @summary Update a account receivable account
     * @request PUT:/hotels/{hotelId}/accounts/{accountId}
     */
    putAccount: (accountId: string, hotelId: string, account: Account, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}`,
        method: 'PUT',
        body: account,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete account detail for given unique account id. Use get accounts to find account id. <p><strong>OperationId:</strong>deleteAccount</p>
     *
     * @tags AccountsReceivables
     * @name DeleteAccount
     * @summary Delete Account
     * @request DELETE:/hotels/{hotelId}/accounts/{accountId}
     */
    deleteAccount: (accountId: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add credits to account receivable invoices. <p><strong>OperationId:</strong>postCreditToInvoices</p>
     *
     * @tags AccountsReceivables
     * @name PostCreditToInvoices
     * @summary Add credits to AR invoices
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/applyCreditToInvoices
     */
    postCreditToInvoices: (
      accountId: string,
      hotelId: string,
      creditToInvoices: CreditToInvoices,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/applyCreditToInvoices`,
        method: 'POST',
        body: creditToInvoices,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to transfer credit card payment transactions to Accounts Receivable. <p><strong>OperationId:</strong>transferARCreditCardPayments</p>
     *
     * @tags AccountsReceivables
     * @name TransferArCreditCardPayments
     * @summary Move credit card payment to account receivable
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/arCreditCard/transfer
     */
    transferArCreditCardPayments: (
      accountId: string,
      hotelId: string,
      arCreditCardPaymentsToTransfer: ArCreditCardPaymentsToTransfer,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/arCreditCard/transfer`,
        method: 'POST',
        body: arCreditCardPaymentsToTransfer,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to post charges to account receivable account. <p><strong>OperationId:</strong>postChargesToAR</p>
     *
     * @tags AccountsReceivables
     * @name PostChargesToAr
     * @summary Add charges to account receivable
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/charges
     */
    postChargesToAr: (
      accountId: string,
      hotelId: string,
      arChargesPostingCriteria: ArChargesPostingCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/charges`,
        method: 'POST',
        body: arChargesPostingCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add a note for a given account id. Use get accounts to find account id. <p><strong>OperationId:</strong>postAccountComment</p>
     *
     * @tags AccountsReceivables
     * @name PostAccountComment
     * @summary Create Account Comment
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/comments
     */
    postAccountComment: (
      accountId: string,
      hotelId: string,
      accountComment: AccountComment,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/comments`,
        method: 'POST',
        body: accountComment,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing account note. Use get account to find noteid <p><strong>OperationId:</strong>putAccountComment</p>
     *
     * @tags AccountsReceivables
     * @name PutAccountComment
     * @summary Change Account Comment
     * @request PUT:/hotels/{hotelId}/accounts/{accountId}/comments
     */
    putAccountComment: (
      accountId: string,
      hotelId: string,
      accountComment: AccountComment,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/comments`,
        method: 'PUT',
        body: accountComment,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete notes from a given account id. Use get account with an instruction to get note id. <p><strong>OperationId:</strong>deleteAccountComment</p>
     *
     * @tags AccountsReceivables
     * @name DeleteAccountComment
     * @summary Delete Account Comment
     * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/comments
     */
    deleteAccountComment: (
      accountId: string,
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string;
        /** Property Value */
        value?: string;
        /** If specified comment belongs to the Hotel, otherwise it is a global comment. */
        hotel?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/comments`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to combine two or more invoices into one invoice <p><strong>OperationId:</strong>compressARInvoices</p>
     *
     * @tags AccountsReceivables
     * @name CompressArInvoices
     * @summary Combines Account receivable invoices
     * @request PUT:/hotels/{hotelId}/accounts/{accountId}/compressInvoices
     */
    compressArInvoices: (
      accountId: string,
      hotelId: string,
      arCompressInvoices: ArCompressInvoices,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CompressedARInvoices, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/compressInvoices`,
        method: 'PUT',
        body: arCompressInvoices,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create account receivable to multiple hotels by copying from source hotel. <p><strong>OperationId:</strong>copyARAccount</p>
     *
     * @tags AccountsReceivables
     * @name CopyArAccount
     * @summary Copy account receivable account
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/copyAccount
     */
    copyArAccount: (accountId: string, hotelId: string, arAccountCopy: ArAccountCopy, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/copyAccount`,
        method: 'POST',
        body: arAccountCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create fixed charges for a given account id of account receivable. Use get accounts to find an account id. <p><strong>OperationId:</strong>postAccountFixedCharge</p>
     *
     * @tags AccountsReceivables
     * @name PostAccountFixedCharge
     * @summary Create fixed charges
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/fixedCharges
     */
    postAccountFixedCharge: (
      accountId: string,
      hotelId: string,
      accountFixedCharge: AccountFixedCharge,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges`,
        method: 'POST',
        body: accountFixedCharge,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update existing fixed charges for a given account receivable. <p><strong>OperationId:</strong>putAccountFixedCharge</p>
     *
     * @tags AccountsReceivables
     * @name PutAccountFixedCharge
     * @summary Update fixed charge detail
     * @request PUT:/hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId}
     */
    putAccountFixedCharge: (
      fixedChargeId: string,
      accountId: string,
      hotelId: string,
      accountFixedCharge: AccountFixedCharge,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges/${fixedChargeId}`,
        method: 'PUT',
        body: accountFixedCharge,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete fixed charges for a given account receivable id. Use getaccounts to find an account id. <p><strong>OperationId:</strong>deleteAccountFixedCharge</p>
     *
     * @tags AccountsReceivables
     * @name DeleteAccountFixedCharge
     * @summary Delete fixed charges
     * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId}
     */
    deleteAccountFixedCharge: (
      fixedChargeId: string,
      accountId: string,
      hotelId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges/${fixedChargeId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to find account receivable folio printers <p><strong>OperationId:</strong>getARFolioPrinters</p>
     *
     * @tags AccountsReceivables
     * @name GetArFolioPrinters
     * @summary Get list of account receivable folio printers
     * @request GET:/hotels/{hotelId}/accounts/{accountId}/folioPrinters
     */
    getArFolioPrinters: (
      accountId: string,
      hotelId: string,
      query?: {
        balance?: number;
        overrideCreditHoldCheck?: boolean;
        /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
        cashierId?: number;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Account Number for the AR Account. */
        accountNo?: string;
        /** Account Name for the AR Account. */
        accountName?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        guestProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        guestProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        guestProfileType?: string;
        folioWindowNo?: number[];
        /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
        chargeCashierId?: number[];
        /** Transaction Code to post. */
        chargeTransactionCode?: string[];
        /** Article ID. */
        articleCode?: string[];
        /** A monetary amount. */
        amount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currencyCode?: string;
        /** Quantity to post to the folio. */
        postingQuantity?: number[];
        /** User-defined posting reference. */
        postingReference?: string[];
        /** User-defined posting remark. */
        postingRemark?: string[];
        /** Indicates the Cheque number. */
        checkNumber?: string[];
        /** Corrected arrangement code from the package associated to this transaction. */
        arrangementCode?: string[];
        /** Apply room routing when making this posting. */
        applyRoutingInstructions?: boolean[];
        /** Use the applicable package allowance when making this posting. */
        usePackageAllowance?: boolean[];
        /** True indicates the Transaction Code is allowed to be posted automatically. */
        autoPosting?: boolean[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        financialTransactionId?: string[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        financialTransactionIdContext?: string[];
        /** A reference to the type of object defined by the UniqueID element. */
        financialTransactionType?: string[];
        /** User-defined invoice reference. */
        reference?: string;
        /** User-defined invoice remark. */
        remark?: string;
        /** Folio Type to be assigned to generated folio. This is a country requirement. */
        folioType?: string;
        /** Fiscal folio flag to call fiscal folio web service after folio generation. */
        generateFiscalFolio?: boolean;
        /** Folio Queue name. */
        queueName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArFolioPrinters, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/folioPrinters`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a new invoice for an AR account. <p><strong>OperationId:</strong>postInvoice</p>
     *
     * @tags AccountsReceivables
     * @name PostInvoice
     * @summary Create account receivable invoices
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/invoices
     */
    postInvoice: (accountId: string, hotelId: string, arInvoice: ArInvoice, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArInvoiceDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/invoices`,
        method: 'POST',
        body: arInvoice,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to generate statement for a given account receivable id. It includes the account balance as of the current business date, an aging summary that shows how long outstanding balances have been "on the books" for each aging level set up for given property. <p><strong>OperationId:</strong>postStatements</p>
     *
     * @tags AccountsReceivables
     * @name PostStatements
     * @summary Generate a statement for a given account receivable
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/statements
     */
    postStatements: (
      accountId: string,
      hotelId: string,
      statementsToBeGenerated: StatementsToBeGenerated,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/statements`,
        method: 'POST',
        body: statementsToBeGenerated,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to add a trace for a given account id. Use getaccounts to find account id. <p><strong>OperationId:</strong>postAccountTrace</p>
     *
     * @tags AccountsReceivables
     * @name PostAccountTrace
     * @summary Add a trace to an account receivable account
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/traces
     */
    postAccountTrace: (accountId: string, hotelId: string, accountTrace: AccountTrace, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/traces`,
        method: 'POST',
        body: accountTrace,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description  <p><strong>OperationId:</strong>putAccountTrace</p>
     *
     * @tags AccountsReceivables
     * @name PutAccountTrace
     * @summary This API facilitates modification of account traces.
     * @request PUT:/hotels/{hotelId}/accounts/{accountId}/traces
     */
    putAccountTrace: (accountId: string, hotelId: string, accountTrace: AccountTrace, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/traces`,
        method: 'PUT',
        body: accountTrace,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description  <p><strong>OperationId:</strong>deleteAccountTrace</p>
     *
     * @tags AccountsReceivables
     * @name DeleteAccountTrace
     * @summary This API facilitates deletion of account traces.
     * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/traces
     */
    deleteAccountTrace: (
      accountId: string,
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        traceID?: string;
        /**
         * Date of the trace.
         * @format date-time
         */
        traceOn?: string;
        /** The information this trace contains. */
        traceText?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/traces`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get AR account's invoice and payment details including credit, debit, amount due date, etc. <p><strong>OperationId:</strong>getInvoicePaymentDetail</p>
     *
     * @tags AccountsReceivables
     * @name GetInvoicePaymentDetail
     * @summary Get account receivable invoice and payment details
     * @request GET:/hotels/{hotelId}/accounts/{accountId}/transactions/{transactionId}/invoicePaymentDetails
     */
    getInvoicePaymentDetail: (
      transactionId: string,
      accountId: string,
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /** Account Number for the AR Account. */
        accountNo?: string;
        /** Account Name for the AR Account. */
        accountName?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoicePayment, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/transactions/${transactionId}/invoicePaymentDetails`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to reverse compressing account receivable invoices and break single combined invoice into individual invoices. <p><strong>OperationId:</strong>uncompressARInvoices</p>
     *
     * @tags AccountsReceivables
     * @name UncompressArInvoices
     * @summary Reverse the compressing invoice process
     * @request POST:/hotels/{hotelId}/accounts/{accountId}/uncompressInvoices
     */
    uncompressArInvoices: (accountId: string, hotelId: string, invoice: Invoice, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/accounts/${accountId}/uncompressInvoices`,
        method: 'POST',
        body: invoice,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get account receivable profile's aging summary including account name, summary, credit limit, total outstanding balance, etc. per aging bucket. <p><strong>OperationId:</strong>getARAgingCycles</p>
     *
     * @tags AccountsReceivables
     * @name GetArAgingCycles
     * @summary Get given AR account's aging detail
     * @request GET:/hotels/{hotelId}/agingCycles
     */
    getArAgingCycles: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArAgingCycles, ExceptionDetailType>({
        path: `/hotels/${hotelId}/agingCycles`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to create a batch process for simultaneously post a one-time charge to multiple account receivable accounts. <p><strong>OperationId:</strong>postBatchCharges</p>
     *
     * @tags AccountsReceivables
     * @name PostBatchCharges
     * @summary Create process to charge on multiple account receivables
     * @request POST:/hotels/{hotelId}/batchCharges
     */
    postBatchCharges: (hotelId: string, batchChargesToPost: BatchChargesToPost, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/batchCharges`,
        method: 'POST',
        body: batchChargesToPost,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to transfer direct bills to account receivable account <p><strong>OperationId:</strong>transferDirectBillsToAr</p>
     *
     * @tags AccountsReceivables
     * @name TransferDirectBillsToAr
     * @summary Move direct bills to account receivable
     * @request PUT:/hotels/{hotelId}/directBillsToAR
     */
    transferDirectBillsToAr: (
      hotelId: string,
      transferDirectBillsToAr: TransferDirectBillsToAr,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/directBillsToAR`,
        method: 'PUT',
        body: transferDirectBillsToAr,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update or transfer invoice detail such as amount, transaction code, etc. <p><strong>OperationId:</strong>putInvoiceDetails</p>
     *
     * @tags AccountsReceivables
     * @name PutInvoiceDetails
     * @summary Update invoice detail.
     * @request PUT:/hotels/{hotelId}/invoices
     */
    putInvoiceDetails: (hotelId: string, invoice: Invoice, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/invoices`,
        method: 'PUT',
        body: invoice,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update or transfer invoice detail such as amount, transaction code, etc.<br><p><strong><mark>This API is deprecated. Please use putInvoiceDetails instead</mark></strong></p> <p><strong>OperationId:</strong>putInvoice</p>
     *
     * @tags AccountsReceivables
     * @name PutInvoice
     * @summary Update invoice detail.
     * @request PUT:/hotels/{hotelId}/invoices/{invoiceId}
     * @deprecated
     */
    putInvoice: (invoiceId: string, hotelId: string, invoice: Invoice, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/invoices/${invoiceId}`,
        method: 'PUT',
        body: invoice,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get applied payment details for AR invoices.<br><p><strong><mark>This API is deprecated. Please use getAppliedInvoicePayments instead</mark></strong></p> <p><strong>OperationId:</strong>getInvoiceAppliedPayments</p>
     *
     * @tags AccountsReceivables
     * @name GetInvoiceAppliedPayments
     * @summary Get account receivable invoice's payment history
     * @request GET:/hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments
     * @deprecated
     */
    getInvoiceAppliedPayments: (
      accountId: string,
      transactionId: string,
      invoiceId: string,
      hotelId: string,
      query?: {
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoiceAppliedPayments, ExceptionDetailType>({
        path: `/hotels/${hotelId}/invoices/${invoiceId}/transactions/${transactionId}/accounts/${accountId}/invoiceAppliedPayments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete payments from invoice.<br><p><strong><mark>This API is deprecated. Please use removePaymentsFromInvoice instead</mark></strong></p> <p><strong>OperationId:</strong>deletePaymentsFromInvoice</p>
     *
     * @tags AccountsReceivables
     * @name DeletePaymentsFromInvoice
     * @summary Delete payments from invoice
     * @request DELETE:/hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/paymentsFromInvoice
     * @deprecated
     */
    deletePaymentsFromInvoice: (
      transactionId: string,
      invoiceId: string,
      hotelId: string,
      query: {
        /** Unique Transaction Identifier of the Payment. */
        trxNo: number[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accountId: string;
        /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
        cashierID?: number;
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/invoices/${invoiceId}/transactions/${transactionId}/paymentsFromInvoice`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to post charges to account receivable account.<br><p><strong><mark>This API is deprecated. Please use postChargesToAR instead</mark></strong></p> <p><strong>OperationId:</strong>postARCharges</p>
     *
     * @tags AccountsReceivables
     * @name PostArCharges
     * @summary Add charges to account receivable
     * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/charges
     * @deprecated
     */
    postArCharges: (
      accountId: string,
      profileId: string,
      hotelId: string,
      arChargesPostingCriteria: ArChargesPostingCriteria,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/charges`,
        method: 'POST',
        body: arChargesPostingCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to make payment to AR accounts for a list of reservations. <p><strong>OperationId:</strong>postARPayments</p>
     *
     * @tags AccountsReceivables
     * @name PostArPayments
     * @summary Add payment to an account receivable account for a list of reservations
     * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/payments
     */
    postArPayments: (
      accountId: string,
      profileId: string,
      hotelId: string,
      arPaymentsToBeCreated: ArPaymentsToBeCreated,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArPayments, ExceptionDetailType>({
        path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/payments`,
        method: 'POST',
        body: arPaymentsToBeCreated,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to find the history of statements prepared for AR accounts. <p><strong>OperationId:</strong>getStatementsHistory</p>
     *
     * @tags AccountsReceivables
     * @name GetStatementsHistory
     * @summary Get given profile's account receivable statements history
     * @request GET:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/statementsHistory
     */
    getStatementsHistory: (
      accountId: string,
      profileId: string,
      hotelId: string,
      query?: {
        /** Account Number for the AR Account. */
        accountNo?: string;
        /** Account Name for the AR Account. */
        accountName?: string;
        /**
         * History Date filter.
         * @format date
         */
        dateSent?: string;
        /** Report Name wild card. */
        reportFileNameWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<StatementHistory, ExceptionDetailType>({
        path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/statementsHistory`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to reverse payment that occurred accidently or via user error. <p><strong>OperationId:</strong>postReversePayment</p>
     *
     * @tags AccountsReceivables
     * @name PostReversePayment
     * @summary Reverse Payment
     * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/transactions/{transactionId}/reversePayment
     */
    postReversePayment: (
      transactionId: string,
      accountId: string,
      profileId: string,
      hotelId: string,
      reversePayment: ReversePayment,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/transactions/${transactionId}/reversePayment`,
        method: 'POST',
        body: reversePayment,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get applied payment details for AR invoices. <p><strong>OperationId:</strong>getAppliedInvoicePayments</p>
     *
     * @tags AccountsReceivables
     * @name GetAppliedInvoicePayments
     * @summary Get account receivable invoice's payment history
     * @request GET:/hotels/{hotelId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments
     */
    getAppliedInvoicePayments: (
      accountId: string,
      transactionId: string,
      hotelId: string,
      query?: {
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoiceAppliedPayments, ExceptionDetailType>({
        path: `/hotels/${hotelId}/transactions/${transactionId}/accounts/${accountId}/invoiceAppliedPayments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get lists of folios for guests who checked out using a credit card payment transaction code that has an account receivable associated with it. It also lists payments made prior to check out if the payment was made using a credit card transaction code that has a an account receivable associated with it. <p><strong>OperationId:</strong>getARCreditCardPayments</p>
     *
     * @tags AccountsReceivables
     * @name GetArCreditCardPayments
     * @summary Get account receivable folios which are paid using credit cards
     * @request GET:/hotels/{hotelId}/transactions/{transactionId}/creditcard/payments
     */
    getArCreditCardPayments: (
      transactionId: string,
      hotelId: string,
      query?: {
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
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ArCreditCardPayments, ExceptionDetailType>({
        path: `/hotels/${hotelId}/transactions/${transactionId}/creditcard/payments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete payments from invoice. <p><strong>OperationId:</strong>removePaymentsFromInvoice</p>
     *
     * @tags AccountsReceivables
     * @name RemovePaymentsFromInvoice
     * @summary Delete payments from invoice
     * @request DELETE:/hotels/{hotelId}/transactions/{transactionId}/paymentsFromInvoice
     */
    removePaymentsFromInvoice: (
      transactionId: string,
      hotelId: string,
      query: {
        /** Unique Transaction Identifier of the Payment. */
        trxNo: number[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accountId: string;
        /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
        cashierID?: number;
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/transactions/${transactionId}/paymentsFromInvoice`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to remove the invoice from the statement before that invoice can be included in a different statement. <p><strong>OperationId:</strong>unlinkInvoiceFromStatement</p>
     *
     * @tags AccountsReceivables
     * @name UnlinkInvoiceFromStatement
     * @summary Unlink invoices from a statement
     * @request PUT:/hotels/{hotelId}/unlink/invoiceFromStatement
     */
    unlinkInvoiceFromStatement: (
      hotelId: string,
      unlinkInvoiceFromStatement: UnlinkInvoiceFromStatement,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/unlink/invoiceFromStatement`,
        method: 'PUT',
        body: unlinkInvoiceFromStatement,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  invoicePayments = {
    /**
     * @description Use this API to get payment data for account receivable invoices. <p><strong>OperationId:</strong>getInvoicesPayments</p>
     *
     * @tags AccountsReceivables
     * @name GetInvoicesPayments
     * @summary Get payment detail for account's invoices
     * @request GET:/invoicePayments/accounts/{accountId}
     */
    getInvoicesPayments: (
      hotelId: string,
      accountId: string,
      query?: {
        /**
         * Flag to indicate if Invoice Details are required.
         * @default "true"
         */
        inclDetails?: boolean;
        /**
         * Flag to indicate if Zero Balance Invoices are to be included.
         * @default "true"
         */
        inclZeroBalance?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Property where the Accounts exist. */
        hotelIds?: string[];
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
        /** Display Name for the guest. */
        guestDisplayName?: string;
        /** Filter for User-defined Invoice Supplement. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. */
        remark?: string;
        /** Filter for User-defined Invoice Reference. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. */
        reference?: string;
        /** invoice Number . */
        invoiceNo?: number[];
        /** Addressee Name filter. Works with the Addressee Functionality. */
        addresseeName?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationType?: string;
        /**
         * Flag to check Invoice Statement is Printed.
         * @default "true"
         */
        printed?: boolean;
        /**
         * Flag to check Invoice is billed
         * @default "false"
         */
        unBilled?: boolean;
        /** folio Number . */
        folioNo?: string[];
        /** Fiscal bill number of this transaction. */
        fiscalBillNo?: string;
        /** The Statement number of this invoice. */
        statementNo?: number;
        /**
         * Type of AR Invoice information to fetch the invoices or payments data.
         * @uniqueItems true
         */
        fetchInstructions?: ('Invoices' | 'Payments')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoicesPayments, ExceptionDetailType>({
        path: `/invoicePayments/accounts/${accountId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  invoicePostings = {
    /**
     * @description Use this API to get account receivable postings. <p><strong>OperationId:</strong>getInvoicePostings</p>
     *
     * @tags AccountsReceivables
     * @name GetInvoicePostings
     * @summary Get account receivable invoice postings
     * @request GET:/invoicePostings
     */
    getInvoicePostings: (
      hotelId: string,
      query?: {
        /** Flag to indicate if postings or adjustments can be made to the invoice. */
        canBeModified?: boolean;
        /**
         * Close date of the invoice.
         * @format date
         */
        closeDate?: string;
        /** The Fiscal Bill number of this posting */
        fiscalBillNo?: string;
        /**
         * Date of Folio Generation.
         * @format date
         */
        folioDate?: string;
        /** Folio Number. */
        folioNo?: number;
        /**
         * The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status.
         * @uniqueItems true
         */
        folioStatus?: 'Deposit' | 'Void' | 'Ok' | 'Zero' | 'Compress' | 'Converted' | 'Internal';
        /** The name of the Folio Type used for the Folio Number sequence. */
        folioTypeName?: string;
        /** Internal window ID which is unique to the reservation. This ID can only be used for reference. */
        internalFolioWindowID?: string;
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number;
        /** @uniqueItems true */
        invoiceType?: 'Normal' | 'Credit' | 'OldBalance' | 'PasserBy';
        /**
         * Posting date of the invoice.
         * @format date
         */
        postingDate?: string;
        /**
         * Revenue date ID of the invoice.
         * @format date
         */
        revenueDate?: string;
        /** Statementno of the invoice. */
        statementNo?: number;
        /** Status of the invoice. */
        status?: string;
        /**
         * Transfer date of the invoice.
         * @format date
         */
        transferDate?: string;
        /** Transaction code of the invoice. */
        postingTransactionCode?: string;
        /**
         * Transaction Date of the invoice.
         * @format date
         */
        transactionDate?: string;
        /** Unique Transaction Identifier of the Invoice. */
        transactionNo?: number;
        /** The Cashier ID of the Cashier who is currently processing the transaction(s). */
        cashierId?: number;
        /** Property where the invoice exists. */
        hotelId?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        guestProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        guestProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        guestProfileType?: string;
        /** The Aging age of the invoice */
        age?: number;
        /** Name of the Guest who consumed these transactions. */
        guestName?: string;
        /** A monetary amount. */
        originalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        originalAmountCurrencyCode?: string;
        /** A monetary amount. */
        amount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currencyCode?: string;
        /** A monetary amount. */
        paymentsAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        paymentsCurrencyCode?: string;
        /** A monetary amount. */
        balanceAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        balanceCurrencyCode?: string;
        /** User-defined posting reference. */
        reference?: string;
        /** User-defined posting remark. */
        remark?: string;
        adjusted?: boolean;
        parentInvoiceNo?: number;
        compressed?: boolean;
        /** @format date */
        compressedDate?: string;
        transferredOut?: boolean;
        transferredIn?: boolean;
        marketDescription?: string;
        marketHotelId?: string;
        marketCode?: string;
        marketGroup?: string;
        roomClassDescription?: string;
        roomClassHotelId?: string;
        roomClassCode?: string;
        sourceDescription?: string;
        sourceHotelId?: string;
        sourceCode?: string;
        sourceGroup?: string;
        /** Cashier Id of the Cashier. */
        cashierInfoCashierId?: number;
        /** Cashier Name. */
        cashierName?: string;
        /** Hotel context of the Transaction code. */
        transactionHotelId?: string;
        /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
        printTrxReceipt?: boolean;
        /** Unique identifier for the Transaction code. */
        invoicePostingsTransactionCode?: string;
        /** Transaction codes info. */
        transactionDescription?: string;
        /** Category of the transaction code. */
        transactionGroup?: string;
        /** Sub category of the transaction code. */
        transactionSubGroup?: string;
        /** Unique Universal product code of the transaction code. */
        universalProductCode?: string;
        /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
        routingInstructionsId?: number;
        /** Unique code of the article. */
        articleCode?: string[];
        /** Hotel code to which the article belongs. */
        articleHotelIds?: string[];
        /** Indicates whether the article is inactive or not. */
        inactive?: boolean[];
        /** Display Order sequence. */
        orderSequence?: number[];
        /** Description of the article. */
        articleDescription?: string[];
        /** Transaction code to which the article belongs. */
        transactionCode?: string[];
        /** A monetary amount. */
        articleAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        articleCurrencyCode?: string;
        /** Indicates whether the article is available for post it. */
        availableForPostIt?: boolean;
        /**
         * Color configuration type. This color configuration provides a visual category of entities.
         * @uniqueItems true
         */
        color?:
          | 'Red'
          | 'DarkRed'
          | 'Green'
          | 'DarkGreen'
          | 'LightGreen'
          | 'Orange'
          | 'White'
          | 'Yellow'
          | 'DarkYellow'
          | 'Purple'
          | 'Brown'
          | 'Gray'
          | 'Aqua'
          | 'Chocolate'
          | 'Blue'
          | 'LightBlue'
          | 'DarkBlue'
          | 'Cyan'
          | 'DarkCyan'
          | 'Magenta'
          | 'DarkMagenta'
          | 'Black';
        /** Unique Universal product code of the article. */
        articleUniversalProductCode?: string[];
        /** Attach the credit card to profile. */
        attachCreditCardToProfile?: boolean;
        cardHolderName?: string;
        cardNumber?: string;
        cardNumberLast4Digits?: string;
        cardNumberMasked?: string;
        /**
         * Simple type for indicating if credit card number is tokenized.
         * @uniqueItems true
         */
        cardOrToken?: 'CardNumber' | 'Token';
        /**
         * This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
         * @uniqueItems true
         */
        cardType?:
          | 'Ab'
          | 'Am'
          | 'Ax'
          | 'Cb'
          | 'Dc'
          | 'Ds'
          | 'Dt'
          | 'Ec'
          | 'Er'
          | 'Jc'
          | 'Jl'
          | 'Mc'
          | 'Nb'
          | 'So'
          | 'St'
          | 'Sw'
          | 'Va'
          | 'Xy'
          | 'Zz'
          | 'Cp'
          | 'Cu';
        /**
         * Expiration date of the credit card
         * @format date
         */
        expirationDate?: string;
        expirationDateExpired?: boolean;
        /** Masked Expiration date of the credit card */
        expirationDateMasked?: string;
        /** @uniqueItems true */
        processing?: 'Eft' | 'Manual';
        swiped?: boolean;
        /** Indicates the user defined credit card type if credit card type from a defined list is not provided */
        userDefinedCardType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        cardId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        PaymentCardIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        paymentCardIdType?: string;
        /** A monetary amount. */
        currentAuthorizedAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currentAuthorizedAmountCurrencyCode?: string;
        /** A monetary amount. */
        approvalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        approvalAmountCurrencyCode?: string;
        /** Defines the type of Linked profiles for a block. */
        addresseeType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        addressProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        addressProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        addressProfileIdType?: string;
        /** Name for the profile attached to the block. */
        name?: string;
        /** City for the profile attached to the block. */
        city?: string;
        /** Phone for the profile attached to the block. */
        phone?: string;
        /** Flag to check Partail Transfer Allowed. */
        allowPartialTransferYn?: boolean;
        /** Flag to check Invoice Statement is Printed. */
        printed?: boolean;
        /**
         * Invoice Statement Printed Date.
         * @format date
         */
        printedDate?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedFolioType?: string;
        /** Name of the Stored Folio. */
        storedFolioName?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedDebitFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedDebitFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedDebitFolioType?: string;
        /** Name of the Stored Debit Folio. */
        storedDebitFolioName?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accountId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        accountIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        accountType?: string;
        /** The Account Number for the Account. */
        accountNo?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileIdType?: string;
        /** Cashier Id of the Cashier. */
        additionalFilterCashierId?: number;
        additionalFilterTransactionCode?: string[];
        additionalFilterTransactionSubGroupCode?: string[];
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
        /** Filters the results for reference. */
        referenceWildCard?: string;
        /** Filter the results for supplement. */
        supplementWildCard?: string;
        /** Lookup string which will try to match an existing Cheque number's. */
        checkNumberWildCard?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<InvoicePostings, ExceptionDetailType>({
        path: `/invoicePostings`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  invoices = {
    /**
     * @description Use this API to close ("freeze") one or more selected invoices at any point after they have been created. When an invoice has been closed, no new postings to the invoice can be made, transaction reference or supplemental information can be edited, or adjustments to transaction codes can be made. However, payments can be posted to an invoice after it has been closed. <p><strong>OperationId:</strong>putInvoices</p>
     *
     * @tags AccountsReceivables
     * @name PutInvoices
     * @summary Close account receivable invoices
     * @request PUT:/invoices/close
     */
    putInvoices: (hotelId: string, invoices: Invoices, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/invoices/close`,
        method: 'PUT',
        body: invoices,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  invoicesAccount = {
    /**
     * @description Use this API to update existing AR invoice for a given profile and/or a reservation. <p><strong>OperationId:</strong>putARInvoicesAccount</p>
     *
     * @tags AccountsReceivables
     * @name PutArInvoicesAccount
     * @summary Change Account receivable invoice for an AR account
     * @request PUT:/invoicesAccount
     */
    putArInvoicesAccount: (hotelId: string, arInvoicesAccount: ArInvoicesAccount, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/invoicesAccount`,
        method: 'PUT',
        body: arInvoicesAccount,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  oldBalances = {
    /**
     * @description Use this API to add old balances from external accounting systems into OPERA Accounts Receivable. <p><strong>OperationId:</strong>postAROldBalances</p>
     *
     * @tags AccountsReceivables
     * @name PostArOldBalances
     * @summary Add old balances from external accounting systems
     * @request POST:/oldBalances
     */
    postArOldBalances: (hotelId: string, arOldBalances: ArOldBalances, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/oldBalances`,
        method: 'POST',
        body: arOldBalances,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  profiles = {
    /**
     * @description Use this API to get profile's account receivable summary including fixed charges, account balance, statements, reminder history, etc. <p><strong>OperationId:</strong>getProfileAging</p>
     *
     * @tags AccountsReceivables
     * @name GetProfileAging
     * @summary Get given profile's aging detail
     * @request GET:/profiles/{profileId}/aging
     */
    getProfileAging: (
      hotelId: string,
      profileId: string,
      query?: {
        /** Currency of the aging amounts. */
        currency?: string;
        hotelIds?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ProfileAging, ExceptionDetailType>({
        path: `/profiles/${profileId}/aging`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to get a month-by-month total of accrued debits, accrued credits, and a net total for the selected account data. <p><strong>OperationId:</strong>getProfileYearView</p>
     *
     * @tags AccountsReceivables
     * @name GetProfileYearView
     * @summary Get given profile's yearly account receivable detail
     * @request GET:/profiles/{profileId}/yearViews
     */
    getProfileYearView: (
      hotelId: string,
      profileId: string,
      query?: {
        /** Currency of the Year View amounts. */
        currency?: string;
        hotelIds?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ProfileYearView, ExceptionDetailType>({
        path: `/profiles/${profileId}/yearViews`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  reopenInvoices = {
    /**
     * @description Use this API to unfreeze or reopen invoice for account receivable. <p><strong>OperationId:</strong>reopenInvoices</p>
     *
     * @tags AccountsReceivables
     * @name ReopenInvoices
     * @summary Reopen account receivable closed invoice
     * @request PUT:/reopenInvoices
     */
    reopenInvoices: (hotelId: string, invoices: Invoices, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/reopenInvoices`,
        method: 'PUT',
        body: invoices,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description This API facilitates clearing of cache in account receivable services. <p><strong>OperationId:</strong>deleteAccountsReceivableServiceCache</p>
     *
     * @tags AccountsReceivables
     * @name DeleteAccountsReceivableServiceCache
     * @summary Clears service level cache
     * @request DELETE:/services/accountReceivables/cache
     */
    deleteAccountsReceivableServiceCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/accountReceivables/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to check account receivable service status. <p><strong>OperationId:</strong>pingAccountsReceivableService</p>
     *
     * @tags AccountsReceivables
     * @name PingAccountsReceivableService
     * @summary Check account receivable service status
     * @request GET:/services/accountReceivables/status
     */
    pingAccountsReceivableService: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/accountReceivables/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  statements = {
    /**
     * @description Use this API to prepare statement for an AR account holders. It is typically prepared for billing purposes. <p><strong>OperationId:</strong>getARStatements</p>
     *
     * @tags AccountsReceivables
     * @name GetArStatements
     * @summary Get given profile's account receivable statements
     * @request GET:/statements
     */
    getArStatements: (
      hotelId: string,
      query?: {
        /** Property where the AR Account exists. This is required. */
        hotelId?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        profileId?: string[];
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        profileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        profileType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        accountID?: string[];
        /** Account Number for the AR Account. */
        accountNo?: string[];
        /** Account Name for the AR Account. */
        accountName?: string[];
        /** Flag to indicate if postings or adjustments can be made to the invoice. */
        canBeModified?: boolean[];
        /** Close date of the invoice. */
        closeDate?: string[];
        /** The Fiscal Bill number of this posting */
        fiscalBillNo?: string[];
        /** Date of Folio Generation. */
        folioDate?: string[];
        /** Folio Number. */
        folioNo?: number[];
        /**
         * The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status.
         * @uniqueItems true
         */
        folioStatus?: ('Deposit' | 'Void' | 'Ok' | 'Zero' | 'Compress' | 'Converted' | 'Internal')[];
        /** The name of the Folio Type used for the Folio Number sequence. */
        folioTypeName?: string[];
        /** Internal window ID which is unique to the reservation. This ID can only be used for reference. */
        internalFolioWindowID?: string[];
        /** Invoice No after the folio is generated. Same invoice number may be referred in multiple folios */
        invoiceNo?: number[];
        /** @uniqueItems true */
        invoiceType?: ('Normal' | 'Credit' | 'OldBalance' | 'PasserBy')[];
        /** Posting date of the invoice. */
        postingDate?: string[];
        /** Revenue date ID of the invoice. */
        revenueDate?: string[];
        /** Statementno of the invoice. */
        statementNo?: number[];
        /** Status of the invoice. */
        status?: string[];
        /** Transfer date of the invoice. */
        transferDate?: string[];
        /** Transaction code of the invoice. */
        invoiceTransactionCode?: string[];
        /** Transaction Date of the invoice. */
        transactionDate?: string[];
        /** Unique Transaction Identifier of the Invoice. */
        transactionNo?: number[];
        /** Property where the AR Account exists. This is required. */
        invoiceHotelIds?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        reservationId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        guestProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        guestProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        guestProfileType?: string;
        /** The Aging age of the invoice */
        age?: number[];
        /** Name of the Guest who consumed these transactions. */
        guestName?: string[];
        /** A monetary amount. */
        originalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        originalAmountCurrencyCode?: string;
        /** A monetary amount. */
        amount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currencyCode?: string;
        /** A monetary amount. */
        paymentsAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        paymentsCurrencyCode?: string;
        /** A monetary amount. */
        balanceAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        balanceCurrencyCode?: string;
        /** User-defined posting reference. */
        reference?: string[];
        /** User-defined posting remark. */
        remark?: string[];
        adjusted?: boolean[];
        parentInvoiceNo?: number[];
        compressed?: boolean[];
        compressedDate?: string[];
        transferredOut?: boolean[];
        transferredIn?: boolean[];
        marketDescription?: string;
        /** Property where the AR Account exists. This is required. */
        marketHotelId?: string;
        marketCode?: string;
        marketGroup?: string;
        roomClassDescription?: string;
        /** Property where the AR Account exists. This is required. */
        roomClassHotelId?: string;
        roomClassCode?: string;
        sourceDescription?: string;
        /** Property where the AR Account exists. This is required. */
        sourceHotelId?: string;
        sourceCode?: string;
        sourceGroup?: string;
        /** Cashier Id of the Cashier. */
        cashierId?: number;
        /** Cashier Name. */
        cashierName?: string;
        /** Property where the AR Account exists. This is required. */
        transactionHotelId?: string;
        /** Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. */
        printTrxReceipt?: boolean;
        /** Unique identifier for the Transaction code. */
        accountInvoiceTransactionCode?: string;
        /** Transaction codes info. */
        transactionDescription?: string;
        /** Category of the transaction code. */
        transactionGroup?: string;
        /** Sub category of the transaction code. */
        transactionSubGroup?: string;
        /** Unique Universal product code of the transaction code. */
        universalProductCode?: string;
        /** This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. */
        routingInstructionsId?: number;
        /** Unique code of the article. */
        articleCode?: string[];
        /** Property where the AR Account exists. This is required. */
        articleHotelIds?: string[];
        /** Indicates whether the article is inactive or not. */
        inactive?: boolean[];
        /** Display Order sequence. */
        orderSequence?: number[];
        /** Description of the article. */
        articleDescription?: string[];
        /** Transaction code to which the article belongs. */
        transactionCode?: string[];
        /** A monetary amount. */
        articleAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        articleCurrencyCode?: string;
        /** Indicates whether the article is available for post it. */
        availableForPostIt?: boolean;
        /**
         * Color configuration type. This color configuration provides a visual category of entities.
         * @uniqueItems true
         */
        color?:
          | 'Red'
          | 'DarkRed'
          | 'Green'
          | 'DarkGreen'
          | 'LightGreen'
          | 'Orange'
          | 'White'
          | 'Yellow'
          | 'DarkYellow'
          | 'Purple'
          | 'Brown'
          | 'Gray'
          | 'Aqua'
          | 'Chocolate'
          | 'Blue'
          | 'LightBlue'
          | 'DarkBlue'
          | 'Cyan'
          | 'DarkCyan'
          | 'Magenta'
          | 'DarkMagenta'
          | 'Black';
        /** Unique Universal product code of the article. */
        articleUniversalProductCode?: string[];
        /** Attach the credit card to profile. */
        attachCreditCardToProfile?: boolean;
        cardHolderName?: string;
        cardNumber?: string;
        cardNumberLast4Digits?: string;
        cardNumberMasked?: string;
        /**
         * Simple type for indicating if credit card number is tokenized.
         * @uniqueItems true
         */
        cardOrToken?: 'CardNumber' | 'Token';
        /**
         * This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
         * @uniqueItems true
         */
        cardType?:
          | 'Ab'
          | 'Am'
          | 'Ax'
          | 'Cb'
          | 'Dc'
          | 'Ds'
          | 'Dt'
          | 'Ec'
          | 'Er'
          | 'Jc'
          | 'Jl'
          | 'Mc'
          | 'Nb'
          | 'So'
          | 'St'
          | 'Sw'
          | 'Va'
          | 'Xy'
          | 'Zz'
          | 'Cp'
          | 'Cu';
        /**
         * Expiration date of the credit card
         * @format date
         */
        expirationDate?: string;
        expirationDateExpired?: boolean;
        /** Masked Expiration date of the credit card */
        expirationDateMasked?: string;
        /** @uniqueItems true */
        processing?: 'Eft' | 'Manual';
        swiped?: boolean;
        /** Indicates the user defined credit card type if credit card type from a defined list is not provided */
        userDefinedCardType?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        invoicePaymentCardId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        invoicePaymentCardIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        invoicePaymentCardIdType?: string;
        /** A monetary amount. */
        currentAuthorizedAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        currentAuthorizedAmountCurrencyCode?: string;
        /** A monetary amount. */
        approvalAmount?: number;
        /** Provides a currency code to reflect the currency in which an amount may be expressed. */
        approvalAmountCurrencyCode?: string;
        /** Defines the type of Linked profiles for a block. */
        type?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        addresseeProfileId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        addresseeProfileIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        addresseeProfileType?: string;
        /** Name for the profile attached to the block. */
        name?: string;
        /** City for the profile attached to the block. */
        city?: string;
        /** Phone for the profile attached to the block. */
        phone?: string;
        /** Flag to check Partail Transfer Allowed. */
        allowPartialTransferYn?: boolean[];
        /** Flag to check Invoice Statement is Printed. */
        printed?: boolean[];
        /** Invoice Statement Printed Date. */
        printedDate?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedFolioType?: string;
        /** Name of the Stored Folio. */
        storedFolioName?: string[];
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        storedDebitFolioId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        storedDebitFolioIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        storedDebitFolioType?: string;
        /** Name of the Stored Debit Folio. */
        storedDebitFolioName?: string[];
        /**
         * The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.)
         * @format date
         */
        balanceForwardDate?: string;
        /**
         * Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement.
         * @default "false"
         */
        inclFolios?: boolean;
        /**
         * Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES.
         * @default "false"
         */
        inclPrinted?: boolean;
        /**
         * Flag to indicate if Zero Balances Invoices are to be included in the Statement.
         * @default "false"
         */
        inclZero?: boolean;
        /**
         * The ending value of the date range.
         * @format date
         */
        filterEndDate?: string;
        /**
         * The starting value of the date range.
         * @format date
         */
        filterStartDate?: string;
        /** Text which will be printed on the Invoice. */
        statementText?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Statements, ExceptionDetailType>({
        path: `/statements`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  transferInvoicesAndPayments = {
    /**
     * @description Use this API to move all or a portion of an invoice or a payment from one AR account to another AR account <p><strong>OperationId:</strong>transferInvoicesAndPayments</p>
     *
     * @tags AccountsReceivables
     * @name TransferInvoicesAndPayments
     * @summary Move an invoice or a payment to another AR account
     * @request PUT:/transferInvoicesAndPayments
     */
    transferInvoicesAndPayments: (
      hotelId: string,
      invoicesAndPaymentsToTransfer: InvoicesAndPaymentsToTransfer,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/transferInvoicesAndPayments`,
        method: 'PUT',
        body: invoicesAndPaymentsToTransfer,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  transferPostings = {
    /**
     * @description Use this API to transfer postings from one account receivable invoice to another account receivable invoice. <p><strong>OperationId:</strong>transferPostings</p>
     *
     * @tags AccountsReceivables
     * @name TransferPostings
     * @summary Transfer postings
     * @request PUT:/transferPostings
     */
    transferPostings: (hotelId: string, transferPostings: TransferPostings, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/transferPostings`,
        method: 'PUT',
        body: transferPostings,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
