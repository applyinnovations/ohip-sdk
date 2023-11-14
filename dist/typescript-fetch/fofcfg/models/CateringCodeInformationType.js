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
exports.CateringCodeInformationTypeToJSON = exports.CateringCodeInformationTypeFromJSONTyped = exports.CateringCodeInformationTypeFromJSON = exports.instanceOfCateringCodeInformationType = void 0;
const runtime_1 = require("../runtime");
const CateringInfoType_1 = require("./CateringInfoType");
const CateringVarianceInfoType_1 = require("./CateringVarianceInfoType");
/**
 * Check if a given object implements the CateringCodeInformationType interface.
 */
function instanceOfCateringCodeInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringCodeInformationType = instanceOfCateringCodeInformationType;
function CateringCodeInformationTypeFromJSON(json) {
    return CateringCodeInformationTypeFromJSONTyped(json, false);
}
exports.CateringCodeInformationTypeFromJSON = CateringCodeInformationTypeFromJSON;
function CateringCodeInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aBVarianceInfo': !(0, runtime_1.exists)(json, 'aBVarianceInfo') ? undefined : (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeFromJSON)(json['aBVarianceInfo']),
        'aFVarianceInfo': !(0, runtime_1.exists)(json, 'aFVarianceInfo') ? undefined : (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeFromJSON)(json['aFVarianceInfo']),
        'actualInfo': !(0, runtime_1.exists)(json, 'actualInfo') ? undefined : (0, CateringInfoType_1.CateringInfoTypeFromJSON)(json['actualInfo']),
        'budgetInfo': !(0, runtime_1.exists)(json, 'budgetInfo') ? undefined : (0, CateringInfoType_1.CateringInfoTypeFromJSON)(json['budgetInfo']),
        'cateringCode': !(0, runtime_1.exists)(json, 'cateringCode') ? undefined : json['cateringCode'],
        'cateringCodeDescription': !(0, runtime_1.exists)(json, 'cateringCodeDescription') ? undefined : json['cateringCodeDescription'],
        'cateringCodeGrp': !(0, runtime_1.exists)(json, 'cateringCodeGrp') ? undefined : json['cateringCodeGrp'],
        'fBVarianceInfo': !(0, runtime_1.exists)(json, 'fBVarianceInfo') ? undefined : (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeFromJSON)(json['fBVarianceInfo']),
        'forecastInfo': !(0, runtime_1.exists)(json, 'forecastInfo') ? undefined : (0, CateringInfoType_1.CateringInfoTypeFromJSON)(json['forecastInfo']),
    };
}
exports.CateringCodeInformationTypeFromJSONTyped = CateringCodeInformationTypeFromJSONTyped;
function CateringCodeInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aBVarianceInfo': (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeToJSON)(value.aBVarianceInfo),
        'aFVarianceInfo': (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeToJSON)(value.aFVarianceInfo),
        'actualInfo': (0, CateringInfoType_1.CateringInfoTypeToJSON)(value.actualInfo),
        'budgetInfo': (0, CateringInfoType_1.CateringInfoTypeToJSON)(value.budgetInfo),
        'cateringCode': value.cateringCode,
        'cateringCodeDescription': value.cateringCodeDescription,
        'cateringCodeGrp': value.cateringCodeGrp,
        'fBVarianceInfo': (0, CateringVarianceInfoType_1.CateringVarianceInfoTypeToJSON)(value.fBVarianceInfo),
        'forecastInfo': (0, CateringInfoType_1.CateringInfoTypeToJSON)(value.forecastInfo),
    };
}
exports.CateringCodeInformationTypeToJSON = CateringCodeInformationTypeToJSON;