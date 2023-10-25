/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { BlockRestrictionType } from './BlockRestrictionType';
import {
    BlockRestrictionTypeFromJSON,
    BlockRestrictionTypeFromJSONTyped,
    BlockRestrictionTypeToJSON,
} from './BlockRestrictionType';

/**
 * List of restrictions belonging to a block.
 * @export
 * @interface BlockRestrictionsType
 */
export interface BlockRestrictionsType {
    /**
     * 
     * @type {BlockId}
     * @memberof BlockRestrictionsType
     */
    blockId?: BlockId;
    /**
     * Block restriction details.
     * @type {Array<BlockRestrictionType>}
     * @memberof BlockRestrictionsType
     */
    blockRestriction?: Array<BlockRestrictionType>;
    /**
     * Hotel to which the block belongs to.
     * @type {string}
     * @memberof BlockRestrictionsType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the BlockRestrictionsType interface.
 */
export function instanceOfBlockRestrictionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRestrictionsTypeFromJSON(json: any): BlockRestrictionsType {
    return BlockRestrictionsTypeFromJSONTyped(json, false);
}

export function BlockRestrictionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRestrictionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'blockRestriction': !exists(json, 'blockRestriction') ? undefined : ((json['blockRestriction'] as Array<any>).map(BlockRestrictionTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function BlockRestrictionsTypeToJSON(value?: BlockRestrictionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'blockRestriction': value.blockRestriction === undefined ? undefined : ((value.blockRestriction as Array<any>).map(BlockRestrictionTypeToJSON)),
        'hotelId': value.hotelId,
    };
}

