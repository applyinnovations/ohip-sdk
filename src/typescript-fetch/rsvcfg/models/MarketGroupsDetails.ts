/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MarketGroupType } from './MarketGroupType';
import {
    MarketGroupTypeFromJSON,
    MarketGroupTypeFromJSONTyped,
    MarketGroupTypeToJSON,
} from './MarketGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for fetch Market Groups.
 * @export
 * @interface MarketGroupsDetails
 */
export interface MarketGroupsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof MarketGroupsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MarketGroupsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof MarketGroupsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MarketGroupsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of Market Groups.
     * @type {Array<MarketGroupType>}
     * @memberof MarketGroupsDetails
     */
    marketGroups?: Array<MarketGroupType>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof MarketGroupsDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof MarketGroupsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MarketGroupsDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MarketGroupsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MarketGroupsDetails interface.
 */
export function instanceOfMarketGroupsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketGroupsDetailsFromJSON(json: any): MarketGroupsDetails {
    return MarketGroupsDetailsFromJSONTyped(json, false);
}

export function MarketGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketGroupsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'marketGroups': !exists(json, 'marketGroups') ? undefined : ((json['marketGroups'] as Array<any>).map(MarketGroupTypeFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MarketGroupsDetailsToJSON(value?: MarketGroupsDetails | null): any {
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
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'marketGroups': value.marketGroups === undefined ? undefined : ((value.marketGroups as Array<any>).map(MarketGroupTypeToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

