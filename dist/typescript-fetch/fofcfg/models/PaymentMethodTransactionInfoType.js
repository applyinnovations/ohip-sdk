"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodTransactionInfoTypeToJSON = exports.PaymentMethodTransactionInfoTypeFromJSONTyped = exports.PaymentMethodTransactionInfoTypeFromJSON = exports.instanceOfPaymentMethodTransactionInfoType = void 0;
const runtime_1 = require("../runtime");
const PostingAmountType_1 = require("./PostingAmountType");
const SurchargeType_1 = require("./SurchargeType");
/**
 * Check if a given object implements the PaymentMethodTransactionInfoType interface.
 */
function instanceOfPaymentMethodTransactionInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentMethodTransactionInfoType = instanceOfPaymentMethodTransactionInfoType;
function PaymentMethodTransactionInfoTypeFromJSON(json) {
    return PaymentMethodTransactionInfoTypeFromJSONTyped(json, false);
}
exports.PaymentMethodTransactionInfoTypeFromJSON = PaymentMethodTransactionInfoTypeFromJSON;
function PaymentMethodTransactionInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'postingAmount': !(0, runtime_1.exists)(json, 'postingAmount') ? undefined : (0, PostingAmountType_1.PostingAmountTypeFromJSON)(json['postingAmount']),
        'surcharge': !(0, runtime_1.exists)(json, 'surcharge') ? undefined : (0, SurchargeType_1.SurchargeTypeFromJSON)(json['surcharge']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDisplay': !(0, runtime_1.exists)(json, 'transactionDisplay') ? undefined : json['transactionDisplay'],
        'transactionGroup': !(0, runtime_1.exists)(json, 'transactionGroup') ? undefined : json['transactionGroup'],
        'transactionSubGroup': !(0, runtime_1.exists)(json, 'transactionSubGroup') ? undefined : json['transactionSubGroup'],
    };
}
exports.PaymentMethodTransactionInfoTypeFromJSONTyped = PaymentMethodTransactionInfoTypeFromJSONTyped;
function PaymentMethodTransactionInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'postingAmount': (0, PostingAmountType_1.PostingAmountTypeToJSON)(value.postingAmount),
        'surcharge': (0, SurchargeType_1.SurchargeTypeToJSON)(value.surcharge),
        'transactionCode': value.transactionCode,
        'transactionDisplay': value.transactionDisplay,
        'transactionGroup': value.transactionGroup,
        'transactionSubGroup': value.transactionSubGroup,
    };
}
exports.PaymentMethodTransactionInfoTypeToJSON = PaymentMethodTransactionInfoTypeToJSON;
