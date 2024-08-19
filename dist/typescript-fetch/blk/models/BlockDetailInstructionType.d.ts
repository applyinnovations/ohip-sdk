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
 * Type for block instructions that can be used in requests for partial operations.
 * @export
 */
export declare const BlockDetailInstructionType: {
    readonly AccessExclusions: "AccessExclusions";
    readonly Aliases: "Aliases";
    readonly AlternateDates: "AlternateDates";
    readonly Attachments: "Attachments";
    readonly Block: "Block";
    readonly BlockNextStatuses: "BlockNextStatuses";
    readonly BlockStatusHistory: "BlockStatusHistory";
    readonly CatNextStatuses: "CatNextStatuses";
    readonly CatStatusHistory: "CatStatusHistory";
    readonly CentralSalesLeads: "CentralSalesLeads";
    readonly Comments: "Comments";
    readonly DateProtect: "DateProtect";
    readonly ExternalReferences: "ExternalReferences";
    readonly GenericRateGrid: "GenericRateGrid";
    readonly Header: "Header";
    readonly Indicators: "Indicators";
    readonly InventoryItems: "InventoryItems";
    readonly Owners: "Owners";
    readonly Packages: "Packages";
    readonly Policies: "Policies";
    readonly PrimaryOwners: "PrimaryOwners";
    readonly PrimaryProfiles: "PrimaryProfiles";
    readonly PrimaryRates: "PrimaryRates";
    readonly Profiles: "Profiles";
    readonly RateGrid: "RateGrid";
    readonly RateProgram: "RateProgram";
    readonly Rates: "Rates";
    readonly Restrictions: "Restrictions";
    readonly SellMessages: "SellMessages";
    readonly Statistics: "Statistics";
    readonly SummaryStatistics: "SummaryStatistics";
    readonly Traces: "Traces";
    readonly WashSchedules: "WashSchedules";
};
export type BlockDetailInstructionType = typeof BlockDetailInstructionType[keyof typeof BlockDetailInstructionType];
export declare function BlockDetailInstructionTypeFromJSON(json: any): BlockDetailInstructionType;
export declare function BlockDetailInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDetailInstructionType;
export declare function BlockDetailInstructionTypeToJSON(value?: BlockDetailInstructionType | null): any;
