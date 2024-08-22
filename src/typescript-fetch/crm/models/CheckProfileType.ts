/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CheckProfileResultType } from './CheckProfileResultType';
import {
    CheckProfileResultTypeFromJSON,
    CheckProfileResultTypeFromJSONTyped,
    CheckProfileResultTypeToJSON,
} from './CheckProfileResultType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * Profile and the status of its allowed actions, attached records, and indicators.
 * @export
 * @interface CheckProfileType
 */
export interface CheckProfileType {
    /**
     * 
     * @type {ProfileId}
     * @memberof CheckProfileType
     */
    profileId?: ProfileId;
    /**
     * Collection of status of allowed actions, attached records, and indicators of the profile.
     * @type {Array<CheckProfileResultType>}
     * @memberof CheckProfileType
     */
    results?: Array<CheckProfileResultType>;
}

/**
 * Check if a given object implements the CheckProfileType interface.
 */
export function instanceOfCheckProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckProfileTypeFromJSON(json: any): CheckProfileType {
    return CheckProfileTypeFromJSONTyped(json, false);
}

export function CheckProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(CheckProfileResultTypeFromJSON)),
    };
}

export function CheckProfileTypeToJSON(value?: CheckProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileId': ProfileIdToJSON(value.profileId),
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(CheckProfileResultTypeToJSON)),
    };
}

