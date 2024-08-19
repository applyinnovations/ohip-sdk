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
 * Simple type for block allocation used in room rate grid.
 * @export
 */
export const AllocationType = {
    Initial: 'Initial',
    Actual: 'Actual',
    Rates: 'Rates',
    Pickup: 'Pickup',
    Contract: 'Contract',
    Available: 'Available',
    Pickupperc: 'Pickupperc',
    Changes: 'Changes',
    Released: 'Released',
    Houseavailability: 'Houseavailability',
    SellLimit: 'SellLimit',
    AvailableSellLimit: 'AvailableSellLimit',
    MasterAllocInitial: 'MasterAllocInitial',
    Allocated: 'Allocated',
    SubAllocResv: 'SubAllocResv',
    CutoffDate: 'CutoffDate'
} as const;
export type AllocationType = typeof AllocationType[keyof typeof AllocationType];


export function AllocationTypeFromJSON(json: any): AllocationType {
    return AllocationTypeFromJSONTyped(json, false);
}

export function AllocationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationType {
    return json as AllocationType;
}

export function AllocationTypeToJSON(value?: AllocationType | null): any {
    return value as any;
}

