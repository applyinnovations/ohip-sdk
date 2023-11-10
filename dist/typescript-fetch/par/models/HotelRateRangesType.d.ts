/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelRateRangeType } from './HotelRateRangeType';
/**
 * Lists of rate ranges of the hotel.
 * @export
 * @interface HotelRateRangesType
 */
export interface HotelRateRangesType extends Array<HotelRateRangeType> {
}
/**
 * Check if a given object implements the HotelRateRangesType interface.
 */
export declare function instanceOfHotelRateRangesType(value: object): boolean;
export declare function HotelRateRangesTypeFromJSON(json: any): HotelRateRangesType;
export declare function HotelRateRangesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRateRangesType;
export declare function HotelRateRangesTypeToJSON(value?: HotelRateRangesType | null): any;
