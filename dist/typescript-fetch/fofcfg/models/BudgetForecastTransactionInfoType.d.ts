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
import type { TransactionCodeInformationType } from './TransactionCodeInformationType';
import type { TransactionCodeTotalsInformationType } from './TransactionCodeTotalsInformationType';
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
export declare function instanceOfBudgetForecastTransactionInfoType(value: object): boolean;
export declare function BudgetForecastTransactionInfoTypeFromJSON(json: any): BudgetForecastTransactionInfoType;
export declare function BudgetForecastTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastTransactionInfoType;
export declare function BudgetForecastTransactionInfoTypeToJSON(value?: BudgetForecastTransactionInfoType | null): any;
