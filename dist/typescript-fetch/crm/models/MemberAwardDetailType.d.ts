/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MemberAwardActionType } from './MemberAwardActionType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details related to member award like award type, stay date, rate code, etc.
 * @export
 * @interface MemberAwardDetailType
 */
export interface MemberAwardDetailType {
    /**
     *
     * @type {MemberAwardActionType}
     * @memberof MemberAwardDetailType
     */
    actionType?: MemberAwardActionType;
    /**
     * Actual number of cancel points.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    actualCancelPoints?: number;
    /**
     * Indicates if award is a Stay, Package Element or other.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardBasedOn?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof MemberAwardDetailType
     */
    awardCancellationNo?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof MemberAwardDetailType
     */
    awardProductId?: UniqueIDType;
    /**
     * The award type or code.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardType?: string;
    /**
     * Award Voucher Number.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardVoucherNo?: string;
    /**
     * Number points deducted if award is cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyCharge?: number;
    /**
     * Number days before arrival to apply penalty for cancellation.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyDays?: number;
    /**
     * Number of penalty points if cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyPoints?: number;
    /**
     * Type of cancel penalty like Points, etc.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyType?: string;
    /**
     * Type of cancel policy.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    cancelPolicyType?: string;
    /**
     * Exchange Rate Type for the Currency Exchange.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    exchangeRateType?: string;
    /**
     * Room type label before the upgrade in case of an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    fromRoomType?: string;
    /**
     * If the award detail is inactive.
     * @type {boolean}
     * @memberof MemberAwardDetailType
     */
    inactive?: boolean;
    /**
     * Number of nights cancel policy is applicable.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    numberOfNights?: number;
    /**
     * Points required for the stay date.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    pointsRequired?: number;
    /**
     * Product code for which the award was issued, in case of a product award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    product?: string;
    /**
     * Rate code associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    rateCode?: string;
    /**
     * Redeemed Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedCentralAmount?: number;
    /**
     * Redeemed Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedLocalAmount?: number;
    /**
     * Room type label associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    roomType?: string;
    /**
     * Date of stay.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    stayDate?: string;
    /**
     * Room type label after the upgrade for an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    toRoomType?: string;
    /**
     * Total Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalCentralAmount?: number;
    /**
     * Total Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalLocalAmount?: number;
    /**
     * The Payment Transaction Code for which the Surcharge Applies.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    transactionCode?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    transactionNo?: number;
}
/**
 * Check if a given object implements the MemberAwardDetailType interface.
 */
export declare function instanceOfMemberAwardDetailType(value: object): boolean;
export declare function MemberAwardDetailTypeFromJSON(json: any): MemberAwardDetailType;
export declare function MemberAwardDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberAwardDetailType;
export declare function MemberAwardDetailTypeToJSON(value?: MemberAwardDetailType | null): any;
