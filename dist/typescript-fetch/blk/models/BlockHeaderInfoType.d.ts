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
import type { BlockSourceOfSaleType } from './BlockSourceOfSaleType';
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * Holds block header details.
 * @export
 * @interface BlockHeaderInfoType
 */
export interface BlockHeaderInfoType {
    /**
     * Unique code for the block.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    blockCode?: string;
    /**
     *
     * @type {BlockId}
     * @memberof BlockHeaderInfoType
     */
    blockId?: BlockId;
    /**
     * Block description.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    blockName?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockHeaderInfoType
     */
    blockStatus?: CodeDescriptionType;
    /**
     * Default currency code of the block.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    currencyCode?: string;
    /**
     * End date of the block.
     * @type {Date}
     * @memberof BlockHeaderInfoType
     */
    endDate?: Date;
    /**
     * Guarantee Code for the block.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    guaranteeCode?: string;
    /**
     * Hotel code to which the block belongs to.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    hotelId?: string;
    /**
     * Name of the hotel.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    hotelName?: string;
    /**
     *
     * @type {BlockInventoryControlType}
     * @memberof BlockHeaderInfoType
     */
    inventoryControl?: BlockInventoryControlType;
    /**
     * Market code for the block.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    marketCode?: string;
    /**
     * Primary rate code of the block.
     * @type {string}
     * @memberof BlockHeaderInfoType
     */
    rateCode?: string;
    /**
     * Shoulder end date of the block, applicable if the block is elastic.
     * @type {Date}
     * @memberof BlockHeaderInfoType
     */
    shoulderEndDate?: Date;
    /**
     * Shoulder start date of the block, applicable if the block is elastic.
     * @type {Date}
     * @memberof BlockHeaderInfoType
     */
    shoulderStartDate?: Date;
    /**
     *
     * @type {BlockSourceOfSaleType}
     * @memberof BlockHeaderInfoType
     */
    sourceOfSale?: BlockSourceOfSaleType;
    /**
     * Start date of the block.
     * @type {Date}
     * @memberof BlockHeaderInfoType
     */
    startDate?: Date;
    /**
     * Indicates whether rates are suppressed.
     * @type {boolean}
     * @memberof BlockHeaderInfoType
     */
    suppressRate?: boolean;
}
/**
 * Check if a given object implements the BlockHeaderInfoType interface.
 */
export declare function instanceOfBlockHeaderInfoType(value: object): boolean;
export declare function BlockHeaderInfoTypeFromJSON(json: any): BlockHeaderInfoType;
export declare function BlockHeaderInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockHeaderInfoType;
export declare function BlockHeaderInfoTypeToJSON(value?: BlockHeaderInfoType | null): any;