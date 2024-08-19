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
exports.StatusStatisticTypeToJSON = exports.StatusStatisticTypeFromJSONTyped = exports.StatusStatisticTypeFromJSON = exports.instanceOfStatusStatisticType = void 0;
const runtime_1 = require("../runtime");
const StatisticUnitType_1 = require("./StatisticUnitType");
/**
 * Check if a given object implements the StatusStatisticType interface.
 */
function instanceOfStatusStatisticType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStatusStatisticType = instanceOfStatusStatisticType;
function StatusStatisticTypeFromJSON(json) {
    return StatusStatisticTypeFromJSONTyped(json, false);
}
exports.StatusStatisticTypeFromJSON = StatusStatisticTypeFromJSON;
function StatusStatisticTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statisticUnit': !(0, runtime_1.exists)(json, 'statisticUnit') ? undefined : (json['statisticUnit'].map(StatisticUnitType_1.StatisticUnitTypeFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.StatusStatisticTypeFromJSONTyped = StatusStatisticTypeFromJSONTyped;
function StatusStatisticTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'statisticUnit': value.statisticUnit === undefined ? undefined : (value.statisticUnit.map(StatisticUnitType_1.StatisticUnitTypeToJSON)),
        'status': value.status,
    };
}
exports.StatusStatisticTypeToJSON = StatusStatisticTypeToJSON;
