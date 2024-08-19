/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Possible values for the Guest Service Status.
 * @export
 */
export const GuestHousekeepingServiceRequestType = {
    DoNotDisturb: 'DoNotDisturb',
    MakeUpRoom: 'MakeUpRoom',
    NoStatusSelected: 'NoStatusSelected'
} as const;
export type GuestHousekeepingServiceRequestType = typeof GuestHousekeepingServiceRequestType[keyof typeof GuestHousekeepingServiceRequestType];


export function GuestHousekeepingServiceRequestTypeFromJSON(json: any): GuestHousekeepingServiceRequestType {
    return GuestHousekeepingServiceRequestTypeFromJSONTyped(json, false);
}

export function GuestHousekeepingServiceRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestHousekeepingServiceRequestType {
    return json as GuestHousekeepingServiceRequestType;
}

export function GuestHousekeepingServiceRequestTypeToJSON(value?: GuestHousekeepingServiceRequestType | null): any {
    return value as any;
}

