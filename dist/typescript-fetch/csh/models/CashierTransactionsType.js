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
exports.CashierTransactionsTypeToJSON = exports.CashierTransactionsTypeFromJSONTyped = exports.CashierTransactionsTypeFromJSON = exports.instanceOfCashierTransactionsType = void 0;
const runtime_1 = require("../runtime");
const CashierClosureNoType_1 = require("./CashierClosureNoType");
const CashierTransactionType_1 = require("./CashierTransactionType");
const HotelCashierTransactionType_1 = require("./HotelCashierTransactionType");
const TrxCodesInfoType_1 = require("./TrxCodesInfoType");
/**
 * Check if a given object implements the CashierTransactionsType interface.
 */
function instanceOfCashierTransactionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierTransactionsType = instanceOfCashierTransactionsType;
function CashierTransactionsTypeFromJSON(json) {
    return CashierTransactionsTypeFromJSONTyped(json, false);
}
exports.CashierTransactionsTypeFromJSON = CashierTransactionsTypeFromJSON;
function CashierTransactionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierInfo': !(0, runtime_1.exists)(json, 'cashierInfo') ? undefined : (0, CashierClosureNoType_1.CashierClosureNoTypeFromJSON)(json['cashierInfo']),
        'hotelTransactionList': !(0, runtime_1.exists)(json, 'hotelTransactionList') ? undefined : (json['hotelTransactionList'].map(HotelCashierTransactionType_1.HotelCashierTransactionTypeFromJSON)),
        'summaryTransactionList': !(0, runtime_1.exists)(json, 'summaryTransactionList') ? undefined : (json['summaryTransactionList'].map(CashierTransactionType_1.CashierTransactionTypeFromJSON)),
        'trxCodesInfo': !(0, runtime_1.exists)(json, 'trxCodesInfo') ? undefined : (0, TrxCodesInfoType_1.TrxCodesInfoTypeFromJSON)(json['trxCodesInfo']),
    };
}
exports.CashierTransactionsTypeFromJSONTyped = CashierTransactionsTypeFromJSONTyped;
function CashierTransactionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierInfo': (0, CashierClosureNoType_1.CashierClosureNoTypeToJSON)(value.cashierInfo),
        'hotelTransactionList': value.hotelTransactionList === undefined ? undefined : (value.hotelTransactionList.map(HotelCashierTransactionType_1.HotelCashierTransactionTypeToJSON)),
        'summaryTransactionList': value.summaryTransactionList === undefined ? undefined : (value.summaryTransactionList.map(CashierTransactionType_1.CashierTransactionTypeToJSON)),
        'trxCodesInfo': (0, TrxCodesInfoType_1.TrxCodesInfoTypeToJSON)(value.trxCodesInfo),
    };
}
exports.CashierTransactionsTypeToJSON = CashierTransactionsTypeToJSON;