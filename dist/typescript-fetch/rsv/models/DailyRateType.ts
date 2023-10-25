/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DiscountType } from './DiscountType';
import {
    DiscountTypeFromJSON,
    DiscountTypeFromJSONTyped,
    DiscountTypeToJSON,
} from './DiscountType';
import type { TaxesType } from './TaxesType';
import {
    TaxesTypeFromJSON,
    TaxesTypeFromJSONTyped,
    TaxesTypeToJSON,
} from './TaxesType';

/**
 * The total amount charged for the service including additional amounts and fees.
 * @export
 * @interface DailyRateType
 */
export interface DailyRateType {
    /**
     * The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax).
     * @type {number}
     * @memberof DailyRateType
     */
    amountAfterTax?: number;
    /**
     * The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).
     * @type {number}
     * @memberof DailyRateType
     */
    amountBeforeTax?: number;
    /**
     * The rate's base price. Amount excluding price for any add to rate combine line package attached to the rate.Also excludes any discounts
     * @type {number}
     * @memberof DailyRateType
     */
    baseAmount?: number;
    /**
     * Type of charge.
     * @type {string}
     * @memberof DailyRateType
     */
    code?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof DailyRateType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof DailyRateType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof DailyRateType
     */
    decimalPlaces?: number;
    /**
     * 
     * @type {string}
     * @memberof DailyRateType
     */
    description?: string;
    /**
     * 
     * @type {DiscountType}
     * @memberof DailyRateType
     */
    discount?: DiscountType;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof DailyRateType
     */
    end?: Date;
    /**
     * When true indicates that the rate amount has been overridden.
     * @type {boolean}
     * @memberof DailyRateType
     */
    rateOverride?: boolean;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof DailyRateType
     */
    start?: Date;
    /**
     * 
     * @type {TaxesType}
     * @memberof DailyRateType
     */
    taxes?: TaxesType;
}

/**
 * Check if a given object implements the DailyRateType interface.
 */
export function instanceOfDailyRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DailyRateTypeFromJSON(json: any): DailyRateType {
    return DailyRateTypeFromJSONTyped(json, false);
}

export function DailyRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountAfterTax': !exists(json, 'amountAfterTax') ? undefined : json['amountAfterTax'],
        'amountBeforeTax': !exists(json, 'amountBeforeTax') ? undefined : json['amountBeforeTax'],
        'baseAmount': !exists(json, 'baseAmount') ? undefined : json['baseAmount'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : DiscountTypeFromJSON(json['discount']),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'rateOverride': !exists(json, 'rateOverride') ? undefined : json['rateOverride'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'taxes': !exists(json, 'taxes') ? undefined : TaxesTypeFromJSON(json['taxes']),
    };
}

export function DailyRateTypeToJSON(value?: DailyRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountAfterTax': value.amountAfterTax,
        'amountBeforeTax': value.amountBeforeTax,
        'baseAmount': value.baseAmount,
        'code': value.code,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'description': value.description,
        'discount': DiscountTypeToJSON(value.discount),
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'rateOverride': value.rateOverride,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
        'taxes': TaxesTypeToJSON(value.taxes),
    };
}

