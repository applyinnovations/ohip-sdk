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

/**
 * Defines whether the item is setup due to a Rate Plan, Package or a Block.
 * @export
 * @interface BlockInventoryItemSourceType
 */
export interface BlockInventoryItemSourceType {
    /**
     * 
     * @type {BlockId}
     * @memberof BlockInventoryItemSourceType
     */
    blockId?: BlockId;
    /**
     * Package Code, If populated specifies that the item is setup due to a Package.
     * @type {string}
     * @memberof BlockInventoryItemSourceType
     */
    packageCode?: string;
    /**
     * Rate Plan Code, If populated specifies that the item is setup due to a Rate Plan.
     * @type {string}
     * @memberof BlockInventoryItemSourceType
     */
    ratePlanCode?: string;
}

/**
 * Check if a given object implements the BlockInventoryItemSourceType interface.
 */
export function instanceOfBlockInventoryItemSourceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockInventoryItemSourceTypeFromJSON(json: any): BlockInventoryItemSourceType {
    return BlockInventoryItemSourceTypeFromJSONTyped(json, false);
}

export function BlockInventoryItemSourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInventoryItemSourceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}

export function BlockInventoryItemSourceTypeToJSON(value?: BlockInventoryItemSourceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'packageCode': value.packageCode,
        'ratePlanCode': value.ratePlanCode,
    };
}
