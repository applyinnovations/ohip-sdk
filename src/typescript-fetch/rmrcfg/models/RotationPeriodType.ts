/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RotationPeriodFrequencyType } from './RotationPeriodFrequencyType';
import {
    RotationPeriodFrequencyTypeFromJSON,
    RotationPeriodFrequencyTypeFromJSONTyped,
    RotationPeriodFrequencyTypeToJSON,
} from './RotationPeriodFrequencyType';

/**
 * Rotation Period Frequency and Start Date Details for a Property
 * @export
 * @interface RotationPeriodType
 */
export interface RotationPeriodType {
    /**
     * Represents if Rotation points/rules recalculation job should be re-triggered.
     * @type {boolean}
     * @memberof RotationPeriodType
     */
    forceRecalculate?: boolean;
    /**
     * Hotel code for Room Rotation Period.
     * @type {string}
     * @memberof RotationPeriodType
     */
    hotelId?: string;
    /**
     * 
     * @type {RotationPeriodFrequencyType}
     * @memberof RotationPeriodType
     */
    periodFrequency?: RotationPeriodFrequencyType;
    /**
     * Represents Effective start date for the Room Rotation Period Setup.
     * @type {string}
     * @memberof RotationPeriodType
     */
    startDate?: string;
}

/**
 * Check if a given object implements the RotationPeriodType interface.
 */
export function instanceOfRotationPeriodType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RotationPeriodTypeFromJSON(json: any): RotationPeriodType {
    return RotationPeriodTypeFromJSONTyped(json, false);
}

export function RotationPeriodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationPeriodType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forceRecalculate': !exists(json, 'forceRecalculate') ? undefined : json['forceRecalculate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'periodFrequency': !exists(json, 'periodFrequency') ? undefined : RotationPeriodFrequencyTypeFromJSON(json['periodFrequency']),
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
    };
}

export function RotationPeriodTypeToJSON(value?: RotationPeriodType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forceRecalculate': value.forceRecalculate,
        'hotelId': value.hotelId,
        'periodFrequency': RotationPeriodFrequencyTypeToJSON(value.periodFrequency),
        'startDate': value.startDate,
    };
}

