/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Unique Id that references an object uniquely in the system.
 * @export
 * @interface BlockIdList
 */
export interface BlockIdList extends Array<UniqueIDType> {
}
/**
 * Check if a given object implements the BlockIdList interface.
 */
export declare function instanceOfBlockIdList(value: object): boolean;
export declare function BlockIdListFromJSON(json: any): BlockIdList;
export declare function BlockIdListFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockIdList;
export declare function BlockIdListToJSON(value?: BlockIdList | null): any;
