/** Response element for frontOffice statistics. */
export interface Statistics {
    /** . */
    statisticsCode?: HSKStatReportCodeType;
    /**
     * Statistical date of the requested report.
     * @format date
     */
    calendarDate?: string;
    /** Base statistic set holder which defines the span of the statistical data. */
    metricSet?: {
        /** @maxItems 4000 */
        metrics?: HSKStatType[];
        /** @maxLength 2000 */
        code?: string;
        /** @format date */
        start?: string;
        /** @format date */
        end?: string;
    }[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Supported Housekeeping report codes. */
export declare enum HSKStatReportCodeType {
    HouseSummary = "HouseSummary",
    HouseSummaryMonthToDate = "HouseSummaryMonthToDate",
    HouseSummaryYearToDate = "HouseSummaryYearToDate",
    ReservationActivity = "ReservationActivity",
    ReservationActivityDaily = "ReservationActivityDaily",
    ReservationActivityMonthToDate = "ReservationActivityMonthToDate",
    ReservationActivityYearToDate = "ReservationActivityYearToDate",
    ComplimentaryOrHouseUse = "ComplimentaryOrHouseUse",
    DailyProjection = "DailyProjection",
    RoomStatus = "RoomStatus",
    LastHourStatus = "LastHourStatus",
    Turndown = "Turndown",
    InHouse = "InHouse",
    CheckIns = "CheckIns",
    CheckOuts = "CheckOuts",
    AvailableRooms = "AvailableRooms",
    RoomMaintenance = "RoomMaintenance",
    ReservationStatistics = "ReservationStatistics",
    VIPGuests = "VIPGuests",
    AdvanceCheckIn = "AdvanceCheckIn",
    BlockArrivals = "BlockArrivals",
    ReservationsCancellationsToday = "ReservationsCancellationsToday",
    AIRoomAssignment = "AIRoomAssignment",
    CompRouting = "CompRouting"
}
/** Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units. */
export interface HSKStatType {
    /** Statistical value. */
    value?: number;
    /** Statistical unit category. */
    category?: StatUnitCategoryType;
    /** Supported housekeeping statistical codes. */
    code?: HSKStatCodeType;
}
/** Supported statistical units. */
export declare enum StatUnitCategoryType {
    Numeric = "Numeric",
    Amount = "Amount"
}
/** Supported housekeeping statistical codes. */
export declare enum HSKStatCodeType {
    ApprovedCompPostings = "ApprovedCompPostings",
    StagedCompPostings = "StagedCompPostings",
    DeclinedCompPostings = "DeclinedCompPostings",
    CompRoutingInstructionsRequests = "CompRoutingInstructionsRequests",
    TotalPhysicalRooms = "TotalPhysicalRooms",
    TotalRoomsToSell = "TotalRoomsToSell",
    TotalOutOfOrder = "TotalOutOfOrder",
    TotalOutOfService = "TotalOutOfService",
    TotalRevenue = "TotalRevenue",
    PercentRoomsOccupied = "PercentRoomsOccupied",
    StayoverRooms = "StayoverRooms",
    StayoverPersons = "StayoverPersons",
    StayoverVIP = "StayoverVIP",
    DeparturesExpectedRooms = "DeparturesExpectedRooms",
    DeparturesExpectedPersons = "DeparturesExpectedPersons",
    DeparturesExpectedVIP = "DeparturesExpectedVIP",
    DeparturesActualRooms = "DeparturesActualRooms",
    DeparturesActualPersons = "DeparturesActualPersons",
    DeparturesActualVIP = "DeparturesActualVIP",
    DeparturesInLastHour = "DeparturesInLastHour",
    ArrivalsInLastHour = "ArrivalsInLastHour",
    ArrivalsTotal = "ArrivalsTotal",
    ArrivalsExpectedRooms = "ArrivalsExpectedRooms",
    ArrivalsExpectedPersons = "ArrivalsExpectedPersons",
    ArrivalsExpectedVIP = "ArrivalsExpectedVIP",
    ArrivalsExpectedRoomsMadeToday = "ArrivalsExpectedRoomsMadeToday",
    ArrivalsExpectedPersonsMadeToday = "ArrivalsExpectedPersonsMadeToday",
    ArrivalsExpectedVIPMadeToday = "ArrivalsExpectedVIPMadeToday",
    ArrivalsActualRooms = "ArrivalsActualRooms",
    ArrivalsActualPersons = "ArrivalsActualPersons",
    ArrivalsActualVIP = "ArrivalsActualVIP",
    ExtendedStaysRooms = "ExtendedStaysRooms",
    ExtendedStaysPersons = "ExtendedStaysPersons",
    ExtendedStaysVIP = "ExtendedStaysVIP",
    DeparturesTotal = "DeparturesTotal",
    EarlyDeparturesRooms = "EarlyDeparturesRooms",
    EarlyDeparturesPersons = "EarlyDeparturesPersons",
    EarlyDeparturesVIP = "EarlyDeparturesVIP",
    DayUseRooms = "DayUseRooms",
    DayUsePersons = "DayUsePersons",
    DayUseVIP = "DayUseVIP",
    WalkInRooms = "WalkInRooms",
    WalkInPersons = "WalkInPersons",
    WalkInVIP = "WalkInVIP",
    CanceledOnArrivalRooms = "CanceledOnArrivalRooms",
    CanceledOnArrivalPersons = "CanceledOnArrivalPersons",
    CanceledOnArrivalVIP = "CanceledOnArrivalVIP",
    ComplimentaryArrivalRooms = "ComplimentaryArrivalRooms",
    ComplimentaryArrivalPersons = "ComplimentaryArrivalPersons",
    ComplimentaryArrivalVIP = "ComplimentaryArrivalVIP",
    ComplimentaryStayoverRooms = "ComplimentaryStayoverRooms",
    ComplimentaryStayoverPersons = "ComplimentaryStayoverPersons",
    ComplimentaryStayoverVIP = "ComplimentaryStayoverVIP",
    ComplimentaryDepartureRooms = "ComplimentaryDepartureRooms",
    ComplimentaryDeparturePersons = "ComplimentaryDeparturePersons",
    ComplimentaryDepartureVIP = "ComplimentaryDepartureVIP",
    HouseUseArrivalVIP = "HouseUseArrivalVIP",
    HouseUseStayoverRooms = "HouseUseStayoverRooms",
    HouseUseStayoverPersons = "HouseUseStayoverPersons",
    HouseUseStayoverVIP = "HouseUseStayoverVIP",
    HouseUseDepartureRooms = "HouseUseDepartureRooms",
    HouseUseDeparturePersons = "HouseUseDeparturePersons",
    HouseUseDepartureVIP = "HouseUseDepartureVIP",
    MinAvailableTonightRooms = "MinAvailableTonightRooms",
    MaxOccupiedTonightRooms = "MaxOccupiedTonightRooms",
    MaxOccupiedTonightPersons = "MaxOccupiedTonightPersons",
    MaxOccupiedTonightVIP = "MaxOccupiedTonightVIP",
    MaxPercentageOccupiedTonightRooms = "MaxPercentageOccupiedTonightRooms",
    BlocksNotPickedUp = "BlocksNotPickedUp",
    IndividualRooms = "IndividualRooms",
    IndividualPersons = "IndividualPersons",
    IndividualVIP = "IndividualVIP",
    GroupAndBlockRooms = "GroupAndBlockRooms",
    GroupAndBlockPersons = "GroupAndBlockPersons",
    GroupAndBlockVIP = "GroupAndBlockVIP",
    RoomRevenue = "RoomRevenue",
    AverageRoomRevenue = "AverageRoomRevenue",
    InspectedRooms = "InspectedRooms",
    InspectedVacant = "InspectedVacant",
    InspectedAssigned = "InspectedAssigned",
    InspectedOccupied = "InspectedOccupied",
    CleanedRooms = "CleanedRooms",
    CleanVacant = "CleanVacant",
    CleanAssigned = "CleanAssigned",
    CleanOccupied = "CleanOccupied",
    DirtyVacant = "DirtyVacant",
    DirtyAssigned = "DirtyAssigned",
    DirtyOccupied = "DirtyOccupied",
    PickupVacant = "PickupVacant",
    PickupAssigned = "PickupAssigned",
    PickupOccupied = "PickupOccupied",
    OutOfOrderVacant = "OutOfOrderVacant",
    OutOfOrderAssigned = "OutOfOrderAssigned",
    OutOfOrderOccupied = "OutOfOrderOccupied",
    OutOfServiceVacant = "OutOfServiceVacant",
    OutOfServiceAssigned = "OutOfServiceAssigned",
    OutOfServiceOccupied = "OutOfServiceOccupied",
    QueueRooms = "QueueRooms",
    TurndownRequired = "TurndownRequired",
    TurndownNotRequired = "TurndownNotRequired",
    TurndownCompletedRequired = "TurndownCompletedRequired",
    AdultsInHouse = "AdultsInHouse",
    ChildrenInHouse = "ChildrenInHouse",
    AdultsExpectedCheckedOut = "AdultsExpectedCheckedOut",
    ChildrenExpectedCheckedOut = "ChildrenExpectedCheckedOut",
    AdultsDeparted = "AdultsDeparted",
    ChildrenDeparted = "ChildrenDeparted",
    InHouseRooms = "InHouseRooms",
    InHouse = "InHouse",
    MaxOccupancyPercentage = "MaxOccupancyPercentage",
    Stayover = "Stayover",
    TotalRoomsReserved = "TotalRoomsReserved",
    RevPar = "RevPar",
    SkipRooms = "SkipRooms",
    SleepRooms = "SleepRooms",
    HouseUseArrivalRooms = "HouseUseArrivalRooms",
    HouseUseArrivalPersons = "HouseUseArrivalPersons",
    AverageCheckInTime = "AverageCheckInTime",
    CurrentAveWaitTime = "CurrentAveWaitTime",
    CheckedInsTotal = "CheckedInsTotal",
    ExpectedCheckInsTotal = "ExpectedCheckInsTotal",
    CheckedOutsTotal = "CheckedOutsTotal",
    ExpectedCheckOutsTotal = "ExpectedCheckOutsTotal",
    ScheduledCheckOutsTotal = "ScheduledCheckOutsTotal",
    RoomMaintenanceResolvedTotal = "RoomMaintenanceResolvedTotal",
    RoomMaintenanceUnResolvedTotal = "RoomMaintenanceUnResolvedTotal",
    PreRegisteredTotal = "PreRegisteredTotal",
    VIPPreRegisteredTotal = "VIPPreRegisteredTotal",
    OpenFolioTotal = "OpenFolioTotal",
    TurndownTotal = "TurndownTotal",
    VIPTurndownTotal = "VIPTurndownTotal",
    VIPGuestsArriving = "VIPGuestsArriving",
    VIPGuestsDeparting = "VIPGuestsDeparting",
    VIPGuestsTotal = "VIPGuestsTotal",
    IndividualAdvanceCheckedInCurrent = "IndividualAdvanceCheckedInCurrent",
    BlockAdvanceCheckedInCurrent = "BlockAdvanceCheckedInCurrent",
    IndividualAdvanceCheckedInInhouse = "IndividualAdvanceCheckedInInhouse",
    BlockAdvanceCheckedInInhouse = "BlockAdvanceCheckedInInhouse",
    IndividualAdvanceCheckedInTotal = "IndividualAdvanceCheckedInTotal",
    BlockAdvanceCheckedInTotal = "BlockAdvanceCheckedInTotal",
    InHouseBlocksTotal = "InHouseBlocksTotal",
    CancellationsTotal = "CancellationsTotal",
    NewReservationsTotal = "NewReservationsTotal",
    ArrivalResvs = "ArrivalResvs",
    ArrivalVIPResvs = "ArrivalVIPResvs",
    ArrivalMemberResvs = "ArrivalMemberResvs",
    ArrivalUnallocResvs = "ArrivalUnallocResvs",
    ArrivalManualAssgnResvs = "ArrivalManualAssgnResvs",
    ArrivalAIAssgnResvs = "ArrivalAIAssgnResvs",
    ArrivalAIUpgResvs = "ArrivalAIUpgResvs",
    ArrivalAIAssgnVIPResvs = "ArrivalAIAssgnVIPResvs",
    ArrivalAIAssgnMemberResvs = "ArrivalAIAssgnMemberResvs",
    ArrivalAIAssgnOverridden = "ArrivalAIAssgnOverridden"
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
export interface TaskSheetStatistics {
    /** Information regarding the Task Sheet statistics. */
    taskStatisticsInfo?: HSKTaskSheetStatisticsInfoType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Holds the task sheet statistics information. */
export interface HSKTaskSheetStatisticsInfoType {
    /** @maxItems 4000 */
    taskSheetStatisticsInfo?: HSKTaskSheetInfoType[];
    /**
     * Refer to Generic common types document
     * @maxItems 4000
     */
    masterInfoList?: MasterInfoType[];
}
/** Holds the information for the task sheet. */
export interface HSKTaskSheetInfoType {
    /** Holds the assigned task codes for a tasksheet. */
    assignedTasks?: AssignedTasksType;
    /**
     * @minLength 0
     * @maxLength 100
     */
    attendant?: string;
    taskSeqNo?: number;
    /** Task Sheet classification. */
    taskSheetType?: TaskSheetType;
    taskSheetNo?: number;
    /**
     * @format date
     * @maxLength 8
     */
    taskDate?: string;
    totalTaskCredits?: number;
    totalCompletedCredits?: number;
    averageActualTimeInSecs?: number;
    /** Holds the task sheet statistics details information. */
    taskSheetDetails?: HSKTaskSheetDetailsInfoType;
    /** @maxItems 4000 */
    roomSummary?: {
        /** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
        housekeepingRoomStatusType?: 'Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService';
        totalCount?: number;
    }[];
}
/**
 * Holds the assigned task codes for a tasksheet.
 * @maxItems 4000
 */
export type AssignedTasksType = AssignedTaskType[];
/** Holds the assigned task code for a tasksheet. */
export interface AssignedTaskType {
    /**
     * The Code for the task.
     * @minLength 0
     * @maxLength 20
     */
    taskCode?: string;
}
/** Task Sheet classification. */
export declare enum TaskSheetType {
    NoServiceRequired = "NoServiceRequired",
    DoNotDisturb = "DoNotDisturb",
    ManuallyCreated = "ManuallyCreated",
    AutomaticGeneration = "AutomaticGeneration",
    Isolated = "Isolated",
    ExtraRooms = "ExtraRooms"
}
/** Holds the task sheet statistics details information. */
export interface HSKTaskSheetDetailsInfoType {
    /**
     * Details of the room which is part of the Task Sheet. The room details will be returned when the request for IncludeTaskSheetDetails(flag in the search type) is true.
     * @maxItems 4000
     */
    rooms?: {
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
        accessible?: boolean;
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
        /** Identifies the site plan location of the room. */
        sitePlanSection?: SitePlanSectionType;
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
        /** @maxItems 4000 */
        reservationInfo?: ReservationInfoType[];
        /**
         * Information regarding the current servicing of the room.
         * @maxItems 4000
         */
        servicingInfo?: CurrentServicingAttendantType[];
        /** @maxItems 4000 */
        attendantTimeEntriesInfo?: HSKAttendantTimeLogsType[];
        /**
         * Task Sheet instructions at the room level.
         * @minLength 0
         * @maxLength 2000
         */
        instructions?: string;
        /** Total credits for this room. */
        totalCredits?: number;
        /**
         * The wake up time of the current date
         * @format date
         * @maxLength 8
         */
        wakeUpTime?: string;
        /** The sequence for cleaning this room in the task sheet. This would apply only for Pickup and Dirty rooms. */
        cleaningSequence?: number;
        /** The sequence for this room from configuration. */
        defaultSequence?: number;
        /** The priority for this room. */
        hasPriority?: boolean;
        /** The actual time spent by the attendant when doing a service to the room. */
        actualTimeInMins?: number;
        /** The number of skip count for that room. */
        roomSkipCount?: number;
    }[];
}
/** Basic information of room type. */
export interface RoomTypeShortInfoType {
    /** Indicates if room is a pseudo. This is read-only. */
    pseudo?: boolean;
    /** Indicates if room is a suite. This is read-only. */
    suite?: boolean;
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
    /**
     * Building associated with the room.
     * @minLength 0
     * @maxLength 20
     */
    building?: string;
    /** Assignment Rating associated with the room. */
    roomAssignmentRating?: RatePlanRatingType;
    /** Minimum occupancy for the room type. */
    minimumOccupancy?: number;
    /** Maximum occupancy for the room type. */
    maximumOccupancy?: number;
    /** Room Features for the room. */
    roomFeatures?: RoomFeaturesType;
    /** Indicates if room type is accessible. */
    accessible?: boolean;
    /**
     * Room type of the room.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** Indicates whether function space can be meeting room. */
    meetingRoom?: boolean;
}
/** Possible Rate plan rating values. */
export declare enum RatePlanRatingType {
    MostImportant = "MostImportant",
    Important = "Important",
    SomewhatImportant = "SomewhatImportant",
    LessImportant = "LessImportant",
    LeastImportant = "LeastImportant",
    NoValueSet = "NoValueSet"
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
    roomStatus?: RoomStatusType;
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
    roomStatus?: HousekeepingRoomStatusType;
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
    reasonDesc?: string;
    /** The new start date and end date, if the dates were changed as part of an update. This would be blank for new OO/OS rooms. */
    newDateRange?: DateRangeType;
    /** The out of order or out of service room status OO/OS. */
    roomStatus?: HousekeepingRoomStatusType;
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
/** Represents the site plan section record. */
export interface SitePlanSectionType {
    /**
     * The site plan section code.
     * @minLength 0
     * @maxLength 20
     */
    sectionCode?: string;
    /**
     * The section type.
     * @minLength 0
     * @maxLength 20
     */
    sectionType?: string;
    /**
     * The link code for the section.
     * @minLength 0
     * @maxLength 20
     */
    linkCode?: string;
    /**
     * The coordinates for this section.
     * @maxLength 2000
     */
    coordinates?: string;
    /**
     * The description of this section.
     * @maxLength 2000
     */
    description?: string;
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
    accessible?: boolean;
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
/** Holds the information for the task sheet. */
export interface HSKAttendantTimeLogsType {
    /** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
    startRoomStatus?: HousekeepingRoomStatusType;
    /** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
    endRoomStatus?: HousekeepingRoomStatusType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    startTime?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    endTime?: string;
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
export declare enum MasterInfoCodeDetailType {
    LongDescription = "LongDescription",
    ShortDescription = "ShortDescription"
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
/** Response for the fetch of current Reservations In Queue statistics. Contains the statistic information. */
export interface ReservationQueueStatistics {
    /** Queue Reservation statistics. Currently statistic is by Room Type. */
    statistics?: ReservationQueueStatisticsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type for statistics of the reservations currently in Queue for Check-In. */
export interface ReservationQueueStatisticsType {
    /**
     * Room Type statistics for the reservations currently in Queue for Check-In.
     * @maxItems 4000
     */
    roomType?: ReservationQueueRoomTypeStatisticsType[];
    /** The average time, in seconds, a reservation was on queue prior to Check-In. */
    averageQueueTimeToCheckIn?: number;
    /** The average time, in seconds, of the reservations currently in queue. */
    averageQueueTimeCurrentReservations?: number;
}
/** Type for Room Type statistics for reservations currently in Queue for Check-In. Statistics would be the number of rooms for each room type which is currently in Queue. Statistics will also include the current number of rooms for each room status for the resort at the current time i.e the number of dirty rooms, clean rooms for each room type. In addition, the statistics will include the number of rooms per room type which are Vacant / Occupied. */
export interface ReservationQueueRoomTypeStatisticsType {
    /**
     * The room type for the statistics.
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /**
     * The number of rooms for the room type grouped by their FO status i.e Vacant or Occupied.
     * @maxItems 4000
     */
    fOStatus?: {
        /**
         * The total number of rooms for the room type grouped by their Room Status i.e Clean, Dirty etc..
         * @maxItems 4000
         */
        roomStatus?: {
            /** The room status code example Clean, Dirty etc. */
            housekeepingRoomStatus?: HousekeepingRoomStatusType;
            /** The total number of rooms for the room status. */
            totalRooms?: number;
        }[];
        /** The FO status code i.e Vacant, Occupied. */
        frontOfficeStatus?: FrontOfficeRoomStatusType;
        /** The total number of rooms for the Front Office status. */
        totalRooms?: number;
    }[];
    /** The total number of reservations in Queue for this room type. */
    totalInQueue?: number;
}
/** Validation checks includes the following: - Reservation is not valid to be checked in. - Split is still required before the reservation can be checked in. - Room information is missing. - Payment information is missing. - The status of the room needs to be reviewed. - Sharers was impacted. The check-in process affected the reservation details of shared guests on the reservation. - Sharers was not impacted. The check-in process has not affected the reservation details of shared guests on the reservation. */
export interface Reservation {
    /** Criteria element to check-in a reservation */
    reservation?: {
        /**
         * Expected room no. If this attribute is included, then Opera will check if the currently configured room no in the database matches this value.
         * @minLength 0
         * @maxLength 20
         */
        roomId?: string;
        /**
         * Request to update the checkout time.
         * @format date-time
         */
        checkOutTime?: string;
        /**
         * Represents the time the user starts the check in process.
         * @format date-time
         */
        startCheckInProcessTime?: string;
        /**
         * Represents the time the user compeletes the check in process.
         * @format date-time
         */
        endCheckInProcessTime?: string;
        /** An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid. */
        lockHandle?: number;
        /** Dictates whether Profile privacy stop in check in is prompted. */
        profilePrivacyPrompted?: boolean;
        /** Dictates whether to ignore warnings ( e.g. room availability ) before check in. */
        ignoreWarnings?: boolean;
        /** Indicates the Stop Check In reservation Global Alert flag. */
        stopCheckin?: boolean;
        /** Flag for Print Registration Card */
        printRegistration?: boolean;
        /** Flag to override advance payment validation. */
        overrideAdvancePaymentValidation?: boolean;
    };
    /**
     * Instructions to fetch reservations .
     * @maxItems 4000
     */
    fetchReservationInstruction?: CheckedInReservationInstructionType[];
    /** When "true" alerts and comments are fetched. When "false", these alerts and comments are not retrieved. */
    includeNotifications?: boolean;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Simple type for fetch checked in reservation instructions that can be used in requests for partial operations. */
export declare enum CheckedInReservationInstructionType {
    ReservationDetail = "ReservationDetail"
}
/** CheckIn response will commonly be errors over warnings. If a check has to be done before checking a reservation to a hotel, then the VerifyCheckinReservation operation can be utilized. */
export interface CheckedinReservation {
    /**
     * Reservation record showing the current state of the reservation.
     * @maxItems 4000
     */
    reservation?: HotelReservationType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
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
     * For reservation preferences, you will want to send ReservationPreferenceType as the preferenceType object to acknowledge any reservation related process with the request.
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
export declare enum AmountDeterminationType {
    Inclusive = "Inclusive",
    Exclusive = "Exclusive"
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
    ageQualifyingCode?: 'ADULT' | 'CHILD' | 'OTHER' | 'CHILDBUCKET1' | 'CHILDBUCKET2' | 'CHILDBUCKET3' | 'CHILDBUCKET4' | 'CHILDBUCKET5';
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
export declare enum ProfileSharedLevelType {
    Global = "Global",
    Property = "Property",
    Cro = "Cro"
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
export declare enum ECertificateScopeType {
    Global = "Global",
    Hotel = "Hotel",
    MultiHotel = "MultiHotel"
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
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AwardId {
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
}
/** Indicates that OPERA E-Certificate is issued by external system. */
export declare enum ECertificateIssueSourceType {
    Opera = "Opera",
    Web = "Web",
    Interface = "Interface"
}
/** Indicates that guest purchased OPERA E-Certificate. */
export declare enum ECertificateIssueType {
    Assigned = "Assigned",
    OptedIn = "OptedIn",
    Purchased = "Purchased"
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
    /**
     * Code of system where profile is subscribed to.
     * @minLength 0
     * @maxLength 40
     */
    systemCode?: string;
    /**
     * Type of system where profile is subscribed to.
     * @minLength 0
     * @maxLength 40
     */
    systemType?: string;
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
export declare enum RoomRateAvailReasonType {
    Available = "Available",
    Restricted = "Restricted",
    RestrictedDueToInventory = "RestrictedDueToInventory",
    RestrictedDueToOccupancy = "RestrictedDueToOccupancy",
    RestrictedDueToItemInventory = "RestrictedDueToItemInventory"
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
export declare enum OwnerResTypeType {
    Owner = "Owner",
    AuthorizedUser = "AuthorizedUser"
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
export declare enum ColorType {
    Red = "Red",
    DarkRed = "DarkRed",
    Green = "Green",
    DarkGreen = "DarkGreen",
    LightGreen = "LightGreen",
    Orange = "Orange",
    White = "White",
    Yellow = "Yellow",
    DarkYellow = "DarkYellow",
    Purple = "Purple",
    Brown = "Brown",
    Gray = "Gray",
    Aqua = "Aqua",
    Chocolate = "Chocolate",
    Blue = "Blue",
    LightBlue = "LightBlue",
    DarkBlue = "DarkBlue",
    Cyan = "Cyan",
    DarkCyan = "DarkCyan",
    Magenta = "Magenta",
    DarkMagenta = "DarkMagenta",
    Black = "Black"
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
     * Master Certificate No.
     * @minLength 0
     * @maxLength 20
     */
    masterCertificiateNo?: string;
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
export declare enum FBAStatusType {
    Ordered = "Ordered",
    Attached = "Attached",
    Posted = "Posted",
    Settled = "Settled",
    Reimbursed = "Reimbursed"
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
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface DateTimeSpanType {
    /** @format date-time */
    startDateTime?: string;
    /** @format date-time */
    endDateTime?: string;
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
export declare enum PrepaidCardTrxTypeType {
    Activate = "Activate",
    Cancel = "Cancel",
    Cashout = "Cashout",
    Inquiry = "Inquiry",
    Issue = "Issue",
    Redeem = "Redeem",
    Reload = "Reload"
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
export declare enum ProductSourceType {
    Reservation = "Reservation",
    RateHeader = "RateHeader",
    RateDetail = "RateDetail"
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
    packageInternalID?: number;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface BlockId {
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
/** Response of fetch room keys operation. */
export interface RoomKeyInfo {
    /** Collection of Room Keys information. */
    roomKeysInfoList?: RoomKeysInfoListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Contains details of Room key.
 * @maxItems 4000
 */
export type RoomKeysInfoListType = RoomKeyInfoType[];
/** Contains detail information of room keys . */
export interface RoomKeyInfoType {
    /**
     * Name of the resort .
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Number of keys has been created for the reservation .
     * @minLength 1
     * @maxLength 3
     */
    keyCount?: string;
    /**
     * Start date and time of the key.
     * @format date-time
     */
    keyStartDate?: string;
    /**
     * Expiry date and time of the key.
     * @format date-time
     */
    keyExpiryDate?: string;
    /** Key options of the key. */
    keyOptions?: CodeListType;
    /** Additional rooms included in the key creation of reservation room. */
    additionalRooms?: CodeListType;
    /**
     * Room Number.
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /** Reservation ID of the reservation of the room key . */
    reservationId?: ReservationId;
    /** KeyTrack Data. */
    keyTrack?: KeyTrackType;
}
export interface KeyTrackType {
    /**
     * @minLength 0
     * @maxLength 200
     */
    keyTrack1?: string;
    /**
     * @minLength 0
     * @maxLength 200
     */
    keyTrack2?: string;
    /**
     * @minLength 0
     * @maxLength 200
     */
    keyTrack3?: string;
    /**
     * @minLength 0
     * @maxLength 200
     */
    keyTrack4?: string;
}
/** Request for generation of room key. */
export interface RoomKey {
    /** Collection of unique reservation identifiers for the reservation we are trying to make a room key for. */
    reservationIdList?: UniqueIDListType;
    /**
     * A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys.
     * @maxLength 2000
     */
    roomNumber?: string;
    /** KeyTrack Data. */
    keyTrack?: KeyTrackType;
    /** @maxLength 2000 */
    resort?: string;
    noOfKeys?: number;
    /** @format date-time */
    keyValidityStart?: string;
    /** @format date-time */
    keyValidityEnd?: string;
    /** @maxLength 2000 */
    encoderTerminal?: string;
    /** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
    encoderId?: UniqueIDType;
    /** Simple type for representing room key type. */
    keyType?: RoomKeyType;
    /** Key card types. */
    keyCardType?: KeyCardType;
    /** @maxLength 2000 */
    keyCardUId?: string;
    /** @maxLength 2000 */
    keyOptions?: string;
    /** Collection of additional rooms to be included in key creation of reservation room. */
    additionalRooms?: CodeListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Simple type for representing room key type. */
export declare enum RoomKeyType {
    New = "New",
    Duplicate = "Duplicate",
    Lost = "Lost",
    OneShot = "OneShot",
    RoomMove = "RoomMove",
    ReEncode = "ReEncode",
    Remove = "Remove",
    ModifyStay = "ModifyStay"
}
/** Key card types. */
export declare enum KeyCardType {
    Mifare1K = "Mifare1K",
    Mifare4K = "Mifare4K",
    MifareUltralight = "MifareUltralight"
}
/** Response for room key creation. */
export interface RoomKeyDetails {
    /** @maxLength 2000 */
    keyCardData?: string;
    /** KeyTrack Data. */
    keyTrack?: KeyTrackType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
export interface HotelRooms {
    /** Hotel rooms response based on criteria request. */
    hotelRoomsDetails?: HotelRoomsType;
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
    accessible?: boolean;
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
    /** Identifies the site plan location of the room. */
    sitePlanSection?: SitePlanSectionType;
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
 * @title OPERA Cloud Front Desk Operations Service
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /fof/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
         *
         * @tags FOFStats
         * @name GetFrontOfficeStatistics
         * @summary Get front office statistics
         * @request GET:/hotels/{hotelId}/frontOfficeStatistics/{statisticsCode}
         */
        getFrontOfficeStatistics: (statisticsCode: 'AdvanceCheckIn' | 'AIRoomAssignment' | 'AvailableRooms' | 'CheckIns' | 'CheckOuts' | 'ComplimentaryOrHouseUse' | 'DailyProjection' | 'HouseSummary' | 'HouseSummaryMonthToDate' | 'HouseSummaryYearToDate' | 'InHouse' | 'LastHourStatus' | 'ReservationActivity' | 'ReservationActivityDaily' | 'ReservationActivityMonthToDate' | 'ReservationActivityYearToDate' | 'ReservationsCancellationsToday' | 'ReservationStatistics' | 'RoomMaintenance' | 'RoomStatus' | 'Turndown' | 'VIPGuests' | 'CompRouting', hotelId: string, query?: {
            /**
             * Start date of the report.
             * @format date
             */
            date?: string;
            /**
             * Supported housekeeping statistical codes.
             * @uniqueItems true
             */
            metric?: ('AdultsDeparted' | 'AdultsExpectedCheckedOut' | 'AdultsInHouse' | 'ArrivalAIAssgnMemberResvs' | 'ArrivalAIAssgnOverridden' | 'ArrivalAIAssgnResvs' | 'ArrivalAIAssgnVIPResvs' | 'ArrivalAIUpgResvs' | 'ArrivalManualAssgnResvs' | 'ArrivalMemberResvs' | 'ArrivalResvs' | 'ArrivalsActualPersons' | 'ArrivalsActualRooms' | 'ArrivalsActualVIP' | 'ArrivalsExpectedPersons' | 'ArrivalsExpectedPersonsMadeToday' | 'ArrivalsExpectedRooms' | 'ArrivalsExpectedRoomsMadeToday' | 'ArrivalsExpectedVIP' | 'ArrivalsExpectedVIPMadeToday' | 'ArrivalsInLastHour' | 'ArrivalsTotal' | 'ArrivalUnallocResvs' | 'ArrivalVIPResvs' | 'AverageCheckInTime' | 'AverageRoomRevenue' | 'BlockAdvanceCheckedInCurrent' | 'BlockAdvanceCheckedInInhouse' | 'BlockAdvanceCheckedInTotal' | 'BlocksNotPickedUp' | 'CanceledOnArrivalPersons' | 'CanceledOnArrivalRooms' | 'CanceledOnArrivalVIP' | 'CancellationsTotal' | 'CheckedInsTotal' | 'CheckedOutsTotal' | 'ChildrenDeparted' | 'ChildrenExpectedCheckedOut' | 'ChildrenInHouse' | 'CleanAssigned' | 'CleanedRooms' | 'CleanOccupied' | 'CleanVacant' | 'ComplimentaryArrivalPersons' | 'ComplimentaryArrivalRooms' | 'ComplimentaryArrivalVIP' | 'ComplimentaryDeparturePersons' | 'ComplimentaryDepartureRooms' | 'ComplimentaryDepartureVIP' | 'ComplimentaryStayoverPersons' | 'ComplimentaryStayoverRooms' | 'ComplimentaryStayoverVIP' | 'CurrentAveWaitTime' | 'DayUsePersons' | 'DayUseRooms' | 'DayUseVIP' | 'DeparturesActualPersons' | 'DeparturesActualRooms' | 'DeparturesActualVIP' | 'DeparturesExpectedPersons' | 'DeparturesExpectedRooms' | 'DeparturesExpectedVIP' | 'DeparturesInLastHour' | 'DeparturesTotal' | 'DirtyAssigned' | 'DirtyOccupied' | 'DirtyVacant' | 'EarlyDeparturesPersons' | 'EarlyDeparturesRooms' | 'EarlyDeparturesVIP' | 'ExpectedCheckInsTotal' | 'ExpectedCheckOutsTotal' | 'ExtendedStaysPersons' | 'ExtendedStaysRooms' | 'ExtendedStaysVIP' | 'GroupAndBlockPersons' | 'GroupAndBlockRooms' | 'GroupAndBlockVIP' | 'HouseUseArrivalPersons' | 'HouseUseArrivalRooms' | 'HouseUseArrivalVIP' | 'HouseUseDeparturePersons' | 'HouseUseDepartureRooms' | 'HouseUseDepartureVIP' | 'HouseUseStayoverPersons' | 'HouseUseStayoverRooms' | 'HouseUseStayoverVIP' | 'IndividualAdvanceCheckedInCurrent' | 'IndividualAdvanceCheckedInInhouse' | 'IndividualAdvanceCheckedInTotal' | 'IndividualPersons' | 'IndividualRooms' | 'IndividualVIP' | 'InHouse' | 'InHouseBlocksTotal' | 'InHouseRooms' | 'InspectedAssigned' | 'InspectedOccupied' | 'InspectedRooms' | 'InspectedVacant' | 'MaxOccupancyPercentage' | 'MaxOccupiedTonightPersons' | 'MaxOccupiedTonightRooms' | 'MaxOccupiedTonightVIP' | 'MaxPercentageOccupiedTonightRooms' | 'MinAvailableTonightRooms' | 'NewReservationsTotal' | 'OpenFolioTotal' | 'OutOfOrderAssigned' | 'OutOfOrderOccupied' | 'OutOfOrderVacant' | 'OutOfServiceAssigned' | 'OutOfServiceOccupied' | 'OutOfServiceVacant' | 'PercentRoomsOccupied' | 'PickupAssigned' | 'PickupOccupied' | 'PickupVacant' | 'PreRegisteredTotal' | 'QueueRooms' | 'RevPar' | 'RoomMaintenanceResolvedTotal' | 'RoomMaintenanceUnResolvedTotal' | 'RoomRevenue' | 'ScheduledCheckOutsTotal' | 'SkipRooms' | 'SleepRooms' | 'Stayover' | 'StayoverPersons' | 'StayoverRooms' | 'StayoverVIP' | 'TotalOutOfOrder' | 'TotalOutOfService' | 'TotalPhysicalRooms' | 'TotalRevenue' | 'TotalRoomsReserved' | 'TotalRoomsToSell' | 'TurndownCompletedRequired' | 'TurndownNotRequired' | 'TurndownRequired' | 'TurndownTotal' | 'VIPGuestsArriving' | 'VIPGuestsDeparting' | 'VIPGuestsTotal' | 'VIPPreRegisteredTotal' | 'VIPTurndownTotal' | 'WalkInPersons' | 'WalkInRooms' | 'ApprovedCompPostings' | 'StagedCompPostings' | 'DeclinedCompPostings' | 'CompRoutingInstructionsRequests' | 'WalkInVIP')[];
            /** Required when statisticsCode is ReservationsCancellationsToday */
            parameterNames?: string[];
            /** Required when statisticsCode is ReservationsCancellationsToday */
            parameterValues?: string[];
            /** Room Class of the Room. */
            roomClasses?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Statistics, any>>;
        /**
         * @description This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
         *
         * @tags FOFStats
         * @name GetFrontOfficeStatisticsWithDateRange
         * @summary Get front office Statistics
         * @request GET:/hotels/{hotelId}/frontOfficeStatisticsRange/{statisticsCode}
         */
        getFrontOfficeStatisticsWithDateRange: (statisticsCode: 'ReservationActivityDaily', hotelId: string, query?: {
            /**
             * End date of the report.
             * @format date
             */
            endDate?: string;
            /**
             * Start date of the report.
             * @format date
             */
            date?: string;
            /**
             * Supported housekeeping statistical codes.
             * @uniqueItems true
             */
            metric?: ('AdultsDeparted' | 'AdultsExpectedCheckedOut' | 'AdultsInHouse' | 'ArrivalAIAssgnMemberResvs' | 'ArrivalAIAssgnOverridden' | 'ArrivalAIAssgnResvs' | 'ArrivalAIAssgnVIPResvs' | 'ArrivalAIUpgResvs' | 'ArrivalManualAssgnResvs' | 'ArrivalMemberResvs' | 'ArrivalResvs' | 'ArrivalsActualPersons' | 'ArrivalsActualRooms' | 'ArrivalsActualVIP' | 'ArrivalsExpectedPersons' | 'ArrivalsExpectedPersonsMadeToday' | 'ArrivalsExpectedRooms' | 'ArrivalsExpectedRoomsMadeToday' | 'ArrivalsExpectedVIP' | 'ArrivalsExpectedVIPMadeToday' | 'ArrivalsInLastHour' | 'ArrivalsTotal' | 'ArrivalUnallocResvs' | 'ArrivalVIPResvs' | 'AverageCheckInTime' | 'AverageRoomRevenue' | 'BlockAdvanceCheckedInCurrent' | 'BlockAdvanceCheckedInInhouse' | 'BlockAdvanceCheckedInTotal' | 'BlocksNotPickedUp' | 'CanceledOnArrivalPersons' | 'CanceledOnArrivalRooms' | 'CanceledOnArrivalVIP' | 'CancellationsTotal' | 'CheckedInsTotal' | 'CheckedOutsTotal' | 'ChildrenDeparted' | 'ChildrenExpectedCheckedOut' | 'ChildrenInHouse' | 'CleanAssigned' | 'CleanedRooms' | 'CleanOccupied' | 'CleanVacant' | 'ComplimentaryArrivalPersons' | 'ComplimentaryArrivalRooms' | 'ComplimentaryArrivalVIP' | 'ComplimentaryDeparturePersons' | 'ComplimentaryDepartureRooms' | 'ComplimentaryDepartureVIP' | 'ComplimentaryStayoverPersons' | 'ComplimentaryStayoverRooms' | 'ComplimentaryStayoverVIP' | 'CurrentAveWaitTime' | 'DayUsePersons' | 'DayUseRooms' | 'DayUseVIP' | 'DeparturesActualPersons' | 'DeparturesActualRooms' | 'DeparturesActualVIP' | 'DeparturesExpectedPersons' | 'DeparturesExpectedRooms' | 'DeparturesExpectedVIP' | 'DeparturesInLastHour' | 'DeparturesTotal' | 'DirtyAssigned' | 'DirtyOccupied' | 'DirtyVacant' | 'EarlyDeparturesPersons' | 'EarlyDeparturesRooms' | 'EarlyDeparturesVIP' | 'ExpectedCheckInsTotal' | 'ExpectedCheckOutsTotal' | 'ExtendedStaysPersons' | 'ExtendedStaysRooms' | 'ExtendedStaysVIP' | 'GroupAndBlockPersons' | 'GroupAndBlockRooms' | 'GroupAndBlockVIP' | 'HouseUseArrivalPersons' | 'HouseUseArrivalRooms' | 'HouseUseArrivalVIP' | 'HouseUseDeparturePersons' | 'HouseUseDepartureRooms' | 'HouseUseDepartureVIP' | 'HouseUseStayoverPersons' | 'HouseUseStayoverRooms' | 'HouseUseStayoverVIP' | 'IndividualAdvanceCheckedInCurrent' | 'IndividualAdvanceCheckedInInhouse' | 'IndividualAdvanceCheckedInTotal' | 'IndividualPersons' | 'IndividualRooms' | 'IndividualVIP' | 'InHouse' | 'InHouseBlocksTotal' | 'InHouseRooms' | 'InspectedAssigned' | 'InspectedOccupied' | 'InspectedRooms' | 'InspectedVacant' | 'MaxOccupancyPercentage' | 'MaxOccupiedTonightPersons' | 'MaxOccupiedTonightRooms' | 'MaxOccupiedTonightVIP' | 'MaxPercentageOccupiedTonightRooms' | 'MinAvailableTonightRooms' | 'NewReservationsTotal' | 'OpenFolioTotal' | 'OutOfOrderAssigned' | 'OutOfOrderOccupied' | 'OutOfOrderVacant' | 'OutOfServiceAssigned' | 'OutOfServiceOccupied' | 'OutOfServiceVacant' | 'PercentRoomsOccupied' | 'PickupAssigned' | 'PickupOccupied' | 'PickupVacant' | 'PreRegisteredTotal' | 'QueueRooms' | 'RevPar' | 'RoomMaintenanceResolvedTotal' | 'RoomMaintenanceUnResolvedTotal' | 'RoomRevenue' | 'ScheduledCheckOutsTotal' | 'SkipRooms' | 'SleepRooms' | 'Stayover' | 'StayoverPersons' | 'StayoverRooms' | 'StayoverVIP' | 'TotalOutOfOrder' | 'TotalOutOfService' | 'TotalPhysicalRooms' | 'TotalRevenue' | 'TotalRoomsReserved' | 'TotalRoomsToSell' | 'TurndownCompletedRequired' | 'TurndownNotRequired' | 'TurndownRequired' | 'TurndownTotal' | 'VIPGuestsArriving' | 'VIPGuestsDeparting' | 'VIPGuestsTotal' | 'VIPPreRegisteredTotal' | 'VIPTurndownTotal' | 'WalkInPersons' | 'WalkInRooms' | 'ApprovedCompPostings' | 'StagedCompPostings' | 'DeclinedCompPostings' | 'CompRoutingInstructionsRequests' | 'WalkInVIP')[];
            /** Required when statisticsCode is ReservationsCancellationsToday */
            parameterNames?: string[];
            /** Required when statisticsCode is ReservationsCancellationsToday */
            parameterValues?: string[];
            /** Room Class of the Room. */
            roomClasses?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<Statistics, any>>;
        /**
         * @description This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
         *
         * @tags FOFStats
         * @name GetTaskSheetStatistics
         * @summary Get housekeeping statistics
         * @request GET:/hotels/{hotelId}/houseKeepingStatistics
         */
        getTaskSheetStatistics: (hotelId: string, query?: {
            /**
             * This flag, if true, enables fetching statistics for all the housekeeping tasks assigned.
             * @default true
             */
            includeAllAssignedTasks?: boolean;
            /** @default false */
            includeTaskSheetsDetails?: boolean;
            /** Task code of the task sheet. */
            taskCode?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TaskSheetStatistics, any>>;
        /**
         * @description Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
         *
         * @tags FOFStats
         * @name GetReservationQueueStatistics
         * @summary Get hotel reservation queue statistics
         * @request GET:/hotels/{hotelId}/queueReservationsStatistics
         */
        getReservationQueueStatistics: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<ReservationQueueStatistics, any>>;
        /**
         * @description Use this API to check in a guest reservation.  The reservation needs to be 'due in' status.  The API also provides an option to select an available room. <p><strong>OperationId:</strong>postCheckIn</p>
         *
         * @tags FrontDeskOperations
         * @name PostCheckIn
         * @summary Checks in a guest
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/checkIns
         */
        postCheckIn: (reservationId: string, hotelId: string, reservation: Reservation, params?: RequestParams) => Promise<AxiosResponse<CheckedinReservation, any>>;
        /**
         * @description You can use this API to retrieve any existing room key information for a reservation. <p><strong>OperationId:</strong>getRoomKeys</p>
         *
         * @tags FrontDeskOperations
         * @name GetRoomKeys
         * @summary Fetch the room keys
         * @request GET:/hotels/{hotelId}/reservations/{reservationId}/roomKeys
         */
        getRoomKeys: (reservationId: string, hotelId: string, params?: RequestParams) => Promise<AxiosResponse<RoomKeyInfo, any>>;
        /**
         * @description You can use this API to create a room key request for a reservation to the active Door Locking System Property Interface. <p><strong>OperationId:</strong>postRoomKey</p>
         *
         * @tags FrontDeskOperations
         * @name PostRoomKey
         * @summary Requests room key(s)
         * @request POST:/hotels/{hotelId}/reservations/{reservationId}/roomKeys
         */
        postRoomKey: (reservationId: string, hotelId: string, roomKey: RoomKey, params?: RequestParams) => Promise<AxiosResponse<RoomKeyDetails, any>>;
        /**
         * @description Use this API to return available rooms based on search criteria such as hotelId, hotelRoomStatus, roomType, roomFeatureCode,etc.<p><strong>OperationId:</strong>getHotelRooms</p>
         *
         * @tags FrontDeskOperations
         * @name GetHotelRooms
         * @summary Get hotel available rooms
         * @request GET:/hotels/{hotelId}/rooms
         */
        getHotelRooms: (hotelId: string, query?: {
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            roomNumberWildcard?: string;
            /**
             * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
             * @uniqueItems true
             */
            hotelRoomStatus?: ('Clean' | 'Dirty' | 'Pickup' | 'Inspected' | 'OutOfOrder' | 'OutOfService')[];
            /**
             * Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied.
             * @uniqueItems true
             */
            hotelFORoomStatus?: ('Vacant' | 'Occupied')[];
            fromRoomNumber?: string;
            toRoomNumber?: string;
            /** @format date */
            hotelRoomStartDate?: string;
            /** @format date */
            hotelRoomEndDate?: string;
            duration?: string;
            /** The room types of hotel rooms to be fetched. */
            roomType?: string[];
            /** The room class of hotel rooms to be fetched. */
            roomClass?: string;
            /** The floor of room to be fetched. */
            floor?: string;
            /** This flag when set to true will include rooms assigned to due out reservations. */
            includeDueOut?: boolean;
            /**
             * When IncludeDueOut is enable,it is the departure time before which to search.
             * @format date-time
             */
            departureTime?: string;
            /** A code representing a room feature. */
            roomFeatureCode?: string[];
            /** A code representing a room feature. */
            description?: string[];
            /** Display Order sequence. */
            orderSequence?: number[];
            /** Indicates quantity. */
            quantity?: number[];
            /** The smoking preference of room to be fetched. */
            smokingPreference?: string;
            /** This flag when set to true will include all room conditions, when set to false then room with "General Assignment" condition type will be excluded from the result. */
            includeAllRoomConditions?: boolean;
            /** This flag when set to true will include all component rooms */
            includeComponentRooms?: boolean;
            /** This flag when set to true will include all pseudo rooms */
            includePseudoRooms?: boolean;
            /** This flag when set to true will work for Available Rooms functionality */
            includeOORoomCheck?: boolean;
            /** This flag when set to true will include only connecting rooms. */
            connectingRoomsOnly?: boolean;
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            reservationId?: string;
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            reservationIdContext?: string;
            /** A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). */
            reservationIdType?: string;
            /** This flag when set to true will include only pseudo rooms */
            pseudoRoomsOnly?: boolean;
            /** This flag when set to true will includes attendent in Rooms */
            includeAttendentInRoom?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<HotelRooms, any>>;
    };
}
