"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelExternalDevicesTypeToJSON = exports.HotelExternalDevicesTypeFromJSONTyped = exports.HotelExternalDevicesTypeFromJSON = exports.instanceOfHotelExternalDevicesType = void 0;
const runtime_1 = require("../runtime");
const SupportedExternalDeviceType_1 = require("./SupportedExternalDeviceType");
/**
 * Check if a given object implements the HotelExternalDevicesType interface.
 */
function instanceOfHotelExternalDevicesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelExternalDevicesType = instanceOfHotelExternalDevicesType;
function HotelExternalDevicesTypeFromJSON(json) {
    return HotelExternalDevicesTypeFromJSONTyped(json, false);
}
exports.HotelExternalDevicesTypeFromJSON = HotelExternalDevicesTypeFromJSON;
function HotelExternalDevicesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'supportedDevices': !(0, runtime_1.exists)(json, 'supportedDevices') ? undefined : (json['supportedDevices'].map(SupportedExternalDeviceType_1.SupportedExternalDeviceTypeFromJSON)),
    };
}
exports.HotelExternalDevicesTypeFromJSONTyped = HotelExternalDevicesTypeFromJSONTyped;
function HotelExternalDevicesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'supportedDevices': value.supportedDevices === undefined ? undefined : (value.supportedDevices.map(SupportedExternalDeviceType_1.SupportedExternalDeviceTypeToJSON)),
    };
}
exports.HotelExternalDevicesTypeToJSON = HotelExternalDevicesTypeToJSON;
