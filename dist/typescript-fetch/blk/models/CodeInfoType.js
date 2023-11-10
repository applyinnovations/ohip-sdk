"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
        'addtionalCodeInfo': !(0, runtime_1.exists)(json, 'addtionalCodeInfo') ? undefined : (0, AddtionalCodeInfoType_1.AddtionalCodeInfoTypeFromJSON)(json['addtionalCodeInfo']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
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
        'addtionalCodeInfo': (0, AddtionalCodeInfoType_1.AddtionalCodeInfoTypeToJSON)(value.addtionalCodeInfo),
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
    };
}
exports.CodeInfoTypeToJSON = CodeInfoTypeToJSON;
