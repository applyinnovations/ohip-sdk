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
 * 
 * @export
 * @interface RoomStatisticsType
 */
export interface RoomStatisticsType {
    /**
     * The average rate per room.
     * @type {number}
     * @memberof RoomStatisticsType
     */
    averageRate?: number;
    /**
     * The total number of rooms.
     * @type {number}
     * @memberof RoomStatisticsType
     */
    roomCount?: number;
    /**
     * The total revenue for the rooms.
     * @type {number}
     * @memberof RoomStatisticsType
     */
    roomRevenue?: number;
}

/**
 * Check if a given object implements the RoomStatisticsType interface.
 */
export function instanceOfRoomStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomStatisticsTypeFromJSON(json: any): RoomStatisticsType {
    return RoomStatisticsTypeFromJSONTyped(json, false);
}

export function RoomStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageRate': !exists(json, 'averageRate') ? undefined : json['averageRate'],
        'roomCount': !exists(json, 'roomCount') ? undefined : json['roomCount'],
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : json['roomRevenue'],
    };
}

export function RoomStatisticsTypeToJSON(value?: RoomStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageRate': value.averageRate,
        'roomCount': value.roomCount,
        'roomRevenue': value.roomRevenue,
    };
}

