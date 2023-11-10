"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
        'baseLanguage': !(0, runtime_1.exists)(json, 'baseLanguage') ? undefined : json['baseLanguage'],
        'bedCount': !(0, runtime_1.exists)(json, 'bedCount') ? undefined : json['bedCount'],
        'checkInTime': !(0, runtime_1.exists)(json, 'checkInTime') ? undefined : json['checkInTime'],
        'checkOutTime': !(0, runtime_1.exists)(json, 'checkOutTime') ? undefined : json['checkOutTime'],
        'floorCount': !(0, runtime_1.exists)(json, 'floorCount') ? undefined : json['floorCount'],
        'hotelInfoWebsite': !(0, runtime_1.exists)(json, 'hotelInfoWebsite') ? undefined : (0, URLType_1.URLTypeFromJSON)(json['hotelInfoWebsite']),
        'hotelType': !(0, runtime_1.exists)(json, 'hotelType') ? undefined : json['hotelType'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
        'roomCount': !(0, runtime_1.exists)(json, 'roomCount') ? undefined : json['roomCount'],
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
        'baseLanguage': value.baseLanguage,
        'bedCount': value.bedCount,
        'checkInTime': value.checkInTime,
        'checkOutTime': value.checkOutTime,
        'floorCount': value.floorCount,
        'hotelInfoWebsite': (0, URLType_1.URLTypeToJSON)(value.hotelInfoWebsite),
        'hotelType': value.hotelType,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'roomCount': value.roomCount,
    };
}
exports.HotelInfoTypeGeneralInformationToJSON = HotelInfoTypeGeneralInformationToJSON;
