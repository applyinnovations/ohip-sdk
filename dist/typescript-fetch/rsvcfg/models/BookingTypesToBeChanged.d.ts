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
import type { BookingTypesType } from './BookingTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing Booking Types.
 * @export
 * @interface BookingTypesToBeChanged
 */
export interface BookingTypesToBeChanged {
    /**
     *
     * @type {BookingTypesType}
     * @memberof BookingTypesToBeChanged
     */
    bookingTypes?: BookingTypesType;
    /**
     *
     * @type {Links}
     * @memberof BookingTypesToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BookingTypesToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BookingTypesToBeChanged interface.
 */
export declare function instanceOfBookingTypesToBeChanged(value: object): boolean;
export declare function BookingTypesToBeChangedFromJSON(json: any): BookingTypesToBeChanged;
export declare function BookingTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingTypesToBeChanged;
export declare function BookingTypesToBeChangedToJSON(value?: BookingTypesToBeChanged | null): any;