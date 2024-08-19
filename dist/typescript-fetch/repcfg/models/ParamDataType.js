"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamDataTypeToJSON = exports.ParamDataTypeFromJSONTyped = exports.ParamDataTypeFromJSON = exports.ParamDataType = void 0;
/**
 * Identifies the data type of the report parameter.
 * @export
 */
exports.ParamDataType = {
    DateAsChar: 'DateAsChar',
    Date: 'Date',
    Number: 'Number',
    CheckBox: 'CheckBox',
    DateTime: 'DateTime',
    Char: 'Char',
    Money: 'Money',
    Integer: 'Integer'
};
function ParamDataTypeFromJSON(json) {
    return ParamDataTypeFromJSONTyped(json, false);
}
exports.ParamDataTypeFromJSON = ParamDataTypeFromJSON;
function ParamDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ParamDataTypeFromJSONTyped = ParamDataTypeFromJSONTyped;
function ParamDataTypeToJSON(value) {
    return value;
}
exports.ParamDataTypeToJSON = ParamDataTypeToJSON;
