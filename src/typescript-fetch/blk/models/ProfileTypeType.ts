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
 * The types of Profile handled by the web service.
 * @export
 */
export const ProfileTypeType = {
    Guest: 'Guest',
    Agent: 'Agent',
    Company: 'Company',
    Group: 'Group',
    Source: 'Source',
    Employee: 'Employee',
    Hotel: 'Hotel',
    Vendor: 'Vendor',
    Contact: 'Contact',
    Purge: 'Purge',
    BusinessHeader: 'BusinessHeader',
    BillingAccount: 'BillingAccount',
    Activity: 'Activity',
    Potential: 'Potential',
    Account: 'Account'
} as const;
export type ProfileTypeType = typeof ProfileTypeType[keyof typeof ProfileTypeType];


export function ProfileTypeTypeFromJSON(json: any): ProfileTypeType {
    return ProfileTypeTypeFromJSONTyped(json, false);
}

export function ProfileTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeType {
    return json as ProfileTypeType;
}

export function ProfileTypeTypeToJSON(value?: ProfileTypeType | null): any {
    return value as any;
}

