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
import type { RelationshipInfoType } from './RelationshipInfoType';
import {
    RelationshipInfoTypeFromJSON,
    RelationshipInfoTypeFromJSONTyped,
    RelationshipInfoTypeToJSON,
} from './RelationshipInfoType';

/**
 * Contains a collection of profiles that have a relationship with this profile.
 * @export
 * @interface CompanyProfileTypeRelationships
 */
export interface CompanyProfileTypeRelationships {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeRelationships
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CompanyProfileTypeRelationships
     */
    hasMore?: boolean;
    /**
     * A collection of the profiles that have a relationship with this profile.
     * @type {Array<RelationshipInfoType>}
     * @memberof CompanyProfileTypeRelationships
     */
    relationship?: Array<RelationshipInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeRelationships
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CompanyProfileTypeRelationships interface.
 */
export function instanceOfCompanyProfileTypeRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyProfileTypeRelationshipsFromJSON(json: any): CompanyProfileTypeRelationships {
    return CompanyProfileTypeRelationshipsFromJSONTyped(json, false);
}

export function CompanyProfileTypeRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'relationship': !exists(json, 'relationship') ? undefined : ((json['relationship'] as Array<any>).map(RelationshipInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CompanyProfileTypeRelationshipsToJSON(value?: CompanyProfileTypeRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'relationship': value.relationship === undefined ? undefined : ((value.relationship as Array<any>).map(RelationshipInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

