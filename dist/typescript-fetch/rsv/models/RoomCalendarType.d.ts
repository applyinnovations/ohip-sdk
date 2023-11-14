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
import type { RoomCalendarInfoType } from './RoomCalendarInfoType';
/**
 * Room Calendar entry that holds Room and Reservation Information.
 * @export
 * @interface RoomCalendarType
 */
export interface RoomCalendarType {
    /**
     * The resort of the Room Calendar.
     * @type {string}
     * @memberof RoomCalendarType
     */
    hotelId?: string;
    /**
     * Current Page the group of Rooms is included in.
     * @type {number}
     * @memberof RoomCalendarType
     */
    pageIndex?: number;
    /**
     * Number of records per page.
     * @type {number}
     * @memberof RoomCalendarType
     */
    recordsPerPage?: number;
    /**
     * Holds the Room Information.
     * @type {Array<RoomCalendarInfoType>}
     * @memberof RoomCalendarType
     */
    room?: Array<RoomCalendarInfoType>;
    /**
     * Total Numebr of Rooms.
     * @type {number}
     * @memberof RoomCalendarType
     */
    totalRooms?: number;
}
/**
 * Check if a given object implements the RoomCalendarType interface.
 */
export declare function instanceOfRoomCalendarType(value: object): boolean;
export declare function RoomCalendarTypeFromJSON(json: any): RoomCalendarType;
export declare function RoomCalendarTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCalendarType;
export declare function RoomCalendarTypeToJSON(value?: RoomCalendarType | null): any;