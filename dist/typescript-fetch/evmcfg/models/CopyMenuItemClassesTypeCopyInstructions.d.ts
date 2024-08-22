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
/**
 * Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored.
 * @export
 * @interface CopyMenuItemClassesTypeCopyInstructions
 */
export interface CopyMenuItemClassesTypeCopyInstructions {
    /**
     * When true, this will copy the source block's room allocation counts to the new block.
     * @type {boolean}
     * @memberof CopyMenuItemClassesTypeCopyInstructions
     */
    associatedItems?: boolean;
}
/**
 * Check if a given object implements the CopyMenuItemClassesTypeCopyInstructions interface.
 */
export declare function instanceOfCopyMenuItemClassesTypeCopyInstructions(value: object): boolean;
export declare function CopyMenuItemClassesTypeCopyInstructionsFromJSON(json: any): CopyMenuItemClassesTypeCopyInstructions;
export declare function CopyMenuItemClassesTypeCopyInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMenuItemClassesTypeCopyInstructions;
export declare function CopyMenuItemClassesTypeCopyInstructionsToJSON(value?: CopyMenuItemClassesTypeCopyInstructions | null): any;
