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
exports.CustomCodeTotalInformationTypeToJSON = exports.CustomCodeTotalInformationTypeFromJSONTyped = exports.CustomCodeTotalInformationTypeFromJSON = exports.instanceOfCustomCodeTotalInformationType = void 0;
const runtime_1 = require("../runtime");
const CustomValueInfoType_1 = require("./CustomValueInfoType");
const CustomVarianceInfoType_1 = require("./CustomVarianceInfoType");
/**
 * Check if a given object implements the CustomCodeTotalInformationType interface.
 */
function instanceOfCustomCodeTotalInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomCodeTotalInformationType = instanceOfCustomCodeTotalInformationType;
function CustomCodeTotalInformationTypeFromJSON(json) {
    return CustomCodeTotalInformationTypeFromJSONTyped(json, false);
}
exports.CustomCodeTotalInformationTypeFromJSON = CustomCodeTotalInformationTypeFromJSON;
function CustomCodeTotalInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aBVarianceTotalInfo': !(0, runtime_1.exists)(json, 'aBVarianceTotalInfo') ? undefined : (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeFromJSON)(json['aBVarianceTotalInfo']),
        'aFVarianceTotalInfo': !(0, runtime_1.exists)(json, 'aFVarianceTotalInfo') ? undefined : (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeFromJSON)(json['aFVarianceTotalInfo']),
        'actualTotalInfo': !(0, runtime_1.exists)(json, 'actualTotalInfo') ? undefined : (0, CustomValueInfoType_1.CustomValueInfoTypeFromJSON)(json['actualTotalInfo']),
        'budgetTotalInfo': !(0, runtime_1.exists)(json, 'budgetTotalInfo') ? undefined : (0, CustomValueInfoType_1.CustomValueInfoTypeFromJSON)(json['budgetTotalInfo']),
        'fBVarianceTotalInfo': !(0, runtime_1.exists)(json, 'fBVarianceTotalInfo') ? undefined : (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeFromJSON)(json['fBVarianceTotalInfo']),
        'forecastTotalInfo': !(0, runtime_1.exists)(json, 'forecastTotalInfo') ? undefined : (0, CustomValueInfoType_1.CustomValueInfoTypeFromJSON)(json['forecastTotalInfo']),
    };
}
exports.CustomCodeTotalInformationTypeFromJSONTyped = CustomCodeTotalInformationTypeFromJSONTyped;
function CustomCodeTotalInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aBVarianceTotalInfo': (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeToJSON)(value.aBVarianceTotalInfo),
        'aFVarianceTotalInfo': (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeToJSON)(value.aFVarianceTotalInfo),
        'actualTotalInfo': (0, CustomValueInfoType_1.CustomValueInfoTypeToJSON)(value.actualTotalInfo),
        'budgetTotalInfo': (0, CustomValueInfoType_1.CustomValueInfoTypeToJSON)(value.budgetTotalInfo),
        'fBVarianceTotalInfo': (0, CustomVarianceInfoType_1.CustomVarianceInfoTypeToJSON)(value.fBVarianceTotalInfo),
        'forecastTotalInfo': (0, CustomValueInfoType_1.CustomValueInfoTypeToJSON)(value.forecastTotalInfo),
    };
}
exports.CustomCodeTotalInformationTypeToJSON = CustomCodeTotalInformationTypeToJSON;
