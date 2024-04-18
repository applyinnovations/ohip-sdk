"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRateRangeTypeToJSON = exports.HotelRateRangeTypeFromJSONTyped = exports.HotelRateRangeTypeFromJSON = exports.instanceOfHotelRateRangeType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the HotelRateRangeType interface.
 */
function instanceOfHotelRateRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelRateRangeType = instanceOfHotelRateRangeType;
function HotelRateRangeTypeFromJSON(json) {
    return HotelRateRangeTypeFromJSONTyped(json, false);
}
exports.HotelRateRangeTypeFromJSON = HotelRateRangeTypeFromJSON;
function HotelRateRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'maxRate': !(0, runtime_1.exists)(json, 'maxRate') ? undefined : json['maxRate'],
        'minRate': !(0, runtime_1.exists)(json, 'minRate') ? undefined : json['minRate'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.HotelRateRangeTypeFromJSONTyped = HotelRateRangeTypeFromJSONTyped;
function HotelRateRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'hotelId': value.hotelId,
        'maxRate': value.maxRate,
        'minRate': value.minRate,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.HotelRateRangeTypeToJSON = HotelRateRangeTypeToJSON;