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
exports.PaymentCardTypeToJSON = exports.PaymentCardTypeFromJSONTyped = exports.PaymentCardTypeFromJSON = exports.instanceOfPaymentCardType = void 0;
const runtime_1 = require("../runtime");
const CardOptionType_1 = require("./CardOptionType");
const CardProcessingType_1 = require("./CardProcessingType");
const CardTypeType_1 = require("./CardTypeType");
const CardUsageRulesType_1 = require("./CardUsageRulesType");
const PaymentMethodValidationRuleType_1 = require("./PaymentMethodValidationRuleType");
/**
 * Check if a given object implements the PaymentCardType interface.
 */
function instanceOfPaymentCardType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentCardType = instanceOfPaymentCardType;
function PaymentCardTypeFromJSON(json) {
    return PaymentCardTypeFromJSONTyped(json, false);
}
exports.PaymentCardTypeFromJSON = PaymentCardTypeFromJSON;
function PaymentCardTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cardType': !(0, runtime_1.exists)(json, 'cardType') ? undefined : (0, CardTypeType_1.CardTypeTypeFromJSON)(json['cardType']),
        'cardUsageRules': !(0, runtime_1.exists)(json, 'cardUsageRules') ? undefined : (0, CardUsageRulesType_1.CardUsageRulesTypeFromJSON)(json['cardUsageRules']),
        'merchantNumber': !(0, runtime_1.exists)(json, 'merchantNumber') ? undefined : json['merchantNumber'],
        'option': !(0, runtime_1.exists)(json, 'option') ? undefined : (0, CardOptionType_1.CardOptionTypeFromJSON)(json['option']),
        'processing': !(0, runtime_1.exists)(json, 'processing') ? undefined : (0, CardProcessingType_1.CardProcessingTypeFromJSON)(json['processing']),
        'userDefinedCardType': !(0, runtime_1.exists)(json, 'userDefinedCardType') ? undefined : json['userDefinedCardType'],
        'validation': !(0, runtime_1.exists)(json, 'validation') ? undefined : (0, PaymentMethodValidationRuleType_1.PaymentMethodValidationRuleTypeFromJSON)(json['validation']),
    };
}
exports.PaymentCardTypeFromJSONTyped = PaymentCardTypeFromJSONTyped;
function PaymentCardTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cardType': (0, CardTypeType_1.CardTypeTypeToJSON)(value.cardType),
        'cardUsageRules': (0, CardUsageRulesType_1.CardUsageRulesTypeToJSON)(value.cardUsageRules),
        'merchantNumber': value.merchantNumber,
        'option': (0, CardOptionType_1.CardOptionTypeToJSON)(value.option),
        'processing': (0, CardProcessingType_1.CardProcessingTypeToJSON)(value.processing),
        'userDefinedCardType': value.userDefinedCardType,
        'validation': (0, PaymentMethodValidationRuleType_1.PaymentMethodValidationRuleTypeToJSON)(value.validation),
    };
}
exports.PaymentCardTypeToJSON = PaymentCardTypeToJSON;
