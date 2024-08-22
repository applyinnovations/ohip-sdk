"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
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
        'value': value.value,
        'code': value.code,
    };
}
exports.CountryNameTypeToJSON = CountryNameTypeToJSON;
