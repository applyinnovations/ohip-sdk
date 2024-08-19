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
 * Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc..
 * @export
 */
export declare const ProfileDeliveryModuleType: {
    readonly EfolioExport: "EfolioExport";
};
export type ProfileDeliveryModuleType = typeof ProfileDeliveryModuleType[keyof typeof ProfileDeliveryModuleType];
export declare function ProfileDeliveryModuleTypeFromJSON(json: any): ProfileDeliveryModuleType;
export declare function ProfileDeliveryModuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDeliveryModuleType;
export declare function ProfileDeliveryModuleTypeToJSON(value?: ProfileDeliveryModuleType | null): any;
