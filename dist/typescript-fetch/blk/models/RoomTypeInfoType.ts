/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BookingChannelMappingType } from './BookingChannelMappingType';
import {
    BookingChannelMappingTypeFromJSON,
    BookingChannelMappingTypeFromJSONTyped,
    BookingChannelMappingTypeToJSON,
} from './BookingChannelMappingType';
import type { RoomFeatureType } from './RoomFeatureType';
import {
    RoomFeatureTypeFromJSON,
    RoomFeatureTypeFromJSONTyped,
    RoomFeatureTypeToJSON,
} from './RoomFeatureType';
import type { RoomTypeAttributesType } from './RoomTypeAttributesType';
import {
    RoomTypeAttributesTypeFromJSON,
    RoomTypeAttributesTypeFromJSONTyped,
    RoomTypeAttributesTypeToJSON,
} from './RoomTypeAttributesType';

/**
 * 
 * @export
 * @interface RoomTypeInfoType
 */
export interface RoomTypeInfoType {
    /**
     * Bed type code associated with room.
     * @type {Array<string>}
     * @memberof RoomTypeInfoType
     */
    bedTypeCodes?: Array<string>;
    /**
     * Booking Channels mapping for the Room Type.
     * @type {Array<BookingChannelMappingType>}
     * @memberof RoomTypeInfoType
     */
    bookingChannelMappings?: Array<BookingChannelMappingType>;
    /**
     * Indicates room type is a Component Room.
     * @type {boolean}
     * @memberof RoomTypeInfoType
     */
    component?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    hotelId?: string;
    /**
     * Block code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    invBlockCode?: string;
    /**
     * Detail description of the Room Type.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    longDescription?: string;
    /**
     * Represents the promotional code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    promotionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomClass?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof RoomTypeInfoType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Represents the room qualifier code like Deluxe,Economy,Suite etc.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomQualifierCode?: string;
    /**
     * Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomQualifierMatchIndicator?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomType?: string;
    /**
     * 
     * @type {RoomTypeAttributesType}
     * @memberof RoomTypeInfoType
     */
    roomTypeAttributes?: RoomTypeAttributesType;
    /**
     * Represents the room view code like City view, River view, Ocean view etc.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomViewCode?: string;
    /**
     * Indicates room type is a suite.
     * @type {boolean}
     * @memberof RoomTypeInfoType
     */
    suite?: boolean;
    /**
     * Name corresponding to a RoomType.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    webName?: string;
    /**
     * URL providing more information about the Room Type.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    webPage?: string;
}

/**
 * Check if a given object implements the RoomTypeInfoType interface.
 */
export function instanceOfRoomTypeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeInfoTypeFromJSON(json: any): RoomTypeInfoType {
    return RoomTypeInfoTypeFromJSONTyped(json, false);
}

export function RoomTypeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bedTypeCodes': !exists(json, 'bedTypeCodes') ? undefined : json['bedTypeCodes'],
        'bookingChannelMappings': !exists(json, 'bookingChannelMappings') ? undefined : ((json['bookingChannelMappings'] as Array<any>).map(BookingChannelMappingTypeFromJSON)),
        'component': !exists(json, 'component') ? undefined : json['component'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'invBlockCode': !exists(json, 'invBlockCode') ? undefined : json['invBlockCode'],
        'longDescription': !exists(json, 'longDescription') ? undefined : json['longDescription'],
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'roomClass': !exists(json, 'roomClass') ? undefined : json['roomClass'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomQualifierCode': !exists(json, 'roomQualifierCode') ? undefined : json['roomQualifierCode'],
        'roomQualifierMatchIndicator': !exists(json, 'roomQualifierMatchIndicator') ? undefined : json['roomQualifierMatchIndicator'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeAttributes': !exists(json, 'roomTypeAttributes') ? undefined : RoomTypeAttributesTypeFromJSON(json['roomTypeAttributes']),
        'roomViewCode': !exists(json, 'roomViewCode') ? undefined : json['roomViewCode'],
        'suite': !exists(json, 'suite') ? undefined : json['suite'],
        'webName': !exists(json, 'webName') ? undefined : json['webName'],
        'webPage': !exists(json, 'webPage') ? undefined : json['webPage'],
    };
}

export function RoomTypeInfoTypeToJSON(value?: RoomTypeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bedTypeCodes': value.bedTypeCodes,
        'bookingChannelMappings': value.bookingChannelMappings === undefined ? undefined : ((value.bookingChannelMappings as Array<any>).map(BookingChannelMappingTypeToJSON)),
        'component': value.component,
        'description': value.description,
        'hotelId': value.hotelId,
        'invBlockCode': value.invBlockCode,
        'longDescription': value.longDescription,
        'promotionCode': value.promotionCode,
        'roomClass': value.roomClass,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomQualifierCode': value.roomQualifierCode,
        'roomQualifierMatchIndicator': value.roomQualifierMatchIndicator,
        'roomType': value.roomType,
        'roomTypeAttributes': RoomTypeAttributesTypeToJSON(value.roomTypeAttributes),
        'roomViewCode': value.roomViewCode,
        'suite': value.suite,
        'webName': value.webName,
        'webPage': value.webPage,
    };
}

