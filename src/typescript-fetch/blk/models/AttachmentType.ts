/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DateTimeStampGroupType } from './DateTimeStampGroupType';
import {
    DateTimeStampGroupTypeFromJSON,
    DateTimeStampGroupTypeFromJSONTyped,
    DateTimeStampGroupTypeToJSON,
} from './DateTimeStampGroupType';

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
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof AttachmentType
     */
    instance?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof AttachmentType
     */
    type?: string;
}

/**
 * Check if a given object implements the AttachmentType interface.
 */
export function instanceOfAttachmentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttachmentTypeFromJSON(json: any): AttachmentType {
    return AttachmentTypeFromJSONTyped(json, false);
}

export function AttachmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'global': !exists(json, 'global') ? undefined : json['global'],
        'history': !exists(json, 'history') ? undefined : DateTimeStampGroupTypeFromJSON(json['history']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AttachmentTypeToJSON(value?: AttachmentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'fileName': value.fileName,
        'fileSize': value.fileSize,
        'global': value.global,
        'history': DateTimeStampGroupTypeToJSON(value.history),
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'instance': value.instance,
        'type': value.type,
    };
}
