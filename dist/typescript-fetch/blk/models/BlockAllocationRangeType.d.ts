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
import type { AllocationType } from './AllocationType';
import type { BlockAllocationRangeTypeOverbookListInner } from './BlockAllocationRangeTypeOverbookListInner';
import type { BlockGridInvType } from './BlockGridInvType';
import type { BlockGridRatesType } from './BlockGridRatesType';
import type { BlockId } from './BlockId';
import type { BlockRangeModeType } from './BlockRangeModeType';
/**
 * Container for information related to block allocation range update operation
 * @export
 * @interface BlockAllocationRangeType
 */
export interface BlockAllocationRangeType {
    /**
     *
     * @type {AllocationType}
     * @memberof BlockAllocationRangeType
     */
    allocationType?: AllocationType;
    /**
     * Begin date for range update operation.
     * @type {Date}
     * @memberof BlockAllocationRangeType
     */
    beginDate?: Date;
    /**
     *
     * @type {BlockId}
     * @memberof BlockAllocationRangeType
     */
    blockId?: BlockId;
    /**
     *
     * @type {BlockGridInvType}
     * @memberof BlockAllocationRangeType
     */
    blockInventory?: BlockGridInvType;
    /**
     *
     * @type {BlockGridRatesType}
     * @memberof BlockAllocationRangeType
     */
    blockRates?: BlockGridRatesType;
    /**
     * Date after which unused block rooms should be returned to house.
     * @type {Date}
     * @memberof BlockAllocationRangeType
     */
    cutoffDate?: Date;
    /**
     * Number of days from block start date after which unused block rooms should be returned to house.
     * @type {number}
     * @memberof BlockAllocationRangeType
     */
    cutoffDays?: number;
    /**
     * End date for range update operation.
     * @type {Date}
     * @memberof BlockAllocationRangeType
     */
    endDate?: Date;
    /**
     * Indicates if the Allocation objects refer to Generic Room Types (Room Pools).
     * @type {boolean}
     * @memberof BlockAllocationRangeType
     */
    genericRoomType?: boolean;
    /**
     *
     * @type {string}
     * @memberof BlockAllocationRangeType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof BlockAllocationRangeType
     */
    includedDays?: string;
    /**
     * Flag to indicate if the occupancy data is absolute or relative to the current value.
     * @type {boolean}
     * @memberof BlockAllocationRangeType
     */
    incrementFlag?: boolean;
    /**
     * Date which has to be overbooked or excluded.
     * @type {Array<BlockAllocationRangeTypeOverbookListInner>}
     * @memberof BlockAllocationRangeType
     */
    overbookList?: Array<BlockAllocationRangeTypeOverbookListInner>;
    /**
     *
     * @type {BlockRangeModeType}
     * @memberof BlockAllocationRangeType
     */
    rangeMode?: BlockRangeModeType;
    /**
     * List of room types for which the range update has to be applied.
     * @type {Array<string>}
     * @memberof BlockAllocationRangeType
     */
    roomTypes?: Array<string>;
}
/**
 * Check if a given object implements the BlockAllocationRangeType interface.
 */
export declare function instanceOfBlockAllocationRangeType(value: object): boolean;
export declare function BlockAllocationRangeTypeFromJSON(json: any): BlockAllocationRangeType;
export declare function BlockAllocationRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAllocationRangeType;
export declare function BlockAllocationRangeTypeToJSON(value?: BlockAllocationRangeType | null): any;
