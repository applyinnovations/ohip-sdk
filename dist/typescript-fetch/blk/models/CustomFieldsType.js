"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldsTypeToJSON = exports.CustomFieldsTypeFromJSONTyped = exports.CustomFieldsTypeFromJSON = exports.instanceOfCustomFieldsType = void 0;
const runtime_1 = require("../runtime");
const CharacterUDFType_1 = require("./CharacterUDFType");
const DateUDFType_1 = require("./DateUDFType");
const NumericUDFType_1 = require("./NumericUDFType");
/**
 * Check if a given object implements the CustomFieldsType interface.
 */
function instanceOfCustomFieldsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomFieldsType = instanceOfCustomFieldsType;
function CustomFieldsTypeFromJSON(json) {
    return CustomFieldsTypeFromJSONTyped(json, false);
}
exports.CustomFieldsTypeFromJSON = CustomFieldsTypeFromJSON;
function CustomFieldsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customCharUDFs': !(0, runtime_1.exists)(json, 'customCharUDFs') ? undefined : (json['customCharUDFs'].map(CharacterUDFType_1.CharacterUDFTypeFromJSON)),
        'customDateUDFs': !(0, runtime_1.exists)(json, 'customDateUDFs') ? undefined : (json['customDateUDFs'].map(DateUDFType_1.DateUDFTypeFromJSON)),
        'customNumericUDFs': !(0, runtime_1.exists)(json, 'customNumericUDFs') ? undefined : (json['customNumericUDFs'].map(NumericUDFType_1.NumericUDFTypeFromJSON)),
    };
}
exports.CustomFieldsTypeFromJSONTyped = CustomFieldsTypeFromJSONTyped;
function CustomFieldsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customCharUDFs': value.customCharUDFs === undefined ? undefined : (value.customCharUDFs.map(CharacterUDFType_1.CharacterUDFTypeToJSON)),
        'customDateUDFs': value.customDateUDFs === undefined ? undefined : (value.customDateUDFs.map(DateUDFType_1.DateUDFTypeToJSON)),
        'customNumericUDFs': value.customNumericUDFs === undefined ? undefined : (value.customNumericUDFs.map(NumericUDFType_1.NumericUDFTypeToJSON)),
    };
}
exports.CustomFieldsTypeToJSON = CustomFieldsTypeToJSON;
