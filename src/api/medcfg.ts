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

/** Response object for retrieving customized letter. */
export interface CustomizedLetter {
  /** Customized letter in HTML or RTF format. */
  customizedLetterDetails?: CustomizedLetterType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Details about customized letter. */
export interface CustomizedLetterType {
  /**
   * Hotel code that the customized letter belongs to.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID that the customized letter belongs to. */
  reservationId?: UniqueIDType;
  /**
   * Customized letter in HTML or RTF format.
   * @format byte
   */
  customizedLetter?: string;
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

/** Response object for Fetch Email Blob File Operation. */
export interface EmailFile {
  /** Email File Blob Details based on email Id Number */
  file?: EmailFileType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** ID that uniquely defines an email object */
export interface EmailFileType {
  /** Unique ID that represents an email. */
  emailID?: UniqueIDType;
  /**
   * File attachment in base64 binary format
   * @format byte
   */
  emailFile?: string;
  /**
   * Name of the attachment
   * @minLength 0
   * @maxLength 100
   */
  emailFileName?: string;
}

/** Response to fetch file attachment */
export interface File {
  /** File Attachement details */
  fileDetails?: FileAttachmentType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** ID that uniquely determines file attachment */
export interface FileAttachmentType {
  /** Unique ID that represents file attachment */
  attachmentId?: UniqueIDType;
  /**
   * File attachment in base64 binary format
   * @format byte
   */
  fileAttachment?: string;
  /**
   * Name of the attachment
   * @minLength 0
   * @maxLength 100
   */
  fileName?: string;
}

/** Request to upload a file attachment. */
export interface FileToUpload {
  /** Link Id of the attachment. */
  linkId?: StringLength200;
  /** Link Type of the attachment. */
  linkType?: StringLength200;
  /** Name of the attachment. */
  fileName?: StringLength1000;
  /** Description of the attachment file. */
  description?: StringLength2000;
  /** User (name) related to the attachment file. */
  userName?: StringLength200;
  /** Resort related to the attachment file. */
  hotelId?: StringLength200;
  /** Global Yes (Y) or No (N) flag related to the attachment file. */
  globalYN?: StringLength10;
  /**
   * Attachment file in base64 binary format.
   * @format byte
   */
  fileAttachment?: string;
  /** Overwrite Yes (Y) or No (N) flag related to the attachment file. */
  overwriteExistingFileYN?: StringLength10;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Used for Character Strings, length 0 to 200.
 * @minLength 0
 * @maxLength 200
 */
export type StringLength200 = string;

/**
 * Used for Character Strings, length 0 to 1000.
 * @minLength 0
 * @maxLength 1000
 */
export type StringLength1000 = string;

/**
 * Used for Character Strings, length 0 to 2000.
 * @minLength 0
 * @maxLength 2000
 */
export type StringLength2000 = string;

/**
 * Used for Character Strings, length 0 to 10.
 * @minLength 0
 * @maxLength 10
 */
export type StringLength10 = string;

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
  links?: Links;
}

/** Request to generate and email a folio report. */
export interface FolioReportToEmail {
  /** Identifies folio to be generated. */
  folioInfo?: FolioReportCriteriaType;
  /** List of email recipients for the report. */
  emailRecipients?: EmailRecipientsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Criteria required to generate or retrieve a folio for a reservation. */
export interface FolioReportCriteriaType {
  /**
   * Hotel code for the folio.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID to generate a folio for. */
  reservationId?: UniqueIDType;
  /** Folio window number to generate (defaults to view 1). */
  folioWindowNo?: number;
  /** Optional bill number to generate. */
  billNumber?: number;
  /**
   * Optional folio type.
   * @minLength 0
   * @maxLength 200
   */
  folioType?: string;
  /**
   * Optional folio generation date - defaults to hotel business date.
   * @format date
   * @maxLength 8
   */
  folioDate?: string;
  /**
   * Folio currency code.
   * @minLength 0
   * @maxLength 20
   */
  referenceCurrency?: string;
}

/** @maxItems 4000 */
export type EmailRecipientsType = EmailRecipientType[];

export interface EmailRecipientType {
  /**
   * @minLength 0
   * @maxLength 200
   */
  emailAddress?: string;
}

/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface CustomizedLetterStatus {
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Response object for folio report. */
export interface FolioReport {
  /** Folio report. */
  folio?: FolioReportResultType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Folio card details, including PDF report. */
export interface FolioReportResultType {
  /**
   * Hotel code for the folio.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID identifying the folio. */
  reservationId?: UniqueIDType;
  /**
   * Folio PDF report.
   * @format byte
   */
  folio?: string;
}

/** Response object for registration card. */
export interface RegistrationCard {
  /** Registration card PDF. */
  registrationCard?: RegistrationCardType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/** Registration card details, including PDF report. */
export interface RegistrationCardType {
  /**
   * Hotel code for the registration card.
   * @minLength 0
   * @maxLength 20
   */
  hotelId?: string;
  /** Reservation ID identifying the reservation for the registration card. */
  reservationId?: UniqueIDType;
  /**
   * Registration card PDF.
   * @format byte
   */
  registrationCard?: string;
}

/** Request to upload an image. */
export interface ImageToUpload {
  /** Image upload details including image to upload. */
  images?: ImageUploadInfoType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * List of Image details to upload including image to upload.
 * @maxItems 10
 */
export type ImageUploadInfoType = ImageUploadType[];

/** Image upload details */
export interface ImageUploadType {
  /** Image code to upload */
  imageCode?: ImageCodeType;
  /**
   * File extension of the Image, e.g. JPG, PNG, BMP, etc.
   * @minLength 0
   * @maxLength 10
   */
  fileExtension?: string;
  /** Zero or more image parameters - code / value pairs which define the image path. These are dependent on the image code type. */
  imageParameters?: ImageParametersType;
  /** Language code for the image. */
  languageCode?: LanguageType;
  /** Style of the image. */
  imageStyle?: ImageStyleType;
  /** Link ID to reference table. */
  linkId?: UniqueIDType;
  /**
   * Description of the image.
   * @minLength 0
   * @maxLength 2000
   */
  description?: string;
  /**
   * Image file to upload.
   * @format byte
   */
  image?: string;
  /** Image Id of the image to be replaced. */
  imageId?: UniqueIDType;
}

export enum ImageCodeType {
  LogoChain = 'LogoChain',
  Logo = 'Logo',
  Profile = 'Profile',
  Nationality = 'Nationality',
  User = 'User',
  ToolbarItemCode = 'ToolbarItemCode',
  Chain = 'Chain',
  MembershipType = 'MembershipType',
  MembershipLevel = 'MembershipLevel',
  Resort = 'Resort',
  RoomTypeChain = 'RoomTypeChain',
  RoomType = 'RoomType',
  RoomNumber = 'RoomNumber',
  OooReasonChain = 'OooReasonChain',
  OooReason = 'OooReason',
  RoomMaintChain = 'RoomMaintChain',
  RoomMaintenance = 'RoomMaintenance',
  RoomMaintIssue = 'RoomMaintIssue',
  FloorPlan = 'FloorPlan',
  SiteLayout = 'SiteLayout',
  Attraction = 'Attraction',
  PropertyMap = 'PropertyMap',
  InvItemChain = 'InvItemChain',
  InvItem = 'InvItem',
  PackageChain = 'PackageChain',
  Package = 'Package',
  Pool = 'Pool',
  RoomConditionChain = 'RoomConditionChain',
  RoomCondition = 'RoomCondition',
  FunctionSpace = 'FunctionSpace',
  FunctionSetupStyle = 'FunctionSetupStyle',
  TrackItTypeChain = 'TrackItTypeChain',
  TrackItType = 'TrackItType',
  Height = 'Height',
  Width = 'Width',
}

/**
 * Collection of image parameters code / value pairs.
 * @maxItems 500
 */
export type ImageParametersType = ImageParameterType[];

/** Image parameter code/value pair */
export interface ImageParameterType {
  /** Image parameter code. */
  imageParameterCode?: ImageCodeType;
  /**
   * Image parameter value.
   * @minLength 0
   * @maxLength 40
   */
  imageParameterValue?: string;
}

/**
 * @minLength 0
 * @maxLength 40
 */
export type LanguageType = string;

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

/** Response to fetch image(s) */
export interface Image {
  /** Collection of images */
  images?: ImageResultsType;
  links?: Links;
  /** Used in conjunction with the Success element to define a business error. */
  warnings?: WarningsType;
}

/**
 * Collection of image results.
 * @maxItems 4000
 */
export type ImageResultsType = ImageResultType[];

export interface ImageResultType {
  /**
   * Image set describing path of image.
   * @minLength 0
   * @maxLength 800
   */
  imageSet?: string;
  /**
   * Mime type of the Image.
   * @minLength 0
   * @maxLength 20
   */
  mimeType?: string;
  /**
   * Image file to upload.
   * @format byte
   */
  image?: string;
  /** ImageId file. */
  imageId?: UniqueIDType;
  /** LinkID of the file. */
  linkId?: UniqueIDType;
  /** Image link id file. */
  imageLinkId?: UniqueIDType;
  /** Base64Image image content of the file. */
  base64Image?: string;
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
      baseURL: new URL('/med/config/v1', axiosConfig.baseURL).toString(),
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
 * @title OPERA Cloud Content Service
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /med/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  customizedLetter = {
    /**
     * @description Use this API to get a customized letter. <p><strong>OperationId:</strong>getCustomizedLetter</p>
     *
     * @tags OperaContent
     * @name GetCustomizedLetter
     * @summary Get customized letter
     * @request GET:/customizedLetter/{letterId}
     */
    getCustomizedLetter: (
      hotelId: string,
      letterId: string,
      query?: {
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        letterIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        letterIdtype?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CustomizedLetter, ExceptionDetailType>({
        path: `/customizedLetter/${letterId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  emailFile = {
    /**
     * @description Use this API to retrieve email Blob File Stored in File Storage Schema.Its used in  Profiles to fetch Email and Open in an end user's mail client. <p><strong>OperationId:</strong>getEmailFile</p>
     *
     * @tags OperaContent
     * @name GetEmailFile
     * @summary Get Email Blob File
     * @request GET:/emailFile/{emailId}
     */
    getEmailFile: (hotelId: string, emailId: string, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<EmailFile, ExceptionDetailType>({
        path: `/emailFile/${emailId}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  fileAttachments = {
    /**
     * @description This APU will fetch file attachments. <p><strong>OperationId:</strong>getFileAttachment</p>
     *
     * @tags OperaContent
     * @name GetFileAttachment
     * @summary Get file attachment
     * @request GET:/fileAttachments
     */
    getFileAttachment: (
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        id?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        idContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        idType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<File, ExceptionDetailType>({
        path: `/fileAttachments`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description Use this APU to upload a file attachment. <p><strong>OperationId:</strong>uploadFileAttachment</p>
     *
     * @tags OperaContent
     * @name UploadFileAttachment
     * @summary Upload a file attachment
     * @request POST:/fileAttachments
     */
    uploadFileAttachment: (hotelId: string, fileToUpload: FileToUpload, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/fileAttachments`,
        method: 'POST',
        body: fileToUpload,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  folioReports = {
    /**
     * @description Use this APU to email folio report. <p><strong>OperationId:</strong>emailFolioReport</p>
     *
     * @tags OperaContent
     * @name EmailFolioReport
     * @summary Email folio report
     * @request POST:/folioReports/email
     */
    emailFolioReport: (hotelId: string, folioReportToEmail: FolioReportToEmail, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/folioReports/email`,
        method: 'POST',
        body: folioReportToEmail,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  hotels = {
    /**
     * @description You can set a customized letter with this API. <p><strong>OperationId:</strong>setCustomizedLetter</p>
     *
     * @tags OperaContent
     * @name SetCustomizedLetter
     * @summary Set customized letter
     * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/customizedLetter
     */
    setCustomizedLetter: (
      reservationId: string,
      hotelId: string,
      customizedLetter: CustomizedLetter,
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<CustomizedLetterStatus, ExceptionDetailType>({
        path: `/hotels/${hotelId}/reservations/${reservationId}/customizedLetter`,
        method: 'PUT',
        body: customizedLetter,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will get a folio report for a reservation. <p><strong>OperationId:</strong>getFolioReport</p>
     *
     * @tags OperaContent
     * @name GetFolioReport
     * @summary Get folio report
     * @request GET:/hotels/{hotelId}/reservations/{reservationId}/folioReports
     */
    getFolioReport: (
      reservationId: string,
      hotelId: string,
      query?: {
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationIdType?: string;
        /** Folio window number to generate (defaults to view 1). */
        folioWindowNo?: number;
        /** Optional bill number to generate. */
        billNumber?: number;
        /** Optional folio type. */
        folioType?: string;
        /**
         * Optional folio generation date - defaults to hotel business date.
         * @format date
         */
        folioDate?: string;
        /** Folio currency code. */
        referenceCurrency?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<FolioReport, ExceptionDetailType>({
        path: `/hotels/${hotelId}/reservations/${reservationId}/folioReports`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will get a registration card for a reservation. <p><strong>OperationId:</strong>getRegistrationCard</p>
     *
     * @tags OperaContent
     * @name GetRegistrationCard
     * @summary Get registration card
     * @request GET:/hotels/{hotelId}/reservations/{reservationId}/registrationCard
     */
    getRegistrationCard: (
      reservationId: string,
      hotelId: string,
      query?: {
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        reservationIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        reservationIdType?: string;
        /** Flag indicating whether a new registration card should be generated even if a signed card already exists. */
        regenerate?: boolean;
        /** Flag indicating whether return only the signed registrationCard if present. */
        signedOnly?: boolean;
        /** Optional language code to use for registration card generation. Default guest language will be applied if not specified. */
        language?: string;
        /** Optional registration card template code to use for registration card generation. Default template will be applied if not specified. */
        template?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<RegistrationCard, ExceptionDetailType>({
        path: `/hotels/${hotelId}/reservations/${reservationId}/registrationCard`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
  images = {
    /**
     * @description You can use this API to upload an image. <p><strong>OperationId:</strong>uploadImage</p>
     *
     * @tags OperaContent
     * @name UploadImage
     * @summary Upload an image
     * @request POST:/images
     */
    uploadImage: (hotelId: string, imageToUpload: ImageToUpload, params: RequestParams = {}) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/images`,
        method: 'POST',
        body: imageToUpload,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description This API will delete an image. <p><strong>OperationId:</strong>removeImage</p>
     *
     * @tags OperaContent
     * @name RemoveImage
     * @summary Delete image
     * @request DELETE:/images
     */
    removeImage: (
      hotelId: string,
      query?: {
        /** @uniqueItems true */
        imageCode?:
          | 'LogoChain'
          | 'Logo'
          | 'Profile'
          | 'Nationality'
          | 'User'
          | 'ToolbarItemCode'
          | 'Chain'
          | 'MembershipType'
          | 'MembershipLevel'
          | 'Resort'
          | 'RoomTypeChain'
          | 'RoomType'
          | 'RoomNumber'
          | 'OooReasonChain'
          | 'OooReason'
          | 'RoomMaintChain'
          | 'RoomMaintenance'
          | 'RoomMaintIssue'
          | 'FloorPlan'
          | 'SiteLayout'
          | 'Attraction'
          | 'PropertyMap'
          | 'InvItemChain'
          | 'InvItem'
          | 'PackageChain'
          | 'Package'
          | 'Pool'
          | 'RoomConditionChain'
          | 'RoomCondition'
          | 'FunctionSpace'
          | 'FunctionSetupStyle'
          | 'TrackItTypeChain'
          | 'TrackItType'
          | 'Height'
          | 'Width';
        /** Used for Character Strings, length 0 to 800. */
        imageSet?: string;
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        imageId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        imageIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        imageIdType?: string;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Status, ExceptionDetailType>({
        path: `/images`,
        method: 'DELETE',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },

    /**
     * @description You can use this API to get an image. <p><strong>OperationId:</strong>getImage</p>
     *
     * @tags OperaContent
     * @name GetImage
     * @summary Get image
     * @request GET:/images
     */
    getImage: (
      hotelId: string,
      query?: {
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        linkId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        linkIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        linkIdType?: string;
        /** @uniqueItems true */
        imageCode?:
          | 'LogoChain'
          | 'Logo'
          | 'Profile'
          | 'Nationality'
          | 'User'
          | 'ToolbarItemCode'
          | 'Chain'
          | 'MembershipType'
          | 'MembershipLevel'
          | 'Resort'
          | 'RoomTypeChain'
          | 'RoomType'
          | 'RoomNumber'
          | 'OooReasonChain'
          | 'OooReason'
          | 'RoomMaintChain'
          | 'RoomMaintenance'
          | 'RoomMaintIssue'
          | 'FloorPlan'
          | 'SiteLayout'
          | 'Attraction'
          | 'PropertyMap'
          | 'InvItemChain'
          | 'InvItem'
          | 'PackageChain'
          | 'Package'
          | 'Pool'
          | 'RoomConditionChain'
          | 'RoomCondition'
          | 'FunctionSpace'
          | 'FunctionSetupStyle'
          | 'TrackItTypeChain'
          | 'TrackItType'
          | 'Height'
          | 'Width';
        /** @uniqueItems true */
        imageParameterCode?: (
          | 'LogoChain'
          | 'Logo'
          | 'Profile'
          | 'Nationality'
          | 'User'
          | 'ToolbarItemCode'
          | 'Chain'
          | 'MembershipType'
          | 'MembershipLevel'
          | 'Resort'
          | 'RoomTypeChain'
          | 'RoomType'
          | 'RoomNumber'
          | 'OooReasonChain'
          | 'OooReason'
          | 'RoomMaintChain'
          | 'RoomMaintenance'
          | 'RoomMaintIssue'
          | 'FloorPlan'
          | 'SiteLayout'
          | 'Attraction'
          | 'PropertyMap'
          | 'InvItemChain'
          | 'InvItem'
          | 'PackageChain'
          | 'Package'
          | 'Pool'
          | 'RoomConditionChain'
          | 'RoomCondition'
          | 'FunctionSpace'
          | 'FunctionSetupStyle'
          | 'TrackItTypeChain'
          | 'TrackItType'
          | 'Height'
          | 'Width'
        )[];
        /** Image parameter value. */
        imageParameterValue?: string[];
        languageCode?: string;
        /**
         * An enumeration of image styles.
         * @uniqueItems true
         */
        imageStyle?: 'Full' | 'Thumbnail' | 'Icon' | 'Square' | 'Banner' | 'Button' | 'Lowres' | 'Highres';
        /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
        imageId?: string;
        /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
        imageIdContext?: string;
        /** A reference to the type of object defined by the UniqueID element. */
        imageIdType?: string;
        /** True if the image to be returned as a base64String else if the image to be returned as the binary in MTOM attachment then false . */
        base64?: boolean;
      },
      params: RequestParams = {},
    ) => {
      const headers = { ...params.headers, 'x-hotelid': hotelId };
      const newParams = { ...params, headers };
      return this.request<Image, ExceptionDetailType>({
        path: `/images`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...newParams,
      });
    },
  };
}
