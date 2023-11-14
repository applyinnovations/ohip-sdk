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
import type { BookingTypesType } from './BookingTypesType';
import {
    BookingTypesTypeFromJSON,
    BookingTypesTypeFromJSONTyped,
    BookingTypesTypeToJSON,
} from './BookingTypesType';
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
 * Response object for fetching Booking Types.
 * @export
 * @interface BookingTypesDetails
 */
export interface BookingTypesDetails {
    /**
     * 
     * @type {BookingTypesType}
     * @memberof BookingTypesDetails
     */
    bookingTypes?: BookingTypesType;
    /**
     * 
     * @type {Links}
     * @memberof BookingTypesDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BookingTypesDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BookingTypesDetails interface.
 */
export function instanceOfBookingTypesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingTypesDetailsFromJSON(json: any): BookingTypesDetails {
    return BookingTypesDetailsFromJSONTyped(json, false);
}

export function BookingTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingTypesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingTypes': !exists(json, 'bookingTypes') ? undefined : BookingTypesTypeFromJSON(json['bookingTypes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BookingTypesDetailsToJSON(value?: BookingTypesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingTypes': BookingTypesTypeToJSON(value.bookingTypes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
