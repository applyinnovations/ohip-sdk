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

import { exists, mapValues } from '../runtime';
import type { CalendarTaskClassType } from './CalendarTaskClassType';
import {
    CalendarTaskClassTypeFromJSON,
    CalendarTaskClassTypeFromJSONTyped,
    CalendarTaskClassTypeToJSON,
} from './CalendarTaskClassType';
import type { CalendarTaskPriorityType } from './CalendarTaskPriorityType';
import {
    CalendarTaskPriorityTypeFromJSON,
    CalendarTaskPriorityTypeFromJSONTyped,
    CalendarTaskPriorityTypeToJSON,
} from './CalendarTaskPriorityType';
import type { CalendarTaskTypeStatus } from './CalendarTaskTypeStatus';
import {
    CalendarTaskTypeStatusFromJSON,
    CalendarTaskTypeStatusFromJSONTyped,
    CalendarTaskTypeStatusToJSON,
} from './CalendarTaskTypeStatus';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueNameIDListType } from './UniqueNameIDListType';
import {
    UniqueNameIDListTypeFromJSON,
    UniqueNameIDListTypeFromJSONTyped,
    UniqueNameIDListTypeToJSON,
} from './UniqueNameIDListType';

/**
 * Detailed information regarding calendar task.
 * @export
 * @interface CalendarTaskType
 */
export interface CalendarTaskType {
    /**
     * 
     * @type {UniqueNameIDListType}
     * @memberof CalendarTaskType
     */
    accountIdList?: UniqueNameIDListType;
    /**
     * Count of the attachments that are attached to the task.
     * @type {number}
     * @memberof CalendarTaskType
     */
    attachmentsCount?: number;
    /**
     * Author of the calendar task.
     * @type {string}
     * @memberof CalendarTaskType
     */
    author?: string;
    /**
     * 
     * @type {UniqueNameIDListType}
     * @memberof CalendarTaskType
     */
    blockIdList?: UniqueNameIDListType;
    /**
     * 
     * @type {CalendarTaskClassType}
     * @memberof CalendarTaskType
     */
    classCode?: CalendarTaskClassType;
    /**
     * 
     * @type {UniqueNameIDListType}
     * @memberof CalendarTaskType
     */
    contactIdList?: UniqueNameIDListType;
    /**
     * Hotel code of calendar task.
     * @type {string}
     * @memberof CalendarTaskType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof CalendarTaskType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof CalendarTaskType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof CalendarTaskType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof CalendarTaskType
     */
    instance?: string;
    /**
     * Additional notes and information regarding calendar task.
     * @type {string}
     * @memberof CalendarTaskType
     */
    notes?: string;
    /**
     * 
     * @type {CalendarTaskPriorityType}
     * @memberof CalendarTaskType
     */
    priorityInfo?: CalendarTaskPriorityType;
    /**
     * Brief description and purpose of calendar task.
     * @type {string}
     * @memberof CalendarTaskType
     */
    purpose?: string;
    /**
     * 
     * @type {CalendarTaskTypeStatus}
     * @memberof CalendarTaskType
     */
    status?: CalendarTaskTypeStatus;
    /**
     * Owner code of the person to whom the calendar task is assigned.
     * @type {string}
     * @memberof CalendarTaskType
     */
    taskOwner?: string;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof CalendarTaskType
     */
    timeSpan?: TimeSpanType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof CalendarTaskType
     */
    type?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CalendarTaskType
     */
    typeCode?: CodeDescriptionType;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof CalendarTaskType
     */
    url?: string;
}

/**
 * Check if a given object implements the CalendarTaskType interface.
 */
export function instanceOfCalendarTaskType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CalendarTaskTypeFromJSON(json: any): CalendarTaskType {
    return CalendarTaskTypeFromJSONTyped(json, false);
}

export function CalendarTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarTaskType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountIdList': !exists(json, 'accountIdList') ? undefined : UniqueNameIDListTypeFromJSON(json['accountIdList']),
        'attachmentsCount': !exists(json, 'attachmentsCount') ? undefined : json['attachmentsCount'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'blockIdList': !exists(json, 'blockIdList') ? undefined : UniqueNameIDListTypeFromJSON(json['blockIdList']),
        'classCode': !exists(json, 'classCode') ? undefined : CalendarTaskClassTypeFromJSON(json['classCode']),
        'contactIdList': !exists(json, 'contactIdList') ? undefined : UniqueNameIDListTypeFromJSON(json['contactIdList']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'priorityInfo': !exists(json, 'priorityInfo') ? undefined : CalendarTaskPriorityTypeFromJSON(json['priorityInfo']),
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'status': !exists(json, 'status') ? undefined : CalendarTaskTypeStatusFromJSON(json['status']),
        'taskOwner': !exists(json, 'taskOwner') ? undefined : json['taskOwner'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeCode': !exists(json, 'typeCode') ? undefined : CodeDescriptionTypeFromJSON(json['typeCode']),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CalendarTaskTypeToJSON(value?: CalendarTaskType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountIdList': UniqueNameIDListTypeToJSON(value.accountIdList),
        'attachmentsCount': value.attachmentsCount,
        'author': value.author,
        'blockIdList': UniqueNameIDListTypeToJSON(value.blockIdList),
        'classCode': CalendarTaskClassTypeToJSON(value.classCode),
        'contactIdList': UniqueNameIDListTypeToJSON(value.contactIdList),
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'notes': value.notes,
        'priorityInfo': CalendarTaskPriorityTypeToJSON(value.priorityInfo),
        'purpose': value.purpose,
        'status': CalendarTaskTypeStatusToJSON(value.status),
        'taskOwner': value.taskOwner,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'type': value.type,
        'typeCode': CodeDescriptionTypeToJSON(value.typeCode),
        'url': value.url,
    };
}
