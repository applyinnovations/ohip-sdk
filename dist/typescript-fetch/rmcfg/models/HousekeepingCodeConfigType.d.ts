/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Common code type for code, description
 * @export
 * @interface HousekeepingCodeConfigType
 */
export interface HousekeepingCodeConfigType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof HousekeepingCodeConfigType
     */
    code?: string;
    /**
     * Description for the code type.
     * @type {string}
     * @memberof HousekeepingCodeConfigType
     */
    description?: string;
    /**
     * Hotel Code for a housekeeping task.
     * @type {string}
     * @memberof HousekeepingCodeConfigType
     */
    hotelId?: string;
    /**
     * Display sequence for the housekeeping task.
     * @type {number}
     * @memberof HousekeepingCodeConfigType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the HousekeepingCodeConfigType interface.
 */
export declare function instanceOfHousekeepingCodeConfigType(value: object): boolean;
export declare function HousekeepingCodeConfigTypeFromJSON(json: any): HousekeepingCodeConfigType;
export declare function HousekeepingCodeConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCodeConfigType;
export declare function HousekeepingCodeConfigTypeToJSON(value?: HousekeepingCodeConfigType | null): any;