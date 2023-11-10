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
import type { BlockDailyStatisticsDatesType } from './BlockDailyStatisticsDatesType';
import type { BlockIdList } from './BlockIdList';
import type { TimeSpanType } from './TimeSpanType';
/**
 *
 * @export
 * @interface BlocksDailyStatisticsTypeInner
 */
export interface BlocksDailyStatisticsTypeInner {
    /**
     * Block code for the block.
     * @type {string}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    blockCode?: string;
    /**
     *
     * @type {BlockIdList}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    blockIdList?: BlockIdList;
    /**
     * Name of the block.
     * @type {string}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    blockName?: string;
    /**
     * The Hotel Code the block belongs to.
     * @type {string}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    hotelId?: string;
    /**
     * Collection of daily statistics per allotment date.
     * @type {Array<BlockDailyStatisticsDatesType>}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    stayDates?: Array<BlockDailyStatisticsDatesType>;
    /**
     *
     * @type {TimeSpanType}
     * @memberof BlocksDailyStatisticsTypeInner
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the BlocksDailyStatisticsTypeInner interface.
 */
export declare function instanceOfBlocksDailyStatisticsTypeInner(value: object): boolean;
export declare function BlocksDailyStatisticsTypeInnerFromJSON(json: any): BlocksDailyStatisticsTypeInner;
export declare function BlocksDailyStatisticsTypeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlocksDailyStatisticsTypeInner;
export declare function BlocksDailyStatisticsTypeInnerToJSON(value?: BlocksDailyStatisticsTypeInner | null): any;
