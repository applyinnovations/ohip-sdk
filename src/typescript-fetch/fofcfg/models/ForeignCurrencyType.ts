/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyLimitType } from './CurrencyLimitType';
import {
    CurrencyLimitTypeFromJSON,
    CurrencyLimitTypeFromJSONTyped,
    CurrencyLimitTypeToJSON,
} from './CurrencyLimitType';

/**
 * Provides information about the Foreign Currency Code.
 * @export
 * @interface ForeignCurrencyType
 */
export interface ForeignCurrencyType {
    /**
     * Code of the Foreign Currency
     * @type {string}
     * @memberof ForeignCurrencyType
     */
    currencyCode?: string;
    /**
     * Provides information about various limits on the Currency Code
     * @type {Array<CurrencyLimitType>}
     * @memberof ForeignCurrencyType
     */
    currencyLimits?: Array<CurrencyLimitType>;
    /**
     * Number of Decimal places defined for the Foreign Currency Code
     * @type {number}
     * @memberof ForeignCurrencyType
     */
    decimals?: number;
    /**
     * Description of the Foreign Currency Code
     * @type {string}
     * @memberof ForeignCurrencyType
     */
    description?: string;
    /**
     * Display Sequence
     * @type {number}
     * @memberof ForeignCurrencyType
     */
    displaySequence?: number;
    /**
     * Indicates if the Foreign Currency Code is inactive
     * @type {boolean}
     * @memberof ForeignCurrencyType
     */
    inactive?: boolean;
    /**
     * Indicates if the Currency is available for selling
     * @type {boolean}
     * @memberof ForeignCurrencyType
     */
    sellCurrency?: boolean;
    /**
     * Symbol defined for the Currency
     * @type {string}
     * @memberof ForeignCurrencyType
     */
    symbol?: string;
}

/**
 * Check if a given object implements the ForeignCurrencyType interface.
 */
export function instanceOfForeignCurrencyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ForeignCurrencyTypeFromJSON(json: any): ForeignCurrencyType {
    return ForeignCurrencyTypeFromJSONTyped(json, false);
}

export function ForeignCurrencyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignCurrencyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencyLimits': !exists(json, 'currencyLimits') ? undefined : ((json['currencyLimits'] as Array<any>).map(CurrencyLimitTypeFromJSON)),
        'decimals': !exists(json, 'decimals') ? undefined : json['decimals'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'sellCurrency': !exists(json, 'sellCurrency') ? undefined : json['sellCurrency'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
    };
}

export function ForeignCurrencyTypeToJSON(value?: ForeignCurrencyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'currencyLimits': value.currencyLimits === undefined ? undefined : ((value.currencyLimits as Array<any>).map(CurrencyLimitTypeToJSON)),
        'decimals': value.decimals,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'inactive': value.inactive,
        'sellCurrency': value.sellCurrency,
        'symbol': value.symbol,
    };
}
