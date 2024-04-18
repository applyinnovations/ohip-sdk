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
import type { InstanceLink } from './InstanceLink';
import type { ItemClassType } from './ItemClassType';
import type { WarningType } from './WarningType';
/**
 * Request object for modifying item class.
 * @export
 * @interface ItemClasses
 */
export interface ItemClasses {
    /**
     * Holds Item Class details.
     * @type {Array<ItemClassType>}
     * @memberof ItemClasses
     */
    itemClasses?: Array<ItemClassType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ItemClasses
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ItemClasses
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ItemClasses interface.
 */
export declare function instanceOfItemClasses(value: object): boolean;
export declare function ItemClassesFromJSON(json: any): ItemClasses;
export declare function ItemClassesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemClasses;
export declare function ItemClassesToJSON(value?: ItemClasses | null): any;