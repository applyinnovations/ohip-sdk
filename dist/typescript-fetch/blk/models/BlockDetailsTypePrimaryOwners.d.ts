/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockOwnerType } from './BlockOwnerType';
/**
 * Primary owners for the block.
 * @export
 * @interface BlockDetailsTypePrimaryOwners
 */
export interface BlockDetailsTypePrimaryOwners {
    /**
     *
     * @type {BlockOwnerType}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    blockOwner?: BlockOwnerType;
    /**
     * Total number of Block Owners.
     * @type {number}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    blockOwnerCount?: number;
    /**
     *
     * @type {BlockOwnerType}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    cateringOwner?: BlockOwnerType;
    /**
     * Total number of Catering Owners.
     * @type {number}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    cateringOwnerCount?: number;
    /**
     *
     * @type {BlockOwnerType}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    roomsOwner?: BlockOwnerType;
    /**
     * Total number of Rooms Owners.
     * @type {number}
     * @memberof BlockDetailsTypePrimaryOwners
     */
    roomsOwnerCount?: number;
}
/**
 * Check if a given object implements the BlockDetailsTypePrimaryOwners interface.
 */
export declare function instanceOfBlockDetailsTypePrimaryOwners(value: object): boolean;
export declare function BlockDetailsTypePrimaryOwnersFromJSON(json: any): BlockDetailsTypePrimaryOwners;
export declare function BlockDetailsTypePrimaryOwnersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDetailsTypePrimaryOwners;
export declare function BlockDetailsTypePrimaryOwnersToJSON(value?: BlockDetailsTypePrimaryOwners | null): any;
