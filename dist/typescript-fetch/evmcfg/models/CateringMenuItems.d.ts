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
import type { CateringMenuItemType } from './CateringMenuItemType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Menu Items.
 * @export
 * @interface CateringMenuItems
 */
export interface CateringMenuItems {
    /**
     * List of Values of Menu Item.
     * @type {Array<CateringMenuItemType>}
     * @memberof CateringMenuItems
     */
    cateringMenuItems?: Array<CateringMenuItemType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CateringMenuItems
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringMenuItems
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CateringMenuItems interface.
 */
export declare function instanceOfCateringMenuItems(value: object): boolean;
export declare function CateringMenuItemsFromJSON(json: any): CateringMenuItems;
export declare function CateringMenuItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItems;
export declare function CateringMenuItemsToJSON(value?: CateringMenuItems | null): any;
