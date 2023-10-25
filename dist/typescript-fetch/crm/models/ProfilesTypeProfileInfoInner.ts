/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileAllowedActionType } from './ProfileAllowedActionType';
import {
    ProfileAllowedActionTypeFromJSON,
    ProfileAllowedActionTypeFromJSONTyped,
    ProfileAllowedActionTypeToJSON,
} from './ProfileAllowedActionType';
import type { ProfileType } from './ProfileType';
import {
    ProfileTypeFromJSON,
    ProfileTypeFromJSONTyped,
    ProfileTypeToJSON,
} from './ProfileType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface ProfilesTypeProfileInfoInner
 */
export interface ProfilesTypeProfileInfoInner {
    /**
     * Allowed actions for profile operations.
     * @type {Array<ProfileAllowedActionType>}
     * @memberof ProfilesTypeProfileInfoInner
     */
    allowedActions?: Array<ProfileAllowedActionType>;
    /**
     * Chain code associated with the profile.
     * @type {string}
     * @memberof ProfilesTypeProfileInfoInner
     */
    chainCode?: string;
    /**
     * 
     * @type {ProfileType}
     * @memberof ProfilesTypeProfileInfoInner
     */
    profile?: ProfileType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ProfilesTypeProfileInfoInner
     */
    profileIdList?: Array<UniqueIDType>;
}

/**
 * Check if a given object implements the ProfilesTypeProfileInfoInner interface.
 */
export function instanceOfProfilesTypeProfileInfoInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfilesTypeProfileInfoInnerFromJSON(json: any): ProfilesTypeProfileInfoInner {
    return ProfilesTypeProfileInfoInnerFromJSONTyped(json, false);
}

export function ProfilesTypeProfileInfoInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesTypeProfileInfoInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedActions': !exists(json, 'allowedActions') ? undefined : ((json['allowedActions'] as Array<any>).map(ProfileAllowedActionTypeFromJSON)),
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'profile': !exists(json, 'profile') ? undefined : ProfileTypeFromJSON(json['profile']),
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
    };
}

export function ProfilesTypeProfileInfoInnerToJSON(value?: ProfilesTypeProfileInfoInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowedActions': value.allowedActions === undefined ? undefined : ((value.allowedActions as Array<any>).map(ProfileAllowedActionTypeToJSON)),
        'chainCode': value.chainCode,
        'profile': ProfileTypeToJSON(value.profile),
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
    };
}

