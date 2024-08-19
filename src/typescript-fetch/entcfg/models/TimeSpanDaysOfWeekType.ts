/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Container for Time span with days of week.
 * @export
 * @interface TimeSpanDaysOfWeekType
 */
export interface TimeSpanDaysOfWeekType {
    /**
     * 
     * @type {TimeSpanType}
     * @memberof TimeSpanDaysOfWeekType
     */
    timeSpan?: TimeSpanType;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    wednesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSpanDaysOfWeekType
     */
    saturday?: boolean;
}

/**
 * Check if a given object implements the TimeSpanDaysOfWeekType interface.
 */
export function instanceOfTimeSpanDaysOfWeekType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimeSpanDaysOfWeekTypeFromJSON(json: any): TimeSpanDaysOfWeekType {
    return TimeSpanDaysOfWeekTypeFromJSONTyped(json, false);
}

export function TimeSpanDaysOfWeekTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSpanDaysOfWeekType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
    };
}

export function TimeSpanDaysOfWeekTypeToJSON(value?: TimeSpanDaysOfWeekType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'sunday': value.sunday,
        'monday': value.monday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
        'thursday': value.thursday,
        'friday': value.friday,
        'saturday': value.saturday,
    };
}

