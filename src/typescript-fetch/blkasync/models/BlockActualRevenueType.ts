/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Indicates the sum of revenue breakup per room type per block per allocation date for the reservations. Applicable for past dates, business date or future dates.
 * @export
 * @interface BlockActualRevenueType
 */
export interface BlockActualRevenueType {
    /**
     * Currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof BlockActualRevenueType
     */
    currency?: string;
    /**
     * Indicates food revenue amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    foodRevenue?: number;
    /**
     * Indicates food revenue tax amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    foodRevenueTax?: number;
    /**
     * Indicates non revenue amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    nonRevenue?: number;
    /**
     * Indicates non revenue tax amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    nonRevenueTax?: number;
    /**
     * Indicates other revenue amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    otherRevenue?: number;
    /**
     * Indicates other revenue tax amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    otherRevenueTax?: number;
    /**
     * Indicates room revenue amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    roomRevenue?: number;
    /**
     * Indicates room revenue tax amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    roomRevenueTax?: number;
    /**
     * Indicates total revenue amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    totalRevenue?: number;
    /**
     * Indicates total revenue tax amount.
     * @type {number}
     * @memberof BlockActualRevenueType
     */
    totalRevenueTax?: number;
}

/**
 * Check if a given object implements the BlockActualRevenueType interface.
 */
export function instanceOfBlockActualRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockActualRevenueTypeFromJSON(json: any): BlockActualRevenueType {
    return BlockActualRevenueTypeFromJSONTyped(json, false);
}

export function BlockActualRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockActualRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'foodRevenue': !exists(json, 'foodRevenue') ? undefined : json['foodRevenue'],
        'foodRevenueTax': !exists(json, 'foodRevenueTax') ? undefined : json['foodRevenueTax'],
        'nonRevenue': !exists(json, 'nonRevenue') ? undefined : json['nonRevenue'],
        'nonRevenueTax': !exists(json, 'nonRevenueTax') ? undefined : json['nonRevenueTax'],
        'otherRevenue': !exists(json, 'otherRevenue') ? undefined : json['otherRevenue'],
        'otherRevenueTax': !exists(json, 'otherRevenueTax') ? undefined : json['otherRevenueTax'],
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : json['roomRevenue'],
        'roomRevenueTax': !exists(json, 'roomRevenueTax') ? undefined : json['roomRevenueTax'],
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : json['totalRevenue'],
        'totalRevenueTax': !exists(json, 'totalRevenueTax') ? undefined : json['totalRevenueTax'],
    };
}

export function BlockActualRevenueTypeToJSON(value?: BlockActualRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'foodRevenue': value.foodRevenue,
        'foodRevenueTax': value.foodRevenueTax,
        'nonRevenue': value.nonRevenue,
        'nonRevenueTax': value.nonRevenueTax,
        'otherRevenue': value.otherRevenue,
        'otherRevenueTax': value.otherRevenueTax,
        'roomRevenue': value.roomRevenue,
        'roomRevenueTax': value.roomRevenueTax,
        'totalRevenue': value.totalRevenue,
        'totalRevenueTax': value.totalRevenueTax,
    };
}
