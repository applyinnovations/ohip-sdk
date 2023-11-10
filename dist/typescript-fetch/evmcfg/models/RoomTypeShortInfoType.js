"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeShortInfoTypeToJSON = exports.RoomTypeShortInfoTypeFromJSONTyped = exports.RoomTypeShortInfoTypeFromJSON = exports.instanceOfRoomTypeShortInfoType = void 0;
const runtime_1 = require("../runtime");
const RatePlanRatingType_1 = require("./RatePlanRatingType");
const RoomFeaturesType_1 = require("./RoomFeaturesType");
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
        'accessible': !(0, runtime_1.exists)(json, 'accessible') ? undefined : json['accessible'],
        'building': !(0, runtime_1.exists)(json, 'building') ? undefined : json['building'],
        'houseKeeping': !(0, runtime_1.exists)(json, 'houseKeeping') ? undefined : json['houseKeeping'],
        'maximumOccupancy': !(0, runtime_1.exists)(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'meetingRoom': !(0, runtime_1.exists)(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'minimumOccupancy': !(0, runtime_1.exists)(json, 'minimumOccupancy') ? undefined : json['minimumOccupancy'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'roomAssignmentRating': !(0, runtime_1.exists)(json, 'roomAssignmentRating') ? undefined : (0, RatePlanRatingType_1.RatePlanRatingTypeFromJSON)(json['roomAssignmentRating']),
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (0, RoomFeaturesType_1.RoomFeaturesTypeFromJSON)(json['roomFeatures']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'smokingPreference': !(0, runtime_1.exists)(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'suite': !(0, runtime_1.exists)(json, 'suite') ? undefined : json['suite'],
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
        'accessible': value.accessible,
        'building': value.building,
        'houseKeeping': value.houseKeeping,
        'maximumOccupancy': value.maximumOccupancy,
        'meetingRoom': value.meetingRoom,
        'minimumOccupancy': value.minimumOccupancy,
        'pseudo': value.pseudo,
        'roomAssignmentRating': (0, RatePlanRatingType_1.RatePlanRatingTypeToJSON)(value.roomAssignmentRating),
        'roomClass': value.roomClass,
        'roomFeatures': (0, RoomFeaturesType_1.RoomFeaturesTypeToJSON)(value.roomFeatures),
        'roomType': value.roomType,
        'shortDescription': value.shortDescription,
        'smokingPreference': value.smokingPreference,
        'suite': value.suite,
    };
}
exports.RoomTypeShortInfoTypeToJSON = RoomTypeShortInfoTypeToJSON;
