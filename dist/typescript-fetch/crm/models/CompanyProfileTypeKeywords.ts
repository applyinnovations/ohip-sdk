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
import type { KeywordType } from './KeywordType';
import {
    KeywordTypeFromJSON,
    KeywordTypeFromJSONTyped,
    KeywordTypeToJSON,
} from './KeywordType';

/**
 * List of customer keywords.
 * @export
 * @interface CompanyProfileTypeKeywords
 */
export interface CompanyProfileTypeKeywords {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeKeywords
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CompanyProfileTypeKeywords
     */
    hasMore?: boolean;
    /**
     * Collection of keywords attached to the profile.
     * @type {Array<KeywordType>}
     * @memberof CompanyProfileTypeKeywords
     */
    keyword?: Array<KeywordType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeKeywords
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CompanyProfileTypeKeywords interface.
 */
export function instanceOfCompanyProfileTypeKeywords(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyProfileTypeKeywordsFromJSON(json: any): CompanyProfileTypeKeywords {
    return CompanyProfileTypeKeywordsFromJSONTyped(json, false);
}

export function CompanyProfileTypeKeywordsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeKeywords {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'keyword': !exists(json, 'keyword') ? undefined : ((json['keyword'] as Array<any>).map(KeywordTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CompanyProfileTypeKeywordsToJSON(value?: CompanyProfileTypeKeywords | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'keyword': value.keyword === undefined ? undefined : ((value.keyword as Array<any>).map(KeywordTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

