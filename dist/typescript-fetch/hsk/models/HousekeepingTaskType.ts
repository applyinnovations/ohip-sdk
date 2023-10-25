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

import { exists, mapValues } from '../runtime';
import type { AppUserOnBreakType } from './AppUserOnBreakType';
import {
    AppUserOnBreakTypeFromJSON,
    AppUserOnBreakTypeFromJSONTyped,
    AppUserOnBreakTypeToJSON,
} from './AppUserOnBreakType';
import type { DepartureTaskInfoType } from './DepartureTaskInfoType';
import {
    DepartureTaskInfoTypeFromJSON,
    DepartureTaskInfoTypeFromJSONTyped,
    DepartureTaskInfoTypeToJSON,
} from './DepartureTaskInfoType';
import type { FacilityCodeType } from './FacilityCodeType';
import {
    FacilityCodeTypeFromJSON,
    FacilityCodeTypeFromJSONTyped,
    FacilityCodeTypeToJSON,
} from './FacilityCodeType';
import type { HousekeepingCreditsType } from './HousekeepingCreditsType';
import {
    HousekeepingCreditsTypeFromJSON,
    HousekeepingCreditsTypeFromJSONTyped,
    HousekeepingCreditsTypeToJSON,
} from './HousekeepingCreditsType';
import type { HousekeepingTaskCodeType } from './HousekeepingTaskCodeType';
import {
    HousekeepingTaskCodeTypeFromJSON,
    HousekeepingTaskCodeTypeFromJSONTyped,
    HousekeepingTaskCodeTypeToJSON,
} from './HousekeepingTaskCodeType';
import type { HousekeepingTaskTypeAttendant } from './HousekeepingTaskTypeAttendant';
import {
    HousekeepingTaskTypeAttendantFromJSON,
    HousekeepingTaskTypeAttendantFromJSONTyped,
    HousekeepingTaskTypeAttendantToJSON,
} from './HousekeepingTaskTypeAttendant';
import type { HousekeepingTaskTypeRoomCountsInner } from './HousekeepingTaskTypeRoomCountsInner';
import {
    HousekeepingTaskTypeRoomCountsInnerFromJSON,
    HousekeepingTaskTypeRoomCountsInnerFromJSONTyped,
    HousekeepingTaskTypeRoomCountsInnerToJSON,
} from './HousekeepingTaskTypeRoomCountsInner';
import type { HousekeepingTaskTypeRoomsInner } from './HousekeepingTaskTypeRoomsInner';
import {
    HousekeepingTaskTypeRoomsInnerFromJSON,
    HousekeepingTaskTypeRoomsInnerFromJSONTyped,
    HousekeepingTaskTypeRoomsInnerToJSON,
} from './HousekeepingTaskTypeRoomsInner';
import type { ServicingAttendantStatusType } from './ServicingAttendantStatusType';
import {
    ServicingAttendantStatusTypeFromJSON,
    ServicingAttendantStatusTypeFromJSONTyped,
    ServicingAttendantStatusTypeToJSON,
} from './ServicingAttendantStatusType';
import type { TaskSheetType } from './TaskSheetType';
import {
    TaskSheetTypeFromJSON,
    TaskSheetTypeFromJSONTyped,
    TaskSheetTypeToJSON,
} from './TaskSheetType';

/**
 * 
 * @export
 * @interface HousekeepingTaskType
 */
