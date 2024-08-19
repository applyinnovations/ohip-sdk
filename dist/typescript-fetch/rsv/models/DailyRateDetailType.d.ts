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
import type { AmountType } from './AmountType';
import type { GuestCountsType } from './GuestCountsType';
import type { PromotionType } from './PromotionType';
/**
 * Rate details for the different dates of a reservation.
 * @export
 * @interface DailyRateDetailType
 */
export interface DailyRateDetailType {
    /**
     * Indicates if all the share reservations will be changed. This is returned in the response after validation, indicating whether all shares will be changed (in the case of room type change or date change).
     * @type {boolean}
     * @memberof DailyRateDetailType
     */
    changeAllSharers?: boolean;
    /**
     * The Commission Code used for the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    commissionCode?: string;
    /**
     * Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code.
     * @type {boolean}
     * @memberof DailyRateDetailType
     */
    discountAllowed?: boolean;
    /**
     * The date of the reservation stay. If the same details need to be applied to a date range of the stay, then the Start Date and End Date would specify the range.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    endDate?: string;
    /**
     * Indicates if the rate is fixed and could be different from the default rate amount of the rate code.
     * @type {boolean}
     * @memberof DailyRateDetailType
     */
    fixedRate?: boolean;
    /**
     *
     * @type {GuestCountsType}
     * @memberof DailyRateDetailType
     */
    guestCounts?: GuestCountsType;
    /**
     * Market Code of the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    marketCode?: string;
    /**
     * Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation.
     * @type {Array<PromotionType>}
     * @memberof DailyRateDetailType
     */
    promotions?: Array<PromotionType>;
    /**
     *
     * @type {AmountType}
     * @memberof DailyRateDetailType
     */
    rate?: AmountType;
    /**
     * The Rate Code of the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    ratePlanCode?: string;
    /**
     * Room number of the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    roomId?: string;
    /**
     * Room Type of the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    roomType?: string;
    /**
     * The Room Type on which the rate is based on. The reservation may use a different room type but is charged based on a different room type.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    roomTypeToCharge?: string;
    /**
     * Source Code of the reservation.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    sourceCode?: string;
    /**
     * The date of the reservation stay.
     * @type {string}
     * @memberof DailyRateDetailType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the DailyRateDetailType interface.
 */
export declare function instanceOfDailyRateDetailType(value: object): boolean;
export declare function DailyRateDetailTypeFromJSON(json: any): DailyRateDetailType;
export declare function DailyRateDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyRateDetailType;
export declare function DailyRateDetailTypeToJSON(value?: DailyRateDetailType | null): any;
