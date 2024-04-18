/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelRoomMaintenanceReasonType } from './HotelRoomMaintenanceReasonType';
import {
    HotelRoomMaintenanceReasonTypeFromJSON,
    HotelRoomMaintenanceReasonTypeFromJSONTyped,
    HotelRoomMaintenanceReasonTypeToJSON,
} from './HotelRoomMaintenanceReasonType';
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
 * Response object for fetching room maintenance reasons for a hotel.
 * @export
 * @interface HotelRoomMaintenanceReasonsDetails
 */
export interface HotelRoomMaintenanceReasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    hasMore?: boolean;
    /**
     * Details for room maintenance reason at hotel level.
     * @type {Array<HotelRoomMaintenanceReasonType>}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    hotelRoomMaintenanceReasons?: Array<HotelRoomMaintenanceReasonType>;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HotelRoomMaintenanceReasonsDetails interface.
 */
export function instanceOfHotelRoomMaintenanceReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelRoomMaintenanceReasonsDetailsFromJSON(json: any): HotelRoomMaintenanceReasonsDetails {
    return HotelRoomMaintenanceReasonsDetailsFromJSONTyped(json, false);
}

export function HotelRoomMaintenanceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRoomMaintenanceReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelRoomMaintenanceReasons': !exists(json, 'hotelRoomMaintenanceReasons') ? undefined : ((json['hotelRoomMaintenanceReasons'] as Array<any>).map(HotelRoomMaintenanceReasonTypeFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HotelRoomMaintenanceReasonsDetailsToJSON(value?: HotelRoomMaintenanceReasonsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelRoomMaintenanceReasons': value.hotelRoomMaintenanceReasons === undefined ? undefined : ((value.hotelRoomMaintenanceReasons as Array<any>).map(HotelRoomMaintenanceReasonTypeToJSON)),
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
