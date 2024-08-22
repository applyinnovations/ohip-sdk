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
 * Unit type to hold statistic code and value pair e.g. [resort - value] [BHOTEL - 20] [MHOTEL - 30] and its sub units per property wise
 * @export
 * @interface PropertyStatisticUnitType
 */
export interface PropertyStatisticUnitType {
    /**
     * Unique ID of the hotel.
     * @type {string}
     * @memberof PropertyStatisticUnitType
     */
    hotelId?: string;
    /**
     * Value of the statistic unit.
     * @type {number}
     * @memberof PropertyStatisticUnitType
     */
    value?: number;
}
/**
 * Check if a given object implements the PropertyStatisticUnitType interface.
 */
export declare function instanceOfPropertyStatisticUnitType(value: object): boolean;
export declare function PropertyStatisticUnitTypeFromJSON(json: any): PropertyStatisticUnitType;
export declare function PropertyStatisticUnitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyStatisticUnitType;
export declare function PropertyStatisticUnitTypeToJSON(value?: PropertyStatisticUnitType | null): any;
