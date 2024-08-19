"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRotationPointsDetailsTypeToJSON = exports.ReservationRotationPointsDetailsTypeFromJSONTyped = exports.ReservationRotationPointsDetailsTypeFromJSON = exports.instanceOfReservationRotationPointsDetailsType = void 0;
const runtime_1 = require("../runtime");
const ReservationRotationPointsAdjustmentReasonType_1 = require("./ReservationRotationPointsAdjustmentReasonType");
const RotationRuleCalculationRuleType_1 = require("./RotationRuleCalculationRuleType");
/**
 * Check if a given object implements the ReservationRotationPointsDetailsType interface.
 */
function instanceOfReservationRotationPointsDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRotationPointsDetailsType = instanceOfReservationRotationPointsDetailsType;
function ReservationRotationPointsDetailsTypeFromJSON(json) {
    return ReservationRotationPointsDetailsTypeFromJSONTyped(json, false);
}
exports.ReservationRotationPointsDetailsTypeFromJSON = ReservationRotationPointsDetailsTypeFromJSON;
function ReservationRotationPointsDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustPointsTo': !(0, runtime_1.exists)(json, 'adjustPointsTo') ? undefined : json['adjustPointsTo'],
        'adjustmentReason': !(0, runtime_1.exists)(json, 'adjustmentReason') ? undefined : (0, ReservationRotationPointsAdjustmentReasonType_1.ReservationRotationPointsAdjustmentReasonTypeFromJSON)(json['adjustmentReason']),
        'currentPoints': !(0, runtime_1.exists)(json, 'currentPoints') ? undefined : json['currentPoints'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, RotationRuleCalculationRuleType_1.RotationRuleCalculationRuleTypeFromJSON)(json['type']),
    };
}
exports.ReservationRotationPointsDetailsTypeFromJSONTyped = ReservationRotationPointsDetailsTypeFromJSONTyped;
function ReservationRotationPointsDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustPointsTo': value.adjustPointsTo,
        'adjustmentReason': (0, ReservationRotationPointsAdjustmentReasonType_1.ReservationRotationPointsAdjustmentReasonTypeToJSON)(value.adjustmentReason),
        'currentPoints': value.currentPoints,
        'endDate': value.endDate,
        'startDate': value.startDate,
        'type': (0, RotationRuleCalculationRuleType_1.RotationRuleCalculationRuleTypeToJSON)(value.type),
    };
}
exports.ReservationRotationPointsDetailsTypeToJSON = ReservationRotationPointsDetailsTypeToJSON;
