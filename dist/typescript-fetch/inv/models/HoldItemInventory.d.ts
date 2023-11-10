/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HoldItemInventoryType } from './HoldItemInventoryType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Object containing the item hold details.
 * @export
 * @interface HoldItemInventory
 */
export interface HoldItemInventory {
    /**
     *
     * @type {HoldItemInventoryType}
     * @memberof HoldItemInventory
     */
    holdItemInfo?: HoldItemInventoryType;
    /**
     *
     * @type {Links}
     * @memberof HoldItemInventory
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HoldItemInventory
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HoldItemInventory interface.
 */
export declare function instanceOfHoldItemInventory(value: object): boolean;
export declare function HoldItemInventoryFromJSON(json: any): HoldItemInventory;
export declare function HoldItemInventoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): HoldItemInventory;
export declare function HoldItemInventoryToJSON(value?: HoldItemInventory | null): any;
