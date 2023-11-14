"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityTaskTypeToJSON = exports.FacilityTaskTypeFromJSONTyped = exports.FacilityTaskTypeFromJSON = exports.instanceOfFacilityTaskType = void 0;
const runtime_1 = require("../runtime");
const FacilityCodesType_1 = require("./FacilityCodesType");
const HousekeepingTaskCodeType_1 = require("./HousekeepingTaskCodeType");
/**
 * Check if a given object implements the FacilityTaskType interface.
 */
function instanceOfFacilityTaskType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFacilityTaskType = instanceOfFacilityTaskType;
function FacilityTaskTypeFromJSON(json) {
    return FacilityTaskTypeFromJSONTyped(json, false);
}
exports.FacilityTaskTypeFromJSON = FacilityTaskTypeFromJSON;
function FacilityTaskTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'supplies': !(0, runtime_1.exists)(json, 'supplies') ? undefined : (0, FacilityCodesType_1.FacilityCodesTypeFromJSON)(json['supplies']),
        'task': !(0, runtime_1.exists)(json, 'task') ? undefined : (0, HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeFromJSON)(json['task']),
    };
}
exports.FacilityTaskTypeFromJSONTyped = FacilityTaskTypeFromJSONTyped;
function FacilityTaskTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0, 10)),
        'supplies': (0, FacilityCodesType_1.FacilityCodesTypeToJSON)(value.supplies),
        'task': (0, HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeToJSON)(value.task),
    };
}
exports.FacilityTaskTypeToJSON = FacilityTaskTypeToJSON;