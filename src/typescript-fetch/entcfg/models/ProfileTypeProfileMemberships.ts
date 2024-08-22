/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileMembershipType } from './ProfileMembershipType';
import {
    ProfileMembershipTypeFromJSON,
    ProfileMembershipTypeFromJSONTyped,
    ProfileMembershipTypeToJSON,
} from './ProfileMembershipType';

/**
 * List of loyalty program(s) the profile is subscribed to.
 * @export
 * @interface ProfileTypeProfileMemberships
 */
export interface ProfileTypeProfileMemberships {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @type {Array<ProfileMembershipType>}
     * @memberof ProfileTypeProfileMemberships
     */
    profileMembership?: Array<ProfileMembershipType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeProfileMemberships
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeProfileMemberships
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeProfileMemberships
     */
    count?: number;
}

/**
 * Check if a given object implements the ProfileTypeProfileMemberships interface.
 */
export function instanceOfProfileTypeProfileMemberships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeProfileMembershipsFromJSON(json: any): ProfileTypeProfileMemberships {
    return ProfileTypeProfileMembershipsFromJSONTyped(json, false);
}

export function ProfileTypeProfileMembershipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeProfileMemberships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileMembership': !exists(json, 'profileMembership') ? undefined : ((json['profileMembership'] as Array<any>).map(ProfileMembershipTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ProfileTypeProfileMembershipsToJSON(value?: ProfileTypeProfileMemberships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileMembership': value.profileMembership === undefined ? undefined : ((value.profileMembership as Array<any>).map(ProfileMembershipTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}

