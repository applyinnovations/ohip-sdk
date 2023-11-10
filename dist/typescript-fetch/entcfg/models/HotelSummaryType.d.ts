/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * A brief summary of information about a hotel.
 * @export
 * @interface HotelSummaryType
 */
export interface HotelSummaryType {
    /**
     * Date when the hotel becomes valid for use.
     * @type {Date}
     * @memberof HotelSummaryType
     */
    activeDate?: Date;
    /**
     * Hotels Chain Code. This attribute uniquely assign Hotel to a single chain.
     * @type {string}
     * @memberof HotelSummaryType
     */
    chainCode?: string;
    /**
     * Code identifying the hotel.
     * @type {string}
     * @memberof HotelSummaryType
     */
    hotelId?: string;
    /**
     * The name of the hotel.
     * @type {string}
     * @memberof HotelSummaryType
     */
    hotelName?: string;
    /**
     * Date when the hotel becomes invalid for use.
     * @type {Date}
     * @memberof HotelSummaryType
     */
    inactiveDate?: Date;
}
/**
 * Check if a given object implements the HotelSummaryType interface.
 */
export declare function instanceOfHotelSummaryType(value: object): boolean;
export declare function HotelSummaryTypeFromJSON(json: any): HotelSummaryType;
export declare function HotelSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelSummaryType;
export declare function HotelSummaryTypeToJSON(value?: HotelSummaryType | null): any;
