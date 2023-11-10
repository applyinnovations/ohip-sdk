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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details about a membership like ProfileID, Card Number, Type, Level, etc.
 * @export
 * @interface MembershipDetailsType
 */
export interface MembershipDetailsType {
    /**
     * Membership card expiration date.
     * @type {Date}
     * @memberof MembershipDetailsType
     */
    cardExpirationDate?: Date;
    /**
     * Date when the member enrolled for the membership.
     * @type {Date}
     * @memberof MembershipDetailsType
     */
    joinedDate?: Date;
    /**
     * The card number associated with this membership.
     * @type {string}
     * @memberof MembershipDetailsType
     */
    membershipCardNo?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof MembershipDetailsType
     */
    membershipId?: UniqueIDType;
    /**
     * The current level of the membership.
     * @type {string}
     * @memberof MembershipDetailsType
     */
    membershipLevel?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof MembershipDetailsType
     */
    membershipType?: CodeDescriptionType;
    /**
     * The profile name associated with this membership.
     * @type {string}
     * @memberof MembershipDetailsType
     */
    name?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof MembershipDetailsType
     */
    profileId?: ProfileId;
}
/**
 * Check if a given object implements the MembershipDetailsType interface.
 */
export declare function instanceOfMembershipDetailsType(value: object): boolean;
export declare function MembershipDetailsTypeFromJSON(json: any): MembershipDetailsType;
export declare function MembershipDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipDetailsType;
export declare function MembershipDetailsTypeToJSON(value?: MembershipDetailsType | null): any;
