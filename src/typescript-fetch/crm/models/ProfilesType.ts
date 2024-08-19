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
import type { ProfilesTypeProfileInfoInner } from './ProfilesTypeProfileInfoInner';
import {
    ProfilesTypeProfileInfoInnerFromJSON,
    ProfilesTypeProfileInfoInnerFromJSONTyped,
    ProfilesTypeProfileInfoInnerToJSON,
} from './ProfilesTypeProfileInfoInner';

/**
 * A collection of Profile objects or Unique IDs of Profiles.
 * @export
 * @interface ProfilesType
 */
export interface ProfilesType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfilesType
     */
    count?: number;
    /**
     * A collection of Profiles or Unique IDs of Profiles.
     * @type {Array<ProfilesTypeProfileInfoInner>}
     * @memberof ProfilesType
     */
    profileInfo?: Array<ProfilesTypeProfileInfoInner>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfilesType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfilesType interface.
 */
export function instanceOfProfilesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfilesTypeFromJSON(json: any): ProfilesType {
    return ProfilesTypeFromJSONTyped(json, false);
}

export function ProfilesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'profileInfo': !exists(json, 'profileInfo') ? undefined : ((json['profileInfo'] as Array<any>).map(ProfilesTypeProfileInfoInnerFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfilesTypeToJSON(value?: ProfilesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'profileInfo': value.profileInfo === undefined ? undefined : ((value.profileInfo as Array<any>).map(ProfilesTypeProfileInfoInnerToJSON)),
        'totalResults': value.totalResults,
    };
}

