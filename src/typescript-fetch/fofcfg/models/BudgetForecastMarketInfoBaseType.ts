/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MarketCodeInformationBaseType } from './MarketCodeInformationBaseType';
import {
    MarketCodeInformationBaseTypeFromJSON,
    MarketCodeInformationBaseTypeFromJSONTyped,
    MarketCodeInformationBaseTypeToJSON,
} from './MarketCodeInformationBaseType';

/**
 * Budget Forecast information for budget segment codes.
 * @export
 * @interface BudgetForecastMarketInfoBaseType
 */
export interface BudgetForecastMarketInfoBaseType {
    /**
     * Budget Forecast information for budget segment code .
     * @type {Array<MarketCodeInformationBaseType>}
     * @memberof BudgetForecastMarketInfoBaseType
     */
    marketCodeInformation?: Array<MarketCodeInformationBaseType>;
    /**
     * Flag to indicate if nights information is included.
     * @type {boolean}
     * @memberof BudgetForecastMarketInfoBaseType
     */
    nights?: boolean;
    /**
     * Flag to indicate if revenue information is included.
     * @type {boolean}
     * @memberof BudgetForecastMarketInfoBaseType
     */
    revenue?: boolean;
}

/**
 * Check if a given object implements the BudgetForecastMarketInfoBaseType interface.
 */
export function instanceOfBudgetForecastMarketInfoBaseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BudgetForecastMarketInfoBaseTypeFromJSON(json: any): BudgetForecastMarketInfoBaseType {
    return BudgetForecastMarketInfoBaseTypeFromJSONTyped(json, false);
}

export function BudgetForecastMarketInfoBaseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastMarketInfoBaseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'marketCodeInformation': !exists(json, 'marketCodeInformation') ? undefined : ((json['marketCodeInformation'] as Array<any>).map(MarketCodeInformationBaseTypeFromJSON)),
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
    };
}

export function BudgetForecastMarketInfoBaseTypeToJSON(value?: BudgetForecastMarketInfoBaseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'marketCodeInformation': value.marketCodeInformation === undefined ? undefined : ((value.marketCodeInformation as Array<any>).map(MarketCodeInformationBaseTypeToJSON)),
        'nights': value.nights,
        'revenue': value.revenue,
    };
}

