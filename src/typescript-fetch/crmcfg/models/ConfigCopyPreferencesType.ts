/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeListType } from './CodeListType';
import {
    CodeListTypeFromJSON,
    CodeListTypeFromJSONTyped,
    CodeListTypeToJSON,
} from './CodeListType';
import type { ConfigTemplatePreferenceIDType } from './ConfigTemplatePreferenceIDType';
import {
    ConfigTemplatePreferenceIDTypeFromJSON,
    ConfigTemplatePreferenceIDTypeFromJSONTyped,
    ConfigTemplatePreferenceIDTypeToJSON,
} from './ConfigTemplatePreferenceIDType';

/**
 * Copy instructions for copying template preferences to hotel(s)
 * @export
 * @interface ConfigCopyPreferencesType
 */
export interface ConfigCopyPreferencesType {
    /**
     * 
     * @type {CodeListType}
     * @memberof ConfigCopyPreferencesType
     */
    hotelCodes?: CodeListType;
    /**
     * Template preference to be copied to the hotel(s).
     * @type {Array<ConfigTemplatePreferenceIDType>}
     * @memberof ConfigCopyPreferencesType
     */
    templatePreferences?: Array<ConfigTemplatePreferenceIDType>;
}

/**
 * Check if a given object implements the ConfigCopyPreferencesType interface.
 */
export function instanceOfConfigCopyPreferencesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigCopyPreferencesTypeFromJSON(json: any): ConfigCopyPreferencesType {
    return ConfigCopyPreferencesTypeFromJSONTyped(json, false);
}

export function ConfigCopyPreferencesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigCopyPreferencesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : CodeListTypeFromJSON(json['hotelCodes']),
        'templatePreferences': !exists(json, 'templatePreferences') ? undefined : ((json['templatePreferences'] as Array<any>).map(ConfigTemplatePreferenceIDTypeFromJSON)),
    };
}

export function ConfigCopyPreferencesTypeToJSON(value?: ConfigCopyPreferencesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelCodes': CodeListTypeToJSON(value.hotelCodes),
        'templatePreferences': value.templatePreferences === undefined ? undefined : ((value.templatePreferences as Array<any>).map(ConfigTemplatePreferenceIDTypeToJSON)),
    };
}
