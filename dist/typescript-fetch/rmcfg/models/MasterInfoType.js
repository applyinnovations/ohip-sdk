"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterInfoTypeToJSON = exports.MasterInfoTypeFromJSONTyped = exports.MasterInfoTypeFromJSON = exports.instanceOfMasterInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeInfoType_1 = require("./CodeInfoType");
const MasterType_1 = require("./MasterType");
/**
 * Check if a given object implements the MasterInfoType interface.
 */
function instanceOfMasterInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMasterInfoType = instanceOfMasterInfoType;
function MasterInfoTypeFromJSON(json) {
    return MasterInfoTypeFromJSONTyped(json, false);
}
exports.MasterInfoTypeFromJSON = MasterInfoTypeFromJSON;
function MasterInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'codeInfo': !(0, runtime_1.exists)(json, 'codeInfo') ? undefined : (json['codeInfo'].map(CodeInfoType_1.CodeInfoTypeFromJSON)),
        'codeType': !(0, runtime_1.exists)(json, 'codeType') ? undefined : (0, MasterType_1.MasterTypeFromJSON)(json['codeType']),
    };
}
exports.MasterInfoTypeFromJSONTyped = MasterInfoTypeFromJSONTyped;
function MasterInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'codeInfo': value.codeInfo === undefined ? undefined : (value.codeInfo.map(CodeInfoType_1.CodeInfoTypeToJSON)),
        'codeType': (0, MasterType_1.MasterTypeToJSON)(value.codeType),
    };
}
exports.MasterInfoTypeToJSON = MasterInfoTypeToJSON;