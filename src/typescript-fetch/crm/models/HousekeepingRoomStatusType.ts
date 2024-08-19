/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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

