/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed.
 * @export
 */
export declare const ResAccessRestrictionType: {
    readonly Change: "Change";
    readonly Cancel: "Cancel";
    readonly ChangeOrCancel: "ChangeOrCancel";
};
export type ResAccessRestrictionType = typeof ResAccessRestrictionType[keyof typeof ResAccessRestrictionType];
export declare function ResAccessRestrictionTypeFromJSON(json: any): ResAccessRestrictionType;
export declare function ResAccessRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccessRestrictionType;
export declare function ResAccessRestrictionTypeToJSON(value?: ResAccessRestrictionType | null): any;