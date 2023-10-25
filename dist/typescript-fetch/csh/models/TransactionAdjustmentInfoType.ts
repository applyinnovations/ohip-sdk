/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Adjustment details of the transaction, if the transaction was created as part of an adjustment.
 * @export
 * @interface TransactionAdjustmentInfoType
 */
export interface TransactionAdjustmentInfoType {
    /**
     * Adjustment code used.
     * @type {string}
     * @memberof TransactionAdjustmentInfoType
     */
    code?: string;
    /**
     * Department code for service recovery
     * @type {string}
     * @memberof TransactionAdjustmentInfoType
     */
    departmentCode?: string;
    /**
     * Reason for the adjustment.
     * @type {string}
     * @memberof TransactionAdjustmentInfoType
     */
    reason?: string;
}

/**
 * Check if a given object implements the TransactionAdjustmentInfoType interface.
 */
export function instanceOfTransactionAdjustmentInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionAdjustmentInfoTypeFromJSON(json: any): TransactionAdjustmentInfoType {
    return TransactionAdjustmentInfoTypeFromJSONTyped(json, false);
}

export function TransactionAdjustmentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAdjustmentInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'departmentCode': !exists(json, 'departmentCode') ? undefined : json['departmentCode'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function TransactionAdjustmentInfoTypeToJSON(value?: TransactionAdjustmentInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'departmentCode': value.departmentCode,
        'reason': value.reason,
    };
}

