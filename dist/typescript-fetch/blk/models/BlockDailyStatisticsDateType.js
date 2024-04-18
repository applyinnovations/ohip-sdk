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
exports.BlockDailyStatisticsDateTypeToJSON = exports.BlockDailyStatisticsDateTypeFromJSONTyped = exports.BlockDailyStatisticsDateTypeFromJSON = exports.instanceOfBlockDailyStatisticsDateType = void 0;
const runtime_1 = require("../runtime");
const BlockDailyRoomStatisticsType_1 = require("./BlockDailyRoomStatisticsType");
/**
 * Check if a given object implements the BlockDailyStatisticsDateType interface.
 */
function instanceOfBlockDailyStatisticsDateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockDailyStatisticsDateType = instanceOfBlockDailyStatisticsDateType;
function BlockDailyStatisticsDateTypeFromJSON(json) {
    return BlockDailyStatisticsDateTypeFromJSONTyped(json, false);
}
exports.BlockDailyStatisticsDateTypeFromJSON = BlockDailyStatisticsDateTypeFromJSON;
function BlockDailyStatisticsDateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'genericRoomTypeStatisticsList': !(0, runtime_1.exists)(json, 'genericRoomTypeStatisticsList') ? undefined : (json['genericRoomTypeStatisticsList'].map(BlockDailyRoomStatisticsType_1.BlockDailyRoomStatisticsTypeFromJSON)),
        'roomTypeStatisticsList': !(0, runtime_1.exists)(json, 'roomTypeStatisticsList') ? undefined : (json['roomTypeStatisticsList'].map(BlockDailyRoomStatisticsType_1.BlockDailyRoomStatisticsTypeFromJSON)),
    };
}
exports.BlockDailyStatisticsDateTypeFromJSONTyped = BlockDailyStatisticsDateTypeFromJSONTyped;
function BlockDailyStatisticsDateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'genericRoomTypeStatisticsList': value.genericRoomTypeStatisticsList === undefined ? undefined : (value.genericRoomTypeStatisticsList.map(BlockDailyRoomStatisticsType_1.BlockDailyRoomStatisticsTypeToJSON)),
        'roomTypeStatisticsList': value.roomTypeStatisticsList === undefined ? undefined : (value.roomTypeStatisticsList.map(BlockDailyRoomStatisticsType_1.BlockDailyRoomStatisticsTypeToJSON)),
    };
}
exports.BlockDailyStatisticsDateTypeToJSON = BlockDailyStatisticsDateTypeToJSON;