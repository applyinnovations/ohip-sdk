/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Cashier Shift Transaction Type.
 * @export
 * @interface CashierTransactionType
 */
export interface CashierTransactionType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CashierTransactionType
     */
    amount?: CurrencyAmountType;
    /**
     * Transaction codes description which will be populated for summary elements only.
     * @type {string}
     * @memberof CashierTransactionType
     */
    description?: string;
    /**
     * Transaction code.
     * @type {string}
     * @memberof CashierTransactionType
     */
    transactionCode?: string;
    /**
     * Number of same transactions during a shift.
     * @type {number}
     * @memberof CashierTransactionType
     */
    trxCount?: number;
}

/**
 * Check if a given object implements the CashierTransactionType interface.
 */
export function instanceOfCashierTransactionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierTransactionTypeFromJSON(json: any): CashierTransactionType {
    return CashierTransactionTypeFromJSONTyped(json, false);
}

export function CashierTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierTransactionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'trxCount': !exists(json, 'trxCount') ? undefined : json['trxCount'],
    };
}

export function CashierTransactionTypeToJSON(value?: CashierTransactionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'description': value.description,
        'transactionCode': value.transactionCode,
        'trxCount': value.trxCount,
    };
}

