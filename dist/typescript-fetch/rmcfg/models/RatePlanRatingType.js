"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanRatingTypeToJSON = exports.RatePlanRatingTypeFromJSONTyped = exports.RatePlanRatingTypeFromJSON = exports.RatePlanRatingType = void 0;
/**
 * Possible Rate plan rating values.
 * @export
 */
exports.RatePlanRatingType = {
    MostImportant: 'MostImportant',
    Important: 'Important',
    SomewhatImportant: 'SomewhatImportant',
    LessImportant: 'LessImportant',
    LeastImportant: 'LeastImportant',
    NoValueSet: 'NoValueSet'
};
function RatePlanRatingTypeFromJSON(json) {
    return RatePlanRatingTypeFromJSONTyped(json, false);
}
exports.RatePlanRatingTypeFromJSON = RatePlanRatingTypeFromJSON;
function RatePlanRatingTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RatePlanRatingTypeFromJSONTyped = RatePlanRatingTypeFromJSONTyped;
function RatePlanRatingTypeToJSON(value) {
    return value;
}
exports.RatePlanRatingTypeToJSON = RatePlanRatingTypeToJSON;