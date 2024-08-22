"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInstructionTypeDurationToJSON = exports.RoutingInstructionTypeDurationFromJSONTyped = exports.RoutingInstructionTypeDurationFromJSON = exports.instanceOfRoutingInstructionTypeDuration = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the RoutingInstructionTypeDuration interface.
 */
function instanceOfRoutingInstructionTypeDuration(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInstructionTypeDuration = instanceOfRoutingInstructionTypeDuration;
function RoutingInstructionTypeDurationFromJSON(json) {
    return RoutingInstructionTypeDurationFromJSONTyped(json, false);
}
exports.RoutingInstructionTypeDurationFromJSON = RoutingInstructionTypeDurationFromJSON;
function RoutingInstructionTypeDurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'daily': !(0, runtime_1.exists)(json, 'daily') ? undefined : json['daily'],
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.RoutingInstructionTypeDurationFromJSONTyped = RoutingInstructionTypeDurationFromJSONTyped;
function RoutingInstructionTypeDurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'daily': value.daily,
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.RoutingInstructionTypeDurationToJSON = RoutingInstructionTypeDurationToJSON;
