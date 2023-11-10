/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CodeListType } from './CodeListType';
import type { ConfigHousekeepingRoomScheduleTaskSuppliesType } from './ConfigHousekeepingRoomScheduleTaskSuppliesType';
import type { FrequencyTypeType } from './FrequencyTypeType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
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
     * @type {CodeListType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    marketCodes?: CodeListType;
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
     * @type {CodeListType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    rateCodes?: CodeListType;
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
     * @type {CodeListType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    specialRequests?: CodeListType;
    /**
     *
     * @type {ConfigHousekeepingRoomScheduleTaskSuppliesType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    taskSupplies?: ConfigHousekeepingRoomScheduleTaskSuppliesType;
    /**
     *
     * @type {CodeListType}
     * @memberof ConfigHousekeepingRoomScheduleType
     */
    vIPStatuses?: CodeListType;
}
/**
 * Check if a given object implements the ConfigHousekeepingRoomScheduleType interface.
 */
export declare function instanceOfConfigHousekeepingRoomScheduleType(value: object): boolean;
export declare function ConfigHousekeepingRoomScheduleTypeFromJSON(json: any): ConfigHousekeepingRoomScheduleType;
export declare function ConfigHousekeepingRoomScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigHousekeepingRoomScheduleType;
export declare function ConfigHousekeepingRoomScheduleTypeToJSON(value?: ConfigHousekeepingRoomScheduleType | null): any;
