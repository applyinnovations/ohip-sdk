/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ComponentBlockOutDates } from './ComponentBlockOutDates';
import {
    ComponentBlockOutDatesFromJSON,
    ComponentBlockOutDatesFromJSONTyped,
    ComponentBlockOutDatesToJSON,
} from './ComponentBlockOutDates';
import type { RoomInfo } from './RoomInfo';
import {
    RoomInfoFromJSON,
    RoomInfoFromJSONTyped,
    RoomInfoToJSON,
} from './RoomInfo';
import type { RoomScheduleType } from './RoomScheduleType';
import {
    RoomScheduleTypeFromJSON,
    RoomScheduleTypeFromJSONTyped,
    RoomScheduleTypeToJSON,
} from './RoomScheduleType';

/**
 * Holds hotel Room and Reservation Information.
 * @export
 * @interface RoomCalendarInfoType
 */
export interface RoomCalendarInfoType {
    /**
     * If room is a component suite , holds information about component room reservations
     * @type {Array<ComponentBlockOutDates>}
     * @memberof RoomCalendarInfoType
     */
    componentRoomReservationsForSuite?: Array<ComponentBlockOutDates>;
    /**
     * Indicates if a room is a Component Suite or not.
     * @type {boolean}
     * @memberof RoomCalendarInfoType
     */
    componentSuite?: boolean;
    /**
     * Indicates true/false. When this flag is set to true indicates room type of the room is flagged as housekeeping.
     * @type {boolean}
     * @memberof RoomCalendarInfoType
     */
    houseKeeping?: boolean;
    /**
     * Indicates if a room is a Pseudo room or not.
     * @type {boolean}
     * @memberof RoomCalendarInfoType
     */
    pseudo?: boolean;
    /**
     * Room Number.
     * @type {string}
     * @memberof RoomCalendarInfoType
     */
    roomId?: string;
    /**
     * 
     * @type {RoomInfo}
     * @memberof RoomCalendarInfoType
     */
    roomInfo?: RoomInfo;
    /**
     * Order the Room is displayed based on the Room Display Room settings.
     * @type {number}
     * @memberof RoomCalendarInfoType
     */
    roomOrder?: number;
    /**
     * Holds the Schedule and Reservations.
     * @type {Array<RoomScheduleType>}
     * @memberof RoomCalendarInfoType
     */
    roomSchedule?: Array<RoomScheduleType>;
}

/**
 * Check if a given object implements the RoomCalendarInfoType interface.
 */
export function instanceOfRoomCalendarInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomCalendarInfoTypeFromJSON(json: any): RoomCalendarInfoType {
    return RoomCalendarInfoTypeFromJSONTyped(json, false);
}

export function RoomCalendarInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCalendarInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'componentRoomReservationsForSuite': !exists(json, 'componentRoomReservationsForSuite') ? undefined : ((json['componentRoomReservationsForSuite'] as Array<any>).map(ComponentBlockOutDatesFromJSON)),
        'componentSuite': !exists(json, 'componentSuite') ? undefined : json['componentSuite'],
        'houseKeeping': !exists(json, 'houseKeeping') ? undefined : json['houseKeeping'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomInfo': !exists(json, 'roomInfo') ? undefined : RoomInfoFromJSON(json['roomInfo']),
        'roomOrder': !exists(json, 'roomOrder') ? undefined : json['roomOrder'],
        'roomSchedule': !exists(json, 'roomSchedule') ? undefined : ((json['roomSchedule'] as Array<any>).map(RoomScheduleTypeFromJSON)),
    };
}

export function RoomCalendarInfoTypeToJSON(value?: RoomCalendarInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'componentRoomReservationsForSuite': value.componentRoomReservationsForSuite === undefined ? undefined : ((value.componentRoomReservationsForSuite as Array<any>).map(ComponentBlockOutDatesToJSON)),
        'componentSuite': value.componentSuite,
        'houseKeeping': value.houseKeeping,
        'pseudo': value.pseudo,
        'roomId': value.roomId,
        'roomInfo': RoomInfoToJSON(value.roomInfo),
        'roomOrder': value.roomOrder,
        'roomSchedule': value.roomSchedule === undefined ? undefined : ((value.roomSchedule as Array<any>).map(RoomScheduleTypeToJSON)),
    };
}
