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
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Information about an item inventory that is requested for hold.
 * @export
 * @interface HoldItemInfoType
 */
export interface HoldItemInfoType {
    /**
     * Number of items to hold.
     * @type {number}
     * @memberof HoldItemInfoType
     */
    count?: number;
    /**
     * Item Code to hold.
     * @type {string}
     * @memberof HoldItemInfoType
     */
    itemCode?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HoldItemInfoType
     */
    itemId?: UniqueIDType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof HoldItemInfoType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the HoldItemInfoType interface.
 */
export function instanceOfHoldItemInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HoldItemInfoTypeFromJSON(json: any): HoldItemInfoType {
    return HoldItemInfoTypeFromJSONTyped(json, false);
}

export function HoldItemInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HoldItemInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'itemCode': !exists(json, 'itemCode') ? undefined : json['itemCode'],
        'itemId': !exists(json, 'itemId') ? undefined : UniqueIDTypeFromJSON(json['itemId']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function HoldItemInfoTypeToJSON(value?: HoldItemInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'itemCode': value.itemCode,
        'itemId': UniqueIDTypeToJSON(value.itemId),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}
