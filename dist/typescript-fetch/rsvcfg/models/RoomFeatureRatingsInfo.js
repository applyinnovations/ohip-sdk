"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomFeatureRatingsInfoToJSON = exports.RoomFeatureRatingsInfoFromJSONTyped = exports.RoomFeatureRatingsInfoFromJSON = exports.instanceOfRoomFeatureRatingsInfo = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomFeatureRatingInfoType_1 = require("./RoomFeatureRatingInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RoomFeatureRatingsInfo interface.
 */
function instanceOfRoomFeatureRatingsInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomFeatureRatingsInfo = instanceOfRoomFeatureRatingsInfo;
function RoomFeatureRatingsInfoFromJSON(json) {
    return RoomFeatureRatingsInfoFromJSONTyped(json, false);
}
exports.RoomFeatureRatingsInfoFromJSON = RoomFeatureRatingsInfoFromJSON;
function RoomFeatureRatingsInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'roomFeatureRatingsInfo': !(0, runtime_1.exists)(json, 'roomFeatureRatingsInfo') ? undefined : (json['roomFeatureRatingsInfo'].map(RoomFeatureRatingInfoType_1.RoomFeatureRatingInfoTypeFromJSON)),
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RoomFeatureRatingsInfoFromJSONTyped = RoomFeatureRatingsInfoFromJSONTyped;
function RoomFeatureRatingsInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'offset': value.offset,
        'roomFeatureRatingsInfo': value.roomFeatureRatingsInfo === undefined ? undefined : (value.roomFeatureRatingsInfo.map(RoomFeatureRatingInfoType_1.RoomFeatureRatingInfoTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RoomFeatureRatingsInfoToJSON = RoomFeatureRatingsInfoToJSON;