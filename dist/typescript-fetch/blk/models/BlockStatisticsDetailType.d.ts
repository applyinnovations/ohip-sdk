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
import type { BlockStatisticsDateType } from './BlockStatisticsDateType';
import type { StatisticsType } from './StatisticsType';
/**
 * Statistics Detail for a statistic type.
 * @export
 * @interface BlockStatisticsDetailType
 */
export interface BlockStatisticsDetailType {
    /**
     *
     * @type {StatisticsType}
     * @memberof BlockStatisticsDetailType
     */
    statisticType?: StatisticsType;
    /**
     *
     * @type {Array<Array<BlockStatisticsDateType>>}
     * @memberof BlockStatisticsDetailType
     */
    statisticsDates?: Array<Array<BlockStatisticsDateType>>;
}
/**
 * Check if a given object implements the BlockStatisticsDetailType interface.
 */
export declare function instanceOfBlockStatisticsDetailType(value: object): boolean;
export declare function BlockStatisticsDetailTypeFromJSON(json: any): BlockStatisticsDetailType;
export declare function BlockStatisticsDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatisticsDetailType;
export declare function BlockStatisticsDetailTypeToJSON(value?: BlockStatisticsDetailType | null): any;