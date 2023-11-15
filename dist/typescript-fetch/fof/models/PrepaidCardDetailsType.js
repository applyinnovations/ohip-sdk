"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidCardDetailsTypeToJSON = exports.PrepaidCardDetailsTypeFromJSONTyped = exports.PrepaidCardDetailsTypeFromJSON = exports.instanceOfPrepaidCardDetailsType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PrepaidCardTransactionType_1 = require("./PrepaidCardTransactionType");
/**
 * Check if a given object implements the PrepaidCardDetailsType interface.
 */
function instanceOfPrepaidCardDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPrepaidCardDetailsType = instanceOfPrepaidCardDetailsType;
function PrepaidCardDetailsTypeFromJSON(json) {
    return PrepaidCardDetailsTypeFromJSONTyped(json, false);
}
exports.PrepaidCardDetailsTypeFromJSON = PrepaidCardDetailsTypeFromJSON;
function PrepaidCardDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activateDate': !(0, runtime_1.exists)(json, 'activateDate') ? undefined : json['activateDate'],
        'balanceTotal': !(0, runtime_1.exists)(json, 'balanceTotal') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balanceTotal']),
        'creditTotal': !(0, runtime_1.exists)(json, 'creditTotal') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['creditTotal']),
        'debitTotal': !(0, runtime_1.exists)(json, 'debitTotal') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['debitTotal']),
        'expiredDate': !(0, runtime_1.exists)(json, 'expiredDate') ? undefined : json['expiredDate'],
        'initialCreditTotal': !(0, runtime_1.exists)(json, 'initialCreditTotal') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['initialCreditTotal']),
        'initialLoadDate': !(0, runtime_1.exists)(json, 'initialLoadDate') ? undefined : json['initialLoadDate'],
        'reservedTotal': !(0, runtime_1.exists)(json, 'reservedTotal') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['reservedTotal']),
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (json['transactions'].map(PrepaidCardTransactionType_1.PrepaidCardTransactionTypeFromJSON)),
        'validUntilDate': !(0, runtime_1.exists)(json, 'validUntilDate') ? undefined : json['validUntilDate'],
    };
}
exports.PrepaidCardDetailsTypeFromJSONTyped = PrepaidCardDetailsTypeFromJSONTyped;
function PrepaidCardDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activateDate': value.activateDate,
        'balanceTotal': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balanceTotal),
        'creditTotal': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.creditTotal),
        'debitTotal': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.debitTotal),
        'expiredDate': value.expiredDate,
        'initialCreditTotal': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.initialCreditTotal),
        'initialLoadDate': value.initialLoadDate,
        'reservedTotal': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.reservedTotal),
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(PrepaidCardTransactionType_1.PrepaidCardTransactionTypeToJSON)),
        'validUntilDate': value.validUntilDate,
    };
}
exports.PrepaidCardDetailsTypeToJSON = PrepaidCardDetailsTypeToJSON;
