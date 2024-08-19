/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockInventoryStatisticBlockInventoryStatistics } from './BlockInventoryStatisticBlockInventoryStatistics';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for information regarding Block Inventory Statistics.
 * @export
 * @interface BlockInventoryStatistic
 */
export interface BlockInventoryStatistic {
    /**
     *
     * @type {BlockInventoryStatisticBlockInventoryStatistics}
     * @memberof BlockInventoryStatistic
     */
    blockInventoryStatistics?: BlockInventoryStatisticBlockInventoryStatistics;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockInventoryStatistic
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockInventoryStatistic
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockInventoryStatistic interface.
 */
export declare function instanceOfBlockInventoryStatistic(value: object): boolean;
export declare function BlockInventoryStatisticFromJSON(json: any): BlockInventoryStatistic;
export declare function BlockInventoryStatisticFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInventoryStatistic;
export declare function BlockInventoryStatisticToJSON(value?: BlockInventoryStatistic | null): any;
