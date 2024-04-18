/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RateByAgeBucketType } from './RateByAgeBucketType';
/**
 *
 * @export
 * @interface ScheduleRateAmountsType
 */
export interface ScheduleRateAmountsType {
    /**
     * Rate amount for each extra Child.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    extraChildRate?: number;
    /**
     * Rate amount for each extra person.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    extraPersonRate?: number;
    /**
     * Rate amount for five persons.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    fivePersonRate?: number;
    /**
     * Rate amount for four Children.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    fourChildrenRate?: number;
    /**
     * Rate amount for four persons.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    fourPersonRate?: number;
    /**
     * Minimum number of children needed to get free stay.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    minimumChildrenForFreeStay?: number;
    /**
     * Rate amount for one Child.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    oneChildRate?: number;
    /**
     * Rate amount for one person.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    onePersonRate?: number;
    /**
     * true if floor amount needs to be override
     * @type {boolean}
     * @memberof ScheduleRateAmountsType
     */
    overrideFloorAmount?: boolean;
    /**
     * The number of award points required for applying this rate plan schedule.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    pointsRequired?: number;
    /**
     * Rate amount by age bucket.
     * @type {Array<RateByAgeBucketType>}
     * @memberof ScheduleRateAmountsType
     */
    rateByAgeBuckets?: Array<RateByAgeBucketType>;
    /**
     * Rate amount for three Children.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    threeChildrenRate?: number;
    /**
     * Rate amount for three persons.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    threePersonRate?: number;
    /**
     * Rate amount for two Children.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    twoChildrenRate?: number;
    /**
     * Rate amount for two persons.
     * @type {number}
     * @memberof ScheduleRateAmountsType
     */
    twoPersonRate?: number;
}
/**
 * Check if a given object implements the ScheduleRateAmountsType interface.
 */
export declare function instanceOfScheduleRateAmountsType(value: object): boolean;
export declare function ScheduleRateAmountsTypeFromJSON(json: any): ScheduleRateAmountsType;
export declare function ScheduleRateAmountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleRateAmountsType;
export declare function ScheduleRateAmountsTypeToJSON(value?: ScheduleRateAmountsType | null): any;