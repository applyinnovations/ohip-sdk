/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { OutOfOrderServiceReasonsType } from './OutOfOrderServiceReasonsType';
import {
    OutOfOrderServiceReasonsTypeFromJSON,
    OutOfOrderServiceReasonsTypeFromJSONTyped,
    OutOfOrderServiceReasonsTypeToJSON,
} from './OutOfOrderServiceReasonsType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching Out of Order/Service Reason(s).
 * @export
 * @interface OutOfOrderServiceReasonsDetails
 */
export interface OutOfOrderServiceReasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Links}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    offset?: number;
    /**
     * 
     * @type {OutOfOrderServiceReasonsType}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    outOfOrderServiceReasons?: OutOfOrderServiceReasonsType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the OutOfOrderServiceReasonsDetails interface.
 */
export function instanceOfOutOfOrderServiceReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OutOfOrderServiceReasonsDetailsFromJSON(json: any): OutOfOrderServiceReasonsDetails {
    return OutOfOrderServiceReasonsDetailsFromJSONTyped(json, false);
}

export function OutOfOrderServiceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutOfOrderServiceReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'outOfOrderServiceReasons': !exists(json, 'outOfOrderServiceReasons') ? undefined : OutOfOrderServiceReasonsTypeFromJSON(json['outOfOrderServiceReasons']),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function OutOfOrderServiceReasonsDetailsToJSON(value?: OutOfOrderServiceReasonsDetails | null): any {
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
        'outOfOrderServiceReasons': OutOfOrderServiceReasonsTypeToJSON(value.outOfOrderServiceReasons),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
