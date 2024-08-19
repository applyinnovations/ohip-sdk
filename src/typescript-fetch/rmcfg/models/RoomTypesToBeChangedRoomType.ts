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
import type { RoomTypeType } from './RoomTypeType';
import {
    RoomTypeTypeFromJSON,
    RoomTypeTypeFromJSONTyped,
    RoomTypeTypeToJSON,
} from './RoomTypeType';

/**
 * Room Type details to be changed.
 * @export
 * @interface RoomTypesToBeChangedRoomType
 */
export interface RoomTypesToBeChangedRoomType {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof RoomTypesToBeChangedRoomType
     */
    hotelId?: string;
    /**
     * 
     * @type {RoomTypeType}
     * @memberof RoomTypesToBeChangedRoomType
     */
    roomTypeDetails?: RoomTypeType;
}

/**
 * Check if a given object implements the RoomTypesToBeChangedRoomType interface.
 */
export function instanceOfRoomTypesToBeChangedRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypesToBeChangedRoomTypeFromJSON(json: any): RoomTypesToBeChangedRoomType {
    return RoomTypesToBeChangedRoomTypeFromJSONTyped(json, false);
}

export function RoomTypesToBeChangedRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypesToBeChangedRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomTypeDetails': !exists(json, 'roomTypeDetails') ? undefined : RoomTypeTypeFromJSON(json['roomTypeDetails']),
    };
}

export function RoomTypesToBeChangedRoomTypeToJSON(value?: RoomTypesToBeChangedRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'roomTypeDetails': RoomTypeTypeToJSON(value.roomTypeDetails),
    };
}

