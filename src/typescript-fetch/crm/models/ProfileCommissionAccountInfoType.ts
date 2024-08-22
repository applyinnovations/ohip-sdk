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
import type { BankAccountType } from './BankAccountType';
import {
    BankAccountTypeFromJSON,
    BankAccountTypeFromJSONTyped,
    BankAccountTypeToJSON,
} from './BankAccountType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * Profile commission info which contains bank account and commission code details
 * @export
 * @interface ProfileCommissionAccountInfoType
 */
export interface ProfileCommissionAccountInfoType {
    /**
     * 
     * @type {BankAccountType}
     * @memberof ProfileCommissionAccountInfoType
     */
    bankAccount?: BankAccountType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ProfileCommissionAccountInfoType
     */
    commissionCode?: CodeDescriptionType;
    /**
     * 
     * @type {ProfileId}
     * @memberof ProfileCommissionAccountInfoType
     */
    profileId?: ProfileId;
}

/**
 * Check if a given object implements the ProfileCommissionAccountInfoType interface.
 */
export function instanceOfProfileCommissionAccountInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileCommissionAccountInfoTypeFromJSON(json: any): ProfileCommissionAccountInfoType {
    return ProfileCommissionAccountInfoTypeFromJSONTyped(json, false);
}

export function ProfileCommissionAccountInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCommissionAccountInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankAccount': !exists(json, 'bankAccount') ? undefined : BankAccountTypeFromJSON(json['bankAccount']),
        'commissionCode': !exists(json, 'commissionCode') ? undefined : CodeDescriptionTypeFromJSON(json['commissionCode']),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
    };
}

export function ProfileCommissionAccountInfoTypeToJSON(value?: ProfileCommissionAccountInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankAccount': BankAccountTypeToJSON(value.bankAccount),
        'commissionCode': CodeDescriptionTypeToJSON(value.commissionCode),
        'profileId': ProfileIdToJSON(value.profileId),
    };
}

