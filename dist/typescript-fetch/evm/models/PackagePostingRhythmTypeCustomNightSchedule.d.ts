/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The eventStartDate and eventEndDate of the posting period is determined as follows: If the package is attached to a rate code: The period starts with the date when the rate code to which the package is attached becomes effective for the stay. The period ends with the date of the last night for that rate code (or the last night of the stay if the rate code remains in effect until the departure date). If the package is attached separately to the reservation: The Begin Date specified on the reservation when the package was attached is the eventStartDate date for the period. The End Date specified on the reservation when the package was attached is the eventEndDate date for the period. If no Begin Date and/or End Date are specified when the package is attached to the reservation, the Begin Date is assumed to be the arrival date and the End Date is assumed to be the departure date of the reservation, irrespective of when the package is attached to the reservation.
 * @export
 * @interface PackagePostingRhythmTypeCustomNightSchedule
 */
export interface PackagePostingRhythmTypeCustomNightSchedule {
    /**
     * Night 1 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night1?: boolean;
    /**
     * Night 10 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night10?: boolean;
    /**
     * Night 11 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night11?: boolean;
    /**
     * Night 12 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night12?: boolean;
    /**
     * Night 13 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night13?: boolean;
    /**
     * Night 14 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night14?: boolean;
    /**
     * Night 2 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night2?: boolean;
    /**
     * Night 3 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night3?: boolean;
    /**
     * Night 4 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night4?: boolean;
    /**
     * Night 5 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night5?: boolean;
    /**
     * Night 6 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night6?: boolean;
    /**
     * Night 7 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night7?: boolean;
    /**
     * Night 8 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night8?: boolean;
    /**
     * Night 9 indicator.
     * @type {boolean}
     * @memberof PackagePostingRhythmTypeCustomNightSchedule
     */
    night9?: boolean;
}
/**
 * Check if a given object implements the PackagePostingRhythmTypeCustomNightSchedule interface.
 */
export declare function instanceOfPackagePostingRhythmTypeCustomNightSchedule(value: object): boolean;
export declare function PackagePostingRhythmTypeCustomNightScheduleFromJSON(json: any): PackagePostingRhythmTypeCustomNightSchedule;
export declare function PackagePostingRhythmTypeCustomNightScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmTypeCustomNightSchedule;
export declare function PackagePostingRhythmTypeCustomNightScheduleToJSON(value?: PackagePostingRhythmTypeCustomNightSchedule | null): any;
