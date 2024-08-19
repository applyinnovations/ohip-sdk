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
import type { BookingChannelMappingType } from './BookingChannelMappingType';
import {
    BookingChannelMappingTypeFromJSON,
    BookingChannelMappingTypeFromJSONTyped,
    BookingChannelMappingTypeToJSON,
} from './BookingChannelMappingType';

/**
 * 
 * @export
 * @interface HotelChannelInfoType
 */
export interface HotelChannelInfoType {
    /**
     * Booking Channels mapping for the Hotel Code.
     * @type {Array<BookingChannelMappingType>}
     * @memberof HotelChannelInfoType
     */
    bookingChannelMappings?: Array<BookingChannelMappingType>;
    /**
     * 
     * @type {string}
     * @memberof HotelChannelInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof HotelChannelInfoType
     */
    name?: string;
}

/**
 * Check if a given object implements the HotelChannelInfoType interface.
 */
export function instanceOfHotelChannelInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelChannelInfoTypeFromJSON(json: any): HotelChannelInfoType {
    return HotelChannelInfoTypeFromJSONTyped(json, false);
}

export function HotelChannelInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelChannelInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelMappings': !exists(json, 'bookingChannelMappings') ? undefined : ((json['bookingChannelMappings'] as Array<any>).map(BookingChannelMappingTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function HotelChannelInfoTypeToJSON(value?: HotelChannelInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelMappings': value.bookingChannelMappings === undefined ? undefined : ((value.bookingChannelMappings as Array<any>).map(BookingChannelMappingTypeToJSON)),
        'hotelId': value.hotelId,
        'name': value.name,
    };
}

