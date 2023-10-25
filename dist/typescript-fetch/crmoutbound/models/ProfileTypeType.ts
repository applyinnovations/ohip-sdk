/* tslint:disable */
/* eslint-disable */
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

