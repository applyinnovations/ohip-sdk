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
exports.BlockStatisticsDetailTypeToJSON = exports.BlockStatisticsDetailTypeFromJSONTyped = exports.BlockStatisticsDetailTypeFromJSON = exports.instanceOfBlockStatisticsDetailType = void 0;
const runtime_1 = require("../runtime");
const BlockStatisticsDatesType_1 = require("./BlockStatisticsDatesType");
const StatisticsType_1 = require("./StatisticsType");
/**
 * Check if a given object implements the BlockStatisticsDetailType interface.
 */
function instanceOfBlockStatisticsDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockStatisticsDetailType = instanceOfBlockStatisticsDetailType;
function BlockStatisticsDetailTypeFromJSON(json) {
    return BlockStatisticsDetailTypeFromJSONTyped(json, false);
}
exports.BlockStatisticsDetailTypeFromJSON = BlockStatisticsDetailTypeFromJSON;
function BlockStatisticsDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statisticType': !(0, runtime_1.exists)(json, 'statisticType') ? undefined : (0, StatisticsType_1.StatisticsTypeFromJSON)(json['statisticType']),
        'statisticsDates': !(0, runtime_1.exists)(json, 'statisticsDates') ? undefined : (json['statisticsDates'].map(BlockStatisticsDatesType_1.BlockStatisticsDatesTypeFromJSON)),
    };
}
exports.BlockStatisticsDetailTypeFromJSONTyped = BlockStatisticsDetailTypeFromJSONTyped;
function BlockStatisticsDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'statisticType': (0, StatisticsType_1.StatisticsTypeToJSON)(value.statisticType),
        'statisticsDates': value.statisticsDates === undefined ? undefined : (value.statisticsDates.map(BlockStatisticsDatesType_1.BlockStatisticsDatesTypeToJSON)),
    };
}
exports.BlockStatisticsDetailTypeToJSON = BlockStatisticsDetailTypeToJSON;