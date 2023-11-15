/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Summary of claim activity log information.
 * @export
 * @interface ClaimMembershipType
 */
export interface ClaimMembershipType {
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    nameOnCard?: string;
    /**
     * Indicates the membership class.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    membershipClass?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    membershipId?: string;
    /**
     * Membership ID Number.
     * @type {number}
     * @memberof ClaimMembershipType
     */
    membershipIdNo?: number;
    /**
     * Membership Type code.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    membershipType?: string;
    /**
     * The current level of the membership.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    membershipLevel?: string;
    /**
     * Indicates the starting date.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    effectiveDate?: string;
    /**
     * Indicates the ending date.
     * @type {string}
     * @memberof ClaimMembershipType
     */
    expireDate?: string;
    /**
     * When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14).
     * @type {boolean}
     * @memberof ClaimMembershipType
     */
    expireDateExclusiveIndicator?: boolean;
}
/**
 * Check if a given object implements the ClaimMembershipType interface.
 */
export declare function instanceOfClaimMembershipType(value: object): boolean;
export declare function ClaimMembershipTypeFromJSON(json: any): ClaimMembershipType;
export declare function ClaimMembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimMembershipType;
export declare function ClaimMembershipTypeToJSON(value?: ClaimMembershipType | null): any;
