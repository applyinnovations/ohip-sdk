/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockOwnershipType } from './BlockOwnershipType';
import {
    BlockOwnershipTypeFromJSON,
    BlockOwnershipTypeFromJSONTyped,
    BlockOwnershipTypeToJSON,
} from './BlockOwnershipType';
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
 * @interface BlockOwnerType
 */
export interface BlockOwnerType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    department?: CodeDescriptionType;
    /**
     * 
     * @type {EmailInfoType}
     * @memberof BlockOwnerType
     */
    email?: EmailInfoType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    hotel?: CodeDescriptionType;
    /**
     * 
     * @type {PersonNameType}
     * @memberof BlockOwnerType
     */
    name?: PersonNameType;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof BlockOwnerType
     */
    ownerCode?: string;
    /**
     * 
     * @type {BlockOwnershipType}
     * @memberof BlockOwnerType
     */
    ownership?: BlockOwnershipType;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof BlockOwnerType
     */
    phone?: TelephoneInfoType;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof BlockOwnerType
     */
    primary?: boolean;
    /**
     * 
     * @type {ProfileId}
     * @memberof BlockOwnerType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    relationship?: CodeDescriptionType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockOwnerType
     */
    userId?: UniqueIDType;
    /**
     * Unique application user name of the owner.
     * @type {string}
     * @memberof BlockOwnerType
     */
    userName?: string;
}

/**
 * Check if a given object implements the BlockOwnerType interface.
 */
export function instanceOfBlockOwnerType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockOwnerTypeFromJSON(json: any): BlockOwnerType {
    return BlockOwnerTypeFromJSONTyped(json, false);
}

export function BlockOwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOwnerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'department': !exists(json, 'department') ? undefined : CodeDescriptionTypeFromJSON(json['department']),
        'email': !exists(json, 'email') ? undefined : EmailInfoTypeFromJSON(json['email']),
        'hotel': !exists(json, 'hotel') ? undefined : CodeDescriptionTypeFromJSON(json['hotel']),
        'name': !exists(json, 'name') ? undefined : PersonNameTypeFromJSON(json['name']),
        'ownerCode': !exists(json, 'ownerCode') ? undefined : json['ownerCode'],
        'ownership': !exists(json, 'ownership') ? undefined : BlockOwnershipTypeFromJSON(json['ownership']),
        'phone': !exists(json, 'phone') ? undefined : TelephoneInfoTypeFromJSON(json['phone']),
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'relationship': !exists(json, 'relationship') ? undefined : CodeDescriptionTypeFromJSON(json['relationship']),
        'userId': !exists(json, 'userId') ? undefined : UniqueIDTypeFromJSON(json['userId']),
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
    };
}

export function BlockOwnerTypeToJSON(value?: BlockOwnerType | null): any {
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
        'ownership': BlockOwnershipTypeToJSON(value.ownership),
        'phone': TelephoneInfoTypeToJSON(value.phone),
        'primary': value.primary,
        'profileId': ProfileIdToJSON(value.profileId),
        'relationship': CodeDescriptionTypeToJSON(value.relationship),
        'userId': UniqueIDTypeToJSON(value.userId),
        'userName': value.userName,
    };
}

