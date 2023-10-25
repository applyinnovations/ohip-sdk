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
import type { RateByAgeBucketType } from './RateByAgeBucketType';
import {
    RateByAgeBucketTypeFromJSON,
    RateByAgeBucketTypeFromJSONTyped,
    RateByAgeBucketTypeToJSON,
} from './RateByAgeBucketType';

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
export function instanceOfScheduleRateAmountsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScheduleRateAmountsTypeFromJSON(json: any): ScheduleRateAmountsType {
    return ScheduleRateAmountsTypeFromJSONTyped(json, false);
}

export function ScheduleRateAmountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleRateAmountsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraChildRate': !exists(json, 'extraChildRate') ? undefined : json['extraChildRate'],
        'extraPersonRate': !exists(json, 'extraPersonRate') ? undefined : json['extraPersonRate'],
        'fivePersonRate': !exists(json, 'fivePersonRate') ? undefined : json['fivePersonRate'],
        'fourChildrenRate': !exists(json, 'fourChildrenRate') ? undefined : json['fourChildrenRate'],
        'fourPersonRate': !exists(json, 'fourPersonRate') ? undefined : json['fourPersonRate'],
        'minimumChildrenForFreeStay': !exists(json, 'minimumChildrenForFreeStay') ? undefined : json['minimumChildrenForFreeStay'],
        'oneChildRate': !exists(json, 'oneChildRate') ? undefined : json['oneChildRate'],
        'onePersonRate': !exists(json, 'onePersonRate') ? undefined : json['onePersonRate'],
        'overrideFloorAmount': !exists(json, 'overrideFloorAmount') ? undefined : json['overrideFloorAmount'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rateByAgeBuckets': !exists(json, 'rateByAgeBuckets') ? undefined : ((json['rateByAgeBuckets'] as Array<any>).map(RateByAgeBucketTypeFromJSON)),
        'threeChildrenRate': !exists(json, 'threeChildrenRate') ? undefined : json['threeChildrenRate'],
        'threePersonRate': !exists(json, 'threePersonRate') ? undefined : json['threePersonRate'],
        'twoChildrenRate': !exists(json, 'twoChildrenRate') ? undefined : json['twoChildrenRate'],
        'twoPersonRate': !exists(json, 'twoPersonRate') ? undefined : json['twoPersonRate'],
    };
}

export function ScheduleRateAmountsTypeToJSON(value?: ScheduleRateAmountsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extraChildRate': value.extraChildRate,
        'extraPersonRate': value.extraPersonRate,
        'fivePersonRate': value.fivePersonRate,
        'fourChildrenRate': value.fourChildrenRate,
        'fourPersonRate': value.fourPersonRate,
        'minimumChildrenForFreeStay': value.minimumChildrenForFreeStay,
        'oneChildRate': value.oneChildRate,
        'onePersonRate': value.onePersonRate,
        'overrideFloorAmount': value.overrideFloorAmount,
        'pointsRequired': value.pointsRequired,
        'rateByAgeBuckets': value.rateByAgeBuckets === undefined ? undefined : ((value.rateByAgeBuckets as Array<any>).map(RateByAgeBucketTypeToJSON)),
        'threeChildrenRate': value.threeChildrenRate,
        'threePersonRate': value.threePersonRate,
        'twoChildrenRate': value.twoChildrenRate,
        'twoPersonRate': value.twoPersonRate,
    };
}

