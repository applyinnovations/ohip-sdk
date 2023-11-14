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
import type { AutoTraceCodesListType } from './AutoTraceCodesListType';
import {
    AutoTraceCodesListTypeFromJSON,
    AutoTraceCodesListTypeFromJSONTyped,
    AutoTraceCodesListTypeToJSON,
} from './AutoTraceCodesListType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object to fetch Auto Trace Codes.
 * @export
 * @interface AutoTraceCodesDetails
 */
export interface AutoTraceCodesDetails {
    /**
     * 
     * @type {AutoTraceCodesListType}
     * @memberof AutoTraceCodesDetails
     */
    autoTraceCodesConfig?: AutoTraceCodesListType;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AutoTraceCodesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    limit?: number;
    /**
     * 
     * @type {Links}
     * @memberof AutoTraceCodesDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof AutoTraceCodesDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the AutoTraceCodesDetails interface.
 */
export function instanceOfAutoTraceCodesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceCodesDetailsFromJSON(json: any): AutoTraceCodesDetails {
    return AutoTraceCodesDetailsFromJSONTyped(json, false);
}

export function AutoTraceCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceCodesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoTraceCodesConfig': !exists(json, 'autoTraceCodesConfig') ? undefined : AutoTraceCodesListTypeFromJSON(json['autoTraceCodesConfig']),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function AutoTraceCodesDetailsToJSON(value?: AutoTraceCodesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoTraceCodesConfig': AutoTraceCodesListTypeToJSON(value.autoTraceCodesConfig),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': LinksToJSON(value.links),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
