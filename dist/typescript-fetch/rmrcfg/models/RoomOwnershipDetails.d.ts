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
import type { Links } from './Links';
import type { RoomOwnershipsList } from './RoomOwnershipsList';
import type { WarningsType } from './WarningsType';
/**
 * Response object containing room ownership details.
 * @export
 * @interface RoomOwnershipDetails
 */
export interface RoomOwnershipDetails {
    /**
     *
     * @type {Links}
     * @memberof RoomOwnershipDetails
     */
    links?: Links;
    /**
     *
     * @type {RoomOwnershipsList}
     * @memberof RoomOwnershipDetails
     */
    roomOwnerships?: RoomOwnershipsList;
    /**
     *
     * @type {WarningsType}
     * @memberof RoomOwnershipDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RoomOwnershipDetails interface.
 */
export declare function instanceOfRoomOwnershipDetails(value: object): boolean;
export declare function RoomOwnershipDetailsFromJSON(json: any): RoomOwnershipDetails;
export declare function RoomOwnershipDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnershipDetails;
export declare function RoomOwnershipDetailsToJSON(value?: RoomOwnershipDetails | null): any;
