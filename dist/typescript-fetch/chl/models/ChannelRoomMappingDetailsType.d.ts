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
/**
 * Basic details of hotel-channel room type mapping.
 * @export
 * @interface ChannelRoomMappingDetailsType
 */
export interface ChannelRoomMappingDetailsType {
    /**
     * Flag that indicates whether hotel-channel room type mapping is active or not.
     * @type {boolean}
     * @memberof ChannelRoomMappingDetailsType
     */
    active?: boolean;
    /**
     * Alternate channel room type name.
     * @type {string}
     * @memberof ChannelRoomMappingDetailsType
     */
    alternateChannelRoomType?: string;
    /**
     * Channel base allocation.
     * @type {number}
     * @memberof ChannelRoomMappingDetailsType
     */
    baseAllocation?: number;
    /**
     * Channel bed type code.
     * @type {string}
     * @memberof ChannelRoomMappingDetailsType
     */
    bedTypeCode?: string;
    /**
     *
     * @type {BookingChannelInfoType}
     * @memberof ChannelRoomMappingDetailsType
     */
    bookingChannelInfo?: BookingChannelInfoType;
    /**
     * Channel rate codes where hotel-channel room mappings belong to.
     * @type {Array<string>}
     * @memberof ChannelRoomMappingDetailsType
     */
    channelRateCodes?: Array<string>;
    /**
     * Channel room type order of the hotel-channel room type mapping.
     * @type {number}
     * @memberof ChannelRoomMappingDetailsType
     */
    channelRoomTypeOrder?: number;
    /**
     *
     * @type {ChannelRoomMappingDescriptionType}
     * @memberof ChannelRoomMappingDetailsType
     */
    description?: ChannelRoomMappingDescriptionType;
    /**
     * End date of the hotel-channel room type mapping.
     * @type {Date}
     * @memberof ChannelRoomMappingDetailsType
     */
    endDate?: Date;
    /**
     *
     * @type {ChannelMappingEnhancedDescriptionType}
     * @memberof ChannelRoomMappingDetailsType
     */
    globalDescription?: ChannelMappingEnhancedDescriptionType;
    /**
     * Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping.
     * @type {Date}
     * @memberof ChannelRoomMappingDetailsType
     */
    newBeginDate?: Date;
    /**
     * Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping.
     * @type {string}
     * @memberof ChannelRoomMappingDetailsType
     */
    newChannelRoomType?: string;
    /**
     * Rate codes where hotel-channel room type mappings belong to.
     * @type {Array<string>}
     * @memberof ChannelRoomMappingDetailsType
     */
    rateCodes?: Array<string>;
    /**
     * Sell sequence for hotel-channel room type mapping.
     * @type {number}
     * @memberof ChannelRoomMappingDetailsType
     */
    sellSequence?: number;
}
/**
 * Check if a given object implements the ChannelRoomMappingDetailsType interface.
 */
export declare function instanceOfChannelRoomMappingDetailsType(value: object): boolean;
export declare function ChannelRoomMappingDetailsTypeFromJSON(json: any): ChannelRoomMappingDetailsType;
export declare function ChannelRoomMappingDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingDetailsType;
export declare function ChannelRoomMappingDetailsTypeToJSON(value?: ChannelRoomMappingDetailsType | null): any;