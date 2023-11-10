/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { SystemRateCategoryType } from './SystemRateCategoryType';
/**
 * channel rate categories to be created.
 * @export
 * @interface ChannelRateCategoriesRateCategories
 */
export interface ChannelRateCategoriesRateCategories {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ChannelRateCategoriesRateCategories
     */
    bookingChannelCode?: string;
    /**
     * Channel rate category details.
     * @type {Array<SystemRateCategoryType>}
     * @memberof ChannelRateCategoriesRateCategories
     */
    rateCategory?: Array<SystemRateCategoryType>;
}
/**
 * Check if a given object implements the ChannelRateCategoriesRateCategories interface.
 */
export declare function instanceOfChannelRateCategoriesRateCategories(value: object): boolean;
export declare function ChannelRateCategoriesRateCategoriesFromJSON(json: any): ChannelRateCategoriesRateCategories;
export declare function ChannelRateCategoriesRateCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateCategoriesRateCategories;
export declare function ChannelRateCategoriesRateCategoriesToJSON(value?: ChannelRateCategoriesRateCategories | null): any;
