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
import type { BlockStatReportType } from './BlockStatReportType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response element for block statistics.
 * @export
 * @interface BlockStats
 */
export interface BlockStats {
    /**
     *
     * @type {Links}
     * @memberof BlockStats
     */
    links?: Links;
    /**
     * Statistical report - each report is determined by the requested report in the service request criteria.
     * @type {Array<BlockStatReportType>}
     * @memberof BlockStats
     */
    reports?: Array<BlockStatReportType>;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockStats
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockStats interface.
 */
export declare function instanceOfBlockStats(value: object): boolean;
export declare function BlockStatsFromJSON(json: any): BlockStats;
export declare function BlockStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStats;
export declare function BlockStatsToJSON(value?: BlockStats | null): any;
