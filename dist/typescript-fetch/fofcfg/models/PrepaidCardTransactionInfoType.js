"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidCardTransactionInfoTypeToJSON = exports.PrepaidCardTransactionInfoTypeFromJSONTyped = exports.PrepaidCardTransactionInfoTypeFromJSON = exports.instanceOfPrepaidCardTransactionInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PrepaidCardTransactionSourceType_1 = require("./PrepaidCardTransactionSourceType");
const PrepaidCardTrxTypeType_1 = require("./PrepaidCardTrxTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PrepaidCardTransactionInfoType interface.
 */
function instanceOfPrepaidCardTransactionInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPrepaidCardTransactionInfoType = instanceOfPrepaidCardTransactionInfoType;
function PrepaidCardTransactionInfoTypeFromJSON(json) {
    return PrepaidCardTransactionInfoTypeFromJSONTyped(json, false);
}
exports.PrepaidCardTransactionInfoTypeFromJSON = PrepaidCardTransactionInfoTypeFromJSON;
function PrepaidCardTransactionInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'cancellable': !(0, runtime_1.exists)(json, 'cancellable') ? undefined : json['cancellable'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['profileId']),
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, PrepaidCardTransactionSourceType_1.PrepaidCardTransactionSourceTypeFromJSON)(json['source']),
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, PrepaidCardTrxTypeType_1.PrepaidCardTrxTypeTypeFromJSON)(json['type']),
        'vendorTransactionNo': !(0, runtime_1.exists)(json, 'vendorTransactionNo') ? undefined : json['vendorTransactionNo'],
    };
}
exports.PrepaidCardTransactionInfoTypeFromJSONTyped = PrepaidCardTransactionInfoTypeFromJSONTyped;
function PrepaidCardTransactionInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'cancellable': value.cancellable,
        'date': value.date,
        'profileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.profileId),
        'source': (0, PrepaidCardTransactionSourceType_1.PrepaidCardTransactionSourceTypeToJSON)(value.source),
        'transactionNo': value.transactionNo,
        'type': (0, PrepaidCardTrxTypeType_1.PrepaidCardTrxTypeTypeToJSON)(value.type),
        'vendorTransactionNo': value.vendorTransactionNo,
    };
}
exports.PrepaidCardTransactionInfoTypeToJSON = PrepaidCardTransactionInfoTypeToJSON;