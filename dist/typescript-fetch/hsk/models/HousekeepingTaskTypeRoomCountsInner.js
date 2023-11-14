"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingTaskTypeRoomCountsInnerToJSON = exports.HousekeepingTaskTypeRoomCountsInnerFromJSONTyped = exports.HousekeepingTaskTypeRoomCountsInnerFromJSON = exports.instanceOfHousekeepingTaskTypeRoomCountsInner = exports.HousekeepingTaskTypeRoomCountsInnerValueEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.HousekeepingTaskTypeRoomCountsInnerValueEnum = {
    Clean: 'Clean',
    Dirty: 'Dirty',
    Pickup: 'Pickup',
    Inspected: 'Inspected',
    OutOfOrder: 'OutOfOrder',
    OutOfService: 'OutOfService'
};
/**
 * Check if a given object implements the HousekeepingTaskTypeRoomCountsInner interface.
 */
function instanceOfHousekeepingTaskTypeRoomCountsInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingTaskTypeRoomCountsInner = instanceOfHousekeepingTaskTypeRoomCountsInner;
function HousekeepingTaskTypeRoomCountsInnerFromJSON(json) {
    return HousekeepingTaskTypeRoomCountsInnerFromJSONTyped(json, false);
}
exports.HousekeepingTaskTypeRoomCountsInnerFromJSON = HousekeepingTaskTypeRoomCountsInnerFromJSON;
function HousekeepingTaskTypeRoomCountsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalCount': !(0, runtime_1.exists)(json, 'totalCount') ? undefined : json['totalCount'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.HousekeepingTaskTypeRoomCountsInnerFromJSONTyped = HousekeepingTaskTypeRoomCountsInnerFromJSONTyped;
function HousekeepingTaskTypeRoomCountsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'totalCount': value.totalCount,
        'value': value.value,
    };
}
exports.HousekeepingTaskTypeRoomCountsInnerToJSON = HousekeepingTaskTypeRoomCountsInnerToJSON;