/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
export declare const MasterType: {
    readonly Country: "Country";
    readonly State: "State";
    readonly AddressType: "AddressType";
    readonly PhoneType: "PhoneType";
    readonly RateCategory: "RateCategory";
    readonly CalculationRule: "CalculationRule";
    readonly PostingRythym: "PostingRythym";
    readonly BillingInstruction: "BillingInstruction";
    readonly TransactionCode: "TransactionCode";
    readonly DisplaySet: "DisplaySet";
    readonly MailingActions: "MailingActions";
    readonly DistanceType: "DistanceType";
    readonly District: "District";
    readonly Territory: "Territory";
    readonly FiscalRegion: "FiscalRegion";
    readonly InventoryItem: "InventoryItem";
    readonly Package: "Package";
    readonly RoomFeaturePreference: "RoomFeaturePreference";
    readonly SpecialPreference: "SpecialPreference";
    readonly Promotion: "Promotion";
    readonly Department: "Department";
    readonly ReservationPreference: "ReservationPreference";
    readonly FacilityTask: "FacilityTask";
    readonly RoomType: "RoomType";
    readonly RateCode: "RateCode";
    readonly OutOfOrderReason: "OutOfOrderReason";
    readonly Block: "Block";
};
export type MasterType = typeof MasterType[keyof typeof MasterType];
export declare function MasterTypeFromJSON(json: any): MasterType;
export declare function MasterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterType;
export declare function MasterTypeToJSON(value?: MasterType | null): any;
