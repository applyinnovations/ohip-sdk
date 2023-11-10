/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ItemIDListType } from './ItemIDListType';
/**
 * A type which holds the Item pool.
 * @export
 * @interface ItemPoolType
 */
export interface ItemPoolType {
    /**
     * Item Pools Code
     * @type {string}
     * @memberof ItemPoolType
     */
    code?: string;
    /**
     * Description of the Item Pool code.
     * @type {string}
     * @memberof ItemPoolType
     */
    description?: string;
    /**
     * Sequence of Item Pool code.
     * @type {number}
     * @memberof ItemPoolType
     */
    displaySequence?: number;
    /**
     * Hotel Code which belong to Item Pool
     * @type {string}
     * @memberof ItemPoolType
     */
    hotelId?: string;
    /**
     * Item Class which associated to Item codes.
     * @type {string}
     * @memberof ItemPoolType
     */
    itemClass?: string;
    /**
     *
     * @type {ItemIDListType}
     * @memberof ItemPoolType
     */
    itemIds?: ItemIDListType;
}
/**
 * Check if a given object implements the ItemPoolType interface.
 */
export declare function instanceOfItemPoolType(value: object): boolean;
export declare function ItemPoolTypeFromJSON(json: any): ItemPoolType;
export declare function ItemPoolTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPoolType;
export declare function ItemPoolTypeToJSON(value?: ItemPoolType | null): any;
