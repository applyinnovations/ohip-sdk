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
import type { MonthlyRevenueNightsVarianceInfoType } from './MonthlyRevenueNightsVarianceInfoType';
import {
    MonthlyRevenueNightsVarianceInfoTypeFromJSON,
    MonthlyRevenueNightsVarianceInfoTypeFromJSONTyped,
    MonthlyRevenueNightsVarianceInfoTypeToJSON,
} from './MonthlyRevenueNightsVarianceInfoType';
import type { RevenueNightsInfoType } from './RevenueNightsInfoType';
import {
    RevenueNightsInfoTypeFromJSON,
    RevenueNightsInfoTypeFromJSONTyped,
    RevenueNightsInfoTypeToJSON,
} from './RevenueNightsInfoType';

/**
 * Budget Forecast information for budget segment code.
 * @export
 * @interface MarketCodeInformationType
 */
export interface MarketCodeInformationType {
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeInformationType
     */
    aBVarianceInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeInformationType
     */
    aFVarianceInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeInformationType
     */
    actualRevenueInfo?: RevenueNightsInfoType;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeInformationType
     */
    budgetRevenueInfo?: RevenueNightsInfoType;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeInformationType
     */
    fBVarianceInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeInformationType
     */
    forecastRevenueInfo?: RevenueNightsInfoType;
    /**
     * Segment code for which budget forecast information is fetched.
     * @type {string}
     * @memberof MarketCodeInformationType
     */
    marketCode?: string;
    /**
     * Segment code description for segment code.
     * @type {string}
     * @memberof MarketCodeInformationType
     */
    marketCodeDescription?: string;
}

/**
 * Check if a given object implements the MarketCodeInformationType interface.
 */
export function instanceOfMarketCodeInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketCodeInformationTypeFromJSON(json: any): MarketCodeInformationType {
    return MarketCodeInformationTypeFromJSONTyped(json, false);
}

export function MarketCodeInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aBVarianceInfo': !exists(json, 'aBVarianceInfo') ? undefined : ((json['aBVarianceInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'aFVarianceInfo': !exists(json, 'aFVarianceInfo') ? undefined : ((json['aFVarianceInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'actualRevenueInfo': !exists(json, 'actualRevenueInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['actualRevenueInfo']),
        'budgetRevenueInfo': !exists(json, 'budgetRevenueInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['budgetRevenueInfo']),
        'fBVarianceInfo': !exists(json, 'fBVarianceInfo') ? undefined : ((json['fBVarianceInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'forecastRevenueInfo': !exists(json, 'forecastRevenueInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['forecastRevenueInfo']),
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'marketCodeDescription': !exists(json, 'marketCodeDescription') ? undefined : json['marketCodeDescription'],
    };
}

export function MarketCodeInformationTypeToJSON(value?: MarketCodeInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aBVarianceInfo': value.aBVarianceInfo === undefined ? undefined : ((value.aBVarianceInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'aFVarianceInfo': value.aFVarianceInfo === undefined ? undefined : ((value.aFVarianceInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'actualRevenueInfo': RevenueNightsInfoTypeToJSON(value.actualRevenueInfo),
        'budgetRevenueInfo': RevenueNightsInfoTypeToJSON(value.budgetRevenueInfo),
        'fBVarianceInfo': value.fBVarianceInfo === undefined ? undefined : ((value.fBVarianceInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'forecastRevenueInfo': RevenueNightsInfoTypeToJSON(value.forecastRevenueInfo),
        'marketCode': value.marketCode,
        'marketCodeDescription': value.marketCodeDescription,
    };
}

