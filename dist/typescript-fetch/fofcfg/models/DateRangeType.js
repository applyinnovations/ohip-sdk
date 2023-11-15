"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangeTypeToJSON = exports.DateRangeTypeFromJSONTyped = exports.DateRangeTypeFromJSON = exports.instanceOfDateRangeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DateRangeType interface.
 */
function instanceOfDateRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDateRangeType = instanceOfDateRangeType;
function DateRangeTypeFromJSON(json) {
    return DateRangeTypeFromJSONTyped(json, false);
}
exports.DateRangeTypeFromJSON = DateRangeTypeFromJSON;
function DateRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.DateRangeTypeFromJSONTyped = DateRangeTypeFromJSONTyped;
function DateRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end,
        'start': value.start,
    };
}
exports.DateRangeTypeToJSON = DateRangeTypeToJSON;
