/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ParameterType } from './ParameterType';
/**
 * Collection of generic Name-Value-Pair parameters.
 * @export
 * @interface ParametersType
 */
export interface ParametersType extends Array<ParameterType> {
}
/**
 * Check if a given object implements the ParametersType interface.
 */
export declare function instanceOfParametersType(value: object): boolean;
export declare function ParametersTypeFromJSON(json: any): ParametersType;
export declare function ParametersTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParametersType;
export declare function ParametersTypeToJSON(value?: ParametersType | null): any;
