/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelRoomsType } from './HotelRoomsType';
/**
 * Collection of Housekeeping Rooms and their information as well as paging attributes.
 * @export
 * @interface HousekeepingBoardHousekeepingRoomInfo
 */
export interface HousekeepingBoardHousekeepingRoomInfo {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    hasMore?: boolean;
    /**
     *
     * @type {HotelRoomsType}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    housekeepingRooms?: HotelRoomsType;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HousekeepingBoardHousekeepingRoomInfo
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the HousekeepingBoardHousekeepingRoomInfo interface.
 */
export declare function instanceOfHousekeepingBoardHousekeepingRoomInfo(value: object): boolean;
export declare function HousekeepingBoardHousekeepingRoomInfoFromJSON(json: any): HousekeepingBoardHousekeepingRoomInfo;
export declare function HousekeepingBoardHousekeepingRoomInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingBoardHousekeepingRoomInfo;
export declare function HousekeepingBoardHousekeepingRoomInfoToJSON(value?: HousekeepingBoardHousekeepingRoomInfo | null): any;
