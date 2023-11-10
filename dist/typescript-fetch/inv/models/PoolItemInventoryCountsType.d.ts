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
import type { DailyItemInventoryCountsListType } from './DailyItemInventoryCountsListType';
import type { ItemInventoryCountsListType } from './ItemInventoryCountsListType';
import type { TimeSpanType } from './TimeSpanType';
import type { TimeWindowType } from './TimeWindowType';
/**
 * Basic information regarding an Item.
 * @export
 * @interface PoolItemInventoryCountsType
 */
export interface PoolItemInventoryCountsType {
    /**
     *
     * @type {TimeWindowType}
     * @memberof PoolItemInventoryCountsType
     */
    availabilityPeriod?: TimeWindowType;
    /**
     * Item Code.
     * @type {string}
     * @memberof PoolItemInventoryCountsType
     */
    code?: string;
    /**
     * Define the default duration in days when booking the item.
     * @type {number}
     * @memberof PoolItemInventoryCountsType
     */
    defaultDuration?: number;
    /**
     * Detail description of an item.
     * @type {string}
     * @memberof PoolItemInventoryCountsType
     */
    description?: string;
    /**
     * If true indicates that item has fixed charge when it is attached to a reservation.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    fixedCharge?: boolean;
    /**
     *
     * @type {DailyItemInventoryCountsListType}
     * @memberof PoolItemInventoryCountsType
     */
    inventories?: DailyItemInventoryCountsListType;
    /**
     * ID reference for the hold Item
     * @type {number}
     * @memberof PoolItemInventoryCountsType
     */
    itemHoldId?: number;
    /**
     * Indicates if it is an item pool. Not applicable for Item within the Item Pool.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    itemPool?: boolean;
    /**
     * Name of an item.
     * @type {string}
     * @memberof PoolItemInventoryCountsType
     */
    name?: string;
    /**
     * If true indicates that item could be held outside of the reservation stay days.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    outsideStay?: boolean;
    /**
     *
     * @type {ItemInventoryCountsListType}
     * @memberof PoolItemInventoryCountsType
     */
    poolItems?: ItemInventoryCountsListType;
    /**
     * Quantity of hold Item
     * @type {number}
     * @memberof PoolItemInventoryCountsType
     */
    quantity?: number;
    /**
     * If true indicates that item is required for the reservation.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    requiredForBooking?: boolean;
    /**
     * If true indicates that item can be sold in event.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    sellInEvent?: boolean;
    /**
     * If true indicates that item can be sold in reservation.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    sellInReservation?: boolean;
    /**
     * If true indicates that item is allowed to sell separately.
     * @type {boolean}
     * @memberof PoolItemInventoryCountsType
     */
    sellSeparate?: boolean;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PoolItemInventoryCountsType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the PoolItemInventoryCountsType interface.
 */
export declare function instanceOfPoolItemInventoryCountsType(value: object): boolean;
export declare function PoolItemInventoryCountsTypeFromJSON(json: any): PoolItemInventoryCountsType;
export declare function PoolItemInventoryCountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolItemInventoryCountsType;
export declare function PoolItemInventoryCountsTypeToJSON(value?: PoolItemInventoryCountsType | null): any;
