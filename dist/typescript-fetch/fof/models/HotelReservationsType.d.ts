/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelReservationType } from './HotelReservationType';
/**
 * A collection of Reservation objects and Unique IDs of Reservation.
 * @export
 * @interface HotelReservationsType
 */
export interface HotelReservationsType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HotelReservationsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HotelReservationsType
     */
    hasMore?: boolean;
    /**
     * A collection of Reservations.
     * @type {Array<HotelReservationType>}
     * @memberof HotelReservationsType
     */
    reservation?: Array<HotelReservationType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HotelReservationsType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the HotelReservationsType interface.
 */
export declare function instanceOfHotelReservationsType(value: object): boolean;
export declare function HotelReservationsTypeFromJSON(json: any): HotelReservationsType;
export declare function HotelReservationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationsType;
export declare function HotelReservationsTypeToJSON(value?: HotelReservationsType | null): any;
