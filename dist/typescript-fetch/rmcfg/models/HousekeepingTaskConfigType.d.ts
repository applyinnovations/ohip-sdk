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
import type { ColorType } from './ColorType';
/**
 * Common code type for code, description
 * @export
 * @interface HousekeepingTaskConfigType
 */
export interface HousekeepingTaskConfigType {
    /**
     * Percentage of Credits that will be used for this task. Used when the Housekeeping Credits functionality is set to use ROOM_TASK_RULE. The default value is 100.
     * @type {number}
     * @memberof HousekeepingTaskConfigType
     */
    appliedCreditsPercentage?: number;
    /**
     * Code for the code type.
     * @type {string}
     * @memberof HousekeepingTaskConfigType
     */
    code?: string;
    /**
     *
     * @type {ColorType}
     * @memberof HousekeepingTaskConfigType
     */
    color?: ColorType;
    /**
     * Signifies that task is a default task for the checked out room.
     * @type {boolean}
     * @memberof HousekeepingTaskConfigType
     */
    defaultDepartureTask?: boolean;
    /**
     * Description for the code type.
     * @type {string}
     * @memberof HousekeepingTaskConfigType
     */
    description?: string;
    /**
     * Signifies whether housekeeping task is a guest requested task.
     * @type {boolean}
     * @memberof HousekeepingTaskConfigType
     */
    guestRequested?: boolean;
    /**
     * Hotel Code for a housekeeping task.
     * @type {string}
     * @memberof HousekeepingTaskConfigType
     */
    hotelId?: string;
    /**
     * Indicates if the task is inactive.
     * @type {boolean}
     * @memberof HousekeepingTaskConfigType
     */
    inactive?: boolean;
    /**
     * Instructions of the housekeeping task.
     * @type {string}
     * @memberof HousekeepingTaskConfigType
     */
    instructions?: string;
    /**
     * Signifies whether housekeeping task requires linen change.
     * @type {boolean}
     * @memberof HousekeepingTaskConfigType
     */
    linenChange?: boolean;
    /**
     * Flag that determines whether this record is protected from removing or not
     * @type {boolean}
     * @memberof HousekeepingTaskConfigType
     */
    _protected?: boolean;
    /**
     * Display sequence for the housekeeping task.
     * @type {number}
     * @memberof HousekeepingTaskConfigType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the HousekeepingTaskConfigType interface.
 */
export declare function instanceOfHousekeepingTaskConfigType(value: object): boolean;
export declare function HousekeepingTaskConfigTypeFromJSON(json: any): HousekeepingTaskConfigType;
export declare function HousekeepingTaskConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTaskConfigType;
export declare function HousekeepingTaskConfigTypeToJSON(value?: HousekeepingTaskConfigType | null): any;