/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Type for a list of Housekeeping rooms for a resort. Used as a criteria type for requests.
 * @export
 * @interface HousekeepingRoomsType
 */
export interface HousekeepingRoomsType {
    /**
     * Collection of room numbers.
     * @type {Array<string>}
     * @memberof HousekeepingRoomsType
     */
    roomList?: Array<string>;
}
/**
 * Check if a given object implements the HousekeepingRoomsType interface.
 */
export declare function instanceOfHousekeepingRoomsType(value: object): boolean;
export declare function HousekeepingRoomsTypeFromJSON(json: any): HousekeepingRoomsType;
export declare function HousekeepingRoomsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomsType;
export declare function HousekeepingRoomsTypeToJSON(value?: HousekeepingRoomsType | null): any;
