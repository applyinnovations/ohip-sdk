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
exports.AutoTraceDefinitionActivityInfoTypeToJSON = exports.AutoTraceDefinitionActivityInfoTypeFromJSONTyped = exports.AutoTraceDefinitionActivityInfoTypeFromJSON = exports.instanceOfAutoTraceDefinitionActivityInfoType = void 0;
const runtime_1 = require("../runtime");
const ActivityConfigClassType_1 = require("./ActivityConfigClassType");
/**
 * Check if a given object implements the AutoTraceDefinitionActivityInfoType interface.
 */
function instanceOfAutoTraceDefinitionActivityInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAutoTraceDefinitionActivityInfoType = instanceOfAutoTraceDefinitionActivityInfoType;
function AutoTraceDefinitionActivityInfoTypeFromJSON(json) {
    return AutoTraceDefinitionActivityInfoTypeFromJSONTyped(json, false);
}
exports.AutoTraceDefinitionActivityInfoTypeFromJSON = AutoTraceDefinitionActivityInfoTypeFromJSON;
function AutoTraceDefinitionActivityInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityClass': !(0, runtime_1.exists)(json, 'activityClass') ? undefined : (0, ActivityConfigClassType_1.ActivityConfigClassTypeFromJSON)(json['activityClass']),
        'activityStartDate': !(0, runtime_1.exists)(json, 'activityStartDate') ? undefined : json['activityStartDate'],
        'activityStartTime': !(0, runtime_1.exists)(json, 'activityStartTime') ? undefined : json['activityStartTime'],
        'activityTypeCode': !(0, runtime_1.exists)(json, 'activityTypeCode') ? undefined : json['activityTypeCode'],
        'daysFromActivityStartDate': !(0, runtime_1.exists)(json, 'daysFromActivityStartDate') ? undefined : json['daysFromActivityStartDate'],
        'purpose': !(0, runtime_1.exists)(json, 'purpose') ? undefined : json['purpose'],
    };
}
exports.AutoTraceDefinitionActivityInfoTypeFromJSONTyped = AutoTraceDefinitionActivityInfoTypeFromJSONTyped;
function AutoTraceDefinitionActivityInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityClass': (0, ActivityConfigClassType_1.ActivityConfigClassTypeToJSON)(value.activityClass),
        'activityStartDate': value.activityStartDate,
        'activityStartTime': value.activityStartTime,
        'activityTypeCode': value.activityTypeCode,
        'daysFromActivityStartDate': value.daysFromActivityStartDate,
        'purpose': value.purpose,
    };
}
exports.AutoTraceDefinitionActivityInfoTypeToJSON = AutoTraceDefinitionActivityInfoTypeToJSON;