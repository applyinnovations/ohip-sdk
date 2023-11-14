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
import type { AllocationGridByRoomTypeType } from './AllocationGridByRoomTypeType';
import type { BlockId } from './BlockId';
/**
 * A collection of Allocation objects for a block defined by room type.
 * @export
 * @interface AllocationGridByRoomTypesType
 */
export interface AllocationGridByRoomTypesType {
    /**
     * Allocation objects of a block grouped by room types.
     * @type {Array<AllocationGridByRoomTypeType>}
     * @memberof AllocationGridByRoomTypesType
     */
    allocationRoomTypes?: Array<AllocationGridByRoomTypeType>;
    /**
     *
     * @type {BlockId}
     * @memberof AllocationGridByRoomTypesType
     */
    blockId?: BlockId;
    /**
     * Indicates if the Allocation objects refer to Generic Room Types (Room Pools).
     * @type {boolean}
     * @memberof AllocationGridByRoomTypesType
     */
    genericRoomType?: boolean;
    /**
     * Opera Hotel code for the Set Allocation Grid request.
     * @type {string}
     * @memberof AllocationGridByRoomTypesType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the AllocationGridByRoomTypesType interface.
 */
export declare function instanceOfAllocationGridByRoomTypesType(value: object): boolean;
export declare function AllocationGridByRoomTypesTypeFromJSON(json: any): AllocationGridByRoomTypesType;
export declare function AllocationGridByRoomTypesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationGridByRoomTypesType;
export declare function AllocationGridByRoomTypesTypeToJSON(value?: AllocationGridByRoomTypesType | null): any;