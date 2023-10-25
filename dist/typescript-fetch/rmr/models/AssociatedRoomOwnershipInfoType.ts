/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AssociatedRoomOwnershipType } from './AssociatedRoomOwnershipType';
import {
    AssociatedRoomOwnershipTypeFromJSON,
    AssociatedRoomOwnershipTypeFromJSONTyped,
    AssociatedRoomOwnershipTypeToJSON,
} from './AssociatedRoomOwnershipType';

/**
 * Associated Room Ownership Information
 * @export
 * @interface AssociatedRoomOwnershipInfoType
 */
export interface AssociatedRoomOwnershipInfoType {
    /**
     * 
     * @type {AssociatedRoomOwnershipType}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    associatedRoomOwnershipType?: AssociatedRoomOwnershipType;
    /**
     * End date of Room Ownership contract
     * @type {Date}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    endDate?: Date;
    /**
     * Hotel Id
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    hotelId?: string;
    /**
     * Whether Room is available for the exclusive use of its designated owner and owner referrals, or if it is available in general availability
     * @type {boolean}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    ownerExclusive?: boolean;
    /**
     * Room Number
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomId?: string;
    /**
     * Unique Id for Room Owner record.
     * @type {number}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomOwnershipId?: number;
    /**
     * Room Type
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomType?: string;
    /**
     * Start date of Room Ownership contract
     * @type {Date}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the AssociatedRoomOwnershipInfoType interface.
 */
export function instanceOfAssociatedRoomOwnershipInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssociatedRoomOwnershipInfoTypeFromJSON(json: any): AssociatedRoomOwnershipInfoType {
    return AssociatedRoomOwnershipInfoTypeFromJSONTyped(json, false);
}

export function AssociatedRoomOwnershipInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociatedRoomOwnershipInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associatedRoomOwnershipType': !exists(json, 'associatedRoomOwnershipType') ? undefined : AssociatedRoomOwnershipTypeFromJSON(json['associatedRoomOwnershipType']),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ownerExclusive': !exists(json, 'ownerExclusive') ? undefined : json['ownerExclusive'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomOwnershipId': !exists(json, 'roomOwnershipId') ? undefined : json['roomOwnershipId'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function AssociatedRoomOwnershipInfoTypeToJSON(value?: AssociatedRoomOwnershipInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associatedRoomOwnershipType': AssociatedRoomOwnershipTypeToJSON(value.associatedRoomOwnershipType),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'hotelId': value.hotelId,
        'ownerExclusive': value.ownerExclusive,
        'roomId': value.roomId,
        'roomOwnershipId': value.roomOwnershipId,
        'roomType': value.roomType,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

