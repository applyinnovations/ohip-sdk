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
exports.HSKTaskSheetInfoTypeToJSON = exports.HSKTaskSheetInfoTypeFromJSONTyped = exports.HSKTaskSheetInfoTypeFromJSON = exports.instanceOfHSKTaskSheetInfoType = void 0;
const runtime_1 = require("../runtime");
const AssignedTasksType_1 = require("./AssignedTasksType");
const HSKTaskSheetDetailsInfoType_1 = require("./HSKTaskSheetDetailsInfoType");
const HSKTaskSheetInfoTypeRoomSummaryInner_1 = require("./HSKTaskSheetInfoTypeRoomSummaryInner");
const TaskSheetType_1 = require("./TaskSheetType");
/**
 * Check if a given object implements the HSKTaskSheetInfoType interface.
 */
function instanceOfHSKTaskSheetInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHSKTaskSheetInfoType = instanceOfHSKTaskSheetInfoType;
function HSKTaskSheetInfoTypeFromJSON(json) {
    return HSKTaskSheetInfoTypeFromJSONTyped(json, false);
}
exports.HSKTaskSheetInfoTypeFromJSON = HSKTaskSheetInfoTypeFromJSON;
function HSKTaskSheetInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assignedTasks': !(0, runtime_1.exists)(json, 'assignedTasks') ? undefined : (0, AssignedTasksType_1.AssignedTasksTypeFromJSON)(json['assignedTasks']),
        'attendant': !(0, runtime_1.exists)(json, 'attendant') ? undefined : json['attendant'],
        'averageActualTimeInSecs': !(0, runtime_1.exists)(json, 'averageActualTimeInSecs') ? undefined : json['averageActualTimeInSecs'],
        'roomSummary': !(0, runtime_1.exists)(json, 'roomSummary') ? undefined : (json['roomSummary'].map(HSKTaskSheetInfoTypeRoomSummaryInner_1.HSKTaskSheetInfoTypeRoomSummaryInnerFromJSON)),
        'taskDate': !(0, runtime_1.exists)(json, 'taskDate') ? undefined : (new Date(json['taskDate'])),
        'taskSeqNo': !(0, runtime_1.exists)(json, 'taskSeqNo') ? undefined : json['taskSeqNo'],
        'taskSheetDetails': !(0, runtime_1.exists)(json, 'taskSheetDetails') ? undefined : (0, HSKTaskSheetDetailsInfoType_1.HSKTaskSheetDetailsInfoTypeFromJSON)(json['taskSheetDetails']),
        'taskSheetNo': !(0, runtime_1.exists)(json, 'taskSheetNo') ? undefined : json['taskSheetNo'],
        'taskSheetType': !(0, runtime_1.exists)(json, 'taskSheetType') ? undefined : (0, TaskSheetType_1.TaskSheetTypeFromJSON)(json['taskSheetType']),
        'totalCompletedCredits': !(0, runtime_1.exists)(json, 'totalCompletedCredits') ? undefined : json['totalCompletedCredits'],
        'totalTaskCredits': !(0, runtime_1.exists)(json, 'totalTaskCredits') ? undefined : json['totalTaskCredits'],
    };
}
exports.HSKTaskSheetInfoTypeFromJSONTyped = HSKTaskSheetInfoTypeFromJSONTyped;
function HSKTaskSheetInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assignedTasks': (0, AssignedTasksType_1.AssignedTasksTypeToJSON)(value.assignedTasks),
        'attendant': value.attendant,
        'averageActualTimeInSecs': value.averageActualTimeInSecs,
        'roomSummary': value.roomSummary === undefined ? undefined : (value.roomSummary.map(HSKTaskSheetInfoTypeRoomSummaryInner_1.HSKTaskSheetInfoTypeRoomSummaryInnerToJSON)),
        'taskDate': value.taskDate === undefined ? undefined : (value.taskDate.toISOString().substr(0, 10)),
        'taskSeqNo': value.taskSeqNo,
        'taskSheetDetails': (0, HSKTaskSheetDetailsInfoType_1.HSKTaskSheetDetailsInfoTypeToJSON)(value.taskSheetDetails),
        'taskSheetNo': value.taskSheetNo,
        'taskSheetType': (0, TaskSheetType_1.TaskSheetTypeToJSON)(value.taskSheetType),
        'totalCompletedCredits': value.totalCompletedCredits,
        'totalTaskCredits': value.totalTaskCredits,
    };
}
exports.HSKTaskSheetInfoTypeToJSON = HSKTaskSheetInfoTypeToJSON;
