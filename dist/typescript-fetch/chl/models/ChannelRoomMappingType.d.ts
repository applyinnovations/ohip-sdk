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
import type { BookingChannelInfoType } from './BookingChannelInfoType';
import type { ChannelMappingEnhancedDescriptionType } from './ChannelMappingEnhancedDescriptionType';
import type { ChannelRoomMappingDescriptionType } from './ChannelRoomMappingDescriptionType';
import type { ChannelRoomMappingDetailsType } from './ChannelRoomMappingDetailsType';
/**
 * Basic details of hotel-channel room type mapping.
 * @export
 * @interface ChannelRoomMappingType
 */
export interface ChannelRoomMappingType {
    /**
     * Flag that indicates whether hotel-channel room type mapping is active or not.
     * @type {boolean}
     * @memberof ChannelRoomMappingType
     */
    active?: boolean;
    /**
     * Alternate channel room type name.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    alternateChannelRoomType?: string;
    /**
     * Channel base allocation.
     * @type {number}
     * @memberof ChannelRoomMappingType
     */
    baseAllocation?: number;
    /**
     * Channel bed type code.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    bedTypeCode?: string;
    /**
     * Begin Date.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    beginDate?: string;
    /**
     * Booking Channel Code.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    bookingChannelCode?: string;
    /**
     *
     * @type {BookingChannelInfoType}
     * @memberof ChannelRoomMappingType
     */
    bookingChannelInfo?: BookingChannelInfoType;
    /**
     * Channel rate codes where hotel-channel room mappings belong to.
     * @type {Array<string>}
     * @memberof ChannelRoomMappingType
     */
    channelRateCodes?: Array<string>;
    /**
     *
     * @type {ChannelRoomMappingDetailsType}
     * @memberof ChannelRoomMappingType
     */
    channelRoomMappingDetails?: ChannelRoomMappingDetailsType;
    /**
     * Channel Room Type.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    channelRoomType?: string;
    /**
     * Channel room type order of the hotel-channel room type mapping.
     * @type {number}
     * @memberof ChannelRoomMappingType
     */
    channelRoomTypeOrder?: number;
    /**
     *
     * @type {ChannelRoomMappingDescriptionType}
     * @memberof ChannelRoomMappingType
     */
    description?: ChannelRoomMappingDescriptionType;
    /**
     * End date of the hotel-channel room type mapping.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    endDate?: string;
    /**
     *
     * @type {ChannelMappingEnhancedDescriptionType}
     * @memberof ChannelRoomMappingType
     */
    globalDescription?: ChannelMappingEnhancedDescriptionType;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    hotelId?: string;
    /**
     * Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    newBeginDate?: string;
    /**
     * Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    newChannelRoomType?: string;
    /**
     * Rate codes where hotel-channel room type mappings belong to.
     * @type {Array<string>}
     * @memberof ChannelRoomMappingType
     */
    rateCodes?: Array<string>;
    /**
     * Room Type.
     * @type {string}
     * @memberof ChannelRoomMappingType
     */
    roomType?: string;
    /**
     * Sell sequence for hotel-channel room type mapping.
     * @type {number}
     * @memberof ChannelRoomMappingType
     */
    sellSequence?: number;
}
/**
 * Check if a given object implements the ChannelRoomMappingType interface.
 */
export declare function instanceOfChannelRoomMappingType(value: object): boolean;
export declare function ChannelRoomMappingTypeFromJSON(json: any): ChannelRoomMappingType;
export declare function ChannelRoomMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingType;
export declare function ChannelRoomMappingTypeToJSON(value?: ChannelRoomMappingType | null): any;
