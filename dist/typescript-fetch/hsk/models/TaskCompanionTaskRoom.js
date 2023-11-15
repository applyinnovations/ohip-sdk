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
exports.TaskCompanionTaskRoomToJSON = exports.TaskCompanionTaskRoomFromJSONTyped = exports.TaskCompanionTaskRoomFromJSON = exports.instanceOfTaskCompanionTaskRoom = void 0;
const runtime_1 = require("../runtime");
const AppUserOnBreakType_1 = require("./AppUserOnBreakType");
const DepartureTaskInfoType_1 = require("./DepartureTaskInfoType");
const FacilityCodeType_1 = require("./FacilityCodeType");
const HousekeepingCreditsType_1 = require("./HousekeepingCreditsType");
const HousekeepingTaskCodeType_1 = require("./HousekeepingTaskCodeType");
const HousekeepingTaskTypeAttendant_1 = require("./HousekeepingTaskTypeAttendant");
const HousekeepingTaskTypeRoomCountsInner_1 = require("./HousekeepingTaskTypeRoomCountsInner");
const ServicingAttendantStatusType_1 = require("./ServicingAttendantStatusType");
const TaskCompanionTaskRoomRoomsInner_1 = require("./TaskCompanionTaskRoomRoomsInner");
const TaskSheetType_1 = require("./TaskSheetType");
/**
 * Check if a given object implements the TaskCompanionTaskRoom interface.
 */
