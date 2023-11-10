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
exports.BlockStatisticsDateTypeToJSON = exports.BlockStatisticsDateTypeFromJSONTyped = exports.BlockStatisticsDateTypeFromJSON = exports.instanceOfBlockStatisticsDateType = void 0;
const runtime_1 = require("../runtime");
const BlockRoomStatisticsListType_1 = require("./BlockRoomStatisticsListType");
/**
 * Check if a given object implements the BlockStatisticsDateType interface.
 */
function instanceOfBlockStatisticsDateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockStatisticsDateType = instanceOfBlockStatisticsDateType;
function BlockStatisticsDateTypeFromJSON(json) {
    return BlockStatisticsDateTypeFromJSONTyped(json, false);
}
exports.BlockStatisticsDateTypeFromJSON = BlockStatisticsDateTypeFromJSON;
function BlockStatisticsDateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'roomStatisticsList': !(0, runtime_1.exists)(json, 'roomStatisticsList') ? undefined : (0, BlockRoomStatisticsListType_1.BlockRoomStatisticsListTypeFromJSON)(json['roomStatisticsList']),
        'total': !(0, runtime_1.exists)(json, 'total') ? undefined : json['total'],
    };
}
exports.BlockStatisticsDateTypeFromJSONTyped = BlockStatisticsDateTypeFromJSONTyped;
function BlockStatisticsDateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'roomStatisticsList': (0, BlockRoomStatisticsListType_1.BlockRoomStatisticsListTypeToJSON)(value.roomStatisticsList),
        'total': value.total,
    };
}
exports.BlockStatisticsDateTypeToJSON = BlockStatisticsDateTypeToJSON;
