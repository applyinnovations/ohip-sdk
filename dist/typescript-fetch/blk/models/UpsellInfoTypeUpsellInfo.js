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
exports.UpsellInfoTypeUpsellInfoToJSON = exports.UpsellInfoTypeUpsellInfoFromJSONTyped = exports.UpsellInfoTypeUpsellInfoFromJSON = exports.instanceOfUpsellInfoTypeUpsellInfo = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the UpsellInfoTypeUpsellInfo interface.
 */
function instanceOfUpsellInfoTypeUpsellInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUpsellInfoTypeUpsellInfo = instanceOfUpsellInfoTypeUpsellInfo;
function UpsellInfoTypeUpsellInfoFromJSON(json) {
    return UpsellInfoTypeUpsellInfoFromJSONTyped(json, false);
}
exports.UpsellInfoTypeUpsellInfoFromJSON = UpsellInfoTypeUpsellInfoFromJSON;
function UpsellInfoTypeUpsellInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstNightUpsellAmount': !(0, runtime_1.exists)(json, 'firstNightUpsellAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['firstNightUpsellAmount']),
        'firstNightUpsellCharge': !(0, runtime_1.exists)(json, 'firstNightUpsellCharge') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['firstNightUpsellCharge']),
        'percentageSavings': !(0, runtime_1.exists)(json, 'percentageSavings') ? undefined : json['percentageSavings'],
        'roomLongDescription': !(0, runtime_1.exists)(json, 'roomLongDescription') ? undefined : json['roomLongDescription'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['roomType']),
        'ruleCode': !(0, runtime_1.exists)(json, 'ruleCode') ? undefined : json['ruleCode'],
        'ruleDescription': !(0, runtime_1.exists)(json, 'ruleDescription') ? undefined : json['ruleDescription'],
        'ruleId': !(0, runtime_1.exists)(json, 'ruleId') ? undefined : json['ruleId'],
        'totalActualRateAmount': !(0, runtime_1.exists)(json, 'totalActualRateAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalActualRateAmount']),
        'totalUpsellCharge': !(0, runtime_1.exists)(json, 'totalUpsellCharge') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalUpsellCharge']),
        'totalUpsellMoneyAmount': !(0, runtime_1.exists)(json, 'totalUpsellMoneyAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalUpsellMoneyAmount']),
        'totalUpsellPoints': !(0, runtime_1.exists)(json, 'totalUpsellPoints') ? undefined : json['totalUpsellPoints'],
        'upsellDate': !(0, runtime_1.exists)(json, 'upsellDate') ? undefined : json['upsellDate'],
        'upsellUser': !(0, runtime_1.exists)(json, 'upsellUser') ? undefined : json['upsellUser'],
    };
}
exports.UpsellInfoTypeUpsellInfoFromJSONTyped = UpsellInfoTypeUpsellInfoFromJSONTyped;
function UpsellInfoTypeUpsellInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstNightUpsellAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.firstNightUpsellAmount),
        'firstNightUpsellCharge': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.firstNightUpsellCharge),
        'percentageSavings': value.percentageSavings,
        'roomLongDescription': value.roomLongDescription,
        'roomType': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.roomType),
        'ruleCode': value.ruleCode,
        'ruleDescription': value.ruleDescription,
        'ruleId': value.ruleId,
        'totalActualRateAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalActualRateAmount),
        'totalUpsellCharge': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalUpsellCharge),
        'totalUpsellMoneyAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalUpsellMoneyAmount),
        'totalUpsellPoints': value.totalUpsellPoints,
        'upsellDate': value.upsellDate,
        'upsellUser': value.upsellUser,
    };
}
exports.UpsellInfoTypeUpsellInfoToJSON = UpsellInfoTypeUpsellInfoToJSON;
