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
exports.BudgetForecastRateInfoTypeToJSON = exports.BudgetForecastRateInfoTypeFromJSONTyped = exports.BudgetForecastRateInfoTypeFromJSON = exports.instanceOfBudgetForecastRateInfoType = void 0;
const runtime_1 = require("../runtime");
const RateCodeInformationType_1 = require("./RateCodeInformationType");
const RateCodeTotalInformationType_1 = require("./RateCodeTotalInformationType");
/**
 * Check if a given object implements the BudgetForecastRateInfoType interface.
 */
function instanceOfBudgetForecastRateInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBudgetForecastRateInfoType = instanceOfBudgetForecastRateInfoType;
function BudgetForecastRateInfoTypeFromJSON(json) {
    return BudgetForecastRateInfoTypeFromJSONTyped(json, false);
}
exports.BudgetForecastRateInfoTypeFromJSON = BudgetForecastRateInfoTypeFromJSON;
function BudgetForecastRateInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rateCodeInformation': !(0, runtime_1.exists)(json, 'rateCodeInformation') ? undefined : (json['rateCodeInformation'].map(RateCodeInformationType_1.RateCodeInformationTypeFromJSON)),
        'rateCodeTotalInformation': !(0, runtime_1.exists)(json, 'rateCodeTotalInformation') ? undefined : (0, RateCodeTotalInformationType_1.RateCodeTotalInformationTypeFromJSON)(json['rateCodeTotalInformation']),
    };
}
exports.BudgetForecastRateInfoTypeFromJSONTyped = BudgetForecastRateInfoTypeFromJSONTyped;
function BudgetForecastRateInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rateCodeInformation': value.rateCodeInformation === undefined ? undefined : (value.rateCodeInformation.map(RateCodeInformationType_1.RateCodeInformationTypeToJSON)),
        'rateCodeTotalInformation': (0, RateCodeTotalInformationType_1.RateCodeTotalInformationTypeToJSON)(value.rateCodeTotalInformation),
    };
}
exports.BudgetForecastRateInfoTypeToJSON = BudgetForecastRateInfoTypeToJSON;
