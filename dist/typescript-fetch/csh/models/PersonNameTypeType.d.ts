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
 * Person's name in an external system.
 * @export
 */
export declare const PersonNameTypeType: {
    readonly Primary: "Primary";
    readonly Alternate: "Alternate";
    readonly Incognito: "Incognito";
    readonly External: "External";
    readonly Phonetic: "Phonetic";
};
export type PersonNameTypeType = typeof PersonNameTypeType[keyof typeof PersonNameTypeType];
export declare function PersonNameTypeTypeFromJSON(json: any): PersonNameTypeType;
export declare function PersonNameTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameTypeType;
export declare function PersonNameTypeTypeToJSON(value?: PersonNameTypeType | null): any;
