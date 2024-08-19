/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationsTextTypeInner } from './TranslationsTextTypeInner';
/**
 * Contains Multiple translated texts and language codes.
 * @export
 * @interface TranslationTextType50
 */
export interface TranslationTextType50 {
    /**
     * Default text with Character length from 0 to 50.
     * @type {string}
     * @memberof TranslationTextType50
     */
    defaultText?: string;
    /**
     * Language code for the translation.
     * @type {Array<TranslationsTextTypeInner>}
     * @memberof TranslationTextType50
     */
    translatedTexts?: Array<TranslationsTextTypeInner>;
}
/**
 * Check if a given object implements the TranslationTextType50 interface.
 */
export declare function instanceOfTranslationTextType50(value: object): boolean;
export declare function TranslationTextType50FromJSON(json: any): TranslationTextType50;
export declare function TranslationTextType50FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType50;
export declare function TranslationTextType50ToJSON(value?: TranslationTextType50 | null): any;
