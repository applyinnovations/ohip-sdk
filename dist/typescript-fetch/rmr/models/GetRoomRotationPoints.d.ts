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
import type { RoomRotationPointsInfoType } from './RoomRotationPointsInfoType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface GetRoomRotationPoints
 */
export interface GetRoomRotationPoints {
    /**
     * Indicates whether the balance forward is active
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    balanceForwardActive?: boolean;
    /**
     * Indicates whether the user is allowed to edit balance forward points
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    balanceForwardEditable?: boolean;
    /**
     * Indicates number of records the API has returned actually as per the API request criteria.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    count?: number;
    /**
     * End date of the Room Rotation Period
     * @type {Date}
     * @memberof GetRoomRotationPoints
     */
    endRoomRotationPeriodDate?: Date;
    /**
     * Indicates whether there are more records available to be returned as per the API request criteria or not.
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    hasMore?: boolean;
    /**
     * Indicates number of records the API can return as per the API request limit sent.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof GetRoomRotationPoints
     */
    links?: Links;
    /**
     * Indicates the index of the next applicable set(page).
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    offset?: number;
    /**
     * Indicates whether Out of Order/ Out of Service Room Rotation Points is active
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    outOfOrderServiceActive?: boolean;
    /**
     * List of Room Rotation Points Information.
     * @type {Array<RoomRotationPointsInfoType>}
     * @memberof GetRoomRotationPoints
     */
    roomRotationPointsInfoList?: Array<RoomRotationPointsInfoType>;
    /**
     * Start date of the Room Rotation Period
     * @type {Date}
     * @memberof GetRoomRotationPoints
     */
    startRoomRotationPeriodDate?: Date;
    /**
     * Indicates total number of records available that can be returned as per the API request criteria.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof GetRoomRotationPoints
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the GetRoomRotationPoints interface.
 */
export declare function instanceOfGetRoomRotationPoints(value: object): boolean;
export declare function GetRoomRotationPointsFromJSON(json: any): GetRoomRotationPoints;
export declare function GetRoomRotationPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRoomRotationPoints;
export declare function GetRoomRotationPointsToJSON(value?: GetRoomRotationPoints | null): any;