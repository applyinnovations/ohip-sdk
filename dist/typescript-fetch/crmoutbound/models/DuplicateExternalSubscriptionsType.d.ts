/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileId } from './ProfileId';
import type { ProfileSubscriptionListType } from './ProfileSubscriptionListType';
/**
 * Contains subscription details about an OPERA Profile that is linked to multiple external profiles within the same external system.
 * @export
 * @interface DuplicateExternalSubscriptionsType
 */
export interface DuplicateExternalSubscriptionsType {
    /**
     *
     * @type {ProfileId}
     * @memberof DuplicateExternalSubscriptionsType
     */
    profileId?: ProfileId;
    /**
     * Code identifying the external database record which is linked to external systems.
     * @type {string}
     * @memberof DuplicateExternalSubscriptionsType
     */
    databaseId?: string;
    /**
     *
     * @type {ProfileSubscriptionListType}
     * @memberof DuplicateExternalSubscriptionsType
     */
    profileSubscriptions?: ProfileSubscriptionListType;
}
/**
 * Check if a given object implements the DuplicateExternalSubscriptionsType interface.
 */
export declare function instanceOfDuplicateExternalSubscriptionsType(value: object): boolean;
export declare function DuplicateExternalSubscriptionsTypeFromJSON(json: any): DuplicateExternalSubscriptionsType;
export declare function DuplicateExternalSubscriptionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DuplicateExternalSubscriptionsType;
export declare function DuplicateExternalSubscriptionsTypeToJSON(value?: DuplicateExternalSubscriptionsType | null): any;