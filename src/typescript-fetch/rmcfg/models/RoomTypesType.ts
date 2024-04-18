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
 * This type holds collection of room type.
 * @export
 * @interface RoomTypesType
 */
export interface RoomTypesType {
    /**
     * Hotel Code.
     * @type {string}
     * @memberof RoomTypesType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<RoomTypeType>}
     * @memberof RoomTypesType
     */
    roomType?: Array<RoomTypeType>;
}

/**
 * Check if a given object implements the RoomTypesType interface.
 */
export function instanceOfRoomTypesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypesTypeFromJSON(json: any): RoomTypesType {
    return RoomTypesTypeFromJSONTyped(json, false);
}

export function RoomTypesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomType': !exists(json, 'roomType') ? undefined : ((json['roomType'] as Array<any>).map(RoomTypeTypeFromJSON)),
    };
}

export function RoomTypesTypeToJSON(value?: RoomTypesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'roomType': value.roomType === undefined ? undefined : ((value.roomType as Array<any>).map(RoomTypeTypeToJSON)),
    };
}
