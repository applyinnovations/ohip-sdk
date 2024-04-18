/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { MembershipAwardListType } from './MembershipAwardListType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching member issued award list.
 * @export
 * @interface MembershipIssueAwards
 */
export interface MembershipIssueAwards {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof MembershipIssueAwards
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MembershipIssueAwards
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof MembershipIssueAwards
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof MembershipIssueAwards
     */
    links?: Array<InstanceLink>;
    /**
     * List of Member Awards information.
     * @type {Array<MembershipAwardListType>}
     * @memberof MembershipIssueAwards
     */
    membershipAwardsList?: Array<MembershipAwardListType>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof MembershipIssueAwards
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof MembershipIssueAwards
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MembershipIssueAwards
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipIssueAwards
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the MembershipIssueAwards interface.
 */
export declare function instanceOfMembershipIssueAwards(value: object): boolean;
export declare function MembershipIssueAwardsFromJSON(json: any): MembershipIssueAwards;
export declare function MembershipIssueAwardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipIssueAwards;
export declare function MembershipIssueAwardsToJSON(value?: MembershipIssueAwards | null): any;