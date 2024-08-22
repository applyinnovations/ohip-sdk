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
import type { DateRangeType } from './DateRangeType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Holds the information for a Reservation Guest Locator
 * @export
 * @interface ReservationLocatorType
 */
export interface ReservationLocatorType {
    /**
     *
     * @type {DateRangeType}
     * @memberof ReservationLocatorType
     */
    dateSpan?: DateRangeType;
    /**
     * User that entered this Guest Locator.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorBy?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ReservationLocatorType
     */
    locatorId?: UniqueIDType;
    /**
     * Date and time of the Guest Locator.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorOn?: string;
    /**
     * The Locator Text for the guest.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorText?: string;
    /**
     *
     * @type {DateTimeSpanType}
     * @memberof ReservationLocatorType
     */
    timeSpan?: DateTimeSpanType;
}
/**
 * Check if a given object implements the ReservationLocatorType interface.
 */
export declare function instanceOfReservationLocatorType(value: object): boolean;
export declare function ReservationLocatorTypeFromJSON(json: any): ReservationLocatorType;
export declare function ReservationLocatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationLocatorType;
export declare function ReservationLocatorTypeToJSON(value?: ReservationLocatorType | null): any;
