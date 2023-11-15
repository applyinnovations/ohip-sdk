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
import type { PrepaidCardTransactionInfoType } from './PrepaidCardTransactionInfoType';
import {
    PrepaidCardTransactionInfoTypeFromJSON,
    PrepaidCardTransactionInfoTypeFromJSONTyped,
    PrepaidCardTransactionInfoTypeToJSON,
} from './PrepaidCardTransactionInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Detailed information about the prepaid card.
 * @export
 * @interface PrepaidCardInfoType
 */
export interface PrepaidCardInfoType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    availableCashoutAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    balance?: CurrencyAmountType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    cardNo?: string;
    /**
     * Masked Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    cardNumberMasked?: string;
    /**
     * Expiry Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    expiryDate?: string;
    /**
     * Hotel context for the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    initialCredit?: CurrencyAmountType;
    /**
     * Initial Load Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    initialLoadDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PrepaidCardInfoType
     */
    interfaceId?: UniqueIDType;
    /**
     * Issue Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    issueDate?: string;
    /**
     * Indicate if opera transactions are included on the transactions list.
     * @type {boolean}
     * @memberof PrepaidCardInfoType
     */
    operaTransactionsActive?: boolean;
    /**
     * Prepaid card transaction details.
     * @type {Array<PrepaidCardTransactionInfoType>}
     * @memberof PrepaidCardInfoType
     */
    prepaidCardTransactions?: Array<PrepaidCardTransactionInfoType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PrepaidCardInfoType
     */
    reservationId?: UniqueIDType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    reservedAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    totalCredit?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    totalDebit?: CurrencyAmountType;
    /**
     * Validity of the prepaid card amount.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    validUntil?: string;
    /**
     * Indicate if vendor transactions are included on the transactions list.
     * @type {boolean}
     * @memberof PrepaidCardInfoType
     */
    vendorTransactionsActive?: boolean;
}

/**
 * Check if a given object implements the PrepaidCardInfoType interface.
 */
export function instanceOfPrepaidCardInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardInfoTypeFromJSON(json: any): PrepaidCardInfoType {
    return PrepaidCardInfoTypeFromJSONTyped(json, false);
}

export function PrepaidCardInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableCashoutAmount': !exists(json, 'availableCashoutAmount') ? undefined : CurrencyAmountTypeFromJSON(json['availableCashoutAmount']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'cardNo': !exists(json, 'cardNo') ? undefined : json['cardNo'],
        'cardNumberMasked': !exists(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'expiryDate': !exists(json, 'expiryDate') ? undefined : json['expiryDate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'initialCredit': !exists(json, 'initialCredit') ? undefined : CurrencyAmountTypeFromJSON(json['initialCredit']),
        'initialLoadDate': !exists(json, 'initialLoadDate') ? undefined : json['initialLoadDate'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'issueDate': !exists(json, 'issueDate') ? undefined : json['issueDate'],
        'operaTransactionsActive': !exists(json, 'operaTransactionsActive') ? undefined : json['operaTransactionsActive'],
        'prepaidCardTransactions': !exists(json, 'prepaidCardTransactions') ? undefined : ((json['prepaidCardTransactions'] as Array<any>).map(PrepaidCardTransactionInfoTypeFromJSON)),
        'reservationId': !exists(json, 'reservationId') ? undefined : UniqueIDTypeFromJSON(json['reservationId']),
        'reservedAmount': !exists(json, 'reservedAmount') ? undefined : CurrencyAmountTypeFromJSON(json['reservedAmount']),
        'totalCredit': !exists(json, 'totalCredit') ? undefined : CurrencyAmountTypeFromJSON(json['totalCredit']),
        'totalDebit': !exists(json, 'totalDebit') ? undefined : CurrencyAmountTypeFromJSON(json['totalDebit']),
        'validUntil': !exists(json, 'validUntil') ? undefined : json['validUntil'],
        'vendorTransactionsActive': !exists(json, 'vendorTransactionsActive') ? undefined : json['vendorTransactionsActive'],
    };
}

export function PrepaidCardInfoTypeToJSON(value?: PrepaidCardInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableCashoutAmount': CurrencyAmountTypeToJSON(value.availableCashoutAmount),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'cardNo': value.cardNo,
        'cardNumberMasked': value.cardNumberMasked,
        'expiryDate': value.expiryDate,
        'hotelId': value.hotelId,
        'initialCredit': CurrencyAmountTypeToJSON(value.initialCredit),
        'initialLoadDate': value.initialLoadDate,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'issueDate': value.issueDate,
        'operaTransactionsActive': value.operaTransactionsActive,
        'prepaidCardTransactions': value.prepaidCardTransactions === undefined ? undefined : ((value.prepaidCardTransactions as Array<any>).map(PrepaidCardTransactionInfoTypeToJSON)),
        'reservationId': UniqueIDTypeToJSON(value.reservationId),
        'reservedAmount': CurrencyAmountTypeToJSON(value.reservedAmount),
        'totalCredit': CurrencyAmountTypeToJSON(value.totalCredit),
        'totalDebit': CurrencyAmountTypeToJSON(value.totalDebit),
        'validUntil': value.validUntil,
        'vendorTransactionsActive': value.vendorTransactionsActive,
    };
}

