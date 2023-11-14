/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Available only when Keyword Functionality is active.
 * @export
 */
export declare const ResvAutoAttchBasedOnCode: {
    readonly Membership: "Membership";
    readonly Preference: "Preference";
    readonly RateCode: "RateCode";
    readonly RoomType: "RoomType";
    readonly MinAdults: "MinAdults";
    readonly MinChildren: "MinChildren";
    readonly KeywordType: "KeywordType";
    readonly Special: "Special";
    readonly Vip: "Vip";
    readonly Condition: "Condition";
};
export type ResvAutoAttchBasedOnCode = typeof ResvAutoAttchBasedOnCode[keyof typeof ResvAutoAttchBasedOnCode];
export declare function ResvAutoAttchBasedOnCodeFromJSON(json: any): ResvAutoAttchBasedOnCode;
export declare function ResvAutoAttchBasedOnCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvAutoAttchBasedOnCode;
export declare function ResvAutoAttchBasedOnCodeToJSON(value?: ResvAutoAttchBasedOnCode | null): any;