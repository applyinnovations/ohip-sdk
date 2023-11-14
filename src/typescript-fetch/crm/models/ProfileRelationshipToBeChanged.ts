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
import type { ChangeRelationshipCriteriaType } from './ChangeRelationshipCriteriaType';
import {
    ChangeRelationshipCriteriaTypeFromJSON,
    ChangeRelationshipCriteriaTypeFromJSONTyped,
    ChangeRelationshipCriteriaTypeToJSON,
} from './ChangeRelationshipCriteriaType';
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
 * Request object for changing profile relationship.
 * @export
 * @interface ProfileRelationshipToBeChanged
 */
export interface ProfileRelationshipToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof ProfileRelationshipToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {ChangeRelationshipCriteriaType}
     * @memberof ProfileRelationshipToBeChanged
     */
    relationship?: ChangeRelationshipCriteriaType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ProfileRelationshipToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ProfileRelationshipToBeChanged interface.
 */
export function instanceOfProfileRelationshipToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileRelationshipToBeChangedFromJSON(json: any): ProfileRelationshipToBeChanged {
    return ProfileRelationshipToBeChangedFromJSONTyped(json, false);
}

export function ProfileRelationshipToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRelationshipToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'relationship': !exists(json, 'relationship') ? undefined : ChangeRelationshipCriteriaTypeFromJSON(json['relationship']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ProfileRelationshipToBeChangedToJSON(value?: ProfileRelationshipToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'relationship': ChangeRelationshipCriteriaTypeToJSON(value.relationship),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
