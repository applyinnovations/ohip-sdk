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
exports.GenerateTypeToJSON = exports.GenerateTypeFromJSONTyped = exports.GenerateTypeFromJSON = exports.instanceOfGenerateType = void 0;
const runtime_1 = require("../runtime");
const GenerateCalcRuleType_1 = require("./GenerateCalcRuleType");
const GenerateCalculationBucketsType_1 = require("./GenerateCalculationBucketsType");
const GenerateLevelType_1 = require("./GenerateLevelType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the GenerateType interface.
 */
function instanceOfGenerateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGenerateType = instanceOfGenerateType;
function GenerateTypeFromJSON(json) {
    return GenerateTypeFromJSONTyped(json, false);
}
exports.GenerateTypeFromJSON = GenerateTypeFromJSON;
function GenerateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addGeneratedAmtTo': !(0, runtime_1.exists)(json, 'addGeneratedAmtTo') ? undefined : (0, GenerateCalculationBucketsType_1.GenerateCalculationBucketsTypeFromJSON)(json['addGeneratedAmtTo']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'generateId': !(0, runtime_1.exists)(json, 'generateId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['generateId']),
        'level': !(0, runtime_1.exists)(json, 'level') ? undefined : (0, GenerateLevelType_1.GenerateLevelTypeFromJSON)(json['level']),
        'rule': !(0, runtime_1.exists)(json, 'rule') ? undefined : (0, GenerateCalcRuleType_1.GenerateCalcRuleTypeFromJSON)(json['rule']),
    };
}
exports.GenerateTypeFromJSONTyped = GenerateTypeFromJSONTyped;
function GenerateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addGeneratedAmtTo': (0, GenerateCalculationBucketsType_1.GenerateCalculationBucketsTypeToJSON)(value.addGeneratedAmtTo),
        'code': value.code,
        'description': value.description,
        'generateId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.generateId),
        'level': (0, GenerateLevelType_1.GenerateLevelTypeToJSON)(value.level),
        'rule': (0, GenerateCalcRuleType_1.GenerateCalcRuleTypeToJSON)(value.rule),
    };
}
exports.GenerateTypeToJSON = GenerateTypeToJSON;
