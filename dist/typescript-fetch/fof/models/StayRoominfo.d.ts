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
/**
 * Request which contains parameters needed to swap or shift rooms
 * @export
 * @interface StayRoominfo
 */
export interface StayRoominfo {
    /**
     * Identifies Reservation arrival date.
     * @type {Date}
     * @memberof StayRoominfo
     */
    arrivalDate?: Date;
    /**
     * Room identifier which the reservation will hold.
     * @type {string}
     * @memberof StayRoominfo
     */
    roomId?: string;
    /**
     * Identifies the reservations which are same room type/room category
     * @type {string}
     * @memberof StayRoominfo
     */
    roomType?: string;
}
/**
 * Check if a given object implements the StayRoominfo interface.
 */
export declare function instanceOfStayRoominfo(value: object): boolean;
export declare function StayRoominfoFromJSON(json: any): StayRoominfo;
export declare function StayRoominfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayRoominfo;
export declare function StayRoominfoToJSON(value?: StayRoominfo | null): any;
