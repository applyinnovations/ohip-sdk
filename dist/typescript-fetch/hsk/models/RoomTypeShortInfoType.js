"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeShortInfoTypeToJSON = exports.RoomTypeShortInfoTypeFromJSONTyped = exports.RoomTypeShortInfoTypeFromJSON = exports.instanceOfRoomTypeShortInfoType = void 0;
const runtime_1 = require("../runtime");
const RoomFeatureType_1 = require("./RoomFeatureType");
/**
 * Check if a given object implements the RoomTypeShortInfoType interface.
 */
function instanceOfRoomTypeShortInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomTypeShortInfoType = instanceOfRoomTypeShortInfoType;
function RoomTypeShortInfoTypeFromJSON(json) {
    return RoomTypeShortInfoTypeFromJSONTyped(json, false);
}
exports.RoomTypeShortInfoTypeFromJSON = RoomTypeShortInfoTypeFromJSON;
function RoomTypeShortInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'houseKeeping': !(0, runtime_1.exists)(json, 'houseKeeping') ? undefined : json['houseKeeping'],
        'isAccessible': !(0, runtime_1.exists)(json, 'isAccessible') ? undefined : json['isAccessible'],
        'isSuiteRoom': !(0, runtime_1.exists)(json, 'isSuiteRoom') ? undefined : json['isSuiteRoom'],
        'maximumOccupancy': !(0, runtime_1.exists)(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'meetingRoom': !(0, runtime_1.exists)(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'minimumOccupancy': !(0, runtime_1.exists)(json, 'minimumOccupancy') ? undefined : json['minimumOccupancy'],
        'pseudoRoom': !(0, runtime_1.exists)(json, 'pseudoRoom') ? undefined : json['pseudoRoom'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (json['roomFeatures'].map(RoomFeatureType_1.RoomFeatureTypeFromJSON)),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'smokingPreference': !(0, runtime_1.exists)(json, 'smokingPreference') ? undefined : json['smokingPreference'],
    };
}
exports.RoomTypeShortInfoTypeFromJSONTyped = RoomTypeShortInfoTypeFromJSONTyped;
function RoomTypeShortInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'houseKeeping': value.houseKeeping,
        'isAccessible': value.isAccessible,
        'isSuiteRoom': value.isSuiteRoom,
        'maximumOccupancy': value.maximumOccupancy,
        'meetingRoom': value.meetingRoom,
        'minimumOccupancy': value.minimumOccupancy,
        'pseudoRoom': value.pseudoRoom,
        'roomClass': value.roomClass,
        'roomFeatures': value.roomFeatures === undefined ? undefined : (value.roomFeatures.map(RoomFeatureType_1.RoomFeatureTypeToJSON)),
        'roomType': value.roomType,
        'shortDescription': value.shortDescription,
        'smokingPreference': value.smokingPreference,
    };
}
exports.RoomTypeShortInfoTypeToJSON = RoomTypeShortInfoTypeToJSON;