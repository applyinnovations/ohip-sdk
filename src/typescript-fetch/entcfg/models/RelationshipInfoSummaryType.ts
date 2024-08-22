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
import type { MasterAccountInfoType } from './MasterAccountInfoType';
import {
    MasterAccountInfoTypeFromJSON,
    MasterAccountInfoTypeFromJSONTyped,
    MasterAccountInfoTypeToJSON,
} from './MasterAccountInfoType';
import type { RelationshipProfileSummaryType } from './RelationshipProfileSummaryType';
import {
    RelationshipProfileSummaryTypeFromJSON,
    RelationshipProfileSummaryTypeFromJSONTyped,
    RelationshipProfileSummaryTypeToJSON,
} from './RelationshipProfileSummaryType';

/**
 * RelationshipInfoSummaryType contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles.
 * @export
 * @interface RelationshipInfoSummaryType
 */
export interface RelationshipInfoSummaryType {
    /**
     * 
     * @type {RelationshipProfileSummaryType}
     * @memberof RelationshipInfoSummaryType
     */
    relationshipProfile?: RelationshipProfileSummaryType;
    /**
     * 
     * @type {MasterAccountInfoType}
     * @memberof RelationshipInfoSummaryType
     */
    masterAccountDetails?: MasterAccountInfoType;
    /**
     * Relationship identifier.
     * @type {string}
     * @memberof RelationshipInfoSummaryType
     */
    relationshipID?: string;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoSummaryType
     */
    sourceRelation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoSummaryType
     */
    sourceRelationDescription?: string;
    /**
     * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof RelationshipInfoSummaryType
     */
    targetRelation?: string;
    /**
     * Displays the description of the target relation(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoSummaryType
     */
    targetRelationDescription?: string;
}

/**
 * Check if a given object implements the RelationshipInfoSummaryType interface.
 */
export function instanceOfRelationshipInfoSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RelationshipInfoSummaryTypeFromJSON(json: any): RelationshipInfoSummaryType {
    return RelationshipInfoSummaryTypeFromJSONTyped(json, false);
}

export function RelationshipInfoSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipInfoSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationshipProfile': !exists(json, 'relationshipProfile') ? undefined : RelationshipProfileSummaryTypeFromJSON(json['relationshipProfile']),
        'masterAccountDetails': !exists(json, 'masterAccountDetails') ? undefined : MasterAccountInfoTypeFromJSON(json['masterAccountDetails']),
        'relationshipID': !exists(json, 'relationshipID') ? undefined : json['relationshipID'],
        'sourceRelation': !exists(json, 'sourceRelation') ? undefined : json['sourceRelation'],
        'sourceRelationDescription': !exists(json, 'sourceRelationDescription') ? undefined : json['sourceRelationDescription'],
        'targetRelation': !exists(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !exists(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}

export function RelationshipInfoSummaryTypeToJSON(value?: RelationshipInfoSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relationshipProfile': RelationshipProfileSummaryTypeToJSON(value.relationshipProfile),
        'masterAccountDetails': MasterAccountInfoTypeToJSON(value.masterAccountDetails),
        'relationshipID': value.relationshipID,
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}

