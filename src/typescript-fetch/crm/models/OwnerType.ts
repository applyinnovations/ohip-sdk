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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { EmailInfoType } from './EmailInfoType';
import {
    EmailInfoTypeFromJSON,
    EmailInfoTypeFromJSONTyped,
    EmailInfoTypeToJSON,
} from './EmailInfoType';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Generic type for information about an owner.
 * @export
 * @interface OwnerType
 */
export interface OwnerType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    department?: CodeDescriptionType;
    /**
     * 
     * @type {EmailInfoType}
     * @memberof OwnerType
     */
    email?: EmailInfoType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    hotel?: CodeDescriptionType;
    /**
     * 
     * @type {PersonNameType}
     * @memberof OwnerType
     */
    name?: PersonNameType;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof OwnerType
     */
    ownerCode?: string;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof OwnerType
     */
    phone?: TelephoneInfoType;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof OwnerType
     */
    primary?: boolean;
    /**
     * 
     * @type {ProfileId}
     * @memberof OwnerType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    relationship?: CodeDescriptionType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof OwnerType
     */
    userId?: UniqueIDType;
    /**
     * Unique application user name of the owner.
     * @type {string}
     * @memberof OwnerType
     */
    userName?: string;
}

/**
 * Check if a given object implements the OwnerType interface.
 */
export function instanceOfOwnerType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OwnerTypeFromJSON(json: any): OwnerType {
    return OwnerTypeFromJSONTyped(json, false);
}

export function OwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OwnerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'department': !exists(json, 'department') ? undefined : CodeDescriptionTypeFromJSON(json['department']),
        'email': !exists(json, 'email') ? undefined : EmailInfoTypeFromJSON(json['email']),
        'hotel': !exists(json, 'hotel') ? undefined : CodeDescriptionTypeFromJSON(json['hotel']),
        'name': !exists(json, 'name') ? undefined : PersonNameTypeFromJSON(json['name']),
        'ownerCode': !exists(json, 'ownerCode') ? undefined : json['ownerCode'],
        'phone': !exists(json, 'phone') ? undefined : TelephoneInfoTypeFromJSON(json['phone']),
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'relationship': !exists(json, 'relationship') ? undefined : CodeDescriptionTypeFromJSON(json['relationship']),
        'userId': !exists(json, 'userId') ? undefined : UniqueIDTypeFromJSON(json['userId']),
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
    };
}

export function OwnerTypeToJSON(value?: OwnerType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'department': CodeDescriptionTypeToJSON(value.department),
        'email': EmailInfoTypeToJSON(value.email),
        'hotel': CodeDescriptionTypeToJSON(value.hotel),
        'name': PersonNameTypeToJSON(value.name),
        'ownerCode': value.ownerCode,
        'phone': TelephoneInfoTypeToJSON(value.phone),
        'primary': value.primary,
        'profileId': ProfileIdToJSON(value.profileId),
        'relationship': CodeDescriptionTypeToJSON(value.relationship),
        'userId': UniqueIDTypeToJSON(value.userId),
        'userName': value.userName,
    };
}

