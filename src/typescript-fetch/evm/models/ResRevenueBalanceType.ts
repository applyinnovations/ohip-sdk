/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ResRevenueBalanceType
     */
    compBalance?: CurrencyAmountType;
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
    nonRevenue?: CurrencyAmountType;
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
    roomRevenue?: CurrencyAmountType;
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
    totalRevenue?: CurrencyAmountType;
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
        
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'compBalance': !exists(json, 'compBalance') ? undefined : CurrencyAmountTypeFromJSON(json['compBalance']),
        'foodAndBevRevenue': !exists(json, 'foodAndBevRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['foodAndBevRevenue']),
        'nonRevenue': !exists(json, 'nonRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['nonRevenue']),
        'otherRevenue': !exists(json, 'otherRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['otherRevenue']),
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['roomRevenue']),
        'totalFixedCharge': !exists(json, 'totalFixedCharge') ? undefined : CurrencyAmountTypeFromJSON(json['totalFixedCharge']),
        'totalPayment': !exists(json, 'totalPayment') ? undefined : CurrencyAmountTypeFromJSON(json['totalPayment']),
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['totalRevenue']),
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
        
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'compBalance': CurrencyAmountTypeToJSON(value.compBalance),
        'foodAndBevRevenue': CurrencyAmountTypeToJSON(value.foodAndBevRevenue),
        'nonRevenue': CurrencyAmountTypeToJSON(value.nonRevenue),
        'otherRevenue': CurrencyAmountTypeToJSON(value.otherRevenue),
        'roomRevenue': CurrencyAmountTypeToJSON(value.roomRevenue),
        'totalFixedCharge': CurrencyAmountTypeToJSON(value.totalFixedCharge),
        'totalPayment': CurrencyAmountTypeToJSON(value.totalPayment),
        'totalRevenue': CurrencyAmountTypeToJSON(value.totalRevenue),
    };
}

