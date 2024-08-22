"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpFunctionTypeToJSON = exports.ExpFunctionTypeFromJSONTyped = exports.ExpFunctionTypeFromJSON = exports.instanceOfExpFunctionType = void 0;
const runtime_1 = require("../runtime");
const ExpFunctionParamType_1 = require("./ExpFunctionParamType");
/**
 * Check if a given object implements the ExpFunctionType interface.
 */
function instanceOfExpFunctionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExpFunctionType = instanceOfExpFunctionType;
function ExpFunctionTypeFromJSON(json) {
    return ExpFunctionTypeFromJSONTyped(json, false);
}
exports.ExpFunctionTypeFromJSON = ExpFunctionTypeFromJSON;
function ExpFunctionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'functionName': !(0, runtime_1.exists)(json, 'functionName') ? undefined : json['functionName'],
        'functionParameter': !(0, runtime_1.exists)(json, 'functionParameter') ? undefined : (json['functionParameter'].map(ExpFunctionParamType_1.ExpFunctionParamTypeFromJSON)),
    };
}
exports.ExpFunctionTypeFromJSONTyped = ExpFunctionTypeFromJSONTyped;
function ExpFunctionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'functionName': value.functionName,
        'functionParameter': value.functionParameter === undefined ? undefined : (value.functionParameter.map(ExpFunctionParamType_1.ExpFunctionParamTypeToJSON)),
    };
}
exports.ExpFunctionTypeToJSON = ExpFunctionTypeToJSON;
