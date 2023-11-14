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
import type { BudgetForecastCateringInfoType } from './BudgetForecastCateringInfoType';
import type { BudgetForecastCustomInfoType } from './BudgetForecastCustomInfoType';
import type { BudgetForecastMarketInfoType } from './BudgetForecastMarketInfoType';
import type { BudgetForecastRateInfoType } from './BudgetForecastRateInfoType';
import type { BudgetForecastTransactionInfoType } from './BudgetForecastTransactionInfoType';
/**
 * Holds budget forecast information for included segment types.
 * @export
 * @interface BudgetForecastInformationType
 */
export interface BudgetForecastInformationType {
    /**
     *
     * @type {BudgetForecastCateringInfoType}
     * @memberof BudgetForecastInformationType
     */
    cateringSegmentInformation?: BudgetForecastCateringInfoType;
    /**
     *
     * @type {BudgetForecastCustomInfoType}
     * @memberof BudgetForecastInformationType
     */
    customSegmentInformation?: BudgetForecastCustomInfoType;
    /**
     *
     * @type {BudgetForecastMarketInfoType}
     * @memberof BudgetForecastInformationType
     */
    marketSegmentInformation?: BudgetForecastMarketInfoType;
    /**
     *
     * @type {BudgetForecastRateInfoType}
     * @memberof BudgetForecastInformationType
     */
    rateSegmentInformation?: BudgetForecastRateInfoType;
    /**
     *
     * @type {BudgetForecastTransactionInfoType}
     * @memberof BudgetForecastInformationType
     */
    transactionSegmentInformation?: BudgetForecastTransactionInfoType;
}
/**
 * Check if a given object implements the BudgetForecastInformationType interface.
 */
export declare function instanceOfBudgetForecastInformationType(value: object): boolean;
export declare function BudgetForecastInformationTypeFromJSON(json: any): BudgetForecastInformationType;
export declare function BudgetForecastInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastInformationType;
export declare function BudgetForecastInformationTypeToJSON(value?: BudgetForecastInformationType | null): any;