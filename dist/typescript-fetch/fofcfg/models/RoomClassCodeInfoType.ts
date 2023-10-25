/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Code of the room class type.
 * @export
 * @interface RoomClassCodeInfoType
 */
export interface RoomClassCodeInfoType {
    /**
     * 
     * @type {string}
     * @memberof RoomClassCodeInfoType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomClassCodeInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomClassCodeInfoType
     */
    roomClassCode?: string;
}

/**
 * Check if a given object implements the RoomClassCodeInfoType interface.
 */
export function instanceOfRoomClassCodeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomClassCodeInfoTypeFromJSON(json: any): RoomClassCodeInfoType {
    return RoomClassCodeInfoTypeFromJSONTyped(json, false);
}

export function RoomClassCodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassCodeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomClassCode': !exists(json, 'roomClassCode') ? undefined : json['roomClassCode'],
    };
}

export function RoomClassCodeInfoTypeToJSON(value?: RoomClassCodeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hotelId': value.hotelId,
        'roomClassCode': value.roomClassCode,
    };
}

