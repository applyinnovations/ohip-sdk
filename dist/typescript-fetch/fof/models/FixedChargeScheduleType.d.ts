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
import type { FixedChargeFrequencyType } from './FixedChargeFrequencyType';
/**
 * Holds schedule of fixed charge.
 * @export
 * @interface FixedChargeScheduleType
 */
export interface FixedChargeScheduleType {
    /**
     * Date of when to execute yearly fixed charge. Applicable when frequency is Yearly.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    dateToExecute?: Date;
    /**
     * Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly.
     * @type {string}
     * @memberof FixedChargeScheduleType
     */
    dayToExecute?: string;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    end?: Date;
    /**
     *
     * @type {FixedChargeFrequencyType}
     * @memberof FixedChargeScheduleType
     */
    frequency?: FixedChargeFrequencyType;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof FixedChargeScheduleType
     */
    start?: Date;
}
/**
 * Check if a given object implements the FixedChargeScheduleType interface.
 */
export declare function instanceOfFixedChargeScheduleType(value: object): boolean;
export declare function FixedChargeScheduleTypeFromJSON(json: any): FixedChargeScheduleType;
export declare function FixedChargeScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeScheduleType;
export declare function FixedChargeScheduleTypeToJSON(value?: FixedChargeScheduleType | null): any;
