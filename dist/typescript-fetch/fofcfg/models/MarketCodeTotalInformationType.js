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
exports.MarketCodeTotalInformationTypeToJSON = exports.MarketCodeTotalInformationTypeFromJSONTyped = exports.MarketCodeTotalInformationTypeFromJSON = exports.instanceOfMarketCodeTotalInformationType = void 0;
const runtime_1 = require("../runtime");
const RevenueNightsInfoType_1 = require("./RevenueNightsInfoType");
const RevenueNightsVarianceInfoType_1 = require("./RevenueNightsVarianceInfoType");
/**
 * Check if a given object implements the MarketCodeTotalInformationType interface.
 */
function instanceOfMarketCodeTotalInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMarketCodeTotalInformationType = instanceOfMarketCodeTotalInformationType;
function MarketCodeTotalInformationTypeFromJSON(json) {
    return MarketCodeTotalInformationTypeFromJSONTyped(json, false);
}
exports.MarketCodeTotalInformationTypeFromJSON = MarketCodeTotalInformationTypeFromJSON;
function MarketCodeTotalInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aBVarianceTotalInfo': !(0, runtime_1.exists)(json, 'aBVarianceTotalInfo') ? undefined : (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeFromJSON)(json['aBVarianceTotalInfo']),
        'aFVarianceTotalInfo': !(0, runtime_1.exists)(json, 'aFVarianceTotalInfo') ? undefined : (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeFromJSON)(json['aFVarianceTotalInfo']),
        'actualTotalInfo': !(0, runtime_1.exists)(json, 'actualTotalInfo') ? undefined : (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeFromJSON)(json['actualTotalInfo']),
        'budgetTotalInfo': !(0, runtime_1.exists)(json, 'budgetTotalInfo') ? undefined : (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeFromJSON)(json['budgetTotalInfo']),
        'fBVarianceTotalInfo': !(0, runtime_1.exists)(json, 'fBVarianceTotalInfo') ? undefined : (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeFromJSON)(json['fBVarianceTotalInfo']),
        'forecastTotalInfo': !(0, runtime_1.exists)(json, 'forecastTotalInfo') ? undefined : (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeFromJSON)(json['forecastTotalInfo']),
    };
}
exports.MarketCodeTotalInformationTypeFromJSONTyped = MarketCodeTotalInformationTypeFromJSONTyped;
function MarketCodeTotalInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aBVarianceTotalInfo': (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeToJSON)(value.aBVarianceTotalInfo),
        'aFVarianceTotalInfo': (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeToJSON)(value.aFVarianceTotalInfo),
        'actualTotalInfo': (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeToJSON)(value.actualTotalInfo),
        'budgetTotalInfo': (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeToJSON)(value.budgetTotalInfo),
        'fBVarianceTotalInfo': (0, RevenueNightsVarianceInfoType_1.RevenueNightsVarianceInfoTypeToJSON)(value.fBVarianceTotalInfo),
        'forecastTotalInfo': (0, RevenueNightsInfoType_1.RevenueNightsInfoTypeToJSON)(value.forecastTotalInfo),
    };
}
exports.MarketCodeTotalInformationTypeToJSON = MarketCodeTotalInformationTypeToJSON;
