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
exports.RoomOutOfOrderTypeToJSON = exports.RoomOutOfOrderTypeFromJSONTyped = exports.RoomOutOfOrderTypeFromJSON = exports.instanceOfRoomOutOfOrderType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
/**
 * Check if a given object implements the RoomOutOfOrderType interface.
 */
function instanceOfRoomOutOfOrderType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomOutOfOrderType = instanceOfRoomOutOfOrderType;
function RoomOutOfOrderTypeFromJSON(json) {
    return RoomOutOfOrderTypeFromJSONTyped(json, false);
}
exports.RoomOutOfOrderTypeFromJSON = RoomOutOfOrderTypeFromJSON;
function RoomOutOfOrderTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'newDateRange': !(0, runtime_1.exists)(json, 'newDateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['newDateRange']),
        'reasonCode': !(0, runtime_1.exists)(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reasonDesc': !(0, runtime_1.exists)(json, 'reasonDesc') ? undefined : json['reasonDesc'],
        'repairRemarks': !(0, runtime_1.exists)(json, 'repairRemarks') ? undefined : json['repairRemarks'],
        'returnStatus': !(0, runtime_1.exists)(json, 'returnStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['returnStatus']),
        'roomStatus': !(0, runtime_1.exists)(json, 'roomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['roomStatus']),
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.RoomOutOfOrderTypeFromJSONTyped = RoomOutOfOrderTypeFromJSONTyped;
function RoomOutOfOrderTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end,
        'newDateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.newDateRange),
        'reasonCode': value.reasonCode,
        'reasonDesc': value.reasonDesc,
        'repairRemarks': value.repairRemarks,
        'returnStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.returnStatus),
        'roomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.roomStatus),
        'start': value.start,
    };
}
exports.RoomOutOfOrderTypeToJSON = RoomOutOfOrderTypeToJSON;
