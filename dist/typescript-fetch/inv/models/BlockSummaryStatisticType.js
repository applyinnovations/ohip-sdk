"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSummaryStatisticTypeToJSON = exports.BlockSummaryStatisticTypeFromJSONTyped = exports.BlockSummaryStatisticTypeFromJSON = exports.instanceOfBlockSummaryStatisticType = void 0;
const runtime_1 = require("../runtime");
const StatisticUnitsType_1 = require("./StatisticUnitsType");
const StatusSummaryStatisticType_1 = require("./StatusSummaryStatisticType");
/**
 * Check if a given object implements the BlockSummaryStatisticType interface.
 */
function instanceOfBlockSummaryStatisticType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockSummaryStatisticType = instanceOfBlockSummaryStatisticType;
function BlockSummaryStatisticTypeFromJSON(json) {
    return BlockSummaryStatisticTypeFromJSONTyped(json, false);
}
exports.BlockSummaryStatisticTypeFromJSON = BlockSummaryStatisticTypeFromJSON;
function BlockSummaryStatisticTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingSummaryStatistic': !(0, runtime_1.exists)(json, 'bookingSummaryStatistic') ? undefined : (0, StatisticUnitsType_1.StatisticUnitsTypeFromJSON)(json['bookingSummaryStatistic']),
        'dailyTargetsSummaryStatistic': !(0, runtime_1.exists)(json, 'dailyTargetsSummaryStatistic') ? undefined : (0, StatisticUnitsType_1.StatisticUnitsTypeFromJSON)(json['dailyTargetsSummaryStatistic']),
        'statisticDate': !(0, runtime_1.exists)(json, 'statisticDate') ? undefined : (new Date(json['statisticDate'])),
        'statusSummaryStatistic': !(0, runtime_1.exists)(json, 'statusSummaryStatistic') ? undefined : (0, StatusSummaryStatisticType_1.StatusSummaryStatisticTypeFromJSON)(json['statusSummaryStatistic']),
    };
}
exports.BlockSummaryStatisticTypeFromJSONTyped = BlockSummaryStatisticTypeFromJSONTyped;
function BlockSummaryStatisticTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingSummaryStatistic': (0, StatisticUnitsType_1.StatisticUnitsTypeToJSON)(value.bookingSummaryStatistic),
        'dailyTargetsSummaryStatistic': (0, StatisticUnitsType_1.StatisticUnitsTypeToJSON)(value.dailyTargetsSummaryStatistic),
        'statisticDate': value.statisticDate === undefined ? undefined : (value.statisticDate.toISOString().substring(0, 10)),
        'statusSummaryStatistic': (0, StatusSummaryStatisticType_1.StatusSummaryStatisticTypeToJSON)(value.statusSummaryStatistic),
    };
}
exports.BlockSummaryStatisticTypeToJSON = BlockSummaryStatisticTypeToJSON;