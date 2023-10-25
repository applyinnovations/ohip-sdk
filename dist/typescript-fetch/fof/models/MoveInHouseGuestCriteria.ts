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
import type { HotelRoomsOrderBy } from './HotelRoomsOrderBy';
import {
    HotelRoomsOrderByFromJSON,
    HotelRoomsOrderByFromJSONTyped,
    HotelRoomsOrderByToJSON,
} from './HotelRoomsOrderBy';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import {
    HousekeepingRoomStatusTypeFromJSON,
    HousekeepingRoomStatusTypeFromJSONTyped,
    HousekeepingRoomStatusTypeToJSON,
} from './HousekeepingRoomStatusType';
import type { ReservationRoomSelectionOverrideType } from './ReservationRoomSelectionOverrideType';
import {
    ReservationRoomSelectionOverrideTypeFromJSON,
    ReservationRoomSelectionOverrideTypeFromJSONTyped,
    ReservationRoomSelectionOverrideTypeToJSON,
} from './ReservationRoomSelectionOverrideType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Defines search criteria needed to configure a room to a reservation.
 * @export
 * @interface MoveInHouseGuestCriteria
 */
export interface MoveInHouseGuestCriteria {
    /**
     * Used for Character Strings, length 0 to 2000.
     * @type {string}
     * @memberof MoveInHouseGuestCriteria
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof MoveInHouseGuestCriteria
     */
    hotelId?: string;
    /**
     * Indicates if departure rooms are to be included for room assignment.
     * @type {boolean}
     * @memberof MoveInHouseGuestCriteria
     */
    includeDepartureRooms?: boolean;
    /**
     * Valid share reservation identifier.
     * @type {Array<Array<UniqueIDType>>}
     * @memberof MoveInHouseGuestCriteria
     */
    includedSharers?: Array<Array<UniqueIDType>>;
    /**
     * 
     * @type {HousekeepingRoomStatusType}
     * @memberof MoveInHouseGuestCriteria
     */
    oldRoomStatus?: HousekeepingRoomStatusType;
    /**
     * 
     * @type {HotelRoomsOrderBy}
     * @memberof MoveInHouseGuestCriteria
     */
    orderBy?: HotelRoomsOrderBy;
    /**
     * 
     * @type {ReservationRoomSelectionOverrideType}
     * @memberof MoveInHouseGuestCriteria
     */
    overrideInstructions?: ReservationRoomSelectionOverrideType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof MoveInHouseGuestCriteria
     */
    reasonCode?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof MoveInHouseGuestCriteria
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * Room identifier which the reservation will hold.
     * @type {string}
     * @memberof MoveInHouseGuestCriteria
     */
    roomId?: string;
    /**
     * Update the do not move flag used to locking the reservation room number.
     * @type {boolean}
     * @memberof MoveInHouseGuestCriteria
     */
    roomNumberLocked?: boolean;
    /**
     * Update the Room Type used for the Rate calculation.
     * @type {boolean}
     * @memberof MoveInHouseGuestCriteria
     */
    updateRoomTypeCharged?: boolean;
}

/**
 * Check if a given object implements the MoveInHouseGuestCriteria interface.
 */
export function instanceOfMoveInHouseGuestCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoveInHouseGuestCriteriaFromJSON(json: any): MoveInHouseGuestCriteria {
    return MoveInHouseGuestCriteriaFromJSONTyped(json, false);
}

export function MoveInHouseGuestCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveInHouseGuestCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'includeDepartureRooms': !exists(json, 'includeDepartureRooms') ? undefined : json['includeDepartureRooms'],
        'includedSharers': !exists(json, 'includedSharers') ? undefined : json['includedSharers'],
        'oldRoomStatus': !exists(json, 'oldRoomStatus') ? undefined : HousekeepingRoomStatusTypeFromJSON(json['oldRoomStatus']),
        'orderBy': !exists(json, 'orderBy') ? undefined : HotelRoomsOrderByFromJSON(json['orderBy']),
        'overrideInstructions': !exists(json, 'overrideInstructions') ? undefined : ReservationRoomSelectionOverrideTypeFromJSON(json['overrideInstructions']),
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'updateRoomTypeCharged': !exists(json, 'updateRoomTypeCharged') ? undefined : json['updateRoomTypeCharged'],
    };
}

export function MoveInHouseGuestCriteriaToJSON(value?: MoveInHouseGuestCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hotelId': value.hotelId,
        'includeDepartureRooms': value.includeDepartureRooms,
        'includedSharers': value.includedSharers,
        'oldRoomStatus': HousekeepingRoomStatusTypeToJSON(value.oldRoomStatus),
        'orderBy': HotelRoomsOrderByToJSON(value.orderBy),
        'overrideInstructions': ReservationRoomSelectionOverrideTypeToJSON(value.overrideInstructions),
        'reasonCode': value.reasonCode,
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'roomId': value.roomId,
        'roomNumberLocked': value.roomNumberLocked,
        'updateRoomTypeCharged': value.updateRoomTypeCharged,
    };
}

