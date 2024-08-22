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
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    endDate?: string;
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
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    shoulderEndDate?: string;
    /**
     * Shoulder start date of the block.
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    shoulderStartDate?: string;
    /**
     * Start date of the block.
     * @type {string}
     * @memberof BlockWashInfoTypeBlockInfo
     */
    startDate?: string;
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
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryControl': !exists(json, 'inventoryControl') ? undefined : BlockInventoryControlTypeFromJSON(json['inventoryControl']),
        'shoulderEndDate': !exists(json, 'shoulderEndDate') ? undefined : json['shoulderEndDate'],
        'shoulderStartDate': !exists(json, 'shoulderStartDate') ? undefined : json['shoulderStartDate'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
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
        'endDate': value.endDate,
        'hotelId': value.hotelId,
        'inventoryControl': BlockInventoryControlTypeToJSON(value.inventoryControl),
        'shoulderEndDate': value.shoulderEndDate,
        'shoulderStartDate': value.shoulderStartDate,
        'startDate': value.startDate,
    };
}

