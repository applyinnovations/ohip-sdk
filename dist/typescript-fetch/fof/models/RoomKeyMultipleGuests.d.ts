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
import type { RoomKeyGuest } from './RoomKeyGuest';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * Short room key information containing  information about the multiple guests and room key options .
 * @export
 * @interface RoomKeyMultipleGuests
 */
export interface RoomKeyMultipleGuests {
    /**
     *
     * @type {string}
     * @memberof RoomKeyMultipleGuests
     */
    keyOptions?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof RoomKeyMultipleGuests
     */
    reservationIdList?: UniqueIDListType;
    /**
     * Collection of of Room key guests for multiple guest room key functionality.
     * @type {Array<RoomKeyGuest>}
     * @memberof RoomKeyMultipleGuests
     */
    roomKeyGuests?: Array<RoomKeyGuest>;
    /**
     * A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys.
     * @type {string}
     * @memberof RoomKeyMultipleGuests
     */
    roomNumber?: string;
}
/**
 * Check if a given object implements the RoomKeyMultipleGuests interface.
 */
export declare function instanceOfRoomKeyMultipleGuests(value: object): boolean;
export declare function RoomKeyMultipleGuestsFromJSON(json: any): RoomKeyMultipleGuests;
export declare function RoomKeyMultipleGuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomKeyMultipleGuests;
export declare function RoomKeyMultipleGuestsToJSON(value?: RoomKeyMultipleGuests | null): any;
