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
import type { WarningType } from './WarningType';
/**
 * Request object to extend a member points to expire.
 * @export
 * @interface ExtendMemberPointsToExpire
 */
export interface ExtendMemberPointsToExpire {
    /**
     * Expiration date to be extended.
     * @type {string}
     * @memberof ExtendMemberPointsToExpire
     */
    expirationDate?: string;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ExtendMemberPointsToExpire
     */
    links?: Array<InstanceLink>;
    /**
     * Unique Membership ID.
     * @type {number}
     * @memberof ExtendMemberPointsToExpire
     */
    membershipId?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExtendMemberPointsToExpire
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ExtendMemberPointsToExpire interface.
 */
export declare function instanceOfExtendMemberPointsToExpire(value: object): boolean;
export declare function ExtendMemberPointsToExpireFromJSON(json: any): ExtendMemberPointsToExpire;
export declare function ExtendMemberPointsToExpireFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendMemberPointsToExpire;
export declare function ExtendMemberPointsToExpireToJSON(value?: ExtendMemberPointsToExpire | null): any;