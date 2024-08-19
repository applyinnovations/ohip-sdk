"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeekTypeToJSON = exports.DaysOfWeekTypeFromJSONTyped = exports.DaysOfWeekTypeFromJSON = exports.DaysOfWeekType = void 0;
/**
 * Allowed values for the days of week type.
 * @export
 */
exports.DaysOfWeekType = {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday'
};
function DaysOfWeekTypeFromJSON(json) {
    return DaysOfWeekTypeFromJSONTyped(json, false);
}
exports.DaysOfWeekTypeFromJSON = DaysOfWeekTypeFromJSON;
function DaysOfWeekTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.DaysOfWeekTypeFromJSONTyped = DaysOfWeekTypeFromJSONTyped;
function DaysOfWeekTypeToJSON(value) {
    return value;
}
exports.DaysOfWeekTypeToJSON = DaysOfWeekTypeToJSON;
