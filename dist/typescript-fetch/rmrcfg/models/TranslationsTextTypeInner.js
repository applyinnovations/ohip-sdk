"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsTextTypeInnerToJSON = exports.TranslationsTextTypeInnerFromJSONTyped = exports.TranslationsTextTypeInnerFromJSON = exports.instanceOfTranslationsTextTypeInner = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TranslationsTextTypeInner interface.
 */
function instanceOfTranslationsTextTypeInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationsTextTypeInner = instanceOfTranslationsTextTypeInner;
function TranslationsTextTypeInnerFromJSON(json) {
    return TranslationsTextTypeInnerFromJSONTyped(json, false);
}
exports.TranslationsTextTypeInnerFromJSON = TranslationsTextTypeInnerFromJSON;
function TranslationsTextTypeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.TranslationsTextTypeInnerFromJSONTyped = TranslationsTextTypeInnerFromJSONTyped;
function TranslationsTextTypeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'language': value.language,
        'value': value.value,
    };
}
exports.TranslationsTextTypeInnerToJSON = TranslationsTextTypeInnerToJSON;
