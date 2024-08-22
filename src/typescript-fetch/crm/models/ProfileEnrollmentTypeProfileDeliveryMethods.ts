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
import type { ProfileDeliveryMethod } from './ProfileDeliveryMethod';
import {
    ProfileDeliveryMethodFromJSON,
    ProfileDeliveryMethodFromJSONTyped,
    ProfileDeliveryMethodToJSON,
} from './ProfileDeliveryMethod';

/**
 * List of Delivery methods configured against a Property for this Profile.
 * @export
 * @interface ProfileEnrollmentTypeProfileDeliveryMethods
 */
export interface ProfileEnrollmentTypeProfileDeliveryMethods {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileEnrollmentTypeProfileDeliveryMethods
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileEnrollmentTypeProfileDeliveryMethods
     */
    hasMore?: boolean;
    /**
     * Collection of delivery methods for this Profile.
     * @type {Array<ProfileDeliveryMethod>}
     * @memberof ProfileEnrollmentTypeProfileDeliveryMethods
     */
    profileDeliveryMethod?: Array<ProfileDeliveryMethod>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileEnrollmentTypeProfileDeliveryMethods
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileEnrollmentTypeProfileDeliveryMethods interface.
 */
export function instanceOfProfileEnrollmentTypeProfileDeliveryMethods(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileEnrollmentTypeProfileDeliveryMethodsFromJSON(json: any): ProfileEnrollmentTypeProfileDeliveryMethods {
    return ProfileEnrollmentTypeProfileDeliveryMethodsFromJSONTyped(json, false);
}

export function ProfileEnrollmentTypeProfileDeliveryMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileEnrollmentTypeProfileDeliveryMethods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'profileDeliveryMethod': !exists(json, 'profileDeliveryMethod') ? undefined : ((json['profileDeliveryMethod'] as Array<any>).map(ProfileDeliveryMethodFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileEnrollmentTypeProfileDeliveryMethodsToJSON(value?: ProfileEnrollmentTypeProfileDeliveryMethods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'profileDeliveryMethod': value.profileDeliveryMethod === undefined ? undefined : ((value.profileDeliveryMethod as Array<any>).map(ProfileDeliveryMethodToJSON)),
        'totalResults': value.totalResults,
    };
}

