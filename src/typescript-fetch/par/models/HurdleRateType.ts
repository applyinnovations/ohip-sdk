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
/**
 * Unique identifier for hurdle rate.
 * @export
 * @interface HurdleRateType
 */
export interface HurdleRateType {
    /**
     * Maximum number of rooms to sell for which the delta is applicable to be aded to hurdle rate.
     * @type {number}
     * @memberof HurdleRateType
     */
    ceiling?: number;
    /**
     * Defines the amount to be added to hurdle rate for each additional rooms sold up to the ceiling.
     * @type {number}
     * @memberof HurdleRateType
     */
    delta?: number;
    /**
     * Hotel code for which the hurdle rate belongs to.
     * @type {string}
     * @memberof HurdleRateType
     */
    hotelId?: string;
    /**
     * Defines the amount to be reached before rate code or room type is made available.
     * @type {number}
     * @memberof HurdleRateType
     */
    hurdle?: number;
    /**
     * Hurdle date for which the hurdle rate is scheduled.
     * @type {string}
     * @memberof HurdleRateType
     */
    hurdleDate?: string;
    /**
     * Length of stay for which the hurdle rate applies to.
     * @type {number}
     * @memberof HurdleRateType
     */
    lengthOfStay?: number;
    /**
     * Maximum number of rooms to sell.
     * @type {number}
     * @memberof HurdleRateType
     */
    maxSolds?: number;
    /**
     * Specifies whether to override hurdle rate or not.
     * @type {boolean}
     * @memberof HurdleRateType
     */
    override?: boolean;
    /**
     * Internal room category of the room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    roomCategory?: string;
    /**
     * Room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    roomType?: string;
    /**
     * Defines the actual number of rooms sold.
     * @type {number}
     * @memberof HurdleRateType
     */
    roomsSold?: number;
    /**
     * Yield category for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    yieldCategory?: string;
    /**
     * Yield market code for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    yieldMarketCode?: string;
}

/**
 * Check if a given object implements the HurdleRateType interface.
 */
export function instanceOfHurdleRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HurdleRateTypeFromJSON(json: any): HurdleRateType {
    return HurdleRateTypeFromJSONTyped(json, false);
}

export function HurdleRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HurdleRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ceiling': !exists(json, 'ceiling') ? undefined : json['ceiling'],
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hurdle': !exists(json, 'hurdle') ? undefined : json['hurdle'],
        'hurdleDate': !exists(json, 'hurdleDate') ? undefined : json['hurdleDate'],
        'lengthOfStay': !exists(json, 'lengthOfStay') ? undefined : json['lengthOfStay'],
        'maxSolds': !exists(json, 'maxSolds') ? undefined : json['maxSolds'],
        'override': !exists(json, 'override') ? undefined : json['override'],
        'roomCategory': !exists(json, 'roomCategory') ? undefined : json['roomCategory'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomsSold': !exists(json, 'roomsSold') ? undefined : json['roomsSold'],
        'yieldCategory': !exists(json, 'yieldCategory') ? undefined : json['yieldCategory'],
        'yieldMarketCode': !exists(json, 'yieldMarketCode') ? undefined : json['yieldMarketCode'],
    };
}

export function HurdleRateTypeToJSON(value?: HurdleRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ceiling': value.ceiling,
        'delta': value.delta,
        'hotelId': value.hotelId,
        'hurdle': value.hurdle,
        'hurdleDate': value.hurdleDate,
        'lengthOfStay': value.lengthOfStay,
        'maxSolds': value.maxSolds,
        'override': value.override,
        'roomCategory': value.roomCategory,
        'roomType': value.roomType,
        'roomsSold': value.roomsSold,
        'yieldCategory': value.yieldCategory,
        'yieldMarketCode': value.yieldMarketCode,
    };
}

