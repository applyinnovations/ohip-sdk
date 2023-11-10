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
exports.TaskCompanionTaskRoomRoomsInnerToJSON = exports.TaskCompanionTaskRoomRoomsInnerFromJSONTyped = exports.TaskCompanionTaskRoomRoomsInnerFromJSON = exports.instanceOfTaskCompanionTaskRoomRoomsInner = void 0;
const runtime_1 = require("../runtime");
const CurrentServicingAttendantType_1 = require("./CurrentServicingAttendantType");
const HousekeepingType_1 = require("./HousekeepingType");
const RatePlanRatingType_1 = require("./RatePlanRatingType");
const ReservationInfoType_1 = require("./ReservationInfoType");
const ReservationShortInfoType_1 = require("./ReservationShortInfoType");
const RoomDiscrepanciesType_1 = require("./RoomDiscrepanciesType");
const RoomFeaturesType_1 = require("./RoomFeaturesType");
const RoomHoldType_1 = require("./RoomHoldType");
const RoomRoomsType_1 = require("./RoomRoomsType");
const RoomSectionType_1 = require("./RoomSectionType");
const RoomTypeShortInfoType_1 = require("./RoomTypeShortInfoType");
const RoomsOutOfOrderType_1 = require("./RoomsOutOfOrderType");
const SitePlanSectionType_1 = require("./SitePlanSectionType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
const TurndownInfoType_1 = require("./TurndownInfoType");
/**
 * Check if a given object implements the TaskCompanionTaskRoomRoomsInner interface.
 */
function instanceOfTaskCompanionTaskRoomRoomsInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaskCompanionTaskRoomRoomsInner = instanceOfTaskCompanionTaskRoomRoomsInner;
function TaskCompanionTaskRoomRoomsInnerFromJSON(json) {
    return TaskCompanionTaskRoomRoomsInnerFromJSONTyped(json, false);
}
exports.TaskCompanionTaskRoomRoomsInnerFromJSON = TaskCompanionTaskRoomRoomsInnerFromJSON;
function TaskCompanionTaskRoomRoomsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attendant': !(0, runtime_1.exists)(json, 'attendant') ? undefined : (json['attendant'].map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeFromJSON)),
        'building': !(0, runtime_1.exists)(json, 'building') ? undefined : json['building'],
        'cleaningSequence': !(0, runtime_1.exists)(json, 'cleaningSequence') ? undefined : json['cleaningSequence'],
        'componentRoomNumber': !(0, runtime_1.exists)(json, 'componentRoomNumber') ? undefined : json['componentRoomNumber'],
        'componentRooms': !(0, runtime_1.exists)(json, 'componentRooms') ? undefined : (0, RoomRoomsType_1.RoomRoomsTypeFromJSON)(json['componentRooms']),
        'connectingRooms': !(0, runtime_1.exists)(json, 'connectingRooms') ? undefined : (0, RoomRoomsType_1.RoomRoomsTypeFromJSON)(json['connectingRooms']),
        'defaultSequence': !(0, runtime_1.exists)(json, 'defaultSequence') ? undefined : json['defaultSequence'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'discrepancy': !(0, runtime_1.exists)(json, 'discrepancy') ? undefined : (0, RoomDiscrepanciesType_1.RoomDiscrepanciesTypeFromJSON)(json['discrepancy']),
        'floor': !(0, runtime_1.exists)(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !(0, runtime_1.exists)(json, 'floorDescription') ? undefined : json['floorDescription'],
        'hasPriority': !(0, runtime_1.exists)(json, 'hasPriority') ? undefined : json['hasPriority'],
        'hold': !(0, runtime_1.exists)(json, 'hold') ? undefined : (0, RoomHoldType_1.RoomHoldTypeFromJSON)(json['hold']),
        'housekeeping': !(0, runtime_1.exists)(json, 'housekeeping') ? undefined : (0, HousekeepingType_1.HousekeepingTypeFromJSON)(json['housekeeping']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : json['instructions'],
        'maintenanceAllowed': !(0, runtime_1.exists)(json, 'maintenanceAllowed') ? undefined : json['maintenanceAllowed'],
        'outOfOrder': !(0, runtime_1.exists)(json, 'outOfOrder') ? undefined : (0, RoomsOutOfOrderType_1.RoomsOutOfOrderTypeFromJSON)(json['outOfOrder']),
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (json['reservationInfo'].map(ReservationInfoType_1.ReservationInfoTypeFromJSON)),
        'resvInfo': !(0, runtime_1.exists)(json, 'resvInfo') ? undefined : (json['resvInfo'].map(ReservationShortInfoType_1.ReservationShortInfoTypeFromJSON)),
        'roomAssignmentRating': !(0, runtime_1.exists)(json, 'roomAssignmentRating') ? undefined : (0, RatePlanRatingType_1.RatePlanRatingTypeFromJSON)(json['roomAssignmentRating']),
        'roomDescription': !(0, runtime_1.exists)(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (0, RoomFeaturesType_1.RoomFeaturesTypeFromJSON)(json['roomFeatures']),
        'roomNumber': !(0, runtime_1.exists)(json, 'roomNumber') ? undefined : json['roomNumber'],
        'roomSection': !(0, runtime_1.exists)(json, 'roomSection') ? undefined : (0, RoomSectionType_1.RoomSectionTypeFromJSON)(json['roomSection']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : (0, RoomTypeShortInfoType_1.RoomTypeShortInfoTypeFromJSON)(json['roomType']),
        'servicingInfo': !(0, runtime_1.exists)(json, 'servicingInfo') ? undefined : (json['servicingInfo'].map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeFromJSON)),
        'sitePlanSection': !(0, runtime_1.exists)(json, 'sitePlanSection') ? undefined : (0, SitePlanSectionType_1.SitePlanSectionTypeFromJSON)(json['sitePlanSection']),
        'smokingPreference': !(0, runtime_1.exists)(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !(0, runtime_1.exists)(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
        'totalCredits': !(0, runtime_1.exists)(json, 'totalCredits') ? undefined : json['totalCredits'],
        'turndownInfo': !(0, runtime_1.exists)(json, 'turndownInfo') ? undefined : (0, TurndownInfoType_1.TurndownInfoTypeFromJSON)(json['turndownInfo']),
        'wakeUpTime': !(0, runtime_1.exists)(json, 'wakeUpTime') ? undefined : (new Date(json['wakeUpTime'])),
    };
}
exports.TaskCompanionTaskRoomRoomsInnerFromJSONTyped = TaskCompanionTaskRoomRoomsInnerFromJSONTyped;
function TaskCompanionTaskRoomRoomsInnerToJSON(value) {
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
        'componentRooms': (0, RoomRoomsType_1.RoomRoomsTypeToJSON)(value.componentRooms),
        'connectingRooms': (0, RoomRoomsType_1.RoomRoomsTypeToJSON)(value.connectingRooms),
        'defaultSequence': value.defaultSequence,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'discrepancy': (0, RoomDiscrepanciesType_1.RoomDiscrepanciesTypeToJSON)(value.discrepancy),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'hasPriority': value.hasPriority,
        'hold': (0, RoomHoldType_1.RoomHoldTypeToJSON)(value.hold),
        'housekeeping': (0, HousekeepingType_1.HousekeepingTypeToJSON)(value.housekeeping),
        'instructions': value.instructions,
        'maintenanceAllowed': value.maintenanceAllowed,
        'outOfOrder': (0, RoomsOutOfOrderType_1.RoomsOutOfOrderTypeToJSON)(value.outOfOrder),
        'reservationInfo': value.reservationInfo === undefined ? undefined : (value.reservationInfo.map(ReservationInfoType_1.ReservationInfoTypeToJSON)),
        'resvInfo': value.resvInfo === undefined ? undefined : (value.resvInfo.map(ReservationShortInfoType_1.ReservationShortInfoTypeToJSON)),
        'roomAssignmentRating': (0, RatePlanRatingType_1.RatePlanRatingTypeToJSON)(value.roomAssignmentRating),
        'roomDescription': value.roomDescription,
        'roomFeatures': (0, RoomFeaturesType_1.RoomFeaturesTypeToJSON)(value.roomFeatures),
        'roomNumber': value.roomNumber,
        'roomSection': (0, RoomSectionType_1.RoomSectionTypeToJSON)(value.roomSection),
        'roomType': (0, RoomTypeShortInfoType_1.RoomTypeShortInfoTypeToJSON)(value.roomType),
        'servicingInfo': value.servicingInfo === undefined ? undefined : (value.servicingInfo.map(CurrentServicingAttendantType_1.CurrentServicingAttendantTypeToJSON)),
        'sitePlanSection': (0, SitePlanSectionType_1.SitePlanSectionTypeToJSON)(value.sitePlanSection),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
        'totalCredits': value.totalCredits,
        'turndownInfo': (0, TurndownInfoType_1.TurndownInfoTypeToJSON)(value.turndownInfo),
        'wakeUpTime': value.wakeUpTime === undefined ? undefined : (value.wakeUpTime.toISOString().substr(0, 10)),
    };
}
exports.TaskCompanionTaskRoomRoomsInnerToJSON = TaskCompanionTaskRoomRoomsInnerToJSON;
