/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Language code for the translation.
 * @export
 * @interface TranslationsTextType
 */
export interface TranslationsTextType extends Array<TranslationsTextTypeInner> {
}

/**
 * Check if a given object implements the TranslationsTextType interface.
 */
export function instanceOfTranslationsTextType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationsTextTypeFromJSON(json: any): TranslationsTextType {
    return TranslationsTextTypeFromJSONTyped(json, false);
}

export function TranslationsTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsTextType {
    return json;
}

export function TranslationsTextTypeToJSON(value?: TranslationsTextType | null): any {
    return value;
}
