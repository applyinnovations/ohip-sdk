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
exports.HotelInfoTypeGeneralInformationToJSON = exports.HotelInfoTypeGeneralInformationFromJSONTyped = exports.HotelInfoTypeGeneralInformationFromJSON = exports.instanceOfHotelInfoTypeGeneralInformation = void 0;
const runtime_1 = require("../runtime");
const URLType_1 = require("./URLType");
/**
 * Check if a given object implements the HotelInfoTypeGeneralInformation interface.
 */
function instanceOfHotelInfoTypeGeneralInformation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInfoTypeGeneralInformation = instanceOfHotelInfoTypeGeneralInformation;
function HotelInfoTypeGeneralInformationFromJSON(json) {
    return HotelInfoTypeGeneralInformationFromJSONTyped(json, false);
}
exports.HotelInfoTypeGeneralInformationFromJSON = HotelInfoTypeGeneralInformationFromJSON;
function HotelInfoTypeGeneralInformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelType': !(0, runtime_1.exists)(json, 'hotelType') ? undefined : json['hotelType'],
        'roomCount': !(0, runtime_1.exists)(json, 'roomCount') ? undefined : json['roomCount'],
        'bedCount': !(0, runtime_1.exists)(json, 'bedCount') ? undefined : json['bedCount'],
        'floorCount': !(0, runtime_1.exists)(json, 'floorCount') ? undefined : json['floorCount'],
        'checkInTime': !(0, runtime_1.exists)(json, 'checkInTime') ? undefined : json['checkInTime'],
        'checkOutTime': !(0, runtime_1.exists)(json, 'checkOutTime') ? undefined : json['checkOutTime'],
        'hotelInfoWebsite': !(0, runtime_1.exists)(json, 'hotelInfoWebsite') ? undefined : (0, URLType_1.URLTypeFromJSON)(json['hotelInfoWebsite']),
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'baseLanguage': !(0, runtime_1.exists)(json, 'baseLanguage') ? undefined : json['baseLanguage'],
    };
}
exports.HotelInfoTypeGeneralInformationFromJSONTyped = HotelInfoTypeGeneralInformationFromJSONTyped;
function HotelInfoTypeGeneralInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelType': value.hotelType,
        'roomCount': value.roomCount,
        'bedCount': value.bedCount,
        'floorCount': value.floorCount,
        'checkInTime': value.checkInTime,
        'checkOutTime': value.checkOutTime,
        'hotelInfoWebsite': (0, URLType_1.URLTypeToJSON)(value.hotelInfoWebsite),
        'longitude': value.longitude,
        'latitude': value.latitude,
        'baseLanguage': value.baseLanguage,
    };
}
exports.HotelInfoTypeGeneralInformationToJSON = HotelInfoTypeGeneralInformationToJSON;