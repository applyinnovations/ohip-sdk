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
import type { BlockGridInvType } from './BlockGridInvType';
import {
    BlockGridInvTypeFromJSON,
    BlockGridInvTypeFromJSONTyped,
    BlockGridInvTypeToJSON,
} from './BlockGridInvType';

/**
 * Allows to select type of wash schedule: by number of rooms or by percentage.
 * @export
 * @interface BlockWashScheduleType
 */
export interface BlockWashScheduleType {
    /**
     * A single room type on which wash operation should be performed.
     * @type {Array<string>}
     * @memberof BlockWashScheduleType
     */
    roomTypes?: Array<string>;
    /**
     * When using the Wash by % option, indicate a wash percentage that will be applied it to the whole block.
     * @type {number}
     * @memberof BlockWashScheduleType
     */
    washByPercent?: number;
    /**
     * 
     * @type {BlockGridInvType}
     * @memberof BlockWashScheduleType
     */
    washByRooms?: BlockGridInvType;
    /**
     * Date on which the block wash operation will be performed.
     * @type {Date}
     * @memberof BlockWashScheduleType
     */
    washDate?: Date;
}

/**
 * Check if a given object implements the BlockWashScheduleType interface.
 */
export function instanceOfBlockWashScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockWashScheduleTypeFromJSON(json: any): BlockWashScheduleType {
    return BlockWashScheduleTypeFromJSONTyped(json, false);
}

export function BlockWashScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockWashScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
        'washByPercent': !exists(json, 'washByPercent') ? undefined : json['washByPercent'],
        'washByRooms': !exists(json, 'washByRooms') ? undefined : BlockGridInvTypeFromJSON(json['washByRooms']),
        'washDate': !exists(json, 'washDate') ? undefined : (new Date(json['washDate'])),
    };
}

export function BlockWashScheduleTypeToJSON(value?: BlockWashScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomTypes': value.roomTypes,
        'washByPercent': value.washByPercent,
        'washByRooms': BlockGridInvTypeToJSON(value.washByRooms),
        'washDate': value.washDate === undefined ? undefined : (value.washDate.toISOString().substring(0,10)),
    };
}
