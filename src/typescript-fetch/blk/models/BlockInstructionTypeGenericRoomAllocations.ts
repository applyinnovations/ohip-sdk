/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { RoomAllocationMasterInfoType } from './RoomAllocationMasterInfoType';
import {
    RoomAllocationMasterInfoTypeFromJSON,
    RoomAllocationMasterInfoTypeFromJSONTyped,
    RoomAllocationMasterInfoTypeToJSON,
} from './RoomAllocationMasterInfoType';
import type { RoomAllocationTypeType } from './RoomAllocationTypeType';
import {
    RoomAllocationTypeTypeFromJSON,
    RoomAllocationTypeTypeFromJSONTyped,
    RoomAllocationTypeTypeToJSON,
} from './RoomAllocationTypeType';

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
export function instanceOfBlockInstructionTypeGenericRoomAllocations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockInstructionTypeGenericRoomAllocationsFromJSON(json: any): BlockInstructionTypeGenericRoomAllocations {
    return BlockInstructionTypeGenericRoomAllocationsFromJSONTyped(json, false);
}

export function BlockInstructionTypeGenericRoomAllocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInstructionTypeGenericRoomAllocations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'masterInfo': !exists(json, 'masterInfo') ? undefined : RoomAllocationMasterInfoTypeFromJSON(json['masterInfo']),
        'numberOfDays': !exists(json, 'numberOfDays') ? undefined : json['numberOfDays'],
        'roomAllocationType': !exists(json, 'roomAllocationType') ? undefined : ((json['roomAllocationType'] as Array<any>).map(RoomAllocationTypeTypeFromJSON)),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function BlockInstructionTypeGenericRoomAllocationsToJSON(value?: BlockInstructionTypeGenericRoomAllocations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'masterInfo': RoomAllocationMasterInfoTypeToJSON(value.masterInfo),
        'numberOfDays': value.numberOfDays,
        'roomAllocationType': value.roomAllocationType === undefined ? undefined : ((value.roomAllocationType as Array<any>).map(RoomAllocationTypeTypeToJSON)),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0,10)),
        'totalResults': value.totalResults,
    };
}
