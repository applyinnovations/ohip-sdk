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
 * Budget Forecast information for segment.
 * @export
 * @interface MarketCodeTotalInformationType
 */
export interface MarketCodeTotalInformationType {
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeTotalInformationType
     */
    aBVarianceTotalInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeTotalInformationType
     */
    aFVarianceTotalInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeTotalInformationType
     */
    actualTotalInfo?: RevenueNightsInfoType;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeTotalInformationType
     */
    budgetTotalInfo?: RevenueNightsInfoType;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyRevenueNightsVarianceInfoType>}
     * @memberof MarketCodeTotalInformationType
     */
    fBVarianceTotalInfo?: Array<MonthlyRevenueNightsVarianceInfoType>;
    /**
     * 
     * @type {RevenueNightsInfoType}
     * @memberof MarketCodeTotalInformationType
     */
    forecastTotalInfo?: RevenueNightsInfoType;
}

/**
 * Check if a given object implements the MarketCodeTotalInformationType interface.
 */
export function instanceOfMarketCodeTotalInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketCodeTotalInformationTypeFromJSON(json: any): MarketCodeTotalInformationType {
    return MarketCodeTotalInformationTypeFromJSONTyped(json, false);
}

export function MarketCodeTotalInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeTotalInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aBVarianceTotalInfo': !exists(json, 'aBVarianceTotalInfo') ? undefined : ((json['aBVarianceTotalInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'aFVarianceTotalInfo': !exists(json, 'aFVarianceTotalInfo') ? undefined : ((json['aFVarianceTotalInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'actualTotalInfo': !exists(json, 'actualTotalInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['actualTotalInfo']),
        'budgetTotalInfo': !exists(json, 'budgetTotalInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['budgetTotalInfo']),
        'fBVarianceTotalInfo': !exists(json, 'fBVarianceTotalInfo') ? undefined : ((json['fBVarianceTotalInfo'] as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeFromJSON)),
        'forecastTotalInfo': !exists(json, 'forecastTotalInfo') ? undefined : RevenueNightsInfoTypeFromJSON(json['forecastTotalInfo']),
    };
}

export function MarketCodeTotalInformationTypeToJSON(value?: MarketCodeTotalInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aBVarianceTotalInfo': value.aBVarianceTotalInfo === undefined ? undefined : ((value.aBVarianceTotalInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'aFVarianceTotalInfo': value.aFVarianceTotalInfo === undefined ? undefined : ((value.aFVarianceTotalInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'actualTotalInfo': RevenueNightsInfoTypeToJSON(value.actualTotalInfo),
        'budgetTotalInfo': RevenueNightsInfoTypeToJSON(value.budgetTotalInfo),
        'fBVarianceTotalInfo': value.fBVarianceTotalInfo === undefined ? undefined : ((value.fBVarianceTotalInfo as Array<any>).map(MonthlyRevenueNightsVarianceInfoTypeToJSON)),
        'forecastTotalInfo': RevenueNightsInfoTypeToJSON(value.forecastTotalInfo),
    };
}

