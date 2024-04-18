/* tslint:disable */
/* eslint-disable */
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
 * Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD.
 * @export
 */
export const BlockClassificationType = {
    MasterBlock: 'MasterBlock',
    MasterTour: 'MasterTour',
    MasterAllocation: 'MasterAllocation',
    MasterItinerary: 'MasterItinerary',
    LeadMaster: 'LeadMaster',
    RegularBooking: 'RegularBooking',
    SubBlock: 'SubBlock',
    SubTour: 'SubTour',
    FitContract: 'FitContract',
    SubAllocation: 'SubAllocation',
    SubItinerary: 'SubItinerary',
    Lead: 'Lead',
    FitMaster: 'FitMaster',
    Opportunity: 'Opportunity'
} as const;
export type BlockClassificationType = typeof BlockClassificationType[keyof typeof BlockClassificationType];


export function BlockClassificationTypeFromJSON(json: any): BlockClassificationType {
    return BlockClassificationTypeFromJSONTyped(json, false);
}

export function BlockClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockClassificationType {
    return json as BlockClassificationType;
}

export function BlockClassificationTypeToJSON(value?: BlockClassificationType | null): any {
    return value as any;
}
