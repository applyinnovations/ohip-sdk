/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockDailyRoomStatisticsType } from './BlockDailyRoomStatisticsType';
import {
    BlockDailyRoomStatisticsTypeFromJSON,
    BlockDailyRoomStatisticsTypeFromJSONTyped,
    BlockDailyRoomStatisticsTypeToJSON,
} from './BlockDailyRoomStatisticsType';

/**
 * Holds the room type or generic room type(Room Pool) level statistics for an allotment date.
 * @export
 * @interface BlockDailyStatisticsDateType
 */
export interface BlockDailyStatisticsDateType {
    /**
     * 
     * @type {string}
     * @memberof BlockDailyStatisticsDateType
     */
    date?: string;
    /**
     * Collection of room type level statistics.
     * @type {Array<BlockDailyRoomStatisticsType>}
     * @memberof BlockDailyStatisticsDateType
     */
    genericRoomTypeStatisticsList?: Array<BlockDailyRoomStatisticsType>;
    /**
     * Collection of room type level statistics.
     * @type {Array<BlockDailyRoomStatisticsType>}
     * @memberof BlockDailyStatisticsDateType
     */
    roomTypeStatisticsList?: Array<BlockDailyRoomStatisticsType>;
}

/**
 * Check if a given object implements the BlockDailyStatisticsDateType interface.
 */
export function instanceOfBlockDailyStatisticsDateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockDailyStatisticsDateTypeFromJSON(json: any): BlockDailyStatisticsDateType {
    return BlockDailyStatisticsDateTypeFromJSONTyped(json, false);
}

export function BlockDailyStatisticsDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDailyStatisticsDateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'genericRoomTypeStatisticsList': !exists(json, 'genericRoomTypeStatisticsList') ? undefined : ((json['genericRoomTypeStatisticsList'] as Array<any>).map(BlockDailyRoomStatisticsTypeFromJSON)),
        'roomTypeStatisticsList': !exists(json, 'roomTypeStatisticsList') ? undefined : ((json['roomTypeStatisticsList'] as Array<any>).map(BlockDailyRoomStatisticsTypeFromJSON)),
    };
}

export function BlockDailyStatisticsDateTypeToJSON(value?: BlockDailyStatisticsDateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'genericRoomTypeStatisticsList': value.genericRoomTypeStatisticsList === undefined ? undefined : ((value.genericRoomTypeStatisticsList as Array<any>).map(BlockDailyRoomStatisticsTypeToJSON)),
        'roomTypeStatisticsList': value.roomTypeStatisticsList === undefined ? undefined : ((value.roomTypeStatisticsList as Array<any>).map(BlockDailyRoomStatisticsTypeToJSON)),
    };
}
