/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ConfigHousekeepingRoomScheduleTaskSupplyType } from './ConfigHousekeepingRoomScheduleTaskSupplyType';
import {
    ConfigHousekeepingRoomScheduleTaskSupplyTypeFromJSON,
    ConfigHousekeepingRoomScheduleTaskSupplyTypeFromJSONTyped,
    ConfigHousekeepingRoomScheduleTaskSupplyTypeToJSON,
} from './ConfigHousekeepingRoomScheduleTaskSupplyType';
import type { FrequencyTypeType } from './FrequencyTypeType';
import {
    FrequencyTypeTypeFromJSON,
    FrequencyTypeTypeFromJSONTyped,
    FrequencyTypeTypeToJSON,
} from './FrequencyTypeType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
import {
    TimeSpanDaysOfWeekTypeFromJSON,
    TimeSpanDaysOfWeekTypeFromJSONTyped,
    TimeSpanDaysOfWeekTypeToJSON,
} from './TimeSpanDaysOfWeekType';

/**
 * Facility Housekeeping task code and description.
 * @export
 * @interface ConfigHousekeepingRoomScheduleType
 */
export interface ConfigHousekeepingRoomScheduleType {
    /**
     * Code of the housekeeping task.
     * @type {string}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    code?: string;
    /**
     * Housekeeping credits associated with this housekeeping task.
     * @type {number}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    credits?: number;
    /**
     * The information that is entered into this text box.
     * @type {string}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    customizePromptText?: string;
    /**
     * Signifies offset(in days) i.e. start on 3rd day from arrival.
     * @type {number}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    cycleStartDay?: number;
    /**
     * 
     * @type {TimeSpanDaysOfWeekType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    daysOfWeek?: TimeSpanDaysOfWeekType;
    /**
     * Signifies that task is a default task for the checked out room.
     * @type {boolean}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    defaultDepartureTask?: boolean;
    /**
     * Facility task description.
     * @type {string}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    description?: string;
    /**
     * 
     * @type {FrequencyTypeType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    frequency?: FrequencyTypeType;
    /**
     * Specify how often in days following the guest's arrival date, the housekeeping task is to be completed.
     * @type {number}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    frequencyDays?: number;
    /**
     * Signifies whether housekeeping task is a guest requested task.
     * @type {boolean}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    guestRequested?: boolean;
    /**
     * Specifies the hotel code that the room type belongs to.
     * @type {string}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    marketCodes?: Array<string>;
    /**
     * Automatically moves the task up one day if it falls on the day before the guest's departure. It will only be available when the schedule is set to every 3 days or more.
     * @type {boolean}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    moveup?: boolean;
    /**
     * Signifies the priority of the task.
     * @type {number}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    priority?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    rateCodes?: Array<string>;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    roomType?: CodeDescriptionType;
    /**
     * Used to store the housekeeping task sequence.
     * @type {number}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    sequence?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    specialRequests?: Array<string>;
    /**
     * This type holds a collection of housekeeping task supplies attached to a room type.
     * @type {Array<ConfigHousekeepingRoomScheduleTaskSupplyType>}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    taskSupplies?: Array<ConfigHousekeepingRoomScheduleTaskSupplyType>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    vIPStatuses?: Array<string>;
}

/**
 * Check if a given object implements the ConfigHousekeepingRoomScheduleType interface.
 */
export function instanceOfConfigHousekeepingRoomScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigHousekeepingRoomScheduleTypeFromJSON(json: any): ConfigHousekeepingRoomScheduleType {
    return ConfigHousekeepingRoomScheduleTypeFromJSONTyped(json, false);
}

export function ConfigHousekeepingRoomScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigHousekeepingRoomScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'credits': !exists(json, 'credits') ? undefined : json['credits'],
        'customizePromptText': !exists(json, 'customizePromptText') ? undefined : json['customizePromptText'],
        'cycleStartDay': !exists(json, 'cycleStartDay') ? undefined : json['cycleStartDay'],
        'daysOfWeek': !exists(json, 'daysOfWeek') ? undefined : TimeSpanDaysOfWeekTypeFromJSON(json['daysOfWeek']),
        'defaultDepartureTask': !exists(json, 'defaultDepartureTask') ? undefined : json['defaultDepartureTask'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'frequency': !exists(json, 'frequency') ? undefined : FrequencyTypeTypeFromJSON(json['frequency']),
        'frequencyDays': !exists(json, 'frequencyDays') ? undefined : json['frequencyDays'],
        'guestRequested': !exists(json, 'guestRequested') ? undefined : json['guestRequested'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCodes': !exists(json, 'marketCodes') ? undefined : json['marketCodes'],
        'moveup': !exists(json, 'moveup') ? undefined : json['moveup'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'rateCodes': !exists(json, 'rateCodes') ? undefined : json['rateCodes'],
        'roomType': !exists(json, 'roomType') ? undefined : CodeDescriptionTypeFromJSON(json['roomType']),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'specialRequests': !exists(json, 'specialRequests') ? undefined : json['specialRequests'],
        'taskSupplies': !exists(json, 'taskSupplies') ? undefined : ((json['taskSupplies'] as Array<any>).map(ConfigHousekeepingRoomScheduleTaskSupplyTypeFromJSON)),
        'vIPStatuses': !exists(json, 'vIPStatuses') ? undefined : json['vIPStatuses'],
    };
}

export function ConfigHousekeepingRoomScheduleTypeToJSON(value?: ConfigHousekeepingRoomScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'credits': value.credits,
        'customizePromptText': value.customizePromptText,
        'cycleStartDay': value.cycleStartDay,
        'daysOfWeek': TimeSpanDaysOfWeekTypeToJSON(value.daysOfWeek),
        'defaultDepartureTask': value.defaultDepartureTask,
        'description': value.description,
        'frequency': FrequencyTypeTypeToJSON(value.frequency),
        'frequencyDays': value.frequencyDays,
        'guestRequested': value.guestRequested,
        'hotelId': value.hotelId,
        'marketCodes': value.marketCodes,
        'moveup': value.moveup,
        'priority': value.priority,
        'rateCodes': value.rateCodes,
        'roomType': CodeDescriptionTypeToJSON(value.roomType),
        'sequence': value.sequence,
        'specialRequests': value.specialRequests,
        'taskSupplies': value.taskSupplies === undefined ? undefined : ((value.taskSupplies as Array<any>).map(ConfigHousekeepingRoomScheduleTaskSupplyTypeToJSON)),
        'vIPStatuses': value.vIPStatuses,
    };
}

