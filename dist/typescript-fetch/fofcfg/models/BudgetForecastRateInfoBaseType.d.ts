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
import type { RateCodeInformationBaseType } from './RateCodeInformationBaseType';
/**
 * Budget Forecast information for budget segment codes.
 * @export
 * @interface BudgetForecastRateInfoBaseType
 */
export interface BudgetForecastRateInfoBaseType {
    /**
     * Flag to indicate if nights information has to be included.
     * @type {boolean}
     * @memberof BudgetForecastRateInfoBaseType
     */
    nights?: boolean;
    /**
     * Budget Forecast information for budget segment code .
     * @type {Array<RateCodeInformationBaseType>}
     * @memberof BudgetForecastRateInfoBaseType
     */
    rateCodeInformation?: Array<RateCodeInformationBaseType>;
    /**
     * Flag to indicate if revenue information has to be included.
     * @type {boolean}
     * @memberof BudgetForecastRateInfoBaseType
     */
    revenue?: boolean;
}
/**
 * Check if a given object implements the BudgetForecastRateInfoBaseType interface.
 */
export declare function instanceOfBudgetForecastRateInfoBaseType(value: object): boolean;
export declare function BudgetForecastRateInfoBaseTypeFromJSON(json: any): BudgetForecastRateInfoBaseType;
export declare function BudgetForecastRateInfoBaseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastRateInfoBaseType;
export declare function BudgetForecastRateInfoBaseTypeToJSON(value?: BudgetForecastRateInfoBaseType | null): any;
