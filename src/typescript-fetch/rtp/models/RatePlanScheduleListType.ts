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
import type { RatePlanSchedulesType } from './RatePlanSchedulesType';
import {
    RatePlanSchedulesTypeFromJSON,
    RatePlanSchedulesTypeFromJSONTyped,
    RatePlanSchedulesTypeToJSON,
} from './RatePlanSchedulesType';

/**
 * 
 * @export
 * @interface RatePlanScheduleListType
 */
export interface RatePlanScheduleListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RatePlanScheduleListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RatePlanScheduleListType
     */
    hasMore?: boolean;
    /**
     * Hotel code.
     * @type {string}
     * @memberof RatePlanScheduleListType
     */
    hotelId?: string;
    /**
     * Rate plan Code.
     * @type {string}
     * @memberof RatePlanScheduleListType
     */
    ratePlanCode?: string;
    /**
     * Rate plan schedule list.
     * @type {Array<RatePlanSchedulesType>}
     * @memberof RatePlanScheduleListType
     */
    ratePlanSchedule?: Array<RatePlanSchedulesType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RatePlanScheduleListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the RatePlanScheduleListType interface.
 */
export function instanceOfRatePlanScheduleListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanScheduleListTypeFromJSON(json: any): RatePlanScheduleListType {
    return RatePlanScheduleListTypeFromJSONTyped(json, false);
}

export function RatePlanScheduleListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanScheduleListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanSchedule': !exists(json, 'ratePlanSchedule') ? undefined : ((json['ratePlanSchedule'] as Array<any>).map(RatePlanSchedulesTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function RatePlanScheduleListTypeToJSON(value?: RatePlanScheduleListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelId': value.hotelId,
        'ratePlanCode': value.ratePlanCode,
        'ratePlanSchedule': value.ratePlanSchedule === undefined ? undefined : ((value.ratePlanSchedule as Array<any>).map(RatePlanSchedulesTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

