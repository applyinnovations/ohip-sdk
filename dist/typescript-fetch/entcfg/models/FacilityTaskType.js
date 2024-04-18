"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityTaskTypeToJSON = exports.FacilityTaskTypeFromJSONTyped = exports.FacilityTaskTypeFromJSON = exports.instanceOfFacilityTaskType = void 0;
const runtime_1 = require("../runtime");
const FacilityCodeType_1 = require("./FacilityCodeType");
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
        'task': !(0, runtime_1.exists)(json, 'task') ? undefined : (0, HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeFromJSON)(json['task']),
        'supplies': !(0, runtime_1.exists)(json, 'supplies') ? undefined : (json['supplies'].map(FacilityCodeType_1.FacilityCodeTypeFromJSON)),
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
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
        'task': (0, HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeToJSON)(value.task),
        'supplies': value.supplies === undefined ? undefined : (value.supplies.map(FacilityCodeType_1.FacilityCodeTypeToJSON)),
        'date': value.date,
    };
}
exports.FacilityTaskTypeToJSON = FacilityTaskTypeToJSON;