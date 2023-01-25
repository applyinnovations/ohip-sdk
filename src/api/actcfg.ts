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

/** Response object for fetching configured Activity Results. */
export interface ActivityResultsConfigDetails {
  /** Collection of configured Activity Results. */
  activityResultsConfiguration?: ActivityResultsConfigListType;
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
 * List of configured Activity Results.
 * @maxItems 4000
 */
export type ActivityResultsConfigListType = ActivityResultsConfigDetailType[];

/** Contains Common Master configuration detail. */
export interface ActivityResultsConfigDetailType {
  /**
   * Common Master unique code.
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /** Description of the Master code. */
  description?: TranslationTextType2000;
  /** Common Master record sequence number. */
  displayOrder?: number;
  /** Indicates the Activity Results is inactive or not. */
  inactive?: boolean;
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

/** Request object for creating/changing Activity Results Configuration. */
export interface ActivityResultsConfigInfo {
  /** Activity Results Configuration to be created/changed. */
  activityResultsConfiguration?: ActivityResultsConfigListType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Response object to fetch Auto Trace Codes. */
export interface AutoTraceCodesDetails {
  /** Collection of fetched Auto Trace Codes. */
  autoTraceCodesConfig?: AutoTraceCodesListType;
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
 * Detailed information of configured Auto Trace Codes.
 * @maxItems 4000
 */
export type AutoTraceCodesListType = AutoTraceCodeDetailType[];

/** Auto Trace Code detail information. */
export interface AutoTraceCodeDetailType {
  /**
   * Trace Code.
   * @minLength 0
   * @maxLength 20
   */
  traceCode?: string;
  /**
   * Description for the Trace Code.
   * @minLength 0
   * @maxLength 100
   */
  description?: string;
  /** Trace Group for the Code. */
  traceGroup?: AutoTraceGroupConfigType;
}

/** A collection of supported list of Auto Trace Groups. */
export enum AutoTraceGroupConfigType {
  Accounts = 'Accounts',
  Contacts = 'Contacts',
  Blocks = 'Blocks',
  Activities = 'Activities',
}

/** Request object for creating/changing Auto Trace Codes. */
export interface AutoTraceCodesInfo {
  /** Auto Trace Code details to be created/updated. */
  autoTraceCodesConfig?: AutoTraceCodesListType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

export interface ActivityTypesConfigCopy {
  /** Criteria for copying activity types. */
  criteria?: CopyActivityConfigCriteriaType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to copy multiple Activity Types from one Hotel to another Hotel. */
export interface CopyActivityConfigCriteriaType {
  /** The hotel code where the activity type was created. */
  copyActivityConfig?: {
    /**
     * The hotel code where the activity type was created.
     * @minLength 0
     * @maxLength 20
     */
    sourceHotelCode?: string;
    /** List of Codes for which the activity types are to be searched for. */
    activityCodeList?: CodeListType;
    /** The hotel code(s) where the activity type should be copied to. */
    targetHotelCode?: CodeListType10;
  };
}

/** @maxItems 4000 */
export type CodeListType = string[];

/** @maxItems 10 */
export type CodeListType10 = string[];

/** Request object for copying trace definition. */
export interface AutoTraceDefinitionCopy {
  /** Criteria for copying trace definitions. */
  criteria?: CopyAutoTraceDefinitionCriteriaType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria to copy multiple trace definitions from one property to another. */
export interface CopyAutoTraceDefinitionCriteriaType {
  /** The hotel code where the trace definition was created. */
  copyAutoTraceDefinition?: {
    /**
     * The hotel code where the trace definition was created.
     * @minLength 0
     * @maxLength 20
     */
    sourceHotelCode?: string;
    /** List of Trace Definition IDs. */
    traceDefinitionCodeList?: UniqueIDListType;
    /** The hotel code(s) where the activity type should be copied to. */
    targetHotelCode?: CodeListType;
    /** Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored. */
    copyInstructions?: {
      /** When true, this will copy the owner assignments to the trace definition. */
      allowOwnerAssignmentsCopy?: boolean;
    };
  };
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

/** Response object after fetching the activity types. */
export interface ActivityTypesConfigDetails {
  /** Collection of fetched activity types. */
  activityConfigTypes?: ActivityConfigListType;
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
 * Detailed information of activity type.
 * @maxItems 4000
 */
export type ActivityConfigListType = ActivityConfigTypeDetailType[];

/** Activity Type detail information. */
export interface ActivityConfigTypeDetailType {
  /**
   * Type for the activity Type.
   * @minLength 0
   * @maxLength 20
   */
  activityTypeCode?: string;
  /**
   * Description for the Activity Type.
   * @minLength 0
   * @maxLength 100
   */
  description?: string;
  /**
   * Element to hold Activity Class value.
   * @maxItems 2
   */
  activityClassList?: ActivityConfigClassType[];
  /** Check for whether to consider the activity type is internal. */
  internal?: boolean;
  /** Display sequence for the activity code type. */
  sequence?: number;
  /** To create an iCal file (.ics) automatically and send it to the email address of the activity owner on activity creation, update, and deletion. */
  autoiCalendar?: boolean;
  /** Defines the number of minutes before the start time of an activity of this activity type, an alert should be issued. */
  minutesBeforeAlert?: number;
  /** When checked,the activity type will still be valid for existing activities and traces,but it cannot be selected for new activities and traces */
  inactive?: boolean;
  /**
   * The hotel code where the activity type to be created.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
}

/** A collection of supported list of activity classes. */
export enum ActivityConfigClassType {
  Appointment = 'Appointment',
  Todo = 'Todo',
}

/** Request object for creating/changing activity types. */
export interface ActivityTypesConfigInfo {
  /** Activity type details to be created/updated. */
  activityConfigTypes?: ActivityConfigListType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object after fetching Auto Trace Definitions. */
export interface AutoTraceDefinitionsDetails {
  /** Collection of fetched Auto Trace Definitions. */
  autoTraceDefinitions?: AutoTraceDefinitionListType;
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
 * Auto Trace Definition.
 * @maxItems 4000
 */
export type AutoTraceDefinitionListType = AutoTraceDefinitionType[];

/** Auto Trace Definition information. */
export interface AutoTraceDefinitionType {
  /** Auto Trace Definition detail information. */
  autoTraceDefinitionDetail?: AutoTraceDefinitionDetailType;
  /** Details of Activity Information associated with Auto Trace Definition. */
  autoTraceDefinitionActivityInfo?: AutoTraceDefinitionActivityInfoType;
  /** Details of Owner Information associated with Auto Trace Definition. */
  autoTraceDefinitionOwnerInfo?: AutoTraceDefinitionOwnerInfoType;
  /** Determines whether to fetch inactive records or not. */
  inactive?: boolean;
}

/** Auto Trace Definition detail information. */
export interface AutoTraceDefinitionDetailType {
  /** Trace ID. */
  autoTraceId?: AutoTraceId;
  /**
   * The hotel code where the Auto Trace should be created.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Trace code
   * @minLength 0
   * @maxLength 20
   */
  traceCode?: string;
  /** Trace Group. */
  traceGroup?: AutoTraceGroupConfigType;
  /** Additional Block information */
  autoTraceBlockCategory?: AutoTraceBlockCategoryType;
  /** Element to hold information on when auto trace would be created. */
  autoTraceTrigger?: AutoTraceTriggerCategoryType;
  /** Element to hold column name of relavant table on selection of Update in AutoTraceTriggerCategoryType. */
  fieldNameOnUpdate?: string;
  /** Element to hold column ID of relavant table on selection of Update in AutoTraceTriggerCategoryType. */
  fieldNameOnUpdateId?: string;
  /** Conditions for trace. */
  conditions?: ConditionGroupType;
}

/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AutoTraceId {
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

/** Additional Block information used to trigger activities. */
export enum AutoTraceBlockCategoryType {
  Deposits = 'Deposits',
  Details = 'Details',
}

/** Contains information on when auto trace would be created. */
export enum AutoTraceTriggerCategoryType {
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete',
}

export interface ConditionGroupType {
  /** @maxItems 4000 */
  condition?: ConditionType[];
  /** @maxItems 4000 */
  conditionGroup?: ConditionGroupType[];
  logicalOperator?: LogicalOperatorType;
}

export interface ConditionType {
  leftExpression?: ExpressionFieldType;
  operator?: ExpressionOperatorType;
  rightExpression?: ExpressionParameterType;
  logicalOperator?: LogicalOperatorType;
}

export interface ExpressionFieldType {
  /**
   * @minLength 0
   * @maxLength 40
   */
  fieldName?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  fieldDescription?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  tableName?: string;
  virtual?: boolean;
  /**
   * @minLength 0
   * @maxLength 40
   */
  dataType?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  lovSelected?: string;
}

export interface ExpressionOperatorType {
  /**
   * @minLength 0
   * @maxLength 40
   */
  operatorName?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  operatorDescription?: string;
  parameterSize?: number;
}

export interface ExpressionParameterType {
  /** @maxItems 3 */
  parameter?: string[];
  functionIdOne?: number;
  functionIdTwo?: number;
}

export enum LogicalOperatorType {
  And = 'And',
  Or = 'Or',
}

/** Activity Related Information of Auto Trace. */
export interface AutoTraceDefinitionActivityInfoType {
  /** Activity Class Information. */
  activityClass?: ActivityConfigClassType;
  /**
   * Type for the Activity.
   * @minLength 0
   * @maxLength 20
   */
  activityTypeCode?: string;
  /**
   * Purpose for the Activity.
   * @minLength 0
   * @maxLength 100
   */
  purpose?: string;
  /** Start Time of the Activity. */
  activityStartTime?: string;
  /** Start Date of the Activity.Input for this field is selected from the list. */
  activityStartDate?: string;
  /** Number of days from activity start date */
  daysFromActivityStartDate?: number;
}

/** Owner Information of Auto Trace. */
export interface AutoTraceDefinitionOwnerInfoType {
  /** Owner of Auto Trace */
  ownerofActivity?: ActivityOwnerType;
  /**
   * Custom owner code
   * @minLength 0
   * @maxLength 20
   */
  customOwnerCode?: string;
  /** Indicates if Owner Assignment exists */
  ownerAssignmentExist?: boolean;
  /** Owner Assignment Information */
  ownerAssignment?: AutoTraceOwnerAssignmentListType;
}

/** Activity owner. */
export enum ActivityOwnerType {
  Current = 'Current',
  Primary = 'Primary',
  Custom = 'Custom',
  Block = 'Block',
  Room = 'Room',
  Catering = 'Catering',
}

/**
 * Detailed information of trace owner assignment.
 * @maxItems 4000
 */
export type AutoTraceOwnerAssignmentListType = AutoTraceOwnerAssignmentType[];

/** Trace owner assignment detail information. */
export interface AutoTraceOwnerAssignmentType {
  /** Trace Owner Assignment ID. */
  autoTraceOwnerAssignmentId?: UniqueIDType;
  /**
   * The hotel code where trace owner assignments are created.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /**
   * Owner code of trace owner assignment.
   * @minLength 0
   * @maxLength 20
   */
  ownerCode?: string;
  /** Owner name of trace owner assignment. */
  ownerName?: string;
  /**
   * Trace Owner code of trace owner assignment.
   * @minLength 0
   * @maxLength 20
   */
  traceOwnerCode?: string;
  /** Trace Owner name of trace owner assignment. */
  traceOwnerName?: string;
}

/** Request object for creating/changing Auto Trace Definitions. */
export interface AutoTraceDefinitionsInfo {
  /** Auto Trace Definition details to be created/updated. */
  autoTraceDefinitions?: AutoTraceDefinitionListType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface AutoTraceDefinitionsStatus {
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object to fetch trace owner assignments. */
export interface AutoTraceOwnerAssignmentsDetails {
  /** Collection of fetched trace owner assignments. */
  autoTraceOwnerAssignments?: AutoTraceOwnerAssignmentListType;
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

/** Request object for creating/changing trace owner assignments. */
export interface AutoTraceOwnerAssignmentsInfo {
  /** Trace owner assignments to be created/updated. */
  autoTraceOwnerAssignments?: AutoTraceOwnerAssignmentListType;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface AutoTraceOwnerAssignmentsStatus {
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
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
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: new URL('/act/config/v1', axiosConfig.baseURL).toString(),
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
 * @title OPERA Cloud Activity Management API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /act/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  activityResults = {
    /**
     * @description Retrieve a list of all configured Activity Result codes and descriptions.  Activity Results appear on the Activities screen in the Results field after the Activity is completed.  And example could be Call Again - an activity is Completed but the result code as part of the completion is to Call Again. <p><strong>OperationId:</strong>getActivityResultsConfig</p>
     *
     * @tags ActivityManagement
     * @name GetActivityResultsConfig
     * @summary Get all Configured Activity Result Codes
     * @request GET:/activityResults
     */
    getActivityResultsConfig: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        /** Determines wether to fetch inactive records or not. */
        fetchInactive?: boolean;
        /** Codes to be searched. */
        codes?: string[];
        /** Wildcard search on the code. */
        wildCard?: string;
        /** Description of the code. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ActivityResultsConfigDetails, ExceptionDetailType>({
        path: `/activityResults`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a new Activity Results Code, for example SUCCESS, END, CALLAGAIN.  These codes are used when you complete an activity.  You need to specify an Activity Result Code as part of that completion process. <p><strong>OperationId:</strong>postActivityResultsConfig</p>
     *
     * @tags ActivityManagement
     * @name PostActivityResultsConfig
     * @summary Create an Activity results code
     * @request POST:/activityResults
     */
    postActivityResultsConfig: (
      hotelId: string,
      activityResultsConfigInfo: ActivityResultsConfigInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/activityResults`,
        method: 'POST',
        body: activityResultsConfigInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete an Activity Result Code from OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityResultsConfig</p>
     *
     * @tags ActivityManagement
     * @name DeleteActivityResultsConfig
     * @summary Delete an Activity results code
     * @request DELETE:/activityResults/{activityResultCode}
     */
    deleteActivityResultsConfig: (hotelId: string, activityResultCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/activityResults/${activityResultCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Change or update details of an existing Activity Results Code. <p><strong>OperationId:</strong>putActivityResultsConfig</p>
     *
     * @tags ActivityManagement
     * @name PutActivityResultsConfig
     * @summary Change an Activity Result Code
     * @request PUT:/activityResults/{activityResultCode}
     */
    putActivityResultsConfig: (
      hotelId: string,
      activityResultCode: string,
      activityResultsConfigInfo: ActivityResultsConfigInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/activityResults/${activityResultCode}`,
        method: 'PUT',
        body: activityResultsConfigInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  autoTraceCodes = {
    /**
     * @description Retrieve a list of all configured Auto Trace Codes for a property. <p><strong>OperationId:</strong>getAutoTraceCodes</p>
     *
     * @tags ActivityManagement
     * @name GetAutoTraceCodes
     * @summary Get Auto Trace codes
     * @request GET:/autoTraceCodes
     */
    getAutoTraceCodes: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        codes?: string[];
        /**
         * A collection of supported list of Auto Trace Groups.
         * @uniqueItems true
         */
        autoTraceGroups?: ('Accounts' | 'Contacts' | 'Blocks' | 'Activities')[];
        /** Description for the Trace Code to be searched for. */
        description?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AutoTraceCodesDetails, ExceptionDetailType>({
        path: `/autoTraceCodes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create an Auto trace code. <p><strong>OperationId:</strong>postAutoTraceCodes</p>
     *
     * @tags ActivityManagement
     * @name PostAutoTraceCodes
     * @summary Create an Auto Trace code
     * @request POST:/autoTraceCodes
     */
    postAutoTraceCodes: (hotelId: string, autoTraceCodesInfo: AutoTraceCodesInfo, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/autoTraceCodes`,
        method: 'POST',
        body: autoTraceCodesInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Delete an Auto trace code. <p><strong>OperationId:</strong>deleteAutoTraceCodes</p>
     *
     * @tags ActivityManagement
     * @name DeleteAutoTraceCodes
     * @summary Delete an Auto Trace code
     * @request DELETE:/autoTraceCodes/{autoTraceCode}
     */
    deleteAutoTraceCodes: (hotelId: string, autoTraceCode: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/autoTraceCodes/${autoTraceCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Update an Auto Trace Code. <p><strong>OperationId:</strong>putAutoTraceCodes</p>
     *
     * @tags ActivityManagement
     * @name PutAutoTraceCodes
     * @summary Change an Auto Trace code
     * @request PUT:/autoTraceCodes/{autoTraceCode}
     */
    putAutoTraceCodes: (
      hotelId: string,
      autoTraceCode: string,
      autoTraceCodesInfo: AutoTraceCodesInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/autoTraceCodes/${autoTraceCode}`,
        method: 'PUT',
        body: autoTraceCodesInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  autoTraceDefinitions = {
    /**
     * @description Delete an Auto trace definition code. <p><strong>OperationId:</strong>deleteAutoTraceDefinitions</p>
     *
     * @tags ActivityManagement
     * @name DeleteAutoTraceDefinitions
     * @summary Delete an Auto Trace definitions Code
     * @request DELETE:/autoTraceDefinitions/{autoTraceDefinitionId}
     */
    deleteAutoTraceDefinitions: (hotelId: string, autoTraceDefinitionId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/autoTraceDefinitions/${autoTraceDefinitionId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  autoTraceOwnerAssignments = {
    /**
     * @description Delete a Trace owner assignment configured for a property. <p><strong>OperationId:</strong>deleteAutoTraceOwnerAssignments</p>
     *
     * @tags ActivityManagement
     * @name DeleteAutoTraceOwnerAssignments
     * @summary Delete an Auto Trace owner assignment
     * @request DELETE:/autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID}
     */
    deleteAutoTraceOwnerAssignments: (
      hotelId: string,
      autoTraceOwnerAssignmentId: string,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/autoTraceOwnerAssignments/${autoTraceOwnerAssignmentId}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  copyActivityTypes = {
    /**
     * @description With this API you can select  existing Activity Type Codes from the source property and copy them to another (target) property. <p><strong>OperationId:</strong>copyActivityTypesConfig</p>
     *
     * @tags ActivityManagement
     * @name CopyActivityTypesConfig
     * @summary Copy Activity Types configuration codes
     * @request POST:/copyActivityTypes/sourceHotel/{hotelId}
     */
    copyActivityTypesConfig: (
      hotelId: string,
      activityTypesConfigCopy: ActivityTypesConfigCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/copyActivityTypes/sourceHotel/${hotelId}`,
        method: 'POST',
        body: activityTypesConfigCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  copyAutoTraceDefinitions = {
    /**
     * @description Copy an existing auto trace definition code to another property. <p><strong>OperationId:</strong>copyAutoTraceDefinitions</p>
     *
     * @tags ActivityManagement
     * @name CopyAutoTraceDefinitions
     * @summary Copy an Auto Trace definition Code
     * @request POST:/copyAutoTraceDefinitions/sourceHotel/{hotelId}
     */
    copyAutoTraceDefinitions: (
      hotelId: string,
      autoTraceDefinitionCopy: AutoTraceDefinitionCopy,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/copyAutoTraceDefinitions/sourceHotel/${hotelId}`,
        method: 'POST',
        body: autoTraceDefinitionCopy,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  hotels = {
    /**
     * @description Retrieve all configured Activity types for a specified hotel. <p><strong>OperationId:</strong>getActivityTypes</p>
     *
     * @tags ActivityManagement
     * @name GetActivityTypes
     * @summary Get all Activity Type Codes
     * @request GET:/hotels/{hotelId}/activityTypes
     */
    getActivityTypes: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        activityType?: string[];
        /** Description for the activity type is to be searched for. */
        description?: string;
        /** Determines whether to fetch inactive records or not. */
        inactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<ActivityTypesConfigDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/activityTypes`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a new Activity Type for a specified hotel. Examples could be  MEETING, LUNCH, EXTMEETING. <p><strong>OperationId:</strong>postActivityTypes</p>
     *
     * @tags ActivityManagement
     * @name PostActivityTypes
     * @summary Create a new Activity type in configuration
     * @request POST:/hotels/{hotelId}/activityTypes
     */
    postActivityTypes: (
      hotelId: string,
      activityTypesConfigInfo: ActivityTypesConfigInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/activityTypes`,
        method: 'POST',
        body: activityTypesConfigInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This will delete an Activity Type Code from the properties configuration. <p><strong>OperationId:</strong>deleteActivityTypes</p>
     *
     * @tags ActivityManagement
     * @name DeleteActivityTypes
     * @summary Delete an Activity Type Code
     * @request DELETE:/hotels/{hotelId}/activityTypes/{activityTypeCode}
     */
    deleteActivityTypes: (activityTypeCode: string, hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/activityTypes/${activityTypeCode}`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Change or update details of an existing Activity Type for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
     *
     * @tags ActivityManagement
     * @name PutActivityTypes
     * @summary Update Activity Types
     * @request PUT:/hotels/{hotelId}/activityTypes/{activityTypeCode}
     */
    putActivityTypes: (
      activityTypeCode: string,
      hotelId: string,
      activityTypesConfigInfo: ActivityTypesConfigInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/activityTypes/${activityTypeCode}`,
        method: 'PUT',
        body: activityTypesConfigInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Get a list of all Auto trace definitions for a property. <p><strong>OperationId:</strong>getAutoTraceDefinitions</p>
     *
     * @tags ActivityManagement
     * @name GetAutoTraceDefinitions
     * @summary Get a list of Auto Trace definition Codes
     * @request GET:/hotels/{hotelId}/autoTraceDefinitions
     */
    getAutoTraceDefinitions: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        codes?: string[];
        /**
         * A collection of supported list of Auto Trace Groups.
         * @uniqueItems true
         */
        autoTraceGroups?: ('Accounts' | 'Contacts' | 'Blocks' | 'Activities')[];
        /** Determines whether to fetch inactive records or not. */
        inactive?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AutoTraceDefinitionsDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceDefinitions`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Create a new Auto Trace Definition code for a specified property. <p><strong>OperationId:</strong>postAutoTraceDefinitions</p>
     *
     * @tags ActivityManagement
     * @name PostAutoTraceDefinitions
     * @summary Create an Auto Trace Definition Code
     * @request POST:/hotels/{hotelId}/autoTraceDefinitions
     */
    postAutoTraceDefinitions: (
      hotelId: string,
      autoTraceDefinitionsInfo: AutoTraceDefinitionsInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceDefinitions`,
        method: 'POST',
        body: autoTraceDefinitionsInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Change an Auto Trace Definition code for a specified property. <p><strong>OperationId:</strong>putAutoTraceDefinitions</p>
     *
     * @tags ActivityManagement
     * @name PutAutoTraceDefinitions
     * @summary Change an Auto Trace definition Code
     * @request PUT:/hotels/{hotelId}/autoTraceDefinitions/{autoTraceDefinitionId}
     */
    putAutoTraceDefinitions: (
      autoTraceDefinitionId: string,
      hotelId: string,
      autoTraceDefinitionsInfo: AutoTraceDefinitionsInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AutoTraceDefinitionsStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceDefinitions/${autoTraceDefinitionId}`,
        method: 'PUT',
        body: autoTraceDefinitionsInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will provide a list of all configured Auto Trace Owner Mappings.   <p><strong>OperationId:</strong>getAutoTraceOwnerAssignments</p>
     *
     * @tags ActivityManagement
     * @name GetAutoTraceOwnerAssignments
     * @summary Get an Auto Trace owner mappings
     * @request GET:/hotels/{hotelId}/autoTraceOwnerAssignments
     */
    getAutoTraceOwnerAssignments: (
      hotelId: string,
      query?: {
        /** Indicates maximum number of records a Web Service should return. */
        limit?: number;
        /**
         * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
         * @default 0
         */
        offset?: number;
        codes?: string[];
        traceOwnerCodes?: string[];
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AutoTraceOwnerAssignmentsDetails, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceOwnerAssignments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can create Auto traces so that activities are created automatically under certain configured conditions. You first need a Trace code configured, and then using this API you can link the Owner code and Trace Code to a Trace Group (account, contact, activity, or block). <p><strong>OperationId:</strong>postAutoTraceOwnerAssignments</p>
     *
     * @tags ActivityManagement
     * @name PostAutoTraceOwnerAssignments
     * @summary Create an Auto Trace owner assignment
     * @request POST:/hotels/{hotelId}/autoTraceOwnerAssignments
     */
    postAutoTraceOwnerAssignments: (
      hotelId: string,
      autoTraceOwnerAssignmentsInfo: AutoTraceOwnerAssignmentsInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceOwnerAssignments`,
        method: 'POST',
        body: autoTraceOwnerAssignmentsInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Change a Trace owner assignment configured for a property. <p><strong>OperationId:</strong>putAutoTraceOwnerAssignments</p>
     *
     * @tags ActivityManagement
     * @name PutAutoTraceOwnerAssignments
     * @summary Change Trace owner assignments
     * @request PUT:/hotels/{hotelId}/autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID}
     */
    putAutoTraceOwnerAssignments: (
      autoTraceOwnerAssignmentId: string,
      hotelId: string,
      autoTraceOwnerAssignmentsInfo: AutoTraceOwnerAssignmentsInfo,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<AutoTraceOwnerAssignmentsStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/autoTraceOwnerAssignments/${autoTraceOwnerAssignmentId}`,
        method: 'PUT',
        body: autoTraceOwnerAssignmentsInfo,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  services = {
    /**
     * @description  <p><strong>OperationId:</strong>deleteActivityManagementServicesCache</p>
     *
     * @tags ActivityManagement
     * @name DeleteActivityManagementServicesCache
     * @summary Operation to clear cache.
     * @request DELETE:/services/activityManagement/cache
     */
    deleteActivityManagementServicesCache: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/services/activityManagement/cache`,
        method: 'DELETE',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description  <p><strong>OperationId:</strong>pingActivityManagementServices</p>
     *
     * @tags ActivityManagement
     * @name PingActivityManagementServices
     * @summary Operation to ping.
     * @request GET:/services/activityManagement/status
     */
    pingActivityManagementServices: (hotelId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<OperaVersion, ExceptionDetailType>({
        path: `/services/activityManagement/status`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
