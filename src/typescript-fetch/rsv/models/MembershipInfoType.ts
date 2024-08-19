/* tslint:disable */
/* eslint-disable */
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
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof MembershipInfoType
     */
    playerRanking?: number;
    /**
     * The code or name of the membership program ('Hertz', 'AAdvantage', etc.).
     * @type {string}
     * @memberof MembershipInfoType
     */
    programCode?: string;
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
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDesc': !exists(json, 'membershipLevelDesc') ? undefined : json['membershipLevelDesc'],
        'membershipTypeDesc': !exists(json, 'membershipTypeDesc') ? undefined : json['membershipTypeDesc'],
        'playerRanking': !exists(json, 'playerRanking') ? undefined : json['playerRanking'],
        'programCode': !exists(json, 'programCode') ? undefined : json['programCode'],
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
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDesc': value.membershipLevelDesc,
        'membershipTypeDesc': value.membershipTypeDesc,
        'playerRanking': value.playerRanking,
        'programCode': value.programCode,
    };
}

