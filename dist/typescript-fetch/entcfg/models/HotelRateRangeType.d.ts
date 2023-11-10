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
import type { TimeSpanType } from './TimeSpanType';
/**
 * The rate rage information of the hotel.
 * @export
 * @interface HotelRateRangeType
 */
export interface HotelRateRangeType {
    /**
     * The base currency code for rate range(The currency code used by the hotel which the rate range belongs to).
     * @type {string}
     * @memberof HotelRateRangeType
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof HotelRateRangeType
     */
    hotelId?: string;
    /**
     * Maximum Rate offered by the hotel.
     * @type {number}
     * @memberof HotelRateRangeType
     */
    maxRate?: number;
    /**
     * Minimum Rate offered by the hotel.
     * @type {number}
     * @memberof HotelRateRangeType
     */
    minRate?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof HotelRateRangeType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the HotelRateRangeType interface.
 */
export declare function instanceOfHotelRateRangeType(value: object): boolean;
export declare function HotelRateRangeTypeFromJSON(json: any): HotelRateRangeType;
export declare function HotelRateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRateRangeType;
export declare function HotelRateRangeTypeToJSON(value?: HotelRateRangeType | null): any;
