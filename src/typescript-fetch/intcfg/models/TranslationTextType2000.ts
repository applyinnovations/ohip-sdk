/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationsTextTypeInner } from './TranslationsTextTypeInner';
import {
    TranslationsTextTypeInnerFromJSON,
    TranslationsTextTypeInnerFromJSONTyped,
    TranslationsTextTypeInnerToJSON,
} from './TranslationsTextTypeInner';

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
export function instanceOfTranslationTextType2000(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationTextType2000FromJSON(json: any): TranslationTextType2000 {
    return TranslationTextType2000FromJSONTyped(json, false);
}

export function TranslationTextType2000FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType2000 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultText': !exists(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !exists(json, 'translatedTexts') ? undefined : ((json['translatedTexts'] as Array<any>).map(TranslationsTextTypeInnerFromJSON)),
    };
}

export function TranslationTextType2000ToJSON(value?: TranslationTextType2000 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultText': value.defaultText,
        'translatedTexts': value.translatedTexts === undefined ? undefined : ((value.translatedTexts as Array<any>).map(TranslationsTextTypeInnerToJSON)),
    };
}

