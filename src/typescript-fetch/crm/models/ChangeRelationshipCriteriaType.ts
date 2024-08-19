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
import type { ChangeRelationsInfoType } from './ChangeRelationsInfoType';
import {
    ChangeRelationsInfoTypeFromJSON,
    ChangeRelationsInfoTypeFromJSONTyped,
    ChangeRelationsInfoTypeToJSON,
} from './ChangeRelationsInfoType';

/**
 * Information about the changes in relationship for the profile
 * @export
 * @interface ChangeRelationshipCriteriaType
 */
export interface ChangeRelationshipCriteriaType {
    /**
     * 
     * @type {ChangeRelationsInfoType}
     * @memberof ChangeRelationshipCriteriaType
     */
    changeRelationship?: ChangeRelationsInfoType;
    /**
     * Relationship identifier.
     * @type {string}
     * @memberof ChangeRelationshipCriteriaType
     */
    relationshipID?: string;
    /**
     * Indicates the type of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof ChangeRelationshipCriteriaType
     */
    sourceRelation?: string;
    /**
     * Displays the description of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof ChangeRelationshipCriteriaType
     */
    sourceRelationDescription?: string;
    /**
     * Indicates the type of existing relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof ChangeRelationshipCriteriaType
     */
    targetRelation?: string;
    /**
     * Displays the description of existing relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof ChangeRelationshipCriteriaType
     */
    targetRelationDescription?: string;
}

/**
 * Check if a given object implements the ChangeRelationshipCriteriaType interface.
 */
export function instanceOfChangeRelationshipCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeRelationshipCriteriaTypeFromJSON(json: any): ChangeRelationshipCriteriaType {
    return ChangeRelationshipCriteriaTypeFromJSONTyped(json, false);
}

export function ChangeRelationshipCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRelationshipCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeRelationship': !exists(json, 'changeRelationship') ? undefined : ChangeRelationsInfoTypeFromJSON(json['changeRelationship']),
        'relationshipID': !exists(json, 'relationshipID') ? undefined : json['relationshipID'],
        'sourceRelation': !exists(json, 'sourceRelation') ? undefined : json['sourceRelation'],
        'sourceRelationDescription': !exists(json, 'sourceRelationDescription') ? undefined : json['sourceRelationDescription'],
        'targetRelation': !exists(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !exists(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}

export function ChangeRelationshipCriteriaTypeToJSON(value?: ChangeRelationshipCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeRelationship': ChangeRelationsInfoTypeToJSON(value.changeRelationship),
        'relationshipID': value.relationshipID,
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}

