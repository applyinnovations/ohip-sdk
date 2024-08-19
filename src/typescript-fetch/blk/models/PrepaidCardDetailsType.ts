/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { PrepaidCardTransactionType } from './PrepaidCardTransactionType';
import {
    PrepaidCardTransactionTypeFromJSON,
    PrepaidCardTransactionTypeFromJSONTyped,
    PrepaidCardTransactionTypeToJSON,
} from './PrepaidCardTransactionType';

/**
 * Prepaid Card Details.
 * @export
 * @interface PrepaidCardDetailsType
 */
export interface PrepaidCardDetailsType {
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    activateDate?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    balanceTotal?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    creditTotal?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    debitTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    expiredDate?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    initialCreditTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    initialLoadDate?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    reservedTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {Array<PrepaidCardTransactionType>}
     * @memberof PrepaidCardDetailsType
     */
    transactions?: Array<PrepaidCardTransactionType>;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    validUntilDate?: string;
}

/**
 * Check if a given object implements the PrepaidCardDetailsType interface.
 */
export function instanceOfPrepaidCardDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardDetailsTypeFromJSON(json: any): PrepaidCardDetailsType {
    return PrepaidCardDetailsTypeFromJSONTyped(json, false);
}

export function PrepaidCardDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activateDate': !exists(json, 'activateDate') ? undefined : json['activateDate'],
        'balanceTotal': !exists(json, 'balanceTotal') ? undefined : CurrencyAmountTypeFromJSON(json['balanceTotal']),
        'creditTotal': !exists(json, 'creditTotal') ? undefined : CurrencyAmountTypeFromJSON(json['creditTotal']),
        'debitTotal': !exists(json, 'debitTotal') ? undefined : CurrencyAmountTypeFromJSON(json['debitTotal']),
        'expiredDate': !exists(json, 'expiredDate') ? undefined : json['expiredDate'],
        'initialCreditTotal': !exists(json, 'initialCreditTotal') ? undefined : CurrencyAmountTypeFromJSON(json['initialCreditTotal']),
        'initialLoadDate': !exists(json, 'initialLoadDate') ? undefined : json['initialLoadDate'],
        'reservedTotal': !exists(json, 'reservedTotal') ? undefined : CurrencyAmountTypeFromJSON(json['reservedTotal']),
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(PrepaidCardTransactionTypeFromJSON)),
        'validUntilDate': !exists(json, 'validUntilDate') ? undefined : json['validUntilDate'],
    };
}

export function PrepaidCardDetailsTypeToJSON(value?: PrepaidCardDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activateDate': value.activateDate,
        'balanceTotal': CurrencyAmountTypeToJSON(value.balanceTotal),
        'creditTotal': CurrencyAmountTypeToJSON(value.creditTotal),
        'debitTotal': CurrencyAmountTypeToJSON(value.debitTotal),
        'expiredDate': value.expiredDate,
        'initialCreditTotal': CurrencyAmountTypeToJSON(value.initialCreditTotal),
        'initialLoadDate': value.initialLoadDate,
        'reservedTotal': CurrencyAmountTypeToJSON(value.reservedTotal),
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(PrepaidCardTransactionTypeToJSON)),
        'validUntilDate': value.validUntilDate,
    };
}