export interface HousekeepingTaskType {
    /**
     * 
     * @type {AppUserOnBreakType}
     * @memberof HousekeepingTaskType
     */
    appUserOnBreak?: AppUserOnBreakType;
    /**
     * 
     * @type {HousekeepingTaskTypeAttendant}
     * @memberof HousekeepingTaskType
     */
    attendant?: HousekeepingTaskTypeAttendant;
    /**
     * 
     * @type {ServicingAttendantStatusType}
     * @memberof HousekeepingTaskType
     */
    attendantStatus?: ServicingAttendantStatusType;
    /**
     * Indicates if the task sheet was automatically generated.
     * @type {boolean}
     * @memberof HousekeepingTaskType
     */
    autoGenerated?: boolean;
    /**
     * Break out id of the task sheet.
     * @type {number}
     * @memberof HousekeepingTaskType
     */
    breakOutId?: number;
    /**
     * Date the task was completed.
     * @type {Date}
     * @memberof HousekeepingTaskType
     */
    completedDate?: Date;
    /**
     * Credits information for this Task Sheet. This could have the Total Credit information and the Travelling credits if required.
     * @type {Array<HousekeepingCreditsType>}
     * @memberof HousekeepingTaskType
     */
    credits?: Array<HousekeepingCreditsType>;
    /**
     * The date for which the task sheet applies.
     * @type {Date}
     * @memberof HousekeepingTaskType
     */
    date?: Date;
    /**
     * 
     * @type {DepartureTaskInfoType}
     * @memberof HousekeepingTaskType
     */
    departureTaskInfo?: DepartureTaskInfoType;
    /**
     * 
     * @type {string}
     * @memberof HousekeepingTaskType
     */
    hotelId?: string;
    /**
     * The total number of linen changes included in this task sheet.
     * @type {number}
     * @memberof HousekeepingTaskType
     */
    linenChangeCount?: number;
    /**
     * Indicates if the task sheet was locked or not.
     * @type {boolean}
     * @memberof HousekeepingTaskType
     */
    lockTaskSheet?: boolean;
    /**
     * Indicates the task sheet applies to Next Business Day.
     * @type {boolean}
     * @memberof HousekeepingTaskType
     */
    nextDay?: boolean;
    /**
     * The total number of rooms included in this task sheet.
     * @type {number}
     * @memberof HousekeepingTaskType
     */
    roomCount?: number;
    /**
     * 
     * @type {Array<HousekeepingTaskTypeRoomCountsInner>}
     * @memberof HousekeepingTaskType
     */
    roomCounts?: Array<HousekeepingTaskTypeRoomCountsInner>;
    /**
     * Details of the room which is part of the Task Sheet. The room details will be returned when the request for IncludeTaskSheetDetails(flag in the search type) is true.
     * @type {Array<HousekeepingTaskTypeRoomsInner>}
     * @memberof HousekeepingTaskType
     */
    rooms?: Array<HousekeepingTaskTypeRoomsInner>;
    /**
     * The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code.
     * @type {number}
     * @memberof HousekeepingTaskType
     */
    sheetNumber?: number;
    /**
     * 
     * @type {TaskSheetType}
     * @memberof HousekeepingTaskType
     */
    sheetType?: TaskSheetType;
    /**
     * The Task Code(s) used for this Task Sheet.
     * @type {Array<HousekeepingTaskCodeType>}
     * @memberof HousekeepingTaskType
     */
    taskCodes?: Array<HousekeepingTaskCodeType>;
    /**
     * Task Sheet level instructions. These instructions are applicable to this task sheet only.
     * @type {string}
     * @memberof HousekeepingTaskType
     */
    taskInstructions?: string;
    /**
     * The sequence no of the task sheet.
     * @type {number}
     * @memberof HousekeepingTaskType
     */
    taskSeqNo?: number;
    /**
     * List of the facility codes.
     * @type {Array<FacilityCodeType>}
     * @memberof HousekeepingTaskType
     */
    totalSupplies?: Array<FacilityCodeType>;
}

/**
 * Check if a given object implements the HousekeepingTaskType interface.
 */
export function instanceOfHousekeepingTaskType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingTaskTypeFromJSON(json: any): HousekeepingTaskType {
    return HousekeepingTaskTypeFromJSONTyped(json, false);
}

