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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MembershipTypeRuleSummaryType } from './MembershipTypeRuleSummaryType';
import {
    MembershipTypeRuleSummaryTypeFromJSON,
    MembershipTypeRuleSummaryTypeFromJSONTyped,
    MembershipTypeRuleSummaryTypeToJSON,
} from './MembershipTypeRuleSummaryType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching membership type rules.
 * @export
 * @interface MembershipTypeRulesInfo
 */
export interface MembershipTypeRulesInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipTypeRulesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * List of Membership type rules summary information.
     * @type {Array<MembershipTypeRuleSummaryType>}
     * @memberof MembershipTypeRulesInfo
     */
    membershipTypeRules?: Array<MembershipTypeRuleSummaryType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipTypeRulesInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipTypeRulesInfo interface.
 */
export function instanceOfMembershipTypeRulesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeRulesInfoFromJSON(json: any): MembershipTypeRulesInfo {
    return MembershipTypeRulesInfoFromJSONTyped(json, false);
}

export function MembershipTypeRulesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRulesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'membershipTypeRules': !exists(json, 'membershipTypeRules') ? undefined : ((json['membershipTypeRules'] as Array<any>).map(MembershipTypeRuleSummaryTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipTypeRulesInfoToJSON(value?: MembershipTypeRulesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'membershipTypeRules': value.membershipTypeRules === undefined ? undefined : ((value.membershipTypeRules as Array<any>).map(MembershipTypeRuleSummaryTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

