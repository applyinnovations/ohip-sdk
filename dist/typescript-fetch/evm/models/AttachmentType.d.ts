/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DateTimeStampGroupType } from './DateTimeStampGroupType';
/**
 * Attached files.
 * @export
 * @interface AttachmentType
 */
export interface AttachmentType {
    /**
     * Description for the file.
     * @type {string}
     * @memberof AttachmentType
     */
    description?: string;
    /**
     * Name of the file.
     * @type {string}
     * @memberof AttachmentType
     */
    fileName?: string;
    /**
     * Size of the file.
     * @type {number}
     * @memberof AttachmentType
     */
    fileSize?: number;
    /**
     * Flag to say if attachment is available across properties.
     * @type {boolean}
     * @memberof AttachmentType
     */
    global?: boolean;
    /**
     *
     * @type {DateTimeStampGroupType}
     * @memberof AttachmentType
     */
    history?: DateTimeStampGroupType;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof AttachmentType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof AttachmentType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof AttachmentType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof AttachmentType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof AttachmentType
     */
    instance?: string;
    /**
     * A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT).
     * @type {string}
     * @memberof AttachmentType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof AttachmentType
     */
    url?: string;
}
/**
 * Check if a given object implements the AttachmentType interface.
 */
export declare function instanceOfAttachmentType(value: object): boolean;
export declare function AttachmentTypeFromJSON(json: any): AttachmentType;
export declare function AttachmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentType;
export declare function AttachmentTypeToJSON(value?: AttachmentType | null): any;
