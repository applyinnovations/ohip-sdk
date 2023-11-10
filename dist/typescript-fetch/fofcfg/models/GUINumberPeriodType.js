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
exports.GUINumberPeriodTypeToJSON = exports.GUINumberPeriodTypeFromJSONTyped = exports.GUINumberPeriodTypeFromJSON = exports.GUINumberPeriodType = void 0;
/**
 * Period set November-December
 * @export
 */
exports.GUINumberPeriodType = {
    JanuaryFebruary: 'JanuaryFebruary',
    MarchApril: 'MarchApril',
    MayJune: 'MayJune',
    JulyAugust: 'JulyAugust',
    SeptemberOctober: 'SeptemberOctober',
    NovemberDecember: 'NovemberDecember'
};
function GUINumberPeriodTypeFromJSON(json) {
    return GUINumberPeriodTypeFromJSONTyped(json, false);
}
exports.GUINumberPeriodTypeFromJSON = GUINumberPeriodTypeFromJSON;
function GUINumberPeriodTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.GUINumberPeriodTypeFromJSONTyped = GUINumberPeriodTypeFromJSONTyped;
function GUINumberPeriodTypeToJSON(value) {
    return value;
}
exports.GUINumberPeriodTypeToJSON = GUINumberPeriodTypeToJSON;
