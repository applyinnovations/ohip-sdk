/* tslint:disable */
/* eslint-disable */
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


/**
 * Membership Type/Program rule types.
 * @export
 */
export const MembershipTypeRuleType = {
    All: 'All',
    Points: 'Points',
    Tier: 'Tier'
} as const;
export type MembershipTypeRuleType = typeof MembershipTypeRuleType[keyof typeof MembershipTypeRuleType];


export function MembershipTypeRuleTypeFromJSON(json: any): MembershipTypeRuleType {
    return MembershipTypeRuleTypeFromJSONTyped(json, false);
}

export function MembershipTypeRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRuleType {
    return json as MembershipTypeRuleType;
}

export function MembershipTypeRuleTypeToJSON(value?: MembershipTypeRuleType | null): any {
    return value as any;
}

