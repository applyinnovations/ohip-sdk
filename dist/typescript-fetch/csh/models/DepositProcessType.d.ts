/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The Deposit is transferred to an internal account for returned deposits to be handled by the property. Users can select to keep all (not exceeding total), a portion of, or none of the deposit.
 * @export
 */
export declare const DepositProcessType: {
    readonly Keep: "Keep";
    readonly Return: "Return";
    readonly Mature: "Mature";
};
export type DepositProcessType = typeof DepositProcessType[keyof typeof DepositProcessType];
export declare function DepositProcessTypeFromJSON(json: any): DepositProcessType;
export declare function DepositProcessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositProcessType;
export declare function DepositProcessTypeToJSON(value?: DepositProcessType | null): any;
