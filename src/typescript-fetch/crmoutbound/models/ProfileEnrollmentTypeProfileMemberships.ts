/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
 * @interface ProfileEnrollmentTypeProfileMemberships
 */
export interface ProfileEnrollmentTypeProfileMemberships {
    /**
     * Collection of Detailed information on memberships for the customer.
     * @type {Array<ProfileMembershipType>}
     * @memberof ProfileEnrollmentTypeProfileMemberships
     */
    profileMembership?: Array<ProfileMembershipType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileEnrollmentTypeProfileMemberships
     */
    allRowsFetched?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileEnrollmentTypeProfileMemberships
     */
    totalRows?: number;
}

/**
 * Check if a given object implements the ProfileEnrollmentTypeProfileMemberships interface.
 */
export function instanceOfProfileEnrollmentTypeProfileMemberships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileEnrollmentTypeProfileMembershipsFromJSON(json: any): ProfileEnrollmentTypeProfileMemberships {
    return ProfileEnrollmentTypeProfileMembershipsFromJSONTyped(json, false);
}

export function ProfileEnrollmentTypeProfileMembershipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileEnrollmentTypeProfileMemberships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileMembership': !exists(json, 'profileMembership') ? undefined : ((json['profileMembership'] as Array<any>).map(ProfileMembershipTypeFromJSON)),
        'allRowsFetched': !exists(json, 'allRowsFetched') ? undefined : json['allRowsFetched'],
        'totalRows': !exists(json, 'totalRows') ? undefined : json['totalRows'],
    };
}

export function ProfileEnrollmentTypeProfileMembershipsToJSON(value?: ProfileEnrollmentTypeProfileMemberships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileMembership': value.profileMembership === undefined ? undefined : ((value.profileMembership as Array<any>).map(ProfileMembershipTypeToJSON)),
        'allRowsFetched': value.allRowsFetched,
        'totalRows': value.totalRows,
    };
}
