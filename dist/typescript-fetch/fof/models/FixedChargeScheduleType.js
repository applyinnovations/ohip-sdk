"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedChargeScheduleTypeToJSON = exports.FixedChargeScheduleTypeFromJSONTyped = exports.FixedChargeScheduleTypeFromJSON = exports.instanceOfFixedChargeScheduleType = void 0;
const runtime_1 = require("../runtime");
const FixedChargeFrequencyType_1 = require("./FixedChargeFrequencyType");
/**
 * Check if a given object implements the FixedChargeScheduleType interface.
 */
function instanceOfFixedChargeScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFixedChargeScheduleType = instanceOfFixedChargeScheduleType;
function FixedChargeScheduleTypeFromJSON(json) {
    return FixedChargeScheduleTypeFromJSONTyped(json, false);
}
exports.FixedChargeScheduleTypeFromJSON = FixedChargeScheduleTypeFromJSON;
function FixedChargeScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateToExecute': !(0, runtime_1.exists)(json, 'dateToExecute') ? undefined : json['dateToExecute'],
        'dayToExecute': !(0, runtime_1.exists)(json, 'dayToExecute') ? undefined : json['dayToExecute'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'frequency': !(0, runtime_1.exists)(json, 'frequency') ? undefined : (0, FixedChargeFrequencyType_1.FixedChargeFrequencyTypeFromJSON)(json['frequency']),
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.FixedChargeScheduleTypeFromJSONTyped = FixedChargeScheduleTypeFromJSONTyped;
function FixedChargeScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateToExecute': value.dateToExecute,
        'dayToExecute': value.dayToExecute,
        'end': value.end,
        'frequency': (0, FixedChargeFrequencyType_1.FixedChargeFrequencyTypeToJSON)(value.frequency),
        'start': value.start,
    };
}
exports.FixedChargeScheduleTypeToJSON = FixedChargeScheduleTypeToJSON;
