/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EventForecastListType } from './EventForecastListType';
import {
    EventForecastListTypeFromJSON,
    EventForecastListTypeFromJSONTyped,
    EventForecastListTypeToJSON,
} from './EventForecastListType';
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
 * 
 * @export
 * @interface EventForecastsInfo
 */
export interface EventForecastsInfo {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof EventForecastsInfo
     */
    count?: number;
    /**
     * 
     * @type {EventForecastListType}
     * @memberof EventForecastsInfo
     */
    eventForecasts?: EventForecastListType;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof EventForecastsInfo
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof EventForecastsInfo
     */
    limit?: number;
    /**
     * 
     * @type {Links}
     * @memberof EventForecastsInfo
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof EventForecastsInfo
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof EventForecastsInfo
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof EventForecastsInfo
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof EventForecastsInfo
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the EventForecastsInfo interface.
 */
export function instanceOfEventForecastsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventForecastsInfoFromJSON(json: any): EventForecastsInfo {
    return EventForecastsInfoFromJSONTyped(json, false);
}

export function EventForecastsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventForecastsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'eventForecasts': !exists(json, 'eventForecasts') ? undefined : EventForecastListTypeFromJSON(json['eventForecasts']),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function EventForecastsInfoToJSON(value?: EventForecastsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'eventForecasts': EventForecastListTypeToJSON(value.eventForecasts),
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': LinksToJSON(value.links),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