export function HousekeepingTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTaskType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appUserOnBreak': !exists(json, 'appUserOnBreak') ? undefined : AppUserOnBreakTypeFromJSON(json['appUserOnBreak']),
        'attendant': !exists(json, 'attendant') ? undefined : HousekeepingTaskTypeAttendantFromJSON(json['attendant']),
        'attendantStatus': !exists(json, 'attendantStatus') ? undefined : ServicingAttendantStatusTypeFromJSON(json['attendantStatus']),
        'autoGenerated': !exists(json, 'autoGenerated') ? undefined : json['autoGenerated'],
        'breakOutId': !exists(json, 'breakOutId') ? undefined : json['breakOutId'],
        'completedDate': !exists(json, 'completedDate') ? undefined : (new Date(json['completedDate'])),
        'credits': !exists(json, 'credits') ? undefined : ((json['credits'] as Array<any>).map(HousekeepingCreditsTypeFromJSON)),
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'departureTaskInfo': !exists(json, 'departureTaskInfo') ? undefined : DepartureTaskInfoTypeFromJSON(json['departureTaskInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'linenChangeCount': !exists(json, 'linenChangeCount') ? undefined : json['linenChangeCount'],
        'lockTaskSheet': !exists(json, 'lockTaskSheet') ? undefined : json['lockTaskSheet'],
        'nextDay': !exists(json, 'nextDay') ? undefined : json['nextDay'],
        'roomCount': !exists(json, 'roomCount') ? undefined : json['roomCount'],
        'roomCounts': !exists(json, 'roomCounts') ? undefined : ((json['roomCounts'] as Array<any>).map(HousekeepingTaskTypeRoomCountsInnerFromJSON)),
        'rooms': !exists(json, 'rooms') ? undefined : ((json['rooms'] as Array<any>).map(HousekeepingTaskTypeRoomsInnerFromJSON)),
        'sheetNumber': !exists(json, 'sheetNumber') ? undefined : json['sheetNumber'],
        'sheetType': !exists(json, 'sheetType') ? undefined : TaskSheetTypeFromJSON(json['sheetType']),
        'taskCodes': !exists(json, 'taskCodes') ? undefined : ((json['taskCodes'] as Array<any>).map(HousekeepingTaskCodeTypeFromJSON)),
        'taskInstructions': !exists(json, 'taskInstructions') ? undefined : json['taskInstructions'],
        'taskSeqNo': !exists(json, 'taskSeqNo') ? undefined : json['taskSeqNo'],
        'totalSupplies': !exists(json, 'totalSupplies') ? undefined : ((json['totalSupplies'] as Array<any>).map(FacilityCodeTypeFromJSON)),
    };
}

export function HousekeepingTaskTypeToJSON(value?: HousekeepingTaskType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appUserOnBreak': AppUserOnBreakTypeToJSON(value.appUserOnBreak),
        'attendant': HousekeepingTaskTypeAttendantToJSON(value.attendant),
        'attendantStatus': ServicingAttendantStatusTypeToJSON(value.attendantStatus),
        'autoGenerated': value.autoGenerated,
        'breakOutId': value.breakOutId,
        'completedDate': value.completedDate === undefined ? undefined : (value.completedDate.toISOString().substr(0,10)),
        'credits': value.credits === undefined ? undefined : ((value.credits as Array<any>).map(HousekeepingCreditsTypeToJSON)),
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'departureTaskInfo': DepartureTaskInfoTypeToJSON(value.departureTaskInfo),
        'hotelId': value.hotelId,
        'linenChangeCount': value.linenChangeCount,
        'lockTaskSheet': value.lockTaskSheet,
        'nextDay': value.nextDay,
        'roomCount': value.roomCount,
        'roomCounts': value.roomCounts === undefined ? undefined : ((value.roomCounts as Array<any>).map(HousekeepingTaskTypeRoomCountsInnerToJSON)),
        'rooms': value.rooms === undefined ? undefined : ((value.rooms as Array<any>).map(HousekeepingTaskTypeRoomsInnerToJSON)),
        'sheetNumber': value.sheetNumber,
        'sheetType': TaskSheetTypeToJSON(value.sheetType),
        'taskCodes': value.taskCodes === undefined ? undefined : ((value.taskCodes as Array<any>).map(HousekeepingTaskCodeTypeToJSON)),
        'taskInstructions': value.taskInstructions,
        'taskSeqNo': value.taskSeqNo,
        'totalSupplies': value.totalSupplies === undefined ? undefined : ((value.totalSupplies as Array<any>).map(FacilityCodeTypeToJSON)),
    };
}

