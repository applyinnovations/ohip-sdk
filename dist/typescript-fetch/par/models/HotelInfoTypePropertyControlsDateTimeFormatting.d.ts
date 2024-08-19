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
/**
 * Date Time Formatting information configuration of the hotel
 * @export
 * @interface HotelInfoTypePropertyControlsDateTimeFormatting
 */
export interface HotelInfoTypePropertyControlsDateTimeFormatting {
    /**
     * Long date format of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsDateTimeFormatting
     */
    longDateFormat?: string;
    /**
     * Short date format of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsDateTimeFormatting
     */
    shortDateFormat?: string;
    /**
     * Time format for the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsDateTimeFormatting
     */
    timeFormat?: string;
    /**
     * Time zone region of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsDateTimeFormatting
     */
    timeZoneRegion?: string;
}
/**
 * Check if a given object implements the HotelInfoTypePropertyControlsDateTimeFormatting interface.
 */
export declare function instanceOfHotelInfoTypePropertyControlsDateTimeFormatting(value: object): boolean;
export declare function HotelInfoTypePropertyControlsDateTimeFormattingFromJSON(json: any): HotelInfoTypePropertyControlsDateTimeFormatting;
export declare function HotelInfoTypePropertyControlsDateTimeFormattingFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypePropertyControlsDateTimeFormatting;
export declare function HotelInfoTypePropertyControlsDateTimeFormattingToJSON(value?: HotelInfoTypePropertyControlsDateTimeFormatting | null): any;
