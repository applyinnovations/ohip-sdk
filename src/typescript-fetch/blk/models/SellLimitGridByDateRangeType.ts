/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Indicates the sell limits for a date range. This will be rooms.
 * @export
 * @interface SellLimitGridByDateRangeType
 */
export interface SellLimitGridByDateRangeType {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof SellLimitGridByDateRangeType
     */
    end?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    saturday?: boolean;
    /**
     * Indicates the sell limit for the date range.
     * @type {number}
     * @memberof SellLimitGridByDateRangeType
     */
    sellLimit?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof SellLimitGridByDateRangeType
     */
    start?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the SellLimitGridByDateRangeType interface.
 */
export function instanceOfSellLimitGridByDateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SellLimitGridByDateRangeTypeFromJSON(json: any): SellLimitGridByDateRangeType {
    return SellLimitGridByDateRangeTypeFromJSONTyped(json, false);
}

export function SellLimitGridByDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitGridByDateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'end': !exists(json, 'end') ? undefined : json['end'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'sellLimit': !exists(json, 'sellLimit') ? undefined : json['sellLimit'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function SellLimitGridByDateRangeTypeToJSON(value?: SellLimitGridByDateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end': value.end,
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sellLimit': value.sellLimit,
        'start': value.start,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}

