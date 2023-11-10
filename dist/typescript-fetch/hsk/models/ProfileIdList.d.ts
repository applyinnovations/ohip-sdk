/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface ProfileIdList
 */
export interface ProfileIdList extends Array<UniqueIDType> {
}
/**
 * Check if a given object implements the ProfileIdList interface.
 */
export declare function instanceOfProfileIdList(value: object): boolean;
export declare function ProfileIdListFromJSON(json: any): ProfileIdList;
export declare function ProfileIdListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileIdList;
export declare function ProfileIdListToJSON(value?: ProfileIdList | null): any;
