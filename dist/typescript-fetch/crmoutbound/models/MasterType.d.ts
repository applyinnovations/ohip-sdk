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
    readonly Block: "Block";
};
export type MasterType = typeof MasterType[keyof typeof MasterType];
export declare function MasterTypeFromJSON(json: any): MasterType;
export declare function MasterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterType;
export declare function MasterTypeToJSON(value?: MasterType | null): any;