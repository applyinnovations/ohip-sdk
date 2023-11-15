/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of the Rate Plan Approval Note
 * @export
 * @interface RatePlanNoteType
 */
export interface RatePlanNoteType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof RatePlanNoteType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof RatePlanNoteType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof RatePlanNoteType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof RatePlanNoteType
     */
    lastModifyDateTime?: string;
    /**
     * Note Text
     * @type {string}
     * @memberof RatePlanNoteType
     */
    note?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RatePlanNoteType
     */
    noteId?: UniqueIDType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof RatePlanNoteType
     */
    purgeDate?: string;
}

/**
 * Check if a given object implements the RatePlanNoteType interface.
 */
export function instanceOfRatePlanNoteType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanNoteTypeFromJSON(json: any): RatePlanNoteType {
    return RatePlanNoteTypeFromJSONTyped(json, false);
}

export function RatePlanNoteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanNoteType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'noteId': !exists(json, 'noteId') ? undefined : UniqueIDTypeFromJSON(json['noteId']),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
    };
}

export function RatePlanNoteTypeToJSON(value?: RatePlanNoteType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'note': value.note,
        'noteId': UniqueIDTypeToJSON(value.noteId),
        'purgeDate': value.purgeDate,
    };
}

