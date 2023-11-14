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
import type { ConfigExclusivePrefCodeAndGroupType } from './ConfigExclusivePrefCodeAndGroupType';
import {
    ConfigExclusivePrefCodeAndGroupTypeFromJSON,
    ConfigExclusivePrefCodeAndGroupTypeFromJSONTyped,
    ConfigExclusivePrefCodeAndGroupTypeToJSON,
} from './ConfigExclusivePrefCodeAndGroupType';

/**
 * Copy instructions for copying template Exclusive preferences to hotel(s)
 * @export
 * @interface ConfigCopyExclusivePreferencesType
 */
export interface ConfigCopyExclusivePreferencesType {
    /**
     * 
     * @type {CodeListType}
     * @memberof ConfigCopyExclusivePreferencesType
     */
    hotelCodes?: CodeListType;
    /**
     * Template Exclusive preference to be copied to the hotel(s).
     * @type {Array<ConfigExclusivePrefCodeAndGroupType>}
     * @memberof ConfigCopyExclusivePreferencesType
     */
    templateExclusivePreference?: Array<ConfigExclusivePrefCodeAndGroupType>;
}

/**
 * Check if a given object implements the ConfigCopyExclusivePreferencesType interface.
 */
export function instanceOfConfigCopyExclusivePreferencesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigCopyExclusivePreferencesTypeFromJSON(json: any): ConfigCopyExclusivePreferencesType {
    return ConfigCopyExclusivePreferencesTypeFromJSONTyped(json, false);
}

export function ConfigCopyExclusivePreferencesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigCopyExclusivePreferencesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : CodeListTypeFromJSON(json['hotelCodes']),
        'templateExclusivePreference': !exists(json, 'templateExclusivePreference') ? undefined : ((json['templateExclusivePreference'] as Array<any>).map(ConfigExclusivePrefCodeAndGroupTypeFromJSON)),
    };
}

export function ConfigCopyExclusivePreferencesTypeToJSON(value?: ConfigCopyExclusivePreferencesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelCodes': CodeListTypeToJSON(value.hotelCodes),
        'templateExclusivePreference': value.templateExclusivePreference === undefined ? undefined : ((value.templateExclusivePreference as Array<any>).map(ConfigExclusivePrefCodeAndGroupTypeToJSON)),
    };
}
