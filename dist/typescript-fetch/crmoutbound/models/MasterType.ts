/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const MasterType = {
    Country: 'Country',
    State: 'State',
    AddressType: 'AddressType',
    PhoneType: 'PhoneType',
    RateCategory: 'RateCategory',
    CalculationRule: 'CalculationRule',
    PostingRythym: 'PostingRythym',
    BillingInstruction: 'BillingInstruction',
    TransactionCode: 'TransactionCode',
    DisplaySet: 'DisplaySet',
    MailingActions: 'MailingActions',
    DistanceType: 'DistanceType',
    District: 'District',
    Territory: 'Territory',
    FiscalRegion: 'FiscalRegion',
    InventoryItem: 'InventoryItem',
    Package: 'Package',
    RoomFeaturePreference: 'RoomFeaturePreference',
    SpecialPreference: 'SpecialPreference',
    Promotion: 'Promotion',
    Department: 'Department',
    ReservationPreference: 'ReservationPreference',
    FacilityTask: 'FacilityTask',
    RoomType: 'RoomType',
    RateCode: 'RateCode',
    Block: 'Block'
} as const;
export type MasterType = typeof MasterType[keyof typeof MasterType];


export function MasterTypeFromJSON(json: any): MasterType {
    return MasterTypeFromJSONTyped(json, false);
}

export function MasterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterType {
    return json as MasterType;
}

export function MasterTypeToJSON(value?: MasterType | null): any {
    return value as any;
}

