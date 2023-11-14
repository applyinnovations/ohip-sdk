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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { ProfileMembershipType } from './ProfileMembershipType';
import {
    ProfileMembershipTypeFromJSON,
    ProfileMembershipTypeFromJSONTyped,
    ProfileMembershipTypeToJSON,
} from './ProfileMembershipType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for change/update membership. This object contains collection of memberships,Success,Warnings and Errors related to this operation
 * @export
 * @interface ChangedMembership
 */
export interface ChangedMembership {
    /**
     * 
     * @type {Links}
     * @memberof ChangedMembership
     */
    links?: Links;
    /**
     * Detailed information of membership related to the profile
     * @type {Array<ProfileMembershipType>}
     * @memberof ChangedMembership
     */
    profileMemberships?: Array<ProfileMembershipType>;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChangedMembership
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChangedMembership interface.
 */
export function instanceOfChangedMembership(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangedMembershipFromJSON(json: any): ChangedMembership {
    return ChangedMembershipFromJSONTyped(json, false);
}

export function ChangedMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangedMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'profileMemberships': !exists(json, 'profileMemberships') ? undefined : ((json['profileMemberships'] as Array<any>).map(ProfileMembershipTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChangedMembershipToJSON(value?: ChangedMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'profileMemberships': value.profileMemberships === undefined ? undefined : ((value.profileMemberships as Array<any>).map(ProfileMembershipTypeToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
