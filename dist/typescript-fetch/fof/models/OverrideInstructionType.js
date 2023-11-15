"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
        'reasonCode': !(0, runtime_1.exists)(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reasonDescription': !(0, runtime_1.exists)(json, 'reasonDescription') ? undefined : json['reasonDescription'],
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
        'reasonCode': value.reasonCode,
        'reasonDescription': value.reasonDescription,
        'type': value.type,
        'userId': value.userId,
    };
}
exports.OverrideInstructionTypeToJSON = OverrideInstructionTypeToJSON;
