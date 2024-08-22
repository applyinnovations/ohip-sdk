/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AmountOrOffsetType } from './AmountOrOffsetType';
import {
    AmountOrOffsetTypeFromJSON,
    AmountOrOffsetTypeFromJSONTyped,
    AmountOrOffsetTypeToJSON,
} from './AmountOrOffsetType';
import type { BaseType } from './BaseType';
import {
    BaseTypeFromJSON,
    BaseTypeFromJSONTyped,
    BaseTypeToJSON,
} from './BaseType';
import type { PercentageOrFlatType } from './PercentageOrFlatType';
import {
    PercentageOrFlatTypeFromJSON,
    PercentageOrFlatTypeFromJSONTyped,
    PercentageOrFlatTypeToJSON,
} from './PercentageOrFlatType';
import type { RateAmountsType } from './RateAmountsType';
import {
    RateAmountsTypeFromJSON,
    RateAmountsTypeFromJSONTyped,
    RateAmountsTypeToJSON,
} from './RateAmountsType';
import type { RatePlanRoundingType } from './RatePlanRoundingType';
import {
    RatePlanRoundingTypeFromJSON,
    RatePlanRoundingTypeFromJSONTyped,
    RatePlanRoundingTypeToJSON,
} from './RatePlanRoundingType';
import type { RatePlanScheduleType } from './RatePlanScheduleType';
import {
    RatePlanScheduleTypeFromJSON,
    RatePlanScheduleTypeFromJSONTyped,
    RatePlanScheduleTypeToJSON,
} from './RatePlanScheduleType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
import {
    TimeSpanDaysOfWeekTypeFromJSON,
    TimeSpanDaysOfWeekTypeFromJSONTyped,
    TimeSpanDaysOfWeekTypeToJSON,
} from './TimeSpanDaysOfWeekType';

/**
 * Container for mass rate update operation.
 * @export
 * @interface MassRateChangeCriteriaType
 */
export interface MassRateChangeCriteriaType {
    /**
     * 
     * @type {PercentageOrFlatType}
     * @memberof MassRateChangeCriteriaType
     */
    amountType?: PercentageOrFlatType;
    /**
     * 
     * @type {BaseType}
     * @memberof MassRateChangeCriteriaType
     */
    baseType?: BaseType;
    /**
     * 
     * @type {AmountOrOffsetType}
     * @memberof MassRateChangeCriteriaType
     */
    calculation?: AmountOrOffsetType;
    /**
     * 
     * @type {TimeSpanDaysOfWeekType}
     * @memberof MassRateChangeCriteriaType
     */
    dateRange?: TimeSpanDaysOfWeekType;
    /**
     * 
     * @type {string}
     * @memberof MassRateChangeCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {RateAmountsType}
     * @memberof MassRateChangeCriteriaType
     */
    rateAmounts?: RateAmountsType;
    /**
     * Rate Codes.
     * @type {Array<string>}
     * @memberof MassRateChangeCriteriaType
     */
    rateCodes?: Array<string>;
    /**
     * Room Type.
     * @type {Array<string>}
     * @memberof MassRateChangeCriteriaType
     */
    roomTypes?: Array<string>;
    /**
     * 
     * @type {RatePlanRoundingType}
     * @memberof MassRateChangeCriteriaType
     */
    rounding?: RatePlanRoundingType;
    /**
     * 
     * @type {RatePlanScheduleType}
     * @memberof MassRateChangeCriteriaType
     */
    type?: RatePlanScheduleType;
}

/**
 * Check if a given object implements the MassRateChangeCriteriaType interface.
 */
export function instanceOfMassRateChangeCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MassRateChangeCriteriaTypeFromJSON(json: any): MassRateChangeCriteriaType {
    return MassRateChangeCriteriaTypeFromJSONTyped(json, false);
}

export function MassRateChangeCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MassRateChangeCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountType': !exists(json, 'amountType') ? undefined : PercentageOrFlatTypeFromJSON(json['amountType']),
        'baseType': !exists(json, 'baseType') ? undefined : BaseTypeFromJSON(json['baseType']),
        'calculation': !exists(json, 'calculation') ? undefined : AmountOrOffsetTypeFromJSON(json['calculation']),
        'dateRange': !exists(json, 'dateRange') ? undefined : TimeSpanDaysOfWeekTypeFromJSON(json['dateRange']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateAmounts': !exists(json, 'rateAmounts') ? undefined : RateAmountsTypeFromJSON(json['rateAmounts']),
        'rateCodes': !exists(json, 'rateCodes') ? undefined : json['rateCodes'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
        'rounding': !exists(json, 'rounding') ? undefined : RatePlanRoundingTypeFromJSON(json['rounding']),
        'type': !exists(json, 'type') ? undefined : RatePlanScheduleTypeFromJSON(json['type']),
    };
}

export function MassRateChangeCriteriaTypeToJSON(value?: MassRateChangeCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountType': PercentageOrFlatTypeToJSON(value.amountType),
        'baseType': BaseTypeToJSON(value.baseType),
        'calculation': AmountOrOffsetTypeToJSON(value.calculation),
        'dateRange': TimeSpanDaysOfWeekTypeToJSON(value.dateRange),
        'hotelId': value.hotelId,
        'rateAmounts': RateAmountsTypeToJSON(value.rateAmounts),
        'rateCodes': value.rateCodes,
        'roomTypes': value.roomTypes,
        'rounding': RatePlanRoundingTypeToJSON(value.rounding),
        'type': RatePlanScheduleTypeToJSON(value.type),
    };
}

