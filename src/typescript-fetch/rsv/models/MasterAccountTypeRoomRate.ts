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
 * Posting master reservation room and rate information.
 * @export
 * @interface MasterAccountTypeRoomRate
 */
export interface MasterAccountTypeRoomRate {
    /**
     * Market Code of the reservation.
     * @type {string}
     * @memberof MasterAccountTypeRoomRate
     */
    marketCode?: string;
    /**
     * The Rate Code of the reservation.
     * @type {string}
     * @memberof MasterAccountTypeRoomRate
     */
    ratePlanCode?: string;
    /**
     * Room Type of the reservation.
     * @type {string}
     * @memberof MasterAccountTypeRoomRate
     */
    roomType?: string;
    /**
     * Source Code of the reservation.
     * @type {string}
     * @memberof MasterAccountTypeRoomRate
     */
    sourceCode?: string;
}

/**
 * Check if a given object implements the MasterAccountTypeRoomRate interface.
 */
export function instanceOfMasterAccountTypeRoomRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MasterAccountTypeRoomRateFromJSON(json: any): MasterAccountTypeRoomRate {
    return MasterAccountTypeRoomRateFromJSONTyped(json, false);
}

export function MasterAccountTypeRoomRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterAccountTypeRoomRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
    };
}

export function MasterAccountTypeRoomRateToJSON(value?: MasterAccountTypeRoomRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'marketCode': value.marketCode,
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
        'sourceCode': value.sourceCode,
    };
}

