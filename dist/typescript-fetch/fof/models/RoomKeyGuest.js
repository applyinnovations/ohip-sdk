"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomKeyGuestToJSON = exports.RoomKeyGuestFromJSONTyped = exports.RoomKeyGuestFromJSON = exports.instanceOfRoomKeyGuest = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the RoomKeyGuest interface.
 */
function instanceOfRoomKeyGuest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomKeyGuest = instanceOfRoomKeyGuest;
function RoomKeyGuestFromJSON(json) {
    return RoomKeyGuestFromJSONTyped(json, false);
}
exports.RoomKeyGuestFromJSON = RoomKeyGuestFromJSON;
function RoomKeyGuestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'guestKeyOptions': !(0, runtime_1.exists)(json, 'guestKeyOptions') ? undefined : json['guestKeyOptions'],
        'guestNameId': !(0, runtime_1.exists)(json, 'guestNameId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['guestNameId']),
        'isAdult': !(0, runtime_1.exists)(json, 'isAdult') ? undefined : json['isAdult'],
        'isInactive': !(0, runtime_1.exists)(json, 'isInactive') ? undefined : json['isInactive'],
        'keyNumber': !(0, runtime_1.exists)(json, 'keyNumber') ? undefined : json['keyNumber'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'originalBalance': !(0, runtime_1.exists)(json, 'originalBalance') ? undefined : json['originalBalance'],
        'remainingBalance': !(0, runtime_1.exists)(json, 'remainingBalance') ? undefined : json['remainingBalance'],
    };
}
exports.RoomKeyGuestFromJSONTyped = RoomKeyGuestFromJSONTyped;
function RoomKeyGuestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'guestKeyOptions': value.guestKeyOptions,
        'guestNameId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.guestNameId),
        'isAdult': value.isAdult,
        'isInactive': value.isInactive,
        'keyNumber': value.keyNumber,
        'lastName': value.lastName,
        'originalBalance': value.originalBalance,
        'remainingBalance': value.remainingBalance,
    };
}
exports.RoomKeyGuestToJSON = RoomKeyGuestToJSON;