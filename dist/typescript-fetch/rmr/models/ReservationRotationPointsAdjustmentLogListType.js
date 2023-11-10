"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRotationPointsAdjustmentLogListTypeToJSON = exports.ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped = exports.ReservationRotationPointsAdjustmentLogListTypeFromJSON = exports.instanceOfReservationRotationPointsAdjustmentLogListType = void 0;
const runtime_1 = require("../runtime");
const ReservationRotationPointsAdjustmentLogType_1 = require("./ReservationRotationPointsAdjustmentLogType");
/**
 * Check if a given object implements the ReservationRotationPointsAdjustmentLogListType interface.
 */
function instanceOfReservationRotationPointsAdjustmentLogListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRotationPointsAdjustmentLogListType = instanceOfReservationRotationPointsAdjustmentLogListType;
function ReservationRotationPointsAdjustmentLogListTypeFromJSON(json) {
    return ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped(json, false);
}
exports.ReservationRotationPointsAdjustmentLogListTypeFromJSON = ReservationRotationPointsAdjustmentLogListTypeFromJSON;
function ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustmentLog': !(0, runtime_1.exists)(json, 'adjustmentLog') ? undefined : (json['adjustmentLog'].map(ReservationRotationPointsAdjustmentLogType_1.ReservationRotationPointsAdjustmentLogTypeFromJSON)),
    };
}
exports.ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped = ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped;
function ReservationRotationPointsAdjustmentLogListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustmentLog': value.adjustmentLog === undefined ? undefined : (value.adjustmentLog.map(ReservationRotationPointsAdjustmentLogType_1.ReservationRotationPointsAdjustmentLogTypeToJSON)),
    };
}
exports.ReservationRotationPointsAdjustmentLogListTypeToJSON = ReservationRotationPointsAdjustmentLogListTypeToJSON;
