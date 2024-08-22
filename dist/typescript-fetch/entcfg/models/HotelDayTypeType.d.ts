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
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
/**
 * Details of Day Type to be used to set day types for a hotel.
 * @export
 * @interface HotelDayTypeType
 */
export interface HotelDayTypeType {
    /**
     * Day type code selected.
     * @type {string}
     * @memberof HotelDayTypeType
     */
    hotelId?: string;
    /**
     * Day type code selected.
     * @type {string}
     * @memberof HotelDayTypeType
     */
    dayTypeCode?: string;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof HotelDayTypeType
     */
    dateRange?: TimeSpanDaysOfWeekType;
}
/**
 * Check if a given object implements the HotelDayTypeType interface.
 */
export declare function instanceOfHotelDayTypeType(value: object): boolean;
export declare function HotelDayTypeTypeFromJSON(json: any): HotelDayTypeType;
export declare function HotelDayTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelDayTypeType;
export declare function HotelDayTypeTypeToJSON(value?: HotelDayTypeType | null): any;
