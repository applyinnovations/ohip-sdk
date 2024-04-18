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
/**
 * 
 * @export
 * @interface ProfileAdditionalInfoType
 */
export interface ProfileAdditionalInfoType {
    /**
     * Business Title or Position of the profile.
     * @type {string}
     * @memberof ProfileAdditionalInfoType
     */
    businessPosition?: string;
    /**
     * Indicates if the profile is a Master Account for one or more Subsidiary Accounts.
     * @type {boolean}
     * @memberof ProfileAdditionalInfoType
     */
    masterAccount?: boolean;
    /**
     * Primary Owner of the profile
     * @type {string}
     * @memberof ProfileAdditionalInfoType
     */
    primaryOwnerCode?: string;
    /**
     * Indicates if the profile is a Subsidiary Account of a Master/Parent Account.
     * @type {boolean}
     * @memberof ProfileAdditionalInfoType
     */
    subsidiaryAccount?: boolean;
    /**
     * Territory associated to the profile.
     * @type {string}
     * @memberof ProfileAdditionalInfoType
     */
    territory?: string;
}

/**
 * Check if a given object implements the ProfileAdditionalInfoType interface.
 */
export function instanceOfProfileAdditionalInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileAdditionalInfoTypeFromJSON(json: any): ProfileAdditionalInfoType {
    return ProfileAdditionalInfoTypeFromJSONTyped(json, false);
}

export function ProfileAdditionalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileAdditionalInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPosition': !exists(json, 'businessPosition') ? undefined : json['businessPosition'],
        'masterAccount': !exists(json, 'masterAccount') ? undefined : json['masterAccount'],
        'primaryOwnerCode': !exists(json, 'primaryOwnerCode') ? undefined : json['primaryOwnerCode'],
        'subsidiaryAccount': !exists(json, 'subsidiaryAccount') ? undefined : json['subsidiaryAccount'],
        'territory': !exists(json, 'territory') ? undefined : json['territory'],
    };
}

export function ProfileAdditionalInfoTypeToJSON(value?: ProfileAdditionalInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'businessPosition': value.businessPosition,
        'masterAccount': value.masterAccount,
        'primaryOwnerCode': value.primaryOwnerCode,
        'subsidiaryAccount': value.subsidiaryAccount,
        'territory': value.territory,
    };
}
