"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSpanDaysOfWeekTypeToJSON = exports.TimeSpanDaysOfWeekTypeFromJSONTyped = exports.TimeSpanDaysOfWeekTypeFromJSON = exports.instanceOfTimeSpanDaysOfWeekType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the TimeSpanDaysOfWeekType interface.
 */
function instanceOfTimeSpanDaysOfWeekType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTimeSpanDaysOfWeekType = instanceOfTimeSpanDaysOfWeekType;
function TimeSpanDaysOfWeekTypeFromJSON(json) {
    return TimeSpanDaysOfWeekTypeFromJSONTyped(json, false);
}
exports.TimeSpanDaysOfWeekTypeFromJSON = TimeSpanDaysOfWeekTypeFromJSON;
function TimeSpanDaysOfWeekTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDates': !(0, runtime_1.exists)(json, 'blockDates') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['blockDates']),
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.TimeSpanDaysOfWeekTypeFromJSONTyped = TimeSpanDaysOfWeekTypeFromJSONTyped;
function TimeSpanDaysOfWeekTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockDates': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.blockDates),
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.TimeSpanDaysOfWeekTypeToJSON = TimeSpanDaysOfWeekTypeToJSON;
