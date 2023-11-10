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
import type { BlockGridRatesType } from './BlockGridRatesType';
import type { SetBlockGridInvType } from './SetBlockGridInvType';
/**
 * Indicates the block allocations for a date range. This can be rooms or rate amounts.
 * @export
 * @interface AllocationGridByDateRangeType
 */
export interface AllocationGridByDateRangeType {
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof AllocationGridByDateRangeType
     */
    end?: Date;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    friday?: boolean;
    /**
     *
     * @type {SetBlockGridInvType}
     * @memberof AllocationGridByDateRangeType
     */
    inventory?: SetBlockGridInvType;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    monday?: boolean;
    /**
     *
     * @type {BlockGridRatesType}
     * @memberof AllocationGridByDateRangeType
     */
    rate?: BlockGridRatesType;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    saturday?: boolean;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof AllocationGridByDateRangeType
     */
    start?: Date;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllocationGridByDateRangeType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the AllocationGridByDateRangeType interface.
 */
export declare function instanceOfAllocationGridByDateRangeType(value: object): boolean;
export declare function AllocationGridByDateRangeTypeFromJSON(json: any): AllocationGridByDateRangeType;
export declare function AllocationGridByDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationGridByDateRangeType;
export declare function AllocationGridByDateRangeTypeToJSON(value?: AllocationGridByDateRangeType | null): any;
