"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefinedFieldsTypeToJSON = exports.UserDefinedFieldsTypeFromJSONTyped = exports.UserDefinedFieldsTypeFromJSON = exports.instanceOfUserDefinedFieldsType = void 0;
const runtime_1 = require("../runtime");
const CharacterUDFsType_1 = require("./CharacterUDFsType");
const DateUDFsType_1 = require("./DateUDFsType");
const NumericUDFsType_1 = require("./NumericUDFsType");
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
        'characterUDFs': !(0, runtime_1.exists)(json, 'characterUDFs') ? undefined : (0, CharacterUDFsType_1.CharacterUDFsTypeFromJSON)(json['characterUDFs']),
        'dateUDFs': !(0, runtime_1.exists)(json, 'dateUDFs') ? undefined : (0, DateUDFsType_1.DateUDFsTypeFromJSON)(json['dateUDFs']),
        'numericUDFs': !(0, runtime_1.exists)(json, 'numericUDFs') ? undefined : (0, NumericUDFsType_1.NumericUDFsTypeFromJSON)(json['numericUDFs']),
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
        'characterUDFs': (0, CharacterUDFsType_1.CharacterUDFsTypeToJSON)(value.characterUDFs),
        'dateUDFs': (0, DateUDFsType_1.DateUDFsTypeToJSON)(value.dateUDFs),
        'numericUDFs': (0, NumericUDFsType_1.NumericUDFsTypeToJSON)(value.numericUDFs),
    };
}
exports.UserDefinedFieldsTypeToJSON = UserDefinedFieldsTypeToJSON;
