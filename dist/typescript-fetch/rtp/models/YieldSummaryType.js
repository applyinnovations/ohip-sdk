"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldSummaryTypeToJSON = exports.YieldSummaryTypeFromJSONTyped = exports.YieldSummaryTypeFromJSON = exports.instanceOfYieldSummaryType = void 0;
const runtime_1 = require("../runtime");
const AdjustmentCategoryType_1 = require("./AdjustmentCategoryType");
/**
 * Check if a given object implements the YieldSummaryType interface.
 */
function instanceOfYieldSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfYieldSummaryType = instanceOfYieldSummaryType;
function YieldSummaryTypeFromJSON(json) {
    return YieldSummaryTypeFromJSONTyped(json, false);
}
exports.YieldSummaryTypeFromJSON = YieldSummaryTypeFromJSON;
function YieldSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustmentCategory': !(0, runtime_1.exists)(json, 'adjustmentCategory') ? undefined : (0, AdjustmentCategoryType_1.AdjustmentCategoryTypeFromJSON)(json['adjustmentCategory']),
        'totalAmount': !(0, runtime_1.exists)(json, 'totalAmount') ? undefined : json['totalAmount'],
    };
}
exports.YieldSummaryTypeFromJSONTyped = YieldSummaryTypeFromJSONTyped;
function YieldSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustmentCategory': (0, AdjustmentCategoryType_1.AdjustmentCategoryTypeToJSON)(value.adjustmentCategory),
        'totalAmount': value.totalAmount,
    };
}
exports.YieldSummaryTypeToJSON = YieldSummaryTypeToJSON;
