/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The Membership object identifies the frequent customer reward program.
 * @export
 * @interface MembershipInfoType
 */
export interface MembershipInfoType {
    /**
     * The account identification number for this particular member in this particular program.
     * @type {string}
     * @memberof MembershipInfoType
     */
    accountId?: string;
    /**
     * The code or name of the bonus program. BonusCode can be used to indicate the level of membership (Gold Club, Platinum member, etc.)
     * @type {string}
     * @memberof MembershipInfoType
     */
    bonusCode?: string;
    /**
     * Indicates the end date of membership.
     * @type {Date}
     * @memberof MembershipInfoType
     */
    expireDate?: Date;
    /**
     * Indicates whether membership is active or inactive.
     * @type {boolean}
     * @memberof MembershipInfoType
     */
    inactive?: boolean;
    /**
     * Membership ID (Unique ID from the memberships table).
     * @type {number}
     * @memberof MembershipInfoType
     */
    membershipId?: number;
    /**
     * The code or name of the membership level and indicates the level of membership (Gold Club, Platinum member, etc.). This is same as the BonusCode.
     * @type {string}
     * @memberof MembershipInfoType
     */
    membershipLevel?: string;
    /**
     * The description of the Bonus Code.(Platinum for code P)
     * @type {string}
     * @memberof MembershipInfoType
     */
    membershipLevelDesc?: string;
    /**
     * The description of the ProgramCode.(Delta Previlige for code DP)
     * @type {string}
     * @memberof MembershipInfoType
     */
    membershipTypeDesc?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof MembershipInfoType
     */
    nameOnCard?: string;
    /**
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof MembershipInfoType
     */
    playerRanking?: number;
    /**
     * Boolean indicator set to True indicates membership is a Primary Membership.
     * @type {boolean}
     * @memberof MembershipInfoType
     */
    primaryMembership?: boolean;
    /**
     * The code or name of the membership program ('Hertz', 'AAdvantage', etc.).
     * @type {string}
     * @memberof MembershipInfoType
     */
    programCode?: string;
    /**
     * Total amount that was redeemed so far through points.
     * @type {number}
     * @memberof MembershipInfoType
     */
    totalAmountRedeemed?: number;
}

/**
 * Check if a given object implements the MembershipInfoType interface.
 */
export function instanceOfMembershipInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipInfoTypeFromJSON(json: any): MembershipInfoType {
    return MembershipInfoTypeFromJSONTyped(json, false);
}

export function MembershipInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'bonusCode': !exists(json, 'bonusCode') ? undefined : json['bonusCode'],
        'expireDate': !exists(json, 'expireDate') ? undefined : (new Date(json['expireDate'])),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDesc': !exists(json, 'membershipLevelDesc') ? undefined : json['membershipLevelDesc'],
        'membershipTypeDesc': !exists(json, 'membershipTypeDesc') ? undefined : json['membershipTypeDesc'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'playerRanking': !exists(json, 'playerRanking') ? undefined : json['playerRanking'],
        'primaryMembership': !exists(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'programCode': !exists(json, 'programCode') ? undefined : json['programCode'],
        'totalAmountRedeemed': !exists(json, 'totalAmountRedeemed') ? undefined : json['totalAmountRedeemed'],
    };
}

export function MembershipInfoTypeToJSON(value?: MembershipInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'bonusCode': value.bonusCode,
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate.toISOString().substring(0,10)),
        'inactive': value.inactive,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDesc': value.membershipLevelDesc,
        'membershipTypeDesc': value.membershipTypeDesc,
        'nameOnCard': value.nameOnCard,
        'playerRanking': value.playerRanking,
        'primaryMembership': value.primaryMembership,
        'programCode': value.programCode,
        'totalAmountRedeemed': value.totalAmountRedeemed,
    };
}
