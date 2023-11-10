"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsStatusSummaryTypeToJSON = exports.RoomsStatusSummaryTypeFromJSONTyped = exports.RoomsStatusSummaryTypeFromJSON = exports.instanceOfRoomsStatusSummaryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomsStatusSummaryType interface.
 */
function instanceOfRoomsStatusSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomsStatusSummaryType = instanceOfRoomsStatusSummaryType;
function RoomsStatusSummaryTypeFromJSON(json) {
    return RoomsStatusSummaryTypeFromJSONTyped(json, false);
}
exports.RoomsStatusSummaryTypeFromJSON = RoomsStatusSummaryTypeFromJSON;
function RoomsStatusSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assigned': !(0, runtime_1.exists)(json, 'assigned') ? undefined : json['assigned'],
        'clean': !(0, runtime_1.exists)(json, 'clean') ? undefined : json['clean'],
        'dirty': !(0, runtime_1.exists)(json, 'dirty') ? undefined : json['dirty'],
        'inspected': !(0, runtime_1.exists)(json, 'inspected') ? undefined : json['inspected'],
        'outOfService': !(0, runtime_1.exists)(json, 'outOfService') ? undefined : json['outOfService'],
        'pickup': !(0, runtime_1.exists)(json, 'pickup') ? undefined : json['pickup'],
        'unassigned': !(0, runtime_1.exists)(json, 'unassigned') ? undefined : json['unassigned'],
    };
}
exports.RoomsStatusSummaryTypeFromJSONTyped = RoomsStatusSummaryTypeFromJSONTyped;
function RoomsStatusSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assigned': value.assigned,
        'clean': value.clean,
        'dirty': value.dirty,
        'inspected': value.inspected,
        'outOfService': value.outOfService,
        'pickup': value.pickup,
        'unassigned': value.unassigned,
    };
}
exports.RoomsStatusSummaryTypeToJSON = RoomsStatusSummaryTypeToJSON;
