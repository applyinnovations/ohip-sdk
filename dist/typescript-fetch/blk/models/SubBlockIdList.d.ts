/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface SubBlockIdList
 */
export interface SubBlockIdList extends Array<UniqueIDType> {
}
/**
 * Check if a given object implements the SubBlockIdList interface.
 */
export declare function instanceOfSubBlockIdList(value: object): boolean;
export declare function SubBlockIdListFromJSON(json: any): SubBlockIdList;
export declare function SubBlockIdListFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubBlockIdList;
export declare function SubBlockIdListToJSON(value?: SubBlockIdList | null): any;
