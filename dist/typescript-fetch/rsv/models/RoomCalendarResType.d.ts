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
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import type { LinkedReservationType } from './LinkedReservationType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import type { RoomCalendarDisplayType } from './RoomCalendarDisplayType';
import type { RoomMoveDetailType } from './RoomMoveDetailType';
import type { UniqueIDType } from './UniqueIDType';
import type { VIPStatusType } from './VIPStatusType';
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
export declare function instanceOfRoomCalendarResType(value: object): boolean;
export declare function RoomCalendarResTypeFromJSON(json: any): RoomCalendarResType;
export declare function RoomCalendarResTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCalendarResType;
export declare function RoomCalendarResTypeToJSON(value?: RoomCalendarResType | null): any;
