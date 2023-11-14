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
import type { PreferenceTypeType } from './PreferenceTypeType';
import {
    PreferenceTypeTypeFromJSON,
    PreferenceTypeTypeFromJSONTyped,
    PreferenceTypeTypeToJSON,
} from './PreferenceTypeType';

/**
 * List of customer preferences.
 * @export
 * @interface CompanyProfileTypePreferenceCollection
 */
export interface CompanyProfileTypePreferenceCollection {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypePreferenceCollection
     */
    count?: number;
    /**
     * Collection of Detailed information on preferences of the customer.
     * @type {Array<PreferenceTypeType>}
     * @memberof CompanyProfileTypePreferenceCollection
     */
    preferenceType?: Array<PreferenceTypeType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypePreferenceCollection
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CompanyProfileTypePreferenceCollection interface.
 */
export function instanceOfCompanyProfileTypePreferenceCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyProfileTypePreferenceCollectionFromJSON(json: any): CompanyProfileTypePreferenceCollection {
    return CompanyProfileTypePreferenceCollectionFromJSONTyped(json, false);
}

export function CompanyProfileTypePreferenceCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypePreferenceCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'preferenceType': !exists(json, 'preferenceType') ? undefined : ((json['preferenceType'] as Array<any>).map(PreferenceTypeTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CompanyProfileTypePreferenceCollectionToJSON(value?: CompanyProfileTypePreferenceCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'preferenceType': value.preferenceType === undefined ? undefined : ((value.preferenceType as Array<any>).map(PreferenceTypeTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
