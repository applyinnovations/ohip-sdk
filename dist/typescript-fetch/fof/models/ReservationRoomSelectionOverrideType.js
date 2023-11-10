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
exports.ReservationRoomSelectionOverrideTypeToJSON = exports.ReservationRoomSelectionOverrideTypeFromJSONTyped = exports.ReservationRoomSelectionOverrideTypeFromJSON = exports.instanceOfReservationRoomSelectionOverrideType = void 0;
const runtime_1 = require("../runtime");
const OverrideInstructionType_1 = require("./OverrideInstructionType");
const RateChangeInstructionType_1 = require("./RateChangeInstructionType");
const ReservationRoomOwnershipType_1 = require("./ReservationRoomOwnershipType");
/**
 * Check if a given object implements the ReservationRoomSelectionOverrideType interface.
 */
function instanceOfReservationRoomSelectionOverrideType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRoomSelectionOverrideType = instanceOfReservationRoomSelectionOverrideType;
function ReservationRoomSelectionOverrideTypeFromJSON(json) {
    return ReservationRoomSelectionOverrideTypeFromJSONTyped(json, false);
}
exports.ReservationRoomSelectionOverrideTypeFromJSON = ReservationRoomSelectionOverrideTypeFromJSON;
function ReservationRoomSelectionOverrideTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dayUseReserved': !(0, runtime_1.exists)(json, 'dayUseReserved') ? undefined : json['dayUseReserved'],
        'dirtyRoom': !(0, runtime_1.exists)(json, 'dirtyRoom') ? undefined : json['dirtyRoom'],
        'holdRoom': !(0, runtime_1.exists)(json, 'holdRoom') ? undefined : json['holdRoom'],
        'inventoryRestriction': !(0, runtime_1.exists)(json, 'inventoryRestriction') ? undefined : json['inventoryRestriction'],
        'occupancyRestriction': !(0, runtime_1.exists)(json, 'occupancyRestriction') ? undefined : json['occupancyRestriction'],
        'outOfServiceRoom': !(0, runtime_1.exists)(json, 'outOfServiceRoom') ? undefined : json['outOfServiceRoom'],
        'overrideExternalChecks': !(0, runtime_1.exists)(json, 'overrideExternalChecks') ? undefined : json['overrideExternalChecks'],
        'overrideInstruction': !(0, runtime_1.exists)(json, 'overrideInstruction') ? undefined : (0, OverrideInstructionType_1.OverrideInstructionTypeFromJSON)(json['overrideInstruction']),
        'overrideRoomOwnership': !(0, runtime_1.exists)(json, 'overrideRoomOwnership') ? undefined : json['overrideRoomOwnership'],
        'overrideRotationRoom': !(0, runtime_1.exists)(json, 'overrideRotationRoom') ? undefined : json['overrideRotationRoom'],
        'rateChange': !(0, runtime_1.exists)(json, 'rateChange') ? undefined : (0, RateChangeInstructionType_1.RateChangeInstructionTypeFromJSON)(json['rateChange']),
        'rateRestriction': !(0, runtime_1.exists)(json, 'rateRestriction') ? undefined : json['rateRestriction'],
        'roomNumberLocked': !(0, runtime_1.exists)(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomOwnershipType': !(0, runtime_1.exists)(json, 'roomOwnershipType') ? undefined : (0, ReservationRoomOwnershipType_1.ReservationRoomOwnershipTypeFromJSON)(json['roomOwnershipType']),
        'sleepDiscrepantRoom': !(0, runtime_1.exists)(json, 'sleepDiscrepantRoom') ? undefined : json['sleepDiscrepantRoom'],
    };
}
exports.ReservationRoomSelectionOverrideTypeFromJSONTyped = ReservationRoomSelectionOverrideTypeFromJSONTyped;
function ReservationRoomSelectionOverrideTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dayUseReserved': value.dayUseReserved,
        'dirtyRoom': value.dirtyRoom,
        'holdRoom': value.holdRoom,
        'inventoryRestriction': value.inventoryRestriction,
        'occupancyRestriction': value.occupancyRestriction,
        'outOfServiceRoom': value.outOfServiceRoom,
        'overrideExternalChecks': value.overrideExternalChecks,
        'overrideInstruction': (0, OverrideInstructionType_1.OverrideInstructionTypeToJSON)(value.overrideInstruction),
        'overrideRoomOwnership': value.overrideRoomOwnership,
        'overrideRotationRoom': value.overrideRotationRoom,
        'rateChange': (0, RateChangeInstructionType_1.RateChangeInstructionTypeToJSON)(value.rateChange),
        'rateRestriction': value.rateRestriction,
        'roomNumberLocked': value.roomNumberLocked,
        'roomOwnershipType': (0, ReservationRoomOwnershipType_1.ReservationRoomOwnershipTypeToJSON)(value.roomOwnershipType),
        'sleepDiscrepantRoom': value.sleepDiscrepantRoom,
    };
}
exports.ReservationRoomSelectionOverrideTypeToJSON = ReservationRoomSelectionOverrideTypeToJSON;
