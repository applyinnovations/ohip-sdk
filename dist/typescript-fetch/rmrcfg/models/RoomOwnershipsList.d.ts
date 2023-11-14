/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomOwnershipType } from './RoomOwnershipType';
/**
 * Room Ownership records.
 * @export
 * @interface RoomOwnershipsList
 */
export interface RoomOwnershipsList {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RoomOwnershipsList
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RoomOwnershipsList
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on Room Ownership records.
     * @type {Array<RoomOwnershipType>}
     * @memberof RoomOwnershipsList
     */
    roomOwnershipInfo?: Array<RoomOwnershipType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RoomOwnershipsList
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the RoomOwnershipsList interface.
 */
export declare function instanceOfRoomOwnershipsList(value: object): boolean;
export declare function RoomOwnershipsListFromJSON(json: any): RoomOwnershipsList;
export declare function RoomOwnershipsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnershipsList;
export declare function RoomOwnershipsListToJSON(value?: RoomOwnershipsList | null): any;