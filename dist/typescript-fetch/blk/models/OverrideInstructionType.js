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
exports.OverrideInstructionTypeToJSON = exports.OverrideInstructionTypeFromJSONTyped = exports.OverrideInstructionTypeFromJSON = exports.instanceOfOverrideInstructionType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the OverrideInstructionType interface.
 */
function instanceOfOverrideInstructionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOverrideInstructionType = instanceOfOverrideInstructionType;
function OverrideInstructionTypeFromJSON(json) {
    return OverrideInstructionTypeFromJSONTyped(json, false);
}
exports.OverrideInstructionTypeFromJSON = OverrideInstructionTypeFromJSON;
function OverrideInstructionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'userId': !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
    };
}
exports.OverrideInstructionTypeFromJSONTyped = OverrideInstructionTypeFromJSONTyped;
function OverrideInstructionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'description': value.description,
        'type': value.type,
        'userId': value.userId,
    };
}
exports.OverrideInstructionTypeToJSON = OverrideInstructionTypeToJSON;
