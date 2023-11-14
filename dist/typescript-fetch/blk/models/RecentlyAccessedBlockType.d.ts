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
import type { BlockIdList } from './BlockIdList';
import type { TimeSpanType } from './TimeSpanType';
/**
 * A recently used block record.
 * @export
 * @interface RecentlyAccessedBlockType
 */
export interface RecentlyAccessedBlockType {
    /**
     *
     * @type {Date}
     * @memberof RecentlyAccessedBlockType
     */
    accessDate?: Date;
    /**
     * Business Block Code
     * @type {string}
     * @memberof RecentlyAccessedBlockType
     */
    blockCode?: string;
    /**
     *
     * @type {BlockIdList}
     * @memberof RecentlyAccessedBlockType
     */
    blockIdList?: BlockIdList;
    /**
     * The name of the business block.
     * @type {string}
     * @memberof RecentlyAccessedBlockType
     */
    blockName?: string;
    /**
     *
     * @type {string}
     * @memberof RecentlyAccessedBlockType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof RecentlyAccessedBlockType
     */
    hotelName?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RecentlyAccessedBlockType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the RecentlyAccessedBlockType interface.
 */
export declare function instanceOfRecentlyAccessedBlockType(value: object): boolean;
export declare function RecentlyAccessedBlockTypeFromJSON(json: any): RecentlyAccessedBlockType;
export declare function RecentlyAccessedBlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecentlyAccessedBlockType;
export declare function RecentlyAccessedBlockTypeToJSON(value?: RecentlyAccessedBlockType | null): any;