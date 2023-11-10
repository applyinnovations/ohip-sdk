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
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * The type describes Inventory Item Details being copied.
 * @export
 * @interface CopyInventoryItemType
 */
export interface CopyInventoryItemType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof CopyInventoryItemType
     */
    copyAs?: CodeDescriptionType;
    /**
     * Hotel code to which item code will be copied.
     * @type {string}
     * @memberof CopyInventoryItemType
     */
    hotelId?: string;
    /**
     * Item code being copied.
     * @type {string}
     * @memberof CopyInventoryItemType
     */
    itemCode?: string;
}
/**
 * Check if a given object implements the CopyInventoryItemType interface.
 */
export declare function instanceOfCopyInventoryItemType(value: object): boolean;
export declare function CopyInventoryItemTypeFromJSON(json: any): CopyInventoryItemType;
export declare function CopyInventoryItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyInventoryItemType;
export declare function CopyInventoryItemTypeToJSON(value?: CopyInventoryItemType | null): any;
