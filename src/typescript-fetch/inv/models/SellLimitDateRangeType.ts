/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface SellLimitDateRangeType
 */
export interface SellLimitDateRangeType {
    /**
     * It indicates the call is to update Available Rooms, Sell Limit or Sell Control Rooms.
     * @type {string}
     * @memberof SellLimitDateRangeType
     */
    actionType?: string;
    /**
     * 
     * @type {number}
     * @memberof SellLimitDateRangeType
     */
    amount?: number;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof SellLimitDateRangeType
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SellLimitDateRangeType
     */
    flatOrPercentage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    saturday?: boolean;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof SellLimitDateRangeType
     */
    startDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SellLimitDateRangeType
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the SellLimitDateRangeType interface.
 */
export function instanceOfSellLimitDateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SellLimitDateRangeTypeFromJSON(json: any): SellLimitDateRangeType {
    return SellLimitDateRangeTypeFromJSONTyped(json, false);
}

export function SellLimitDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitDateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'flatOrPercentage': !exists(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function SellLimitDateRangeTypeToJSON(value?: SellLimitDateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionType': value.actionType,
        'amount': value.amount,
        'endDate': value.endDate,
        'flatOrPercentage': value.flatOrPercentage,
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'startDate': value.startDate,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
