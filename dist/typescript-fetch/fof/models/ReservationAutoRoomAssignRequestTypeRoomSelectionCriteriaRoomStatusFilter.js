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
exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterToJSON = exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped = exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSON = exports.instanceOfReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter = void 0;
const runtime_1 = require("../runtime");
const FrontOfficeRoomStatusType_1 = require("./FrontOfficeRoomStatusType");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
/**
 * Check if a given object implements the ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter interface.
 */
function instanceOfReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter = instanceOfReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter;
function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSON(json) {
    return ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped(json, false);
}
exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSON = ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSON;
function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelFORoomStatusList': !(0, runtime_1.exists)(json, 'hotelFORoomStatusList') ? undefined : (json['hotelFORoomStatusList'].map(FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeFromJSON)),
        'hotelRoomStatusList': !(0, runtime_1.exists)(json, 'hotelRoomStatusList') ? undefined : (json['hotelRoomStatusList'].map(HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)),
    };
}
exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped = ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped;
function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelFORoomStatusList': value.hotelFORoomStatusList === undefined ? undefined : (value.hotelFORoomStatusList.map(FrontOfficeRoomStatusType_1.FrontOfficeRoomStatusTypeToJSON)),
        'hotelRoomStatusList': value.hotelRoomStatusList === undefined ? undefined : (value.hotelRoomStatusList.map(HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)),
    };
}
exports.ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterToJSON = ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterToJSON;
