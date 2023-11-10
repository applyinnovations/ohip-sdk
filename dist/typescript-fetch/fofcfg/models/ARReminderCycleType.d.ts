/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARDaysCycleType } from './ARDaysCycleType';
import type { AREndOfMonthCycleType } from './AREndOfMonthCycleType';
/**
 * When reminder letters needs to be generated. user can choose from End of month or Day cycle
 * @export
 * @interface ARReminderCycleType
 */
export interface ARReminderCycleType {
    /**
     *
     * @type {ARDaysCycleType}
     * @memberof ARReminderCycleType
     */
    daysCycle?: ARDaysCycleType;
    /**
     *
     * @type {AREndOfMonthCycleType}
     * @memberof ARReminderCycleType
     */
    endOfMonthCycle?: AREndOfMonthCycleType;
}
/**
 * Check if a given object implements the ARReminderCycleType interface.
 */
export declare function instanceOfARReminderCycleType(value: object): boolean;
export declare function ARReminderCycleTypeFromJSON(json: any): ARReminderCycleType;
export declare function ARReminderCycleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARReminderCycleType;
export declare function ARReminderCycleTypeToJSON(value?: ARReminderCycleType | null): any;
