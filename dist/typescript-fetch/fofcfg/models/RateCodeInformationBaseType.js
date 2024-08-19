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
exports.RateCodeInformationBaseTypeToJSON = exports.RateCodeInformationBaseTypeFromJSONTyped = exports.RateCodeInformationBaseTypeFromJSON = exports.instanceOfRateCodeInformationBaseType = void 0;
const runtime_1 = require("../runtime");
const RevenueNightsInfoType_1 = require("./RevenueNightsInfoType");
/**
 * Check if a given object implements the RateCodeInformationBaseType interface.
 */
function instanceOfRateCodeInformationBaseType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateCodeInformationBaseType = instanceOfRateCodeInformationBaseType;
function RateCodeInformationBaseTypeFromJSON(json) {
    return RateCodeInformationBaseTypeFromJSONTyped(json, false);
}
exports.RateCodeInformationBaseTypeFromJSON = RateCodeInformationBaseTypeFromJSON;
function RateCodeInformationBaseTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'budgetRevenueInfo': !(0, runtime_1.exists)(json, 'budgetRevenueInfo') ? undefined : (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeFromJSON)(json['budgetRevenueInfo']),
        'forecastRevenueInfo': !(0, runtime_1.exists)(json, 'forecastRevenueInfo') ? undefined : (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeFromJSON)(json['forecastRevenueInfo']),
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'rateCodeDescription': !(0, runtime_1.exists)(json, 'rateCodeDescription') ? undefined : json['rateCodeDescription'],
    };
}
exports.RateCodeInformationBaseTypeFromJSONTyped = RateCodeInformationBaseTypeFromJSONTyped;
function RateCodeInformationBaseTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'budgetRevenueInfo': (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeToJSON)(value.budgetRevenueInfo),
        'forecastRevenueInfo': (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeToJSON)(value.forecastRevenueInfo),
        'rateCode': value.rateCode,
        'rateCodeDescription': value.rateCodeDescription,
    };
}
exports.RateCodeInformationBaseTypeToJSON = RateCodeInformationBaseTypeToJSON;
