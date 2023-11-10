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
import type { RoomPotentialsType } from './RoomPotentialsType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostRoomPotentialsRequest
 */
export interface PostRoomPotentialsRequest {
    /**
     *
     * @type {Links}
     * @memberof PostRoomPotentialsRequest
     */
    links?: Links;
    /**
     *
     * @type {RoomPotentialsType}
     * @memberof PostRoomPotentialsRequest
     */
    roomPotentials?: RoomPotentialsType;
    /**
     *
     * @type {WarningsType}
     * @memberof PostRoomPotentialsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostRoomPotentialsRequest interface.
 */
export declare function instanceOfPostRoomPotentialsRequest(value: object): boolean;
export declare function PostRoomPotentialsRequestFromJSON(json: any): PostRoomPotentialsRequest;
export declare function PostRoomPotentialsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRoomPotentialsRequest;
export declare function PostRoomPotentialsRequestToJSON(value?: PostRoomPotentialsRequest | null): any;
