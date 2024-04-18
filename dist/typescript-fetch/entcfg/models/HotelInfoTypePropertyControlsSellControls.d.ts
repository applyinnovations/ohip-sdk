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
/**
 * The sell controls information configuration of the hotel.
 * @export
 * @interface HotelInfoTypePropertyControlsSellControls
 */
export interface HotelInfoTypePropertyControlsSellControls {
    /**
     * Date when the hotel become valid for use.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    startDate?: string;
    /**
     * The end date of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    endDate?: string;
    /**
     * The hotel code.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the HotelInfoTypePropertyControlsSellControls interface.
 */
export declare function instanceOfHotelInfoTypePropertyControlsSellControls(value: object): boolean;
export declare function HotelInfoTypePropertyControlsSellControlsFromJSON(json: any): HotelInfoTypePropertyControlsSellControls;
export declare function HotelInfoTypePropertyControlsSellControlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypePropertyControlsSellControls;
export declare function HotelInfoTypePropertyControlsSellControlsToJSON(value?: HotelInfoTypePropertyControlsSellControls | null): any;