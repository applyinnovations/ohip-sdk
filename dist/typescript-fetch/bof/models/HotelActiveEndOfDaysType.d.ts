/**
 * OPERA Cloud Back Office Operations API
 * APIs to cater for Back Office Operations functionality in OPERA Cloud. <br /><br /> A common BackOffice industry term is End of Day.  This closes and balances each day\'s business activities. It reconciles guest folios and processes credit card transactions. The End of Day routine rolls the business date forward and prints final reports.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelActiveEndOfDayType } from './HotelActiveEndOfDayType';
/**
 * Collection of hotels and its active end of days.
 * @export
 * @interface HotelActiveEndOfDaysType
 */
export interface HotelActiveEndOfDaysType extends Array<HotelActiveEndOfDayType> {
}
/**
 * Check if a given object implements the HotelActiveEndOfDaysType interface.
 */
export declare function instanceOfHotelActiveEndOfDaysType(value: object): boolean;
export declare function HotelActiveEndOfDaysTypeFromJSON(json: any): HotelActiveEndOfDaysType;
export declare function HotelActiveEndOfDaysTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelActiveEndOfDaysType;
export declare function HotelActiveEndOfDaysTypeToJSON(value?: HotelActiveEndOfDaysType | null): any;
