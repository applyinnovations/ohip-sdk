/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RelationshipInfoSummaryType } from './RelationshipInfoSummaryType';
import {
    RelationshipInfoSummaryTypeFromJSON,
    RelationshipInfoSummaryTypeFromJSONTyped,
    RelationshipInfoSummaryTypeToJSON,
} from './RelationshipInfoSummaryType';

/**
 * Contains a collection of profiles that have a relationship with this profile.
 * @export
 * @interface ProfileTypeRelationshipsSummary
 */
export interface ProfileTypeRelationshipsSummary {
    /**
     * A collection of the profiles summary that have a relationship with this profile.
     * @type {Array<RelationshipInfoSummaryType>}
     * @memberof ProfileTypeRelationshipsSummary
     */
    relationship?: Array<RelationshipInfoSummaryType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeRelationshipsSummary
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeRelationshipsSummary
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeRelationshipsSummary
     */
    count?: number;
}

/**
 * Check if a given object implements the ProfileTypeRelationshipsSummary interface.
 */
export function instanceOfProfileTypeRelationshipsSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeRelationshipsSummaryFromJSON(json: any): ProfileTypeRelationshipsSummary {
    return ProfileTypeRelationshipsSummaryFromJSONTyped(json, false);
}

export function ProfileTypeRelationshipsSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeRelationshipsSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationship': !exists(json, 'relationship') ? undefined : ((json['relationship'] as Array<any>).map(RelationshipInfoSummaryTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ProfileTypeRelationshipsSummaryToJSON(value?: ProfileTypeRelationshipsSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relationship': value.relationship === undefined ? undefined : ((value.relationship as Array<any>).map(RelationshipInfoSummaryTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
