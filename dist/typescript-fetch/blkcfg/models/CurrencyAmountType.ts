/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * A monetary value expressed with a currency code.
 * @export
 * @interface CurrencyAmountType
 */
export interface CurrencyAmountType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof CurrencyAmountType
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof CurrencyAmountType
     */
    currencyCode?: string;
}

/**
 * Check if a given object implements the CurrencyAmountType interface.
 */
export function instanceOfCurrencyAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrencyAmountTypeFromJSON(json: any): CurrencyAmountType {
    return CurrencyAmountTypeFromJSONTyped(json, false);
}

export function CurrencyAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyAmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
    };
}

export function CurrencyAmountTypeToJSON(value?: CurrencyAmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currencyCode': value.currencyCode,
    };
}

