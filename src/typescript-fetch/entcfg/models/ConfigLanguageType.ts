/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';

/**
 * This gives detailed information about a language.
 * @export
 * @interface ConfigLanguageType
 */
export interface ConfigLanguageType {
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof ConfigLanguageType
     */
    description?: TranslationTextType50;
    /**
     * Translation Language Code is required for the Translation Studio program to display language into which object has been translated.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    translationLanguageCode?: string;
    /**
     * Report Date Language if filled will represent correctly in the report language date elements that might be spelled out, like the day-of-week or the month.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    reportDateLanguage?: string;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {boolean}
     * @memberof ConfigLanguageType
     */
    useAsAlternateLanguage?: boolean;
    /**
     * Geographic, political or cultural region.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    locale?: string;
    /**
     * Description for the locale.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    localeDescription?: string;
    /**
     * Language Code is a user definable code that identifies a language.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    languageCode?: string;
}

/**
 * Check if a given object implements the ConfigLanguageType interface.
 */
export function instanceOfConfigLanguageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigLanguageTypeFromJSON(json: any): ConfigLanguageType {
    return ConfigLanguageTypeFromJSONTyped(json, false);
}

export function ConfigLanguageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigLanguageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : TranslationTextType50FromJSON(json['description']),
        'translationLanguageCode': !exists(json, 'translationLanguageCode') ? undefined : json['translationLanguageCode'],
        'reportDateLanguage': !exists(json, 'reportDateLanguage') ? undefined : json['reportDateLanguage'],
        'useAsAlternateLanguage': !exists(json, 'useAsAlternateLanguage') ? undefined : json['useAsAlternateLanguage'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'localeDescription': !exists(json, 'localeDescription') ? undefined : json['localeDescription'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
    };
}

export function ConfigLanguageTypeToJSON(value?: ConfigLanguageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': TranslationTextType50ToJSON(value.description),
        'translationLanguageCode': value.translationLanguageCode,
        'reportDateLanguage': value.reportDateLanguage,
        'useAsAlternateLanguage': value.useAsAlternateLanguage,
        'locale': value.locale,
        'localeDescription': value.localeDescription,
        'languageCode': value.languageCode,
    };
}

