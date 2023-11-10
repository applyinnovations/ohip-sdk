"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationRuleTypeToJSON = exports.AuthorizationRuleTypeFromJSONTyped = exports.AuthorizationRuleTypeFromJSON = exports.instanceOfAuthorizationRuleType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the AuthorizationRuleType interface.
 */
function instanceOfAuthorizationRuleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAuthorizationRuleType = instanceOfAuthorizationRuleType;
function AuthorizationRuleTypeFromJSON(json) {
    return AuthorizationRuleTypeFromJSONTyped(json, false);
}
exports.AuthorizationRuleTypeFromJSON = AuthorizationRuleTypeFromJSON;
function AuthorizationRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
    };
}
exports.AuthorizationRuleTypeFromJSONTyped = AuthorizationRuleTypeFromJSONTyped;
function AuthorizationRuleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'code': value.code,
        'percent': value.percent,
    };
}
exports.AuthorizationRuleTypeToJSON = AuthorizationRuleTypeToJSON;
