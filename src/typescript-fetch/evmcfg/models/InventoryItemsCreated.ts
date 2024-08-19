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
import type { InventoryItemType } from './InventoryItemType';
import {
    InventoryItemTypeFromJSON,
    InventoryItemTypeFromJSONTyped,
    InventoryItemTypeToJSON,
} from './InventoryItemType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for creating Inventory Items Setup configurations
 * @export
 * @interface InventoryItemsCreated
 */
export interface InventoryItemsCreated {
    /**
     * List of Inventory Items.
     * @type {Array<InventoryItemType>}
     * @memberof InventoryItemsCreated
     */
    items?: Array<InventoryItemType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof InventoryItemsCreated
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof InventoryItemsCreated
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the InventoryItemsCreated interface.
 */
export function instanceOfInventoryItemsCreated(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryItemsCreatedFromJSON(json: any): InventoryItemsCreated {
    return InventoryItemsCreatedFromJSONTyped(json, false);
}

export function InventoryItemsCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryItemsCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(InventoryItemTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function InventoryItemsCreatedToJSON(value?: InventoryItemsCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(InventoryItemTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

