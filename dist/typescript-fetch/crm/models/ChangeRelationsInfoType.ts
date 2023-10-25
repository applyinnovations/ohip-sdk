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
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Detailed information regarding to be changed relationships for the profile.
 * @export
 * @interface ChangeRelationsInfoType
 */
export interface ChangeRelationsInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ChangeRelationsInfoType
     */
    changeProfileID?: UniqueIDType;
    /**
     * Indicates if this relationship is the primary relationship.
     * @type {boolean}
     * @memberof ChangeRelationsInfoType
     */
    primary?: boolean;
    /**
     * 
     * @type {ProfileTypeType}
     * @memberof ChangeRelationsInfoType
     */
    sourceProfileType?: ProfileTypeType;
    /**
     * Indicates the type of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof ChangeRelationsInfoType
     */
    sourceRelation?: string;
    /**
     * Displays the description of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true.
     * @type {string}
     * @memberof ChangeRelationsInfoType
     */
    sourceRelationDescription?: string;
    /**
     * 
     * @type {ProfileTypeType}
     * @memberof ChangeRelationsInfoType
     */
    targetProfileType?: ProfileTypeType;
    /**
     * Indicates the type of to be changed relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof ChangeRelationsInfoType
     */
    targetRelation?: string;
    /**
     * Displays the description of to be changed relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof ChangeRelationsInfoType
     */
    targetRelationDescription?: string;
}

/**
 * Check if a given object implements the ChangeRelationsInfoType interface.
 */
export function instanceOfChangeRelationsInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeRelationsInfoTypeFromJSON(json: any): ChangeRelationsInfoType {
    return ChangeRelationsInfoTypeFromJSONTyped(json, false);
}

export function ChangeRelationsInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRelationsInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeProfileID': !exists(json, 'changeProfileID') ? undefined : UniqueIDTypeFromJSON(json['changeProfileID']),
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'sourceProfileType': !exists(json, 'sourceProfileType') ? undefined : ProfileTypeTypeFromJSON(json['sourceProfileType']),
        'sourceRelation': !exists(json, 'sourceRelation') ? undefined : json['sourceRelation'],
        'sourceRelationDescription': !exists(json, 'sourceRelationDescription') ? undefined : json['sourceRelationDescription'],
        'targetProfileType': !exists(json, 'targetProfileType') ? undefined : ProfileTypeTypeFromJSON(json['targetProfileType']),
        'targetRelation': !exists(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !exists(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}

export function ChangeRelationsInfoTypeToJSON(value?: ChangeRelationsInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeProfileID': UniqueIDTypeToJSON(value.changeProfileID),
        'primary': value.primary,
        'sourceProfileType': ProfileTypeTypeToJSON(value.sourceProfileType),
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetProfileType': ProfileTypeTypeToJSON(value.targetProfileType),
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}

