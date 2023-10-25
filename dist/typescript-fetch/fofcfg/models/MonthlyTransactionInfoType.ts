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
 * Holds monthly Revenue summary information
 * @export
 * @interface MonthlyTransactionInfoType
 */
export interface MonthlyTransactionInfoType {
    /**
     * Month number
     * @type {number}
     * @memberof MonthlyTransactionInfoType
     */
    month?: number;
    /**
     * Revenue information for a month.
     * @type {number}
     * @memberof MonthlyTransactionInfoType
     */
    revenue?: number;
}

/**
 * Check if a given object implements the MonthlyTransactionInfoType interface.
 */
export function instanceOfMonthlyTransactionInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MonthlyTransactionInfoTypeFromJSON(json: any): MonthlyTransactionInfoType {
    return MonthlyTransactionInfoTypeFromJSONTyped(json, false);
}

export function MonthlyTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthlyTransactionInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'month': !exists(json, 'month') ? undefined : json['month'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
    };
}

export function MonthlyTransactionInfoTypeToJSON(value?: MonthlyTransactionInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'month': value.month,
        'revenue': value.revenue,
    };
}

