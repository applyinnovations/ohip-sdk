/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MasterAccountInfoType } from './MasterAccountInfoType';
import type { RelationshipProfileSummaryType } from './RelationshipProfileSummaryType';
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
export declare function instanceOfRelationshipInfoSummaryType(value: object): boolean;
export declare function RelationshipInfoSummaryTypeFromJSON(json: any): RelationshipInfoSummaryType;
export declare function RelationshipInfoSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipInfoSummaryType;
export declare function RelationshipInfoSummaryTypeToJSON(value?: RelationshipInfoSummaryType | null): any;
