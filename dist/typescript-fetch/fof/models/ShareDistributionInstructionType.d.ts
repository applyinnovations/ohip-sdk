/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations.
 * @export
 */
export declare const ShareDistributionInstructionType: {
    readonly Full: "Full";
    readonly Entire: "Entire";
    readonly Split: "Split";
    readonly CustomSplit: "CustomSplit";
};
export type ShareDistributionInstructionType = typeof ShareDistributionInstructionType[keyof typeof ShareDistributionInstructionType];
export declare function ShareDistributionInstructionTypeFromJSON(json: any): ShareDistributionInstructionType;
export declare function ShareDistributionInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShareDistributionInstructionType;
export declare function ShareDistributionInstructionTypeToJSON(value?: ShareDistributionInstructionType | null): any;
