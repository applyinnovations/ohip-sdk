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
exports.GuaranteePolicyTypeDepositPolicyToJSON = exports.GuaranteePolicyTypeDepositPolicyFromJSONTyped = exports.GuaranteePolicyTypeDepositPolicyFromJSON = exports.instanceOfGuaranteePolicyTypeDepositPolicy = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DepositCancelRevenueType_1 = require("./DepositCancelRevenueType");
const DepositPolicyType_1 = require("./DepositPolicyType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the GuaranteePolicyTypeDepositPolicy interface.
 */
function instanceOfGuaranteePolicyTypeDepositPolicy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuaranteePolicyTypeDepositPolicy = instanceOfGuaranteePolicyTypeDepositPolicy;
function GuaranteePolicyTypeDepositPolicyFromJSON(json) {
    return GuaranteePolicyTypeDepositPolicyFromJSONTyped(json, false);
}
exports.GuaranteePolicyTypeDepositPolicyFromJSON = GuaranteePolicyTypeDepositPolicyFromJSON;
function GuaranteePolicyTypeDepositPolicyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountDue': !(0, runtime_1.exists)(json, 'amountDue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amountDue']),
        'amountPaid': !(0, runtime_1.exists)(json, 'amountPaid') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amountPaid']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'estimatedAmount': !(0, runtime_1.exists)(json, 'estimatedAmount') ? undefined : json['estimatedAmount'],
        'policy': !(0, runtime_1.exists)(json, 'policy') ? undefined : (0, DepositPolicyType_1.DepositPolicyTypeFromJSON)(json['policy']),
        'policyId': !(0, runtime_1.exists)(json, 'policyId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['policyId']),
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeFromJSON)(json['revenueType']),
    };
}
exports.GuaranteePolicyTypeDepositPolicyFromJSONTyped = GuaranteePolicyTypeDepositPolicyFromJSONTyped;
function GuaranteePolicyTypeDepositPolicyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountDue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amountDue),
        'amountPaid': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amountPaid),
        'comments': value.comments,
        'estimatedAmount': value.estimatedAmount,
        'policy': (0, DepositPolicyType_1.DepositPolicyTypeToJSON)(value.policy),
        'policyId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.policyId),
        'revenueType': (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeToJSON)(value.revenueType),
    };
}
exports.GuaranteePolicyTypeDepositPolicyToJSON = GuaranteePolicyTypeDepositPolicyToJSON;
