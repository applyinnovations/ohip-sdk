/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information regarding why reservation has been/was cancelled. This could hold information as history even if reservation is no more in in Cancelled status.
 * @export
 * @interface HotelReservationTypeCancellation
 */
export interface HotelReservationTypeCancellation {
    /**
     *
     * @type {UniqueIDType}
     * @memberof HotelReservationTypeCancellation
     */
    cancellationNo?: UniqueIDType;
    /**
     *
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    date?: string;
    /**
     *
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    description?: string;
}
/**
 * Check if a given object implements the HotelReservationTypeCancellation interface.
 */
export declare function instanceOfHotelReservationTypeCancellation(value: object): boolean;
export declare function HotelReservationTypeCancellationFromJSON(json: any): HotelReservationTypeCancellation;
export declare function HotelReservationTypeCancellationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationTypeCancellation;
export declare function HotelReservationTypeCancellationToJSON(value?: HotelReservationTypeCancellation | null): any;
