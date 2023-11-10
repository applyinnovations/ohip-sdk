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
import type { RoomCodeCategoryType } from './RoomCodeCategoryType';
import type { SellLimitDateRangeType } from './SellLimitDateRangeType';
/**
 * This type is used by sell limit request for date ranges.
 * @export
 * @interface SellLimitByDateRangeType
 */
export interface SellLimitByDateRangeType {
    /**
     *
     * @type {RoomCodeCategoryType}
     * @memberof SellLimitByDateRangeType
     */
    codeCategory?: RoomCodeCategoryType;
    /**
     *
     * @type {string}
     * @memberof SellLimitByDateRangeType
     */
    codeValue?: string;
    /**
     *
     * @type {string}
     * @memberof SellLimitByDateRangeType
     */
    hotelId?: string;
    /**
     * Collection of date ranges and sell limit amount.
     * @type {Array<SellLimitDateRangeType>}
     * @memberof SellLimitByDateRangeType
     */
    sellLimitDateRanges?: Array<SellLimitDateRangeType>;
}
/**
 * Check if a given object implements the SellLimitByDateRangeType interface.
 */
export declare function instanceOfSellLimitByDateRangeType(value: object): boolean;
export declare function SellLimitByDateRangeTypeFromJSON(json: any): SellLimitByDateRangeType;
export declare function SellLimitByDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitByDateRangeType;
export declare function SellLimitByDateRangeTypeToJSON(value?: SellLimitByDateRangeType | null): any;
