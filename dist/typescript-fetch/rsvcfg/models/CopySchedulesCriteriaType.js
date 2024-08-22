"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopySchedulesCriteriaTypeToJSON = exports.CopySchedulesCriteriaTypeFromJSONTyped = exports.CopySchedulesCriteriaTypeFromJSON = exports.instanceOfCopySchedulesCriteriaType = void 0;
const runtime_1 = require("../runtime");
const CopySchedulesType_1 = require("./CopySchedulesType");
/**
 * Check if a given object implements the CopySchedulesCriteriaType interface.
 */
function instanceOfCopySchedulesCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopySchedulesCriteriaType = instanceOfCopySchedulesCriteriaType;
function CopySchedulesCriteriaTypeFromJSON(json) {
    return CopySchedulesCriteriaTypeFromJSONTyped(json, false);
}
exports.CopySchedulesCriteriaTypeFromJSON = CopySchedulesCriteriaTypeFromJSON;
function CopySchedulesCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copySchedules': !(0, runtime_1.exists)(json, 'copySchedules') ? undefined : (0, CopySchedulesType_1.CopySchedulesTypeFromJSON)(json['copySchedules']),
    };
}
exports.CopySchedulesCriteriaTypeFromJSONTyped = CopySchedulesCriteriaTypeFromJSONTyped;
function CopySchedulesCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copySchedules': (0, CopySchedulesType_1.CopySchedulesTypeToJSON)(value.copySchedules),
    };
}
exports.CopySchedulesCriteriaTypeToJSON = CopySchedulesCriteriaTypeToJSON;
