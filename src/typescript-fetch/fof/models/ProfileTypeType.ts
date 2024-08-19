/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

