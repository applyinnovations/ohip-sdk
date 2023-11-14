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
import type { DuplicateExternalSubscriptionsListType } from './DuplicateExternalSubscriptionsListType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching subscriptions where the same OPERA profile is linked to multiple external profiles within the same external system.
 * @export
 * @interface DuplicateExternalSubscriptions
 */
export interface DuplicateExternalSubscriptions {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof DuplicateExternalSubscriptions
     */
    count?: number;
    /**
     *
     * @type {DuplicateExternalSubscriptionsListType}
     * @memberof DuplicateExternalSubscriptions
     */
    duplicateExternalSubscriptionsList?: DuplicateExternalSubscriptionsListType;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof DuplicateExternalSubscriptions
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof DuplicateExternalSubscriptions
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof DuplicateExternalSubscriptions
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof DuplicateExternalSubscriptions
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof DuplicateExternalSubscriptions
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof DuplicateExternalSubscriptions
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof DuplicateExternalSubscriptions
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the DuplicateExternalSubscriptions interface.
 */
export declare function instanceOfDuplicateExternalSubscriptions(value: object): boolean;
export declare function DuplicateExternalSubscriptionsFromJSON(json: any): DuplicateExternalSubscriptions;
export declare function DuplicateExternalSubscriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DuplicateExternalSubscriptions;
export declare function DuplicateExternalSubscriptionsToJSON(value?: DuplicateExternalSubscriptions | null): any;