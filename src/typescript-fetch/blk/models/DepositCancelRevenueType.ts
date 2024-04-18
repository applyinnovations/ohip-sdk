/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export const DepositCancelRevenueType = {
    Rooms: 'Rooms',
    Catering: 'Catering',
    All: 'All'
} as const;
export type DepositCancelRevenueType = typeof DepositCancelRevenueType[keyof typeof DepositCancelRevenueType];


export function DepositCancelRevenueTypeFromJSON(json: any): DepositCancelRevenueType {
    return DepositCancelRevenueTypeFromJSONTyped(json, false);
}

export function DepositCancelRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositCancelRevenueType {
    return json as DepositCancelRevenueType;
}

export function DepositCancelRevenueTypeToJSON(value?: DepositCancelRevenueType | null): any {
    return value as any;
}
