"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomAllocationDetailsTypeToJSON = exports.RoomAllocationDetailsTypeFromJSONTyped = exports.RoomAllocationDetailsTypeFromJSON = exports.instanceOfRoomAllocationDetailsType = void 0;
const runtime_1 = require("../runtime");
const BlockActualRevenueType_1 = require("./BlockActualRevenueType");
const BlockGridInvType_1 = require("./BlockGridInvType");
const BlockGridRatesType_1 = require("./BlockGridRatesType");
const BlockPotenitalRevenueType_1 = require("./BlockPotenitalRevenueType");
/**
 * Check if a given object implements the RoomAllocationDetailsType interface.
 */
function instanceOfRoomAllocationDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomAllocationDetailsType = instanceOfRoomAllocationDetailsType;
function RoomAllocationDetailsTypeFromJSON(json) {
    return RoomAllocationDetailsTypeFromJSONTyped(json, false);
}
exports.RoomAllocationDetailsTypeFromJSON = RoomAllocationDetailsTypeFromJSON;
function RoomAllocationDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualRevenue': !(0, runtime_1.exists)(json, 'actualRevenue') ? undefined : (0, BlockActualRevenueType_1.BlockActualRevenueTypeFromJSON)(json['actualRevenue']),
        'currentRooms': !(0, runtime_1.exists)(json, 'currentRooms') ? undefined : json['currentRooms'],
        'inventory': !(0, runtime_1.exists)(json, 'inventory') ? undefined : (0, BlockGridInvType_1.BlockGridInvTypeFromJSON)(json['inventory']),
        'originalRooms': !(0, runtime_1.exists)(json, 'originalRooms') ? undefined : json['originalRooms'],
        'pickupRooms': !(0, runtime_1.exists)(json, 'pickupRooms') ? undefined : json['pickupRooms'],
        'potentialRevenue': !(0, runtime_1.exists)(json, 'potentialRevenue') ? undefined : (0, BlockPotenitalRevenueType_1.BlockPotenitalRevenueTypeFromJSON)(json['potentialRevenue']),
        'rates': !(0, runtime_1.exists)(json, 'rates') ? undefined : (0, BlockGridRatesType_1.BlockGridRatesTypeFromJSON)(json['rates']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
    };
}
exports.RoomAllocationDetailsTypeFromJSONTyped = RoomAllocationDetailsTypeFromJSONTyped;
function RoomAllocationDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualRevenue': (0, BlockActualRevenueType_1.BlockActualRevenueTypeToJSON)(value.actualRevenue),
        'currentRooms': value.currentRooms,
        'inventory': (0, BlockGridInvType_1.BlockGridInvTypeToJSON)(value.inventory),
        'originalRooms': value.originalRooms,
        'pickupRooms': value.pickupRooms,
        'potentialRevenue': (0, BlockPotenitalRevenueType_1.BlockPotenitalRevenueTypeToJSON)(value.potentialRevenue),
        'rates': (0, BlockGridRatesType_1.BlockGridRatesTypeToJSON)(value.rates),
        'roomType': value.roomType,
    };
}
exports.RoomAllocationDetailsTypeToJSON = RoomAllocationDetailsTypeToJSON;
