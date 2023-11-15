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
import type { BlockStatisticsDetailType } from './BlockStatisticsDetailType';
import {
    BlockStatisticsDetailTypeFromJSON,
    BlockStatisticsDetailTypeFromJSONTyped,
    BlockStatisticsDetailTypeToJSON,
} from './BlockStatisticsDetailType';

/**
 * Collection of statistics details for every statistic type.
 * @export
 * @interface BlockStatisticsDetailsType
 */
export interface BlockStatisticsDetailsType {
    /**
     * 
     * @type {number}
     * @memberof BlockStatisticsDetailsType
     */
    numberOfDays?: number;
    /**
     * 
     * @type {string}
     * @memberof BlockStatisticsDetailsType
     */
    startDate?: string;
    /**
     * 
     * @type {Array<BlockStatisticsDetailType>}
     * @memberof BlockStatisticsDetailsType
     */
    statisticsDetail?: Array<BlockStatisticsDetailType>;
}

/**
 * Check if a given object implements the BlockStatisticsDetailsType interface.
 */
export function instanceOfBlockStatisticsDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatisticsDetailsTypeFromJSON(json: any): BlockStatisticsDetailsType {
    return BlockStatisticsDetailsTypeFromJSONTyped(json, false);
}

export function BlockStatisticsDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatisticsDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numberOfDays': !exists(json, 'numberOfDays') ? undefined : json['numberOfDays'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'statisticsDetail': !exists(json, 'statisticsDetail') ? undefined : ((json['statisticsDetail'] as Array<any>).map(BlockStatisticsDetailTypeFromJSON)),
    };
}

export function BlockStatisticsDetailsTypeToJSON(value?: BlockStatisticsDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numberOfDays': value.numberOfDays,
        'startDate': value.startDate,
        'statisticsDetail': value.statisticsDetail === undefined ? undefined : ((value.statisticsDetail as Array<any>).map(BlockStatisticsDetailTypeToJSON)),
    };
}

