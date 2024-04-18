"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticCodeTypeToJSON = exports.StatisticCodeTypeFromJSONTyped = exports.StatisticCodeTypeFromJSON = exports.instanceOfStatisticCodeType = void 0;
const runtime_1 = require("../runtime");
const StatisticSetType_1 = require("./StatisticSetType");
/**
 * Check if a given object implements the StatisticCodeType interface.
 */
function instanceOfStatisticCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStatisticCodeType = instanceOfStatisticCodeType;
function StatisticCodeTypeFromJSON(json) {
    return StatisticCodeTypeFromJSONTyped(json, false);
}
exports.StatisticCodeTypeFromJSON = StatisticCodeTypeFromJSON;
function StatisticCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'statCategoryCode': !(0, runtime_1.exists)(json, 'statCategoryCode') ? undefined : json['statCategoryCode'],
        'statCode': !(0, runtime_1.exists)(json, 'statCode') ? undefined : json['statCode'],
        'statCodeClass': !(0, runtime_1.exists)(json, 'statCodeClass') ? undefined : json['statCodeClass'],
        'statisticDate': !(0, runtime_1.exists)(json, 'statisticDate') ? undefined : (json['statisticDate'].map(StatisticSetType_1.StatisticSetTypeFromJSON)),
    };
}
exports.StatisticCodeTypeFromJSONTyped = StatisticCodeTypeFromJSONTyped;
function StatisticCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'statCategoryCode': value.statCategoryCode,
        'statCode': value.statCode,
        'statCodeClass': value.statCodeClass,
        'statisticDate': value.statisticDate === undefined ? undefined : (value.statisticDate.map(StatisticSetType_1.StatisticSetTypeToJSON)),
    };
}
exports.StatisticCodeTypeToJSON = StatisticCodeTypeToJSON;