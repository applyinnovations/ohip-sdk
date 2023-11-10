"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalOperatorTypeToJSON = exports.LogicalOperatorTypeFromJSONTyped = exports.LogicalOperatorTypeFromJSON = exports.LogicalOperatorType = void 0;
/**
 *
 * @export
 */
exports.LogicalOperatorType = {
    And: 'And',
    Or: 'Or'
};
function LogicalOperatorTypeFromJSON(json) {
    return LogicalOperatorTypeFromJSONTyped(json, false);
}
exports.LogicalOperatorTypeFromJSON = LogicalOperatorTypeFromJSON;
function LogicalOperatorTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LogicalOperatorTypeFromJSONTyped = LogicalOperatorTypeFromJSONTyped;
function LogicalOperatorTypeToJSON(value) {
    return value;
}
exports.LogicalOperatorTypeToJSON = LogicalOperatorTypeToJSON;
