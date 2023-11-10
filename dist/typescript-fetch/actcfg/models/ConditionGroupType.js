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
exports.ConditionGroupTypeToJSON = exports.ConditionGroupTypeFromJSONTyped = exports.ConditionGroupTypeFromJSON = exports.instanceOfConditionGroupType = void 0;
const runtime_1 = require("../runtime");
const ConditionType_1 = require("./ConditionType");
const LogicalOperatorType_1 = require("./LogicalOperatorType");
/**
 * Check if a given object implements the ConditionGroupType interface.
 */
function instanceOfConditionGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConditionGroupType = instanceOfConditionGroupType;
function ConditionGroupTypeFromJSON(json) {
    return ConditionGroupTypeFromJSONTyped(json, false);
}
exports.ConditionGroupTypeFromJSON = ConditionGroupTypeFromJSON;
function ConditionGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'condition': !(0, runtime_1.exists)(json, 'condition') ? undefined : (json['condition'].map(ConditionType_1.ConditionTypeFromJSON)),
        'conditionGroup': !(0, runtime_1.exists)(json, 'conditionGroup') ? undefined : (json['conditionGroup'].map(ConditionGroupTypeFromJSON)),
        'logicalOperator': !(0, runtime_1.exists)(json, 'logicalOperator') ? undefined : (0, LogicalOperatorType_1.LogicalOperatorTypeFromJSON)(json['logicalOperator']),
    };
}
exports.ConditionGroupTypeFromJSONTyped = ConditionGroupTypeFromJSONTyped;
function ConditionGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'condition': value.condition === undefined ? undefined : (value.condition.map(ConditionType_1.ConditionTypeToJSON)),
        'conditionGroup': value.conditionGroup === undefined ? undefined : (value.conditionGroup.map(ConditionGroupTypeToJSON)),
        'logicalOperator': (0, LogicalOperatorType_1.LogicalOperatorTypeToJSON)(value.logicalOperator),
    };
}
exports.ConditionGroupTypeToJSON = ConditionGroupTypeToJSON;
