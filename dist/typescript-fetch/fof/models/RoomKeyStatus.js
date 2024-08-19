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
exports.RoomKeyStatusToJSON = exports.RoomKeyStatusFromJSONTyped = exports.RoomKeyStatusFromJSON = exports.instanceOfRoomKeyStatus = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
const DateTimeRangeType_1 = require("./DateTimeRangeType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RoomKeyStatus interface.
 */
function instanceOfRoomKeyStatus(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomKeyStatus = instanceOfRoomKeyStatus;
function RoomKeyStatusFromJSON(json) {
    return RoomKeyStatusFromJSONTyped(json, false);
}
exports.RoomKeyStatusFromJSON = RoomKeyStatusFromJSON;
function RoomKeyStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guestDepartureDate': !(0, runtime_1.exists)(json, 'guestDepartureDate') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['guestDepartureDate']),
        'guestDepartureTime': !(0, runtime_1.exists)(json, 'guestDepartureTime') ? undefined : (0, DateTimeRangeType_1.DateTimeRangeTypeFromJSON)(json['guestDepartureTime']),
        'guestFirstName': !(0, runtime_1.exists)(json, 'guestFirstName') ? undefined : json['guestFirstName'],
        'guestLastName': !(0, runtime_1.exists)(json, 'guestLastName') ? undefined : json['guestLastName'],
        'keyOptions': !(0, runtime_1.exists)(json, 'keyOptions') ? undefined : json['keyOptions'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : json['room'],
        'validUntil': !(0, runtime_1.exists)(json, 'validUntil') ? undefined : json['validUntil'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RoomKeyStatusFromJSONTyped = RoomKeyStatusFromJSONTyped;
function RoomKeyStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guestDepartureDate': (0, DateRangeType_1.DateRangeTypeToJSON)(value.guestDepartureDate),
        'guestDepartureTime': (0, DateTimeRangeType_1.DateTimeRangeTypeToJSON)(value.guestDepartureTime),
        'guestFirstName': value.guestFirstName,
        'guestLastName': value.guestLastName,
        'keyOptions': value.keyOptions,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'room': value.room,
        'validUntil': value.validUntil,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RoomKeyStatusToJSON = RoomKeyStatusToJSON;
