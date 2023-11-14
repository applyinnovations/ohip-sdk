/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment.
 * @export
 */
export const PMSResStatusType = {
    Reserved: 'Reserved',
    Requested: 'Requested',
    NoShow: 'NoShow',
    Cancelled: 'Cancelled',
    InHouse: 'InHouse',
    CheckedOut: 'CheckedOut',
    Waitlisted: 'Waitlisted',
    DueIn: 'DueIn',
    DueOut: 'DueOut',
    Walkin: 'Walkin',
    PendingCheckout: 'PendingCheckout'
} as const;
export type PMSResStatusType = typeof PMSResStatusType[keyof typeof PMSResStatusType];


export function PMSResStatusTypeFromJSON(json: any): PMSResStatusType {
    return PMSResStatusTypeFromJSONTyped(json, false);
}

export function PMSResStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PMSResStatusType {
    return json as PMSResStatusType;
}

export function PMSResStatusTypeToJSON(value?: PMSResStatusType | null): any {
    return value as any;
}
