/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalPages?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ActivityLogListType
     */
    offset?: number;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ActivityLogListType
     */
    limit?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ActivityLogListType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ActivityLogListType
     */
    count?: number;
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
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
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
        'totalPages': value.totalPages,
        'offset': value.offset,
        'limit': value.limit,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
