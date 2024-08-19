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
exports.HousekeepingBoardHousekeepingRoomInfoToJSON = exports.HousekeepingBoardHousekeepingRoomInfoFromJSONTyped = exports.HousekeepingBoardHousekeepingRoomInfoFromJSON = exports.instanceOfHousekeepingBoardHousekeepingRoomInfo = void 0;
const runtime_1 = require("../runtime");
const HotelRoomsType_1 = require("./HotelRoomsType");
/**
 * Check if a given object implements the HousekeepingBoardHousekeepingRoomInfo interface.
 */
function instanceOfHousekeepingBoardHousekeepingRoomInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingBoardHousekeepingRoomInfo = instanceOfHousekeepingBoardHousekeepingRoomInfo;
function HousekeepingBoardHousekeepingRoomInfoFromJSON(json) {
    return HousekeepingBoardHousekeepingRoomInfoFromJSONTyped(json, false);
}
exports.HousekeepingBoardHousekeepingRoomInfoFromJSON = HousekeepingBoardHousekeepingRoomInfoFromJSON;
function HousekeepingBoardHousekeepingRoomInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'housekeepingRooms': !(0, runtime_1.exists)(json, 'housekeepingRooms') ? undefined : (0, HotelRoomsType_1.HotelRoomsTypeFromJSON)(json['housekeepingRooms']),
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.HousekeepingBoardHousekeepingRoomInfoFromJSONTyped = HousekeepingBoardHousekeepingRoomInfoFromJSONTyped;
function HousekeepingBoardHousekeepingRoomInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'housekeepingRooms': (0, HotelRoomsType_1.HotelRoomsTypeToJSON)(value.housekeepingRooms),
        'limit': value.limit,
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}
exports.HousekeepingBoardHousekeepingRoomInfoToJSON = HousekeepingBoardHousekeepingRoomInfoToJSON;
