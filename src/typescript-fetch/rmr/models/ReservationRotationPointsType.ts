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
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Individual reservation and associated rotation points information
 * @export
 * @interface ReservationRotationPointsType
 */
export interface ReservationRotationPointsType {
    /**
     * Reservation arrival date
     * @type {Date}
     * @memberof ReservationRotationPointsType
     */
    arrivalDate?: Date;
    /**
     * Reservation departure date
     * @type {Date}
     * @memberof ReservationRotationPointsType
     */
    departureDate?: Date;
    /**
     * The guest name on the reservation.
     * @type {string}
     * @memberof ReservationRotationPointsType
     */
    guestName?: string;
    /**
     * The number of nights of the reservation.
     * @type {number}
     * @memberof ReservationRotationPointsType
     */
    nights?: number;
    /**
     * Whether rotation points for the room have been adjusted.
     * @type {boolean}
     * @memberof ReservationRotationPointsType
     */
    pointsAdjusted?: boolean;
    /**
     * 
     * @type {ProfileId}
     * @memberof ReservationRotationPointsType
     */
    profileId?: ProfileId;
    /**
     * Unique identifier of the reservation like Reservation Name Id, Confirmation Number.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationRotationPointsType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * Room Number
     * @type {string}
     * @memberof ReservationRotationPointsType
     */
    roomId?: string;
    /**
     * Total rotation points for the room.
     * @type {number}
     * @memberof ReservationRotationPointsType
     */
    totalPoints?: number;
}

/**
 * Check if a given object implements the ReservationRotationPointsType interface.
 */
export function instanceOfReservationRotationPointsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationRotationPointsTypeFromJSON(json: any): ReservationRotationPointsType {
    return ReservationRotationPointsTypeFromJSONTyped(json, false);
}

export function ReservationRotationPointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationRotationPointsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'departureDate': !exists(json, 'departureDate') ? undefined : (new Date(json['departureDate'])),
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        'pointsAdjusted': !exists(json, 'pointsAdjusted') ? undefined : json['pointsAdjusted'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'totalPoints': !exists(json, 'totalPoints') ? undefined : json['totalPoints'],
    };
}

export function ReservationRotationPointsTypeToJSON(value?: ReservationRotationPointsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substring(0,10)),
        'departureDate': value.departureDate === undefined ? undefined : (value.departureDate.toISOString().substring(0,10)),
        'guestName': value.guestName,
        'nights': value.nights,
        'pointsAdjusted': value.pointsAdjusted,
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'roomId': value.roomId,
        'totalPoints': value.totalPoints,
    };
}
