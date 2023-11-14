/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { DailyItemInventoryCountsListType } from './DailyItemInventoryCountsListType';
import {
    DailyItemInventoryCountsListTypeFromJSON,
    DailyItemInventoryCountsListTypeFromJSONTyped,
    DailyItemInventoryCountsListTypeToJSON,
} from './DailyItemInventoryCountsListType';
import type { ItemInventoryCountsListType } from './ItemInventoryCountsListType';
import {
    ItemInventoryCountsListTypeFromJSON,
    ItemInventoryCountsListTypeFromJSONTyped,
    ItemInventoryCountsListTypeToJSON,
} from './ItemInventoryCountsListType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { TimeWindowType } from './TimeWindowType';
import {
    TimeWindowTypeFromJSON,
    TimeWindowTypeFromJSONTyped,
    TimeWindowTypeToJSON,
} from './TimeWindowType';

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
export function instanceOfPoolItemInventoryCountsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PoolItemInventoryCountsTypeFromJSON(json: any): PoolItemInventoryCountsType {
    return PoolItemInventoryCountsTypeFromJSONTyped(json, false);
}

export function PoolItemInventoryCountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolItemInventoryCountsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availabilityPeriod': !exists(json, 'availabilityPeriod') ? undefined : TimeWindowTypeFromJSON(json['availabilityPeriod']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'defaultDuration': !exists(json, 'defaultDuration') ? undefined : json['defaultDuration'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fixedCharge': !exists(json, 'fixedCharge') ? undefined : json['fixedCharge'],
        'inventories': !exists(json, 'inventories') ? undefined : DailyItemInventoryCountsListTypeFromJSON(json['inventories']),
        'itemHoldId': !exists(json, 'itemHoldId') ? undefined : json['itemHoldId'],
        'itemPool': !exists(json, 'itemPool') ? undefined : json['itemPool'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'outsideStay': !exists(json, 'outsideStay') ? undefined : json['outsideStay'],
        'poolItems': !exists(json, 'poolItems') ? undefined : ItemInventoryCountsListTypeFromJSON(json['poolItems']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'requiredForBooking': !exists(json, 'requiredForBooking') ? undefined : json['requiredForBooking'],
        'sellInEvent': !exists(json, 'sellInEvent') ? undefined : json['sellInEvent'],
        'sellInReservation': !exists(json, 'sellInReservation') ? undefined : json['sellInReservation'],
        'sellSeparate': !exists(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function PoolItemInventoryCountsTypeToJSON(value?: PoolItemInventoryCountsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availabilityPeriod': TimeWindowTypeToJSON(value.availabilityPeriod),
        'code': value.code,
        'defaultDuration': value.defaultDuration,
        'description': value.description,
        'fixedCharge': value.fixedCharge,
        'inventories': DailyItemInventoryCountsListTypeToJSON(value.inventories),
        'itemHoldId': value.itemHoldId,
        'itemPool': value.itemPool,
        'name': value.name,
        'outsideStay': value.outsideStay,
        'poolItems': ItemInventoryCountsListTypeToJSON(value.poolItems),
        'quantity': value.quantity,
        'requiredForBooking': value.requiredForBooking,
        'sellInEvent': value.sellInEvent,
        'sellInReservation': value.sellInReservation,
        'sellSeparate': value.sellSeparate,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}
