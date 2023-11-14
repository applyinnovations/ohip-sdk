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
import type { CopyInventoryItemsType } from './CopyInventoryItemsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for copying Inventory Items Setup configuration
 * @export
 * @interface InventoryItemsCopy
 */
export interface InventoryItemsCopy {
    /**
     *
     * @type {CopyInventoryItemsType}
     * @memberof InventoryItemsCopy
     */
    copyInventoryItems?: CopyInventoryItemsType;
    /**
     *
     * @type {Links}
     * @memberof InventoryItemsCopy
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof InventoryItemsCopy
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the InventoryItemsCopy interface.
 */
export declare function instanceOfInventoryItemsCopy(value: object): boolean;
export declare function InventoryItemsCopyFromJSON(json: any): InventoryItemsCopy;
export declare function InventoryItemsCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryItemsCopy;
export declare function InventoryItemsCopyToJSON(value?: InventoryItemsCopy | null): any;