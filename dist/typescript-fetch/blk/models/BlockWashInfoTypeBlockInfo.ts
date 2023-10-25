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
import type { BlockInventoryControlType } from './BlockInventoryControlType';
import {
    BlockInventoryControlTypeFromJSON,
    BlockInventoryControlTypeFromJSONTyped,
    BlockInventoryControlTypeToJSON,
} from './BlockInventoryControlType';

/**
 * Block information required to perform a wash operation.
 * @export
 * @interface BlockWashInfoTypeBlockInfo
 */
export interface BlockWashInfoTypeBlockInfo {
    /**
     * Block code of the block on which wash operation is performed.
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    blockCode?: string;
    /**
     * 
     * @type {BlockId}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    blockId?: BlockId;
    /**
     * End date of the block.
     * @type {Date}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    endDate?: Date;
    /**
     * Hotel Code to which the block belongs to.
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    hotelId?: string;
    /**
     * 
     * @type {BlockInventoryControlType}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    inventoryControl?: BlockInventoryControlType;
    /**
     * Shoulder end date of the block.
     * @type {Date}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    shoulderEndDate?: Date;
    /**
     * Shoulder start date of the block.
     * @type {Date}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    shoulderStartDate?: Date;
    /**
     * Start date of the block.
     * @type {Date}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the BlockWashInfoTypeBlockInfo interface.
 */
export function instanceOfBlockWashInfoTypeBlockInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockWashInfoTypeBlockInfoFromJSON(json: any): BlockWashInfoTypeBlockInfo {
    return BlockWashInfoTypeBlockInfoFromJSONTyped(json, false);
}

export function BlockWashInfoTypeBlockInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockWashInfoTypeBlockInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockCode': !exists(json, 'blockCode') ? undefined : json['blockCode'],
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryControl': !exists(json, 'inventoryControl') ? undefined : BlockInventoryControlTypeFromJSON(json['inventoryControl']),
        'shoulderEndDate': !exists(json, 'shoulderEndDate') ? undefined : (new Date(json['shoulderEndDate'])),
        'shoulderStartDate': !exists(json, 'shoulderStartDate') ? undefined : (new Date(json['shoulderStartDate'])),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function BlockWashInfoTypeBlockInfoToJSON(value?: BlockWashInfoTypeBlockInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockCode': value.blockCode,
        'blockId': BlockIdToJSON(value.blockId),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'hotelId': value.hotelId,
        'inventoryControl': BlockInventoryControlTypeToJSON(value.inventoryControl),
        'shoulderEndDate': value.shoulderEndDate === undefined ? undefined : (value.shoulderEndDate.toISOString().substr(0,10)),
        'shoulderStartDate': value.shoulderStartDate === undefined ? undefined : (value.shoulderStartDate.toISOString().substr(0,10)),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

