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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * This type holds the information of the inventory item which will be grouped in the inventory item template.
 * @export
 * @interface InventoryItemTemplateItemType
 */
export interface InventoryItemTemplateItemType {
    /**
     * Specifies the article number of the item.
     * @type {string}
     * @memberof InventoryItemTemplateItemType
     */
    articleNumber?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof InventoryItemTemplateItemType
     */
    attributeId?: UniqueIDType;
    /**
     * Specifies the name of the default attribute for the item in the inventory item template.
     * @type {string}
     * @memberof InventoryItemTemplateItemType
     */
    attributeName?: string;
    /**
     * Specifies the sorting sequence number for the item class.
     * @type {number}
     * @memberof InventoryItemTemplateItemType
     */
    classSequence?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof InventoryItemTemplateItemType
     */
    id?: UniqueIDType;
    /**
     * Specifies the name of the item.
     * @type {string}
     * @memberof InventoryItemTemplateItemType
     */
    name?: string;
    /**
     * Specifies the quantity of the item.
     * @type {number}
     * @memberof InventoryItemTemplateItemType
     */
    quantity?: number;
    /**
     * Specifies the code of the default rate for the item in the inventory item template.
     * @type {string}
     * @memberof InventoryItemTemplateItemType
     */
    rateCode?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof InventoryItemTemplateItemType
     */
    rateId?: UniqueIDType;
    /**
     * Specifies the name of the default rate for the item in the inventory item template.
     * @type {string}
     * @memberof InventoryItemTemplateItemType
     */
    rateName?: string;
    /**
     * Specifies the sorting sequence number for the item.
     * @type {number}
     * @memberof InventoryItemTemplateItemType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the InventoryItemTemplateItemType interface.
 */
export function instanceOfInventoryItemTemplateItemType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryItemTemplateItemTypeFromJSON(json: any): InventoryItemTemplateItemType {
    return InventoryItemTemplateItemTypeFromJSONTyped(json, false);
}

export function InventoryItemTemplateItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryItemTemplateItemType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articleNumber': !exists(json, 'articleNumber') ? undefined : json['articleNumber'],
        'attributeId': !exists(json, 'attributeId') ? undefined : UniqueIDTypeFromJSON(json['attributeId']),
        'attributeName': !exists(json, 'attributeName') ? undefined : json['attributeName'],
        'classSequence': !exists(json, 'classSequence') ? undefined : json['classSequence'],
        'id': !exists(json, 'id') ? undefined : UniqueIDTypeFromJSON(json['id']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'rateId': !exists(json, 'rateId') ? undefined : UniqueIDTypeFromJSON(json['rateId']),
        'rateName': !exists(json, 'rateName') ? undefined : json['rateName'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function InventoryItemTemplateItemTypeToJSON(value?: InventoryItemTemplateItemType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'articleNumber': value.articleNumber,
        'attributeId': UniqueIDTypeToJSON(value.attributeId),
        'attributeName': value.attributeName,
        'classSequence': value.classSequence,
        'id': UniqueIDTypeToJSON(value.id),
        'name': value.name,
        'quantity': value.quantity,
        'rateCode': value.rateCode,
        'rateId': UniqueIDTypeToJSON(value.rateId),
        'rateName': value.rateName,
        'sequence': value.sequence,
    };
}
