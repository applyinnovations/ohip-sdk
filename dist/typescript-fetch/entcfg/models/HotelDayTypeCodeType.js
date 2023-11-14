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
exports.HotelDayTypeCodeTypeToJSON = exports.HotelDayTypeCodeTypeFromJSONTyped = exports.HotelDayTypeCodeTypeFromJSON = exports.instanceOfHotelDayTypeCodeType = void 0;
const runtime_1 = require("../runtime");
const ColorType_1 = require("./ColorType");
/**
 * Check if a given object implements the HotelDayTypeCodeType interface.
 */
function instanceOfHotelDayTypeCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelDayTypeCodeType = instanceOfHotelDayTypeCodeType;
function HotelDayTypeCodeTypeFromJSON(json) {
    return HotelDayTypeCodeTypeFromJSONTyped(json, false);
}
exports.HotelDayTypeCodeTypeFromJSON = HotelDayTypeCodeTypeFromJSON;
function HotelDayTypeCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adder': !(0, runtime_1.exists)(json, 'adder') ? undefined : json['adder'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'color': !(0, runtime_1.exists)(json, 'color') ? undefined : (0, ColorType_1.ColorTypeFromJSON)(json['color']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : json['hotel'],
        'multiplier': !(0, runtime_1.exists)(json, 'multiplier') ? undefined : json['multiplier'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}
exports.HotelDayTypeCodeTypeFromJSONTyped = HotelDayTypeCodeTypeFromJSONTyped;
function HotelDayTypeCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adder': value.adder,
        'code': value.code,
        'color': (0, ColorType_1.ColorTypeToJSON)(value.color),
        'description': value.description,
        'hotel': value.hotel,
        'multiplier': value.multiplier,
        'sellSequence': value.sellSequence,
    };
}
exports.HotelDayTypeCodeTypeToJSON = HotelDayTypeCodeTypeToJSON;