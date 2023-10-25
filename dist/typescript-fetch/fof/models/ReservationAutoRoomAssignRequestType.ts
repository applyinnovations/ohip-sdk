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
import type { ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria } from './ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria';
import {
    ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaFromJSON,
    ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaFromJSONTyped,
    ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaToJSON,
} from './ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Request criteria for auto assignment of rooms to reserved reservations.
 * @export
 * @interface ReservationAutoRoomAssignRequestType
 */
export interface ReservationAutoRoomAssignRequestType {
    /**
     * A list of reservation ids which will be used to auto assign rooms.
     * @type {Array<Array<UniqueIDType>>}
     * @memberof ReservationAutoRoomAssignRequestType
     */
    reservationCriteria?: Array<Array<UniqueIDType>>;
    /**
     * Update the do not move flag used to locking the reservation room number.
     * @type {boolean}
     * @memberof ReservationAutoRoomAssignRequestType
     */
    roomNumberLocked?: boolean;
    /**
     * 
     * @type {ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria}
     * @memberof ReservationAutoRoomAssignRequestType
     */
    roomSelectionCriteria?: ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria;
}

/**
 * Check if a given object implements the ReservationAutoRoomAssignRequestType interface.
 */
export function instanceOfReservationAutoRoomAssignRequestType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationAutoRoomAssignRequestTypeFromJSON(json: any): ReservationAutoRoomAssignRequestType {
    return ReservationAutoRoomAssignRequestTypeFromJSONTyped(json, false);
}

export function ReservationAutoRoomAssignRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationAutoRoomAssignRequestType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationCriteria': !exists(json, 'reservationCriteria') ? undefined : json['reservationCriteria'],
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomSelectionCriteria': !exists(json, 'roomSelectionCriteria') ? undefined : ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaFromJSON(json['roomSelectionCriteria']),
    };
}

export function ReservationAutoRoomAssignRequestTypeToJSON(value?: ReservationAutoRoomAssignRequestType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservationCriteria': value.reservationCriteria,
        'roomNumberLocked': value.roomNumberLocked,
        'roomSelectionCriteria': ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaToJSON(value.roomSelectionCriteria),
    };
}

