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
import type { BlockGridInvType } from './BlockGridInvType';
import type { RoomGridDetailsType } from './RoomGridDetailsType';
/**
 * A collection of Allocation objects for a block that indicate room inventory or rate amounts.
 * @export
 * @interface RoomAllocationInfoType
 */
export interface RoomAllocationInfoType {
    /**
     * Indicates the values of room available room grid inventory's summary.
     * @type {Array<BlockGridInvType>}
     * @memberof RoomAllocationInfoType
     */
    availableRoomGridInvSummary?: Array<BlockGridInvType>;
    /**
     * Indicates if the current date will require automatic block extension.
     * @type {boolean}
     * @memberof RoomAllocationInfoType
     */
    extendedStay?: boolean;
    /**
     * Indicates the values of room inventory or rate amounts.
     * @type {Array<RoomGridDetailsType>}
     * @memberof RoomAllocationInfoType
     */
    roomGridDetails?: Array<RoomGridDetailsType>;
    /**
     * Indicates the values of room inventory's summary.
     * @type {Array<BlockGridInvType>}
     * @memberof RoomAllocationInfoType
     */
    roomGridInvSummary?: Array<BlockGridInvType>;
    /**
     * Indicates the date of the room allocation or rate amount.
     * @type {string}
     * @memberof RoomAllocationInfoType
     */
    stayDate?: string;
}
/**
 * Check if a given object implements the RoomAllocationInfoType interface.
 */
export declare function instanceOfRoomAllocationInfoType(value: object): boolean;
export declare function RoomAllocationInfoTypeFromJSON(json: any): RoomAllocationInfoType;
export declare function RoomAllocationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAllocationInfoType;
export declare function RoomAllocationInfoTypeToJSON(value?: RoomAllocationInfoType | null): any;
