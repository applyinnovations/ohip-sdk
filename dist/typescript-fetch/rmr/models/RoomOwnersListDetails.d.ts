/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RoomOwnerInfoType } from './RoomOwnerInfoType';
import type { WarningsType } from './WarningsType';
/**
 * Provides Pagination Information for the REST API.
 * @export
 * @interface RoomOwnersListDetails
 */
export interface RoomOwnersListDetails {
    /**
     *
     * @type {Links}
     * @memberof RoomOwnersListDetails
     */
    links?: Links;
    /**
     * Collection of Room Owners with Room Ownership details.
     * @type {Array<RoomOwnerInfoType>}
     * @memberof RoomOwnersListDetails
     */
    roomOwnerInfoTypeList?: Array<RoomOwnerInfoType>;
    /**
     *
     * @type {WarningsType}
     * @memberof RoomOwnersListDetails
     */
    warnings?: WarningsType;
    /**
     * Indicates number of records the API has returned actually as per the API request criteria.
     * @type {number}
     * @memberof RoomOwnersListDetails
     */
    count?: number;
    /**
     * Indicates whether there are more records available to be returned as per the API request criteria or not.
     * @type {boolean}
     * @memberof RoomOwnersListDetails
     */
    hasMore?: boolean;
    /**
     * Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time.
     * @type {number}
     * @memberof RoomOwnersListDetails
     */
    limit?: number;
    /**
     * Indicates the index of the next applicable set(page).
     * @type {number}
     * @memberof RoomOwnersListDetails
     */
    offset?: number;
    /**
     * Indicates total number of records available that can be returned as per the API request criteria.
     * @type {number}
     * @memberof RoomOwnersListDetails
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the RoomOwnersListDetails interface.
 */
export declare function instanceOfRoomOwnersListDetails(value: object): boolean;
export declare function RoomOwnersListDetailsFromJSON(json: any): RoomOwnersListDetails;
export declare function RoomOwnersListDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnersListDetails;
export declare function RoomOwnersListDetailsToJSON(value?: RoomOwnersListDetails | null): any;