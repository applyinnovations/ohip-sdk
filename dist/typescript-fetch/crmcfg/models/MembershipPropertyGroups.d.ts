/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { MembershipPropertyGroupsType } from './MembershipPropertyGroupsType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing existing Membership Property Groups Configurations.
 * @export
 * @interface MembershipPropertyGroups
 */
export interface MembershipPropertyGroups {
    /**
     *
     * @type {Links}
     * @memberof MembershipPropertyGroups
     */
    links?: Links;
    /**
     *
     * @type {MembershipPropertyGroupsType}
     * @memberof MembershipPropertyGroups
     */
    membershipPropertyGroups?: MembershipPropertyGroupsType;
    /**
     *
     * @type {WarningsType}
     * @memberof MembershipPropertyGroups
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MembershipPropertyGroups interface.
 */
export declare function instanceOfMembershipPropertyGroups(value: object): boolean;
export declare function MembershipPropertyGroupsFromJSON(json: any): MembershipPropertyGroups;
export declare function MembershipPropertyGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipPropertyGroups;
export declare function MembershipPropertyGroupsToJSON(value?: MembershipPropertyGroups | null): any;
