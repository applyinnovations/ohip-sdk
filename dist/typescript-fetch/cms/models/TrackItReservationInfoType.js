"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackItReservationInfoTypeToJSON = exports.TrackItReservationInfoTypeFromJSONTyped = exports.TrackItReservationInfoTypeFromJSON = exports.instanceOfTrackItReservationInfoType = void 0;
const runtime_1 = require("../runtime");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const ResGuaranteeType_1 = require("./ResGuaranteeType");
const ResGuestInfoType_1 = require("./ResGuestInfoType");
const ReservationIdList_1 = require("./ReservationIdList");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the TrackItReservationInfoType interface.
 */
function instanceOfTrackItReservationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItReservationInfoType = instanceOfTrackItReservationInfoType;
function TrackItReservationInfoTypeFromJSON(json) {
    return TrackItReservationInfoTypeFromJSONTyped(json, false);
}
exports.TrackItReservationInfoTypeFromJSON = TrackItReservationInfoTypeFromJSON;
function TrackItReservationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'computedReservationStatus': !(0, runtime_1.exists)(json, 'computedReservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['computedReservationStatus']),
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, ResGuaranteeType_1.ResGuaranteeTypeFromJSON)(json['guarantee']),
        'guestInfo': !(0, runtime_1.exists)(json, 'guestInfo') ? undefined : (0, ResGuestInfoType_1.ResGuestInfoTypeFromJSON)(json['guestInfo']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, ReservationIdList_1.ReservationIdListFromJSON)(json['reservationIdList']),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomStatus': !(0, runtime_1.exists)(json, 'roomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['roomStatus']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.TrackItReservationInfoTypeFromJSONTyped = TrackItReservationInfoTypeFromJSONTyped;
function TrackItReservationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'computedReservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.computedReservationStatus),
        'guarantee': (0, ResGuaranteeType_1.ResGuaranteeTypeToJSON)(value.guarantee),
        'guestInfo': (0, ResGuestInfoType_1.ResGuestInfoTypeToJSON)(value.guestInfo),
        'reservationIdList': (0, ReservationIdList_1.ReservationIdListToJSON)(value.reservationIdList),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'roomId': value.roomId,
        'roomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.roomStatus),
        'roomType': value.roomType,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.TrackItReservationInfoTypeToJSON = TrackItReservationInfoTypeToJSON;
