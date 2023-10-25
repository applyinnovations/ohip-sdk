/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export const HousekeepingRoomStatusType = {
    Clean: 'Clean',
    Dirty: 'Dirty',
    Pickup: 'Pickup',
    Inspected: 'Inspected',
    OutOfOrder: 'OutOfOrder',
    OutOfService: 'OutOfService'
} as const;
export type HousekeepingRoomStatusType = typeof HousekeepingRoomStatusType[keyof typeof HousekeepingRoomStatusType];


export function HousekeepingRoomStatusTypeFromJSON(json: any): HousekeepingRoomStatusType {
    return HousekeepingRoomStatusTypeFromJSONTyped(json, false);
}

export function HousekeepingRoomStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomStatusType {
    return json as HousekeepingRoomStatusType;
}

export function HousekeepingRoomStatusTypeToJSON(value?: HousekeepingRoomStatusType | null): any {
    return value as any;
}

