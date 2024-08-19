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
 * Combination of Adjustment Reason Code and Transaction Adjustment Code.
 * @export
 * @interface TransactionAdjustmentType
 */
export interface TransactionAdjustmentType {
    /**
     * Adjustment reason Code
     * @type {string}
     * @memberof TransactionAdjustmentType
     */
    adjustmentReasonCode?: string;
    /**
     * Adjustment Transaction Code
     * @type {string}
     * @memberof TransactionAdjustmentType
     */
    adjustmentTransactionCode?: string;
}

/**
 * Check if a given object implements the TransactionAdjustmentType interface.
 */
export function instanceOfTransactionAdjustmentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionAdjustmentTypeFromJSON(json: any): TransactionAdjustmentType {
    return TransactionAdjustmentTypeFromJSONTyped(json, false);
}

export function TransactionAdjustmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAdjustmentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentReasonCode': !exists(json, 'adjustmentReasonCode') ? undefined : json['adjustmentReasonCode'],
        'adjustmentTransactionCode': !exists(json, 'adjustmentTransactionCode') ? undefined : json['adjustmentTransactionCode'],
    };
}

export function TransactionAdjustmentTypeToJSON(value?: TransactionAdjustmentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentReasonCode': value.adjustmentReasonCode,
        'adjustmentTransactionCode': value.adjustmentTransactionCode,
    };
}

