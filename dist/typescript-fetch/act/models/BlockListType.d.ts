/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityBlockInfoType } from './ActivityBlockInfoType';
/**
 * List of Blocks that are linked to the Activity.
 * @export
 * @interface BlockListType
 */
export interface BlockListType extends Array<ActivityBlockInfoType> {
}
/**
 * Check if a given object implements the BlockListType interface.
 */
export declare function instanceOfBlockListType(value: object): boolean;
export declare function BlockListTypeFromJSON(json: any): BlockListType;
export declare function BlockListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockListType;
export declare function BlockListTypeToJSON(value?: BlockListType | null): any;