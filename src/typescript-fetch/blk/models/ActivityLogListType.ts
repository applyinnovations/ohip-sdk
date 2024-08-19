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
import type { ActivityLogType } from './ActivityLogType';
import {
    ActivityLogTypeFromJSON,
    ActivityLogTypeFromJSONTyped,
    ActivityLogTypeToJSON,
} from './ActivityLogType';

/**
 * 
 * @export
 * @interface ActivityLogListType
 */
export interface ActivityLogListType {
    /**
     * 
     * @type {Array<ActivityLogType>}
     * @memberof ActivityLogListType
     */
    activityLog?: Array<ActivityLogType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ActivityLogListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ActivityLogListType
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ActivityLogListType
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ActivityLogListType
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ActivityLogListType interface.
 */
export function instanceOfActivityLogListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityLogListTypeFromJSON(json: any): ActivityLogListType {
    return ActivityLogListTypeFromJSONTyped(json, false);
}

export function ActivityLogListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLogListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityLog': !exists(json, 'activityLog') ? undefined : ((json['activityLog'] as Array<any>).map(ActivityLogTypeFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ActivityLogListTypeToJSON(value?: ActivityLogListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityLog': value.activityLog === undefined ? undefined : ((value.activityLog as Array<any>).map(ActivityLogTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}

