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
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details about a sell limit schedule for a channel or channel room type.
 * @export
 * @interface ChannelSellLimitScheduleType
 */
export interface ChannelSellLimitScheduleType {
    /**
     * Channel for which the sell limit schedule is applicable.
     * @type {string}
     * @memberof ChannelSellLimitScheduleType
     */
    bookingChannelCode?: string;
    /**
     * Channel room type for which the sell limit schedule is applicable.
     * @type {string}
     * @memberof ChannelSellLimitScheduleType
     */
    channelRoomType?: string;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof ChannelSellLimitScheduleType
     */
    dateRange?: TimeSpanDaysOfWeekType;
    /**
     * Hotel for which the sell limit schedule is applicable.
     * @type {string}
     * @memberof ChannelSellLimitScheduleType
     */
    hotelId?: string;
    /**
     * Number of rooms which can be sold under the hotel, channel, and channel room type combination for the specified date range.
     * @type {number}
     * @memberof ChannelSellLimitScheduleType
     */
    numberOfRooms?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChannelSellLimitScheduleType
     */
    sellLimitId?: UniqueIDType;
}
/**
 * Check if a given object implements the ChannelSellLimitScheduleType interface.
 */
export declare function instanceOfChannelSellLimitScheduleType(value: object): boolean;
export declare function ChannelSellLimitScheduleTypeFromJSON(json: any): ChannelSellLimitScheduleType;
export declare function ChannelSellLimitScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSellLimitScheduleType;
export declare function ChannelSellLimitScheduleTypeToJSON(value?: ChannelSellLimitScheduleType | null): any;
