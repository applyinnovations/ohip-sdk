/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Language code for the translation.
 * @export
 * @interface TranslationsTextTypeInner
 */
export interface TranslationsTextTypeInner {
    /**
     * Language identification.
     * @type {string}
     * @memberof TranslationsTextTypeInner
     */
    language?: string;
    /**
     * Used for Character Strings, length 0 to 2000.
     * @type {string}
     * @memberof TranslationsTextTypeInner
     */
    value?: string;
}

/**
 * Check if a given object implements the TranslationsTextTypeInner interface.
 */
export function instanceOfTranslationsTextTypeInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationsTextTypeInnerFromJSON(json: any): TranslationsTextTypeInner {
    return TranslationsTextTypeInnerFromJSONTyped(json, false);
}

export function TranslationsTextTypeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsTextTypeInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': !exists(json, 'language') ? undefined : json['language'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function TranslationsTextTypeInnerToJSON(value?: TranslationsTextTypeInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
        'value': value.value,
    };
}

