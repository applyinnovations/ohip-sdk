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
exports.StatisticTypeToJSON = exports.StatisticTypeFromJSONTyped = exports.StatisticTypeFromJSON = exports.instanceOfStatisticType = void 0;
const runtime_1 = require("../runtime");
const StatisticCodeType_1 = require("./StatisticCodeType");
/**
 * Check if a given object implements the StatisticType interface.
 */
function instanceOfStatisticType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStatisticType = instanceOfStatisticType;
function StatisticTypeFromJSON(json) {
    return StatisticTypeFromJSONTyped(json, false);
}
exports.StatisticTypeFromJSON = StatisticTypeFromJSON;
function StatisticTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'reportCode': !(0, runtime_1.exists)(json, 'reportCode') ? undefined : json['reportCode'],
        'statistics': !(0, runtime_1.exists)(json, 'statistics') ? undefined : (json['statistics'].map(StatisticCodeType_1.StatisticCodeTypeFromJSON)),
    };
}
exports.StatisticTypeFromJSONTyped = StatisticTypeFromJSONTyped;
function StatisticTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'hotelName': value.hotelName,
        'reportCode': value.reportCode,
        'statistics': value.statistics === undefined ? undefined : (value.statistics.map(StatisticCodeType_1.StatisticCodeTypeToJSON)),
    };
}
exports.StatisticTypeToJSON = StatisticTypeToJSON;