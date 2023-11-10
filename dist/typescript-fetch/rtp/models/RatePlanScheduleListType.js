"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanScheduleListTypeToJSON = exports.RatePlanScheduleListTypeFromJSONTyped = exports.RatePlanScheduleListTypeFromJSON = exports.instanceOfRatePlanScheduleListType = void 0;
const runtime_1 = require("../runtime");
const RatePlanSchedulesType_1 = require("./RatePlanSchedulesType");
/**
 * Check if a given object implements the RatePlanScheduleListType interface.
 */
function instanceOfRatePlanScheduleListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanScheduleListType = instanceOfRatePlanScheduleListType;
function RatePlanScheduleListTypeFromJSON(json) {
    return RatePlanScheduleListTypeFromJSONTyped(json, false);
}
exports.RatePlanScheduleListTypeFromJSON = RatePlanScheduleListTypeFromJSON;
function RatePlanScheduleListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanSchedule': !(0, runtime_1.exists)(json, 'ratePlanSchedule') ? undefined : (json['ratePlanSchedule'].map(RatePlanSchedulesType_1.RatePlanSchedulesTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.RatePlanScheduleListTypeFromJSONTyped = RatePlanScheduleListTypeFromJSONTyped;
function RatePlanScheduleListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelId': value.hotelId,
        'ratePlanCode': value.ratePlanCode,
        'ratePlanSchedule': value.ratePlanSchedule === undefined ? undefined : (value.ratePlanSchedule.map(RatePlanSchedulesType_1.RatePlanSchedulesTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.RatePlanScheduleListTypeToJSON = RatePlanScheduleListTypeToJSON;
