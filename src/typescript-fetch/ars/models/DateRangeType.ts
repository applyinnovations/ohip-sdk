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
/**
 * Date Range with Start and End dates.
 * @export
 * @interface DateRangeType
 */
export interface DateRangeType {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof DateRangeType
     */
    end?: string;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof DateRangeType
     */
    start?: string;
}

/**
 * Check if a given object implements the DateRangeType interface.
 */
export function instanceOfDateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DateRangeTypeFromJSON(json: any): DateRangeType {
    return DateRangeTypeFromJSONTyped(json, false);
}

export function DateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'end': !exists(json, 'end') ? undefined : json['end'],
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function DateRangeTypeToJSON(value?: DateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end': value.end,
        'start': value.start,
    };
}

