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
import type { MembershipTypeRuleType } from './MembershipTypeRuleType';
import type { RuleAppliesOnType } from './RuleAppliesOnType';
/**
 * Membership Type Rule definition details.
 * @export
 * @interface MembershipTypeRuleDefinitionType
 */
export interface MembershipTypeRuleDefinitionType {
    /**
     * Rule code of the membership type rule.
     * @type {string}
     * @memberof MembershipTypeRuleDefinitionType
     */
    ruleCode?: string;
    /**
     *
     * @type {MembershipTypeRuleType}
     * @memberof MembershipTypeRuleDefinitionType
     */
    programType?: MembershipTypeRuleType;
    /**
     *
     * @type {RuleAppliesOnType}
     * @memberof MembershipTypeRuleDefinitionType
     */
    ruleAppliesOn?: RuleAppliesOnType;
    /**
     * Specifies total number of times program rule is eligible .
     * @type {number}
     * @memberof MembershipTypeRuleDefinitionType
     */
    noOfTimesEligible?: number;
    /**
     * This field will be used to store export label and will be used only for exporting purposes.
     * @type {string}
     * @memberof MembershipTypeRuleDefinitionType
     */
    ruleExportLabel?: string;
    /**
     * Date on which the rule will be expired.
     * @type {string}
     * @memberof MembershipTypeRuleDefinitionType
     */
    ruleExpirationDate?: string;
}
/**
 * Check if a given object implements the MembershipTypeRuleDefinitionType interface.
 */
export declare function instanceOfMembershipTypeRuleDefinitionType(value: object): boolean;
export declare function MembershipTypeRuleDefinitionTypeFromJSON(json: any): MembershipTypeRuleDefinitionType;
export declare function MembershipTypeRuleDefinitionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRuleDefinitionType;
export declare function MembershipTypeRuleDefinitionTypeToJSON(value?: MembershipTypeRuleDefinitionType | null): any;