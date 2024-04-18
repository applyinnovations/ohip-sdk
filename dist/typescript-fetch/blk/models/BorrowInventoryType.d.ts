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
import type { BlockId } from './BlockId';
import type { BorrowRoomType } from './BorrowRoomType';
/**
 * This holds the number of rooms for each date that will be borrowed from the candidate room type provided.
 * @export
 * @interface BorrowInventoryType
 */
export interface BorrowInventoryType {
    /**
     *
     * @type {BlockId}
     * @memberof BorrowInventoryType
     */
    blockId?: BlockId;
    /**
     * The date on which rooms need to be borrowed for the block either from another room type in the block or from House if the block is elastic.
     * @type {string}
     * @memberof BorrowInventoryType
     */
    borrowDate?: string;
    /**
     * Specifies the number of rooms to be borrowed from the room type or House.
     * @type {Array<BorrowRoomType>}
     * @memberof BorrowInventoryType
     */
    borrowRooms?: Array<BorrowRoomType>;
}
/**
 * Check if a given object implements the BorrowInventoryType interface.
 */
export declare function instanceOfBorrowInventoryType(value: object): boolean;
export declare function BorrowInventoryTypeFromJSON(json: any): BorrowInventoryType;
export declare function BorrowInventoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BorrowInventoryType;
export declare function BorrowInventoryTypeToJSON(value?: BorrowInventoryType | null): any;