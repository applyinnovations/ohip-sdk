/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoomOwnershipType } from './RoomOwnershipType';
import {
    RoomOwnershipTypeFromJSON,
    RoomOwnershipTypeFromJSONTyped,
    RoomOwnershipTypeToJSON,
} from './RoomOwnershipType';

/**
 * Room Ownership records.
 * @export
 * @interface ProfileTypeRoomOwnershipsList
 */
export interface ProfileTypeRoomOwnershipsList {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeRoomOwnershipsList
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeRoomOwnershipsList
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on Room Ownership records.
     * @type {Array<RoomOwnershipType>}
     * @memberof ProfileTypeRoomOwnershipsList
     */
    roomOwnershipInfo?: Array<RoomOwnershipType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeRoomOwnershipsList
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileTypeRoomOwnershipsList interface.
 */
export function instanceOfProfileTypeRoomOwnershipsList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeRoomOwnershipsListFromJSON(json: any): ProfileTypeRoomOwnershipsList {
    return ProfileTypeRoomOwnershipsListFromJSONTyped(json, false);
}

export function ProfileTypeRoomOwnershipsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeRoomOwnershipsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'roomOwnershipInfo': !exists(json, 'roomOwnershipInfo') ? undefined : ((json['roomOwnershipInfo'] as Array<any>).map(RoomOwnershipTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileTypeRoomOwnershipsListToJSON(value?: ProfileTypeRoomOwnershipsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'roomOwnershipInfo': value.roomOwnershipInfo === undefined ? undefined : ((value.roomOwnershipInfo as Array<any>).map(RoomOwnershipTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

