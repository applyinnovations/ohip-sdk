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
import type { CopyNewRoomsType } from './CopyNewRoomsType';
/**
 * Primary details of room to be copied and collection of rooms to be created from it.
 * @export
 * @interface CopyRoomType
 */
export interface CopyRoomType {
    /**
     * Hotel code of an existing room that will serve as the basis for the new rooms.
     * @type {object}
     * @memberof CopyRoomType
     */
    hotelId?: object;
    /**
     *
     * @type {CopyNewRoomsType}
     * @memberof CopyRoomType
     */
    newRooms?: CopyNewRoomsType;
    /**
     * Room number of an existing room that will serve as the basis for the new rooms.
     * @type {object}
     * @memberof CopyRoomType
     */
    roomId?: object;
}
/**
 * Check if a given object implements the CopyRoomType interface.
 */
export declare function instanceOfCopyRoomType(value: object): boolean;
export declare function CopyRoomTypeFromJSON(json: any): CopyRoomType;
export declare function CopyRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRoomType;
export declare function CopyRoomTypeToJSON(value?: CopyRoomType | null): any;
