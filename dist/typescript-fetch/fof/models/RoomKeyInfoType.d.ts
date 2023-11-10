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
import type { CodeListType } from './CodeListType';
import type { KeyTrackType } from './KeyTrackType';
import type { ReservationId } from './ReservationId';
import type { RoomKeyGuest } from './RoomKeyGuest';
/**
 * Contains detail information of room keys .
 * @export
 * @interface RoomKeyInfoType
 */
export interface RoomKeyInfoType {
    /**
     *
     * @type {CodeListType}
     * @memberof RoomKeyInfoType
     */
    additionalRooms?: CodeListType;
    /**
     *
     * @type {RoomKeyGuest}
     * @memberof RoomKeyInfoType
     */
    guestInfo?: RoomKeyGuest;
    /**
     * Name of the resort .
     * @type {string}
     * @memberof RoomKeyInfoType
     */
    hotelId?: string;
    /**
     * Number of keys has been created for the reservation .
     * @type {string}
     * @memberof RoomKeyInfoType
     */
    keyCount?: string;
    /**
     * Expiry date and time of the key.
     * @type {string}
     * @memberof RoomKeyInfoType
     */
    keyExpiryDate?: string;
    /**
     *
     * @type {CodeListType}
     * @memberof RoomKeyInfoType
     */
    keyOptions?: CodeListType;
    /**
     * Start date and time of the key.
     * @type {string}
     * @memberof RoomKeyInfoType
     */
    keyStartDate?: string;
    /**
     *
     * @type {KeyTrackType}
     * @memberof RoomKeyInfoType
     */
    keyTrack?: KeyTrackType;
    /**
     *
     * @type {ReservationId}
     * @memberof RoomKeyInfoType
     */
    reservationId?: ReservationId;
    /**
     * Room Number.
     * @type {string}
     * @memberof RoomKeyInfoType
     */
    roomId?: string;
}
/**
 * Check if a given object implements the RoomKeyInfoType interface.
 */
export declare function instanceOfRoomKeyInfoType(value: object): boolean;
export declare function RoomKeyInfoTypeFromJSON(json: any): RoomKeyInfoType;
export declare function RoomKeyInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomKeyInfoType;
export declare function RoomKeyInfoTypeToJSON(value?: RoomKeyInfoType | null): any;
