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
import type { ConfigTemplatePreferencesType } from './ConfigTemplatePreferencesType';
import {
    ConfigTemplatePreferencesTypeFromJSON,
    ConfigTemplatePreferencesTypeFromJSONTyped,
    ConfigTemplatePreferencesTypeToJSON,
} from './ConfigTemplatePreferencesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching preferences at the template level.
 * @export
 * @interface TemplatePreferences
 */
export interface TemplatePreferences {
    /**
     * 
     * @type {Links}
     * @memberof TemplatePreferences
     */
    links?: Links;
    /**
     * 
     * @type {ConfigTemplatePreferencesType}
     * @memberof TemplatePreferences
     */
    templatePreferences?: ConfigTemplatePreferencesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof TemplatePreferences
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TemplatePreferences interface.
 */
export function instanceOfTemplatePreferences(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplatePreferencesFromJSON(json: any): TemplatePreferences {
    return TemplatePreferencesFromJSONTyped(json, false);
}

export function TemplatePreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplatePreferences {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'templatePreferences': !exists(json, 'templatePreferences') ? undefined : ConfigTemplatePreferencesTypeFromJSON(json['templatePreferences']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TemplatePreferencesToJSON(value?: TemplatePreferences | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'templatePreferences': ConfigTemplatePreferencesTypeToJSON(value.templatePreferences),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
