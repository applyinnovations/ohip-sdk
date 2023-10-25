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
 * Details of rate plan schedule including room type list and days of week of the schedule.
 * @export
 * @interface RatePlanScheduleDetailType
 */
export interface RatePlanScheduleDetailType {
    /**
     * The list of adjustment codes for the rate plan schedule.
     * @type {Array<AdjustmentDetailType>}
     * @memberof RatePlanScheduleDetailType
     */
    adjustmentDetails?: Array<AdjustmentDetailType>;
    /**
     * 
     * @type {AdvancedBaseRateOffsetType}
     * @memberof RatePlanScheduleDetailType
     */
    advancedBaseRateOffset?: AdvancedBaseRateOffsetType;
    /**
     * The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code
     * @type {string}
     * @memberof RatePlanScheduleDetailType
     */
    advancedDailyBaseRatePlanCode?: string;
    /**
     * 
     * @type {RatePlanScheduleClassificationsType}
     * @memberof RatePlanScheduleDetailType
     */
    classifications?: RatePlanScheduleClassificationsType;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof RatePlanScheduleDetailType
     */
    end?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    monday?: boolean;
    /**
     * 
     * @type {OccupantThresholdPricingType}
     * @memberof RatePlanScheduleDetailType
     */
    occupantThresholdPricing?: OccupantThresholdPricingType;
    /**
     * 
     * @type {RateAmountBoundariesType}
     * @memberof RatePlanScheduleDetailType
     */
    rateAmountBoundaries?: RateAmountBoundariesType;
    /**
     * 
     * @type {ScheduleRateAmountsType}
     * @memberof RatePlanScheduleDetailType
     */
    rateAmounts?: ScheduleRateAmountsType;
    /**
     * 
     * @type {RatePackagesType}
     * @memberof RatePlanScheduleDetailType
     */
    rateSchedulePackages?: RatePackagesType;
    /**
     * Room Type.
     * @type {Array<string>}
     * @memberof RatePlanScheduleDetailType
     */
    roomTypeList?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    saturday?: boolean;
    /**
     * Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record.
     * @type {string}
     * @memberof RatePlanScheduleDetailType
     */
    seasonCode?: string;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof RatePlanScheduleDetailType
     */
    start?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    thursday?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RatePlanScheduleDetailType
     */
    tierID?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RatePlanScheduleDetailType
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the RatePlanScheduleDetailType interface.
 */
export function instanceOfRatePlanScheduleDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanScheduleDetailTypeFromJSON(json: any): RatePlanScheduleDetailType {
    return RatePlanScheduleDetailTypeFromJSONTyped(json, false);
}

export function RatePlanScheduleDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanScheduleDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentDetails': !exists(json, 'adjustmentDetails') ? undefined : ((json['adjustmentDetails'] as Array<any>).map(AdjustmentDetailTypeFromJSON)),
        'advancedBaseRateOffset': !exists(json, 'advancedBaseRateOffset') ? undefined : AdvancedBaseRateOffsetTypeFromJSON(json['advancedBaseRateOffset']),
        'advancedDailyBaseRatePlanCode': !exists(json, 'advancedDailyBaseRatePlanCode') ? undefined : json['advancedDailyBaseRatePlanCode'],
        'classifications': !exists(json, 'classifications') ? undefined : RatePlanScheduleClassificationsTypeFromJSON(json['classifications']),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'occupantThresholdPricing': !exists(json, 'occupantThresholdPricing') ? undefined : OccupantThresholdPricingTypeFromJSON(json['occupantThresholdPricing']),
        'rateAmountBoundaries': !exists(json, 'rateAmountBoundaries') ? undefined : RateAmountBoundariesTypeFromJSON(json['rateAmountBoundaries']),
        'rateAmounts': !exists(json, 'rateAmounts') ? undefined : ScheduleRateAmountsTypeFromJSON(json['rateAmounts']),
        'rateSchedulePackages': !exists(json, 'rateSchedulePackages') ? undefined : RatePackagesTypeFromJSON(json['rateSchedulePackages']),
        'roomTypeList': !exists(json, 'roomTypeList') ? undefined : json['roomTypeList'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'seasonCode': !exists(json, 'seasonCode') ? undefined : json['seasonCode'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tierID': !exists(json, 'tierID') ? undefined : json['tierID'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function RatePlanScheduleDetailTypeToJSON(value?: RatePlanScheduleDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentDetails': value.adjustmentDetails === undefined ? undefined : ((value.adjustmentDetails as Array<any>).map(AdjustmentDetailTypeToJSON)),
        'advancedBaseRateOffset': AdvancedBaseRateOffsetTypeToJSON(value.advancedBaseRateOffset),
        'advancedDailyBaseRatePlanCode': value.advancedDailyBaseRatePlanCode,
        'classifications': RatePlanScheduleClassificationsTypeToJSON(value.classifications),
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'friday': value.friday,
        'monday': value.monday,
        'occupantThresholdPricing': OccupantThresholdPricingTypeToJSON(value.occupantThresholdPricing),
        'rateAmountBoundaries': RateAmountBoundariesTypeToJSON(value.rateAmountBoundaries),
        'rateAmounts': ScheduleRateAmountsTypeToJSON(value.rateAmounts),
        'rateSchedulePackages': RatePackagesTypeToJSON(value.rateSchedulePackages),
        'roomTypeList': value.roomTypeList,
        'saturday': value.saturday,
        'seasonCode': value.seasonCode,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tierID': value.tierID,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}

