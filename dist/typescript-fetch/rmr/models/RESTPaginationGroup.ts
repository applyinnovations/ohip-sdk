/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Provides Pagination Information for the REST API.
 * @export
 * @interface RESTPaginationGroup
 */
export interface RESTPaginationGroup {
    /**
     * Indicates number of records the API has returned actually as per the API request criteria.
     * @type {number}
     * @memberof RESTPaginationGroup
     */
    count?: number;
    /**
     * Indicates whether there are more records available to be returned as per the API request criteria or not.
     * @type {boolean}
     * @memberof RESTPaginationGroup
     */
    hasMore?: boolean;
    /**
     * Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time.
     * @type {number}
     * @memberof RESTPaginationGroup
     */
    limit?: number;
    /**
     * Indicates the index of the next applicable set(page).
     * @type {number}
     * @memberof RESTPaginationGroup
     */
    offset?: number;
    /**
     * Indicates total number of records available that can be returned as per the API request criteria.
     * @type {number}
     * @memberof RESTPaginationGroup
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the RESTPaginationGroup interface.
 */
export function instanceOfRESTPaginationGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RESTPaginationGroupFromJSON(json: any): RESTPaginationGroup {
    return RESTPaginationGroupFromJSONTyped(json, false);
}

export function RESTPaginationGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): RESTPaginationGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function RESTPaginationGroupToJSON(value?: RESTPaginationGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalResults': value.totalResults,
    };
}

