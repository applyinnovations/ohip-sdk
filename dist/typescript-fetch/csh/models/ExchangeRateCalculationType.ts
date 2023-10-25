/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { CurrencyExchangeType } from './CurrencyExchangeType';
import {
    CurrencyExchangeTypeFromJSON,
    CurrencyExchangeTypeFromJSONTyped,
    CurrencyExchangeTypeToJSON,
} from './CurrencyExchangeType';
import type { ExchangeRateCalculationTaxType } from './ExchangeRateCalculationTaxType';
import {
    ExchangeRateCalculationTaxTypeFromJSON,
    ExchangeRateCalculationTaxTypeFromJSONTyped,
    ExchangeRateCalculationTaxTypeToJSON,
} from './ExchangeRateCalculationTaxType';

/**
 * Currency conversion calculation type.
 * @export
 * @interface ExchangeRateCalculationType
 */
export interface ExchangeRateCalculationType {
    /**
     * Buy commission for the foreign currency.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    buyCommission?: number;
    /**
     * Pure calculated amount.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    calculatedAmount?: number;
    /**
     * Date on which the exchange is to take place.
     * @type {Date}
     * @memberof ExchangeRateCalculationType
     */
    date?: Date;
    /**
     * Amount in Euro for the exchange.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    euroAmount?: number;
    /**
     * Exchange rate against Euro.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    euroExchangeRate?: number;
    /**
     * Date on which exchange rate was obtained.
     * @type {Date}
     * @memberof ExchangeRateCalculationType
     */
    exchangeDate?: Date;
    /**
     * Exchange Information - text presentation of the exchange operation including formula, buy rate, etc.
     * @type {string}
     * @memberof ExchangeRateCalculationType
     */
    exchangeInformation?: string;
    /**
     * Exchange Rate.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    exchangeRate?: number;
    /**
     * 
     * @type {ExchangeRateCalculationTaxType}
     * @memberof ExchangeRateCalculationType
     */
    exchangeRateCalculationTax?: ExchangeRateCalculationTaxType;
    /**
     * Exchange references.
     * @type {string}
     * @memberof ExchangeRateCalculationType
     */
    exchangeReference?: string;
    /**
     * 
     * @type {CurrencyExchangeType}
     * @memberof ExchangeRateCalculationType
     */
    exchangeType?: CurrencyExchangeType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ExchangeRateCalculationType
     */
    fromCurrencyAmount?: CurrencyAmountType;
    /**
     * Property code where the currency is being converted.
     * @type {string}
     * @memberof ExchangeRateCalculationType
     */
    hotelId?: string;
    /**
     * Amount by which the exchange was rounded.
     * @type {number}
     * @memberof ExchangeRateCalculationType
     */
    roundingAmount?: number;
    /**
     * Buy or Sell for calculation.
     * @type {boolean}
     * @memberof ExchangeRateCalculationType
     */
    sell?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ExchangeRateCalculationType
     */
    serviceTax?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ExchangeRateCalculationType
     */
    toCurrencyAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ExchangeRateCalculationType interface.
 */
export function instanceOfExchangeRateCalculationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExchangeRateCalculationTypeFromJSON(json: any): ExchangeRateCalculationType {
    return ExchangeRateCalculationTypeFromJSONTyped(json, false);
}

export function ExchangeRateCalculationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeRateCalculationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buyCommission': !exists(json, 'buyCommission') ? undefined : json['buyCommission'],
        'calculatedAmount': !exists(json, 'calculatedAmount') ? undefined : json['calculatedAmount'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'euroAmount': !exists(json, 'euroAmount') ? undefined : json['euroAmount'],
        'euroExchangeRate': !exists(json, 'euroExchangeRate') ? undefined : json['euroExchangeRate'],
        'exchangeDate': !exists(json, 'exchangeDate') ? undefined : (new Date(json['exchangeDate'])),
        'exchangeInformation': !exists(json, 'exchangeInformation') ? undefined : json['exchangeInformation'],
        'exchangeRate': !exists(json, 'exchangeRate') ? undefined : json['exchangeRate'],
        'exchangeRateCalculationTax': !exists(json, 'exchangeRateCalculationTax') ? undefined : ExchangeRateCalculationTaxTypeFromJSON(json['exchangeRateCalculationTax']),
        'exchangeReference': !exists(json, 'exchangeReference') ? undefined : json['exchangeReference'],
        'exchangeType': !exists(json, 'exchangeType') ? undefined : CurrencyExchangeTypeFromJSON(json['exchangeType']),
        'fromCurrencyAmount': !exists(json, 'fromCurrencyAmount') ? undefined : CurrencyAmountTypeFromJSON(json['fromCurrencyAmount']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roundingAmount': !exists(json, 'roundingAmount') ? undefined : json['roundingAmount'],
        'sell': !exists(json, 'sell') ? undefined : json['sell'],
        'serviceTax': !exists(json, 'serviceTax') ? undefined : CurrencyAmountTypeFromJSON(json['serviceTax']),
        'toCurrencyAmount': !exists(json, 'toCurrencyAmount') ? undefined : CurrencyAmountTypeFromJSON(json['toCurrencyAmount']),
    };
}

export function ExchangeRateCalculationTypeToJSON(value?: ExchangeRateCalculationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buyCommission': value.buyCommission,
        'calculatedAmount': value.calculatedAmount,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'euroAmount': value.euroAmount,
        'euroExchangeRate': value.euroExchangeRate,
        'exchangeDate': value.exchangeDate === undefined ? undefined : (value.exchangeDate.toISOString().substr(0,10)),
        'exchangeInformation': value.exchangeInformation,
        'exchangeRate': value.exchangeRate,
        'exchangeRateCalculationTax': ExchangeRateCalculationTaxTypeToJSON(value.exchangeRateCalculationTax),
        'exchangeReference': value.exchangeReference,
        'exchangeType': CurrencyExchangeTypeToJSON(value.exchangeType),
        'fromCurrencyAmount': CurrencyAmountTypeToJSON(value.fromCurrencyAmount),
        'hotelId': value.hotelId,
        'roundingAmount': value.roundingAmount,
        'sell': value.sell,
        'serviceTax': CurrencyAmountTypeToJSON(value.serviceTax),
        'toCurrencyAmount': CurrencyAmountTypeToJSON(value.toCurrencyAmount),
    };
}

