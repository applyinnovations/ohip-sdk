/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoomStatisticsType } from './RoomStatisticsType';
import {
    RoomStatisticsTypeFromJSON,
    RoomStatisticsTypeFromJSONTyped,
    RoomStatisticsTypeToJSON,
} from './RoomStatisticsType';

/**
 * 
 * @export
 * @interface BlockStatisticsType
 */
export interface BlockStatisticsType {
    /**
     * Indicates actualized catering revenue.
     * @type {number}
     * @memberof BlockStatisticsType
     */
    actualCateringRevenue?: number;
    /**
     * 
     * @type {RoomStatisticsType}
     * @memberof BlockStatisticsType
     */
    actualRoomStatistics?: RoomStatisticsType;
    /**
     * 
     * @type {RoomStatisticsType}
     * @memberof BlockStatisticsType
     */
    allocatedRoomStatistics?: RoomStatisticsType;
    /**
     * Indicates the catering revenue on the books.
     * @type {number}
     * @memberof BlockStatisticsType
     */
    cateringRevenueOnBooks?: number;
}

/**
 * Check if a given object implements the BlockStatisticsType interface.
 */
export function instanceOfBlockStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatisticsTypeFromJSON(json: any): BlockStatisticsType {
    return BlockStatisticsTypeFromJSONTyped(json, false);
}

export function BlockStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualCateringRevenue': !exists(json, 'actualCateringRevenue') ? undefined : json['actualCateringRevenue'],
        'actualRoomStatistics': !exists(json, 'actualRoomStatistics') ? undefined : RoomStatisticsTypeFromJSON(json['actualRoomStatistics']),
        'allocatedRoomStatistics': !exists(json, 'allocatedRoomStatistics') ? undefined : RoomStatisticsTypeFromJSON(json['allocatedRoomStatistics']),
        'cateringRevenueOnBooks': !exists(json, 'cateringRevenueOnBooks') ? undefined : json['cateringRevenueOnBooks'],
    };
}

export function BlockStatisticsTypeToJSON(value?: BlockStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualCateringRevenue': value.actualCateringRevenue,
        'actualRoomStatistics': RoomStatisticsTypeToJSON(value.actualRoomStatistics),
        'allocatedRoomStatistics': RoomStatisticsTypeToJSON(value.allocatedRoomStatistics),
        'cateringRevenueOnBooks': value.cateringRevenueOnBooks,
    };
}

