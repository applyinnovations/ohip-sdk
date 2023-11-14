/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType50 } from './TranslationTextType50';
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
     * Language Code is a user definable code that identifies a language.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    languageCode?: string;
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
     * Report Date Language if filled will represent correctly in the report language date elements that might be spelled out, like the day-of-week or the month.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    reportDateLanguage?: string;
    /**
     * Translation Language Code is required for the Translation Studio program to display language into which object has been translated.
     * @type {string}
     * @memberof ConfigLanguageType
     */
    translationLanguageCode?: string;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {boolean}
     * @memberof ConfigLanguageType
     */
    useAsAlternateLanguage?: boolean;
}
/**
 * Check if a given object implements the ConfigLanguageType interface.
 */
export declare function instanceOfConfigLanguageType(value: object): boolean;
export declare function ConfigLanguageTypeFromJSON(json: any): ConfigLanguageType;
export declare function ConfigLanguageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigLanguageType;
export declare function ConfigLanguageTypeToJSON(value?: ConfigLanguageType | null): any;