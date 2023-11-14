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
import type { BlockId } from './BlockId';
import type { BlockInventoryControlType } from './BlockInventoryControlType';
/**
 * Block information needed to perform range operation on the block.
 * @export
 * @interface BlockRangeInfoTypeBlockInfo
 */
export interface BlockRangeInfoTypeBlockInfo {
    /**
     * Block Code
     * @type {string}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    blockCode?: string;
    /**
     *
     * @type {BlockId}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    blockId?: BlockId;
    /**
     * Block Status.
     * @type {string}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    blockStatus?: string;
    /**
     * Block End Date
     * @type {Date}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    endDate?: Date;
    /**
     *
     * @type {string}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    hotelId?: string;
    /**
     *
     * @type {BlockInventoryControlType}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    inventoryControl?: BlockInventoryControlType;
    /**
     * Block Rate Code.
     * @type {string}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    rateCode?: string;
    /**
     * Block Shoulder End Date.
     * @type {Date}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    shoulderEndDate?: Date;
    /**
     * Block Shoulder Start Date.
     * @type {Date}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    shoulderStartDate?: Date;
    /**
     * Block Start Date
     * @type {Date}
     * @memberof BlockRangeInfoTypeBlockInfo
     */
    startDate?: Date;
}
/**
 * Check if a given object implements the BlockRangeInfoTypeBlockInfo interface.
 */
export declare function instanceOfBlockRangeInfoTypeBlockInfo(value: object): boolean;
export declare function BlockRangeInfoTypeBlockInfoFromJSON(json: any): BlockRangeInfoTypeBlockInfo;
export declare function BlockRangeInfoTypeBlockInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRangeInfoTypeBlockInfo;
export declare function BlockRangeInfoTypeBlockInfoToJSON(value?: BlockRangeInfoTypeBlockInfo | null): any;