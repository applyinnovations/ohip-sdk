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
 * Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed.
 * @export
 */
export declare const ResAccessRestrictionType: {
    readonly Change: "Change";
    readonly Cancel: "Cancel";
    readonly ChangeOrCancel: "ChangeOrCancel";
};
export type ResAccessRestrictionType = typeof ResAccessRestrictionType[keyof typeof ResAccessRestrictionType];
export declare function ResAccessRestrictionTypeFromJSON(json: any): ResAccessRestrictionType;
export declare function ResAccessRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccessRestrictionType;
export declare function ResAccessRestrictionTypeToJSON(value?: ResAccessRestrictionType | null): any;
