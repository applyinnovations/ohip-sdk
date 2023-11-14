/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
     * @type {Date}
     * @memberof ClaimMembershipType
     */
    effectiveDate?: Date;
    /**
     * Indicates the ending date.
     * @type {Date}
     * @memberof ClaimMembershipType
     */
    expireDate?: Date;
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
export function instanceOfClaimMembershipType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClaimMembershipTypeFromJSON(json: any): ClaimMembershipType {
    return ClaimMembershipTypeFromJSONTyped(json, false);
}

export function ClaimMembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimMembershipType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'membershipClass': !exists(json, 'membershipClass') ? undefined : json['membershipClass'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipIdNo': !exists(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'effectiveDate': !exists(json, 'effectiveDate') ? undefined : (new Date(json['effectiveDate'])),
        'expireDate': !exists(json, 'expireDate') ? undefined : (new Date(json['expireDate'])),
        'expireDateExclusiveIndicator': !exists(json, 'expireDateExclusiveIndicator') ? undefined : json['expireDateExclusiveIndicator'],
    };
}

export function ClaimMembershipTypeToJSON(value?: ClaimMembershipType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nameOnCard': value.nameOnCard,
        'membershipClass': value.membershipClass,
        'membershipId': value.membershipId,
        'membershipIdNo': value.membershipIdNo,
        'membershipType': value.membershipType,
        'membershipLevel': value.membershipLevel,
        'effectiveDate': value.effectiveDate === undefined ? undefined : (value.effectiveDate.toISOString().substring(0,10)),
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate.toISOString().substring(0,10)),
        'expireDateExclusiveIndicator': value.expireDateExclusiveIndicator,
    };
}
