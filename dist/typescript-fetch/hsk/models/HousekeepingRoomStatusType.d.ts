/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService.
 * @export
 */
export declare const HousekeepingRoomStatusType: {
    readonly Clean: "Clean";
    readonly Dirty: "Dirty";
    readonly Pickup: "Pickup";
    readonly Inspected: "Inspected";
    readonly OutOfOrder: "OutOfOrder";
    readonly OutOfService: "OutOfService";
};
export type HousekeepingRoomStatusType = typeof HousekeepingRoomStatusType[keyof typeof HousekeepingRoomStatusType];
export declare function HousekeepingRoomStatusTypeFromJSON(json: any): HousekeepingRoomStatusType;
export declare function HousekeepingRoomStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomStatusType;
export declare function HousekeepingRoomStatusTypeToJSON(value?: HousekeepingRoomStatusType | null): any;
