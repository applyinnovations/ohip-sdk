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
exports.PolicyDeadlineTypeToJSON = exports.PolicyDeadlineTypeFromJSONTyped = exports.PolicyDeadlineTypeFromJSON = exports.instanceOfPolicyDeadlineType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PolicyDeadlineType interface.
 */
function instanceOfPolicyDeadlineType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPolicyDeadlineType = instanceOfPolicyDeadlineType;
function PolicyDeadlineTypeFromJSON(json) {
    return PolicyDeadlineTypeFromJSONTyped(json, false);
}
exports.PolicyDeadlineTypeFromJSON = PolicyDeadlineTypeFromJSON;
function PolicyDeadlineTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'absoluteDeadline': !(0, runtime_1.exists)(json, 'absoluteDeadline') ? undefined : json['absoluteDeadline'],
        'offsetDropTime': !(0, runtime_1.exists)(json, 'offsetDropTime') ? undefined : json['offsetDropTime'],
        'offsetFromArrival': !(0, runtime_1.exists)(json, 'offsetFromArrival') ? undefined : json['offsetFromArrival'],
        'offsetFromBookingDate': !(0, runtime_1.exists)(json, 'offsetFromBookingDate') ? undefined : json['offsetFromBookingDate'],
    };
}
exports.PolicyDeadlineTypeFromJSONTyped = PolicyDeadlineTypeFromJSONTyped;
function PolicyDeadlineTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'absoluteDeadline': value.absoluteDeadline,
        'offsetDropTime': value.offsetDropTime,
        'offsetFromArrival': value.offsetFromArrival,
        'offsetFromBookingDate': value.offsetFromBookingDate,
    };
}
exports.PolicyDeadlineTypeToJSON = PolicyDeadlineTypeToJSON;
