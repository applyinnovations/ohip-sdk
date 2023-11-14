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
import type { RoomAllocationMasterInfoType } from './RoomAllocationMasterInfoType';
import type { RoomAllocationTypeType } from './RoomAllocationTypeType';
/**
 * Generic Room Type Allocations for the Block.
 * @export
 * @interface BlockInstructionTypeGenericRoomAllocations
 */
export interface BlockInstructionTypeGenericRoomAllocations {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    hasMore?: boolean;
    /**
     *
     * @type {RoomAllocationMasterInfoType}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    masterInfo?: RoomAllocationMasterInfoType;
    /**
     *
     * @type {number}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    numberOfDays?: number;
    /**
     *
     * @type {Array<RoomAllocationTypeType>}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    roomAllocationType?: Array<RoomAllocationTypeType>;
    /**
     *
     * @type {Date}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    startDate?: Date;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof BlockInstructionTypeGenericRoomAllocations
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the BlockInstructionTypeGenericRoomAllocations interface.
 */
export declare function instanceOfBlockInstructionTypeGenericRoomAllocations(value: object): boolean;
export declare function BlockInstructionTypeGenericRoomAllocationsFromJSON(json: any): BlockInstructionTypeGenericRoomAllocations;
export declare function BlockInstructionTypeGenericRoomAllocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInstructionTypeGenericRoomAllocations;
export declare function BlockInstructionTypeGenericRoomAllocationsToJSON(value?: BlockInstructionTypeGenericRoomAllocations | null): any;