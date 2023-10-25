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
import type { BookingTypeType } from './BookingTypeType';
import {
    BookingTypeTypeFromJSON,
    BookingTypeTypeFromJSONTyped,
    BookingTypeTypeToJSON,
} from './BookingTypeType';
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
 * 
 * @export
 * @interface PutBookingTypesRequest
 */
export interface PutBookingTypesRequest {
    /**
     * List of Booking Types.
     * @type {Array<BookingTypeType>}
     * @memberof PutBookingTypesRequest
     */
    bookingTypes?: Array<BookingTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutBookingTypesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutBookingTypesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutBookingTypesRequest interface.
 */
export function instanceOfPutBookingTypesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutBookingTypesRequestFromJSON(json: any): PutBookingTypesRequest {
    return PutBookingTypesRequestFromJSONTyped(json, false);
}

export function PutBookingTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutBookingTypesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingTypes': !exists(json, 'bookingTypes') ? undefined : ((json['bookingTypes'] as Array<any>).map(BookingTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutBookingTypesRequestToJSON(value?: PutBookingTypesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingTypes': value.bookingTypes === undefined ? undefined : ((value.bookingTypes as Array<any>).map(BookingTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

