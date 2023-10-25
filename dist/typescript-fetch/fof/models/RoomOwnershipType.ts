/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Define the search criteria for retrieving room ownership records
 * @export
 * @interface RoomOwnershipType
 */
export interface RoomOwnershipType {
    /**
     * Contract number for room owner.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    contractNumber?: string;
    /**
     * End Date of the room ownership record.
     * @type {Date}
     * @memberof RoomOwnershipType
     */
    endDate?: Date;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RoomOwnershipType
     */
    profileId?: UniqueIDType;
    /**
     * Room Category of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomCategory?: string;
    /**
     * Room Id of room owner.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomId?: string;
    /**
     * Unique Id for Room Owner record.
     * @type {number}
     * @memberof RoomOwnershipType
     */
    roomOwnershipId?: number;
    /**
     * Room Type of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomType?: string;
    /**
     * Start Date of the room ownership record.
     * @type {Date}
     * @memberof RoomOwnershipType
     */
    startDate?: Date;
    /**
     * Status of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    status?: string;
}

/**
 * Check if a given object implements the RoomOwnershipType interface.
 */
export function instanceOfRoomOwnershipType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomOwnershipTypeFromJSON(json: any): RoomOwnershipType {
    return RoomOwnershipTypeFromJSONTyped(json, false);
}

export function RoomOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnershipType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contractNumber': !exists(json, 'contractNumber') ? undefined : json['contractNumber'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'profileId': !exists(json, 'profileId') ? undefined : UniqueIDTypeFromJSON(json['profileId']),
        'roomCategory': !exists(json, 'roomCategory') ? undefined : json['roomCategory'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomOwnershipId': !exists(json, 'roomOwnershipId') ? undefined : json['roomOwnershipId'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function RoomOwnershipTypeToJSON(value?: RoomOwnershipType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contractNumber': value.contractNumber,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'profileId': UniqueIDTypeToJSON(value.profileId),
        'roomCategory': value.roomCategory,
        'roomId': value.roomId,
        'roomOwnershipId': value.roomOwnershipId,
        'roomType': value.roomType,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'status': value.status,
    };
}

