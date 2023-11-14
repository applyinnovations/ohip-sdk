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
 * 
 * @export
 * @interface MemberInfoDetailsType
 */
export interface MemberInfoDetailsType {
    /**
     * Total nights of the guest.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    guestTotalNights?: number;
    /**
     * STotal stays of the guest.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    guestTotalStay?: number;
    /**
     * Tier Base Nights Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBaseNights?: number;
    /**
     * Tier Base Revenue Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBaseRevenue?: number;
    /**
     * Tier Base Stay Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBaseStay?: number;
    /**
     * Tier Bonus Nights Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBonusNights?: number;
    /**
     * Tier Bonus Revenue Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBonusRevenue?: number;
    /**
     * Tier Bonus Stay Points.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    tierBonusStay?: number;
    /**
     * Total Nights of the membership.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    membershipTotalNights?: number;
    /**
     * Total Stay of the membership.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    membershipTotalStay?: number;
    /**
     * Total base points of the award.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    awardBasePoints?: number;
    /**
     * Total bonus points of the award.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    awardBonusPoints?: number;
    /**
     * Total miscellaneous points of the award.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    awardMiscPoints?: number;
    /**
     * Total points of the award.
     * @type {number}
     * @memberof MemberInfoDetailsType
     */
    totalAwardPoints?: number;
}

/**
 * Check if a given object implements the MemberInfoDetailsType interface.
 */
export function instanceOfMemberInfoDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MemberInfoDetailsTypeFromJSON(json: any): MemberInfoDetailsType {
    return MemberInfoDetailsTypeFromJSONTyped(json, false);
}

export function MemberInfoDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberInfoDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestTotalNights': !exists(json, 'guestTotalNights') ? undefined : json['guestTotalNights'],
        'guestTotalStay': !exists(json, 'guestTotalStay') ? undefined : json['guestTotalStay'],
        'tierBaseNights': !exists(json, 'tierBaseNights') ? undefined : json['tierBaseNights'],
        'tierBaseRevenue': !exists(json, 'tierBaseRevenue') ? undefined : json['tierBaseRevenue'],
        'tierBaseStay': !exists(json, 'tierBaseStay') ? undefined : json['tierBaseStay'],
        'tierBonusNights': !exists(json, 'tierBonusNights') ? undefined : json['tierBonusNights'],
        'tierBonusRevenue': !exists(json, 'tierBonusRevenue') ? undefined : json['tierBonusRevenue'],
        'tierBonusStay': !exists(json, 'tierBonusStay') ? undefined : json['tierBonusStay'],
        'membershipTotalNights': !exists(json, 'membershipTotalNights') ? undefined : json['membershipTotalNights'],
        'membershipTotalStay': !exists(json, 'membershipTotalStay') ? undefined : json['membershipTotalStay'],
        'awardBasePoints': !exists(json, 'awardBasePoints') ? undefined : json['awardBasePoints'],
        'awardBonusPoints': !exists(json, 'awardBonusPoints') ? undefined : json['awardBonusPoints'],
        'awardMiscPoints': !exists(json, 'awardMiscPoints') ? undefined : json['awardMiscPoints'],
        'totalAwardPoints': !exists(json, 'totalAwardPoints') ? undefined : json['totalAwardPoints'],
    };
}

export function MemberInfoDetailsTypeToJSON(value?: MemberInfoDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestTotalNights': value.guestTotalNights,
        'guestTotalStay': value.guestTotalStay,
        'tierBaseNights': value.tierBaseNights,
        'tierBaseRevenue': value.tierBaseRevenue,
        'tierBaseStay': value.tierBaseStay,
        'tierBonusNights': value.tierBonusNights,
        'tierBonusRevenue': value.tierBonusRevenue,
        'tierBonusStay': value.tierBonusStay,
        'membershipTotalNights': value.membershipTotalNights,
        'membershipTotalStay': value.membershipTotalStay,
        'awardBasePoints': value.awardBasePoints,
        'awardBonusPoints': value.awardBonusPoints,
        'awardMiscPoints': value.awardMiscPoints,
        'totalAwardPoints': value.totalAwardPoints,
    };
}
