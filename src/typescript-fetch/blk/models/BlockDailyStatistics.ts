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
import type { BlocksDailyStatisticsTypeInner } from './BlocksDailyStatisticsTypeInner';
import {
    BlocksDailyStatisticsTypeInnerFromJSON,
    BlocksDailyStatisticsTypeInnerFromJSONTyped,
    BlocksDailyStatisticsTypeInnerToJSON,
} from './BlocksDailyStatisticsTypeInner';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response Object of Fetch Block Daily Statistics.
 * @export
 * @interface BlockDailyStatistics
 */
export interface BlockDailyStatistics {
    /**
     * A collection of Blocks.
     * @type {Array<BlocksDailyStatisticsTypeInner>}
     * @memberof BlockDailyStatistics
     */
    blockDailyStatistics?: Array<BlocksDailyStatisticsTypeInner>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof BlockDailyStatistics
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof BlockDailyStatistics
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof BlockDailyStatistics
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockDailyStatistics
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof BlockDailyStatistics
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof BlockDailyStatistics
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof BlockDailyStatistics
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockDailyStatistics
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockDailyStatistics interface.
 */
export function instanceOfBlockDailyStatistics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockDailyStatisticsFromJSON(json: any): BlockDailyStatistics {
    return BlockDailyStatisticsFromJSONTyped(json, false);
}

export function BlockDailyStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDailyStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockDailyStatistics': !exists(json, 'blockDailyStatistics') ? undefined : ((json['blockDailyStatistics'] as Array<any>).map(BlocksDailyStatisticsTypeInnerFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockDailyStatisticsToJSON(value?: BlockDailyStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockDailyStatistics': value.blockDailyStatistics === undefined ? undefined : ((value.blockDailyStatistics as Array<any>).map(BlocksDailyStatisticsTypeInnerToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

