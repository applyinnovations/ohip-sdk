/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomGroupType } from './RoomGroupType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Room Groups.
 * @export
 * @interface RoomGroupsDetails
 */
export interface RoomGroupsDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomGroupsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Room Pools.
     * @type {Array<RoomGroupType>}
     * @memberof RoomGroupsDetails
     */
    roomGroups?: Array<RoomGroupType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomGroupsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomGroupsDetails interface.
 */
export declare function instanceOfRoomGroupsDetails(value: object): boolean;
export declare function RoomGroupsDetailsFromJSON(json: any): RoomGroupsDetails;
export declare function RoomGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGroupsDetails;
export declare function RoomGroupsDetailsToJSON(value?: RoomGroupsDetails | null): any;