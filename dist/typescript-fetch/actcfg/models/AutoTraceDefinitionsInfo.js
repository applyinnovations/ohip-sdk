"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTraceDefinitionsInfoToJSON = exports.AutoTraceDefinitionsInfoFromJSONTyped = exports.AutoTraceDefinitionsInfoFromJSON = exports.instanceOfAutoTraceDefinitionsInfo = void 0;
const runtime_1 = require("../runtime");
const AutoTraceDefinitionType_1 = require("./AutoTraceDefinitionType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the AutoTraceDefinitionsInfo interface.
 */
function instanceOfAutoTraceDefinitionsInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAutoTraceDefinitionsInfo = instanceOfAutoTraceDefinitionsInfo;
function AutoTraceDefinitionsInfoFromJSON(json) {
    return AutoTraceDefinitionsInfoFromJSONTyped(json, false);
}
exports.AutoTraceDefinitionsInfoFromJSON = AutoTraceDefinitionsInfoFromJSON;
function AutoTraceDefinitionsInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoTraceDefinitions': !(0, runtime_1.exists)(json, 'autoTraceDefinitions') ? undefined : (json['autoTraceDefinitions'].map(AutoTraceDefinitionType_1.AutoTraceDefinitionTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.AutoTraceDefinitionsInfoFromJSONTyped = AutoTraceDefinitionsInfoFromJSONTyped;
function AutoTraceDefinitionsInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoTraceDefinitions': value.autoTraceDefinitions === undefined ? undefined : (value.autoTraceDefinitions.map(AutoTraceDefinitionType_1.AutoTraceDefinitionTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.AutoTraceDefinitionsInfoToJSON = AutoTraceDefinitionsInfoToJSON;