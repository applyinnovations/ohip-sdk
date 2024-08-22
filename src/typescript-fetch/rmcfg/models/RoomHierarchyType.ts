/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoomHierarchyTypeType } from './RoomHierarchyTypeType';
import {
    RoomHierarchyTypeTypeFromJSON,
    RoomHierarchyTypeTypeFromJSONTyped,
    RoomHierarchyTypeTypeToJSON,
} from './RoomHierarchyTypeType';

/**
 * Room Hierarchy id type for create, change and delete
 * @export
 * @interface RoomHierarchyType
 */
export interface RoomHierarchyType {
    /**
     * Display Sequence
     * @type {number}
     * @memberof RoomHierarchyType
     */
    displaySequence?: number;
    /**
     * From code to process
     * @type {string}
     * @memberof RoomHierarchyType
     */
    fromCode?: string;
    /**
     * Resort code in which the hierarchy should exist
     * @type {string}
     * @memberof RoomHierarchyType
     */
    hotelId?: string;
    /**
     * 
     * @type {RoomHierarchyTypeType}
     * @memberof RoomHierarchyType
     */
    roomHierarchyType?: RoomHierarchyTypeType;
    /**
     * 
     * @type {Array<string>}
     * @memberof RoomHierarchyType
     */
    toCodes?: Array<string>;
}

/**
 * Check if a given object implements the RoomHierarchyType interface.
 */
export function instanceOfRoomHierarchyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomHierarchyTypeFromJSON(json: any): RoomHierarchyType {
    return RoomHierarchyTypeFromJSONTyped(json, false);
}

export function RoomHierarchyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomHierarchyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'fromCode': !exists(json, 'fromCode') ? undefined : json['fromCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomHierarchyType': !exists(json, 'roomHierarchyType') ? undefined : RoomHierarchyTypeTypeFromJSON(json['roomHierarchyType']),
        'toCodes': !exists(json, 'toCodes') ? undefined : json['toCodes'],
    };
}

export function RoomHierarchyTypeToJSON(value?: RoomHierarchyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displaySequence': value.displaySequence,
        'fromCode': value.fromCode,
        'hotelId': value.hotelId,
        'roomHierarchyType': RoomHierarchyTypeTypeToJSON(value.roomHierarchyType),
        'toCodes': value.toCodes,
    };
}

