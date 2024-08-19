/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Exchange rate information of a currency.
 * @export
 * @interface ExchangeRateInfoType
 */
export interface ExchangeRateInfoType {
    /**
     * Description of currency Code.
     * @type {string}
     * @memberof ExchangeRateInfoType
     */
    currencyCode?: string;
    /**
     * Description of exchange rate.
     * @type {number}
     * @memberof ExchangeRateInfoType
     */
    exchangeRate?: number;
}

/**
 * Check if a given object implements the ExchangeRateInfoType interface.
 */
export function instanceOfExchangeRateInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExchangeRateInfoTypeFromJSON(json: any): ExchangeRateInfoType {
    return ExchangeRateInfoTypeFromJSONTyped(json, false);
}

export function ExchangeRateInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeRateInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'exchangeRate': !exists(json, 'exchangeRate') ? undefined : json['exchangeRate'],
    };
}

export function ExchangeRateInfoTypeToJSON(value?: ExchangeRateInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'exchangeRate': value.exchangeRate,
    };
}

