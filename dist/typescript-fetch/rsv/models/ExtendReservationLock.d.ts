/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Operation for extending the lifetime of a lock on a reservation.
 * @export
 * @interface ExtendReservationLock
 */
export interface ExtendReservationLock {
    /**
     * The number of seconds to add to the lock's validity time.
     * @type {number}
     * @memberof ExtendReservationLock
     */
    additionalTimeToLive?: number;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ExtendReservationLock
     */
    hotelId?: string;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ExtendReservationLock
     */
    links?: Array<InstanceLink>;
    /**
     * The lock handle of the record lock we are attempting to release.
     * @type {number}
     * @memberof ExtendReservationLock
     */
    lockHandle?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExtendReservationLock
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ExtendReservationLock interface.
 */
export declare function instanceOfExtendReservationLock(value: object): boolean;
export declare function ExtendReservationLockFromJSON(json: any): ExtendReservationLock;
export declare function ExtendReservationLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendReservationLock;
export declare function ExtendReservationLockToJSON(value?: ExtendReservationLock | null): any;
