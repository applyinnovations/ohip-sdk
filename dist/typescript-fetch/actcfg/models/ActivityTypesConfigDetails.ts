/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityConfigTypeDetailType } from './ActivityConfigTypeDetailType';
import {
    ActivityConfigTypeDetailTypeFromJSON,
    ActivityConfigTypeDetailTypeFromJSONTyped,
    ActivityConfigTypeDetailTypeToJSON,
} from './ActivityConfigTypeDetailType';
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
 * Response object after fetching the activity types.
 * @export
 * @interface ActivityTypesConfigDetails
 */
export interface ActivityTypesConfigDetails {
    /**
     * Detailed information of activity type.
     * @type {Array<ActivityConfigTypeDetailType>}
     * @memberof ActivityTypesConfigDetails
     */
    activityConfigTypes?: Array<ActivityConfigTypeDetailType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ActivityTypesConfigDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ActivityTypesConfigDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ActivityTypesConfigDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ActivityTypesConfigDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ActivityTypesConfigDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ActivityTypesConfigDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ActivityTypesConfigDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ActivityTypesConfigDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ActivityTypesConfigDetails interface.
 */
export function instanceOfActivityTypesConfigDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityTypesConfigDetailsFromJSON(json: any): ActivityTypesConfigDetails {
    return ActivityTypesConfigDetailsFromJSONTyped(json, false);
}

export function ActivityTypesConfigDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityTypesConfigDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityConfigTypes': !exists(json, 'activityConfigTypes') ? undefined : ((json['activityConfigTypes'] as Array<any>).map(ActivityConfigTypeDetailTypeFromJSON)),
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

export function ActivityTypesConfigDetailsToJSON(value?: ActivityTypesConfigDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityConfigTypes': value.activityConfigTypes === undefined ? undefined : ((value.activityConfigTypes as Array<any>).map(ActivityConfigTypeDetailTypeToJSON)),
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

