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
import type { PersonNameTypeType } from './PersonNameTypeType';
import {
    PersonNameTypeTypeFromJSON,
    PersonNameTypeTypeFromJSONTyped,
    PersonNameTypeTypeToJSON,
} from './PersonNameTypeType';

/**
 * This provides name information for a person.
 * @export
 * @interface ProfileNameType
 */
export interface ProfileNameType {
    /**
     * Full display Name.
     * @type {string}
     * @memberof ProfileNameType
     */
    fullName?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof ProfileNameType
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @type {string}
     * @memberof ProfileNameType
     */
    middleName?: string;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof ProfileNameType
     */
    name?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ProfileNameType
     */
    namePrefix?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @type {string}
     * @memberof ProfileNameType
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof ProfileNameType
     */
    nameTitle?: string;
    /**
     * 
     * @type {PersonNameTypeType}
     * @memberof ProfileNameType
     */
    nameType?: PersonNameTypeType;
}

/**
 * Check if a given object implements the ProfileNameType interface.
 */
export function instanceOfProfileNameType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileNameTypeFromJSON(json: any): ProfileNameType {
    return ProfileNameTypeFromJSONTyped(json, false);
}

export function ProfileNameTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileNameType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namePrefix': !exists(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !exists(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !exists(json, 'nameType') ? undefined : PersonNameTypeTypeFromJSON(json['nameType']),
    };
}

export function ProfileNameTypeToJSON(value?: ProfileNameType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fullName': value.fullName,
        'givenName': value.givenName,
        'middleName': value.middleName,
        'name': value.name,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameType': PersonNameTypeTypeToJSON(value.nameType),
    };
}

