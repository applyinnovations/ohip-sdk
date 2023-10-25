/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AdjustmentDetailType } from './AdjustmentDetailType';
import {
    AdjustmentDetailTypeFromJSON,
    AdjustmentDetailTypeFromJSONTyped,
    AdjustmentDetailTypeToJSON,
} from './AdjustmentDetailType';
import type { AdvancedBaseRateOffsetType } from './AdvancedBaseRateOffsetType';
import {
    AdvancedBaseRateOffsetTypeFromJSON,
    AdvancedBaseRateOffsetTypeFromJSONTyped,
    AdvancedBaseRateOffsetTypeToJSON,
} from './AdvancedBaseRateOffsetType';
import type { OccupantThresholdPricingType } from './OccupantThresholdPricingType';
import {
    OccupantThresholdPricingTypeFromJSON,
    OccupantThresholdPricingTypeFromJSONTyped,
    OccupantThresholdPricingTypeToJSON,
} from './OccupantThresholdPricingType';
import type { RateAmountBoundariesType } from './RateAmountBoundariesType';
import {
    RateAmountBoundariesTypeFromJSON,
    RateAmountBoundariesTypeFromJSONTyped,
    RateAmountBoundariesTypeToJSON,
} from './RateAmountBoundariesType';
import type { RatePackagesType } from './RatePackagesType';
import {
    RatePackagesTypeFromJSON,
    RatePackagesTypeFromJSONTyped,
    RatePackagesTypeToJSON,
} from './RatePackagesType';
import type { RatePlanScheduleClassificationsType } from './RatePlanScheduleClassificationsType';
import {
    RatePlanScheduleClassificationsTypeFromJSON,
    RatePlanScheduleClassificationsTypeFromJSONTyped,
    RatePlanScheduleClassificationsTypeToJSON,
} from './RatePlanScheduleClassificationsType';
import type { ScheduleRateAmountsType } from './ScheduleRateAmountsType';
import {
    ScheduleRateAmountsTypeFromJSON,
    ScheduleRateAmountsTypeFromJSONTyped,
    ScheduleRateAmountsTypeToJSON,
} from './ScheduleRateAmountsType';

/**
 * 
 * @export
 * @interface BaseRatePlanScheduleDetailType
 */
export interface BaseRatePlanScheduleDetailType {
    /**
     * The list of adjustment codes for the rate plan schedule.
     * @type {Array<AdjustmentDetailType>}
     * @memberof BaseRatePlanScheduleDetailType
     */
    adjustmentDetails?: Array<AdjustmentDetailType>;
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
export function instanceOfBaseRatePlanScheduleDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseRatePlanScheduleDetailTypeFromJSON(json: any): BaseRatePlanScheduleDetailType {
    return BaseRatePlanScheduleDetailTypeFromJSONTyped(json, false);
}

export function BaseRatePlanScheduleDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseRatePlanScheduleDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentDetails': !exists(json, 'adjustmentDetails') ? undefined : ((json['adjustmentDetails'] as Array<any>).map(AdjustmentDetailTypeFromJSON)),
        'advancedBaseRateOffset': !exists(json, 'advancedBaseRateOffset') ? undefined : AdvancedBaseRateOffsetTypeFromJSON(json['advancedBaseRateOffset']),
        'classifications': !exists(json, 'classifications') ? undefined : RatePlanScheduleClassificationsTypeFromJSON(json['classifications']),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'occupantThresholdPricing': !exists(json, 'occupantThresholdPricing') ? undefined : OccupantThresholdPricingTypeFromJSON(json['occupantThresholdPricing']),
        'rateAmountBoundaries': !exists(json, 'rateAmountBoundaries') ? undefined : RateAmountBoundariesTypeFromJSON(json['rateAmountBoundaries']),
        'rateAmounts': !exists(json, 'rateAmounts') ? undefined : ScheduleRateAmountsTypeFromJSON(json['rateAmounts']),
        'rateSchedulePackages': !exists(json, 'rateSchedulePackages') ? undefined : RatePackagesTypeFromJSON(json['rateSchedulePackages']),
        'seasonCode': !exists(json, 'seasonCode') ? undefined : json['seasonCode'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'tierID': !exists(json, 'tierID') ? undefined : json['tierID'],
    };
}

export function BaseRatePlanScheduleDetailTypeToJSON(value?: BaseRatePlanScheduleDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentDetails': value.adjustmentDetails === undefined ? undefined : ((value.adjustmentDetails as Array<any>).map(AdjustmentDetailTypeToJSON)),
        'advancedBaseRateOffset': AdvancedBaseRateOffsetTypeToJSON(value.advancedBaseRateOffset),
        'classifications': RatePlanScheduleClassificationsTypeToJSON(value.classifications),
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'occupantThresholdPricing': OccupantThresholdPricingTypeToJSON(value.occupantThresholdPricing),
        'rateAmountBoundaries': RateAmountBoundariesTypeToJSON(value.rateAmountBoundaries),
        'rateAmounts': ScheduleRateAmountsTypeToJSON(value.rateAmounts),
        'rateSchedulePackages': RatePackagesTypeToJSON(value.rateSchedulePackages),
        'seasonCode': value.seasonCode,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
        'tierID': value.tierID,
    };
}

