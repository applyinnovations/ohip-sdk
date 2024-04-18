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
 * Membership Type Rules segmentation conditions.
 * @export
 * @interface MembershipTypeRuleSegmentationConditionsType
 */
export interface MembershipTypeRuleSegmentationConditionsType {
    /**
     * Market Code for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleSegmentationConditionsType
     */
    marketCode?: string;
    /**
     * Market group for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleSegmentationConditionsType
     */
    marketGroup?: string;
    /**
     * To specify the exclusion of market group while applying rule.
     * @type {boolean}
     * @memberof MembershipTypeRuleSegmentationConditionsType
     */
    excludeMarketGroup?: boolean;
}

/**
 * Check if a given object implements the MembershipTypeRuleSegmentationConditionsType interface.
 */
export function instanceOfMembershipTypeRuleSegmentationConditionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeRuleSegmentationConditionsTypeFromJSON(json: any): MembershipTypeRuleSegmentationConditionsType {
    return MembershipTypeRuleSegmentationConditionsTypeFromJSONTyped(json, false);
}

export function MembershipTypeRuleSegmentationConditionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRuleSegmentationConditionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'marketGroup': !exists(json, 'marketGroup') ? undefined : json['marketGroup'],
        'excludeMarketGroup': !exists(json, 'excludeMarketGroup') ? undefined : json['excludeMarketGroup'],
    };
}

export function MembershipTypeRuleSegmentationConditionsTypeToJSON(value?: MembershipTypeRuleSegmentationConditionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'marketCode': value.marketCode,
        'marketGroup': value.marketGroup,
        'excludeMarketGroup': value.excludeMarketGroup,
    };
}
