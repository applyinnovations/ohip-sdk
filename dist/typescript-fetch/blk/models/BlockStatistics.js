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
exports.BlockStatisticsToJSON = exports.BlockStatisticsFromJSONTyped = exports.BlockStatisticsFromJSON = exports.instanceOfBlockStatistics = void 0;
const runtime_1 = require("../runtime");
const BlockStatisticsAllotedRoomsType_1 = require("./BlockStatisticsAllotedRoomsType");
const BlockStatisticsDetailsType_1 = require("./BlockStatisticsDetailsType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockStatistics interface.
 */
function instanceOfBlockStatistics(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockStatistics = instanceOfBlockStatistics;
function BlockStatisticsFromJSON(json) {
    return BlockStatisticsFromJSONTyped(json, false);
}
exports.BlockStatisticsFromJSON = BlockStatisticsFromJSON;
function BlockStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'masterInfo': !(0, runtime_1.exists)(json, 'masterInfo') ? undefined : (0, BlockStatisticsAllotedRoomsType_1.BlockStatisticsAllotedRoomsTypeFromJSON)(json['masterInfo']),
        'statisticsDetails': !(0, runtime_1.exists)(json, 'statisticsDetails') ? undefined : (0, BlockStatisticsDetailsType_1.BlockStatisticsDetailsTypeFromJSON)(json['statisticsDetails']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockStatisticsFromJSONTyped = BlockStatisticsFromJSONTyped;
function BlockStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'masterInfo': (0, BlockStatisticsAllotedRoomsType_1.BlockStatisticsAllotedRoomsTypeToJSON)(value.masterInfo),
        'statisticsDetails': (0, BlockStatisticsDetailsType_1.BlockStatisticsDetailsTypeToJSON)(value.statisticsDetails),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockStatisticsToJSON = BlockStatisticsToJSON;
