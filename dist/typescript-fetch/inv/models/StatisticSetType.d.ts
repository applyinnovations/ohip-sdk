/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { NumericCategorySummaryType } from './NumericCategorySummaryType';
import type { RevenueCategorySummaryType } from './RevenueCategorySummaryType';
/**
 * An instance of a statistic, which is a set containing revenue category and number category summaries.
 * @export
 * @interface StatisticSetType
 */
export interface StatisticSetType {
    /**
     * Collection of CountCategorySummary elements. Used if count values reported.
     * @type {Array<NumericCategorySummaryType>}
     * @memberof StatisticSetType
     */
    inventory?: Array<NumericCategorySummaryType>;
    /**
     * Collection of RevenueCategorySummary elements. Used if revenue values reported.
     * @type {Array<RevenueCategorySummaryType>}
     * @memberof StatisticSetType
     */
    revenue?: Array<RevenueCategorySummaryType>;
    /**
     * Date of the statistic.
     * @type {Date}
     * @memberof StatisticSetType
     */
    statisticDate?: Date;
    /**
     * Determines whether statistic date is a weekend date.
     * @type {boolean}
     * @memberof StatisticSetType
     */
    weekendDate?: boolean;
}
/**
 * Check if a given object implements the StatisticSetType interface.
 */
export declare function instanceOfStatisticSetType(value: object): boolean;
export declare function StatisticSetTypeFromJSON(json: any): StatisticSetType;
export declare function StatisticSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticSetType;
export declare function StatisticSetTypeToJSON(value?: StatisticSetType | null): any;