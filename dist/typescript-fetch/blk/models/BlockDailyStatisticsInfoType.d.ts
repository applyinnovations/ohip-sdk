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
 * Information about Block daily statistics.
 * @export
 * @interface BlockDailyStatisticsInfoType
 */
export interface BlockDailyStatisticsInfoType {
    /**
     * Pertain value for blocked rooms for a block.
     * @type {number}
     * @memberof BlockDailyStatisticsInfoType
     */
    allocated?: number;
    /**
     * Pertain value for available rooms for a block.
     * @type {number}
     * @memberof BlockDailyStatisticsInfoType
     */
    available?: number;
    /**
     * Pertain value for reserved rooms for a block.
     * @type {number}
     * @memberof BlockDailyStatisticsInfoType
     */
    pickup?: number;
}
/**
 * Check if a given object implements the BlockDailyStatisticsInfoType interface.
 */
export declare function instanceOfBlockDailyStatisticsInfoType(value: object): boolean;
export declare function BlockDailyStatisticsInfoTypeFromJSON(json: any): BlockDailyStatisticsInfoType;
export declare function BlockDailyStatisticsInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDailyStatisticsInfoType;
export declare function BlockDailyStatisticsInfoTypeToJSON(value?: BlockDailyStatisticsInfoType | null): any;
