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
import type { BlockStatusStatisticType } from './BlockStatusStatisticType';
/**
 * Summary statistics of a block for each date.
 * @export
 * @interface BlockStatusStatisticsType
 */
export interface BlockStatusStatisticsType extends Array<BlockStatusStatisticType> {
}
/**
 * Check if a given object implements the BlockStatusStatisticsType interface.
 */
export declare function instanceOfBlockStatusStatisticsType(value: object): boolean;
export declare function BlockStatusStatisticsTypeFromJSON(json: any): BlockStatusStatisticsType;
export declare function BlockStatusStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatusStatisticsType;
export declare function BlockStatusStatisticsTypeToJSON(value?: BlockStatusStatisticsType | null): any;
