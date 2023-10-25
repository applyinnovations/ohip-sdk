/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
 * @interface TotalType
 */
export interface TotalType {
    /**
     * The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax).
     * @type {number}
     * @memberof TotalType
     */
    amountAfterTax?: number;
    /**
     * The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).
     * @type {number}
     * @memberof TotalType
     */
    amountBeforeTax?: number;
    /**
     * The rate's base price. Amount excluding price for any add to rate combine line package attached to the rate.Also excludes any discounts
     * @type {number}
     * @memberof TotalType
     */
    baseAmount?: number;
    /**
     * Type of charge.
     * @type {string}
     * @memberof TotalType
     */
    code?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof TotalType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof TotalType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof TotalType
     */
    decimalPlaces?: number;
    /**
     * 
     * @type {string}
     * @memberof TotalType
     */
    description?: string;
    /**
     * 
     * @type {FeesType}
     * @memberof TotalType
     */
    fees?: FeesType;
    /**
     * When true indicates that the rate amount has been overridden.
     * @type {boolean}
     * @memberof TotalType
     */
    rateOverride?: boolean;
    /**
     * 
     * @type {TaxesType}
     * @memberof TotalType
     */
    taxes?: TaxesType;
}

/**
 * Check if a given object implements the TotalType interface.
 */
export function instanceOfTotalType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TotalTypeFromJSON(json: any): TotalType {
    return TotalTypeFromJSONTyped(json, false);
}

export function TotalTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TotalType {
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
        'fees': !exists(json, 'fees') ? undefined : FeesTypeFromJSON(json['fees']),
        'rateOverride': !exists(json, 'rateOverride') ? undefined : json['rateOverride'],
        'taxes': !exists(json, 'taxes') ? undefined : TaxesTypeFromJSON(json['taxes']),
    };
}

export function TotalTypeToJSON(value?: TotalType | null): any {
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
        'fees': FeesTypeToJSON(value.fees),
        'rateOverride': value.rateOverride,
        'taxes': TaxesTypeToJSON(value.taxes),
    };
}

