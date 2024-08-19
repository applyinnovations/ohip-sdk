/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TimeSpanType } from './TimeSpanType';
import type { TimeWindowType } from './TimeWindowType';
/**
 * Basic information regarding an Item.
 * @export
 * @interface ItemInfoType
 */
export interface ItemInfoType {
    /**
     *
     * @type {TimeWindowType}
     * @memberof ItemInfoType
     */
    availabilityPeriod?: TimeWindowType;
    /**
     * Item Code.
     * @type {string}
     * @memberof ItemInfoType
     */
    code?: string;
    /**
     * Define the default duration in days when booking the item.
     * @type {number}
     * @memberof ItemInfoType
     */
    defaultDuration?: number;
    /**
     * Detail description of an item.
     * @type {string}
     * @memberof ItemInfoType
     */
    description?: string;
    /**
     * If true indicates that item has fixed charge when it is attached to a reservation.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    fixedCharge?: boolean;
    /**
     * ID reference for the hold Item
     * @type {number}
     * @memberof ItemInfoType
     */
    itemHoldId?: number;
    /**
     * Indicates if it is an item pool. Not applicable for Item within the Item Pool.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    itemPool?: boolean;
    /**
     * Name of an item.
     * @type {string}
     * @memberof ItemInfoType
     */
    name?: string;
    /**
     * If true indicates that item could be held outside of the reservation stay days.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    outsideStay?: boolean;
    /**
     * Quantity of hold Item
     * @type {number}
     * @memberof ItemInfoType
     */
    quantity?: number;
    /**
     * If true indicates that item is required for the reservation.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    requiredForBooking?: boolean;
    /**
     * If true indicates that item can be sold in event.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    sellInEvent?: boolean;
    /**
     * If true indicates that item can be sold in reservation.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    sellInReservation?: boolean;
    /**
     * If true indicates that item is allowed to sell separately.
     * @type {boolean}
     * @memberof ItemInfoType
     */
    sellSeparate?: boolean;
    /**
     *
     * @type {TimeSpanType}
     * @memberof ItemInfoType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the ItemInfoType interface.
 */
export declare function instanceOfItemInfoType(value: object): boolean;
export declare function ItemInfoTypeFromJSON(json: any): ItemInfoType;
export declare function ItemInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemInfoType;
export declare function ItemInfoTypeToJSON(value?: ItemInfoType | null): any;
