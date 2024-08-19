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
exports.HotelInfoTypePropertyControlsApplicationModeToJSON = exports.HotelInfoTypePropertyControlsApplicationModeFromJSONTyped = exports.HotelInfoTypePropertyControlsApplicationModeFromJSON = exports.instanceOfHotelInfoTypePropertyControlsApplicationMode = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelInfoTypePropertyControlsApplicationMode interface.
 */
function instanceOfHotelInfoTypePropertyControlsApplicationMode(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInfoTypePropertyControlsApplicationMode = instanceOfHotelInfoTypePropertyControlsApplicationMode;
function HotelInfoTypePropertyControlsApplicationModeFromJSON(json) {
    return HotelInfoTypePropertyControlsApplicationModeFromJSONTyped(json, false);
}
exports.HotelInfoTypePropertyControlsApplicationModeFromJSON = HotelInfoTypePropertyControlsApplicationModeFromJSON;
function HotelInfoTypePropertyControlsApplicationModeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'configurationMode': !(0, runtime_1.exists)(json, 'configurationMode') ? undefined : json['configurationMode'],
        'countryMode': !(0, runtime_1.exists)(json, 'countryMode') ? undefined : json['countryMode'],
        'expHotelCode': !(0, runtime_1.exists)(json, 'expHotelCode') ? undefined : json['expHotelCode'],
        'touristNumber': !(0, runtime_1.exists)(json, 'touristNumber') ? undefined : json['touristNumber'],
        'mbsSupported': !(0, runtime_1.exists)(json, 'mbsSupported') ? undefined : json['mbsSupported'],
    };
}
exports.HotelInfoTypePropertyControlsApplicationModeFromJSONTyped = HotelInfoTypePropertyControlsApplicationModeFromJSONTyped;
function HotelInfoTypePropertyControlsApplicationModeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'configurationMode': value.configurationMode,
        'countryMode': value.countryMode,
        'expHotelCode': value.expHotelCode,
        'touristNumber': value.touristNumber,
        'mbsSupported': value.mbsSupported,
    };
}
exports.HotelInfoTypePropertyControlsApplicationModeToJSON = HotelInfoTypePropertyControlsApplicationModeToJSON;
