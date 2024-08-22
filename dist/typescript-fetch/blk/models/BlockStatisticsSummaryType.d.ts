/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RevenueSummaryType } from './RevenueSummaryType';
import type { StatisticsSummaryType } from './StatisticsSummaryType';
/**
 * Type to store summary detail like rooms sold, average room rate and revenue for a statistic type.
 * @export
 * @interface BlockStatisticsSummaryType
 */
export interface BlockStatisticsSummaryType {
    /**
     *
     * @type {number}
     * @memberof BlockStatisticsSummaryType
     */
    avgRoomRate?: number;
    /**
     *
     * @type {RevenueSummaryType}
     * @memberof BlockStatisticsSummaryType
     */
    revenueSummary?: RevenueSummaryType;
    /**
     * Total Number of Rooms Picked Up.
     * @type {number}
     * @memberof BlockStatisticsSummaryType
     */
    roomsSold?: number;
    /**
     *
     * @type {StatisticsSummaryType}
     * @memberof BlockStatisticsSummaryType
     */
    statisticType?: StatisticsSummaryType;
}
/**
 * Check if a given object implements the BlockStatisticsSummaryType interface.
 */
export declare function instanceOfBlockStatisticsSummaryType(value: object): boolean;
export declare function BlockStatisticsSummaryTypeFromJSON(json: any): BlockStatisticsSummaryType;
export declare function BlockStatisticsSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatisticsSummaryType;
export declare function BlockStatisticsSummaryTypeToJSON(value?: BlockStatisticsSummaryType | null): any;
