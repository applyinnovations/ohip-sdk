/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeldByType } from './HeldByType';
import {
    HeldByTypeFromJSON,
    HeldByTypeFromJSONTyped,
    HeldByTypeToJSON,
} from './HeldByType';
import type { HoldItemInfoType } from './HoldItemInfoType';
import {
    HoldItemInfoTypeFromJSON,
    HoldItemInfoTypeFromJSONTyped,
    HoldItemInfoTypeToJSON,
} from './HoldItemInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Request parameter for holding an Item Inventory.
 * @export
 * @interface HoldItemInventoryType
 */
export interface HoldItemInventoryType {
    /**
     * 
     * @type {HeldByType}
     * @memberof HoldItemInventoryType
     */
    heldBy?: HeldByType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HoldItemInventoryType
     */
    heldById?: UniqueIDType;
    /**
     * Info of an item inventory that is requested for Hold.
     * @type {Array<HoldItemInfoType>}
     * @memberof HoldItemInventoryType
     */
    holdItemInfoList?: Array<HoldItemInfoType>;
    /**
     * Hotel Code whose Item Inventory is being requested.
     * @type {string}
     * @memberof HoldItemInventoryType
     */
    hotelId?: string;
    /**
     * Unique ID of the one requesting for the item hold.
     * @type {number}
     * @memberof HoldItemInventoryType
     */
    itemHoldId?: number;
    /**
     * Flag to indicate if inventory check will be overriden.
     * @type {boolean}
     * @memberof HoldItemInventoryType
     */
    overrideInventory?: boolean;
}

/**
 * Check if a given object implements the HoldItemInventoryType interface.
 */
export function instanceOfHoldItemInventoryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HoldItemInventoryTypeFromJSON(json: any): HoldItemInventoryType {
    return HoldItemInventoryTypeFromJSONTyped(json, false);
}

export function HoldItemInventoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HoldItemInventoryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heldBy': !exists(json, 'heldBy') ? undefined : HeldByTypeFromJSON(json['heldBy']),
        'heldById': !exists(json, 'heldById') ? undefined : UniqueIDTypeFromJSON(json['heldById']),
        'holdItemInfoList': !exists(json, 'holdItemInfoList') ? undefined : ((json['holdItemInfoList'] as Array<any>).map(HoldItemInfoTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'itemHoldId': !exists(json, 'itemHoldId') ? undefined : json['itemHoldId'],
        'overrideInventory': !exists(json, 'overrideInventory') ? undefined : json['overrideInventory'],
    };
}

export function HoldItemInventoryTypeToJSON(value?: HoldItemInventoryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heldBy': HeldByTypeToJSON(value.heldBy),
        'heldById': UniqueIDTypeToJSON(value.heldById),
        'holdItemInfoList': value.holdItemInfoList === undefined ? undefined : ((value.holdItemInfoList as Array<any>).map(HoldItemInfoTypeToJSON)),
        'hotelId': value.hotelId,
        'itemHoldId': value.itemHoldId,
        'overrideInventory': value.overrideInventory,
    };
}

