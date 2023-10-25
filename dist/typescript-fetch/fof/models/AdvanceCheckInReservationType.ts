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
import type { ResCommunicationType } from './ResCommunicationType';
import {
    ResCommunicationTypeFromJSON,
    ResCommunicationTypeFromJSONTyped,
    ResCommunicationTypeToJSON,
} from './ResCommunicationType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Information needed to perform Advance Check In of a Reservation
 * @export
 * @interface AdvanceCheckInReservationType
 */
export interface AdvanceCheckInReservationType {
    /**
     * Comments relating to the Advance Checked In guest's return to the property
     * @type {string}
     * @memberof AdvanceCheckInReservationType
     */
    eTRComments?: string;
    /**
     * Time when the guest is expected to return to perform Check In
     * @type {string}
     * @memberof AdvanceCheckInReservationType
     */
    expectedReturnTime?: string;
    /**
     * Resort to which the Reservation belongs.
     * @type {string}
     * @memberof AdvanceCheckInReservationType
     */
    hotelId?: string;
    /**
     * Indicates if the guest has opted for communications pertaining to this reservation.
     * @type {boolean}
     * @memberof AdvanceCheckInReservationType
     */
    optedForCommunication?: boolean;
    /**
     * 
     * @type {ResCommunicationType}
     * @memberof AdvanceCheckInReservationType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     * 
     * @type {ReservationId}
     * @memberof AdvanceCheckInReservationType
     */
    reservationId?: ReservationId;
}

/**
 * Check if a given object implements the AdvanceCheckInReservationType interface.
 */
export function instanceOfAdvanceCheckInReservationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdvanceCheckInReservationTypeFromJSON(json: any): AdvanceCheckInReservationType {
    return AdvanceCheckInReservationTypeFromJSONTyped(json, false);
}

export function AdvanceCheckInReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvanceCheckInReservationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eTRComments': !exists(json, 'eTRComments') ? undefined : json['eTRComments'],
        'expectedReturnTime': !exists(json, 'expectedReturnTime') ? undefined : json['expectedReturnTime'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'optedForCommunication': !exists(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
        'reservationCommunication': !exists(json, 'reservationCommunication') ? undefined : ResCommunicationTypeFromJSON(json['reservationCommunication']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
    };
}

export function AdvanceCheckInReservationTypeToJSON(value?: AdvanceCheckInReservationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eTRComments': value.eTRComments,
        'expectedReturnTime': value.expectedReturnTime,
        'hotelId': value.hotelId,
        'optedForCommunication': value.optedForCommunication,
        'reservationCommunication': ResCommunicationTypeToJSON(value.reservationCommunication),
        'reservationId': ReservationIdToJSON(value.reservationId),
    };
}

