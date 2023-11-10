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
exports.FixedChargeDetailTypeToJSON = exports.FixedChargeDetailTypeFromJSONTyped = exports.FixedChargeDetailTypeFromJSON = exports.instanceOfFixedChargeDetailType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the FixedChargeDetailType interface.
 */
function instanceOfFixedChargeDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFixedChargeDetailType = instanceOfFixedChargeDetailType;
function FixedChargeDetailTypeFromJSON(json) {
    return FixedChargeDetailTypeFromJSONTyped(json, false);
}
exports.FixedChargeDetailTypeFromJSON = FixedChargeDetailTypeFromJSON;
function FixedChargeDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'article': !(0, runtime_1.exists)(json, 'article') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['article']),
        'chargeAmount': !(0, runtime_1.exists)(json, 'chargeAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['chargeAmount']),
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'roomNights': !(0, runtime_1.exists)(json, 'roomNights') ? undefined : json['roomNights'],
        'supplement': !(0, runtime_1.exists)(json, 'supplement') ? undefined : json['supplement'],
        'transaction': !(0, runtime_1.exists)(json, 'transaction') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['transaction']),
    };
}
exports.FixedChargeDetailTypeFromJSONTyped = FixedChargeDetailTypeFromJSONTyped;
function FixedChargeDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'article': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.article),
        'chargeAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.chargeAmount),
        'percent': value.percent,
        'quantity': value.quantity,
        'roomNights': value.roomNights,
        'supplement': value.supplement,
        'transaction': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.transaction),
    };
}
exports.FixedChargeDetailTypeToJSON = FixedChargeDetailTypeToJSON;
