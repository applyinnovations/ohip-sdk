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
/**
 * 
 * @export
 * @interface AwardUpgradeDetailType
 */
export interface AwardUpgradeDetailType {
    /**
     * Date on which the award details like points required and penalty points are applicable.
     * @type {string}
     * @memberof AwardUpgradeDetailType
     */
    date?: string;
    /**
     * Penalty Points applicable for the award detail date.
     * @type {number}
     * @memberof AwardUpgradeDetailType
     */
    penaltyPoints?: number;
    /**
     * Points required for the award detail date.
     * @type {number}
     * @memberof AwardUpgradeDetailType
     */
    pointsRequired?: number;
}

/**
 * Check if a given object implements the AwardUpgradeDetailType interface.
 */
export function instanceOfAwardUpgradeDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AwardUpgradeDetailTypeFromJSON(json: any): AwardUpgradeDetailType {
    return AwardUpgradeDetailTypeFromJSONTyped(json, false);
}

export function AwardUpgradeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardUpgradeDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'penaltyPoints': !exists(json, 'penaltyPoints') ? undefined : json['penaltyPoints'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
    };
}

export function AwardUpgradeDetailTypeToJSON(value?: AwardUpgradeDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'penaltyPoints': value.penaltyPoints,
        'pointsRequired': value.pointsRequired,
    };
}

