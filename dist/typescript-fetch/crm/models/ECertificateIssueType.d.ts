/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates that guest purchased OPERA E-Certificate.
 * @export
 */
export declare const ECertificateIssueType: {
    readonly Assigned: "Assigned";
    readonly OptedIn: "OptedIn";
    readonly Purchased: "Purchased";
};
export type ECertificateIssueType = typeof ECertificateIssueType[keyof typeof ECertificateIssueType];
export declare function ECertificateIssueTypeFromJSON(json: any): ECertificateIssueType;
export declare function ECertificateIssueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateIssueType;
export declare function ECertificateIssueTypeToJSON(value?: ECertificateIssueType | null): any;
