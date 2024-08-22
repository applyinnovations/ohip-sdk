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
import type { BlocksTypeBlockInfoInner } from './BlocksTypeBlockInfoInner';
import {
    BlocksTypeBlockInfoInnerFromJSON,
    BlocksTypeBlockInfoInnerFromJSONTyped,
    BlocksTypeBlockInfoInnerToJSON,
} from './BlocksTypeBlockInfoInner';

/**
 * A collection of Block objects or Unique IDs of Blocks.
 * @export
 * @interface BlocksType
 */
export interface BlocksType {
    /**
     * A collection of Blocks or Unique IDs of Blocks.
     * @type {Array<BlocksTypeBlockInfoInner>}
     * @memberof BlocksType
     */
    blockInfo?: Array<BlocksTypeBlockInfoInner>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof BlocksType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof BlocksType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof BlocksType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the BlocksType interface.
 */
export function instanceOfBlocksType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlocksTypeFromJSON(json: any): BlocksType {
    return BlocksTypeFromJSONTyped(json, false);
}

export function BlocksTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlocksType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockInfo': !exists(json, 'blockInfo') ? undefined : ((json['blockInfo'] as Array<any>).map(BlocksTypeBlockInfoInnerFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function BlocksTypeToJSON(value?: BlocksType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockInfo': value.blockInfo === undefined ? undefined : ((value.blockInfo as Array<any>).map(BlocksTypeBlockInfoInnerToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
    };
}

