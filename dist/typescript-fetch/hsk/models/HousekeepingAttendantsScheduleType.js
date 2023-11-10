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
exports.HousekeepingAttendantsScheduleTypeToJSON = exports.HousekeepingAttendantsScheduleTypeFromJSONTyped = exports.HousekeepingAttendantsScheduleTypeFromJSON = exports.instanceOfHousekeepingAttendantsScheduleType = void 0;
const runtime_1 = require("../runtime");
const HousekeepingAttendantScheduleType_1 = require("./HousekeepingAttendantScheduleType");
/**
 * Check if a given object implements the HousekeepingAttendantsScheduleType interface.
 */
function instanceOfHousekeepingAttendantsScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingAttendantsScheduleType = instanceOfHousekeepingAttendantsScheduleType;
function HousekeepingAttendantsScheduleTypeFromJSON(json) {
    return HousekeepingAttendantsScheduleTypeFromJSONTyped(json, false);
}
exports.HousekeepingAttendantsScheduleTypeFromJSON = HousekeepingAttendantsScheduleTypeFromJSON;
function HousekeepingAttendantsScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attendantsSchedule': !(0, runtime_1.exists)(json, 'attendantsSchedule') ? undefined : (json['attendantsSchedule'].map(HousekeepingAttendantScheduleType_1.HousekeepingAttendantScheduleTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'scheduleDate': !(0, runtime_1.exists)(json, 'scheduleDate') ? undefined : (new Date(json['scheduleDate'])),
    };
}
exports.HousekeepingAttendantsScheduleTypeFromJSONTyped = HousekeepingAttendantsScheduleTypeFromJSONTyped;
function HousekeepingAttendantsScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attendantsSchedule': value.attendantsSchedule === undefined ? undefined : (value.attendantsSchedule.map(HousekeepingAttendantScheduleType_1.HousekeepingAttendantScheduleTypeToJSON)),
        'hotelId': value.hotelId,
        'scheduleDate': value.scheduleDate === undefined ? undefined : (value.scheduleDate.toISOString().substr(0, 10)),
    };
}
exports.HousekeepingAttendantsScheduleTypeToJSON = HousekeepingAttendantsScheduleTypeToJSON;
