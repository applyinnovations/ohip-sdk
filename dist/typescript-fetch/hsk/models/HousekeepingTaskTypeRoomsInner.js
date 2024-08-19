"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingTaskTypeRoomsInnerToJSON = exports.HousekeepingTaskTypeRoomsInnerFromJSONTyped = exports.HousekeepingTaskTypeRoomsInnerFromJSON = exports.instanceOfHousekeepingTaskTypeRoomsInner = void 0;
const runtime_1 = require("../runtime");
const CurrentServicingAttendantType_1 = require("./CurrentServicingAttendantType");
const HousekeepingType_1 = require("./HousekeepingType");
const RatePlanRatingType_1 = require("./RatePlanRatingType");
const ReservationInfoType_1 = require("./ReservationInfoType");
const ReservationShortInfoType_1 = require("./ReservationShortInfoType");
const RoomDiscrepancyType_1 = require("./RoomDiscrepancyType");
const RoomFeatureType_1 = require("./RoomFeatureType");
const RoomHoldType_1 = require("./RoomHoldType");
const RoomOutOfOrderType_1 = require("./RoomOutOfOrderType");
const RoomRoomType_1 = require("./RoomRoomType");
const RoomSectionType_1 = require("./RoomSectionType");
const RoomTypeShortInfoType_1 = require("./RoomTypeShortInfoType");
const SitePlanSectionType_1 = require("./SitePlanSectionType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
const TurndownInfoType_1 = require("./TurndownInfoType");
/**
 * Check if a given object implements the HousekeepingTaskTypeRoomsInner interface.
 */
function instanceOfHousekeepingTaskTypeRoomsInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingTaskTypeRoomsInner = instanceOfHousekeepingTaskTypeRoomsInner;
function HousekeepingTaskTypeRoomsInnerFromJSON(json) {
    return HousekeepingTaskTypeRoomsInnerFromJSONTyped(json, false);
}
exports.HousekeepingTaskTypeRoomsInnerFromJSON = HousekeepingTaskTypeRoomsInnerFromJSON;
function HousekeepingTaskTypeRoomsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attendant': !(0, runtime_1.exists)(json, 'attendant') ? undefined : (json['attendant'].map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeFromJSON)),
        'building': !(0, runtime_1.exists)(json, 'building') ? undefined : json['building'],
        'cleaningSequence': !(0, runtime_1.exists)(json, 'cleaningSequence') ? undefined : json['cleaningSequence'],
        'componentRoomNumber': !(0, runtime_1.exists)(json, 'componentRoomNumber') ? undefined : json['componentRoomNumber'],
        'componentRoomNumbers': !(0, runtime_1.exists)(json, 'componentRoomNumbers') ? undefined : json['componentRoomNumbers'],
        'componentRooms': !(0, runtime_1.exists)(json, 'componentRooms') ? undefined : (json['componentRooms'].map(RoomRoomType_1.RoomRoomTypeFromJSON)),
        'connectingRooms': !(0, runtime_1.exists)(json, 'connectingRooms') ? undefined : (json['connectingRooms'].map(RoomRoomType_1.RoomRoomTypeFromJSON)),
        'defaultSequence': !(0, runtime_1.exists)(json, 'defaultSequence') ? undefined : json['defaultSequence'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'discrepancy': !(0, runtime_1.exists)(json, 'discrepancy') ? undefined : (json['discrepancy'].map(RoomDiscrepancyType_1.RoomDiscrepancyTypeFromJSON)),
        'floor': !(0, runtime_1.exists)(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !(0, runtime_1.exists)(json, 'floorDescription') ? undefined : json['floorDescription'],
        'hasPriority': !(0, runtime_1.exists)(json, 'hasPriority') ? undefined : json['hasPriority'],
        'hold': !(0, runtime_1.exists)(json, 'hold') ? undefined : (0, RoomHoldType_1.RoomHoldTypeFromJSON)(json['hold']),
        'housekeeping': !(0, runtime_1.exists)(json, 'housekeeping') ? undefined : (0, HousekeepingType_1.HousekeepingTypeFromJSON)(json['housekeeping']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : json['instructions'],
        'isAccessible': !(0, runtime_1.exists)(json, 'isAccessible') ? undefined : json['isAccessible'],
        'maintenanceAllowed': !(0, runtime_1.exists)(json, 'maintenanceAllowed') ? undefined : json['maintenanceAllowed'],
        'meetingRoom': !(0, runtime_1.exists)(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'outOfOrder': !(0, runtime_1.exists)(json, 'outOfOrder') ? undefined : (json['outOfOrder'].map(RoomOutOfOrderType_1.RoomOutOfOrderTypeFromJSON)),
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (json['reservationInfo'].map(ReservationInfoType_1.ReservationInfoTypeFromJSON)),
        'resvInfo': !(0, runtime_1.exists)(json, 'resvInfo') ? undefined : (json['resvInfo'].map(ReservationShortInfoType_1.ReservationShortInfoTypeFromJSON)),
        'roomAssignmentRating': !(0, runtime_1.exists)(json, 'roomAssignmentRating') ? undefined : (0, RatePlanRatingType_1.RatePlanRatingTypeFromJSON)(json['roomAssignmentRating']),
        'roomDescription': !(0, runtime_1.exists)(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (json['roomFeatures'].map(RoomFeatureType_1.RoomFeatureTypeFromJSON)),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomSection': !(0, runtime_1.exists)(json, 'roomSection') ? undefined : (0, RoomSectionType_1.RoomSectionTypeFromJSON)(json['roomSection']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : (0, RoomTypeShortInfoType_1.RoomTypeShortInfoTypeFromJSON)(json['roomType']),
        'servicingInfo': !(0, runtime_1.exists)(json, 'servicingInfo') ? undefined : (json['servicingInfo'].map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeFromJSON)),
        'sitePlanSection': !(0, runtime_1.exists)(json, 'sitePlanSection') ? undefined : (0, SitePlanSectionType_1.SitePlanSectionTypeFromJSON)(json['sitePlanSection']),
        'smokingPreference': !(0, runtime_1.exists)(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !(0, runtime_1.exists)(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
        'totalCredits': !(0, runtime_1.exists)(json, 'totalCredits') ? undefined : json['totalCredits'],
        'turndownInfo': !(0, runtime_1.exists)(json, 'turndownInfo') ? undefined : (0, TurndownInfoType_1.TurndownInfoTypeFromJSON)(json['turndownInfo']),
        'wakeUpTime': !(0, runtime_1.exists)(json, 'wakeUpTime') ? undefined : json['wakeUpTime'],
    };
}
exports.HousekeepingTaskTypeRoomsInnerFromJSONTyped = HousekeepingTaskTypeRoomsInnerFromJSONTyped;
function HousekeepingTaskTypeRoomsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attendant': value.attendant === undefined ? undefined : (value.attendant.map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeToJSON)),
        'building': value.building,
        'cleaningSequence': value.cleaningSequence,
        'componentRoomNumber': value.componentRoomNumber,
        'componentRoomNumbers': value.componentRoomNumbers,
        'componentRooms': value.componentRooms === undefined ? undefined : (value.componentRooms.map(RoomRoomType_1.RoomRoomTypeToJSON)),
        'connectingRooms': value.connectingRooms === undefined ? undefined : (value.connectingRooms.map(RoomRoomType_1.RoomRoomTypeToJSON)),
        'defaultSequence': value.defaultSequence,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'discrepancy': value.discrepancy === undefined ? undefined : (value.discrepancy.map(RoomDiscrepancyType_1.RoomDiscrepancyTypeToJSON)),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'hasPriority': value.hasPriority,
        'hold': (0, RoomHoldType_1.RoomHoldTypeToJSON)(value.hold),
        'housekeeping': (0, HousekeepingType_1.HousekeepingTypeToJSON)(value.housekeeping),
        'instructions': value.instructions,
        'isAccessible': value.isAccessible,
        'maintenanceAllowed': value.maintenanceAllowed,
        'meetingRoom': value.meetingRoom,
        'outOfOrder': value.outOfOrder === undefined ? undefined : (value.outOfOrder.map(RoomOutOfOrderType_1.RoomOutOfOrderTypeToJSON)),
        'reservationInfo': value.reservationInfo === undefined ? undefined : (value.reservationInfo.map(ReservationInfoType_1.ReservationInfoTypeToJSON)),
        'resvInfo': value.resvInfo === undefined ? undefined : (value.resvInfo.map(ReservationShortInfoType_1.ReservationShortInfoTypeToJSON)),
        'roomAssignmentRating': (0, RatePlanRatingType_1.RatePlanRatingTypeToJSON)(value.roomAssignmentRating),
        'roomDescription': value.roomDescription,
        'roomFeatures': value.roomFeatures === undefined ? undefined : (value.roomFeatures.map(RoomFeatureType_1.RoomFeatureTypeToJSON)),
        'roomId': value.roomId,
        'roomSection': (0, RoomSectionType_1.RoomSectionTypeToJSON)(value.roomSection),
        'roomType': (0, RoomTypeShortInfoType_1.RoomTypeShortInfoTypeToJSON)(value.roomType),
        'servicingInfo': value.servicingInfo === undefined ? undefined : (value.servicingInfo.map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeToJSON)),
        'sitePlanSection': (0, SitePlanSectionType_1.SitePlanSectionTypeToJSON)(value.sitePlanSection),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
        'totalCredits': value.totalCredits,
        'turndownInfo': (0, TurndownInfoType_1.TurndownInfoTypeToJSON)(value.turndownInfo),
        'wakeUpTime': value.wakeUpTime,
    };
}
exports.HousekeepingTaskTypeRoomsInnerToJSON = HousekeepingTaskTypeRoomsInnerToJSON;
