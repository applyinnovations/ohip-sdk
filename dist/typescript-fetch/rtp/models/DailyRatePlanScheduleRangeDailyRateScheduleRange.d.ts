/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { OccupantThresholdPricingType } from './OccupantThresholdPricingType';
import type { ScheduleRateAmountsType } from './ScheduleRateAmountsType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
/**
 * Daily Rate schedules range operation request, contains information related to Daily rate schedules range update operation.
 * @export
 * @interface DailyRatePlanScheduleRangeDailyRateScheduleRange
 */
export interface DailyRatePlanScheduleRangeDailyRateScheduleRange {
    /**
     * The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code
     * @type {string}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    advancedDailyBaseRatePlanCode?: string;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    dateRange?: TimeSpanDaysOfWeekType;
    /**
     *
     * @type {string}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    hotelId?: string;
    /**
     * Flag to indicate if the occupancy data is absolute or relative to the current value.
     * @type {boolean}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    incrementFlag?: boolean;
    /**
     *
     * @type {OccupantThresholdPricingType}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    occupantThresholdPricing?: OccupantThresholdPricingType;
    /**
     *
     * @type {ScheduleRateAmountsType}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    rateAmounts?: ScheduleRateAmountsType;
    /**
     *
     * @type {string}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    ratePlanCode?: string;
    /**
     * List of room classes for which the range update has to be applied.
     * @type {Array<string>}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    roomClasses?: Array<string>;
    /**
     * List of room types for which the range update has to be applied.
     * @type {Array<string>}
     * @memberof DailyRatePlanScheduleRangeDailyRateScheduleRange
     */
    roomTypes?: Array<string>;
}
/**
 * Check if a given object implements the DailyRatePlanScheduleRangeDailyRateScheduleRange interface.
 */
export declare function instanceOfDailyRatePlanScheduleRangeDailyRateScheduleRange(value: object): boolean;
export declare function DailyRatePlanScheduleRangeDailyRateScheduleRangeFromJSON(json: any): DailyRatePlanScheduleRangeDailyRateScheduleRange;
export declare function DailyRatePlanScheduleRangeDailyRateScheduleRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyRatePlanScheduleRangeDailyRateScheduleRange;
export declare function DailyRatePlanScheduleRangeDailyRateScheduleRangeToJSON(value?: DailyRatePlanScheduleRangeDailyRateScheduleRange | null): any;
