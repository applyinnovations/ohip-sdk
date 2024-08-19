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
import type { RelationshipInfoType } from './RelationshipInfoType';
/**
 * Contains a collection of profiles that have a relationship with this profile.
 * @export
 * @interface ProfileTypeRelationships
 */
export interface ProfileTypeRelationships {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeRelationships
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeRelationships
     */
    hasMore?: boolean;
    /**
     * A collection of the profiles that have a relationship with this profile.
     * @type {Array<RelationshipInfoType>}
     * @memberof ProfileTypeRelationships
     */
    relationship?: Array<RelationshipInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeRelationships
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypeRelationships interface.
 */
export declare function instanceOfProfileTypeRelationships(value: object): boolean;
export declare function ProfileTypeRelationshipsFromJSON(json: any): ProfileTypeRelationships;
export declare function ProfileTypeRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeRelationships;
export declare function ProfileTypeRelationshipsToJSON(value?: ProfileTypeRelationships | null): any;
