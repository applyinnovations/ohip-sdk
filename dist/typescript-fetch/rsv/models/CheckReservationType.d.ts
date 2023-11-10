/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CheckResultsType } from './CheckResultsType';
import type { ReservationId } from './ReservationId';
/**
 * Reservation and the status of its allowed actions, attached records, and indicators.
 * @export
 * @interface CheckReservationType
 */
export interface CheckReservationType {
    /**
     * Property code of the reservation.
     * @type {string}
     * @memberof CheckReservationType
     */
    hotelId?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof CheckReservationType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {CheckResultsType}
     * @memberof CheckReservationType
     */
    results?: CheckResultsType;
}
/**
 * Check if a given object implements the CheckReservationType interface.
 */
export declare function instanceOfCheckReservationType(value: object): boolean;
export declare function CheckReservationTypeFromJSON(json: any): CheckReservationType;
export declare function CheckReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckReservationType;
export declare function CheckReservationTypeToJSON(value?: CheckReservationType | null): any;
