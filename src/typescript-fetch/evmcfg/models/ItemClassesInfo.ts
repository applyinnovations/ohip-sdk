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
import type { ItemClassType } from './ItemClassType';
import {
    ItemClassTypeFromJSON,
    ItemClassTypeFromJSONTyped,
    ItemClassTypeToJSON,
} from './ItemClassType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching item class.
 * @export
 * @interface ItemClassesInfo
 */
export interface ItemClassesInfo {
    /**
     * Holds Item Class details.
     * @type {Array<ItemClassType>}
     * @memberof ItemClassesInfo
     */
    itemClasses?: Array<ItemClassType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ItemClassesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ItemClassesInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ItemClassesInfo interface.
 */
export function instanceOfItemClassesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemClassesInfoFromJSON(json: any): ItemClassesInfo {
    return ItemClassesInfoFromJSONTyped(json, false);
}

export function ItemClassesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemClassesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemClasses': !exists(json, 'itemClasses') ? undefined : ((json['itemClasses'] as Array<any>).map(ItemClassTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ItemClassesInfoToJSON(value?: ItemClassesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemClasses': value.itemClasses === undefined ? undefined : ((value.itemClasses as Array<any>).map(ItemClassTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
