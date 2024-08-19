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
exports.RoomStatisticsTypeToJSON = exports.RoomStatisticsTypeFromJSONTyped = exports.RoomStatisticsTypeFromJSON = exports.instanceOfRoomStatisticsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomStatisticsType interface.
 */
function instanceOfRoomStatisticsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomStatisticsType = instanceOfRoomStatisticsType;
function RoomStatisticsTypeFromJSON(json) {
    return RoomStatisticsTypeFromJSONTyped(json, false);
}
exports.RoomStatisticsTypeFromJSON = RoomStatisticsTypeFromJSON;
function RoomStatisticsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageRate': !(0, runtime_1.exists)(json, 'averageRate') ? undefined : json['averageRate'],
        'roomCount': !(0, runtime_1.exists)(json, 'roomCount') ? undefined : json['roomCount'],
        'roomRevenue': !(0, runtime_1.exists)(json, 'roomRevenue') ? undefined : json['roomRevenue'],
    };
}
exports.RoomStatisticsTypeFromJSONTyped = RoomStatisticsTypeFromJSONTyped;
function RoomStatisticsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageRate': value.averageRate,
        'roomCount': value.roomCount,
        'roomRevenue': value.roomRevenue,
    };
}
exports.RoomStatisticsTypeToJSON = RoomStatisticsTypeToJSON;
