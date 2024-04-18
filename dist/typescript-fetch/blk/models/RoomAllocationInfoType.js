"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomAllocationInfoTypeToJSON = exports.RoomAllocationInfoTypeFromJSONTyped = exports.RoomAllocationInfoTypeFromJSON = exports.instanceOfRoomAllocationInfoType = void 0;
const runtime_1 = require("../runtime");
const BlockGridInvType_1 = require("./BlockGridInvType");
const RoomGridDetailsType_1 = require("./RoomGridDetailsType");
/**
 * Check if a given object implements the RoomAllocationInfoType interface.
 */
function instanceOfRoomAllocationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomAllocationInfoType = instanceOfRoomAllocationInfoType;
function RoomAllocationInfoTypeFromJSON(json) {
    return RoomAllocationInfoTypeFromJSONTyped(json, false);
}
exports.RoomAllocationInfoTypeFromJSON = RoomAllocationInfoTypeFromJSON;
function RoomAllocationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availableRoomGridInvSummary': !(0, runtime_1.exists)(json, 'availableRoomGridInvSummary') ? undefined : (json['availableRoomGridInvSummary'].map(BlockGridInvType_1.BlockGridInvTypeFromJSON)),
        'extendedStay': !(0, runtime_1.exists)(json, 'extendedStay') ? undefined : json['extendedStay'],
        'roomGridDetails': !(0, runtime_1.exists)(json, 'roomGridDetails') ? undefined : (json['roomGridDetails'].map(RoomGridDetailsType_1.RoomGridDetailsTypeFromJSON)),
        'roomGridInvSummary': !(0, runtime_1.exists)(json, 'roomGridInvSummary') ? undefined : (json['roomGridInvSummary'].map(BlockGridInvType_1.BlockGridInvTypeFromJSON)),
        'stayDate': !(0, runtime_1.exists)(json, 'stayDate') ? undefined : json['stayDate'],
    };
}
exports.RoomAllocationInfoTypeFromJSONTyped = RoomAllocationInfoTypeFromJSONTyped;
function RoomAllocationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availableRoomGridInvSummary': value.availableRoomGridInvSummary === undefined ? undefined : (value.availableRoomGridInvSummary.map(BlockGridInvType_1.BlockGridInvTypeToJSON)),
        'extendedStay': value.extendedStay,
        'roomGridDetails': value.roomGridDetails === undefined ? undefined : (value.roomGridDetails.map(RoomGridDetailsType_1.RoomGridDetailsTypeToJSON)),
        'roomGridInvSummary': value.roomGridInvSummary === undefined ? undefined : (value.roomGridInvSummary.map(BlockGridInvType_1.BlockGridInvTypeToJSON)),
        'stayDate': value.stayDate,
    };
}
exports.RoomAllocationInfoTypeToJSON = RoomAllocationInfoTypeToJSON;