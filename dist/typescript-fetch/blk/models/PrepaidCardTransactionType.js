"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidCardTransactionTypeToJSON = exports.PrepaidCardTransactionTypeFromJSONTyped = exports.PrepaidCardTransactionTypeFromJSON = exports.instanceOfPrepaidCardTransactionType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PrepaidCardTrxTypeType_1 = require("./PrepaidCardTrxTypeType");
/**
 * Check if a given object implements the PrepaidCardTransactionType interface.
 */
function instanceOfPrepaidCardTransactionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPrepaidCardTransactionType = instanceOfPrepaidCardTransactionType;
function PrepaidCardTransactionTypeFromJSON(json) {
    return PrepaidCardTransactionTypeFromJSONTyped(json, false);
}
exports.PrepaidCardTransactionTypeFromJSON = PrepaidCardTransactionTypeFromJSON;
function PrepaidCardTransactionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : (0, PrepaidCardTrxTypeType_1.PrepaidCardTrxTypeTypeFromJSON)(json['transactionType']),
    };
}
exports.PrepaidCardTransactionTypeFromJSONTyped = PrepaidCardTransactionTypeFromJSONTyped;
function PrepaidCardTransactionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0, 10)),
        'transactionNo': value.transactionNo,
        'transactionType': (0, PrepaidCardTrxTypeType_1.PrepaidCardTrxTypeTypeToJSON)(value.transactionType),
    };
}
exports.PrepaidCardTransactionTypeToJSON = PrepaidCardTransactionTypeToJSON;
