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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { GuestCountsType } from './GuestCountsType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Holds detailed information of a prospect reservation to be turned away.
 * @export
 * @interface TurnawayDetailsType
 */
export interface TurnawayDetailsType {
    /**
     *
     * @type {GuestCountsType}
     * @memberof TurnawayDetailsType
     */
    guestCounts?: GuestCountsType;
    /**
     * Holds Opera Hotel/Resort code of turn away reservation.
     * @type {string}
     * @memberof TurnawayDetailsType
     */
    hotelId?: string;
    /**
     * Holds the code that relates to the market being sold to (e.g., the corporate market, packages).
     * @type {string}
     * @memberof TurnawayDetailsType
     */
    marketCode?: string;
    /**
     * Holds the number of rooms.
     * @type {number}
     * @memberof TurnawayDetailsType
     */
    numberOfRooms?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof TurnawayDetailsType
     */
    rateAmount?: CurrencyAmountType;
    /**
     * Holds the Rate Code.
     * @type {string}
     * @memberof TurnawayDetailsType
     */
    ratePlanCode?: string;
    /**
     * Holds the Room Type.
     * @type {string}
     * @memberof TurnawayDetailsType
     */
    roomType?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof TurnawayDetailsType
     */
    timeSpan?: TimeSpanType;
    /**
     * Holds the Yield Market Code.
     * @type {string}
     * @memberof TurnawayDetailsType
     */
    yieldMarketCode?: string;
}
/**
 * Check if a given object implements the TurnawayDetailsType interface.
 */
export declare function instanceOfTurnawayDetailsType(value: object): boolean;
export declare function TurnawayDetailsTypeFromJSON(json: any): TurnawayDetailsType;
export declare function TurnawayDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurnawayDetailsType;
export declare function TurnawayDetailsTypeToJSON(value?: TurnawayDetailsType | null): any;