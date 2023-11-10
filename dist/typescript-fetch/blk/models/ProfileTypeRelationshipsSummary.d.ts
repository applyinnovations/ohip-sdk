/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RelationshipInfoSummaryType } from './RelationshipInfoSummaryType';
/**
 * Contains a collection of profiles that have a relationship with this profile.
 * @export
 * @interface ProfileTypeRelationshipsSummary
 */
export interface ProfileTypeRelationshipsSummary {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeRelationshipsSummary
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeRelationshipsSummary
     */
    hasMore?: boolean;
    /**
     * A collection of the profiles summary that have a relationship with this profile.
     * @type {Array<RelationshipInfoSummaryType>}
     * @memberof ProfileTypeRelationshipsSummary
     */
    relationship?: Array<RelationshipInfoSummaryType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeRelationshipsSummary
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypeRelationshipsSummary interface.
 */
export declare function instanceOfProfileTypeRelationshipsSummary(value: object): boolean;
export declare function ProfileTypeRelationshipsSummaryFromJSON(json: any): ProfileTypeRelationshipsSummary;
export declare function ProfileTypeRelationshipsSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeRelationshipsSummary;
export declare function ProfileTypeRelationshipsSummaryToJSON(value?: ProfileTypeRelationshipsSummary | null): any;
