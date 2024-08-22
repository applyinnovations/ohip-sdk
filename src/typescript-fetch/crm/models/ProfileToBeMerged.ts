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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
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
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Profile Resource will be merged.
 * @export
 * @interface ProfileToBeMerged
 */
export interface ProfileToBeMerged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ProfileToBeMerged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ProfileType}
     * @memberof ProfileToBeMerged
     */
    profileDetails?: ProfileType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ProfileToBeMerged
     */
    victimProfileId?: Array<UniqueIDType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ProfileToBeMerged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ProfileToBeMerged interface.
 */
export function instanceOfProfileToBeMerged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileToBeMergedFromJSON(json: any): ProfileToBeMerged {
    return ProfileToBeMergedFromJSONTyped(json, false);
}

export function ProfileToBeMergedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileToBeMerged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'profileDetails': !exists(json, 'profileDetails') ? undefined : ProfileTypeFromJSON(json['profileDetails']),
        'victimProfileId': !exists(json, 'victimProfileId') ? undefined : ((json['victimProfileId'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ProfileToBeMergedToJSON(value?: ProfileToBeMerged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'profileDetails': ProfileTypeToJSON(value.profileDetails),
        'victimProfileId': value.victimProfileId === undefined ? undefined : ((value.victimProfileId as Array<any>).map(UniqueIDTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

