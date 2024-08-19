/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export declare const MasterInfoCodeDetailType: {
    readonly LongDescription: "LongDescription";
    readonly ShortDescription: "ShortDescription";
};
export type MasterInfoCodeDetailType = typeof MasterInfoCodeDetailType[keyof typeof MasterInfoCodeDetailType];
export declare function MasterInfoCodeDetailTypeFromJSON(json: any): MasterInfoCodeDetailType;
export declare function MasterInfoCodeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterInfoCodeDetailType;
export declare function MasterInfoCodeDetailTypeToJSON(value?: MasterInfoCodeDetailType | null): any;
