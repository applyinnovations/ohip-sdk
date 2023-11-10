"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCriteriaRoomToJSON = exports.RoomCriteriaRoomFromJSONTyped = exports.RoomCriteriaRoomFromJSON = exports.instanceOfRoomCriteriaRoom = void 0;
const runtime_1 = require("../runtime");
const ConfigRoomType_1 = require("./ConfigRoomType");
/**
 * Check if a given object implements the RoomCriteriaRoom interface.
 */
function instanceOfRoomCriteriaRoom(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomCriteriaRoom = instanceOfRoomCriteriaRoom;
function RoomCriteriaRoomFromJSON(json) {
    return RoomCriteriaRoomFromJSONTyped(json, false);
}
exports.RoomCriteriaRoomFromJSON = RoomCriteriaRoomFromJSON;
function RoomCriteriaRoomFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomDetails': !(0, runtime_1.exists)(json, 'roomDetails') ? undefined : (0, ConfigRoomType_1.ConfigRoomTypeFromJSON)(json['roomDetails']),
    };
}
exports.RoomCriteriaRoomFromJSONTyped = RoomCriteriaRoomFromJSONTyped;
function RoomCriteriaRoomToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'roomDetails': (0, ConfigRoomType_1.ConfigRoomTypeToJSON)(value.roomDetails),
    };
}
exports.RoomCriteriaRoomToJSON = RoomCriteriaRoomToJSON;
