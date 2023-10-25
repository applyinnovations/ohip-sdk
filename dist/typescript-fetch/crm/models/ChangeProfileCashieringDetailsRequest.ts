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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ProfileCashieringDetailType } from './ProfileCashieringDetailType';
import {
    ProfileCashieringDetailTypeFromJSON,
    ProfileCashieringDetailTypeFromJSONTyped,
    ProfileCashieringDetailTypeToJSON,
} from './ProfileCashieringDetailType';
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
 * 
 * @export
 * @interface ChangeProfileCashieringDetailsRequest
 */
export interface ChangeProfileCashieringDetailsRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeProfileCashieringDetailsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Cashiering details for the profile.
     * @type {Array<ProfileCashieringDetailType>}
     * @memberof ChangeProfileCashieringDetailsRequest
     */
    profileCashieringDetailList?: Array<ProfileCashieringDetailType>;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ChangeProfileCashieringDetailsRequest
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeProfileCashieringDetailsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeProfileCashieringDetailsRequest interface.
 */
export function instanceOfChangeProfileCashieringDetailsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeProfileCashieringDetailsRequestFromJSON(json: any): ChangeProfileCashieringDetailsRequest {
    return ChangeProfileCashieringDetailsRequestFromJSONTyped(json, false);
}

export function ChangeProfileCashieringDetailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeProfileCashieringDetailsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'profileCashieringDetailList': !exists(json, 'profileCashieringDetailList') ? undefined : ((json['profileCashieringDetailList'] as Array<any>).map(ProfileCashieringDetailTypeFromJSON)),
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeProfileCashieringDetailsRequestToJSON(value?: ChangeProfileCashieringDetailsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'profileCashieringDetailList': value.profileCashieringDetailList === undefined ? undefined : ((value.profileCashieringDetailList as Array<any>).map(ProfileCashieringDetailTypeToJSON)),
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

