/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RestaurantCategoryType } from './RestaurantCategoryType';
import {
    RestaurantCategoryTypeFromJSON,
    RestaurantCategoryTypeFromJSONTyped,
    RestaurantCategoryTypeToJSON,
} from './RestaurantCategoryType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Information about the Restaurants in the hotel.
 * @export
 * @interface HotelRestaurantType
 */
export interface HotelRestaurantType {
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
     * The Hours of Operation of the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    hours?: string;
    /**
     * The price range of the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    priceRange?: string;
    /**
     * Comments about the Restaurant.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    comments?: string;
    /**
     * 
     * @type {RestaurantCategoryType}
     * @memberof HotelRestaurantType
     */
    category?: RestaurantCategoryType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof HotelRestaurantType
     */
    timeSpan?: TimeSpanType;
    /**
     * The new Restaurant Code which is used in the change method.
     * @type {string}
     * @memberof HotelRestaurantType
     */
    newRestaurantCode?: string;
    /**
     * 
     * @type {string}
     * @memberof HotelRestaurantType
     */
    restaurantCode?: string;
    /**
     * 
     * @type {number}
     * @memberof HotelRestaurantType
     */
    orderBy?: number;
    /**
     * 
     * @type {string}
     * @memberof HotelRestaurantType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the HotelRestaurantType interface.
 */
export function instanceOfHotelRestaurantType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelRestaurantTypeFromJSON(json: any): HotelRestaurantType {
    return HotelRestaurantTypeFromJSONTyped(json, false);
}

export function HotelRestaurantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRestaurantType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'restaurantName': !exists(json, 'restaurantName') ? undefined : json['restaurantName'],
        'restaurantType': !exists(json, 'restaurantType') ? undefined : json['restaurantType'],
        'hours': !exists(json, 'hours') ? undefined : json['hours'],
        'priceRange': !exists(json, 'priceRange') ? undefined : json['priceRange'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'category': !exists(json, 'category') ? undefined : RestaurantCategoryTypeFromJSON(json['category']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'newRestaurantCode': !exists(json, 'newRestaurantCode') ? undefined : json['newRestaurantCode'],
        'restaurantCode': !exists(json, 'restaurantCode') ? undefined : json['restaurantCode'],
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function HotelRestaurantTypeToJSON(value?: HotelRestaurantType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'restaurantName': value.restaurantName,
        'restaurantType': value.restaurantType,
        'hours': value.hours,
        'priceRange': value.priceRange,
        'comments': value.comments,
        'category': RestaurantCategoryTypeToJSON(value.category),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'newRestaurantCode': value.newRestaurantCode,
        'restaurantCode': value.restaurantCode,
        'orderBy': value.orderBy,
        'hotelId': value.hotelId,
    };
}

