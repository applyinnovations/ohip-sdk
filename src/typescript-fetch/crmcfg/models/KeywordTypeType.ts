/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Contains Common Master configuration detail.
 * @export
 * @interface KeywordTypeType
 */
export interface KeywordTypeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof KeywordTypeType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof KeywordTypeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof KeywordTypeType
     */
    displayOrder?: number;
    /**
     * Indicates if the KEYWORD TYPE is to be copied from a Company Master to a Company Subsidiary.
     * @type {boolean}
     * @memberof KeywordTypeType
     */
    masterSubKeyword?: boolean;
}

/**
 * Check if a given object implements the KeywordTypeType interface.
 */
export function instanceOfKeywordTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeywordTypeTypeFromJSON(json: any): KeywordTypeType {
    return KeywordTypeTypeFromJSONTyped(json, false);
}

export function KeywordTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
        'masterSubKeyword': !exists(json, 'masterSubKeyword') ? undefined : json['masterSubKeyword'],
    };
}

export function KeywordTypeTypeToJSON(value?: KeywordTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': TranslationTextType2000ToJSON(value.description),
        'displayOrder': value.displayOrder,
        'masterSubKeyword': value.masterSubKeyword,
    };
}

