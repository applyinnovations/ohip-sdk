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
exports.CodeInfoTypeToJSON = exports.CodeInfoTypeFromJSONTyped = exports.CodeInfoTypeFromJSON = exports.instanceOfCodeInfoType = void 0;
const runtime_1 = require("../runtime");
const AddtionalCodeInfoType_1 = require("./AddtionalCodeInfoType");
/**
 * Check if a given object implements the CodeInfoType interface.
 */
function instanceOfCodeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCodeInfoType = instanceOfCodeInfoType;
function CodeInfoTypeFromJSON(json) {
    return CodeInfoTypeFromJSONTyped(json, false);
}
exports.CodeInfoTypeFromJSON = CodeInfoTypeFromJSON;
function CodeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'addtionalCodeInfo': !(0, runtime_1.exists)(json, 'addtionalCodeInfo') ? undefined : (0, AddtionalCodeInfoType_1.AddtionalCodeInfoTypeFromJSON)(json['addtionalCodeInfo']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
    };
}
exports.CodeInfoTypeFromJSONTyped = CodeInfoTypeFromJSONTyped;
function CodeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'addtionalCodeInfo': (0, AddtionalCodeInfoType_1.AddtionalCodeInfoTypeToJSON)(value.addtionalCodeInfo),
        'hotelId': value.hotelId,
        'code': value.code,
    };
}
exports.CodeInfoTypeToJSON = CodeInfoTypeToJSON;