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
import type { ForgetProfileResultListType } from './ForgetProfileResultListType';
import {
    ForgetProfileResultListTypeFromJSON,
    ForgetProfileResultListTypeFromJSONTyped,
    ForgetProfileResultListTypeToJSON,
} from './ForgetProfileResultListType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for validating profiles for forgetting.
 * @export
 * @interface ValidatedForgetProfiles
 */
export interface ValidatedForgetProfiles {
    /**
     * 
     * @type {Links}
     * @memberof ValidatedForgetProfiles
     */
    links?: Links;
    /**
     * 
     * @type {ForgetProfileResultListType}
     * @memberof ValidatedForgetProfiles
     */
    validateForgetProfilesResults?: ForgetProfileResultListType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ValidatedForgetProfiles
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ValidatedForgetProfiles interface.
 */
export function instanceOfValidatedForgetProfiles(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ValidatedForgetProfilesFromJSON(json: any): ValidatedForgetProfiles {
    return ValidatedForgetProfilesFromJSONTyped(json, false);
}

export function ValidatedForgetProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatedForgetProfiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'validateForgetProfilesResults': !exists(json, 'validateForgetProfilesResults') ? undefined : ForgetProfileResultListTypeFromJSON(json['validateForgetProfilesResults']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ValidatedForgetProfilesToJSON(value?: ValidatedForgetProfiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'validateForgetProfilesResults': ForgetProfileResultListTypeToJSON(value.validateForgetProfilesResults),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
