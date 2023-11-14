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
import type { DatabaseIDListType } from './DatabaseIDListType';
import {
    DatabaseIDListTypeFromJSON,
    DatabaseIDListTypeFromJSONTyped,
    DatabaseIDListTypeToJSON,
} from './DatabaseIDListType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * Criteria for searching profile subscriptions.
 * @export
 * @interface SynchronizeProfileSubscriptionsCriteriaType
 */
export interface SynchronizeProfileSubscriptionsCriteriaType {
    /**
     * 
     * @type {DatabaseIDListType}
     * @memberof SynchronizeProfileSubscriptionsCriteriaType
     */
    databaseIds?: DatabaseIDListType;
    /**
     * 
     * @type {ProfileId}
     * @memberof SynchronizeProfileSubscriptionsCriteriaType
     */
    profileId?: ProfileId;
}

/**
 * Check if a given object implements the SynchronizeProfileSubscriptionsCriteriaType interface.
 */
export function instanceOfSynchronizeProfileSubscriptionsCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SynchronizeProfileSubscriptionsCriteriaTypeFromJSON(json: any): SynchronizeProfileSubscriptionsCriteriaType {
    return SynchronizeProfileSubscriptionsCriteriaTypeFromJSONTyped(json, false);
}

export function SynchronizeProfileSubscriptionsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SynchronizeProfileSubscriptionsCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'databaseIds': !exists(json, 'databaseIds') ? undefined : DatabaseIDListTypeFromJSON(json['databaseIds']),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
    };
}

export function SynchronizeProfileSubscriptionsCriteriaTypeToJSON(value?: SynchronizeProfileSubscriptionsCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'databaseIds': DatabaseIDListTypeToJSON(value.databaseIds),
        'profileId': ProfileIdToJSON(value.profileId),
    };
}
