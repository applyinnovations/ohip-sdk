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
import type { AwardUpgradeDetailsType } from './AwardUpgradeDetailsType';
/**
 *
 * @export
 * @interface AwardUpgradeSummaryType
 */
export interface AwardUpgradeSummaryType {
    /**
     * User configured award code.
     * @type {string}
     * @memberof AwardUpgradeSummaryType
     */
    awardCode?: string;
    /**
     *
     * @type {AwardUpgradeDetailsType}
     * @memberof AwardUpgradeSummaryType
     */
    awardUpgradeDetails?: AwardUpgradeDetailsType;
    /**
     * From Room type associated with the award.
     * @type {string}
     * @memberof AwardUpgradeSummaryType
     */
    fromRoomType?: string;
    /**
     * Number points deducted if award is cancelled.
     * @type {number}
     * @memberof AwardUpgradeSummaryType
     */
    penaltyCharge?: number;
    /**
     * Number days before arrival to apply penalty for cancellation.
     * @type {number}
     * @memberof AwardUpgradeSummaryType
     */
    penaltyDays?: number;
    /**
     * Total Number of penalty points if cancelled.
     * @type {number}
     * @memberof AwardUpgradeSummaryType
     */
    penaltyPoints?: number;
    /**
     * Type of cancel penalty like Points, etc.
     * @type {string}
     * @memberof AwardUpgradeSummaryType
     */
    penaltyType?: string;
    /**
     * Total Number of points required for the award.
     * @type {number}
     * @memberof AwardUpgradeSummaryType
     */
    pointsRequired?: number;
    /**
     * To Room type associated with the award.
     * @type {string}
     * @memberof AwardUpgradeSummaryType
     */
    toRoomType?: string;
}
/**
 * Check if a given object implements the AwardUpgradeSummaryType interface.
 */
export declare function instanceOfAwardUpgradeSummaryType(value: object): boolean;
export declare function AwardUpgradeSummaryTypeFromJSON(json: any): AwardUpgradeSummaryType;
export declare function AwardUpgradeSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardUpgradeSummaryType;
export declare function AwardUpgradeSummaryTypeToJSON(value?: AwardUpgradeSummaryType | null): any;
