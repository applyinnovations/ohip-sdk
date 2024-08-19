"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefinedFieldsTypeToJSON = exports.UserDefinedFieldsTypeFromJSONTyped = exports.UserDefinedFieldsTypeFromJSON = exports.instanceOfUserDefinedFieldsType = void 0;
const runtime_1 = require("../runtime");
const CharacterUDFType_1 = require("./CharacterUDFType");
const DateUDFType_1 = require("./DateUDFType");
const NumericUDFType_1 = require("./NumericUDFType");
/**
 * Check if a given object implements the UserDefinedFieldsType interface.
 */
function instanceOfUserDefinedFieldsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserDefinedFieldsType = instanceOfUserDefinedFieldsType;
function UserDefinedFieldsTypeFromJSON(json) {
    return UserDefinedFieldsTypeFromJSONTyped(json, false);
}
exports.UserDefinedFieldsTypeFromJSON = UserDefinedFieldsTypeFromJSON;
function UserDefinedFieldsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'characterUDFs': !(0, runtime_1.exists)(json, 'characterUDFs') ? undefined : (json['characterUDFs'].map(CharacterUDFType_1.CharacterUDFTypeFromJSON)),
        'dateUDFs': !(0, runtime_1.exists)(json, 'dateUDFs') ? undefined : (json['dateUDFs'].map(DateUDFType_1.DateUDFTypeFromJSON)),
        'numericUDFs': !(0, runtime_1.exists)(json, 'numericUDFs') ? undefined : (json['numericUDFs'].map(NumericUDFType_1.NumericUDFTypeFromJSON)),
    };
}
exports.UserDefinedFieldsTypeFromJSONTyped = UserDefinedFieldsTypeFromJSONTyped;
function UserDefinedFieldsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'characterUDFs': value.characterUDFs === undefined ? undefined : (value.characterUDFs.map(CharacterUDFType_1.CharacterUDFTypeToJSON)),
        'dateUDFs': value.dateUDFs === undefined ? undefined : (value.dateUDFs.map(DateUDFType_1.DateUDFTypeToJSON)),
        'numericUDFs': value.numericUDFs === undefined ? undefined : (value.numericUDFs.map(NumericUDFType_1.NumericUDFTypeToJSON)),
    };
}
exports.UserDefinedFieldsTypeToJSON = UserDefinedFieldsTypeToJSON;
