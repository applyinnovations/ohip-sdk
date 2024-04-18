/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The type to indicate what revenue is to be used for calculating deposit/cancellation amounts.
 * @export
 */
export declare const DepositCancelRevenueType: {
    readonly Rooms: "Rooms";
    readonly Catering: "Catering";
    readonly All: "All";
};
export type DepositCancelRevenueType = typeof DepositCancelRevenueType[keyof typeof DepositCancelRevenueType];
export declare function DepositCancelRevenueTypeFromJSON(json: any): DepositCancelRevenueType;
export declare function DepositCancelRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositCancelRevenueType;
export declare function DepositCancelRevenueTypeToJSON(value?: DepositCancelRevenueType | null): any;