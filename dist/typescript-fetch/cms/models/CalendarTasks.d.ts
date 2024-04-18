/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CalendarTaskCountType } from './CalendarTaskCountType';
import type { CalendarTaskType } from './CalendarTaskType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response for fetching calendar tasks.
 * @export
 * @interface CalendarTasks
 */
export interface CalendarTasks {
    /**
     * Defines summary count of calendar tasks that belongs to specific classification.
     * @type {Array<CalendarTaskCountType>}
     * @memberof CalendarTasks
     */
    countSummary?: Array<CalendarTaskCountType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CalendarTasks
     */
    links?: Array<InstanceLink>;
    /**
     * Detailed information regarding calendar task.
     * @type {Array<CalendarTaskType>}
     * @memberof CalendarTasks
     */
    taskSummary?: Array<CalendarTaskType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CalendarTasks
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CalendarTasks interface.
 */
export declare function instanceOfCalendarTasks(value: object): boolean;
export declare function CalendarTasksFromJSON(json: any): CalendarTasks;
export declare function CalendarTasksFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarTasks;
export declare function CalendarTasksToJSON(value?: CalendarTasks | null): any;