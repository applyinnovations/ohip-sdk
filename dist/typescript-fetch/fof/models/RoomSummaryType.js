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
exports.RoomSummaryTypeToJSON = exports.RoomSummaryTypeFromJSONTyped = exports.RoomSummaryTypeFromJSON = exports.instanceOfRoomSummaryType = void 0;
const runtime_1 = require("../runtime");
const AssignedRoomsSummaryType_1 = require("./AssignedRoomsSummaryType");
const UnassignedRoomsSummaryType_1 = require("./UnassignedRoomsSummaryType");
/**
 * Check if a given object implements the RoomSummaryType interface.
 */
function instanceOfRoomSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomSummaryType = instanceOfRoomSummaryType;
function RoomSummaryTypeFromJSON(json) {
    return RoomSummaryTypeFromJSONTyped(json, false);
}
exports.RoomSummaryTypeFromJSON = RoomSummaryTypeFromJSON;
function RoomSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assignedRooms': !(0, runtime_1.exists)(json, 'assignedRooms') ? undefined : (0, AssignedRoomsSummaryType_1.AssignedRoomsSummaryTypeFromJSON)(json['assignedRooms']),
        'unassignedRooms': !(0, runtime_1.exists)(json, 'unassignedRooms') ? undefined : (0, UnassignedRoomsSummaryType_1.UnassignedRoomsSummaryTypeFromJSON)(json['unassignedRooms']),
    };
}
exports.RoomSummaryTypeFromJSONTyped = RoomSummaryTypeFromJSONTyped;
function RoomSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assignedRooms': (0, AssignedRoomsSummaryType_1.AssignedRoomsSummaryTypeToJSON)(value.assignedRooms),
        'unassignedRooms': (0, UnassignedRoomsSummaryType_1.UnassignedRoomsSummaryTypeToJSON)(value.unassignedRooms),
    };
}
exports.RoomSummaryTypeToJSON = RoomSummaryTypeToJSON;
