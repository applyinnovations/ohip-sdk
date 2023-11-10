/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationsTextTypeInner } from './TranslationsTextTypeInner';
/**
 * Language code for the translation.
 * @export
 * @interface TranslationsTextType
 */
export interface TranslationsTextType extends Array<TranslationsTextTypeInner> {
}
/**
 * Check if a given object implements the TranslationsTextType interface.
 */
export declare function instanceOfTranslationsTextType(value: object): boolean;
export declare function TranslationsTextTypeFromJSON(json: any): TranslationsTextType;
export declare function TranslationsTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsTextType;
export declare function TranslationsTextTypeToJSON(value?: TranslationsTextType | null): any;
