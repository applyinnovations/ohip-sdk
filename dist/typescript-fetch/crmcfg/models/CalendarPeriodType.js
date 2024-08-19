"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarPeriodTypeToJSON = exports.CalendarPeriodTypeFromJSONTyped = exports.CalendarPeriodTypeFromJSON = exports.CalendarPeriodType = void 0;
/**
 * 12 month period based on starting month.
 * @export
 */
exports.CalendarPeriodType = {
    Calendar: 'Calendar',
    Rolling: 'Rolling'
};
function CalendarPeriodTypeFromJSON(json) {
    return CalendarPeriodTypeFromJSONTyped(json, false);
}
exports.CalendarPeriodTypeFromJSON = CalendarPeriodTypeFromJSON;
function CalendarPeriodTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CalendarPeriodTypeFromJSONTyped = CalendarPeriodTypeFromJSONTyped;
function CalendarPeriodTypeToJSON(value) {
    return value;
}
exports.CalendarPeriodTypeToJSON = CalendarPeriodTypeToJSON;
