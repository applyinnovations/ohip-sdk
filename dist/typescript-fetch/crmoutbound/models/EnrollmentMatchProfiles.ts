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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ProfileEnrollmentType } from './ProfileEnrollmentType';
import {
    ProfileEnrollmentTypeFromJSON,
    ProfileEnrollmentTypeFromJSONTyped,
    ProfileEnrollmentTypeToJSON,
} from './ProfileEnrollmentType';

/**
 * Response object to fetch match profiles for enrollment.
 * @export
 * @interface EnrollmentMatchProfiles
 */
export interface EnrollmentMatchProfiles {
    /**
     * Provide match profile details for enrollment.
     * @type {Array<ProfileEnrollmentType>}
     * @memberof EnrollmentMatchProfiles
     */
    enrollmentMatchProfilesDetail?: Array<ProfileEnrollmentType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof EnrollmentMatchProfiles
     */
    links?: Array<InstanceLink>;
}

/**
 * Check if a given object implements the EnrollmentMatchProfiles interface.
 */
export function instanceOfEnrollmentMatchProfiles(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnrollmentMatchProfilesFromJSON(json: any): EnrollmentMatchProfiles {
    return EnrollmentMatchProfilesFromJSONTyped(json, false);
}

export function EnrollmentMatchProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentMatchProfiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enrollmentMatchProfilesDetail': !exists(json, 'enrollmentMatchProfilesDetail') ? undefined : ((json['enrollmentMatchProfilesDetail'] as Array<any>).map(ProfileEnrollmentTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
    };
}

export function EnrollmentMatchProfilesToJSON(value?: EnrollmentMatchProfiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enrollmentMatchProfilesDetail': value.enrollmentMatchProfilesDetail === undefined ? undefined : ((value.enrollmentMatchProfilesDetail as Array<any>).map(ProfileEnrollmentTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
    };
}

