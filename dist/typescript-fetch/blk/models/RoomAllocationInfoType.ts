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
import type { BlockGridInvType } from './BlockGridInvType';
import {
    BlockGridInvTypeFromJSON,
    BlockGridInvTypeFromJSONTyped,
    BlockGridInvTypeToJSON,
} from './BlockGridInvType';
import type { RoomGridDetailsType } from './RoomGridDetailsType';
import {
    RoomGridDetailsTypeFromJSON,
    RoomGridDetailsTypeFromJSONTyped,
    RoomGridDetailsTypeToJSON,
} from './RoomGridDetailsType';

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
     * @type {Date}
     * @memberof RoomAllocationInfoType
     */
    stayDate?: Date;
}

/**
 * Check if a given object implements the RoomAllocationInfoType interface.
 */
export function instanceOfRoomAllocationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomAllocationInfoTypeFromJSON(json: any): RoomAllocationInfoType {
    return RoomAllocationInfoTypeFromJSONTyped(json, false);
}

export function RoomAllocationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAllocationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableRoomGridInvSummary': !exists(json, 'availableRoomGridInvSummary') ? undefined : ((json['availableRoomGridInvSummary'] as Array<any>).map(BlockGridInvTypeFromJSON)),
        'extendedStay': !exists(json, 'extendedStay') ? undefined : json['extendedStay'],
        'roomGridDetails': !exists(json, 'roomGridDetails') ? undefined : ((json['roomGridDetails'] as Array<any>).map(RoomGridDetailsTypeFromJSON)),
        'roomGridInvSummary': !exists(json, 'roomGridInvSummary') ? undefined : ((json['roomGridInvSummary'] as Array<any>).map(BlockGridInvTypeFromJSON)),
        'stayDate': !exists(json, 'stayDate') ? undefined : (new Date(json['stayDate'])),
    };
}

export function RoomAllocationInfoTypeToJSON(value?: RoomAllocationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableRoomGridInvSummary': value.availableRoomGridInvSummary === undefined ? undefined : ((value.availableRoomGridInvSummary as Array<any>).map(BlockGridInvTypeToJSON)),
        'extendedStay': value.extendedStay,
        'roomGridDetails': value.roomGridDetails === undefined ? undefined : ((value.roomGridDetails as Array<any>).map(RoomGridDetailsTypeToJSON)),
        'roomGridInvSummary': value.roomGridInvSummary === undefined ? undefined : ((value.roomGridInvSummary as Array<any>).map(BlockGridInvTypeToJSON)),
        'stayDate': value.stayDate === undefined ? undefined : (value.stayDate.toISOString().substr(0,10)),
    };
}

