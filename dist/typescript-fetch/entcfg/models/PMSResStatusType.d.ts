/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment.
 * @export
 */
export declare const PMSResStatusType: {
    readonly Reserved: "Reserved";
    readonly Requested: "Requested";
    readonly NoShow: "NoShow";
    readonly Cancelled: "Cancelled";
    readonly InHouse: "InHouse";
    readonly CheckedOut: "CheckedOut";
    readonly Waitlisted: "Waitlisted";
    readonly DueIn: "DueIn";
    readonly DueOut: "DueOut";
    readonly Walkin: "Walkin";
    readonly PendingCheckout: "PendingCheckout";
};
export type PMSResStatusType = typeof PMSResStatusType[keyof typeof PMSResStatusType];
export declare function PMSResStatusTypeFromJSON(json: any): PMSResStatusType;
export declare function PMSResStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PMSResStatusType;
export declare function PMSResStatusTypeToJSON(value?: PMSResStatusType | null): any;
