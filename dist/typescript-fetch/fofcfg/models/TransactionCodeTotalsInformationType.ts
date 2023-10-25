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
import type { MonthlyTransactionVarianceInfoType } from './MonthlyTransactionVarianceInfoType';
import {
    MonthlyTransactionVarianceInfoTypeFromJSON,
    MonthlyTransactionVarianceInfoTypeFromJSONTyped,
    MonthlyTransactionVarianceInfoTypeToJSON,
} from './MonthlyTransactionVarianceInfoType';
import type { TransactionInfoType } from './TransactionInfoType';
import {
    TransactionInfoTypeFromJSON,
    TransactionInfoTypeFromJSONTyped,
    TransactionInfoTypeToJSON,
} from './TransactionInfoType';

/**
 * Budget Forecast totals information for Transaction segment.
 * @export
 * @interface TransactionCodeTotalsInformationType
 */
export interface TransactionCodeTotalsInformationType {
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyTransactionVarianceInfoType>}
     * @memberof TransactionCodeTotalsInformationType
     */
    aBVarianceTotalInfo?: Array<MonthlyTransactionVarianceInfoType>;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyTransactionVarianceInfoType>}
     * @memberof TransactionCodeTotalsInformationType
     */
    aFVarianceTotalInfo?: Array<MonthlyTransactionVarianceInfoType>;
    /**
     * 
     * @type {TransactionInfoType}
     * @memberof TransactionCodeTotalsInformationType
     */
    actualTotalInfo?: TransactionInfoType;
    /**
     * 
     * @type {TransactionInfoType}
     * @memberof TransactionCodeTotalsInformationType
     */
    budgetTotalInfo?: TransactionInfoType;
    /**
     * Monthly Revenue Variance information.
     * @type {Array<MonthlyTransactionVarianceInfoType>}
     * @memberof TransactionCodeTotalsInformationType
     */
    fBVarianceTotalInfo?: Array<MonthlyTransactionVarianceInfoType>;
    /**
     * 
     * @type {TransactionInfoType}
     * @memberof TransactionCodeTotalsInformationType
     */
    forecastTotalInfo?: TransactionInfoType;
}

/**
 * Check if a given object implements the TransactionCodeTotalsInformationType interface.
 */
export function instanceOfTransactionCodeTotalsInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionCodeTotalsInformationTypeFromJSON(json: any): TransactionCodeTotalsInformationType {
    return TransactionCodeTotalsInformationTypeFromJSONTyped(json, false);
}

export function TransactionCodeTotalsInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCodeTotalsInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aBVarianceTotalInfo': !exists(json, 'aBVarianceTotalInfo') ? undefined : ((json['aBVarianceTotalInfo'] as Array<any>).map(MonthlyTransactionVarianceInfoTypeFromJSON)),
        'aFVarianceTotalInfo': !exists(json, 'aFVarianceTotalInfo') ? undefined : ((json['aFVarianceTotalInfo'] as Array<any>).map(MonthlyTransactionVarianceInfoTypeFromJSON)),
        'actualTotalInfo': !exists(json, 'actualTotalInfo') ? undefined : TransactionInfoTypeFromJSON(json['actualTotalInfo']),
        'budgetTotalInfo': !exists(json, 'budgetTotalInfo') ? undefined : TransactionInfoTypeFromJSON(json['budgetTotalInfo']),
        'fBVarianceTotalInfo': !exists(json, 'fBVarianceTotalInfo') ? undefined : ((json['fBVarianceTotalInfo'] as Array<any>).map(MonthlyTransactionVarianceInfoTypeFromJSON)),
        'forecastTotalInfo': !exists(json, 'forecastTotalInfo') ? undefined : TransactionInfoTypeFromJSON(json['forecastTotalInfo']),
    };
}

export function TransactionCodeTotalsInformationTypeToJSON(value?: TransactionCodeTotalsInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aBVarianceTotalInfo': value.aBVarianceTotalInfo === undefined ? undefined : ((value.aBVarianceTotalInfo as Array<any>).map(MonthlyTransactionVarianceInfoTypeToJSON)),
        'aFVarianceTotalInfo': value.aFVarianceTotalInfo === undefined ? undefined : ((value.aFVarianceTotalInfo as Array<any>).map(MonthlyTransactionVarianceInfoTypeToJSON)),
        'actualTotalInfo': TransactionInfoTypeToJSON(value.actualTotalInfo),
        'budgetTotalInfo': TransactionInfoTypeToJSON(value.budgetTotalInfo),
        'fBVarianceTotalInfo': value.fBVarianceTotalInfo === undefined ? undefined : ((value.fBVarianceTotalInfo as Array<any>).map(MonthlyTransactionVarianceInfoTypeToJSON)),
        'forecastTotalInfo': TransactionInfoTypeToJSON(value.forecastTotalInfo),
    };
}

