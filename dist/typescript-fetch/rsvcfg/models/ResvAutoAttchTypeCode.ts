/* tslint:disable */
/* eslint-disable */
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
 * Available only when Reservation Discounts and Advanced Discounts are active
 * @export
 */
export const ResvAutoAttchTypeCode = {
    Item: 'Item',
    Product: 'Product',
    ResvPreference: 'ResvPreference',
    Trace: 'Trace',
    RoomFeatures: 'RoomFeatures',
    Preference: 'Preference',
    Promotions: 'Promotions',
    AdvancedDiscount: 'AdvancedDiscount'
} as const;
export type ResvAutoAttchTypeCode = typeof ResvAutoAttchTypeCode[keyof typeof ResvAutoAttchTypeCode];


export function ResvAutoAttchTypeCodeFromJSON(json: any): ResvAutoAttchTypeCode {
    return ResvAutoAttchTypeCodeFromJSONTyped(json, false);
}

export function ResvAutoAttchTypeCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvAutoAttchTypeCode {
    return json as ResvAutoAttchTypeCode;
}

export function ResvAutoAttchTypeCodeToJSON(value?: ResvAutoAttchTypeCode | null): any {
    return value as any;
}

