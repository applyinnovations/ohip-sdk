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
/**
 * Rate plan schedule to be created from split.
 * @export
 * @interface RatePlanScheduleToSplitRatePlanSchedule
 */
export interface RatePlanScheduleToSplitRatePlanSchedule {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof RatePlanScheduleToSplitRatePlanSchedule
     */
    hotelId?: string;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof RatePlanScheduleToSplitRatePlanSchedule
     */
    ratePlanCode?: string;
}

/**
 * Check if a given object implements the RatePlanScheduleToSplitRatePlanSchedule interface.
 */
export function instanceOfRatePlanScheduleToSplitRatePlanSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanScheduleToSplitRatePlanScheduleFromJSON(json: any): RatePlanScheduleToSplitRatePlanSchedule {
    return RatePlanScheduleToSplitRatePlanScheduleFromJSONTyped(json, false);
}

export function RatePlanScheduleToSplitRatePlanScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanScheduleToSplitRatePlanSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}

export function RatePlanScheduleToSplitRatePlanScheduleToJSON(value?: RatePlanScheduleToSplitRatePlanSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'ratePlanCode': value.ratePlanCode,
    };
}

