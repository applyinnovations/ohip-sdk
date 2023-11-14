/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationsTextType } from './TranslationsTextType';
import {
    TranslationsTextTypeFromJSON,
    TranslationsTextTypeFromJSONTyped,
    TranslationsTextTypeToJSON,
} from './TranslationsTextType';

/**
 * Contains Multiple translated texts and language codes.
 * @export
 * @interface TranslationTextType4000
 */
export interface TranslationTextType4000 {
    /**
     * Default text with Character length from 0 to 4000.
     * @type {string}
     * @memberof TranslationTextType4000
     */
    defaultText?: string;
    /**
     * 
     * @type {TranslationsTextType}
     * @memberof TranslationTextType4000
     */
    translatedTexts?: TranslationsTextType;
}

/**
 * Check if a given object implements the TranslationTextType4000 interface.
 */
export function instanceOfTranslationTextType4000(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationTextType4000FromJSON(json: any): TranslationTextType4000 {
    return TranslationTextType4000FromJSONTyped(json, false);
}

export function TranslationTextType4000FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationTextType4000 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultText': !exists(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !exists(json, 'translatedTexts') ? undefined : TranslationsTextTypeFromJSON(json['translatedTexts']),
    };
}

export function TranslationTextType4000ToJSON(value?: TranslationTextType4000 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultText': value.defaultText,
        'translatedTexts': TranslationsTextTypeToJSON(value.translatedTexts),
    };
}
