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
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ProfileSubscriptionListType } from './ProfileSubscriptionListType';
import {
    ProfileSubscriptionListTypeFromJSON,
    ProfileSubscriptionListTypeFromJSONTyped,
    ProfileSubscriptionListTypeToJSON,
} from './ProfileSubscriptionListType';

/**
 * Contains subscription details about an OPERA Profile that is linked to multiple external profiles within the same external system.
 * @export
 * @interface DuplicateExternalSubscriptionsType
 */
export interface DuplicateExternalSubscriptionsType {
    /**
     * Code identifying the external database record which is linked to external systems.
     * @type {string}
     * @memberof DuplicateExternalSubscriptionsType
     */
    databaseId?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof DuplicateExternalSubscriptionsType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ProfileSubscriptionListType}
     * @memberof DuplicateExternalSubscriptionsType
     */
    profileSubscriptions?: ProfileSubscriptionListType;
}

/**
 * Check if a given object implements the DuplicateExternalSubscriptionsType interface.
 */
export function instanceOfDuplicateExternalSubscriptionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DuplicateExternalSubscriptionsTypeFromJSON(json: any): DuplicateExternalSubscriptionsType {
    return DuplicateExternalSubscriptionsTypeFromJSONTyped(json, false);
}

export function DuplicateExternalSubscriptionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DuplicateExternalSubscriptionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'databaseId': !exists(json, 'databaseId') ? undefined : json['databaseId'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'profileSubscriptions': !exists(json, 'profileSubscriptions') ? undefined : ProfileSubscriptionListTypeFromJSON(json['profileSubscriptions']),
    };
}

export function DuplicateExternalSubscriptionsTypeToJSON(value?: DuplicateExternalSubscriptionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'databaseId': value.databaseId,
        'profileId': ProfileIdToJSON(value.profileId),
        'profileSubscriptions': ProfileSubscriptionListTypeToJSON(value.profileSubscriptions),
    };
}
