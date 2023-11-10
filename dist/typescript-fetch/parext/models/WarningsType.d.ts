/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { WarningType } from './WarningType';
/**
 * Used in conjunction with the Success element to define a business error.
 * @export
 * @interface WarningsType
 */
export interface WarningsType extends Array<WarningType> {
}
/**
 * Check if a given object implements the WarningsType interface.
 */
export declare function instanceOfWarningsType(value: object): boolean;
export declare function WarningsTypeFromJSON(json: any): WarningsType;
export declare function WarningsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WarningsType;
export declare function WarningsTypeToJSON(value?: WarningsType | null): any;
