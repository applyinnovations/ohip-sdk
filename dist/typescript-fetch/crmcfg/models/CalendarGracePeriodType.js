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
exports.CalendarGracePeriodTypeToJSON = exports.CalendarGracePeriodTypeFromJSONTyped = exports.CalendarGracePeriodTypeFromJSON = exports.CalendarGracePeriodType = void 0;
/**
 * Five Year period
 * @export
 */
exports.CalendarGracePeriodType = {
    NoGracePeriod: 'NoGracePeriod',
    OneYear: 'OneYear',
    TwoYears: 'TwoYears',
    ThreeYears: 'ThreeYears',
    FourYears: 'FourYears',
    FiveYears: 'FiveYears'
};
function CalendarGracePeriodTypeFromJSON(json) {
    return CalendarGracePeriodTypeFromJSONTyped(json, false);
}
exports.CalendarGracePeriodTypeFromJSON = CalendarGracePeriodTypeFromJSON;
function CalendarGracePeriodTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CalendarGracePeriodTypeFromJSONTyped = CalendarGracePeriodTypeFromJSONTyped;
function CalendarGracePeriodTypeToJSON(value) {
    return value;
}
exports.CalendarGracePeriodTypeToJSON = CalendarGracePeriodTypeToJSON;