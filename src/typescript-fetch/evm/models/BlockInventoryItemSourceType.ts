/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Defines whether the item is setupCode due to a Rate Plan, Package or a Block.
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
     * Package Code, If populated specifies that the item is setupCode due to a Package.
     * @type {string}
     * @memberof BlockInventoryItemSourceType
     */
    packageCode?: string;
    /**
     * Rate Plan Code, If populated specifies that the item is setupCode due to a Rate Plan.
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

