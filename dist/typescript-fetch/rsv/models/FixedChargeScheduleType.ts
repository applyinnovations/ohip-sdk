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
import type { FixedChargeFrequencyType } from './FixedChargeFrequencyType';
import {
    FixedChargeFrequencyTypeFromJSON,
    FixedChargeFrequencyTypeFromJSONTyped,
    FixedChargeFrequencyTypeToJSON,
} from './FixedChargeFrequencyType';

/**
 * Holds schedule of fixed charge.
 * @export
 * @interface FixedChargeScheduleType
 */
export interface FixedChargeScheduleType {
    /**
     * Date of when to execute yearly fixed charge. Applicable when frequency is Yearly.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    dateToExecute?: Date;
    /**
     * Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly.
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    dayToExecute?: string;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    end?: Date;
    /**
     * 
     * @type {FixedChargeFrequencyType}
     * @memberof FixedChargeScheduleType
     */
    frequency?: FixedChargeFrequencyType;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    start?: Date;
}

/**
 * Check if a given object implements the FixedChargeScheduleType interface.
 */
export function instanceOfFixedChargeScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FixedChargeScheduleTypeFromJSON(json: any): FixedChargeScheduleType {
    return FixedChargeScheduleTypeFromJSONTyped(json, false);
}

export function FixedChargeScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateToExecute': !exists(json, 'dateToExecute') ? undefined : (new Date(json['dateToExecute'])),
        'dayToExecute': !exists(json, 'dayToExecute') ? undefined : json['dayToExecute'],
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'frequency': !exists(json, 'frequency') ? undefined : FixedChargeFrequencyTypeFromJSON(json['frequency']),
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
    };
}

export function FixedChargeScheduleTypeToJSON(value?: FixedChargeScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateToExecute': value.dateToExecute === undefined ? undefined : (value.dateToExecute.toISOString().substr(0,10)),
        'dayToExecute': value.dayToExecute,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'frequency': FixedChargeFrequencyTypeToJSON(value.frequency),
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
    };
}

