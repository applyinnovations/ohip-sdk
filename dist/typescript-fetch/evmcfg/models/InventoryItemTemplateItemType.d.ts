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
import type { UniqueIDType } from './UniqueIDType';
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
export declare function instanceOfInventoryItemTemplateItemType(value: object): boolean;
export declare function InventoryItemTemplateItemTypeFromJSON(json: any): InventoryItemTemplateItemType;
export declare function InventoryItemTemplateItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryItemTemplateItemType;
export declare function InventoryItemTemplateItemTypeToJSON(value?: InventoryItemTemplateItemType | null): any;