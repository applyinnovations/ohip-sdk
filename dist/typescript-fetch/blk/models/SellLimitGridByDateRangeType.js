"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellLimitGridByDateRangeTypeToJSON = exports.SellLimitGridByDateRangeTypeFromJSONTyped = exports.SellLimitGridByDateRangeTypeFromJSON = exports.instanceOfSellLimitGridByDateRangeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SellLimitGridByDateRangeType interface.
 */
function instanceOfSellLimitGridByDateRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSellLimitGridByDateRangeType = instanceOfSellLimitGridByDateRangeType;
function SellLimitGridByDateRangeTypeFromJSON(json) {
    return SellLimitGridByDateRangeTypeFromJSONTyped(json, false);
}
exports.SellLimitGridByDateRangeTypeFromJSON = SellLimitGridByDateRangeTypeFromJSON;
function SellLimitGridByDateRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'sellLimit': !(0, runtime_1.exists)(json, 'sellLimit') ? undefined : json['sellLimit'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.SellLimitGridByDateRangeTypeFromJSONTyped = SellLimitGridByDateRangeTypeFromJSONTyped;
function SellLimitGridByDateRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end,
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sellLimit': value.sellLimit,
        'start': value.start,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.SellLimitGridByDateRangeTypeToJSON = SellLimitGridByDateRangeTypeToJSON;
