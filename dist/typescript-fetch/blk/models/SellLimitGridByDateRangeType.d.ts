/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates the sell limits for a date range. This will be rooms.
 * @export
 * @interface SellLimitGridByDateRangeType
 */
export interface SellLimitGridByDateRangeType {
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof SellLimitGridByDateRangeType
     */
    end?: Date;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    friday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    monday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    saturday?: boolean;
    /**
     * Indicates the sell limit for the date range.
     * @type {number}
     * @memberof SellLimitGridByDateRangeType
     */
    sellLimit?: number;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof SellLimitGridByDateRangeType
     */
    start?: Date;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SellLimitGridByDateRangeType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the SellLimitGridByDateRangeType interface.
 */
export declare function instanceOfSellLimitGridByDateRangeType(value: object): boolean;
export declare function SellLimitGridByDateRangeTypeFromJSON(json: any): SellLimitGridByDateRangeType;
export declare function SellLimitGridByDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitGridByDateRangeType;
export declare function SellLimitGridByDateRangeTypeToJSON(value?: SellLimitGridByDateRangeType | null): any;
