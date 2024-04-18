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
import type { TransactionCodeInformationType } from './TransactionCodeInformationType';
import {
    TransactionCodeInformationTypeFromJSON,
    TransactionCodeInformationTypeFromJSONTyped,
    TransactionCodeInformationTypeToJSON,
} from './TransactionCodeInformationType';
import type { TransactionCodeTotalsInformationType } from './TransactionCodeTotalsInformationType';
import {
    TransactionCodeTotalsInformationTypeFromJSON,
    TransactionCodeTotalsInformationTypeFromJSONTyped,
    TransactionCodeTotalsInformationTypeToJSON,
} from './TransactionCodeTotalsInformationType';

/**
 * Budget Forecast information for budget Transaction codes.
 * @export
 * @interface BudgetForecastTransactionInfoType
 */
export interface BudgetForecastTransactionInfoType {
    /**
     * Budget Forecast information for Transaction segment code .
     * @type {Array<TransactionCodeInformationType>}
     * @memberof BudgetForecastTransactionInfoType
     */
    transactionCodeInformation?: Array<TransactionCodeInformationType>;
    /**
     * 
     * @type {TransactionCodeTotalsInformationType}
     * @memberof BudgetForecastTransactionInfoType
     */
    transactionCodeTotalsInformation?: TransactionCodeTotalsInformationType;
}

/**
 * Check if a given object implements the BudgetForecastTransactionInfoType interface.
 */
export function instanceOfBudgetForecastTransactionInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BudgetForecastTransactionInfoTypeFromJSON(json: any): BudgetForecastTransactionInfoType {
    return BudgetForecastTransactionInfoTypeFromJSONTyped(json, false);
}

export function BudgetForecastTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastTransactionInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionCodeInformation': !exists(json, 'transactionCodeInformation') ? undefined : ((json['transactionCodeInformation'] as Array<any>).map(TransactionCodeInformationTypeFromJSON)),
        'transactionCodeTotalsInformation': !exists(json, 'transactionCodeTotalsInformation') ? undefined : TransactionCodeTotalsInformationTypeFromJSON(json['transactionCodeTotalsInformation']),
    };
}

export function BudgetForecastTransactionInfoTypeToJSON(value?: BudgetForecastTransactionInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionCodeInformation': value.transactionCodeInformation === undefined ? undefined : ((value.transactionCodeInformation as Array<any>).map(TransactionCodeInformationTypeToJSON)),
        'transactionCodeTotalsInformation': TransactionCodeTotalsInformationTypeToJSON(value.transactionCodeTotalsInformation),
    };
}
