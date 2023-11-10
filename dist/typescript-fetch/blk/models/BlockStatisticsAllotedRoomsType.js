"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatisticsAllotedRoomsTypeToJSON = exports.BlockStatisticsAllotedRoomsTypeFromJSONTyped = exports.BlockStatisticsAllotedRoomsTypeFromJSON = exports.instanceOfBlockStatisticsAllotedRoomsType = void 0;
const runtime_1 = require("../runtime");
const StatisticsRoomTypeInfoType_1 = require("./StatisticsRoomTypeInfoType");
/**
 * Check if a given object implements the BlockStatisticsAllotedRoomsType interface.
 */
function instanceOfBlockStatisticsAllotedRoomsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockStatisticsAllotedRoomsType = instanceOfBlockStatisticsAllotedRoomsType;
function BlockStatisticsAllotedRoomsTypeFromJSON(json) {
    return BlockStatisticsAllotedRoomsTypeFromJSONTyped(json, false);
}
exports.BlockStatisticsAllotedRoomsTypeFromJSON = BlockStatisticsAllotedRoomsTypeFromJSON;
function BlockStatisticsAllotedRoomsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : (json['roomTypes'].map(StatisticsRoomTypeInfoType_1.StatisticsRoomTypeInfoTypeFromJSON)),
    };
}
exports.BlockStatisticsAllotedRoomsTypeFromJSONTyped = BlockStatisticsAllotedRoomsTypeFromJSONTyped;
function BlockStatisticsAllotedRoomsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomTypes': value.roomTypes === undefined ? undefined : (value.roomTypes.map(StatisticsRoomTypeInfoType_1.StatisticsRoomTypeInfoTypeToJSON)),
    };
}
exports.BlockStatisticsAllotedRoomsTypeToJSON = BlockStatisticsAllotedRoomsTypeToJSON;
