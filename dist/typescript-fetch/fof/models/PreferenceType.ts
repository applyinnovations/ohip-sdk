/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Guest Preference details for the profile.
 * @export
 * @interface PreferenceType
 */
export interface PreferenceType {
    /**
     * Specifies whether to copy the reservation preference to the profile or not.
     * @type {boolean}
     * @memberof PreferenceType
     */
    copyToProfile?: boolean;
    /**
     * Preference Description for display purposes.
     * @type {string}
     * @memberof PreferenceType
     */
    description?: string;
    /**
     * Specifies the count of preferences excluded for the attached reservation preference.
     * @type {number}
     * @memberof PreferenceType
     */
    excludedPreferencesCount?: number;
    /**
     * Whether this preference is property specific or not.
     * @type {boolean}
     * @memberof PreferenceType
     */
    global?: boolean;
    /**
     * If specified preference belongs to the Hotels listed, otherwise it is a global preference.
     * @type {Array<string>}
     * @memberof PreferenceType
     */
    hotels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PreferenceType
     */
    preferenceId?: string;
    /**
     * Preference value for display purposes.
     * @type {string}
     * @memberof PreferenceType
     */
    preferenceValue?: string;
    /**
     * Source of the preference.
     * @type {string}
     * @memberof PreferenceType
     */
    source?: string;
}

/**
 * Check if a given object implements the PreferenceType interface.
 */
export function instanceOfPreferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreferenceTypeFromJSON(json: any): PreferenceType {
    return PreferenceTypeFromJSONTyped(json, false);
}

export function PreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyToProfile': !exists(json, 'copyToProfile') ? undefined : json['copyToProfile'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'excludedPreferencesCount': !exists(json, 'excludedPreferencesCount') ? undefined : json['excludedPreferencesCount'],
        'global': !exists(json, 'global') ? undefined : json['global'],
        'hotels': !exists(json, 'hotels') ? undefined : json['hotels'],
        'preferenceId': !exists(json, 'preferenceId') ? undefined : json['preferenceId'],
        'preferenceValue': !exists(json, 'preferenceValue') ? undefined : json['preferenceValue'],
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function PreferenceTypeToJSON(value?: PreferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyToProfile': value.copyToProfile,
        'description': value.description,
        'excludedPreferencesCount': value.excludedPreferencesCount,
        'global': value.global,
        'hotels': value.hotels,
        'preferenceId': value.preferenceId,
        'preferenceValue': value.preferenceValue,
        'source': value.source,
    };
}

