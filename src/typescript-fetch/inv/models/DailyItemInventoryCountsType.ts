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
/**
 * Inventory counts for the given date.
 * @export
 * @interface DailyItemInventoryCountsType
 */
export interface DailyItemInventoryCountsType {
    /**
     * Available Item count.
     * @type {number}
     * @memberof DailyItemInventoryCountsType
     */
    available?: number;
    /**
     * Date of the item inventory.
     * @type {string}
     * @memberof DailyItemInventoryCountsType
     */
    date?: string;
    /**
     * Total Item count.
     * @type {number}
     * @memberof DailyItemInventoryCountsType
     */
    total?: number;
}

/**
 * Check if a given object implements the DailyItemInventoryCountsType interface.
 */
export function instanceOfDailyItemInventoryCountsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DailyItemInventoryCountsTypeFromJSON(json: any): DailyItemInventoryCountsType {
    return DailyItemInventoryCountsTypeFromJSONTyped(json, false);
}

export function DailyItemInventoryCountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyItemInventoryCountsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': !exists(json, 'available') ? undefined : json['available'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function DailyItemInventoryCountsTypeToJSON(value?: DailyItemInventoryCountsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'date': value.date,
        'total': value.total,
    };
}

