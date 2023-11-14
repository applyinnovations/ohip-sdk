/* tslint:disable */
/* eslint-disable */
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
export function instanceOfChannelRoomMappingDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRoomMappingDetailsTypeFromJSON(json: any): ChannelRoomMappingDetailsType {
    return ChannelRoomMappingDetailsTypeFromJSONTyped(json, false);
}

export function ChannelRoomMappingDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'alternateChannelRoomType': !exists(json, 'alternateChannelRoomType') ? undefined : json['alternateChannelRoomType'],
        'baseAllocation': !exists(json, 'baseAllocation') ? undefined : json['baseAllocation'],
        'bedTypeCode': !exists(json, 'bedTypeCode') ? undefined : json['bedTypeCode'],
        'bookingChannelInfo': !exists(json, 'bookingChannelInfo') ? undefined : BookingChannelInfoTypeFromJSON(json['bookingChannelInfo']),
        'channelRateCodes': !exists(json, 'channelRateCodes') ? undefined : json['channelRateCodes'],
        'channelRoomTypeOrder': !exists(json, 'channelRoomTypeOrder') ? undefined : json['channelRoomTypeOrder'],
        'description': !exists(json, 'description') ? undefined : ChannelRoomMappingDescriptionTypeFromJSON(json['description']),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'globalDescription': !exists(json, 'globalDescription') ? undefined : ChannelMappingEnhancedDescriptionTypeFromJSON(json['globalDescription']),
        'newBeginDate': !exists(json, 'newBeginDate') ? undefined : (new Date(json['newBeginDate'])),
        'newChannelRoomType': !exists(json, 'newChannelRoomType') ? undefined : json['newChannelRoomType'],
        'rateCodes': !exists(json, 'rateCodes') ? undefined : json['rateCodes'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function ChannelRoomMappingDetailsTypeToJSON(value?: ChannelRoomMappingDetailsType | null): any {
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
        'bookingChannelInfo': BookingChannelInfoTypeToJSON(value.bookingChannelInfo),
        'channelRateCodes': value.channelRateCodes,
        'channelRoomTypeOrder': value.channelRoomTypeOrder,
        'description': ChannelRoomMappingDescriptionTypeToJSON(value.description),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substring(0,10)),
        'globalDescription': ChannelMappingEnhancedDescriptionTypeToJSON(value.globalDescription),
        'newBeginDate': value.newBeginDate === undefined ? undefined : (value.newBeginDate.toISOString().substring(0,10)),
        'newChannelRoomType': value.newChannelRoomType,
        'rateCodes': value.rateCodes,
        'sellSequence': value.sellSequence,
    };
}
