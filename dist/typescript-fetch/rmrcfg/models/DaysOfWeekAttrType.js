"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeekAttrTypeToJSON = exports.DaysOfWeekAttrTypeFromJSONTyped = exports.DaysOfWeekAttrTypeFromJSON = exports.instanceOfDaysOfWeekAttrType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DaysOfWeekAttrType interface.
 */
function instanceOfDaysOfWeekAttrType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDaysOfWeekAttrType = instanceOfDaysOfWeekAttrType;
function DaysOfWeekAttrTypeFromJSON(json) {
    return DaysOfWeekAttrTypeFromJSONTyped(json, false);
}
exports.DaysOfWeekAttrTypeFromJSON = DaysOfWeekAttrTypeFromJSON;
function DaysOfWeekAttrTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.DaysOfWeekAttrTypeFromJSONTyped = DaysOfWeekAttrTypeFromJSONTyped;
function DaysOfWeekAttrTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.DaysOfWeekAttrTypeToJSON = DaysOfWeekAttrTypeToJSON;
