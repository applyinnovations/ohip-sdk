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
import type { ProfileMembershipType } from './ProfileMembershipType';
import {
    ProfileMembershipTypeFromJSON,
    ProfileMembershipTypeFromJSONTyped,
    ProfileMembershipTypeToJSON,
} from './ProfileMembershipType';

/**
 * List of loyalty program(s) the profile is subscribed to.
 * @export
 * @interface CompanyProfileTypeProfileMemberships
 */
export interface CompanyProfileTypeProfileMemberships {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeProfileMemberships
     */
    count?: number;
    /**
     * Collection of Detailed information on memberships for the customer.
     * @type {Array<ProfileMembershipType>}
     * @memberof CompanyProfileTypeProfileMemberships
     */
    profileMembership?: Array<ProfileMembershipType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeProfileMemberships
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CompanyProfileTypeProfileMemberships interface.
 */
export function instanceOfCompanyProfileTypeProfileMemberships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyProfileTypeProfileMembershipsFromJSON(json: any): CompanyProfileTypeProfileMemberships {
    return CompanyProfileTypeProfileMembershipsFromJSONTyped(json, false);
}

export function CompanyProfileTypeProfileMembershipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeProfileMemberships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'profileMembership': !exists(json, 'profileMembership') ? undefined : ((json['profileMembership'] as Array<any>).map(ProfileMembershipTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CompanyProfileTypeProfileMembershipsToJSON(value?: CompanyProfileTypeProfileMemberships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'profileMembership': value.profileMembership === undefined ? undefined : ((value.profileMembership as Array<any>).map(ProfileMembershipTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

