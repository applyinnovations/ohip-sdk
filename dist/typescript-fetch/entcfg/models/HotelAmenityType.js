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
exports.HotelAmenityTypeToJSON = exports.HotelAmenityTypeFromJSONTyped = exports.HotelAmenityTypeFromJSON = exports.instanceOfHotelAmenityType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelAmenityType interface.
 */
function instanceOfHotelAmenityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelAmenityType = instanceOfHotelAmenityType;
function HotelAmenityTypeFromJSON(json) {
    return HotelAmenityTypeFromJSONTyped(json, false);
}
exports.HotelAmenityTypeFromJSON = HotelAmenityTypeFromJSON;
function HotelAmenityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'displayOrder': !(0, runtime_1.exists)(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}
exports.HotelAmenityTypeFromJSONTyped = HotelAmenityTypeFromJSONTyped;
function HotelAmenityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'code': value.code,
        'type': value.type,
        'displayOrder': value.displayOrder,
    };
}
exports.HotelAmenityTypeToJSON = HotelAmenityTypeToJSON;
