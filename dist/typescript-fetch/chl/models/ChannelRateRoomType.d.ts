/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ChannelRateRoomDetailType } from './ChannelRateRoomDetailType';
/**
 * This type holds data for channel Rate room.
 * @export
 * @interface ChannelRateRoomType
 */
export interface ChannelRateRoomType {
    /**
     * Begin Date.
     * @type {Date}
     * @memberof ChannelRateRoomType
     */
    beginDate?: Date;
    /**
     * Booking Channel Code.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    bookingChannelCode?: string;
    /**
     * Channel Rate Plan code.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    channelRatePlanCode?: string;
    /**
     *
     * @type {ChannelRateRoomDetailType}
     * @memberof ChannelRateRoomType
     */
    channelRateRoomDetail?: ChannelRateRoomDetailType;
    /**
     * Channel Room Type.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    channelRoomType?: string;
    /**
     * End Date.
     * @type {Date}
     * @memberof ChannelRateRoomType
     */
    endDate?: Date;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    hotelId?: string;
    /**
     * Channel Rate Room Type is invalid.
     * @type {boolean}
     * @memberof ChannelRateRoomType
     */
    inactive?: boolean;
    /**
     * Rate Plan code.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    ratePlanCode?: string;
    /**
     * Room Type.
     * @type {string}
     * @memberof ChannelRateRoomType
     */
    roomType?: string;
}
/**
 * Check if a given object implements the ChannelRateRoomType interface.
 */
export declare function instanceOfChannelRateRoomType(value: object): boolean;
export declare function ChannelRateRoomTypeFromJSON(json: any): ChannelRateRoomType;
export declare function ChannelRateRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateRoomType;
export declare function ChannelRateRoomTypeToJSON(value?: ChannelRateRoomType | null): any;