/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface CodeListType
 */
export interface CodeListType extends Array<string> {
}
/**
 * Check if a given object implements the CodeListType interface.
 */
export declare function instanceOfCodeListType(value: object): boolean;
export declare function CodeListTypeFromJSON(json: any): CodeListType;
export declare function CodeListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeListType;
export declare function CodeListTypeToJSON(value?: CodeListType | null): any;
