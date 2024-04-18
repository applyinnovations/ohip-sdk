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
import type { BlockInventoryStatisticType } from './BlockInventoryStatisticType';
/**
 * List of block inventory statistics that is grouped by statistic date.
 * @export
 * @interface BlockInventoryStatisticBlockInventoryStatistics
 */
export interface BlockInventoryStatisticBlockInventoryStatistics {
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    allRowsFetched?: boolean;
    /**
     * Summary and Detail statistic for block inventory that is group by statistic date.
     * @type {Array<BlockInventoryStatisticType>}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    blockInventoryStatistic?: Array<BlockInventoryStatisticType>;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof BlockInventoryStatisticBlockInventoryStatistics
     */
    totalRows?: number;
}
/**
 * Check if a given object implements the BlockInventoryStatisticBlockInventoryStatistics interface.
 */
export declare function instanceOfBlockInventoryStatisticBlockInventoryStatistics(value: object): boolean;
export declare function BlockInventoryStatisticBlockInventoryStatisticsFromJSON(json: any): BlockInventoryStatisticBlockInventoryStatistics;
export declare function BlockInventoryStatisticBlockInventoryStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInventoryStatisticBlockInventoryStatistics;
export declare function BlockInventoryStatisticBlockInventoryStatisticsToJSON(value?: BlockInventoryStatisticBlockInventoryStatistics | null): any;