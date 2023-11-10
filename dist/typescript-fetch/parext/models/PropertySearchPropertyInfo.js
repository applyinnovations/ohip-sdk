"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertySearchPropertyInfoToJSON = exports.PropertySearchPropertyInfoFromJSONTyped = exports.PropertySearchPropertyInfoFromJSON = exports.instanceOfPropertySearchPropertyInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PropertySearchPropertyInfo interface.
 */
function instanceOfPropertySearchPropertyInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPropertySearchPropertyInfo = instanceOfPropertySearchPropertyInfo;
function PropertySearchPropertyInfoFromJSON(json) {
    return PropertySearchPropertyInfoFromJSONTyped(json, false);
}
exports.PropertySearchPropertyInfoFromJSON = PropertySearchPropertyInfoFromJSON;
function PropertySearchPropertyInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'hotelCode': !(0, runtime_1.exists)(json, 'hotelCode') ? undefined : json['hotelCode'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'isAlternate': !(0, runtime_1.exists)(json, 'isAlternate') ? undefined : json['isAlternate'],
    };
}
exports.PropertySearchPropertyInfoFromJSONTyped = PropertySearchPropertyInfoFromJSONTyped;
function PropertySearchPropertyInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'hotelCode': value.hotelCode,
        'hotelName': value.hotelName,
        'isAlternate': value.isAlternate,
    };
}
exports.PropertySearchPropertyInfoToJSON = PropertySearchPropertyInfoToJSON;
