/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This user defined schedule lets you enter a posting rhythm over a 14-day period, starting with the arrival date, by assigning the day (number) within a guest stay for posting this package price.
 * @export
 * @interface PackagePostingRhythmTypeCustomStaySchedule
 */
export interface PackagePostingRhythmTypeCustomStaySchedule {
    /**
     * Night 1 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night1?: boolean;
    /**
     * Night 10 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night10?: boolean;
    /**
     * Night 11 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night11?: boolean;
    /**
     * Night 12 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night12?: boolean;
    /**
     * Night 13 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night13?: boolean;
    /**
     * Night 14 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night14?: boolean;
    /**
     * Night 2 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night2?: boolean;
    /**
     * Night 3 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night3?: boolean;
    /**
     * Night 4 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night4?: boolean;
    /**
     * Night 5 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night5?: boolean;
    /**
     * Night 6 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night6?: boolean;
    /**
     * Night 7 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night7?: boolean;
    /**
     * Night 8 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night8?: boolean;
    /**
     * Night 9 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomStaySchedule
     */
    night9?: boolean;
}
/**
 * Check if a given object implements the PackagePostingRhythmTypeCustomStaySchedule interface.
 */
export declare function instanceOfPackagePostingRhythmTypeCustomStaySchedule(value: object): boolean;
export declare function PackagePostingRhythmTypeCustomStayScheduleFromJSON(json: any): PackagePostingRhythmTypeCustomStaySchedule;
export declare function PackagePostingRhythmTypeCustomStayScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmTypeCustomStaySchedule;
export declare function PackagePostingRhythmTypeCustomStayScheduleToJSON(value?: PackagePostingRhythmTypeCustomStaySchedule | null): any;
