/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ItemPoolType } from './ItemPoolType';
import {
    ItemPoolTypeFromJSON,
    ItemPoolTypeFromJSONTyped,
    ItemPoolTypeToJSON,
} from './ItemPoolType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object which holds collection of Item Pools.
 * @export
 * @interface ItemPoolsInfo
 */
export interface ItemPoolsInfo {
    /**
     * Item Pools details for hotels.
     * @type {Array<ItemPoolType>}
     * @memberof ItemPoolsInfo
     */
    itemPools?: Array<ItemPoolType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ItemPoolsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ItemPoolsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ItemPoolsInfo interface.
 */
export function instanceOfItemPoolsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemPoolsInfoFromJSON(json: any): ItemPoolsInfo {
    return ItemPoolsInfoFromJSONTyped(json, false);
}

export function ItemPoolsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPoolsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemPools': !exists(json, 'itemPools') ? undefined : ((json['itemPools'] as Array<any>).map(ItemPoolTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ItemPoolsInfoToJSON(value?: ItemPoolsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemPools': value.itemPools === undefined ? undefined : ((value.itemPools as Array<any>).map(ItemPoolTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
