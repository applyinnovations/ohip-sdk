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
exports.BudgetForecastCustomInfoBaseTypeToJSON = exports.BudgetForecastCustomInfoBaseTypeFromJSONTyped = exports.BudgetForecastCustomInfoBaseTypeFromJSON = exports.instanceOfBudgetForecastCustomInfoBaseType = void 0;
const runtime_1 = require("../runtime");
const CustomCodeInformationBaseType_1 = require("./CustomCodeInformationBaseType");
/**
 * Check if a given object implements the BudgetForecastCustomInfoBaseType interface.
 */
function instanceOfBudgetForecastCustomInfoBaseType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBudgetForecastCustomInfoBaseType = instanceOfBudgetForecastCustomInfoBaseType;
function BudgetForecastCustomInfoBaseTypeFromJSON(json) {
    return BudgetForecastCustomInfoBaseTypeFromJSONTyped(json, false);
}
exports.BudgetForecastCustomInfoBaseTypeFromJSON = BudgetForecastCustomInfoBaseTypeFromJSON;
function BudgetForecastCustomInfoBaseTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customCodeInformation': !(0, runtime_1.exists)(json, 'customCodeInformation') ? undefined : (json['customCodeInformation'].map(CustomCodeInformationBaseType_1.CustomCodeInformationBaseTypeFromJSON)),
        'customValue': !(0, runtime_1.exists)(json, 'customValue') ? undefined : json['customValue'],
    };
}
exports.BudgetForecastCustomInfoBaseTypeFromJSONTyped = BudgetForecastCustomInfoBaseTypeFromJSONTyped;
function BudgetForecastCustomInfoBaseTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customCodeInformation': value.customCodeInformation === undefined ? undefined : (value.customCodeInformation.map(CustomCodeInformationBaseType_1.CustomCodeInformationBaseTypeToJSON)),
        'customValue': value.customValue,
    };
}
exports.BudgetForecastCustomInfoBaseTypeToJSON = BudgetForecastCustomInfoBaseTypeToJSON;