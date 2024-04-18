/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * A data manipulation language command for deleting an existing record.
 * @export
 */
export declare const DMLCommandType: {
    readonly Insert: "Insert";
    readonly Update: "Update";
    readonly Delete: "Delete";
};
export type DMLCommandType = typeof DMLCommandType[keyof typeof DMLCommandType];
export declare function DMLCommandTypeFromJSON(json: any): DMLCommandType;
export declare function DMLCommandTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DMLCommandType;
export declare function DMLCommandTypeToJSON(value?: DMLCommandType | null): any;