"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeSpanTypeToJSON = exports.DateTimeSpanTypeFromJSONTyped = exports.DateTimeSpanTypeFromJSON = exports.instanceOfDateTimeSpanType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DateTimeSpanType interface.
 */
function instanceOfDateTimeSpanType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDateTimeSpanType = instanceOfDateTimeSpanType;
function DateTimeSpanTypeFromJSON(json) {
    return DateTimeSpanTypeFromJSONTyped(json, false);
}
exports.DateTimeSpanTypeFromJSON = DateTimeSpanTypeFromJSON;
function DateTimeSpanTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endDateTime': !(0, runtime_1.exists)(json, 'endDateTime') ? undefined : json['endDateTime'],
        'startDateTime': !(0, runtime_1.exists)(json, 'startDateTime') ? undefined : json['startDateTime'],
    };
}
exports.DateTimeSpanTypeFromJSONTyped = DateTimeSpanTypeFromJSONTyped;
function DateTimeSpanTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'endDateTime': value.endDateTime,
        'startDateTime': value.startDateTime,
    };
}
exports.DateTimeSpanTypeToJSON = DateTimeSpanTypeToJSON;
