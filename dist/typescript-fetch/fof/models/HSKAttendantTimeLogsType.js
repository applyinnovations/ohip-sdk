"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSKAttendantTimeLogsTypeToJSON = exports.HSKAttendantTimeLogsTypeFromJSONTyped = exports.HSKAttendantTimeLogsTypeFromJSON = exports.instanceOfHSKAttendantTimeLogsType = void 0;
const runtime_1 = require("../runtime");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
/**
 * Check if a given object implements the HSKAttendantTimeLogsType interface.
 */
function instanceOfHSKAttendantTimeLogsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHSKAttendantTimeLogsType = instanceOfHSKAttendantTimeLogsType;
function HSKAttendantTimeLogsTypeFromJSON(json) {
    return HSKAttendantTimeLogsTypeFromJSONTyped(json, false);
}
exports.HSKAttendantTimeLogsTypeFromJSON = HSKAttendantTimeLogsTypeFromJSON;
function HSKAttendantTimeLogsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endRoomStatus': !(0, runtime_1.exists)(json, 'endRoomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['endRoomStatus']),
        'endTime': !(0, runtime_1.exists)(json, 'endTime') ? undefined : json['endTime'],
        'startRoomStatus': !(0, runtime_1.exists)(json, 'startRoomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['startRoomStatus']),
        'startTime': !(0, runtime_1.exists)(json, 'startTime') ? undefined : json['startTime'],
    };
}
exports.HSKAttendantTimeLogsTypeFromJSONTyped = HSKAttendantTimeLogsTypeFromJSONTyped;
function HSKAttendantTimeLogsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'endRoomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.endRoomStatus),
        'endTime': value.endTime,
        'startRoomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.startRoomStatus),
        'startTime': value.startTime,
    };
}
exports.HSKAttendantTimeLogsTypeToJSON = HSKAttendantTimeLogsTypeToJSON;