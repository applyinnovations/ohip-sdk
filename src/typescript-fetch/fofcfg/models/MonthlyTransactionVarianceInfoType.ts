/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Revenue Variance information for a segment code for a month.
 * @export
 * @interface MonthlyTransactionVarianceInfoType
 */
export interface MonthlyTransactionVarianceInfoType {
    /**
     * Month number
     * @type {number}
     * @memberof MonthlyTransactionVarianceInfoType
     */
    month?: number;
    /**
     * Variance for a month.
     * @type {number}
     * @memberof MonthlyTransactionVarianceInfoType
     */
    revenueVariance?: number;
}

/**
 * Check if a given object implements the MonthlyTransactionVarianceInfoType interface.
 */
export function instanceOfMonthlyTransactionVarianceInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MonthlyTransactionVarianceInfoTypeFromJSON(json: any): MonthlyTransactionVarianceInfoType {
    return MonthlyTransactionVarianceInfoTypeFromJSONTyped(json, false);
}

export function MonthlyTransactionVarianceInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthlyTransactionVarianceInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'month': !exists(json, 'month') ? undefined : json['month'],
        'revenueVariance': !exists(json, 'revenueVariance') ? undefined : json['revenueVariance'],
    };
}

export function MonthlyTransactionVarianceInfoTypeToJSON(value?: MonthlyTransactionVarianceInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'month': value.month,
        'revenueVariance': value.revenueVariance,
    };
}
