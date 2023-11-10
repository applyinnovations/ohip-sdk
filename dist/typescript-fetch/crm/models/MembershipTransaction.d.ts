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
import type { Links } from './Links';
import type { MembershipTransactionType } from './MembershipTransactionType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching a membership transaction.
 * @export
 * @interface MembershipTransaction
 */
export interface MembershipTransaction {
    /**
     *
     * @type {Links}
     * @memberof MembershipTransaction
     */
    links?: Links;
    /**
     *
     * @type {MembershipTransactionType}
     * @memberof MembershipTransaction
     */
    membershipTransactionDetails?: MembershipTransactionType;
    /**
     *
     * @type {WarningsType}
     * @memberof MembershipTransaction
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MembershipTransaction interface.
 */
export declare function instanceOfMembershipTransaction(value: object): boolean;
export declare function MembershipTransactionFromJSON(json: any): MembershipTransaction;
export declare function MembershipTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransaction;
export declare function MembershipTransactionToJSON(value?: MembershipTransaction | null): any;
