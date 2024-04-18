/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
 * The rate rage information of the hotel.
 * @export
 * @interface HotelRateRangeType
 */
export interface HotelRateRangeType {
    /**
     * The base currency code for rate range(The currency code used by the hotel which the rate range belongs to).
     * @type {string}
     * @memberof HotelRateRangeType
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof HotelRateRangeType
     */
    hotelId?: string;
    /**
     * Maximum Rate offered by the hotel.
     * @type {number}
     * @memberof HotelRateRangeType
     */
    maxRate?: number;
    /**
     * Minimum Rate offered by the hotel.
     * @type {number}
     * @memberof HotelRateRangeType
     */
    minRate?: number;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof HotelRateRangeType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the HotelRateRangeType interface.
 */
export function instanceOfHotelRateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelRateRangeTypeFromJSON(json: any): HotelRateRangeType {
    return HotelRateRangeTypeFromJSONTyped(json, false);
}

export function HotelRateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'maxRate': !exists(json, 'maxRate') ? undefined : json['maxRate'],
        'minRate': !exists(json, 'minRate') ? undefined : json['minRate'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function HotelRateRangeTypeToJSON(value?: HotelRateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'hotelId': value.hotelId,
        'maxRate': value.maxRate,
        'minRate': value.minRate,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}
