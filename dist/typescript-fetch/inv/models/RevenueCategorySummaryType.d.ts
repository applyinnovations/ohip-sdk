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
/**
 * This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue.
 * @export
 * @interface RevenueCategorySummaryType
 */
export interface RevenueCategorySummaryType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof RevenueCategorySummaryType
     */
    amount?: number;
    /**
     * The representation of a revenue category.
     * @type {string}
     * @memberof RevenueCategorySummaryType
     */
    code?: string;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof RevenueCategorySummaryType
     */
    currencyCode?: string;
}
/**
 * Check if a given object implements the RevenueCategorySummaryType interface.
 */
export declare function instanceOfRevenueCategorySummaryType(value: object): boolean;
export declare function RevenueCategorySummaryTypeFromJSON(json: any): RevenueCategorySummaryType;
export declare function RevenueCategorySummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueCategorySummaryType;
export declare function RevenueCategorySummaryTypeToJSON(value?: RevenueCategorySummaryType | null): any;
