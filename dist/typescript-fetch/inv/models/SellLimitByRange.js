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
exports.SellLimitByRangeToJSON = exports.SellLimitByRangeFromJSONTyped = exports.SellLimitByRangeFromJSON = exports.instanceOfSellLimitByRange = void 0;
const runtime_1 = require("../runtime");
const SellLimitByDateRangeType_1 = require("./SellLimitByDateRangeType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the SellLimitByRange interface.
 */
function instanceOfSellLimitByRange(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSellLimitByRange = instanceOfSellLimitByRange;
function SellLimitByRangeFromJSON(json) {
    return SellLimitByRangeFromJSONTyped(json, false);
}
exports.SellLimitByRangeFromJSON = SellLimitByRangeFromJSON;
function SellLimitByRangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sellLimitsByDateRange': !(0, runtime_1.exists)(json, 'sellLimitsByDateRange') ? undefined : (json['sellLimitsByDateRange'].map(SellLimitByDateRangeType_1.SellLimitByDateRangeTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.SellLimitByRangeFromJSONTyped = SellLimitByRangeFromJSONTyped;
function SellLimitByRangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sellLimitsByDateRange': value.sellLimitsByDateRange === undefined ? undefined : (value.sellLimitsByDateRange.map(SellLimitByDateRangeType_1.SellLimitByDateRangeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.SellLimitByRangeToJSON = SellLimitByRangeToJSON;
