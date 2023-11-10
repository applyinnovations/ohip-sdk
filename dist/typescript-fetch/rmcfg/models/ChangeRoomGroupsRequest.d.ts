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
import type { Links } from './Links';
import type { RoomGroupsType } from './RoomGroupsType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface ChangeRoomGroupsRequest
 */
export interface ChangeRoomGroupsRequest {
    /**
     *
     * @type {Links}
     * @memberof ChangeRoomGroupsRequest
     */
    links?: Links;
    /**
     *
     * @type {RoomGroupsType}
     * @memberof ChangeRoomGroupsRequest
     */
    roomGroups?: RoomGroupsType;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeRoomGroupsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeRoomGroupsRequest interface.
 */
export declare function instanceOfChangeRoomGroupsRequest(value: object): boolean;
export declare function ChangeRoomGroupsRequestFromJSON(json: any): ChangeRoomGroupsRequest;
export declare function ChangeRoomGroupsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRoomGroupsRequest;
export declare function ChangeRoomGroupsRequestToJSON(value?: ChangeRoomGroupsRequest | null): any;
