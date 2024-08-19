/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PackagePostingRhythmTypeCertainNightsOfTheWeek } from './PackagePostingRhythmTypeCertainNightsOfTheWeek';
import type { PackagePostingRhythmTypeCustomNightSchedule } from './PackagePostingRhythmTypeCustomNightSchedule';
import type { PackagePostingRhythmTypeCustomStaySchedule } from './PackagePostingRhythmTypeCustomStaySchedule';
import type { PackagePostingRhythmTypeEveryXNightsStartingNightY } from './PackagePostingRhythmTypeEveryXNightsStartingNightY';
import type { PostingRhythmType } from './PostingRhythmType';
/**
 * Package Posting rhythm type.
 * @export
 * @interface PackagePostingRhythmType
 */
export interface PackagePostingRhythmType {
    /**
     *
     * @type {PackagePostingRhythmTypeCertainNightsOfTheWeek}
     * @memberof PackagePostingRhythmType
     */
    certainNightsOfTheWeek?: PackagePostingRhythmTypeCertainNightsOfTheWeek;
    /**
     *
     * @type {PackagePostingRhythmTypeCustomNightSchedule}
     * @memberof PackagePostingRhythmType
     */
    customNightSchedule?: PackagePostingRhythmTypeCustomNightSchedule;
    /**
     *
     * @type {PackagePostingRhythmTypeCustomStaySchedule}
     * @memberof PackagePostingRhythmType
     */
    customStaySchedule?: PackagePostingRhythmTypeCustomStaySchedule;
    /**
     *
     * @type {PackagePostingRhythmTypeEveryXNightsStartingNightY}
     * @memberof PackagePostingRhythmType
     */
    everyXNightsStartingNightY?: PackagePostingRhythmTypeEveryXNightsStartingNightY;
    /**
     *
     * @type {PostingRhythmType}
     * @memberof PackagePostingRhythmType
     */
    type?: PostingRhythmType;
}
/**
 * Check if a given object implements the PackagePostingRhythmType interface.
 */
export declare function instanceOfPackagePostingRhythmType(value: object): boolean;
export declare function PackagePostingRhythmTypeFromJSON(json: any): PackagePostingRhythmType;
export declare function PackagePostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmType;
export declare function PackagePostingRhythmTypeToJSON(value?: PackagePostingRhythmType | null): any;
