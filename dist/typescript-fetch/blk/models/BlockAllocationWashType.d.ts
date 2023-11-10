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
import type { BlockAllocationWashTypeOccPercentByDay } from './BlockAllocationWashTypeOccPercentByDay';
import type { BlockGridInvType } from './BlockGridInvType';
import type { BlockId } from './BlockId';
/**
 * Holds criteria for performing a wash operation on a block.
 * @export
 * @interface BlockAllocationWashType
 */
export interface BlockAllocationWashType {
    /**
     *
     * @type {BlockId}
     * @memberof BlockAllocationWashType
     */
    blockId?: BlockId;
    /**
     *
     * @type {BlockGridInvType}
     * @memberof BlockAllocationWashType
     */
    blockInventory?: BlockGridInvType;
    /**
     * A true value indicates that absolute value is being passed for occupancy, else it indicates that a percentage value is passed.
     * @type {boolean}
     * @memberof BlockAllocationWashType
     */
    byValue?: boolean;
    /**
     * End date for the wash operation.
     * @type {Date}
     * @memberof BlockAllocationWashType
     */
    endDate?: Date;
    /**
     * Indicates if the Allocation objects refer to Generic Room Types (Room Pools).
     * @type {boolean}
     * @memberof BlockAllocationWashType
     */
    genericRoomType?: boolean;
    /**
     * Hotel Code to which the block belongs to.
     * @type {string}
     * @memberof BlockAllocationWashType
     */
    hotelId?: string;
    /**
     * String of length seven, each position representing various days of week from Sunday to Saturday, each character is either 0 or 1 indicating whether to apply wash for that day.
     * @type {string}
     * @memberof BlockAllocationWashType
     */
    includedDays?: string;
    /**
     *
     * @type {BlockAllocationWashTypeOccPercentByDay}
     * @memberof BlockAllocationWashType
     */
    occPercentByDay?: BlockAllocationWashTypeOccPercentByDay;
    /**
     * A true value indicates that percentage values are being passed day-wise.
     * @type {boolean}
     * @memberof BlockAllocationWashType
     */
    percentByDay?: boolean;
    /**
     * List of room types on which wash operation should be performed.
     * @type {Array<string>}
     * @memberof BlockAllocationWashType
     */
    roomTypes?: Array<string>;
    /**
     * Start date for the wash operation.
     * @type {Date}
     * @memberof BlockAllocationWashType
     */
    startDate?: Date;
}
/**
 * Check if a given object implements the BlockAllocationWashType interface.
 */
export declare function instanceOfBlockAllocationWashType(value: object): boolean;
export declare function BlockAllocationWashTypeFromJSON(json: any): BlockAllocationWashType;
export declare function BlockAllocationWashTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAllocationWashType;
export declare function BlockAllocationWashTypeToJSON(value?: BlockAllocationWashType | null): any;
