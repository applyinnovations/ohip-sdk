/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Specifies a single date.
 * @export
 * @interface DatesType
 */
export interface DatesType extends Array<Date> {
}
/**
 * Check if a given object implements the DatesType interface.
 */
export declare function instanceOfDatesType(value: object): boolean;
export declare function DatesTypeFromJSON(json: any): DatesType;
export declare function DatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatesType;
export declare function DatesTypeToJSON(value?: DatesType | null): any;
