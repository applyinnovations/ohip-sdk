"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositPolicyTypeToJSON = exports.DepositPolicyTypeFromJSONTyped = exports.DepositPolicyTypeFromJSON = exports.instanceOfDepositPolicyType = void 0;
const runtime_1 = require("../runtime");
const DepositCancelRevenueType_1 = require("./DepositCancelRevenueType");
const PolicyAmountPercentType_1 = require("./PolicyAmountPercentType");
const PolicyDeadlineType_1 = require("./PolicyDeadlineType");
/**
 * Check if a given object implements the DepositPolicyType interface.
 */
function instanceOfDepositPolicyType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDepositPolicyType = instanceOfDepositPolicyType;
function DepositPolicyTypeFromJSON(json) {
    return DepositPolicyTypeFromJSONTyped(json, false);
}
exports.DepositPolicyTypeFromJSON = DepositPolicyTypeFromJSON;
function DepositPolicyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountPercent': !(0, runtime_1.exists)(json, 'amountPercent') ? undefined : (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeFromJSON)(json['amountPercent']),
        'deadline': !(0, runtime_1.exists)(json, 'deadline') ? undefined : (0, PolicyDeadlineType_1.PolicyDeadlineTypeFromJSON)(json['deadline']),
        'depositReceiptNo': !(0, runtime_1.exists)(json, 'depositReceiptNo') ? undefined : json['depositReceiptNo'],
        'depositReqReversed': !(0, runtime_1.exists)(json, 'depositReqReversed') ? undefined : json['depositReqReversed'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'formattedRule': !(0, runtime_1.exists)(json, 'formattedRule') ? undefined : json['formattedRule'],
        'manual': !(0, runtime_1.exists)(json, 'manual') ? undefined : json['manual'],
        'policyCode': !(0, runtime_1.exists)(json, 'policyCode') ? undefined : json['policyCode'],
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'typeOfCharges': !(0, runtime_1.exists)(json, 'typeOfCharges') ? undefined : (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeFromJSON)(json['typeOfCharges']),
    };
}
exports.DepositPolicyTypeFromJSONTyped = DepositPolicyTypeFromJSONTyped;
function DepositPolicyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountPercent': (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeToJSON)(value.amountPercent),
        'deadline': (0, PolicyDeadlineType_1.PolicyDeadlineTypeToJSON)(value.deadline),
        'depositReceiptNo': value.depositReceiptNo,
        'depositReqReversed': value.depositReqReversed,
        'description': value.description,
        'formattedRule': value.formattedRule,
        'manual': value.manual,
        'policyCode': value.policyCode,
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0, 10)),
        'typeOfCharges': (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeToJSON)(value.typeOfCharges),
    };
}
exports.DepositPolicyTypeToJSON = DepositPolicyTypeToJSON;
