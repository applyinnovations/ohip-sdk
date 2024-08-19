/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
    OutOfOrderReason: 'OutOfOrderReason',
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

