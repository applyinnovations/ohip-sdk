"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtionalCodeInfoTypeToJSON = exports.AddtionalCodeInfoTypeFromJSONTyped = exports.AddtionalCodeInfoTypeFromJSON = exports.instanceOfAddtionalCodeInfoType = void 0;
const runtime_1 = require("../runtime");
const AddtionalCodeInfoTypeCodeInner_1 = require("./AddtionalCodeInfoTypeCodeInner");
/**
 * Check if a given object implements the AddtionalCodeInfoType interface.
 */
function instanceOfAddtionalCodeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddtionalCodeInfoType = instanceOfAddtionalCodeInfoType;
function AddtionalCodeInfoTypeFromJSON(json) {
    return AddtionalCodeInfoTypeFromJSONTyped(json, false);
}
exports.AddtionalCodeInfoTypeFromJSON = AddtionalCodeInfoTypeFromJSON;
function AddtionalCodeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : (json['code'].map(AddtionalCodeInfoTypeCodeInner_1.AddtionalCodeInfoTypeCodeInnerFromJSON)),
    };
}
exports.AddtionalCodeInfoTypeFromJSONTyped = AddtionalCodeInfoTypeFromJSONTyped;
function AddtionalCodeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code === undefined ? undefined : (value.code.map(AddtionalCodeInfoTypeCodeInner_1.AddtionalCodeInfoTypeCodeInnerToJSON)),
    };
}
exports.AddtionalCodeInfoTypeToJSON = AddtionalCodeInfoTypeToJSON;
