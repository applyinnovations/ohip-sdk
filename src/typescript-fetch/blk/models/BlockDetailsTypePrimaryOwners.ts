/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockOwnerType } from './BlockOwnerType';
import {
    BlockOwnerTypeFromJSON,
    BlockOwnerTypeFromJSONTyped,
    BlockOwnerTypeToJSON,
} from './BlockOwnerType';

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
export function instanceOfBlockDetailsTypePrimaryOwners(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockDetailsTypePrimaryOwnersFromJSON(json: any): BlockDetailsTypePrimaryOwners {
    return BlockDetailsTypePrimaryOwnersFromJSONTyped(json, false);
}

export function BlockDetailsTypePrimaryOwnersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDetailsTypePrimaryOwners {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockOwner': !exists(json, 'blockOwner') ? undefined : BlockOwnerTypeFromJSON(json['blockOwner']),
        'blockOwnerCount': !exists(json, 'blockOwnerCount') ? undefined : json['blockOwnerCount'],
        'cateringOwner': !exists(json, 'cateringOwner') ? undefined : BlockOwnerTypeFromJSON(json['cateringOwner']),
        'cateringOwnerCount': !exists(json, 'cateringOwnerCount') ? undefined : json['cateringOwnerCount'],
        'roomsOwner': !exists(json, 'roomsOwner') ? undefined : BlockOwnerTypeFromJSON(json['roomsOwner']),
        'roomsOwnerCount': !exists(json, 'roomsOwnerCount') ? undefined : json['roomsOwnerCount'],
    };
}

export function BlockDetailsTypePrimaryOwnersToJSON(value?: BlockDetailsTypePrimaryOwners | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockOwner': BlockOwnerTypeToJSON(value.blockOwner),
        'blockOwnerCount': value.blockOwnerCount,
        'cateringOwner': BlockOwnerTypeToJSON(value.cateringOwner),
        'cateringOwnerCount': value.cateringOwnerCount,
        'roomsOwner': BlockOwnerTypeToJSON(value.roomsOwner),
        'roomsOwnerCount': value.roomsOwnerCount,
    };
}

