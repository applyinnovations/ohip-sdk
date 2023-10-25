/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BookingStatusType } from './BookingStatusType';
import {
    BookingStatusTypeFromJSON,
    BookingStatusTypeFromJSONTyped,
    BookingStatusTypeToJSON,
} from './BookingStatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contains the block's posting account reservation information.
 * @export
 * @interface BlockPostingReservationsType
 */
export interface BlockPostingReservationsType {
    /**
     * Arrival date.
     * @type {Date}
     * @memberof BlockPostingReservationsType
     */
    arrivalDate?: Date;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockPostingReservationsType
     */
    blockId?: UniqueIDType;
    /**
     * Confirmation Number of the Posting Account Reservation.
     * @type {number}
     * @memberof BlockPostingReservationsType
     */
    confirmationNumber?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockPostingReservationsType
     */
    defaultPostingAccount?: UniqueIDType;
    /**
     * Departure date.
     * @type {Date}
     * @memberof BlockPostingReservationsType
     */
    departureDate?: Date;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockPostingReservationsType
     */
    eventId?: UniqueIDType;
    /**
     * Posting Account guest's first name..
     * @type {string}
     * @memberof BlockPostingReservationsType
     */
    guestFirstName?: string;
    /**
     * Posting Account guest name.
     * @type {string}
     * @memberof BlockPostingReservationsType
     */
    guestName?: string;
    /**
     * Hotel Code of the Block.
     * @type {string}
     * @memberof BlockPostingReservationsType
     */
    hotelId?: string;
    /**
     * Flag to indicate whether posting charges is allowed.
     * @type {boolean}
     * @memberof BlockPostingReservationsType
     */
    noPost?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockPostingReservationsType
     */
    reservationNameId?: UniqueIDType;
    /**
     * 
     * @type {BookingStatusType}
     * @memberof BlockPostingReservationsType
     */
    reservationStatus?: BookingStatusType;
    /**
     * Hotel Code of the Room.
     * @type {string}
     * @memberof BlockPostingReservationsType
     */
    roomHotelCode?: string;
    /**
     * Room Number.
     * @type {string}
     * @memberof BlockPostingReservationsType
     */
    roomId?: string;
    /**
     * Number of Posting account reservations per block.
     * @type {number}
     * @memberof BlockPostingReservationsType
     */
    size?: number;
}

/**
 * Check if a given object implements the BlockPostingReservationsType interface.
 */
export function instanceOfBlockPostingReservationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockPostingReservationsTypeFromJSON(json: any): BlockPostingReservationsType {
    return BlockPostingReservationsTypeFromJSONTyped(json, false);
}

export function BlockPostingReservationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockPostingReservationsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'blockId': !exists(json, 'blockId') ? undefined : UniqueIDTypeFromJSON(json['blockId']),
        'confirmationNumber': !exists(json, 'confirmationNumber') ? undefined : json['confirmationNumber'],
        'defaultPostingAccount': !exists(json, 'defaultPostingAccount') ? undefined : UniqueIDTypeFromJSON(json['defaultPostingAccount']),
        'departureDate': !exists(json, 'departureDate') ? undefined : (new Date(json['departureDate'])),
        'eventId': !exists(json, 'eventId') ? undefined : UniqueIDTypeFromJSON(json['eventId']),
        'guestFirstName': !exists(json, 'guestFirstName') ? undefined : json['guestFirstName'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'noPost': !exists(json, 'noPost') ? undefined : json['noPost'],
        'reservationNameId': !exists(json, 'reservationNameId') ? undefined : UniqueIDTypeFromJSON(json['reservationNameId']),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : BookingStatusTypeFromJSON(json['reservationStatus']),
        'roomHotelCode': !exists(json, 'roomHotelCode') ? undefined : json['roomHotelCode'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function BlockPostingReservationsTypeToJSON(value?: BlockPostingReservationsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0,10)),
        'blockId': UniqueIDTypeToJSON(value.blockId),
        'confirmationNumber': value.confirmationNumber,
        'defaultPostingAccount': UniqueIDTypeToJSON(value.defaultPostingAccount),
        'departureDate': value.departureDate === undefined ? undefined : (value.departureDate.toISOString().substr(0,10)),
        'eventId': UniqueIDTypeToJSON(value.eventId),
        'guestFirstName': value.guestFirstName,
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'noPost': value.noPost,
        'reservationNameId': UniqueIDTypeToJSON(value.reservationNameId),
        'reservationStatus': BookingStatusTypeToJSON(value.reservationStatus),
        'roomHotelCode': value.roomHotelCode,
        'roomId': value.roomId,
        'size': value.size,
    };
}

