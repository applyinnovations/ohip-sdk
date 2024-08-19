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
/**
 * Indicates the Room Rate is not available due to unavailability of enough items for the rate code.
 * @export
 */
export declare const RoomRateAvailReasonType: {
    readonly Available: "Available";
    readonly Restricted: "Restricted";
    readonly RestrictedDueToInventory: "RestrictedDueToInventory";
    readonly RestrictedDueToOccupancy: "RestrictedDueToOccupancy";
    readonly RestrictedDueToItemInventory: "RestrictedDueToItemInventory";
};
export type RoomRateAvailReasonType = typeof RoomRateAvailReasonType[keyof typeof RoomRateAvailReasonType];
export declare function RoomRateAvailReasonTypeFromJSON(json: any): RoomRateAvailReasonType;
export declare function RoomRateAvailReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRateAvailReasonType;
export declare function RoomRateAvailReasonTypeToJSON(value?: RoomRateAvailReasonType | null): any;
