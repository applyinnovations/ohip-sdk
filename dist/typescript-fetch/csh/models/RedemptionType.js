"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedemptionTypeToJSON = exports.RedemptionTypeFromJSONTyped = exports.RedemptionTypeFromJSON = exports.instanceOfRedemptionType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the RedemptionType interface.
 */
function instanceOfRedemptionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRedemptionType = instanceOfRedemptionType;
function RedemptionTypeFromJSON(json) {
    return RedemptionTypeFromJSONTyped(json, false);
}
exports.RedemptionTypeFromJSON = RedemptionTypeFromJSON;
function RedemptionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'approvalCode': !(0, runtime_1.exists)(json, 'approvalCode') ? undefined : json['approvalCode'],
        'availableAmount': !(0, runtime_1.exists)(json, 'availableAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['availableAmount']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'supplement': !(0, runtime_1.exists)(json, 'supplement') ? undefined : json['supplement'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}
exports.RedemptionTypeFromJSONTyped = RedemptionTypeFromJSONTyped;
function RedemptionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'approvalCode': value.approvalCode,
        'availableAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.availableAmount),
        'code': value.code,
        'description': value.description,
        'supplement': value.supplement,
        'transactionCode': value.transactionCode,
        'transactionNo': value.transactionNo,
    };
}
exports.RedemptionTypeToJSON = RedemptionTypeToJSON;
