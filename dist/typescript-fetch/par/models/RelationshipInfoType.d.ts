/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ChangeRelationsType } from './ChangeRelationsType';
import type { MasterAccountInfoType } from './MasterAccountInfoType';
import type { RelationshipProfileType } from './RelationshipProfileType';
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
export declare function instanceOfRelationshipInfoType(value: object): boolean;
export declare function RelationshipInfoTypeFromJSON(json: any): RelationshipInfoType;
export declare function RelationshipInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipInfoType;
export declare function RelationshipInfoTypeToJSON(value?: RelationshipInfoType | null): any;
