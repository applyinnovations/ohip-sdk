/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomingListReservationType } from './RoomingListReservationType';
/**
 * If anyone or more reservations failed, then it specifies the associated error messages.
 * @export
 * @interface RoomingListReservationsType
 */
export interface RoomingListReservationsType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RoomingListReservationsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RoomingListReservationsType
     */
    hasMore?: boolean;
    /**
     * A collection of Block Rooming List Reservations.
     * @type {Array<RoomingListReservationType>}
     * @memberof RoomingListReservationsType
     */
    reservation?: Array<RoomingListReservationType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RoomingListReservationsType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the RoomingListReservationsType interface.
 */
export declare function instanceOfRoomingListReservationsType(value: object): boolean;
export declare function RoomingListReservationsTypeFromJSON(json: any): RoomingListReservationsType;
export declare function RoomingListReservationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListReservationsType;
export declare function RoomingListReservationsTypeToJSON(value?: RoomingListReservationsType | null): any;