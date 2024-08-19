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
import type { HotelRoomsType } from './HotelRoomsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface HotelRooms
 */
export interface HotelRooms {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HotelRooms
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HotelRooms
     */
    hasMore?: boolean;
    /**
     *
     * @type {HotelRoomsType}
     * @memberof HotelRooms
     */
    hotelRoomsDetails?: HotelRoomsType;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof HotelRooms
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HotelRooms
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof HotelRooms
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof HotelRooms
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HotelRooms
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelRooms
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HotelRooms interface.
 */
export declare function instanceOfHotelRooms(value: object): boolean;
export declare function HotelRoomsFromJSON(json: any): HotelRooms;
export declare function HotelRoomsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRooms;
export declare function HotelRoomsToJSON(value?: HotelRooms | null): any;
