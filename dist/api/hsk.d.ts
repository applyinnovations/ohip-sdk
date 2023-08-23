export interface Rooms {
    /** List of rooms and the room status. */
    housekeepingRooms?: HotelRoomsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Collection of Room record that contain Housekeeping and Out Of Order information. */
export interface HotelRoomsType {
    /** @maxItems 4000 */
    room?: RoomType[];
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/** This type represents the primary room attributes. */
export interface RoomType {
    /** Room type basic information of the room. */
    roomType?: RoomTypeShortInfoType;
    /**
     * Floor of the Room.
     * @minLength 0
     * @maxLength 20
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @minLength 0
     * @maxLength 20
     */
    floorDescription?: string;
    /** Room Features for the room. */
    roomFeatures?: RoomFeaturesType;
    /**
     * Detail Long Description Of The Room.
     * @minLength 0
     * @maxLength 20
     */
    roomDescription?: string;
    /** Description of the room. */
    description?: TranslationTextType2000;
    /**
     * This indicates room smoking preference.
     * @minLength 0
     * @maxLength 20
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @minLength 0
     * @maxLength 20
     */
    smokingPreferenceDescription?: string;
    /**
     * Building associated with the room.
     * @minLength 0
     * @maxLength 20
     */
    building?: string;
    /** Assignment Rating associated with the room. */
    roomAssignmentRating?: RatePlanRatingType;
    /** Indicates whether the room is accessibility compliant. */
    isAccessible?: boolean;
    /**
     * Code of the room.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** Indicates whether the room is a Meeting Room */
    meetingRoom?: boolean;
    /** Room sections of the room. */
    roomSection?: RoomSectionType;
    /** Identifies the Housekeeping information.. */
    housekeeping?: HousekeepingType;
    /** Identifies the room Out of Order/Out of Service information. */
    outOfOrder?: RoomsOutOfOrderType;
    /** Identifies the room discrepancy information. */
    discrepancy?: RoomDiscrepanciesType;
    /**
     * This flag indicates component room.
     * @minLength 0
     * @maxLength 20
     */
    componentRoomNumber?: string;
    /** This flag indicates connecting rooms. */
    connectingRooms?: RoomRoomsType;
    /** This flag indicates component rooms. */
    componentRooms?: RoomRoomsType;
    /** @maxItems 4000 */
    attendant?: CurrentServicingAttendantType[];
    /** Hold attributes if any. */
    hold?: RoomHoldType;
    turndownInfo?: TurndownInfoType;
    /** @maxItems 4000 */
    resvInfo?: ReservationShortInfoType[];
    /**
     * List of component room numbers.
     * @maxItems 4000
     */
    componentRoomNumbers?: string[];
}
/** Basic information of room type. */
export interface RoomTypeShortInfoType {
    /** Indicates if room is a pseudoRoom. This is read-only. */
    pseudoRoom?: boolean;
    /** Indicates if room is a isSuiteRoom. This is read-only. */
    isSuiteRoom?: boolean;
    /**
     * Room Class of the room. This is read-only.
     * @minLength 0
     * @maxLength 20
     */
    roomClass?: string;
    /**
     * Short Description of room type.
     * @minLength 0
     * @maxLength 200
     */
    shortDescription?: string;
    /** Indicates if room type of the room is flagged as housekeeping. This is read-only. */
    houseKeeping?: boolean;
    /**
     * Specifies the smoking preference for room type of the room.
     * @minLength 0
     * @maxLength 20
     */
    smokingPreference?: string;
    /** Minimum occupancy for the room type. */
    minimumOccupancy?: number;
    /** Maximum occupancy for the room type. */
    maximumOccupancy?: number;
    /** Room Features for the room. */
    roomFeatures?: RoomFeaturesType;
    /** Indicates if room type is isAccessible. */
    isAccessible?: boolean;
    /**
     * Room type of the room.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** Indicates whether function space can be meeting room. */
    meetingRoom?: boolean;
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
/** Possible Rate plan rating values. */
export declare enum RatePlanRatingType {
    MostImportant = "MostImportant",
    Important = "Important",
    SomewhatImportant = "SomewhatImportant",
    LessImportant = "LessImportant",
    LeastImportant = "LeastImportant",
    NoValueSet = "NoValueSet"
}
export interface RoomSectionType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    daySectionCode?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    eveningSectionCode?: string;
}
/** Identifies the Housekeeping information. */
export interface HousekeepingType {
    /** The Room status information per the reservation and housekeeping. */
    housekeepingRoomStatus?: RoomStatusType;
    /** The Room person information per the reservation and housekeeping. */
    roomPersons?: RoomPersonsType;
    /** Possible values for the Guest Service Status. */
    guestServiceRequest?: GuestHousekeepingServiceRequestType;
    /** Cleaning priority for the room, if a priority was set. */
    cleaningPriority?: RoomCleaningPriorityType;
    /** Condition of the room, if a condition was set. */
    roomCondition?: RoomConditionType;
    /** Indicates if a linen change is necessary. */
    linenChange?: boolean;
    /** Facility task Code/ Task Code assigned to the room for the day. */
    facilityTaskCode?: CodeListType;
}
export interface RoomStatusType {
    /**
     * List of status of the reservation to which this Room is assigned..
     * @maxItems 4000
     */
    reservationStatusList?: HousekeepingRoomReservationStatusType[];
    /** Status of the room (Dirty/Clean/Inspected/Pickup). */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
    /** Front office status ( Occupied/Vacant ). */
    frontOfficeStatus?: FrontOfficeRoomStatusType;
    /** Housekeeping status ( Occupied/Vacant ). */
    housekeepingStatus?: FrontOfficeRoomStatusType;
}
/** Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room. */
export declare enum HousekeepingRoomReservationStatusType {
    Arrival = "Arrival",
    Arrived = "Arrived",
    DayUse = "DayUse",
    DueOut = "DueOut",
    Departed = "Departed",
    NotReserved = "NotReserved",
    StayOver = "StayOver"
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
/** Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. */
export declare enum FrontOfficeRoomStatusType {
    Vacant = "Vacant",
    Occupied = "Occupied"
}
export interface RoomPersonsType {
    frontOfficePersons?: number;
    houseKeepingPersons?: number;
}
/** Possible values for the Guest Service Status. */
export declare enum GuestHousekeepingServiceRequestType {
    DoNotDisturb = "DoNotDisturb",
    MakeUpRoom = "MakeUpRoom",
    NoStatusSelected = "NoStatusSelected"
}
/** Type to indicate the cleaning priority for a room. */
export interface RoomCleaningPriorityType {
    /** Priority sequence of the room for cleaning. */
    prioritySequence?: number;
}
/** Condition to be assigned on the room. */
export interface RoomConditionType {
    /** Code and Decription of Condition to be assigned on the room. */
    roomCondition?: CodeDescriptionType;
    /** Determine if room, after applying condition, is available or not in Room Assignment listing. */
    assignmentType?: RoomConditionAssigmentType;
    /**
     * Remarks on room condition assignment.
     * @minLength 0
     * @maxLength 2000
     */
    remarks?: string;
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
/** Simple type for Room Condition assignment type. Valid values are Available and NotAvailable Only. */
export declare enum RoomConditionAssigmentType {
    Available = "Available",
    NotAvailable = "NotAvailable"
}
/** @maxItems 4000 */
export type CodeListType = string[];
/**
 * Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS).
 * @maxItems 4000
 */
export type RoomsOutOfOrderType = RoomOutOfOrderType[];
/** Out Of Order and Out Of Service Room information. */
export interface RoomOutOfOrderType {
    /**
     * Notes or Remarks on the OO/OS room
     * @minLength 0
     * @maxLength 2000
     */
    repairRemarks?: string;
    /** Room Status which will be used on completion of OO/OS. */
    returnStatus?: HousekeepingRoomStatusType;
    /**
     * Reason Code why the room is OO/OS.
     * @minLength 0
     * @maxLength 20
     */
    reasonCode?: string;
    /**
     * Reason Description why the room is OO/OS.
     * @minLength 0
     * @maxLength 80
     */
    reasonDescription?: string;
    /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
    newDateRange?: DateRangeType;
    /** The out of order or out of service room status OO/OS. */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
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
 * Room Discrepancies between front office and housekeeping room status and number of persons in the room.
 * @maxItems 4000
 */
export type RoomDiscrepanciesType = RoomDiscrepancyType[];
/** Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. */
export declare enum RoomDiscrepancyType {
    Sleep = "Sleep",
    Skip = "Skip",
    PersonDiscrepancy = "PersonDiscrepancy"
}
/**
 * Collection of rooms.
 * @maxItems 4000
 */
export type RoomRoomsType = RoomRoomType[];
/** This type represents the primary room attributes. */
export interface RoomRoomType {
    /** Room type basic information of the room. */
    roomType?: RoomTypeShortInfoType;
    /**
     * Floor of the Room.
     * @minLength 0
     * @maxLength 20
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @minLength 0
     * @maxLength 20
     */
    floorDescription?: string;
    /** Room Features for the room. */
    roomFeatures?: RoomFeaturesType;
    /**
     * Detail Long Description Of The Room.
     * @minLength 0
     * @maxLength 20
     */
    roomDescription?: string;
    /** Description of the room. */
    description?: TranslationTextType2000;
    /**
     * This indicates room smoking preference.
     * @minLength 0
     * @maxLength 20
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @minLength 0
     * @maxLength 20
     */
    smokingPreferenceDescription?: string;
    /**
     * Building associated with the room.
     * @minLength 0
     * @maxLength 20
     */
    building?: string;
    /** Assignment Rating associated with the room. */
    roomAssignmentRating?: RatePlanRatingType;
    /** Indicates whether the room is accessibility compliant. */
    isAccessible?: boolean;
    /**
     * Code of the room.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** Indicates whether the room is a Meeting Room */
    meetingRoom?: boolean;
    /** Code and description of condition assigned on the room. */
    roomCondition?: CodeDescriptionType;
}
/** The Attendant Name and ID of the attendant servicing the room. */
export interface CurrentServicingAttendantType {
    /** Section Code the attendant has been assigned. */
    section?: HousekeepingSectionType;
    /**
     * The Floor which is assigned to the attendant.
     * @minLength 0
     * @maxLength 20
     */
    floor?: string;
    /**
     * Attendant's unique identifier.
     * @minLength 0
     * @maxLength 20
     */
    attendantId?: string;
    /**
     * Attendant's name.
     * @minLength 0
     * @maxLength 80
     */
    attendantName?: string;
    /**
     * Property where the attendant belongs.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Indicates if the Attendant is active.
     * @minLength 0
     * @maxLength 1
     */
    activeFlag?: string;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    /** The App User Name and ID of the user who started the service. */
    appUser?: ApplicationUserType;
    /**
     * The start time of the service.
     * @format date-time
     */
    startTime?: string;
    /** Status of the respective Housekeeping Attendant. */
    status?: ServicingAttendantStatusType;
}
/** Information regarding Housekeeping Sections. */
export interface HousekeepingSectionType {
    /**
     * Property where this section is defined.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * The Housekeeping Section Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Description of the Section.
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
    /**
     * Housekeeping Section Group.
     * @minLength 0
     * @maxLength 20
     */
    sectionGroup?: string;
    /** Target Credit for each task sheet created for this section when auto task assignment is broken out by section. */
    targetCredits?: number;
    /** Rooms count for this section code. This is auto populated while creating/fetching record. */
    rooms?: number;
    /** Number of housekeeping credits. This is auto populated while creating/fetching record. */
    roomCredits?: number;
    /** Display sequence when task assignment is automatically broken out by Section Group. */
    sequence?: number;
    /** Indicates if the Section Code is active. */
    inactive?: boolean;
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
export declare enum PersonNameTypeType {
    Primary = "Primary",
    Alternate = "Alternate",
    Incognito = "Incognito",
    External = "External",
    Phonetic = "Phonetic"
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
/** Possible values for the Status of a Servicing Attendant. */
export declare enum ServicingAttendantStatusType {
    Standby = "Standby",
    Break = "Break",
    Working = "Working",
    Completed = "Completed"
}
export interface RoomHoldType {
    /**
     * The date and time when hold will expire.
     * @format date-time
     */
    holdUntil?: string;
    /**
     * User who placed room on hold.
     * @minLength 0
     * @maxLength 80
     */
    holdUser?: string;
    /**
     * Comments of the room hold.
     * @minLength 0
     * @maxLength 2000
     */
    comments?: string;
}
export interface TurndownInfoType {
    /** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
    turndownStatusInfo?: TurndownStatusType;
}
/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
export declare enum TurndownStatusType {
    Required = "Required",
    NotRequired = "NotRequired",
    Compeleted = "Compeleted"
}
export interface ReservationShortInfoType {
    /**
     * Guest name that is registered for the reservation.
     * @minLength 0
     * @maxLength 80
     */
    guestName?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    reservationId?: ReservationId;
    /** Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room. */
    reservationStatusInfo?: HousekeepingRoomReservationStatusType;
    /** Room attached with stay detail information */
    stayDateInfo?: StayDateInfoType;
    /** VIP status of the guest. */
    vipStatus?: VIPStatusType;
    /** ProfileId of the guest. */
    profileId?: UniqueIDType;
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
/** Room attached with stay detail information */
export interface StayDateInfoType {
    /** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
    timeSpan?: TimeSpanType;
    /** Holds the Arrival and Departure Time Information */
    expectedTimes?: ResExpectedTimesType;
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
export interface HousekeepingBoard {
    /** Collection of Housekeeping Rooms and their information as well as paging attributes. */
    housekeepingRoomInfo?: {
        /** List of rooms and the room status. */
        housekeepingRooms?: HotelRoomsType;
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
    /**
     * Collection of Housekeeping Room Status Information.
     * @maxItems 4000
     */
    housekeepingRoomStatusInfoList?: HousekeepingRoomStatusInfo[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Housekeeping Room Status Info Type */
export interface HousekeepingRoomStatusInfo {
    /** @maxLength 2000 */
    housekeepingRoomStatus?: string;
    numberOfRooms?: number;
    /**
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
export interface CompleteRoomRepair {
    /** Criteria to complete the out of order status of a room and bring the room back into rotation. A list or range of rooms can be provided. */
    criteria?: {
        /**
         * Completing an existing OO/OS room by room number.
         * @maxItems 4000
         */
        roomRepairByRoomNumber?: {
            /**
             * @minLength 0
             * @maxLength 20
             */
            roomId?: string;
            /** Out Of Order and Out Of Service Room information. */
            roomOutOfOrder?: {
                /**
                 * Notes or Remarks on the OO/OS room
                 * @minLength 0
                 * @maxLength 2000
                 */
                repairRemarks?: string;
                /** Room Status which will be used on completion of OO/OS. */
                returnStatus?: HousekeepingRoomStatusType;
                /**
                 * Reason Code why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 20
                 */
                reasonCode?: string;
                /**
                 * Reason Description why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 80
                 */
                reasonDescription?: string;
                /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
                newDateRange?: DateRangeType;
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
            };
        }[];
        roomRangeList?: {
            /** Collection of room numbers to be process. */
            roomIds?: RoomIds;
            range?: {
                roomRange?: RoomRangeType;
            };
            /** Out Of Order and Out Of Service Room information. */
            roomOutOfOrder?: {
                /**
                 * Notes or Remarks on the OO/OS room
                 * @minLength 0
                 * @maxLength 2000
                 */
                repairRemarks?: string;
                /** Room Status which will be used on completion of OO/OS. */
                returnStatus?: HousekeepingRoomStatusType;
                /**
                 * Reason Code why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 20
                 */
                reasonCode?: string;
                /**
                 * Reason Description why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 80
                 */
                reasonDescription?: string;
                /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
                newDateRange?: DateRangeType;
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
            };
        };
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Collection of room numbers to be process.
 * @maxItems 4000
 */
export type RoomIds = string[];
export interface RoomRangeType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    fromRoomNumber?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    toRoomNumber?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface CompleteRoomRepairStatus {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface RoomRepairOutOfOrder {
    /** Criteria to set the room or a collection of rooms out of order. The criteria can include a collection of rooms or a range of rooms along with the date range. */
    criteria?: {
        roomRangeList?: {
            /**
             * Collection of room numbers to be process.
             * @maxItems 4000
             */
            roomIds?: string[];
            /** Range information. */
            range?: {
                /** Set the roomRange. */
                roomRange?: RoomRangeType;
            };
            /** Out Of Order and Out Of Service Room information. */
            roomOutOfOrder?: {
                /**
                 * Notes or Remarks on the OO/OS room
                 * @minLength 0
                 * @maxLength 2000
                 */
                repairRemarks?: string;
                /** Room Status which will be used on completion of OO/OS. */
                returnStatus?: HousekeepingRoomStatusType;
                /**
                 * Reason Code why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 20
                 */
                reasonCode?: string;
                /**
                 * Reason Description why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 80
                 */
                reasonDescription?: string;
                /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
                newDateRange?: DateRangeType;
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
            };
        };
    };
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
export interface RoomRepairOutOfService {
    /** Criteria to set the room or a collection of rooms out of service. The criteria can include a collection of rooms or a range of rooms along with the date range. */
    criteria?: {
        roomRangeList?: {
            /**
             * Collection of room numbers to be process.
             * @maxItems 4000
             */
            roomIds?: string[];
            /** Range information. */
            range?: {
                /** Set the roomRange. */
                roomRange?: RoomRangeType;
            };
            /** Out Of Order and Out Of Service Room information. */
            roomOutOfOrder?: {
                /**
                 * Notes or Remarks on the OO/OS room
                 * @minLength 0
                 * @maxLength 2000
                 */
                repairRemarks?: string;
                /** Room Status which will be used on completion of OO/OS. */
                returnStatus?: HousekeepingRoomStatusType;
                /**
                 * Reason Code why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 20
                 */
                reasonCode?: string;
                /**
                 * Reason Description why the room is OO/OS.
                 * @minLength 0
                 * @maxLength 80
                 */
                reasonDescription?: string;
                /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
                newDateRange?: DateRangeType;
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
            };
        };
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface HousekeepingRoomStatusCriteria {
    /**
     * Collection of room numbers for which the status is to be updated.
     * @maxItems 4000
     */
    roomList?: RoomInformationType[];
    /** The new Housekeeping status that will be assigned. */
    housekeepingStatus?: FrontOfficeRoomStatusType;
    /** The new Room status that will be assigned. */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
    /** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
    turndownStatus?: TurndownStatusType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Room Information needed in updating the status. */
export interface RoomInformationType {
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    reservationId?: ReservationId;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface HousekeepingRoomStatus {
    /** Refer to Generic common types document. */
    warnings?: WarningsType;
    links?: Links;
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
 * @title OPERA Cloud Housekeeping Service API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /hsk/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description Use this API to return the current housekeeping discrepant rooms for a specific property based on search parameters such as roomDiscrepancyStatus, roomClass, floor, dueOut, etc. These are rooms where the housekeeping status does not match the front office status.<p><strong>OperationId:</strong>getHousekeepingDiscrepancies</p>
         *
         * @tags Housekeeping
         * @name GetHousekeepingDiscrepancies
         * @summary Get hotel housekeeping discrepant rooms
         * @request GET:/hotels/{hotelId}/housekeepingDiscrepancies
         */
        getHousekeepingDiscrepancies: (hotelId: string, query?: {
            /**
             * Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only.
             * @uniqueItems true
             */
            roomDiscrepancyStatus?: ('Sleep' | 'Skip' | 'PersonDiscrepancy')[];
            fromRoomNumber?: string;
            toRoomNumber?: string;
            /** Room Class of the Room. */
            roomClass?: string[];
            /**
             * The ending value of the date range.
             * @format date
             */
            housekeepingEndDate?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            housekeepingStartDate?: string;
            /** The floor of room to be fetched. */
            floor?: string[];
            /** List the rooms based on the flag DUE OUT for departure only. */
            dueOut?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<Rooms, any>>;
        /**
         * @description Use this API to return the status of rooms for a specific property based on search criteria such as hotelId, limit, housekeepingRoomStatus, frontOfficeRoomStatus, roomAssignmentStatus, roomType, roomFeatures. The results will give you a list of rooms, and their current housekeeping details.  You could then go ahead and update any of these rooms by using postOutOfOrderRoom for example. <p><strong>OperationId:</strong>getHousekeepingOverview</p>
         *
         * @tags Housekeeping
         * @name GetHousekeepingOverview
         * @summary Get housekeeping rooms overview
         * @request GET:/hotels/{hotelId}/housekeepingOverview
         */
        getHousekeepingOverview: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
             * @uniqueItems true
             */
            housekeepingRoomStatus?: ('Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService')[];
            /**
             * Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied.
             * @uniqueItems true
             */
            frontOfficeRoomStatus?: ('Vacant' | 'Occupied')[];
            /**
             * Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed.
             * @uniqueItems true
             */
            turndownStatus?: ('Required' | 'NotRequired' | 'Compeleted')[];
            /**
             * Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even.
             * @uniqueItems true
             */
            roomParityStatus?: ('Odd' | 'Even')[];
            /** @uniqueItems true */
            serviceRequestStatus?: ('Open' | 'PendingFollowUp' | 'Closed' | 'DoNotDisturb' | 'MakeUpRoom')[];
            /** @uniqueItems true */
            roomAssignmentStatus?: ('Assigned' | 'Unassigned')[];
            /**
             * Simple type for housekeeping instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: ('Summary' | 'ResvInfo' | 'TurndownInfo')[];
            fromRoomNumber?: string;
            toRoomNumber?: string;
            /** The floor of room to be fetched. */
            floor?: string[];
            /** Room Type of the Room. */
            roomType?: string[];
            /** Room Class of the Room. */
            roomClass?: string[];
            /** Building of the Room. */
            building?: string[];
            /** Features of the Room. */
            roomFeatures?: string[];
            /** AM Sections of the Room. */
            daySection?: string[];
            /** PM Sections of the Room. */
            eveningSection?: string[];
            /** The status of the reservation to which this Room is assigned. */
            reservationStatus?: string[];
            /**
             * Possible values for the Guest Service Status.
             * @uniqueItems true
             */
            guestServiceRequest?: 'DoNotDisturb' | 'MakeUpRoom' | 'NoStatusSelected';
            /** Wild Card entry for Room numbers to be Fetched. */
            roomIdText?: string;
            /** Indicates we need to exclude the combo rooms while fetching the housekeeping details. */
            excludeCombo?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<HousekeepingBoard, any>>;
        /**
         * @description Use this API to get a list of rooms for a hotel that are Out of Order.  You can narrow down your results with search criteria such as Room class, Room Type, date range. <p><strong>OperationId:</strong>getOutOfOrderRooms</p>
         *
         * @tags Housekeeping
         * @name GetOutOfOrderRooms
         * @summary Get Out of Order Rooms
         * @request GET:/hotels/{hotelId}/rooms/outOfOrderRooms
         */
        getOutOfOrderRooms: (hotelId: string, query: {
            /**
             * The start date for which the out of order / out of service rooms are to be fetched.
             * @format date
             */
            startDate: string;
            /** Room number to be Fetched. */
            roomId?: string;
            /**
             * The end date for which the out of order / out of service rooms are to be fetched.
             * @format date
             */
            endDate?: string;
            /** The room type of out of order / out of service rooms to be fetched. */
            roomTypes?: string[];
            /** The room class of out of order / out of service rooms to be fetched. */
            roomClasses?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Rooms, any>>;
        /**
         * @description Use this API when one or more rooms are no longer Out Of Order, and can now be available for a guest to stay in.  Specify in the request what status the room(s) should be returned to, such as clean, Inspected, dirty or Pickup. <p><strong>OperationId:</strong>completeOutOfOrderRooms</p>
         *
         * @tags Housekeeping
         * @name CompleteOutOfOrderRooms
         * @summary Complete rooms Out Of Order
         * @request PUT:/hotels/{hotelId}/rooms/outOfOrderRooms
         */
        completeOutOfOrderRooms: (hotelId: string, completeRoomRepair: CompleteRoomRepair, params?: RequestParams) => Promise<AxiosResponse<CompleteRoomRepairStatus, any>>;
        /**
         * @description This API allows you to initially set rooms to 'Out Of Order' housekeeping status and update existing outOfOrderRooms. <p><strong>OperationId:</strong>postOutOfOrderRooms</p>
         *
         * @tags Housekeeping
         * @name PostOutOfOrderRooms
         * @summary Set multiple rooms to Out Of Order
         * @request POST:/hotels/{hotelId}/rooms/outOfOrderRooms
         */
        postOutOfOrderRooms: (hotelId: string, roomRepairOutOfOrder: RoomRepairOutOfOrder, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API when one or more rooms are no longer Out Of Service, and can now be available for a guest to stay in.  Specify in the request what status the room(s) should be returned to, such as clean, Inspected, dirty or Pickup. <p><strong>OperationId:</strong>completeOutOfServiceRooms</p>
         *
         * @tags Housekeeping
         * @name CompleteOutOfServiceRooms
         * @summary Complete Rooms Out of Service
         * @request PUT:/hotels/{hotelId}/rooms/outOfServiceRooms
         */
        completeOutOfServiceRooms: (hotelId: string, completeRoomRepair: CompleteRoomRepair, params?: RequestParams) => Promise<AxiosResponse<CompleteRoomRepairStatus, any>>;
        /**
         * @description Use this API to get a list of rooms for a hotel that are Out of Service.  You can narrow down your results with search criteria such as Room class, Room Type, date range. <p><strong>OperationId:</strong>getOutOfServiceRooms</p>
         *
         * @tags Housekeeping
         * @name GetOutOfServiceRooms
         * @summary Get Out of Service Rooms
         * @request GET:/hotels/{hotelId}/rooms/outOfServiceRooms
         */
        getOutOfServiceRooms: (hotelId: string, query: {
            /**
             * The start date for which the out of order / out of service rooms are to be fetched.
             * @format date
             */
            startDate: string;
            /** Room number to be Fetched. */
            roomId?: string;
            /**
             * The end date for which the out of order / out of service rooms are to be fetched.
             * @format date
             */
            endDate?: string;
            /** The room type of out of order / out of service rooms to be fetched. */
            roomTypes?: string[];
            /** The room class of out of order / out of service rooms to be fetched. */
            roomClasses?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Rooms, any>>;
        /**
         * @description This API allows you to initially set rooms to 'Out Of Service' housekeeping status and update existing outOfServiceRooms. <p><strong>OperationId:</strong>postOutOfServiceRooms</p>
         *
         * @tags Housekeeping
         * @name PostOutOfServiceRooms
         * @summary Set multiple rooms to Out Of Service
         * @request POST:/hotels/{hotelId}/rooms/outOfServiceRooms
         */
        postOutOfServiceRooms: (hotelId: string, roomRepairOutOfService: RoomRepairOutOfService, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to update the housekeeping room status for multiple rooms.  Statuses typically include Inspected, Clean, Pickup or Dirty. <p><strong>OperationId:</strong>putRoomRelatedStatus</p>
         *
         * @tags Housekeeping
         * @name PutRoomRelatedStatus
         * @summary Update Housekeeping Room Status
         * @request PUT:/hotels/{hotelId}/rooms/status
         */
        putRoomRelatedStatus: (hotelId: string, housekeepingRoomStatusCriteria: HousekeepingRoomStatusCriteria, params?: RequestParams) => Promise<AxiosResponse<HousekeepingRoomStatus, any>>;
    };
}
