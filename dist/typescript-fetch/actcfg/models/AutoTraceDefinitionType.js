"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTraceDefinitionTypeToJSON = exports.AutoTraceDefinitionTypeFromJSONTyped = exports.AutoTraceDefinitionTypeFromJSON = exports.instanceOfAutoTraceDefinitionType = void 0;
const runtime_1 = require("../runtime");
const AutoTraceDefinitionActivityInfoType_1 = require("./AutoTraceDefinitionActivityInfoType");
const AutoTraceDefinitionDetailType_1 = require("./AutoTraceDefinitionDetailType");
const AutoTraceDefinitionOwnerInfoType_1 = require("./AutoTraceDefinitionOwnerInfoType");
/**
 * Check if a given object implements the AutoTraceDefinitionType interface.
 */
function instanceOfAutoTraceDefinitionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAutoTraceDefinitionType = instanceOfAutoTraceDefinitionType;
function AutoTraceDefinitionTypeFromJSON(json) {
    return AutoTraceDefinitionTypeFromJSONTyped(json, false);
}
exports.AutoTraceDefinitionTypeFromJSON = AutoTraceDefinitionTypeFromJSON;
function AutoTraceDefinitionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoTraceDefinitionActivityInfo': !(0, runtime_1.exists)(json, 'autoTraceDefinitionActivityInfo') ? undefined : (0, AutoTraceDefinitionActivityInfoType_1.AutoTraceDefinitionActivityInfoTypeFromJSON)(json['autoTraceDefinitionActivityInfo']),
        'autoTraceDefinitionDetail': !(0, runtime_1.exists)(json, 'autoTraceDefinitionDetail') ? undefined : (0, AutoTraceDefinitionDetailType_1.AutoTraceDefinitionDetailTypeFromJSON)(json['autoTraceDefinitionDetail']),
        'autoTraceDefinitionOwnerInfo': !(0, runtime_1.exists)(json, 'autoTraceDefinitionOwnerInfo') ? undefined : (0, AutoTraceDefinitionOwnerInfoType_1.AutoTraceDefinitionOwnerInfoTypeFromJSON)(json['autoTraceDefinitionOwnerInfo']),
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
    };
}
exports.AutoTraceDefinitionTypeFromJSONTyped = AutoTraceDefinitionTypeFromJSONTyped;
function AutoTraceDefinitionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoTraceDefinitionActivityInfo': (0, AutoTraceDefinitionActivityInfoType_1.AutoTraceDefinitionActivityInfoTypeToJSON)(value.autoTraceDefinitionActivityInfo),
        'autoTraceDefinitionDetail': (0, AutoTraceDefinitionDetailType_1.AutoTraceDefinitionDetailTypeToJSON)(value.autoTraceDefinitionDetail),
        'autoTraceDefinitionOwnerInfo': (0, AutoTraceDefinitionOwnerInfoType_1.AutoTraceDefinitionOwnerInfoTypeToJSON)(value.autoTraceDefinitionOwnerInfo),
        'inactive': value.inactive,
    };
}
exports.AutoTraceDefinitionTypeToJSON = AutoTraceDefinitionTypeToJSON;