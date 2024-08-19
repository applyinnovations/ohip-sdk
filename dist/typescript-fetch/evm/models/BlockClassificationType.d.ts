/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD.
 * @export
 */
export declare const BlockClassificationType: {
    readonly MasterBlock: "MasterBlock";
    readonly MasterTour: "MasterTour";
    readonly MasterAllocation: "MasterAllocation";
    readonly MasterItinerary: "MasterItinerary";
    readonly LeadMaster: "LeadMaster";
    readonly RegularBooking: "RegularBooking";
    readonly SubBlock: "SubBlock";
    readonly SubTour: "SubTour";
    readonly FitContract: "FitContract";
    readonly SubAllocation: "SubAllocation";
    readonly SubItinerary: "SubItinerary";
    readonly Lead: "Lead";
    readonly FitMaster: "FitMaster";
    readonly Opportunity: "Opportunity";
};
export type BlockClassificationType = typeof BlockClassificationType[keyof typeof BlockClassificationType];
export declare function BlockClassificationTypeFromJSON(json: any): BlockClassificationType;
export declare function BlockClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockClassificationType;
export declare function BlockClassificationTypeToJSON(value?: BlockClassificationType | null): any;
