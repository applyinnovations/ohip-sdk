/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InventoryCountsType } from './InventoryCountsType';
import {
    InventoryCountsTypeFromJSON,
    InventoryCountsTypeFromJSONTyped,
    InventoryCountsTypeToJSON,
} from './InventoryCountsType';

/**
 * Collection of Inventory counts for the date ranges.
 * @export
 * @interface InventoryLevelCountsListType
 */
export interface InventoryLevelCountsListType {
    /**
     * Inventory Group/Level code.
     * @type {string}
     * @memberof InventoryLevelCountsListType
     */
    code?: string;
    /**
     * Collection of Inventory counts for the date ranges.
     * @type {Array<InventoryCountsType>}
     * @memberof InventoryLevelCountsListType
     */
    inventoryCounts?: Array<InventoryCountsType>;
    /**
     * Integer Group/Level order sequence number.
     * @type {number}
     * @memberof InventoryLevelCountsListType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the InventoryLevelCountsListType interface.
 */
export function instanceOfInventoryLevelCountsListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryLevelCountsListTypeFromJSON(json: any): InventoryLevelCountsListType {
    return InventoryLevelCountsListTypeFromJSONTyped(json, false);
}

export function InventoryLevelCountsListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryLevelCountsListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'inventoryCounts': !exists(json, 'inventoryCounts') ? undefined : ((json['inventoryCounts'] as Array<any>).map(InventoryCountsTypeFromJSON)),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function InventoryLevelCountsListTypeToJSON(value?: InventoryLevelCountsListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'inventoryCounts': value.inventoryCounts === undefined ? undefined : ((value.inventoryCounts as Array<any>).map(InventoryCountsTypeToJSON)),
        'sequence': value.sequence,
    };
}

