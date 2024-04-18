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
import type { BookingChannelInfoType } from './BookingChannelInfoType';
import {
    BookingChannelInfoTypeFromJSON,
    BookingChannelInfoTypeFromJSONTyped,
    BookingChannelInfoTypeToJSON,
} from './BookingChannelInfoType';
import type { ChannelMappingEnhancedDescriptionType } from './ChannelMappingEnhancedDescriptionType';
import {
    ChannelMappingEnhancedDescriptionTypeFromJSON,
    ChannelMappingEnhancedDescriptionTypeFromJSONTyped,
    ChannelMappingEnhancedDescriptionTypeToJSON,
} from './ChannelMappingEnhancedDescriptionType';
import type { ChannelRoomMappingDescriptionType } from './ChannelRoomMappingDescriptionType';
import {
    ChannelRoomMappingDescriptionTypeFromJSON,
    ChannelRoomMappingDescriptionTypeFromJSONTyped,
    ChannelRoomMappingDescriptionTypeToJSON,
} from './ChannelRoomMappingDescriptionType';
import type { ChannelRoomMappingDetailsType } from './ChannelRoomMappingDetailsType';
import {
    ChannelRoomMappingDetailsTypeFromJSON,
    ChannelRoomMappingDetailsTypeFromJSONTyped,
    ChannelRoomMappingDetailsTypeToJSON,
} from './ChannelRoomMappingDetailsType';

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
export function instanceOfChannelRoomMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRoomMappingTypeFromJSON(json: any): ChannelRoomMappingType {
    return ChannelRoomMappingTypeFromJSONTyped(json, false);
}

export function ChannelRoomMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'alternateChannelRoomType': !exists(json, 'alternateChannelRoomType') ? undefined : json['alternateChannelRoomType'],
        'baseAllocation': !exists(json, 'baseAllocation') ? undefined : json['baseAllocation'],
        'bedTypeCode': !exists(json, 'bedTypeCode') ? undefined : json['bedTypeCode'],
        'beginDate': !exists(json, 'beginDate') ? undefined : json['beginDate'],
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'bookingChannelInfo': !exists(json, 'bookingChannelInfo') ? undefined : BookingChannelInfoTypeFromJSON(json['bookingChannelInfo']),
        'channelRateCodes': !exists(json, 'channelRateCodes') ? undefined : json['channelRateCodes'],
        'channelRoomMappingDetails': !exists(json, 'channelRoomMappingDetails') ? undefined : ChannelRoomMappingDetailsTypeFromJSON(json['channelRoomMappingDetails']),
        'channelRoomType': !exists(json, 'channelRoomType') ? undefined : json['channelRoomType'],
        'channelRoomTypeOrder': !exists(json, 'channelRoomTypeOrder') ? undefined : json['channelRoomTypeOrder'],
        'description': !exists(json, 'description') ? undefined : ChannelRoomMappingDescriptionTypeFromJSON(json['description']),
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'globalDescription': !exists(json, 'globalDescription') ? undefined : ChannelMappingEnhancedDescriptionTypeFromJSON(json['globalDescription']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'newBeginDate': !exists(json, 'newBeginDate') ? undefined : json['newBeginDate'],
        'newChannelRoomType': !exists(json, 'newChannelRoomType') ? undefined : json['newChannelRoomType'],
        'rateCodes': !exists(json, 'rateCodes') ? undefined : json['rateCodes'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function ChannelRoomMappingTypeToJSON(value?: ChannelRoomMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'alternateChannelRoomType': value.alternateChannelRoomType,
        'baseAllocation': value.baseAllocation,
        'bedTypeCode': value.bedTypeCode,
        'beginDate': value.beginDate,
        'bookingChannelCode': value.bookingChannelCode,
        'bookingChannelInfo': BookingChannelInfoTypeToJSON(value.bookingChannelInfo),
        'channelRateCodes': value.channelRateCodes,
        'channelRoomMappingDetails': ChannelRoomMappingDetailsTypeToJSON(value.channelRoomMappingDetails),
        'channelRoomType': value.channelRoomType,
        'channelRoomTypeOrder': value.channelRoomTypeOrder,
        'description': ChannelRoomMappingDescriptionTypeToJSON(value.description),
        'endDate': value.endDate,
        'globalDescription': ChannelMappingEnhancedDescriptionTypeToJSON(value.globalDescription),
        'hotelId': value.hotelId,
        'newBeginDate': value.newBeginDate,
        'newChannelRoomType': value.newChannelRoomType,
        'rateCodes': value.rateCodes,
        'roomType': value.roomType,
        'sellSequence': value.sellSequence,
    };
}
