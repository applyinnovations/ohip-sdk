export interface ActivitiesInfo {
    /** Collection of fetched Activities. */
    activitiesInformation?: ActivityListType;
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
 * Activity information in detail.
 * @maxItems 4000
 */
export type ActivityListType = ActivityDetailsType[];
/** Complete Activity Related Information. */
export interface ActivityDetailsType {
    /** Unique identifier for the activity. */
    activityId?: ActivityId;
    /** Activity information in detail. */
    activityDetail?: ActivityInfoType;
    /** Provides information about the accounts linked to an activity. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the accounts that should be associated to the activity should be provided during a change operation. Any accounts not provided will be detached from this activity. By default the full overlay is considered false if this property is left blank. If values are provided for accounts, only the full overlay functionality is provided at this time. */
    linkedAccounts?: {
        /**
         * The list of accounts associated with an activity.
         * @maxItems 4000
         */
        activityAccount?: ActivityLinkedProfilesType[];
        /** Indicates whether to perform a full overlay for the accounts. */
        fullOverlay?: boolean;
    };
    /** Provides information about the contacts linked to an activity. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the contacts that should be associated to the activity should be provided during a change operation. Any contacts not provided will be detached from this activity. By default the full overlay is considered false if this property is left blank. If values are provided for contacts, only the full overlay functionality is provided at this time. */
    linkedContacts?: {
        /**
         * The list of contacts associated with an activity.
         * @maxItems 4000
         */
        activityContact?: ActivityLinkedProfilesType[];
        /** Indicates whether to perform a full overlay for the contacts. */
        fullOverlay?: boolean;
    };
    /** Provides information about the blocks linked to the activity. */
    linkedBlocks?: BlockListType;
    /** Provides information about the attachments linked to the activity. */
    linkedAttachments?: AttachmentsType;
    /**
     * The list of activities associated with an activity.
     * @maxItems 4000
     */
    linkedActivities?: LinkedActivityDetailsType[];
    /** Indicators of additional information attached to the activity */
    indicators?: IndicatorsType;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ActivityId {
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
}
/** Activity related information. */
export interface ActivityInfoType {
    /**
     * This is the Hotel Code of the Activity.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Indicates the Activity Class. */
    activityClass?: ActivityConfigClassType;
    /**
     * Indicates the Activity Type used for the Activity.
     * @minLength 0
     * @maxLength 20
     */
    activityType?: string;
    /**
     * Indicates the description used for the Activity Type.
     * @minLength 0
     * @maxLength 100
     */
    activityTypeDescription?: string;
    /**
     * Indicates Purpose of the Activity.
     * @minLength 0
     * @maxLength 100
     */
    activityPurpose?: string;
    /**
     * Activity Trace code used for the Activity.
     * @minLength 0
     * @maxLength 20
     */
    activityTraceCode?: string;
    /**
     * Owner of Activity.
     * @minLength 0
     * @maxLength 20
     */
    activityOwner?: string;
    /**
     * Start Date time of Activity.
     * @format date-time
     */
    startDateTime?: string;
    /**
     * End Date time of Activity.
     * @format date-time
     */
    endDateTime?: string;
    /** Completion status of Activity. */
    status?: {
        /** Name of person who completed the Activity. */
        completedBy?: string;
        /**
         * Date on which the Activity was completed.
         * @format date-time
         */
        completedOn?: string;
        /** Indicates whether Activity is Completed or not. */
        completed?: boolean;
    };
    /**
     * Indicates the outcome of a completed Activity.
     * @minLength 0
     * @maxLength 20
     */
    activityResult?: string;
    /**
     * Notes associated with an Activity.
     * @minLength 0
     * @maxLength 4000
     */
    notes?: string;
    /** Indicates whether Followup Activity is needed or not. */
    followup?: boolean;
    /**
     * Start Date time of the Followup Activity.
     * @format date-time
     */
    followupStartDateTime?: string;
    /** Indicates whether Activity has a high priority. */
    highPriority?: boolean;
    /** Determines whether the Activity overlaps with another activity with same date and time for the same owner. */
    overlapActivity?: boolean;
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
/** A collection of supported list of activity classes. */
export declare enum ActivityConfigClassType {
    Appointment = "Appointment",
    Todo = "Todo"
}
/** A collection of Unique IDs of Profiles. */
export interface ActivityLinkedProfilesType {
    /** Unique identifiers for the Profile. */
    profileIdList?: UniqueIDListType;
    /** Provides detailed information regarding the profile. */
    profile?: ProfileType;
    /** Is this attached profile primary? */
    primary?: boolean;
    /** Determines the type of the activity profile. */
    activityLinkedProfileType?: LinkedProfileTypeType;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];
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
/** Type provides the detailed information about the profile and its children. */
export interface ProfileType {
    /** Detailed customer information for this profile. */
    customer?: CustomerType;
    /** Detailed company information for this profile. */
    company?: CompanyType;
    /** List of customer addresses. */
    addresses?: {
        /**
         * Collection of Detailed information on an address for the customer.
         * @maxItems 4000
         */
        addressInfo?: AddressInfoType[];
    };
    /** List of Telephone Number Information */
    telephones?: {
        /**
         * Collection of Detailed information on telephone/fax for the customer.
         * @maxItems 4000
         */
        telephoneInfo?: TelephoneInfoType[];
    };
    /** List of email address for the customer. */
    emails?: {
        /**
         * Collection of Detailed information on an eMail address for the customer.
         * @maxItems 4000
         */
        emailInfo?: EmailInfoType[];
    };
    /** List of Information on a URL for the customer. */
    uRLs?: {
        /**
         * Collection of Detailed information on web url/address for the customer.
         * @maxItems 4000
         */
        uRLInfo?: URLInfoType[];
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
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationships?: {
        /**
         * A collection of the profiles that have a relationship with this profile.
         * @maxItems 4000
         */
        relationship?: RelationshipInfoType[];
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
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @minLength 0
     * @maxLength 20
     */
    eligibleForFiscalFolio?: string;
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
}
/** Contains basic data on the customer's identity, location, relationships, finances, memberships, etc. */
export interface CustomerType {
    /**
     * Detailed name information for the customer.
     * @maxItems 5
     */
    personName?: PersonNameType[];
}
/** This provides name information for a person. */
export interface PersonNameType {
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 40
     */
    givenName?: string;
}
export interface CompanyType {
    /**
     * Name of the company.
     * @minLength 0
     * @maxLength 40
     */
    companyName?: string;
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
/** Information on a telephone number for the customer. */
export interface TelephoneInfoType {
    /** Phone details for the profile. */
    telephone?: TelephoneType;
}
/** Information on a telephone number for the customer. */
export interface TelephoneType {
    /**
     * Telephone number assigned to a single location.
     * @minLength 0
     * @maxLength 40
     */
    phoneNumber?: string;
}
/** Information on an email for the customer. */
export interface EmailInfoType {
    /** eMail deatils for the profile. */
    email?: EmailType;
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
}
/** Web site address. */
export interface URLInfoType {
    /** Provides URL information. */
    url?: URLType;
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
    primary?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
export declare enum ProfileDeliveryModuleType {
    EfolioExport = "EfolioExport"
}
/** Relationship Type contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoType {
    /** Refer to Relationship Profile type document. */
    relationshipProfile?: RelationshipProfileType;
}
export interface RelationshipProfileType {
    /** Original profile details for which the relationships was created */
    profileIdList?: UniqueIDListType;
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
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
export declare enum ProfileStatusType {
    Active = "Active",
    Inactive = "Inactive"
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
/** Simple type for profile types linked to activity. */
export declare enum LinkedProfileTypeType {
    Company = "Company",
    Agent = "Agent",
    Source = "Source",
    CompanyContact = "CompanyContact",
    AgentContact = "AgentContact",
    SourceContact = "SourceContact"
}
/**
 * List of Blocks that are linked to the Activity.
 * @maxItems 4000
 */
export type BlockListType = ActivityBlockInfoType[];
export interface ActivityBlockInfoType {
    /** List of Blocks that are linked to the Activity. */
    blockIdList?: UniqueNameIDListType;
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
    /** The Time Span(Start Date, End Date) which covers the Block Span. */
    timeSpan?: TimeSpanType;
    /** When true, indicates a primary information. */
    primary?: boolean;
}
/**
 * Defines descriptive name and unique identification combination.
 * @maxItems 4000
 */
export type UniqueNameIDListType = UniqueNameIDType[];
/** Defines descriptive name, unique identification, and basic information combination. */
export interface UniqueNameIDType {
    /** When true, indicates a primary information. */
    primary?: boolean;
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
}
/** Linked Activity Related Information. */
export interface LinkedActivityDetailsType {
    /** Unique identifier of the linked activity. */
    activityId?: ActivityId;
    /** Linked Activity Related Information. */
    linkedActivityDetail?: ActivityInfoType;
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
export interface ActivitiesToChange {
    /** Activities details to be updated. */
    activitiesInformation?: ActivityListType;
    /** Signifies whether only activity details are being modified. */
    activityDetailsEditFlag?: boolean;
    /** Signifies whether the linked activity details should be modified or not. */
    updateLinkedActivities?: boolean;
    /** Signifies whether complete details of activity should alone be modified. */
    completeMode?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for FetchEmails Operation. */
export interface EmailsDetails {
    /** Collection of fetched External Emails. */
    emailsFetched?: EmailsFetchedType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type contains the detailed information of a sender external email stored . */
export interface EmailsFetchedType {
    /**
     * Detailed information of a sender external email stored.
     * @maxItems 4000
     */
    fetchedSenderEmailInfo?: EmailInfoResponseType[];
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
/** Defines elements related to fetched external emails stored. */
export interface EmailInfoResponseType {
    /** This is the List of the Hotel Codes of the Sender External Email. */
    hotelCodes?: CodeListType;
    /** Unique identifier for the Sender External Email stored. */
    emailID?: EmailID;
    /** Account ID linked to the Sender Email. */
    accountId?: AccountId;
    /** Contact ID linked to the Sender Email. */
    contactId?: ContactId;
    /** Block ID linked to the Sender Email. */
    blockId?: BlockId;
    /**
     * Subject of the email.
     * @minLength 0
     * @maxLength 100
     */
    emailSubject?: string;
    /**
     * Family name or last name of the Sender.
     * @minLength 0
     * @maxLength 80
     */
    senderLastName?: string;
    /**
     * Given name or first name of the Sender.
     * @minLength 0
     * @maxLength 40
     */
    senderFirstName?: string;
    /**
     * Email address of the Sender.
     * @minLength 0
     * @maxLength 200
     */
    senderEmailAddress?: string;
    /** Email Attachment Id for stored external emails. */
    emailAttachmentId?: number;
    /**
     * Email Recieved Date Time of the Sender.
     * @format date-time
     */
    emailReceivedDateTime?: string;
    /**
     * List of Email TO Recipients separated by ";"
     * @minLength 0
     * @maxLength 4000
     */
    emailRecipients?: string;
    /** Indicates if the Email body has attachments included. */
    hasEmailAttachments?: boolean;
}
/** @maxItems 4000 */
export type CodeListType = string[];
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface EmailID {
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
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AccountId {
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
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ContactId {
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
export interface Activity {
    /** Type used to hold Activity in detail. */
    activityDetails?: ActivityDetailsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ActivitiesInformation {
    /** Activities details to be created. */
    activitiesInformation?: ActivityListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface ActivityStatistics {
    /** Statistical report - each report is determined by the requested report in the service request criteria. */
    reports?: ActivityStatReportType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Base abstraction defining all details needed to create a statistical report. */
export interface ActivityStatReportType {
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
    statCategory?: ActivityStatCategoryType[];
    /** Supported Activity report codes. */
    reportCode?: ActivityStatReportCodeType;
}
/** Defines the codes and corresponding categories for which the data in the other elements has been gathered. */
export interface ActivityStatCategoryType {
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
    statSet?: ActivityStatSetType[];
    /** Supported activity statistical category codes. */
    statCategoryCode?: ActivityStatCategoryCodeType;
}
/** Base statistic set holder which defines the span of the statistical data. */
export interface ActivityStatSetType {
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
    stat?: ActivityStatType[];
    /**
     * @minLength 0
     * @maxLength 20
     */
    owner?: string;
}
/** Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units. */
export interface ActivityStatType {
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
    /** Supported activity statistical codes. */
    code?: ActivityStatCodeType;
}
/** Supported statistical units. */
export declare enum StatUnitCategoryType {
    Numeric = "Numeric",
    Amount = "Amount"
}
/** Supported activity statistical codes. */
export declare enum ActivityStatCodeType {
    CompletedToDo = "CompletedToDo",
    IncompleteToDo = "IncompleteToDo",
    CompletedAppointments = "CompletedAppointments",
    IncompleteAppointments = "IncompleteAppointments"
}
/** Supported activity statistical category codes. */
export declare enum ActivityStatCategoryCodeType {
    HotelCode = "HotelCode"
}
/** Supported Activity report codes. */
export declare enum ActivityStatReportCodeType {
    Activities = "Activities"
}
export interface ActivityAttachments {
    /** Collection of information about activity attachments returned/fetched as per the criteria in the fetch request. */
    activityAttachmentList?: AttachmentsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface LinkedActivities {
    /** Linked activities to be created. */
    linkedActivityDetails?: LinkedActivitiesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Provides the data to create linked activities to an activity . */
export interface LinkedActivitiesType {
    /**
     * Hotel Code of the Activity.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Unique identifier of the parent activity. */
    activityId?: ActivityId;
    /** List of Owner codes of the Linked Activity. */
    ownerCodeList?: CodeListType;
}
export interface ActivityLog {
    /** Collection of the list of Activities(Log) requested. */
    activityLogDetails?: ActivityLogListType;
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
export interface RecentlyAccessedActivities {
    /** List of recently accessed profiles. */
    activities?: RecentlyAccessedActivitiesType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * A single recently accessed activity.
 * @maxItems 10
 */
export type RecentlyAccessedActivitiesType = RecentlyAccessedActivityType[];
/** A recently used activity details. */
export interface RecentlyAccessedActivityType {
    /** List of unique ids, consisting of the activity id. */
    activityIdList?: ActivityIdListType;
    /**
     * Description of the ActivityType.
     * @minLength 0
     * @maxLength 100
     */
    activityTypeDescription?: string;
    /**
     * Owner Code of the Activity.
     * @minLength 0
     * @maxLength 20
     */
    activityOwnerCode?: string;
    /** Activity start date and end date. */
    timeSpan?: TimeSpanType;
    /**
     * The date the record was accessed.
     * @format date
     * @maxLength 8
     */
    accessDate?: string;
    /**
     * Hotel Code of the Activity.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/**
 * Unique identifier for the Activity.
 * @maxItems 4000
 */
export type ActivityIdListType = ActivityId[];
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
    prerequest: Promise<any>;
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
 * @title OPERA Cloud Activity API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /act/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    activities: {
        /**
         * @description Use this API to retrieve activities for multiple hotels.  Results can be narrowed down by your search criteria in the request message. <p><strong>OperationId:</strong>getActivitiesByMultipleHotelIds</p>
         *
         * @tags Activity
         * @name GetActivitiesByMultipleHotelIds
         * @summary Get activities
         * @request GET:/activities
         */
        getActivitiesByMultipleHotelIds: (hotelId: string, query?: {
            /** Indicates whether the Activity is completed or not. */
            completed?: boolean;
            /** Indicates whether the Activity has high priority. */
            highPriority?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /** Search string to be used for super search. */
            text?: string;
            hotelIds?: string[];
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            ownerCode?: string[];
            /**
             * A collection of supported list of activity classes.
             * @uniqueItems true
             */
            activityClass?: 'Appointment' | 'Todo';
            activityType?: string[];
            /** Purpose of the Activity. */
            activityPurpose?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            accountId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ActivitiesInfo, any>>;
        /**
         * @description If you want to delete an activity, use this API.  You must know the activity ID for the request. <p><strong>OperationId:</strong>deleteMultipleActivities</p>
         *
         * @tags Activity
         * @name DeleteMultipleActivities
         * @summary Delete activities
         * @request DELETE:/activities
         */
        deleteMultipleActivities: (hotelId: string, query?: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            activityIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to mark multiple Activities as completed in 1 request.  You must know the OPERA Activity ID's for this API. <p><strong>OperationId:</strong>postMultipleActivitiesCompletion</p>
         *
         * @tags Activity
         * @name PostMultipleActivitiesCompletion
         * @summary Complete activities
         * @request POST:/activities/activitiesCompletion
         */
        postMultipleActivitiesCompletion: (hotelId: string, activitiesToChange: ActivitiesToChange, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to retrieve emails which have been received from an external system and stored in OPERA. They are stored against accounts, contacts and blocks in OPERA. <p><strong>OperationId:</strong>getEmails</p>
         *
         * @tags Activity
         * @name GetEmails
         * @summary Get Emails
         * @request GET:/activities/emails
         */
        getEmails: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            code?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id?: string;
            /** Additional identifying value assigned by the creating system. */
            idExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            idContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            type?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            accountIdId?: string;
            /** Additional identifying value assigned by the creating system. */
            accountIdIdExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            accountIdIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            accountIdType?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactIdId?: string;
            /** Additional identifying value assigned by the creating system. */
            contactIdIdExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            contactIdIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            contactIdType?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockIdId?: string;
            /** Additional identifying value assigned by the creating system. */
            blockIdIdExtension?: number;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            blockIdIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. */
            blockIdType?: string;
            /** Subject of the email. */
            emailSubject?: string;
            /** Family name or last name of the Sender. */
            senderLastName?: string;
            /** Given name or first name of the Sender. */
            senderFirstName?: string;
            /** Email address of the Sender. */
            senderEmailAddress?: string;
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            duration?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<EmailsDetails, any>>;
        /**
         * @description You can use this API to retrieve an Activity, using the OPERA Activity ID in the request. <p><strong>OperationId:</strong>getActivityWithOutHotelId</p>
         *
         * @tags Activity
         * @name GetActivityWithOutHotelId
         * @summary Get activity by ID
         * @request GET:/activities/{activityId}
         */
        getActivityWithOutHotelId: (hotelId: string, activityId: string, query?: {
            /**
             * Instruction to fetch Activity's information, linked Block and Profile, Attachments and linked Activities.
             * @uniqueItems true
             */
            fetchInstructions?: ('ActivityInfo' | 'Profiles' | 'Blocks' | 'Attachments' | 'LinkedActivities')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Activity, any>>;
        /**
         * @description Use this API to mark an Activity as deleted.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>deleteActivitiesWithOutHotelId</p>
         *
         * @tags Activity
         * @name DeleteActivitiesWithOutHotelId
         * @summary Delete activity  by ID
         * @request DELETE:/activities/{activityId}
         */
        deleteActivitiesWithOutHotelId: (hotelId: string, activityId: string, query?: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            activityIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API to delete an attachment which exists on an activity in OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityAttachmentWithoutHotelId</p>
         *
         * @tags Activity
         * @name DeleteActivityAttachmentWithoutHotelId
         * @summary Delete an attachment from an Activity
         * @request DELETE:/activities/{activityId}/attachments/{attachmentId}
         */
        deleteActivityAttachmentWithoutHotelId: (hotelId: string, attachmentId: string, activityId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
    hotels: {
        /**
         * @description You can use this API to retrieve multiple Activities for a hotel, you can narrow the results using different search criteria  <p><strong>OperationId:</strong>getActivities</p>
         *
         * @tags Activity
         * @name GetActivities
         * @summary Get activities by hotel
         * @request GET:/hotels/{hotelId}/activities
         */
        getActivities: (hotelId: string, query?: {
            /** Indicates whether the Activity is completed or not. */
            completed?: boolean;
            /** Indicates whether the Activity has high priority. */
            highPriority?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /** Search string to be used for super search. */
            text?: string;
            hotelIds?: string[];
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            ownerCode?: string[];
            /**
             * A collection of supported list of activity classes.
             * @uniqueItems true
             */
            activityClass?: 'Appointment' | 'Todo';
            activityType?: string[];
            /** Purpose of the Activity. */
            activityPurpose?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            accountId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            contactId?: string;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            blockId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ActivitiesInfo, any>>;
        /**
         * @description Use postActivities to create a new activity for a hotel.  You would need to know the types of Activities a hotel accepts, such as Appointments, TODO.  Use ListOfValues API's to find the available types at a hotel. <p><strong>OperationId:</strong>postActivities</p>
         *
         * @tags Activity
         * @name PostActivities
         * @summary Create activities in a hotel
         * @request POST:/hotels/{hotelId}/activities
         */
        postActivities: (hotelId: string, activitiesInformation: ActivitiesInformation, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API to retrieve all statistics of activities. <p><strong>OperationId:</strong>getActivityStatistics</p>
         *
         * @tags Activity
         * @name GetActivityStatistics
         * @summary Get Activity statistics
         * @request GET:/hotels/{hotelId}/activities/statistics
         */
        getActivityStatistics: (hotelId: string, query?: {
            /**
             * Start date of the report.
             * @format date
             */
            reportStartDate?: string;
            activityTypeCodes?: string[];
            ownerCodeList?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ActivityStatistics, any>>;
        /**
         * @description You can use this API to retrieve an Activity for a hotel, using the OPERA Activity ID in the request. <p><strong>OperationId:</strong>getActivity</p>
         *
         * @tags Activity
         * @name GetActivity
         * @summary Get activity in a hotel by ID
         * @request GET:/hotels/{hotelId}/activities/{activityId}
         */
        getActivity: (activityId: string, hotelId: string, query?: {
            /**
             * Instruction to fetch Activity's information, linked Block and Profile, Attachments and linked Activities.
             * @uniqueItems true
             */
            fetchInstructions?: ('ActivityInfo' | 'Profiles' | 'Blocks' | 'Attachments' | 'LinkedActivities')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Activity, any>>;
        /**
         * @description Use this to update an existing Activity for a hotel.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>putActivities</p>
         *
         * @tags Activity
         * @name PutActivities
         * @summary Update activity in a hotel by ID
         * @request PUT:/hotels/{hotelId}/activities/{activityId}
         */
        putActivities: (activityId: string, hotelId: string, activitiesToChange: ActivitiesToChange, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to mark an Activity as deleted.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>deleteActivities</p>
         *
         * @tags Activity
         * @name DeleteActivities
         * @summary Delete activity in a hotel by ID
         * @request DELETE:/hotels/{hotelId}/activities/{activityId}
         */
        deleteActivities: (activityId: string, hotelId: string, query?: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            activityIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to mark one Activity as completed in 1 request.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>postSingleActivityCompletion</p>
         *
         * @tags Activity
         * @name PostSingleActivityCompletion
         * @summary Complete activity in a hotel by ID
         * @request POST:/hotels/{hotelId}/activities/{activityId}/activityCompletion
         */
        postSingleActivityCompletion: (activityId: string, hotelId: string, activitiesToChange: ActivitiesToChange, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API when you want to view the attachments on an existing activity. <p><strong>OperationId:</strong>getActivityAttachments</p>
         *
         * @tags Activity
         * @name GetActivityAttachments
         * @summary Get Activity Attachments
         * @request GET:/hotels/{hotelId}/activities/{activityId}/attachments
         */
        getActivityAttachments: (activityId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<ActivityAttachments, any>>;
        /**
         * @description You can use this API to delete an attachment which exists on an activity in OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityAttachment</p>
         *
         * @tags Activity
         * @name DeleteActivityAttachment
         * @summary Delete an attachment from an Activity
         * @request DELETE:/hotels/{hotelId}/activities/{activityId}/attachments/{attachmentId}
         */
        deleteActivityAttachment: (attachmentId: string, activityId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API to invite one or multiple owners to an activity. <p><strong>OperationId:</strong>postLinkedActivities</p>
         *
         * @tags Activity
         * @name PostLinkedActivities
         * @summary Create linked activities in a hotel by ID
         * @request POST:/hotels/{hotelId}/activities/{activityId}/linkedActivities
         */
        postLinkedActivities: (activityId: string, hotelId: string, linkedActivities: LinkedActivities, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description You can use this API to view the changes log for a specified Activity. <p><strong>OperationId:</strong>getActivityLog</p>
         *
         * @tags Activity
         * @name GetActivityLog
         * @summary Get Activity Log
         * @request GET:/hotels/{hotelId}/activityLog
         */
        getActivityLog: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Activity module.
             * @uniqueItems true
             */
            module?: 'Reservation' | 'Contract' | 'Allotment' | 'Outlookview' | 'Profile' | 'Accountreceivables' | 'GdsConvRateCodes' | 'RateCode' | 'Billing' | 'Activity';
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
            fromDate?: string;
            /**
             * Search to date for the user activity log.
             * @format date
             */
            toDate?: string;
            /** Search text for the user activity log. */
            searchText?: string;
            userByIdUserIds?: number[];
            userForIdUserIds?: number[];
        }, params?: RequestParams) => Promise<AxiosResponse<ActivityLog, any>>;
        /**
         * @description This API allows you to retrieve a list of activities that have recently been accessed.   <p><strong>OperationId:</strong>getRecentlyAccessedActivities</p>
         *
         * @tags Activity
         * @name GetRecentlyAccessedActivities
         * @summary Get recently accessed activities
         * @request GET:/hotels/{hotelId}/recentlyAccessedActivities
         */
        getRecentlyAccessedActivities: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<RecentlyAccessedActivities, any>>;
    };
    recentlyAccessedActivities: {
        /**
         * @description This API allows you to retrieve a list of activities that have recently been accessed.   <p><strong>OperationId:</strong>getRecentlyAccessedActivitiesWithOutHotelId</p>
         *
         * @tags Activity
         * @name GetRecentlyAccessedActivitiesWithOutHotelId
         * @summary Get recently accessed activities
         * @request GET:/recentlyAccessedActivities
         */
        getRecentlyAccessedActivitiesWithOutHotelId: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<RecentlyAccessedActivities, any>>;
    };
    services: {
        /**
         * @description Use this API to clear the cache for the Activity module <p><strong>OperationId:</strong>deleteActivityServiceCache</p>
         *
         * @tags Activity
         * @name DeleteActivityServiceCache
         * @summary Clear Activity Cache
         * @request DELETE:/services/activity/cache
         */
        deleteActivityServiceCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>pingActivityService</p>
         *
         * @tags Activity
         * @name PingActivityService
         * @summary Operation to get health status
         * @request GET:/services/activity/status
         */
        pingActivityService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<OperaVersion, any>>;
    };
}
