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
exports.RevenueCategorySummaryTypeToJSON = exports.RevenueCategorySummaryTypeFromJSONTyped = exports.RevenueCategorySummaryTypeFromJSON = exports.instanceOfRevenueCategorySummaryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RevenueCategorySummaryType interface.
 */
function instanceOfRevenueCategorySummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRevenueCategorySummaryType = instanceOfRevenueCategorySummaryType;
function RevenueCategorySummaryTypeFromJSON(json) {
    return RevenueCategorySummaryTypeFromJSONTyped(json, false);
}
exports.RevenueCategorySummaryTypeFromJSON = RevenueCategorySummaryTypeFromJSON;
function RevenueCategorySummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
    };
}
exports.RevenueCategorySummaryTypeFromJSONTyped = RevenueCategorySummaryTypeFromJSONTyped;
function RevenueCategorySummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'code': value.code,
        'currencyCode': value.currencyCode,
    };
}
exports.RevenueCategorySummaryTypeToJSON = RevenueCategorySummaryTypeToJSON;
