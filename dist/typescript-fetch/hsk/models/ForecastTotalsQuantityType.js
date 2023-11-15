"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastTotalsQuantityTypeToJSON = exports.ForecastTotalsQuantityTypeFromJSONTyped = exports.ForecastTotalsQuantityTypeFromJSON = exports.instanceOfForecastTotalsQuantityType = void 0;
const runtime_1 = require("../runtime");
const RoomTypeTaskType_1 = require("./RoomTypeTaskType");
/**
 * Check if a given object implements the ForecastTotalsQuantityType interface.
 */
function instanceOfForecastTotalsQuantityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfForecastTotalsQuantityType = instanceOfForecastTotalsQuantityType;
function ForecastTotalsQuantityTypeFromJSON(json) {
    return ForecastTotalsQuantityTypeFromJSONTyped(json, false);
}
exports.ForecastTotalsQuantityTypeFromJSON = ForecastTotalsQuantityTypeFromJSON;
function ForecastTotalsQuantityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'isWeekend': !(0, runtime_1.exists)(json, 'isWeekend') ? undefined : json['isWeekend'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'roomTypeBreakDown': !(0, runtime_1.exists)(json, 'roomTypeBreakDown') ? undefined : (json['roomTypeBreakDown'].map(RoomTypeTaskType_1.RoomTypeTaskTypeFromJSON)),
        'totalCredits': !(0, runtime_1.exists)(json, 'totalCredits') ? undefined : json['totalCredits'],
    };
}
exports.ForecastTotalsQuantityTypeFromJSONTyped = ForecastTotalsQuantityTypeFromJSONTyped;
function ForecastTotalsQuantityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'isWeekend': value.isWeekend,
        'quantity': value.quantity,
        'roomTypeBreakDown': value.roomTypeBreakDown === undefined ? undefined : (value.roomTypeBreakDown.map(RoomTypeTaskType_1.RoomTypeTaskTypeToJSON)),
        'totalCredits': value.totalCredits,
    };
}
exports.ForecastTotalsQuantityTypeToJSON = ForecastTotalsQuantityTypeToJSON;
