/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export const ECertificateIssueType = {
    Assigned: 'Assigned',
    OptedIn: 'OptedIn',
    Purchased: 'Purchased'
} as const;
export type ECertificateIssueType = typeof ECertificateIssueType[keyof typeof ECertificateIssueType];


export function ECertificateIssueTypeFromJSON(json: any): ECertificateIssueType {
    return ECertificateIssueTypeFromJSONTyped(json, false);
}

export function ECertificateIssueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateIssueType {
    return json as ECertificateIssueType;
}

export function ECertificateIssueTypeToJSON(value?: ECertificateIssueType | null): any {
    return value as any;
}
