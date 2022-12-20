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

/** Response object of the Function Space Event Types. */
export interface FunctionSpaceEventTypesDetails {
  /** Retrieve the collection of the Function Space Event Types based on the search criteria */
  eventTypes?: EventTypesType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of Event Type
 * @maxItems 4000
 */
export type EventTypesType = EventTypeConfigType[];

/** Representation of event record type. */
export interface EventTypeConfigType {
  /**
   * Code Field Value belongs to the Event Type.
   * @minLength 0
   * @maxLength 20
   */
  eventTypeCode?: string;
  /** Translatable description to elaborate the Event Code Type. */
  translatableDescription?: TranslationTextType50;
  /**
   * Description to elaborate the Event Code Type.
   * @minLength 0
   * @maxLength 50
   */
  description?: string;
  /** Default Start Time and End Time of the event. */
  timeWindow?: TimeWindowType;
  /** Determines the event type status as active or inactive */
  inactive?: boolean;
  /**
   * Meal type associated with the event type.
   * @minLength 0
   * @maxLength 20
   */
  mealType?: string;
  /** Indicates if Event Type is coverable or not. */
  coverable?: boolean;
  /** Defines if web booking is allowed or not. */
  webBookable?: boolean;
  /** The sequence number of the event. */
  sequence?: number;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType50 {
  /**
   * Default text with Character length from 0 to 50.
   * @minLength 0
   * @maxLength 50
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

/** Defines a Time period with start time and an end time. */
export interface TimeWindowType {
  /** Start Time of the Time window. */
  startTime?: string;
  /** End Time of the Time window. */
  endTime?: string;
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

/** Response object for retrieving Menu Items. */
export interface CateringMenuItemsInfo {
  /** Collection of Menu Items fetched. */
  cateringMenuItems?: CateringMenuItemListType;
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
 * List of Values of Menu Item.
 * @maxItems 4000
 */
export type CateringMenuItemListType = CateringMenuItemType[];

/** Detailed attributes of Menu Item. */
export interface CateringMenuItemType {
  /** The menu item class unique ID */
  id?: UniqueIDType;
  /**
   * The Hotel code which the menu item class belongs to
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Displays the Menu Item Name noted in the Menu Item Configuration. */
  classInfo?: CodeDescriptionType;
  /** Defines the Display Order of the menu item class, to which the menu item is attached */
  displayOrder?: number;
  /** First value of menu item which belongs to a menu item class */
  name1?: TranslationTextType2000;
  /** Seond value of menu item which belongs to a menu item class */
  name2?: TranslationTextType2000;
  /** Third value of menu item which belongs to a menu item class */
  name3?: TranslationTextType2000;
  /** The values entered here most commonly reference a Wine, Meat origin if Restaurant features a Local Farm */
  origin1?: TranslationTextType2000;
  /** The values entered here most commonly reference a Wine, Meat origin if Restaurant features a Local Farm */
  origin2?: TranslationTextType2000;
  /** Type of Menu -Food or Beverage */
  menuType?: MenuTypeType;
  /** Indicates whether this menu item is custom */
  custom?: boolean;
  /** This value is typically the year of the Wine */
  year?: number;
  /**
   * Any particular restriction description in 100 charactera
   * @minLength 0
   * @maxLength 100
   */
  restriction?: string;
  /** Detailed description of menu items in 100 characters */
  description?: TranslationTextType2000;
  /** list of configured Dietary preferences */
  dietaryPreferenceList?: DietaryPrefListType;
  /** Field will be inherited values from the Menu Item Class associated for Event Types. */
  eventTypes?: CodeListType;
  /** Department Code(s) will be displayed in the field for a particular menu item */
  responsibleDepartments?: CodeListType;
  /**
   * Article number in Caps of menu item
   * @minLength 0
   * @maxLength 20
   */
  quickInsertCode?: string;
  /**
   * RevenueType of Menu Item
   * @minLength 0
   * @maxLength 20
   */
  revenueType?: string;
  /** Price of Menu Item , Numeric currency value field conforming to Currency Format for the selected Property. */
  salesPrice?: CurrencyAmountType;
  /** Actual Cost of Menu Item */
  cost?: CurrencyAmountType;
  /** Selection of this notes that the price defined is charged 'as-consumed' basis */
  itemConsumption?: boolean;
  /** Code and description of the container to be used by Menu Item */
  container?: CodeDescriptionType;
  /** Portion of the menu item */
  portion?: TranslationTextType2000;
  /** Numeric value of servings of Menu item */
  servings?: number;
  /** Check of Menu Item if it is web bookable */
  webBookable?: boolean;
  /** check if Print action is required for menu item */
  print?: boolean;
  /** Check for the status of menu item */
  inactive?: boolean;
  /** Included flag */
  includedYN?: boolean;
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

/** Defines values for Menu Type */
export enum MenuTypeType {
  Food = 'Food',
  Beverage = 'Beverage',
}

/** @maxItems 4000 */
export type DietaryPrefListType = DietaryPrefType[];

/** Base type provides information about Catering Revenue Types Configuration. */
export interface DietaryPrefType {
  /**
   * @minLength 0
   * @maxLength 20
   */
  code?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  type?: string;
}

/** @maxItems 4000 */
export type CodeListType = string[];

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

/** Response object to fetch Menu . */
export interface CateringMenusInfo {
  /** Collection of Menu . */
  menuList?: CateringMenuListType;
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
 * List of Values of Menu.
 * @maxItems 4000
 */
export type CateringMenuListType = CateringMenuType[];

export interface CateringMenuType {
  /** This type holds menu id. */
  id?: UniqueIDType;
  /**
   * This type holds class id for given menu.
   * @minLength 0
   * @maxLength 20
   */
  classId?: string;
  /**
   * The Hotel code which the catering menu belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** This type holds value of Catering Menu Info. */
  info?: CateringMenuInfoType;
  /** This type holds revenue list. */
  revenueList?: CateringMenuRevListType;
  /** This type holds Menu Detail List. */
  menuDetailList?: CateringMenuDetailListType;
  /** This type holds Multi choice Menu. */
  multiChoiceList?: CateringMultiChoiceMenuListType;
  /** Collection of notes which belongs to a Menu. */
  menuNoteList?: EventResourceNotesType;
}

export interface CateringMenuInfoType {
  /**
   * This type holds name of Menu Class Name.
   * @minLength 0
   * @maxLength 30
   */
  className?: string;
  /** This type holds name of Menu Name. */
  name?: TranslationTextType2000;
  /** This type holds Restrictionn for the given Menu. */
  restriction?: TranslationTextType2000;
  /** This type holds Description for the given Menu. */
  description?: TranslationTextType2000;
  /** This type holds DietaryList values for the given Menu. */
  dietaryList?: CodeListType;
  /** This type holds Event list associated with menu. */
  eventTypes?: CodeListType;
  /** This type holds value of Menu type FOOD ,BEVERAGE for the given Menu. */
  type?: MenuTypeType;
  /**
   * This type holds quick insert value, v5 functionality as Article Number for the Menu.
   * @minLength 0
   * @maxLength 20
   */
  quickInsertCode?: string;
  /** This type holds serving type value per person , per table for the given Menu. */
  servingType?: ServingType;
  /**
   * This type holds TableCapacity for the given Menu.
   * @minLength 0
   * @maxLength 20
   */
  servingSize?: string;
  /** Return true, when all Menu Items added will be marked as Included and there will be a Global Price for this menu */
  includedInMenu?: boolean;
  /** This type holds value of consumption, Menu items will be charged on a consumption basis. */
  consumptionBased?: boolean;
  /** Menu will be available to sell for an Event for date range. */
  sellDateRange?: DateRangeType;
  /** Date period which the Event will take place. */
  eventDateRange?: DateRangeType;
  /** The total number of menus sold for the day on which the event takes place. */
  menusSold?: number;
  /** This type tells about whether menu is book through web or not. */
  webBookable?: boolean;
  /** Selection will note this Menu is Inactive and unable to be added to a Catering Event. */
  inactive?: boolean;
  /** Sales Price for Menu Item in Menu Item Configuration. */
  salesPrice?: CurrencyAmountType;
  /** Return true means, menu item as Included in the Menu Price */
  includedInPrice?: boolean;
  /** Indicator of this being a multi-choice menu */
  multiChoice?: boolean;
  /** Define the Courses populated into the Multi Choice Menu Configuration */
  courseCount?: number;
}

/** Serving */
export enum ServingType {
  Pp = 'Pp',
  Pt = 'Pt',
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
 * This type holds revenue list.
 * @maxItems 4000
 */
export type CateringMenuRevListType = CateringMenuRevType[];

export interface CateringMenuRevType {
  /**
   * This supports all Revenue Types
   * @minLength 0
   * @maxLength 30
   */
  revenueType?: string;
  /** This type holds value of Menu type FOOD ,BEVERAGE for the given Menu. */
  type?: MenuTypeType;
  /** This type holds cost of the Menu. */
  cost?: CurrencyAmountType;
  /** This type holds internal quote for the Menu. */
  internalQuote?: CurrencyAmountType;
  /**
   * This type holds cost of the Menu.
   * @min 0
   * @max 100
   */
  costMargin?: number;
  /** This type holds Price of the Menu. */
  price?: CurrencyAmountType;
  /**
   * This type holds price margin for the given Menu.
   * @min 0
   * @max 100
   */
  priceMargin?: number;
}

/**
 * List of Values of Catering Menu Detail.
 * @maxItems 4000
 */
export type CateringMenuDetailListType = CateringMenuDetailType[];

/** Detailed attributes of Menu Item. */
export interface CateringMenuDetailType {
  /** The menu item class unique ID */
  id?: UniqueIDType;
  /**
   * The Hotel code which the menu item class belongs to
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Displays the Menu Item Name noted in the Menu Item Configuration. */
  classInfo?: CodeDescriptionType;
  /** Defines the Display Order of the menu item class, to which the menu item is attached */
  displayOrder?: number;
  /** First value of menu item which belongs to a menu item class */
  name1?: TranslationTextType2000;
  /** Seond value of menu item which belongs to a menu item class */
  name2?: TranslationTextType2000;
  /** Third value of menu item which belongs to a menu item class */
  name3?: TranslationTextType2000;
  /** The values entered here most commonly reference a Wine, Meat origin if Restaurant features a Local Farm */
  origin1?: TranslationTextType2000;
  /** The values entered here most commonly reference a Wine, Meat origin if Restaurant features a Local Farm */
  origin2?: TranslationTextType2000;
  /** Type of Menu -Food or Beverage */
  menuType?: MenuTypeType;
  /** Indicates whether this menu item is custom */
  custom?: boolean;
  /** This value is typically the year of the Wine */
  year?: number;
  /**
   * Any particular restriction description in 100 charactera
   * @minLength 0
   * @maxLength 100
   */
  restriction?: string;
  /** Detailed description of menu items in 100 characters */
  description?: TranslationTextType2000;
  /** list of configured Dietary preferences */
  dietaryPreferenceList?: DietaryPrefListType;
  /** Field will be inherited values from the Menu Item Class associated for Event Types. */
  eventTypes?: CodeListType;
  /** Department Code(s) will be displayed in the field for a particular menu item */
  responsibleDepartments?: CodeListType;
  /**
   * Article number in Caps of menu item
   * @minLength 0
   * @maxLength 20
   */
  quickInsertCode?: string;
  /**
   * RevenueType of Menu Item
   * @minLength 0
   * @maxLength 20
   */
  revenueType?: string;
  /** Price of Menu Item , Numeric currency value field conforming to Currency Format for the selected Property. */
  salesPrice?: CurrencyAmountType;
  /** Actual Cost of Menu Item */
  cost?: CurrencyAmountType;
  /** Selection of this notes that the price defined is charged 'as-consumed' basis */
  itemConsumption?: boolean;
  /** Code and description of the container to be used by Menu Item */
  container?: CodeDescriptionType;
  /** Portion of the menu item */
  portion?: TranslationTextType2000;
  /** Numeric value of servings of Menu item */
  servings?: number;
  /** Check of Menu Item if it is web bookable */
  webBookable?: boolean;
  /** check if Print action is required for menu item */
  print?: boolean;
  /** Check for the status of menu item */
  inactive?: boolean;
  /** Included flag */
  includedYN?: boolean;
  /**
   * Course number defined will be the display order of the Menu Items on the screen and in Banquet Event Order.
   * @minLength 0
   * @maxLength 20
   */
  course?: string;
  /**
   * Order of Menu.
   * @minLength 0
   * @maxLength 20
   */
  order?: string;
  /**
   * Demand Factor of the Menu.
   * @minLength 0
   * @maxLength 20
   */
  demandFactor?: string;
  /**
   * Holds the value of Menu name.
   * @minLength 0
   * @maxLength 30
   */
  menuName?: string;
  /** Return true means, menu as Included in the Menu Price */
  includedMenu?: boolean;
  /** Return true means, menu as Included in the Menu Price */
  mandatory?: boolean;
}

/**
 * This type holds Multi choice Menu.
 * @maxItems 4000
 */
export type CateringMultiChoiceMenuListType = CateringMultiChoiceMenuType[];

export interface CateringMultiChoiceMenuType {
  /** This attributes identifies the courseldd. */
  courseId?: number;
  /**
   * This type holds Courses are defined for Menu.
   * @minLength 0
   * @maxLength 20
   */
  course?: string;
  /** This type holds choice count of the Menu. */
  choiceCount?: number;
  /** This type holds choice description for Menu. */
  courseDescription?: TranslationTextType100;
  /** This type holds name of the Course. */
  courseName?: TranslationTextType20;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType100 {
  /**
   * Default text with Character length from 0 to 100.
   * @minLength 0
   * @maxLength 100
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translatedTexts?: TranslationsTextType;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType20 {
  /**
   * Default text with Character length from 0 to 20.
   * @minLength 0
   * @maxLength 20
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translatedTexts?: TranslationsTextType;
}

/**
 * Contains event resource note information.
 * @maxItems 4000
 */
export type EventResourceNotesType = EventResourceNoteType[];

/** Contains the event resource's note information. */
export interface EventResourceNoteType {
  /** Unique identifier for event resource note. If it is missing, this indicate that it is a new note. If only NoteID is provided then it is a delete operation */
  noteId?: UniqueIDType;
  /**
   * Note code.
   * @minLength 0
   * @maxLength 20
   */
  noteCode?: string;
  /** Indicates if the note is internal use only. */
  internal?: boolean;
  /**
   * Contains note title.
   * @minLength 0
   * @maxLength 100
   */
  noteTitle?: string;
  /**
   * Contains note text.
   * @minLength 0
   * @maxLength 2000
   */
  note?: string;
  /** Contains display sequence. */
  sequence?: number;
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

/** Response object for fetch room pool information. */
export interface RoomTypePoolDetails {
  /** Collection of room pool information. */
  roomTypePools?: RoomTypePoolTypes;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of room type pool and associated room type(s).
 * @maxItems 4000
 */
export type RoomTypePoolTypes = RoomTypePoolType[];

/** This type represents complete information of room type pool and Associated Room Type(s). */
export interface RoomTypePoolType {
  /**
   * Hotel Code where room pool belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Room type pool Code.
   * @minLength 0
   * @maxLength 20
   */
  roomTypePoolCode?: string;
  /**
   * The description of room pool type.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /** The short description of type room pool. */
  shortDescription?: TranslationTextType1000;
  /** Sequence for representing room type pool record. */
  sequence?: number;
  /** Pertain associated room type(s) detail information. */
  associatedRoomTypes?: RoomPoolRoomTypesType;
}

/** Contains Multiple translated texts and language codes. */
export interface TranslationTextType1000 {
  /**
   * Default text with Character length from 0 to 1000.
   * @minLength 0
   * @maxLength 1000
   */
  defaultText?: string;
  /** List of translated text and language codes. */
  translatedTexts?: TranslationsTextType;
}

/**
 * Collection of room type pool mapping type.
 * @maxItems 4000
 */
export type RoomPoolRoomTypesType = RoomPoolRoomTypeType[];

/** This extension will only use for consuming RoomType and SellSequence elements for consistency. */
export interface RoomPoolRoomTypeType {
  /**
   * Room class for the room type code.
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
  /**
   * Active date of the room type.
   * @format date
   * @maxLength 8
   */
  activeDate?: string;
  /** Indicates if room type is pseudo. */
  pseudo?: boolean;
  /** Indicates if room type is accessible. */
  accessible?: boolean;
  /** Indicates if room type is sent to interface. */
  sendToInterface?: boolean;
  /** Indicates room types sell sequence. */
  sellSequence?: number;
  /** Indicates room type is a suite. */
  suite?: boolean;
  /** Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. */
  meetingRoom?: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  roomType?: string;
  /** Number of rooms for this room type. */
  numberOfRooms?: number;
  /** Indicates the room type is inactive or not. */
  inactive?: boolean;
  /** Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. */
  restricted?: boolean;
}

/** Request object for creating new room pool. */
export interface RoomTypePoolCriteria {
  /** Collection of room pool information. */
  roomPoolTypes?: RoomTypePoolTypes;
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

/** Request object for changing existing room pool. */
export interface RoomTypePoolToBeChanged {
  /** Collection of room pool information. */
  roomPoolTypes?: RoomTypePoolTypes;
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
      baseURL: new URL('/evm/config/v1', axiosConfig.baseURL).toString(),
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
 * @title OPERA Cloud Event Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /evm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  cateringEventTypes = {
    /**
     * @description Use this API to get Function Space Event Types. <p><strong>OperationId:</strong>getFunctionSpaceEventTypes</p>
     *
     * @tags ChainConfig
     * @name GetFunctionSpaceEventTypes
     * @summary Get Function Space Event Types
     * @request GET:/cateringEventTypes
     */
    getFunctionSpaceEventTypes: (
      hotelId: string,
      query?: {
        codes?: string[];
        /** Specifies the Event field value description to search. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<FunctionSpaceEventTypesDetails, ExceptionDetailType>({
        path: `/cateringEventTypes`,
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
     * @description Get Menu items for a property. <p><strong>OperationId:</strong>getCateringMenuItems</p>
     *
     * @tags ResourceConfig
     * @name GetCateringMenuItems
     * @summary Get Menu items
     * @request GET:/hotels/{hotelId}/cateringMenuItems
     */
    getCateringMenuItems: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Menu item name of string lentgth 30 */
        name?: string;
        codes?: string[];
        /** Article number of Menu Item in Caps */
        quickInsertCode?: string;
        listTypeCodes?: string[];
        /** If true this boolean will set the criteria to only return Menu Items configured as Inactive. */
        inactive?: boolean;
        eventTypesCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CateringMenuItemsInfo, ExceptionDetailType>({
        path: `/hotels/${hotelId}/cateringMenuItems`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Retrieve a list of menus for a property. <p><strong>OperationId:</strong>getCateringMenus</p>
     *
     * @tags ResourceConfig
     * @name GetCateringMenus
     * @summary Get menus
     * @request GET:/hotels/{hotelId}/cateringMenus
     */
    getCateringMenus: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        menuId?: string;
        /** Additional identifying value assigned by the creating system. */
        iDExtension?: number;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        menuIDType?: string;
        /** This type holds name of Menu Class. */
        name?: string;
        classNameListCodes?: string[];
        eventTypesCodes?: string[];
        /**
         * Defines values for Menu Type
         * @uniqueItems true
         */
        menuTypes?: ('Food' | 'Beverage')[];
        dietaryListCodes?: string[];
        /** If true, only Composed Menu's marked as Inactive in Menu Configuration will be returned. */
        inactive?: boolean;
        /** When selected Only Composed Menu's noted as Multi Choice in Menu Configuration will be returned. */
        multiChoice?: boolean;
        /** Check of Menu if it is web bookable */
        webBookable?: boolean;
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
        /**
         * Fetch instructions that can be used in Catering Menus maintenance.
         * @uniqueItems true
         */
        fetchInstructions?: ('Revenue' | 'MenuDetails' | 'MenuNotes')[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CateringMenusInfo, ExceptionDetailType>({
        path: `/hotels/${hotelId}/cateringMenus`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API allows you to Use this API to get Room Type Pool and the associated Room Types. <p><strong>OperationId:</strong>getRoomTypePool</p>
     *
     * @tags HotelConfig
     * @name GetRoomTypePool
     * @summary Fetch Room Type Pool
     * @request GET:/hotels/{hotelId}/roomPools
     */
    getRoomTypePool: (
      hotelId: string,
      query?: {
        /** Flag to indicate if inactive room types should be included. */
        includeInactive?: boolean;
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
        pageNumber?: number;
        /** Is it a physical sleep room type. */
        physical?: boolean;
        /** Is it a pseudo room type. */
        pseudo?: boolean;
        /** Flag to indicate if summary or detailed information should be fetched. */
        summaryInfo?: boolean;
        roomTypeCodes?: string[];
        roomClassCodes?: string[];
        roomTypePoolCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RoomTypePoolDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomPools`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API allows you to Use this API to create Room Type Pools. <p><strong>OperationId:</strong>postRoomTypePool</p>
     *
     * @tags HotelConfig
     * @name PostRoomTypePool
     * @summary Create Room Type Pools
     * @request POST:/hotels/{hotelId}/roomPools
     */
    postRoomTypePool: (hotelId: string, roomTypePoolCriteria: RoomTypePoolCriteria, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomPools`,
        method: 'POST',
        body: roomTypePoolCriteria,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to delete  Room Type Pool and Mappings. <p><strong>OperationId:</strong>removeRoomTypePool</p>
     *
     * @tags HotelConfig
     * @name RemoveRoomTypePool
     * @summary Delete  Room Type Pool and Mappings
     * @request DELETE:/hotels/{hotelId}/roomPools/{roomPoolCode}
     */
    removeRoomTypePool: (
      roomPoolCode: string,
      hotelId: string,
      query?: {
        /** The description of room pool type. */
        description?: string[];
        /** Default text with Character length from 0 to 1000. */
        defaultText?: string;
        /** Language code for the translation. */
        lang?: string[];
        /** Sequence for representing room type pool record. */
        sequence?: number[];
        /** Indicates the room type is inactive or not. */
        inactive?: boolean[];
        /** Number of rooms for this room type. */
        numberOfRooms?: number[];
        roomType?: string[];
        /** Room class for the room type code. */
        roomClass?: string[];
        /** Short Description of room type. */
        shortDescription?: string[];
        /** Active date of the room type. */
        activeDate?: string[];
        /** Indicates if room type is pseudo. */
        pseudo?: boolean[];
        /** Indicates if room type is accessible. */
        accessible?: boolean[];
        /** Indicates if room type is sent to interface. */
        sendToInterface?: boolean[];
        /** Indicates room types sell sequence. */
        sellSequence?: number[];
        /** Indicates room type is a suite. */
        suite?: boolean[];
        /** Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. */
        meetingRoom?: boolean[];
        /** Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. */
        restricted?: boolean[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomPools/${roomPoolCode}`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this API to update Room Type Pool and Associated Room Types. <p><strong>OperationId:</strong>changeRoomTypePool</p>
     *
     * @tags HotelConfig
     * @name ChangeRoomTypePool
     * @summary Change Room Type Pool
     * @request PUT:/hotels/{hotelId}/roomPools/{roomPoolCode}
     */
    changeRoomTypePool: (
      roomPoolCode: string,
      hotelId: string,
      roomTypePoolToBeChanged: RoomTypePoolToBeChanged,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/roomPools/${roomPoolCode}`,
        method: 'PUT',
        body: roomTypePoolToBeChanged,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
