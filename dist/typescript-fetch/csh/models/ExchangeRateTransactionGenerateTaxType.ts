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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Tax information based on Transaction Code Generate.
 * @export
 * @interface ExchangeRateTransactionGenerateTaxType
 */
export interface ExchangeRateTransactionGenerateTaxType {
    /**
     * Transaction Code Generate description.
     * @type {string}
     * @memberof ExchangeRateTransactionGenerateTaxType
     */
    code?: string;
    /**
     * Transaction Code Generate description.
     * @type {string}
     * @memberof ExchangeRateTransactionGenerateTaxType
     */
    description?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ExchangeRateTransactionGenerateTaxType
     */
    taxAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ExchangeRateTransactionGenerateTaxType interface.
 */
export function instanceOfExchangeRateTransactionGenerateTaxType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExchangeRateTransactionGenerateTaxTypeFromJSON(json: any): ExchangeRateTransactionGenerateTaxType {
    return ExchangeRateTransactionGenerateTaxTypeFromJSONTyped(json, false);
}

export function ExchangeRateTransactionGenerateTaxTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeRateTransactionGenerateTaxType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'taxAmount': !exists(json, 'taxAmount') ? undefined : CurrencyAmountTypeFromJSON(json['taxAmount']),
    };
}

export function ExchangeRateTransactionGenerateTaxTypeToJSON(value?: ExchangeRateTransactionGenerateTaxType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'taxAmount': CurrencyAmountTypeToJSON(value.taxAmount),
    };
}

