/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    dateToExecute?: string;
    /**
     * Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly.
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    dayToExecute?: string;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    end?: string;
    /**
     * 
     * @type {FixedChargeFrequencyType}
     * @memberof FixedChargeScheduleType
     */
    frequency?: FixedChargeFrequencyType;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    start?: string;
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
        
        'dateToExecute': !exists(json, 'dateToExecute') ? undefined : json['dateToExecute'],
        'dayToExecute': !exists(json, 'dayToExecute') ? undefined : json['dayToExecute'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'frequency': !exists(json, 'frequency') ? undefined : FixedChargeFrequencyTypeFromJSON(json['frequency']),
        'start': !exists(json, 'start') ? undefined : json['start'],
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
        
        'dateToExecute': value.dateToExecute,
        'dayToExecute': value.dayToExecute,
        'end': value.end,
        'frequency': FixedChargeFrequencyTypeToJSON(value.frequency),
        'start': value.start,
    };
}

