/** Response object for information regarding Block Inventory Statistics. */
export interface BlockInventoryStatistic {
    /** List of block inventory statistics that is grouped by statistic date. */
    blockInventoryStatistics?: {
        /** Summary and Detail statistic for block inventory that is group by statistic date. */
        blockInventoryStatistic?: BlockInventoryStatisticType[];
        /** Evaluated total page count based on the requested max fetch count. */
        totalPages?: number;
        /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
        offset?: number;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        allRowsFetched?: boolean;
        /** Total number of rows queried */
        totalRows?: number;
    };
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Summary and Detail statistics for block inventory. */
export interface BlockInventoryStatisticType {
    /** Summary statistic for all blocks. */
    blockSummaryStatistics?: BlockSummaryStatisticsType;
    /** Detailed summary statistics for each block. */
    blockDetailStatistics?: BlockDetailStatisticsType;
    /** Group Rooms Control Sell Messages configured for a particular date range. */
    sellMessages?: SellMessagesType;
}
/**
 * Statistic units group by status, booking and daily targets.
 * @maxItems 4000
 */
export type BlockSummaryStatisticsType = BlockSummaryStatisticType[];
/** Statistic units group by status, booking and daily targets. */
export interface BlockSummaryStatisticType {
    /** List of Statistic Units for Status Types e.g. Definite, Inquiry, Actual. */
    statusSummaryStatistic?: StatusSummaryStatisticType;
    /** List of Statistic Units for Booking types e.g. Sales Allowance, Total House Availability. */
    bookingSummaryStatistic?: StatisticUnitsType;
    /** List of Statistic Units for Daily Targets types e.g. Room Nights, Room Rates, Room Revenue. */
    dailyTargetsSummaryStatistic?: StatisticUnitsType;
    /**
     * Date of the block inventory statistic.
     * @format date
     * @maxLength 8
     */
    statisticDate?: string;
}
/**
 * Statistic summary for a particular status.
 * @maxItems 4000
 */
export type StatusSummaryStatisticType = StatusStatisticType[];
/** List of statistic units for a particular status. */
export interface StatusStatisticType {
    /**
     * Unit type to hold statistic code and value pair.
     * @maxItems 4000
     */
    statisticUnit?: StatisticUnitType[];
    /** Status type of statistic, e.g. Definite. */
    status?: string;
}
/** Unit type to hold statistic code and value pair e.g. [code - value] [Definite - 20] [Sales Allowance - 30] and its sub units. */
export interface StatisticUnitType {
    /** Code of the statistic unit. */
    code?: string;
    /** Value of the statistic unit. */
    value?: string;
}
/**
 * Unit type to hold statistic code and value pair.
 * @maxItems 4000
 */
export type StatisticUnitsType = StatisticUnitType[];
/**
 * Compose of block information and statistic summary for a particular block.
 * @maxItems 4000
 */
export type BlockDetailStatisticsType = BlockDetailStatisticType[];
/** Information and statistic summary for a particular block. */
export interface BlockDetailStatisticType {
    /** Contains information like Block Name, Account Name, Average Room Rate of the block. */
    blockInformation?: BlockInfoType;
    /** Statistic summary for the block. */
    blockStatistics?: BlockStatusStatisticsType;
}
/** Contains information of the business block . */
export interface BlockInfoType {
    /**
     * The hotel code of the business block.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** The unique identifier of the business block. */
    blockId?: UniqueIDType;
    /**
     * Name of the business block.
     * @minLength 0
     * @maxLength 2000
     */
    blockName?: string;
    /**
     * Block code for the block.
     * @minLength 0
     * @maxLength 20
     */
    blockCode?: string;
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
     * Date after which unused block rooms should be returned to house.
     * @format date
     * @maxLength 8
     */
    cutOffDate?: string;
    /** Code and Description used to define a status e.g. (INT, TENT, DEF, CXL) (initial, tentative, definite, cancelled). */
    blockStatus?: CodeDescriptionType;
    /** Color from block status configuration. */
    blockStatusColor?: StatusColorType;
    /** The unique identifier of the Account Name. */
    accountId?: UniqueIDType;
    /**
     * Account name attached to the business block.
     * @minLength 0
     * @maxLength 200
     */
    accountName?: string;
    /** The unique identifier of the Contact Name. */
    contactId?: UniqueIDType;
    /**
     * Contact name attached to the business block.
     * @minLength 0
     * @maxLength 200
     */
    contactName?: string;
    /** Room Sales Manager Code and Name attached to the business block. */
    roomSalesManager?: CodeDescriptionType;
    /**
     * Currency Code attached to the business block.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /** Average room rate of the business block. */
    averageRoomRate?: number;
    /**
     * Indicates the likelihood of the block moving to the next active block status.
     * @minLength 0
     * @maxLength 20
     */
    conversionCode?: string;
    /**
     * Indicates the ranking of the block.
     * @minLength 0
     * @maxLength 20
     */
    rankingCode?: string;
    /**
     * Guarantee Code for the block.
     * @minLength 0
     * @maxLength 20
     */
    guaranteeCode?: string;
    /** Indicates the Rate Protection details for the block. */
    rateProtectionDetails?: BlockRateProtectionType;
    /** Indicates the non-competing industry details. */
    nonCompeteDetails?: BlockNonCompeteType;
    /** Indicate Block Classification. */
    blockClassification?: BlockClassificationType;
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
export declare enum StatusColorType {
    White = "White",
    Red = "Red",
    Blue = "Blue",
    Cyan = "Cyan",
    Magenta = "Magenta",
    Green = "Green",
    Brown = "Brown",
    Black = "Black",
    Yellow = "Yellow",
    Gray = "Gray"
}
/** Block Rate Protection code information. */
export interface BlockRateProtectionType {
    /** Indicates the type of rate protection. 'All' means all dates are rate protected. 'None' specifies no rate protection. 'Selected' specifies few dates are rate protected. */
    criteria?: RateProtectionType;
    /** Specifies all the Rate protected dates in the selected range. */
    protectedDates?: DatesType;
}
/** Simple type for specifying the block protection type. */
export declare enum RateProtectionType {
    All = "All",
    Selected = "Selected",
    None = "None"
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
/** Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD. */
export declare enum BlockClassificationType {
    MasterBlock = "MasterBlock",
    MasterTour = "MasterTour",
    MasterAllocation = "MasterAllocation",
    MasterItinerary = "MasterItinerary",
    LeadMaster = "LeadMaster",
    RegularBooking = "RegularBooking",
    SubBlock = "SubBlock",
    SubTour = "SubTour",
    FitContract = "FitContract",
    SubAllocation = "SubAllocation",
    SubItinerary = "SubItinerary",
    Lead = "Lead",
    FitMaster = "FitMaster",
    Opportunity = "Opportunity"
}
/**
 * Summary statistics of a block for each date.
 * @maxItems 4000
 */
export type BlockStatusStatisticsType = BlockStatusStatisticType[];
/** Contains summary statistic for a block on a particular statistic date. */
export interface BlockStatusStatisticType {
    /** Statistic summary for each status (Blocked, Pickup, Contract). */
    statusSummaryStatistic?: StatisticUnitsType;
    /**
     * Date of the statistic.
     * @format date
     * @maxLength 8
     */
    statisticDate?: string;
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
/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
export declare enum UsedInModuleType {
    Blocks = "Blocks",
    Reservations = "Reservations",
    FunctionDiary = "FunctionDiary",
    LookToBookSales = "LookToBookSales",
    GroupRoomsControl = "GroupRoomsControl"
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
/** A response for Hotel Inventories meeting the search criteria. Returns inventory classified on room type, class and house level for a given property. */
export interface HotelInventory {
    /** Refer to Inventory common types document. */
    hotelInventories?: HotelInventoryType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** A collection of Reservation objects and Unique IDs of Reservation. */
export interface HotelInventoryType {
    /** Collection of House level Inventory counts for the date ranges. */
    houseInventory?: InventoryCountsListType;
    /**
     * Collection of Room type level Inventory counts for the date ranges.
     * @maxItems 4000
     */
    roomTypeInventories?: InventoryLevelCountsListType[];
    /**
     * Collection of Room Class level Inventory counts for the date ranges.
     * @maxItems 4000
     */
    roomClassInventories?: InventoryLevelCountsListType[];
}
/**
 * Collection of Inventory counts for the date ranges.
 * @maxItems 4000
 */
export type InventoryCountsListType = InventoryCountsType[];
/** Inventory counts for the given date range. */
export interface InventoryCountsType {
    /** Indicates whether enough inventory is available or not. */
    available?: boolean;
    /** Available Inventory count. */
    availableCount?: number;
    /** Available Tentative Inventory count. */
    availableTentativeCount?: number;
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    endDate?: string;
}
/** Collection of Inventory counts for the date ranges. */
export interface InventoryLevelCountsListType {
    /**
     * Collection of Inventory counts for the date ranges.
     * @maxItems 4000
     */
    inventoryCounts?: InventoryCountsType[];
    /**
     * Inventory Group/Level code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /** Integer Group/Level order sequence number. */
    sequence?: number;
}
/**
 * List of inventory statistics that is grouped by statistic date.
 * @maxItems 4000
 */
export type InventoryStatistics = StatisticType[];
/** Defines all details needed to create a statistical report. */
export interface StatisticType {
    /**
     * Statistic Codes.
     * @maxItems 4000
     */
    statistics?: StatisticCodeType[];
    /**
     * A text field used to communicate the proper name of the hotel.
     * @minLength 0
     * @maxLength 80
     */
    hotelName?: string;
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
    statisticDate?: StatisticSetType[];
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
    revenue?: RevenueCategorySummaryType[];
    /**
     * Collection of CountCategorySummary elements. Used if count values reported.
     * @maxItems 4000
     */
    inventory?: NumericCategorySummaryType[];
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
/** This element has count data for each count category such as number of guests, rooms occupied, etc. */
export interface NumericCategorySummaryType {
    /** The total count for the category in NumericCategoryCode. */
    value?: number;
    /**
     * The representation of a numeric category such as Guests : Number of guests, RoomsOcc : Rooms occupied.
     * @minLength 0
     * @maxLength 40
     */
    code?: string;
}
/** Return object to the request for information regarding items inventory/availability. */
export interface ItemInventory {
    /** Collection of Reservations returned/fetched as per the criteria in the fetch request. */
    itemsInventory?: PoolItemInventoryCountsListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Items/Item pool with brief information and its Inventory counts for the given dates.
 * @maxItems 4000
 */
export type PoolItemInventoryCountsListType = PoolItemInventoryCountsType[];
/** Basic information regarding an Item. */
export interface PoolItemInventoryCountsType {
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
    /** Collection of Inventory counts for the given dates. */
    inventories?: DailyItemInventoryCountsListType;
    /** Collection of items in the pool with brief information and its Inventory counts for the given dates. It element is populated when the parent item is a pull(when ItemPool is true.). ItemPool flag for this item, which is an item in the pool, cannot not be true. */
    poolItems?: ItemInventoryCountsListType;
}
/** Defines a Time period with startDate time and an endDate time. */
export interface TimeWindowType {
    /** Start Time of the Time window. */
    startTime?: string;
    /** End Time of the Time window. */
    endTime?: string;
}
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield endDate date. */
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
/**
 * Inventory counts for the given date.
 * @maxItems 4000
 */
export type DailyItemInventoryCountsListType = DailyItemInventoryCountsType[];
/** Inventory counts for the given date. */
export interface DailyItemInventoryCountsType {
    /**
     * Date of the item inventory.
     * @format date
     * @maxLength 8
     */
    date?: string;
    /** Total Item count. */
    total?: number;
    /** Available Item count. */
    available?: number;
}
/**
 * Provides item's brief information and a collection of Inventory counts for the given dates for the item.
 * @maxItems 4000
 */
export type ItemInventoryCountsListType = ItemInventoryCountsType[];
/** Basic information regarding an Item. */
export interface ItemInventoryCountsType {
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
    /** Collection of Inventory counts for the given dates. */
    inventories?: DailyItemInventoryCountsListType;
}
/** Object containing the item hold details. */
export interface HoldItemInventory {
    /** Item information. */
    holdItemInfo?: HoldItemInventoryType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request parameter for holding an Item Inventory. */
export interface HoldItemInventoryType {
    /** Unique ID of the one requesting for the item hold. */
    heldById?: UniqueIDType;
    /** Type of the entity that is requesting for the item hold. */
    heldBy?: HeldByType;
    /** Unique ID of the one requesting for the item hold. */
    itemHoldId?: number;
    /** List of Item Info to hold. */
    holdItemInfoList?: HoldItemInfoListType;
    /**
     * Hotel Code whose Item Inventory is being requested.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Flag to indicate if inventory check will be overriden. */
    overrideInventory?: boolean;
}
/** Type of the entity that is requesting for the item hold. */
export declare enum HeldByType {
    Event = "Event",
    Reservation = "Reservation",
    Allotment = "Allotment"
}
/**
 * Info of an item inventory that is requested for Hold.
 * @maxItems 4000
 */
export type HoldItemInfoListType = HoldItemInfoType[];
/** Information about an item inventory that is requested for hold. */
export interface HoldItemInfoType {
    /** Item ID to hold. */
    itemId?: UniqueIDType;
    /**
     * Item Code to hold.
     * @minLength 0
     * @maxLength 20
     */
    itemCode?: string;
    /** Date Range to hold the requested item. */
    timeSpan?: TimeSpanType;
    /** Number of items to hold. */
    count?: number;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/** Response object to fetch the item hold details. */
export interface HoldItemsInventory {
    /** Collection of Reservations returned/fetched as per the criteria in the fetch request. */
    itemsInventory?: PoolItemInventoryCountsListType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** A Request message that sets sell limit for a particular date for all the levels House, room type and room class. The request can contain the number type in which the sell limits is to be fetched for the different levels. */
export interface SellLimit {
    /** Contains the sell limits that are being updated (Updates can be at House level, Room Class or Room Type levels). */
    sellLimitsByDate?: SellLimitByDateType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** This type is used by sell limit request. */
export interface SellLimitByDateType {
    /**
     * Collection of House level sell limit by the date.
     * @maxItems 4000
     */
    houseSellLimits?: HouseSellLimitType[];
    /**
     * Collection of Room type level sell limit by the date.
     * @maxItems 4000
     */
    roomTypeSellLimits?: RoomTypeSellLimitType[];
    /**
     * Collection of Room Class level sell limit by the date.
     * @maxItems 4000
     */
    roomClassSellLimits?: RoomClassSellLimitType[];
    /**
     * Resort context.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
export interface HouseSellLimitType {
    /**
     * @format date
     * @maxLength 8
     */
    date?: string;
    amount?: number;
    flatOrPercentage?: string;
}
export interface RoomTypeSellLimitType {
    /**
     * @format date
     * @maxLength 8
     */
    date?: string;
    amount?: number;
    flatOrPercentage?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
}
export interface RoomClassSellLimitType {
    /**
     * @format date
     * @maxLength 8
     */
    date?: string;
    amount?: number;
    flatOrPercentage?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    roomClass?: string;
}
/** A Response object for setting sell limit by date. */
export interface SellLimitResponse {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** A Request message that sets sell limit for collection of date ranges for either of the levels House, room type or room class. You can specify the days of the week, number type group and the date range as part of the request. */
export interface SellLimitByRange {
    /** Contains the sell limits for a given date range to be set. */
    sellLimitsByDateRange?: SellLimitByDateRangeType[];
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** This type is used by sell limit request for date ranges. */
export interface SellLimitByDateRangeType {
    /**
     * Collection of date ranges and sell limit amount.
     * @maxItems 4000
     */
    sellLimitDateRanges?: SellLimitDateRangeType[];
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Used for Room code type. eg. Code="RoomType" or "RoomClass" */
    codeCategory?: RoomCodeCategoryType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    codeValue?: string;
}
export interface SellLimitDateRangeType {
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    amount?: number;
    flatOrPercentage?: string;
    /** It indicates the call is to update Available Rooms, Sell Limit or Sell Control Rooms. */
    actionType?: string;
}
/** Used for Room code type. eg. Code="RoomType" or "RoomClass" */
export declare enum RoomCodeCategoryType {
    RoomType = "RoomType",
    RoomClass = "RoomClass"
}
/** A Response object for setting sell limit by date range. */
export interface SellLimitByDateResponse {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Request object for releasing a held item inventory/availability. */
export interface ReleaseItemInventoryHold {
    /** Hotel Code of the holding item to be released. */
    hotelId?: CodeType;
    /** ID of the one holding the item to be released. */
    heldById?: UniqueIDType;
    /** Type of the entity that is requesting for the item hold. */
    heldBy?: HeldByType;
    /** ID reference for the one who hold the item. Used for releasing/reserving the item afterwards. */
    itemHoldId?: number;
    /** ID of the item to be released. Passing null releases all held items by the passed holder. */
    itemId?: UniqueIDType;
    /** Item Code to be released. */
    itemCode?: CodeType;
    /** Dates when item was reserved. */
    reserveDates?: TimeSpanType;
    /** Information for releasing an Items Inventory hold. */
    releaseItemsInventoryHoldInfo?: ReleaseItemsInventoryHoldType;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
 * @minLength 0
 * @maxLength 20
 */
export type CodeType = string;
/**
 * Collection of items for releasing an Items Inventory hold.
 * @maxItems 4000
 */
export type ReleaseItemsInventoryHoldType = ReleaseItemInventoryHoldType[];
/** Item information for releasing an Item Inventory hold. */
export interface ReleaseItemInventoryHoldType {
    /**
     * Hotel Code of the holding item to be released.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** ID of the one holding the item to be released. */
    heldById?: UniqueIDType;
    /** Type of the entity that is requesting for the item hold. */
    heldBy?: HeldByType;
    /** ID reference for the one who hold the item. Used for releasing/reserving the item afterwards. */
    itemHoldId?: number;
    /** ID of the item to be released. Passing null releases all held items by the passed holder. */
    itemId?: UniqueIDType;
    /**
     * Item Code to be released.
     * @minLength 0
     * @maxLength 20
     */
    itemCode?: string;
    /** Dates when item was reserved. */
    reserveDates?: TimeSpanType;
}
/** Response object for releasing item inventory hold. */
export interface ReleasedItemInventoryHeld {
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response for Ping operation. */
export interface PingDetail {
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
 * @title OPERA Cloud Inventory API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /inv/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    hotels: {
        /**
         * @description Use this API to get block statistics on a per-day basis across a specified date range. The result includes a summary section of rooms booked by status by date, details on deduct and non-deduct rooms booked per day, and Sales Allowance and House Availability figures per day. The details section of the results include block details such as name, block, code, start and end date, owner, and more. It also shows a breakdown of blocked picked-up and available rooms per day per block. The result set is used to feed the GRC (Group Rooms Control) page in the OPERA UI. <p><strong>OperationId:</strong>getBlockInventoryStatistics</p>
         *
         * @tags INVStats
         * @name GetBlockInventoryStatistics
         * @summary Get block inventory statistics
         * @request GET:/hotels/{hotelId}/blockInventoryStatistics
         */
        getBlockInventoryStatistics: (hotelId: string, query?: {
            /** If set to true, includes business blocks without rooms. */
            includeBlocksWithNoRoom?: boolean;
            /** If set to true, the house overbooking limit for each day is added to the total number of physical rooms. */
            includeOverbooking?: boolean;
            /** If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. */
            includeOpportunities?: boolean;
            /** If set to true, includes non-deduct business blocks and group reservations in the Sales Allowance Available Rooms and House Availability statistics. */
            includeTentativeInventory?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * The ending value of the date range.
             * @format date
             */
            endDateRange?: string;
            /**
             * The starting value of the date range.
             * @format date
             */
            startDateRange?: string;
            blockStatusCodes?: string[];
            originCodes?: string[];
            roomOwnerCodes?: string[];
            blockOwners?: string[];
            /**
             * Supported block inventory statistical sorting.
             * @uniqueItems true
             */
            summarySortByCode?: 'Status' | 'StatusDescending' | 'ArrivalDate' | 'BlockAccount' | 'Revenue' | 'RoomsOwner';
            /**
             * Supported block inventory statistical sorting.
             * @uniqueItems true
             */
            detailSortByCode?: 'Status' | 'StatusDescending' | 'ArrivalDate' | 'BlockAccount' | 'Revenue' | 'RoomsOwner';
            friday?: boolean;
            monday?: boolean;
            saturday?: boolean;
            sunday?: boolean;
            thursday?: boolean;
            tuesday?: boolean;
            wednesday?: boolean;
            /**
             * Type for block inventory statistics instructions that can be used in requests for partial operations.
             * @uniqueItems true
             */
            fetchInstructions?: ('StatusSummary' | 'BookingSummary' | 'ForecastSummary' | 'DetailSummary' | 'RoomSummary')[];
        }, params?: RequestParams) => Promise<AxiosResponse<BlockInventoryStatistic, any>>;
        /**
         * @description You can use this API to retrieve the inventory for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. <p><strong>OperationId:</strong>getHotelInventory</p>
         *
         * @tags Inventory
         * @name GetHotelInventory
         * @summary Get hotel inventory
         * @request GET:/hotels/{hotelId}/hotelInventory
         */
        getHotelInventory: (hotelId: string, query: {
            /** @format date */
            dateRangeStart: string;
            /** @format date */
            dateRangeEnd: string;
            /** Number of rooms requested. */
            roomCountRequested: number;
            /** If set to true, includes non-deduct/Tentative rooms for a date range. */
            includeTentativeInventory?: boolean;
            /** If false minimum inventory for the date range is requested, otherwise inventory is requested for every day. */
            dailyInventory?: boolean;
            /** Indicates that House level inventory is requested. */
            houseLevel?: boolean;
            /** Room Type Code. */
            roomTypes?: string[];
            /** Room Class Code. */
            roomClasses?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<HotelInventory, any>>;
        /**
         * @description Use this API to retrieve the inventory data for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. Maximum days limit with a single request is 30 days.<p><strong>OperationId:</strong>getInventoryStatistics</p>
         *
         * @tags INVStats
         * @name GetInventoryStatistics
         * @summary Get hotel inventory
         * @request GET:/hotels/{hotelId}/inventoryStatistics
         */
        getInventoryStatistics: (hotelId: string, query: {
            /**
             * The ending value of the date range.
             * @format date
             */
            dateRangeEnd: string;
            /** Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. */
            reportCode: 'DetailedAvailabiltySummary' | 'RoomCalendarStatistics' | 'SellLimitSummary' | 'RoomsAvailabilitySummary';
            /**
             * The starting value of the date range.
             * @format date
             */
            dateRangeStart: string;
            /** Name of the parameter. */
            parameterName?: ('CancelledYN' | 'Channel' | 'DeductRoomsYN' | 'GroupBy' | 'HouseArrPersonsYN' | 'HouseArrRoomsYN' | 'HouseAvailPercYN' | 'HouseAvailRoomsExcludingOverbookingYN' | 'HouseAvailRoomsYN' | 'HouseAvailTenPercYN' | 'HouseBlkDeductNpuYN' | 'HouseBlkDeductPuYN' | 'HouseBlkTentNpuYN' | 'HouseBlkTentPuYN' | 'HouseDayUsePersonYN' | 'HouseDayUseRoomYN' | 'HouseDepPersonsYN' | 'HouseDepRoomsYN' | 'HouseInventoryRoomsYN' | 'HouseMaxAvailabilityExcludingOverbookingYN' | 'HouseMaxAvailabilityYN' | 'HouseMaxOccupancyYN' | 'HouseMinAvailabilityExcludingOverbookingYN' | 'HouseMinAvailabilityYN' | 'HouseOccPercYN' | 'HouseOccTenPercYN' | 'HouseOccupancyYN' | 'HouseOOOYN' | 'HouseOOSRoomsYN' | 'HouseOverBookingYN' | 'HousePeopleInHouseYN' | 'HousePhysicalRoomsYN' | 'HouseRoomsSoldYN' | 'HouseSellLimitYN' | 'HouseTentRoomsExcludingOverbookingYN' | 'HouseTentRoomsSoldYN' | 'HouseTentRoomsYN' | 'OutOfOrderRoomsYN' | 'RestrictionsYN' | 'RoomArrPersonsYN' | 'RoomArrRoomsYN' | 'RoomAvailRoomsExcludingOverbookingYN' | 'RoomAvailRoomsYN' | 'RoomBlkDeductNpuYN' | 'RoomBlkDeductPuYN' | 'RoomBlkTentNpuYN' | 'RoomBlkTentPuYN' | 'RoomCancelledYN' | 'RoomClassList' | 'RoomDayUsePersonYN' | 'RoomDayUseRoomYN' | 'RoomDepPersonsYN' | 'RoomDepRoomsYN' | 'RoomInventoryRoomsYN' | 'RoomMaxAvailabilityExcludingOverbookingYN' | 'RoomMaxAvailabilityYN' | 'RoomMaxOccupancyYN' | 'RoomMinAvailabilityExcludingOverbookingYN' | 'RoomMinAvailabilityYN' | 'RoomOccupancyYN' | 'RoomOOOYN' | 'RoomOOSRoomsYN' | 'RoomOverBookingYN' | 'RoomPeopleInHouseYN' | 'RoomPhysicalRoomsYN' | 'RoomRestrictionsYN' | 'RoomRoomsSoldYN' | 'RoomSellLimitYN' | 'RoomTentRoomsExcludingOverbookingYN' | 'RoomTentRoomsYN' | 'RoomTentYN' | 'RoomTypeWildCardList')[];
            /** Value of the parameter. */
            parameterValue?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<InventoryStatistics, any>>;
        /**
         * @description This will fetch a hotels Item inventory for a specified date range that you can provided in the request. <p><strong>OperationId:</strong>getItemInventory</p>
         *
         * @tags Inventory
         * @name GetItemInventory
         * @summary Get item inventory
         * @request GET:/hotels/{hotelId}/itemInventory
         */
        getItemInventory: (hotelId: string, query?: {
            /** @format date */
            startDate?: string;
            /** @format date */
            endDate?: string;
            duration?: string;
            /** End Time of the Time window. */
            endTime?: string;
            /** Start Time of the Time window. */
            startTime?: string;
            /** Item Class to filter the Items/Item Pools in the response. */
            itemClass?: string;
            itemPool?: string[];
            itemCode?: string[];
            /** Define the default duration in days when booking the item. */
            defaultDuration?: number;
            /** If true indicates that item has fixed charge when it is attached to a reservation. */
            fixedCharge?: boolean;
            /** If true indicates that item could be held outside of the reservation stay days. */
            outsideStay?: boolean;
            /** If true indicates that item is required for the reservation. */
            requiredForBooking?: boolean;
            /** If true indicates that item can be sold in event. */
            sellInEvent?: boolean;
            /** If true indicates that item can be sold in reservation. */
            sellInReservation?: boolean;
            /** If true indicates that item is allowed to sell separately. */
            sellSeparate?: boolean;
            /** When set to true will only return items that are Welcome Offer Eligible. */
            welcomeOffer?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ItemInventory, any>>;
        /**
         * @description Use this API to hold Item Inventory. <p><strong>OperationId:</strong>postHoldItemInventory</p>
         *
         * @tags Inventory
         * @name PostHoldItemInventory
         * @summary Hold item inventory
         * @request POST:/hotels/{hotelId}/itemInventoryHold
         */
        postHoldItemInventory: (hotelId: string, holdItemInventory: HoldItemInventory, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Fetch item inventory that is currently being held. <p><strong>OperationId:</strong>getHoldItemsInventory</p>
         *
         * @tags Inventory
         * @name GetHoldItemsInventory
         * @summary Get items inventory that are held
         * @request GET:/hotels/{hotelId}/itemInventoryHold
         */
        getHoldItemsInventory: (hotelId: string, query?: {
            /** ID of an Hold Item */
            itemHoldId?: number[];
        }, params?: RequestParams) => Promise<AxiosResponse<HoldItemsInventory, any>>;
        /**
         * @description You can update item inventory that is being held using this API. <p><strong>OperationId:</strong>putHoldItemsInventory</p>
         *
         * @tags Inventory
         * @name PutHoldItemsInventory
         * @summary update items inventory that are held
         * @request PUT:/hotels/{hotelId}/itemInventoryHold
         */
        putHoldItemsInventory: (hotelId: string, holdItemInventory: HoldItemInventory, params?: RequestParams) => Promise<AxiosResponse<HoldItemInventory, any>>;
        /**
         * @description You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>changeSellLimitByDate</p>
         *
         * @tags Inventory
         * @name ChangeSellLimitByDate
         * @summary Set sell limits by date
         * @request PUT:/hotels/{hotelId}/sellLimits
         */
        changeSellLimitByDate: (hotelId: string, sellLimit: SellLimit, params?: RequestParams) => Promise<AxiosResponse<SellLimitResponse, any>>;
        /**
         * @description You can use this API to create sell limits in OPERA by date range. <p><strong>OperationId:</strong>changeSellLimitByDateRange</p>
         *
         * @tags Inventory
         * @name ChangeSellLimitByDateRange
         * @summary Set sell limits by date range
         * @request PUT:/hotels/{hotelId}/sellLimitsByDateRange
         */
        changeSellLimitByDateRange: (hotelId: string, sellLimitByRange: SellLimitByRange, params?: RequestParams) => Promise<AxiosResponse<SellLimitByDateResponse, any>>;
    };
    releasedItemInventory: {
        /**
         * @description This API will release item inventory that has been held. <p><strong>OperationId:</strong>putItemInventoryHold</p>
         *
         * @tags Inventory
         * @name PutItemInventoryHold
         * @summary Release item inventory held
         * @request PUT:/releasedItemInventory
         */
        putItemInventoryHold: (hotelId: string, releaseItemInventoryHold: ReleaseItemInventoryHold, params?: RequestParams) => Promise<AxiosResponse<ReleasedItemInventoryHeld, any>>;
    };
    services: {
        /**
         * @description Clearing of cache in inventory statistics service <p><strong>OperationId:</strong>deleteinvStatsService</p>
         *
         * @tags INVStats
         * @name DeleteinvStatsService
         * @summary Clear Cache
         * @request DELETE:/services/invStatsService/cache
         */
        deleteinvStatsService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Check inventory statistics service <p><strong>OperationId:</strong>pinginvStatsService</p>
         *
         * @tags INVStats
         * @name PinginvStatsService
         * @summary Ping
         * @request GET:/services/invStatsService/status
         */
        pinginvStatsService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<PingDetail, any>>;
        /**
         * @description This API facilitates clearing of cache in inventory service <p><strong>OperationId:</strong>deleteInventoryServiceCache</p>
         *
         * @tags Inventory
         * @name DeleteInventoryServiceCache
         * @summary Clear Cache
         * @request DELETE:/services/inventory/cache
         */
        deleteInventoryServiceCache: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description This API facilitates status check of inventory service <p><strong>OperationId:</strong>pingInventoryService</p>
         *
         * @tags Inventory
         * @name PingInventoryService
         * @summary Ping
         * @request GET:/services/inventory/status
         */
        pingInventoryService: (hotelId: string, params?: RequestParams) => Promise<AxiosResponse<PingDetail, any>>;
    };
}
