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
exports.RoomStatusTypeToJSON = exports.RoomStatusTypeFromJSONTyped = exports.RoomStatusTypeFromJSON = exports.instanceOfRoomStatusType = void 0;
const runtime_1 = require("../runtime");
const FrontOfficeRoomStatusType_1 = require("./FrontOfficeRoomStatusType");
const HousekeepingRoomReservationStatusType_1 = require("./HousekeepingRoomReservationStatusType");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
/**
 * Check if a given object implements the RoomStatusType interface.
 */
function instanceOfRoomStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomStatusType = instanceOfRoomStatusType;
function RoomStatusTypeFromJSON(json) {
    return RoomStatusTypeFromJSONTyped(json, false);
}
exports.RoomStatusTypeFromJSON = RoomStatusTypeFromJSON;
function RoomStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'frontOfficeStatus': !(0, runtime_1.exists)(json, 'frontOfficeStatus') ? undefined : (0, FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeFromJSON)(json['frontOfficeStatus']),
        'housekeepingRoomStatus': !(0, runtime_1.exists)(json, 'housekeepingRoomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['housekeepingRoomStatus']),
        'housekeepingStatus': !(0, runtime_1.exists)(json, 'housekeepingStatus') ? undefined : (0, FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeFromJSON)(json['housekeepingStatus']),
        'reservationStatusList': !(0, runtime_1.exists)(json, 'reservationStatusList') ? undefined : (json['reservationStatusList'].map(HousekeepingRoomReservationStatusType_1.HousekeepingRoomReservationStatusTypeFromJSON)),
    };
}
exports.RoomStatusTypeFromJSONTyped = RoomStatusTypeFromJSONTyped;
function RoomStatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'frontOfficeStatus': (0, FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeToJSON)(value.frontOfficeStatus),
        'housekeepingRoomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.housekeepingRoomStatus),
        'housekeepingStatus': (0, FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeToJSON)(value.housekeepingStatus),
        'reservationStatusList': value.reservationStatusList === undefined ? undefined : (value.reservationStatusList.map(HousekeepingRoomReservationStatusType_1.HousekeepingRoomReservationStatusTypeToJSON)),
    };
}
exports.RoomStatusTypeToJSON = RoomStatusTypeToJSON;
