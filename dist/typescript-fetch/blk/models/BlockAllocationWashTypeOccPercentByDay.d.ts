/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Holds percentage values for each day.
 * @export
 * @interface BlockAllocationWashTypeOccPercentByDay
 */
export interface BlockAllocationWashTypeOccPercentByDay {
    /**
     * Percentage occupancy value for Friday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    friday?: number;
    /**
     * Percentage occupancy value for Monday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    monday?: number;
    /**
     * Percentage occupancy value for Saturday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    saturday?: number;
    /**
     * Percentage occupancy value for Sunday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    sunday?: number;
    /**
     * Percentage occupancy value for Thursday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    thursday?: number;
    /**
     * Percentage occupancy value for Tuesday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    tuesday?: number;
    /**
     * Percentage occupancy value for Wednesday.
     * @type {number}
     * @memberof BlockAllocationWashTypeOccPercentByDay
     */
    wednesday?: number;
}
/**
 * Check if a given object implements the BlockAllocationWashTypeOccPercentByDay interface.
 */
export declare function instanceOfBlockAllocationWashTypeOccPercentByDay(value: object): boolean;
export declare function BlockAllocationWashTypeOccPercentByDayFromJSON(json: any): BlockAllocationWashTypeOccPercentByDay;
export declare function BlockAllocationWashTypeOccPercentByDayFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAllocationWashTypeOccPercentByDay;
export declare function BlockAllocationWashTypeOccPercentByDayToJSON(value?: BlockAllocationWashTypeOccPercentByDay | null): any;
