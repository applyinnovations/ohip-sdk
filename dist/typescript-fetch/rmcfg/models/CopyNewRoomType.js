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
exports.CopyNewRoomTypeToJSON = exports.CopyNewRoomTypeFromJSONTyped = exports.CopyNewRoomTypeFromJSON = exports.instanceOfCopyNewRoomType = void 0;
const runtime_1 = require("../runtime");
const HousekeepingCreditsType_1 = require("./HousekeepingCreditsType");
const RoomFeatureType_1 = require("./RoomFeatureType");
const RoomSectionType_1 = require("./RoomSectionType");
/**
 * Check if a given object implements the CopyNewRoomType interface.
 */
function instanceOfCopyNewRoomType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyNewRoomType = instanceOfCopyNewRoomType;
function CopyNewRoomTypeFromJSON(json) {
    return CopyNewRoomTypeFromJSONTyped(json, false);
}
exports.CopyNewRoomTypeFromJSON = CopyNewRoomTypeFromJSON;
function CopyNewRoomTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'floors': !(0, runtime_1.exists)(json, 'floors') ? undefined : json['floors'],
        'housekeepingCredits': !(0, runtime_1.exists)(json, 'housekeepingCredits') ? undefined : (json['housekeepingCredits'].map(HousekeepingCreditsType_1.HousekeepingCreditsTypeFromJSON)),
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (json['roomFeatures'].map(RoomFeatureType_1.RoomFeatureTypeFromJSON)),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomSection': !(0, runtime_1.exists)(json, 'roomSection') ? undefined : (0, RoomSectionType_1.RoomSectionTypeFromJSON)(json['roomSection']),
    };
}
exports.CopyNewRoomTypeFromJSONTyped = CopyNewRoomTypeFromJSONTyped;
function CopyNewRoomTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'floors': value.floors,
        'housekeepingCredits': value.housekeepingCredits === undefined ? undefined : (value.housekeepingCredits.map(HousekeepingCreditsType_1.HousekeepingCreditsTypeToJSON)),
        'roomFeatures': value.roomFeatures === undefined ? undefined : (value.roomFeatures.map(RoomFeatureType_1.RoomFeatureTypeToJSON)),
        'roomId': value.roomId,
        'roomSection': (0, RoomSectionType_1.RoomSectionTypeToJSON)(value.roomSection),
    };
}
exports.CopyNewRoomTypeToJSON = CopyNewRoomTypeToJSON;
