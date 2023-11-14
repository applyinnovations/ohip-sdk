/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * 
     * @type {RelationshipProfileSummaryType}
     * @memberof RelationshipInfoSummaryType
     */
    relationshipProfile?: RelationshipProfileSummaryType;
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
        
        'masterAccountDetails': !exists(json, 'masterAccountDetails') ? undefined : MasterAccountInfoTypeFromJSON(json['masterAccountDetails']),
        'relationshipID': !exists(json, 'relationshipID') ? undefined : json['relationshipID'],
        'relationshipProfile': !exists(json, 'relationshipProfile') ? undefined : RelationshipProfileSummaryTypeFromJSON(json['relationshipProfile']),
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
        
        'masterAccountDetails': MasterAccountInfoTypeToJSON(value.masterAccountDetails),
        'relationshipID': value.relationshipID,
        'relationshipProfile': RelationshipProfileSummaryTypeToJSON(value.relationshipProfile),
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}
