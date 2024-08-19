"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomOwnersListDetailsToJSON = exports.RoomOwnersListDetailsFromJSONTyped = exports.RoomOwnersListDetailsFromJSON = exports.instanceOfRoomOwnersListDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomOwnerInfoType_1 = require("./RoomOwnerInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RoomOwnersListDetails interface.
 */
function instanceOfRoomOwnersListDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomOwnersListDetails = instanceOfRoomOwnersListDetails;
function RoomOwnersListDetailsFromJSON(json) {
    return RoomOwnersListDetailsFromJSONTyped(json, false);
}
exports.RoomOwnersListDetailsFromJSON = RoomOwnersListDetailsFromJSON;
function RoomOwnersListDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'roomOwnerInfoTypeList': !(0, runtime_1.exists)(json, 'roomOwnerInfoTypeList') ? undefined : (json['roomOwnerInfoTypeList'].map(RoomOwnerInfoType_1.RoomOwnerInfoTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.RoomOwnersListDetailsFromJSONTyped = RoomOwnersListDetailsFromJSONTyped;
function RoomOwnersListDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'roomOwnerInfoTypeList': value.roomOwnerInfoTypeList === undefined ? undefined : (value.roomOwnerInfoTypeList.map(RoomOwnerInfoType_1.RoomOwnerInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalResults': value.totalResults,
    };
}
exports.RoomOwnersListDetailsToJSON = RoomOwnersListDetailsToJSON;
