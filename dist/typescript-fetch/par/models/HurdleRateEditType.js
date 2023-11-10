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
exports.HurdleRateEditTypeToJSON = exports.HurdleRateEditTypeFromJSONTyped = exports.HurdleRateEditTypeFromJSON = exports.instanceOfHurdleRateEditType = void 0;
const runtime_1 = require("../runtime");
const HurdleRateType_1 = require("./HurdleRateType");
/**
 * Check if a given object implements the HurdleRateEditType interface.
 */
function instanceOfHurdleRateEditType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHurdleRateEditType = instanceOfHurdleRateEditType;
function HurdleRateEditTypeFromJSON(json) {
    return HurdleRateEditTypeFromJSONTyped(json, false);
}
exports.HurdleRateEditTypeFromJSON = HurdleRateEditTypeFromJSON;
function HurdleRateEditTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hurdleDate': !(0, runtime_1.exists)(json, 'hurdleDate') ? undefined : (new Date(json['hurdleDate'])),
        'lengthOfStay': !(0, runtime_1.exists)(json, 'lengthOfStay') ? undefined : json['lengthOfStay'],
        'newHurdleRate': !(0, runtime_1.exists)(json, 'newHurdleRate') ? undefined : (0, HurdleRateType_1.HurdleRateTypeFromJSON)(json['newHurdleRate']),
        'roomCategory': !(0, runtime_1.exists)(json, 'roomCategory') ? undefined : json['roomCategory'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'yieldCategory': !(0, runtime_1.exists)(json, 'yieldCategory') ? undefined : json['yieldCategory'],
        'yieldMarketCode': !(0, runtime_1.exists)(json, 'yieldMarketCode') ? undefined : json['yieldMarketCode'],
    };
}
exports.HurdleRateEditTypeFromJSONTyped = HurdleRateEditTypeFromJSONTyped;
function HurdleRateEditTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'hurdleDate': value.hurdleDate === undefined ? undefined : (value.hurdleDate.toISOString().substr(0, 10)),
        'lengthOfStay': value.lengthOfStay,
        'newHurdleRate': (0, HurdleRateType_1.HurdleRateTypeToJSON)(value.newHurdleRate),
        'roomCategory': value.roomCategory,
        'roomType': value.roomType,
        'yieldCategory': value.yieldCategory,
        'yieldMarketCode': value.yieldMarketCode,
    };
}
exports.HurdleRateEditTypeToJSON = HurdleRateEditTypeToJSON;
