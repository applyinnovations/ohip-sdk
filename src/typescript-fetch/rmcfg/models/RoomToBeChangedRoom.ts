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
import type { ConfigRoomType } from './ConfigRoomType';
import {
    ConfigRoomTypeFromJSON,
    ConfigRoomTypeFromJSONTyped,
    ConfigRoomTypeToJSON,
} from './ConfigRoomType';

/**
 * Room to be changed.
 * @export
 * @interface RoomToBeChangedRoom
 */
export interface RoomToBeChangedRoom {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof RoomToBeChangedRoom
     */
    hotelId?: string;
    /**
     * 
     * @type {ConfigRoomType}
     * @memberof RoomToBeChangedRoom
     */
    roomDetails?: ConfigRoomType;
}

/**
 * Check if a given object implements the RoomToBeChangedRoom interface.
 */
export function instanceOfRoomToBeChangedRoom(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomToBeChangedRoomFromJSON(json: any): RoomToBeChangedRoom {
    return RoomToBeChangedRoomFromJSONTyped(json, false);
}

export function RoomToBeChangedRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomToBeChangedRoom {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomDetails': !exists(json, 'roomDetails') ? undefined : ConfigRoomTypeFromJSON(json['roomDetails']),
    };
}

export function RoomToBeChangedRoomToJSON(value?: RoomToBeChangedRoom | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'roomDetails': ConfigRoomTypeToJSON(value.roomDetails),
    };
}
