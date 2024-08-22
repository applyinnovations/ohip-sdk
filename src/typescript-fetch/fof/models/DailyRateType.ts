/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { FeesType } from './FeesType';
import {
    FeesTypeFromJSON,
    FeesTypeFromJSONTyped,
    FeesTypeToJSON,
} from './FeesType';
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
     * @type {string}
     * @memberof DailyRateType
     */
    end?: string;
    /**
     * 
     * @type {FeesType}
     * @memberof DailyRateType
     */
    fees?: FeesType;
    /**
     * When true indicates that the rate amount has been overridden.
     * @type {boolean}
     * @memberof DailyRateType
     */
    rateOverride?: boolean;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof DailyRateType
     */
    start?: string;
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
        'end': !exists(json, 'end') ? undefined : json['end'],
        'fees': !exists(json, 'fees') ? undefined : FeesTypeFromJSON(json['fees']),
        'rateOverride': !exists(json, 'rateOverride') ? undefined : json['rateOverride'],
        'start': !exists(json, 'start') ? undefined : json['start'],
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
        'end': value.end,
        'fees': FeesTypeToJSON(value.fees),
        'rateOverride': value.rateOverride,
        'start': value.start,
        'taxes': TaxesTypeToJSON(value.taxes),
    };
}

