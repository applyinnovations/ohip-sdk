"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatePointsTypeToJSON = exports.CalculatePointsTypeFromJSONTyped = exports.CalculatePointsTypeFromJSON = exports.CalculatePointsType = void 0;
/**
 * Defines when the points are to be calculated.
 * @export
 */
exports.CalculatePointsType = {
    Always: 'Always',
    Prompt: 'Prompt',
    Never: 'Never'
};
function CalculatePointsTypeFromJSON(json) {
    return CalculatePointsTypeFromJSONTyped(json, false);
}
exports.CalculatePointsTypeFromJSON = CalculatePointsTypeFromJSON;
function CalculatePointsTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CalculatePointsTypeFromJSONTyped = CalculatePointsTypeFromJSONTyped;
function CalculatePointsTypeToJSON(value) {
    return value;
}
exports.CalculatePointsTypeToJSON = CalculatePointsTypeToJSON;
