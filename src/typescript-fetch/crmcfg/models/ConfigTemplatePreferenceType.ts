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
/**
 * Base details common between both template and property level preferences.
 * @export
 * @interface ConfigTemplatePreferenceType
 */
export interface ConfigTemplatePreferenceType {
    /**
     * The description about the preference.
     * @type {string}
     * @memberof ConfigTemplatePreferenceType
     */
    description?: string;
    /**
     * Specifies the preference code.
     * @type {string}
     * @memberof ConfigTemplatePreferenceType
     */
    code?: string;
    /**
     * Specifies the preference group the preference belongs to.
     * @type {string}
     * @memberof ConfigTemplatePreferenceType
     */
    preferenceGroup?: string;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {string}
     * @memberof ConfigTemplatePreferenceType
     */
    preferenceSubGroup?: string;
    /**
     * Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS.
     * @type {boolean}
     * @memberof ConfigTemplatePreferenceType
     */
    housekeeping?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ConfigTemplatePreferenceType
     */
    orderSequence?: number;
    /**
     * Specifies whether the preference is to be available for selection at all properties .
     * @type {boolean}
     * @memberof ConfigTemplatePreferenceType
     */
    global?: boolean;
}

/**
 * Check if a given object implements the ConfigTemplatePreferenceType interface.
 */
export function instanceOfConfigTemplatePreferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigTemplatePreferenceTypeFromJSON(json: any): ConfigTemplatePreferenceType {
    return ConfigTemplatePreferenceTypeFromJSONTyped(json, false);
}

export function ConfigTemplatePreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigTemplatePreferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'preferenceGroup': !exists(json, 'preferenceGroup') ? undefined : json['preferenceGroup'],
        'preferenceSubGroup': !exists(json, 'preferenceSubGroup') ? undefined : json['preferenceSubGroup'],
        'housekeeping': !exists(json, 'housekeeping') ? undefined : json['housekeeping'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'global': !exists(json, 'global') ? undefined : json['global'],
    };
}

export function ConfigTemplatePreferenceTypeToJSON(value?: ConfigTemplatePreferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'code': value.code,
        'preferenceGroup': value.preferenceGroup,
        'preferenceSubGroup': value.preferenceSubGroup,
        'housekeeping': value.housekeeping,
        'orderSequence': value.orderSequence,
        'global': value.global,
    };
}
