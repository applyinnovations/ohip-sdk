/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RestaurantCategoryType } from './RestaurantCategoryType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Information about the Restaurants in the hotel.
 * @export
 * @interface HotelRestaurantType
 */
export interface HotelRestaurantType {
    /**
     *
     * @type {RestaurantCategoryType}
     * @memberof HotelRestaurantType
     */
    category?: RestaurantCategoryType;
    /**
     * Comments about the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    comments?: string;
    /**
     *
     * @type {string}
     * @memberof HotelRestaurantType
     */
    hotelId?: string;
    /**
     * The Hours of Operation of the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    hours?: string;
    /**
     * The new Restaurant Code which is used in the change method.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    newRestaurantCode?: string;
    /**
     *
     * @type {number}
     * @memberof HotelRestaurantType
     */
    orderBy?: number;
    /**
     * The price range of the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    priceRange?: string;
    /**
     *
     * @type {string}
     * @memberof HotelRestaurantType
     */
    restaurantCode?: string;
    /**
     * The name of the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    restaurantName?: string;
    /**
     * The Type of Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    restaurantType?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof HotelRestaurantType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the HotelRestaurantType interface.
 */
export declare function instanceOfHotelRestaurantType(value: object): boolean;
export declare function HotelRestaurantTypeFromJSON(json: any): HotelRestaurantType;
export declare function HotelRestaurantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRestaurantType;
export declare function HotelRestaurantTypeToJSON(value?: HotelRestaurantType | null): any;
