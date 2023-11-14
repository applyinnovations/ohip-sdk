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
import type { HotelReservationType } from './HotelReservationType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * CheckIn response will commonly be errors over warnings. If a check has to be done before checking a reservation to a hotel, then the VerifyCheckinReservation operation can be utilized.
 * @export
 * @interface CheckedinReservation
 */
export interface CheckedinReservation {
    /**
     *
     * @type {Links}
     * @memberof CheckedinReservation
     */
    links?: Links;
    /**
     * Reservation record showing the current state of the reservation.
     * @type {Array<HotelReservationType>}
     * @memberof CheckedinReservation
     */
    reservation?: Array<HotelReservationType>;
    /**
     *
     * @type {WarningsType}
     * @memberof CheckedinReservation
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CheckedinReservation interface.
 */
export declare function instanceOfCheckedinReservation(value: object): boolean;
export declare function CheckedinReservationFromJSON(json: any): CheckedinReservation;
export declare function CheckedinReservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckedinReservation;
export declare function CheckedinReservationToJSON(value?: CheckedinReservation | null): any;