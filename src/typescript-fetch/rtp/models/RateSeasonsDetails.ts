/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RateSeasonsType } from './RateSeasonsType';
import {
    RateSeasonsTypeFromJSON,
    RateSeasonsTypeFromJSONTyped,
    RateSeasonsTypeToJSON,
} from './RateSeasonsType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching rate seasons for a hotel.
 * @export
 * @interface RateSeasonsDetails
 */
export interface RateSeasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RateSeasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RateSeasonsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof RateSeasonsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Links}
     * @memberof RateSeasonsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof RateSeasonsDetails
     */
    offset?: number;
    /**
     * 
     * @type {RateSeasonsType}
     * @memberof RateSeasonsDetails
     */
    rateSeasons?: RateSeasonsType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof RateSeasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RateSeasonsDetails
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof RateSeasonsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RateSeasonsDetails interface.
 */
export function instanceOfRateSeasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateSeasonsDetailsFromJSON(json: any): RateSeasonsDetails {
    return RateSeasonsDetailsFromJSONTyped(json, false);
}

export function RateSeasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateSeasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'rateSeasons': !exists(json, 'rateSeasons') ? undefined : RateSeasonsTypeFromJSON(json['rateSeasons']),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RateSeasonsDetailsToJSON(value?: RateSeasonsDetails | null): any {
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
        'rateSeasons': RateSeasonsTypeToJSON(value.rateSeasons),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
