/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * This user defined schedule lets you enter a posting rhythm over a 14-day period, starting with the arrival date, by assigning the day (number) within a guest stay for posting this package price.
 * @export
 * @interface PackagePostingRhythmTypeCustomStaySchedule
 */
export interface PackagePostingRhythmTypeCustomStaySchedule {
    /**
     * Night 1 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night1?: boolean;
    /**
     * Night 10 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night10?: boolean;
    /**
     * Night 11 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night11?: boolean;
    /**
     * Night 12 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night12?: boolean;
    /**
     * Night 13 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night13?: boolean;
    /**
     * Night 14 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night14?: boolean;
    /**
     * Night 2 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night2?: boolean;
    /**
     * Night 3 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night3?: boolean;
    /**
     * Night 4 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night4?: boolean;
    /**
     * Night 5 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night5?: boolean;
    /**
     * Night 6 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night6?: boolean;
    /**
     * Night 7 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night7?: boolean;
    /**
     * Night 8 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night8?: boolean;
    /**
     * Night 9 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night9?: boolean;
}

/**
 * Check if a given object implements the PackagePostingRhythmTypeCustomStaySchedule interface.
 */
export function instanceOfPackagePostingRhythmTypeCustomStaySchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingRhythmTypeCustomStayScheduleFromJSON(json: any): PackagePostingRhythmTypeCustomStaySchedule {
    return PackagePostingRhythmTypeCustomStayScheduleFromJSONTyped(json, false);
}

export function PackagePostingRhythmTypeCustomStayScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmTypeCustomStaySchedule {
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

export function PackagePostingRhythmTypeCustomStayScheduleToJSON(value?: PackagePostingRhythmTypeCustomStaySchedule | null): any {
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

