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
exports.BlockRateProtectionTypeToJSON = exports.BlockRateProtectionTypeFromJSONTyped = exports.BlockRateProtectionTypeFromJSON = exports.instanceOfBlockRateProtectionType = void 0;
const runtime_1 = require("../runtime");
const DatesType_1 = require("./DatesType");
const RateProtectionType_1 = require("./RateProtectionType");
/**
 * Check if a given object implements the BlockRateProtectionType interface.
 */
function instanceOfBlockRateProtectionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRateProtectionType = instanceOfBlockRateProtectionType;
function BlockRateProtectionTypeFromJSON(json) {
    return BlockRateProtectionTypeFromJSONTyped(json, false);
}
exports.BlockRateProtectionTypeFromJSON = BlockRateProtectionTypeFromJSON;
function BlockRateProtectionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, RateProtectionType_1.RateProtectionTypeFromJSON)(json['criteria']),
        'protectedDates': !(0, runtime_1.exists)(json, 'protectedDates') ? undefined : (0, DatesType_1.DatesTypeFromJSON)(json['protectedDates']),
    };
}
exports.BlockRateProtectionTypeFromJSONTyped = BlockRateProtectionTypeFromJSONTyped;
function BlockRateProtectionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, RateProtectionType_1.RateProtectionTypeToJSON)(value.criteria),
        'protectedDates': (0, DatesType_1.DatesTypeToJSON)(value.protectedDates),
    };
}
exports.BlockRateProtectionTypeToJSON = BlockRateProtectionTypeToJSON;
