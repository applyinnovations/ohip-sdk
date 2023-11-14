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
/**
 * Base details common between both template and property level preferences.
 * @export
 * @interface ConfigHotelPreferenceType
 */
export interface ConfigHotelPreferenceType {
    /**
     * Specifies the preference code.
     * @type {string}
     * @memberof ConfigHotelPreferenceType
     */
    code?: string;
    /**
     * The description about the preference.
     * @type {string}
     * @memberof ConfigHotelPreferenceType
     */
    description?: string;
    /**
     * Specifies the hotel code for which the preference is specified.
     * @type {string}
     * @memberof ConfigHotelPreferenceType
     */
    hotelId?: string;
    /**
     * Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS.
     * @type {boolean}
     * @memberof ConfigHotelPreferenceType
     */
    housekeeping?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ConfigHotelPreferenceType
     */
    orderSequence?: number;
    /**
     * Specifies the preference group the preference belongs to.
     * @type {string}
     * @memberof ConfigHotelPreferenceType
     */
    preferenceGroup?: string;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {string}
     * @memberof ConfigHotelPreferenceType
     */
    preferenceSubGroup?: string;
}

/**
 * Check if a given object implements the ConfigHotelPreferenceType interface.
 */
export function instanceOfConfigHotelPreferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigHotelPreferenceTypeFromJSON(json: any): ConfigHotelPreferenceType {
    return ConfigHotelPreferenceTypeFromJSONTyped(json, false);
}

export function ConfigHotelPreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigHotelPreferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'housekeeping': !exists(json, 'housekeeping') ? undefined : json['housekeeping'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'preferenceGroup': !exists(json, 'preferenceGroup') ? undefined : json['preferenceGroup'],
        'preferenceSubGroup': !exists(json, 'preferenceSubGroup') ? undefined : json['preferenceSubGroup'],
    };
}

export function ConfigHotelPreferenceTypeToJSON(value?: ConfigHotelPreferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'housekeeping': value.housekeeping,
        'orderSequence': value.orderSequence,
        'preferenceGroup': value.preferenceGroup,
        'preferenceSubGroup': value.preferenceSubGroup,
    };
}
