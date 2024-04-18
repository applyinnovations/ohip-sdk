/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface RoomClassSellLimitType
 */
export interface RoomClassSellLimitType {
    /**
     *
     * @type {number}
     * @memberof RoomClassSellLimitType
     */
    amount?: number;
    /**
     *
     * @type {string}
     * @memberof RoomClassSellLimitType
     */
    date?: string;
    /**
     *
     * @type {string}
     * @memberof RoomClassSellLimitType
     */
    flatOrPercentage?: string;
    /**
     *
     * @type {string}
     * @memberof RoomClassSellLimitType
     */
    roomClass?: string;
}
/**
 * Check if a given object implements the RoomClassSellLimitType interface.
 */
export declare function instanceOfRoomClassSellLimitType(value: object): boolean;
export declare function RoomClassSellLimitTypeFromJSON(json: any): RoomClassSellLimitType;
export declare function RoomClassSellLimitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassSellLimitType;
export declare function RoomClassSellLimitTypeToJSON(value?: RoomClassSellLimitType | null): any;