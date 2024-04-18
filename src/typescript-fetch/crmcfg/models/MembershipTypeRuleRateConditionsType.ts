/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Membership Type Rules rate Conditions.
 * @export
 * @interface MembershipTypeRuleRateConditionsType
 */
export interface MembershipTypeRuleRateConditionsType {
    /**
     * Rate code for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    rateCode?: string;
    /**
     * Rate group for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    rateGroup?: string;
    /**
     * Revenue group for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    revenueGroup?: string;
    /**
     * Average rate amount of the reservations for which rule will be applied.
     * @type {number}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    averageRateAmount?: number;
    /**
     * Minimum revenue on which rule will be applied.
     * @type {number}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    minimumRevenue?: number;
    /**
     * Transaction group for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    transactionGroup?: string;
    /**
     * Points ratio is expressed in terms of %.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    qualifyingRates?: boolean;
    /**
     * To specify the exclusion of rate group.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    excludeRateGroup?: boolean;
    /**
     * To specify the exclusion of revenue group while applying rule.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    excludeRevenueGroup?: boolean;
    /**
     * To specify the inclusion of Transaction group.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    includeTransactionGroup?: boolean;
    /**
     * Points Calculation will be based on all rate codes when specify All Membership Rates.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    allMembershipRates?: boolean;
    /**
     * Points Calculation will be based on all transaction codes when specify All Membership Transactions.
     * @type {boolean}
     * @memberof MembershipTypeRuleRateConditionsType
     */
    allMembershipTrx?: boolean;
}

/**
 * Check if a given object implements the MembershipTypeRuleRateConditionsType interface.
 */
export function instanceOfMembershipTypeRuleRateConditionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeRuleRateConditionsTypeFromJSON(json: any): MembershipTypeRuleRateConditionsType {
    return MembershipTypeRuleRateConditionsTypeFromJSONTyped(json, false);
}

export function MembershipTypeRuleRateConditionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRuleRateConditionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'rateGroup': !exists(json, 'rateGroup') ? undefined : json['rateGroup'],
        'revenueGroup': !exists(json, 'revenueGroup') ? undefined : json['revenueGroup'],
        'averageRateAmount': !exists(json, 'averageRateAmount') ? undefined : json['averageRateAmount'],
        'minimumRevenue': !exists(json, 'minimumRevenue') ? undefined : json['minimumRevenue'],
        'transactionGroup': !exists(json, 'transactionGroup') ? undefined : json['transactionGroup'],
        'qualifyingRates': !exists(json, 'qualifyingRates') ? undefined : json['qualifyingRates'],
        'excludeRateGroup': !exists(json, 'excludeRateGroup') ? undefined : json['excludeRateGroup'],
        'excludeRevenueGroup': !exists(json, 'excludeRevenueGroup') ? undefined : json['excludeRevenueGroup'],
        'includeTransactionGroup': !exists(json, 'includeTransactionGroup') ? undefined : json['includeTransactionGroup'],
        'allMembershipRates': !exists(json, 'allMembershipRates') ? undefined : json['allMembershipRates'],
        'allMembershipTrx': !exists(json, 'allMembershipTrx') ? undefined : json['allMembershipTrx'],
    };
}

export function MembershipTypeRuleRateConditionsTypeToJSON(value?: MembershipTypeRuleRateConditionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rateCode': value.rateCode,
        'rateGroup': value.rateGroup,
        'revenueGroup': value.revenueGroup,
        'averageRateAmount': value.averageRateAmount,
        'minimumRevenue': value.minimumRevenue,
        'transactionGroup': value.transactionGroup,
        'qualifyingRates': value.qualifyingRates,
        'excludeRateGroup': value.excludeRateGroup,
        'excludeRevenueGroup': value.excludeRevenueGroup,
        'includeTransactionGroup': value.includeTransactionGroup,
        'allMembershipRates': value.allMembershipRates,
        'allMembershipTrx': value.allMembershipTrx,
    };
}
