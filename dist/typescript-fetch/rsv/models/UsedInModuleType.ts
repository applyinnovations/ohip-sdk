/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control.
 * @export
 */
export const UsedInModuleType = {
    Blocks: 'Blocks',
    Reservations: 'Reservations',
    FunctionDiary: 'FunctionDiary',
    LookToBookSales: 'LookToBookSales',
    GroupRoomsControl: 'GroupRoomsControl'
} as const;
export type UsedInModuleType = typeof UsedInModuleType[keyof typeof UsedInModuleType];


export function UsedInModuleTypeFromJSON(json: any): UsedInModuleType {
    return UsedInModuleTypeFromJSONTyped(json, false);
}

export function UsedInModuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsedInModuleType {
    return json as UsedInModuleType;
}

export function UsedInModuleTypeToJSON(value?: UsedInModuleType | null): any {
    return value as any;
}

