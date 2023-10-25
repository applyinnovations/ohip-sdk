/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AwardUpgradeSummaryType } from './AwardUpgradeSummaryType';
import {
    AwardUpgradeSummaryTypeFromJSON,
    AwardUpgradeSummaryTypeFromJSONTyped,
    AwardUpgradeSummaryTypeToJSON,
} from './AwardUpgradeSummaryType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * 
 * @export
 * @interface AwardUpgradeInfoType
 */
export interface AwardUpgradeInfoType {
    /**
     * Summary information related to award upgrade.
     * @type {Array<AwardUpgradeSummaryType>}
     * @memberof AwardUpgradeInfoType
     */
    awardUpgradeSummaries?: Array<AwardUpgradeSummaryType>;
    /**
     * From Room type associated with the award.
     * @type {string}
     * @memberof AwardUpgradeInfoType
     */
    fromRoomType?: string;
    /**
     * Property associated with the award upgrade.
     * @type {string}
     * @memberof AwardUpgradeInfoType
     */
    hotelId?: string;
    /**
     * The card number associated with this membership.
     * @type {string}
     * @memberof AwardUpgradeInfoType
     */
    membershipCardNo?: string;
    /**
     * The current level of the membership.
     * @type {string}
     * @memberof AwardUpgradeInfoType
     */
    membershipLevel?: string;
    /**
     * Current membership points available for this guest.
     * @type {number}
     * @memberof AwardUpgradeInfoType
     */
    membershipPoints?: number;
    /**
     * The type of the membership.
     * @type {string}
     * @memberof AwardUpgradeInfoType
     */
    membershipType?: string;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof AwardUpgradeInfoType
     */
    reservationTimeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the AwardUpgradeInfoType interface.
 */
export function instanceOfAwardUpgradeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AwardUpgradeInfoTypeFromJSON(json: any): AwardUpgradeInfoType {
    return AwardUpgradeInfoTypeFromJSONTyped(json, false);
}

export function AwardUpgradeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardUpgradeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardUpgradeSummaries': !exists(json, 'awardUpgradeSummaries') ? undefined : ((json['awardUpgradeSummaries'] as Array<any>).map(AwardUpgradeSummaryTypeFromJSON)),
        'fromRoomType': !exists(json, 'fromRoomType') ? undefined : json['fromRoomType'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'membershipCardNo': !exists(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipPoints': !exists(json, 'membershipPoints') ? undefined : json['membershipPoints'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'reservationTimeSpan': !exists(json, 'reservationTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['reservationTimeSpan']),
    };
}

export function AwardUpgradeInfoTypeToJSON(value?: AwardUpgradeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardUpgradeSummaries': value.awardUpgradeSummaries === undefined ? undefined : ((value.awardUpgradeSummaries as Array<any>).map(AwardUpgradeSummaryTypeToJSON)),
        'fromRoomType': value.fromRoomType,
        'hotelId': value.hotelId,
        'membershipCardNo': value.membershipCardNo,
        'membershipLevel': value.membershipLevel,
        'membershipPoints': value.membershipPoints,
        'membershipType': value.membershipType,
        'reservationTimeSpan': TimeSpanTypeToJSON(value.reservationTimeSpan),
    };
}

