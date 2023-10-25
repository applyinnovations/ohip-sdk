/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface TranslationTextType80
 */
export interface TranslationTextType80 {
    /**
     * Default text with Character length from 0 to 80.
     * @type {string}
     * @memberof TranslationTextType80
     */
    defaultText?: string;
    /**
     * Language code for the translation.
     * @type {Array<TranslationsTextTypeInner>}
     * @memberof TranslationTextType80
     */
    translatedTexts?: Array<TranslationsTextTypeInner>;
}

/**
 * Check if a given object implements the TranslationTextType80 interface.
 */
export function instanceOfTranslationTextType80(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationTextType80FromJSON(json: any): TranslationTextType80 {
    return TranslationTextType80FromJSONTyped(json, false);
}

export function TranslationTextType80FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType80 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultText': !exists(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !exists(json, 'translatedTexts') ? undefined : ((json['translatedTexts'] as Array<any>).map(TranslationsTextTypeInnerFromJSON)),
    };
}

export function TranslationTextType80ToJSON(value?: TranslationTextType80 | null): any {
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

