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
import type { ColorType } from './ColorType';
/**
 * Base structure for Day Type Code at both template and hotel levels.
 * @export
 * @interface HotelDayTypeCodeType
 */
export interface HotelDayTypeCodeType {
    /**
     * Code of a Day Type.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    code?: string;
    /**
     * Description of a Day Type.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    description?: string;
    /**
     * Value by which the rates will be multiplied on a day.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    multiplier?: number;
    /**
     * Value that will be added to rate on a day.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    adder?: number;
    /**
     *
     * @type {ColorType}
     * @memberof HotelDayTypeCodeType
     */
    color?: ColorType;
    /**
     * Sell sequence for a Day Type.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    sellSequence?: number;
    /**
     * Hotel code to which the Day Type is associated.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    hotel?: string;
}
/**
 * Check if a given object implements the HotelDayTypeCodeType interface.
 */
export declare function instanceOfHotelDayTypeCodeType(value: object): boolean;
export declare function HotelDayTypeCodeTypeFromJSON(json: any): HotelDayTypeCodeType;
export declare function HotelDayTypeCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelDayTypeCodeType;
export declare function HotelDayTypeCodeTypeToJSON(value?: HotelDayTypeCodeType | null): any;