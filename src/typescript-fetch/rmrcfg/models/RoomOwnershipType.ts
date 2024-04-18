/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';
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
     * Contract number for Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    contractNumber?: string;
    /**
     * End Date of the Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    endDate?: string;
    /**
     * Hotel Code of Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    hotelId?: string;
    /**
     * Whether Room is available for the exclusive use of its designated owner and owner referrals, or if it is available in general availability.
     * @type {boolean}
     * @memberof RoomOwnershipType
     */
    ownerExclusive?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RoomOwnershipType
     */
    profileId?: UniqueIDType;
    /**
     * 
     * @type {ProfileNameType}
     * @memberof RoomOwnershipType
     */
    profileName?: ProfileNameType;
    /**
     * Room Category of the Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomCategory?: string;
    /**
     * Room Id of Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomId?: string;
    /**
     * Unique Id for Room Ownership record.
     * @type {number}
     * @memberof RoomOwnershipType
     */
    roomOwnershipId?: number;
    /**
     * Room Type of the Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomType?: string;
    /**
     * Start Date of the Room Ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    startDate?: string;
    /**
     * Status of the Room Ownership record. (Active or Inactive)
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
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ownerExclusive': !exists(json, 'ownerExclusive') ? undefined : json['ownerExclusive'],
        'profileId': !exists(json, 'profileId') ? undefined : UniqueIDTypeFromJSON(json['profileId']),
        'profileName': !exists(json, 'profileName') ? undefined : ProfileNameTypeFromJSON(json['profileName']),
        'roomCategory': !exists(json, 'roomCategory') ? undefined : json['roomCategory'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomOwnershipId': !exists(json, 'roomOwnershipId') ? undefined : json['roomOwnershipId'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
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
        'endDate': value.endDate,
        'hotelId': value.hotelId,
        'ownerExclusive': value.ownerExclusive,
        'profileId': UniqueIDTypeToJSON(value.profileId),
        'profileName': ProfileNameTypeToJSON(value.profileName),
        'roomCategory': value.roomCategory,
        'roomId': value.roomId,
        'roomOwnershipId': value.roomOwnershipId,
        'roomType': value.roomType,
        'startDate': value.startDate,
        'status': value.status,
    };
}
