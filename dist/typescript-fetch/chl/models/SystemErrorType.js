"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemErrorTypeToJSON = exports.SystemErrorTypeFromJSONTyped = exports.SystemErrorTypeFromJSON = exports.instanceOfSystemErrorType = void 0;
const runtime_1 = require("../runtime");
const SystemErrorBookingResponseType_1 = require("./SystemErrorBookingResponseType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the SystemErrorType interface.
 */
function instanceOfSystemErrorType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSystemErrorType = instanceOfSystemErrorType;
function SystemErrorTypeFromJSON(json) {
    return SystemErrorTypeFromJSONTyped(json, false);
}
exports.SystemErrorTypeFromJSON = SystemErrorTypeFromJSON;
function SystemErrorTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingResponse': !(0, runtime_1.exists)(json, 'bookingResponse') ? undefined : (0, SystemErrorBookingResponseType_1.SystemErrorBookingResponseTypeFromJSON)(json['bookingResponse']),
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['dateRange']),
        'errorCode': !(0, runtime_1.exists)(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !(0, runtime_1.exists)(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorPrefix': !(0, runtime_1.exists)(json, 'errorPrefix') ? undefined : json['errorPrefix'],
        'errorSuffix': !(0, runtime_1.exists)(json, 'errorSuffix') ? undefined : json['errorSuffix'],
        'manualProcess': !(0, runtime_1.exists)(json, 'manualProcess') ? undefined : json['manualProcess'],
    };
}
exports.SystemErrorTypeFromJSONTyped = SystemErrorTypeFromJSONTyped;
function SystemErrorTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingResponse': (0, SystemErrorBookingResponseType_1.SystemErrorBookingResponseTypeToJSON)(value.bookingResponse),
        'dateRange': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.dateRange),
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorPrefix': value.errorPrefix,
        'errorSuffix': value.errorSuffix,
        'manualProcess': value.manualProcess,
    };
}
exports.SystemErrorTypeToJSON = SystemErrorTypeToJSON;