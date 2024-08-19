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
import type { CopyMenuItemClassesTypeCopyInstructions } from './CopyMenuItemClassesTypeCopyInstructions';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface CopyMenuItemClassesType
 */
export interface CopyMenuItemClassesType {
    /**
     *
     * @type {CopyMenuItemClassesTypeCopyInstructions}
     * @memberof CopyMenuItemClassesType
     */
    copyInstructions?: CopyMenuItemClassesTypeCopyInstructions;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CopyMenuItemClassesType
     */
    itemClasses?: Array<UniqueIDType>;
    /**
     * Source Hotel code from where menu item classes needs to be copied
     * @type {string}
     * @memberof CopyMenuItemClassesType
     */
    sourceHotelCode?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CopyMenuItemClassesType
     */
    targetHotelCodes?: Array<string>;
}
/**
 * Check if a given object implements the CopyMenuItemClassesType interface.
 */
export declare function instanceOfCopyMenuItemClassesType(value: object): boolean;
export declare function CopyMenuItemClassesTypeFromJSON(json: any): CopyMenuItemClassesType;
export declare function CopyMenuItemClassesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMenuItemClassesType;
export declare function CopyMenuItemClassesTypeToJSON(value?: CopyMenuItemClassesType | null): any;
