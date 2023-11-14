"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperaHotelContextDetailsHotelContextToJSON = exports.OperaHotelContextDetailsHotelContextFromJSONTyped = exports.OperaHotelContextDetailsHotelContextFromJSON = exports.instanceOfOperaHotelContextDetailsHotelContext = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the OperaHotelContextDetailsHotelContext interface.
 */
function instanceOfOperaHotelContextDetailsHotelContext(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOperaHotelContextDetailsHotelContext = instanceOfOperaHotelContextDetailsHotelContext;
function OperaHotelContextDetailsHotelContextFromJSON(json) {
    return OperaHotelContextDetailsHotelContextFromJSONTyped(json, false);
}
exports.OperaHotelContextDetailsHotelContextFromJSON = OperaHotelContextDetailsHotelContextFromJSON;
function OperaHotelContextDetailsHotelContextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'businessDate': !(0, runtime_1.exists)(json, 'businessDate') ? undefined : (new Date(json['businessDate'])),
        'cateringCurrencyCode': !(0, runtime_1.exists)(json, 'cateringCurrencyCode') ? undefined : json['cateringCurrencyCode'],
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'checkInTime': !(0, runtime_1.exists)(json, 'checkInTime') ? undefined : (new Date(json['checkInTime'])),
        'checkOutTime': !(0, runtime_1.exists)(json, 'checkOutTime') ? undefined : (new Date(json['checkOutTime'])),
        'configurationMode': !(0, runtime_1.exists)(json, 'configurationMode') ? undefined : json['configurationMode'],
        'countryMode': !(0, runtime_1.exists)(json, 'countryMode') ? undefined : json['countryMode'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'languageCode': !(0, runtime_1.exists)(json, 'languageCode') ? undefined : json['languageCode'],
        'loginUserId': !(0, runtime_1.exists)(json, 'loginUserId') ? undefined : json['loginUserId'],
        'timezone': !(0, runtime_1.exists)(json, 'timezone') ? undefined : json['timezone'],
    };
}
exports.OperaHotelContextDetailsHotelContextFromJSONTyped = OperaHotelContextDetailsHotelContextFromJSONTyped;
function OperaHotelContextDetailsHotelContextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'businessDate': value.businessDate === undefined ? undefined : (value.businessDate.toISOString().substring(0, 10)),
        'cateringCurrencyCode': value.cateringCurrencyCode,
        'chainCode': value.chainCode,
        'checkInTime': value.checkInTime === undefined ? undefined : (value.checkInTime.toISOString().substring(0, 10)),
        'checkOutTime': value.checkOutTime === undefined ? undefined : (value.checkOutTime.toISOString().substring(0, 10)),
        'configurationMode': value.configurationMode,
        'countryMode': value.countryMode,
        'currencyCode': value.currencyCode,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'languageCode': value.languageCode,
        'loginUserId': value.loginUserId,
        'timezone': value.timezone,
    };
}
exports.OperaHotelContextDetailsHotelContextToJSON = OperaHotelContextDetailsHotelContextToJSON;