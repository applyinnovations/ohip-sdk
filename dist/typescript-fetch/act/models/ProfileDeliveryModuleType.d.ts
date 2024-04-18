/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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