function instanceOfTaskCompanionTaskRoom(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaskCompanionTaskRoom = instanceOfTaskCompanionTaskRoom;
function TaskCompanionTaskRoomFromJSON(json) {
    return TaskCompanionTaskRoomFromJSONTyped(json, false);
}
exports.TaskCompanionTaskRoomFromJSON = TaskCompanionTaskRoomFromJSON;
function TaskCompanionTaskRoomFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allEvaluatedRoomsSkipped': !(0, runtime_1.exists)(json, 'allEvaluatedRoomsSkipped') ? undefined : json['allEvaluatedRoomsSkipped'],
        'appUserOnBreak': !(0, runtime_1.exists)(json, 'appUserOnBreak') ? undefined : (0, AppUserOnBreakType_1.AppUserOnBreakTypeFromJSON)(json['appUserOnBreak']),
        'attendant': !(0, runtime_1.exists)(json, 'attendant') ? undefined : (0, HousekeepingTaskTypeAttendant_1.HousekeepingTaskTypeAttendantFromJSON)(json['attendant']),
        'attendantStatus': !(0, runtime_1.exists)(json, 'attendantStatus') ? undefined : (0, ServicingAttendantStatusType_1.ServicingAttendantStatusTypeFromJSON)(json['attendantStatus']),
        'autoGenerated': !(0, runtime_1.exists)(json, 'autoGenerated') ? undefined : json['autoGenerated'],
        'breakOutId': !(0, runtime_1.exists)(json, 'breakOutId') ? undefined : json['breakOutId'],
        'completedDate': !(0, runtime_1.exists)(json, 'completedDate') ? undefined : json['completedDate'],
        'credits': !(0, runtime_1.exists)(json, 'credits') ? undefined : (json['credits'].map(HousekeepingCreditsType_1.HousekeepingCreditsTypeFromJSON)),
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'departureTaskInfo': !(0, runtime_1.exists)(json, 'departureTaskInfo') ? undefined : (0, DepartureTaskInfoType_1.DepartureTaskInfoTypeFromJSON)(json['departureTaskInfo']),
        'emptyTaskSheet': !(0, runtime_1.exists)(json, 'emptyTaskSheet') ? undefined : json['emptyTaskSheet'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'linenChangeCount': !(0, runtime_1.exists)(json, 'linenChangeCount') ? undefined : json['linenChangeCount'],
        'lockTaskSheet': !(0, runtime_1.exists)(json, 'lockTaskSheet') ? undefined : json['lockTaskSheet'],
        'nextDay': !(0, runtime_1.exists)(json, 'nextDay') ? undefined : json['nextDay'],
        'roomCount': !(0, runtime_1.exists)(json, 'roomCount') ? undefined : json['roomCount'],
        'roomCounts': !(0, runtime_1.exists)(json, 'roomCounts') ? undefined : (json['roomCounts'].map(HousekeepingTaskTypeRoomCountsInner_1.HousekeepingTaskTypeRoomCountsInnerFromJSON)),
        'rooms': !(0, runtime_1.exists)(json, 'rooms') ? undefined : (json['rooms'].map(TaskCompanionTaskRoomRoomsInner_1.TaskCompanionTaskRoomRoomsInnerFromJSON)),
        'sheetNumber': !(0, runtime_1.exists)(json, 'sheetNumber') ? undefined : json['sheetNumber'],
        'sheetType': !(0, runtime_1.exists)(json, 'sheetType') ? undefined : (0, TaskSheetType_1.TaskSheetTypeFromJSON)(json['sheetType']),
        'taskCodes': !(0, runtime_1.exists)(json, 'taskCodes') ? undefined : (json['taskCodes'].map(HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeFromJSON)),
        'taskInstructions': !(0, runtime_1.exists)(json, 'taskInstructions') ? undefined : json['taskInstructions'],
        'taskSeqNo': !(0, runtime_1.exists)(json, 'taskSeqNo') ? undefined : json['taskSeqNo'],
        'taskSheetCompleted': !(0, runtime_1.exists)(json, 'taskSheetCompleted') ? undefined : json['taskSheetCompleted'],
        'totalSupplies': !(0, runtime_1.exists)(json, 'totalSupplies') ? undefined : (json['totalSupplies'].map(FacilityCodeType_1.FacilityCodeTypeFromJSON)),
    };
}
exports.TaskCompanionTaskRoomFromJSONTyped = TaskCompanionTaskRoomFromJSONTyped;
function TaskCompanionTaskRoomToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allEvaluatedRoomsSkipped': value.allEvaluatedRoomsSkipped,
        'appUserOnBreak': (0, AppUserOnBreakType_1.AppUserOnBreakTypeToJSON)(value.appUserOnBreak),
        'attendant': (0, HousekeepingTaskTypeAttendant_1.HousekeepingTaskTypeAttendantToJSON)(value.attendant),
        'attendantStatus': (0, ServicingAttendantStatusType_1.ServicingAttendantStatusTypeToJSON)(value.attendantStatus),
        'autoGenerated': value.autoGenerated,
        'breakOutId': value.breakOutId,
        'completedDate': value.completedDate,
        'credits': value.credits === undefined ? undefined : (value.credits.map(HousekeepingCreditsType_1.HousekeepingCreditsTypeToJSON)),
        'date': value.date,
        'departureTaskInfo': (0, DepartureTaskInfoType_1.DepartureTaskInfoTypeToJSON)(value.departureTaskInfo),
        'emptyTaskSheet': value.emptyTaskSheet,
        'hotelId': value.hotelId,
        'linenChangeCount': value.linenChangeCount,
        'lockTaskSheet': value.lockTaskSheet,
        'nextDay': value.nextDay,
        'roomCount': value.roomCount,
        'roomCounts': value.roomCounts === undefined ? undefined : (value.roomCounts.map(HousekeepingTaskTypeRoomCountsInner_1.HousekeepingTaskTypeRoomCountsInnerToJSON)),
        'rooms': value.rooms === undefined ? undefined : (value.rooms.map(TaskCompanionTaskRoomRoomsInner_1.TaskCompanionTaskRoomRoomsInnerToJSON)),
        'sheetNumber': value.sheetNumber,
        'sheetType': (0, TaskSheetType_1.TaskSheetTypeToJSON)(value.sheetType),
        'taskCodes': value.taskCodes === undefined ? undefined : (value.taskCodes.map(HousekeepingTaskCodeType_1.HousekeepingTaskCodeTypeToJSON)),
        'taskInstructions': value.taskInstructions,
        'taskSeqNo': value.taskSeqNo,
        'taskSheetCompleted': value.taskSheetCompleted,
        'totalSupplies': value.totalSupplies === undefined ? undefined : (value.totalSupplies.map(FacilityCodeType_1.FacilityCodeTypeToJSON)),
    };
}
exports.TaskCompanionTaskRoomToJSON = TaskCompanionTaskRoomToJSON;
