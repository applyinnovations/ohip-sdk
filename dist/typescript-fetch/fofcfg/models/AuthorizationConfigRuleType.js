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
exports.AuthorizationConfigRuleTypeToJSON = exports.AuthorizationConfigRuleTypeFromJSONTyped = exports.AuthorizationConfigRuleTypeFromJSON = exports.instanceOfAuthorizationConfigRuleType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const RateCategoryType_1 = require("./RateCategoryType");
const RoomClassCodeInfoType_1 = require("./RoomClassCodeInfoType");
const SourceCodeInfoType_1 = require("./SourceCodeInfoType");
/**
 * Check if a given object implements the AuthorizationConfigRuleType interface.
 */
function instanceOfAuthorizationConfigRuleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAuthorizationConfigRuleType = instanceOfAuthorizationConfigRuleType;
function AuthorizationConfigRuleTypeFromJSON(json) {
    return AuthorizationConfigRuleTypeFromJSONTyped(json, false);
}
exports.AuthorizationConfigRuleTypeFromJSON = AuthorizationConfigRuleTypeFromJSON;
function AuthorizationConfigRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'guaranteeCode': !(0, runtime_1.exists)(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'ignoreDepositsYN': !(0, runtime_1.exists)(json, 'ignoreDepositsYN') ? undefined : json['ignoreDepositsYN'],
        'maxDaysToAuthorize': !(0, runtime_1.exists)(json, 'maxDaysToAuthorize') ? undefined : json['maxDaysToAuthorize'],
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'rateCategory': !(0, runtime_1.exists)(json, 'rateCategory') ? undefined : (0, RateCategoryType_1.RateCategoryTypeFromJSON)(json['rateCategory']),
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : (0, RoomClassCodeInfoType_1.RoomClassCodeInfoTypeFromJSON)(json['roomClass']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'ruleDescription': !(0, runtime_1.exists)(json, 'ruleDescription') ? undefined : json['ruleDescription'],
        'ruleNo': !(0, runtime_1.exists)(json, 'ruleNo') ? undefined : json['ruleNo'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : (0, SourceCodeInfoType_1.SourceCodeInfoTypeFromJSON)(json['sourceCode']),
    };
}
exports.AuthorizationConfigRuleTypeFromJSONTyped = AuthorizationConfigRuleTypeFromJSONTyped;
function AuthorizationConfigRuleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'guaranteeCode': value.guaranteeCode,
        'hotelId': value.hotelId,
        'ignoreDepositsYN': value.ignoreDepositsYN,
        'maxDaysToAuthorize': value.maxDaysToAuthorize,
        'percentage': value.percentage,
        'rateCategory': (0, RateCategoryType_1.RateCategoryTypeToJSON)(value.rateCategory),
        'rateCode': value.rateCode,
        'roomClass': (0, RoomClassCodeInfoType_1.RoomClassCodeInfoTypeToJSON)(value.roomClass),
        'roomType': value.roomType,
        'ruleDescription': value.ruleDescription,
        'ruleNo': value.ruleNo,
        'sourceCode': (0, SourceCodeInfoType_1.SourceCodeInfoTypeToJSON)(value.sourceCode),
    };
}
exports.AuthorizationConfigRuleTypeToJSON = AuthorizationConfigRuleTypeToJSON;
