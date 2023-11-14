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
import type { AdvancedBaseRateOffsetType } from './AdvancedBaseRateOffsetType';
import type { OccupantThresholdPricingType } from './OccupantThresholdPricingType';
import type { RateAmountBoundariesType } from './RateAmountBoundariesType';
import type { RatePackagesType } from './RatePackagesType';
import type { RatePlanScheduleClassificationsType } from './RatePlanScheduleClassificationsType';
import type { ScheduleAdjustmentDetailsType } from './ScheduleAdjustmentDetailsType';
import type { ScheduleRateAmountsType } from './ScheduleRateAmountsType';
/**
 *
 * @export
 * @interface BaseRatePlanScheduleDetailType
 */
export interface BaseRatePlanScheduleDetailType {
    /**
     *
     * @type {ScheduleAdjustmentDetailsType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    adjustmentDetails?: ScheduleAdjustmentDetailsType;
    /**
     *
     * @type {AdvancedBaseRateOffsetType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    advancedBaseRateOffset?: AdvancedBaseRateOffsetType;
    /**
     *
     * @type {RatePlanScheduleClassificationsType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    classifications?: RatePlanScheduleClassificationsType;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof BaseRatePlanScheduleDetailType
     */
    end?: Date;
    /**
     *
     * @type {OccupantThresholdPricingType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    occupantThresholdPricing?: OccupantThresholdPricingType;
    /**
     *
     * @type {RateAmountBoundariesType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    rateAmountBoundaries?: RateAmountBoundariesType;
    /**
     *
     * @type {ScheduleRateAmountsType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    rateAmounts?: ScheduleRateAmountsType;
    /**
     *
     * @type {RatePackagesType}
     * @memberof BaseRatePlanScheduleDetailType
     */
    rateSchedulePackages?: RatePackagesType;
    /**
     * Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record.
     * @type {string}
     * @memberof BaseRatePlanScheduleDetailType
     */
    seasonCode?: string;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof BaseRatePlanScheduleDetailType
     */
    start?: Date;
    /**
     *
     * @type {number}
     * @memberof BaseRatePlanScheduleDetailType
     */
    tierID?: number;
}
/**
 * Check if a given object implements the BaseRatePlanScheduleDetailType interface.
 */
export declare function instanceOfBaseRatePlanScheduleDetailType(value: object): boolean;
export declare function BaseRatePlanScheduleDetailTypeFromJSON(json: any): BaseRatePlanScheduleDetailType;
export declare function BaseRatePlanScheduleDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseRatePlanScheduleDetailType;
export declare function BaseRatePlanScheduleDetailTypeToJSON(value?: BaseRatePlanScheduleDetailType | null): any;