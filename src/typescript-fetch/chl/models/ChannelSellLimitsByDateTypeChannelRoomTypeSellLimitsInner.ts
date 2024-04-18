/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner
 */
export interface ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner {
    /**
     * Channel for which this sell limit is applicable.
     * @type {string}
     * @memberof ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner
     */
    bookingChannelCode?: string;
    /**
     * Channel room type for which this sell limit is applicable.
     * @type {string}
     * @memberof ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner
     */
    channelRoomType?: string;
    /**
     * Date on which this sell limit is applicable.
     * @type {string}
     * @memberof ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner
     */
    date?: string;
    /**
     * Number of rooms that can be sold for this particular sell limit date.
     * @type {number}
     * @memberof ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner
     */
    numberOfRooms?: number;
}

/**
 * Check if a given object implements the ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner interface.
 */
export function instanceOfChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSON(json: any): ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner {
    return ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped(json, false);
}

export function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'channelRoomType': !exists(json, 'channelRoomType') ? undefined : json['channelRoomType'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'numberOfRooms': !exists(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
    };
}

export function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerToJSON(value?: ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'channelRoomType': value.channelRoomType,
        'date': value.date,
        'numberOfRooms': value.numberOfRooms,
    };
}
