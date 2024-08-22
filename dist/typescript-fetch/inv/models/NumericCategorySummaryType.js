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
exports.NumericCategorySummaryTypeToJSON = exports.NumericCategorySummaryTypeFromJSONTyped = exports.NumericCategorySummaryTypeFromJSON = exports.instanceOfNumericCategorySummaryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NumericCategorySummaryType interface.
 */
function instanceOfNumericCategorySummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNumericCategorySummaryType = instanceOfNumericCategorySummaryType;
function NumericCategorySummaryTypeFromJSON(json) {
    return NumericCategorySummaryTypeFromJSONTyped(json, false);
}
exports.NumericCategorySummaryTypeFromJSON = NumericCategorySummaryTypeFromJSON;
function NumericCategorySummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.NumericCategorySummaryTypeFromJSONTyped = NumericCategorySummaryTypeFromJSONTyped;
function NumericCategorySummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'value': value.value,
    };
}
exports.NumericCategorySummaryTypeToJSON = NumericCategorySummaryTypeToJSON;
