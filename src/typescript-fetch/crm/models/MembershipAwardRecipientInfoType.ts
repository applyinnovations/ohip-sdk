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
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';

/**
 * Type holds details of member.
 * @export
 * @interface MembershipAwardRecipientInfoType
 */
export interface MembershipAwardRecipientInfoType {
    /**
     * 
     * @type {AddressInfoType}
     * @memberof MembershipAwardRecipientInfoType
     */
    addressInfo?: AddressInfoType;
    /**
     * It returns a Company Name,If the member is associated with a company.
     * @type {string}
     * @memberof MembershipAwardRecipientInfoType
     */
    companyName?: string;
    /**
     * 
     * @type {ProfileNameType}
     * @memberof MembershipAwardRecipientInfoType
     */
    memberInfo?: ProfileNameType;
    /**
     * Phone number
     * @type {string}
     * @memberof MembershipAwardRecipientInfoType
     */
    phoneNumber?: string;
}

/**
 * Check if a given object implements the MembershipAwardRecipientInfoType interface.
 */
export function instanceOfMembershipAwardRecipientInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardRecipientInfoTypeFromJSON(json: any): MembershipAwardRecipientInfoType {
    return MembershipAwardRecipientInfoTypeFromJSONTyped(json, false);
}

export function MembershipAwardRecipientInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardRecipientInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressInfo': !exists(json, 'addressInfo') ? undefined : AddressInfoTypeFromJSON(json['addressInfo']),
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'memberInfo': !exists(json, 'memberInfo') ? undefined : ProfileNameTypeFromJSON(json['memberInfo']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}

export function MembershipAwardRecipientInfoTypeToJSON(value?: MembershipAwardRecipientInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressInfo': AddressInfoTypeToJSON(value.addressInfo),
        'companyName': value.companyName,
        'memberInfo': ProfileNameTypeToJSON(value.memberInfo),
        'phoneNumber': value.phoneNumber,
    };
}

