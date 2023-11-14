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
exports.RoomKeyMultipleGuestsToJSON = exports.RoomKeyMultipleGuestsFromJSONTyped = exports.RoomKeyMultipleGuestsFromJSON = exports.instanceOfRoomKeyMultipleGuests = void 0;
const runtime_1 = require("../runtime");
const RoomKeyGuest_1 = require("./RoomKeyGuest");
const UniqueIDListType_1 = require("./UniqueIDListType");
/**
 * Check if a given object implements the RoomKeyMultipleGuests interface.
 */
function instanceOfRoomKeyMultipleGuests(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomKeyMultipleGuests = instanceOfRoomKeyMultipleGuests;
function RoomKeyMultipleGuestsFromJSON(json) {
    return RoomKeyMultipleGuestsFromJSONTyped(json, false);
}
exports.RoomKeyMultipleGuestsFromJSON = RoomKeyMultipleGuestsFromJSON;
function RoomKeyMultipleGuestsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyOptions': !(0, runtime_1.exists)(json, 'keyOptions') ? undefined : json['keyOptions'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['reservationIdList']),
        'roomKeyGuests': !(0, runtime_1.exists)(json, 'roomKeyGuests') ? undefined : (json['roomKeyGuests'].map(RoomKeyGuest_1.RoomKeyGuestFromJSON)),
        'roomNumber': !(0, runtime_1.exists)(json, 'roomNumber') ? undefined : json['roomNumber'],
    };
}
exports.RoomKeyMultipleGuestsFromJSONTyped = RoomKeyMultipleGuestsFromJSONTyped;
function RoomKeyMultipleGuestsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyOptions': value.keyOptions,
        'reservationIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.reservationIdList),
        'roomKeyGuests': value.roomKeyGuests === undefined ? undefined : (value.roomKeyGuests.map(RoomKeyGuest_1.RoomKeyGuestToJSON)),
        'roomNumber': value.roomNumber,
    };
}
exports.RoomKeyMultipleGuestsToJSON = RoomKeyMultipleGuestsToJSON;