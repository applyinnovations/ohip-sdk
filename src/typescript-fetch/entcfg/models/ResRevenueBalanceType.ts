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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Revenue and Balance Amount summary for the reservation.
 * @export
 * @interface ResRevenueBalanceType
 */
export interface ResRevenueBalanceType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    totalFixedCharge?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    totalPayment?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    roomRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    foodAndBevRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    otherRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    nonRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    totalRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    compBalance?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ResRevenueBalanceType interface.
 */
export function instanceOfResRevenueBalanceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResRevenueBalanceTypeFromJSON(json: any): ResRevenueBalanceType {
    return ResRevenueBalanceTypeFromJSONTyped(json, false);
}

export function ResRevenueBalanceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResRevenueBalanceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalFixedCharge': !exists(json, 'totalFixedCharge') ? undefined : CurrencyAmountTypeFromJSON(json['totalFixedCharge']),
        'totalPayment': !exists(json, 'totalPayment') ? undefined : CurrencyAmountTypeFromJSON(json['totalPayment']),
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['roomRevenue']),
        'foodAndBevRevenue': !exists(json, 'foodAndBevRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['foodAndBevRevenue']),
        'otherRevenue': !exists(json, 'otherRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['otherRevenue']),
        'nonRevenue': !exists(json, 'nonRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['nonRevenue']),
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['totalRevenue']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'compBalance': !exists(json, 'compBalance') ? undefined : CurrencyAmountTypeFromJSON(json['compBalance']),
    };
}

export function ResRevenueBalanceTypeToJSON(value?: ResRevenueBalanceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalFixedCharge': CurrencyAmountTypeToJSON(value.totalFixedCharge),
        'totalPayment': CurrencyAmountTypeToJSON(value.totalPayment),
        'roomRevenue': CurrencyAmountTypeToJSON(value.roomRevenue),
        'foodAndBevRevenue': CurrencyAmountTypeToJSON(value.foodAndBevRevenue),
        'otherRevenue': CurrencyAmountTypeToJSON(value.otherRevenue),
        'nonRevenue': CurrencyAmountTypeToJSON(value.nonRevenue),
        'totalRevenue': CurrencyAmountTypeToJSON(value.totalRevenue),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'compBalance': CurrencyAmountTypeToJSON(value.compBalance),
    };
}

