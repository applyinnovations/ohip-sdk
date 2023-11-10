"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedTextTextTypeToJSON = exports.FormattedTextTextTypeFromJSONTyped = exports.FormattedTextTextTypeFromJSON = exports.instanceOfFormattedTextTextType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FormattedTextTextType interface.
 */
function instanceOfFormattedTextTextType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFormattedTextTextType = instanceOfFormattedTextTextType;
function FormattedTextTextTypeFromJSON(json) {
    return FormattedTextTextTypeFromJSONTyped(json, false);
}
exports.FormattedTextTextTypeFromJSON = FormattedTextTextTypeFromJSON;
function FormattedTextTextTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.FormattedTextTextTypeFromJSONTyped = FormattedTextTextTypeFromJSONTyped;
function FormattedTextTextTypeToJSON(value) {
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
exports.FormattedTextTextTypeToJSON = FormattedTextTextTypeToJSON;
