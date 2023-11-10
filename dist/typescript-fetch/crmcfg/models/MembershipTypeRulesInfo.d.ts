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
import type { MembershipTypeRulesSummariesType } from './MembershipTypeRulesSummariesType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching membership type rules.
 * @export
 * @interface MembershipTypeRulesInfo
 */
export interface MembershipTypeRulesInfo {
    /**
     *
     * @type {Links}
     * @memberof MembershipTypeRulesInfo
     */
    links?: Links;
    /**
     *
     * @type {MembershipTypeRulesSummariesType}
     * @memberof MembershipTypeRulesInfo
     */
    membershipTypeRules?: MembershipTypeRulesSummariesType;
    /**
     *
     * @type {WarningsType}
     * @memberof MembershipTypeRulesInfo
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MembershipTypeRulesInfo interface.
 */
export declare function instanceOfMembershipTypeRulesInfo(value: object): boolean;
export declare function MembershipTypeRulesInfoFromJSON(json: any): MembershipTypeRulesInfo;
export declare function MembershipTypeRulesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRulesInfo;
export declare function MembershipTypeRulesInfoToJSON(value?: MembershipTypeRulesInfo | null): any;
