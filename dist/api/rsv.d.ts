/** Request to register call. Either creates a new call or updates an existing call. */
export interface RegisterCall {
    /** Call information including caller info, reservation info and comments. Refer to the Generic common types document for information on CallType. */
    call?: CallType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
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
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface DateTimeSpanType {
    /** @format date-time */
    startDateTime?: string;
    /** @format date-time */
    endDateTime?: string;
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
export type ReservationIdList = UniqueIDType[];
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
/** Response object to the Fetch Reservation Request operation. Based on the criteria, reservation information is returned. */
export interface ReservationsDetails {
    /** Collection of Reservations and their information. */
    reservations?: {
        /**
         * Contains details of the reservation.
         * @maxItems 4000
         */
        reservationInfo?: ReservationInfoType[];
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
    };
    masterInfoList?: MasterInfoType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
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
    /**
     * Awards type for the award type rate code.
     * @maxLength 2000
     */
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
export declare enum GuestHousekeepingServiceRequestType {
    DoNotDisturb = "DoNotDisturb",
    MakeUpRoom = "MakeUpRoom",
    NoStatusSelected = "NoStatusSelected"
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
    /** Family name, last name. */
    surname?: SurnameType;
    /**
     * Alternate family name, last name.
     * @minLength 0
     * @maxLength 40
     */
    alternateSurname?: string;
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
    /** Contains information regarding the last stay of this guest. */
    guestLastStayInformation?: GuestLastStayInfoType;
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
    /** When true indicates that only profiles with city will be fetched. */
    excludeNoCity?: boolean;
}
/** Provides information about guest's anonymization status. */
export interface AnonymizationType {
    /** Status of anonymization such as Requested or Anonymized. */
    anonymizationStatus?: AnonymizationStatusType;
}
/** Guest has been anonymized. */
export declare enum AnonymizationStatusType {
    Requested = "Requested",
    Anonymized = "Anonymized"
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
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];
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
export declare enum NameTypeType {
    Guest = "Guest",
    Company = "Company",
    Agent = "Agent",
    Contact = "Contact",
    Source = "Source",
    Group = "Group",
    Employee = "Employee",
    Hotel = "Hotel",
    Purge = "Purge"
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
    /**
     * Attached profile name
     * @maxLength 2000
     */
    name?: string;
    /** Collection of unique profile identifiers */
    profileIdList?: ProfileIdList;
    reservationProfileType?: ResProfileTypeType;
}
export declare enum ResProfileTypeType {
    Guest = "Guest",
    Company = "Company",
    Group = "Group",
    TravelAgent = "TravelAgent",
    Source = "Source",
    ReservationContact = "ReservationContact",
    BillingContact = "BillingContact",
    Addressee = "Addressee"
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
export declare enum CardTypeType {
    Ab = "Ab",
    Am = "Am",
    Ax = "Ax",
    Cb = "Cb",
    Dc = "Dc",
    Ds = "Ds",
    Dt = "Dt",
    Ec = "Ec",
    Er = "Er",
    Jc = "Jc",
    Jl = "Jl",
    Mc = "Mc",
    Nb = "Nb",
    So = "So",
    St = "St",
    Sw = "Sw",
    Va = "Va",
    Xy = "Xy",
    Zz = "Zz",
    Cp = "Cp",
    Cu = "Cu"
}
export declare enum CardProcessingType {
    Eft = "Eft",
    Manual = "Manual"
}
/** Simple type for indicating if credit card number is tokenized. */
export declare enum CardNumberTypeType {
    CardNumber = "CardNumber",
    Token = "Token"
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
export declare enum HousekeepingRoomStatusType {
    Clean = "Clean",
    Dirty = "Dirty",
    Pickup = "Pickup",
    Inspected = "Inspected",
    OutOfOrder = "OutOfOrder",
    OutOfService = "OutOfService"
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
    /** Indicates whether guest wants turndown facility or not. */
    turndownRequested?: boolean;
    /** Expected Start Time for housekeeping task(s). */
    expectedServiceTime?: string;
    /** Current room status. Current room status is populated only if room is assigned to the reservation and reservation is due in or in house. */
    roomStatus?: HousekeepingRoomStatusType;
}
/** Cashiering Information for the reservation. */
export interface ResCashieringType {
    /** Revenues and Balances Amount summary for the reservation. */
    revenuesAndBalances?: ResRevenueBalanceType;
    /** Billing privileges set on the reservation. */
    billingPrivileges?: BillingPrivilegesType;
    /** Provides information about the Tax Type. */
    taxType?: ReservationTaxTypeInfo;
    /** This stores the information for Bed Tax Reporting. Mainly used in Maldives. */
    bedTaxReporting?: BedTaxReportingType;
    /** Information regarding comp accounting on the reservation. */
    compAccounting?: ResCompAccountingType;
    /** Information regarding the selected preconfigured routing instruction on the reservation. */
    reservationPreConfiguredRoutingInstruction?: ResPreConfiguredRoutingInstrType;
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
}
/** Reservation Deposit Type. */
export interface ReservationDepositType {
    /** Deposit Amount Paid. */
    amountPaid?: number;
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
export declare enum ReservationAllowedActionType {
    Cancel = "Cancel",
    Move = "Move",
    PreCharge = "PreCharge",
    PostCharge = "PostCharge",
    FacilitySchedule = "FacilitySchedule",
    Upsell = "Upsell",
    PreCheckIn = "PreCheckIn",
    PostToNoShowCancel = "PostToNoShowCancel",
    NoShow = "NoShow",
    NameChange = "NameChange",
    Discount = "Discount",
    EnrollToPrimaryMembership = "EnrollToPrimaryMembership",
    EnrollInProgress = "EnrollInProgress"
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
export declare enum CommunicationStatusType {
    Pending = "Pending",
    Completed = "Completed",
    Failed = "Failed",
    Sent = "Sent",
    Received = "Received",
    Cancelled = "Cancelled",
    PendingAvailability = "PendingAvailability"
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
export declare enum PMSResStatusType {
    Reserved = "Reserved",
    Requested = "Requested",
    NoShow = "NoShow",
    Cancelled = "Cancelled",
    InHouse = "InHouse",
    CheckedOut = "CheckedOut",
    Waitlisted = "Waitlisted",
    DueIn = "DueIn",
    DueOut = "DueOut",
    Walkin = "Walkin",
    PendingCheckout = "PendingCheckout"
}
/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
export declare enum ResAccessRestrictionType {
    Change = "Change",
    Cancel = "Cancel",
    ChangeOrCancel = "ChangeOrCancel"
}
export declare enum CommissionPayoutToType {
    TravelAgent = "TravelAgent",
    Source = "Source",
    TravelAgentSource = "TravelAgentSource",
    None = "None"
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
export declare enum MasterType {
    Country = "Country",
    State = "State",
    AddressType = "AddressType",
    PhoneType = "PhoneType",
    RateCategory = "RateCategory",
    CalculationRule = "CalculationRule",
    PostingRythym = "PostingRythym",
    BillingInstruction = "BillingInstruction",
    TransactionCode = "TransactionCode",
    DisplaySet = "DisplaySet",
    MailingActions = "MailingActions",
    DistanceType = "DistanceType",
    District = "District",
    Territory = "Territory",
    FiscalRegion = "FiscalRegion",
    InventoryItem = "InventoryItem",
    Package = "Package",
    RoomFeaturePreference = "RoomFeaturePreference",
    SpecialPreference = "SpecialPreference",
    Promotion = "Promotion",
    Department = "Department",
    ReservationPreference = "ReservationPreference",
    FacilityTask = "FacilityTask",
    RoomType = "RoomType",
    RateCode = "RateCode",
    OutOfOrderReason = "OutOfOrderReason",
    Block = "Block"
}
/** Request object to create reservations. Includes instructions for information which needs to be returned. */
export interface CreateReservation {
    /** Collection of Reservations which have to be created. */
    reservations?: HotelReservationsType;
    /** Instruction on what has to be fetched. Refer to Generic common types document. */
    fetchInstructions?: ReservationInstructionType[];
    /** Collection of Reservations which have to be created. */
    reservationsInstructionsType?: ReservationsInstructionsType;
    /** Channel specific information to be received in case the reservation is being created through a channel. */
    channelInformation?: ChannelResvRQInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
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
/** The Reservation class contains the current reservation being created or altered. */
export interface HotelReservationType {
    /** Used to provide PMS and/or CRS identifiers. */
    reservationIdList?: ReservationIdList;
    /** External Reference information for Reservation. */
    externalReferences?: ExternalReferencesType;
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
    /** Key information about the block for this reservation. */
    reservationBlock?: ReservationBlockType;
    /**
     * Information about the Room Rate Combination.
     * @minLength 0
     * @maxLength 2000
     */
    roomRateInfo?: string;
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
    /** If true, indicates if tax is included in the rate code. */
    taxIncluded?: boolean;
}
/** The total amount charged for the service including additional amounts and fees. */
export interface TotalType {
    /** A collection of taxes. */
    taxes?: TaxesType;
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
export declare enum AmountDeterminationType {
    Inclusive = "Inclusive",
    Exclusive = "Exclusive"
}
/** Individual rate amount. */
export interface RatesType {
    /**
     * The Rate contains a collection of elements that define the amount of the rate, associated fees, additional occupant amounts. Taxes can be broken out or included within the various amounts. A currency can be associated to each amount.
     * @maxItems 4000
     */
    rate?: AmountType[];
}
/** Base charge and additional charges related to a room that includes such things as additional guest amounts, cancel fees, etc. Also includes Discount percentages, total amount, and the rate description. */
export interface AmountType {
    /** The base amount charged for the accommodation or service per unit of time (ex: Nightly, Weekly, etc). If TaxInclusive is set to True, then taxes are included in the base amount. Note that any additional charges should itemized in the other elements. */
    base?: TotalType;
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
export declare enum ShareDistributionInstructionType {
    Full = "Full",
    Entire = "Entire",
    Split = "Split",
    CustomSplit = "CustomSplit"
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
export interface ReservationProfileType {
    /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as id. */
    profileIdList?: ProfileIdList;
    /** Provides detailed information regarding either a company or a customer profile. */
    profile?: ProfileType;
    reservationProfileType?: ResProfileTypeType;
}
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
    /** Contains cashiering related details for the profile */
    cashiering?: ProfileCashieringType;
    /**
     * Contains commission related details for the profile.
     * @maxItems 4000
     */
    commissionInfoList?: ProfileCommissionType[];
    /** Collections of user defined fields. */
    userDefinedFields?: UserDefinedFieldsType;
    /** E-Certificate assosiated with the profile. */
    eCertificates?: ECertificatesType;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @minLength 0
     * @maxLength 20
     */
    eligibleForFiscalFolio?: string;
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
     * Degree or honors (e.g., Ph.D., M.D.)
     * @minLength 0
     * @maxLength 80
     */
    nameTitle?: string;
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
export declare enum PersonNameTypeType {
    Primary = "Primary",
    Alternate = "Alternate",
    Incognito = "Incognito",
    External = "External",
    Phonetic = "Phonetic"
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
    /** The image set enumerated style. */
    imageStyle?: ImageStyleType;
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
}
/** An enumeration of image styles. */
export declare enum ImageStyleType {
    Full = "Full",
    Thumbnail = "Thumbnail",
    Icon = "Icon",
    Square = "Square",
    Banner = "Banner",
    Button = "Button",
    Lowres = "Lowres",
    Highres = "Highres"
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
export declare enum ProfileDeliveryModuleType {
    EfolioExport = "EfolioExport"
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
}
/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface ParagraphType {
    /** Formatted text content. */
    text?: FormattedTextTextType;
}
/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
export declare enum MembershipEarningPreferenceType {
    Points = "Points",
    Miles = "Miles"
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
export declare enum TierAdministrationType {
    Disabled = "Disabled",
    NoUpgrade = "NoUpgrade"
}
/** Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace. */
export declare enum DowngradeType {
    Grace = "Grace",
    Never = "Never",
    Period = "Period"
}
/** Request to re issue a new card. */
export declare enum CardReIssueType {
    Pending = "Pending",
    NotApplicable = "NotApplicable",
    Requested = "Requested"
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
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];
export declare enum ProfileStatusType {
    Active = "Active",
    Inactive = "Inactive"
}
/** The types of Profile handled by the web service. */
export declare enum ProfileTypeType {
    Guest = "Guest",
    Agent = "Agent",
    Company = "Company",
    Group = "Group",
    Source = "Source",
    Employee = "Employee",
    Hotel = "Hotel",
    Vendor = "Vendor",
    Contact = "Contact",
    Purge = "Purge",
    BusinessHeader = "BusinessHeader",
    BillingAccount = "BillingAccount",
    Activity = "Activity",
    Potential = "Potential",
    Account = "Account"
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
export type MasterAccountInfoType = object;
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
     * Used to hold last room information for the profile.
     * @maxLength 2000
     */
    lastRoom?: string;
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
/** Contains cashiering related details for the profile */
export interface ProfileCashieringType {
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
export declare enum CommissionPaymentMethods {
    Cent = "Cent",
    Eft = "Eft",
    Chk = "Chk"
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
 * List of e-certificates for the profile.
 * @maxItems 4000
 */
export type ECertificatesType = ECertificateType[];
/** E-Certificates details. */
export interface ECertificateType {
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
    /** NameId. */
    profileId?: ProfileId;
    /** E-Certificates details. */
    consumptionDetail?: ECertificateConsumptionType;
    /** Status of the certificate. */
    status?: ECertificateStatusType;
    /** Print status of the certificate. */
    printed?: boolean;
    /** Source of e-certificate. */
    source?: ECertificateIssueSourceType;
    /**
     * Date when certificate was issued.
     * @format date
     * @maxLength 8
     */
    issueDate?: string;
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
export declare enum ECertificateScopeType {
    Global = "Global",
    Hotel = "Hotel",
    MultiHotel = "MultiHotel"
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
    /** Any reference like reservation no etc against which the certificate was consumed. */
    referenceId?: UniqueIDType;
}
/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
export declare enum ECertificateConsumeSourceType {
    Central = "Central",
    Web = "Web",
    Hotel = "Hotel"
}
/** Indicates that OPERA E-Certificate is reserved. */
export declare enum ECertificateStatusType {
    Cancelled = "Cancelled",
    Consumed = "Consumed",
    Deleted = "Deleted",
    Expired = "Expired",
    Issued = "Issued",
    Reserved = "Reserved"
}
/** Indicates that OPERA E-Certificate is issued by external system. */
export declare enum ECertificateIssueSourceType {
    Opera = "Opera",
    Web = "Web",
    Interface = "Interface"
}
/** Define the search criteria for retrieving room ownership records */
export interface RoomOwnershipType {
    /** Contract ID of the room ownership record. */
    contractId?: number;
    /**
     * Contract number for room owner.
     * @maxLength 2000
     */
    contractNumber?: string;
    /**
     * Unit for room owner.
     * @maxLength 2000
     */
    unit?: string;
    /**
     * Room Category of the room ownership record.
     * @maxLength 2000
     */
    roomCategory?: string;
    /**
     * Room Type of the room ownership record.
     * @maxLength 2000
     */
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
    /**
     * Status of the room ownership record.
     * @maxLength 2000
     */
    status?: string;
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
export declare enum PrimaryShareTypeType {
    Primary = "Primary",
    NonPrimary = "NonPrimary"
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
    /**
     * Entry Date into the country. (Croatian Requirements).
     * @maxLength 2000
     */
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
/** Group to which the Track It items belong. */
export declare enum TrackItGroup {
    Parcel = "Parcel",
    Valet = "Valet",
    Baggage = "Baggage",
    Lost = "Lost"
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
export declare enum ActionStatusType {
    Open = "Open",
    Closed = "Closed"
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
    /** @maxLength 2000 */
    terminal?: string;
    /** @maxLength 2000 */
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
    /** @maxLength 2000 */
    dbDateFormat?: string;
    /** @maxLength 2000 */
    oracleDateFormat?: string;
    /** @maxLength 2000 */
    oracleTimeFormat?: string;
    /** @maxLength 2000 */
    javaDateFormat?: string;
    /** @maxLength 2000 */
    javaTimeFormat?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /** @maxLength 2000 */
    currencyFormat?: string;
    /** @maxLength 2000 */
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
    /**
     * Name of the parameter.
     * @maxLength 2000
     */
    parameterName?: string;
    /**
     * Value of the parameter.
     * @maxLength 2000
     */
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
    /** @maxLength 2000 */
    logUserName?: string;
    /** @format date-time */
    logDate?: string;
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
    /**
     * The Locator Text for the guest.
     * @maxLength 2000
     */
    locatorText?: string;
    /**
     * Date and time of the Guest Locator.
     * @format date-time
     */
    locatorOn?: string;
    /**
     * User that entered this Guest Locator.
     * @maxLength 2000
     */
    locatorBy?: string;
    /** Unique Id of the Guest Locator ( Locator Id ) */
    locatorId?: UniqueIDType;
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
 * Service request.
 * @maxItems 4000
 */
export type ServiceRequests = ServiceRequest[];
/** Service request. */
export interface ServiceRequest {
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
}
export declare enum ServiceRequestStatusType {
    Open = "Open",
    PendingFollowUp = "PendingFollowUp",
    Closed = "Closed",
    DoNotDisturb = "DoNotDisturb",
    MakeUpRoom = "MakeUpRoom"
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
    /**
     * The Type of the activity. Eg: SPA, Golf etc.
     * @maxLength 2000
     */
    type?: string;
    /**
     * The Location where the activity takes place. Eg: Salon
     * @maxLength 2000
     */
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
    /**
     * Any Block code associated with the activity if its a Group booking.
     * @maxLength 2000
     */
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
    /**
     * The URL link to launch the Activity Reservation System to view or edit full details of this activity.
     * @maxLength 2000
     */
    uRLLink?: string;
    /**
     * Vendor extensions to the activity record.
     * @maxItems 4000
     */
    extensions?: string[];
    /**
     * Activity reservation status. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE.
     * @maxLength 2000
     */
    status?: string;
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
    /** The unique ID for the Interface. */
    interfaceId?: UniqueIDType;
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
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
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
    /**
     * Description of the award/certificate.
     * @maxLength 2000
     */
    description?: string;
    /**
     * Certificate No.
     * @minLength 0
     * @maxLength 20
     */
    certificateNo?: string;
    /**
     * Membership No.
     * @maxLength 2000
     */
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
    /**
     * MRW : From MRW MAN:Entered manually.
     * @maxLength 2000
     */
    sourceType?: string;
    /** No. of points used to order this award. */
    points?: number;
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
export declare enum AwardKindType {
    Paper = "Paper",
    ECertificate = "ECertificate"
}
/** Certificate is incentive. */
export declare enum ReservationCertificateType {
    Reward = "Reward",
    Incentive = "Incentive"
}
/** Point Saver reward. */
export declare enum RewardCertificateType {
    Regular = "Regular",
    StayAnytime = "StayAnytime",
    PointSaver = "PointSaver"
}
/** Indicates that certificate is in use. */
export declare enum AwardStatusType {
    Available = "Available",
    NotAvailable = "NotAvailable",
    InUse = "InUse"
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
    internalId?: number;
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
export interface PackageCodeHeaderType {
    /** Package code header primary details. */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /** Package code header transaction information. */
    transactionDetails?: ConfigPackageTransactionType;
    /** Package code posting attributes. */
    postingAttributes?: ConfigPostingAttributesType;
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
    /**
     * The custom formula used for this package, if any.
     * @minLength 0
     * @maxLength 2000
     */
    formula?: string;
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
export declare enum PostingRhythmType {
    EveryNight = "EveryNight",
    ArrivalNight = "ArrivalNight",
    EveryXNightsStartingNightY = "EveryXNightsStartingNightY",
    CertainNightsOfTheWeek = "CertainNightsOfTheWeek",
    LastNight = "LastNight",
    EveryNightExceptArrivalNight = "EveryNightExceptArrivalNight",
    EveryNightExceptLast = "EveryNightExceptLast",
    EveryNightExceptFirstAndLast = "EveryNightExceptFirstAndLast",
    CustomStaySchedule = "CustomStaySchedule",
    CustomNightSchedule = "CustomNightSchedule",
    FloatingAllowancePerStay = "FloatingAllowancePerStay",
    TicketPosting = "TicketPosting"
}
/** Simple type for package caluculation rules. */
export declare enum PackageCalculationRuleType {
    FlatRate = "FlatRate",
    PerPerson = "PerPerson",
    PerAdult = "PerAdult",
    PerChild = "PerChild",
    PerRoom = "PerRoom"
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
/** Sources of Products */
export declare enum ProductSourceType {
    Reservation = "Reservation",
    RateHeader = "RateHeader",
    RateDetail = "RateDetail"
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
    /** Specifies Items and its attributes. When used for data manipulation for Items setup on reservation, etc only code is considered. Other Attributes are for used to provide information during fetch operation. */
    item?: ItemInfoType;
    /** Number of items booked. */
    quantity?: number;
    /** Begin and end date and time of the items applicability. */
    timeSpan?: DateRangeType;
    /** If exists specifies whether the item is setup due to a Rate Plan, Package or a Block. */
    source?: ResInventoryItemSourceType;
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
    packageInternalId?: number;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockId {
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
/** Detailed information of the memberships. */
export interface MembershipType {
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
        /** Authorizer Information */
        compAccountingInfo?: CompAccountingType;
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
/** Authorizer Information */
export interface CompAccountingType {
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
    /**
     * AR Account Number of the authorizer
     * @minLength 0
     * @maxLength 20
     */
    aRNumber?: string;
    /**
     * The Comp Type for this Account. Used when using the Comp types functionality
     * @minLength 0
     * @maxLength 20
     */
    compTypeCode?: string;
    /**
     * The coupon or voucher number used by the external gaming system to track postings made to this routing.
     * @minLength 0
     * @maxLength 30
     */
    compVoucherNo?: string;
    /** Arrival date range for comp routing */
    dateRange?: DateRangeType;
    /**
     * Membership number
     * @minLength 0
     * @maxLength 100
     */
    membershipId?: string;
    /** Unique Id of membership */
    membershipIdNo?: number;
    /**
     * Name displayed on the membership card
     * @minLength 0
     * @maxLength 80
     */
    membershipNameOnCard?: string;
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
export declare enum CompRoutingStatusType {
    Request = "Request",
    Comp = "Comp",
    Declined = "Declined"
}
/** A collection of reservation deposit and cancellation policies. */
export interface ReservationPoliciesType {
    /** A collection of reservation cancellation policies.. */
    cancellationPolicies?: ResCancellationPoliciesType;
    /** A collection of reservation deposit policies. */
    depositPolicies?: ResDepositPoliciesType;
    /** A list of Ids for reservation. */
    reservationIdList?: UniqueIDListType;
    /**
     * Name identifier for the reservation.
     * @maxLength 2000
     */
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
export declare enum DepositCancelRevenueType {
    Rooms = "Rooms",
    Catering = "Catering",
    All = "All"
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
export declare enum PolicyBasisTypeType {
    FlatAmount = "FlatAmount",
    Percentage = "Percentage",
    Nights = "Nights",
    NightPercentage = "NightPercentage",
    FullAmount = "FullAmount"
}
/** Indicates deadline offset unit type. */
export declare enum OffsetUnitType {
    Year = "Year",
    Month = "Month",
    Day = "Day",
    Hour = "Hour"
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
/** Linked Reservations. */
export interface LinkedReservationsInfoType {
    /** @maxItems 4000 */
    reservationInfo?: LinkedReservationInfoType[];
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
export declare enum LinkedReservationType {
    Linked = "Linked",
    Shared = "Shared",
    Default = "Default"
}
/** Information regarding catering event and catering revenue type associated to the reservation. */
export interface CateringResInfoType {
    /** Unique ID on a catering event associated to the reservation. */
    eventId?: EventId;
    /**
     * Catering revenue type associated to the reservation.
     * @maxLength 2000
     */
    revenueType?: string;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface EventId {
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
    /**
     * The alert message.
     * @maxLength 2000
     */
    description?: string;
    /** Notify by showing the alert on the screen */
    screenNotification?: boolean;
    /** Notify by sending the message to the printer. */
    printerNotification?: boolean;
    /**
     * Printer used to print the alert notification.
     * @maxLength 2000
     */
    printerName?: string;
    /** The module id of the report. This is used to printer the alert. */
    reportId?: UniqueIDType;
    /**
     * Report name of the report type.
     * @maxLength 2000
     */
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
export declare enum AlertAreaType {
    CheckIn = "CheckIn",
    CheckOut = "CheckOut",
    Reservation = "Reservation",
    Billing = "Billing",
    InHouse = "InHouse"
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
    /**
     * Additional alert information regarding the membership of the guest.
     * @maxLength 2000
     */
    comments?: string;
    /**
     * Additional alert information regarding the guest.
     * @maxLength 2000
     */
    preference?: string;
    /**
     * Additional mandatory alert information regarding the guest preferences.
     * @maxLength 2000
     */
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
    /**
     * Indicates the date of birth as masked.
     * @maxLength 2000
     */
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
export declare enum WelcomeOfferOptionsType {
    BonusPoints = "BonusPoints",
    Ecoupons = "Ecoupons",
    Items = "Items",
    PostIt = "PostIt",
    NotSelected = "NotSelected"
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
    /**
     * The information this trace contains.
     * @maxLength 2000
     */
    traceText?: string;
    /** Information regarding the status of the trace */
    resolveInfo?: TraceResolveType;
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
    /**
     * User that entered this trace.
     * @maxLength 2000
     */
    enteredBy?: string;
}
export interface TraceResolveType {
    /**
     * Date the trace was resolved
     * @format date
     * @maxLength 8
     */
    resolvedOn?: string;
    /**
     * User that resolved the trace
     * @maxLength 2000
     */
    resolvedBy?: string;
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
export declare enum ConfDeliveryMethod {
    Print = "Print",
    Email = "Email",
    Fax = "Fax",
    Text = "Text",
    NotConfigured = "NotConfigured"
}
export declare enum SentConfirmationStatus {
    Pending = "Pending",
    Succeeded = "Succeeded",
    Failed = "Failed"
}
export interface ConfirmationStyle {
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
    /**
     * Name of the confirmation letter style.
     * @maxLength 2000
     */
    style?: string;
}
/**
 * Holds call information.
 * @maxItems 4000
 */
export type CallHistoryType = CallType[];
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
export declare enum FixedChargeFrequencyType {
    O = "O",
    D = "D",
    W = "W",
    M = "M",
    Q = "Q",
    Y = "Y"
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
export declare enum TypeOfMessageType {
    Tm = "Tm",
    Vm = "Vm"
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
export declare enum MessageStatusType {
    Mr = "Mr",
    Nr = "Nr"
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
export declare enum TransactionDiversionRuleLevelType {
    Property = "Property",
    Reservation = "Reservation"
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
export declare enum EntityType {
    ThresholdCount = "ThresholdCount",
    ThresholdQuantity = "ThresholdQuantity",
    ThresholdMinutes = "ThresholdMinutes"
}
/** Minimum required and complimentary values are applicable Per Stay. */
export declare enum ScopeType {
    PerDay = "PerDay",
    PerStay = "PerStay"
}
/** The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation */
export declare enum TransactionDiversionRuleTypeType {
    Vip = "Vip",
    Membership = "Membership"
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
export declare enum RequestActionType {
    Create = "Create",
    Remove = "Remove",
    Query = "Query"
}
/** Enumeration of the different type of Ecertificate. */
export declare enum ECertificateClassficationType {
    Promotion = "Promotion",
    Award = "Award",
    Benefit = "Benefit",
    Other = "Other"
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
export declare enum NameValueDataTypeType {
    String = "String",
    Number = "Number",
    Date = "Date",
    Datetime = "Datetime",
    Time = "Time",
    Integer = "Integer"
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
export declare enum NameValueModuleType {
    Reservation = "Reservation",
    Folio = "Folio",
    Profile = "Profile",
    Fintrix = "Fintrix"
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
export declare enum ExclusionReasonType {
    NotConfigured = "NotConfigured",
    CustomChargeProcessed = "CustomChargeProcessed"
}
/** Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. */
export declare enum ReservationInstructionType {
    Reservation = "Reservation",
    Comments = "Comments",
    GuestComments = "GuestComments",
    Packages = "Packages",
    InventoryItems = "InventoryItems",
    ReservationPaymentMethods = "ReservationPaymentMethods",
    RoutingInstructions = "RoutingInstructions",
    Preferences = "Preferences",
    Memberships = "Memberships",
    Alerts = "Alerts",
    Traces = "Traces",
    ConfirmationLetters = "ConfirmationLetters",
    CallHistory = "CallHistory",
    FixedCharges = "FixedCharges",
    GuestMessages = "GuestMessages",
    ReservationPolicies = "ReservationPolicies",
    Indicators = "Indicators",
    LinkedReservations = "LinkedReservations",
    RevenuesAndBalances = "RevenuesAndBalances",
    GuestLastStay = "GuestLastStay",
    ECoupons = "ECoupons",
    TrackItItems = "TrackItItems",
    TotalCostOfStay = "TotalCostOfStay",
    ReservationAwards = "ReservationAwards",
    WebRegistrationCards = "WebRegistrationCards",
    ServiceRequests = "ServiceRequests",
    ReservationActivities = "ReservationActivities",
    ScheduledActivities = "ScheduledActivities",
    PrepaidCards = "PrepaidCards",
    Shares = "Shares",
    Attachments = "Attachments",
    Locators = "Locators",
    ProfileAwards = "ProfileAwards",
    TransactionDiversions = "TransactionDiversions",
    Tickets = "Tickets",
    GuestMemberships = "GuestMemberships",
    ECertificates = "ECertificates",
    UpsellInfo = "UpsellInfo",
    RoomAssignedByAI = "RoomAssignedByAI",
    CustomNameValue = "CustomNameValue",
    CustomChargeExemptions = "CustomChargeExemptions"
}
/** Instructions for a reservation. */
export interface ReservationsInstructionsType {
    /** Instructions for linked reservations. */
    linkReservations?: LinkReservationInstructionType;
    /** Instruction to assign rate on each share reservation. This can be FULL: Full Rate for each Sharer. SPLIT: Split the Rate amount between Sharer Reservations. ENTIRE: This Sharer provided as ShareToReservationID will get the total amount of the rate code for all the Sharer Reservations. */
    shareReservations?: ShareReservationInstructionType;
}
/** Instructions for a linked reservation. */
export interface LinkReservationInstructionType {
    /** Parent reservation id where reservations to be linked. */
    linkToReservationId?: UniqueIDType;
    /** Child reservation id where reservations to be linked. */
    linkFromReservationId?: UniqueIDType;
    link?: boolean;
}
export interface ShareReservationInstructionType {
    /** Effective rates to apply on share reservations. */
    effectiveRates?: EffectiveRatesType;
    /** Payment Method to be applied to any sharing reservation that has a reservation type that requires a credit card and does not have a credit card. */
    paymentMethod?: ReservationPaymentMethodType;
    /** Instruction to assign rate on each share reservation. This can be FULL: Full Rate for each Sharer. SPLIT: Split the Rate amount between Sharer Reservations. ENTIRE: This Sharer provided as ShareToReservationID will get the total amount of the rate code for all the Sharer Reservations. */
    rateAmountShare?: ShareDistributionInstructionType;
    /** Indicates the share instruction to process from the reservation request object. */
    shareType?: ShareTypeType;
    /** Indicates whether fixed rate will be applied to all shares. */
    fixedRate?: boolean;
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
/** Indicates that only profile information will be retrieved from the reservation request object and the rest will be provided from the master reservation. */
export declare enum ShareTypeType {
    Reservation = "Reservation",
    Profile = "Profile"
}
/** Holds all the channel reservation specific information. */
export interface ChannelResvRQInfoType {
    /** Holds channel details such as type, code */
    channelSummaryInfo?: ChannelSummaryInfoType;
    /** Holds type of action to be taken on a channel reservation. */
    channelResvAction?: ChannelResvActionType;
    /** This attribute indicates true if the message is resubmitted for processing. */
    retransmissionIndicator?: boolean;
}
/** Depicts channel information such as the type and code. */
export interface ChannelSummaryInfoType {
    bookingChannel?: BookingChannelType;
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
}
/** Cancel a reservation in OPERA through a channel. The cancellation of the reservation is committed in OPERA at once. There is no session reservation involved. */
export declare enum ChannelResvActionType {
    Book = "Book",
    Hold = "Hold",
    Initiate = "Initiate",
    Ignore = "Ignore",
    Modify = "Modify",
    Commit = "Commit",
    CommitOverrideEdits = "CommitOverrideEdits",
    Create = "Create",
    Change = "Change",
    Cancel = "Cancel"
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id */
export interface CombineShareReservations {
    /** Criteria required to combine the reservations. */
    criteria?: CombineShareReservationsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Record Type for Combining Share Reservations. */
export interface CombineShareReservationsType {
    /** Instructions for overriding checks during combine share operation. */
    combineShareInstruction?: CombineShareInstructionType;
    /**
     * Opera Hotel/Resort code for the Combine Share Reservations request.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Collection of unique reservation identifiers. Currently supported are Reservation Id and/or Confirmation Number which may include the leg number. */
    shareToReservation?: {
        /** Unique Id that references an object uniquely in the system. */
        reservationIdList?: ReservationIdList;
        /** Collection of room rate information on a daily basis. */
        dailyRates?: DailyRatesType;
    };
    /** Id of an existing reservation which is going to be combined. */
    existingReservationId?: UniqueIDType;
    /** Details for creating a new reservations from profiles which will be combined to create a sharer. */
    newReservations?: CombineShareFromProfilesType;
    /** Collection of fetch reservation instructions to be returned. */
    fetchInstructions?: {
        /**
         * Instruction on what information has to be fetched.
         * @maxItems 4000
         */
        fetchInstruction?: ReservationInstructionType[];
        /** After the combine shares operation, return the new list of share reservations. */
        returnShareReservations?: boolean;
    };
}
/** Instructions for overriding checks during combine share operation. */
export interface CombineShareInstructionType {
    /** Defines rate change instruction. */
    rateChangeInstruction?: RateChangeInstructionType;
    /** Instruction to apply new effective rates to the reservations. */
    effectiveRates?: EffectiveRatesType;
    /** Contains user information for the override action performed while booking a reservation. */
    overrideInstruction?: OverrideInstructionType;
    /** Instruction to distribute rate on each share reservation. */
    distributionType?: ShareDistributionInstructionType;
    /** Indicate to override the room inventory check if applicable. */
    overrideInventoryCheck?: boolean;
    /** If the joining sharer is checked in, do a room move to the main sharer's room. */
    roomMoveCheckedinResv?: boolean;
    /** Indicate to override the check on maximum room occupancy if applicable. */
    overrideMaxOccupancyCheck?: boolean;
}
/** Defines override rate type. */
export interface RateChangeInstructionType {
    /** Discount percentage and/or amount, code and textual reason for discount. */
    discount?: DiscountType;
    /** Rate change type. */
    rateChange?: RateChangeType;
}
/** Simple type for rate change type. */
export declare enum RateChangeType {
    Verify = "Verify",
    OldRate = "OldRate",
    NewRate = "NewRate"
}
/**
 * Defines room rate information on a daily basis.
 * @maxItems 4000
 */
export type DailyRatesType = DailyRateType[];
/** The total amount charged for the service including additional amounts and fees. */
export interface DailyRateType {
    /** A collection of taxes. */
    taxes?: TaxesType;
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
    /** Room rate discount percentage or amount, code and textual reason for discount. */
    discount?: DiscountType;
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
 * Type for the profile information to create a new share reservation. This is used to create sharers from profiles.
 * @maxItems 4000
 */
export type CombineShareFromProfilesType = CombineShareFromProfileType[];
/** Type for the profile information to create a new share reservation. This is used to create sharers from profiles. */
export interface CombineShareFromProfileType {
    /** Collection of unique reservation identifiers. Currently supported are Reservation Id and/or Confirmation Number which may include the leg number. */
    newSharerId?: UniqueIDType;
    /** The number of guests information to create the share reservation. */
    guestCounts?: GuestCountsType;
    /** Defines single payment method for the share reservation. */
    reservationPaymentMethod?: ReservationPaymentMethodType;
    /** Defines collection of payment methods for the share reservation. */
    reservationPaymentMethods?: CopyReservationPaymentMethodsType;
    /** Guarantee code information of the reservation. */
    guarantee?: ResGuaranteeType;
    /** Collection of room rate information on a daily basis. */
    dailyRates?: DailyRatesType;
    /** Stay arrival and departure dates. */
    timeSpan?: TimeSpanType;
}
/** A collection of Reservation Payment Methods. */
export interface CopyReservationPaymentMethodsType {
    /**
     * Defines reservation payment methods.
     * @maxItems 4000
     */
    reservationPaymentMethod?: ReservationPaymentMethodType[];
    /** Indicates copying of credit card payment methods. This flag will only be applied to payment method windows not sent in the collection. */
    copyCreditCards?: boolean;
    /** Indicates copying of other payment methods. This flag will only be applied to payment method windows not sent in the collection. */
    copyOthers?: boolean;
}
/** Response for the combine share reservation request. Based on the request, this will return all sharer reservations including the request reservation. */
export interface CombineShareReservationsDetails {
    /** Collection of guests who share this reservation. Reservation information will only include the Room Information and Guest Information. */
    shareReservations?: HotelReservationsType;
    /** Collection of old room rate information on a daily basis. */
    oldRates?: DailyRatesType;
    /** Collection of new room rate information on a daily basis. */
    newRates?: DailyRatesType;
    /** Collection of effective rates per stay dates per guest to be applied on reservation including its shares. */
    effectiveRates?: EffectiveRatesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for the request for the reservation user activity log. */
export interface ActivityLog {
    /** Collection of the list of Activities(Log) requested. */
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
    /** @maxLength 2000 */
    module?: string;
    /** @format date-time */
    logDate?: string;
    refActionId?: number;
    logUserId?: number;
    /** @maxLength 2000 */
    logUserName?: string;
    /** @maxLength 2000 */
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
/** Request to link a list of reservations with another existing reservation. */
export interface LinkReservationsCriteria {
    /** Collection of unique identifiers of the reservations to be linked with another reservation. */
    reservationIdList?: ReservationIdList;
    /** Unique identifier of the reservation to be linked with. */
    linkToReservationId?: UniqueIDType;
    /** Response instruction for the operation. */
    responseInstruction?: {
        /** If set to TRUE, response will have the list of linked reservations. */
        fetchLinkedReservations?: boolean;
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response will either be Summary or Detail type, but not both. See the request for the summary attribute flag. */
export interface RateInfo {
    /** The revenue information for the rate code. */
    detail?: {
        /** The revenue information for the rate code. */
        revenue?: TotalType;
        /** Package information for the rate code. */
        packages?: TotalType[];
        /** Indicates if the rate is to be hidden. */
        rateSuppressed?: boolean;
    };
    summary?: ReservationRateSummaryType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ReservationRateSummaryType {
    /** @maxItems 4000 */
    details?: ReservationRateSummaryDetailType[];
    /** Amount of revenue and package excluding tax. */
    gross?: number;
    /** Amount of revenue and package including tax. */
    net?: number;
    /** Amount of automatically posted charges along with room and taxes. */
    fixedCharges?: number;
    /** Amount paid prior to the stay. */
    deposit?: number;
    /** Amount of total cost of stay. */
    totalCostOfStay?: number;
    /** Remaining amount to be paid. */
    outStandingCostOfStay?: number;
    /** Amount to be paid by Guest. */
    guestPay?: number;
    /** Amount of automatically forwarded charges for specific transaction codes. */
    routing?: number;
    /**
     * Currency revenue calculation is based on.
     * @minLength 3
     * @maxLength 3
     */
    currencyCode?: string;
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
    /** Whether suppressed rate is present or not. */
    hasSuppressedRate?: boolean;
}
export interface ReservationRateSummaryDetailType {
    /**
     * Stay date for which revenue calculation is done.
     * @format date
     * @maxLength 8
     */
    summaryDate?: string;
    /** Base Amount of rate. */
    revenue?: number;
    /** Amount of an additional product or service that is sold as part of the rate or in addition to the rate. */
    package?: number;
    /** Amount of tax generated separately on the revenue and package. */
    tax?: number;
    /** Amount of revenue and package excluding tax. */
    gross?: number;
    /** Amount of revenue and package including tax. */
    net?: number;
    /**
     * Rate code calculation is based on.
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /**
     * Date revenue calculation is based on.
     * @format date
     * @maxLength 8
     */
    revenueSimulationDate?: string;
    /**
     * Currency revenue calculation is based on.
     * @minLength 3
     * @maxLength 3
     */
    currencyCode?: string;
    /** Indicates if the rate is to be hidden. */
    rateSuppressed?: boolean;
}
/** Request to validate reservation changes. */
export interface ValidateReservationChanges {
    /** Reservation to be validated. */
    reservation?: HotelReservationType;
    /** Stay Duration to validate. */
    timeSpan?: TimeSpanType;
    /** Collection of validation instructions. */
    instructions?: {
        /** Reservation validation instruction. */
        instruction?: ReservationValidationInstructionType[];
        /** Instruction for recalculation of rate when the reservations has already been upsold. */
        upsellRateInstruction?: UpsellRateInstructionType;
        /** Whether the current operation is copy reservation or not. */
        copyOperation?: boolean;
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Instruction to validate changes in reservation and returns validated inventory item. */
export declare enum ReservationValidationInstructionType {
    StayHeader = "StayHeader",
    StayDates = "StayDates",
    OverlappingStay = "OverlappingStay",
    Packages = "Packages",
    RefreshPackages = "RefreshPackages",
    Preferences = "Preferences",
    AccessRestrictions = "AccessRestrictions",
    Ecertificates = "Ecertificates",
    Promotions = "Promotions",
    TrackItItems = "TrackItItems",
    TotalCostOfStay = "TotalCostOfStay",
    ReservationAwards = "ReservationAwards",
    WebRegistrationCards = "WebRegistrationCards",
    ServiceRequests = "ServiceRequests",
    ReservationActivities = "ReservationActivities",
    ScheduledActivities = "ScheduledActivities",
    PrepaidCards = "PrepaidCards",
    Shares = "Shares",
    Attachments = "Attachments",
    Locators = "Locators",
    ProfileAwards = "ProfileAwards",
    RefreshRates = "RefreshRates",
    ReservationGuarantee = "ReservationGuarantee",
    UpsellsAvailable = "UpsellsAvailable",
    InventoryItems = "InventoryItems"
}
/** Instruction to remove the upsell and recalculate the rate based on the upsell target room type. */
export declare enum UpsellRateInstructionType {
    HonorUpsellRateForAdditionalNights = "HonorUpsellRateForAdditionalNights",
    OriginalRoomType = "OriginalRoomType",
    TargetRoomType = "TargetRoomType"
}
/** Response for validating reservation changes. */
export interface ValidateReservationChangesDetails {
    /** Collection of validation messages. */
    validationMessages?: ValidationsReturnType;
    /** Contains validated reservation. */
    reservation?: HotelReservationType;
    /** Guarantee Code information with cancellation penalty and deposit policy information. */
    reservationGuarantee?: GuaranteePolicyType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** @maxItems 4000 */
export type ValidationsReturnType = ValidationReturnType[];
/** Validations type record returned after Validations are done. */
export interface ValidationReturnType {
    /**
     * The type of Validation Record. Example would be OVERBOOK_INVENTORY, OVERRIDE_MAX_OCCUPANCY, CREDIT_CARD_REQUIRED In some cases this will match a permission.
     * @minLength 0
     * @maxLength 20
     */
    validationType?: string;
    /**
     * The message returned after validating.
     * @minLength 0
     * @maxLength 2000
     */
    validationMessage?: string;
    /** Validation Actions returned after validations are done. STOP-PROCESSING implies that the user cannot continue with the operation as some validation failed. USER-RESPONSE-REQUIRED implies that some validations can be overridden and the User can continue if they wish to override. */
    validationAction?: ValidationActionType;
    /**
     * The code returned after validation.
     * @minLength 0
     * @maxLength 100
     */
    validationCode?: string;
    /** List of Reservations for which this validation type is applicable. */
    invalidReservations?: ReservationSummaryListType;
}
/** Validation Actions returned after validations are done. STOP-PROCESSING implies that the user cannot continue with the operation as some validation failed. USER-RESPONSE-REQUIRED implies that some validations can be overridden and the User can continue if they wish to override. */
export declare enum ValidationActionType {
    StopProcessing = "StopProcessing",
    UserResponseRequired = "UserResponseRequired"
}
/**
 * List of Reservations.
 * @maxItems 4000
 */
export type ReservationSummaryListType = ReservationSummaryType[];
export interface ReservationSummaryType {
    /** Unique reservation identifiers. */
    reservationIdList?: UniqueIDListType;
    /** Guarantee Information for Reservation. */
    guarantee?: ResGuaranteeType;
    /** Guest First Name. */
    guestFirstName?: GivenNameType;
    /** Guest Last Name. */
    guestLastName?: SurnameType;
    /** Stay Duration of the reservation. */
    stayPeriod?: DateRangeType;
}
/** Specifies Guarantee Code attributes. */
export interface GuaranteePolicyType {
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
/** Return object to the request for information regarding a reservation. */
export interface Reservation {
    /** Collection of Reservations returned/fetched as per the criteria in the fetch request. */
    reservations?: HotelReservationsType;
    masterInfoList?: MasterInfoType[];
    /** Channel specific information to be received in case the reservation is being created through a channel. */
    channelInfo?: ReservationChannelInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Holds all the channel reservation specific information. */
export interface ReservationChannelInfoType {
    /** Holds channel details such as type, code */
    channelSummaryInfo?: ChannelSummaryInfoType;
    /** Holds the reservation status to be returned to channel. */
    channelResvStatus?: ChannelResvStatusType;
}
/** Depicts that the operation was failed. */
export declare enum ChannelResvStatusType {
    Pending = "Pending",
    Cancelled = "Cancelled",
    Modified = "Modified",
    Committed = "Committed",
    Ignored = "Ignored",
    Unsuccessful = "Unsuccessful"
}
/** Request method to change a reservations information. */
export interface ChangeReservation {
    /** A collection of Reservations with information that needs to be changed. */
    reservations?: HotelReservationInstructionType[];
    /** Collection of Reservations which have to be created. */
    reservationsInstructionsType?: ReservationsInstructionsType;
    /** Channel specific information to be received in case the reservation is being created through a channel. */
    channelInformation?: ChannelResvRQInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** The Reservation class contains the current reservation being created or altered. */
export interface HotelReservationInstructionType {
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
    /** Collection of instructions to be returned as a set of reservation information. */
    responseInstructions?: {
        /** @maxItems 4000 */
        responseInstruction?: ReservationInstructionType[];
        /** If this value is set to TRUE, then the operation will only return for a Success or Failed flag. */
        confirmationOnly?: boolean;
    };
    /** Collection of instructions for changing the reservation. */
    changeInstrunctions?: ChangeInstructionType;
}
/** Information regarding associated reservations to the reservation. */
export type AssociatedResType = object;
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
/** Instructions for Changing a Reservation. */
export interface ChangeInstructionType {
    /** Collection of unique identifiers of the sharing reservations to be modified. */
    shareReservations?: UniqueIDListType;
    /** Indicates whether package prices will be updated with the latest configurations. */
    updatePackagePrice?: boolean;
    changeAllShares?: boolean;
    overrideInventory?: boolean;
    /** Facility Scheduler Option value. */
    facilitySchedulerOption?: FacilitySchedulerOptionType;
}
/** Facility Scheduler Option value. */
export declare enum FacilitySchedulerOptionType {
    Default = "Default",
    Update = "Update",
    Noupdate = "Noupdate"
}
export interface ChangeReservationDetails {
    /** Reservation Information for the reservations which have been changed. */
    reservations?: HotelReservationsType;
    /** Refer to Generic common types document. */
    masterInfoList?: MasterInfoType[];
    /** Information to be returned, if the request is received through a channel */
    channelInformation?: ChannelResvRSInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Holds all the channel reservation specific information. */
export interface ChannelResvRSInfoType {
    /** Holds channel details such as type, code */
    channelSummaryInfo?: ChannelSummaryInfoType;
    /** Holds the reservation status to be returned to channel. */
    channelResvStatus?: ChannelResvStatusType;
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
export declare enum MarketingPolicyType {
    Deposit = "Deposit",
    Commission = "Commission",
    Cancel = "Cancel",
    Guarantee = "Guarantee",
    General = "General",
    Penalty = "Penalty",
    Tax = "Tax",
    Promotion = "Promotion"
}
/** Overriding the validation check will log the supposed errors in the warnings log if they would fail. */
export interface ReinstateReservation {
    /** Property code of the reservation. */
    hotelId?: CodeType;
    /** Unique internal Id of the reservation that is to be reinstated. */
    reservationIdList?: ReservationIdList;
    reservationLockHandle?: number;
    /** Reservation Information of the reservation that is to be reinstated. */
    reservation?: HotelReservationType;
    /** Flag that indicates if room inventory check should be skipped when the reservation is being reinstated. */
    overrideInventory?: boolean;
    /** Flag that indicates if rate code inventory check should be skipped when the reservation is being reinstated. */
    overrideRates?: boolean;
    /** Flag that indicates if the check on the housekeeping status for out of service should be skipped. */
    overrideRoomOutOfService?: boolean;
    /** Flag that indicates if the check on room allocation should be skipped. */
    overrideRoomAllocation?: boolean;
    /** Collection of unique reservation identifiers to be sent as Shared reservation. Each Unique ID element represents one reservation. */
    additionalReservationIdList?: UniqueIDListType;
    /** Instruction to apply new effective rates among shares. */
    effectiveRates?: EffectiveRatesType;
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
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface ReinstateReservationDetails {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for canceling reservations. */
export interface CancelReservation {
    /** Defines rate change instruction to use relevant for sharing reservations. */
    rateChangeInstruction?: RateChangeInstructionType;
    /** The reason for Cancelling the reservations. */
    reason?: CancellationReasonType;
    /** Information on the reservation that is to be canceled. */
    reservations?: CancelReservationType[];
    /** Channel specific information to be received in case the reservation is being created through a channel. */
    channelInformation?: ChannelResvRQInfoType;
    /** Indicator if the request is a verification on whether the reservation can be canceled. */
    verificationOnly?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CancellationReasonType {
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
}
/** The Reservation class contains the current reservation being created or altered. */
export interface CancelReservationType {
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
    cxlInstr?: CancellationInstructionsType;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    refResId?: UniqueIDType;
    reservationLockHandle?: number;
    /** This forcefully overrides the cancel operation on Reservation. For real-time CRS interface, it is used as cancellation override flag. */
    overrideExternalChecks?: boolean;
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
export declare enum TurndownStatusType {
    Required = "Required",
    NotRequired = "NotRequired",
    Compeleted = "Compeleted"
}
export interface CancellationInstructionsType {
    /**
     * Detailed description such as why reservation cannot be cancelled.
     * @minLength 0
     * @maxLength 4000
     */
    description?: string;
    deleteResTraces?: boolean;
    /**
     * @minLength 0
     * @maxLength 2000
     */
    status?: string;
}
/** Response object for the request to cancel reservations. Response contains the reservations which were successfully canceled. */
export interface CancelReservationDetails {
    /**
     * Cancellation information includes information regarding Reason, Date of Cancellation etc..
     * @maxItems 4000
     */
    cxlActivityLog?: CancellationActivityType[];
    /** Collection of old room rate information on a daily basis for the old guest count in case of sharing reservations. */
    oldRates?: DailyRatesType;
    /** Collection of new room rate information on a daily basis for the new remaining guest count in case of sharing reservations. */
    newRates?: DailyRatesType;
    /**
     * Information regarding the reservation which was canceled.
     * @maxItems 4000
     */
    reservations?: CancelReservationType[];
    /** Information to be returned, if the request is received through a channel */
    channelInformation?: ChannelResvRSInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface CancellationActivityType {
    reason?: CancellationReasonType;
    /**
     * @format date
     * @maxLength 8
     */
    cxlDate?: string;
    userId?: number;
    /** @maxLength 2000 */
    userName?: string;
    /** Cancellation IDs */
    cancellationIdList?: UniqueIDListType;
}
/** Request to pre-register a reservation eligible for pre-registration and change arrival details. */
export interface PreCheckInReservation {
    /** The reservation desired to change with its relevant pre-registration details. */
    reservation?: ReservationPreCheckInDetailsType;
    /** Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. */
    allowMobileViewFolio?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type describing the different details regarding a pre-registered reservation including ID. */
export interface ReservationPreCheckInDetailsType {
    /**
     * Hotel Code of this reservation.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** The id of this reservation. */
    reservationId?: ReservationId;
    /** The time at which the guest arrives at the hotel. */
    preCheckInDetails?: PreCheckInDetailsType;
}
/** Type describing the different details regarding a pre-registered reservation. */
export interface PreCheckInDetailsType {
    /** The time at which the guest arrives at the hotel. */
    arrival?: ReservationArrivalInfoType;
    /**
     * Room Number to be assigned to the reservation.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /**
     * Currency code preferred by guest.
     * @minLength 0
     * @maxLength 20
     */
    guestPreferredCurrency?: string;
    /** Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. */
    allowMobileViewFolio?: boolean;
    /** The payment methods of the reservation. */
    reservationPaymentMethods?: ReservationPaymentMethodsType;
    /** The arrival transportation details of the reservation. */
    arrivalTransport?: TransportInfoType;
}
/** Type describing information regarding the arrival of a reservation. */
export interface ReservationArrivalInfoType {
    /**
     * The time at which the guest arrives at the hotel.
     * @format date-time
     */
    arrivalTime?: string;
}
/** Request to upsell a reservation. */
export interface UpsellReservation {
    /** Property Code of the reservation. */
    hotelId?: CodeType;
    /** Unique identifier of the reservation to be upsold. */
    reservationId?: ReservationId;
    /** Upsell information to be applied to the reservation. */
    upsell?: UpsellType;
    /** Indicates whether to override validation or not. */
    override?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Holds upsell information */
export interface UpsellType {
    /** Rule unique identifier */
    ruleId?: UniqueIDType;
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
     * Rate code redemption type.
     * @minLength 0
     * @maxLength 1
     */
    upsellType?: string;
    /**
     * Rate code
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Detailed information regarding room type to upsell to */
    roomType?: RoomTypeInfoType;
    /** First night upsell amount / number of points required */
    firstNightAmount?: AmountPointsType;
    /** Total stay upsell amount / number of points required */
    totalStayAmount?: AmountPointsType;
    /** List of reservation date and its corresponding upsell rate amount */
    rates?: UpsellDailyRatesType;
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
/** Holds monetary value expressed with a currency code / number of points */
export interface AmountPointsType {
    /** Monetary value expressed with a currency code */
    amount?: CurrencyAmountType;
    /** Number of points */
    points?: number;
}
/**
 * Reservation date and its corresponding upsell rate amount
 * @maxItems 4000
 */
export type UpsellDailyRatesType = UpsellDailyRateType[];
/** Reservation date and its corresponding upsell rate amount */
export interface UpsellDailyRateType {
    /**
     * Reservation date
     * @format date
     * @maxLength 8
     */
    date?: string;
    /** Amount / number of points required to upgrade */
    requiredAmount?: AmountPointsType;
}
/** Response object to the that contains information for a reservation prior to upgrade. */
export interface ReservationUpsellInfo {
    /** Reservation Upsale information. */
    upsellInfo?: UpsellInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** FetchReservationStatistics response */
export interface ReservationStatistics {
    /** Collection of statistic data of a reservation. */
    statisticsType?: StatisticType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Defines all details needed to create a statistical report. */
export interface StatisticType {
    /**
     * Statistic Codes.
     * @maxItems 4000
     */
    statisticCodesType?: StatisticCodeType[];
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
     * Hotel fiscal date for statistics.
     * @format date
     * @maxLength 8
     */
    fiscalDate?: string;
    /**
     * Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement.
     * @minLength 0
     * @maxLength 100
     */
    reportCode?: string;
    /**
     * This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
/** Defines the codes and corresponding categories for which the data in the other elements has been gathered. */
export interface StatisticCodeType {
    /**
     * Collection of statistic summary data.
     * @maxItems 4000
     */
    statisticSetsType?: StatisticSetType[];
    /**
     * Actual code used by the system to collect the statistics (e.g. CORP, RACK if category is Market Segment).
     * @minLength 0
     * @maxLength 20
     */
    statCode?: string;
    /**
     * Category Code category of StatCode attribute (e.g. Market Segment).
     * @minLength 0
     * @maxLength 40
     */
    statCategoryCode?: string;
    /**
     * Class grouping of StatCode attribute.
     * @minLength 0
     * @maxLength 40
     */
    statCodeClass?: string;
    /**
     * Statistic code description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
/** An instance of a statistic, which is a set containing revenue category and number category summaries. */
export interface StatisticSetType {
    /**
     * Collection of RevenueCategorySummary elements. Used if revenue values reported.
     * @maxItems 4000
     */
    revenueCategorySummariesType?: RevenueCategorySummaryType[];
    /**
     * Collection of CountCategorySummary elements. Used if count values reported.
     * @maxItems 4000
     */
    numericCategorySummariesType?: NumericCategorySummaryType[];
    /**
     * Date of the statistic.
     * @format date
     * @maxLength 8
     */
    statisticDate?: string;
    /** Determines whether statistic date is a weekend date. */
    weekendDate?: boolean;
}
/** This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue. */
export interface RevenueCategorySummaryType {
    /**
     * The representation of a revenue category.
     * @minLength 0
     * @maxLength 40
     */
    revenueCategoryCode?: string;
    /** A monetary amount. */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @minLength 3
     * @maxLength 3
     */
    currencyCode?: string;
}
/** This element has count data for each count category such as number of guests, rooms occupied, etc. */
export interface NumericCategorySummaryType {
    /** The total count for the category in NumericCategoryCode. */
    numericSummary?: number;
    /**
     * The representation of a numeric category such as Guests : Number of guests, RoomsOcc : Rooms occupied.
     * @minLength 0
     * @maxLength 40
     */
    numericCategoryCode?: string;
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
 * @title OPERA Cloud Reservation API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rsv/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    calls: {
        /**
         * @description Use this API to request a new call or make updates to an existing call.<p><strong>OperationId:</strong>postCall</p>
         *
         * @tags Reservation
         * @name PostCall
         * @summary Register calls
         * @request POST:/calls
         */
        postCall: (hotelId: string, registerCall: RegisterCall, params?: RequestParams) => Promise<AxiosResponse<RegisterCall, any>>;
    };
    externalSystems: {
        /**
         * @description This API will allow a user to retrieve a list of reservations based on the search criteria specified in the request body. For example you can search for reservations using query parameters like first name, last name, arrival/departure date, external confirmation number. <p><strong>OperationId:</strong>getExternalSystemReservations</p>
         *
         * @tags Reservation
         * @name GetExternalSystemReservations
         * @summary Get Reservations for a hotel
         * @request GET:/externalSystems/{extSystemCode}/reservations
         */
        getExternalSystemReservations: (hotelId: string, extSystemCode: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            externalReferenceList: string[];
            /** Mark this reservation as recently accessed. */
            recentlyAccessed?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchType?: 'Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot';
            /** List of Hotels to support searches with multiple resorts for which traces are to be fetched. */
            hotelIds?: string[];
            /** Free form text field for searching all reservation fields */
            text?: string;
            /**
             * The ending value of the date range.
             * @format date
             */
            arrivalEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            arrivalStartDate?: string;
            /**
             * The ending value of the date range.
             * @format date
             */
            departureEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            departureStartDate?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedArrivalStartTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedArrivalEndTime?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedReturnEndTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedReturnStartTime?: string;
            /** Attached profile name */
            companyNames?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            travelAgentIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            companyIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            sourceIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            groupIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            billingContactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            profileIds?: string[];
            /** Membership ID criteria. */
            membershipCardNumber?: string;
            membershipLevels?: string[];
            membershipTypes?: string[];
            /** Family name, last name. */
            surname?: string;
            /** Given name, first name or names */
            givenName?: string;
            /** VIP status of the customer. */
            anyVIPStatus?: boolean;
            /** VIP status of the customer. */
            vipCodes?: string[];
            /** Fetches the reservation having Guarantee Code(Reservation Type) supplied here. */
            guaranteeCode?: string;
            /** Fetches the reservation having method of payment supplied here. */
            paymentMethod?: string;
            /**
             * Fetches the reservation for which discount is applied
             * @default false
             */
            discountApplied?: boolean;
            user?: string[];
            /** Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. */
            createdBy?: string;
            /** Fetches reservations cancelled by list of users. */
            cancelledByList?: string[];
            /**
             * Fetches the reservations which are cancelled on a specific date.
             * @format date
             */
            cancelledOn?: string;
            ratePlanCodes?: string[];
            sourceCodes?: string[];
            marketCodes?: string[];
            /** If true the search result will exclude the blocks reservations. */
            excludeBlockReservations?: boolean;
            /** The Name of the block that is attached to the reservation. */
            blockName?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockCodes?: string[];
            /** Custom reference */
            customReference?: string;
            /** GDS Record Locator for reservation. */
            recordLocator?: string;
            orderBy?: ('Nights' | 'ArrivalDate' | 'ArrivalDateETR' | 'DepartureDate' | 'GuestSurname' | 'RateAmount' | 'RateCode' | 'Room' | 'RoomType')[];
            /**
             * @uniqueItems true
             * @default ["Asc"]
             */
            sortOrder?: ('Asc' | 'Desc')[];
            /** Indicator to query reservations which have a room number assigned. */
            roomAssignedOnly?: boolean;
            /** Indicator to query reservations which does not have a room number assigned. */
            roomUnassignedOnly?: boolean;
            /** Room number of the reservation to search by. */
            roomId?: string;
            /**
             * Room Type.
             * @maxItems 4000
             */
            roomType?: string[];
            /** A code representing a room feature. */
            roomFeatures?: string[];
            /** Preference value for display purposes. */
            roomSpecials?: string[];
            /** Preference value for display purposes. */
            roomSmokingPreference?: string;
            /** Preference value for display purposes. */
            roomFloorPreferences?: string[];
            /**
             * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
             * @uniqueItems true
             */
            housekeepingRoomStatuses?: ('Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService')[];
            roomClasses?: string[];
            roomRangeFrom?: string;
            roomRangeTo?: string;
            /** Filter by the last digits of a reservation's phone number. */
            communication?: string;
            /**
             * Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction.
             * @uniqueItems true
             */
            fetchInstructions?: ('Reservation' | 'ReservationID' | 'Indicators' | 'Deposits' | 'RevenuesAndBalances' | 'GuestServiceStatus' | 'MasterInfo' | 'CancellationInfo' | 'BlockReservations' | 'TaxType' | 'GuestDeviceNotification' | 'RoomAssignedByAI')[];
            /** Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. */
            allowPreRegistration?: boolean;
            /** Indicates that only reservations with deposit balance should be expected from the result. */
            hasDepositBalance?: boolean;
            /** Indicates that only reservations with open balance should be expected from the result. */
            hasOpenBalance?: boolean;
            /** Indicates that only reservations with open folio should be expected from the result. */
            hasOpenFolio?: boolean;
            /** Criteria that indicates whether to scheduled checkouts or not. */
            includeScheduledCheckOut?: boolean;
            /** Indicates that only linked reservations should be expected from the result. */
            linkedOnly?: boolean;
            /** Indicates that only unlinked reservations should be expected from the result. */
            unlinkedOnly?: boolean;
            /** Indicates if reservations which have already arrived on the Search Date is required. */
            actualArrivals?: boolean;
            /** Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. */
            actualDepartures?: boolean;
            /** Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            complimentaryReservations?: boolean;
            /** Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. */
            dayOfArrivalCancels?: boolean;
            /** Indicates if reservations which are day use reservation on the Search Date, is required. */
            dayUse?: boolean;
            /** Indicates if reservations which checked out early on the Search Date, is required. */
            earlyDepartures?: boolean;
            /** Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. */
            expectedArrivals?: boolean;
            /** Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. */
            expectedDepartures?: boolean;
            /** Indicates if reservations which have extended their stays on the Search Date, is required. */
            extendedStays?: boolean;
            /** Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            houseUseReservations?: boolean;
            /** Indicates if reservations which are StayOvers on the Search Date, is required. */
            stayovers?: boolean;
            /**
             * Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default.
             * @format date
             */
            stayDate?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            roomRoutingId?: string;
            /** Indicates to exclude Pseudo room reservations. */
            excludePseudoRoomReservations?: boolean;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            excludeReservationIds?: string[];
            /** VIP status of the customer. */
            excludeVIPStatusCodes?: string[];
            /** Preference value for display purposes. */
            excludeSpecials?: string[];
            /** Preference value for display purposes. */
            excludeFloorPreferences?: string[];
            /** Indicates to exclude Advance Checked In Reservations from search result. */
            excludeAdvanceCheckedIn?: boolean;
            /** Player ID associated to the reservation. */
            playerId?: string;
            /** Balance from. */
            gamingBalanceFrom?: number;
            /** Balance to. */
            gamingBalanceTo?: number;
            /** Comp Balance From */
            compAccountingBalanceFrom?: number;
            /** Comp Balance To */
            compAccountingBalanceTo?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchTypes?: ('Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot')[];
            /**
             * Reservation status type for reservations search.
             * @uniqueItems true
             */
            reservationStatuses?: ('Cancelled' | 'CheckedOut' | 'CheckedIn' | 'DueIn' | 'DueOut' | 'InHouse' | 'NoShow' | 'WaitList')[];
            /** Codes to be searched. */
            transportationCodes?: string[];
            /**
             * Enum to denote the Status of Readiness messages sent to Guest Devices.
             * @uniqueItems true
             */
            roomReadyStatuses?: ('Pending' | 'Completed' | 'Failed' | 'Sent' | 'Received' | 'Cancelled' | 'PendingAvailability')[];
            /** Fetches the reservations for which Checkout Message is received. */
            checkoutMessageReceived?: boolean;
            /** Fetches the reservations for which reservation communication has been opted. */
            optedForCommunication?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ReservationsDetails, any>>;
    };
    hotels: {
        /**
         * @description Use this to create a new reservation for a block, you must know the block Code to create this reservation.  In order to post a successful block reservation, please ensure you use the ListOfValues API's to know the hotel's codes; such as Address Type, Country Code,  Titles, preferenceCodes etc. <p><strong>OperationId:</strong>postReservationByBlock</p>
         *
         * @tags Reservation
         * @name PostReservationByBlock
         * @summary Create Reservation for a Block
         * @request POST:/hotels/{hotelId}/blocks/{blockId}/reservations
         */
        postReservationByBlock: (blockId: string, hotelId: string, createReservation: CreateReservation, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Combine share reservation for a given reservation id <p><strong>OperationId:</strong>postCombineShareReservationsByExtId</p>
         *
         * @tags Reservation
         * @name PostCombineShareReservationsByExtId
         * @summary Combine Share Reservations
         * @request POST:/hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares
         */
        postCombineShareReservationsByExtId: (reservationExternalId: string, externalSystemCode: string, hotelId: string, combineShareReservations: CombineShareReservations, params?: RequestParams) => Promise<AxiosResponse<CombineShareReservationsDetails, any>>;
        /**
         * @description Use this API to search reservations in a hotel, filtering by whether they are Day Use, Due In, Checked In, Due Out, Checked Out, Cancelled, No Show and Complimentary or any other of the large selection of search criteria. It also serves as an entry way for changing existing reservation information, canceling reservations, checking in guests, canceling check ins, etc. You can use further query parameters to narrow your results. This API is not designed to support sync between two systems or initial upload of data.<p><strong>OperationId:</strong>getHotelReservations</p>
         *
         * @tags Reservation
         * @name GetHotelReservations
         * @summary Get and search for reservations in a hotel
         * @request GET:/hotels/{hotelId}/reservations
         */
        getHotelReservations: (hotelId: string, query?: {
            /** Mark this reservation as recently accessed. */
            recentlyAccessed?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchType?: 'Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot';
            /** Free form text field for searching all reservation fields */
            text?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationIdList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            confirmationNumberList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            cancellationNumberList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            externalReferenceIds?: string[];
            /**
             * Used to identify the source of the identifier (e.g., IATA, ABTA).
             * @default ["External"]
             */
            externalSystemCodes?: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            arrivalEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            arrivalStartDate?: string;
            /**
             * The ending value of the date range.
             * @format date
             */
            departureEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            departureStartDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            stayOnStartDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            createdOnStartDate?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedArrivalEndTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedArrivalStartTime?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedReturnEndTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedReturnStartTime?: string;
            /** Attached profile name */
            companyNames?: string[];
            /** Attached profile name */
            sourceNames?: string[];
            /** Attached profile name */
            travelAgentNames?: string[];
            /** Attached profile name */
            groupNames?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            travelAgentIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            companyIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            sourceIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            contactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            groupIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. */
            billingContactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            profileId?: string;
            /** Membership ID criteria. */
            membershipCardNumber?: string;
            membershipLevels?: string[];
            membershipTypes?: string[];
            /** Family name, last name. */
            surname?: string;
            /** Given name, first name or names */
            givenName?: string;
            /** VIP status of the customer. */
            anyVIPStatus?: boolean;
            /** VIP status of the customer. */
            vipCodes?: string[];
            /** Fetches the reservation having Guarantee Code(Reservation Type) supplied here. */
            guaranteeCode?: string;
            /** Fetches the reservation having method of payment supplied here. */
            paymentMethod?: string;
            /**
             * Fetches the reservation for which discount is applied
             * @default false
             */
            discountApplied?: boolean;
            user?: string[];
            /** Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. */
            createdBy?: string;
            /** Fetches reservations cancelled by list of users. */
            cancelledByList?: string[];
            /**
             * Fetches the reservations which are cancelled on a specific date.
             * @format date
             */
            cancelledOn?: string;
            ratePlanCodes?: string[];
            sourceCodes?: string[];
            marketCodes?: string[];
            /** If true the search result will exclude the blocks reservations. */
            excludeBlockReservations?: boolean;
            /** The Hotel Code of the Block. */
            blockCriteriaHotelCode?: string;
            /** The Name of the block that is attached to the reservation. */
            blockName?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockCodes?: string[];
            /** Custom reference */
            customReference?: string;
            /** GDS Record Locator for reservation. */
            recordLocator?: string;
            orderBy?: ('Nights' | 'ArrivalDate' | 'ArrivalDateETR' | 'DepartureDate' | 'GuestSurname' | 'RateAmount' | 'RateCode' | 'Room' | 'RoomType')[];
            /**
             * @uniqueItems true
             * @default ["Asc"]
             */
            sortOrder?: ('Asc' | 'Desc')[];
            /** Indicator to query reservations which have a room number assigned. */
            roomAssignedOnly?: boolean;
            /** Indicator to query reservations which does not have a room number assigned. */
            roomUnassignedOnly?: boolean;
            /** Room number of the reservation to search by. */
            roomId?: string;
            /**
             * Room Type.
             * @maxItems 4000
             */
            roomType?: string[];
            /** A code representing a room feature. */
            roomFeatures?: string[];
            /** Preference value for display purposes. */
            roomSpecials?: string[];
            /** Preference value for display purposes. */
            roomSmokingPreference?: string;
            /** Preference value for display purposes. */
            roomFloorPreferences?: string[];
            /**
             * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
             * @uniqueItems true
             */
            housekeepingRoomStatuses?: ('Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService')[];
            roomClasses?: string[];
            roomRangeFrom?: string;
            roomRangeTo?: string;
            /** Filter by the last digits of a reservation's phone number. */
            communication?: string;
            /**
             * Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction.
             * @uniqueItems true
             */
            fetchInstructions?: ('Reservation' | 'ReservationID' | 'Indicators' | 'Deposits' | 'RevenuesAndBalances' | 'GuestServiceStatus' | 'MasterInfo' | 'CancellationInfo' | 'BlockReservations' | 'TaxType' | 'GuestDeviceNotification' | 'RoomAssignedByAI')[];
            /**
             * Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
             * @uniqueItems true
             */
            allowedReservationActions?: ('Cancel' | 'Move' | 'PreCharge' | 'PostCharge' | 'FacilitySchedule' | 'Upsell' | 'PreCheckIn' | 'PostToNoShowCancel' | 'NoShow' | 'NameChange' | 'Discount' | 'EnrollToPrimaryMembership' | 'EnrollInProgress')[];
            /** Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. */
            allowPreRegistration?: boolean;
            /** Indicates that reservations with No Post flag should not be expected from the result. */
            excludeNoPost?: boolean;
            /** Indicates that reservations with PM room type should not be expected from the result. */
            excludePMRooms?: boolean;
            /** Indicates that only reservations with deposit balance should be expected from the result. */
            hasDepositBalance?: boolean;
            /** Indicates that only reservations with open balance should be expected from the result. */
            hasOpenBalance?: boolean;
            /** Indicates that only reservations with open folio should be expected from the result. */
            hasOpenFolio?: boolean;
            /** Criteria that indicates whether to scheduled checkouts or not. */
            includeScheduledCheckOut?: boolean;
            /** Indicates that only linked reservations should be expected from the result. */
            linkedOnly?: boolean;
            /** Indicates that only unlinked reservations should be expected from the result. */
            unlinkedOnly?: boolean;
            /** Indicates if reservations which have already arrived on the Search Date is required. */
            actualArrivals?: boolean;
            /** Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. */
            actualDepartures?: boolean;
            /** Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            complimentaryReservations?: boolean;
            /** Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. */
            dayOfArrivalCancels?: boolean;
            /** Indicates if reservations which are day use reservation on the Search Date, is required. */
            dayUse?: boolean;
            /** Indicates if reservations which checked out early on the Search Date, is required. */
            earlyDepartures?: boolean;
            /** Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. */
            expectedArrivals?: boolean;
            /** Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. */
            expectedDepartures?: boolean;
            /** Indicates if reservations which have extended their stays on the Search Date, is required. */
            extendedStays?: boolean;
            /** Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            houseUseReservations?: boolean;
            /** Indicates if reservations which are StayOvers on the Search Date, is required. */
            stayovers?: boolean;
            /**
             * Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default.
             * @format date
             */
            stayDate?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            roomRoutingId?: string;
            /**
             * Periodic folio type.
             * @uniqueItems true
             */
            periodicFolio?: 'Weekly' | 'Monthly' | 'Days';
            /** Comma-delimited list of Folio Settlement Type codes. */
            folioSettlementTypes?: string;
            /** Use the Number of Days For Settlement, defined for the Reservation. */
            defaultDays?: boolean;
            /** Indicates to exclude Pseudo room reservations. */
            excludePseudoRoomReservations?: boolean;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            excludeReservationIds?: string[];
            /** VIP status of the customer. */
            excludeVIPStatusCodes?: string[];
            /** Preference value for display purposes. */
            excludeSpecials?: string[];
            /** Preference value for display purposes. */
            excludeFloorPreferences?: string[];
            /** Indicates to exclude Advance Checked In Reservations from search result. */
            excludeAdvanceCheckedIn?: boolean;
            /** Player ID associated to the reservation. */
            playerId?: string;
            /** Balance from. */
            gamingBalanceFrom?: number;
            /** Balance to. */
            gamingBalanceTo?: number;
            /** Comp Balance From */
            compAccountingBalanceFrom?: number;
            /** Comp Balance To */
            compAccountingBalanceTo?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchTypes?: ('Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot')[];
            /**
             * Reservation status type for reservations search.
             * @uniqueItems true
             */
            reservationStatuses?: ('Cancelled' | 'CheckedOut' | 'CheckedIn' | 'DueIn' | 'DueOut' | 'InHouse' | 'NoShow' | 'WaitList')[];
            /** Codes to be searched. */
            transportationCodes?: string[];
            /**
             * Enum to denote the Status of Readiness messages sent to Guest Devices.
             * @uniqueItems true
             */
            roomReadyStatuses?: ('Pending' | 'Completed' | 'Failed' | 'Sent' | 'Received' | 'Cancelled' | 'PendingAvailability')[];
            /** Fetches the reservations for which Checkout Message is received. */
            checkoutMessageReceived?: boolean;
            /** Fetches the reservations for which reservation communication has been opted. */
            optedForCommunication?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ReservationsDetails, any>>;
        /**
         * @description Use this to create a new reservation for a hA12:F24otel.  Generally, you would search for a hotel's availability and rates before proceeding to use postReservation.  There are many fields in postReservation defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postReservation. <p><strong>OperationId:</strong>postReservation</p>
         *
         * @tags Reservation
         * @name PostReservation
         * @summary Create Reservation
         * @request POST:/hotels/{hotelId}/reservations
         */
        postReservation: (hotelId: string, createReservation: CreateReservation, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to get the activity log data of reservations being created and managed.<p><strong>OperationId:</strong>getReservationActivityLog</p>
         *
         * @tags Reservation
         * @name GetReservationActivityLog
         * @summary Fetch reservation activity log
         * @request GET:/hotels/{hotelId}/reservations/activityLog
         */
        getReservationActivityLog: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /** Name of the parameter. */
            parameterName?: string[];
            /** Value of the parameter. */
            parameterValue?: string[];
            activityGroup?: string;
            activityType?: string;
            /** Search text for the user activity log. */
            searchText?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ActivityLog, any>>;
        /**
         * @description This will allow you to link 1 or more reservations to an existing reservation.  <p><strong>OperationId:</strong>postReservationLinks</p>
         *
         * @tags Reservation
         * @name PostReservationLinks
         * @summary Link Reservations
         * @request POST:/hotels/{hotelId}/reservations/linkedReservations/{reservationId}
         */
        postReservationLinks: (reservationId: string, hotelId: string, linkReservationsCriteria: LinkReservationsCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to unlink a reservation from its currently associated reservation. <p><strong>OperationId:</strong>deleteReservationLinks</p>
         *
         * @tags Reservation
         * @name DeleteReservationLinks
         * @summary Remove Reservation Links
         * @request DELETE:/hotels/{hotelId}/reservations/linkedReservations/{reservationId}
         */
        deleteReservationLinks: (reservationId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to retrieve rate plan information including a breakdown of packages and taxes.<p><strong>OperationId:</strong>getRateInfo</p>
         *
         * @tags Reservation
         * @name GetRateInfo
         * @summary Get rate information
         * @request GET:/hotels/{hotelId}/reservations/rateInfo
         */
        getRateInfo: (hotelId: string, query?: {
            /** The code specifying a monetary unit. Use ISO 4217, three alpha code. */
            currencyCode?: string;
            /** Flag to indicate if summary information is required. */
            summaryInfo?: boolean;
            /** @format date */
            criteriaStartDate?: string;
            /** @format date */
            criteriaEndDate?: string;
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
            /**
             * This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed.
             * @format date
             */
            detailDate?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockId?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            blockIdType?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            ratePlanCode?: string;
            /** The ending value of the date range. */
            effectiveRateEnd?: string[];
            /** The starting value of the date range. */
            effectiveRateStart?: string[];
            /** Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. */
            roomType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<RateInfo, any>>;
        /**
         * @description Use this API to validate either the guarantee type or stay details of a reservation you are about to create. <p><strong>OperationId:</strong>putValidateReservationChanges</p>
         *
         * @tags Reservation
         * @name PutValidateReservationChanges
         * @summary Validate Reservation Change
         * @request PUT:/hotels/{hotelId}/reservations/validations
         */
        putValidateReservationChanges: (hotelId: string, validateReservationChanges: ValidateReservationChanges, params?: RequestParams) => Promise<AxiosResponse<ValidateReservationChangesDetails, any>>;
        /**
         * @description Use this API to retrieve a reservation&apos;s detail such as guest&apos;s stay, arrival and departure dates, transportation, room and rate information, preferences, packages, and more using OPERA&apos;s reservationId.<p><strong>OperationId:</strong>getReservation</p>
         *
         * @tags Reservation
         * @name GetReservation
         * @summary Get reservation by ID
         * @request GET:/hotels/{hotelId}/reservations/{reservationId}
         */
        getReservation: (reservationId: string, hotelId: string, query?: {
            /**
             * Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction.
             * @uniqueItems true
             */
            fetchInstructions?: ('Reservation' | 'Comments' | 'GuestComments' | 'Packages' | 'TotalCostOfStay' | 'InventoryItems' | 'ReservationPaymentMethods' | 'RoutingInstructions' | 'Preferences' | 'Memberships' | 'Alerts' | 'Traces' | 'ConfirmationLetters' | 'CallHistory' | 'FixedCharges' | 'GuestMessages' | 'ReservationPolicies' | 'Indicators' | 'LinkedReservations' | 'RevenuesAndBalances' | 'GuestLastStay' | 'ECoupons' | 'TrackItItems' | 'ReservationAwards' | 'WebRegistrationCards' | 'ReservationActivities' | 'ScheduledActivities' | 'PrepaidCards' | 'Shares' | 'Attachments' | 'Locators' | 'ProfileAwards' | 'TransactionDiversions' | 'Tickets' | 'GuestMemberships' | 'ECertificates' | 'UpsellInfo' | 'RoomAssignedByAI')[];
            /**
             * Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
             * @uniqueItems true
             */
            allowedActions?: ('Cancel' | 'Move' | 'PreCharge' | 'PostCharge' | 'FacilitySchedule' | 'Upsell' | 'PreCheckIn' | 'PostToNoShowCancel' | 'NoShow' | 'NameChange' | 'Discount' | 'EnrollToPrimaryMembership' | 'EnrollInProgress')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Reservation, any>>;
        /**
         * @description Use this to update an existing reservation for a hotel, such as adding comments, changing the number of guests.   There are many fields in putReservation defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use putReservation. <p><strong>OperationId:</strong>putReservation</p>
         *
         * @tags Reservation
         * @name PutReservation
         * @summary Update Reservation by ID
         * @request PUT:/hotels/{hotelId}/reservations/{reservationId}
         */
        putReservation: (reservationId: string, hotelId: string, changeReservation: ChangeReservation, params?: RequestParams) => Promise<AxiosResponse<ChangeReservationDetails, any>>;
        /**
         * @description Use this API to reinstate a cancelled reservation. <p><strong>OperationId:</strong>putReinstateReservation</p>
         *
         * @tags Reservation
         * @name PutReinstateReservation
         * @summary Reinstate a Reservation
         * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/cancellations
         */
        putReinstateReservation: (reservationId: string, hotelId: string, reinstateReservation: ReinstateReservation, params?: RequestParams) => Promise<AxiosResponse<ReinstateReservationDetails, any>>;
        /**
         * @description Use this if a guest would like to cancel their reservation.  You will receive a cancellation number in the response. <p><strong>OperationId:</strong>postCancelReservation</p>
         *
         * @tags Reservation
         * @name PostCancelReservation
         * @summary Cancel Reservation by ID
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/cancellations
         */
        postCancelReservation: (reservationId: string, hotelId: string, cancelReservation: CancelReservation, params?: RequestParams) => Promise<AxiosResponse<CancelReservationDetails, any>>;
        /**
         * @description This will allow you to set a reservation as a pre-registered guest.  The API request requires the guests confirmation number and you can optionally include arrival time.  The behavior of the API will be dependent upon the Pre-registration rules configured for the hotel in OPERA Cloud administration. <p><strong>OperationId:</strong>postPreCheckInReservation</p>
         *
         * @tags Reservation
         * @name PostPreCheckInReservation
         * @summary Pre-Checkin a Reservation
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/preCheckIn
         */
        postPreCheckInReservation: (reservationId: string, hotelId: string, preCheckInReservation: PreCheckInReservation, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This will cancel or rather revert the pre-checkin action for a guest's reservation. The reservation will return to DUEIN status. <p><strong>OperationId:</strong>deletePreCheckInReservation</p>
         *
         * @tags Reservation
         * @name DeletePreCheckInReservation
         * @summary Revert a PreCheckIn Reservation
         * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/preCheckIn
         */
        deletePreCheckInReservation: (reservationId: string, hotelId: string, query?: {
            /** Additional identifying value assigned by the creating system. */
            resvIDExtension?: number;
            /**
             * The time at which the guest arrives at the hotel.
             * @format date-time
             */
            arrivalTime?: string;
            /** Room Number to be assigned to the reservation. */
            roomNumber?: string;
            /** Currency code preferred by guest. */
            guestPreferredCurrency?: string;
            /** Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. */
            allowMobileViewFolio?: boolean;
            paymentMethodDescription?: string[];
            paymentMethodFolioView?: number[];
            paymentMethod?: string[];
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
            cardType?: 'Ab' | 'Am' | 'Ax' | 'Cb' | 'Dc' | 'Ds' | 'Dt' | 'Ec' | 'Er' | 'Jc' | 'Jl' | 'Mc' | 'Nb' | 'So' | 'St' | 'Sw' | 'Va' | 'Xy' | 'Zz' | 'Cp' | 'Cu';
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
            /** Additional identifying value assigned by the creating system. */
            cardIdIDExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            cardIdIDContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            cardIdType?: string;
            /** A monetary amount. */
            currentAuthorizedAmount?: number;
            /** Provides a currency code to reflect the currency in which an amount may be expressed. */
            authorizedAmountCurrencyCode?: string;
            /** A monetary amount. */
            approvalAmountNeeded?: number;
            /** Provides a currency code to reflect the currency in which an amount may be expressed. */
            approvalAmountCurrencyCode?: string;
            /** A monetary amount. */
            balanceAmount?: number;
            /** Provides a currency code to reflect the currency in which an amount may be expressed. */
            balanceCurrencyCode?: string;
            /** The authorization rule code. */
            authorizationRuleCode?: number;
            /** A monetary amount. */
            authorizationRuleAmount?: number;
            /** Provides a currency code to reflect the currency in which an amount may be expressed. */
            authorizationRuleCurrencyCode?: string;
            /** A percentage value if the authorization rule is percentage based. */
            authorizationRulePercent?: number;
            emailFolio?: boolean;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            emailFolioID?: string;
            /** Additional identifying value assigned by the creating system. */
            emailFolioIDExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            emailFolioIDContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            emailFolioIDType?: string;
            /**
             * Time stamp of the creation.
             * @format date-time
             */
            emailFolioCreateDateTime?: string;
            /** ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. */
            emailFolioCreatorID?: string;
            /** Defines the e-mail address. */
            emailFolioEmailAddress?: string;
            /**
             * Supported Email format.
             * @uniqueItems true
             */
            emailFolioEmailFormat?: 'Html' | 'Text';
            /** Identifies the last software system or person to modify a record. */
            emailFolioLastModifierID?: string;
            /**
             * Time stamp of last modification.
             * @format date-time
             */
            emailFolioLastModifyDateTime?: string;
            /** Display Order sequence. */
            emailFolioOrderSequence?: number;
            /** When true, indicates a primary information. */
            emailFolioPrimaryInd?: boolean;
            /**
             * Date an item will be purged from a database (e.g., from a live database to an archive).
             * @format date
             */
            emailFolioPurgeDate?: string;
            /** Defines the purpose of the e-mail address (e.g. personal, business, listserve). */
            emailFolioType?: string;
            /** Describes the Type code */
            emailFolioTypeDescription?: string;
            arrivalCarrierCode?: string;
            /** @format date-time */
            arrivalDateTime?: string;
            arrivalStationCode?: string;
            arrivalTransportCode?: string;
            arrivalTransportationReqd?: boolean;
            arrivalType?: string;
            arrivalComments?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Combine share reservation for a given reservation id <p><strong>OperationId:</strong>postCombineShareReservations</p>
         *
         * @tags Reservation
         * @name PostCombineShareReservations
         * @summary Combine Share Reservations
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/shares
         */
        postCombineShareReservations: (reservationId: string, hotelId: string, combineShareReservations: CombineShareReservations, params?: RequestParams) => Promise<AxiosResponse<CombineShareReservationsDetails, any>>;
        /**
         * @description This API will allow you to upsell a reservation in OPERA.  You would need to already know the upsell rules that are available for this reservation - you can do this by using the getUpsell API. <p><strong>OperationId:</strong>postUpsellReservation</p>
         *
         * @tags Reservation
         * @name PostUpsellReservation
         * @summary Upsell a Reservation
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/upsell
         */
        postUpsellReservation: (reservationId: string, hotelId: string, upsellReservation: UpsellReservation, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to retrieve the available upsell offers for a specific reservation. If no upsell options are configured for this hotel or available for this reservation, an appropriate error will be returned. <p><strong>OperationId:</strong>getReservationUpsellInfo</p>
         *
         * @tags Reservation
         * @name GetReservationUpsellInfo
         * @summary Get available Upsell offers
         * @request GET:/hotels/{hotelId}/reservations/{reservationId}/upsell
         */
        getReservationUpsellInfo: (reservationId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<ReservationUpsellInfo, any>>;
    };
    reservations: {
        /**
         * @description This API will allow a user to retrieve a list of reservations based on the search criteria specified in the request body. For example you can search for reservations using query parameters like first name, last name, arrival/departure date, external confirmation number. <p><strong>OperationId:</strong>getReservations</p>
         *
         * @tags Reservation
         * @name GetReservations
         * @summary Get Reservations for a hotel
         * @request GET:/reservations
         */
        getReservations: (hotelId: string, query?: {
            /** Mark this reservation as recently accessed. */
            recentlyAccessed?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchType?: 'Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot';
            /** List of Hotels to support searches with multiple resorts for which traces are to be fetched. */
            hotelIds?: string[];
            /** Free form text field for searching all reservation fields */
            text?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationIdList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            confirmationNumberList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            cancellationNumberList?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            externalReferenceIds?: string[];
            /**
             * Used to identify the source of the identifier (e.g., IATA, ABTA).
             * @default ["External"]
             */
            externalSystemCodes?: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            arrivalEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            arrivalStartDate?: string;
            /**
             * The ending value of the date range.
             * @format date
             */
            departureEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            departureStartDate?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedArrivalStartTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedArrivalEndTime?: string;
            /**
             * The ending value of the time span.
             * @format date-time
             */
            expectedReturnEndTime?: string;
            /**
             * The starting value of the time span.
             * @format date-time
             */
            expectedReturnStartTime?: string;
            /** Attached profile name */
            companyNames?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            travelAgentIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            companyIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            sourceIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            groupIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            billingContactIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            profileIds?: string[];
            /** Membership ID criteria. */
            membershipCardNumber?: string;
            membershipLevels?: string[];
            membershipTypes?: string[];
            /** Family name, last name. */
            surname?: string;
            /** Given name, first name or names */
            givenName?: string;
            /** VIP status of the customer. */
            anyVIPStatus?: boolean;
            /** VIP status of the customer. */
            vipCodes?: string[];
            /** Fetches the reservation having Guarantee Code(Reservation Type) supplied here. */
            guaranteeCode?: string;
            /** Fetches the reservation having method of payment supplied here. */
            paymentMethod?: string;
            /**
             * Fetches the reservation for which discount is applied
             * @default false
             */
            discountApplied?: boolean;
            user?: string[];
            /** Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. */
            createdBy?: string;
            /** Fetches reservations cancelled by list of users. */
            cancelledByList?: string[];
            /**
             * Fetches the reservations which are cancelled on a specific date.
             * @format date
             */
            cancelledOn?: string;
            ratePlanCodes?: string[];
            sourceCodes?: string[];
            marketCodes?: string[];
            /** If true the search result will exclude the blocks reservations. */
            excludeBlockReservations?: boolean;
            /** The Name of the block that is attached to the reservation. */
            blockName?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockCodes?: string[];
            /** Custom reference */
            customReference?: string;
            /** GDS Record Locator for reservation. */
            recordLocator?: string;
            orderBy?: ('Nights' | 'ArrivalDate' | 'ArrivalDateETR' | 'DepartureDate' | 'GuestSurname' | 'RateAmount' | 'RateCode' | 'Room' | 'RoomType')[];
            /**
             * @uniqueItems true
             * @default ["Asc"]
             */
            sortOrder?: ('Asc' | 'Desc')[];
            /** Indicator to query reservations which have a room number assigned. */
            roomAssignedOnly?: boolean;
            /** Indicator to query reservations which does not have a room number assigned. */
            roomUnassignedOnly?: boolean;
            /** Room number of the reservation to search by. */
            roomId?: string;
            /**
             * Room Type.
             * @maxItems 4000
             */
            roomType?: string[];
            /** A code representing a room feature. */
            roomFeatures?: string[];
            /** Preference value for display purposes. */
            roomSpecials?: string[];
            /** Preference value for display purposes. */
            roomSmokingPreference?: string;
            /** Preference value for display purposes. */
            roomFloorPreferences?: string[];
            /**
             * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
             * @uniqueItems true
             */
            housekeepingRoomStatuses?: ('Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService')[];
            roomClasses?: string[];
            roomRangeFrom?: string;
            roomRangeTo?: string;
            /** Filter by the last digits of a reservation's phone number. */
            communication?: string;
            /**
             * Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction.
             * @uniqueItems true
             */
            fetchInstructions?: ('Reservation' | 'ReservationID' | 'Indicators' | 'Deposits' | 'RevenuesAndBalances' | 'GuestServiceStatus' | 'MasterInfo' | 'CancellationInfo' | 'BlockReservations' | 'TaxType' | 'GuestDeviceNotification' | 'RoomAssignedByAI')[];
            /** Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. */
            allowPreRegistration?: boolean;
            /** Indicates that only reservations with deposit balance should be expected from the result. */
            hasDepositBalance?: boolean;
            /** Indicates that only reservations with open balance should be expected from the result. */
            hasOpenBalance?: boolean;
            /** Indicates that only reservations with open folio should be expected from the result. */
            hasOpenFolio?: boolean;
            /** Criteria that indicates whether to scheduled checkouts or not. */
            includeScheduledCheckOut?: boolean;
            /** Indicates that only linked reservations should be expected from the result. */
            linkedOnly?: boolean;
            /** Indicates that only unlinked reservations should be expected from the result. */
            unlinkedOnly?: boolean;
            /** Indicates if reservations which have already arrived on the Search Date is required. */
            actualArrivals?: boolean;
            /** Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. */
            actualDepartures?: boolean;
            /** Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            complimentaryReservations?: boolean;
            /** Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. */
            dayOfArrivalCancels?: boolean;
            /** Indicates if reservations which are day use reservation on the Search Date, is required. */
            dayUse?: boolean;
            /** Indicates if reservations which checked out early on the Search Date, is required. */
            earlyDepartures?: boolean;
            /** Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. */
            expectedArrivals?: boolean;
            /** Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. */
            expectedDepartures?: boolean;
            /** Indicates if reservations which have extended their stays on the Search Date, is required. */
            extendedStays?: boolean;
            /** Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. */
            houseUseReservations?: boolean;
            /** Indicates if reservations which are StayOvers on the Search Date, is required. */
            stayovers?: boolean;
            /**
             * Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default.
             * @format date
             */
            stayDate?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            roomRoutingId?: string;
            /** Indicates to exclude Pseudo room reservations. */
            excludePseudoRoomReservations?: boolean;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            excludeReservationIds?: string[];
            /** VIP status of the customer. */
            excludeVIPStatusCodes?: string[];
            /** Preference value for display purposes. */
            excludeSpecials?: string[];
            /** Preference value for display purposes. */
            excludeFloorPreferences?: string[];
            /** Indicates to exclude Advance Checked In Reservations from search result. */
            excludeAdvanceCheckedIn?: boolean;
            /** Player ID associated to the reservation. */
            playerId?: string;
            /** Balance from. */
            gamingBalanceFrom?: number;
            /** Balance to. */
            gamingBalanceTo?: number;
            /** Comp Balance From */
            compAccountingBalanceFrom?: number;
            /** Comp Balance To */
            compAccountingBalanceTo?: number;
            /**
             * Represents Reservation search type Player Snapshot.
             * @uniqueItems true
             */
            searchTypes?: ('Any' | 'DayUse' | 'Arrival' | 'Arrived' | 'Departure' | 'WaitList' | 'Cancellation' | 'CheckedOut' | 'NoShow' | 'Complimentary' | 'InHouse' | 'PostStayPendingBalance' | 'PreRegistered' | 'PostToRoom' | 'OpenFolio' | 'ScheduledCheckOut' | 'Queued' | 'MobileCheckout' | 'RegisteredAndInHouse' | 'ResvBlockTraces' | 'GuestMessages' | 'MassCancellation' | 'Operator' | 'Turndown' | 'WalkIn' | 'AdvanceCheckedIn' | 'OpenBalance' | 'AutoFolioSettlement' | 'Routing' | 'PlayerSnapshot')[];
            /**
             * Reservation status type for reservations search.
             * @uniqueItems true
             */
            reservationStatuses?: ('Cancelled' | 'CheckedOut' | 'CheckedIn' | 'DueIn' | 'DueOut' | 'InHouse' | 'NoShow' | 'WaitList')[];
            /** Codes to be searched. */
            transportationCodes?: string[];
            /**
             * Enum to denote the Status of Readiness messages sent to Guest Devices.
             * @uniqueItems true
             */
            roomReadyStatuses?: ('Pending' | 'Completed' | 'Failed' | 'Sent' | 'Received' | 'Cancelled' | 'PendingAvailability')[];
            /** Fetches the reservations for which Checkout Message is received. */
            checkoutMessageReceived?: boolean;
            /** Fetches the reservations for which reservation communication has been opted. */
            optedForCommunication?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ReservationsDetails, any>>;
        /**
         * @description This will allow you to link 1 or more reservations to an existing reservation.  <p><strong>OperationId:</strong>postReservationLinksByChain</p>
         *
         * @tags Reservation
         * @name PostReservationLinksByChain
         * @summary Link Reservations By Chain
         * @request POST:/reservations/linkedReservations/{reservationId}
         */
        postReservationLinksByChain: (hotelId: string, reservationId: string, linkReservationsCriteria: LinkReservationsCriteria, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
         *
         * @tags RSVStats
         * @name GetReservationStatistics
         * @summary Get reservation statistics
         * @request GET:/reservations/statistics
         */
        getReservationStatistics: (hotelId: string, query?: {
            /** The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). */
            chainName?: string[];
            /** The IATA city code; for example DCA, ORD. */
            hotelCityCode?: string[];
            /** The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. */
            hotelId?: string[];
            /** A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. */
            hotelCodeContext?: string[];
            /** A text field used to communicate the proper name of the hotel. */
            hotelName?: string[];
            /** The ending value of the date range. */
            requestedReportsTypeEndDate?: string[];
            /** Hotel fiscal date for statistics. */
            fiscalDate?: string[];
            /** Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. */
            reportCode?: string[];
            /** The starting value of the date range. */
            requestedReportsTypeStartDate?: string[];
            /** Name of the parameter. */
            requestedReportsTypeParameterName?: string[];
            /** Value of the parameter. */
            requestedReportsTypeParameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ReservationStatistics, any>>;
    };
}
