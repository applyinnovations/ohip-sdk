/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export declare const ProfileTypeType: {
    readonly Guest: "Guest";
    readonly Agent: "Agent";
    readonly Company: "Company";
    readonly Group: "Group";
    readonly Source: "Source";
    readonly Employee: "Employee";
    readonly Hotel: "Hotel";
    readonly Vendor: "Vendor";
    readonly Contact: "Contact";
    readonly Purge: "Purge";
    readonly BusinessHeader: "BusinessHeader";
    readonly BillingAccount: "BillingAccount";
    readonly Activity: "Activity";
    readonly Potential: "Potential";
    readonly Account: "Account";
};
export type ProfileTypeType = typeof ProfileTypeType[keyof typeof ProfileTypeType];
export declare function ProfileTypeTypeFromJSON(json: any): ProfileTypeType;
export declare function ProfileTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeType;
export declare function ProfileTypeTypeToJSON(value?: ProfileTypeType | null): any;
