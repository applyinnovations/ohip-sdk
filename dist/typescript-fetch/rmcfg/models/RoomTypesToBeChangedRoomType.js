"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypesToBeChangedRoomTypeToJSON = exports.RoomTypesToBeChangedRoomTypeFromJSONTyped = exports.RoomTypesToBeChangedRoomTypeFromJSON = exports.instanceOfRoomTypesToBeChangedRoomType = void 0;
const runtime_1 = require("../runtime");
const RoomTypeType_1 = require("./RoomTypeType");
/**
 * Check if a given object implements the RoomTypesToBeChangedRoomType interface.
 */
function instanceOfRoomTypesToBeChangedRoomType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomTypesToBeChangedRoomType = instanceOfRoomTypesToBeChangedRoomType;
function RoomTypesToBeChangedRoomTypeFromJSON(json) {
    return RoomTypesToBeChangedRoomTypeFromJSONTyped(json, false);
}
exports.RoomTypesToBeChangedRoomTypeFromJSON = RoomTypesToBeChangedRoomTypeFromJSON;
function RoomTypesToBeChangedRoomTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomTypeDetails': !(0, runtime_1.exists)(json, 'roomTypeDetails') ? undefined : (0, RoomTypeType_1.RoomTypeTypeFromJSON)(json['roomTypeDetails']),
    };
}
exports.RoomTypesToBeChangedRoomTypeFromJSONTyped = RoomTypesToBeChangedRoomTypeFromJSONTyped;
function RoomTypesToBeChangedRoomTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'roomTypeDetails': (0, RoomTypeType_1.RoomTypeTypeToJSON)(value.roomTypeDetails),
    };
}
exports.RoomTypesToBeChangedRoomTypeToJSON = RoomTypesToBeChangedRoomTypeToJSON;
