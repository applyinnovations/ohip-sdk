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
 *
 * @export
 */
export declare const ResProfileTypeType: {
    readonly Guest: "Guest";
    readonly Company: "Company";
    readonly Group: "Group";
    readonly TravelAgent: "TravelAgent";
    readonly Source: "Source";
    readonly ReservationContact: "ReservationContact";
    readonly BillingContact: "BillingContact";
    readonly Addressee: "Addressee";
};
export type ResProfileTypeType = typeof ResProfileTypeType[keyof typeof ResProfileTypeType];
export declare function ResProfileTypeTypeFromJSON(json: any): ResProfileTypeType;
export declare function ResProfileTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResProfileTypeType;
export declare function ResProfileTypeTypeToJSON(value?: ResProfileTypeType | null): any;
