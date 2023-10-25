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
 * Group Print Group Type for country code Sweden.
 * @export
 */
export const MarketCodePrintGroupType = {
    Business: 'Business',
    Conference: 'Conference',
    Leisure: 'Leisure',
    BusinessSe: 'BusinessSe',
    ConferenceSe: 'ConferenceSe',
    LeisureSe: 'LeisureSe',
    GroupSe: 'GroupSe'
} as const;
export type MarketCodePrintGroupType = typeof MarketCodePrintGroupType[keyof typeof MarketCodePrintGroupType];


export function MarketCodePrintGroupTypeFromJSON(json: any): MarketCodePrintGroupType {
    return MarketCodePrintGroupTypeFromJSONTyped(json, false);
}

export function MarketCodePrintGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodePrintGroupType {
    return json as MarketCodePrintGroupType;
}

export function MarketCodePrintGroupTypeToJSON(value?: MarketCodePrintGroupType | null): any {
    return value as any;
}

