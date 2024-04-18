/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { URLType } from './URLType';
/**
 * General Information of the hotel.
 * @export
 * @interface HotelInfoTypeGeneralInformation
 */
export interface HotelInfoTypeGeneralInformation {
    /**
     *
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    baseLanguage?: string;
    /**
     * The total number of beds in the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    bedCount?: number;
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
     * The total number of floors of the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    floorCount?: number;
    /**
     *
     * @type {URLType}
     * @memberof HotelInfoTypeGeneralInformation
     */
    hotelInfoWebsite?: URLType;
    /**
     * The type of the Hotel.
     * @type {string}
     * @memberof HotelInfoTypeGeneralInformation
     */
    hotelType?: string;
    /**
     * Latitude of the hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    latitude?: number;
    /**
     * Longitude of the hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    longitude?: number;
    /**
     * The total number of rooms in the Hotel.
     * @type {number}
     * @memberof HotelInfoTypeGeneralInformation
     */
    roomCount?: number;
}
/**
 * Check if a given object implements the HotelInfoTypeGeneralInformation interface.
 */
export declare function instanceOfHotelInfoTypeGeneralInformation(value: object): boolean;
export declare function HotelInfoTypeGeneralInformationFromJSON(json: any): HotelInfoTypeGeneralInformation;
export declare function HotelInfoTypeGeneralInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypeGeneralInformation;
export declare function HotelInfoTypeGeneralInformationToJSON(value?: HotelInfoTypeGeneralInformation | null): any;