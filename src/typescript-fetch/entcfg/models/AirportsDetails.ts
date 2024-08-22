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
import type { AirportType } from './AirportType';
import {
    AirportTypeFromJSON,
    AirportTypeFromJSONTyped,
    AirportTypeToJSON,
} from './AirportType';
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
 * Response object for fetching airports configured for hotels.
 * @export
 * @interface AirportsDetails
 */
export interface AirportsDetails {
    /**
     * Airport details for a hotel.
     * @type {Array<AirportType>}
     * @memberof AirportsDetails
     */
    airports?: Array<AirportType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AirportsDetails
     */
    totalPages?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AirportsDetails
     */
    offset?: number;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AirportsDetails
     */
    limit?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AirportsDetails
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AirportsDetails
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AirportsDetails
     */
    count?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AirportsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AirportsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AirportsDetails interface.
 */
export function instanceOfAirportsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AirportsDetailsFromJSON(json: any): AirportsDetails {
    return AirportsDetailsFromJSONTyped(json, false);
}

export function AirportsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AirportsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'airports': !exists(json, 'airports') ? undefined : ((json['airports'] as Array<any>).map(AirportTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AirportsDetailsToJSON(value?: AirportsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'airports': value.airports === undefined ? undefined : ((value.airports as Array<any>).map(AirportTypeToJSON)),
        'totalPages': value.totalPages,
        'offset': value.offset,
        'limit': value.limit,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

