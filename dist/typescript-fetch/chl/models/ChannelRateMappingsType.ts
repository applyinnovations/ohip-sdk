/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelRateMappingType } from './ChannelRateMappingType';
import {
    ChannelRateMappingTypeFromJSON,
    ChannelRateMappingTypeFromJSONTyped,
    ChannelRateMappingTypeToJSON,
} from './ChannelRateMappingType';

/**
 * Collection of hotel-channel rate code mappings.
 * @export
 * @interface ChannelRateMappingsType
 */
export interface ChannelRateMappingsType {
    /**
     * Information about hotel-channel rate code mapping.
     * @type {Array<ChannelRateMappingType>}
     * @memberof ChannelRateMappingsType
     */
    channelRateMapping?: Array<ChannelRateMappingType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ChannelRateMappingsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ChannelRateMappingsType
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ChannelRateMappingsType
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ChannelRateMappingsType
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ChannelRateMappingsType
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ChannelRateMappingsType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ChannelRateMappingsType interface.
 */
export function instanceOfChannelRateMappingsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRateMappingsTypeFromJSON(json: any): ChannelRateMappingsType {
    return ChannelRateMappingsTypeFromJSONTyped(json, false);
}

export function ChannelRateMappingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateMappingsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelRateMapping': !exists(json, 'channelRateMapping') ? undefined : ((json['channelRateMapping'] as Array<any>).map(ChannelRateMappingTypeFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ChannelRateMappingsTypeToJSON(value?: ChannelRateMappingsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelRateMapping': value.channelRateMapping === undefined ? undefined : ((value.channelRateMapping as Array<any>).map(ChannelRateMappingTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}

