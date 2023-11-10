"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRatingsToJSON = exports.RoomRatingsFromJSONTyped = exports.RoomRatingsFromJSON = exports.instanceOfRoomRatings = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomRatingsInfoType_1 = require("./RoomRatingsInfoType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RoomRatings interface.
 */
function instanceOfRoomRatings(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomRatings = instanceOfRoomRatings;
function RoomRatingsFromJSON(json) {
    return RoomRatingsFromJSONTyped(json, false);
}
exports.RoomRatingsFromJSON = RoomRatingsFromJSON;
function RoomRatingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'roomRatingsInfo': !(0, runtime_1.exists)(json, 'roomRatingsInfo') ? undefined : (0, RoomRatingsInfoType_1.RoomRatingsInfoTypeFromJSON)(json['roomRatingsInfo']),
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RoomRatingsFromJSONTyped = RoomRatingsFromJSONTyped;
function RoomRatingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'offset': value.offset,
        'roomRatingsInfo': (0, RoomRatingsInfoType_1.RoomRatingsInfoTypeToJSON)(value.roomRatingsInfo),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RoomRatingsToJSON = RoomRatingsToJSON;
