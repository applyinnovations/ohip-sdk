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
/**
 * Specifies the number of rooms to be borrowed from the room type or House.
 * @export
 * @interface BorrowRoomType
 */
export interface BorrowRoomType {
    /**
     * Returning an empty element of this type indicates the this is a House type. This is used in conjunction with the Borrow operations for Blocks where rooms are to be borrowed from House.
     * @type {object}
     * @memberof BorrowRoomType
     */
    house?: object;
    /**
     * Indicates the room type from which the rooms will be borrowed.
     * @type {string}
     * @memberof BorrowRoomType
     */
    roomType?: string;
    /**
     * The number of rooms that need to be borrowed.
     * @type {number}
     * @memberof BorrowRoomType
     */
    roomsToBorrow?: number;
}

/**
 * Check if a given object implements the BorrowRoomType interface.
 */
export function instanceOfBorrowRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BorrowRoomTypeFromJSON(json: any): BorrowRoomType {
    return BorrowRoomTypeFromJSONTyped(json, false);
}

export function BorrowRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BorrowRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'house': !exists(json, 'house') ? undefined : json['house'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomsToBorrow': !exists(json, 'roomsToBorrow') ? undefined : json['roomsToBorrow'],
    };
}

export function BorrowRoomTypeToJSON(value?: BorrowRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'house': value.house,
        'roomType': value.roomType,
        'roomsToBorrow': value.roomsToBorrow,
    };
}

