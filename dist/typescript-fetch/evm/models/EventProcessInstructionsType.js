"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProcessInstructionsTypeToJSON = exports.EventProcessInstructionsTypeFromJSONTyped = exports.EventProcessInstructionsTypeFromJSON = exports.instanceOfEventProcessInstructionsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the EventProcessInstructionsType interface.
 */
function instanceOfEventProcessInstructionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventProcessInstructionsType = instanceOfEventProcessInstructionsType;
function EventProcessInstructionsTypeFromJSON(json) {
    return EventProcessInstructionsTypeFromJSONTyped(json, false);
}
exports.EventProcessInstructionsTypeFromJSON = EventProcessInstructionsTypeFromJSON;
function EventProcessInstructionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'convertToRegularEvent': !(0, runtime_1.exists)(json, 'convertToRegularEvent') ? undefined : json['convertToRegularEvent'],
        'convertToSubEvent': !(0, runtime_1.exists)(json, 'convertToSubEvent') ? undefined : json['convertToSubEvent'],
        'overbook': !(0, runtime_1.exists)(json, 'overbook') ? undefined : json['overbook'],
        'overrideCapacity': !(0, runtime_1.exists)(json, 'overrideCapacity') ? undefined : json['overrideCapacity'],
        'overrideMaxgroups': !(0, runtime_1.exists)(json, 'overrideMaxgroups') ? undefined : json['overrideMaxgroups'],
        'quickEvent': !(0, runtime_1.exists)(json, 'quickEvent') ? undefined : json['quickEvent'],
        'shareable': !(0, runtime_1.exists)(json, 'shareable') ? undefined : json['shareable'],
        'waitList': !(0, runtime_1.exists)(json, 'waitList') ? undefined : json['waitList'],
        'warnFunctionSpace': !(0, runtime_1.exists)(json, 'warnFunctionSpace') ? undefined : json['warnFunctionSpace'],
    };
}
exports.EventProcessInstructionsTypeFromJSONTyped = EventProcessInstructionsTypeFromJSONTyped;
function EventProcessInstructionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'convertToRegularEvent': value.convertToRegularEvent,
        'convertToSubEvent': value.convertToSubEvent,
        'overbook': value.overbook,
        'overrideCapacity': value.overrideCapacity,
        'overrideMaxgroups': value.overrideMaxgroups,
        'quickEvent': value.quickEvent,
        'shareable': value.shareable,
        'waitList': value.waitList,
        'warnFunctionSpace': value.warnFunctionSpace,
    };
}
exports.EventProcessInstructionsTypeToJSON = EventProcessInstructionsTypeToJSON;