/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ScheduleRateAmountsType } from './ScheduleRateAmountsType';
import {
    ScheduleRateAmountsTypeFromJSON,
    ScheduleRateAmountsTypeFromJSONTyped,
    ScheduleRateAmountsTypeToJSON,
} from './ScheduleRateAmountsType';

/**
 * Daily rate plan schedule details.
 * @export
 * @interface DailyRatePlanScheduleType
 */
export interface DailyRatePlanScheduleType {
    /**
     * 
     * @type {ScheduleRateAmountsType}
     * @memberof DailyRatePlanScheduleType
     */
    rateAmounts?: ScheduleRateAmountsType;
    /**
     * The rate date for which the daily rate amounts will be applied.
     * @type {string}
     * @memberof DailyRatePlanScheduleType
     */
    rateDate?: string;
    /**
     * The rate code for which the daily rate amounts will be applied.
     * @type {string}
     * @memberof DailyRatePlanScheduleType
     */
    ratePlanCode?: string;
    /**
     * The room type label for which the daily rate amounts will be applied.
     * @type {string}
     * @memberof DailyRatePlanScheduleType
     */
    roomType?: string;
}

/**
 * Check if a given object implements the DailyRatePlanScheduleType interface.
 */
export function instanceOfDailyRatePlanScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DailyRatePlanScheduleTypeFromJSON(json: any): DailyRatePlanScheduleType {
    return DailyRatePlanScheduleTypeFromJSONTyped(json, false);
}

export function DailyRatePlanScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyRatePlanScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rateAmounts': !exists(json, 'rateAmounts') ? undefined : ScheduleRateAmountsTypeFromJSON(json['rateAmounts']),
        'rateDate': !exists(json, 'rateDate') ? undefined : json['rateDate'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
    };
}

export function DailyRatePlanScheduleTypeToJSON(value?: DailyRatePlanScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rateAmounts': ScheduleRateAmountsTypeToJSON(value.rateAmounts),
        'rateDate': value.rateDate,
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
    };
}

