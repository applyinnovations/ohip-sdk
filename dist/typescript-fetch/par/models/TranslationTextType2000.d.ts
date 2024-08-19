/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface TranslationTextType2000
 */
export interface TranslationTextType2000 {
    /**
     * Default text with Character length from 0 to 2000.
     * @type {string}
     * @memberof TranslationTextType2000
     */
    defaultText?: string;
    /**
     * Language code for the translation.
     * @type {Array<TranslationsTextTypeInner>}
     * @memberof TranslationTextType2000
     */
    translatedTexts?: Array<TranslationsTextTypeInner>;
}
/**
 * Check if a given object implements the TranslationTextType2000 interface.
 */
export declare function instanceOfTranslationTextType2000(value: object): boolean;
export declare function TranslationTextType2000FromJSON(json: any): TranslationTextType2000;
export declare function TranslationTextType2000FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType2000;
export declare function TranslationTextType2000ToJSON(value?: TranslationTextType2000 | null): any;
