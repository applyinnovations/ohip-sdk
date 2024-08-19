/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { MembershipTypeRuleIDType } from './MembershipTypeRuleIDType';
import type { WarningType } from './WarningType';
/**
 * Response object for creating membership type rules.
 * @export
 * @interface MembershipTypeRulesDetails
 */
export interface MembershipTypeRulesDetails {
    /**
     * List of membership type rule ID's.
     * @type {Array<MembershipTypeRuleIDType>}
     * @memberof MembershipTypeRulesDetails
     */
    membershipTypeRules?: Array<MembershipTypeRuleIDType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof MembershipTypeRulesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipTypeRulesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the MembershipTypeRulesDetails interface.
 */
export declare function instanceOfMembershipTypeRulesDetails(value: object): boolean;
export declare function MembershipTypeRulesDetailsFromJSON(json: any): MembershipTypeRulesDetails;
export declare function MembershipTypeRulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRulesDetails;
export declare function MembershipTypeRulesDetailsToJSON(value?: MembershipTypeRulesDetails | null): any;
