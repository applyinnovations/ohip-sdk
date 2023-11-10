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
import type { CopyMenuItemsType } from './CopyMenuItemsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for Copying Menu Items.
 * @export
 * @interface CateringMenuItemsCopy
 */
export interface CateringMenuItemsCopy {
    /**
     *
     * @type {CopyMenuItemsType}
     * @memberof CateringMenuItemsCopy
     */
    copyMenuItems?: CopyMenuItemsType;
    /**
     *
     * @type {Links}
     * @memberof CateringMenuItemsCopy
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CateringMenuItemsCopy
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CateringMenuItemsCopy interface.
 */
export declare function instanceOfCateringMenuItemsCopy(value: object): boolean;
export declare function CateringMenuItemsCopyFromJSON(json: any): CateringMenuItemsCopy;
export declare function CateringMenuItemsCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItemsCopy;
export declare function CateringMenuItemsCopyToJSON(value?: CateringMenuItemsCopy | null): any;
