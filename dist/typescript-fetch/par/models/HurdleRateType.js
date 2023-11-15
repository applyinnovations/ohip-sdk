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
exports.HurdleRateTypeToJSON = exports.HurdleRateTypeFromJSONTyped = exports.HurdleRateTypeFromJSON = exports.instanceOfHurdleRateType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HurdleRateType interface.
 */
function instanceOfHurdleRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHurdleRateType = instanceOfHurdleRateType;
function HurdleRateTypeFromJSON(json) {
    return HurdleRateTypeFromJSONTyped(json, false);
}
exports.HurdleRateTypeFromJSON = HurdleRateTypeFromJSON;
function HurdleRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ceiling': !(0, runtime_1.exists)(json, 'ceiling') ? undefined : json['ceiling'],
        'delta': !(0, runtime_1.exists)(json, 'delta') ? undefined : json['delta'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hurdle': !(0, runtime_1.exists)(json, 'hurdle') ? undefined : json['hurdle'],
        'hurdleDate': !(0, runtime_1.exists)(json, 'hurdleDate') ? undefined : json['hurdleDate'],
        'lengthOfStay': !(0, runtime_1.exists)(json, 'lengthOfStay') ? undefined : json['lengthOfStay'],
        'maxSolds': !(0, runtime_1.exists)(json, 'maxSolds') ? undefined : json['maxSolds'],
        'override': !(0, runtime_1.exists)(json, 'override') ? undefined : json['override'],
        'roomCategory': !(0, runtime_1.exists)(json, 'roomCategory') ? undefined : json['roomCategory'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomsSold': !(0, runtime_1.exists)(json, 'roomsSold') ? undefined : json['roomsSold'],
        'yieldCategory': !(0, runtime_1.exists)(json, 'yieldCategory') ? undefined : json['yieldCategory'],
        'yieldMarketCode': !(0, runtime_1.exists)(json, 'yieldMarketCode') ? undefined : json['yieldMarketCode'],
    };
}
exports.HurdleRateTypeFromJSONTyped = HurdleRateTypeFromJSONTyped;
function HurdleRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ceiling': value.ceiling,
        'delta': value.delta,
        'hotelId': value.hotelId,
        'hurdle': value.hurdle,
        'hurdleDate': value.hurdleDate,
        'lengthOfStay': value.lengthOfStay,
        'maxSolds': value.maxSolds,
        'override': value.override,
        'roomCategory': value.roomCategory,
        'roomType': value.roomType,
        'roomsSold': value.roomsSold,
        'yieldCategory': value.yieldCategory,
        'yieldMarketCode': value.yieldMarketCode,
    };
}
exports.HurdleRateTypeToJSON = HurdleRateTypeToJSON;
