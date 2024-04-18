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
import type { CalendarTaskType } from './CalendarTaskType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response for fetching calendar task.
 * @export
 * @interface CalendarTask
 */
export interface CalendarTask {
    /**
     *
     * @type {CalendarTaskType}
     * @memberof CalendarTask
     */
    calendarTaskDetails?: CalendarTaskType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CalendarTask
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CalendarTask
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CalendarTask interface.
 */
export declare function instanceOfCalendarTask(value: object): boolean;
export declare function CalendarTaskFromJSON(json: any): CalendarTask;
export declare function CalendarTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarTask;
export declare function CalendarTaskToJSON(value?: CalendarTask | null): any;