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
import type { URLType } from './URLType';
import {
    URLTypeFromJSON,
    URLTypeFromJSONTyped,
    URLTypeToJSON,
} from './URLType';

/**
 * General Information of the hotel.
 * @export
 * @interface HotelInfoTypeGeneralInformation
 */
export interface HotelInfoTypeGeneralInformation {
    /**
     * The type of the Hotel.
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    hotelType?: string;
    /**
     * The total number of rooms in the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    roomCount?: number;
    /**
     * The total number of beds in the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    bedCount?: number;
    /**
     * The total number of floors of the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    floorCount?: number;
    /**
     * The official check in time of the Hotel.
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    checkInTime?: string;
    /**
     * The official check out time of the Hotel.
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    checkOutTime?: string;
    /**
     * 
     * @type {URLType}
     * @memberof HotelInfoTypeGeneralInformation
     */
    hotelInfoWebsite?: URLType;
    /**
     * Longitude of the hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    longitude?: number;
    /**
     * Latitude of the hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    latitude?: number;
    /**
     * 
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    baseLanguage?: string;
}

/**
 * Check if a given object implements the HotelInfoTypeGeneralInformation interface.
 */
export function instanceOfHotelInfoTypeGeneralInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypeGeneralInformationFromJSON(json: any): HotelInfoTypeGeneralInformation {
    return HotelInfoTypeGeneralInformationFromJSONTyped(json, false);
}

export function HotelInfoTypeGeneralInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypeGeneralInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelType': !exists(json, 'hotelType') ? undefined : json['hotelType'],
        'roomCount': !exists(json, 'roomCount') ? undefined : json['roomCount'],
        'bedCount': !exists(json, 'bedCount') ? undefined : json['bedCount'],
        'floorCount': !exists(json, 'floorCount') ? undefined : json['floorCount'],
        'checkInTime': !exists(json, 'checkInTime') ? undefined : json['checkInTime'],
        'checkOutTime': !exists(json, 'checkOutTime') ? undefined : json['checkOutTime'],
        'hotelInfoWebsite': !exists(json, 'hotelInfoWebsite') ? undefined : URLTypeFromJSON(json['hotelInfoWebsite']),
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'baseLanguage': !exists(json, 'baseLanguage') ? undefined : json['baseLanguage'],
    };
}

export function HotelInfoTypeGeneralInformationToJSON(value?: HotelInfoTypeGeneralInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelType': value.hotelType,
        'roomCount': value.roomCount,
        'bedCount': value.bedCount,
        'floorCount': value.floorCount,
        'checkInTime': value.checkInTime,
        'checkOutTime': value.checkOutTime,
        'hotelInfoWebsite': URLTypeToJSON(value.hotelInfoWebsite),
        'longitude': value.longitude,
        'latitude': value.latitude,
        'baseLanguage': value.baseLanguage,
    };
}

