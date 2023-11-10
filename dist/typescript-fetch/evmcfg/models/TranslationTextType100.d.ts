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
import type { TranslationsTextType } from './TranslationsTextType';
/**
 * Contains Multiple translated texts and language codes.
 * @export
 * @interface TranslationTextType100
 */
export interface TranslationTextType100 {
    /**
     * Default text with Character length from 0 to 100.
     * @type {string}
     * @memberof TranslationTextType100
     */
    defaultText?: string;
    /**
     *
     * @type {TranslationsTextType}
     * @memberof TranslationTextType100
     */
    translatedTexts?: TranslationsTextType;
}
/**
 * Check if a given object implements the TranslationTextType100 interface.
 */
export declare function instanceOfTranslationTextType100(value: object): boolean;
export declare function TranslationTextType100FromJSON(json: any): TranslationTextType100;
export declare function TranslationTextType100FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType100;
export declare function TranslationTextType100ToJSON(value?: TranslationTextType100 | null): any;
