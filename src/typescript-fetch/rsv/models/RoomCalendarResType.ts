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
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import {
    AdvanceCheckInTypeFromJSON,
    AdvanceCheckInTypeFromJSONTyped,
    AdvanceCheckInTypeToJSON,
} from './AdvanceCheckInType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import {
    DateTimeSpanTypeFromJSON,
    DateTimeSpanTypeFromJSONTyped,
    DateTimeSpanTypeToJSON,
} from './DateTimeSpanType';
import type { LinkedReservationType } from './LinkedReservationType';
import {
    LinkedReservationTypeFromJSON,
    LinkedReservationTypeFromJSONTyped,
    LinkedReservationTypeToJSON,
} from './LinkedReservationType';
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import {
    ResGuaranteeTypeFromJSON,
    ResGuaranteeTypeFromJSONTyped,
    ResGuaranteeTypeToJSON,
} from './ResGuaranteeType';
import type { RoomCalendarDisplayType } from './RoomCalendarDisplayType';
import {
    RoomCalendarDisplayTypeFromJSON,
    RoomCalendarDisplayTypeFromJSONTyped,
    RoomCalendarDisplayTypeToJSON,
} from './RoomCalendarDisplayType';
import type { RoomMoveDetailType } from './RoomMoveDetailType';
import {
    RoomMoveDetailTypeFromJSON,
    RoomMoveDetailTypeFromJSONTyped,
    RoomMoveDetailTypeToJSON,
} from './RoomMoveDetailType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { VIPStatusType } from './VIPStatusType';
import {
    VIPStatusTypeFromJSON,
    VIPStatusTypeFromJSONTyped,
    VIPStatusTypeToJSON,
} from './VIPStatusType';

/**
 * Reservation Information for a Reservation Item in the Calendar.
 * @export
 * @interface RoomCalendarResType
 */
export interface RoomCalendarResType {
    /**
     * 
     * @type {AdvanceCheckInType}
     * @memberof RoomCalendarResType
     */
    advanceCheckIn?: AdvanceCheckInType;
    /**
     * Indicates whether the room was assigned by AI Room Assignment.
     * @type {boolean}
     * @memberof RoomCalendarResType
     */
    assignedByAI?: boolean;
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof RoomCalendarResType
     */
    dateTimeSpan?: DateTimeSpanType;
    /**
     * 
     * @type {string}
     * @memberof RoomCalendarResType
     */
    givenName?: string;
    /**
     * 
     * @type {ResGuaranteeType}
     * @memberof RoomCalendarResType
     */
    guarantee?: ResGuaranteeType;
    /**
     * 
     * @type {LinkedReservationType}
     * @memberof RoomCalendarResType
     */
    hasLinkedReservations?: LinkedReservationType;
    /**
     * 
     * @type {number}
     * @memberof RoomCalendarResType
     */
    noOfRooms?: number;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RoomCalendarResType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof RoomCalendarResType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * List of room move details
     * @type {Array<RoomMoveDetailType>}
     * @memberof RoomCalendarResType
     */
    roomMoveHistory?: Array<RoomMoveDetailType>;
    /**
     * Verify if the room number is locked for the reservation. When true the room number cannot be changed.
     * @type {boolean}
     * @memberof RoomCalendarResType
     */
    roomNumberLocked?: boolean;
    /**
     * 
     * @type {RoomCalendarDisplayType}
     * @memberof RoomCalendarResType
     */
    roomScheduleDisplay?: RoomCalendarDisplayType;
    /**
     * 
     * @type {string}
     * @memberof RoomCalendarResType
     */
    surname?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomCalendarResType
     */
    title?: string;
    /**
     * Indicates whether the room assigned by AI Room Assignment was an upgrade.
     * @type {boolean}
     * @memberof RoomCalendarResType
     */
    upgradedByAI?: boolean;
    /**
     * 
     * @type {VIPStatusType}
     * @memberof RoomCalendarResType
     */
    vipStatus?: VIPStatusType;
}

/**
 * Check if a given object implements the RoomCalendarResType interface.
 */
export function instanceOfRoomCalendarResType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomCalendarResTypeFromJSON(json: any): RoomCalendarResType {
    return RoomCalendarResTypeFromJSONTyped(json, false);
}

export function RoomCalendarResTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCalendarResType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'advanceCheckIn': !exists(json, 'advanceCheckIn') ? undefined : AdvanceCheckInTypeFromJSON(json['advanceCheckIn']),
        'assignedByAI': !exists(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'dateTimeSpan': !exists(json, 'dateTimeSpan') ? undefined : DateTimeSpanTypeFromJSON(json['dateTimeSpan']),
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'guarantee': !exists(json, 'guarantee') ? undefined : ResGuaranteeTypeFromJSON(json['guarantee']),
        'hasLinkedReservations': !exists(json, 'hasLinkedReservations') ? undefined : LinkedReservationTypeFromJSON(json['hasLinkedReservations']),
        'noOfRooms': !exists(json, 'noOfRooms') ? undefined : json['noOfRooms'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'roomMoveHistory': !exists(json, 'roomMoveHistory') ? undefined : ((json['roomMoveHistory'] as Array<any>).map(RoomMoveDetailTypeFromJSON)),
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomScheduleDisplay': !exists(json, 'roomScheduleDisplay') ? undefined : RoomCalendarDisplayTypeFromJSON(json['roomScheduleDisplay']),
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'upgradedByAI': !exists(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
        'vipStatus': !exists(json, 'vipStatus') ? undefined : VIPStatusTypeFromJSON(json['vipStatus']),
    };
}

export function RoomCalendarResTypeToJSON(value?: RoomCalendarResType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'advanceCheckIn': AdvanceCheckInTypeToJSON(value.advanceCheckIn),
        'assignedByAI': value.assignedByAI,
        'dateTimeSpan': DateTimeSpanTypeToJSON(value.dateTimeSpan),
        'givenName': value.givenName,
        'guarantee': ResGuaranteeTypeToJSON(value.guarantee),
        'hasLinkedReservations': LinkedReservationTypeToJSON(value.hasLinkedReservations),
        'noOfRooms': value.noOfRooms,
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'roomMoveHistory': value.roomMoveHistory === undefined ? undefined : ((value.roomMoveHistory as Array<any>).map(RoomMoveDetailTypeToJSON)),
        'roomNumberLocked': value.roomNumberLocked,
        'roomScheduleDisplay': RoomCalendarDisplayTypeToJSON(value.roomScheduleDisplay),
        'surname': value.surname,
        'title': value.title,
        'upgradedByAI': value.upgradedByAI,
        'vipStatus': VIPStatusTypeToJSON(value.vipStatus),
    };
}

