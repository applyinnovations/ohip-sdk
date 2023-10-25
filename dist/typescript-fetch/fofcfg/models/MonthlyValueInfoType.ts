/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Holds monthly value summary information
 * @export
 * @interface MonthlyValueInfoType
 */
export interface MonthlyValueInfoType {
    /**
     * Month number
     * @type {number}
     * @memberof MonthlyValueInfoType
     */
    month?: number;
    /**
     * Value information for a month.
     * @type {number}
     * @memberof MonthlyValueInfoType
     */
    value?: number;
}

/**
 * Check if a given object implements the MonthlyValueInfoType interface.
 */
export function instanceOfMonthlyValueInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MonthlyValueInfoTypeFromJSON(json: any): MonthlyValueInfoType {
    return MonthlyValueInfoTypeFromJSONTyped(json, false);
}

export function MonthlyValueInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthlyValueInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'month': !exists(json, 'month') ? undefined : json['month'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MonthlyValueInfoTypeToJSON(value?: MonthlyValueInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'month': value.month,
        'value': value.value,
    };
}

