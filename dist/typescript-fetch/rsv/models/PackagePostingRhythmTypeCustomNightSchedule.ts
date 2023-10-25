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
 * The start and end of the posting period is determined as follows: If the package is attached to a rate code: The period starts with the date when the rate code to which the package is attached becomes effective for the stay. The period ends with the date of the last night for that rate code (or the last night of the stay if the rate code remains in effect until the departure date). If the package is attached separately to the reservation: The Begin Date specified on the reservation when the package was attached is the start date for the period. The End Date specified on the reservation when the package was attached is the end date for the period. If no Begin Date and/or End Date are specified when the package is attached to the reservation, the Begin Date is assumed to be the arrival date and the End Date is assumed to be the departure date of the reservation, irrespective of when the package is attached to the reservation.
 * @export
 * @interface PackagePostingRhythmTypeCustomNightSchedule
 */
export interface PackagePostingRhythmTypeCustomNightSchedule {
    /**
     * Night 1 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night1?: boolean;
    /**
     * Night 10 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night10?: boolean;
    /**
     * Night 11 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night11?: boolean;
    /**
     * Night 12 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night12?: boolean;
    /**
     * Night 13 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night13?: boolean;
    /**
     * Night 14 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night14?: boolean;
    /**
     * Night 2 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night2?: boolean;
    /**
     * Night 3 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night3?: boolean;
    /**
     * Night 4 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night4?: boolean;
    /**
     * Night 5 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night5?: boolean;
    /**
     * Night 6 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night6?: boolean;
    /**
     * Night 7 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night7?: boolean;
    /**
     * Night 8 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night8?: boolean;
    /**
     * Night 9 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night9?: boolean;
}

/**
 * Check if a given object implements the PackagePostingRhythmTypeCustomNightSchedule interface.
 */
export function instanceOfPackagePostingRhythmTypeCustomNightSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingRhythmTypeCustomNightScheduleFromJSON(json: any): PackagePostingRhythmTypeCustomNightSchedule {
    return PackagePostingRhythmTypeCustomNightScheduleFromJSONTyped(json, false);
}

export function PackagePostingRhythmTypeCustomNightScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmTypeCustomNightSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'night1': !exists(json, 'night1') ? undefined : json['night1'],
        'night10': !exists(json, 'night10') ? undefined : json['night10'],
        'night11': !exists(json, 'night11') ? undefined : json['night11'],
        'night12': !exists(json, 'night12') ? undefined : json['night12'],
        'night13': !exists(json, 'night13') ? undefined : json['night13'],
        'night14': !exists(json, 'night14') ? undefined : json['night14'],
        'night2': !exists(json, 'night2') ? undefined : json['night2'],
        'night3': !exists(json, 'night3') ? undefined : json['night3'],
        'night4': !exists(json, 'night4') ? undefined : json['night4'],
        'night5': !exists(json, 'night5') ? undefined : json['night5'],
        'night6': !exists(json, 'night6') ? undefined : json['night6'],
        'night7': !exists(json, 'night7') ? undefined : json['night7'],
        'night8': !exists(json, 'night8') ? undefined : json['night8'],
        'night9': !exists(json, 'night9') ? undefined : json['night9'],
    };
}

export function PackagePostingRhythmTypeCustomNightScheduleToJSON(value?: PackagePostingRhythmTypeCustomNightSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'night1': value.night1,
        'night10': value.night10,
        'night11': value.night11,
        'night12': value.night12,
        'night13': value.night13,
        'night14': value.night14,
        'night2': value.night2,
        'night3': value.night3,
        'night4': value.night4,
        'night5': value.night5,
        'night6': value.night6,
        'night7': value.night7,
        'night8': value.night8,
        'night9': value.night9,
    };
}

