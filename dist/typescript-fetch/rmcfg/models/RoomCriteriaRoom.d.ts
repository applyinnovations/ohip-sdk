/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConfigRoomType } from './ConfigRoomType';
/**
 * Room to be created.
 * @export
 * @interface RoomCriteriaRoom
 */
export interface RoomCriteriaRoom {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof RoomCriteriaRoom
     */
    hotelId?: string;
    /**
     *
     * @type {ConfigRoomType}
     * @memberof RoomCriteriaRoom
     */
    roomDetails?: ConfigRoomType;
}
/**
 * Check if a given object implements the RoomCriteriaRoom interface.
 */
export declare function instanceOfRoomCriteriaRoom(value: object): boolean;
export declare function RoomCriteriaRoomFromJSON(json: any): RoomCriteriaRoom;
export declare function RoomCriteriaRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCriteriaRoom;
export declare function RoomCriteriaRoomToJSON(value?: RoomCriteriaRoom | null): any;
