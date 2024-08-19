/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Identifies and provides details about the discount. This allows for both percentages and flat amounts. If one field is used, the other should be zero/not specified since logically.
 * @export
 * @interface DiscountType
 */
export interface DiscountType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof DiscountType
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof DiscountType
     */
    currencyCode?: string;
    /**
     * Specifies the type of discount (e.g., No condition, LOS, Deposit or Total amount spent).
     * @type {string}
     * @memberof DiscountType
     */
    discountCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscountType
     */
    discountReason?: string;
    /**
     * Percentage discount.
     * @type {number}
     * @memberof DiscountType
     */
    percent?: number;
}

/**
 * Check if a given object implements the DiscountType interface.
 */
export function instanceOfDiscountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountTypeFromJSON(json: any): DiscountType {
    return DiscountTypeFromJSONTyped(json, false);
}

export function DiscountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'discountCode': !exists(json, 'discountCode') ? undefined : json['discountCode'],
        'discountReason': !exists(json, 'discountReason') ? undefined : json['discountReason'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
    };
}

export function DiscountTypeToJSON(value?: DiscountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'discountCode': value.discountCode,
        'discountReason': value.discountReason,
        'percent': value.percent,
    };
}

