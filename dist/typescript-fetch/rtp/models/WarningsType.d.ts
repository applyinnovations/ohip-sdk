/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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