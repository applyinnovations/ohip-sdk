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
 *
 * @export
 */
export declare const NameTypeType: {
    readonly Guest: "Guest";
    readonly Company: "Company";
    readonly Agent: "Agent";
    readonly Contact: "Contact";
    readonly Source: "Source";
    readonly Group: "Group";
    readonly Employee: "Employee";
    readonly Hotel: "Hotel";
    readonly Purge: "Purge";
};
export type NameTypeType = typeof NameTypeType[keyof typeof NameTypeType];
export declare function NameTypeTypeFromJSON(json: any): NameTypeType;
export declare function NameTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameTypeType;
export declare function NameTypeTypeToJSON(value?: NameTypeType | null): any;
