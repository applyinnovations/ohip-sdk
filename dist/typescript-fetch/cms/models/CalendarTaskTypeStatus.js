"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarTaskTypeStatusToJSON = exports.CalendarTaskTypeStatusFromJSONTyped = exports.CalendarTaskTypeStatusFromJSON = exports.instanceOfCalendarTaskTypeStatus = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CalendarTaskTypeStatus interface.
 */
function instanceOfCalendarTaskTypeStatus(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCalendarTaskTypeStatus = instanceOfCalendarTaskTypeStatus;
function CalendarTaskTypeStatusFromJSON(json) {
    return CalendarTaskTypeStatusFromJSONTyped(json, false);
}
exports.CalendarTaskTypeStatusFromJSON = CalendarTaskTypeStatusFromJSON;
function CalendarTaskTypeStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'completed': !(0, runtime_1.exists)(json, 'completed') ? undefined : json['completed'],
        'completedBy': !(0, runtime_1.exists)(json, 'completedBy') ? undefined : json['completedBy'],
        'completedOn': !(0, runtime_1.exists)(json, 'completedOn') ? undefined : (new Date(json['completedOn'])),
    };
}
exports.CalendarTaskTypeStatusFromJSONTyped = CalendarTaskTypeStatusFromJSONTyped;
function CalendarTaskTypeStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'completed': value.completed,
        'completedBy': value.completedBy,
        'completedOn': value.completedOn === undefined ? undefined : (value.completedOn.toISOString().substr(0, 10)),
    };
}
exports.CalendarTaskTypeStatusToJSON = CalendarTaskTypeStatusToJSON;
