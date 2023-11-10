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
exports.ExpressionFieldTypeToJSON = exports.ExpressionFieldTypeFromJSONTyped = exports.ExpressionFieldTypeFromJSON = exports.instanceOfExpressionFieldType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ExpressionFieldType interface.
 */
function instanceOfExpressionFieldType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExpressionFieldType = instanceOfExpressionFieldType;
function ExpressionFieldTypeFromJSON(json) {
    return ExpressionFieldTypeFromJSONTyped(json, false);
}
exports.ExpressionFieldTypeFromJSON = ExpressionFieldTypeFromJSON;
function ExpressionFieldTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataType': !(0, runtime_1.exists)(json, 'dataType') ? undefined : json['dataType'],
        'fieldDescription': !(0, runtime_1.exists)(json, 'fieldDescription') ? undefined : json['fieldDescription'],
        'fieldName': !(0, runtime_1.exists)(json, 'fieldName') ? undefined : json['fieldName'],
        'lovSelected': !(0, runtime_1.exists)(json, 'lovSelected') ? undefined : json['lovSelected'],
        'tableName': !(0, runtime_1.exists)(json, 'tableName') ? undefined : json['tableName'],
        'virtual': !(0, runtime_1.exists)(json, 'virtual') ? undefined : json['virtual'],
    };
}
exports.ExpressionFieldTypeFromJSONTyped = ExpressionFieldTypeFromJSONTyped;
function ExpressionFieldTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataType': value.dataType,
        'fieldDescription': value.fieldDescription,
        'fieldName': value.fieldName,
        'lovSelected': value.lovSelected,
        'tableName': value.tableName,
        'virtual': value.virtual,
    };
}
exports.ExpressionFieldTypeToJSON = ExpressionFieldTypeToJSON;
