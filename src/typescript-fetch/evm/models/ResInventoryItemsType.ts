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
import type { ResInventoryItemType } from './ResInventoryItemType';
import {
    ResInventoryItemTypeFromJSON,
    ResInventoryItemTypeFromJSONTyped,
    ResInventoryItemTypeToJSON,
} from './ResInventoryItemType';

/**
 * Defines a collection of inventory items attached to a reservation.
 * @export
 * @interface ResInventoryItemsType
 */
export interface ResInventoryItemsType {
    /**
     * Inventory item attached to a reservation.
     * @type {Array<ResInventoryItemType>}
     * @memberof ResInventoryItemsType
     */
    item?: Array<ResInventoryItemType>;
    /**
     * The Item Class ID which the item belongs to.
     * @type {string}
     * @memberof ResInventoryItemsType
     */
    itemClassCode?: string;
}

/**
 * Check if a given object implements the ResInventoryItemsType interface.
 */
export function instanceOfResInventoryItemsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResInventoryItemsTypeFromJSON(json: any): ResInventoryItemsType {
    return ResInventoryItemsTypeFromJSONTyped(json, false);
}

export function ResInventoryItemsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResInventoryItemsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': !exists(json, 'item') ? undefined : ((json['item'] as Array<any>).map(ResInventoryItemTypeFromJSON)),
        'itemClassCode': !exists(json, 'itemClassCode') ? undefined : json['itemClassCode'],
    };
}

export function ResInventoryItemsTypeToJSON(value?: ResInventoryItemsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': value.item === undefined ? undefined : ((value.item as Array<any>).map(ResInventoryItemTypeToJSON)),
        'itemClassCode': value.itemClassCode,
    };
}

