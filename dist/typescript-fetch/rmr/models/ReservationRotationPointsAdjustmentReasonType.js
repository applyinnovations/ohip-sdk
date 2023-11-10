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
exports.ReservationRotationPointsAdjustmentReasonTypeToJSON = exports.ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped = exports.ReservationRotationPointsAdjustmentReasonTypeFromJSON = exports.instanceOfReservationRotationPointsAdjustmentReasonType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationRotationPointsAdjustmentReasonType interface.
 */
function instanceOfReservationRotationPointsAdjustmentReasonType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRotationPointsAdjustmentReasonType = instanceOfReservationRotationPointsAdjustmentReasonType;
function ReservationRotationPointsAdjustmentReasonTypeFromJSON(json) {
    return ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped(json, false);
}
exports.ReservationRotationPointsAdjustmentReasonTypeFromJSON = ReservationRotationPointsAdjustmentReasonTypeFromJSON;
function ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped = ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped;
function ReservationRotationPointsAdjustmentReasonTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
    };
}
exports.ReservationRotationPointsAdjustmentReasonTypeToJSON = ReservationRotationPointsAdjustmentReasonTypeToJSON;
