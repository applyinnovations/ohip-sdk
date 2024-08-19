"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportScheduleEODRepeatIntervalTypeToJSON = exports.ExportScheduleEODRepeatIntervalTypeFromJSONTyped = exports.ExportScheduleEODRepeatIntervalTypeFromJSON = exports.ExportScheduleEODRepeatIntervalType = void 0;
/**
 * Frequency for which export schedules needs to be run during EOD
 * @export
 */
exports.ExportScheduleEODRepeatIntervalType = {
    Daily: 'Daily',
    Weekly: 'Weekly',
    Monthly: 'Monthly',
    Yearly: 'Yearly'
};
function ExportScheduleEODRepeatIntervalTypeFromJSON(json) {
    return ExportScheduleEODRepeatIntervalTypeFromJSONTyped(json, false);
}
exports.ExportScheduleEODRepeatIntervalTypeFromJSON = ExportScheduleEODRepeatIntervalTypeFromJSON;
function ExportScheduleEODRepeatIntervalTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ExportScheduleEODRepeatIntervalTypeFromJSONTyped = ExportScheduleEODRepeatIntervalTypeFromJSONTyped;
function ExportScheduleEODRepeatIntervalTypeToJSON(value) {
    return value;
}
exports.ExportScheduleEODRepeatIntervalTypeToJSON = ExportScheduleEODRepeatIntervalTypeToJSON;
