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
exports.BudgetForecastCateringInfoTypeToJSON = exports.BudgetForecastCateringInfoTypeFromJSONTyped = exports.BudgetForecastCateringInfoTypeFromJSON = exports.instanceOfBudgetForecastCateringInfoType = void 0;
const runtime_1 = require("../runtime");
const CateringCodeInformationType_1 = require("./CateringCodeInformationType");
const CateringTotalsInformationType_1 = require("./CateringTotalsInformationType");
/**
 * Check if a given object implements the BudgetForecastCateringInfoType interface.
 */
function instanceOfBudgetForecastCateringInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBudgetForecastCateringInfoType = instanceOfBudgetForecastCateringInfoType;
function BudgetForecastCateringInfoTypeFromJSON(json) {
    return BudgetForecastCateringInfoTypeFromJSONTyped(json, false);
}
exports.BudgetForecastCateringInfoTypeFromJSON = BudgetForecastCateringInfoTypeFromJSON;
function BudgetForecastCateringInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cateringCodeInformation': !(0, runtime_1.exists)(json, 'cateringCodeInformation') ? undefined : (json['cateringCodeInformation'].map(CateringCodeInformationType_1.CateringCodeInformationTypeFromJSON)),
        'cateringTotalsInformation': !(0, runtime_1.exists)(json, 'cateringTotalsInformation') ? undefined : (0, CateringTotalsInformationType_1.CateringTotalsInformationTypeFromJSON)(json['cateringTotalsInformation']),
    };
}
exports.BudgetForecastCateringInfoTypeFromJSONTyped = BudgetForecastCateringInfoTypeFromJSONTyped;
function BudgetForecastCateringInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cateringCodeInformation': value.cateringCodeInformation === undefined ? undefined : (value.cateringCodeInformation.map(CateringCodeInformationType_1.CateringCodeInformationTypeToJSON)),
        'cateringTotalsInformation': (0, CateringTotalsInformationType_1.CateringTotalsInformationTypeToJSON)(value.cateringTotalsInformation),
    };
}
exports.BudgetForecastCateringInfoTypeToJSON = BudgetForecastCateringInfoTypeToJSON;
