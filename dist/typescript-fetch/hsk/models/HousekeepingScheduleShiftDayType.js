"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingScheduleShiftDayTypeToJSON = exports.HousekeepingScheduleShiftDayTypeFromJSONTyped = exports.HousekeepingScheduleShiftDayTypeFromJSON = exports.instanceOfHousekeepingScheduleShiftDayType = void 0;
const runtime_1 = require("../runtime");
const DaysOfWeekType_1 = require("./DaysOfWeekType");
/**
 * Check if a given object implements the HousekeepingScheduleShiftDayType interface.
 */
function instanceOfHousekeepingScheduleShiftDayType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingScheduleShiftDayType = instanceOfHousekeepingScheduleShiftDayType;
function HousekeepingScheduleShiftDayTypeFromJSON(json) {
    return HousekeepingScheduleShiftDayTypeFromJSONTyped(json, false);
}
exports.HousekeepingScheduleShiftDayTypeFromJSON = HousekeepingScheduleShiftDayTypeFromJSON;
function HousekeepingScheduleShiftDayTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dayOfWeek': !(0, runtime_1.exists)(json, 'dayOfWeek') ? undefined : (0, DaysOfWeekType_1.DaysOfWeekTypeFromJSON)(json['dayOfWeek']),
    };
}
exports.HousekeepingScheduleShiftDayTypeFromJSONTyped = HousekeepingScheduleShiftDayTypeFromJSONTyped;
function HousekeepingScheduleShiftDayTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dayOfWeek': (0, DaysOfWeekType_1.DaysOfWeekTypeToJSON)(value.dayOfWeek),
    };
}
exports.HousekeepingScheduleShiftDayTypeToJSON = HousekeepingScheduleShiftDayTypeToJSON;