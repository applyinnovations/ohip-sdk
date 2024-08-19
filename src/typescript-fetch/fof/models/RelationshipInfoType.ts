/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChangeRelationsType } from './ChangeRelationsType';
import {
    ChangeRelationsTypeFromJSON,
    ChangeRelationsTypeFromJSONTyped,
    ChangeRelationsTypeToJSON,
} from './ChangeRelationsType';
import type { MasterAccountInfoType } from './MasterAccountInfoType';
import {
    MasterAccountInfoTypeFromJSON,
    MasterAccountInfoTypeFromJSONTyped,
    MasterAccountInfoTypeToJSON,
} from './MasterAccountInfoType';
import type { RelationshipProfileType } from './RelationshipProfileType';
import {
    RelationshipProfileTypeFromJSON,
    RelationshipProfileTypeFromJSONTyped,
    RelationshipProfileTypeToJSON,
} from './RelationshipProfileType';

/**
 * Relationship Type contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles.
 * @export
 * @interface RelationshipInfoType
 */
export interface RelationshipInfoType {
    /**
     * 
     * @type {ChangeRelationsType}
     * @memberof RelationshipInfoType
     */
    changeRelationship?: ChangeRelationsType;
    /**
     * Relationship identifier.
     * @type {string}
     * @memberof RelationshipInfoType
     */
    id?: string;
    /**
     * 
     * @type {MasterAccountInfoType}
     * @memberof RelationshipInfoType
     */
    masterAccountInfo?: MasterAccountInfoType;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoType
     */
    relation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoType
     */
    relationDescription?: string;
    /**
     * 
     * @type {RelationshipProfileType}
     * @memberof RelationshipInfoType
     */
    relationshipProfile?: RelationshipProfileType;
    /**
     * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @type {string}
     * @memberof RelationshipInfoType
     */
    targetRelation?: string;
    /**
     * Displays the description of the target relation(Target Profile).
     * @type {string}
     * @memberof RelationshipInfoType
     */
    targetRelationDescription?: string;
}

/**
 * Check if a given object implements the RelationshipInfoType interface.
 */
export function instanceOfRelationshipInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RelationshipInfoTypeFromJSON(json: any): RelationshipInfoType {
    return RelationshipInfoTypeFromJSONTyped(json, false);
}

export function RelationshipInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeRelationship': !exists(json, 'changeRelationship') ? undefined : ChangeRelationsTypeFromJSON(json['changeRelationship']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'masterAccountInfo': !exists(json, 'masterAccountInfo') ? undefined : MasterAccountInfoTypeFromJSON(json['masterAccountInfo']),
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'relationDescription': !exists(json, 'relationDescription') ? undefined : json['relationDescription'],
        'relationshipProfile': !exists(json, 'relationshipProfile') ? undefined : RelationshipProfileTypeFromJSON(json['relationshipProfile']),
        'targetRelation': !exists(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !exists(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}

export function RelationshipInfoTypeToJSON(value?: RelationshipInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeRelationship': ChangeRelationsTypeToJSON(value.changeRelationship),
        'id': value.id,
        'masterAccountInfo': MasterAccountInfoTypeToJSON(value.masterAccountInfo),
        'relation': value.relation,
        'relationDescription': value.relationDescription,
        'relationshipProfile': RelationshipProfileTypeToJSON(value.relationshipProfile),
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}

