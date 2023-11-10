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
 * Possible values for the Guest Service Status.
 * @export
 */
export declare const GuestHousekeepingServiceRequestType: {
    readonly DoNotDisturb: "DoNotDisturb";
    readonly MakeUpRoom: "MakeUpRoom";
    readonly NoStatusSelected: "NoStatusSelected";
};
export type GuestHousekeepingServiceRequestType = typeof GuestHousekeepingServiceRequestType[keyof typeof GuestHousekeepingServiceRequestType];
export declare function GuestHousekeepingServiceRequestTypeFromJSON(json: any): GuestHousekeepingServiceRequestType;
export declare function GuestHousekeepingServiceRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestHousekeepingServiceRequestType;
export declare function GuestHousekeepingServiceRequestTypeToJSON(value?: GuestHousekeepingServiceRequestType | null): any;
