/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * A collection of the profiles that have a relationship with this profile.
     * @type {Array<RelationshipInfoType>}
     * @memberof ProfileTypeRelationships
     */
    relationship?: Array<RelationshipInfoType>;
}
/**
 * Check if a given object implements the ProfileTypeRelationships interface.
 */
export declare function instanceOfProfileTypeRelationships(value: object): boolean;
export declare function ProfileTypeRelationshipsFromJSON(json: any): ProfileTypeRelationships;
export declare function ProfileTypeRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeRelationships;
export declare function ProfileTypeRelationshipsToJSON(value?: ProfileTypeRelationships | null): any;