"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCalendarResTypeToJSON = exports.RoomCalendarResTypeFromJSONTyped = exports.RoomCalendarResTypeFromJSON = exports.instanceOfRoomCalendarResType = void 0;
const runtime_1 = require("../runtime");
const AdvanceCheckInType_1 = require("./AdvanceCheckInType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
const LinkedReservationType_1 = require("./LinkedReservationType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const ResGuaranteeType_1 = require("./ResGuaranteeType");
const RoomCalendarDisplayType_1 = require("./RoomCalendarDisplayType");
const RoomMoveDetailType_1 = require("./RoomMoveDetailType");
const UniqueIDType_1 = require("./UniqueIDType");
const VIPStatusType_1 = require("./VIPStatusType");
/**
 * Check if a given object implements the RoomCalendarResType interface.
 */
function instanceOfRoomCalendarResType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomCalendarResType = instanceOfRoomCalendarResType;
function RoomCalendarResTypeFromJSON(json) {
    return RoomCalendarResTypeFromJSONTyped(json, false);
}
exports.RoomCalendarResTypeFromJSON = RoomCalendarResTypeFromJSON;
function RoomCalendarResTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'advanceCheckIn': !(0, runtime_1.exists)(json, 'advanceCheckIn') ? undefined : (0, AdvanceCheckInType_1.AdvanceCheckInTypeFromJSON)(json['advanceCheckIn']),
        'assignedByAI': !(0, runtime_1.exists)(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'dateTimeSpan': !(0, runtime_1.exists)(json, 'dateTimeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['dateTimeSpan']),
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, ResGuaranteeType_1.ResGuaranteeTypeFromJSON)(json['guarantee']),
        'hasLinkedReservations': !(0, runtime_1.exists)(json, 'hasLinkedReservations') ? undefined : (0, LinkedReservationType_1.LinkedReservationTypeFromJSON)(json['hasLinkedReservations']),
        'noOfRooms': !(0, runtime_1.exists)(json, 'noOfRooms') ? undefined : json['noOfRooms'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'roomMoveHistory': !(0, runtime_1.exists)(json, 'roomMoveHistory') ? undefined : (json['roomMoveHistory'].map(RoomMoveDetailType_1.RoomMoveDetailTypeFromJSON)),
        'roomNumberLocked': !(0, runtime_1.exists)(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomScheduleDisplay': !(0, runtime_1.exists)(json, 'roomScheduleDisplay') ? undefined : (0, RoomCalendarDisplayType_1.RoomCalendarDisplayTypeFromJSON)(json['roomScheduleDisplay']),
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'upgradedByAI': !(0, runtime_1.exists)(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : (0, VIPStatusType_1.VIPStatusTypeFromJSON)(json['vipStatus']),
    };
}
exports.RoomCalendarResTypeFromJSONTyped = RoomCalendarResTypeFromJSONTyped;
function RoomCalendarResTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'advanceCheckIn': (0, AdvanceCheckInType_1.AdvanceCheckInTypeToJSON)(value.advanceCheckIn),
        'assignedByAI': value.assignedByAI,
        'dateTimeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.dateTimeSpan),
        'givenName': value.givenName,
        'guarantee': (0, ResGuaranteeType_1.ResGuaranteeTypeToJSON)(value.guarantee),
        'hasLinkedReservations': (0, LinkedReservationType_1.LinkedReservationTypeToJSON)(value.hasLinkedReservations),
        'noOfRooms': value.noOfRooms,
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'roomMoveHistory': value.roomMoveHistory === undefined ? undefined : (value.roomMoveHistory.map(RoomMoveDetailType_1.RoomMoveDetailTypeToJSON)),
        'roomNumberLocked': value.roomNumberLocked,
        'roomScheduleDisplay': (0, RoomCalendarDisplayType_1.RoomCalendarDisplayTypeToJSON)(value.roomScheduleDisplay),
        'surname': value.surname,
        'title': value.title,
        'upgradedByAI': value.upgradedByAI,
        'vipStatus': (0, VIPStatusType_1.VIPStatusTypeToJSON)(value.vipStatus),
    };
}
exports.RoomCalendarResTypeToJSON = RoomCalendarResTypeToJSON;
