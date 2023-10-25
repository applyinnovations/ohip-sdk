/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeProfileMemberships
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeProfileMemberships
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on memberships for the customer.
     * @type {Array<ProfileMembershipType>}
     * @memberof ProfileTypeProfileMemberships
     */
    profileMembership?: Array<ProfileMembershipType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeProfileMemberships
     */
    totalResults?: number;
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
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'profileMembership': !exists(json, 'profileMembership') ? undefined : ((json['profileMembership'] as Array<any>).map(ProfileMembershipTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
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
        
        'count': value.count,
        'hasMore': value.hasMore,
        'profileMembership': value.profileMembership === undefined ? undefined : ((value.profileMembership as Array<any>).map(ProfileMembershipTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

