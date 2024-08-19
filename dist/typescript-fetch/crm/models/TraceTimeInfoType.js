"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceTimeInfoTypeToJSON = exports.TraceTimeInfoTypeFromJSONTyped = exports.TraceTimeInfoTypeFromJSON = exports.instanceOfTraceTimeInfoType = void 0;
const runtime_1 = require("../runtime");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
/**
 * Check if a given object implements the TraceTimeInfoType interface.
 */
function instanceOfTraceTimeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTraceTimeInfoType = instanceOfTraceTimeInfoType;
function TraceTimeInfoTypeFromJSON(json) {
    return TraceTimeInfoTypeFromJSONTyped(json, false);
}
exports.TraceTimeInfoTypeFromJSON = TraceTimeInfoTypeFromJSON;
function TraceTimeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateTimeSpan': !(0, runtime_1.exists)(json, 'dateTimeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['dateTimeSpan']),
        'enteredBy': !(0, runtime_1.exists)(json, 'enteredBy') ? undefined : json['enteredBy'],
        'traceOn': !(0, runtime_1.exists)(json, 'traceOn') ? undefined : json['traceOn'],
        'traceTime': !(0, runtime_1.exists)(json, 'traceTime') ? undefined : json['traceTime'],
    };
}
exports.TraceTimeInfoTypeFromJSONTyped = TraceTimeInfoTypeFromJSONTyped;
function TraceTimeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateTimeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.dateTimeSpan),
        'enteredBy': value.enteredBy,
        'traceOn': value.traceOn,
        'traceTime': value.traceTime,
    };
}
exports.TraceTimeInfoTypeToJSON = TraceTimeInfoTypeToJSON;
