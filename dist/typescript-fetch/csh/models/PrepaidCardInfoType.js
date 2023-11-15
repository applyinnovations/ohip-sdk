"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidCardInfoTypeToJSON = exports.PrepaidCardInfoTypeFromJSONTyped = exports.PrepaidCardInfoTypeFromJSON = exports.instanceOfPrepaidCardInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PrepaidCardTransactionInfoType_1 = require("./PrepaidCardTransactionInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PrepaidCardInfoType interface.
 */
function instanceOfPrepaidCardInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPrepaidCardInfoType = instanceOfPrepaidCardInfoType;
function PrepaidCardInfoTypeFromJSON(json) {
    return PrepaidCardInfoTypeFromJSONTyped(json, false);
}
exports.PrepaidCardInfoTypeFromJSON = PrepaidCardInfoTypeFromJSON;
function PrepaidCardInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availableCashoutAmount': !(0, runtime_1.exists)(json, 'availableCashoutAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['availableCashoutAmount']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'cardNo': !(0, runtime_1.exists)(json, 'cardNo') ? undefined : json['cardNo'],
        'cardNumberMasked': !(0, runtime_1.exists)(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'expiryDate': !(0, runtime_1.exists)(json, 'expiryDate') ? undefined : json['expiryDate'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'initialCredit': !(0, runtime_1.exists)(json, 'initialCredit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['initialCredit']),
        'initialLoadDate': !(0, runtime_1.exists)(json, 'initialLoadDate') ? undefined : json['initialLoadDate'],
        'interfaceId': !(0, runtime_1.exists)(json, 'interfaceId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['interfaceId']),
        'issueDate': !(0, runtime_1.exists)(json, 'issueDate') ? undefined : json['issueDate'],
        'operaTransactionsActive': !(0, runtime_1.exists)(json, 'operaTransactionsActive') ? undefined : json['operaTransactionsActive'],
        'prepaidCardTransactions': !(0, runtime_1.exists)(json, 'prepaidCardTransactions') ? undefined : (json['prepaidCardTransactions'].map(PrepaidCardTransactionInfoType_1.PrepaidCardTransactionInfoTypeFromJSON)),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reservationId']),
        'reservedAmount': !(0, runtime_1.exists)(json, 'reservedAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['reservedAmount']),
        'totalCredit': !(0, runtime_1.exists)(json, 'totalCredit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalCredit']),
        'totalDebit': !(0, runtime_1.exists)(json, 'totalDebit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalDebit']),
        'validUntil': !(0, runtime_1.exists)(json, 'validUntil') ? undefined : json['validUntil'],
        'vendorTransactionsActive': !(0, runtime_1.exists)(json, 'vendorTransactionsActive') ? undefined : json['vendorTransactionsActive'],
    };
}
exports.PrepaidCardInfoTypeFromJSONTyped = PrepaidCardInfoTypeFromJSONTyped;
function PrepaidCardInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availableCashoutAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.availableCashoutAmount),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'cardNo': value.cardNo,
        'cardNumberMasked': value.cardNumberMasked,
        'expiryDate': value.expiryDate,
        'hotelId': value.hotelId,
        'initialCredit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.initialCredit),
        'initialLoadDate': value.initialLoadDate,
        'interfaceId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.interfaceId),
        'issueDate': value.issueDate,
        'operaTransactionsActive': value.operaTransactionsActive,
        'prepaidCardTransactions': value.prepaidCardTransactions === undefined ? undefined : (value.prepaidCardTransactions.map(PrepaidCardTransactionInfoType_1.PrepaidCardTransactionInfoTypeToJSON)),
        'reservationId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reservationId),
        'reservedAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.reservedAmount),
        'totalCredit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalCredit),
        'totalDebit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalDebit),
        'validUntil': value.validUntil,
        'vendorTransactionsActive': value.vendorTransactionsActive,
    };
}
exports.PrepaidCardInfoTypeToJSON = PrepaidCardInfoTypeToJSON;
