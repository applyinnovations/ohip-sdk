/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { SourceGroupType } from './SourceGroupType';
import {
    SourceGroupTypeFromJSON,
    SourceGroupTypeFromJSONTyped,
    SourceGroupTypeToJSON,
} from './SourceGroupType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response for fetch Source Groups.
 * @export
 * @interface SourceGroupsDetails
 */
export interface SourceGroupsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof SourceGroupsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof SourceGroupsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof SourceGroupsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Links}
     * @memberof SourceGroupsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof SourceGroupsDetails
     */
    offset?: number;
    /**
     * Collection of Source Groups.
     * @type {Array<SourceGroupType>}
     * @memberof SourceGroupsDetails
     */
    sourceGroups?: Array<SourceGroupType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof SourceGroupsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof SourceGroupsDetails
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof SourceGroupsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the SourceGroupsDetails interface.
 */
export function instanceOfSourceGroupsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceGroupsDetailsFromJSON(json: any): SourceGroupsDetails {
    return SourceGroupsDetailsFromJSONTyped(json, false);
}

export function SourceGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceGroupsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'sourceGroups': !exists(json, 'sourceGroups') ? undefined : ((json['sourceGroups'] as Array<any>).map(SourceGroupTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function SourceGroupsDetailsToJSON(value?: SourceGroupsDetails | null): any {
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
        'links': LinksToJSON(value.links),
        'offset': value.offset,
        'sourceGroups': value.sourceGroups === undefined ? undefined : ((value.sourceGroups as Array<any>).map(SourceGroupTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
