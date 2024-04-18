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
import type { HurdleRateType } from './HurdleRateType';
/**
 * Unique identifier for hurdle rate.
 * @export
 * @interface HurdleRateEditType
 */
export interface HurdleRateEditType {
    /**
     * Hotel code for which the hurdle rate belongs to.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    hotelId?: string;
    /**
     * Hurdle date for which the hurdle rate is scheduled.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    hurdleDate?: string;
    /**
     * Length of stay for which the hurdle rate applies to.
     * @type {number}
     * @memberof HurdleRateEditType
     */
    lengthOfStay?: number;
    /**
     *
     * @type {HurdleRateType}
     * @memberof HurdleRateEditType
     */
    newHurdleRate?: HurdleRateType;
    /**
     * Internal room category of the room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    roomCategory?: string;
    /**
     * Room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    roomType?: string;
    /**
     * Yield category for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    yieldCategory?: string;
    /**
     * Yield market code for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateEditType
     */
    yieldMarketCode?: string;
}
/**
 * Check if a given object implements the HurdleRateEditType interface.
 */
export declare function instanceOfHurdleRateEditType(value: object): boolean;
export declare function HurdleRateEditTypeFromJSON(json: any): HurdleRateEditType;
export declare function HurdleRateEditTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HurdleRateEditType;
export declare function HurdleRateEditTypeToJSON(value?: HurdleRateEditType | null): any;