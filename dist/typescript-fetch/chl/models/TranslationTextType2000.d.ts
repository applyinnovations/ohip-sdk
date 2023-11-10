/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     *
     * @type {TranslationsTextType}
     * @memberof TranslationTextType2000
     */
    translatedTexts?: TranslationsTextType;
}
/**
 * Check if a given object implements the TranslationTextType2000 interface.
 */
export declare function instanceOfTranslationTextType2000(value: object): boolean;
export declare function TranslationTextType2000FromJSON(json: any): TranslationTextType2000;
export declare function TranslationTextType2000FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType2000;
export declare function TranslationTextType2000ToJSON(value?: TranslationTextType2000 | null): any;
