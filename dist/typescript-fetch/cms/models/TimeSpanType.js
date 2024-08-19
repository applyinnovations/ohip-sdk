"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSpanTypeToJSON = exports.TimeSpanTypeFromJSONTyped = exports.TimeSpanTypeFromJSON = exports.instanceOfTimeSpanType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TimeSpanType interface.
 */
function instanceOfTimeSpanType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTimeSpanType = instanceOfTimeSpanType;
function TimeSpanTypeFromJSON(json) {
    return TimeSpanTypeFromJSONTyped(json, false);
}
exports.TimeSpanTypeFromJSON = TimeSpanTypeFromJSON;
function TimeSpanTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'duration': !(0, runtime_1.exists)(json, 'duration') ? undefined : json['duration'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.TimeSpanTypeFromJSONTyped = TimeSpanTypeFromJSONTyped;
function TimeSpanTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'duration': value.duration,
        'endDate': value.endDate,
        'startDate': value.startDate,
    };
}
exports.TimeSpanTypeToJSON = TimeSpanTypeToJSON;
