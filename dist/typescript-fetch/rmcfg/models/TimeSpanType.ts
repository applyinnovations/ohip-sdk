/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface TimeSpanType
 */
export interface TimeSpanType {
    /**
     * 
     * @type {string}
     * @memberof TimeSpanType
     */
    duration?: string;
    /**
     * 
     * @type {Date}
     * @memberof TimeSpanType
     */
    endDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TimeSpanType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the TimeSpanType interface.
 */
export function instanceOfTimeSpanType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimeSpanTypeFromJSON(json: any): TimeSpanType {
    return TimeSpanTypeFromJSONTyped(json, false);
}

export function TimeSpanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSpanType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function TimeSpanTypeToJSON(value?: TimeSpanType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

