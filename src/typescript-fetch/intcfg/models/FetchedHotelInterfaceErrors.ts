/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelInterfaceErrorType } from './HotelInterfaceErrorType';
import {
    HotelInterfaceErrorTypeFromJSON,
    HotelInterfaceErrorTypeFromJSONTyped,
    HotelInterfaceErrorTypeToJSON,
} from './HotelInterfaceErrorType';
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
 * Response object for retrieving Hotel Interface Errors.
 * @export
 * @interface FetchedHotelInterfaceErrors
 */
export interface FetchedHotelInterfaceErrors {
    /**
     * Collection of Hotel Interface Errors.
     * @type {Array<HotelInterfaceErrorType>}
     * @memberof FetchedHotelInterfaceErrors
     */
    hotelInterfaceErrors?: Array<HotelInterfaceErrorType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof FetchedHotelInterfaceErrors
     */
    totalPages?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof FetchedHotelInterfaceErrors
     */
    offset?: number;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof FetchedHotelInterfaceErrors
     */
    limit?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FetchedHotelInterfaceErrors
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FetchedHotelInterfaceErrors
     */
    totalResults?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FetchedHotelInterfaceErrors
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchedHotelInterfaceErrors
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FetchedHotelInterfaceErrors interface.
 */
export function instanceOfFetchedHotelInterfaceErrors(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchedHotelInterfaceErrorsFromJSON(json: any): FetchedHotelInterfaceErrors {
    return FetchedHotelInterfaceErrorsFromJSONTyped(json, false);
}

export function FetchedHotelInterfaceErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedHotelInterfaceErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelInterfaceErrors': !exists(json, 'hotelInterfaceErrors') ? undefined : ((json['hotelInterfaceErrors'] as Array<any>).map(HotelInterfaceErrorTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FetchedHotelInterfaceErrorsToJSON(value?: FetchedHotelInterfaceErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelInterfaceErrors': value.hotelInterfaceErrors === undefined ? undefined : ((value.hotelInterfaceErrors as Array<any>).map(HotelInterfaceErrorTypeToJSON)),
        'totalPages': value.totalPages,
        'offset': value.offset,
        'limit': value.limit,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
