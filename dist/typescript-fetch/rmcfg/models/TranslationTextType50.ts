/* tslint:disable */
/* eslint-disable */
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
export function instanceOfTranslationTextType50(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationTextType50FromJSON(json: any): TranslationTextType50 {
    return TranslationTextType50FromJSONTyped(json, false);
}

export function TranslationTextType50FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType50 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultText': !exists(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !exists(json, 'translatedTexts') ? undefined : ((json['translatedTexts'] as Array<any>).map(TranslationsTextTypeInnerFromJSON)),
    };
}

export function TranslationTextType50ToJSON(value?: TranslationTextType50 | null): any {
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

