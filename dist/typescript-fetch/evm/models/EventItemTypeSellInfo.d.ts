/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DateTimeSpanType } from './DateTimeSpanType';
/**
 * The Sell Information of the Item.
 * @export
 * @interface EventItemTypeSellInfo
 */
export interface EventItemTypeSellInfo {
    /**
     *
     * @type {DateTimeSpanType}
     * @memberof EventItemTypeSellInfo
     */
    available?: DateTimeSpanType;
    /**
     * Available quantity during a period of time.
     * @type {number}
     * @memberof EventItemTypeSellInfo
     */
    availableQty?: number;
    /**
     * Flag to issue a warning if this inventory item is overbooked.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    criticalInventory?: boolean;
    /**
     * Define the default duration days when booking the Item.
     * @type {number}
     * @memberof EventItemTypeSellInfo
     */
    defaultDuration?: number;
    /**
     * Defines the default quantity when booking the Item.
     * @type {number}
     * @memberof EventItemTypeSellInfo
     */
    defaultQty?: number;
    /**
     * Specifies if a discount is allowed for this item.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    discountable?: boolean;
    /**
     * If true, the Fixed Charges screen will be automatically displayed when this item gets attached to a reservation.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    fixedCharge?: boolean;
    /**
     * Specifies if a discount is allowed for the Item Class.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    itemClassDiscountable?: boolean;
    /**
     * Specifies if web booking is allowed for the Item Class.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    itemClassWebBookable?: boolean;
    /**
     * Define if the the Item could be held outside of the reservation stay days.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    outsideStay?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof EventItemTypeSellInfo
     */
    price?: CurrencyAmountType;
    /**
     * Item quantity in Stock.
     * @type {number}
     * @memberof EventItemTypeSellInfo
     */
    qtyInStock?: number;
    /**
     * If true, item is mandatory for booking.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    sellControl?: boolean;
    /**
     * If true, the item could be sold separately.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    sellSeparate?: boolean;
    /**
     * If true, web booking is allowed.
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    webBookable?: boolean;
    /**
     * If true, the item can be attached as part of a Welcome Offer
     * @type {boolean}
     * @memberof EventItemTypeSellInfo
     */
    welcomeOffer?: boolean;
}
/**
 * Check if a given object implements the EventItemTypeSellInfo interface.
 */
export declare function instanceOfEventItemTypeSellInfo(value: object): boolean;
export declare function EventItemTypeSellInfoFromJSON(json: any): EventItemTypeSellInfo;
export declare function EventItemTypeSellInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventItemTypeSellInfo;
export declare function EventItemTypeSellInfoToJSON(value?: EventItemTypeSellInfo | null): any;