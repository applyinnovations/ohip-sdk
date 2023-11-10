"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryNameTypeToJSON = exports.CountryNameTypeFromJSONTyped = exports.CountryNameTypeFromJSON = exports.instanceOfCountryNameType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CountryNameType interface.
 */
function instanceOfCountryNameType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCountryNameType = instanceOfCountryNameType;
function CountryNameTypeFromJSON(json) {
    return CountryNameTypeFromJSONTyped(json, false);
}
exports.CountryNameTypeFromJSON = CountryNameTypeFromJSON;
function CountryNameTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.CountryNameTypeFromJSONTyped = CountryNameTypeFromJSONTyped;
function CountryNameTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'value': value.value,
    };
}
exports.CountryNameTypeToJSON = CountryNameTypeToJSON;
