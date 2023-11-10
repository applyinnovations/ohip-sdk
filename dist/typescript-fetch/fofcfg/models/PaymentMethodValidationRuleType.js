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
exports.PaymentMethodValidationRuleTypeToJSON = exports.PaymentMethodValidationRuleTypeFromJSONTyped = exports.PaymentMethodValidationRuleTypeFromJSON = exports.instanceOfPaymentMethodValidationRuleType = void 0;
const runtime_1 = require("../runtime");
const CardRangesType_1 = require("./CardRangesType");
const CardValidationRuleTypeType_1 = require("./CardValidationRuleTypeType");
/**
 * Check if a given object implements the PaymentMethodValidationRuleType interface.
 */
function instanceOfPaymentMethodValidationRuleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentMethodValidationRuleType = instanceOfPaymentMethodValidationRuleType;
function PaymentMethodValidationRuleTypeFromJSON(json) {
    return PaymentMethodValidationRuleTypeFromJSONTyped(json, false);
}
exports.PaymentMethodValidationRuleTypeFromJSON = PaymentMethodValidationRuleTypeFromJSON;
function PaymentMethodValidationRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'formula': !(0, runtime_1.exists)(json, 'formula') ? undefined : json['formula'],
        'length': !(0, runtime_1.exists)(json, 'length') ? undefined : json['length'],
        'prefix': !(0, runtime_1.exists)(json, 'prefix') ? undefined : json['prefix'],
        'ranges': !(0, runtime_1.exists)(json, 'ranges') ? undefined : (0, CardRangesType_1.CardRangesTypeFromJSON)(json['ranges']),
        'rule': !(0, runtime_1.exists)(json, 'rule') ? undefined : (0, CardValidationRuleTypeType_1.CardValidationRuleTypeTypeFromJSON)(json['rule']),
    };
}
exports.PaymentMethodValidationRuleTypeFromJSONTyped = PaymentMethodValidationRuleTypeFromJSONTyped;
function PaymentMethodValidationRuleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'formula': value.formula,
        'length': value.length,
        'prefix': value.prefix,
        'ranges': (0, CardRangesType_1.CardRangesTypeToJSON)(value.ranges),
        'rule': (0, CardValidationRuleTypeType_1.CardValidationRuleTypeTypeToJSON)(value.rule),
    };
}
exports.PaymentMethodValidationRuleTypeToJSON = PaymentMethodValidationRuleTypeToJSON;
